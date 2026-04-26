import { useState } from 'react'
import { questions } from '../data/questions'
import ProgressBar from '../components/ProgressBar'

export default function Quiz({ onDone }) {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selected, setSelected] = useState(null)

  const q = questions[current]

  const handleSelect = (type) => {
    if (selected !== null) return  // 중복 클릭 방지
    setSelected(type)
    setTimeout(() => {
      const newAnswers = [...answers, type]
      if (current + 1 >= questions.length) {
        onDone(newAnswers)
      } else {
        setAnswers(newAnswers)
        setCurrent(current + 1)
        setSelected(null)
      }
    }, 400)
  }

  return (
    <div className="flex flex-col min-h-screen px-6 py-10">
      <ProgressBar current={current + 1} total={questions.length} />

      <div className="flex-1 flex flex-col justify-center max-w-lg mx-auto w-full">
        {/* 질문 번호 */}
        <p className="text-xs text-stone-400 text-center mb-3 font-medium tracking-widest">
          Q{current + 1} / {questions.length}
        </p>

        {/* 질문 */}
        <div className="bg-white rounded-3xl px-6 py-8 shadow-sm border border-stone-100 mb-6 text-center">
          <p className="text-lg font-bold text-stone-800 leading-snug">{q.question}</p>
        </div>

        {/* 선택지 */}
        <div className="flex flex-col gap-3">
          {q.options.map((opt, i) => {
            const isSelected = selected === opt.type
            const isOther = selected !== null && !isSelected
            return (
              <button
                key={i}
                onClick={() => handleSelect(opt.type)}
                className={`w-full text-left px-5 py-4 rounded-2xl border-2 transition-all duration-200
                  ${isSelected
                    ? 'border-amber-500 bg-amber-50 text-amber-800 font-semibold scale-[1.02]'
                    : isOther
                    ? 'border-stone-100 bg-stone-50 text-stone-400 opacity-60'
                    : 'border-stone-200 bg-white text-stone-700 hover:border-amber-300 hover:bg-amber-50 active:scale-[0.98]'
                  }`}
              >
                <span className="mr-3 text-stone-400 text-sm">{String.fromCharCode(65 + i)}</span>
                {opt.text}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
