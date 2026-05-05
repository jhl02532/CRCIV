/**
 * CRCIV Research Area Data
 */
const researchData = [
    {
        id: "sensory",
        title: "Insect Sensory",
        icon: "fas fa-bug",
        image: "assets/img/research/sensory_fig.png",
        imageCaption: "Figure 1. Structural and functional analysis of olfactory sensory neurons in Apis mellifera antennae, showing antennal morphology and neural spiking activity.",
        description: "곤충의 미각 및 후각 수용체의 분자 메커니즘을 규명하고, 다양한 환경 신호(맛, 냄새, 온도 등)에 대한 감각 신경의 반응 원리와 행동적 조절을 연구합니다.",
        topics: [
            "맛(Sugar, Salt, Bitter) 및 냄새(Floral, Pheromone, Host) 수용체 특성화",
            "양봉(A. mellifera)과 토종벌(A. cerana)의 감각 시스템 비교 연구",
            "전기생리 기록을 통한 감각 신경의 반응 특성 및 코드 분석",
            "열 스트레스 및 생물학적 연령에 따른 감각 및 행동 변화",
            "혈액 섭식 곤충(모기)의 숙주 인식 및 감각 경로 규명"
        ],
        papers: [
            { title: "Olfactory responses in a gustatory organ of the malaria vector mosquito Anopheles gambiae", venue: "PNAS, 2006", doi: "10.1073/pnas.0601107103" },
            { title: "Chronic heat stress disrupts foraging motivation in honey bees", venue: "J. Insect Physiol., 2026", doi: "10.1016/j.jinsphys.2026.104945" },
            { title: "Functional characterization of sugar receptors in the western honeybee, Apis mellifera", venue: "J. Asia-Pac. Entomol., 2015", doi: "10.1016/j.aspen.2014.10.011" }
        ]
    },
    {
        id: "vector",
        title: "Disease Vector Control",
        icon: "fas fa-virus",
        image: "assets/img/research/vector_fig.png",
        imageCaption: "Figure 2. Anopheles mosquito olfactory system and host-seeking behavior pathway, detailing molecular reception and glomerular processing in the brain.",
        description: "곤충 매개 감염병의 벡터(모기, 바퀴벌레 등)의 혈액 섭식 행동, 숙주 탐색 메커니즘 규명 및 효과적인 제어 전략 개발",
        topics: [
            "모기(Anopheles, Aedes)의 혈액 섭식 행동 및 숙주 인식",
            "감염병 매개 곤충의 감각 신경계 구조 분석",
            "천연 및 합성 살충제 및 기피제에 대한 미각 반응",
            "벡터 제어를 위한 새로운 전략 개발",
            "말라리아, 뎅기열, 지카바이러스 매개 곤충 연구"
        ],
        papers: [
            { title: "A single mutation in the mosquito (Aedes aegypti) olfactory receptor 8 causes loss of function to 1-octen-3-ol", venue: "IBMB, 2024", doi: "10.1016/j.ibmb.2023.104069" },
            { title: "A novel olfactory pathway is essential for fast and efficient blood-feeding in mosquitoes", venue: "Scientific Reports, 2015", doi: "10.1038/srep13444" }
        ]
    },
    {
        id: "genomics",
        title: "Genomics",
        icon: "fas fa-dna",
        image: "assets/img/research/genomics_fig.png",
        imageCaption: "Figure 3. Comparative genome map of Apis cerana, displaying chromosome levels, gene density, and transposable element distribution.",
        description: "다양한 곤충 종(꿀벌, 모기, 바퀴벌레 등)의 게놈 서열 비교를 통해 종 특이적 진화 특성 및 적응 메커니즘 규명",
        topics: [
            "Apis cerana(토종벌) 전체 게놈 시퀀싱 및 조립",
            "감각 수용체 유전자(GRs, ORs)의 종 간 비교",
            "Long non-coding RNAs (lincRNAs)의 역할 분석",
            "바이러스 감염 시 유전자 발현 변화",
            "생물정보학 파이프라인 개발 및 AI 기반 분석"
        ],
        papers: [
            { title: "Chromosome level de novo hybrid assembly of Asian honeybee, Apis cerana Koreana", venue: "Scientific Reports, 2025", doi: "10.1038/s41598-025-12338-3" },
            { title: "Uncovering the novel characteristics of Asian honey bee by whole genome sequencing", venue: "BMC Genomics, 2015", doi: "10.1186/1471-2164-16-1" }
        ]
    },
    {
        id: "biosensors",
        title: "Biosensors & AI",
        icon: "fas fa-microchip",
        image: "assets/img/research/ai_fig.png",
        imageCaption: "Figure 4. Bioelectronic tongue sensor using insect taste receptors for real-time mosquito species classification via AI deep learning.",
        description: "곤충 감각 수용체를 활용한 바이오센서 개발 및 AI 기술 적용을 통한 식품 품질 검사, 환경 모니터링 등 실용적 응용",
        topics: [
            "곤충 맛 수용체를 활용한 바이오전자 혀 개발",
            "CNT-FET 기반 센서 플랫폼",
            "MSG 등 Umami 물질 감지",
            "Machine Learning 기반 센서 데이터 분석",
            "식량 안보 및 식품 품질 자동 검사 시스템"
        ],
        papers: [
            { title: "Bioelectronic tongues mimicking insect taste systems for real-time discrimination between sweeteners", venue: "ACS Sensors, 2022", doi: "10.1021/acssensors.2c01254" },
            { title: "Discrimination of umami tastants using floating electrode-based bioelectronic tongue mimicking insect taste systems", venue: "ACS Nano, 2015", doi: "10.1021/acsnano.5b03031" }
        ]
    }
];

if (typeof module !== 'undefined') {
    module.exports = researchData;
}
