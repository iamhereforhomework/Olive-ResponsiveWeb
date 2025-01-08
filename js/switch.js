const image = document.getElementById('image');

// 定義多張圖片的陣列
const images = [
    'images/peshead.svg', // 替換為實際圖片路徑
    'images/mahead.svg',
    'images/alhead.svg'
];

let currentImageIndex = 0;

// 當滑鼠移過圖片時切換到下一張圖片
image.addEventListener('mouseover', () => {
    // 切換到下一張圖片
    currentImageIndex = (currentImageIndex + 1) % images.length; // 確保索引循環
    image.src = images[currentImageIndex];
});
