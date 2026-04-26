import { useRef } from 'react'
import { getCharacter, temperamentLabels, temperamentDesc } from '../data/characters'
import CharacterCard from '../components/CharacterCard'
import ShareButton from '../components/ShareButton'

const temperamentBg = {
  NF: 'bg-rose-100 text-rose-700',
  NT: 'bg-sky-100 text-sky-700',
  SJ: 'bg-emerald-100 text-emerald-700',
  SP: 'bg-orange-100 text-orange-700',
}

export default function Result({ ilgan, result, answers, onRestart }) {
  const cardRef = useRef(null)

  if (!ilgan || !result) return null

  const character = getCharacter(ilgan.key, result.primary)
  const secondaryChar = getCharacter(ilgan.key, result.secondary)

  // 기질별 점수 계산
  const score = { NF: 0, NT: 0, SJ: 0, SP: 0 }
  if (answers) answers.forEach((t) => score[t]++)
  const total = answers?.length || 10

  if (!character) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <p className="text-stone-500">결과를 찾을 수 없습니다.</p>
        <button onClick={onRestart} className="mt-4 text-amber-600 underline">다시 시작</button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-12">
      <p className="text-stone-400 text-sm mb-1">나의 사주기질 유형은</p>
      <h1 className="text-4xl font-bold text-stone-800 mb-1">{character.typeName}</h1>
      <p className="text-amber-600 text-sm mb-8">{character.desc}</p>

      {/* 결과 카드 (캡처 대상) */}
      <div ref={cardRef} className="w-full max-w-sm mb-6">
        <CharacterCard character={character} ilgan={ilgan} result={result} />
      </div>

      {/* 공유 버튼 */}
      <ShareButton cardRef={cardRef} typeName={character.typeName} />

      {/* 기질 점수 */}
      <div className="w-full max-w-sm mt-8 mb-4 bg-white rounded-2xl p-5 shadow-sm border border-stone-100">
        <h3 className="font-semibold text-stone-700 mb-4 text-sm">기질 분석</h3>
        {Object.entries(score)
          .sort((a, b) => b[1] - a[1])
          .map(([type, cnt]) => (
            <div key={type} className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className={`px-2 py-0.5 rounded-full ${temperamentBg[type]}`}>
                  {temperamentLabels[type]} ({type})
                </span>
                <span className="text-stone-400">{cnt}/{total}</span>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-700 ${
                    type === result.primary ? 'bg-amber-400' : 'bg-stone-300'
                  }`}
                  style={{ width: `${(cnt / total) * 100}%` }}
                />
              </div>
            </div>
          ))}
      </div>

      {/* 핵심 성격 */}
      <div className="w-full max-w-sm bg-white rounded-2xl p-5 shadow-sm border border-stone-100 mb-4">
        <h3 className="font-semibold text-stone-700 mb-3 text-sm">핵심 성격</h3>
        <ul className="space-y-2">
          {character.traits.map((trait, i) => (
            <li key={i} className="text-stone-600 text-sm flex gap-2">
              <span className="text-amber-500 shrink-0">✦</span>
              {trait}
            </li>
          ))}
        </ul>
      </div>

      {/* 기질 설명 */}
      <div className="w-full max-w-sm bg-white rounded-2xl p-5 shadow-sm border border-stone-100 mb-4">
        <h3 className="font-semibold text-stone-700 mb-2 text-sm">
          {temperamentLabels[result.primary]} 기질이란?
        </h3>
        <p className="text-stone-500 text-sm">{temperamentDesc[result.primary]}</p>
      </div>

      {/* 궁합 */}
      <div className="w-full max-w-sm bg-white rounded-2xl p-5 shadow-sm border border-stone-100 mb-6">
        <h3 className="font-semibold text-stone-700 mb-4 text-sm">궁합</h3>
        <div className="flex gap-4">
          <div className="flex-1 text-center">
            <p className="text-xs text-stone-400 mb-2">잘 맞는 유형 😊</p>
            <p className="font-bold text-emerald-600 text-base">{character.goodMatch}</p>
          </div>
          <div className="w-px bg-stone-100" />
          <div className="flex-1 text-center">
            <p className="text-xs text-stone-400 mb-2">충돌하는 유형 😅</p>
            <p className="font-bold text-red-400 text-base">{character.badMatch}</p>
          </div>
        </div>
      </div>

      {/* 부결과 */}
      {secondaryChar && result.secondary !== result.primary && (
        <div className="w-full max-w-sm bg-stone-50 rounded-2xl p-4 border border-stone-100 mb-6 text-center">
          <p className="text-xs text-stone-400 mb-1">두 번째로 강한 기질</p>
          <p className="font-semibold text-stone-600">
            {temperamentLabels[result.secondary]}({result.secondary}) — {secondaryChar.typeName}
          </p>
        </div>
      )}

      <button
        onClick={onRestart}
        className="mt-2 text-stone-400 text-sm underline hover:text-stone-600 transition-colors"
      >
        다시 테스트하기
      </button>
    </div>
  )
}
