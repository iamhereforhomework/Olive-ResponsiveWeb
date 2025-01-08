function toggleMenu() {
    const menu = document.getElementById('menu');
    // 切換選單的顯示狀態
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

/* const record = document.getElementById('record'); // 取得 SVG 元素
const music = document.getElementById('music');  // 取得音樂元素

let isPlaying = false; // 狀態標記，判斷是否正在播放音樂

record.addEventListener('click', () => {
    if (isPlaying) {
        // 如果正在播放，停止音樂和旋轉
        music.pause();
        record.classList.remove('rotating');
    } else {
        // 如果沒有播放，開始播放音樂和旋轉
        music.play().catch(error => {
            console.error('音樂播放失敗:', error);
        });
        record.classList.add('rotating');
    }
    isPlaying = !isPlaying; // 切換播放狀態
});

// 確認音量設定並取消靜音
music.volume = 1.0;
music.muted = false; */


/* window.onload = function(){
    var audio = document.getElementById('music');
    audio.pause();
}
function play(){
    var audio = document.getElementById('music');
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
} */

const record = document.getElementById('record'); // 取得 SVG 元素
const music = document.getElementById('music');  // 取得音樂元素

let isPlaying = false; // 狀態標記，判斷是否正在播放音樂

record.addEventListener('click', () => {
    if (isPlaying) {
        // 如果正在播放，停止音樂和旋轉
        music.pause();
        record.classList.remove('rotating');
    } else {
        // 如果沒有播放，開始播放音樂和旋轉
        music.play().catch(error => {
            console.error('音樂播放失敗:', error);
        });
        record.classList.add('rotating');
    }
    isPlaying = !isPlaying; // 切換播放狀態
});

// 確認音量設定並取消靜音
music.volume = 1.0;
music.muted = false;
