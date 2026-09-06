const problems = [
  {
    title:"디지털 출입증 완성하기",
    description:"디지털 출입증에 들어갈 이름, 방문 횟수, 출입 허용 여부를 알맞은 자료형으로 저장하세요. 제공 코드의 주석 부분에 값만 작성합니다.",
    conditions:["userName에는 문자열 김도윤을 저장합니다.","visitCount에는 숫자 3을 저장합니다.","isAllowed에는 불리언 true를 저장합니다.","변수 이름과 출력문은 변경하지 않습니다."],
    starter:'const userName = /* 여기에 값 작성 */;\nconst visitCount = /* 여기에 값 작성 */;\nconst isAllowed = /* 여기에 값 작성 */;\n\nconsole.log(userName);\nconsole.log(visitCount);\nconsole.log(isAllowed);',
    output:"김도윤\n3\ntrue",
    solution:'const userName = "김도윤";\nconst visitCount = 3;\nconst isAllowed = true;\n\nconsole.log(userName);\nconsole.log(visitCount);\nconsole.log(isAllowed);',
    validate:c=>test(c,/const\s+userName\s*=\s*(["'])김도윤\1\s*;?/)&&test(c,/const\s+visitCount\s*=\s*3\s*;?/)&&test(c,/const\s+isAllowed\s*=\s*true\s*;?/)&&logsOrder(c,["userName","visitCount","isAllowed"])
  },
  {
    title:"겉보기에는 같은 좌석 번호",
    description:"계산에 사용할 좌석 번호는 숫자로, 화면에 표시할 좌석 코드는 문자열로 저장하세요. 그다음 두 변수의 자료형을 출력하세요.",
    conditions:["seatNumber에는 숫자 305를 저장합니다.","seatCode에는 문자열 305를 저장합니다.","각 변수 앞에 typeof를 사용해 자료형을 출력합니다."],
    starter:'const seatNumber = /* 숫자로 작성 */;\nconst seatCode = /* 문자열로 작성 */;\n\nconsole.log(/* seatNumber의 자료형 */);\nconsole.log(/* seatCode의 자료형 */);',
    output:"number\nstring",
    solution:'const seatNumber = 305;\nconst seatCode = "305";\n\nconsole.log(typeof seatNumber);\nconsole.log(typeof seatCode);',
    validate:c=>test(c,/const\s+seatNumber\s*=\s*305\s*;?/)&&test(c,/const\s+seatCode\s*=\s*(["'])305\1\s*;?/)&&typeLogsOrder(c,["seatNumber","seatCode"])
  },
  {
    title:"사라지면 안 되는 0",
    description:"무인 보관함 번호 007의 앞자리 0이 사라지지 않도록 lockerCode에 저장하고, 값과 자료형을 차례로 출력하세요.",
    conditions:["lockerCode는 const로 선언합니다.","007은 문자열로 저장합니다.","값을 먼저 출력하고 다음 줄에 자료형을 출력합니다."],
    starter:'const lockerCode = /* 여기에 값 작성 */;\n\nconsole.log(/* lockerCode 출력 */);\nconsole.log(/* lockerCode의 자료형 출력 */);',
    output:"007\nstring",
    solution:'const lockerCode = "007";\n\nconsole.log(lockerCode);\nconsole.log(typeof lockerCode);',
    validate:c=>test(c,/const\s+lockerCode\s*=\s*(["'])007\1\s*;?/)&&mixedLogs(c,["lockerCode","typeof lockerCode"])
  },
  {
    title:"숫자 자료형 관측소",
    description:"관측 횟수, 영하의 온도, 강수량을 알맞게 저장한 뒤 세 값의 자료형을 확인하세요.",
    conditions:["observationCount에는 12를 저장합니다.","temperature에는 -3.5를 저장합니다.","rainfall에는 0을 저장합니다.","세 변수에 typeof를 사용합니다."],
    starter:'const observationCount = /* 관측 횟수 */;\nconst temperature = /* 현재 온도 */;\nconst rainfall = /* 강수량 */;\n\nconsole.log(/* observationCount의 자료형 */);\nconsole.log(/* temperature의 자료형 */);\nconsole.log(/* rainfall의 자료형 */);',
    output:"number\nnumber\nnumber",
    solution:'const observationCount = 12;\nconst temperature = -3.5;\nconst rainfall = 0;\n\nconsole.log(typeof observationCount);\nconsole.log(typeof temperature);\nconsole.log(typeof rainfall);',
    validate:c=>test(c,/const\s+observationCount\s*=\s*12\s*;?/)&&test(c,/const\s+temperature\s*=\s*-3\.5\s*;?/)&&test(c,/const\s+rainfall\s*=\s*0\s*;?/)&&typeLogsOrder(c,["observationCount","temperature","rainfall"])
  },
  {
    title:"점검 상태 오류 수정하기",
    description:"isMaintenance에는 불리언이 아닌 문자열이 잘못 저장되어 있습니다. 변수에 저장된 값만 수정하여 자료형이 boolean이 되게 하세요.",
    conditions:["변수 이름은 변경하지 않습니다.","console.log()는 변경하지 않습니다.","false에 따옴표를 사용하지 않습니다."],
    starter:'const isMaintenance = "false";\n\nconsole.log(typeof isMaintenance);',
    output:"boolean",
    solution:'const isMaintenance = false;\n\nconsole.log(typeof isMaintenance);',
    validate:c=>test(c,/const\s+isMaintenance\s*=\s*false\s*;?/)&&typeLogsOrder(c,["isMaintenance"])
  },
  {
    title:"공지문 속 따옴표 살리기",
    description:'안내 문장 안의 큰따옴표가 그대로 보이도록 notice 변수에 문자열을 저장하고 출력하세요.',
    conditions:['출력 문장은 관리자가 "점검 중"이라고 알렸습니다. 입니다.',"notice는 const로 선언합니다.","문자열 연결은 사용하지 않습니다.","notice 변수를 출력합니다."],
    starter:'const notice = /* 여기에 문장 작성 */;\n\nconsole.log(notice);',
    output:'관리자가 "점검 중"이라고 알렸습니다.',
    solution:'const notice = \'관리자가 "점검 중"이라고 알렸습니다.\';\n\nconsole.log(notice);',
    validate:c=>test(c,/const\s+notice\s*=\s*(?:'관리자가 "점검 중"이라고 알렸습니다\.'|"관리자가 \\"점검 중\\"이라고 알렸습니다\."|`관리자가 "점검 중"이라고 알렸습니다\.`)\s*;?/)&&logs(c,"notice")
  },
  {
    title:"두 줄짜리 층별 안내판",
    description:"백틱을 사용하여 두 줄로 된 층별 안내를 하나의 문자열에 저장하고 출력하세요.",
    conditions:["floorGuide는 const로 선언합니다.","백틱을 사용합니다.","1층: 전시실과 2층: 실습실을 서로 다른 줄에 작성합니다.","문자열 연결과 \\n은 사용하지 않습니다."],
    starter:'const floorGuide = /* 백틱으로 두 줄 작성 */;\n\nconsole.log(floorGuide);',
    output:"1층: 전시실\n2층: 실습실",
    solution:'const floorGuide = `1층: 전시실\n2층: 실습실`;\n\nconsole.log(floorGuide);',
    validate:c=>test(c,/const\s+floorGuide\s*=\s*`1층:\s*전시실\r?\n2층:\s*실습실`\s*;?/)&&logs(c,"floorGuide")
  },
  {
    title:"자료형 검사 결과 보관하기",
    description:"serverResponse의 자료형 검사 결과를 dataType 변수에 저장하세요. dataType의 값과 dataType 자체의 자료형을 차례로 출력합니다.",
    conditions:["dataType은 const로 선언합니다.","serverResponse 앞에 typeof를 사용한 결과를 저장합니다.","첫 번째 줄에는 dataType을 출력합니다.","두 번째 줄에는 dataType의 자료형을 출력합니다."],
    starter:'const serverResponse = true;\nconst dataType = /* 자료형 검사 결과 저장 */;\n\nconsole.log(/* dataType의 값 */);\nconsole.log(/* dataType의 자료형 */);',
    output:"boolean\nstring",
    solution:'const serverResponse = true;\nconst dataType = typeof serverResponse;\n\nconsole.log(dataType);\nconsole.log(typeof dataType);',
    validate:c=>test(c,/const\s+dataType\s*=\s*typeof\s+serverResponse\s*;?/)&&mixedLogs(c,["dataType","typeof dataType"])
  }
];

let current=0,studentNumber="----";
const el=id=>document.getElementById(id);
const clean=code=>code.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\/\/.*$/gm,"");
const test=(code,regex)=>regex.test(clean(code));
const logs=(code,name)=>new RegExp(`console\\.log\\(\\s*${name}\\s*\\)\\s*;?`).test(clean(code));
function logsOrder(code,names){let pos=-1,c=clean(code);return names.every(name=>{const r=new RegExp(`console\\.log\\(\\s*${name}\\s*\\)\\s*;?`,"g");r.lastIndex=pos+1;const f=r.exec(c);if(!f)return false;pos=f.index;return true;});}
function typeLogsOrder(code,names){return mixedLogs(code,names.map(name=>`typeof ${name}`));}
function mixedLogs(code,expressions){let pos=-1,c=clean(code);return expressions.every(expression=>{const escaped=expression.replace(/\s+/g,"\\s+");const r=new RegExp(`console\\.log\\(\\s*${escaped}\\s*\\)\\s*;?`,"g");r.lastIndex=pos+1;const f=r.exec(c);if(!f)return false;pos=f.index;return true;});}
function lines(){el("lineNumbers").textContent=Array.from({length:el("codeInput").value.split("\n").length},(_,i)=>i+1).join("\n");}
function message(text,ok){el("feedback").textContent=text;el("feedback").className=ok?"good":"bad";}
function render(){const p=problems[current];el("practice").hidden=false;el("completion").hidden=true;el("problemNumber").textContent=`문제 ${current+1}`;el("problemTitle").textContent=p.title;el("description").textContent=p.description;el("progressText").textContent=`${current+1} / ${problems.length}`;el("progressBar").style.width=`${(current+1)/problems.length*100}%`;el("conditionList").replaceChildren(...p.conditions.map(x=>{const li=document.createElement("li");li.textContent=x;return li;}));el("starterCode").textContent=p.starter;el("expectedOutput").textContent=p.output;el("codeInput").value=p.starter;el("solutionPanel").hidden=true;el("solutionCode").textContent=p.solution;el("showSolution").textContent="정답 보기";el("teacherPrev").disabled=current===0;el("teacherNext").disabled=current===problems.length-1;message("",true);lines();}
function makeCompletionCode(){const chars="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let value="T-";for(let i=0;i<4;i++)value+=chars[Math.floor(Math.random()*chars.length)];return value;}
function complete(){el("practice").hidden=true;el("completion").hidden=false;el("progressText").textContent="8 / 8";el("progressBar").style.width="100%";el("completeStudent").textContent=studentNumber;el("completedAt").textContent=new Intl.DateTimeFormat("ko-KR",{dateStyle:"medium",timeStyle:"short"}).format(new Date());el("completionCode").textContent=makeCompletionCode();el("watermark").replaceChildren(...Array.from({length:20},()=>{const span=document.createElement("span");span.textContent=studentNumber;return span;}));scrollTo(0,0);}
function submit(){const code=el("codeInput").value;if(!code.trim())return message("코드를 작성한 후 확인하세요.",false);if(!problems[current].validate(code))return message("정답이 아닙니다. 조건과 작성 위치를 다시 확인하세요.",false);message("정답입니다! 다음 문제로 이동합니다.",true);el("submitButton").disabled=true;setTimeout(()=>{current++;el("submitButton").disabled=false;if(current===problems.length)complete();else render();},650);}
el("submitButton").addEventListener("click",submit);el("resetButton").addEventListener("click",()=>{el("codeInput").value=problems[current].starter;message("처음 상태로 되돌렸습니다.",true);lines();});el("restartButton").addEventListener("click",()=>location.reload());el("codeInput").addEventListener("input",lines);el("codeInput").addEventListener("scroll",()=>el("lineNumbers").scrollTop=el("codeInput").scrollTop);el("codeInput").addEventListener("keydown",e=>{if(e.key==="Tab"){e.preventDefault();const s=e.currentTarget.selectionStart;e.currentTarget.setRangeText("  ",s,e.currentTarget.selectionEnd,"end");lines();}if((e.ctrlKey||e.metaKey)&&e.key==="Enter")submit();});
window.addEventListener("message",event=>{if(event.origin!==location.origin||event.data?.type!=="session-context")return;studentNumber=event.data.studentNumber||"----";el("learnerText").textContent=`학번 ${studentNumber}`;el("teacherBar").hidden=!event.data.teacherMode;if(!event.data.teacherMode)el("solutionPanel").hidden=true;});
el("teacherPrev").addEventListener("click",()=>{if(current>0){current--;render();}});el("teacherNext").addEventListener("click",()=>{if(current<problems.length-1){current++;render();}});el("showSolution").addEventListener("click",()=>{const show=el("solutionPanel").hidden;el("solutionPanel").hidden=!show;el("showSolution").textContent=show?"정답 닫기":"정답 보기";});el("copySolution").addEventListener("click",async()=>{await navigator.clipboard.writeText(problems[current].solution);el("copySolution").textContent="복사됨";setTimeout(()=>el("copySolution").textContent="복사",1200);});
render();
