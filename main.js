// `use strict`;
// focus하면 inpunt.value 지워지는 기능 ㄱㄱ
let userInput = document.querySelector(".input-style");
let goBtn = document.getElementById(`go-btn`);
let picked = 0; //랜덤수의 양동이
let Result = document.getElementById(`result`);
let chances = 5; //기회는 5번
let userChances = document.querySelector(`.user-chances`); // 그리고 알려줘야지
let gameOver = false;
let retryBtn = document.getElementById(`retry-btn`);
let inputList = []; //유저값을 배열로 받자.
let MainImg = document.getElementById(`Main-img`); //이미지를 바꿔주기 위함

function comNum() {
  picked = Math.floor(Math.random() * 100) + 1;
  console.log(picked);
}
comNum(); //랜덤수 생성

function returnIMG() {
  MainImg.src = `https://i.pinimg.com/1200x/72/9d/ee/729dee6d785e63cbb9632e0bb87f6953.jpg`;
} //인상쓰는 부리부리몬 반환
function originIMG() {
  MainImg.src =
    "https://i.pinimg.com/1200x/9b/9e/5d/9b9e5dc928b596b4899f15eedb8782a5.jpg";
} //원래 이미지 반환

goBtn.addEventListener(`click`, Play);
retryBtn.addEventListener(`click`, Retry);
userInput.addEventListener(`focus`, () => {
  userInput.value = ``;
});

function Play() {
  const userValue = userInput.value;
  originIMG();
  //   inputList.push(userInput.value);
  //   console.log(inputList);

  if (inputList.includes(userValue)) {
    console.log(`뭐노`); //처음부터 겹친다하네.. 아하 맨처음부터 값을 넣어줘서 그렇군.
    Result.textContent = `어이. 이미 말한 숫자잖아.`;
    returnIMG();
    return;
  } //실수의 흔적이니 남겨둬야지.

  if (userValue < 1 || userValue > 100) {
    Result.textContent = `어이. 1부터 100까지라구.`;
    returnIMG();
    return;
  }

  chances--;
  userChances.textContent = `남은 기회는 ${chances}번!`;

  if (userValue < picked) {
    Result.textContent = `후후.. 더 큰 숫자라구`;
  } else if (userValue > picked) {
    Result.textContent = `어이, 숫자를 좀 줄여봐`;
  } else {
    Result.textContent = `정답이다! 문제 해결!`;
    MainImg.src = `https://i.pinimg.com/originals/b3/27/a2/b327a2c4e438807cf630e88b05f3c5fa.gif`;
    gameOver = true;
    goBtn.disabled = true;
  }

  inputList.push(userInput.value);
  //   if (inputList == userValue) {
  //     console.log(`ㅗㄷㅅ`);
  //   } 유효성 검사는 위에 해야지. 이미 입력함? 돌아가. 안 함? 일로와.

  if (chances < 1) {
    gameOver = true;
    if (gameOver == true) {
      goBtn.disabled = true;
      MainImg.src = `https://i.pinimg.com/1200x/72/4a/33/724a33c79e6c067e16d7f00d025dfd7a.jpg`;
      Result.textContent = `역시. 애송이구나?`;
    }
  }
}

function Retry() {
  comNum();
  gameOver = false;
  chances = 5;

  userInput.value = ``;
  Result.textContent = `괜찮아. 다시 해 봐.`;
  goBtn.disabled = false;
  userChances.textContent = `이번에도 기회는 5번!`;
  MainImg.src =
    "https://i.pinimg.com/1200x/9b/9e/5d/9b9e5dc928b596b4899f15eedb8782a5.jpg";
  //   MainImg.style.height = "500px"; 불러온 이미지 우째 고치노. 도와줘 나중의 한지민

  inputList = [];
}
