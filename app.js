// 새 단원을 추가할 때 이 목록에 한 줄을 추가하세요.
const modules = [
  { id: "variable", title: "변수", path: "variable/" },
  { id: "datatype", title: "자료형", path: "datatype/" }
];

// 원하는 비밀번호로 변경하세요. 보안용이 아니라 교사용 화면을 구분하는 용도입니다.
const TEACHER_PASSWORD = "js2026";
const menu = document.getElementById("moduleMenu");
const frame = document.getElementById("practiceFrame");
const teacherDialog = document.getElementById("teacherDialog");
const studentDialog = document.getElementById("studentDialog");
let teacherMode = sessionStorage.getItem("teacherMode") === "true";
let studentNumber = sessionStorage.getItem("studentNumber") || "";
let activeModule = null;

function sendSessionContext() {
  const targetOrigin = location.origin === "null" ? "*" : location.origin;
  frame.contentWindow?.postMessage({ type: "session-context", teacherMode, studentNumber }, targetOrigin);
}
function updateTeacherUI() {
  document.getElementById("teacherLoginButton").hidden = teacherMode;
  document.getElementById("teacherStatus").hidden = !teacherMode;
  sendSessionContext();
}
function openModule(module) {
  activeModule = module;
  frame.src = module.path;
  frame.title = `${module.title} 문제 풀이`;
  document.querySelectorAll(".menu-button").forEach(button => button.classList.toggle("active", button.dataset.id === module.id));
  history.replaceState(null, "", `#${module.id}`);
}

modules.forEach((module, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "menu-button";
  button.dataset.id = module.id;
  button.innerHTML = `<span class="menu-number">${String(index + 1).padStart(2, "0")}</span><span>${module.title}</span>`;
  button.addEventListener("click", () => openModule(module));
  menu.appendChild(button);
});

const requested = location.hash.slice(1);
const initialModule = modules.find(module => module.id === requested) || modules[0];
frame.addEventListener("load", sendSessionContext);

function beginSession() {
  document.getElementById("studentNumberText").textContent = studentNumber;
  document.getElementById("studentBadge").hidden = false;
  openModule(activeModule || initialModule);
}

document.getElementById("studentForm").addEventListener("submit", event => {
  event.preventDefault();
  const value = document.getElementById("studentNumber").value.trim();
  if (!/^\d{4}$/.test(value)) {
    document.getElementById("studentFeedback").textContent = "학번을 숫자 4자리로 입력하세요.";
    return;
  }
  studentNumber = value;
  sessionStorage.setItem("studentNumber", value);
  studentDialog.close();
  beginSession();
});
document.getElementById("studentNumber").addEventListener("input", event => {
  event.currentTarget.value = event.currentTarget.value.replace(/\D/g, "");
});

document.getElementById("teacherLoginButton").addEventListener("click", () => {
  document.getElementById("teacherPassword").value = "";
  document.getElementById("loginFeedback").textContent = "";
  teacherDialog.showModal();
  setTimeout(() => document.getElementById("teacherPassword").focus(), 0);
});
document.getElementById("dialogCloseButton").addEventListener("click", () => teacherDialog.close());
document.getElementById("teacherForm").addEventListener("submit", event => {
  event.preventDefault();
  if (document.getElementById("teacherPassword").value !== TEACHER_PASSWORD) {
    document.getElementById("loginFeedback").textContent = "비밀번호가 올바르지 않습니다.";
    return;
  }
  teacherMode = true;
  sessionStorage.setItem("teacherMode", "true");
  teacherDialog.close();
  updateTeacherUI();
});
document.getElementById("teacherLogoutButton").addEventListener("click", () => {
  teacherMode = false;
  sessionStorage.removeItem("teacherMode");
  updateTeacherUI();
});

updateTeacherUI();
if (studentNumber) beginSession();
else {
  studentDialog.showModal();
  setTimeout(() => document.getElementById("studentNumber").focus(), 0);
}
