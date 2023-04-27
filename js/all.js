

function showImageContainers() {
  let imageContainer1 = document.querySelector('.image-container');
  let imageContainer2 = document.querySelector('#taipeiCarousel');
  
  if (imageContainer1 !== null) {
    imageContainer1.style.display = "block";
    imageContainer1.classList.remove("image-container");
  }
  
  if (imageContainer2 !== null) {
    imageContainer2.style.display = "block";
    imageContainer2.classList.remove("image-container");
  }     
}

function openFullscreenImage(event) {
  // 創建一個新的 div 元素，作為全屏顯示的圖片容器
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("fullscreen-image-container");

  // 創建一個新的 img 元素，用於顯示圖片
  const image = document.createElement("img");
  image.src = event.target.src;
  image.alt = event.target.alt;
  
    // 創建一個新的 button 元素，用於關閉全屏顯示模式
  const closeButton = document.createElement("button");
  closeButton.classList.add("fullscreen-image-close");
  closeButton.innerText = "X";

  // 將關閉按鈕 輪播圖 添加到圖片容器中
  imageContainer.appendChild(closeButton);
  // imageContainer.appendChild(document.querySelector('#taipeiCarousel'));

  // 將圖片容器添加到頁面中
  document.body.appendChild(imageContainer);

  // 在圖片容器添加到頁面後，顯示其他圖片容器
  showImageContainers();

  // 當用戶點擊關閉按鈕時，執行以下函數
  closeButton.onclick = function () {
    // 將圖片容器從頁面中刪除
    document.querySelector('#taipeiCarousel').style.display = "none";
    document.body.removeChild(imageContainer);
  };
}
// 獲取所有圖片元素，並為每個元素添加點擊事件處理程序
const images = document.querySelectorAll(".image-container img");
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", openFullscreenImage);
}

// 新北
function showImageContainers2() {
  let imageContainer3 = document.querySelector('.image-newtaipei');
  let imageContainer4 = document.querySelector('#newTaipeiCarousel');
  
  if (imageContainer3 !== null) {
    imageContainer3.style.display = "block";
    imageContainer3.classList.remove("image-newtaipei");
  }
  
  if (imageContainer4 !== null) {
    imageContainer4.style.display = "block";
    imageContainer4.classList.remove("image-newtaipei");
  }   
}

function openFullscreenImage2(event2) {
  console.log('ddd')
  // 創建一個新的 div 元素，作為全屏顯示的圖片容器
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("fullscreen-image-newtaipei");

  // 創建一個新的 img 元素，用於顯示圖片
  const image2 = document.createElement("img");
  image2.src = event2.target.src;
  image2.alt = event2.target.alt;
  
    // 創建一個新的 button 元素，用於關閉全屏顯示模式
  const closeButton = document.createElement("button");
  closeButton.classList.add("fullscreen-image-close");
  closeButton.innerText = "X";

  // 將關閉按鈕 輪播圖 添加到圖片容器中
  imageContainer.appendChild(closeButton);
  // imageContainer.appendChild(document.querySelector('#taipeiCarousel'));

  // 將圖片容器添加到頁面中
  document.body.appendChild(imageContainer);

  // 在圖片容器添加到頁面後，顯示其他圖片容器
  showImageContainers2();

  // 當用戶點擊關閉按鈕時，執行以下函數
  closeButton.onclick = function () {
    // 將圖片容器從頁面中刪除
    document.querySelector('#newTaipeiCarousel').style.display = "none";
    document.body.removeChild(imageContainer);
  };
}
// 獲取所有圖片元素，並為每個元素添加點擊事件處理程序
const images2 = document.querySelectorAll(".image-newtaipei img");
for (var i = 0; i < images2.length; i++) {
  images2[i].addEventListener("click", openFullscreenImage2);
}

// 日本
function showImageContainers3() {
  console.log('showImageContainers3')
  let imageContainer5 = document.querySelector('.image-japan');
  let imageContainer6 = document.querySelector('#japanCarousel');
  console.log(imageContainer6)
  
  if (imageContainer5 !== null) {
    imageContainer5.style.display = "block";
    imageContainer5.classList.remove("image-japan");
  }
  
  if (imageContainer6 !== null) {
    imageContainer6.style.display = "block";
    imageContainer6.classList.remove("image-japan");
  }   
}

function openFullscreenImage3(event3) {
  console.log('ccc')
  // 創建一個新的 div 元素，作為全屏顯示的圖片容器
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("fullscreen-image-japan");

  // 創建一個新的 img 元素，用於顯示圖片
  const image3 = document.createElement("img");
  image3.src = event3.target.src;
  image3.alt = event3.target.alt;
  
    // 創建一個新的 button 元素，用於關閉全屏顯示模式
  const closeButton = document.createElement("button");
  closeButton.classList.add("fullscreen-image-close");
  closeButton.innerText = "X";

  // 將關閉按鈕 輪播圖 添加到圖片容器中
  imageContainer.appendChild(closeButton);

  // 將圖片容器添加到頁面中
  document.body.appendChild(imageContainer);

  // 在圖片容器添加到頁面後，顯示其他圖片容器
  showImageContainers3();

  // 當用戶點擊關閉按鈕時，執行以下函數
  closeButton.onclick = function () {
    // 將圖片容器從頁面中刪除
    document.querySelector('#japanCarousel').style.display = "none";
    document.body.removeChild(imageContainer);
  };
}
// 獲取所有圖片元素，並為每個元素添加點擊事件處理程序
const images3 = document.querySelectorAll(".image-japan img");
for (var i = 0; i < images3.length; i++) {
  images3[i].addEventListener("click", openFullscreenImage3);
}


// 人像
function showImageContainers4() {
  console.log('showImageContainers4')
  let imageContainer7 = document.querySelector('.image-model');
  let imageContainer8 = document.querySelector('#modelCarousel');
  console.log(imageContainer7)
  
  if (imageContainer7 !== null) {
    imageContainer7.style.display = "block";
    imageContainer7.classList.remove("image-model");
  }
  
  if (imageContainer8 !== null) {
    imageContainer8.style.display = "block";
    imageContainer8.classList.remove("image-model");
  }   
}

function openFullscreenImage4(event4) {
  console.log('ccc')
  // 創建一個新的 div 元素，作為全屏顯示的圖片容器
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("fullscreen-image-model");

  // 創建一個新的 img 元素，用於顯示圖片
  const image3 = document.createElement("img");
  image3.src = event4.target.src;
  image3.alt = event4.target.alt;
  
    // 創建一個新的 button 元素，用於關閉全屏顯示模式
  const closeButton = document.createElement("button");
  closeButton.classList.add("fullscreen-image-close");
  closeButton.innerText = "X";

  // 將關閉按鈕 輪播圖 添加到圖片容器中
  imageContainer.appendChild(closeButton);

  // 將圖片容器添加到頁面中
  document.body.appendChild(imageContainer);

  // 在圖片容器添加到頁面後，顯示其他圖片容器
  showImageContainers4();

  // 當用戶點擊關閉按鈕時，執行以下函數
  closeButton.onclick = function () {
    // 將圖片容器從頁面中刪除
    document.querySelector('#modelCarousel').style.display = "none";
    document.body.removeChild(imageContainer);
  };
}
// 獲取所有圖片元素，並為每個元素添加點擊事件處理程序
const images4 = document.querySelectorAll(".image-model img");
for (var i = 0; i < images4.length; i++) {
  images4[i].addEventListener("click", openFullscreenImage4);
}


// 貓咪
function showImageContainers5() {
  console.log('showImageContainers5')
  let imageContainer8 = document.querySelector('.image-cat');
  let imageContainer9 = document.querySelector('#catCarousel');
  
  if (imageContainer8 !== null) {
    imageContainer8.style.display = "block";
    imageContainer8.classList.remove("image-cat");
  }
  
  if (imageContainer9 !== null) {
    imageContainer9.style.display = "block";
    imageContainer9.classList.remove("image-cat");
  }   
}

function openFullscreenImage5(event5) {
  console.log('ccc')
  // 創建一個新的 div 元素，作為全屏顯示的圖片容器
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("fullscreen-image-cat");

  // 創建一個新的 img 元素，用於顯示圖片
  const image3 = document.createElement("img");
  image3.src = event5.target.src;
  image3.alt = event5.target.alt;
  
    // 創建一個新的 button 元素，用於關閉全屏顯示模式
  const closeButton = document.createElement("button");
  closeButton.classList.add("fullscreen-image-close");
  closeButton.innerText = "X";

  // 將關閉按鈕 輪播圖 添加到圖片容器中
  imageContainer.appendChild(closeButton);

  // 將圖片容器添加到頁面中
  document.body.appendChild(imageContainer);

  // 在圖片容器添加到頁面後，顯示其他圖片容器
  showImageContainers5();

  // 當用戶點擊關閉按鈕時，執行以下函數
  closeButton.onclick = function () {
    // 將圖片容器從頁面中刪除
    document.querySelector('#catCarousel').style.display = "none";
    document.body.removeChild(imageContainer);
  };
}
// 獲取所有圖片元素，並為每個元素添加點擊事件處理程序
const images5 = document.querySelectorAll(".image-cat img");
for (var i = 0; i < images5.length; i++) {
  images5[i].addEventListener("click", openFullscreenImage5);
}

// 山海
function showImageContainers6() {
  console.log('showImageContainers6')
  let imageContainer10 = document.querySelector('.image-sea');
  let imageContainer11 = document.querySelector('#seaCarousel');
  
  if (imageContainer10 !== null) {
    imageContainer10.style.display = "block";
    imageContainer10.classList.remove("image-sea");
  }
  
  if (imageContainer11 !== null) {
    imageContainer11.style.display = "block";
    imageContainer11.classList.remove("image-sea");
  }   
}

function openFullscreenImage6(event6) {
  console.log('sea')
  // 創建一個新的 div 元素，作為全屏顯示的圖片容器
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("fullscreen-image-sea");

  // 創建一個新的 img 元素，用於顯示圖片
  const image3 = document.createElement("img");
  image3.src = event6.target.src;
  image3.alt = event6.target.alt;
  
    // 創建一個新的 button 元素，用於關閉全屏顯示模式
  const closeButton = document.createElement("button");
  closeButton.classList.add("fullscreen-image-close");
  closeButton.innerText = "X";

  // 將關閉按鈕 輪播圖 添加到圖片容器中
  imageContainer.appendChild(closeButton);

  // 將圖片容器添加到頁面中
  document.body.appendChild(imageContainer);

  // 在圖片容器添加到頁面後，顯示其他圖片容器
  showImageContainers6();

  // 當用戶點擊關閉按鈕時，執行以下函數
  closeButton.onclick = function () {
    // 將圖片容器從頁面中刪除
    document.querySelector('#seaCarousel').style.display = "none";
    document.body.removeChild(imageContainer);
  };
}
// 獲取所有圖片元素，並為每個元素添加點擊事件處理程序
const images6 = document.querySelectorAll(".image-sea img");
for (var i = 0; i < images6.length; i++) {
  images6[i].addEventListener("click", openFullscreenImage6);
}