function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
    const tomato = document.getElementById('record');
    let isRotating = false;
    
    tomato.addEventListener('click', function() {
        if (isRotating) {
            this.classList.remove('rotating');
            isRotating = false;
        } else {
            this.classList.add('rotating');
            isRotating = true;
        }
    });
});