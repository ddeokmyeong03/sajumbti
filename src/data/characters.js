// 40개 사주기질 캐릭터 데이터
// ilganKey: 일간 키 (거목, 풀꽃, 태양, 촛불, 대산, 대지, 철검, 보석, 대강, 이슬)
// temperament: 기질 (NF, NT, SJ, SP)

export const characters = [
  // 甲(갑) - 거목
  { ilganKey: '거목', ilganName: '갑', ilganHanja: '甲', temperament: 'NF', typeName: '낭만거목', desc: '이상을 향해 곧게 뻗는 나무', traits: ['원대한 꿈을 품고 앞만 보며 나아간다', '공감 능력이 뛰어나고 타인의 마음을 잘 읽는다', '의미 있는 일에 헌신하며 감동을 줄 줄 안다'], goodMatch: '낭만대지', badMatch: '창조철검' },
  { ilganKey: '거목', ilganName: '갑', ilganHanja: '甲', temperament: 'NT', typeName: '이성거목', desc: '흔들림 없이 분석하는 리더', traits: ['냉철한 판단력으로 최선의 길을 찾는다', '전략적 사고와 탁월한 실행력을 갖췄다', '감정보다 논리를 중시하며 목표를 향해 직진한다'], goodMatch: '이성대강', badMatch: '낭만촛불' },
  { ilganKey: '거목', ilganName: '갑', ilganHanja: '甲', temperament: 'SJ', typeName: '수호거목', desc: '묵묵히 모두를 지키는 든든함', traits: ['책임감이 강하고 신뢰받는 존재다', '체계적이고 안정적인 환경을 만들어 나간다', '말보다 행동으로 증명하는 스타일이다'], goodMatch: '수호대지', badMatch: '창조이슬' },
  { ilganKey: '거목', ilganName: '갑', ilganHanja: '甲', temperament: 'SP', typeName: '창조거목', desc: '개척하고 부수고 다시 세우는', traits: ['틀에 박힌 것을 싫어하고 새 길을 만든다', '행동력이 폭발적이고 현장을 즐긴다', '즉흥적인 에너지로 주변을 흔들어 깨운다'], goodMatch: '창조대강', badMatch: '수호대지' },

  // 乙(을) - 풀꽃
  { ilganKey: '풀꽃', ilganName: '을', ilganHanja: '乙', temperament: 'NF', typeName: '낭만풀꽃', desc: '감성 넘치는 공감 요정', traits: ['타인의 감정에 깊이 공감하고 위로를 잘 한다', '아름다움을 발견하는 섬세한 감각을 지녔다', '인간 관계에서 의미와 진정성을 추구한다'], goodMatch: '낭만촛불', badMatch: '이성거목' },
  { ilganKey: '풀꽃', ilganName: '을', ilganHanja: '乙', temperament: 'NT', typeName: '이성풀꽃', desc: '섬세하게 파고드는 관찰자', traits: ['작은 디테일에서 패턴을 발견한다', '감성과 논리를 균형 있게 활용한다', '깊이 있는 분석으로 핵심을 꿰뚫는다'], goodMatch: '이성보석', badMatch: '창조대산' },
  { ilganKey: '풀꽃', ilganName: '을', ilganHanja: '乙', temperament: 'SJ', typeName: '수호풀꽃', desc: '조용히 곁을 지키는 따뜻함', traits: ['묵묵히 옆에서 챙겨주는 사람이다', '안정적이고 꾸준한 관계를 소중히 여긴다', '작은 배려로 큰 감동을 준다'], goodMatch: '수호거목', badMatch: '창조태양' },
  { ilganKey: '풀꽃', ilganName: '을', ilganHanja: '乙', temperament: 'SP', typeName: '창조풀꽃', desc: '자유롭게 피어나는 감각파', traits: ['매 순간 새로운 자극을 찾아 나선다', '감각적이고 트렌디한 안목을 갖췄다', '자유로운 표현으로 주변을 물들인다'], goodMatch: '창조태양', badMatch: '수호대산' },

  // 丙(병) - 태양
  { ilganKey: '태양', ilganName: '병', ilganHanja: '丙', temperament: 'NF', typeName: '낭만태양', desc: '뜨겁게 사랑하는 이상주의자', traits: ['열정적으로 이상을 추구하며 주변을 밝힌다', '사랑과 공감으로 관계를 깊게 만든다', '감동적인 이야기를 만들어나가는 사람이다'], goodMatch: '낭만풀꽃', badMatch: '이성대산' },
  { ilganKey: '태양', ilganName: '병', ilganHanja: '丙', temperament: 'NT', typeName: '이성태양', desc: '논리로 세상을 밝히는 자', traits: ['명확한 논리와 강한 자신감을 지녔다', '지식으로 타인을 설득하고 이끈다', '배움을 멈추지 않는 지적 에너지를 가졌다'], goodMatch: '이성거목', badMatch: '낭만이슬' },
  { ilganKey: '태양', ilganName: '병', ilganHanja: '丙', temperament: 'SJ', typeName: '수호태양', desc: '모두를 따뜻하게 품는 빛', traits: ['신뢰와 온기로 집단을 이끄는 리더다', '규칙과 원칙 안에서 모두를 보살핀다', '묵묵한 헌신으로 공동체를 지탱한다'], goodMatch: '수호풀꽃', badMatch: '창조대강' },
  { ilganKey: '태양', ilganName: '병', ilganHanja: '丙', temperament: 'SP', typeName: '창조태양', desc: '폭발적 에너지의 자유인', traits: ['강렬한 존재감으로 어디서든 중심이 된다', '즉흥적이고 활기차게 매 순간을 살아간다', '에너지로 분위기 자체를 바꾸는 사람이다'], goodMatch: '창조대강', badMatch: '수호대지' },

  // 丁(정) - 촛불
  { ilganKey: '촛불', ilganName: '정', ilganHanja: '丁', temperament: 'NF', typeName: '낭만촛불', desc: '빛나는 공감자', traits: ['깊은 감수성으로 타인의 아픔을 함께한다', '따뜻한 빛처럼 조용히 주변을 밝힌다', '예술적 감각과 공감 능력이 탁월하다'], goodMatch: '낭만풀꽃', badMatch: '이성대강' },
  { ilganKey: '촛불', ilganName: '정', ilganHanja: '丁', temperament: 'NT', typeName: '이성촛불', desc: '고독한 예술가', traits: ['치밀한 분석과 예술적 감각을 동시에 지녔다', '혼자서 깊이 파고드는 집중력이 탁월하다', '완성도를 극한까지 추구하는 완벽주의자다'], goodMatch: '이성풀꽃', badMatch: '창조거목' },
  { ilganKey: '촛불', ilganName: '정', ilganHanja: '丁', temperament: 'SJ', typeName: '수호촛불', desc: '꺼지지 않는 헌신', traits: ['어떤 상황에서도 자리를 지키는 사람이다', '꾸준한 헌신으로 신뢰를 쌓아간다', '작은 불꽃처럼 오래도록 따뜻함을 전한다'], goodMatch: '수호대지', badMatch: '창조대강' },
  { ilganKey: '촛불', ilganName: '정', ilganHanja: '丁', temperament: 'SP', typeName: '창조촛불', desc: '자유로운 감성러', traits: ['감각적인 표현으로 순간을 아름답게 만든다', '즉흥적인 창의력이 빛나는 사람이다', '불꽃처럼 강렬하고 짧게 타오른다'], goodMatch: '창조풀꽃', badMatch: '수호대산' },

  // 戊(무) - 대산
  { ilganKey: '대산', ilganName: '무', ilganHanja: '戊', temperament: 'NF', typeName: '낭만대산', desc: '깊은 울림의 철학자', traits: ['삶의 의미와 본질을 끊임없이 탐구한다', '묵직한 철학으로 타인에게 울림을 준다', '공감과 사유를 함께 지닌 드문 사람이다'], goodMatch: '낭만이슬', badMatch: '창조대강' },
  { ilganKey: '대산', ilganName: '무', ilganHanja: '戊', temperament: 'NT', typeName: '이성대산', desc: '침묵의 전략가', traits: ['말은 적지만 생각은 깊고 치밀하다', '장기적 관점에서 전략을 세우는 사람이다', '뚝심 있게 자신의 판단을 믿고 나아간다'], goodMatch: '이성거목', badMatch: '낭만풀꽃' },
  { ilganKey: '대산', ilganName: '무', ilganHanja: '戊', temperament: 'SJ', typeName: '수호대산', desc: '흔들림 없는 버팀목', traits: ['어떤 바람에도 흔들리지 않는 안정감이다', '가족과 조직을 든든하게 지탱하는 사람이다', '책임과 의무를 묵묵히 이행하는 타입이다'], goodMatch: '수호거목', badMatch: '창조이슬' },
  { ilganKey: '대산', ilganName: '무', ilganHanja: '戊', temperament: 'SP', typeName: '창조대산', desc: '거침없이 길을 만드는 자', traits: ['장애물을 보면 오히려 에너지가 솟는다', '도전적인 환경에서 최고의 능력을 발휘한다', '체력과 배짱으로 불가능을 가능케 한다'], goodMatch: '창조거목', badMatch: '낭만대지' },

  // 己(기) - 대지
  { ilganKey: '대지', ilganName: '기', ilganHanja: '己', temperament: 'NF', typeName: '낭만대지', desc: '모든 걸 품는 따뜻한 공감자', traits: ['누구든 받아들이는 넓은 포용력을 지녔다', '관계에서 따뜻함과 진심을 우선한다', '모든 것을 키워내는 대지의 마음을 가졌다'], goodMatch: '낭만거목', badMatch: '이성대강' },
  { ilganKey: '대지', ilganName: '기', ilganHanja: '己', temperament: 'NT', typeName: '이성대지', desc: '꼼꼼하게 쌓아가는 완벽주의자', traits: ['세밀한 계획으로 완성도 높은 결과를 낸다', '데이터와 근거를 바탕으로 판단한다', '빈틈없는 준비로 실수를 최소화한다'], goodMatch: '이성풀꽃', badMatch: '창조대산' },
  { ilganKey: '대지', ilganName: '기', ilganHanja: '己', temperament: 'SJ', typeName: '수호대지', desc: '늘 제자리에서 지키는 사람', traits: ['변함없는 자리에서 모두를 보살핀다', '성실함과 안정감으로 믿음을 얻는다', '오랜 관계를 소중히 여기는 사람이다'], goodMatch: '수호거목', badMatch: '창조대강' },
  { ilganKey: '대지', ilganName: '기', ilganHanja: '己', temperament: 'SP', typeName: '창조대지', desc: '새로운 걸 심고 키우는 자', traits: ['실험하고 시도하는 것을 두려워하지 않는다', '손으로 만지고 경험하며 배우는 타입이다', '현장감 있는 창의력이 빛나는 사람이다'], goodMatch: '창조풀꽃', badMatch: '수호이슬' },

  // 庚(경) - 철검
  { ilganKey: '철검', ilganName: '경', ilganHanja: '庚', temperament: 'NF', typeName: '낭만철검', desc: '정의를 꿈꾸는 외로운 검객', traits: ['이상과 정의를 위해 혼자서도 싸운다', '날카로운 감수성으로 부당함에 분노한다', '진정성 있는 관계만을 원하는 고독한 영혼이다'], goodMatch: '낭만거목', badMatch: '이성대지' },
  { ilganKey: '철검', ilganName: '경', ilganHanja: '庚', temperament: 'NT', typeName: '이성철검', desc: '냉철하게 판단하는 전략가', traits: ['감정 없이 최적의 판단을 내린다', '목표를 위해 수단을 치밀하게 설계한다', '카리스마 있는 리더십으로 집단을 이끈다'], goodMatch: '이성대산', badMatch: '낭만이슬' },
  { ilganKey: '철검', ilganName: '경', ilganHanja: '庚', temperament: 'SJ', typeName: '수호철검', desc: '끝까지 지키는 카리스마', traits: ['강인한 의지로 맡은 것을 끝까지 지킨다', '원칙을 중시하고 흔들리지 않는 신뢰감이 있다', '강한 카리스마로 조직에 질서를 부여한다'], goodMatch: '수호대산', badMatch: '창조풀꽃' },
  { ilganKey: '철검', ilganName: '경', ilganHanja: '庚', temperament: 'SP', typeName: '창조철검', desc: '기존을 부수고 새길 여는 자', traits: ['낡은 틀을 과감히 부수고 새 기준을 세운다', '스피드와 결단력이 남다르다', '충격적일 만큼 직선적이고 솔직하다'], goodMatch: '창조거목', badMatch: '수호이슬' },

  // 辛(신) - 보석
  { ilganKey: '보석', ilganName: '신', ilganHanja: '辛', temperament: 'NF', typeName: '낭만보석', desc: '투명한 감수성의 소유자', traits: ['섬세한 감수성으로 아름다움을 포착한다', '진실하고 투명하게 자신을 표현한다', '완벽한 감성으로 타인에게 감동을 준다'], goodMatch: '낭만촛불', badMatch: '창조대산' },
  { ilganKey: '보석', ilganName: '신', ilganHanja: '辛', temperament: 'NT', typeName: '이성보석', desc: '완벽을 새기는 분석가', traits: ['완벽에 집착하며 최고의 퀄리티를 추구한다', '논리와 심미안을 동시에 지닌 드문 유형이다', '정밀한 관찰로 남들이 놓친 것을 찾아낸다'], goodMatch: '이성풀꽃', badMatch: '창조거목' },
  { ilganKey: '보석', ilganName: '신', ilganHanja: '辛', temperament: 'SJ', typeName: '수호보석', desc: '빛을 잃지 않는 단단함', traits: ['어떤 상황에서도 자신의 가치를 지킨다', '꾸준한 자기 관리로 품격을 유지한다', '신뢰를 쌓는 데 오랜 시간을 투자한다'], goodMatch: '수호대지', badMatch: '창조대강' },
  { ilganKey: '보석', ilganName: '신', ilganHanja: '辛', temperament: 'SP', typeName: '창조보석', desc: '날카롭게 빛나는 자유인', traits: ['감각적이고 트렌디한 스타일을 추구한다', '순간의 번뜩임으로 모두를 놀라게 한다', '자유로운 표현으로 독창적 세계를 만든다'], goodMatch: '창조풀꽃', badMatch: '수호대산' },

  // 壬(임) - 대강
  { ilganKey: '대강', ilganName: '임', ilganHanja: '壬', temperament: 'NF', typeName: '낭만대강', desc: '흐르는 몽상가', traits: ['자유롭게 흘러가며 새 세계를 꿈꾼다', '감수성이 풍부하고 상상력이 무한하다', '의미 있는 여정을 함께할 사람을 찾는다'], goodMatch: '낭만이슬', badMatch: '수호대산' },
  { ilganKey: '대강', ilganName: '임', ilganHanja: '壬', temperament: 'NT', typeName: '이성대강', desc: '깊은 바다 탐구자', traits: ['보이지 않는 것까지 탐구하는 지적 호기심을 지녔다', '방대한 지식을 체계적으로 연결하는 능력이 있다', '논리적 사고와 창의성을 함께 발휘한다'], goodMatch: '이성거목', badMatch: '낭만촛불' },
  { ilganKey: '대강', ilganName: '임', ilganHanja: '壬', temperament: 'SJ', typeName: '수호대강', desc: '묵묵히 흘러 길을 내는 자', traits: ['꾸준하게 한 방향으로 나아가는 사람이다', '안정적이고 지속 가능한 방식을 선호한다', '오래 흘러 큰 강이 되는 삶을 산다'], goodMatch: '수호거목', badMatch: '창조철검' },
  { ilganKey: '대강', ilganName: '임', ilganHanja: '壬', temperament: 'SP', typeName: '창조대강', desc: '거침없는 모험가', traits: ['예측 불가한 루트로 목적지에 도달한다', '새로운 경험과 모험에 본능적으로 끌린다', '자유로운 영혼으로 세상을 가로지른다'], goodMatch: '창조태양', badMatch: '수호대지' },

  // 癸(계) - 이슬
  { ilganKey: '이슬', ilganName: '계', ilganHanja: '癸', temperament: 'NF', typeName: '낭만이슬', desc: '새벽빛 속 시인', traits: ['섬세한 감성으로 세상을 시처럼 바라본다', '직관과 공감으로 타인의 마음을 읽는다', '새벽처럼 조용하고 깊은 사람이다'], goodMatch: '낭만대산', badMatch: '창조철검' },
  { ilganKey: '이슬', ilganName: '계', ilganHanja: '癸', temperament: 'NT', typeName: '이성이슬', desc: '침잠하는 직관가', traits: ['깊이 가라앉아 본질을 직관으로 파악한다', '논리와 감각이 결합된 예리한 통찰을 지녔다', '조용하지만 날카로운 분석으로 핵심을 찌른다'], goodMatch: '이성보석', badMatch: '창조거목' },
  { ilganKey: '이슬', ilganName: '계', ilganHanja: '癸', temperament: 'SJ', typeName: '수호이슬', desc: '조용히 스며드는 위로자', traits: ['이슬처럼 조용히 스며들어 마음을 적신다', '작지만 지속적인 관심으로 신뢰를 쌓는다', '묵묵히 옆에 있어주는 위로의 존재다'], goodMatch: '수호풀꽃', badMatch: '창조대산' },
  { ilganKey: '이슬', ilganName: '계', ilganHanja: '癸', temperament: 'SP', typeName: '창조이슬', desc: '번뜩이는 촉의 달인', traits: ['순간의 직관으로 정답을 포착한다', '독창적인 감각으로 새로운 것을 만들어낸다', '이슬처럼 가볍고 자유롭게 매 순간을 즐긴다'], goodMatch: '창조풀꽃', badMatch: '수호거목' },
]

// 일간키 + 기질로 캐릭터 찾기
export function getCharacter(ilganKey, temperament) {
  return characters.find(
    (c) => c.ilganKey === ilganKey && c.temperament === temperament
  )
}

// 기질 한글 이름
export const temperamentLabels = {
  NF: '낭만',
  NT: '이성',
  SJ: '수호',
  SP: '창조',
}

// 기질 설명
export const temperamentDesc = {
  NF: '이상주의, 공감, 의미 추구',
  NT: '분석, 논리, 시스템',
  SJ: '책임, 안정, 규칙',
  SP: '자유, 즉흥, 현재',
}
