'use client'
import { ReactNode } from 'react'

// ─── Result Badge ─────────────────────────────────────────────────────────────
const resultMap: Record<string, { bg: string; color: string; label: string }> = {
  clear:   { bg: '#dcfce7', color: '#15803d', label: 'Clear'   },
  caution: { bg: '#fef9c3', color: '#a16207', label: 'Caution' },
  review:  { bg: '#fee2e2', color: '#b91c1c', label: 'Review'  },
  success: { bg: '#dcfce7', color: '#15803d', label: 'Success' },
  paid:    { bg: '#dcfce7', color: '#15803d', label: 'Paid'    },
  pending: { bg: '#fef9c3', color: '#a16207', label: 'Pending' },
  flagged: { bg: '#fef9c3', color: '#a16207', label: 'Flagged' },
  active:  { bg: '#dcfce7', color: '#15803d', label: 'Active'  },
  overdue: { bg: '#fef9c3', color: '#a16207', label: 'Overdue' },
  open:    { bg: '#fee2e2', color: '#b91c1c', label: 'Open'    },
  review_d:{ bg: '#fef9c3', color: '#a16207', label: 'Under Review' },
}

export function StatusBadge({ status }: { status: string }) {
  const s = resultMap[status] ?? { bg: '#f0f2f6', color: '#6b7fa0', label: status }
  return (
    <span className="badge" style={{ background: s.bg, color: s.color }}>
      {s.label}
    </span>
  )
}

// ─── Avatar ───────────────────────────────────────────────────────────────────
const avatarColors = [
  { bg: '#e0e7ff', text: '#4f46e5' }, { bg: '#dbeafe', text: '#1d4ed8' },
  { bg: '#fce7f3', text: '#be185d' }, { bg: '#fef3c7', text: '#b45309' },
  { bg: '#dcfce7', text: '#15803d' }, { bg: '#ffe4e6', text: '#be123c' },
]

export function Avatar({ initials, size = 26 }: { initials: string; size?: number }) {
  const idx = (initials.charCodeAt(0) + (initials.charCodeAt(1) || 0)) % avatarColors.length
  const { bg, text } = avatarColors[idx]
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', background: bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.36, fontWeight: 800, color: text, flexShrink: 0,
    }}>
      {initials}
    </div>
  )
}

// ─── Source Badge ─────────────────────────────────────────────────────────────
export function SourceBadge({ source }: { source: string }) {
  const isEquifax = source === 'Equifax'
  return (
    <span className="badge" style={{
      background: isEquifax ? '#eff6ff' : '#f0fdf4',
      color: isEquifax ? '#1d4ed8' : '#15803d',
    }}>
      {source}
    </span>
  )
}

// ─── Plan Badge ───────────────────────────────────────────────────────────────
export function PlanBadge({ plan }: { plan: string }) {
  const isPro = plan === 'Pro'
  return (
    <span className="badge" style={{
      background: isPro ? '#06d6a015' : '#f8fafc',
      color: isPro ? '#059669' : '#64748b',
      border: isPro ? '1px solid #06d6a0' : '1px solid #e2e8f0',
    }}>
      {plan}
    </span>
  )
}

// ─── Score cell ───────────────────────────────────────────────────────────────
export function ScoreCell({ score }: { score: number }) {
  const color = score >= 700 ? '#15803d' : score >= 500 ? '#a16207' : '#b91c1c'
  return <span style={{ fontWeight: 700, color }}>{score}</span>
}

// ─── Section Header ───────────────────────────────────────────────────────────
export function SectionHeader({
  title, subtitle, children
}: { title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <div className="flex justify-between items-start">
      <div>
        <div className="section-title">{title}</div>
        {subtitle && <div className="section-sub">{subtitle}</div>}
      </div>
      {children && <div className="flex gap-2">{children}</div>}
    </div>
  )
}

// ─── Stat Card ────────────────────────────────────────────────────────────────
export function StatCard({
  label, value, sub, subColor, iconBg, iconBorder, icon: Icon,
}: {
  label: string; value: string | number; sub: string; subColor?: string;
  iconBg: string; iconBorder: string; icon: React.ElementType;
}) {
  return (
    <div className="card p-4">
      <div className="flex justify-between items-start mb-2">
        <div style={{ fontSize: 11, color: '#6b7fa0', fontWeight: 600 }}>{label}</div>
        <div style={{ width: 28, height: 28, borderRadius: 7, background: iconBg, border: `1px solid ${iconBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon size={13} />
        </div>
      </div>
      <div style={{ fontSize: 22, fontWeight: 800, color: '#0c1a2e', letterSpacing: '-0.02em' }}>{value}</div>
      <div style={{ fontSize: 10, color: subColor ?? '#6b7fa0', marginTop: 3 }}>{sub}</div>
    </div>
  )
}

// ─── Empty state ──────────────────────────────────────────────────────────────
export function EmptyState({ message }: { message: string }) {
  return (
    <div className="py-12 text-center text-sm text-[#9aa3b0]">{message}</div>
  )
}
