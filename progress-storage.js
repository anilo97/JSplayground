/* JS Playground: 학번·소단원별 작성 코드/진행/완료 화면 자동 저장.
   각 단원 index.html에서 기존 script.js 다음에 불러옵니다. */
(() => {
  'use strict';
  if (typeof problems === 'undefined' || typeof render !== 'function' ||
      typeof complete !== 'function' || typeof submit !== 'function') return;

  const editor = document.getElementById('codeInput');
  const submitButton = document.getElementById('submitButton');
  const originalRender = render;
  const originalComplete = complete;
  const originalSubmit = submit;
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
  const notice = document.createElement('p');
  notice.setAttribute('role', 'status');
  notice.style.cssText = 'margin:8px 0 12px;color:#64748b;font-size:13px;line-height:1.6;';
  const statusLine = document.createElement('span');
  statusLine.style.cssText = 'display:flex;align-items:center;gap:6px;font-weight:600;';
  const statusDot = document.createElement('span');
  statusDot.setAttribute('aria-hidden', 'true');
  statusDot.style.cssText = 'width:7px;height:7px;flex:0 0 7px;border-radius:50%;background:#94a3b8;';
  const statusText = document.createElement('span');
  const helpText = document.createElement('span');
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
  navigation.style.cssText = 'display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin:10px 0;';
  const previousButton = document.createElement('button');
  const nextButton = document.createElement('button');
  previousButton.type = nextButton.type = 'button';
  previousButton.textContent = '이전 문제';
  nextButton.textContent = '다음 문제';
  [previousButton, nextButton].forEach(button => {
    button.style.cssText = 'padding:8px 12px;border:1px solid #cbd5e1;border-radius:6px;background:white;color:#17223b;cursor:pointer;';
    navigation.appendChild(button);
  });
  const solvedLabel = document.createElement('span');
  navigation.appendChild(solvedLabel);
  editorSection.appendChild(navigation);

  function freshState() {
    return {version:1, drafts:{}, solved:Array(count).fill(false), current:0, completion:null};
  }
  function eligible() { return key && state && !teacherMode; }
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
    nextButton.disabled = busy || !state || !state.solved[current];
    nextButton.textContent = current === count - 1 ? '완료 화면 보기' : '다음 문제';
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
    state.drafts[displayed] = editor.value;
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
        state.solved = saved.solved;
        const firstUnsolved = state.solved.indexOf(false);
        const unlocked = firstUnsolved === -1 ? count - 1 : firstUnsolved;
        state.current = Number.isInteger(saved.current) ? Math.max(0,Math.min(saved.current,unlocked)) : unlocked;
        if (state.solved.every(Boolean) && saved.completion &&
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
  render = function () {
    captureDraft();
    originalRender();
    displayed = current;
    if (eligible()) {
      if (typeof state.drafts[current] === 'string') editor.value = state.drafts[current];
      state.current = current;
      writeState();
      if (typeof lines === 'function') lines();
    }
    updateNotice();
  };
  complete = function () {
    captureDraft();
    originalComplete();
    displayed = null;
    if (eligible() && state.solved.every(Boolean)) {
      ensureCompletion();
      document.getElementById('completedAt').textContent = new Intl.DateTimeFormat('ko-KR',
        {dateStyle:'medium',timeStyle:'short'}).format(new Date(state.completion.at));
      document.getElementById('completionCode').textContent = state.completion.code;
      state.current = count;
      writeState();
    }
  };

  submit = async function () {
    if (busy || !state || current >= count) return;
    const index = current;
    const generation = sessionGeneration;
    const code = editor.value;
    if (!code.trim()) { message('코드를 작성한 후 확인하세요.', false); return; }
    captureDraft();
    busy = true;
    submitButton.disabled = true;
    updateNotice();
    let correct = false;
    try {
      correct = await (typeof valid === 'function' ? valid(code,problems[index]) : problems[index].validate(code));
    } catch (_) { correct = false; }
    if (generation !== sessionGeneration) return;
    if (!correct) {
      busy = false;
      submitButton.disabled = false;
      message('출력 결과와 작성 조건을 확인하세요. 오류 또는 실행 시간 초과도 확인해 주세요.', false);
      updateNotice();
      return;
    }
    if (eligible()) {
      state.drafts[index] = code;
      state.solved[index] = true;
      if (state.solved.every(Boolean)) {
        ensureCompletion();
        state.current = count;
      } else { state.current = Math.min(index + 1, count - 1); }
      writeState(); // 다음 문제로 넘어가기 전 새로고침해도 정답 처리 보존
    }
    message('정답입니다! 다음 문제로 이동합니다.', true);
    setTimeout(() => {
      if (generation !== sessionGeneration) return;
      busy = false;
      submitButton.disabled = false;
      if (!teacherMode && state.solved.every(Boolean)) {
        current = count;
        complete();
      } else if (index + 1 < count) {
        current = index + 1;
        render();
      } else if (teacherMode) { current = count; complete(); }
      else { current = state.solved.indexOf(false); render(); }
    },650);
  };
  submitButton.removeEventListener('click', originalSubmit);
  submitButton.addEventListener('click', submit);

  editor.addEventListener('input', captureDraft);
  editor.addEventListener('keydown', event => {
    // 기존 Tab 처리로 삽입된 공백도 즉시 저장합니다.
    if (event.key === 'Tab') captureDraft();
  });
  window.addEventListener('pagehide', captureDraft);
  document.addEventListener('visibilitychange', () => { if (document.hidden) captureDraft(); });
  document.getElementById('resetButton').addEventListener('click', event => {
    event.stopImmediatePropagation();
    if (busy || current >= count) return;
    if (!confirm('현재 문제의 작성 코드만 초기화할까요? 이미 해결한 기록은 유지됩니다.')) return;
    editor.value = problems[current].starter;
    captureDraft();
    if (typeof lines === 'function') lines();
    message('현재 문제의 코드만 초기화했습니다.',true);
  },true);
  document.getElementById('restartButton').addEventListener('click', event => {
    event.stopImmediatePropagation();
    if (!confirm('이 소단원의 작성 코드와 풀이·완료 기록을 모두 지우고 처음부터 시작할까요?')) return;
    if (eligible()) {
      try { localStorage.removeItem(key); } catch (_) { storageFailed = true; }
      state = freshState();
    }
    displayed = null;
    current = 0;
    render();
  },true);
  previousButton.addEventListener('click', () => { if (!busy && current>0) { current--; render(); } });
  nextButton.addEventListener('click', () => {
    if (busy || !state.solved[current]) return;
    if (current < count-1) { current++; render(); }
    else if (state.solved.every(Boolean)) { current=count; complete(); }
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
    key = nextKey;
    savedSuccessfully = false;
    storageFailed = false;
    displayed = null;
    loadState();
    current = teacherMode ? 0 : state.current;
    if (!teacherMode && state.solved.every(Boolean)) { current=count; complete(); }
    else { render(); }
    updateNotice();
  });
  updateNotice();
})();
