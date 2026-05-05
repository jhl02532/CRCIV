const blogData = [
    {
        "id": 7,
        "slug": "review_paper07_Peptides2014",
        "title": "아미노산 하나의 차이가 독의 세기를 바꾼다: 꿀벌 멜리틴 이소폼 기능 비교",
        "date": "2026-05-05",
        "category": "Biochemistry",
        "tags": ["Melittin", "Peptide", "Apis_cerana", "Bee_Venom"],
        "summary": "서양꿀벌과 동양꿀벌의 멜리틴 이소폼 구조 차이가 세포막 파괴 활성과 항균 능력에 미치는 영향을 정밀 분석한 Peptides(2014) 논문 리뷰입니다.",
        "image": "assets/img/peptides_2014_melittin_structure_1777994992877.png",
        "readTime": "9 min read",
        "link": "post.html?id=review_paper07_Peptides2014"
    },
    {
        "id": 6,
        "slug": "review_paper06_AntennaOlfactory",
        "title": "같은 꿀벌, 다른 코: Apis mellifera와 Apis cerana 더듬이 후각계 비교",
        "date": "2026-05-05",
        "category": "Neuroscience",
        "tags": ["Honeybee", "Antenna", "Olfaction", "Comparative_Study"],
        "summary": "서양꿀벌과 동양꿀벌의 더듬이 후각 시스템을 구조·기능·분자 수준에서 입체적으로 비교하여 두 종의 생태적 차이의 근원을 밝힌 연구 리뷰입니다.",
        "image": "assets/img/antenna_comparison_neuroscience_1777994974019.png",
        "readTime": "11 min read",
        "link": "post.html?id=review_paper06_AntennaOlfactory"
    },
    {
        "id": 5,
        "slug": "review_paper05_BMCGenomics2015",
        "title": "아시아 꿀벌의 설계도를 처음으로 읽다: Apis cerana 전장 유전체 해독",
        "date": "2026-05-05",
        "category": "Genomics",
        "tags": ["Apis_cerana", "Genome", "Sequencing", "Social_Insects"],
        "summary": "동양꿀벌(Apis cerana)의 전장 유전체를 세계 최초로 해독하여 서양꿀벌과의 유전적 차이와 고유한 생태적 특성을 규명한 BMC Genomics(2015) 논문 리뷰입니다.",
        "image": "assets/img/bmc_genomics_2015_bee_genome_1777994959812.png",
        "readTime": "15 min read",
        "link": "post.html?id=review_paper05_BMCGenomics2015"
    },
    {
        "id": 4,
        "slug": "review_paper04_ScientificReports2023",
        "title": "모기 몸속 세균이 말라리아 위험도를 알고 있다: 국내 Anopheles sinensis 마이크로바이옴 연구",
        "date": "2026-05-05",
        "category": "Microbiome",
        "tags": ["Anopheles_sinensis", "Malaria", "Microbiome", "Vector_Competence"],
        "summary": "한국의 주요 말라리아 매개 모기인 얼룩날개모기의 장내 마이크로바이옴이 지역별 말라리아 발생률과 어떤 상관관계가 있는지 분석한 최신 연구 리뷰입니다.",
        "image": "assets/img/sci_rep_2023_microbiome_korea_1777994934735.png",
        "readTime": "10 min read",
        "link": "post.html?id=review_paper04_ScientificReports2023"
    },
    {
        "id": 3,
        "slug": "review_paper03_ScientificReports2020",
        "title": "딥러닝으로 모기를 구별하다: 종·성별·흡혈 여부를 한 번에 분류하는 CNN",
        "date": "2026-05-05",
        "category": "AI / Deep Learning",
        "tags": ["Deep_Learning", "CNN", "Mosquito_Identification", "AI"],
        "summary": "합성곱 신경망(CNN)을 활용하여 모기의 이미지로부터 종, 성별, 흡혈 상태를 전문가 수준의 정확도로 자동 분류하는 시스템을 제안한 연구 리뷰입니다.",
        "image": "assets/img/sci_rep_2020_cnn_mosquito_1777994918742.png",
        "readTime": "12 min read",
        "link": "post.html?id=review_paper03_ScientificReports2020"
    },
    {
        "id": 2,
        "slug": "review_paper02_CurrentBiology2007",
        "title": "말라리아 모기의 후각 지도: 상악수염 세 뉴런이 숙주를 찾는 방법",
        "date": "2026-05-05",
        "category": "Paper Review",
        "tags": ["Anopheles", "Maxillary Palp", "CO2 Detection", "Current Biology"],
        "summary": "말라리아 모기의 상악수염에 존재하는 세 개의 뉴런이 각각 어떻게 냄새를 맡고 뇌로 신호를 보내는지, 그 분자적·생리학적 지도를 완성한 Current Biology 논문(2007) 리뷰입니다.",
        "image": "assets/img/curr_bio_2007_mosquito_palp_1777994904290.png",
        "readTime": "12 min read",
        "link": "post.html?id=review_paper02_CurrentBiology2007"
    },
    {
        "id": 1,
        "slug": "review_paper01_PNAS2006",
        "title": "모기 구기(口器)는 냄새도 맡는다: 말라리아 모기 후각 연구의 시작",
        "date": "2026-05-05",
        "category": "Paper Review",
        "tags": ["Anopheles", "Olfaction", "Malaria", "Proboscis"],
        "summary": "모기 구기가 단순한 미각기관이 아닌 후각 기능을 겸비하고 있음을 세계 최초로 규명하여 학계의 통념을 뒤집은 PNAS 논문(2006) 리뷰입니다.",
        "image": "assets/img/pnas_2006_mosquito_proboscis_1777994884167.png",
        "readTime": "10 min read",
        "link": "post.html?id=review_paper01_PNAS2006"
    }
];