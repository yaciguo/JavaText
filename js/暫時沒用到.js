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
  
  