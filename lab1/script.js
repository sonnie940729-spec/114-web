// 取得 HTML 元素
const drawBtn = document.getElementById('drawBtn');
const nameInput = document.getElementById('nameInput');
const winnerDisplay = document.getElementById('winner');

// 監聽按鈕點擊事件
drawBtn.addEventListener('click', function() {
    // 1. 取得輸入的內容
    const rawText = nameInput.value;

    // 2. 將字串轉換為陣列
    // .split('\n')：依照換行符號切割
    // .map(s => s.trim())：去掉名字前後的空白
    // .filter(s => s !== '')：過濾掉空行
    const names = rawText.split('\n')
                         .map(name => name.trim())
                         .filter(name => name !== '');

    // 3. 檢查是否有輸入名單
    if (names.length === 0) {
        alert('請先輸入至少一個名字喔！');
        return;
    }

    // 4. 產生隨機索引 (Random Index)
    // Math.random() 會產生 0 到 1 之間的小數
    // 乘上長度後，用 Math.floor 無條件捨去變成整數
    const randomIndex = Math.floor(Math.random() * names.length);

    // 5. 顯示中獎者
    winnerDisplay.innerText = names[randomIndex];
    
    // 加點小特效：改變顏色
    winnerDisplay.style.color = '#d32f2f';
});