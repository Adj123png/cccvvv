document.addEventListener('DOMContentLoaded', (event) => {
    // 烟花效果，使用CSS动画和JavaScript创建
    function createFirework() {
        const firework = document.createElement('div');
        firework.className = 'firework';
        const size = Math.random() * 10 + 10; // 烟花大小
        firework.style.width = `${size}px`;
        firework.style.height = `${size}px`;
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.top = `${Math.random() * 100}%`;
        firework.style.animationDuration = `${Math.random() * 3 + 2}s`;
        firework.style.animationDelay = `${Math.random() * 5}s`;
        document.getElementById('fireworks').appendChild(firework);

        setTimeout(() => {
            firework.remove();
            createFirework();
        }, 5000);
    }

    // 创建烟花
    for (let i = 0; i < 5; i++) {
        createFirework();
    }

    // 彩纸效果
    const confettiBtn = document.getElementById('confettiBtn');
    confettiBtn.addEventListener('click', () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    });
});
