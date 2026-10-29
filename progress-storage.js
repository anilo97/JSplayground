/* JS Playground: 학번·소단원별 작성 코드/진행/완료 화면 자동 저장.
   각 단원 index.html에서 기존 script.js 다음에 불러옵니다. */
(() => {
  'use strict';
  if (typeof problems === 'undefined' || typeof render !== 'function' ||
      typeof complete !== 'function' || typeof submit !== 'function') return;

  const editor = document.getElementById('codeInput');
  const submitButton = document.getElementById('submitButton');
  const originalRender = render;
  const originalSubmit = submit;
  const uiStyle = document.createElement('style');
  uiStyle.textContent = '\n/* Compact lesson header and consistent editor controls */\nheader { min-height:64px; padding:10px clamp(18px,3vw,36px); gap:16px; }\nheader > div { display:flex; align-items:center; gap:12px; min-width:0; }\nheader h1 { margin:0; font-size:1.18rem; line-height:1.35; }\nheader .eyebrow { font-size:.63rem; letter-spacing:.08em; white-space:nowrap; }\nheader > p { margin:0; flex-shrink:0; font-size:.85rem; white-space:nowrap; }\nheader .learner { margin-right:12px; padding-right:12px; font-size:.82rem; }\n.progress { height:3px; }\nmain { width:min(1180px,calc(100% - 36px)); margin:18px auto; gap:18px; }\n.problem-card { padding:22px; }\n.problem-card h2 { font-size:1.28rem; margin:12px 0; }\n.conditions { margin-top:18px; padding-top:16px; }\n.teacher-bar { margin:12px auto 0; padding:8px 12px; }\n.editor-title { height:46px; padding:0 16px; }\n.editor-title h3 { font-size:.92rem; }\n.editor-title button { font-size:.8rem; }\n.answer-card .save-notice { margin:0!important; padding:9px 16px!important; display:flex; flex-wrap:wrap; align-items:center; gap:3px 10px; border-bottom:1px solid var(--line,#dbe2ec); background:#f8fafc; font-family:inherit; font-size:12px!important; line-height:1.5!important; }\n.save-notice .save-status { font-size:12px; white-space:nowrap; }\n.save-notice .save-help { margin-top:0!important; font-size:11px; color:#64748b; }\n.answer-card .practice-navigation { margin:0!important; padding:10px 16px; gap:8px!important; border-top:1px solid var(--line,#dbe2ec); background:#fff; }\n.practice-navigation button { padding:7px 11px!important; font:inherit; font-size:12px; font-weight:600; line-height:1.4; transition:background .15s; }\n.practice-navigation button:hover:not(:disabled) { background:#f1f5f9!important; border-color:#94a3b8!important; }\n.practice-navigation button:disabled { opacity:.4; cursor:not-allowed!important; }\n.practice-navigation .solved-label { margin-left:auto; color:#64748b; font-size:12px; white-space:nowrap; }\n.actions { min-height:60px; padding:10px 16px; }\n.actions > button { padding:10px 16px; font-size:.85rem; white-space:nowrap; }\n.actions p { font-size:.82rem; }\n@media(max-width:820px) { main { margin:14px auto; gap:14px; } }\n@media(max-width:560px) {\n header { min-height:60px; padding:10px 16px; gap:8px; }\n header > div { display:block; }\n header .eyebrow { display:none; }\n header h1 { font-size:1rem; }\n header > p { font-size:.75rem; }\n header .learner { margin-right:6px; padding-right:6px; font-size:.72rem; }\n main { width:calc(100% - 24px); }\n .problem-card { padding:18px; }\n .answer-card .save-notice { padding:8px 14px!important; }\n .save-notice .save-help { flex-basis:100%; }\n}\n';
  uiStyle.textContent += '\n.answer-card { overflow:visible; }\n.answer-card .editor-title { position:sticky; top:0; z-index:10; min-height:48px; height:auto; padding:7px 14px; gap:16px; background:#fff; border-radius:12px 12px 0 0; box-shadow:0 2px 5px rgba(23,32,51,.04); }\n.editor-heading-group { display:flex; align-items:center; gap:14px; min-width:0; }\n.editor-heading-group h3 { white-space:nowrap; }\n.editor-title #resetButton { padding:6px 8px; min-height:32px; font-size:12px; white-space:nowrap; color:#64748b; border-radius:5px; }\n.editor-title #resetButton:hover { background:#f1f5f9; }\n.editor-title #resetButton:focus-visible, .practice-navigation button:focus-visible { outline:2px solid #38bdf8; outline-offset:2px; }\n.answer-card .editor-title .practice-navigation { flex:0 0 auto; margin:0!important; padding:0!important; border:0; background:transparent; flex-wrap:nowrap!important; gap:6px!important; }\n.editor-title .practice-navigation button { min-height:34px; border:1px solid #cbd5e1!important; border-radius:6px; }\n.nav-short { display:none; }\n.answer-card .actions { border-radius:0 0 12px 12px; }\n@media(max-width:560px) {\n .answer-card .editor-title { padding:7px 10px; gap:12px; }\n .editor-heading-group { gap:8px; }\n .editor-heading-group h3 { font-size:13px; }\n .editor-title #resetButton { padding:6px 4px; font-size:11px; }\n .nav-long { display:none; }\n .nav-short { display:inline; }\n .editor-title .practice-navigation button { padding:7px 9px!important; }\n}\n';
  document.head.appendChild(uiStyle);
  const count = problems.length;
  const categoryKey = new URLSearchParams(location.search).get('category') || 'default';
  const moduleKey = location.pathname.replace(/\/index\.html$/, '/').replace(/\/$/, '') + ':' + categoryKey;
  const fingerprintText = JSON.stringify(problems.map(p => [p.title, p.starter, p.output, p.conditions]));
  let hash = 2166136261;
  for (let i = 0; i < fingerprintText.length; i++) {
    hash = Math.imul(hash ^ fingerprintText.charCodeAt(i), 16777619) >>> 0;
  }
  let key = null;
  let state = null;
  let teacherMode = false;
  let displayed = null;
  let busy = false;
  let sessionGeneration = 0;
  let storageFailed = false;
  let savedSuccessfully = false;
  let teacherCompleted = false;
  const notice = document.createElement('p');
  notice.className = 'save-notice';
  notice.setAttribute('role', 'status');
  notice.style.cssText = 'margin:8px 0 12px;color:#64748b;font-size:13px;line-height:1.6;';
  const statusLine = document.createElement('span');
  statusLine.className = 'save-status';
  statusLine.style.cssText = 'display:flex;align-items:center;gap:6px;font-weight:600;';
  const statusDot = document.createElement('span');
  statusDot.setAttribute('aria-hidden', 'true');
  statusDot.style.cssText = 'width:7px;height:7px;flex:0 0 7px;border-radius:50%;background:#94a3b8;';
  const statusText = document.createElement('span');
  const helpText = document.createElement('span');
  helpText.className = 'save-help';
  helpText.style.cssText = 'display:block;margin-top:2px;font-weight:400;';
  statusLine.appendChild(statusDot);
  statusLine.appendChild(statusText);
  notice.appendChild(statusLine);
  notice.appendChild(helpText);
  const editorSection = editor.closest('section');
  const editorTitle = editorSection.querySelector('.editor-title');
  if (editorTitle) editorTitle.after(notice);
  else editorSection.insertBefore(notice, editorSection.firstChild);

  const navigation = document.createElement('div');
  navigation.className = 'practice-navigation';
  navigation.style.cssText = 'display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin:10px 0;';
  const previousButton = document.createElement('button');
  const nextButton = document.createElement('button');
  previousButton.type = nextButton.type = 'button';
  previousButton.innerHTML = '‹ <span class="nav-long">이전 문제</span><span class="nav-short">이전</span>';
  previousButton.setAttribute('aria-label', '이전 문제');
  nextButton.textContent = '다음 문제';
  [previousButton, nextButton].forEach(button => {
    button.style.cssText = 'padding:8px 12px;border:1px solid #cbd5e1;border-radius:6px;background:white;color:#17223b;cursor:pointer;';
    navigation.appendChild(button);
  });
  const solvedLabel = document.createElement('span');
  solvedLabel.className = 'solved-label';
  // 진행 표시는 상단만 사용합니다. 해결 개수는 내부 기록으로만 유지합니다.
  if (editorTitle) {
    const headingGroup = document.createElement('div');
    headingGroup.className = 'editor-heading-group';
    const heading = editorTitle.querySelector('h3');
    const reset = document.getElementById('resetButton');
    if (heading) headingGroup.appendChild(heading);
    reset.textContent = '↺ 초기화';
    reset.setAttribute('aria-label', '현재 소단원 전체 초기화');
    reset.title = '현재 소단원의 모든 답안과 풀이 기록 초기화';
    headingGroup.appendChild(reset);
    editorTitle.appendChild(headingGroup);
    editorTitle.appendChild(navigation);
  } else { editorSection.insertBefore(navigation, editorSection.firstChild); }

  function freshState() {
    return {version:1, drafts:{}, checkedDrafts:{}, solved:Array(count).fill(false), current:0, completion:null};
  }
  function eligible() { return key && state && !teacherMode; }
  function allSolved() { return Boolean(state && state.solved.every(Boolean)); }
  function updateNotice() {
    statusText.textContent = storageFailed ? '저장할 수 없음' :
      teacherMode ? '교사용 모드' : savedSuccessfully ? '자동 저장됨' :
      key ? '자동 저장 대기' : '학번 확인 대기';
    statusDot.style.background = storageFailed ? '#dc2626' :
      teacherMode || !savedSuccessfully ? '#94a3b8' : '#16a34a';
    helpText.textContent = storageFailed ? '창을 닫기 전에 작성 코드를 복사해 주세요.' :
      teacherMode ? '교사용 탐색은 학생의 풀이 기록에 저장되지 않습니다.' :
      '같은 컴퓨터·브라우저에서 다시 접속하면 이어서 풀 수 있습니다.';
    navigation.hidden = teacherMode || !key;
    previousButton.disabled = busy || current <= 0;
    const isLast = current === count - 1;
    nextButton.disabled = busy || !state || !state.solved[current] || (isLast && !allSolved());
    nextButton.innerHTML = isLast ? '<span class="nav-long">완료 화면</span><span class="nav-short">완료</span> ›' : '<span class="nav-long">다음 문제</span><span class="nav-short">다음</span> ›';
    nextButton.setAttribute('aria-label', isLast ? '완료 화면 보기' : '다음 문제');
    solvedLabel.textContent = state ? `해결 ${state.solved.filter(Boolean).length} / ${count}` : '';
  }
  function writeState() {
    if (!eligible()) return;
    try { localStorage.setItem(key, JSON.stringify(state)); storageFailed = false; savedSuccessfully = true; }
    catch (_) { storageFailed = true; }
    updateNotice();
  }
  function captureDraft() {
    if (!eligible() || displayed === null || displayed >= count) return;
    const changed = state.drafts[displayed] !== editor.value;
    state.drafts[displayed] = editor.value;
    // 정답 기록은 채점한 코드에만 유효합니다. 수정된 코드는 다시 채점해야 합니다.
    if (state.solved[displayed] && state.checkedDrafts[displayed] !== editor.value) {
      state.solved[displayed] = false;
      delete state.checkedDrafts[displayed];
      state.completion = null;
      document.getElementById('completion').hidden = true;
    }
    if (changed) message('코드를 수정했습니다. 정답 확인을 다시 눌러 주세요.', false);
    writeState();
  }
  function loadState() {
    state = freshState();
    try {
      const saved = JSON.parse(localStorage.getItem(key) || 'null');
      if (saved && saved.version === 1 && saved.drafts && typeof saved.drafts === 'object' &&
          Array.isArray(saved.solved) && saved.solved.length === count && saved.solved.every(v => typeof v === 'boolean')) {
        state.drafts = Object.fromEntries(Object.entries(saved.drafts).filter(([i,v]) =>
          /^\d+$/.test(i) && Number(i)<count && typeof v === 'string'));
        state.solved = saved.solved.slice();
        for (let i = 0; i < count; i++) {
          if (!state.solved[i]) continue;
          // 기존 저장 형식도 유지합니다. 새 형식은 채점 답안과 저장 답안을 비교합니다.
          const checked = saved.checkedDrafts && typeof saved.checkedDrafts === 'object'
            ? saved.checkedDrafts[i] : state.drafts[i];
          if (typeof checked === 'string' && checked === state.drafts[i]) state.checkedDrafts[i] = checked;
          else state.solved[i] = false;
        }
        const firstUnsolved = state.solved.indexOf(false);
        const unlocked = firstUnsolved === -1 ? count - 1 : firstUnsolved;
        // 예전 완료 기록의 current=count도 마지막 문제의 실제 배열 번호로 복원합니다.
        state.current = Number.isInteger(saved.current) ? Math.max(0,Math.min(saved.current,unlocked)) : unlocked;
        if (allSolved() && saved.completion &&
            typeof saved.completion.code === 'string' && saved.completion.code &&
            typeof saved.completion.at === 'string' && Number.isFinite(Date.parse(saved.completion.at))) {
          state.completion = saved.completion;
        }
      }
    } catch (_) { /* 손상된 데이터는 이 소단원만 새 상태로 시작합니다. */ }
  }
  function ensureCompletion() {
    if (!state.completion) {
      const prefix = typeof unit !== 'undefined' ? unit.prefix : moduleKey.split('/').pop().toUpperCase();
      const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
      let suffix = '';
      const random = new Uint32Array(4);
      crypto.getRandomValues(random);
      for (const n of random) suffix += chars[n % chars.length];
      state.completion = {at:new Date().toISOString(), code:`${prefix}-${suffix}`};
    }
  }
  function showCompletion() {
    const panel = document.getElementById('completion');
    const show = current === count - 1 && (teacherMode ? teacherCompleted : eligible() && allSolved());
    panel.hidden = !show;
    document.getElementById('practice').hidden = false;
    if (!show) return;
    ensureCompletion();
    const setText = (id, text) => { const node = document.getElementById(id); if (node) node.textContent = text; };
    setText('completeTitle', `${typeof unit !== 'undefined' ? unit.title : '문제 풀이'} 완료`);
    setText('completeStudent', studentNumber);
    setText('completeCount', count);
    setText('completedAt', new Intl.DateTimeFormat('ko-KR',
      {dateStyle:'medium',timeStyle:'short'}).format(new Date(state.completion.at)));
    setText('completionCode', state.completion.code);
    document.getElementById('watermark').replaceChildren(...Array.from({length:20}, () => {
      const span = document.createElement('span'); span.textContent = studentNumber; return span;
    }));
  }
  render = function () {
    captureDraft();
    current = Math.max(0, Math.min(current, count - 1));
    originalRender();
    displayed = current;
    if (eligible()) {
      if (typeof state.drafts[current] === 'string') editor.value = state.drafts[current];
      state.current = current;
      if (typeof lines === 'function') lines();
    }
    showCompletion();
    writeState();
    updateNotice();
  };
  complete = function () {
    // 문제 화면을 교체하지 않고 마지막 풀이 아래에 완료 기록을 함께 표시합니다.
    if (current !== count - 1 || displayed !== current) {
      current = count - 1;
      render();
    }
    captureDraft();
    showCompletion();
    if (eligible()) { state.current = current; writeState(); }
    updateNotice();
  };

  submit = async function () {
    if (busy || !state || current < 0 || current >= count) return;
    const index = current;
    const generation = sessionGeneration;
    const code = editor.value;
    captureDraft();
    if (!code.trim()) { message('코드를 작성한 후 확인하세요.', false); return; }
    busy = true;
    submitButton.disabled = true;
    updateNotice();
    let correct = false;
    try {
      correct = await (typeof valid === 'function' ? valid(code,problems[index]) : problems[index].validate(code));
    } catch (_) { correct = false; }
    if (generation !== sessionGeneration) return;
    if (current !== index || editor.value !== code) {
      busy = false;
      submitButton.disabled = false;
      captureDraft();
      message('채점 중 코드가 변경되었습니다. 정답 확인을 다시 눌러 주세요.', false);
      updateNotice();
      return;
    }
    if (!correct) {
      if (eligible()) {
        state.solved[index] = false;
        delete state.checkedDrafts[index];
        state.completion = null;
        writeState();
      }
      teacherCompleted = false;
      showCompletion();
      busy = false;
      submitButton.disabled = false;
      message('출력 결과와 작성 조건을 확인하세요. 오류 또는 실행 시간 초과도 확인해 주세요.', false);
      updateNotice();
      return;
    }
    if (eligible()) {
      state.drafts[index] = code;
      state.checkedDrafts[index] = code;
      state.solved[index] = true;
      state.current = index;
      if (allSolved()) ensureCompletion();
      writeState();
    }
    if (index === count - 1) {
      teacherCompleted = teacherMode;
      busy = false;
      submitButton.disabled = false;
      message(teacherMode || allSolved() ? '정답입니다! 이 소단원의 모든 문제를 해결했습니다.' :
        '정답입니다! 앞쪽의 미해결 문제도 정답 확인을 눌러 주세요.', true);
      complete();
      return;
    }
    message('정답입니다! 다음 문제로 이동합니다.', true);
    setTimeout(() => {
      if (generation !== sessionGeneration) return;
      busy = false;
      submitButton.disabled = false;
      if (current !== index || editor.value !== code) {
        captureDraft();
        message('코드를 수정했습니다. 정답 확인을 다시 눌러 주세요.', false);
        updateNotice();
        return;
      }
      current = index + 1;
      render();
    },650);
  };
  submitButton.removeEventListener('click', originalSubmit);
  submitButton.addEventListener('click', submit);

  editor.addEventListener('input', () => {
    if (teacherMode) { teacherCompleted = false; showCompletion(); }
    captureDraft();
  });
  editor.addEventListener('keydown', event => {
    // 기존 Tab 처리로 삽입된 공백도 즉시 저장합니다.
    if (event.key === 'Tab') {
      if (teacherMode) { teacherCompleted = false; showCompletion(); }
      captureDraft();
    }
  });
  window.addEventListener('pagehide', captureDraft);
  document.addEventListener('visibilitychange', () => { if (document.hidden) captureDraft(); });

  function resetUnit(event) {
    event.stopImmediatePropagation();
    if (!state || busy) return;
    if (!confirm('현재 소단원의 모든 작성 코드와 풀이·완료 기록을 초기화하고 1번부터 다시 풀까요?')) return;
    // 학번·소단원별 현재 키만 새 상태로 저장합니다. 다른 소단원은 건드리지 않습니다.
    sessionGeneration++;
    state = freshState();
    teacherCompleted = false;
    displayed = null;
    current = 0;
    submitButton.disabled = false;
    render();
    message('현재 소단원을 초기화했습니다. 1번 문제부터 다시 풀어 주세요.', true);
  }
  document.getElementById('resetButton').addEventListener('click', resetUnit, true);
  document.getElementById('restartButton').textContent = '이 소단원 초기화';
  document.getElementById('restartButton').addEventListener('click', resetUnit, true);
  previousButton.addEventListener('click', () => { if (!busy && current>0) { current--; render(); } });
  nextButton.addEventListener('click', () => {
    if (busy || !state || !state.solved[current]) return;
    if (current < count-1) { current++; render(); }
    else if (allSolved()) { complete(); }
  });
  ['teacherPrev','teacherNext'].forEach(id => {
    document.getElementById(id).addEventListener('click', event => {
      if (busy) { event.stopImmediatePropagation(); return; }
      captureDraft();
    },true);
  });
  window.addEventListener('message', event => {
    if (event.source !== parent || event.origin !== location.origin || event.data?.type !== 'session-context') return;
    const number = String(event.data.studentNumber || '');
    if (!/^\d{4}$/.test(number)) return;
    const nextKey = `jsplayground:progress:v1:${number}:${moduleKey}:${hash.toString(16)}`;
    const nextTeacherMode = Boolean(event.data.teacherMode);
    if (key === nextKey && teacherMode === nextTeacherMode) return;
    captureDraft();
    sessionGeneration++;
    busy = false;
    submitButton.disabled = false;
    teacherMode = nextTeacherMode;
    teacherCompleted = false;
    key = nextKey;
    savedSuccessfully = false;
    storageFailed = false;
    displayed = null;
    loadState();
    current = teacherMode ? 0 : state.current;
    // 재접속은 마지막 위치 복원만 수행하며, 초기화나 대화상자를 실행하지 않습니다.
    render();
    updateNotice();
  });
  updateNotice();
})();
