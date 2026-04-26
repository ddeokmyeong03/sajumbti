export default function Intro({ onStart }) {
  const symbols = ['🌲','🌸','☀️','🕯️','⛰️','🌍','⚔️','💎','🌊','💧']

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative overflow-hidden">
      {/* 배경 심볼 */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-10">
        {symbols.map((s, i) => (
          <span
            key={i}
            className="absolute text-4xl"
            style={{
              top: `${10 + (i * 9) % 80}%`,
              left: `${5 + (i * 19) % 90}%`,
            }}
          >
            {s}
          </span>
        ))}
      </div>

      <div className="relative z-10">
        <div className="mb-6 text-7xl">🌿</div>
        <h1 className="text-4xl font-bold text-stone-800 mb-3 tracking-tight">
          사주기질 테스트
        </h1>
        <p className="text-stone-500 text-sm mb-1">생년월일로 나의 일간을 계산하고</p>
        <p className="text-stone-500 text-sm mb-10">
          40가지 사주기질 캐릭터 중 <span className="text-amber-600 font-semibold">나의 유형</span>을 찾아보세요
        </p>

        {/* 흐름 */}
        <div className="flex gap-4 mb-10 text-xs text-stone-500 justify-center">
          <Step icon="📅" label="생년월일 입력" />
          <Arrow />
          <Step icon="❓" label="질문 10개" />
          <Arrow />
          <Step icon="✨" label="캐릭터 공개" />
        </div>

        <button
          onClick={onStart}
          className="bg-amber-500 hover:bg-amber-600 active:scale-95 transition-all text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-lg"
        >
          테스트 시작하기
        </button>

        <div className="mt-6 flex gap-6 justify-center text-xs text-stone-400">
          <span>⏱ 약 3분 소요</span>
          <span>🎯 40가지 유형</span>
        </div>
      </div>
    </div>
  )
}

function Step({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-2xl shadow-sm">
        {icon}
      </div>
      <span>{label}</span>
    </div>
  )
}

function Arrow() {
  return <div className="text-stone-300 self-center text-lg">›</div>
}
