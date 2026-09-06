# JS Playground

JavaScript 단원별 문제 풀이 사이트입니다. 루트의 왼쪽 메뉴는 계속 유지되고, 선택한 단원의 문제가 오른쪽에서 열립니다.

현재 `변수`와 `자료형` 단원이 들어 있습니다. 처음 접속하면 학번 4자리를 입력하며, 문제 화면 상단과 완료 화면에 학번이 표시됩니다. 완료 화면에는 학번 워터마크, 완료 시각, 단원별 무작위 완료 코드가 함께 표시됩니다.

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
└─ datatype/
   ├─ index.html
   ├─ style.css
   └─ script.js
```
