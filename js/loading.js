window.addEventListener("load", () => {
    // 隱藏加載畫面
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.opacity = "0"; // 淡出動畫
    setTimeout(() => {
        loadingScreen.style.display = "none"; // 完全移除
/*         document.querySelector(".contain").style.display = "block"; // 顯示主內容
        document.querySelector(".leaderbd").style.display = "block"; */
    }, 500); // 與 CSS 過渡時間同步
});