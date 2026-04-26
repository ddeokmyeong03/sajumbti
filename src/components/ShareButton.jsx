import html2canvas from 'html2canvas'

export default function ShareButton({ cardRef, typeName }) {
  const handleSave = async () => {
    if (!cardRef.current) return
    try {
      const canvas = await html2canvas(cardRef.current, { scale: 2 })
      const link = document.createElement('a')
      link.download = `사주기질_${typeName}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (e) {
      alert('이미지 저장에 실패했습니다.')
    }
  }

  const handleShare = async () => {
    const url = window.location.href
    if (navigator.share) {
      await navigator.share({ title: `나의 사주기질: ${typeName}`, url })
    } else {
      await navigator.clipboard.writeText(url)
      alert('링크가 복사됐어요!')
    }
  }

  return (
    <div className="flex gap-3">
      <button
        onClick={handleSave}
        className="flex items-center gap-2 bg-stone-800 hover:bg-stone-700 active:scale-95 transition-all text-white px-5 py-3 rounded-xl text-sm font-medium"
      >
        📷 이미지 저장
      </button>
      <button
        onClick={handleShare}
        className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 active:scale-95 transition-all text-white px-5 py-3 rounded-xl text-sm font-medium"
      >
        🔗 공유하기
      </button>
    </div>
  )
}
