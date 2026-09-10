// StatusPill — a small live/idle/complete indicator.
// Echoes the status-tracking pattern (In Cabin / On Rest / Offline) from the
// Doctora project, reused here as the site's own visual language.

const STATES = {
  live: { dot: 'bg-live', text: 'text-live', label: 'Live' },
  idle: { dot: 'bg-idle', text: 'text-idle', label: 'Idle' },
  complete: { dot: 'bg-idle', text: 'text-idle', label: 'Shipped' },
}

export default function StatusPill({ status = 'complete', label, className = '' }) {
  const state = STATES[status] ?? STATES.complete
  const text = label ?? state.label

  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wide ${className}`}
    >
      <span className="relative flex h-2 w-2">
        {status === 'live' && (
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full ${state.dot} opacity-50`}
          />
        )}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${state.dot}`} />
      </span>
      <span className={state.text}>{text}</span>
    </span>
  )
}
