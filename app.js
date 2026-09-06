// 새 단원을 추가할 때 이 목록에 한 줄을 추가하세요.
// path는 새로 만든 폴더 이름과 같아야 합니다.
const modules = [
  { id: "variable", title: "변수", path: "variable/" }
];

// 원하는 비밀번호로 변경하세요. 보안용이 아니라 교사용 화면을 구분하는 용도입니다.
const TEACHER_PASSWORD = "js2026";

const menu = document.getElementById("moduleMenu");
const frame = document.getElementById("practiceFrame");
const teacherDialog = document.getElementById("teacherDialog");
let teacherMode = sessionStorage.getItem("teacherMode") === "true";

function sendTeacherMode() {
  frame.contentWindow?.postMessage({ type: "teacher-mode", enabled: teacherMode }, location.origin);
}

function updateTeacherUI() {
  document.getElementById("teacherLoginButton").hidden = teacherMode;
  document.getElementById("teacherStatus").hidden = !teacherMode;
  sendTeacherMode();
}

function openModule(module) {
  frame.src = module.path;
  frame.title = `${module.title} 문제 풀이`;
  document.querySelectorAll(".menu-button").forEach(button => {
    button.classList.toggle("active", button.dataset.id === module.id);
  });
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
openModule(modules.find(module => module.id === requested) || modules[0]);
frame.addEventListener("load", sendTeacherMode);

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
