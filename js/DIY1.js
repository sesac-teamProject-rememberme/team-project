//색상 변경 js
const productElement = document.getElementById("product");
const colorOptions = document.querySelectorAll(".color-option");

colorOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedColor = option.style.backgroundColor;
    productElement.style.backgroundColor = selectedColor;
  });
});
//상품 변경 js
const productsElement = document.getElementById("product");
const choiceOptions = document.querySelectorAll(".choice-option");

choiceOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedChoice = option.style.backgroundImage;
    productElement.style.backgroundImage = selectedChoice;
  });
});
//질감 변경 js
const productElements = document.getElementById("product2");
const textureOptions = document.querySelectorAll(".texture_option");

textureOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedTexture = option.style.backgroundImage;
    productElements.style.backgroundImage = selectedTexture;
  });
});

const productElementSize = document.getElementById("p");
const sizeOptions = document.querySelectorAll(".size_option");

sizeOptions.forEach((p) => {
  p.addEventListener("click", () => {
    const selectedSize = p.style.fontSize;
    productElementSize.style.fontSize = selectedSize;
  });
});

const draggableElement = document.getElementById("outputDiv");

let offsetX, offsetY;
let isDragging = false;

draggableElement.addEventListener("mousedown", (event) => {
  isDragging = true;
  offsetX = event.clientX - draggableElement.getBoundingClientRect().left;
  offsetY = event.clientY - draggableElement.getBoundingClientRect().top;
  draggableElement.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (event) => {
  if (!isDragging) return;
  const x = event.clientX - offsetX;
  const y = event.clientY - offsetY;
  draggableElement.style.left = x + "px";
  draggableElement.style.top = y + "px";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  draggableElement.style.cursor = "grab";
});
document.getElementById("submitButton").addEventListener("click", function () {
  // 입력한 내용 가져오기
  var inputContent = document.getElementById("inputText").value;
  var textColor = document.getElementById("inputColor").value;
  // 내용을 표시할 div 요소 가져오기
  var outputDiv = document.getElementById("outputDiv");
  // 새로운 p 요소 생성하여 내용 추가
  var newParagraph = document.createElement("p");
  newParagraph.textContent = inputContent;
  newParagraph.style.color = textColor;
  // div 내에 p 요소 추가
  outputDiv.appendChild(newParagraph);
  // 입력 창 내용 지우기
  document.getElementById("inputText").value = "";
});

// inputColor 요소의 input 이벤트 리스너 추가
document.getElementById("inputColor").addEventListener("input", function () {
  var textColor = document.getElementById("inputColor").value;
  var outputDiv = document.getElementById("outputDiv");

  // 마지막으로 추가된 p 요소의 텍스트 색상 변경 코드
  var paragraphs = outputDiv.getElementsByTagName("p");
  if (paragraphs.length > 0) {
    paragraphs[paragraphs.length - 1].style.color = textColor;
  }
});

function buy() {
  Swal.fire({
    title: "선택하신 상품을 구매하시겠습니까?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "구매",
    denyButtonText: `장바구니 담기`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("구매완료!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("장바구니 기능은 준비중입니다!", "", "info");
    }
  });
}
