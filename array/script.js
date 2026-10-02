const category = new URLSearchParams(location.search).get("category") || "basic";
const units = {
  "basic": {
    "title": "배열의 기본",
    "prefix": "AB",
    "problems": [
      {
        "title": "상품명 변경하기",
        "description": "두 번째 상품명을 면바지로 변경하세요.",
        "conditions": [
          "products의 인덱스로 값을 수정하고, 변경한 두 번째 상품명만 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const products = [\"셔츠\", \"청바지\", \"운동화\"];\n\n// 여기에 코드를 작성하세요.",
        "output": "면바지",
        "requiredPatterns": []
      },
      {
        "title": "상품 개수와 마지막 상품",
        "description": "상품 개수와 마지막 상품명을 확인하세요.",
        "conditions": [
          "length로 개수를 출력한 뒤, length를 이용해 마지막 상품명을 출력하세요. 마지막 인덱스를 숫자로 직접 쓰지 마세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const products = [\"노트북\", \"키보드\", \"마우스\", \"모니터\"];\n\n// 여기에 코드를 작성하세요.",
        "output": "4\n모니터",
        "requiredPatterns": [
          "\\.length"
        ]
      },
      {
        "title": "상품 가격 수정과 합계",
        "description": "두 번째 가격을 35000으로 바꾸고 세 가격의 합계를 구하세요.",
        "conditions": [
          "인덱스로 가격을 수정하세요. 세 요소를 더한 값을 totalPrice에 저장하고 합계만 출력하세요. 반복문은 사용하지 않습니다.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const prices = [19000, 39000, 59000];\n\n// 여기에 코드를 작성하세요.",
        "output": "113000",
        "requiredPatterns": []
      }
    ]
  },
  "edit": {
    "title": "배열 추가·삭제와 for 반복",
    "prefix": "AE",
    "problems": [
      {
        "title": "새 배너 등록하기",
        "description": "배너 두 개를 추가하고 번호를 붙여 출력하세요.",
        "conditions": [
          "push()로 \"주말 할인\", \"무료배송 이벤트\"를 차례대로 추가하세요.",
          "개수를 먼저 출력하고, for문과 length로 모든 배너를 \"1. 신상품 안내\" 형식으로 출력하세요. 번호는 1부터 시작합니다.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const banners = [\"신상품 안내\", \"회원 혜택\"];\n\n// 여기에 코드를 작성하세요.",
        "output": "4\n1. 신상품 안내\n2. 회원 혜택\n3. 주말 할인\n4. 무료배송 이벤트",
        "requiredPatterns": [
          "\\.push\\s*\\(",
          "\\bfor\\s*\\(",
          "\\.length"
        ]
      },
      {
        "title": "최근 검색 기록 취소하기",
        "description": "마지막 검색 기록 두 개를 삭제하세요.",
        "conditions": [
          "pop()을 두 번 호출하고, 각각 반환된 검색어를 삭제한 순서로 출력하세요. 마지막에 남은 개수를 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const searches = [\"노트북\", \"무선 마우스\", \"키보드\", \"모니터\"];\n\n// 여기에 코드를 작성하세요.",
        "output": "모니터\n키보드\n2",
        "requiredPatterns": [
          "\\.pop\\s*\\("
        ]
      },
      {
        "title": "종료된 행사 메뉴 삭제하기",
        "description": "여름 특가와 여름 기획전 메뉴를 삭제하세요.",
        "conditions": [
          "splice()를 한 번 호출해 두 번째 메뉴부터 두 개를 삭제하세요.",
          "삭제 후 세 번째 메뉴, 남은 메뉴 개수를 순서대로 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const menus = [\"홈\", \"여름 특가\", \"여름 기획전\", \"신상품\", \"고객센터\"];\n\n// 여기에 코드를 작성하세요.",
        "output": "고객센터\n3",
        "requiredPatterns": [
          "\\.splice\\s*\\("
        ]
      },
      {
        "title": "장바구니 주문 금액 계산하기",
        "description": "가격 목록을 수정하고 배송비를 반영하세요.",
        "conditions": [
          "splice()로 세 번째 가격을 삭제하고 push()로 15000을 추가하세요.",
          "for문과 length로 합계를 구하세요. 합계가 50000 미만이면 배송비 3000, 이상이면 0입니다.",
          "상품 합계와 배송비를 포함한 최종 금액을 순서대로 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const prices = [12000, 18000, 25000, 9000];\n\n// 여기에 코드를 작성하세요.",
        "output": "54000\n54000",
        "requiredPatterns": [
          "\\.splice\\s*\\(",
          "\\.push\\s*\\(",
          "\\bfor\\s*\\(",
          "\\.length"
        ]
      },
      {
        "title": "재입고가 필요한 상품",
        "description": "재고가 5개 미만인 상품을 집계하세요.",
        "conditions": [
          "for문과 length로 모든 재고를 확인하세요.",
          "5개 미만인 상품 개수와 그 상품들의 현재 재고 합계를 순서대로 출력하세요. 재고 0도 포함합니다.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const stocks = [12, 3, 0, 8, 5, 2];\n\n// 여기에 코드를 작성하세요.",
        "output": "3\n5",
        "requiredPatterns": [
          "\\bfor\\s*\\(",
          "\\.length"
        ]
      }
    ]
  },
  "object": {
    "title": "객체와 배열 안의 객체",
    "prefix": "AO",
    "problems": [
      {
        "title": "행사 정보 저장하기",
        "description": "event 객체를 직접 만들고 속성값을 출력하세요.",
        "conditions": [
          "속성은 title: \"웹 콘텐츠 전시회\", place: \"학교 강당\", capacity: 80, isOpen: true입니다.",
          "점 표기법으로 title, place, capacity, isOpen을 이 순서로 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "\n\n// 여기에 코드를 작성하세요.",
        "output": "웹 콘텐츠 전시회\n학교 강당\n80\ntrue",
        "requiredPatterns": []
      },
      {
        "title": "예약 인원 변경하기",
        "description": "예약 인원을 5명으로 바꾸고 총금액을 계산하세요.",
        "conditions": [
          "people을 5로 수정하세요. 객체의 people과 pricePerPerson을 곱해 총금액을 구하세요.",
          "name, 변경한 people, 총금액을 순서대로 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const reservation = {\"name\": \"김민서\", \"people\": 3, \"pricePerPerson\": 12000};\n\n// 여기에 코드를 작성하세요.",
        "output": "김민서\n5\n60000",
        "requiredPatterns": []
      },
      {
        "title": "도서 목록에서 정보 찾기",
        "description": "지정한 도서의 속성을 읽고 대출 가능 여부를 수정하세요.",
        "conditions": [
          "두 번째 도서 title, 세 번째 도서 author를 순서대로 출력하세요.",
          "두 번째 도서 isAvailable을 true로 바꾸고 변경된 값을 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const books = [{\"title\": \"웹 디자인 입문\", \"author\": \"이지은\", \"isAvailable\": true}, {\"title\": \"자바스크립트 첫걸음\", \"author\": \"박준호\", \"isAvailable\": false}, {\"title\": \"사진으로 보는 건축\", \"author\": \"김서연\", \"isAvailable\": true}];\n\n// 여기에 코드를 작성하세요.",
        "output": "자바스크립트 첫걸음\n김서연\ntrue",
        "requiredPatterns": []
      },
      {
        "title": "강좌 목록에 새 강좌 추가하기",
        "description": "웹 접근성 강좌 객체를 추가하고 모든 강좌를 출력하세요.",
        "conditions": [
          "push()로 name: \"웹 접근성\", hours: 6인 객체를 추가하세요.",
          "for문으로 \"강좌명 / 시간시간\" 형식으로 출력하세요. 예: HTML·CSS / 12시간",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const courses = [{\"name\": \"HTML·CSS\", \"hours\": 12}, {\"name\": \"JavaScript\", \"hours\": 18}];\n\n// 여기에 코드를 작성하세요.",
        "output": "HTML·CSS / 12시간\nJavaScript / 18시간\n웹 접근성 / 6시간",
        "requiredPatterns": [
          "\\.push\\s*\\(",
          "\\bfor\\s*\\("
        ]
      },
      {
        "title": "전체 재생 시간 구하기",
        "description": "영상 길이를 합산해 분과 초로 출력하세요.",
        "conditions": [
          "duration의 단위는 초입니다. for문으로 전체 duration을 합산하세요.",
          "남은 초는 합계 % 60, 분은 (합계 - 남은 초) / 60입니다. \"5분 20초\" 형식으로 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const videos = [{\"title\": \"브랜드 소개\", \"duration\": 95}, {\"title\": \"제품 사용법\", \"duration\": 140}, {\"title\": \"관리 방법\", \"duration\": 85}];\n\n// 여기에 코드를 작성하세요.",
        "output": "5분 20초",
        "requiredPatterns": [
          "\\bfor\\s*\\("
        ]
      },
      {
        "title": "조건에 맞는 숙소 표시하기",
        "description": "10만원 이하이고 주차 가능한 숙소를 찾으세요.",
        "conditions": [
          "for문과 조건문으로 price <= 100000이고 hasParking이 true인 숙소를 찾으세요.",
          "조건에 맞는 name을 원본 순서대로 출력한 뒤, 마지막에 해당 숙소 개수를 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const rooms = [{\"name\": \"시티 호텔\", \"price\": 85000, \"hasParking\": true}, {\"name\": \"리버 게스트하우스\", \"price\": 60000, \"hasParking\": false}, {\"name\": \"파크 호텔\", \"price\": 100000, \"hasParking\": true}, {\"name\": \"오션 호텔\", \"price\": 120000, \"hasParking\": true}];\n\n// 여기에 코드를 작성하세요.",
        "output": "시티 호텔\n파크 호텔\n2",
        "requiredPatterns": [
          "\\bfor\\s*\\("
        ]
      },
      {
        "title": "가장 많이 조회된 게시물",
        "description": "최다 조회 게시물 객체를 선택하세요.",
        "conditions": [
          "let mostViewedPost에 첫 번째 객체를 저장하세요.",
          "for문으로 두 번째부터 비교하고 views가 더 크면 mostViewedPost에 현재 객체를 대입하세요.",
          "선택한 객체의 title과 views를 순서대로 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const posts = [{\"title\": \"신입생 학교 안내\", \"views\": 320}, {\"title\": \"동아리 모집\", \"views\": 580}, {\"title\": \"축제 일정\", \"views\": 450}, {\"title\": \"급식 메뉴\", \"views\": 510}];\n\n// 여기에 코드를 작성하세요.",
        "output": "동아리 모집\n580",
        "requiredPatterns": [
          "\\bfor\\s*\\("
        ]
      }
    ]
  },
  "callback": {
    "title": "콜백 함수와 forEach()",
    "prefix": "AC",
    "problems": [
      {
        "title": "전달받은 함수 실행하기",
        "description": "함수를 인수로 전달하여 작업 사이에 실행하세요.",
        "conditions": [
          "showNotice는 \"전시 준비가 완료되었습니다.\"를 출력합니다.",
          "runTask(callback)는 \"작업 시작\" 출력 → callback 호출 → \"작업 종료\" 출력 순서입니다.",
          "runTask에 showNotice 함수 자체를 전달하세요. showNotice를 별도로 직접 호출하지 마세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "\n\n// 여기에 코드를 작성하세요.",
        "output": "작업 시작\n전시 준비가 완료되었습니다.\n작업 종료",
        "requiredPatterns": [
          "\\brunTask\\s*\\(\\s*showNotice\\s*\\)"
        ]
      },
      {
        "title": "콜백에 데이터 전달하기",
        "description": "신청자 이름을 콜백에 전달하세요.",
        "conditions": [
          "printConfirmation(name)은 \"이름님, 신청이 완료되었습니다.\"를 출력합니다.",
          "completeRegistration(name, callback)은 callback을 호출하며 name을 전달합니다.",
          "completeRegistration에 \"김하늘\"과 printConfirmation 함수 자체를 전달해 실행하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "\n\n// 여기에 코드를 작성하세요.",
        "output": "김하늘님, 신청이 완료되었습니다.",
        "requiredPatterns": []
      },
      {
        "title": "이미지 설명 문구 만들기",
        "description": "각 요소에 사진이라는 말을 붙이세요.",
        "conditions": [
          "forEach() 괄호 안에 화살표 함수를 작성하세요. 각 요소 뒤에 공백과 \"사진\"을 붙여 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const subjects = [\"학교 전경\", \"실습실\", \"학생 작품\"];\n\n// 여기에 코드를 작성하세요.",
        "output": "학교 전경 사진\n실습실 사진\n학생 작품 사진",
        "requiredPatterns": [
          "\\.forEach\\s*\\(",
          "=>"
        ]
      },
      {
        "title": "좌석 번호 배정하기",
        "description": "인덱스로 101번부터 좌석을 배정하세요.",
        "conditions": [
          "forEach()의 두 매개변수로 요소와 인덱스를 받으세요.",
          "좌석 번호는 인덱스 + 101로 계산하고 \"101번 좌석: 박서준\" 형식으로 출력하세요. 번호 배열은 만들지 마세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const names = [\"박서준\", \"이수빈\", \"정지우\", \"최민호\"];\n\n// 여기에 코드를 작성하세요.",
        "output": "101번 좌석: 박서준\n102번 좌석: 이수빈\n103번 좌석: 정지우\n104번 좌석: 최민호",
        "requiredPatterns": [
          "\\.forEach\\s*\\("
        ]
      },
      {
        "title": "신청 가능한 강좌 안내",
        "description": "정원이 남은 강좌만 안내하세요.",
        "conditions": [
          "forEach()로 enrolled < capacity인 강좌를 찾으세요.",
          "남은 자리는 capacity - enrolled입니다. \"강좌명: 숫자자리 남음\" 형식으로 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const courses = [{\"name\": \"사진 편집\", \"capacity\": 20, \"enrolled\": 18}, {\"name\": \"영상 제작\", \"capacity\": 15, \"enrolled\": 15}, {\"name\": \"웹 디자인\", \"capacity\": 24, \"enrolled\": 19}, {\"name\": \"디지털 드로잉\", \"capacity\": 12, \"enrolled\": 12}];\n\n// 여기에 코드를 작성하세요.",
        "output": "사진 편집: 2자리 남음\n웹 디자인: 5자리 남음",
        "requiredPatterns": [
          "\\.forEach\\s*\\("
        ]
      },
      {
        "title": "주문 수량을 반영한 총금액",
        "description": "모든 주문의 금액을 합산하세요.",
        "conditions": [
          "forEach()에서 price × quantity를 누적하세요. 총금액 변수는 콜백 밖에서 0으로 초기화하세요.",
          "반복이 끝난 뒤 총금액만 한 번 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const orders = [{\"name\": \"노트\", \"price\": 2500, \"quantity\": 4}, {\"name\": \"펜\", \"price\": 1500, \"quantity\": 6}, {\"name\": \"파일\", \"price\": 3000, \"quantity\": 2}];\n\n// 여기에 코드를 작성하세요.",
        "output": "25000",
        "requiredPatterns": [
          "\\.forEach\\s*\\("
        ]
      },
      {
        "title": "게시물 상태별 개수 집계",
        "description": "공개 상태별 게시물 수를 구하세요.",
        "conditions": [
          "forEach()와 조건문으로 status가 \"공개\", \"작성 중\", \"비공개\"인 개수를 각각 누적하세요.",
          "공개, 작성 중, 비공개 순서로 \"상태: 숫자개\" 형식으로 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const posts = [{\"title\": \"학교 축제 안내\", \"status\": \"공개\"}, {\"title\": \"동아리 인터뷰\", \"status\": \"작성 중\"}, {\"title\": \"실습 작품 소개\", \"status\": \"공개\"}, {\"title\": \"행사 사진 모음\", \"status\": \"비공개\"}, {\"title\": \"학과 소개\", \"status\": \"작성 중\"}, {\"title\": \"공모전 소식\", \"status\": \"공개\"}];\n\n// 여기에 코드를 작성하세요.",
        "output": "공개: 3개\n작성 중: 2개\n비공개: 1개",
        "requiredPatterns": [
          "\\.forEach\\s*\\("
        ]
      }
    ]
  },
  "transform": {
    "title": "map()·filter() 기초",
    "prefix": "AM",
    "problems": [
      {
        "title": "영상 길이를 초로 변환하기",
        "description": "분 단위 배열을 초 단위 배열로 변환하세요.",
        "conditions": [
          "map()으로 각 값에 60을 곱하고 seconds에 결과 배열을 저장하세요. forEach()로 결과 요소를 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const minutes = [2, 5, 8, 12];\n\n// 여기에 코드를 작성하세요.",
        "output": "120\n300\n480\n720",
        "requiredPatterns": [
          "\\.map\\s*\\(",
          "\\.forEach\\s*\\("
        ]
      },
      {
        "title": "짝수 길이 검색어 선택하기",
        "description": "글자 수가 짝수인 검색어를 선택하세요.",
        "conditions": [
          "filter()로 문자열 length를 2로 나눈 나머지가 0인 요소를 선택하고 evenKeywords에 저장하세요.",
          "forEach()로 선택된 검색어를 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const keywords = [\"웹\", \"디자인\", \"사진\", \"영상편집\", \"코딩\"];\n\n// 여기에 코드를 작성하세요.",
        "output": "사진\n영상편집\n코딩",
        "requiredPatterns": [
          "\\.filter\\s*\\(",
          "\\.forEach\\s*\\("
        ]
      },
      {
        "title": "여행지 이름만 추출하기",
        "description": "여행지 객체를 이름 문자열로 변환하세요.",
        "conditions": [
          "map()으로 name만 담은 배열을 만들고 placeNames에 저장하세요.",
          "forEach()로 이름을 출력하고, 마지막에 원본 places의 첫 번째 fee를 출력하세요. 원본을 변경하지 마세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const places = [{\"name\": \"수목원\", \"region\": \"대구\", \"fee\": 0}, {\"name\": \"해양박물관\", \"region\": \"부산\", \"fee\": 0}, {\"name\": \"민속촌\", \"region\": \"용인\", \"fee\": 32000}];\n\n// 여기에 코드를 작성하세요.",
        "output": "수목원\n해양박물관\n민속촌\n0",
        "requiredPatterns": [
          "\\.map\\s*\\(",
          "\\.forEach\\s*\\("
        ]
      },
      {
        "title": "가격 범위의 상품 선택하기",
        "description": "5000원 이상 20000원 이하 상품을 선택하세요.",
        "conditions": [
          "filter()로 두 경계값을 포함하는 상품 객체 배열을 만들고 selectedProducts에 저장하세요.",
          "forEach()로 선택된 name을 출력하고, 마지막에 선택된 개수를 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const products = [{\"name\": \"펜\", \"price\": 3000}, {\"name\": \"노트\", \"price\": 5000}, {\"name\": \"파우치\", \"price\": 12000}, {\"name\": \"독서대\", \"price\": 20000}, {\"name\": \"스탠드\", \"price\": 35000}];\n\n// 여기에 코드를 작성하세요.",
        "output": "노트\n파우치\n독서대\n3",
        "requiredPatterns": [
          "\\.filter\\s*\\(",
          "\\.forEach\\s*\\("
        ]
      },
      {
        "title": "판매 수량에 따른 적립금",
        "description": "각 상품의 판매 수량으로 적립금을 계산하세요.",
        "conditions": [
          "수량이 10 미만이면 개당 100원, 10 이상이면 개당 150원을 적용합니다.",
          "map()으로 quantity × 적용 단가를 반환하고 rewards에 저장하세요. forEach()로 적립금을 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const sales = [{\"name\": \"스티커\", \"quantity\": 3}, {\"name\": \"엽서\", \"quantity\": 10}, {\"name\": \"키링\", \"quantity\": 5}, {\"name\": \"배지\", \"quantity\": 12}];\n\n// 여기에 코드를 작성하세요.",
        "output": "300\n1500\n500\n1800",
        "requiredPatterns": [
          "\\.map\\s*\\(",
          "\\.forEach\\s*\\("
        ]
      },
      {
        "title": "검색 결과가 없는 경우",
        "description": "가구 카테고리의 검색 결과를 확인하세요.",
        "conditions": [
          "filter()로 category가 \"가구\"인 객체만 선택하여 searchResults에 저장하세요.",
          "결과 개수가 0이면 \"검색 결과가 없습니다.\"를 출력하세요. 마지막에 원본 items의 개수를 출력하세요. 원본은 변경하지 마세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const items = [{\"name\": \"키보드\", \"category\": \"전자기기\"}, {\"name\": \"마우스\", \"category\": \"전자기기\"}, {\"name\": \"노트\", \"category\": \"문구\"}];\n\n// 여기에 코드를 작성하세요.",
        "output": "검색 결과가 없습니다.\n3",
        "requiredPatterns": [
          "\\.filter\\s*\\("
        ]
      },
      {
        "title": "미완료 작업 제목 목록",
        "description": "미완료 객체를 선택한 뒤 제목 배열을 만드세요.",
        "conditions": [
          "filter()로 isDone이 false인 객체를 선택해 unfinishedTasks에 저장하세요.",
          "unfinishedTasks에 map()을 적용해 title만 담은 unfinishedTitles를 만드세요. forEach()로 제목을 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const tasks = [{\"title\": \"자료 조사\", \"isDone\": true}, {\"title\": \"화면 디자인\", \"isDone\": false}, {\"title\": \"이미지 준비\", \"isDone\": true}, {\"title\": \"발표 자료 작성\", \"isDone\": false}];\n\n// 여기에 코드를 작성하세요.",
        "output": "화면 디자인\n발표 자료 작성",
        "requiredPatterns": [
          "\\.filter\\s*\\(",
          "\\.map\\s*\\(",
          "\\.forEach\\s*\\("
        ]
      },
      {
        "title": "기준 금액 이상 주문 선택",
        "description": "주문 금액으로 변환한 후 10000원 이상 금액을 선택하세요.",
        "conditions": [
          "map()으로 price × quantity를 계산한 orderAmounts를 만드세요.",
          "orderAmounts에 filter()를 적용해 10000 이상 금액만 largeAmounts에 저장하세요.",
          "forEach()로 선택된 금액을 출력하고 마지막에 선택된 개수를 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const orders = [{\"name\": \"파일\", \"price\": 3000, \"quantity\": 2}, {\"name\": \"노트\", \"price\": 2500, \"quantity\": 4}, {\"name\": \"펜\", \"price\": 1500, \"quantity\": 10}, {\"name\": \"파우치\", \"price\": 12000, \"quantity\": 1}];\n\n// 여기에 코드를 작성하세요.",
        "output": "10000\n15000\n12000\n3",
        "requiredPatterns": [
          "\\.map\\s*\\(",
          "\\.filter\\s*\\(",
          "\\.forEach\\s*\\("
        ]
      }
    ]
  },
  "destructuring": {
    "title": "구조 분해 할당",
    "prefix": "AD",
    "problems": [
      {
        "title": "화면 크기 꺼내기",
        "description": "배열에서 가로와 세로 값을 꺼내세요.",
        "conditions": [
          "배열 구조 분해로 첫 값은 width, 둘째 값은 height에 저장하세요.",
          "width, height를 \"가로: 값\", \"세로: 값\" 형식으로 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const screenSize = [1920, 1080];\n\n// 여기에 코드를 작성하세요.",
        "output": "가로: 1920\n세로: 1080",
        "requiredPatterns": [
          "\\b(?:const|let)\\s*\\[[^\\]]+\\]\\s*="
        ]
      },
      {
        "title": "프로필 정보 선택하기",
        "description": "객체에서 학년과 이름만 꺼내세요.",
        "conditions": [
          "객체 구조 분해의 왼쪽에 grade, name을 이 순서로 작성하세요. department는 꺼내지 않습니다.",
          "\"이름 / 숫자학년\" 형식으로 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const profile = {\"name\": \"김서연\", \"department\": \"IT콘텐츠과\", \"grade\": 2};\n\n// 여기에 코드를 작성하세요.",
        "output": "김서연 / 2학년",
        "requiredPatterns": [
          "\\b(?:const|let)\\s*\\{[^}]+\\}\\s*="
        ]
      },
      {
        "title": "대응하는 값이 없는 경우",
        "description": "없는 요소와 속성을 꺼냈을 때의 값을 확인하세요.",
        "conditions": [
          "colors를 firstColor, secondColor, thirdColor로 배열 구조 분해하세요.",
          "site를 name, address로 객체 구조 분해하세요. 기본값은 설정하지 마세요.",
          "thirdColor, name, address를 이 순서로 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const colors = [\"검정\", \"흰색\"];\nconst site = {\"name\": \"온라인 전시관\"};\n\n// 여기에 코드를 작성하세요.",
        "output": "undefined\n온라인 전시관\nundefined",
        "requiredPatterns": [
          "\\b(?:const|let)\\s*\\[[^\\]]+\\]\\s*=",
          "\\b(?:const|let)\\s*\\{[^}]+\\}\\s*="
        ]
      },
      {
        "title": "변경 전 가격과 현재 가격",
        "description": "꺼낸 값과 원본 속성의 관계를 확인하세요.",
        "conditions": [
          "const 객체 구조 분해로 price를 꺼낸 뒤 원본 product.price를 39000으로 바꾸세요.",
          "꺼낸 price, 현재 product.price, 변경 전 가격에서 현재 가격을 뺀 차액을 순서대로 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const product = {\"name\": \"무선 키보드\", \"price\": 45000};\n\n// 여기에 코드를 작성하세요.",
        "output": "45000\n39000\n6000",
        "requiredPatterns": [
          "\\b(?:const|let)\\s*\\{[^}]+\\}\\s*="
        ]
      },
      {
        "title": "행사별 남은 자리 안내",
        "description": "각 객체의 속성을 꺼내 잔여석을 안내하세요.",
        "conditions": [
          "forEach()의 본문에서 title, capacity, reserved를 객체 구조 분해하세요.",
          "남은 자리 capacity - reserved가 양수이면 \"행사명: 잔여 숫자석\", 0이면 \"행사명: 마감\"을 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const events = [{\"title\": \"사진 특강\", \"capacity\": 30, \"reserved\": 22}, {\"title\": \"영상 편집 특강\", \"capacity\": 20, \"reserved\": 20}, {\"title\": \"웹 디자인 특강\", \"capacity\": 25, \"reserved\": 19}];\n\n// 여기에 코드를 작성하세요.",
        "output": "사진 특강: 잔여 8석\n영상 편집 특강: 마감\n웹 디자인 특강: 잔여 6석",
        "requiredPatterns": [
          "\\b(?:const|let)\\s*\\{[^}]+\\}\\s*=",
          "\\.forEach\\s*\\("
        ]
      },
      {
        "title": "작품 가로세로 비율",
        "description": "구조 분해한 값으로 비율 안내 배열을 만드세요.",
        "conditions": [
          "map()의 본문에서 title, width, height를 객체 구조 분해하세요.",
          "width / height를 계산해 \"작품명: 비율\" 문자열을 반환하고 ratioLabels에 저장하세요.",
          "forEach()로 결과 문자열을 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const works = [{\"title\": \"가로 배너\", \"width\": 1200, \"height\": 400}, {\"title\": \"정사각 포스터\", \"width\": 800, \"height\": 800}, {\"title\": \"세로 배너\", \"width\": 600, \"height\": 1200}];\n\n// 여기에 코드를 작성하세요.",
        "output": "가로 배너: 3\n정사각 포스터: 1\n세로 배너: 0.5",
        "requiredPatterns": [
          "\\b(?:const|let)\\s*\\{[^}]+\\}\\s*=",
          "\\.map\\s*\\(",
          "\\.forEach\\s*\\("
        ]
      },
      {
        "title": "예산과 인원에 맞는 장소",
        "description": "구조 분해한 기준으로 가능한 장소를 선택하세요.",
        "conditions": [
          "requirements를 maxPrice, requiredCapacity로 배열 구조 분해하세요.",
          "filter() 본문에서 price, capacity를 객체 구조 분해하고 price <= maxPrice이며 capacity >= requiredCapacity인 객체를 availableVenues에 저장하세요.",
          "forEach() 본문에서 name을 객체 구조 분해한 뒤 장소명을 출력하세요.",
          "출력 예시와 동일하게 한 줄씩 출력하세요. 입력은 없습니다."
        ],
        "starter": "const requirements = [100000, 20];\nconst venues = [{\"name\": \"소회의실\", \"price\": 60000, \"capacity\": 12}, {\"name\": \"세미나실\", \"price\": 100000, \"capacity\": 20}, {\"name\": \"대강당\", \"price\": 150000, \"capacity\": 100}, {\"name\": \"다목적실\", \"price\": 90000, \"capacity\": 30}];\n\n// 여기에 코드를 작성하세요.",
        "output": "세미나실\n다목적실",
        "requiredPatterns": [
          "\\b(?:const|let)\\s*\\[[^\\]]+\\]\\s*=",
          "\\b(?:const|let)\\s*\\{[^}]+\\}\\s*=",
          "\\.filter\\s*\\(",
          "\\.forEach\\s*\\("
        ]
      }
    ]
  }
};
const unit = units[category] || units.basic;
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
  if (!(item.requiredPatterns || []).every(pattern => new RegExp(pattern).test(cleaned))) return Promise.resolve(false);
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
