const category = "round4";
const unit = {
  "title": "문제은행 4회차",
  "prefix": "BANK4",
  "problems": [
    {
      "title": "상품 금액에서 할인 금액 빼기",
      "description": "전체 상품 금액 28000원에서 쿠폰 할인 금액 3000원을 뺀 뒤, 변경된 금액을 출력하세요.",
      "conditions": [
        "전체 상품 금액은 변수 totalPrice에 28000으로 저장하세요.",
        "쿠폰 할인 금액은 변수 discount에 3000으로 저장하세요.",
        "복합 대입 연산자를 사용하여 totalPrice에서 discount만큼 빼세요.",
        "변경된 totalPrice를 출력하세요.",
        "출력은 console.log()를 사용하고, 지정된 변수로 처리하세요. 예상 출력의 결과를 그대로 적어서 출력하지 마세요.",
        "break와 continue는 사용하지 마세요."
      ],
      "starter": "// 작성 조건에 맞게 코드를 작성하세요.\n",
      "output": "25000",
      "patterns": [
        "\\btotalPrice\\b",
        "\\bdiscount\\b",
        "-="
      ]
    },
    {
      "title": "1부터 5까지 출력하기",
      "description": "1부터 5까지의 정수를 작은 수부터 차례대로 출력하세요.",
      "conditions": [
        "for문을 사용하세요.",
        "반복 변수의 이름은 number로 하세요.",
        "반복문 안에서 number를 한 줄에 하나씩 출력하세요.",
        "console.log()는 코드에 한 번만 작성하세요.",
        "출력은 console.log()를 사용하고, 지정된 변수로 처리하세요. 예상 출력의 결과를 그대로 적어서 출력하지 마세요.",
        "break와 continue는 사용하지 마세요."
      ],
      "starter": "// 작성 조건에 맞게 코드를 작성하세요.\n",
      "output": "1\n2\n3\n4\n5",
      "patterns": [
        "\\bfor\\s*\\(",
        "\\bnumber\\b"
      ]
    },
    {
      "title": "할인 후 결제 금액 계산하기",
      "description": "가격이 12000원인 상품을 3개 구입합니다. 전체 상품 금액에서 4000원을 할인받고, 배송비 2500원을 추가로 지불합니다. 최종 결제 금액을 구하세요.",
      "conditions": [
        "상품 한 개의 가격은 변수 price에 12000으로 저장하세요.",
        "구매 수량은 변수 quantity에 3으로 저장하세요.",
        "전체 상품 금액에서 할인받을 금액은 변수 discount에 4000으로 저장하세요.",
        "배송비는 변수 deliveryFee에 2500으로 저장하세요.",
        "최종 결제 금액을 계산하여 변수 payment에 저장하세요.",
        "payment를 출력하세요.",
        "출력은 console.log()를 사용하고, 지정된 변수로 처리하세요. 예상 출력의 결과를 그대로 적어서 출력하지 마세요.",
        "break와 continue는 사용하지 마세요."
      ],
      "starter": "// 작성 조건에 맞게 코드를 작성하세요.\n",
      "output": "34500",
      "patterns": [
        "\\bpayment\\b",
        "\\bdeliveryFee\\b",
        "\\*",
        "-"
      ]
    },
    {
      "title": "세 과목의 평균 구하기",
      "description": "국어, 영어, 정보 점수의 평균을 구하세요. 세 과목은 같은 비중으로 반영합니다.",
      "conditions": [
        "국어 점수는 변수 korean에 75로 저장하세요.",
        "영어 점수는 변수 english에 90으로 저장하세요.",
        "정보 점수는 변수 informatics에 87로 저장하세요.",
        "세 과목의 평균을 하나의 계산식으로 구하여 변수 average에 저장하세요. 합계를 저장하는 별도의 변수는 만들지 마세요.",
        "average를 출력하세요.",
        "출력은 console.log()를 사용하고, 지정된 변수로 처리하세요. 예상 출력의 결과를 그대로 적어서 출력하지 마세요.",
        "break와 continue는 사용하지 마세요."
      ],
      "starter": "// 작성 조건에 맞게 코드를 작성하세요.\n",
      "output": "84",
      "patterns": [
        "\\baverage\\b",
        "\\bkorean\\b",
        "\\benglish\\b",
        "\\binformatics\\b",
        "/"
      ]
    },
    {
      "title": "정원 초과 여부 확인하기",
      "description": "체험 수업의 신청 인원을 확인하여 정원 초과 여부를 안내하세요.",
      "conditions": [
        "신청 인원은 변수 applicantCount에 30으로 저장하세요.",
        "수업 정원은 변수 capacity에 30으로 저장하세요.",
        "if…else문을 사용하세요.",
        "신청 인원이 정원을 초과하면 정원 초과, 그렇지 않으면 신청 인원 확인 완료를 출력하세요.",
        "출력은 console.log()를 사용하고, 지정된 변수로 처리하세요. 예상 출력의 결과를 그대로 적어서 출력하지 마세요.",
        "break와 continue는 사용하지 마세요."
      ],
      "starter": "// 작성 조건에 맞게 코드를 작성하세요.\n",
      "output": "신청 인원 확인 완료",
      "patterns": [
        "\\bif\\s*\\(",
        "\\belse\\b"
      ]
    },
    {
      "title": "온도에 따라 보관 장소 정하기",
      "description": "물품의 보관 온도에 따라 해당하는 보관 장소를 출력하세요.",
      "conditions": [
        "보관 온도는 변수 temperature에 5로 저장하세요.",
        "if…else if…else문을 사용하여 온도가 낮은 구간부터 차례대로 검사하세요.",
        "0 미만은 냉동실, 0 이상 10 이하는 냉장실, 10 초과는 상온 보관실을 출력하세요.",
        "해당하는 보관 장소 하나만 출력하세요.",
        "출력은 console.log()를 사용하고, 지정된 변수로 처리하세요. 예상 출력의 결과를 그대로 적어서 출력하지 마세요.",
        "break와 continue는 사용하지 마세요."
      ],
      "starter": "// 작성 조건에 맞게 코드를 작성하세요.\n",
      "output": "냉장실",
      "patterns": [
        "\\belse\\s+if\\s*\\("
      ]
    },
    {
      "title": "쿠폰 사용 가능 여부 판단하기",
      "description": "주문 금액, 구매 수량, 행사 상품 여부를 확인하여 쿠폰을 사용할 수 있는지 판단하세요.",
      "conditions": [
        "주문 금액은 변수 orderAmount에 35000으로 저장하세요.",
        "구매 수량은 변수 quantity에 2로 저장하세요.",
        "행사 상품 여부는 변수 isSaleProduct에 true로 저장하세요.",
        "다음 쿠폰 사용 조건을 하나의 if 조건식으로 작성하세요. 중첩 조건문은 사용하지 마세요.",
        "주문 금액이 30000원 이상이거나 구매 수량이 5개 이상이어야 합니다.",
        "행사 상품에는 주문 금액이나 구매 수량에 관계없이 쿠폰을 사용할 수 없습니다.",
        "쿠폰을 사용할 수 있으면 쿠폰 사용 가능, 그렇지 않으면 쿠폰 사용 불가를 출력하세요.",
        "출력은 console.log()를 사용하고, 지정된 변수로 처리하세요. 예상 출력의 결과를 그대로 적어서 출력하지 마세요.",
        "break와 continue는 사용하지 마세요."
      ],
      "starter": "// 작성 조건에 맞게 코드를 작성하세요.\n",
      "output": "쿠폰 사용 불가",
      "patterns": [
        "\\bif\\s*\\(",
        "\\borderAmount\\b",
        "\\bisSaleProduct\\b"
      ]
    },
    {
      "title": "1부터 10까지의 짝수 합 구하기",
      "description": "1부터 10까지의 정수 중 짝수만 더한 합계를 구하세요.",
      "conditions": [
        "합계를 저장할 변수 sum을 선언하고 0으로 초기화하세요.",
        "for문을 사용하여 반복 변수 number를 1부터 10까지 1씩 증가시키세요.",
        "반복문 안에서 if문으로 짝수인지 판단하고, 짝수인 경우에만 number를 sum에 더하세요.",
        "반복문이 모두 끝난 뒤 최종 sum을 한 번만 출력하세요.",
        "출력은 console.log()를 사용하고, 지정된 변수로 처리하세요. 예상 출력의 결과를 그대로 적어서 출력하지 마세요.",
        "break와 continue는 사용하지 마세요."
      ],
      "starter": "// 작성 조건에 맞게 코드를 작성하세요.\n",
      "output": "30",
      "patterns": [
        "\\bfor\\s*\\(",
        "\\bif\\s*\\(",
        "\\bsum\\b"
      ]
    },
    {
      "title": "저축액을 늘려 목표 금액 모으기",
      "description": "첫날에는 1000원을 저축하고, 다음 날부터는 전날 저축한 금액보다 1000원씩 더 많이 저축합니다. 모은 돈이 목표 금액 12000원 이상이 되면 저축을 끝냅니다. 목표 금액을 모으는 데 걸린 일수와 최종적으로 모은 금액을 구하세요.",
      "conditions": [
        "모은 돈은 변수 total에 0으로 저장하세요.",
        "저축한 일수는 변수 days에 0으로 저장하세요.",
        "하루 저축액은 변수 dailyAmount에 1000으로 저장하세요.",
        "목표 금액은 변수 target에 12000으로 저장하세요.",
        "while문을 사용하고, 모은 돈이 목표 금액 미만인 동안 반복하세요.",
        "한 번 반복할 때 하루 동안 저축한 것으로 처리하세요. 그날의 저축액을 모은 돈에 반영하고, 일수와 다음 날의 저축액을 변경하세요.",
        "반복문이 끝난 뒤 days와 total을 순서대로 한 줄에 하나씩 출력하세요.",
        "출력은 console.log()를 사용하고, 지정된 변수로 처리하세요. 예상 출력의 결과를 그대로 적어서 출력하지 마세요.",
        "break와 continue는 사용하지 마세요."
      ],
      "starter": "// 작성 조건에 맞게 코드를 작성하세요.\n",
      "output": "5\n15000",
      "patterns": [
        "\\bwhile\\s*\\(",
        "\\bdailyAmount\\b",
        "\\btarget\\b"
      ]
    },
    {
      "title": "파일 전송량 늘리기",
      "description": "처음 파일 전송량은 3입니다. 전송을 한 번 수행할 때마다 전송량이 이전 값의 2배가 됩니다. 전송량이 40 이상이 될 때까지 반복하세요.",
      "conditions": [
        "전송량은 변수 transferAmount에 3으로 저장하세요.",
        "do while문을 사용하세요.",
        "반복할 때마다 transferAmount를 기존 값의 2배로 변경한 뒤, 변경된 값을 출력하세요.",
        "transferAmount가 40 미만이면 반복을 계속하세요.",
        "전송량은 한 줄에 하나씩 출력하세요.",
        "출력은 console.log()를 사용하고, 지정된 변수로 처리하세요. 예상 출력의 결과를 그대로 적어서 출력하지 마세요.",
        "break와 continue는 사용하지 마세요."
      ],
      "starter": "// 작성 조건에 맞게 코드를 작성하세요.\n",
      "output": "6\n12\n24\n48",
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
  if (/\b(?:break|continue)\b/.test(cleaned)) return Promise.resolve(false);
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
  if (window.__bankStorageInstalled) return;
  window.__bankStorageInstalled = true;
  if (typeof problems === 'undefined' || typeof render !== 'function' ||
      typeof complete !== 'function' || typeof submit !== 'function') return;

  const editor = document.getElementById('codeInput');
  const submitButton = document.getElementById('submitButton');
  const originalRender = render;
  const originalSubmit = submit;
  const uiStyle = document.createElement('style');
  uiStyle.textContent = '\n/* Compact lesson header and consistent editor controls */\nheader { min-height:64px; padding:10px clamp(18px,3vw,36px); gap:16px; }\nheader > div { display:flex; align-items:center; gap:12px; min-width:0; }\nheader h1 { margin:0; font-size:1.18rem; line-height:1.35; }\nheader .eyebrow { font-size:.63rem; letter-spacing:.08em; white-space:nowrap; }\nheader > p { margin:0; flex-shrink:0; font-size:.85rem; white-space:nowrap; }\nheader .learner { margin-right:12px; padding-right:12px; font-size:.82rem; }\n.progress { height:3px; }\nmain { width:min(1180px,calc(100% - 36px)); margin:18px auto; gap:18px; }\n.problem-card { padding:22px; }\n.problem-card h2 { font-size:1.28rem; margin:12px 0; }\n.conditions { margin-top:18px; padding-top:16px; }\n.teacher-bar { margin:12px auto 0; padding:8px 12px; }\n.editor-title { height:46px; padding:0 16px; }\n.editor-title h3 { font-size:.92rem; }\n.editor-title button { font-size:.8rem; }\n.answer-card .save-notice { margin:0!important; padding:9px 16px!important; display:flex; flex-wrap:wrap; align-items:center; gap:3px 10px; border-bottom:1px solid var(--line,#dbe2ec); background:#f8fafc; font-family:inherit; font-size:12px!important; line-height:1.5!important; }\n.save-notice .save-status { font-size:12px; white-space:nowrap; }\n.save-notice .save-help { margin-top:0!important; font-size:11px; color:#64748b; }\n.answer-card .practice-navigation { margin:0!important; padding:10px 16px; gap:8px!important; border-top:1px solid var(--line,#dbe2ec); background:#fff; }\n.practice-navigation button { padding:7px 11px!important; font:inherit; font-size:12px; font-weight:600; line-height:1.4; transition:background .15s; }\n.practice-navigation button:hover:not(:disabled) { background:#f1f5f9!important; border-color:#94a3b8!important; }\n.practice-navigation button:disabled { opacity:.4; cursor:not-allowed!important; }\n.practice-navigation .solved-label { margin-left:auto; color:#64748b; font-size:12px; white-space:nowrap; }\n.actions { min-height:60px; padding:10px 16px; }\n.actions > button { padding:10px 16px; font-size:.85rem; white-space:nowrap; }\n.actions p { font-size:.82rem; }\n@media(max-width:820px) { main { margin:14px auto; gap:14px; } }\n@media(max-width:560px) {\n header { min-height:60px; padding:10px 16px; gap:8px; }\n header > div { display:block; }\n header .eyebrow { display:none; }\n header h1 { font-size:1rem; }\n header > p { font-size:.75rem; }\n header .learner { margin-right:6px; padding-right:6px; font-size:.72rem; }\n main { width:calc(100% - 24px); }\n .problem-card { padding:18px; }\n .answer-card .save-notice { padding:8px 14px!important; }\n .save-notice .save-help { flex-basis:100%; }\n}\n';
  uiStyle.textContent += '\n.answer-card { overflow:visible; }\n.answer-card .editor-title { position:sticky; top:0; z-index:10; min-height:48px; height:auto; padding:7px 14px; gap:16px; background:#fff; border-radius:12px 12px 0 0; box-shadow:0 2px 5px rgba(23,32,51,.04); }\n.editor-heading-group { display:flex; align-items:center; gap:14px; min-width:0; }\n.editor-heading-group h3 { white-space:nowrap; }\n.editor-title #resetButton { padding:6px 8px; min-height:32px; font-size:12px; white-space:nowrap; color:#64748b; border-radius:5px; }\n.editor-title #resetButton:hover { background:#f1f5f9; }\n.editor-title #resetButton:focus-visible, .practice-navigation button:focus-visible { outline:2px solid #38bdf8; outline-offset:2px; }\n.answer-card .editor-title .practice-navigation { flex:0 0 auto; margin:0!important; padding:0!important; border:0; background:transparent; flex-wrap:nowrap!important; gap:6px!important; }\n.editor-title .practice-navigation button { min-height:34px; border:1px solid #cbd5e1!important; border-radius:6px; }\n.nav-short { display:none; }\n.answer-card .actions { border-radius:0 0 12px 12px; }\n@media(max-width:560px) {\n .answer-card .editor-title { padding:7px 10px; gap:12px; }\n .editor-heading-group { gap:8px; }\n .editor-heading-group h3 { font-size:13px; }\n .editor-title #resetButton { padding:6px 4px; font-size:11px; }\n .nav-long { display:none; }\n .nav-short { display:inline; }\n .editor-title .practice-navigation button { padding:7px 9px!important; }\n}\n';
  uiStyle.textContent += '\n.practice-navigation[hidden] { display:none!important; }\n';
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
  function eligible() { return key && state; }
  function allSolved() { return Boolean(state && state.solved.every(Boolean)); }
  function updateNotice() {
    statusText.textContent = storageFailed ? '저장할 수 없음' :
      savedSuccessfully ? (teacherMode ? '교사용 답안 자동 저장됨' : '자동 저장됨') :
      key ? '자동 저장 대기' : '학번 확인 대기';
    statusDot.style.background = storageFailed ? '#dc2626' :
      !savedSuccessfully ? '#94a3b8' : '#16a34a';
    helpText.textContent = storageFailed ? '창을 닫기 전에 작성 코드를 복사해 주세요.' :
      teacherMode ? '이 브라우저에 교사용 답안과 진행 위치를 저장합니다.' :
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
        state.current = Number.isInteger(saved.current) ? Math.max(0,Math.min(saved.current,teacherMode ? count - 1 : unlocked)) : unlocked;
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
    const show = current === count - 1 && (eligible() && allSolved());
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
      message(allSolved() ? '정답입니다! 이 소단원의 모든 문제를 해결했습니다.' :
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
    const nextTeacherMode = Boolean(event.data.teacherMode);
    const nextKey = `jsplayground:progress:v1:${nextTeacherMode ? "teacher:" : ""}${number}:${moduleKey}:${hash.toString(16)}`;
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
    current = state.current;
    // 재접속은 마지막 위치 복원만 수행하며, 초기화나 대화상자를 실행하지 않습니다.
    render();
    updateNotice();
  });
  updateNotice();
})();

// 완료 확인 영역 아래의 버튼 하나로 폴더 선택과 이미지 저장을 처리합니다.
(() => {
  'use strict';
  const panel = document.getElementById('completion');
  const actions = document.createElement('div');
  actions.className = 'bank-export-actions';
  const save = document.createElement('button');
  save.type = 'button'; save.textContent = '완료 이미지 저장';
  const status = document.createElement('p');
  status.setAttribute('role', 'status');
  actions.append(save, status);
  panel.querySelector('.completion-content').append(actions);
  const style = document.createElement('style');
  style.textContent = '.bank-export-actions{display:flex;flex-direction:column;gap:10px;align-items:center;margin-top:16px}.bank-export-actions button{font-size:13px}.bank-export-actions p{margin:0;color:#64748b;font-size:12px;overflow-wrap:anywhere}';
  document.head.appendChild(style);
  let folder = null;
  const field = id => document.getElementById(id).textContent.trim();
  const isReady = () => !panel.hidden && /^\d{4}$/.test(field('completeStudent')) && field('completionCode');
  function filename() {return `JSplayground_4회차_${field('completeStudent')}_${field('completionCode')}.png`;}
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
    ctx.fillStyle = '#64748b';ctx.font = '23px sans-serif';ctx.fillText('문제은행 · 4회차 완료 확인',600,715);
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
  // 단독 페이지 접속 시에도 기존에 입력한 학번을 사용합니다.
  if (window.parent === window) {
    const number=sessionStorage.getItem('studentNumber');
    if(/^\d{4}$/.test(number||''))window.postMessage({type:'session-context',studentNumber:number,teacherMode:false,solutions:[]},location.origin);
  }
})();
