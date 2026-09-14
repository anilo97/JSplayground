# JS Playground

JavaScript 단원별 문제 풀이 사이트입니다. 루트의 왼쪽 메뉴는 계속 유지되고, 선택한 단원의 문제가 오른쪽에서 열립니다.

현재 `변수`, `자료형`, `연산자`, `조건문` 단원이 들어 있습니다. 조건문은 if문부터 종합 문제까지 7개 영역, 총 26문제로 구성되어 있습니다. 처음 접속하면 학번 4자리를 입력하며, 문제 화면 상단과 완료 화면에 학번이 표시됩니다. 완료 화면에는 학번 워터마크, 완료 시각, 단원별 무작위 완료 코드가 함께 표시됩니다.

## 교사용 모드 공개하기

교사용 모드의 HTML과 JavaScript 기능은 항상 유지되어 있습니다. 학생 화면에서는 루트 `style.css`의 다음 한 줄로 버튼만 숨깁니다.

```css
.teacher-login {
  display: none;
}
```

교사용 메뉴를 사용할 때는 `display: none;` 한 줄만 삭제하거나 주석 처리하세요. 사이트를 새로고침하면 왼쪽 메뉴 아래에 `교사용 모드` 버튼이 나타납니다. 비밀번호는 루트 `app.js`의 `TEACHER_PASSWORD`에서 변경할 수 있습니다.

> `index.html`의 `teacherDialog`를 주석 처리하면 JavaScript가 해당 요소를 찾지 못해 사이트 실행이 중단될 수 있으므로 HTML은 그대로 두세요.

## GitHub Pages 설정

1. 이 ZIP 파일의 압축을 풉니다.
2. 압축을 푼 폴더 안의 모든 파일과 폴더를 `JSplayground` 저장소 최상위에 올립니다.
3. GitHub 저장소에서 `Settings` → `Pages`로 이동합니다.
4. `Build and deployment`의 Source를 `Deploy from a branch`로 선택합니다.
5. Branch를 `main`, 폴더를 `/(root)`로 선택하고 `Save`를 누릅니다.
6. 잠시 후 `https://anilo97.github.io/JSplayground/`로 접속합니다.

## 새 단원 추가 방법

1. `variable` 폴더를 복사하여 새 단원 이름으로 바꿉니다. 예: `operator`
2. 복사한 폴더 안의 문제 내용과 검사 코드를 수정합니다.
3. 루트의 `app.js`에 새 단원을 한 줄 추가합니다.

```javascript
const modules = [
  { id: 'variable', title: '변수', path: 'variable/' },
  { id: 'operator', title: '연산자', path: 'operator/' },
];
```

`id`와 `path`는 영문으로 작성하고, `path`는 실제 폴더 이름과 같게 작성합니다.

## 현재 구조

```text
JSplayground/
├─ index.html
├─ style.css
├─ app.js
├─ README.md
├─ variable/
   ├─ index.html
   ├─ style.css
   └─ script.js
├─ datatype/
   ├─ index.html
   ├─ style.css
   └─ script.js
├─ operator/
   ├─ index.html
   ├─ style.css
   └─ script.js
└─ condition/
   ├─ index.html
   ├─ style.css
   └─ script.js
```
