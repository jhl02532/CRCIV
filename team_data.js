const teamData = {
    pi: {
        name: "권형욱 (Hyung Wook Kwon)",
        title: "Principal Investigator / Professor",
        role: "Director of CRCIV & SNBL",
        affiliations: [
            "국립 인천대학교 생명과학부 정교수",
            "인천대학교 매개체감염병연구소 (CRCIV) 소장",
            "감각인지뇌과학연구실 (SNBL) 지도교수",
            "수도 1권역 기후변화 매개체 감시거점센터 센터장 (질병관리청)",
            "(사)한국방역학회 초대 학회장 / 한국양봉학회 학회장",
            "주식회사 인센소리 (Insensory Inc.) 대표이사 (CEO)"
        ],
        education: [
            "Ph.D. Entomology/Neuroscience, University of Arizona (2004)",
            "M.S. Applied Biology and Entomology, Seoul National University",
            "B.S. Applied Biology and Entomology, Seoul National University"
        ],
        experience: [
            "Postdoctoral Fellow, Vanderbilt University (L. J. Zwiebel Lab, 2005-2009)",
            "Assistant Professor, Seoul National University (Former)",
            "Founder & President, Korea Society of Quarantine (2022-Present)"
        ],
        interests: [
            "Neuroethology & Molecular Neurobiology",
            "Vector-Borne Diseases & Epidemiology",
            "Drosophila Disease Modeling",
            "Mosquito Sensory Anatomy & Smart Traps",
            "Honeybee Genomics & Chemical Biosensors"
        ],
        awards: [
            "보건복지부 장관상 (2023.12.07) - 감염병 감시 사업 최우수 유공"
        ],
        stats: {
            publications: "167+",
            citations: "3,917+",
            highlights: [
                "PNAS (2006): Malaria mosquito olfactory signaling",
                "BMC Genomics (2015): First Apis cerana genome",
                "Scientific Reports: AI-based mosquito classification"
            ]
        },
        image: "assets/img/pi_profile.png",
        links: {
            email: "mailto:kwon@inu.ac.kr",
            scholar: "https://scholar.google.com/citations?user=Ymi_7YgAAAAJ",
            researchgate: "https://www.researchgate.net/profile/Hyung-Wook-Kwon"
        }
    },
    postdocs: [
        { 
            name: "김현지 (Hyunjee Kim)", 
            title: "Postdoctoral Researcher", 
            bio: "박사, 꿀벌 영양 생리 및 인공 사료 개발 전문가. 기후 변화에 따른 꿀벌 군집의 생리적 변화와 영양 요구도 분석 연구를 수행하고 있습니다.", 
            papers: [
                "Insects (2024): Effect of artificial diets on honey bee health",
                "PLoS ONE: Climate change impact on overwintered honey bees",
                "Journal of Apicultural Research: Pollen substitute evaluation"
            ]
        },
        { 
            name: "Olga Frunze", 
            title: "Research Professor", 
            bio: "박사, 곤충 생리 조절 및 영양학 연구. 기후 변화에 따른 꿀벌의 월동 생리와 발육 단계별 대사 경로 최적화 및 사료 효율 연구를 담당합니다.", 
            papers: [
                "Scientific Reports (2024): Molecular markers for honey bee health",
                "J. Asia-Pacific Entomol: Foraging performance and climate stress",
                "Insects: Nutrition-based transition from diapause to development"
            ]
        },
        { 
            name: "Abdulkadir Yusif Maigoro", 
            title: "Postdoctoral Researcher", 
            bio: "박사, 곤충 마이크로바이옴 및 생물정보학 전문가. 모기(Aedes vexans) 및 꿀벌 장내 미생물 군집의 시공간적 변화와 질병 전파의 상관관계 연구를 수행합니다.", 
            papers: [
                "Microorganisms (2024): Spatiotemporal variation in mosquito microbiome",
                "Frontiers in Microbiology: Honey bee gut microbiome and immune homeostasis",
                "Scientific Reports: Microbiome-linked disease risk factors"
            ]
        }
    ],
    phd: [
        { 
            name: "이정현 (Jeonghyeon Lee)", 
            title: "Ph.D. Student", 
            bio: "박사과정, 유전체학 및 분자 역학 연구. 재래꿀벌(Apis cerana)의 전장 유전체 해독 및 모기 장내 미생물을 통한 감염병 매개 능력 분석을 수행합니다.", 
            papers: [
                "Scientific Reports (2025): Chromosome-level genome assembly of Apis cerana",
                "Microbiology Spectrum: Microbiome profiling of malaria vectors",
                "BMC Genomics: Genetic diversity of Korean honey bees"
            ]
        },
        { 
            name: "김동인 (Dong-In Kim)", 
            title: "Ph.D. Student", 
            bio: "박사과정, 곤충 행동 제어 및 매개체 생태 연구. 온도 변화에 따른 모기의 발육 속도 모델링 및 초음파를 이용한 기피 행동의 분자적 기전을 규명합니다.", 
            papers: [
                "J. Asia-Pacific Entomol (2021): Behavioral and molecular responses to ultrasound",
                "Insects: Temperature-dependent development of Aedes albopictus",
                "Journal of Medical Entomology: Ultrasonic mosquito repellent efficacy"
            ]
        },
        { 
            name: "박준영 (Jun-Young Park)", 
            title: "Ph.D. Student", 
            bio: "박사과정, AI 기반 곤충 스마트 모니터링 연구. 딥러닝(CNN)을 활용한 모기 종 자동 동정 시스템 및 실시간 매개체 감시 플랫폼을 개발합니다.", 
            papers: [
                "Scientific Reports (2020): DCNN-based classification of vector mosquitoes",
                "IEEE Access: Automated mosquito monitoring system in the field",
                "Applied Sciences: Image-based species identification using AI"
            ]
        }
    ],
    masters: [
        { 
            name: "허다름 (Dareum Heo)", 
            title: "Master's Student", 
            bio: "석사과정, 미세 구조 형태학 및 감각 생리 연구. 등에모기(Culicoides)의 감각모(Sensilla) 분포와 형태 분석을 통해 흡혈 대상 탐색 기전을 연구합니다.", 
            papers: [
                "Journal of Morphology: Fine structure of Culicoides sensilla",
                "Entomological Research: Morphological analysis of biting midges",
                "Microscopy & Microanalysis: SEM/TEM study of insect sensory organs"
            ]
        }
    ],
    researchers: [
        { name: "이민혁 (Min-Hyuk Lee)", title: "Researcher", bio: "연구원, 실험실 데이터 관리 및 연구 프로젝트 지원.", image: "" }
    ],
    undergrads: [
        { name: "김유진 (Yu-Jin Kim)", title: "Undergraduate Researcher", bio: "학부연구생, 곤충 분자 생물학 기초 실험 지원.", image: "" },
        { name: "정은찬 (Eun-Chan Jeong)", title: "Undergraduate Researcher", bio: "학부연구생, 스마트 트랩 데이터 수집 및 분석 지원.", image: "" }
    ]
};
