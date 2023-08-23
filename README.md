# NOTrash
## URL : https://notrash.netlify.app/

로고 사진
<br/><br/>
<hr>

## 📝프로젝트 소개
NOTrash는 지속가능한 미래를 위한 환경 보호 및 후원 웹사이트입니다. 개인들과 기업들에게 환경 보호에 참여하고 기여할 수 있는 기회를 제공하기 위해 제작하였습니다. <br/>
환경보존에 관심이 많은 청년들, 환경문제를 접하게 되는 청년들을 타켓으로 웹페이지 제작하여 다양한 활동적인 컨텐츠들을 포함하려 노력하였습니다.
<br/><br/>

## 📓프로젝트 개요
- 프로젝트명 : **"NOTrash"**
- 개발 인원 : 4명
- 개발 기간 : 8/4 ~ 8/21
- 기술 스택 <br>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
   <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
- 협업 도구<br>
  <img src="https://img.shields.io/badge/Git-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=whit"> <img src="https://img.shields.io/badge/KakaoTalk-FFCD00?style=for-the-badge&logo=kakaotalk&logoColor=black"> <img src="https://img.shields.io/badge/Notion-e1e1e1?style=for-the-badge&logo=notion&logoColor=black">
<br/><br/>





## 👨‍👧‍👦구성원
|**Name**|**Github**|**Role**|
|:---:|:---:|:---:|
|👩‍💻오주현|https://github.com/Ohjju|조장, 메인페이지 디자인 시안 및 <br/>서브페이지(About, DIY)|
|👩‍💻최가은|https://github.com/choigugu|메인페이지 디자인 시안 및<br/>서브페이지(Campaign)|
|👨‍💻한진수|https://github.com/hanjinsu302|내용3|
|👩‍💻서유민|내용2|내용3|

<br/><br/>
<hr>

# 주요 기능 및 소개
<br/>

## 📌Main 페이지
<br/><br/>
과거, 현재, 미래의 지구의 온도를 표시하여 지구의 상태를 직접적으로 보여지는 화면을 볼 수 있습니다.<br>
`GSAP` 라이브러리인 `timeline` 기능을 사용하여 스크롤시 각 text와 img의 크기 및 `opacity` 값을 변경하여 이러한 효과를 구현하였습니다. 또한 이 페이지에서<br>
다양한 환경 문제를 보여주고 우리의 목적을 알리는 페이지로 구성을 하였습니다. 초기의 큰 용량의 이미지와 비디오를 사용으로 긴 시간의 로딩과 부드럽지 않은<br> 화면 전환 문제를 발견하여 이미지의 용량을 줄이고 중복되거나 불 필요한 코드들을 지우며 조금 더 사용자가 보기 편한 화면을 만들도록 노력을 하였습니다.<br> 앞으로 스크롤시 더욱 부드러운 화면 전환과 여러 효과들을 추가하여 다소 심심해 보일 수 있는 부분을 화려하게 구현 할 예정입니다.

## 📌DIY 페이지
<br/><br/>
리 사이클링과 업 사이클링을 활용하여 나만의 제품을 커스텀해서 제작 할 수 있는 페이지 입니다.<br>
원하는 상품과 색상, 재질을 선택을 하면 내가 선택한 옵션들이 적용된 제품이 왼쪽의 화면에 보이게 됩니다.<br>
**상품 변경 기능은 각 항목의 옵션의  선택에 따라 제품,색상,질감이 변경되어 화면에 보여지게 됩니다.**
이 기능은 `getElementById`와 `querySelectorAll`을 사용하여 요소를 선택하고, 각 옵션에 대한 **`click`** 이벤트 리스너를 등록하게 되면 옵션의 `style.backgroundColor` 또는 `style.backgroundImage` 값을 가져와 상품의 배경 스타일을 변경하도록 코드로 구현 하였습니다

**텍스트 변경 기능은** 사용자가 입력 창에 텍스트를 입력하고 "입력하기" 버튼을 클릭하면, 입력한 텍스트가 화면에 추가됩니다. 텍스트의 색상 및 크기는 사용자가 선택한 옵션에 따라 변경되는 기능 입니다. "+" 및 "-" 버튼을 클릭하면 텍스트의 크기가 4px씩 증가 또는 감소합니다. 최소 크기와 최대 크기가 정해져 있습니다. 텍스트 이동 기능은 **`mousedown`**, **`mousemove`**, **`mouseup`** 이벤트를 이용하여 텍스트를 드래그하여 이동시킬 수 있으며 마우스 이벤트를 통해 텍스트의 드래그 여부를 **`isDragging`** 변수로 관리하며, 위치를 계산하여 텍스트를 이동시도록 코드로 구현 하였습니다

**상품 구매 기능은**  "구매" 버튼을 클릭하면 `SweetAlert` 라이브러리를 사용하여 구매 완료 알림이 표시됩니다. "장바구니 담기" 옵션을 선택할 수도 있습니다.

## 📌About 페이지
![aboutpage](https://github.com/sesac-teamProject-rememberme/team-project/assets/136290438/a89979ba-2ae3-412c-9dee-dedac27b6243)
<br/><br/>
about 페이지 첫 화면을 내리면 지구평균온도 상승에 따른 환경 변화를 설명하며 현재 지구온난화의 진행 상태와 환경 문제의 심각성을 알리고자 했습니다. 다음으로 탄소배출, 쓰레기, 수질오염 등 3가지의 환경문제에 대한 설명 페이지를 넣어 환경 문제들이 어떠한 영향을 미치는지 설명해주었습니다. 마지막으로는 NOTrash의 목표에 대한 페이지가 나오고, 제일 하단에는 활동을 보러가도록 유도하기 위해 활동보러가기 버튼을 넣어주었습니다.
<br/><br/>
<p align="center"><img src="https://github.com/sesac-teamProject-rememberme/team-project/assets/136290438/90e92d39-f464-4977-80a3-8be9a82feb7c"><p/>
<br/>
  - 지구 온도 상승 페이지는 각 페이지를 position: sticky를 주어 화면에 올라오면 고정이 되게 만들었고, js에서 wheel event 사용해 css요소를 add, remove를 해주며 페이지에 opacity를 주었습니다. <br/> <br/>
  - 3가지 환경 문제 페이지의 요소들은 display: grid로 배치하였고, 각 사진을 hover하면 크기가 커지고 수질오염 페이지의 각 숫자를 hover하면 색이 바뀌도록 설정했습니다. js에서 scroll event를 사용해 스크롤 할떄 요소들이 하나씩 차례대로 나타나는 애니메이션을 주었습니다. <br/> <br/>
  - NOTrash의 목표 페이지는 희망적인 느낌을 주기 위해 js에서 scroll event 사용해 배경에 초록 그라데이션을 넣었습니다.<br/> <br/>
  - 헤더는 기존과 똑같다가 3가지 환경문제가 나올때 다른 헤더로 바뀌고, 3가지 환경문제 페이지가 끝나면 다시 원래의 헤더로 돌아오게 하였습니다. position: fixed로 고정시키고, backdropFilter로 blur 효과를 주었습니다. js에서 scroll event를 이용해 각 환경 문제 페이지 때마다 헤더의 메뉴 표시도 바뀌게 하였습니다.
<br/><br/>

## 📌Campaign 페이지
![campaignpage](https://github.com/sesac-teamProject-rememberme/team-project/assets/136290384/675e8234-f007-43e7-84d0-445e79daa693)
<br/>
<br/>
매체에서 많이 들어보기는 했지만 명확한 뜻을 모르는 고객들이 있을 수 있기에 첫 상단에는 단어의 뜻을 설명하는 레이아웃과 이미지를 한눈에 담을 수 있게 배치하였습니다. 화면에 타이틀과 이미지를 가득 채우는 레이아웃으로 한눈에 들어오고, 주제를 명확하게 보임으로서 심플하고 간결하게 소개하고 있습니다.
업사이클링, 제로웨이스트, 플로깅의 각 뜻과 의미를 알았다면 다음으로는 그 캠페인을 실천하고 있는 브랜드나 기업들, 그리고 우리가 할 수 있는 실천 방법들을 두어 저희 팀이 말하고 싶은 주제를 표현했습니다. 각 탭마다 큰 컨텐츠의 분류는 같지만 레이아웃을 조금씩 다르게 두어 컨텐츠를 볼 때 지루함을 덜고있습니다.
<br/>
<br/>
<p align="center"><img src="https://github.com/sesac-teamProject-rememberme/team-project/assets/136290384/d13c72c7-a067-4daf-bb68-f49b17b60ee5"></p>
<br/>
브라우저 크기를 줄였을 때도 레이아웃을 크게 손보지 않아도 되게끔 grid를 이용하여 레이아웃을 잡았습니다. 이미지나 텍스트로 이루어진 컨텐츠 부분은 마우스 hover 했을 때 transform의 scale, border-line, background-color를 변경하여 밋밋하지 않은 새로운 느낌을 주었습니다.
<br/>
<br/>

## 📌Donation 페이지
<br/><br/>



