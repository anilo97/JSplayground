const unit = {title: "for문", prefix: "FOR"};
const problems = [
  {
    "title": "역순 번호 출력",
    "description": "10부터 1까지 내림차순으로 출력하세요.",
    "conditions": [
      "제공 변수의 이름과 값을 유지하고 for문을 사용하세요.",
      "숫자를 한 줄에 하나씩 출력하세요."
    ],
    "starter": "const start = 10;\nconst end = 1;\n\n// 여기에 코드를 작성하세요.",
    "solution": "const start = 10;\nconst end = 1;\n\nfor (let i = start; i >= end; i--) {\n  console.log(i);\n}",
    "output": "10\n9\n8\n7\n6\n5\n4\n3\n2\n1"
  },
  {
    "title": "일정한 간격의 숫자 출력",
    "description": "3부터 30까지 3씩 증가하는 숫자를 출력하세요.",
    "conditions": [
      "제공 변수의 이름과 값을 유지하고 for문을 사용하세요.",
      "start와 end를 포함하고, step만큼 증가시키세요.",
      "숫자를 한 줄에 하나씩 출력하세요."
    ],
    "starter": "const start = 3;\nconst end = 30;\nconst step = 3;\n\n// 여기에 코드를 작성하세요.",
    "solution": "const start = 3;\nconst end = 30;\nconst step = 3;\n\nfor (let i = start; i <= end; i += step) {\n  console.log(i);\n}",
    "output": "3\n6\n9\n12\n15\n18\n21\n24\n27\n30"
  },
  {
    "title": "조건에 따른 실행 여부",
    "description": "start부터 end까지 1씩 증가하며 출력하고, 마지막에 완료 문구를 출력하세요.",
    "conditions": [
      "제공 변수의 이름과 값을 유지하고 for문을 사용하세요.",
      "start가 end보다 크면 숫자는 출력하지 마세요.",
      "반복문 뒤에서 \"출력 완료\"를 한 번 출력하세요."
    ],
    "starter": "const start = 5;\nconst end = 3;\n\n// 여기에 코드를 작성하세요.",
    "solution": "const start = 5;\nconst end = 3;\n\nfor (let i = start; i <= end; i++) {\n  console.log(i);\n}\nconsole.log(\"출력 완료\");",
    "output": "출력 완료"
  },
  {
    "title": "조건에 맞는 숫자의 합",
    "description": "1부터 50까지 중 3의 배수이면서 2의 배수가 아닌 수의 합을 구하세요.",
    "conditions": [
      "제공 변수의 이름과 값을 유지하고 for문을 사용하세요.",
      "%와 &&를 사용해 두 조건을 함께 검사하세요.",
      "조건에 맞는 수를 total에 누적하고, 반복문 뒤에서 합계만 출력하세요."
    ],
    "starter": "const limit = 50;\nlet total = 0;\n\n// 여기에 코드를 작성하세요.",
    "solution": "const limit = 50;\nlet total = 0;\n\nfor (let i = 1; i <= limit; i++) {\n  if (i % 3 === 0 && i % 2 !== 0) {\n    total += i;\n  }\n}\nconsole.log(total);",
    "output": "192"
  },
  {
    "title": "전체 배송비 계산",
    "description": "5,000원부터 40,000원까지 5,000원 간격인 주문 8건의 배송비 합계를 구하세요.",
    "conditions": [
      "제공 변수의 이름과 값을 유지하고 for문을 사용하세요.",
      "주문 금액이 30,000원 미만이면 배송비 3,000원, 이상이면 0원입니다.",
      "배송비를 totalShipping에 누적하고 \"전체 배송비: 15000원\" 형식으로 한 번 출력하세요."
    ],
    "starter": "const firstAmount = 5000;\nconst lastAmount = 40000;\nconst step = 5000;\nlet totalShipping = 0;\n\n// 여기에 코드를 작성하세요.",
    "solution": "const firstAmount = 5000;\nconst lastAmount = 40000;\nconst step = 5000;\nlet totalShipping = 0;\n\nfor (let amount = firstAmount; amount <= lastAmount; amount += step) {\n  if (amount < 30000) {\n    totalShipping += 3000;\n  }\n}\nconsole.log(`전체 배송비: ${totalShipping}원`);",
    "output": "전체 배송비: 15000원"
  },
  {
    "title": "접수 상태 분류",
    "description": "접수 번호 1~12의 상태를 표시하고 상태별 인원수를 출력하세요.",
    "conditions": [
      "제공 변수의 이름과 값을 유지하고 for문을 사용하세요.",
      "if / else if / else로 1~5번은 오전, 6~9번은 오후, 나머지는 대기로 분류하세요.",
      "각 회차에 \"1번: 오전\" 형식으로 출력하고 해당 인원수를 1 증가시키세요.",
      "반복 후 \"오전: 5명\", \"오후: 4명\", \"대기: 3명\"을 순서대로 출력하세요."
    ],
    "starter": "const count = 12;\nlet morning = 0;\nlet afternoon = 0;\nlet waiting = 0;\n\n// 여기에 코드를 작성하세요.",
    "solution": "const count = 12;\nlet morning = 0;\nlet afternoon = 0;\nlet waiting = 0;\n\nfor (let number = 1; number <= count; number++) {\n  let status;\n  if (number <= 5) {\n    status = \"오전\";\n    morning++;\n  } else if (number <= 9) {\n    status = \"오후\";\n    afternoon++;\n  } else {\n    status = \"대기\";\n    waiting++;\n  }\n  console.log(`${number}번: ${status}`);\n}\nconsole.log(`오전: ${morning}명`);\nconsole.log(`오후: ${afternoon}명`);\nconsole.log(`대기: ${waiting}명`);",
    "output": "1번: 오전\n2번: 오전\n3번: 오전\n4번: 오전\n5번: 오전\n6번: 오후\n7번: 오후\n8번: 오후\n9번: 오후\n10번: 대기\n11번: 대기\n12번: 대기\n오전: 5명\n오후: 4명\n대기: 3명"
  },
  {
    "title": "구분자가 있는 목록",
    "description": "1부터 6까지 숫자를 쉼표와 공백으로 연결하세요.",
    "conditions": [
      "제공 변수의 이름과 값을 유지하고 for문을 사용하세요.",
      "result에 숫자와 구분자를 누적하세요.",
      "마지막 숫자 뒤에는 쉼표나 공백을 붙이지 마세요.",
      "완성된 result를 반복문 뒤에서 한 번 출력하세요."
    ],
    "starter": "const end = 6;\nlet result = \"\";\n\n// 여기에 코드를 작성하세요.",
    "solution": "const end = 6;\nlet result = \"\";\n\nfor (let i = 1; i <= end; i++) {\n  result += i;\n  if (i < end) {\n    result += \", \";\n  }\n}\nconsole.log(result);",
    "output": "1, 2, 3, 4, 5, 6"
  },
  {
    "title": "게시글 표시 번호 계산",
    "description": "현재 페이지에 표시할 게시글 번호를 계산해 출력하세요.",
    "conditions": [
      "제공 변수의 이름과 값을 유지하고 for문을 사용하세요.",
      "1페이지는 1~5번, 2페이지는 6~10번입니다.",
      "page와 pageSize로 시작 번호와 끝 번호를 계산하세요.",
      "현재 페이지의 번호를 한 줄에 하나씩 출력하세요."
    ],
    "starter": "const page = 3;\nconst pageSize = 5;\n\n// 여기에 코드를 작성하세요.",
    "solution": "const page = 3;\nconst pageSize = 5;\n\nconst start = (page - 1) * pageSize + 1;\nconst end = page * pageSize;\nfor (let number = start; number <= end; number++) {\n  console.log(number);\n}",
    "output": "11\n12\n13\n14\n15"
  },
  {
    "title": "행사 입장 시간표 · 도전",
    "description": "09:00부터 17:30까지 30분 간격의 입장 시간을 출력하세요.",
    "conditions": [
      "제공 변수의 이름과 값을 유지하고 for문을 사용하세요.",
      "hour는 startHour부터 endHour 미만까지 반복하세요.",
      "매 회차 정각과 30분을 각각 출력하세요.",
      "10시 미만인 시간 앞에는 0을 붙여 HH:MM 형식으로 출력하세요."
    ],
    "starter": "const startHour = 9;\nconst endHour = 18;\n\n// 여기에 코드를 작성하세요.",
    "solution": "const startHour = 9;\nconst endHour = 18;\n\nfor (let hour = startHour; hour < endHour; hour++) {\n  const hourText = hour < 10 ? \"0\" + hour : \"\" + hour;\n  console.log(`${hourText}:00`);\n  console.log(`${hourText}:30`);\n}",
    "output": "09:00\n09:30\n10:00\n10:30\n11:00\n11:30\n12:00\n12:30\n13:00\n13:30\n14:00\n14:30\n15:00\n15:30\n16:00\n16:30\n17:00\n17:30"
  },
  {
    "title": "누적 다운로드 용량",
    "description": "파일 8개의 용량, 전체 용량, 평균 용량을 출력하세요.",
    "conditions": [
      "제공 변수의 이름과 값을 유지하고 for문을 사용하세요.",
      "첫 파일은 firstSize MB이고 다음 파일은 이전보다 increase MB 큽니다.",
      "각 파일을 \"1번 파일: 100MB\" 형식으로 출력하고 total에 용량을 누적하세요.",
      "반복 후 \"전체 용량: 2200MB\", \"평균 용량: 275MB\" 형식으로 출력하세요."
    ],
    "starter": "const fileCount = 8;\nconst firstSize = 100;\nconst increase = 50;\nlet total = 0;\n\n// 여기에 코드를 작성하세요.",
    "solution": "const fileCount = 8;\nconst firstSize = 100;\nconst increase = 50;\nlet total = 0;\n\nfor (let number = 1; number <= fileCount; number++) {\n  const size = firstSize + (number - 1) * increase;\n  total += size;\n  console.log(`${number}번 파일: ${size}MB`);\n}\nconsole.log(`전체 용량: ${total}MB`);\nconsole.log(`평균 용량: ${total / fileCount}MB`);",
    "output": "1번 파일: 100MB\n2번 파일: 150MB\n3번 파일: 200MB\n4번 파일: 250MB\n5번 파일: 300MB\n6번 파일: 350MB\n7번 파일: 400MB\n8번 파일: 450MB\n전체 용량: 2200MB\n평균 용량: 275MB"
  }
];
let current = 0;
let studentNumber = '----';

const el = (id) => document.getElementById(id);

const clean = (code) =>
  code.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');

function valid(code, item) {
  if (!/\bfor\s*\(/.test(clean(code))) return Promise.resolve(false);
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
  el('progressText').textContent = `${current + 1} / ${problems.length}`;

  el('progressBar').style.width = `${((current + 1) / problems.length) * 100}%`;

  el('conditionList').replaceChildren(
    ...item.conditions.map((text) => {
      const li = document.createElement('li');
      li.textContent = text;
      return li;
    })
  );

  el('starterCode').textContent = item.starter;
  el('expectedOutput').textContent = item.output;
  el('codeInput').value = item.starter;

  el('solutionPanel').hidden = true;
  el('solutionCode').textContent = item.solution;
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
  await navigator.clipboard.writeText(problems[current].solution);

  el('copySolution').textContent = '복사됨';

  setTimeout(() => {
    el('copySolution').textContent = '복사';
  }, 1200);
});

render();
