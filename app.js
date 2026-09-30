const modules = [
  { id:"variable", title:"변수", path:"variable/" },
  { id:"datatype", title:"자료형", path:"datatype/" },
  { id:"operator", title:"연산자", children:[
    { id:"operator-arithmetic", title:"산술 연산자", path:"operator/?category=arithmetic" },
    { id:"operator-assignment", title:"대입 연산자", path:"operator/?category=assignment" },
    { id:"operator-comparison", title:"비교 연산자", path:"operator/?category=comparison" },
    { id:"operator-equality", title:"일치 연산자", path:"operator/?category=equality" },
    { id:"operator-logical", title:"논리 연산자", path:"operator/?category=logical" },
    { id:"operator-increment", title:"증감 연산자", path:"operator/?category=increment" },
    { id:"operator-string", title:"문자열 연산자", path:"operator/?category=string" },
    { id:"operator-ternary", title:"삼항 연산자", path:"operator/?category=ternary" },
    { id:"operator-precedence", title:"연산자 우선순위", path:"operator/?category=precedence" }
  ]},
  { id:"condition", title:"조건문", children:[
    { id:"condition-if", title:"if문", path:"condition/?category=if" },
    { id:"condition-if-else", title:"if ~ else문", path:"condition/?category=if-else" },
    { id:"condition-else-if", title:"if ~ else if문", path:"condition/?category=else-if" },
    { id:"condition-nested", title:"중첩 조건문", path:"condition/?category=nested" },
    { id:"condition-switch", title:"switch문", path:"condition/?category=switch" },
    { id:"condition-truthy", title:"Truthy와 Falsy", path:"condition/?category=truthy" },
    { id:"condition-mixed", title:"조건문 종합", path:"condition/?category=mixed" }
  ]},
  { id: "loop", title: "반복문", children: [
  { id: "loop-for", title: "for문", path: "loop/?category=for" },
  { id: "loop-while", title: "while문", path: "loop/?category=while" }
] }
];
const menu=document.getElementById("moduleMenu"),frame=document.getElementById("practiceFrame"),teacherDialog=document.getElementById("teacherDialog"),studentDialog=document.getElementById("studentDialog");
let solutionBundle=null;
let teacherMode=false,studentNumber=sessionStorage.getItem("studentNumber")||"",activeModule=null;
const allModules=modules.flatMap(item=>item.children||[item]);
function sendSessionContext(){const target=location.origin==="null"?"*":location.origin;frame.contentWindow?.postMessage({type:"session-context",teacherMode,studentNumber,solutions:teacherMode?(solutionBundle?.units[activeModule?.id]||[]):[]},target);}
function updateTeacherUI(){document.getElementById("teacherLoginButton").hidden=teacherMode;document.getElementById("teacherStatus").hidden=!teacherMode;sendSessionContext();}
function openModule(module){activeModule=module;frame.src=module.path;frame.title=`${module.title} 문제 풀이`;document.querySelectorAll(".menu-button,.submenu-button").forEach(b=>b.classList.toggle("active",b.dataset.id===module.id));const parentId=module.id.split("-")[0];const parent=document.querySelector(`[data-target="submenu-${parentId}"]`);if(parent){parent.classList.add("open","active");document.getElementById(`submenu-${parentId}`).hidden=false;}history.replaceState(null,"",`#${module.id}`);}
modules.forEach((module,index)=>{
  if(!module.children){const b=document.createElement("button");b.type="button";b.className="menu-button";b.dataset.id=module.id;b.innerHTML=`<span class="menu-number">${String(index+1).padStart(2,"0")}</span><span>${module.title}</span>`;b.addEventListener("click",()=>openModule(module));menu.appendChild(b);return;}
  const wrap=document.createElement("div"),b=document.createElement("button"),sub=document.createElement("div");sub.id=`submenu-${module.id}`;sub.className="submenu";sub.hidden=true;b.type="button";b.className="menu-button parent-menu";b.dataset.target=sub.id;b.innerHTML=`<span class="menu-number">${String(index+1).padStart(2,"0")}</span><span>${module.title}</span><span class="chevron">⌄</span>`;b.addEventListener("click",()=>{sub.hidden=!sub.hidden;b.classList.toggle("open",!sub.hidden);});module.children.forEach((child,i)=>{const c=document.createElement("button");c.type="button";c.className="submenu-button";c.dataset.id=child.id;c.innerHTML=`<span>${i+1}</span>${child.title}`;c.addEventListener("click",()=>openModule(child));sub.appendChild(c);});wrap.append(b,sub);menu.appendChild(wrap);
});
const requested=location.hash.slice(1),initialModule=allModules.find(m=>m.id===requested)||modules[0];frame.addEventListener("load",sendSessionContext);
function beginSession(){document.getElementById("studentNumberText").textContent=studentNumber;document.getElementById("studentBadge").hidden=false;openModule(activeModule||initialModule);}
document.getElementById("studentForm").addEventListener("submit",e=>{e.preventDefault();const value=document.getElementById("studentNumber").value.trim();if(!/^\d{4}$/.test(value)){document.getElementById("studentFeedback").textContent="학번을 숫자 4자리로 입력하세요.";return;}studentNumber=value;sessionStorage.setItem("studentNumber",value);studentDialog.close();beginSession();});
document.getElementById("studentNumber").addEventListener("input",e=>e.currentTarget.value=e.currentTarget.value.replace(/\D/g,""));
document.getElementById("teacherLoginButton").addEventListener("click",()=>{document.getElementById("teacherSolutionFile").value="";document.getElementById("loginFeedback").textContent="";teacherDialog.showModal();setTimeout(()=>document.getElementById("teacherSolutionFile").focus(),0);});
document.getElementById("dialogCloseButton").addEventListener("click",()=>teacherDialog.close());
document.getElementById("teacherForm").addEventListener("submit",async e=>{
  e.preventDefault();const feedback=document.getElementById("loginFeedback");const file=document.getElementById("teacherSolutionFile").files[0];
  if(!file){feedback.textContent="파일을 선택하세요.";return;}
  try{
    if(file.size>2000000)throw new Error("파일이 너무 큽니다.");
    const data=JSON.parse(await file.text());
    if(data.format!=="jsplayground-teacher-solutions"||data.version!==1||!data.units)throw new Error("지원하는 정답 파일 형식이 아닙니다.");
    for(const m of allModules){const entries=data.units[m.id];if(!Array.isArray(entries)||!entries.length||entries.some(x=>!x||typeof x.title!=="string"||typeof x.solution!=="string"))throw new Error("자료가 누락되었거나 파일 형식이 잘못되었습니다.");}
    solutionBundle=data;teacherMode=true;teacherDialog.close();updateTeacherUI();
  }catch(error){feedback.textContent=error instanceof SyntaxError?"올바른 JSON 파일을 선택하세요.":error.message;}
});
document.getElementById("teacherLogoutButton").addEventListener("click",()=>{teacherMode=false;solutionBundle=null;sessionStorage.removeItem("teacherMode");updateTeacherUI();});
sessionStorage.removeItem("teacherMode");
updateTeacherUI();if(studentNumber)beginSession();else{studentDialog.showModal();setTimeout(()=>document.getElementById("studentNumber").focus(),0);}
