/**
 * MBTI 宇宙 - 動畫效果
 * 星空粒子系統與互動動畫
 */

// ===== 星空粒子系統 =====
class Starfield {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.stars = [];
        this.shootingStars = [];
        this.mouseX = 0;
        this.mouseY = 0;

        this.init();
        this.animate();
        this.bindEvents();
    }

    init() {
        this.resize();
        this.createStars();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createStars() {
        this.stars = [];
        const numStars = Math.floor((this.canvas.width * this.canvas.height) / 3000);

        for (let i = 0; i < numStars; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.3,
                twinkleSpeed: Math.random() * 0.02 + 0.01,
                twinklePhase: Math.random() * Math.PI * 2
            });
        }
    }

    addShootingStar() {
        if (this.shootingStars.length < 3 && Math.random() < 0.002) {
            this.shootingStars.push({
                x: Math.random() * this.canvas.width,
                y: 0,
                length: Math.random() * 80 + 40,
                speed: Math.random() * 10 + 8,
                opacity: 1
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // 繪製漸層背景
        const gradient = this.ctx.createRadialGradient(
            this.canvas.width / 2, this.canvas.height / 2, 0,
            this.canvas.width / 2, this.canvas.height / 2, this.canvas.width * 0.7
        );
        gradient.addColorStop(0, 'rgba(20, 15, 40, 1)');
        gradient.addColorStop(0.5, 'rgba(10, 10, 20, 1)');
        gradient.addColorStop(1, 'rgba(5, 5, 10, 1)');

        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // 繪製星雲效果
        this.drawNebula();

        // 繪製星星
        this.stars.forEach(star => {
            star.twinklePhase += star.twinkleSpeed;
            const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;

            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
            this.ctx.fill();

            // 星星光暈
            if (star.radius > 1) {
                const glowGradient = this.ctx.createRadialGradient(
                    star.x, star.y, 0,
                    star.x, star.y, star.radius * 4
                );
                glowGradient.addColorStop(0, `rgba(200, 220, 255, ${0.2 * twinkle})`);
                glowGradient.addColorStop(1, 'rgba(200, 220, 255, 0)');

                this.ctx.beginPath();
                this.ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2);
                this.ctx.fillStyle = glowGradient;
                this.ctx.fill();
            }
        });

        // 繪製流星
        this.addShootingStar();
        this.shootingStars = this.shootingStars.filter(star => {
            star.x += star.speed;
            star.y += star.speed * 0.7;
            star.opacity -= 0.01;

            if (star.opacity > 0) {
                const gradient = this.ctx.createLinearGradient(
                    star.x, star.y,
                    star.x - star.length, star.y - star.length * 0.7
                );
                gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                this.ctx.beginPath();
                this.ctx.moveTo(star.x, star.y);
                this.ctx.lineTo(star.x - star.length, star.y - star.length * 0.7);
                this.ctx.strokeStyle = gradient;
                this.ctx.lineWidth = 2;
                this.ctx.stroke();

                return true;
            }
            return false;
        });

        requestAnimationFrame(() => this.animate());
    }

    drawNebula() {
        // 紫色星雲
        const nebula1 = this.ctx.createRadialGradient(
            this.canvas.width * 0.2, this.canvas.height * 0.3, 0,
            this.canvas.width * 0.2, this.canvas.height * 0.3, 300
        );
        nebula1.addColorStop(0, 'rgba(168, 85, 247, 0.1)');
        nebula1.addColorStop(0.5, 'rgba(168, 85, 247, 0.05)');
        nebula1.addColorStop(1, 'rgba(168, 85, 247, 0)');

        this.ctx.fillStyle = nebula1;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // 青色星雲
        const nebula2 = this.ctx.createRadialGradient(
            this.canvas.width * 0.8, this.canvas.height * 0.7, 0,
            this.canvas.width * 0.8, this.canvas.height * 0.7, 250
        );
        nebula2.addColorStop(0, 'rgba(34, 211, 238, 0.08)');
        nebula2.addColorStop(0.5, 'rgba(34, 211, 238, 0.04)');
        nebula2.addColorStop(1, 'rgba(34, 211, 238, 0)');

        this.ctx.fillStyle = nebula2;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    bindEvents() {
        window.addEventListener('resize', () => {
            this.resize();
            this.createStars();
        });

        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });
    }
}

// ===== 首頁類型星球動畫 =====
function initTypeOrbs() {
    const container = document.getElementById('typeOrbs');
    if (!container) return;

    const types = Object.keys(window.MBTI_TYPES || {});
    const centerX = 200;
    const centerY = 200;

    types.forEach((type, index) => {
        const angle = (index / types.length) * Math.PI * 2 - Math.PI / 2;
        const radius = 120 + (index % 2) * 40;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        const typeData = window.MBTI_TYPES[type];
        const orb = document.createElement('div');
        orb.className = 'type-orb';
        orb.textContent = type;
        orb.style.left = `${x}px`;
        orb.style.top = `${y}px`;
        orb.style.setProperty('--orb-color', typeData.color);
        orb.style.borderColor = typeData.color;
        orb.style.animationDelay = `${index * 0.2}s`;

        orb.addEventListener('click', () => {
            if (window.mbtiApp) {
                window.mbtiApp.navigateTo('types');
                setTimeout(() => window.mbtiApp.showTypeDetail(type), 300);
            }
        });

        container.appendChild(orb);
    });
}

// ===== 滾動動畫觀察器 =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.dimension-card, .type-card, .stats-card').forEach(el => {
        observer.observe(el);
    });
}

// ===== 導航列滾動效果 =====
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===== 按鈕漣漪效果 =====
function initRippleEffect() {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn');
        if (!btn) return;

        const ripple = document.createElement('span');
        ripple.className = 'ripple';

        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });

    // 添加漣漪動畫樣式
    if (!document.getElementById('ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== 初始化所有動畫 =====
document.addEventListener('DOMContentLoaded', () => {
    // 初始化星空背景
    new Starfield('starfield');

    // 初始化類型星球
    setTimeout(initTypeOrbs, 100);

    // 初始化其他動畫
    initScrollAnimations();
    initNavbarScroll();
    initRippleEffect();
});

// 導出給其他模組使用
window.Starfield = Starfield;
window.initTypeOrbs = initTypeOrbs;
