import { useState } from 'react'
import { getIlgan } from '../data/saju'

const ilganEmoji = {
  거목: '🌲', 풀꽃: '🌸', 태양: '☀️', 촛불: '🕯️', 대산: '⛰️',
  대지: '🌍', 철검: '⚔️', 보석: '💎', 대강: '🌊', 이슬: '💧',
}

export default function BirthInput({ onDone }) {
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [preview, setPreview] = useState(null)
  const [error, setError] = useState('')

  const handleChange = (y, m, d) => {
    setError('')
    setPreview(null)
    const yy = parseInt(y), mm = parseInt(m), dd = parseInt(d)
    if (yy >= 1900 && yy <= 2100 && mm >= 1 && mm <= 12 && dd >= 1 && dd <= 31) {
      try {
        setPreview(getIlgan(yy, mm, dd))
      } catch {
        // 날짜 미완성 상태
      }
    }
  }

  const handleSubmit = () => {
    if (!preview) {
      setError('생년월일을 올바르게 입력해주세요.')
      return
    }
    onDone(preview)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">📅</div>
          <h2 className="text-2xl font-bold text-stone-800">생년월일 입력</h2>
          <p className="text-stone-500 text-sm mt-2">양력 기준으로 입력해주세요</p>
        </div>

        <div className="flex gap-3 mb-4">
          <div className="flex-1">
            <label className="block text-xs text-stone-500 mb-1 text-center">연도</label>
            <input
              type="number"
              placeholder="1990"
              value={year}
              onChange={(e) => {
                setYear(e.target.value)
                handleChange(e.target.value, month, day)
              }}
              className="w-full border border-stone-300 rounded-xl px-3 py-3 text-center text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <div className="w-20">
            <label className="block text-xs text-stone-500 mb-1 text-center">월</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="12"
              value={month}
              onChange={(e) => {
                setMonth(e.target.value)
                handleChange(year, e.target.value, day)
              }}
              className="w-full border border-stone-300 rounded-xl px-3 py-3 text-center text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <div className="w-20">
            <label className="block text-xs text-stone-500 mb-1 text-center">일</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="31"
              value={day}
              onChange={(e) => {
                setDay(e.target.value)
                handleChange(year, month, e.target.value)
              }}
              className="w-full border border-stone-300 rounded-xl px-3 py-3 text-center text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
        </div>

        {/* 일간 미리보기 */}
        {preview && (
          <div className="mb-4 bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center">
            <p className="text-xs text-amber-600 mb-1">나의 일간</p>
            <div className="text-3xl mb-1">{ilganEmoji[preview.key] || '✨'}</div>
            <p className="text-xl font-bold text-stone-800">
              {preview.hanja}({preview.name}) · {preview.symbol}
            </p>
            <p className="text-xs text-stone-500 mt-1">{preview.desc}</p>
          </div>
        )}

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <button
          onClick={handleSubmit}
          disabled={!preview}
          className={`w-full font-bold text-lg py-4 rounded-2xl shadow-md transition-all active:scale-95
            ${preview
              ? 'bg-amber-500 hover:bg-amber-600 text-white'
              : 'bg-stone-100 text-stone-400 cursor-not-allowed'
            }`}
        >
          질문 시작하기
        </button>
      </div>
    </div>
  )
}
