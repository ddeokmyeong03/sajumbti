import { temperamentLabels, temperamentDesc } from '../data/characters'

const ilganEmoji = {
  거목: '🌲', 풀꽃: '🌸', 태양: '☀️', 촛불: '🕯️', 대산: '⛰️',
  대지: '🌍', 철검: '⚔️', 보석: '💎', 대강: '🌊', 이슬: '💧',
}

const temperamentColor = {
  NF: 'from-rose-50 to-amber-50',
  NT: 'from-sky-50 to-stone-50',
  SJ: 'from-emerald-50 to-stone-50',
  SP: 'from-amber-50 to-orange-50',
}

const temperamentBadge = {
  NF: 'bg-rose-100 text-rose-700',
  NT: 'bg-sky-100 text-sky-700',
  SJ: 'bg-emerald-100 text-emerald-700',
  SP: 'bg-orange-100 text-orange-700',
}

export default function CharacterCard({ character, ilgan, result }) {
  const emoji = ilganEmoji[ilgan.key] || '✨'
  const gradClass = temperamentColor[result.primary] || 'from-amber-50 to-stone-50'
  const badgeClass = temperamentBadge[result.primary] || 'bg-amber-100 text-amber-700'

  return (
    <div
      className={`bg-gradient-to-b ${gradClass} rounded-3xl p-7 shadow-md border border-stone-100 text-center`}
    >
      {/* 이미지 영역 */}
      <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-white/80 flex items-center justify-center text-6xl shadow-inner border border-stone-100">
        {emoji}
      </div>

      {/* 유형명 */}
      <h2 className="text-3xl font-bold text-stone-800 mb-1">{character.typeName}</h2>
      <p className="text-stone-500 text-sm mb-5">{character.desc}</p>

      {/* 구분선 */}
      <div className="w-12 h-0.5 bg-stone-200 mx-auto mb-5" />

      {/* 배지 */}
      <div className="flex justify-center gap-2 mb-1">
        <span className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-xs font-medium">
          {ilgan.hanja}({ilgan.name}) · {ilgan.key}
        </span>
        <span className={`${badgeClass} px-3 py-1 rounded-full text-xs font-medium`}>
          {temperamentLabels[result.primary]} · {result.primary}
        </span>
      </div>

      {/* 브랜딩 */}
      <p className="text-xs text-stone-300 mt-4">사주기질 테스트</p>
    </div>
  )
}
