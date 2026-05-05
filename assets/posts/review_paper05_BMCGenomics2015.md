# 아시아 꿀벌의 설계도를 처음으로 읽다: *Apis cerana* 전장 유전체 해독

꿀벌 연구의 기준은 오랫동안 서양꿀벌 *Apis mellifera*였다. 2006년 *A. mellifera*의 전장 유전체가 해독되면서 사회성 곤충의 분자생물학, 신경생물학, 후성유전학 연구가 폭발적으로 발전했다. 그런데 아시아에서 수천 년간 양봉에 이용되어 온 동양꿀벌 *Apis cerana*의 유전체는 여전히 미지의 영역이었다.

*A. cerana*는 단순히 *A. mellifera*의 아시아 버전이 아니다. 꿀벌응애(*Varroa destructor*)에 대한 자연 저항성, 말벌 집단 공격에 대응하는 열 방어 행동(heat balling), 다른 먹이 선호도와 생태적 지위 — 이 모든 특성이 *A. mellifera*와 뚜렷이 다르다. 이 차이들의 유전적 기반을 이해하려면 유전체가 필요했다.

2015년, 이 논문이 그 유전체를 처음으로 세상에 내놓았다.

> **Park, D., Jung, J. W., Choi, B.-S., Jayakodi, M., Lee, J., Lim, J., Yu, Y., Choi, Y.-S., Lee, M.-L., Park, Y., Choi, I.-Y., Yang, T.-J., Edwards, O. R., Nah, G., & Kwon, H. W. (2015).** Uncovering the novel characteristics of Asian honey bee, *Apis cerana*, by whole genome sequencing. *BMC Genomics*, 16, 1. https://doi.org/10.1186/s12864-014-1206-5

---

## 연구 배경

속(genus) *Apis*는 아시아 8종과 서양 1종(*A. mellifera*)으로 구성된다. *A. cerana*는 동아시아·동남아시아·남아시아 전역에 분포하며, 한국을 포함한 아시아 국가들의 전통 양봉업을 수천 년간 지탱해온 종이다. 그러나 *A. mellifera* 유전체 해독 이후 9년이 지나도록 *A. cerana*의 유전체는 해독되지 않았다.

문제는 단순히 서열 정보의 부재가 아니었다. *A. cerana*가 *A. mellifera*와 어떻게 다른지, 왜 다른지를 분자 수준에서 설명할 수 없었다. 두 종이 언제 갈라졌는지, 각각 어떤 유전자가 확장되거나 소실되었는지, 사회성 행동의 분자적 기반이 공유되는지 독립적으로 진화했는지 — 이 모든 질문이 유전체 없이는 답할 수 없었다.

**연구 질문**: *A. cerana*의 전장 유전체는 어떻게 구성되어 있으며, *A. mellifera*와 비교했을 때 어떤 유전적 특성이 이 종을 독특하게 만드는가?

---

## 유전체의 기본 구조

De novo 조립 결과, *A. cerana* 유전체의 크기는 **238 Mbp**로 확정되었다. 2,430개의 스캐폴드로 구성되며, 가장 큰 스캐폴드의 길이는 6.35 Mbp다. 반복 서열은 전체의 약 5.9%로, 단순 반복(simple repeats) 3.42%와 산재 반복(interspersed repeats) 1.95%가 주를 이룬다.

유전자 주석(annotation) 결과 총 **10,651개의 단백질 코딩 유전자**가 확인되었다. 비교를 위해 *A. mellifera*(10,157개), 말벌 *Nasonia vitripennis*(15,314개), 초파리 *Drosophila melanogaster*의 유전자와 오솔로그(ortholog) 분석을 수행했다.

---

## 주요 발견

### 1. *A. cerana*만의 고유 유전자: 2,182개

4종 비교 벤 다이어그램 분석에서 **2,182개의 *A. cerana* 특이적 유전자**가 확인되었다. 이 유전자들의 72%는 하나 이상의 GO(Gene Ontology) 용어를 가지며, 696개의 효소가 125개의 대사 경로에 분류되었다.

*A. cerana* 특이적 유전자들에서 유의미하게 풍부한 GO 범주는 **근육 세포 분화, 근육 조직 발달**과 관련된 항목들이었다. 이는 *A. cerana*의 독특한 비행 패턴 및 말벌 공격에 대응하는 열 방어 행동(열구 형성, heat balling)과 연관될 가능성이 있다.

반면 *A. mellifera*에는 4,981개의 종 특이적 유전자가 있었으며, 두 꿀벌 종이 공유하지만 다른 곤충에는 없는 유전자는 1,061개였다. 이 1,061개가 꿀벌 특이적 사회성의 분자적 기반 후보다.

### 2. 화학수용체 유전자군: 후각·미각의 분자 지도

Kwon 연구실의 핵심 관심사인 화학감각 유전자들이 체계적으로 목록화되었다.

- **후각수용체(Odorant Receptors, AcORs)**: **119개** 확인. 스캐폴드 3, 103, 17번에 클러스터를 이루며 집중 배치. *A. mellifera*와 최근에 분기했음에도 두 종이 서로 다른 후각수용체 레퍼토리를 발현한다는 것이 확인되어, 생태적 적응에 따른 후각계의 독립적 진화를 시사한다.
- **미각수용체(Gustatory Receptors, AcGRs)**: **10개** 확인. 쓴맛 수용체가 *A. cerana* 유전체에서 소실된 것으로 보이며, 이는 두 종의 먹이 선호도 차이를 설명할 수 있다.
- **이온성수용체(Ionotropic Receptors, AcIRs)**: **10개** 확인. 하등 곤충에서 고등 곤충으로 진화하면서 분기한 이 수용체군은 온도·습도·산도 감지에 관여한다.

### 3. 면역 유전자: 160개의 방어 체계

*A. cerana* 유전체에서 **160개의 면역 관련 유전자**가 확인되었다. Toll/TLR 경로, IMD 경로, JAK-STAT 경로의 핵심 구성 요소들이 모두 존재했다. 특히 항균 펩타이드(defensin, abaecin, hymenoptaecin) 유전자들이 확인되어, *A. cerana*가 *A. mellifera*와 유사하지만 독립적으로 진화한 면역 체계를 갖추고 있음이 밝혀졌다.

*A. cerana*는 꿀벌응애에 대한 자연 저항성을 갖는다고 알려져 있다. 이 면역 유전자 목록은 그 저항성의 분자적 기반을 탐색하는 출발점이 된다.

### 4. CpG 메틸화 패턴과 후성유전학

*A. cerana* 유전체의 CpG o/e(observed/expected) 분포를 분석한 결과, *A. mellifera*와 유사한 이중 분포 패턴이 확인되었다. 저-CpG 유전자는 주로 하우스키핑 기능과 관련되고, 고-CpG 유전자는 발생과 관련된 것으로 나타났다. 이는 DNA 메틸화가 꿀벌의 사회성 행동 조절에 관여한다는 기존 가설을 *A. cerana*에서도 지지하는 결과다.

---

## 연구의 의의

이 논문의 학술적 파급력은 수치로 확인된다. 2026년 현재 **인용 횟수 1,183회** — BMC Genomics 역대 최고 수준의 인용을 기록한 논문 중 하나다.

그 이유는 분명하다. *A. cerana* 유전체는 단순한 서열 데이터가 아니라, 아시아 꿀벌 연구 전체를 위한 **참조 유전체(reference genome)**가 되었기 때문이다. 이 논문 이후 *A. cerana*의 후각 생리, 면역, 사회성, 응애 저항성, 질병 감수성을 다루는 연구들이 모두 이 유전체를 기반으로 수행되고 있다.

Kwon 연구실의 관점에서 이 연구는 **모기에서 꿀벌로의 전환**을 알리는 신호탄이었다. 2006년 모기 구기 후각 발견으로 시작된 화학감각 연구가, 이제 아시아 꿀벌의 전체 유전자 레퍼토리를 해독하는 수준으로 확장된 것이다. 119개의 후각수용체, 10개의 미각수용체, 10개의 이온성수용체 목록은 이후 꿀벌 감각 생리학 연구들의 직접적인 출발점이 되었다.

---

## 참고문헌

- Park, D., Jung, J. W., Choi, B.-S., Jayakodi, M., Lee, J., Lim, J., Yu, Y., Choi, Y.-S., Lee, M.-L., Park, Y., Choi, I.-Y., Yang, T.-J., Edwards, O. R., Nah, G., & Kwon, H. W. (2015). Uncovering the novel characteristics of Asian honey bee, *Apis cerana*, by whole genome sequencing. *BMC Genomics*, 16, 1. https://doi.org/10.1186/s12864-014-1206-5
- Honeybee Genome Sequencing Consortium. (2006). Insights into social insects from the genome of the honeybee *Apis mellifera*. *Nature*, 443, 931–949. https://doi.org/10.1038/nature05260
- Elsik, C. G., Worley, K. C., Bennett, A. K., Beye, M., Camara, F., Childers, C. P., ... & Weinstock, G. M. (2014). Finding the missing honey bee genes: lessons learned from a genome upgrade. *BMC Genomics*, 15, 86.
- Robertson, H. M., & Wanner, K. W. (2006). The chemoreceptor superfamily in the honey bee, *Apis mellifera*: expansion of the odorant, but not gustatory, receptor family. *Genome Research*, 16(11), 1395–1403.
