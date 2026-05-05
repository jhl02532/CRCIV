# 꿀벌의 코를 칩에 담다: 탄소 원자 하나 차이를 구별하는 바이오전자 코

2006년, 권형욱 교수는 말라리아 모기의 주둥이에 후각 수용체가 있다는 것을 발견했다. 곤충의 후각이 어떻게 작동하는지를 이해하는 것—그것이 연구의 출발점이었다. 20년이 지난 2026년, 그 연구는 전혀 다른 형태로 귀결되었다. 꿀벌 후각 수용체를 탄소나노튜브 트랜지스터에 이식해, **탄소 원자 하나 차이를 구별하는 바이오전자 코**를 만들어낸 것이다. 그리고 이 센서는 꿀벌 유충의 냄새를 맡아 초크브루드병을 직접 진단한다.

> **Choi, J., et al. & Kwon, H. W. (2026).** Direct Diagnosis of Chalkbrood Disease by Smelling Infected Honey Bee Larvae via Bioelectronic Noses with a Single-Carbon-Atomic Resolution. *ACS Applied Materials & Interfaces*. https://doi.org/10.1021/acsami.6c00XXX

---

## 연구 배경

**초크브루드병(Chalkbrood disease)**은 진균 *Ascosphaera apis*가 꿀벌 유충을 감염시키는 치명적 질병이다. 감염된 유충은 하얗게 굳어 석회 덩어리처럼 변하며 벌통 입구에 쌓인다. 전염성이 강해 조기 발견이 핵심이지만, 기존 진단법은 모두 한계가 있었다.

육안 검사는 이미 증상이 진행된 뒤에야 가능하다. PCR이나 GC-MS 같은 분자 진단은 정확하지만 **시간이 걸리고 현장에서 즉시 쓸 수 없다.** 양봉가에게 필요한 건 벌통 옆에서 바로 쓸 수 있는, 빠르고 간단한 도구다.

한편, 꿀벌에는 **위생 행동(hygienic behavior)**이 있다. 감염된 유충을 냄새로 감지해 벌방에서 꺼내는 행동이다. 이 행동을 유발하는 핵심 화합물로 **페네틸 아세테이트(phenethyl acetate)**가 지목되어 왔다. 꿀벌 스스로가 이 화합물에 반응해 감염 유충을 제거한다면, 같은 화합물을 탐지하는 센서로 병을 진단할 수 있지 않을까?

**연구 질문**: 꿀벌 후각 수용체를 탑재한 바이오전자 코로 초크브루드 감염 유충에서 방출되는 페네틸 아세테이트를 직접 탐지할 수 있는가? 그리고 탄소 원자 하나 차이를 구별할 만큼 선택적일 수 있는가?

---

## 센서 설계: 꿀벌의 코를 칩에 올리다

### 1. 핵심 수용체 발굴 — AmOr13a

연구진은 먼저 페네틸 아세테이트에 가장 강하게 반응하는 꿀벌 후각 수용체를 탐색했다. 그 결과 ***Apis mellifera* 후각 수용체 13a(AmOr13a)**가 이 화합물에 대한 탁월한 선택성을 보임을 처음으로 확인했다. AmOr13a를 HEK-293T 세포에서 과발현시켜 수용체가 내장된 **나노소포(nanovesicle)**를 생산했다.

### 2. 바이오전자 코 구조 — CNT-FET + 나노소포

센서의 핵심 구조는 **탄소나노튜브 전계효과 트랜지스터(CNT-FET)**다. SiO₂ 웨이퍼 위에 소스·드레인·부유 전극(Pd/Au, 10/15 nm)을 제작하고, 부유 전극의 금 표면에 티올-기능화된 나노소포를 고정했다.

작동 원리는 다음과 같다:
1. 페네틸 아세테이트가 AmOr13a에 결합
2. 나노소포 내부로 **Ca²⁺ 유입** 발생
3. 양이온 축적으로 금 부유 전극의 **일함수(work function) 변화**
4. CNT 네트워크와 부유 전극 사이의 **쇼트키 장벽 높이 변조**
5. CNT-FET 채널 전도도 증가 → **실시간 전기 신호로 측정**

생물학적 수용체의 결합 사건이 전기 신호로 직접 변환되는 구조다.

---

## 주요 발견

### 1. 1 fM 수준의 초고감도 탐지

수용액 환경에서 페네틸 아세테이트의 검출 한계는 **1 fM(펨토몰)**이었다. 기체 환경에서는 **31.6 ppb**. 이는 기존 화학 센서나 이전 바이오전자 코 연구들과 비교해 최고 수준의 감도다.

### 2. 탄소 원자 하나 차이를 구별한다

이 연구의 가장 놀라운 성과는 **단일 탄소 원자 해상도(single-carbon-atomic resolution)**다. 페네틸 아세테이트(C₁₀H₁₂O₂)와 페네틸 프로피오네이트(C₁₁H₁₄O₂)—이 두 분자는 탄소 원자 하나, 수소 원자 두 개만 다르다. 구조가 거의 동일한 이 두 화합물에 대해 바이오전자 코는 **100 nM 이상 농도에서 페네틸 아세테이트에 약 2배 더 강한 신호**를 나타냈다. 화학적으로 극도로 유사한 분자들을 AmOr13a의 선택성 하나로 구별해낸 것이다.

### 3. 감염 유충을 직접 냄새 맡아 진단

전처리 없이 초크브루드 감염 유충 시료를 센서에 노출시킨 결과:
- **건강한 꿀벌 시료**: 채널 전도도 변화 무시할 수준
- **감염 유충 시료**: 상대 전도도 **4.28% 증가**
- 감염 유충 100마리 미라(mummy)에서 방출되는 페네틸 아세테이트 농도: 약 **31.6 ppb**로 추산

전처리도, 실험실도, 전문 장비도 필요 없다. 센서를 감염 유충에 가까이 대면 신호가 나온다.

### 4. 다른 질병 마커와의 구별

바이오전자 코는 다른 꿀벌 질병 마커—**2-노나논**(미국부저병 마커)과 **벤질 알코올**—에 대해서는 유의미한 반응을 보이지 않았다. 초크브루드 특이적 탐지가 가능하다는 의미다.

### 5. 안정성 향상

센서는 냉동 보관 없이 7일 후에도 초기 신호의 **64.4%를 유지**했다. 이는 이전 나노소포 기반 센서 대비 향상된 수치로, 꿀벌 후각 수용체(AmOr13a + Orco)를 사용한 덕분으로 해석된다.

---

## 연구의 의의: 20년 여정의 귀결

이 논문은 두 가지 차원에서 이정표적 의미를 갖는다.

**기초과학의 관점에서**, 꿀벌 후각 수용체 AmOr13a가 페네틸 아세테이트에 특이적으로 반응한다는 사실이 처음으로 규명되었다. 이는 꿀벌 위생 행동의 분자적 기반에 새로운 단서를 제공한다. 감염 유충을 제거하는 행동이 어떤 수용체를 통해 시작되는지—그 회로의 첫 단추가 밝혀진 것이다.

**응용기술의 관점에서**, 이 바이오전자 코는 현장 진단 플랫폼으로서의 실용성을 갖추었다. 1 fM의 감도, 탄소 원자 하나 수준의 선택성, 전처리 없는 직접 진단, 7일 이상의 안정성—모든 조건이 갖추어졌다. 양봉가가 스마트폰 크기의 기기를 들고 벌통을 순회하며 실시간으로 질병 여부를 확인하는 미래가 기술적으로 가능해졌다.

2006년 모기 주둥이의 후각 수용체 발견에서 시작된 연구가, 2026년 꿀벌 후각 수용체를 탑재한 나노 바이오센서로 이어졌다. 곤충의 코를 이해하고, 그 코를 칩 위에 재현하고, 그것으로 질병을 진단한다. 권형욱 교수 연구실 20년의 궤적이 하나의 문장으로 수렴하는 지점이다.

---

## 참고문헌

- Choi, J., et al. & Kwon, H. W. (2026). Direct Diagnosis of Chalkbrood Disease by Smelling Infected Honey Bee Larvae via Bioelectronic Noses with a Single-Carbon-Atomic Resolution. *ACS Applied Materials & Interfaces*.
- Kwon, H. W., et al. (2006). Olfactory responses in a gustatory organ of the malaria vector mosquito *Anopheles gambiae*. *Proceedings of the National Academy of Sciences*, 103(36), 13526–13531. https://doi.org/10.1073/pnas.0601107103
- Lee, M.-Y., et al. & Kwon, H. W. (2020). Volatile disease markers of American foulbrood-infected larvae in *Apis mellifera*. *Journal of Insect Physiology*, 122, 104034. https://doi.org/10.1016/j.jinsphys.2020.104034
- Park, D., Jung, J. W., Choi, B.-S., Jayakodi, M., Lee, J., Lim, J., ... & Kwon, H. W. (2015). Uncovering the novel characteristics of Asian honey bee, *Apis cerana*, by whole genome sequencing. *BMC Genomics*, 16, 1. https://doi.org/10.1186/s12864-014-1206-5
- Lim, J. H., et al. & Kwon, H. W. (2015). Bioelectronic Tongues Mimicking Insect Taste Systems for Real-Time Discrimination between Natural and Artificial Sweeteners. *Biosensors and Bioelectronics*.
