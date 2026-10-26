const category = new URLSearchParams(location.search).get("category") || "for";
const units = {
  "for": {
    "title": "for문 Basic",
    "prefix": "FOR",
    "problems": [
      {
        "title": "같은 문장 네 번 출력하기",
        "description": "for문으로 연습 중입니다.를 총 4번 출력하세요.",
        "conditions": [
          "i는 1부터 시작하여 1씩 증가시키세요.",
          "반복문 안에는 console.log()를 한 번만 작성하세요. 마침표를 포함하세요.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "연습 중입니다.\n연습 중입니다.\n연습 중입니다.\n연습 중입니다."
      },
      {
        "title": "0부터 시작하는 반복으로 번호 붙이기",
        "description": "연습 0회차부터 연습 3회차까지 출력하세요.",
        "conditions": [
          "i는 0부터 시작하여 1씩 증가시키고, 조건은 i < 4로 작성하세요.",
          "회차는 i를 사용하세요. 연습 뒤에 공백 한 칸을 넣고 숫자와 회차는 붙이세요.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "연습 0회차\n연습 1회차\n연습 2회차\n연습 3회차"
      },
      {
        "title": "한 번 반복할 때 두 문장 출력하기",
        "description": "손뼉! 다음에 발 구르기!를 출력하는 작업을 총 3번 반복하세요.",
        "conditions": [
          "i는 1부터 3까지 1씩 증가시키세요.",
          "반복문 안에 console.log() 두 개를 작성하고 손뼉!을 먼저 출력하세요.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "손뼉!\n발 구르기!\n손뼉!\n발 구르기!\n손뼉!\n발 구르기!"
      },
      {
        "title": "반복하는 숫자로 계산하기",
        "description": "i를 1부터 4까지 바꾸면서 각 숫자를 자기 자신과 곱한 결과를 출력하세요.",
        "conditions": [
          "i는 1부터 4까지 1씩 증가시키세요.",
          "계산은 i * i로 하고 별도 변수는 만들지 마세요. 출력 숫자는 i를 사용하세요.",
          "1 * 1 = 1 형식으로 출력하고 *와 = 양쪽에 공백 한 칸을 넣으세요.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "1 * 1 = 1\n2 * 2 = 4\n3 * 3 = 9\n4 * 4 = 16"
      },
      {
        "title": "한 번 실행할 코드와 반복할 코드 구분하기",
        "description": "연습 시작을 한 번, 동작 반복을 3번, 연습 끝을 한 번 출력하세요.",
        "conditions": [
          "i는 1부터 3까지 1씩 증가시키세요.",
          "연습 시작은 for문 앞에, 연습 끝은 for문 뒤에 작성하세요.",
          "반복문 안에는 동작 반복을 출력하는 코드만 작성하세요.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "연습 시작\n동작 반복\n동작 반복\n동작 반복\n연습 끝"
      }
    ]
  },
  "while": {
    "title": "while문 Basic",
    "prefix": "WH",
    "problems": [
      {
        "title": "같은 문장 세 번 출력하기",
        "description": "while문으로 다시 연습!을 총 3번 출력하세요.",
        "conditions": [
          "i의 초기값은 1입니다. i가 3 이하인 동안 반복하세요.",
          "문장을 출력한 다음 i를 1 증가시키세요.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "다시 연습!\n다시 연습!\n다시 연습!"
      },
      {
        "title": "값을 바꾼 다음 출력하기",
        "description": "i를 먼저 1 증가시킨 다음 출력하여 1부터 4까지 출력하세요.",
        "conditions": [
          "i의 초기값은 0이고, while 조건은 i < 4입니다.",
          "반복문 안에서 증가 → 출력 순서를 지키세요.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "1\n2\n3\n4"
      },
      {
        "title": "숫자를 두 배씩 바꾸기",
        "description": "현재 값을 출력한 다음 2배로 바꾸세요. 현재 값이 16 이하인 동안 반복하세요.",
        "conditions": [
          "number 하나만 사용하고 초기값은 1로 지정하세요.",
          "while문 안에서 출력 → 2배로 변경 순서를 지키세요.",
          "값을 바꿀 때 number *= 2를 사용하세요.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "1\n2\n4\n8\n16"
      },
      {
        "title": "나머지가 0이 될 때까지",
        "description": "number가 3으로 나누어떨어지지 않는 동안 현재 값을 출력하고 1 증가시키세요. 반복 후 반복 종료를 출력하세요.",
        "conditions": [
          "number의 초기값은 10입니다.",
          "while 조건은 number % 3 !== 0을 사용하세요.",
          "반복문 안에서는 출력 → 증가 순서를 지키세요.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "10\n11\n반복 종료"
      },
      {
        "title": "글자를 붙이며 반복하기",
        "description": "현재 문자열을 출력한 다음 나를 하나 붙이세요. 가나나나가 되면 종료하고 완성된 문자열을 출력하세요.",
        "conditions": [
          "text 하나만 사용하고 초기값은 \"가\"입니다.",
          "while 조건은 text !== \"가나나나\"입니다.",
          "반복문 안에서 출력 → text += \"나\" 순서를 지키세요.",
          "반복 후 완성: 가나나나 형식으로 text를 출력하세요. : 뒤에는 공백 한 칸입니다.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "가\n가나\n가나나\n완성: 가나나나"
      },
      {
        "title": "반복이 끝난 뒤 변수 확인하기",
        "description": "i가 3 이하인 동안 현재 실행 번호를 출력하고 1 증가시키세요. 반복 후 i의 값을 출력하세요.",
        "conditions": [
          "i 하나만 사용하고 초기값은 1입니다.",
          "while문 안에서 출력 → 증가 순서를 지키세요.",
          "실행 번호: 1 형식으로 출력하고, 반복문 밖에서 종료 후 i: 4 형식으로 출력하세요.",
          "숫자는 i를 사용하고 : 뒤에는 공백 한 칸을 넣으세요.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "실행 번호: 1\n실행 번호: 2\n실행 번호: 3\n종료 후 i: 4"
      }
    ]
  },
  "do-while": {
    "title": "do...while문 Basic",
    "prefix": "DW",
    "problems": [
      {
        "title": "같은 문장 세 번 출력하기",
        "description": "do...while문으로 한 번 더 연습!을 총 3번 출력하세요.",
        "conditions": [
          "i의 초기값은 1입니다.",
          "문장을 출력한 다음 i를 1 증가시키세요.",
          "블록 뒤에서 i <= 3을 검사하세요. 마지막 세미콜론도 작성하세요.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "한 번 더 연습!\n한 번 더 연습!\n한 번 더 연습!"
      },
      {
        "title": "값을 증가시킨 다음 출력하기",
        "description": "i를 먼저 1 증가시킨 다음 출력하여 1부터 4까지 출력하세요.",
        "conditions": [
          "i의 초기값은 0입니다.",
          "do...while문 안에서 증가 → 출력 순서를 지키세요.",
          "반복 조건은 i < 4로 작성하세요.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "1\n2\n3\n4"
      },
      {
        "title": "한 번 반복할 때 두 문장 출력하기",
        "description": "숨 들이쉬기 다음에 숨 내쉬기를 출력하는 작업을 총 2번 반복하세요.",
        "conditions": [
          "i의 초기값은 1이고, do...while 조건은 i <= 2입니다.",
          "블록 안에 console.log() 두 개를 작성하세요.",
          "두 문장을 순서대로 출력한 다음 i를 1 증가시키세요.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "숨 들이쉬기\n숨 내쉬기\n숨 들이쉬기\n숨 내쉬기"
      },
      {
        "title": "반복이 끝난 뒤 변수 확인하기",
        "description": "현재 i를 출력한 다음 2 증가시키세요. 변경된 i가 6 이하이면 반복하고, 종료 후 i를 출력하세요.",
        "conditions": [
          "i 하나만 사용하고 초기값은 2입니다.",
          "do...while문 안에서 출력 → i += 2 순서를 지키세요.",
          "반복 조건은 i <= 6입니다.",
          "반복문 밖에서 종료 후 i: 8 형식으로 출력하세요. 숫자는 i를 사용하고 : 뒤에는 공백 한 칸을 넣으세요.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "2\n4\n6\n종료 후 i: 8"
      },
      {
        "title": "조건이 거짓이어도 값은 한 번 바뀐다",
        "description": "현재 값에 1을 더한 다음 출력하세요. 반복 조건은 number < 5입니다. 반복 후 실행 끝을 출력하세요.",
        "conditions": [
          "number 하나만 사용하고 초기값은 10입니다.",
          "do...while문 안에서 1 증가 → 출력 순서를 지키세요.",
          "조건은 반드시 number < 5로 작성하세요. 실행 끝은 반복문 밖에서 출력하세요.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "11\n실행 끝"
      }
    ]
  },
  "break-continue": {
    "title": "break · continue Basic",
    "prefix": "BC",
    "problems": [
      {
        "title": "break를 만나면 바로 끝내기",
        "description": "반복 중을 출력한 직후 break로 첫 반복에서 끝내세요. 반복문 뒤에서는 반복문 밖을 출력하세요.",
        "conditions": [
          "for (let i = 1; i <= 4; i++)로 작성하세요.",
          "반복문 안에서 반복 중 출력 → break 순서를 지키세요.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "반복 중\n반복문 밖",
        "requiredKeywords": [
          "for",
          "break"
        ]
      },
      {
        "title": "출력한 다음 break로 끝내기",
        "description": "현재 회차를 출력하되 3회 실행까지 출력한 다음 break로 종료하세요. 반복 후 중단 완료를 출력하세요.",
        "conditions": [
          "for문에서 i를 1부터 5까지 1씩 증가시키세요.",
          "회차 출력 → if (i === 3)에서 break 순서를 지키세요.",
          "1회 실행 형식으로 i를 사용하세요. 회 뒤에는 공백 한 칸입니다.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "1회 실행\n2회 실행\n3회 실행\n중단 완료",
        "requiredKeywords": [
          "for",
          "break"
        ]
      },
      {
        "title": "continue 아래의 출력 건너뛰기",
        "description": "총 3번 반복하며 앞부분 실행 출력 → continue → 뒷부분 실행 출력 순서로 코드를 작성하세요. 반복 후 전체 종료를 출력하세요.",
        "conditions": [
          "for문에서 i를 1부터 3까지 1씩 증가시키세요.",
          "세 코드를 모두 반복문 안에 순서대로 작성하고 continue는 조건문 없이 사용하세요.",
          "뒷부분 실행 출력 코드는 실행 흐름 확인을 위해 의도적으로 포함합니다. 실제로 출력되지는 않습니다.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "앞부분 실행\n앞부분 실행\n앞부분 실행\n전체 종료",
        "requiredKeywords": [
          "for",
          "continue"
        ]
      },
      {
        "title": "특정 회차의 뒷부분만 건너뛰기",
        "description": "매 회차 시작 문장을 출력하세요. 2회차에만 continue로 종료 문장을 건너뛰세요.",
        "conditions": [
          "for문에서 i를 1부터 3까지 1씩 증가시키세요.",
          "시작 문장 출력 → if (i === 2)에서 continue → 종료 문장 출력 순서를 지키세요.",
          "1회 시작, 1회 끝 형식으로 i를 사용하세요. 회 뒤에는 공백 한 칸입니다.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "1회 시작\n1회 끝\n2회 시작\n3회 시작\n3회 끝",
        "requiredKeywords": [
          "for",
          "continue"
        ]
      },
      {
        "title": "continue와 break 함께 사용하기",
        "description": "매 회차 시작 문장 출력 후, 2회차이면 continue, 4회차이면 break를 실행하세요. 나머지는 종료 문장도 출력하세요. 반복 후 연습 종료를 출력하세요.",
        "conditions": [
          "for문에서 i 하나로 1부터 5까지 1씩 증가시키세요.",
          "시작 출력 → i === 2이면 continue → i === 4이면 break → 끝 출력 순서를 지키세요.",
          "두 조건은 각각 if문으로 작성하세요.",
          "1회 시작, 1회 끝 형식으로 i를 사용하세요. 회 뒤에는 공백 한 칸입니다.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "1회 시작\n1회 끝\n2회 시작\n3회 시작\n3회 끝\n4회 시작\n연습 종료",
        "requiredKeywords": [
          "for",
          "break",
          "continue"
        ]
      }
    ]
  },
  "nested": {
    "title": "중첩 반복문 Basic",
    "prefix": "NL",
    "problems": [
      {
        "title": "두 번씩, 세 묶음 출력하기",
        "description": "바깥 반복 3번, 안쪽 반복 2번으로 안녕하세요!를 출력하세요.",
        "conditions": [
          "2단계 중첩 for문을 사용하세요. 바깥 i는 1부터 3까지, 안쪽 j는 1부터 2까지 1씩 증가시키세요.",
          "console.log()는 안쪽 반복문에 한 번만 작성하세요.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "안녕하세요!\n안녕하세요!\n안녕하세요!\n안녕하세요!\n안녕하세요!\n안녕하세요!"
      },
      {
        "title": "안쪽 번호가 다시 시작되는지 확인하기",
        "description": "바깥 반복을 2번 실행하세요. 매번 묶음 시작을 출력한 뒤 안쪽 반복으로 1, 2, 3을 출력하세요.",
        "conditions": [
          "중첩 for문에서 바깥 i는 1부터 2까지, 안쪽 j는 1부터 3까지 1씩 증가시키세요.",
          "묶음 시작은 바깥 반복문 안에서 안쪽 반복문보다 먼저 출력하세요.",
          "안쪽에서는 숫자를 직접 적지 말고 j를 출력하세요.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "묶음 시작\n1\n2\n3\n묶음 시작\n1\n2\n3"
      },
      {
        "title": "바깥 번호와 안쪽 번호 함께 출력하기",
        "description": "바깥 반복 2번, 안쪽 반복 3번으로 현재 바깥 번호와 안쪽 번호를 함께 출력하세요.",
        "conditions": [
          "중첩 for문에서 바깥 i는 1부터 2까지, 안쪽 j는 1부터 3까지 1씩 증가시키세요.",
          "바깥 1 / 안쪽 1 형식으로 i와 j를 사용하세요.",
          "바깥과 숫자 사이, 안쪽과 숫자 사이, / 양쪽에 공백 한 칸을 넣으세요.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "바깥 1 / 안쪽 1\n바깥 1 / 안쪽 2\n바깥 1 / 안쪽 3\n바깥 2 / 안쪽 1\n바깥 2 / 안쪽 2\n바깥 2 / 안쪽 3"
      },
      {
        "title": "안쪽 반복 전후에 문장 출력하기",
        "description": "바깥 반복을 2번 실행하세요. 매번 회차 시작 → 동작 실행 2번 → 회차 끝 순서로 출력하세요.",
        "conditions": [
          "중첩 for문에서 바깥 i와 안쪽 j는 각각 1부터 2까지 1씩 증가시키세요.",
          "시작 문장은 안쪽 반복문 앞에, 종료 문장은 뒤에 작성하세요. 두 문장 모두 바깥 반복문 안에 있어야 합니다.",
          "1회 시작, 1회 끝 형식으로 i를 사용하세요. 회 뒤에 공백 한 칸을 넣으세요.",
          "안쪽 반복문에서는 동작 실행을 출력하세요.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "1회 시작\n동작 실행\n동작 실행\n1회 끝\n2회 시작\n동작 실행\n동작 실행\n2회 끝"
      },
      {
        "title": "안쪽에서는 거꾸로 반복하기",
        "description": "바깥은 1부터 2까지 증가시키고 안쪽은 매번 3부터 1까지 감소시키며 두 값을 출력하세요.",
        "conditions": [
          "중첩 for문에서 바깥 i는 1부터 2까지 1씩 증가시키세요.",
          "안쪽 j는 3부터 시작하여 조건 j >= 1, 증감식 j--를 사용하세요.",
          "1회: 3 형식으로 i와 j를 사용하세요. 회 바로 뒤에 :를 붙이고 그 뒤에 공백 한 칸을 넣으세요.",
          "출력 결과와 동일하게 한 줄씩 출력하고, 빈 줄은 넣지 마세요."
        ],
        "starter": "// 여기에 코드를 작성하세요.",
        "output": "1회: 3\n1회: 2\n1회: 1\n2회: 3\n2회: 2\n2회: 1"
      }
    ]
  }
};
const unit = units[category] || units.for;
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
  const pattern = unit.prefix === "DW" ? /\bdo\s*\{[\s\S]*\}\s*while\s*\(/ : unit.prefix === "WH" ? /\bwhile\s*\(/ : /\bfor\s*\(/;
  const cleaned = clean(code);
  if (unit.prefix === "NL") {
    if ((cleaned.match(/\bfor\s*\(/g) || []).length < 2) return Promise.resolve(false);
  } else if (unit.prefix === "BC") {
    if (!item.requiredKeywords.every(keyword => new RegExp("\\b" + keyword + "\\b").test(cleaned))) return Promise.resolve(false);
  } else if (!pattern.test(cleaned)) return Promise.resolve(false);
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
