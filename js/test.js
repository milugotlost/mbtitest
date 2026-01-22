/**
 * MBTI 宇宙 - 測驗系統
 * 包含 60 道題目的完整測驗
 */

// 測驗題目資料庫
const TEST_QUESTIONS = [
    // ===== E/I 維度 (15題) =====
    { id: 1, dimension: 'EI', dimLabel: '能量來源', text: '在社交場合中，你更傾向於...', optionA: '主動與人交談，認識新朋友', optionB: '等待他人來搭話，或與熟人待在一起', scoreA: 'E', scoreB: 'I' },
    { id: 2, dimension: 'EI', dimLabel: '能量來源', text: '經過一整天的工作後，你會想要...', optionA: '和朋友出去放鬆，增添能量', optionB: '獨自待在家裡，恢復精力', scoreA: 'E', scoreB: 'I' },
    { id: 3, dimension: 'EI', dimLabel: '能量來源', text: '思考問題時，你更習慣...', optionA: '邊說邊想，透過討論理清思緒', optionB: '安靜思考，想清楚後再分享', scoreA: 'E', scoreB: 'I' },
    { id: 4, dimension: 'EI', dimLabel: '能量來源', text: '在團隊專案中，你更喜歡...', optionA: '頻繁的會議和即時溝通', optionB: '獨立完成自己的部分，再整合', scoreA: 'E', scoreB: 'I' },
    { id: 5, dimension: 'EI', dimLabel: '能量來源', text: '理想的週末是...', optionA: '參加派對或社交聚會', optionB: '在家看書、看電影、玩遊戲', scoreA: 'E', scoreB: 'I' },
    { id: 6, dimension: 'EI', dimLabel: '能量來源', text: '接到朋友突然的邀約，你通常...', optionA: '很開心地答應，喜歡即興計劃', optionB: '有些猶豫，更喜歡提前計劃', scoreA: 'E', scoreB: 'I' },
    { id: 7, dimension: 'EI', dimLabel: '能量來源', text: '在一個新環境中，你會...', optionA: '很快就能融入並認識新朋友', optionB: '需要一些時間來觀察和適應', scoreA: 'E', scoreB: 'I' },
    { id: 8, dimension: 'EI', dimLabel: '能量來源', text: '你的朋友圈子...', optionA: '很廣泛，認識很多不同領域的人', optionB: '較小但深入，有幾個非常親密的朋友', scoreA: 'E', scoreB: 'I' },
    { id: 9, dimension: 'EI', dimLabel: '能量來源', text: '當需要解決問題時，你傾向...', optionA: '找人討論，腦力激盪', optionB: '先自己研究，有想法再找人', scoreA: 'E', scoreB: 'I' },
    { id: 10, dimension: 'EI', dimLabel: '能量來源', text: '你說話的節奏通常...', optionA: '較快，有時會打斷別人', optionB: '較慢，會等別人說完再回應', scoreA: 'E', scoreB: 'I' },
    { id: 11, dimension: 'EI', dimLabel: '能量來源', text: '在人多的場合，你會覺得...', optionA: '興奮且充滿活力', optionB: '有些疲憊，想找個安靜的角落', scoreA: 'E', scoreB: 'I' },
    { id: 12, dimension: 'EI', dimLabel: '能量來源', text: '你更喜歡的工作環境是...', optionA: '開放式辦公室，隨時可以交流', optionB: '獨立的空間，減少干擾', scoreA: 'E', scoreB: 'I' },
    { id: 13, dimension: 'EI', dimLabel: '能量來源', text: '別人對你的第一印象通常是...', optionA: '外向、健談、容易親近', optionB: '安靜、神秘、需要時間了解', scoreA: 'E', scoreB: 'I' },
    { id: 14, dimension: 'EI', dimLabel: '能量來源', text: '你處理情緒的方式是...', optionA: '和朋友傾訴，透過交談排解', optionB: '獨自消化，寫日記或冥想', scoreA: 'E', scoreB: 'I' },
    { id: 15, dimension: 'EI', dimLabel: '能量來源', text: '空閒時間，你更願意...', optionA: '外出探索新地方、參加活動', optionB: '待在熟悉的環境中專注於個人興趣', scoreA: 'E', scoreB: 'I' },

    // ===== S/N 維度 (15題) =====
    { id: 16, dimension: 'SN', dimLabel: '認知方式', text: '閱讀時，你更關注...', optionA: '具體的事實、細節和數據', optionB: '概念、主題和隱含的意義', scoreA: 'S', scoreB: 'N' },
    { id: 17, dimension: 'SN', dimLabel: '認知方式', text: '描述一個經歷時，你傾向於...', optionA: '按時間順序詳細講述發生的事', optionB: '分享你的感受和這件事的意義', scoreA: 'S', scoreB: 'N' },
    { id: 18, dimension: 'SN', dimLabel: '認知方式', text: '面對一個新任務，你會先...', optionA: '了解具體的步驟和要求', optionB: '理解整體目標和大局', scoreA: 'S', scoreB: 'N' },
    { id: 19, dimension: 'SN', dimLabel: '認知方式', text: '做決定時，你更依賴...', optionA: '過去的經驗和已證實的方法', optionB: '直覺和對未來可能性的預感', scoreA: 'S', scoreB: 'N' },
    { id: 20, dimension: 'SN', dimLabel: '認知方式', text: '你更喜歡的對話主題是...', optionA: '具體的事件、人物、日常生活', optionB: '抽象的概念、理論、未來趨勢', scoreA: 'S', scoreB: 'N' },
    { id: 21, dimension: 'SN', dimLabel: '認知方式', text: '學習新技能時，你偏好...', optionA: '按照說明書一步一步操作', optionB: '先理解原理，再自己摸索', scoreA: 'S', scoreB: 'N' },
    { id: 22, dimension: 'SN', dimLabel: '認知方式', text: '你更欣賞的是...', optionA: '實用性和可落實的成果', optionB: '創意和獨特的想法', scoreA: 'S', scoreB: 'N' },
    { id: 23, dimension: 'SN', dimLabel: '認知方式', text: '別人描述你時會說你是...', optionA: '實際、腳踏實地、注重細節', optionB: '有想像力、創新、著眼未來', scoreA: 'S', scoreB: 'N' },
    { id: 24, dimension: 'SN', dimLabel: '認知方式', text: '在工作中，你更擅長...', optionA: '處理具體的任務和解決實際問題', optionB: '構思新想法和制定長期策略', scoreA: 'S', scoreB: 'N' },
    { id: 25, dimension: 'SN', dimLabel: '認知方式', text: '你對「傳統」的態度是...', optionA: '尊重並遵循已被證明有效的做法', optionB: '質疑並尋找更好的替代方案', scoreA: 'S', scoreB: 'N' },
    { id: 26, dimension: 'SN', dimLabel: '認知方式', text: '計劃旅行時，你會...', optionA: '詳細規劃每天的行程和景點', optionB: '只訂個大方向，其他隨興發揮', scoreA: 'S', scoreB: 'N' },
    { id: 27, dimension: 'SN', dimLabel: '認知方式', text: '你更容易注意到...', optionA: '環境中的具體細節和變化', optionB: '潛在的模式和可能的聯繫', scoreA: 'S', scoreB: 'N' },
    { id: 28, dimension: 'SN', dimLabel: '認知方式', text: '你對未來的想像是...', optionA: '基於現有趨勢的合理延伸', optionB: '充滿各種可能性的開放空間', scoreA: 'S', scoreB: 'N' },
    { id: 29, dimension: 'SN', dimLabel: '認知方式', text: '寫文章或報告時，你傾向於...', optionA: '使用具體的例子和數據支持論點', optionB: '探討概念之間的關係和含義', scoreA: 'S', scoreB: 'N' },
    { id: 30, dimension: 'SN', dimLabel: '認知方式', text: '你認為更重要的是...', optionA: '經驗和實踐', optionB: '理論和想像', scoreA: 'S', scoreB: 'N' },

    // ===== T/F 維度 (15題) =====
    { id: 31, dimension: 'TF', dimLabel: '決策方式', text: '做重要決定時，你更看重...', optionA: '邏輯分析和客觀事實', optionB: '個人價值觀和對他人的影響', scoreA: 'T', scoreB: 'F' },
    { id: 32, dimension: 'TF', dimLabel: '決策方式', text: '在爭論中，你更傾向於...', optionA: '堅持自己認為正確的觀點', optionB: '尋求妥協以維持和諧', scoreA: 'T', scoreB: 'F' },
    { id: 33, dimension: 'TF', dimLabel: '決策方式', text: '朋友向你傾訴煩惱時，你通常...', optionA: '分析問題並提供解決方案', optionB: '傾聽並表達同理和支持', scoreA: 'T', scoreB: 'F' },
    { id: 34, dimension: 'TF', dimLabel: '決策方式', text: '你認為更重要的美德是...', optionA: '公正和真實', optionB: '善良和體貼', scoreA: 'T', scoreB: 'F' },
    { id: 35, dimension: 'TF', dimLabel: '決策方式', text: '評價工作成果時，你更注重...', optionA: '任務完成的質量和效率', optionB: '團隊合作和成員的感受', scoreA: 'T', scoreB: 'F' },
    { id: 36, dimension: 'TF', dimLabel: '決策方式', text: '聽到批評時，你的第一反應是...', optionA: '客觀評估批評是否有道理', optionB: '感到受傷或擔心關係受損', scoreA: 'T', scoreB: 'F' },
    { id: 37, dimension: 'TF', dimLabel: '決策方式', text: '在團隊中，你更擅長扮演...', optionA: '提出問題和挑戰想法的角色', optionB: '協調關係和鼓勵團隊的角色', scoreA: 'T', scoreB: 'F' },
    { id: 38, dimension: 'TF', dimLabel: '決策方式', text: '你更欣賞的領導風格是...', optionA: '果斷、高效、以結果為導向', optionB: '溫暖、支持、關心員工發展', scoreA: 'T', scoreB: 'F' },
    { id: 39, dimension: 'TF', dimLabel: '決策方式', text: '說服別人時，你更常用...', optionA: '邏輯論證和客觀證據', optionB: '情感訴求和個人故事', scoreA: 'T', scoreB: 'F' },
    { id: 40, dimension: 'TF', dimLabel: '決策方式', text: '當規則與人情衝突時，你傾向於...', optionA: '堅持規則的公平性', optionB: '考慮具體情況，網開一面', scoreA: 'T', scoreB: 'F' },
    { id: 41, dimension: 'TF', dimLabel: '決策方式', text: '別人形容你更多是...', optionA: '理性、客觀、邏輯清晰', optionB: '感性、溫暖、善解人意', scoreA: 'T', scoreB: 'F' },
    { id: 42, dimension: 'TF', dimLabel: '決策方式', text: '看電影或讀書時，你更注重...', optionA: '情節的邏輯和合理性', optionB: '角色的情感和關係發展', scoreA: 'T', scoreB: 'F' },
    { id: 43, dimension: 'TF', dimLabel: '決策方式', text: '面對不公平的對待，你會...', optionA: '直接指出問題，據理力爭', optionB: '考慮對方感受，尋求溫和解決', scoreA: 'T', scoreB: 'F' },
    { id: 44, dimension: 'TF', dimLabel: '決策方式', text: '你更相信...', optionA: '理智思考比情感更可靠', optionB: '情感直覺有時比理性更準確', scoreA: 'T', scoreB: 'F' },
    { id: 45, dimension: 'TF', dimLabel: '決策方式', text: '在商業談判中，你會更注重...', optionA: '達成對己方最有利的條件', optionB: '建立長期的合作關係', scoreA: 'T', scoreB: 'F' },

    // ===== J/P 維度 (15題) =====
    { id: 46, dimension: 'JP', dimLabel: '生活方式', text: '你的日常生活通常...', optionA: '有規律的時間表和計劃', optionB: '靈活應變，隨情況調整', scoreA: 'J', scoreB: 'P' },
    { id: 47, dimension: 'JP', dimLabel: '生活方式', text: '面對截止日期，你通常...', optionA: '提前完成，留出緩衝時間', optionB: '在最後期限前才衝刺完成', scoreA: 'J', scoreB: 'P' },
    { id: 48, dimension: 'JP', dimLabel: '生活方式', text: '你的辦公桌或房間通常...', optionA: '整齊有序，東西各有定位', optionB: '看似亂但自己知道東西在哪', scoreA: 'J', scoreB: 'P' },
    { id: 49, dimension: 'JP', dimLabel: '生活方式', text: '計劃突然改變時，你會...', optionA: '感到困擾，希望按原計劃進行', optionB: '輕鬆接受，甚至覺得更有趣', scoreA: 'J', scoreB: 'P' },
    { id: 50, dimension: 'JP', dimLabel: '生活方式', text: '做決定時，你傾向於...', optionA: '快速得出結論，不喜歡懸而未決', optionB: '保持開放選項，收集更多資訊', scoreA: 'J', scoreB: 'P' },
    { id: 51, dimension: 'JP', dimLabel: '生活方式', text: '你更喜歡的工作方式是...', optionA: '有清晰的目標、時間表和里程碑', optionB: '靈活的節奏，根據靈感和狀態調整', scoreA: 'J', scoreB: 'P' },
    { id: 52, dimension: 'JP', dimLabel: '生活方式', text: '購物時，你通常...', optionA: '列好清單，按計劃購買', optionB: '隨意逛，看到喜歡的就買', scoreA: 'J', scoreB: 'P' },
    { id: 53, dimension: 'JP', dimLabel: '生活方式', text: '對於規則和制度，你認為...', optionA: '應該遵守，它們確保秩序和公平', optionB: '可以靈活解讀，視情況而定', scoreA: 'J', scoreB: 'P' },
    { id: 54, dimension: 'JP', dimLabel: '生活方式', text: '開始新專案時，你會...', optionA: '先制定詳細計劃再開始行動', optionB: '邊做邊調整，在過程中摸索', scoreA: 'J', scoreB: 'P' },
    { id: 55, dimension: 'JP', dimLabel: '生活方式', text: '你認為「正確的做事方式」...', optionA: '通常只有一種最佳方法', optionB: '有很多種，取決於情況', scoreA: 'J', scoreB: 'P' },
    { id: 56, dimension: 'JP', dimLabel: '生活方式', text: '休閒時光，你更喜歡...', optionA: '事先安排好活動和時間', optionB: '隨心所欲，看當下想做什麼', scoreA: 'J', scoreB: 'P' },
    { id: 57, dimension: 'JP', dimLabel: '生活方式', text: '別人對你的評價更多是...', optionA: '可靠、有組織、守時', optionB: '隨和、靈活、有創意', scoreA: 'J', scoreB: 'P' },
    { id: 58, dimension: 'JP', dimLabel: '生活方式', text: '完成一個任務後，你會...', optionA: '感到滿足，喜歡劃掉待辦事項的感覺', optionB: '立刻被另一個有趣的事物吸引', scoreA: 'J', scoreB: 'P' },
    { id: 59, dimension: 'JP', dimLabel: '生活方式', text: '在團隊中，你更可能是...', optionA: '推動計劃按時完成的人', optionB: '提出新想法和可能性的人', scoreA: 'J', scoreB: 'P' },
    { id: 60, dimension: 'JP', dimLabel: '生活方式', text: '你對「驚喜」的態度是...', optionA: '不太喜歡，更希望有準備', optionB: '很喜歡，讓生活更有趣', scoreA: 'J', scoreB: 'P' }
];

// 測驗狀態管理
class MBTITest {
    constructor() {
        this.currentQuestion = 0;
        this.answers = {};
        this.scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        this.isActive = false;
    }

    start() {
        this.currentQuestion = 0;
        this.answers = {};
        this.scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        this.isActive = true;
        this.render();
    }

    answer(choice) {
        const question = TEST_QUESTIONS[this.currentQuestion];
        const score = choice === 'A' ? question.scoreA : question.scoreB;

        // 記錄答案
        this.answers[question.id] = choice;
        this.scores[score]++;

        // 添加選中動畫
        const options = document.querySelectorAll('.option-btn');
        options.forEach(btn => {
            if (btn.dataset.value === choice) {
                btn.classList.add('selected');
            }
        });

        // 延遲後進入下一題
        setTimeout(() => {
            if (this.currentQuestion < TEST_QUESTIONS.length - 1) {
                this.currentQuestion++;
                this.render();
            } else {
                this.finish();
            }
        }, 300);
    }

    previous() {
        if (this.currentQuestion > 0) {
            // 取消上一題的答案
            const prevQuestion = TEST_QUESTIONS[this.currentQuestion - 1];
            const prevAnswer = this.answers[prevQuestion.id];
            if (prevAnswer) {
                const score = prevAnswer === 'A' ? prevQuestion.scoreA : prevQuestion.scoreB;
                this.scores[score]--;
                delete this.answers[prevQuestion.id];
            }

            this.currentQuestion--;
            this.render();
        }
    }

    skip() {
        if (this.currentQuestion < TEST_QUESTIONS.length - 1) {
            this.currentQuestion++;
            this.render();
        }
    }

    render() {
        const question = TEST_QUESTIONS[this.currentQuestion];

        // 更新進度
        document.getElementById('progressCurrent').textContent = this.currentQuestion + 1;
        const progressPercent = ((this.currentQuestion + 1) / TEST_QUESTIONS.length) * 100;
        document.getElementById('progressFill').style.width = progressPercent + '%';
        document.getElementById('progressDimension').textContent = question.dimLabel;

        // 更新題目
        document.getElementById('questionNumber').textContent = `Q${this.currentQuestion + 1}`;
        document.getElementById('questionText').textContent = question.text;

        // 更新選項
        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = `
            <button class="option-btn" data-value="A">
                <span class="option-letter">A</span>
                <span class="option-text">${question.optionA}</span>
            </button>
            <button class="option-btn" data-value="B">
                <span class="option-letter">B</span>
                <span class="option-text">${question.optionB}</span>
            </button>
        `;

        // 綁定事件
        optionsContainer.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', () => this.answer(btn.dataset.value));
        });

        // 更新導航按鈕
        document.getElementById('prevQuestion').disabled = this.currentQuestion === 0;

        // 添加進入動畫
        const card = document.getElementById('questionCard');
        card.style.animation = 'none';
        card.offsetHeight; // 觸發重繪
        card.style.animation = 'fade-in-up 0.3s ease';
    }

    calculateResult() {
        const type =
            (this.scores.E >= this.scores.I ? 'E' : 'I') +
            (this.scores.S >= this.scores.N ? 'S' : 'N') +
            (this.scores.T >= this.scores.F ? 'T' : 'F') +
            (this.scores.J >= this.scores.P ? 'J' : 'P');

        const percentages = {
            EI: this.calculatePercentage('E', 'I'),
            SN: this.calculatePercentage('S', 'N'),
            TF: this.calculatePercentage('T', 'F'),
            JP: this.calculatePercentage('J', 'P')
        };

        return { type, percentages };
    }

    calculatePercentage(a, b) {
        const total = this.scores[a] + this.scores[b];
        if (total === 0) return { dominant: a, percent: 50 };

        const percentA = Math.round((this.scores[a] / total) * 100);
        const percentB = 100 - percentA;

        return {
            dominant: percentA >= percentB ? a : b,
            percentA,
            percentB
        };
    }

    finish() {
        this.isActive = false;
        const result = this.calculateResult();

        // 儲存結果到 LocalStorage
        const savedResults = JSON.parse(localStorage.getItem('mbti_results') || '[]');
        savedResults.push({
            type: result.type,
            percentages: result.percentages,
            date: new Date().toISOString()
        });
        localStorage.setItem('mbti_results', JSON.stringify(savedResults));
        localStorage.setItem('mbti_current_type', result.type);

        // 顯示結果
        this.showResult(result);
    }

    showResult(result) {
        const typeData = window.MBTI_TYPES[result.type];

        // 隱藏測驗畫面，顯示結果
        document.getElementById('testActive').classList.add('hidden');
        document.getElementById('testResult').classList.remove('hidden');

        // 更新結果類型
        document.querySelector('#resultType .type-code').textContent = result.type;
        document.querySelector('#resultType .type-name').textContent = typeData.name;

        // 更新維度圖表
        const dimensionsHtml = this.renderDimensionBars(result.percentages);
        document.getElementById('resultDimensions').innerHTML = dimensionsHtml;

        // 綁定按鈕事件
        document.getElementById('viewDetailBtn').onclick = () => {
            window.mbtiApp.showTypeDetail(result.type);
        };

        document.getElementById('retakeTestBtn').onclick = () => {
            document.getElementById('testResult').classList.add('hidden');
            document.getElementById('testIntro').classList.remove('hidden');
        };
    }

    renderDimensionBars(percentages) {
        const dimensions = [
            { key: 'EI', left: 'E 外向', right: 'I 內向' },
            { key: 'SN', left: 'S 感覺', right: 'N 直覺' },
            { key: 'TF', left: 'T 思考', right: 'F 情感' },
            { key: 'JP', left: 'J 判斷', right: 'P 感知' }
        ];

        return dimensions.map(dim => {
            const data = percentages[dim.key];
            const isLeftDominant = data.dominant === dim.key[0];
            const percent = isLeftDominant ? data.percentA : data.percentB;
            const fillWidth = Math.abs(percent - 50);
            const fillStart = isLeftDominant ? (50 - fillWidth) : 50;

            return `
                <div class="result-dimension">
                    <div class="dim-labels">
                        <span>${dim.left}</span>
                        <span>${dim.right}</span>
                    </div>
                    <div class="dim-bar">
                        <div class="dim-fill" style="left: ${fillStart}%; width: ${fillWidth}%;"></div>
                        <div class="dim-center"></div>
                    </div>
                    <div class="dim-percent">${percent}% ${data.dominant}</div>
                </div>
            `;
        }).join('');
    }
}

// 初始化測驗
window.mbtiTest = new MBTITest();

// 綁定開始按鈕
document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startTestBtn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            document.getElementById('testIntro').classList.add('hidden');
            document.getElementById('testActive').classList.remove('hidden');
            window.mbtiTest.start();
        });
    }

    const prevBtn = document.getElementById('prevQuestion');
    if (prevBtn) {
        prevBtn.addEventListener('click', () => window.mbtiTest.previous());
    }

    const skipBtn = document.getElementById('skipQuestion');
    if (skipBtn) {
        skipBtn.addEventListener('click', () => window.mbtiTest.skip());
    }
});
