import { calculateFourPillars } from 'manseryeok'

const ilganMap = [
  { name: '갑', hanja: '甲', key: '거목', symbol: '큰 나무', desc: '리더, 개척, 성장' },
  { name: '을', hanja: '乙', key: '풀꽃', symbol: '풀꽃',   desc: '유연함, 감성, 공감' },
  { name: '병', hanja: '丙', key: '태양', symbol: '태양',   desc: '밝음, 에너지, 열정' },
  { name: '정', hanja: '丁', key: '촛불', symbol: '촛불',   desc: '섬세함, 예술, 신비' },
  { name: '무', hanja: '戊', key: '대산', symbol: '큰 산',  desc: '듬직함, 묵직함, 철학' },
  { name: '기', hanja: '己', key: '대지', symbol: '대지',   desc: '포용, 현실, 안정' },
  { name: '경', hanja: '庚', key: '철검', symbol: '철검',   desc: '카리스마, 결단, 정의' },
  { name: '신', hanja: '辛', key: '보석', symbol: '보석',   desc: '세련됨, 완벽, 날카로움' },
  { name: '임', hanja: '壬', key: '대강', symbol: '큰 강',  desc: '자유, 스케일, 모험' },
  { name: '계', hanja: '癸', key: '이슬', symbol: '이슬',   desc: '직관, 신비, 감수성' },
]

// 천간 한글 → ilganMap 인덱스 매핑
const stemOrder = ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계']

export function getIlgan(year, month, day) {
  const pillars = calculateFourPillars({ year, month, day, hour: 12, minute: 0 })
  const dayPillar = pillars.toObject().day   // 예: '계유'
  const stemChar = dayPillar[0]              // 첫 글자 = 천간
  const idx = stemOrder.indexOf(stemChar)
  return ilganMap[idx] ?? ilganMap[0]
}
