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
        "상품의 판매 여부는 isAvailable에 불리언 true로 저장하세요. true에는 따옴표를 붙이지 않습니다.",
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
        "const로 변수를 선언하여 공책 한 권의 가격 1800은 price에, 구매 수량 4는 quantity에, 쿠폰 금액 1000은 coupon에 저장하세요.",
        "가격과 수량을 곱한 전체 금액에서 쿠폰 금액을 빼고, const로 선언한 payment에 저장하세요.",
        "payment를 출력하세요.",
        "console.log()로 출력 결과와 동일하게 한 줄씩 출력하세요. 결과를 그대로 적지 말고 지정된 변수를 이용하세요."
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
        "let으로 remainingSeconds를 선언하고 숫자 185를 저장하세요.",
        "% 연산자로 remainingSeconds를 60으로 나눈 나머지를 구하고, const로 선언한 seconds에 저장하세요.",
        "-= 연산자로 remainingSeconds에서 seconds를 빼세요.",
        "남은 remainingSeconds를 60으로 나누어 const로 선언한 minutes에 저장하세요.",
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
        "const로 orderAmount를 선언하고 주문 금액 28000을 저장하세요.",
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
        "const로 score를 선언하고 점수 83을 저장하세요. 점수는 0부터 100까지의 정수라고 가정합니다.",
        "if…else if…else문을 사용하고, 높은 점수 기준부터 차례대로 검사하세요. 앞 조건에 해당하지 않았을 때 다음 조건을 검사합니다.",
        "90~100점은 A, 80~89점은 B, 70~79점은 C, 0~69점은 D를 출력하세요.",
        "score >= 90은 90점 이상(90점 포함), score < 90은 90점 미만(90점 제외)을 뜻합니다.",
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
        "세 변수는 모두 const로 선언하세요. 나이는 age에 숫자 12, 보호자 동행 여부는 hasGuardian에 불리언 true, 예약 여부는 hasReservation에 불리언 false를 저장하세요.",
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
        "let으로 energy를 선언하고 숫자 35로 초기화하세요.",
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
