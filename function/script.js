const category = new URLSearchParams(location.search).get("category") || "parameters";
const units = {
  "parameters": {
    "title": "매개변수와 인수",
    "prefix": "FP",
    "problems": [
      {
        "title": "배송 상태 안내",
        "description": "전달받은 배송 상태를 출력하세요.",
        "conditions": [
          "status를 매개변수로 받는 showDelivery 함수를 함수 선언식으로 작성하세요.",
          "함수 안에서 console.log()로 출력하고, 반드시 작성한 함수를 호출하세요.",
          "\"상품 준비 중\", \"배송 중\", \"배송 완료\"를 각각 전달하여 호출하세요."
        ],
        "starter": "// 함수를 선언하세요.\n\n// 지정한 인수를 전달하여 함수를 호출하세요.",
        "output": "배송 상태: 상품 준비 중\n배송 상태: 배송 중\n배송 상태: 배송 완료",
        "functionName": "showDelivery",
        "parameters": [
          "status"
        ],
        "probeArgs": [
          "확인 중"
        ],
        "probeOutput": "배송 상태: 확인 중"
      },
      {
        "title": "할인 금액 계산",
        "description": "전달받은 가격에서 10%를 할인한 금액을 출력하세요.",
        "conditions": [
          "price를 매개변수로 받는 showDiscountPrice 함수를 함수 선언식으로 작성하세요.",
          "함수 안에서 console.log()로 출력하고, 반드시 작성한 함수를 호출하세요.",
          "10000, 25000, 40000을 각각 전달하여 호출하세요."
        ],
        "starter": "// 함수를 선언하세요.\n\n// 지정한 인수를 전달하여 함수를 호출하세요.",
        "output": "할인 적용 금액: 9000원\n할인 적용 금액: 22500원\n할인 적용 금액: 36000원",
        "functionName": "showDiscountPrice",
        "parameters": [
          "price"
        ],
        "probeArgs": [
          20000
        ],
        "probeOutput": "할인 적용 금액: 18000원"
      },
      {
        "title": "행사 일정 안내",
        "description": "행사 이름과 개최일을 출력하세요.",
        "conditions": [
          "eventName, date를 매개변수로 받는 showEvent 함수를 함수 선언식으로 작성하세요.",
          "함수 안에서 console.log()로 출력하고, 반드시 작성한 함수를 호출하세요.",
          "\"작품 전시회\", \"10월 15일\"을 순서대로 전달하여 호출하세요.",
          "\"진로 특강\", \"10월 22일\"을 순서대로 전달하여 호출하세요."
        ],
        "starter": "// 함수를 선언하세요.\n\n// 지정한 인수를 전달하여 함수를 호출하세요.",
        "output": "작품 전시회 개최일: 10월 15일\n진로 특강 개최일: 10월 22일",
        "functionName": "showEvent",
        "parameters": [
          "eventName",
          "date"
        ],
        "probeArgs": [
          "학교 축제",
          "11월 3일"
        ],
        "probeOutput": "학교 축제 개최일: 11월 3일"
      },
      {
        "title": "주문 금액 계산",
        "description": "상품 가격 × 수량 + 배송비를 계산하여 출력하세요.",
        "conditions": [
          "price, quantity, deliveryFee를 매개변수로 받는 showOrderTotal 함수를 함수 선언식으로 작성하세요.",
          "함수 안에서 console.log()로 출력하고, 반드시 작성한 함수를 호출하세요.",
          "unitPrice = 8000, orderCount = 2, shippingCost = 3000인 변수를 선언하세요. orderCount는 변경 가능하게 선언하세요.",
          "세 변수를 순서대로 인수로 전달하여 호출하세요.",
          "orderCount를 5로 변경하고 같은 변수들을 전달하여 다시 호출하세요."
        ],
        "starter": "// 함수를 선언하세요.\n\n// 지정한 인수를 전달하여 함수를 호출하세요.",
        "output": "총 주문 금액: 19000원\n총 주문 금액: 43000원",
        "functionName": "showOrderTotal",
        "parameters": [
          "price",
          "quantity",
          "deliveryFee"
        ],
        "probeArgs": [
          4000,
          3,
          2000
        ],
        "probeOutput": "총 주문 금액: 14000원"
      },
      {
        "title": "무료 배송 여부 확인",
        "description": "구매 금액에 따라 배송비 안내를 출력하세요.",
        "conditions": [
          "amount를 매개변수로 받는 checkDeliveryFee 함수를 함수 선언식으로 작성하세요.",
          "함수 안에서 console.log()로 출력하고, 반드시 작성한 함수를 호출하세요.",
          "30000원 이상이면 \"무료 배송\", 미만이면 \"배송비 3000원\"을 출력하세요.",
          "15000, 30000, 45000을 각각 전달하여 호출하세요."
        ],
        "starter": "// 함수를 선언하세요.\n\n// 지정한 인수를 전달하여 함수를 호출하세요.",
        "output": "배송비 3000원\n무료 배송\n무료 배송",
        "functionName": "checkDeliveryFee",
        "parameters": [
          "amount"
        ],
        "probeArgs": [
          29999
        ],
        "probeOutput": "배송비 3000원"
      },
      {
        "title": "번호가 있는 목록 출력",
        "description": "전달받은 이름과 개수로 번호 목록을 출력하세요.",
        "conditions": [
          "label, count를 매개변수로 받는 showNumberedList 함수를 함수 선언식으로 작성하세요.",
          "함수 안에서 console.log()로 출력하고, 반드시 작성한 함수를 호출하세요.",
          "for문으로 1부터 count까지 \"이름 번호\" 형식으로 출력하세요. 이름과 번호 사이에는 공백 한 칸을 넣으세요.",
          "\"공지\", 3과 \"자료\", 2를 각각 순서대로 전달하여 호출하세요."
        ],
        "starter": "// 함수를 선언하세요.\n\n// 지정한 인수를 전달하여 함수를 호출하세요.",
        "output": "공지 1\n공지 2\n공지 3\n자료 1\n자료 2",
        "functionName": "showNumberedList",
        "parameters": [
          "label",
          "count"
        ],
        "probeArgs": [
          "안내",
          4
        ],
        "probeOutput": "안내 1\n안내 2\n안내 3\n안내 4"
      }
    ]
  },
  "default": {
    "title": "기본값 매개변수",
    "prefix": "DF",
    "problems": [
      {
        "title": "선택한 화면 테마 안내",
        "description": "전달받은 화면 테마를 안내하세요.",
        "conditions": [
          "theme를 순서대로 받는 showTheme 함수를 함수 선언식으로 작성하세요.",
          "기본값 매개변수를 사용하고 함수 안에서 출력하세요. 반드시 함수를 호출하세요.",
          "theme의 기본값을 \"라이트\"로 지정하세요.",
          "인수 없이, \"다크\"를 전달하여, \"자동\"을 전달하여 순서대로 호출하세요."
        ],
        "starter": "// 기본값 매개변수를 사용하는 함수를 선언하세요.\n\n// 조건에 맞게 함수를 호출하세요.",
        "output": "화면 테마: 라이트\n화면 테마: 다크\n화면 테마: 자동",
        "functionName": "showTheme",
        "parameters": [
          "theme"
        ],
        "defaults": [
          "라이트"
        ],
        "probeCases": [
          {
            "args": [],
            "output": "화면 테마: 라이트"
          },
          {
            "args": [
              "고대비"
            ],
            "output": "화면 테마: 고대비"
          }
        ]
      },
      {
        "title": "기본 배송비 적용",
        "description": "구매 금액과 배송비를 더해 총 결제 금액을 출력하세요.",
        "conditions": [
          "amount, deliveryFee를 순서대로 받는 showOrderTotal 함수를 함수 선언식으로 작성하세요.",
          "기본값 매개변수를 사용하고 함수 안에서 출력하세요. 반드시 함수를 호출하세요.",
          "deliveryFee의 기본값을 3000으로 지정하세요.",
          "20000만 전달하여, 20000과 1500을 전달하여, 20000과 0을 전달하여 순서대로 호출하세요."
        ],
        "starter": "// 기본값 매개변수를 사용하는 함수를 선언하세요.\n\n// 조건에 맞게 함수를 호출하세요.",
        "output": "총 결제 금액: 23000원\n총 결제 금액: 21500원\n총 결제 금액: 20000원",
        "functionName": "showOrderTotal",
        "parameters": [
          "amount",
          "deliveryFee"
        ],
        "defaults": [
          null,
          3000
        ],
        "probeCases": [
          {
            "args": [
              10000
            ],
            "output": "총 결제 금액: 13000원"
          },
          {
            "args": [
              10000,
              0
            ],
            "output": "총 결제 금액: 10000원"
          },
          {
            "args": [
              10000,
              500
            ],
            "output": "총 결제 금액: 10500원"
          }
        ]
      },
      {
        "title": "기본값과 undefined 확인",
        "description": "인수를 생략하거나 undefined를 전달했을 때의 작성자를 출력하세요.",
        "conditions": [
          "name를 순서대로 받는 showAuthor 함수를 함수 선언식으로 작성하세요.",
          "기본값 매개변수를 사용하고 함수 안에서 출력하세요. 반드시 함수를 호출하세요.",
          "name의 기본값을 \"익명\"으로 지정하세요.",
          "인수 없이, undefined를 전달하여, \"김도윤\"을 전달하여 순서대로 호출하세요."
        ],
        "starter": "// 기본값 매개변수를 사용하는 함수를 선언하세요.\n\n// 조건에 맞게 함수를 호출하세요.",
        "output": "작성자: 익명\n작성자: 익명\n작성자: 김도윤",
        "functionName": "showAuthor",
        "parameters": [
          "name"
        ],
        "defaults": [
          "익명"
        ],
        "probeCases": [
          {
            "args": [],
            "output": "작성자: 익명"
          },
          {
            "args": [
              "__UNDEFINED__"
            ],
            "output": "작성자: 익명"
          },
          {
            "args": [
              ""
            ],
            "output": "작성자: "
          },
          {
            "args": [
              "이서준"
            ],
            "output": "작성자: 이서준"
          }
        ]
      },
      {
        "title": "여러 기본값으로 예약 안내",
        "description": "장소, 시간, 인원으로 예약 정보를 출력하세요.",
        "conditions": [
          "space, hours, people를 순서대로 받는 showReservation 함수를 함수 선언식으로 작성하세요.",
          "기본값 매개변수를 사용하고 함수 안에서 출력하세요. 반드시 함수를 호출하세요.",
          "hours의 기본값은 1, people의 기본값은 2로 지정하세요.",
          "\"회의실\"만 전달하여 호출하세요.",
          "\"회의실\", 3을 전달하여 호출하세요.",
          "\"회의실\", 3, 5를 전달하여 호출하세요.",
          "\"회의실\", undefined, 4를 전달하여 호출하세요."
        ],
        "starter": "// 기본값 매개변수를 사용하는 함수를 선언하세요.\n\n// 조건에 맞게 함수를 호출하세요.",
        "output": "회의실 예약: 1시간, 2명\n회의실 예약: 3시간, 2명\n회의실 예약: 3시간, 5명\n회의실 예약: 1시간, 4명",
        "functionName": "showReservation",
        "parameters": [
          "space",
          "hours",
          "people"
        ],
        "defaults": [
          null,
          1,
          2
        ],
        "probeCases": [
          {
            "args": [
              "실습실"
            ],
            "output": "실습실 예약: 1시간, 2명"
          },
          {
            "args": [
              "실습실",
              "__UNDEFINED__",
              6
            ],
            "output": "실습실 예약: 1시간, 6명"
          },
          {
            "args": [
              "실습실",
              2,
              3
            ],
            "output": "실습실 예약: 2시간, 3명"
          }
        ]
      }
    ]
  },
  "return": {
    "title": "반환값과 return",
    "prefix": "RT",
    "problems": [
      {
        "title": "분을 초로 변환하기",
        "description": "분을 초로 변환한 값을 반환하세요.",
        "conditions": [
          "minutes를 순서대로 받는 convertToSeconds 함수를 함수 선언식으로 작성하세요.",
          "함수 안에서 출력하지 말고 return으로 값을 반환하세요. 함수를 호출하고 반환값은 함수 밖에서 출력하세요.",
          "minutes에 60을 곱한 값을 반환하세요.",
          "3을 전달하여 호출하고 반환값을 seconds에 저장한 뒤 출력하세요."
        ],
        "starter": "// 결과를 반환하는 함수를 선언하세요.\n\n// 함수를 호출하고 반환값을 활용하여 출력하세요.",
        "output": "180",
        "functionName": "convertToSeconds",
        "parameters": [
          "minutes"
        ],
        "returnMode": true,
        "probeCases": [
          {
            "args": [
              2
            ],
            "value": 120
          },
          {
            "args": [
              0
            ],
            "value": 0
          }
        ],
        "requireFor": false,
        "forbidElse": false
      },
      {
        "title": "상품 소개 문구 만들기",
        "description": "상품 소개 문자열을 반환하세요.",
        "conditions": [
          "productName, price를 순서대로 받는 getProductInfo 함수를 함수 선언식으로 작성하세요.",
          "함수 안에서 출력하지 말고 return으로 값을 반환하세요. 함수를 호출하고 반환값은 함수 밖에서 출력하세요.",
          "\"상품명: ○○ / 가격: ○○원\" 형식의 문자열을 반환하세요.",
          "\"무선 마우스\", 25000과 \"USB 메모리\", 12000을 각각 순서대로 전달하여 호출하고 반환값을 출력하세요."
        ],
        "starter": "// 결과를 반환하는 함수를 선언하세요.\n\n// 함수를 호출하고 반환값을 활용하여 출력하세요.",
        "output": "상품명: 무선 마우스 / 가격: 25000원\n상품명: USB 메모리 / 가격: 12000원",
        "functionName": "getProductInfo",
        "parameters": [
          "productName",
          "price"
        ],
        "returnMode": true,
        "probeCases": [
          {
            "args": [
              "노트",
              3000
            ],
            "value": "상품명: 노트 / 가격: 3000원"
          }
        ],
        "requireFor": false,
        "forbidElse": false
      },
      {
        "title": "적립 포인트 활용하기",
        "description": "적립 포인트를 반환받아 기존 포인트와 합산하세요.",
        "conditions": [
          "amount를 순서대로 받는 calculatePoint 함수를 함수 선언식으로 작성하세요.",
          "함수 안에서 출력하지 말고 return으로 값을 반환하세요. 함수를 호출하고 반환값은 함수 밖에서 출력하세요.",
          "구매 금액의 5%를 반환하세요.",
          "40000을 전달하여 호출하고 반환값을 earnedPoint에 저장하세요.",
          "기존 포인트 1200과 earnedPoint를 더해 totalPoint에 저장하세요.",
          "\"이번 적립: ○○점\", \"총 포인트: ○○점\" 형식으로 출력하세요."
        ],
        "starter": "// 결과를 반환하는 함수를 선언하세요.\n\n// 함수를 호출하고 반환값을 활용하여 출력하세요.",
        "output": "이번 적립: 2000점\n총 포인트: 3200점",
        "functionName": "calculatePoint",
        "parameters": [
          "amount"
        ],
        "returnMode": true,
        "probeCases": [
          {
            "args": [
              20000
            ],
            "value": 1000
          },
          {
            "args": [
              0
            ],
            "value": 0
          }
        ],
        "requireFor": false,
        "forbidElse": false
      },
      {
        "title": "반환값으로 이용 가능 여부 판단하기",
        "description": "이용 가능 여부를 불리언 값으로 반환하고 함수 밖에서 판단하세요.",
        "conditions": [
          "age를 순서대로 받는 canUseService 함수를 함수 선언식으로 작성하세요.",
          "함수 안에서 출력하지 말고 return으로 값을 반환하세요. 함수를 호출하고 반환값은 함수 밖에서 출력하세요.",
          "age가 14 이상인지 비교한 결과를 반환하세요.",
          "13을 전달하여 호출하고 반환값을 isAllowed에 저장하세요.",
          "함수 밖의 if...else문에서 isAllowed가 true이면 \"이용 가능\", false이면 \"이용 불가\"를 출력하세요.",
          "14를 전달한 반환값에도 같은 판단을 적용하세요."
        ],
        "starter": "// 결과를 반환하는 함수를 선언하세요.\n\n// 함수를 호출하고 반환값을 활용하여 출력하세요.",
        "output": "이용 불가\n이용 가능",
        "functionName": "canUseService",
        "parameters": [
          "age"
        ],
        "returnMode": true,
        "probeCases": [
          {
            "args": [
              13
            ],
            "value": false
          },
          {
            "args": [
              14
            ],
            "value": true
          },
          {
            "args": [
              20
            ],
            "value": true
          }
        ],
        "requireFor": false,
        "forbidElse": false
      },
      {
        "title": "점수에 따른 결과 반환하기",
        "description": "조건에 따라 결과를 반환하고 함수 실행을 끝내세요.",
        "conditions": [
          "score를 순서대로 받는 getResult 함수를 함수 선언식으로 작성하세요.",
          "함수 안에서 출력하지 말고 return으로 값을 반환하세요. 함수를 호출하고 반환값은 함수 밖에서 출력하세요.",
          "score가 80 이상이면 \"우수\", 60 이상 80 미만이면 \"통과\", 60 미만이면 \"재도전\"을 반환하세요.",
          "80 이상인지 먼저 확인하고 해당하면 반환하세요. 이어서 60 이상인지 확인하고 해당하면 반환하세요. 마지막에서 \"재도전\"을 반환하세요.",
          "else와 else if는 사용하지 마세요.",
          "85, 70, 50을 각각 전달하여 호출하고 반환값을 출력하세요."
        ],
        "starter": "// 결과를 반환하는 함수를 선언하세요.\n\n// 함수를 호출하고 반환값을 활용하여 출력하세요.",
        "output": "우수\n통과\n재도전",
        "functionName": "getResult",
        "parameters": [
          "score"
        ],
        "returnMode": true,
        "probeCases": [
          {
            "args": [
              80
            ],
            "value": "우수"
          },
          {
            "args": [
              60
            ],
            "value": "통과"
          },
          {
            "args": [
              59
            ],
            "value": "재도전"
          }
        ],
        "requireFor": false,
        "forbidElse": true
      },
      {
        "title": "번호 범위의 합 반환하기",
        "description": "반복문으로 범위의 합을 구하고 반복이 끝난 뒤 반환하세요.",
        "conditions": [
          "start, end를 순서대로 받는 calculateSum 함수를 함수 선언식으로 작성하세요.",
          "함수 안에서 출력하지 말고 return으로 값을 반환하세요. 함수를 호출하고 반환값은 함수 밖에서 출력하세요.",
          "함수 안에서 합계를 저장할 변수 total을 0으로 선언하세요.",
          "for문으로 start부터 end까지의 정수를 모두 더하세요.",
          "반복이 끝난 뒤 total을 반환하세요.",
          "1, 5와 3, 7을 각각 순서대로 전달하여 호출하고 반환값을 출력하세요."
        ],
        "starter": "// 결과를 반환하는 함수를 선언하세요.\n\n// 함수를 호출하고 반환값을 활용하여 출력하세요.",
        "output": "15\n25",
        "functionName": "calculateSum",
        "parameters": [
          "start",
          "end"
        ],
        "returnMode": true,
        "probeCases": [
          {
            "args": [
              2,
              4
            ],
            "value": 9
          },
          {
            "args": [
              5,
              5
            ],
            "value": 5
          }
        ],
        "requireFor": true,
        "forbidElse": false
      }
    ]
  },
  "control": {
    "title": "조건문·반복문 활용",
    "prefix": "FC",
    "problems": [
      {
        "title": "홀수 번호의 합 구하기",
        "description": "조건문과 반복문을 함수 안에서 사용하여 결과를 반환하세요.",
        "conditions": [
          "start, end를 순서대로 받는 calculateOddSum 함수를 함수 선언식으로 작성하세요.",
          "함수 안에서 for문과 조건문을 사용하세요. 함수 안에서는 출력하지 말고 결과를 반환하세요. 함수 밖에서 반환값을 출력하세요.",
          "total을 0으로 선언하고 start부터 end까지 for문으로 확인하세요.",
          "홀수만 total에 더하고 반복이 끝난 뒤 total을 반환하세요.",
          "1, 10과 4, 12를 각각 전달하여 호출하고 반환값을 출력하세요."
        ],
        "starter": "// 조건문과 반복문을 사용하는 함수를 선언하세요.\n\n// 함수를 호출하고 반환값을 출력하세요.",
        "output": "25\n32",
        "functionName": "calculateOddSum",
        "parameters": [
          "start",
          "end"
        ],
        "returnMode": true,
        "requireFor": true,
        "requiredKeywords": [
          "if"
        ],
        "probeCases": [
          {
            "args": [
              2,
              6
            ],
            "value": 8
          },
          {
            "args": [
              2,
              2
            ],
            "value": 0
          }
        ]
      },
      {
        "title": "제외 번호를 뺀 목록 만들기",
        "description": "조건문과 반복문을 함수 안에서 사용하여 결과를 반환하세요.",
        "conditions": [
          "end, excluded를 순서대로 받는 makeNumberList 함수를 함수 선언식으로 작성하세요.",
          "함수 안에서 for문과 조건문을 사용하세요. 함수 안에서는 출력하지 말고 결과를 반환하세요. 함수 밖에서 반환값을 출력하세요.",
          "result를 빈 문자열로 선언하세요.",
          "for문으로 1부터 end까지 확인하고 excluded와 같으면 continue로 건너뛰세요.",
          "나머지 번호를 대괄호로 감싸 result에 이어 붙이세요. 공백은 넣지 마세요.",
          "반복이 끝나면 result를 반환하세요.",
          "5, 3과 4, 1을 각각 전달하여 호출하고 반환값을 출력하세요."
        ],
        "starter": "// 조건문과 반복문을 사용하는 함수를 선언하세요.\n\n// 함수를 호출하고 반환값을 출력하세요.",
        "output": "[1][2][4][5]\n[2][3][4]",
        "functionName": "makeNumberList",
        "parameters": [
          "end",
          "excluded"
        ],
        "returnMode": true,
        "requireFor": true,
        "requiredKeywords": [
          "if",
          "continue"
        ],
        "probeCases": [
          {
            "args": [
              3,
              2
            ],
            "value": "[1][3]"
          },
          {
            "args": [
              1,
              1
            ],
            "value": ""
          }
        ]
      },
      {
        "title": "한도를 넘기기 전에 합산 종료하기",
        "description": "조건문과 반복문을 함수 안에서 사용하여 결과를 반환하세요.",
        "conditions": [
          "end, limit를 순서대로 받는 calculateLimitedSum 함수를 함수 선언식으로 작성하세요.",
          "함수 안에서 for문과 조건문을 사용하세요. 함수 안에서는 출력하지 말고 결과를 반환하세요. 함수 밖에서 반환값을 출력하세요.",
          "total을 0으로 선언하고 for문으로 1부터 end까지 순서대로 확인하세요.",
          "현재 수를 더하면 limit를 초과하는 경우 더하지 말고 break로 반복을 종료하세요.",
          "반복문 다음에서 total을 반환하세요.",
          "10, 20과 10, 10을 각각 전달하여 호출하고 반환값을 출력하세요."
        ],
        "starter": "// 조건문과 반복문을 사용하는 함수를 선언하세요.\n\n// 함수를 호출하고 반환값을 출력하세요.",
        "output": "15\n10",
        "functionName": "calculateLimitedSum",
        "parameters": [
          "end",
          "limit"
        ],
        "returnMode": true,
        "requireFor": true,
        "requiredKeywords": [
          "if",
          "break"
        ],
        "probeCases": [
          {
            "args": [
              5,
              6
            ],
            "value": 6
          },
          {
            "args": [
              5,
              0
            ],
            "value": 0
          }
        ]
      },
      {
        "title": "조건을 만족하는 첫 번호 찾기",
        "description": "조건문과 반복문을 함수 안에서 사용하여 결과를 반환하세요.",
        "conditions": [
          "start, end를 순서대로 받는 findFirstNumber 함수를 함수 선언식으로 작성하세요.",
          "함수 안에서 for문과 조건문을 사용하세요. 함수 안에서는 출력하지 말고 결과를 반환하세요. 함수 밖에서 반환값을 출력하세요.",
          "for문으로 start부터 end까지 확인하세요.",
          "현재 번호가 4의 배수이면서 6의 배수이면 그 번호를 즉시 반환하세요.",
          "발견하지 못하고 반복이 끝나면 -1을 반환하세요.",
          "5, 30과 13, 30과 25, 35를 각각 전달하여 호출하고 반환값을 출력하세요."
        ],
        "starter": "// 조건문과 반복문을 사용하는 함수를 선언하세요.\n\n// 함수를 호출하고 반환값을 출력하세요.",
        "output": "12\n24\n-1",
        "functionName": "findFirstNumber",
        "parameters": [
          "start",
          "end"
        ],
        "returnMode": true,
        "requireFor": true,
        "requiredKeywords": [
          "if"
        ],
        "probeCases": [
          {
            "args": [
              12,
              12
            ],
            "value": 12
          },
          {
            "args": [
              26,
              40
            ],
            "value": 36
          },
          {
            "args": [
              1,
              11
            ],
            "value": -1
          }
        ]
      }
    ]
  },
  "scope": {
    "title": "지역변수와 전역변수",
    "prefix": "SC",
    "problems": [
      {
        "title": "지역변수로 할인 금액 계산하기",
        "description": "지정한 위치에 변수를 선언하고 함수의 처리 결과를 출력하세요.",
        "conditions": [
          "calculateSalePrice 함수를 함수 선언식으로 작성하고 반드시 호출하세요.",
          "함수 안에 discount를 선언하고 가격의 20%를 저장하세요.",
          "함수 안에 salePrice를 선언하고 가격에서 할인 금액을 뺀 값을 저장한 뒤 반환하세요.",
          "함수 밖에서 15000을 전달하여 호출하고 반환값을 payment에 저장한 뒤 출력하세요."
        ],
        "starter": "// 지정된 위치에 변수와 함수를 선언하세요.\n\n// 함수를 호출하고 조건에 맞게 출력하세요.",
        "output": "12000",
        "functionName": "calculateSalePrice",
        "parameters": [
          "price"
        ],
        "scopeProbe": "return [calculateSalePrice(20000), typeof discount, typeof salePrice];",
        "scopeValue": [
          16000,
          "undefined",
          "undefined"
        ],
        "scopeLogs": "",
        "requireFor": false
      },
      {
        "title": "두 함수에서 공통 배송비 사용하기",
        "description": "지정한 위치에 변수를 선언하고 함수의 처리 결과를 출력하세요.",
        "conditions": [
          "calculatePayment 함수를 함수 선언식으로 작성하고 반드시 호출하세요.",
          "함수 밖에 전역변수 deliveryFee를 3000으로 선언하세요.",
          "calculatePayment는 amount와 deliveryFee를 더한 값을 반환하세요.",
          "showDeliveryFee 함수를 선언하고 deliveryFee를 사용하여 \"배송비: ○○원\" 형식으로 출력하세요.",
          "20000을 전달하여 calculatePayment를 호출하고 반환값을 출력한 뒤 showDeliveryFee를 호출하세요.",
          "두 함수 안에 deliveryFee를 다시 선언하지 마세요."
        ],
        "starter": "// 지정된 위치에 변수와 함수를 선언하세요.\n\n// 함수를 호출하고 조건에 맞게 출력하세요.",
        "output": "23000\n배송비: 3000원",
        "functionName": "calculatePayment",
        "parameters": [
          "amount"
        ],
        "scopeProbe": "showDeliveryFee(); return [deliveryFee, calculatePayment(10000)];",
        "scopeValue": [
          3000,
          13000
        ],
        "scopeLogs": "배송비: 3000원",
        "requireFor": false
      },
      {
        "title": "누적 횟수와 이번 호출의 횟수",
        "description": "지정한 위치에 변수를 선언하고 함수의 처리 결과를 출력하세요.",
        "conditions": [
          "processRequests 함수를 함수 선언식으로 작성하고 반드시 호출하세요.",
          "함수 밖에 전역변수 totalRequests를 0으로 선언하세요.",
          "함수 안에 지역변수 processed를 0으로 선언하세요.",
          "for문으로 count번 반복하며 processed와 totalRequests를 각각 1 증가시키세요.",
          "반복이 끝나면 \"이번 처리: ○회 / 누적 처리: ○회\" 형식으로 출력하세요.",
          "2, 3을 각각 전달하여 호출하세요."
        ],
        "starter": "// 지정된 위치에 변수와 함수를 선언하세요.\n\n// 함수를 호출하고 조건에 맞게 출력하세요.",
        "output": "이번 처리: 2회 / 누적 처리: 2회\n이번 처리: 3회 / 누적 처리: 5회",
        "functionName": "processRequests",
        "parameters": [
          "count"
        ],
        "scopeProbe": "processRequests(1); processRequests(2); return [totalRequests, typeof processed];",
        "scopeValue": [
          8,
          "undefined"
        ],
        "scopeLogs": "이번 처리: 1회 / 누적 처리: 6회\n이번 처리: 2회 / 누적 처리: 8회",
        "requireFor": true
      },
      {
        "title": "지역변수 변경 후 전역변수 확인하기",
        "description": "지정한 위치에 변수를 선언하고 함수의 처리 결과를 출력하세요.",
        "conditions": [
          "showTaskStatus 함수를 함수 선언식으로 작성하고 반드시 호출하세요.",
          "함수 밖에 status를 \"대기\"로 선언하세요.",
          "함수 안에 같은 이름의 지역변수 status를 \"진행 중\"으로 선언하고 출력하세요.",
          "지역변수 status를 \"완료\"로 변경하고 다시 출력하세요.",
          "함수를 호출한 다음 함수 밖에서 전역변수 status를 출력하세요."
        ],
        "starter": "// 지정된 위치에 변수와 함수를 선언하세요.\n\n// 함수를 호출하고 조건에 맞게 출력하세요.",
        "output": "진행 중\n완료\n대기",
        "functionName": "showTaskStatus",
        "parameters": [],
        "scopeProbe": "showTaskStatus(); return status;",
        "scopeValue": "대기",
        "scopeLogs": "진행 중\n완료",
        "requireFor": false
      },
      {
        "title": "조건문 안에서 계산한 결과 반환하기",
        "description": "지정한 위치에 변수를 선언하고 함수의 처리 결과를 출력하세요.",
        "conditions": [
          "calculateFinalPrice 함수를 함수 선언식으로 작성하고 반드시 호출하세요.",
          "함수 안에서 조건문보다 앞에 finalPrice를 선언하세요.",
          "amount가 30000 이상이면 10% 할인한 금액, 그렇지 않으면 원래 금액을 finalPrice에 저장하세요.",
          "조건문 안에서는 finalPrice를 새로 선언하지 마세요. 조건문 다음에서 finalPrice를 반환하세요.",
          "20000, 40000을 각각 전달하여 호출하고 반환값을 출력하세요."
        ],
        "starter": "// 지정된 위치에 변수와 함수를 선언하세요.\n\n// 함수를 호출하고 조건에 맞게 출력하세요.",
        "output": "20000\n36000",
        "functionName": "calculateFinalPrice",
        "parameters": [
          "amount"
        ],
        "scopeProbe": "return [calculateFinalPrice(30000), calculateFinalPrice(10000), typeof finalPrice];",
        "scopeValue": [
          27000,
          10000,
          "undefined"
        ],
        "scopeLogs": "",
        "requireFor": false
      },
      {
        "title": "반복문 뒤에서 합계와 개수 사용하기",
        "description": "지정한 위치에 변수를 선언하고 함수의 처리 결과를 출력하세요.",
        "conditions": [
          "showEvenSummary 함수를 함수 선언식으로 작성하고 반드시 호출하세요.",
          "함수 안에서 반복문보다 앞에 지역변수 total과 count를 각각 0으로 선언하세요.",
          "for문의 초기식에서 반복 변수 i를 let으로 선언하세요.",
          "1부터 end까지 확인하여 짝수이면 total에 더하고 count를 1 증가시키세요.",
          "반복문 뒤에서 \"짝수 합계: ○ / 개수: ○\" 형식으로 출력하세요. 반복문 뒤에서는 i를 사용하지 마세요.",
          "6, 10을 각각 전달하여 호출하세요."
        ],
        "starter": "// 지정된 위치에 변수와 함수를 선언하세요.\n\n// 함수를 호출하고 조건에 맞게 출력하세요.",
        "output": "짝수 합계: 12 / 개수: 3\n짝수 합계: 30 / 개수: 5",
        "functionName": "showEvenSummary",
        "parameters": [
          "end"
        ],
        "scopeProbe": "showEvenSummary(4); showEvenSummary(1); return [typeof total, typeof count, typeof i];",
        "scopeValue": [
          "undefined",
          "undefined",
          "undefined"
        ],
        "scopeLogs": "짝수 합계: 6 / 개수: 2\n짝수 합계: 0 / 개수: 0",
        "requireFor": true
      }
    ]
  },
  "expression": {
    "title": "함수 표현식과 호이스팅",
    "prefix": "EX",
    "problems": [
      {
        "title": "카테고리 안내 함수 표현식",
        "description": "함수 표현식으로 작성하고 초기화 후 호출하세요.",
        "conditions": [
          "const 변수 showCategory에 함수를 저장하는 함수 표현식을 작성하세요.",
          "매개변수 category를 받아 \"카테고리: ○○\" 형식으로 함수 안에서 출력하세요.",
          "함수 표현식 아래에서 \"도서\", \"생활용품\"을 각각 전달하여 호출하세요."
        ],
        "starter": "// 함수 표현식을 작성하세요.\n\n// 함수를 호출하세요.",
        "output": "카테고리: 도서\n카테고리: 생활용품",
        "functionName": "showCategory",
        "parameters": [
          "category"
        ],
        "expressionMode": true,
        "returnMode": false,
        "probeCases": [
          {
            "args": [
              "문구"
            ],
            "output": "카테고리: 문구"
          }
        ]
      },
      {
        "title": "배송비 포함 금액 반환하기",
        "description": "함수 표현식으로 작성하고 초기화 후 호출하세요.",
        "conditions": [
          "const 변수 calculatePayment에 함수를 저장하는 함수 표현식을 작성하세요.",
          "매개변수 amount, deliveryFee를 순서대로 받고 두 값을 더한 결과를 반환하세요.",
          "함수 표현식 아래에서 18000, 3000을 순서대로 전달하여 호출하세요.",
          "반환값을 payment에 저장하고 함수 밖에서 출력하세요."
        ],
        "starter": "// 함수 표현식을 작성하세요.\n\n// 반환값을 변수에 저장하고 출력하세요.",
        "output": "21000",
        "functionName": "calculatePayment",
        "parameters": [
          "amount",
          "deliveryFee"
        ],
        "expressionMode": true,
        "returnMode": true,
        "probeCases": [
          {
            "args": [
              10000,
              0
            ],
            "value": 10000
          },
          {
            "args": [
              4000,
              2000
            ],
            "value": 6000
          }
        ]
      },
      {
        "title": "함수 선언식을 함수 표현식으로 변경하기",
        "description": "함수 표현식으로 작성하고 초기화 후 호출하세요.",
        "conditions": [
          "제공된 getResult 함수 선언식을 const 변수에 함수를 저장하는 함수 표현식으로 변경하세요.",
          "score가 60 이상이면 \"통과\", 그렇지 않으면 \"재도전\"을 반환하는 처리를 유지하세요.",
          "함수 아래의 호출문과 전달하는 값 75, 45는 유지하세요."
        ],
        "starter": "function getResult(score) {\n  if (score >= 60) {\n    return \"통과\";\n  } else {\n    return \"재도전\";\n  }\n}\n\nconsole.log(getResult(75));\nconsole.log(getResult(45));",
        "output": "통과\n재도전",
        "functionName": "getResult",
        "parameters": [
          "score"
        ],
        "expressionMode": true,
        "returnMode": true,
        "probeCases": [
          {
            "args": [
              60
            ],
            "value": "통과"
          },
          {
            "args": [
              59
            ],
            "value": "재도전"
          }
        ]
      },
      {
        "title": "함수 표현식의 호출 위치 수정하기",
        "description": "함수 표현식으로 작성하고 초기화 후 호출하세요.",
        "conditions": [
          "제공된 코드의 호출문을 함수 표현식 아래로 옮겨 정상적으로 실행되도록 수정하세요.",
          "const 변수 showMessage에 함수를 저장하는 함수 표현식의 형태를 유지하세요.",
          "매개변수 message와 함수 내부의 출력 코드는 수정하지 마세요.",
          "호출할 때 전달하는 \"페이지 준비 완료\"를 유지하세요."
        ],
        "starter": "showMessage(\"페이지 준비 완료\");\n\nconst showMessage = function (message) {\n  console.log(message);\n};",
        "output": "페이지 준비 완료",
        "functionName": "showMessage",
        "parameters": [
          "message"
        ],
        "expressionMode": true,
        "returnMode": false,
        "probeCases": [
          {
            "args": [
              "점검 완료"
            ],
            "output": "점검 완료"
          }
        ]
      }
    ]
  }
};
const unit = units[category] || units.parameters;
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
  const cleaned = clean(code);
  const header = item.expressionMode ? "\\bconst\\s+" + item.functionName + "\\s*=\\s*function\\s*" : "\\bfunction\\s+" + item.functionName + "\\s*";
  const match = cleaned.match(new RegExp(header + "\\(([^)]*)\\)\\s*\\{"));
  if (!match) return Promise.resolve(false);
  const declared = match[1].trim() ? match[1].split(",").map(part => part.trim()) : [];
  if (declared.length !== item.parameters.length) return Promise.resolve(false);
  for (let i = 0; i < declared.length; i++) {
    const parts = declared[i].split("=").map(part => part.trim());
    if (parts[0] !== item.parameters[i]) return Promise.resolve(false);
    const value = item.defaults?.[i];
    if (value !== undefined && value !== null) {
      const expected = typeof value === "string" ? [JSON.stringify(value), "'" + value + "'", "`" + value + "`"] : [String(value)];
      if (parts.length !== 2 || !expected.includes(parts[1])) return Promise.resolve(false);
    } else if (parts.length !== 1) return Promise.resolve(false);
  }
  if (item.functionName === "showNumberedList" && !/\bfor\s*\(/.test(cleaned)) return Promise.resolve(false);
  if (item.requireFor && !/\bfor\s*\(/.test(cleaned)) return Promise.resolve(false);
  if (item.forbidElse && /\belse\b/.test(cleaned)) return Promise.resolve(false);
  if (item.returnMode && !/\breturn\b/.test(cleaned)) return Promise.resolve(false);
  if (item.requiredKeywords && !item.requiredKeywords.every(keyword => new RegExp("\\b" + keyword + "\\b").test(cleaned))) return Promise.resolve(false);
  return new Promise((resolve) => {
    const source = `onmessage = (event) => { const logs = []; try {
      const console = {log: (...args) => logs.push(args.map(String).join(" "))};
      const {code, name, cases, returnMode, scopeProbe} = event.data;
      if (scopeProbe) {
        const check = new Function("console", code + "\\n;return () => {" + scopeProbe + "};")(console);
        const output = logs.join("\\n");
        logs.length = 0;
        const value = check();
        postMessage({output, scopeValue: value, scopeLogs: logs.join("\\n")});
        return;
      }
      const probe = new Function("console", code + "\\n;return " + name + ";")(console);
      const output = logs.join("\\n");
      const results = cases.map(test => {
        logs.length = 0;
        const value = probe(...test.args.map(value => value === "__UNDEFINED__" ? undefined : value));
        return returnMode ? {value, silent: logs.length === 0} : logs.join("\\n");
      });
      postMessage({output, results});
    } catch(error) { postMessage({error: error.message}); } };`;
    const url = URL.createObjectURL(new Blob([source], {type: "text/javascript"}));
    const worker = new Worker(url);
    let done = false;
    const finish = (ok) => { if (done) return; done = true; clearTimeout(timer); worker.terminate(); URL.revokeObjectURL(url); resolve(ok); };
    const timer = setTimeout(() => finish(false), 1500);
    const cases = item.probeCases || [{args: item.probeArgs, output: item.probeOutput}];
    worker.onmessage = event => finish(!event.data.error && event.data.output === item.output && (item.scopeProbe ? JSON.stringify(event.data.scopeValue) === JSON.stringify(item.scopeValue) && event.data.scopeLogs === item.scopeLogs : event.data.results.every((result, i) => item.returnMode ? result.silent && result.value === cases[i].value : result === cases[i].output)));
    worker.onerror = () => finish(false);
    worker.postMessage({code, name: item.functionName, cases, returnMode: !!item.returnMode, scopeProbe: item.scopeProbe});
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
