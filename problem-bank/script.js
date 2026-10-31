const category = "round1";
const unit = {
  "title": "문제은행 1회차",
  "prefix": "BANK1",
  "problems": [
    {
      "title": "동아리 이름과 인원 출력하기",
      "description": "동아리의 처음 인원은 12명입니다. 새 부원 3명이 가입한 뒤의 이름과 인원을 출력하세요.",
      "conditions": [
        "동아리 이름은 const로 선언한 clubName에 문자열 \"코딩탐험대\"로 저장하세요.",
        "처음 인원은 let으로 선언한 memberCount에 숫자 12로 저장하세요.",
        "memberCount의 값을 기존 값보다 3 증가시키세요.",
        "clubName과 최종 memberCount를 순서대로 출력하세요.",
        "console.log()로 출력 결과와 동일하게 한 줄씩 출력하세요. 결과를 그대로 적지 말고 지정된 변수를 이용하세요."
      ],
      "starter": "// 작성 조건에 맞게 코드를 작성하세요.\n",
      "output": "코딩탐험대\n15",
      "patterns": [
        "\\bconst\\s+clubName\\b",
        "\\blet\\s+memberCount\\b"
      ]
    },
    {
      "title": "상품 정보와 자료형 출력하기",
      "description": "상품의 이름, 가격, 판매 여부를 저장하고 자료형을 확인하세요.",
      "conditions": [
        "세 변수는 모두 const로 선언하세요.",
        "상품의 이름은 productName에 문자열 \"키링\"으로 저장하세요.",
        "상품의 가격은 price에 숫자 3500으로 저장하세요.",
        "상품의 판매 여부는 isAvailable에 불리언 true로 저장하세요. ",
        "productName의 값을 먼저 출력하세요. 이어서 typeof를 사용하여 productName, price, isAvailable의 자료형을 순서대로 출력하세요.",
        "console.log()로 출력 결과와 동일하게 한 줄씩 출력하세요. 결과를 그대로 적지 말고 지정된 변수를 이용하세요."
      ],
      "starter": "// 작성 조건에 맞게 코드를 작성하세요.\n",
      "output": "키링\nstring\nnumber\nboolean",
      "patterns": [
        "\\bconst\\s+productName\\b",
        "\\bconst\\s+price\\b",
        "\\bconst\\s+isAvailable\\b",
        "\\btypeof\\b"
      ]
    },
    {
      "title": "문구 구매 금액 계산하기",
      "description": "1800원인 공책 4권을 구입하고 전체 금액에서 쿠폰으로 1000원을 한 번 할인받습니다.",
      "conditions": [
        "공책 한 권의 가격 1800은 price에, 구매 수량 4는 quantity에, 쿠폰 금액 1000은 coupon에 저장하세요.",
        "가격과 수량을 곱한 전체 금액에서 쿠폰 금액을 빼고, payment 변수에 저장하세요.",
        "console.log()로 payment를 출력하세요. 결과를 그대로 적지 말고 지정된 변수를 이용하세요."
      ],
      "starter": "// 작성 조건에 맞게 코드를 작성하세요.\n",
      "output": "6200",
      "patterns": [
        "\\bpayment\\b",
        "\\*",
        "-"
      ]
    },
    {
      "title": "초를 분과 초로 바꾸기",
      "description": "185초를 분과 남은 초로 나누어 출력하세요.",
      "conditions": [
        "remainingSeconds를 선언하고 숫자 185를 저장하세요.",
        "remainingSeconds를 60으로 나눈 나머지를 구하고, seconds에 저장하세요.",
        "remainingSeconds에서 seconds를 빼세요.",
        "남은 remainingSeconds를 60으로 나누어 minutes에 저장하세요.",
        "minutes와 seconds를 순서대로 출력하세요. 함수, 조건문, 반복문은 사용하지 마세요.",
        "console.log()로 출력 결과와 동일하게 한 줄씩 출력하세요. 결과를 그대로 적지 말고 지정된 변수를 이용하세요."
      ],
      "starter": "// 작성 조건에 맞게 코드를 작성하세요.\n",
      "output": "3\n5",
      "patterns": [
        "%",
        "-=",
        "\\bminutes\\b"
      ]
    },
    {
      "title": "무료배송 여부 안내하기",
      "description": "주문 금액에 따라 배송 안내를 출력하세요.",
      "conditions": [
        "주문 금액 변수 orderAmount를 선언하고 28000을 저장하세요.",
        "if…else문을 사용하세요. 주문 금액이 30000원 이상이면 \"무료배송\", 그렇지 않으면 \"배송비 3000원\"을 출력하세요.",
        "console.log()로 출력 결과와 동일하게 한 줄씩 출력하세요. 결과를 그대로 적지 말고 지정된 변수를 이용하세요."
      ],
      "starter": "// 작성 조건에 맞게 코드를 작성하세요.\n",
      "output": "배송비 3000원",
      "patterns": [
        "\\bif\\s*\\(",
        "\\belse\\b"
      ]
    },
    {
      "title": "점수에 따라 등급 출력하기",
      "description": "점수를 확인하여 해당하는 등급을 하나만 출력하세요.",
      "conditions": [
        "점수를 나타내는 변수 score를 선언하고 83을 저장하세요. 점수는 0부터 100까지라고 가정합니다.",
        "if…else if…else문을 사용하고, 높은 점수 기준부터 차례대로 검사하세요. 앞 조건에 해당하지 않았을 때 다음 조건을 검사합니다.",
        "90~100점은 A, 80~89점은 B, 70~79점은 C, 0~69점은 D를 출력하세요.",
        "console.log()로 출력 결과와 동일하게 한 줄씩 출력하세요. 결과를 그대로 적지 말고 지정된 변수를 이용하세요."
      ],
      "starter": "// 작성 조건에 맞게 코드를 작성하세요.\n",
      "output": "B",
      "patterns": [
        "\\belse\\s+if\\s*\\("
      ]
    },
    {
      "title": "체험관 입장 가능 여부 판단하기",
      "description": "나이가 14세 이상 19세 이하이거나 보호자가 동행하면 입장 대상입니다. 단, 입장 대상이어도 예약이 없으면 입장할 수 없습니다.",
      "conditions": [
        "나이는 age에 숫자 12, 보호자 동행 여부는 hasGuardian에 불리언 true, 예약 여부는 hasReservation에 불리언 false를 저장하세요.",
        "&&, ||, 괄호를 사용하여 하나의 if 조건식으로 판단하세요. 중첩 조건문은 사용하지 마세요.",
        "입장할 수 있으면 \"입장 가능\", 그렇지 않으면 \"입장 불가\"를 출력하세요.",
        "console.log()로 출력 결과와 동일하게 한 줄씩 출력하세요. 결과를 그대로 적지 말고 지정된 변수를 이용하세요."
      ],
      "starter": "// 작성 조건에 맞게 코드를 작성하세요.\n",
      "output": "입장 불가",
      "patterns": [
        "&&",
        "\\|\\|",
        "\\bif\\s*\\("
      ]
    },
    {
      "title": "특정 번호를 제외하고 출력하기",
      "description": "참가 번호 1번부터 8번 중 취소된 4번을 제외하고 출력하세요.",
      "conditions": [
        "for문을 사용하고, let으로 선언한 반복 변수 number를 1부터 8까지 1씩 증가시키세요.",
        "number가 4이면 continue로 해당 회차의 출력을 건너뛰세요.",
        "반복문 안에서 number를 한 줄에 하나씩 출력하세요.",
        "console.log()로 출력 결과와 동일하게 한 줄씩 출력하세요. 결과를 그대로 적지 말고 지정된 변수를 이용하세요."
      ],
      "starter": "// 작성 조건에 맞게 코드를 작성하세요.\n",
      "output": "1\n2\n3\n5\n6\n7\n8",
      "patterns": [
        "\\bfor\\s*\\(",
        "\\bcontinue\\b"
      ]
    },
    {
      "title": "목표 금액을 모으면 저금 끝내기",
      "description": "매일 2000원씩 저금하여 모은 돈이 목표 금액 7000원 이상이 되면 저금을 끝내세요.",
      "conditions": [
        "let으로 모은 돈 money와 걸린 일수 days를 선언하고 각각 0으로 초기화하세요.",
        "while (true)를 사용하세요. 반복할 때마다 money를 2000 증가시키고 days를 1 증가시키세요.",
        "값을 증가시킨 뒤 money가 7000 이상이면 break로 반복을 종료하세요.",
        "반복문이 끝난 뒤 days와 money를 순서대로 출력하세요.",
        "console.log()로 출력 결과와 동일하게 한 줄씩 출력하세요. 결과를 그대로 적지 말고 지정된 변수를 이용하세요."
      ],
      "starter": "// 작성 조건에 맞게 코드를 작성하세요.\n",
      "output": "4\n8000",
      "patterns": [
        "\\bwhile\\s*\\(\\s*true\\s*\\)",
        "\\bbreak\\b"
      ]
    },
    {
      "title": "게임 에너지 충전하기",
      "description": "현재 에너지는 35이고, 한 번 충전할 때마다 20씩 증가합니다. 에너지가 90 이상이 될 때까지 충전하세요.",
      "conditions": [
        "에너지를 저장하는 변수 energy를 선언하고 숫자 35로 초기화하세요.",
        "do while문을 사용하세요. 반복할 때마다 energy를 20 증가시킨 뒤 energy를 출력하세요.",
        "energy가 90 미만이면 반복을 계속하세요. 90을 넘더라도 값을 90으로 바꾸지 마세요.",
        "console.log()로 출력 결과와 동일하게 한 줄씩 출력하세요. 결과를 그대로 적지 말고 지정된 변수를 이용하세요."
      ],
      "starter": "// 작성 조건에 맞게 코드를 작성하세요.\n",
      "output": "55\n75\n95",
      "patterns": [
        "\\bdo\\s*\\{",
        "\\bwhile\\s*\\("
      ]
    }
  ]
};
const problems = unit.problems;
let teacherSolutions = [];
function teacherSolution(){return teacherSolutions[current]?.solution || "정답 파일을 불러오세요.";}
window.addEventListener("message", event => {
  if(event.source !== parent || event.origin !== location.origin || event.data?.type !== "session-context") return;
  const entries=event.data.solutions;
  teacherSolutions=event.data.teacherMode && Array.isArray(entries) && entries.length===problems.length && entries.every((x,i)=>x.title===problems[i].title && typeof x.solution==="string") ? entries : [];
  document.getElementById("solutionCode").textContent=teacherSolutions.length?teacherSolution():"";
  document.getElementById("solutionPanel").hidden=true;
  document.getElementById("showSolution").textContent="정답 보기";
});
let current = 0;
let studentNumber = '----';

const el = (id) => document.getElementById(id);

const clean = (code) =>
  code.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');

function valid(code, item) {
  const cleaned = clean(code);
  if (!item.patterns.every(pattern => new RegExp(pattern).test(cleaned))) return Promise.resolve(false);
  return new Promise((resolve) => {
    const source = `onmessage = (event) => { const logs = []; try {
      const console = {log: (...args) => logs.push(args.map(String).join(" "))};
      new Function("console", event.data)(console);
      postMessage({output: logs.join("\\n")});
    } catch(error) { postMessage({error: error.message}); } };`;
    const url = URL.createObjectURL(new Blob([source], {type: "text/javascript"}));
    const worker = new Worker(url);
    let done = false;
    const finish = (ok) => { if (done) return; done = true; clearTimeout(timer); worker.terminate(); URL.revokeObjectURL(url); resolve(ok); };
    const timer = setTimeout(() => finish(false), 1500);
    worker.onmessage = event => finish(!event.data.error && event.data.output === item.output);
    worker.onerror = () => finish(false);
    worker.postMessage(code);
  });
}

function lines() {
  el('lineNumbers').textContent = Array.from(
    {
      length: el('codeInput').value.split('\n').length,
    },
    (_, index) => index + 1
  ).join('\n');
}

function message(text, ok) {
  el('feedback').textContent = text;
  el('feedback').className = ok ? 'good' : 'bad';
}

function render() {
  const item = problems[current];

  el('practice').hidden = false;
  el('completion').hidden = true;

  el('unitTitle').textContent = unit.title;
  el('problemNumber').textContent = `문제 ${current + 1}`;
  el('problemTitle').textContent = item.title;
  el('description').textContent = item.description;
  const reference = el('algorithmReference');
  reference.hidden = !item.reference;
  el('algorithmSteps').replaceChildren(...(item.reference || []).map(text => {
    const li = document.createElement('li'); li.textContent = text; return li;
  }));
  el('progressText').textContent = `${current + 1} / ${problems.length}`;

  el('progressBar').style.width = `${((current + 1) / problems.length) * 100}%`;

  el('conditionList').replaceChildren(
    ...item.conditions.map((text) => {
      const li = document.createElement('li');
      li.textContent = text;
      return li;
    })
  );

  
  el('expectedOutput').textContent = item.output;
  el('codeInput').value = item.starter;

  el('solutionPanel').hidden = true;
  el('solutionCode').textContent = teacherSolution();
  el('showSolution').textContent = '정답 보기';

  el('teacherPrev').disabled = current === 0;
  el('teacherNext').disabled = current === problems.length - 1;

  message('', true);
  lines();
}

function makeCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = `${unit.prefix}-`;

  for (let i = 0; i < 4; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }

  return code;
}

function complete() {
  el('practice').hidden = true;
  el('completion').hidden = false;

  el('progressText').textContent = `${problems.length} / ${problems.length}`;

  el('progressBar').style.width = '100%';
  el('completeTitle').textContent = `${unit.title} 완료`;
  el('completeStudent').textContent = studentNumber;
  el('completeCount').textContent = problems.length;

  el('completedAt').textContent = new Intl.DateTimeFormat('ko-KR', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date());

  el('completionCode').textContent = makeCode();

  el('watermark').replaceChildren(
    ...Array.from({ length: 20 }, () => {
      const span = document.createElement('span');
      span.textContent = studentNumber;
      return span;
    })
  );

  scrollTo(0, 0);
}

async function submit() {
  const code = el('codeInput').value;

  if (!code.trim()) {
    return message('코드를 작성한 후 확인하세요.', false);
  }

  el('submitButton').disabled = true;
  const correct = await valid(code, problems[current]);
  el('submitButton').disabled = false;
  if (!correct) {
    return message(
      '출력 결과와 조건을 확인하세요. 오류 또는 실행 시간 초과도 확인해 주세요.',
      false
    );
  }

  message('정답입니다! 다음 문제로 이동합니다.', true);
  el('submitButton').disabled = true;

  setTimeout(() => {
    current++;
    el('submitButton').disabled = false;

    if (current === problems.length) {
      complete();
    } else {
      render();
    }
  }, 650);
}

el('submitButton').addEventListener('click', submit);

el('resetButton').addEventListener('click', () => {
  el('codeInput').value = problems[current].starter;
  message('처음 상태로 되돌렸습니다.', true);
  lines();
});

el('restartButton').addEventListener('click', () => {
  location.reload();
});

el('codeInput').addEventListener('input', lines);

el('codeInput').addEventListener('scroll', () => {
  el('lineNumbers').scrollTop = el('codeInput').scrollTop;
});

el('codeInput').addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
    event.preventDefault();

    const start = event.currentTarget.selectionStart;

    event.currentTarget.setRangeText(
      '  ',
      start,
      event.currentTarget.selectionEnd,
      'end'
    );

    lines();
  }

  if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
    submit();
  }
});

window.addEventListener('message', (event) => {
  if (
    event.origin !== location.origin ||
    event.data?.type !== 'session-context'
  ) {
    return;
  }

  studentNumber = event.data.studentNumber || '----';

  el('learnerText').textContent = `학번 ${studentNumber}`;

  el('teacherBar').hidden = !event.data.teacherMode;

  if (!event.data.teacherMode) {
    el('solutionPanel').hidden = true;
  }
});

el('teacherPrev').addEventListener('click', () => {
  if (current > 0) {
    current--;
    render();
  }
});

el('teacherNext').addEventListener('click', () => {
  if (current < problems.length - 1) {
    current++;
    render();
  }
});

el('showSolution').addEventListener('click', () => {
  const show = el('solutionPanel').hidden;

  el('solutionPanel').hidden = !show;
  el('showSolution').textContent = show ? '정답 닫기' : '정답 보기';
});

el('copySolution').addEventListener('click', async () => {
  await navigator.clipboard.writeText(teacherSolution());

  el('copySolution').textContent = '복사됨';

  setTimeout(() => {
    el('copySolution').textContent = '복사';
  }, 1200);
});

render();


// 문제은행 전용: 외부 저장 스크립트 연결 없이 답안/진행도를 저장합니다.
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

// 완료 확인 이미지만 복사/저장합니다. 다른 단원에는 영향을 주지 않습니다.
(() => {
  'use strict';
  const panel = document.getElementById('completion');
  const bar = document.createElement('div');
  bar.className = 'bank-export-controls';
  const select = document.createElement('button');
  select.type = 'button'; select.textContent = '완료 이미지 저장 폴더 선택';
  const status = document.createElement('p');
  status.setAttribute('role', 'status');
  status.textContent = '폴더를 선택하면 이 페이지에서 전체 문제 완료 시 확인 이미지가 저장됩니다.';
  bar.append(select, status);
  document.getElementById('practice').before(bar);
  const actions = document.createElement('div');
  actions.className = 'bank-export-actions';
  const copy = document.createElement('button'), save = document.createElement('button');
  copy.type = save.type = 'button';
  copy.textContent = '완료 이미지 복사'; save.textContent = '완료 이미지 저장';
  actions.append(copy, save);
  panel.querySelector('.completion-content').append(actions);
  const style = document.createElement('style');
  style.textContent = '.bank-export-controls{width:min(1180px,calc(100% - 36px));margin:12px auto;display:flex;gap:10px;align-items:center;flex-wrap:wrap}.bank-export-controls button{padding:8px 12px;border:1px solid #cbd5e1;border-radius:7px;background:white;color:#334155;font:inherit;font-size:12px;cursor:pointer}.bank-export-controls p{margin:0;color:#64748b;font-size:12px}.bank-export-actions{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:16px}.bank-export-actions button{font-size:13px}';
  document.head.appendChild(style);
  let folder = null, lastSaved = '', exporting = false, pending = false;
  const field = id => document.getElementById(id).textContent.trim();
  const isReady = () => !panel.hidden && /^\d{4}$/.test(field('completeStudent')) && field('completionCode');
  function signature() {return [field('completeStudent'),field('completionCode'),field('completedAt')].join('|');}
  function filename() {return `JSplayground_1회차_${field('completeStudent')}_${field('completionCode')}.png`;}
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
    ctx.fillStyle = '#64748b';ctx.font = '23px sans-serif';ctx.fillText('문제은행 · 1회차 완료 확인',600,715);
    return new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error('이미지를 만들지 못했습니다.')),'image/png'));
  }
  async function writeFolder(blob) {
    const file = await folder.getFileHandle(filename(),{create:true});
    const stream = await file.createWritable();
    try { await stream.write(blob); await stream.close(); }
    catch(error) { try {await stream.abort();} catch(_) {} throw error; }
  }
  async function autoSave() {
    if (exporting || !folder || !isReady()) return;
    const key = signature(); if (key === lastSaved) return;
    exporting = true;
    try {const blob=await makeImage(); if(!isReady()||key!==signature())return; await writeFolder(blob);lastSaved=key;status.textContent=`선택한 폴더에 저장했습니다: ${filename()}`;}
    catch(_) {status.textContent='폴더에 저장하지 못했습니다. 폴더를 다시 선택하거나 완료 이미지 저장을 눌러 주세요.';}
    finally {exporting=false;}
  }
  select.hidden = typeof window.showDirectoryPicker !== 'function';
  if(select.hidden)status.textContent='완료 후 이미지 복사 또는 저장 버튼을 사용하세요. 이 브라우저는 폴더 선택 저장을 지원하지 않습니다.';
  select.addEventListener('click',async()=>{
    try {folder=await window.showDirectoryPicker({id:'jsplayground-completion',mode:'readwrite',startIn:'pictures'});lastSaved='';status.textContent=`저장 폴더: ${folder.name}. 전체 문제 완료 시 자동 저장됩니다. 새로고침하면 폴더를 다시 선택하세요.`;await autoSave();}
    catch(error) {if(error.name!=='AbortError')status.textContent='폴더를 선택할 수 없습니다. 완료 후 이미지 저장 버튼을 사용하세요.';}
  });
  save.addEventListener('click',async()=>{
    save.disabled=true;
    try {const blob=await makeImage();if(folder){await writeFolder(blob);lastSaved=signature();status.textContent=`선택한 폴더에 저장했습니다: ${filename()}`;}else{const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download=filename();document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);status.textContent='PNG 다운로드를 요청했습니다. 브라우저의 다운로드 위치를 확인하세요.';}}
    catch(error){status.textContent=error.message||'이미지를 저장하지 못했습니다.';}finally{save.disabled=false;}
  });
  copy.addEventListener('click',async()=>{
    copy.disabled=true;
    try {if(!navigator.clipboard?.write||typeof ClipboardItem==='undefined')throw new Error('이미지 복사를 지원하지 않습니다. 이미지 저장 버튼을 사용하세요.');await navigator.clipboard.write([new ClipboardItem({'image/png':makeImage()})]);status.textContent='완료 이미지를 복사했습니다. 제출할 곳에 Ctrl+V로 붙여넣으세요.';}
    catch(error){status.textContent=error.name==='NotAllowedError'?'복사 권한을 허용하거나 이미지 저장 버튼을 사용하세요.':error.message;}finally{copy.disabled=false;}
  });
  const observer=new MutationObserver(()=>{if(panel.hidden)lastSaved='';if(pending)return;pending=true;queueMicrotask(()=>{pending=false;autoSave();});});
  observer.observe(panel,{attributes:true,attributeFilter:['hidden'],childList:true,subtree:true,characterData:true});
  // 단독 페이지 접속 시에도 기존에 입력한 학번을 사용합니다.
  if (window.parent === window) {
    const number=sessionStorage.getItem('studentNumber');
    if(/^\d{4}$/.test(number||''))window.postMessage({type:'session-context',studentNumber:number,teacherMode:false,solutions:[]},location.origin);
  }
})();
