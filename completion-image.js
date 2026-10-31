// 공통 완료 이미지 저장: 문제/채점/진행도 코드는 변경하지 않습니다.
(() => {
  'use strict';
  const panel = document.getElementById('completion');
  if (!panel || panel.dataset.imageExportInstalled) return;
  panel.dataset.imageExportInstalled = 'true';
  const actions = document.createElement('div');
  actions.className = 'completion-export-actions';
  const save = document.createElement('button');
  save.type = 'button'; save.textContent = '완료 이미지 저장';
  const status = document.createElement('p');
  status.setAttribute('role', 'status');
  actions.append(save, status);
  panel.querySelector('.completion-content').append(actions);
  const style = document.createElement('style');
  style.textContent = '.completion-export-actions{display:flex;flex-direction:column;gap:10px;align-items:center;margin-top:16px}.completion-export-actions button{font-size:13px}.completion-export-actions p{margin:0;color:#64748b;font-size:12px;overflow-wrap:anywhere}';
  document.head.appendChild(style);
  let folder = null;
  const field = id => {
    const node = document.getElementById(id);
    if (node) return node.textContent.trim();
    if (id === 'completeTitle') return panel.querySelector('h2')?.textContent.trim() || '문제 풀이 완료';
    if (id === 'completeCount') return typeof problems !== 'undefined' ? String(problems.length) : '';
    return '';
  };
  const unitName = () => field('completeTitle').replace(/\s*완료$/, '').trim();
  const isReady = () => !panel.hidden && /^\d{4}$/.test(field('completeStudent')) && field('completionCode');
  function filename() {return `JSplayground_${unitName().replace(/[\\/:*?"<>|]/g, "_")}_${field('completeStudent')}_${field('completionCode')}.png`;}
  async function makeImage() {
    if (!isReady()) throw new Error('전체 문제를 완료한 뒤 사용할 수 있습니다.');
    await document.fonts?.ready;
    const canvas = document.createElement('canvas');
    canvas.width = 1200; canvas.height = 820;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#f1f5f9'; ctx.fillRect(0,0,1200,820);
    ctx.fillStyle = '#fff'; ctx.fillRect(40,40,1120,740);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#334155'; ctx.font = 'bold 34px sans-serif';
    ctx.fillText('JS Playground',600,115);
    ctx.font = 'bold 46px sans-serif'; ctx.fillText(field('completeTitle'),600,205);
    ctx.fillStyle = '#0284c7'; ctx.font = 'bold 76px sans-serif';
    ctx.fillText(`학번 ${field('completeStudent')}`,600,325);
    ctx.fillStyle = '#334155';ctx.font = '32px sans-serif';
    ctx.fillText(`${field('completeCount')}개의 문제를 모두 해결했습니다.`,600,405);
    ctx.fillStyle = '#f8fafc';ctx.fillRect(140,460,920,190);
    ctx.fillStyle = '#475569';ctx.font = '27px sans-serif';
    ctx.fillText(`완료 시각: ${field('completedAt')}`,600,525);
    ctx.font = 'bold 30px sans-serif';ctx.fillText(`완료 코드: ${field('completionCode')}`,600,595);
    ctx.fillStyle = '#64748b';ctx.font = '23px sans-serif';ctx.fillText(`${unitName()} · 완료 확인`,600,715);
    return new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error('이미지를 만들지 못했습니다.')),'image/png'));
  }
  async function writeFolder(blob) {
    const file = await folder.getFileHandle(filename(),{create:true});
    const stream = await file.createWritable();
    try { await stream.write(blob); await stream.close(); }
    catch(error) { try {await stream.abort();} catch(_) {} throw error; }
  }

  save.addEventListener('click',async()=>{
    if(!isReady())return;
    save.disabled=true;status.textContent='';
    try {
      // 폴더 선택은 버튼 클릭 직후 실행합니다.
      if(typeof window.showDirectoryPicker==='function') {
        folder=await window.showDirectoryPicker({id:'jsplayground-completion',mode:'readwrite',startIn:'pictures'});
        const blob=await makeImage();
        await writeFolder(blob);
        status.textContent=`선택한 폴더에 저장했습니다: ${filename()}`;
      } else {
        const blob=await makeImage();
        const url=URL.createObjectURL(blob),link=document.createElement('a');
        link.href=url;link.download=filename();document.body.appendChild(link);link.click();link.remove();
        setTimeout(()=>URL.revokeObjectURL(url),30000);
        status.textContent='PNG 다운로드를 요청했습니다. 브라우저의 다운로드 위치를 확인하세요.';
      }
    } catch(error) {
      status.textContent=error.name==='AbortError'?'저장을 취소했습니다.':error.name==='NotAllowedError'?'선택한 폴더에 저장할 권한이 없습니다. 다시 눌러 폴더를 선택해 주세요.':'이미지를 저장하지 못했습니다. 다시 시도해 주세요.';
    } finally {save.disabled=false;}
  });
})();
