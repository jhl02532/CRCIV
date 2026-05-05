const newsData = [
    {
        id: 1,
        source: "천지일보",
        date: "2025.12.05",
        title: "한국방역학회 국제학술대회 성료… 매개체 감염병 대응 해법 모색",
        summary: "권형욱 교수가 회장으로 있는 한국방역학회가 국제학술대회를 성공적으로 개최하며 글로벌 매개체 감염병 대응 방안을 논의했습니다.",
        link: "https://www.newscj.com/news/articleView.html?idxno=3348333"
    },
    {
        id: 2,
        source: "베리타스알파",
        date: "2025.12.04",
        title: "2025 한국방역학회 국제학술대회 개최 소식",
        summary: "한국방역학회가 주최한 2025년 국제학술대회가 성황리에 열렸습니다.",
        link: "https://www.veritas-a.com/news/articleView.html?idxno=587426"
    },
    {
        id: 3,
        source: "환경포커스",
        date: "2025.10.29",
        title: "서울시, 국립인천대학교 매개체감염병연구소와 차세대 매개체 감시체계 구축 업무협약",
        summary: "서울시와 인천대 매개체감염병연구소가 AI 기반 차세대 매개체 감시 시스템 구축을 위한 업무협약을 체결하였습니다.",
        link: "https://www.ecofocus.co.kr/news/article.html?no=71760"
    },
    {
        id: 4,
        source: "중앙일보",
        date: "2025.07.31",
        title: "인천대 권형욱 교수팀, 토종꿀벌 유전체 지도 완성",
        summary: "한국 토종꿀벌(Apis cerana koreana)의 고해상도 염색체 수준 유전체 지도를 완성하여 국제학술지 Scientific Reports에 게재, 기후변화 대응 연구의 새 장을 열었습니다.",
        link: "https://www.joongang.co.kr/article/25355829"
    },
    {
        id: 5,
        source: "한국대학신문",
        date: "2025.07.30",
        title: "인천대, 토종꿀벌 염색체 수준 유전체 지도 완성…국제 학술지 게재",
        summary: "권형욱 교수 연구팀이 나노포어 롱리드 기술을 활용해 고품질 게놈 지도를 완성하여 세계 학술계의 주목을 받았습니다.",
        link: "https://news.unn.net/news/articleView.html?idxno=581956"
    },
    {
        id: 6,
        source: "일간투데이",
        date: "2025.06.09",
        title: "2025 한국방역학회 춘계학술대회 개최",
        summary: "2025년 한국방역학회 춘계학술대회가 개최되어 방역·감염병 분야 연구자들이 최신 성과를 공유했습니다.",
        link: "https://www.dtoday.co.kr/news/articleView.html?idxno=712603"
    },
    {
        id: 7,
        source: "한국대학신문",
        date: "2025.04.21",
        title: "인천대, 가축 방역 및 감염병 전문 인력 양성과 공동 연구 기반 마련",
        summary: "인천대학교 매개체감염병연구소가 가축방역 분야 전문 기관과 협력하여 감염병 공동 연구 및 인력 양성 체계를 구축했습니다.",
        link: "https://news.unn.net/news/articleView.html?idxno=577902"
    },
    {
        id: 8,
        source: "농민신문",
        date: "2025.04.20",
        title: "가축방역위생관리협-인천대 감염병연구소 MOU 체결",
        summary: "가축방역위생관리협회와 인천대 매개체감염병연구소가 감염병 예방 및 방역 기술 공동 연구를 위한 업무협약을 맺었습니다.",
        link: "https://www.nongmin.com/article/20250420500008"
    },
    {
        id: 9,
        source: "뉴스투데이",
        date: "2024.09.11",
        title: "[심층기획] '혁신' 주도하는 융복합 집단연구체계, 4개 K등급 연구소가 이끈다",
        summary: "인천대 매개체감염병연구소가 K등급 대학중점연구소로 선정되어 융복합 연구의 새로운 모범을 제시하고 있다는 내용을 심층 보도하였습니다.",
        link: "https://www.news2day.co.kr/article/20240909500223"
    },
    {
        id: 10,
        source: "인천일보",
        date: "2024.09.23",
        title: "인천대-잠비아대, AI 융합 감염병 방제 협정 체결",
        summary: "인천대 매개체감염병연구소가 잠비아대학교와 말라리아 등 감염병 방제를 위한 AI 융합 기술 개발 협약을 맺으며 글로벌 협력을 강화했습니다.",
        link: "https://www.incheonilbo.com/news/articleView.html?idxno=1264421"
    },
    {
        id: 11,
        source: "대학저널",
        date: "2024.06.14",
        title: "인천대 매개체감염병연구소, 특별 심포지엄 개최",
        summary: "매개체 감염병의 최신 연구 동향과 방제 전략을 공유하는 특별 심포지엄이 성황리에 열렸습니다.",
        link: "https://m.dhnews.co.kr/news/view/1065598781161294"
    },
    {
        id: 12,
        source: "대학저널",
        date: "2024.02.02",
        title: "인천대 매개체감염병연구소-필리핀 대학, 매개체 감염병 연구 업무협약",
        summary: "인천대 매개체감염병연구소가 필리핀 주요 대학과 매개체 감염병 공동 연구 협약을 체결하며 동남아시아 방역 협력 네트워크를 구축했습니다.",
        link: "https://m.dhnews.co.kr/news/view/1065582371120281"
    },
    {
        id: 13,
        source: "메디포뉴스",
        date: "2024.03.12",
        title: "질병청, '제2차 말라리아 재퇴치 실행계획 공청회' 개최",
        summary: "권형욱 교수가 참여한 가운데 질병관리청이 말라리아 재퇴치를 위한 국가 실행계획 공청회를 개최했습니다.",
        link: "https://www.medifonews.com/news/article.html?no=188727"
    },
    {
        id: 14,
        source: "서울일보",
        date: "2023.12.13",
        title: "2023 한국방역학회 정기총회 및 동계학술대회 개최",
        summary: "권형욱 회장이 이끄는 한국방역학회가 연말 정기총회와 동계학술대회를 개최하여 방역 산업의 현안과 미래 전략을 논의했습니다.",
        link: "http://www.seoulilbo.com/news/articleView.html?idxno=650463"
    },
    {
        id: 15,
        source: "대한경제",
        date: "2023.06.14",
        title: "인천대학교 생명과학부, 권형욱 교수팀 Scientific Reports 논문 게재",
        summary: "권형욱 교수 연구팀의 최신 연구 결과가 국제 저명 학술지 Scientific Reports에 게재되어 학문적 성과를 거뒀습니다.",
        link: "https://www.dnews.co.kr/uhtml/view.jsp?idxno=202306140937074040528"
    },
    {
        id: 16,
        source: "경인신문",
        date: "2023.06.02",
        title: "2023 한국방역학회 춘계학술대회 개최",
        summary: "한국방역학회가 주관하는 2023 춘계학술대회가 개최되어 방역·방제 최신 기술 및 연구 성과를 공유하는 자리가 마련되었습니다.",
        link: "https://www.asn24.com/news/articleView.html?idxno=280733"
    },
    {
        id: 17,
        source: "전국매일신문",
        date: "2023.05.11",
        title: "인천대 매개체감염병연구소, '말라리아 매개모기 감시·방제 기술' 워크숍 개최",
        summary: "인천대 매개체감염병연구소가 말라리아 매개 모기의 감시 및 방제 기술 공유를 위한 전문 워크숍을 성황리에 개최하였습니다.",
        link: "https://www.jeonmae.co.kr/news/articleView.html?idxno=956521"
    },
    {
        id: 18,
        source: "한국대학신문",
        date: "2023.04.06",
        title: "권형욱 교수, EBS 뉴스브릿지 출연 '꿀벌 78억 마리가 사라진 이유는?'",
        summary: "권형욱 교수가 EBS 뉴스브릿지에 출연하여 최근 전 세계적으로 문제가 된 꿀벌 집단폐사 원인을 과학적으로 분석하고 해결 방향을 제시하였습니다.",
        link: "https://news.unn.net/news/articleView.html?idxno=544628"
    },
    {
        id: 19,
        source: "서울일보",
        date: "2023.06.28",
        title: "인천대 매개곤충자원융복합연구센터 농촌진흥청 꿀벌 연구 과제 수주",
        summary: "인천대 연구센터가 농촌진흥청의 꿀벌 관련 연구 과제를 수주하며 국가 꿀벌 생태 보전 연구의 중추적 역할을 맡았습니다.",
        link: "http://www.seoulilbo.com/news/articleView.html?idxno=618674"
    },
    {
        id: 20,
        source: "서울경제",
        date: "2022.07.01",
        title: "인천대 권형욱 교수, 한국방역학회 초대 회장 선출",
        summary: "권형욱 교수가 2022년 공식 출범한 (사)한국방역학회의 초대 학회장으로 선출되어 국가 방역 체계 선진화에 앞장서게 되었습니다.",
        link: "https://www.sedaily.com/NewsView/263BWFRRKJ"
    },
    {
        id: 21,
        source: "한국대학신문",
        date: "2022.07.01",
        title: "권형욱 인천대 교수, 한국방역학회 초대 학회장 선출",
        summary: "방역·방제 산학연관 전문가들로 구성된 한국방역학회가 공식 출범하고 권형욱 교수가 초대 회장으로 선출되었습니다.",
        link: "https://news.unn.net/news/articleView.html?idxno=530448"
    },
    {
        id: 22,
        source: "매일일보",
        date: "2022.06.20",
        title: "인천대 권형욱 교수, MBC 다큐 '꿀벌의 죽음, 풍요의 종말'편 출연",
        summary: "권형욱 교수가 MBC 다큐멘터리에 출연하여 전 세계 꿀벌 감소 문제의 원인과 생태계에 미치는 영향을 심층 분석하였습니다.",
        link: "https://www.m-i.kr/news/articleView.html?idxno=381362"
    },
    {
        id: 23,
        source: "YTN",
        date: "2022.05.20",
        title: "'78억 마리 사라졌다' 꿀벌집단실종 사건의 전말",
        summary: "권형욱 교수가 YTN과의 인터뷰에서 전 세계적 문제인 꿀벌 집단 실종 사건의 원인과 대응 방향을 전문가적 시각으로 분석하였습니다.",
        link: "https://www.ytn.co.kr/_ln/0103_202205201141196861"
    },
    {
        id: 24,
        source: "의학신문",
        date: "2022.04.14",
        title: "한국방역학회 출범…'미래 방역 생태계' 구축 나선다",
        summary: "권형욱 교수 주도로 한국방역학회가 공식 출범하여 방역 산업 선진화와 전문 인재 양성을 위한 체계적인 활동을 시작했습니다.",
        link: "http://www.bosa.co.kr/news/articleView.html?idxno=2171545"
    },
    {
        id: 25,
        source: "인천투데이",
        date: "2021.11.08",
        title: "인천대 매개곤충자원융복합연구센터, 병역특례기관 지정",
        summary: "인천대 매개곤충자원융복합연구센터가 병역특례연구기관으로 지정되어 우수한 이공계 인재를 확보하고 연구 역량을 강화할 수 있는 기반을 마련하였습니다.",
        link: "https://www.incheontoday.com/news/articleView.html?idxno=212766"
    },
    {
        id: 26,
        source: "뉴스프리존",
        date: "2020.09.25",
        title: "인천대 매개곤충자원융복합연구센터, 2020 대학중점연구소 현판식 개최",
        summary: "교육부 대학중점연구소로 선정된 인천대 매개곤충자원융복합연구센터가 공식 현판식을 개최하며 본격적인 연구 활동을 알렸습니다.",
        link: "https://www.newsfreezone.co.kr/news/articleView.html?idxno=262866"
    },
    {
        id: 27,
        source: "경인일보",
        date: "2020.06.11",
        title: "[인터뷰] '대학 중점硏' 선정… 인천대 권형욱 매개곤충자원연구센터장",
        summary: "권형욱 교수가 경인일보와의 인터뷰에서 대학중점연구소 선정 의의와 향후 연구 방향, 그리고 매개체 연구의 사회적 가치에 대해 이야기했습니다.",
        link: "https://www.kyeongin.com/view.php?key=20200611010002842"
    },
    {
        id: 28,
        source: "한국대학신문",
        date: "2019.02.18",
        title: "인천대, 말레이시아에 매개체감시연구 국제협력센터 개소",
        summary: "인천대 매개곤충연구센터가 말레이시아에 국제협력센터를 개소하며 동남아시아 감염병 매개체 공동 연구 네트워크를 확장했습니다.",
        link: "https://news.unn.net/news/articleView.html?idxno=207369"
    },
    {
        id: 29,
        source: "미디어인천신문",
        date: "2018.11.30",
        title: "인천대 권형욱 교수, 우리나라 토종벌 '고유 혈통' 밝혀",
        summary: "권형욱 교수 연구팀이 한국 토종벌이 계통학적으로 독특한 고유 혈통임을 과학적으로 규명하여 Apis cerana koreana 신아종을 제안했습니다.",
        link: "http://www.mediaic.co.kr/news/articleView.html?idxno=34084"
    },
    {
        id: 30,
        source: "인천투데이",
        date: "2017.02.15",
        title: "인천대, 보건환경연구원과 질병 매개곤충 연구 협력",
        summary: "인천대 매개곤충연구센터가 인천시 보건환경연구원과 업무협약을 체결하고 지역 내 질병 매개곤충 공동 연구를 본격화했습니다.",
        link: "https://www.incheontoday.com/news/articleView.html?idxno=36019"
    }
];