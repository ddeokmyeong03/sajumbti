export default function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100)
  return (
    <div className="w-full max-w-lg mx-auto mb-8">
      <div className="flex justify-between text-xs text-stone-400 mb-1">
        <span>진행률</span>
        <span>{pct}%</span>
      </div>
      <div className="w-full bg-stone-200 rounded-full h-2">
        <div
          className="bg-amber-400 h-2 rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
