import { useState } from 'react'
import Intro from './pages/Intro'
import BirthInput from './pages/BirthInput'
import Quiz from './pages/Quiz'
import Result from './pages/Result'

// 페이지 상태: 'intro' | 'birth' | 'quiz' | 'result'
export default function App() {
  const [page, setPage] = useState('intro')
  const [ilgan, setIlgan] = useState(null)     // { name, key, hanja }
  const [answers, setAnswers] = useState([])    // ['NF', 'SJ', ...]
  const [result, setResult] = useState(null)    // { primary, secondary }

  const handleBirthDone = (ilganData) => {
    setIlgan(ilganData)
    setPage('quiz')
  }

  const handleQuizDone = (answerList) => {
    setAnswers(answerList)
    const score = { NF: 0, NT: 0, SJ: 0, SP: 0 }
    answerList.forEach((type) => score[type]++)
    const sorted = Object.entries(score).sort((a, b) => b[1] - a[1])
    setResult({ primary: sorted[0][0], secondary: sorted[1][0] })
    setPage('result')
  }

  const handleRestart = () => {
    setPage('intro')
    setIlgan(null)
    setAnswers([])
    setResult(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50">
      {page === 'intro' && <Intro onStart={() => setPage('birth')} />}
      {page === 'birth' && <BirthInput onDone={handleBirthDone} />}
      {page === 'quiz' && <Quiz onDone={handleQuizDone} />}
      {page === 'result' && (
        <Result ilgan={ilgan} result={result} answers={answers} onRestart={handleRestart} />
      )}
    </div>
  )
}
