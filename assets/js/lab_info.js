/**
 * CRCIV Global Laboratory Information
 * Centralized data source for consistent display across all pages.
 * Supports Multi-language (KR/EN)
 */
const labInfo = {
    currentLang: (localStorage.getItem('lang') === 'en') ? 'en' : 'ko',
    
    ko: {
        name: "Convergence Research Center for Insect Vector",
        abbreviation: "CRCIV",
        koreanName: "매개체감염병연구소",
        university: "인천대학교",
        director: "권형욱 교수",
        address: "인천광역시 연수구 하모니로 265 인천대학교 41호관 Biocomplex 501호",
        phone: "032-835-4428",
        email: "hwkwon@inu.ac.kr",
        nav: [
            { name: "홈", url: "index.html" },
            { name: "연구분야", url: "research.html" },
            { name: "프로젝트", url: "projects.html" },
            { name: "논문", url: "publications.html" },
            { name: "블로그", url: "blog.html" },
            { name: "팀원", url: "team.html" },
            { name: "문의", url: "contact.html" }
        ]
    },
    en: {
        name: "Convergence Research Center for Insect Vector",
        abbreviation: "CRCIV",
        koreanName: "CRCIV",
        university: "Incheon National University",
        director: "Prof. Hyung Wook Kwon",
        address: "Room 501, Biocomplex (Bldg 41), Incheon National University, 265 Harmony-ro, Yeonsu-gu, Incheon, South Korea",
        phone: "+82-32-835-4428",
        email: "hwkwon@inu.ac.kr",
        nav: [
            { name: "Home", url: "index.html" },
            { name: "Research", url: "research.html" },
            { name: "Projects", url: "projects.html" },
            { name: "Publications", url: "publications.html" },
            { name: "Blog", url: "blog.html" },
            { name: "Team", url: "team.html" },
            { name: "Contact", url: "contact.html" }
        ]
    },
    
    social: {
        github: "https://github.com/jhl02532/CRCIV",
        email: "mailto:hwkwon@inu.ac.kr"
    },
    
    // Helper to get current data
    get: function() {
        return this[this.currentLang];
    }
};

// Global language switcher function
function switchLanguage() {
    const newLang = labInfo.currentLang === 'ko' ? 'en' : 'ko';
    localStorage.setItem('lang', newLang);
    location.reload();
}

if (typeof module !== 'undefined') {
    module.exports = labInfo;
}
