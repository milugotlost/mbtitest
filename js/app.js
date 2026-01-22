/**
 * MBTI 宇宙 - 主應用程式
 * 路由管理、頁面渲染與全局狀態
 */

class MBTIApp {
    constructor() {
        this.currentSection = 'home';
        this.init();
    }

    init() {
        this.bindNavigation();
        this.bindMobileMenu();
        this.renderTypesGrid();
        this.renderCompareSelectors();
        this.renderRarityList();
        this.renderDistributionChart();
        this.handleURLHash();
    }

    // ===== 導航管理 =====
    bindNavigation() {
        // 導航連結
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.dataset.section;
                this.navigateTo(section);
            });
        });

        // CTA 按鈕
        document.querySelectorAll('[data-navigate]').forEach(btn => {
            btn.addEventListener('click', () => {
                const section = btn.dataset.navigate;
                this.navigateTo(section);
            });
        });

        // 瀏覽器前進/後退
        window.addEventListener('hashchange', () => this.handleURLHash());
    }

    handleURLHash() {
        const hash = window.location.hash.slice(1) || 'home';
        if (['home', 'test', 'types', 'compare', 'stats'].includes(hash)) {
            this.navigateTo(hash, false);
        }
    }

    navigateTo(section, updateHash = true) {
        // 更新 URL
        if (updateHash) {
            window.location.hash = section;
        }

        // 更新導航狀態
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.dataset.section === section);
        });

        // 切換區塊
        document.querySelectorAll('.section').forEach(sec => {
            sec.classList.toggle('active', sec.id === section);
        });

        // 滾動到頂部
        window.scrollTo({ top: 0, behavior: 'smooth' });

        this.currentSection = section;

        // 關閉手機選單
        document.querySelector('.nav-links')?.classList.remove('active');
    }

    bindMobileMenu() {
        const toggle = document.getElementById('navToggle');
        const navLinks = document.querySelector('.nav-links');

        if (toggle && navLinks) {
            toggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }
    }

    // ===== 人格類型網格 =====
    renderTypesGrid() {
        const grid = document.getElementById('typesGrid');
        if (!grid || !window.MBTI_TYPES) return;

        const types = Object.values(window.MBTI_TYPES);

        grid.innerHTML = types.map(type => `
            <div class="type-card" data-type="${type.code}" data-group="${type.group}">
                <div class="type-card-header">
                    <span class="type-card-icon">${type.icon}</span>
                    <div>
                        <div class="type-card-code">${type.code}</div>
                        <div class="type-card-name">${type.name}</div>
                    </div>
                </div>
                <p style="font-size: 0.875rem; color: var(--color-text-secondary); margin-bottom: 1rem;">
                    ${type.shortDesc}
                </p>
                <div class="type-card-traits">
                    ${type.keywords.map(k => `<span class="trait-tag">${k}</span>`).join('')}
                </div>
            </div>
        `).join('');

        // 綁定點擊事件
        grid.querySelectorAll('.type-card').forEach(card => {
            card.addEventListener('click', () => {
                this.showTypeDetail(card.dataset.type);
            });
        });

        // 綁定篩選器
        this.bindTypeFilters();
    }

    bindTypeFilters() {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;

                // 更新按鈕狀態
                document.querySelectorAll('.filter-btn').forEach(b => {
                    b.classList.toggle('active', b === btn);
                });

                // 篩選卡片
                document.querySelectorAll('.type-card').forEach(card => {
                    const group = card.dataset.group;
                    const show = filter === 'all' || group === filter;
                    card.style.display = show ? 'block' : 'none';
                });
            });
        });
    }

    // ===== 類型詳情模態框 =====
    showTypeDetail(typeCode) {
        const modal = document.getElementById('typeModal');
        const body = document.getElementById('modalBody');
        const type = window.MBTI_TYPES[typeCode];

        if (!modal || !body || !type) return;

        body.innerHTML = `
            <div class="type-detail">
                <div class="type-detail-header">
                    <span class="type-detail-icon">${type.icon}</span>
                    <div>
                        <h2 class="type-detail-code">${type.code}</h2>
                        <p class="type-detail-name">${type.name} · ${type.nickname}</p>
                    </div>
                    <span class="type-detail-rarity">${type.rarity}% 人口</span>
                </div>
                
                <div class="type-detail-section">
                    <h3>📖 概述</h3>
                    <p>${type.detailedDesc}</p>
                </div>
                
                <div class="type-detail-grid">
                    <div class="type-detail-section">
                        <h3>✨ 優勢</h3>
                        <ul>${type.strengths.map(s => `<li>${s}</li>`).join('')}</ul>
                    </div>
                    <div class="type-detail-section">
                        <h3>⚠️ 成長領域</h3>
                        <ul>${type.weaknesses.map(w => `<li>${w}</li>`).join('')}</ul>
                    </div>
                </div>
                
                <div class="type-detail-section">
                    <h3>💼 適合職業</h3>
                    <div class="career-tags">
                        ${type.careers.map(c => `<span class="career-tag">${c}</span>`).join('')}
                    </div>
                </div>
                
                <div class="type-detail-section">
                    <h3>🧠 認知功能堆疊</h3>
                    <div class="function-stack">
                        ${type.cognitiveStack.map((fn, i) => {
            const fnData = window.COGNITIVE_FUNCTIONS[fn];
            const labels = ['主導功能', '輔助功能', '第三功能', '劣勢功能'];
            return `
                                <div class="function-item">
                                    <span class="function-code">${fn}</span>
                                    <div class="function-info">
                                        <strong>${fnData.name}</strong>
                                        <span>${labels[i]}</span>
                                    </div>
                                    <p>${fnData.desc}</p>
                                </div>
                            `;
        }).join('')}
                    </div>
                </div>
                
                <div class="type-detail-section">
                    <h3>❤️ 關係相容性</h3>
                    <div class="compatibility-grid">
                        <div class="compat-group compat-best">
                            <h4>最佳匹配</h4>
                            <div class="compat-types">${type.compatibility.best.map(t => `<span>${t}</span>`).join('')}</div>
                        </div>
                        <div class="compat-group compat-good">
                            <h4>相處融洽</h4>
                            <div class="compat-types">${type.compatibility.good.map(t => `<span>${t}</span>`).join('')}</div>
                        </div>
                        <div class="compat-group compat-challenging">
                            <h4>需要磨合</h4>
                            <div class="compat-types">${type.compatibility.challenging.map(t => `<span>${t}</span>`).join('')}</div>
                        </div>
                    </div>
                </div>
                
                <div class="type-detail-section">
                    <h3>🌟 名人代表</h3>
                    <div class="celebrity-list">
                        ${type.celebrities.map(c => `<span class="celebrity-tag">${c}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;

        // 添加詳情樣式
        this.injectDetailStyles();

        modal.classList.add('active');

        // 綁定關閉
        document.getElementById('modalClose').onclick = () => modal.classList.remove('active');
        modal.querySelector('.modal-backdrop').onclick = () => modal.classList.remove('active');
    }

    injectDetailStyles() {
        if (document.getElementById('detail-styles')) return;

        const style = document.createElement('style');
        style.id = 'detail-styles';
        style.textContent = `
            .type-detail-header {
                display: flex;
                align-items: center;
                gap: 1.5rem;
                margin-bottom: 2rem;
                padding-bottom: 1.5rem;
                border-bottom: 1px solid rgba(255,255,255,0.1);
            }
            .type-detail-icon { font-size: 4rem; }
            .type-detail-code {
                font-family: var(--font-display);
                font-size: 2.5rem;
                font-weight: 800;
                background: var(--gradient-gold);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            .type-detail-name { color: var(--color-text-secondary); }
            .type-detail-rarity {
                margin-left: auto;
                padding: 0.5rem 1rem;
                background: rgba(255,215,0,0.1);
                border-radius: var(--radius-full);
                color: var(--color-accent-gold);
                font-size: 0.875rem;
            }
            .type-detail-section {
                margin-bottom: 2rem;
            }
            .type-detail-section h3 {
                font-family: var(--font-display);
                font-size: 1.25rem;
                margin-bottom: 1rem;
                color: var(--color-accent-cyan);
            }
            .type-detail-section p {
                line-height: 1.8;
                color: var(--color-text-secondary);
                white-space: pre-line;
            }
            .type-detail-section ul {
                list-style: none;
                display: grid;
                gap: 0.5rem;
            }
            .type-detail-section li {
                padding: 0.5rem 1rem;
                background: rgba(255,255,255,0.03);
                border-radius: var(--radius-md);
                color: var(--color-text-secondary);
            }
            .type-detail-section li::before {
                content: '•';
                margin-right: 0.5rem;
                color: var(--color-accent-gold);
            }
            .type-detail-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1.5rem;
            }
            .career-tags, .celebrity-list {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
            }
            .career-tag, .celebrity-tag {
                padding: 0.5rem 1rem;
                background: rgba(168,85,247,0.1);
                border: 1px solid rgba(168,85,247,0.3);
                border-radius: var(--radius-full);
                font-size: 0.875rem;
                color: var(--color-accent-purple);
            }
            .celebrity-tag {
                background: rgba(34,211,238,0.1);
                border-color: rgba(34,211,238,0.3);
                color: var(--color-accent-cyan);
            }
            .function-stack {
                display: grid;
                gap: 1rem;
            }
            .function-item {
                display: grid;
                grid-template-columns: auto 1fr;
                gap: 1rem;
                padding: 1rem;
                background: rgba(255,255,255,0.03);
                border-radius: var(--radius-lg);
            }
            .function-code {
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--gradient-aurora);
                border-radius: 50%;
                font-weight: 700;
                font-size: 1rem;
            }
            .function-info strong { display: block; }
            .function-info span {
                font-size: 0.75rem;
                color: var(--color-text-muted);
            }
            .function-item > p {
                grid-column: span 2;
                margin: 0;
                font-size: 0.875rem;
            }
            .compatibility-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 1rem;
            }
            .compat-group {
                padding: 1rem;
                border-radius: var(--radius-lg);
                text-align: center;
            }
            .compat-group h4 {
                font-size: 0.875rem;
                margin-bottom: 0.75rem;
            }
            .compat-best { background: rgba(16,185,129,0.1); }
            .compat-best h4 { color: var(--color-accent-green); }
            .compat-good { background: rgba(59,130,246,0.1); }
            .compat-good h4 { color: var(--color-sentinel); }
            .compat-challenging { background: rgba(249,115,22,0.1); }
            .compat-challenging h4 { color: var(--color-accent-orange); }
            .compat-types {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 0.5rem;
            }
            .compat-types span {
                padding: 0.25rem 0.75rem;
                background: rgba(255,255,255,0.1);
                border-radius: var(--radius-sm);
                font-size: 0.875rem;
                font-weight: 600;
            }
            @media (max-width: 768px) {
                .type-detail-grid,
                .compatibility-grid {
                    grid-template-columns: 1fr;
                }
                .type-detail-header {
                    flex-wrap: wrap;
                }
                .type-detail-rarity {
                    margin-left: 0;
                    margin-top: 1rem;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ===== 類型比較 =====
    renderCompareSelectors() {
        const selectA = document.getElementById('compareTypeA');
        const selectB = document.getElementById('compareTypeB');

        if (!selectA || !selectB || !window.MBTI_TYPES) return;

        const options = Object.values(window.MBTI_TYPES)
            .map(t => `<option value="${t.code}">${t.code} - ${t.name}</option>`)
            .join('');

        selectA.innerHTML = `<option value="">選擇類型 A...</option>${options}`;
        selectB.innerHTML = `<option value="">選擇類型 B...</option>${options}`;

        const updateCompare = () => {
            const typeA = selectA.value;
            const typeB = selectB.value;

            this.updateSelectedPreview('selectedTypeA', typeA);
            this.updateSelectedPreview('selectedTypeB', typeB);

            if (typeA && typeB) {
                this.showCompareResult(typeA, typeB);
            }
        };

        selectA.addEventListener('change', updateCompare);
        selectB.addEventListener('change', updateCompare);
    }

    updateSelectedPreview(containerId, typeCode) {
        const container = document.getElementById(containerId);
        if (!container) return;

        if (!typeCode) {
            container.innerHTML = '<p style="color: var(--color-text-muted);">請選擇類型</p>';
            return;
        }

        const type = window.MBTI_TYPES[typeCode];
        container.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1rem;">
                <span style="font-size: 2rem;">${type.icon}</span>
                <div>
                    <div style="font-size: 1.5rem; font-weight: 700;">${type.code}</div>
                    <div style="color: var(--color-text-secondary);">${type.name}</div>
                </div>
            </div>
        `;
    }

    showCompareResult(typeACode, typeBCode) {
        const container = document.getElementById('compareResult');
        if (!container) return;

        const typeA = window.MBTI_TYPES[typeACode];
        const typeB = window.MBTI_TYPES[typeBCode];

        container.classList.remove('hidden');
        container.innerHTML = `
            <div class="compare-section">
                <h4>核心特質對比</h4>
                <div class="compare-grid">
                    <div class="compare-item">
                        <h5>${typeA.code}</h5>
                        <p>${typeA.shortDesc}</p>
                    </div>
                    <div class="compare-item">
                        <h5>${typeB.code}</h5>
                        <p>${typeB.shortDesc}</p>
                    </div>
                </div>
            </div>
            
            <div class="compare-section">
                <h4>認知功能差異</h4>
                <div class="compare-grid">
                    <div class="compare-item">
                        <h5>主導功能</h5>
                        <p>${typeA.cognitiveStack[0]} - ${window.COGNITIVE_FUNCTIONS[typeA.cognitiveStack[0]].name}</p>
                    </div>
                    <div class="compare-item">
                        <h5>主導功能</h5>
                        <p>${typeB.cognitiveStack[0]} - ${window.COGNITIVE_FUNCTIONS[typeB.cognitiveStack[0]].name}</p>
                    </div>
                </div>
            </div>
            
            <div class="compare-section">
                <h4>優勢比較</h4>
                <div class="compare-grid">
                    <div class="compare-item">
                        <ul style="list-style: none; padding: 0;">
                            ${typeA.strengths.slice(0, 3).map(s => `<li>✓ ${s}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="compare-item">
                        <ul style="list-style: none; padding: 0;">
                            ${typeB.strengths.slice(0, 3).map(s => `<li>✓ ${s}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="compare-section">
                <h4>相容性分析</h4>
                <p style="color: var(--color-text-secondary);">
                    ${this.getCompatibilityText(typeACode, typeBCode)}
                </p>
            </div>
        `;
    }

    getCompatibilityText(typeA, typeB) {
        const dataA = window.MBTI_TYPES[typeA];

        if (dataA.compatibility.best.includes(typeB)) {
            return `${typeA} 與 ${typeB} 是最佳匹配！你們在認知功能上互補，能夠相互激勵和成長。這種組合通常能建立深刻且持久的連結。`;
        } else if (dataA.compatibility.good.includes(typeB)) {
            return `${typeA} 與 ${typeB} 相處融洽。你們有足夠的共同點來理解彼此，同時也有足夠的差異來保持新鮮感。`;
        } else if (dataA.compatibility.challenging.includes(typeB)) {
            return `${typeA} 與 ${typeB} 的組合可能需要更多的耐心和理解。你們的思維方式差異較大，但這也意味著可以從彼此身上學到很多。`;
        }
        return `${typeA} 與 ${typeB} 的關係充滿可能性。每段關係都是獨特的，重要的是相互尊重和開放溝通。`;
    }

    // ===== 統計圖表 =====
    renderRarityList() {
        const container = document.getElementById('rarityList');
        if (!container || !window.POPULATION_STATS) return;

        const sorted = Object.entries(window.POPULATION_STATS)
            .sort((a, b) => a[1] - b[1]);

        container.innerHTML = sorted.map(([type, percent], i) => `
            <div class="rarity-item">
                <span class="rarity-rank">${i + 1}</span>
                <span class="rarity-type">${type}</span>
                <span class="rarity-percent">${percent}%</span>
            </div>
        `).join('');
    }

    renderDistributionChart() {
        const canvas = document.getElementById('distributionChart');
        if (!canvas || !window.POPULATION_STATS) return;

        const ctx = canvas.getContext('2d');
        const data = Object.entries(window.POPULATION_STATS);
        const total = data.reduce((sum, [, v]) => sum + v, 0);

        // 設定 canvas 大小
        const size = 250;
        canvas.width = size * 2;
        canvas.height = size * 2;
        canvas.style.width = size + 'px';
        canvas.style.height = size + 'px';
        ctx.scale(2, 2);

        const centerX = size / 2;
        const centerY = size / 2;
        const radius = size / 2 - 20;

        // 顏色
        const colors = [
            '#a855f7', '#c084fc', '#e879f9', '#f0abfc',
            '#10b981', '#34d399', '#6ee7b7', '#a7f3d0',
            '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe',
            '#f59e0b', '#fbbf24', '#fcd34d', '#fde68a'
        ];

        let startAngle = -Math.PI / 2;

        data.forEach(([type, percent], i) => {
            const sliceAngle = (percent / total) * Math.PI * 2;
            const endAngle = startAngle + sliceAngle;

            // 繪製扇形
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.closePath();
            ctx.fillStyle = colors[i % colors.length];
            ctx.fill();

            // 繪製標籤
            if (percent > 3) {
                const midAngle = startAngle + sliceAngle / 2;
                const labelRadius = radius * 0.7;
                const x = centerX + Math.cos(midAngle) * labelRadius;
                const y = centerY + Math.sin(midAngle) * labelRadius;

                ctx.fillStyle = '#fff';
                ctx.font = 'bold 10px Outfit';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(type, x, y);
            }

            startAngle = endAngle;
        });

        // 中心空白
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = 'var(--color-bg-card)';
        ctx.fill();

        // 中心文字
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 14px Outfit';
        ctx.textAlign = 'center';
        ctx.fillText('MBTI', centerX, centerY - 8);
        ctx.font = '10px Outfit';
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.fillText('分布', centerX, centerY + 10);
    }
}

// 初始化應用
document.addEventListener('DOMContentLoaded', () => {
    window.mbtiApp = new MBTIApp();
});
