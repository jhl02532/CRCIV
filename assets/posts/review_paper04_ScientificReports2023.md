# 모기 몸속 세균이 말라리아 위험도를 알고 있다: 국내 *Anopheles sinensis* 마이크로바이옴 연구

한국에서 말라리아는 1979년 WHO로부터 공식 박멸 선언을 받았다. 그러나 1993년 북한과의 접경 지역에서 다시 나타났고, 이후 매년 300~500건의 환자가 경기 북부·강원 북부 등 특정 지역에서 집중적으로 발생하고 있다. 왜 같은 나라 안에서도 어떤 지역은 말라리아가 끊이지 않고, 다른 지역은 사실상 발생하지 않는가?

모기의 종류는 같다. 매개체는 *Anopheles sinensis*, 한국에 가장 흔한 얼룩날개모기다. 그렇다면 차이는 어디서 오는가?

이 논문은 그 답을 모기 **몸속 세균 군집(microbiome)**에서 찾았다.

> **Lee, S., et al. & Kwon, H. W. (2023).** The relationships between microbiome diversity and epidemiology in domestic species of malaria-mediated mosquitoes of Korea. *Scientific Reports*, 13. https://doi.org/10.1038/s41598-023-38021-9

---

## 연구 배경

모기의 마이크로바이옴은 단순한 동거자가 아니다. 모기 체내 세균들은 영양 대사, 발생, 면역, 행동에 직접 관여한다. 특히 말라리아 기생충(*Plasmodium*)의 감염 성립 여부에도 영향을 미친다는 증거들이 축적되어 왔다. 예컨대 내부공생균 *Wolbachia*는 뎅기바이러스 감염을 억제하고, *Chromobacterium* 속 세균은 모기의 말라리아·뎅기 감수성을 낮추는 것으로 알려져 있다.

그런데 한국의 말라리아 상황에 이 관점을 적용한 연구는 없었다. 말라리아 고위험 지역과 저위험 지역의 모기 마이크로바이옴이 실제로 다른지, 다르다면 어떤 세균이 차이를 만드는지, 그리고 그 차이가 말라리아 발생률과 의미 있는 상관관계를 갖는지는 전혀 밝혀지지 않은 상태였다.

**연구 질문**: 말라리아 고위험(hyperendemic) 지역과 저위험(hypoendemic) 지역에서 채집된 *Anopheles sinensis*의 마이크로바이옴은 유의미하게 다른가? 그리고 그 차이를 설명하는 특이적 세균 바이오마커가 존재하는가?

---

## 연구 방법

2020년 6월, 전국 12개 농촌 지역에서 성충 암컷 *An. sinensis* 60마리를 채집했다. 수집 지역은 말라리아 발생률(인구 10만 명당 1건 초과)을 기준으로 **고위험 지역**과 **저위험 지역**으로 분류했다. 각 모기에서 **중장(mid-gut)**과 **타액선(salivary gland)**을 해부·분리하고, 5마리씩 풀링(pooling)해 시료를 구성했다.

16S rRNA 유전자의 V3-V4 영역을 표적으로 Illumina MiSeq 시퀀싱(2×300 bp paired-end)을 수행했다. 분석은 QIIME2 파이프라인으로 진행했으며, 97% 유사도 기준으로 OTU를 분류했다. 다양성 분석에는 Shannon 지수(알파 다양성), Jaccard 및 Bray-Curtis 비유사도(베타 다양성)를 사용했고, 지역 특이적 바이오마커는 MTP-Comparative Analyzer 도구로 발굴했다.

---

## 주요 발견

### 1. 마이크로바이옴의 전체 구성

전체 샘플에서 우점하는 문(phylum)은 **Proteobacteria(74.52%)**, Firmicutes(14.67%), Actinobacteria(5.65%), Bacteroidetes(2.57%) 순이었으며, 이 네 문이 전체 OTU의 96~99%를 차지했다.

속(genus) 수준에서는 *Pseudomonas*(29.22%), *Staphylococcus*(10.5%), *Erwinia*(9.37%), *Serratia*(6.91%), *Acinetobacter*(6.7%)가 상위 5개였다. 그런데 이 순위는 지역에 따라 극적으로 달라졌다.

### 2. 고위험 지역 vs. 저위험 지역: 마이크로바이옴이 갈린다

알파 다양성과 베타 다양성 모두에서 두 지역군 간에 통계적으로 유의미한 차이가 확인되었다.

**저위험 지역** 모기는 *Pseudomonas*가 압도적으로 우점했다. 특히 *Pseudomonas synxantha*가 전체의 24.54%를 차지했다.

**고위험 지역** 모기는 마이크로바이옴 구성이 훨씬 이질적(heterogeneous)이었으며, *Staphylococcus*, *Erwinia*, *Serratia*, *Pantoea*, *Arcobacter*, *Enterobacter* 등 다양한 세균들이 지역별로 특이적으로 나타났다.

### 3. *Pseudomonas*의 역설: 많을수록 말라리아가 적다

가장 주목할 만한 발견은 *Pseudomonas*와 말라리아 발생률의 **역상관 관계**다. *Pseudomonas*는 저위험 지역에서 우점하고, 고위험 지역에서는 비율이 낮았다. 이는 우연이 아닐 가능성이 높다. 선행 연구들에서 *Pseudomonas* 속 세균이 모기의 *Plasmodium* 침입을 억제하고, *Plasmodium* 음성 모기 집단에서 높은 빈도로 검출된다는 보고가 있었다.

즉, *Pseudomonas*가 풍부한 모기는 말라리아 기생충에 덜 감수적일 수 있으며, 이것이 지역 단위의 말라리아 발생률 차이를 부분적으로 설명할 수 있다는 가설이 제기된다.

### 4. 기관별 마이크로바이옴도 다르다

중장과 타액선 마이크로바이옴을 비교했을 때, 21개 속은 두 기관에 공통으로 존재했지만, 중장에는 20개의 기관 특이적 속이, 타액선에는 10개의 기관 특이적 속이 추가로 존재했다. *Acinetobacter*는 두 기관 사이에서 통계적으로 유의미한 차이를 보였다. 타액선은 말라리아 기생충이 인간에게 전달되는 최종 통로라는 점에서, 이 기관의 마이크로바이옴 조성은 전파 효율과 직결될 수 있다.

---

## 연구의 의의

이 연구의 핵심 기여는 **마이크로바이옴을 말라리아 위험도의 지역 바이오마커로 활용할 수 있다**는 가능성을 처음으로 제시한 것이다.

지금까지 말라리아 감시는 주로 모기 밀도 조사, 환자 발생 보고, *Plasmodium* 감염률 측정에 의존했다. 그런데 마이크로바이옴 프로파일이 지역별 말라리아 위험도를 반영한다면, 채집된 모기의 세균 군집 분석만으로도 해당 지역의 말라리아 전파 위험을 사전에 평가하는 새로운 감시 도구가 될 수 있다.

더 나아가, *Pseudomonas*처럼 말라리아 기생충 감염을 억제하는 세균을 의도적으로 모기 집단에 도입하는 **마이크로바이옴 기반 생물학적 방제** 전략의 가능성도 열린다. 이는 살충제 내성 문제를 우회하는 새로운 접근법이다.

Kwon 연구실의 관점에서 이 연구는 모기 화학감각(후각·미각) → AI 분류 → **마이크로바이옴 역학**으로 이어지는 모기 연구의 세 번째 축을 완성한다. 모기를 감각 기관, 외형, 내부 생태계라는 세 차원에서 동시에 이해하려는 통합적 접근이다.

---

## 참고문헌

- Lee, S., et al. & Kwon, H. W. (2023). The relationships between microbiome diversity and epidemiology in domestic species of malaria-mediated mosquitoes of Korea. *Scientific Reports*, 13. https://doi.org/10.1038/s41598-023-38021-9
- Boissière, A., Tchioffo, M. T., Bachar, D., Abate, L., Marie, A., Nsango, S. E., ... & Morlais, I. (2012). Midgut microbiota of the malaria mosquito vector *Anopheles gambiae* and interactions with *Plasmodium falciparum* infection. *PLOS Pathogens*, 8(5), e1002742.
- Dong, Y., Manfredini, F., & Dimopoulos, G. (2009). Implication of the mosquito midgut microbiota in the defense against malaria parasites. *PLOS Pathogens*, 5(5), e1000423.
- Ramirez, J. L., Souza-Neto, J., Torres Cosme, R., Rovira, J., Ortiz, A., Pascale, J. M., & Dimopoulos, G. (2012). Reciprocal tripartite interactions between the *Aedes aegypti* midgut microbiota, innate immune system and dengue virus influences vector competence. *PLOS Neglected Tropical Diseases*, 6(3), e1561.
