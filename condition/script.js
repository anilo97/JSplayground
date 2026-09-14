const units = {
  if: { title: "if문", prefix: "IF", problems: [
    problem("배터리 충전 안내", "배터리가 20% 이하일 때 충전 안내를 출력하세요.", ["if문을 사용합니다.", "battery <= 20을 조건식으로 사용합니다."], 'const battery = 15;\n\n/* 조건문을 작성하세요. */', "충전이 필요합니다.", 'const battery = 15;\n\nif (battery <= 20) {\n  console.log("충전이 필요합니다.");\n}', [/if\s*\(\s*battery\s*<=\s*20\s*\)/, /console\.log\(\s*(["'])충전이 필요합니다\.\1\s*\)/]),
    problem("사용 시간 경고", "사용 시간이 제한 시간을 넘었을 때 경고 문구를 출력하세요.", ["두 변수를 비교합니다.", "조건이 거짓일 때는 아무것도 출력하지 않습니다."], 'const useTime = 130;\nconst limit = 120;\n\n/* 조건문을 작성하세요. */', "사용 시간을 초과했습니다.", 'const useTime = 130;\nconst limit = 120;\n\nif (useTime > limit) {\n  console.log("사용 시간을 초과했습니다.");\n}', [/if\s*\(\s*useTime\s*>\s*limit\s*\)/, /console\.log\(\s*(["'])사용 시간을 초과했습니다\.\1\s*\)/]),
    problem("서버 점검 알림", "서버 온도가 70도 이상이고 점검 모드일 때 알림을 출력하세요.", ["&& 연산자를 사용합니다.", "isMaintenance를 조건식에 사용합니다."], 'const temperature = 75;\nconst isMaintenance = true;\n\n/* 조건문을 작성하세요. */', "서버를 점검하세요.", 'const temperature = 75;\nconst isMaintenance = true;\n\nif (temperature >= 70 && isMaintenance) {\n  console.log("서버를 점검하세요.");\n}', [/if\s*\(\s*temperature\s*>=\s*70\s*&&\s*isMaintenance\s*\)/, /console\.log\(\s*(["'])서버를 점검하세요\.\1\s*\)/]),
    problem("공지사항 표시", "새 공지가 있을 때만 확인 문구를 출력하는 전체 if문을 작성하세요.", ["hasNotice 변수를 조건식에 직접 사용합니다.", "변수 이름을 변경하지 않습니다."], 'const hasNotice = true;\n\n/* 전체 if문을 작성하세요. */', "새 공지를 확인하세요.", 'const hasNotice = true;\n\nif (hasNotice) {\n  console.log("새 공지를 확인하세요.");\n}', [/if\s*\(\s*hasNotice\s*\)/, /console\.log\(\s*(["'])새 공지를 확인하세요\.\1\s*\)/])
  ]},
  "if-else": { title: "if ~ else문", prefix: "IE", problems: [
    problem("파일 업로드 확인", "파일 확장자가 jpg이면 업로드 가능, 아니면 업로드 불가를 출력하세요.", ["=== 연산자를 사용합니다.", "if ~ else문을 사용합니다."], 'const extension = "jpg";\n\n/* 조건문을 작성하세요. */', "업로드 가능", 'const extension = "jpg";\n\nif (extension === "jpg") {\n  console.log("업로드 가능");\n} else {\n  console.log("업로드 불가");\n}', [/if\s*\(\s*extension\s*===\s*(["'])jpg\1\s*\)/, /else\s*{/, /console\.log\(\s*(["'])업로드 가능\1\s*\)[\s\S]*console\.log\(\s*(["'])업로드 불가\2\s*\)/]),
    problem("좌석 예약 가능 여부", "남은 좌석이 1개 이상이면 예약 가능, 아니면 매진을 출력하세요.", ["경계값 1을 포함합니다.", "remainingSeats를 사용합니다."], 'const remainingSeats = 0;\n\n/* 조건문을 작성하세요. */', "매진", 'const remainingSeats = 0;\n\nif (remainingSeats >= 1) {\n  console.log("예약 가능");\n} else {\n  console.log("매진");\n}', [/if\s*\(\s*remainingSeats\s*>=\s*1\s*\)/, /else\s*{/, /console\.log\(\s*(["'])예약 가능\1\s*\)[\s\S]*console\.log\(\s*(["'])매진\2\s*\)/]),
    problem("제출 시간 확인", "현재 시간이 마감 시간 이하이면 제출 가능, 아니면 제출 마감을 출력하세요.", ["currentHour와 deadline을 비교합니다.", "두 결과 중 하나만 출력합니다."], 'const currentHour = 18;\nconst deadline = 18;\n\n/* 조건문을 작성하세요. */', "제출 가능", 'const currentHour = 18;\nconst deadline = 18;\n\nif (currentHour <= deadline) {\n  console.log("제출 가능");\n} else {\n  console.log("제출 마감");\n}', [/if\s*\(\s*currentHour\s*<=\s*deadline\s*\)/, /else\s*{/, /console\.log\(\s*(["'])제출 가능\1\s*\)[\s\S]*console\.log\(\s*(["'])제출 마감\2\s*\)/]),
    problem("기기 연결 상태", "기기가 연결되어 있으면 실행 준비, 아니면 연결 필요를 출력하세요.", ["isConnected를 조건식에 직접 사용합니다.", "전체 if ~ else문을 작성합니다."], 'const isConnected = false;\n\n/* 전체 조건문을 작성하세요. */', "연결 필요", 'const isConnected = false;\n\nif (isConnected) {\n  console.log("실행 준비");\n} else {\n  console.log("연결 필요");\n}', [/if\s*\(\s*isConnected\s*\)/, /else\s*{/, /console\.log\(\s*(["'])실행 준비\1\s*\)[\s\S]*console\.log\(\s*(["'])연결 필요\2\s*\)/])
  ]},
  "else-if": { title: "if ~ else if문", prefix: "EI", problems: [
    problem("화면 크기 구분", "화면 너비가 1024 이상이면 데스크톱, 768 이상이면 태블릿, 나머지는 모바일을 출력하세요.", ["큰 범위부터 검사합니다.", "if ~ else if ~ else문을 사용합니다."], 'const width = 820;\n\n/* 조건문을 작성하세요. */', "태블릿", 'const width = 820;\n\nif (width >= 1024) {\n  console.log("데스크톱");\n} else if (width >= 768) {\n  console.log("태블릿");\n} else {\n  console.log("모바일");\n}', [/if\s*\(\s*width\s*>=\s*1024\s*\)/, /else\s+if\s*\(\s*width\s*>=\s*768\s*\)/, /console\.log\(\s*(["'])데스크톱\1\s*\)[\s\S]*console\.log\(\s*(["'])태블릿\2\s*\)[\s\S]*console\.log\(\s*(["'])모바일\3\s*\)/]),
    problem("서버 응답 속도", "응답 시간이 200ms 이하이면 빠름, 500ms 이하이면 보통, 나머지는 느림을 출력하세요.", ["경계값을 포함합니다.", "조건을 오름차순으로 검사합니다."], 'const responseTime = 420;\n\n/* 조건문을 작성하세요. */', "보통", 'const responseTime = 420;\n\nif (responseTime <= 200) {\n  console.log("빠름");\n} else if (responseTime <= 500) {\n  console.log("보통");\n} else {\n  console.log("느림");\n}', [/if\s*\(\s*responseTime\s*<=\s*200\s*\)/, /else\s+if\s*\(\s*responseTime\s*<=\s*500\s*\)/, /console\.log\(\s*(["'])빠름\1\s*\)[\s\S]*console\.log\(\s*(["'])보통\2\s*\)[\s\S]*console\.log\(\s*(["'])느림\3\s*\)/]),
    problem("저장 공간 상태", "사용률이 90 이상이면 위험, 70 이상이면 주의, 나머지는 정상을 출력하세요.", ["가장 높은 기준부터 검사합니다.", "usage 변수를 사용합니다."], 'const usage = 93;\n\n/* 조건문을 작성하세요. */', "위험", 'const usage = 93;\n\nif (usage >= 90) {\n  console.log("위험");\n} else if (usage >= 70) {\n  console.log("주의");\n} else {\n  console.log("정상");\n}', [/if\s*\(\s*usage\s*>=\s*90\s*\)/, /else\s+if\s*\(\s*usage\s*>=\s*70\s*\)/, /console\.log\(\s*(["'])위험\1\s*\)[\s\S]*console\.log\(\s*(["'])주의\2\s*\)[\s\S]*console\.log\(\s*(["'])정상\3\s*\)/]),
    problem("잘못된 조건 순서 고치기", "80점이 우수로 판정되도록 조건의 순서를 고치세요.", ["코드의 조건 순서만 바꿉니다.", "80 이상을 먼저 검사합니다."], 'const score = 85;\n\nif (score >= 60) {\n  console.log("통과");\n} else if (score >= 80) {\n  console.log("우수");\n} else {\n  console.log("재도전");\n}', "우수", 'const score = 85;\n\nif (score >= 80) {\n  console.log("우수");\n} else if (score >= 60) {\n  console.log("통과");\n} else {\n  console.log("재도전");\n}', [/if\s*\(\s*score\s*>=\s*80\s*\)[\s\S]*else\s+if\s*\(\s*score\s*>=\s*60\s*\)/, /console\.log\(\s*(["'])우수\1\s*\)[\s\S]*console\.log\(\s*(["'])통과\2\s*\)/])
  ]},
  nested: { title: "중첩 조건문", prefix: "NE", problems: [
    problem("행사 신청 확인", "신청 기간일 때만 남은 좌석을 확인해 신청 가능 여부를 출력하세요.", ["먼저 isOpen을 검사합니다.", "안쪽에서 seats > 0을 검사합니다."], 'const isOpen = true;\nconst seats = 3;\n\n/* 중첩 조건문을 작성하세요. */', "신청 가능", 'const isOpen = true;\nconst seats = 3;\n\nif (isOpen) {\n  if (seats > 0) {\n    console.log("신청 가능");\n  } else {\n    console.log("좌석 없음");\n  }\n} else {\n  console.log("신청 기간 아님");\n}', [/if\s*\(\s*isOpen\s*\)\s*{[\s\S]*if\s*\(\s*seats\s*>\s*0\s*\)/, /console\.log\(\s*(["'])신청 가능\1\s*\)/, /console\.log\(\s*(["'])신청 기간 아님\1\s*\)/]),
    problem("파일 선택과 형식 검사", "파일이 선택된 경우에만 확장자가 pdf인지 확인하세요.", ["hasFile을 먼저 검사합니다.", "안쪽에서 extension === 'pdf'를 검사합니다."], 'const hasFile = true;\nconst extension = "txt";\n\n/* 중첩 조건문을 작성하세요. */', "PDF 파일이 아닙니다.", 'const hasFile = true;\nconst extension = "txt";\n\nif (hasFile) {\n  if (extension === "pdf") {\n    console.log("업로드 가능");\n  } else {\n    console.log("PDF 파일이 아닙니다.");\n  }\n} else {\n  console.log("파일을 선택하세요.");\n}', [/if\s*\(\s*hasFile\s*\)\s*{[\s\S]*if\s*\(\s*extension\s*===\s*(["'])pdf\1\s*\)/, /console\.log\(\s*(["'])PDF 파일이 아닙니다\.\1\s*\)/, /console\.log\(\s*(["'])파일을 선택하세요\.\1\s*\)/]),
    problem("장비 실행 전 점검", "전원이 켜진 경우에만 네트워크 연결 여부를 검사하세요.", ["isPowered를 바깥 조건으로 사용합니다.", "isOnline을 안쪽 조건으로 사용합니다."], 'const isPowered = false;\nconst isOnline = true;\n\n/* 중첩 조건문 전체를 작성하세요. */', "전원을 켜세요.", 'const isPowered = false;\nconst isOnline = true;\n\nif (isPowered) {\n  if (isOnline) {\n    console.log("실행 가능");\n  } else {\n    console.log("네트워크를 연결하세요.");\n  }\n} else {\n  console.log("전원을 켜세요.");\n}', [/if\s*\(\s*isPowered\s*\)\s*{[\s\S]*if\s*\(\s*isOnline\s*\)/, /console\.log\(\s*(["'])실행 가능\1\s*\)/, /console\.log\(\s*(["'])전원을 켜세요\.\1\s*\)/])
  ]},
  switch: { title: "switch문", prefix: "SW", problems: [
    problem("문의 담당 부서", "문의 유형이 account이면 회원 담당을 출력하세요.", ["switch와 case를 사용합니다.", "각 case 끝에 break를 작성합니다.", "default를 작성합니다."], 'const inquiry = "account";\n\n/* switch문을 작성하세요. */', "회원 담당", 'const inquiry = "account";\n\nswitch (inquiry) {\n  case "account":\n    console.log("회원 담당");\n    break;\n  case "payment":\n    console.log("결제 담당");\n    break;\n  default:\n    console.log("일반 문의");\n}', [/switch\s*\(\s*inquiry\s*\)/, /case\s*(["'])account\1\s*:/, /console\.log\(\s*(["'])회원 담당\1\s*\)\s*;?\s*break/, /default\s*:/]),
    problem("화면 테마 안내", "theme 값에 따라 밝은 화면 또는 어두운 화면을 출력하세요.", ["light와 dark case를 만듭니다.", "알 수 없는 값은 기본 화면으로 처리합니다."], 'const theme = "dark";\n\n/* switch문을 작성하세요. */', "어두운 화면", 'const theme = "dark";\n\nswitch (theme) {\n  case "light":\n    console.log("밝은 화면");\n    break;\n  case "dark":\n    console.log("어두운 화면");\n    break;\n  default:\n    console.log("기본 화면");\n}', [/switch\s*\(\s*theme\s*\)/, /case\s*(["'])light\1\s*:/, /case\s*(["'])dark\1\s*:/, /default\s*:/, /console\.log\(\s*(["'])어두운 화면\1\s*\)\s*;?\s*break/]),
    problem("알림 주기 설정", "주기가 daily이면 매일, weekly이면 매주, monthly이면 매월을 출력하세요.", ["세 개의 case를 작성합니다.", "default에서는 설정 오류를 출력합니다."], 'const cycle = "weekly";\n\n/* switch문을 작성하세요. */', "매주", 'const cycle = "weekly";\n\nswitch (cycle) {\n  case "daily": console.log("매일"); break;\n  case "weekly": console.log("매주"); break;\n  case "monthly": console.log("매월"); break;\n  default: console.log("설정 오류");\n}', [/switch\s*\(\s*cycle\s*\)/, /case\s*(["'])daily\1\s*:/, /case\s*(["'])weekly\1\s*:/, /case\s*(["'])monthly\1\s*:/, /default\s*:/]),
    problem("빠진 break 고치기", "검토 중만 출력되도록 첫 번째 case에 빠진 코드를 추가하세요.", ["출력문은 변경하지 않습니다.", "case 사이의 연속 실행을 막습니다."], 'const status = "review";\n\nswitch (status) {\n  case "review":\n    console.log("검토 중");\n  case "done":\n    console.log("처리 완료");\n    break;\n}', "검토 중", 'const status = "review";\n\nswitch (status) {\n  case "review":\n    console.log("검토 중");\n    break;\n  case "done":\n    console.log("처리 완료");\n    break;\n}', [/case\s*(["'])review\1\s*:[\s\S]*console\.log\(\s*(["'])검토 중\2\s*\)\s*;?\s*break[\s\S]*case\s*(["'])done\3\s*:/])
  ]},
  truthy: { title: "Truthy와 Falsy", prefix: "TF", problems: [
    problem("검색어 입력 확인", "검색어가 있으면 검색 시작, 비어 있으면 검색어 입력을 출력하세요.", ["비교 연산자를 사용하지 않습니다.", "searchKeyword를 조건식에 직접 사용합니다."], 'const searchKeyword = "자바스크립트";\n\n/* 조건문을 작성하세요. */', "검색 시작", 'const searchKeyword = "자바스크립트";\n\nif (searchKeyword) {\n  console.log("검색 시작");\n} else {\n  console.log("검색어 입력");\n}', [/if\s*\(\s*searchKeyword\s*\)/, /console\.log\(\s*(["'])검색 시작\1\s*\)[\s\S]*console\.log\(\s*(["'])검색어 입력\2\s*\)/]),
    problem("프로필 이미지 확인", "이미지 경로가 있으면 등록 이미지, 없으면 기본 이미지를 출력하세요.", ["profileImage만 조건식에 작성합니다.", "빈 문자열의 Falsy 특성을 이용합니다."], 'const profileImage = "";\n\n/* 조건문을 작성하세요. */', "기본 이미지", 'const profileImage = "";\n\nif (profileImage) {\n  console.log("등록 이미지");\n} else {\n  console.log("기본 이미지");\n}', [/if\s*\(\s*profileImage\s*\)/, /console\.log\(\s*(["'])등록 이미지\1\s*\)[\s\S]*console\.log\(\s*(["'])기본 이미지\2\s*\)/]),
    problem("읽지 않은 메시지", "읽지 않은 메시지가 있으면 새 메시지 있음, 0이면 모두 읽음을 출력하세요.", ["unreadMessages만 조건식에 작성합니다.", "숫자 0의 Falsy 특성을 이용합니다."], 'const unreadMessages = 0;\n\n/* 조건문을 작성하세요. */', "모두 읽음", 'const unreadMessages = 0;\n\nif (unreadMessages) {\n  console.log("새 메시지 있음");\n} else {\n  console.log("모두 읽음");\n}', [/if\s*\(\s*unreadMessages\s*\)/, /console\.log\(\s*(["'])새 메시지 있음\1\s*\)[\s\S]*console\.log\(\s*(["'])모두 읽음\2\s*\)/])
  ]},
  mixed: { title: "조건문 종합", prefix: "MX", problems: [
    problem("로그인 상태 안내", "로그인 여부에 따라 환영합니다 또는 로그인이 필요합니다를 출력하세요.", ["알맞은 조건문을 직접 선택합니다.", "두 결과 중 하나만 출력합니다."], 'const isLoggedIn = true;\n\n/* 조건문을 작성하세요. */', "환영합니다.", 'const isLoggedIn = true;\n\nif (isLoggedIn) {\n  console.log("환영합니다.");\n} else {\n  console.log("로그인이 필요합니다.");\n}', [/if\s*\(\s*isLoggedIn\s*\)/, /else\s*{/, /console\.log\(\s*(["'])환영합니다\.\1\s*\)[\s\S]*console\.log\(\s*(["'])로그인이 필요합니다\.\2\s*\)/]),
    problem("네트워크 품질 판정", "신호가 80 이상이면 매우 좋음, 50 이상이면 보통, 나머지는 불안정을 출력하세요.", ["알맞은 조건문을 직접 선택합니다.", "높은 기준부터 검사합니다."], 'const signal = 65;\n\n/* 조건문을 작성하세요. */', "보통", 'const signal = 65;\n\nif (signal >= 80) {\n  console.log("매우 좋음");\n} else if (signal >= 50) {\n  console.log("보통");\n} else {\n  console.log("불안정");\n}', [/if\s*\(\s*signal\s*>=\s*80\s*\)/, /else\s+if\s*\(\s*signal\s*>=\s*50\s*\)/, /console\.log\(\s*(["'])매우 좋음\1\s*\)[\s\S]*console\.log\(\s*(["'])보통\2\s*\)[\s\S]*console\.log\(\s*(["'])불안정\3\s*\)/]),
    problem("다운로드 전 확인", "파일이 있을 때만 저장 공간을 검사해 다운로드 가능 여부를 출력하세요.", ["단계적으로 두 조건을 검사합니다.", "파일이 없으면 파일 없음이라고 출력합니다."], 'const hasFile = true;\nconst freeSpace = 2;\n\n/* 조건문을 작성하세요. */', "다운로드 가능", 'const hasFile = true;\nconst freeSpace = 2;\n\nif (hasFile) {\n  if (freeSpace >= 1) {\n    console.log("다운로드 가능");\n  } else {\n    console.log("저장 공간 부족");\n  }\n} else {\n  console.log("파일 없음");\n}', [/if\s*\(\s*hasFile\s*\)\s*{[\s\S]*if\s*\(\s*freeSpace\s*>=\s*1\s*\)/, /console\.log\(\s*(["'])다운로드 가능\1\s*\)/, /console\.log\(\s*(["'])파일 없음\1\s*\)/]),
    problem("문서 처리 상태", "문서 상태에 따라 작성 중, 검토 중, 제출 완료를 출력하고 그 외에는 알 수 없음을 출력하세요.", ["하나의 문자열 값을 여러 값과 비교하는 조건문을 선택합니다.", "각 경우가 이어서 실행되지 않게 합니다."], 'const documentStatus = "submitted";\n\n/* 조건문을 작성하세요. */', "제출 완료", 'const documentStatus = "submitted";\n\nswitch (documentStatus) {\n  case "draft": console.log("작성 중"); break;\n  case "review": console.log("검토 중"); break;\n  case "submitted": console.log("제출 완료"); break;\n  default: console.log("알 수 없음");\n}', [/switch\s*\(\s*documentStatus\s*\)/, /case\s*(["'])draft\1\s*:/, /case\s*(["'])review\1\s*:/, /case\s*(["'])submitted\1\s*:/, /default\s*:/])
  ]}
};

function problem(title, description, conditions, starter, output, solution, required) {
  return { title, description, conditions, starter, output, solution, required };
}

const category = new URLSearchParams(location.search).get("category") || "if";
const unit = units[category] || units.if;
const problems = unit.problems;
let current = 0;
let studentNumber = "----";
const el = id => document.getElementById(id);
const clean = code => code.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "");
function valid(code, item) { const answer = clean(code); return item.required.every(rule => rule.test(answer)); }
function lines() { el("lineNumbers").textContent = Array.from({ length: el("codeInput").value.split("\n").length }, (_, i) => i + 1).join("\n"); }
function message(text, ok) { el("feedback").textContent = text; el("feedback").className = ok ? "good" : "bad"; }
function render() {
  const item = problems[current];
  el("practice").hidden = false; el("completion").hidden = true;
  el("unitTitle").textContent = unit.title; el("problemNumber").textContent = `문제 ${current + 1}`;
  el("problemTitle").textContent = item.title; el("description").textContent = item.description;
  el("progressText").textContent = `${current + 1} / ${problems.length}`;
  el("progressBar").style.width = `${(current + 1) / problems.length * 100}%`;
  el("conditionList").replaceChildren(...item.conditions.map(text => { const li = document.createElement("li"); li.textContent = text; return li; }));
  el("starterCode").textContent = item.starter; el("expectedOutput").textContent = item.output; el("codeInput").value = item.starter;
  el("solutionPanel").hidden = true; el("solutionCode").textContent = item.solution; el("showSolution").textContent = "정답 보기";
  el("teacherPrev").disabled = current === 0; el("teacherNext").disabled = current === problems.length - 1;
  message("", true); lines();
}
function makeCode() { const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; let code = unit.prefix + "-"; for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)]; return code; }
function complete() {
  el("practice").hidden = true; el("completion").hidden = false; el("progressText").textContent = `${problems.length} / ${problems.length}`; el("progressBar").style.width = "100%";
  el("completeTitle").textContent = `${unit.title} 완료`; el("completeStudent").textContent = studentNumber; el("completeCount").textContent = problems.length;
  el("completedAt").textContent = new Intl.DateTimeFormat("ko-KR", { dateStyle: "medium", timeStyle: "short" }).format(new Date()); el("completionCode").textContent = makeCode();
  el("watermark").replaceChildren(...Array.from({ length: 20 }, () => { const span = document.createElement("span"); span.textContent = studentNumber; return span; })); scrollTo(0, 0);
}
function submit() {
  const code = el("codeInput").value;
  if (!code.trim()) return message("코드를 작성한 후 확인하세요.", false);
  if (!valid(code, problems[current])) return message("정답이 아닙니다. 조건과 작성 위치를 다시 확인하세요.", false);
  message("정답입니다! 다음 문제로 이동합니다.", true); el("submitButton").disabled = true;
  setTimeout(() => { current++; el("submitButton").disabled = false; current === problems.length ? complete() : render(); }, 650);
}
el("submitButton").addEventListener("click", submit);
el("resetButton").addEventListener("click", () => { el("codeInput").value = problems[current].starter; message("처음 상태로 되돌렸습니다.", true); lines(); });
el("restartButton").addEventListener("click", () => location.reload());
el("codeInput").addEventListener("input", lines); el("codeInput").addEventListener("scroll", () => el("lineNumbers").scrollTop = el("codeInput").scrollTop);
el("codeInput").addEventListener("keydown", event => { if (event.key === "Tab") { event.preventDefault(); const start = event.currentTarget.selectionStart; event.currentTarget.setRangeText("  ", start, event.currentTarget.selectionEnd, "end"); lines(); } if ((event.ctrlKey || event.metaKey) && event.key === "Enter") submit(); });
window.addEventListener("message", event => { if (event.origin !== location.origin || event.data?.type !== "session-context") return; studentNumber = event.data.studentNumber || "----"; el("learnerText").textContent = `학번 ${studentNumber}`; el("teacherBar").hidden = !event.data.teacherMode; if (!event.data.teacherMode) el("solutionPanel").hidden = true; });
el("teacherPrev").addEventListener("click", () => { if (current > 0) { current--; render(); } });
el("teacherNext").addEventListener("click", () => { if (current < problems.length - 1) { current++; render(); } });
el("showSolution").addEventListener("click", () => { const show = el("solutionPanel").hidden; el("solutionPanel").hidden = !show; el("showSolution").textContent = show ? "정답 닫기" : "정답 보기"; });
el("copySolution").addEventListener("click", async () => { await navigator.clipboard.writeText(problems[current].solution); el("copySolution").textContent = "복사됨"; setTimeout(() => el("copySolution").textContent = "복사", 1200); });
render();
