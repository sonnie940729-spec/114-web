document.getElementById("drawBtn").addEventListener("click", function () {
    const input = document.getElementById("nameList").value;

    // 分行並過濾空白
    const names = input.split("\n").map(name => name.trim()).filter(name => name !== "");

    if (names.length === 0) {
        alert("請先輸入名單！");
        return;
    }

    // 隨機抽一個
    const randomIndex = Math.floor(Math.random() * names.length);
    const winner = names[randomIndex];

    document.getElementById("result").innerText = `🎉 抽中：${winner}`;
});