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
  ]}
];
const TEACHER_PASSWORD="js2026";
const menu=document.getElementById("moduleMenu"),frame=document.getElementById("practiceFrame"),teacherDialog=document.getElementById("teacherDialog"),studentDialog=document.getElementById("studentDialog");
let teacherMode=sessionStorage.getItem("teacherMode")==="true",studentNumber=sessionStorage.getItem("studentNumber")||"",activeModule=null;
const allModules=modules.flatMap(item=>item.children||[item]);
function sendSessionContext(){const target=location.origin==="null"?"*":location.origin;frame.contentWindow?.postMessage({type:"session-context",teacherMode,studentNumber},target);}
function updateTeacherUI(){document.getElementById("teacherLoginButton").hidden=teacherMode;document.getElementById("teacherStatus").hidden=!teacherMode;sendSessionContext();}
function openModule(module){activeModule=module;frame.src=module.path;frame.title=`${module.title} 문제 풀이`;document.querySelectorAll(".menu-button,.submenu-button").forEach(b=>b.classList.toggle("active",b.dataset.id===module.id));if(module.id.startsWith("operator-")){const parent=document.querySelector('[data-target="submenu-operator"]');parent.classList.add("open","active");document.getElementById("submenu-operator").hidden=false;}history.replaceState(null,"",`#${module.id}`);}
modules.forEach((module,index)=>{
  if(!module.children){const b=document.createElement("button");b.type="button";b.className="menu-button";b.dataset.id=module.id;b.innerHTML=`<span class="menu-number">${String(index+1).padStart(2,"0")}</span><span>${module.title}</span>`;b.addEventListener("click",()=>openModule(module));menu.appendChild(b);return;}
  const wrap=document.createElement("div"),b=document.createElement("button"),sub=document.createElement("div");sub.id=`submenu-${module.id}`;sub.className="submenu";sub.hidden=true;b.type="button";b.className="menu-button parent-menu";b.dataset.target=sub.id;b.innerHTML=`<span class="menu-number">${String(index+1).padStart(2,"0")}</span><span>${module.title}</span><span class="chevron">⌄</span>`;b.addEventListener("click",()=>{sub.hidden=!sub.hidden;b.classList.toggle("open",!sub.hidden);});module.children.forEach((child,i)=>{const c=document.createElement("button");c.type="button";c.className="submenu-button";c.dataset.id=child.id;c.innerHTML=`<span>${i+1}</span>${child.title}`;c.addEventListener("click",()=>openModule(child));sub.appendChild(c);});wrap.append(b,sub);menu.appendChild(wrap);
});
const requested=location.hash.slice(1),initialModule=allModules.find(m=>m.id===requested)||modules[0];frame.addEventListener("load",sendSessionContext);
function beginSession(){document.getElementById("studentNumberText").textContent=studentNumber;document.getElementById("studentBadge").hidden=false;openModule(activeModule||initialModule);}
document.getElementById("studentForm").addEventListener("submit",e=>{e.preventDefault();const value=document.getElementById("studentNumber").value.trim();if(!/^\d{4}$/.test(value)){document.getElementById("studentFeedback").textContent="학번을 숫자 4자리로 입력하세요.";return;}studentNumber=value;sessionStorage.setItem("studentNumber",value);studentDialog.close();beginSession();});
document.getElementById("studentNumber").addEventListener("input",e=>e.currentTarget.value=e.currentTarget.value.replace(/\D/g,""));
document.getElementById("teacherLoginButton").addEventListener("click",()=>{document.getElementById("teacherPassword").value="";document.getElementById("loginFeedback").textContent="";teacherDialog.showModal();setTimeout(()=>document.getElementById("teacherPassword").focus(),0);});
document.getElementById("dialogCloseButton").addEventListener("click",()=>teacherDialog.close());
document.getElementById("teacherForm").addEventListener("submit",e=>{e.preventDefault();if(document.getElementById("teacherPassword").value!==TEACHER_PASSWORD){document.getElementById("loginFeedback").textContent="비밀번호가 올바르지 않습니다.";return;}teacherMode=true;sessionStorage.setItem("teacherMode","true");teacherDialog.close();updateTeacherUI();});
document.getElementById("teacherLogoutButton").addEventListener("click",()=>{teacherMode=false;sessionStorage.removeItem("teacherMode");updateTeacherUI();});
updateTeacherUI();if(studentNumber)beginSession();else{studentDialog.showModal();setTimeout(()=>document.getElementById("studentNumber").focus(),0);}
