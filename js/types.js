/**
 * MBTI 宇宙 - 16 種人格類型完整資料庫
 */

const MBTI_TYPES = {
    // ===== 分析家 (Analysts) =====
    INTJ: {
        code: 'INTJ',
        name: '策略家',
        nickname: 'The Architect',
        icon: '🏛️',
        group: 'analyst',
        rarity: 2.1,
        color: '#a855f7',
        keywords: ['策略', '獨立', '理性', '遠見'],
        shortDesc: '富有想像力和戰略性思維的計劃者，對一切都有備選方案。',
        strengths: ['戰略思維', '獨立自主', '意志堅定', '富有見識', '好奇心強'],
        weaknesses: ['傲慢', '過度分析', '不善表達情感', '完美主義', '批判性強'],
        careers: ['科學家', '軟體工程師', '投資分析師', '建築師', '法官', '企業策略師'],
        celebrities: ['尼古拉·特斯拉', '艾薩克·牛頓', '伊隆·馬斯克', '乾隆'],
        cognitiveStack: ['Ni', 'Te', 'Fi', 'Se'],
        compatibility: {
            best: ['ENFP', 'ENTP'],
            good: ['INTJ', 'ENTJ', 'INFJ'],
            challenging: ['ESFP', 'ISFP']
        },
        detailedDesc: `INTJ 是天生的戰略家，擁有敏銳的分析能力和強烈的獨立精神。他們傾向於透過邏輯和理性來理解世界，並常常能夠預見未來的趨勢和可能性。

作為內向直覺型，INTJ 將大部分精力用於內在的思考和規劃。他們喜歡探索抽象概念，並將這些概念轉化為可執行的計劃。這使他們成為出色的問題解決者和創新者。

在人際關係中，INTJ 可能顯得較為冷淡和疏離，但這並不代表他們缺乏情感。相反，他們只是更傾向於將情感內化，並透過行動而非言語來表達關心。

INTJ 的成長之路在於學會欣賞當下的美好，而不是總是著眼於未來的改進。同時，他們也需要培養同理心，理解並非所有人都像他們一樣重視邏輯和效率。`
    },

    INTP: {
        code: 'INTP',
        name: '邏輯學家',
        nickname: 'The Logician',
        icon: '🔬',
        group: 'analyst',
        rarity: 3.3,
        color: '#a855f7',
        keywords: ['邏輯', '創新', '好奇', '分析'],
        shortDesc: '喜愛創新的發明家，對知識有著無盡的渴望。',
        strengths: ['分析能力', '創造力', '開放思維', '客觀', '誠實'],
        weaknesses: ['不切實際', '拖延', '社交困難', '不敏感', '容易分心'],
        careers: ['程式設計師', '數學家', '哲學家', '作家', '遊戲設計師', '研究員'],
        celebrities: ['愛因斯坦', '比爾·蓋茲', '達爾文', '笛卡爾'],
        cognitiveStack: ['Ti', 'Ne', 'Si', 'Fe'],
        compatibility: {
            best: ['ENTJ', 'ENFJ'],
            good: ['INTP', 'ENTP', 'INTJ'],
            challenging: ['ESFJ', 'ISFJ']
        },
        detailedDesc: `INTP 是永不滿足的探索者，他們的內心世界是一個由邏輯和理論構建的迷宮。他們熱愛知識，並且會不斷地質疑和分析所接收到的資訊。

作為思考型人格，INTP 擅長發現系統中的漏洞和矛盾。他們喜歡從根本原理出發，建構自己的理解框架，而不是盲目接受既有的規則和傳統。

在社交場合中，INTP 可能顯得害羞或笨拙，但當話題轉向他們感興趣的領域時，他們可以變得極為健談和熱情。他們珍視深度勝過廣度，更喜歡與少數人建立真摯的連結。

INTP 的挑戰在於將他們卓越的想法付諸實踐。他們需要學會在「完美」和「足夠好」之間找到平衡，並培養情感智商以更好地與他人連結。`
    },

    ENTJ: {
        code: 'ENTJ',
        name: '指揮官',
        nickname: 'The Commander',
        icon: '👔',
        group: 'analyst',
        rarity: 1.8,
        color: '#a855f7',
        keywords: ['領導', '效率', '決斷', '雄心'],
        shortDesc: '大膽而富有想像力的強勢領導者，總是能找到方法或創造方法。',
        strengths: ['高效率', '自信', '意志堅強', '戰略思維', '魅力領導'],
        weaknesses: ['固執', '不耐煩', '傲慢', '冷酷', '情緒表達困難'],
        careers: ['企業家', 'CEO', '律師', '政治家', '管理顧問', '投資銀行家'],
        celebrities: ['史蒂夫·乔布斯', '拿破崙', '柴契爾夫人', '曹操'],
        cognitiveStack: ['Te', 'Ni', 'Se', 'Fi'],
        compatibility: {
            best: ['INTP', 'INFP'],
            good: ['ENTJ', 'INTJ', 'ENTP'],
            challenging: ['ISFP', 'INFP']
        },
        detailedDesc: `ENTJ 是天生的領導者，他們擁有將願景轉化為現實的非凡能力。他們思維敏捷、決策果斷，並且總是在尋找改進和優化的機會。

作為外向思考型，ENTJ 喜歡組織人員和資源來達成目標。他們對效率有著近乎偏執的追求，無法容忍浪費時間或資源的行為。這使他們成為出色的專案管理者和企業家。

在人際關係中，ENTJ 可能顯得強勢和控制欲強。然而，這通常源於他們對達成目標的熱情，而非對他人的不尊重。當 ENTJ 學會傾聽和欣賞他人的觀點時，他們可以成為極具影響力的導師和盟友。

ENTJ 的成長之路在於培養耐心和同理心。他們需要認識到，並非所有人都像他們一樣快節奏和目標導向，而多樣性的觀點往往能帶來更好的結果。`
    },

    ENTP: {
        code: 'ENTP',
        name: '辯論家',
        nickname: 'The Debater',
        icon: '💡',
        group: 'analyst',
        rarity: 3.2,
        color: '#a855f7',
        keywords: ['機智', '創新', '好奇', '辯論'],
        shortDesc: '聰明且好奇的思想家，無法抗拒智識的挑戰。',
        strengths: ['知識淵博', '思維敏捷', '原創性', '魅力', '精力充沛'],
        weaknesses: ['好辯', '不敏感', '不切實際', '難以專注', '厭惡規則'],
        careers: ['創業家', '律師', '脫口秀演員', '廣告創意', '發明家', '記者'],
        celebrities: ['湯瑪斯·愛迪生', '馬克·乍克伯格', '蘇格拉底', '小羅伯特·乍尼'],
        cognitiveStack: ['Ne', 'Ti', 'Fe', 'Si'],
        compatibility: {
            best: ['INFJ', 'INTJ'],
            good: ['ENTP', 'ENFP', 'INTP'],
            challenging: ['ISFJ', 'ISTJ']
        },
        detailedDesc: `ENTP 是永不停歇的創意機器，他們的腦海中總是充滿了新奇的想法和可能性。他們熱愛辯論和討論，將其視為磨礪思維的方式。

作為外向直覺型，ENTP 善於在看似無關的事物之間建立聯繫。他們喜歡挑戰既有的觀念，並樂於扮演「魔鬼代言人」的角色，不是因為他們想惹惱別人，而是因為他們真心相信透過辯論可以發現真理。

在人際關係中，ENTP 充滿魅力和趣味。他們喜歡與聰明的人交往，並且總能找到新的話題來討論。然而，他們可能會在無意中傷害他人的感情，因為他們有時候過於直接和坦率。

ENTP 的挑戰在於將他們的創意付諸實踐。他們需要學會專注和堅持，而不是總是跳到下一個閃亮的新想法上。`
    },

    // ===== 外交家 (Diplomats) =====
    INFJ: {
        code: 'INFJ',
        name: '提倡者',
        nickname: 'The Advocate',
        icon: '🌟',
        group: 'diplomat',
        rarity: 1.5,
        color: '#10b981',
        keywords: ['洞察', '理想', '同理', '神秘'],
        shortDesc: '安靜而神秘，但非常鼓舞人心且孜孜不倦的理想主義者。',
        strengths: ['富有洞察力', '有原則', '熱情', '利他主義', '創造力'],
        weaknesses: ['過度敏感', '極度私密', '完美主義', '容易倦怠', '厭惡日常事務'],
        careers: ['心理諮詢師', '作家', '藝術家', '醫生', '社工', '人力資源'],
        celebrities: ['馬丁·路德·金', '德蕾莎修女', '甘地', '尼爾森·曼德拉'],
        cognitiveStack: ['Ni', 'Fe', 'Ti', 'Se'],
        compatibility: {
            best: ['ENTP', 'ENFP'],
            good: ['INFJ', 'INTJ', 'INFP'],
            challenging: ['ESTP', 'ISTP']
        },
        detailedDesc: `INFJ 是最稀有的人格類型之一，他們結合了深刻的洞察力和強烈的利他主義。他們擁有看穿表象、理解人性的獨特能力，並致力於幫助他人成長。

作為內向直覺型，INFJ 花費大量時間在內心世界中探索意義和可能性。他們對生命的目的有著深刻的思考，並努力讓自己的行為與價值觀保持一致。

在人際關係中，INFJ 是深情且投入的伴侶和朋友。他們能夠敏銳地感知他人的情緒和需求，並願意付出極大的努力來支持所愛的人。然而，他們也需要大量的獨處時間來恢復能量。

INFJ 的挑戰在於學會照顧自己的需求，而不是總是優先考慮他人。他們還需要接受世界的不完美，並明白並非所有問題都能夠或需要被解決。`
    },

    INFP: {
        code: 'INFP',
        name: '調解者',
        nickname: 'The Mediator',
        icon: '🦋',
        group: 'diplomat',
        rarity: 4.4,
        color: '#10b981',
        keywords: ['理想', '敏感', '創意', '同情'],
        shortDesc: '詩意、善良的利他主義者，總是渴望為正義事業提供幫助。',
        strengths: ['理想主義', '善解人意', '開放心態', '創造力', '忠誠'],
        weaknesses: ['過於理想化', '自我封閉', '不切實際', '情緒化', '自我批評'],
        careers: ['作家', '心理治療師', '藝術家', '社會工作者', '老師', '音樂家'],
        celebrities: ['莎士比亞', '乔治·奧威爾', '約翰·乔姆斯基', '奧黛莉·乔本'],
        cognitiveStack: ['Fi', 'Ne', 'Si', 'Te'],
        compatibility: {
            best: ['ENFJ', 'ENTJ'],
            good: ['INFP', 'INFJ', 'ENFP'],
            challenging: ['ESTJ', 'ENTJ']
        },
        detailedDesc: `INFP 是真正的夢想家，他們擁有豐富的內心世界和對美好事物的深刻欣賞。他們用價值觀和理想來指引人生，並總是在尋找生命中更深層的意義。

作為內向情感型，INFP 對自己的價值觀和信念非常忠誠。他們可能表面上看起來順從，但在觸及核心原則時，他們會變得異常堅定。他們透過創造性表達來處理情感，許多優秀的藝術家和作家都是INFP。

在人際關係中，INFP 是深情且忠誠的。他們珍視真實的連結，並願意花時間理解他人的內心世界。然而，他們也可能因為過高的期望而感到失望。

INFP 的成長之路在於學會平衡理想與現實。他們需要接受世界不總是符合他們的理想，同時也要有勇氣將自己的創意和想法付諸實踐。`
    },

    ENFJ: {
        code: 'ENFJ',
        name: '主人公',
        nickname: 'The Protagonist',
        icon: '🎭',
        group: 'diplomat',
        rarity: 2.5,
        color: '#10b981',
        keywords: ['魅力', '啟發', '領導', '同理'],
        shortDesc: '富有魅力且鼓舞人心的領導者，能夠折服他的聽眾。',
        strengths: ['善於溝通', '可靠', '利他', '魅力', '具有領導力'],
        weaknesses: ['過度理想化', '過於敏感', '難說不', '自我懷疑', '控制欲'],
        careers: ['教師', '人力資源經理', '政治家', '銷售經理', '職業教練', '演員'],
        celebrities: ['歐巴馬', '乔登·乔治·甘迺迪', '德斯蒙德·屠圖', '奧普拉'],
        cognitiveStack: ['Fe', 'Ni', 'Se', 'Ti'],
        compatibility: {
            best: ['INFP', 'INTP'],
            good: ['ENFJ', 'ENTJ', 'INFJ'],
            challenging: ['ISTP', 'ESTP']
        },
        detailedDesc: `ENFJ 是天生的領袖和激勵者，他們擁有團結人心、激發潛能的非凡能力。他們真誠地關心他人的成長和福祉，並願意付出巨大的努力來幫助他人發揮潛力。

作為外向情感型，ENFJ 非常擅長理解和回應他人的情緒需求。他們能夠創造溫暖、支持的環境，讓人們感到被理解和被重視。這使他們成為出色的教師、教練和導師。

在人際關係中，ENFJ 是深情且投入的。他們願意為所愛的人付出一切，並從他人的成功中獲得深深的滿足感。然而，他們也需要學會照顧自己的需求。

ENFJ 的挑戰在於設定健康的邊界，並學會接受並非所有人都需要或想要被「拯救」。他們還需要對自己更寬容，接受自己也有缺點和限制。`
    },

    ENFP: {
        code: 'ENFP',
        name: '競選者',
        nickname: 'The Campaigner',
        icon: '🌈',
        group: 'diplomat',
        rarity: 8.1,
        color: '#10b981',
        keywords: ['熱情', '創意', '社交', '自由'],
        shortDesc: '熱情、有創造力和社交能力的自由精靈，總能找到微笑的理由。',
        strengths: ['好奇心', '觀察力', '精力充沛', '溝通能力', '樂觀'],
        weaknesses: ['難以專注', '過度思考', '容易焦慮', '不切實際', '情緒化'],
        careers: ['記者', '演員', '企業家', '銷售', '諮詢師', '活動策劃'],
        celebrities: ['乔賓·威廉姆斯', '威爾·史密斯', '艾倫·狄珍妮絲', '華特·迪士尼'],
        cognitiveStack: ['Ne', 'Fi', 'Te', 'Si'],
        compatibility: {
            best: ['INTJ', 'INFJ'],
            good: ['ENFP', 'ENTP', 'INFP'],
            challenging: ['ISTJ', 'ESTJ']
        },
        detailedDesc: `ENFP 是熱情洋溢的創意者，他們的生活充滿了可能性和冒險。他們對人生有著強烈的好奇心，並總是在探索新的想法、關係和經歷。

作為外向直覺型，ENFP 能夠在看似平凡的事物中發現非凡之處。他們喜歡建立連結——無論是人與人之間的連結，還是想法與想法之間的連結。他們的熱情具有感染力，能夠激勵周圍的人。

在人際關係中，ENFP 是溫暖且深情的。他們珍視真實和深度的連結，並願意投入時間和精力來培養關係。然而，他們也需要自由和空間來探索自己的興趣。

ENFP 的挑戰在於將他們的熱情和創意轉化為具體的成果。他們需要學會專注和堅持，而不是總是被下一個閃亮的新想法所吸引。`
    },

    // ===== 守護者 (Sentinels) =====
    ISTJ: {
        code: 'ISTJ',
        name: '物流師',
        nickname: 'The Logistician',
        icon: '📋',
        group: 'sentinel',
        rarity: 11.6,
        color: '#3b82f6',
        keywords: ['責任', '可靠', '實際', '傳統'],
        shortDesc: '實際且注重事實的個人，其可靠性不容置疑。',
        strengths: ['誠實', '意志堅定', '盡職盡責', '冷靜', '務實'],
        weaknesses: ['固執', '不敏感', '評判性強', '抗拒改變', '自責'],
        careers: ['會計師', '軍官', '工程師', '法官', '銀行經理', '審計師'],
        celebrities: ['喬治·華盛頓', '華倫·巴菲特', '安格拉·默克爾', '伊莉莎白二世'],
        cognitiveStack: ['Si', 'Te', 'Fi', 'Ne'],
        compatibility: {
            best: ['ESFP', 'ESTP'],
            good: ['ISTJ', 'ISFJ', 'ESTJ'],
            challenging: ['ENFP', 'INFP']
        },
        detailedDesc: `ISTJ 是社會的支柱，他們以可靠性和責任感著稱。他們重視傳統和秩序，並努力維護他們所在的系統和機構的完整性。

作為內向感覺型，ISTJ 注重細節和事實。他們有著出色的記憶力，能夠準確地回憶過去的經驗和資訊。他們喜歡有條理的環境，並會竭盡全力確保任務按時完成。

在人際關係中，ISTJ 可能不善於表達情感，但他們透過行動來展示愛和關心。他們是忠誠的伴侶和朋友，會在需要時提供實際的支持和幫助。

ISTJ 的挑戰在於學會接受變化和不確定性。他們還需要發展情感表達能力，讓他人理解他們內心的關懷。`
    },

    ISFJ: {
        code: 'ISFJ',
        name: '守衛者',
        nickname: 'The Defender',
        icon: '🛡️',
        group: 'sentinel',
        rarity: 13.8,
        color: '#3b82f6',
        keywords: ['保護', '奉獻', '溫暖', '可靠'],
        shortDesc: '非常敬業和溫暖的保護者，隨時準備保衛所愛的人。',
        strengths: ['支持性', '可靠', '耐心', '觀察力', '富有同情心'],
        weaknesses: ['過度謙虛', '壓抑感情', '過度承諾', '抗拒改變', '太無私'],
        careers: ['護士', '老師', '行政助理', '社工', '圖書管理員', '室內設計師'],
        celebrities: ['乔治五世', '碧乔絲', '金·卡戴珊', '泰勒絲'],
        cognitiveStack: ['Si', 'Fe', 'Ti', 'Ne'],
        compatibility: {
            best: ['ESTP', 'ESFP'],
            good: ['ISFJ', 'ISTJ', 'ESFJ'],
            challenging: ['ENTP', 'INTP']
        },
        detailedDesc: `ISFJ 是最無私的人格類型之一，他們將照顧他人視為人生的使命。他們默默地付出，很少尋求認可，卻總是記得每個人的需求和偏好。

作為內向情感型，ISFJ 擁有強烈的責任感和對傳統的尊重。他們珍視和諧的關係，並會竭盡全力維護家庭和社區的穩定。他們的記憶力驚人，尤其是關於他人的細節。

在人際關係中，ISFJ 是忠誠且深情的。他們透過實際的行動來表達愛，比如記住重要的日期、準備喜愛的食物，或者在需要時提供肩膀依靠。

ISFJ 的挑戰在於學會說不，並照顧自己的需求。他們需要認識到，過度的自我犧牲最終會耗盡他們的能量，使他們無法有效地幫助他人。`
    },

    ESTJ: {
        code: 'ESTJ',
        name: '總經理',
        nickname: 'The Executive',
        icon: '📊',
        group: 'sentinel',
        rarity: 8.7,
        color: '#3b82f6',
        keywords: ['組織', '領導', '實際', '秩序'],
        shortDesc: '出色的管理者，在管理事務或人員方面無與倫比。',
        strengths: ['敬業', '意志堅強', '直接', '誠實', '忠誠'],
        weaknesses: ['頑固', '不靈活', '不善表達情感', '評判性強', '太專注工作'],
        careers: ['CEO', '法官', '軍官', '財務經理', '銀行家', '醫院管理者'],
        celebrities: ['乔治·W·布什', '希拉蕊·柯林頓', '李光耀', '乔治·道格拉斯·麥克阿瑟'],
        cognitiveStack: ['Te', 'Si', 'Ne', 'Fi'],
        compatibility: {
            best: ['ISFP', 'ISTP'],
            good: ['ESTJ', 'ISTJ', 'ENTJ'],
            challenging: ['INFP', 'ENFP']
        },
        detailedDesc: `ESTJ 是天生的組織者和執行者，他們擁有將混亂轉化為秩序的非凡能力。他們重視傳統、規則和階層，並努力確保一切按計劃進行。

作為外向思考型，ESTJ 直接且果斷。他們不喜歡拐彎抹角，傾向於直接表達自己的想法和期望。他們對效率有著極高的要求，並期望他人也能達到同樣的標準。

在人際關係中，ESTJ 可能顯得嚴格或控制欲強，但這通常源於他們對秩序和責任的重視。當他們學會欣賞不同的做事方式時，可以成為更有彈性的領導者和伴侶。

ESTJ 的挑戰在於培養情感敏感度和開放心態。他們需要認識到，並非所有情況都適用同一套規則，有時候靈活性比效率更重要。`
    },

    ESFJ: {
        code: 'ESFJ',
        name: '執政官',
        nickname: 'The Consul',
        icon: '🤝',
        group: 'sentinel',
        rarity: 12.3,
        color: '#3b82f6',
        keywords: ['關懷', '社交', '傳統', '和諧'],
        shortDesc: '非常關心的社交者，總是渴望幫助他人。',
        strengths: ['忠誠', '敏感', '溫暖', '善於連結', '盡職'],
        weaknesses: ['太無私', '不靈活', '脆弱', '需要認可', '太需要控制'],
        careers: ['護士', '教師', '社工', '銷售代表', '人力資源', '活動策劃'],
        celebrities: ['泰勒·斯威夫特', '乔·拜登', '休·乔克曼', '珍妮佛·乔倫斯'],
        cognitiveStack: ['Fe', 'Si', 'Ne', 'Ti'],
        compatibility: {
            best: ['ISTP', 'ISFP'],
            good: ['ESFJ', 'ISFJ', 'ENFJ'],
            challenging: ['INTP', 'ENTP']
        },
        detailedDesc: `ESFJ 是社交的核心，他們天生就知道如何創造溫暖、歡迎的環境。他們極度關心他人的福祉，並會不遺餘力地確保每個人都感到舒適和被重視。

作為外向情感型，ESFJ 非常注重社會和諧和人際關係。他們擅長記住他人的偏好和需求，並會在節日和特殊場合精心準備。他們的熱情好客是發自內心的。

在人際關係中，ESFJ 是忠誠且奉獻的。他們重視傳統和家庭價值，並努力維護穩定和諧的關係。他們喜歡被需要和被認可，這讓他們感到有價值。

ESFJ 的挑戰在於學會接受批評，並認識到並非所有人都會回報他們的善意。他們還需要發展獨立思考的能力，不要過於依賴他人的認可。`
    },

    // ===== 探險家 (Explorers) =====
    ISTP: {
        code: 'ISTP',
        name: '鑒賞家',
        nickname: 'The Virtuoso',
        icon: '🔧',
        group: 'explorer',
        rarity: 5.4,
        color: '#f59e0b',
        keywords: ['實用', '觀察', '獨立', '冷靜'],
        shortDesc: '大膽而實際的實驗家，精通各種工具。',
        strengths: ['樂觀', '精力充沛', '創造力', '務實', '放鬆'],
        weaknesses: ['固執', '不敏感', '冒險', '不善承諾', '不耐煩'],
        careers: ['工程師', '機械師', '飛行員', '軍人', '運動員', '法醫'],
        celebrities: ['克林特·伊斯特伍德', '湯姆·克魯斯', '麥可·乔丹', '熊彼特'],
        cognitiveStack: ['Ti', 'Se', 'Ni', 'Fe'],
        compatibility: {
            best: ['ESFJ', 'ESTJ'],
            good: ['ISTP', 'ESTP', 'ISFP'],
            challenging: ['ENFJ', 'INFJ']
        },
        detailedDesc: `ISTP 是天生的問題解決者，他們喜歡用雙手探索世界並解決實際挑戰。他們冷靜、理性，並且在危機時刻能夠保持清醒的頭腦。

作為內向思考型，ISTP 喜歡理解事物的運作原理。他們會拆解、分析，然後重新組裝，不斷學習和改進。他們珍視自由和獨立，不喜歡被規則或期望所束縛。

在人際關係中，ISTP 可能顯得冷淡或疏離，但這只是因為他們更喜歡透過行動而非言語來表達自己。他們是忠誠的朋友，願意在需要時提供實際的幫助。

ISTP 的挑戰在於發展情感智商和溝通技巧。他們需要學會表達自己的感受，並理解他人可能需要言語上的保證和支持。`
    },

    ISFP: {
        code: 'ISFP',
        name: '探險家',
        nickname: 'The Adventurer',
        icon: '🎨',
        group: 'explorer',
        rarity: 8.8,
        color: '#f59e0b',
        keywords: ['藝術', '敏感', '自由', '和諧'],
        shortDesc: '靈活而有魅力的藝術家，總是準備好探索和體驗新事物。',
        strengths: ['魅力', '敏感', '想像力', '熱情', '好奇心'],
        weaknesses: ['難以長期規劃', '不可預測', '容易壓力', '過度競爭', '自尊心波動'],
        careers: ['藝術家', '音樂家', '時尚設計師', '攝影師', '獸醫', '廚師'],
        celebrities: ['乔卡索', '瑪麗蓮·夢露', '麥可·傑克遜', '乔蕾哈娜'],
        cognitiveStack: ['Fi', 'Se', 'Ni', 'Te'],
        compatibility: {
            best: ['ESTJ', 'ENTJ'],
            good: ['ISFP', 'ESFP', 'ISTP'],
            challenging: ['ENTJ', 'INTJ']
        },
        detailedDesc: `ISFP 是真正的藝術靈魂，他們透過感官體驗來理解和欣賞世界。他們擁有獨特的審美眼光，並能夠在日常生活中發現和創造美。

作為內向情感型，ISFP 由強烈的個人價值觀所驅動。他們重視真實和自由，不願意為了迎合他人的期望而犧牲自己的本真。他們的創造力是發自內心的表達。

在人際關係中，ISFP 是溫暖且深情的。他們可能不善言辭，但會透過行動和創意表達來展示愛。他們珍視和諧，會避免不必要的衝突。

ISFP 的挑戰在於發展長期規劃能力和自信心。他們需要相信自己的能力和價值，不要因為外界的評價而動搖。`
    },

    ESTP: {
        code: 'ESTP',
        name: '企業家',
        nickname: 'The Entrepreneur',
        icon: '🏄',
        group: 'explorer',
        rarity: 4.3,
        color: '#f59e0b',
        keywords: ['行動', '冒險', '機智', '務實'],
        shortDesc: '聰明、精力充沛且非常有洞察力的人，真正享受冒險生活。',
        strengths: ['大膽', '理性', '直接', '善於社交', '觀察力強'],
        weaknesses: ['不敏感', '不耐煩', '冒險', '不守規則', '容易分心'],
        careers: ['企業家', '銷售', '運動員', '演員', '緊急救護員', '警察'],
        celebrities: ['唐納德·川普', '麥當娜', '傑克·尼克遜', '阿乔德·史瓦辛格'],
        cognitiveStack: ['Se', 'Ti', 'Fe', 'Ni'],
        compatibility: {
            best: ['ISFJ', 'ISTJ'],
            good: ['ESTP', 'ISTP', 'ESFP'],
            challenging: ['INFJ', 'ENFJ']
        },
        detailedDesc: `ESTP 是行動派，他們相信與其坐著空想，不如立刻動手嘗試。他們充滿活力，善於把握當下的機會，並能夠在快節奏的環境中茁壯成長。

作為外向感覺型，ESTP 完全沉浸在當下的體驗中。他們喜歡刺激和冒險，無論是極限運動、商業風險還是社交場合。他們的反應敏捷，能夠快速適應變化的情況。

在人際關係中，ESTP 是有趣且充滿魅力的。他們喜歡與人互動，並能夠輕鬆地與各種類型的人建立聯繫。然而，他們可能會覺得太過穩定或可預測的關係令人窒息。

ESTP 的挑戰在於發展耐心和規劃能力。他們需要學會考慮長期後果，而不只是追求即時的滿足。`
    },

    ESFP: {
        code: 'ESFP',
        name: '表演者',
        nickname: 'The Entertainer',
        icon: '🎤',
        group: 'explorer',
        rarity: 8.5,
        color: '#f59e0b',
        keywords: ['活力', '自發', '樂觀', '表演'],
        shortDesc: '自發、精力充沛且熱情的表演者——生活在他們周圍永遠不會無聊。',
        strengths: ['大膽', '原創', '美學', '動手能力', '觀察力'],
        weaknesses: ['敏感', '容易無聊', '不善規劃', '不專注', '衝動'],
        careers: ['演員', '銷售', '活動策劃', '空服員', '導遊', '餐廳經理'],
        celebrities: ['乔琳·乔乔', '乔安東尼奧·班德拉斯', '史提夫乔德', '乔乔妮·蕾'],
        cognitiveStack: ['Se', 'Fi', 'Te', 'Ni'],
        compatibility: {
            best: ['ISTJ', 'ISFJ'],
            good: ['ESFP', 'ESTP', 'ISFP'],
            challenging: ['INTJ', 'INFJ']
        },
        detailedDesc: `ESFP 是天生的表演者，他們的熱情和活力能夠點亮任何房間。他們活在當下，珍惜每一個時刻，並努力讓周圍的人都感到快樂。

作為外向感覺型，ESFP 對美和風格有著敏銳的眼光。他們喜歡表達自己，無論是透過時尚、音樂還是社交互動。他們的自發性和冒險精神使生活充滿驚喜。

在人際關係中，ESFP 是溫暖且慷慨的。他們喜歡讓他人開心，並會竭盡全力為所愛的人創造美好的體驗。他們的社交能力使他們擁有廣泛的朋友圈。

ESFP 的挑戰在於發展長期思考能力和自律。他們需要學會在享受當下的同時，也為未來做好準備。`
    }
};

// 認知功能定義
const COGNITIVE_FUNCTIONS = {
    Ni: { name: '內傾直覺', desc: '洞察模式與未來可能性' },
    Ne: { name: '外傾直覺', desc: '探索可能性與連結' },
    Si: { name: '內傾感覺', desc: '回顧過去經驗與細節' },
    Se: { name: '外傾感覺', desc: '活在當下與感官體驗' },
    Ti: { name: '內傾思考', desc: '邏輯分析與內部一致性' },
    Te: { name: '外傾思考', desc: '組織效率與外部系統' },
    Fi: { name: '內傾情感', desc: '個人價值觀與真實性' },
    Fe: { name: '外傾情感', desc: '人際和諧與群體情感' }
};

// 人口分布統計 (百分比)
const POPULATION_STATS = {
    ISFJ: 13.8,
    ESFJ: 12.3,
    ISTJ: 11.6,
    ISFP: 8.8,
    ESTJ: 8.7,
    ESFP: 8.5,
    ENFP: 8.1,
    ISTP: 5.4,
    INFP: 4.4,
    ESTP: 4.3,
    INTP: 3.3,
    ENTP: 3.2,
    ENFJ: 2.5,
    INTJ: 2.1,
    ENTJ: 1.8,
    INFJ: 1.5
};

// 導出給其他模組使用
window.MBTI_TYPES = MBTI_TYPES;
window.COGNITIVE_FUNCTIONS = COGNITIVE_FUNCTIONS;
window.POPULATION_STATS = POPULATION_STATS;
