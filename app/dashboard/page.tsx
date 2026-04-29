import { Search, Users, AlertTriangle, ShieldCheck, TrendingUp } from 'lucide-react'
import { tenantChecks, activityFeed } from '@/lib/data'
import { StatusBadge, ScoreCell, Avatar } from '@/components/ui/shared'

const STATS = [
  { label: 'Checks This Month', value: '1,284', sub: '+12% vs last month', subColor: '#10b981', iconBg: '#e6fff8', iconBorder: '#a7f3d0', icon: Search },
  { label: 'Database Records',  value: '34,912',sub: '+208 new this week',  subColor: undefined,  iconBg: '#eff6ff', iconBorder: '#bfdbfe', icon: Users },
  { label: 'Flagged Alerts',    value: '47',    sub: '3 require action',    subColor: '#ef4444',  iconBg: '#fffbeb', iconBorder: '#fde68a', icon: AlertTriangle },
  { label: 'Active Members',    value: '2,841', sub: '+34 joined this month',subColor:'#22c55e',  iconBg: '#f0fdf4', iconBorder: '#bbf7d0', icon: ShieldCheck },
]

const ACTIVITY_ICON_SVG: Record<string, string> = {
  check:   '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>',
  add:     '<path d="M12 5v14M5 12h14"/>',
  dispute: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
  payment: '<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>',
  member:  '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>',
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-3.5">

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }}>
        {STATS.map(({ label, value, sub, subColor, iconBg, iconBorder, icon: Icon }) => (
          <div key={label} className="card p-4">
            <div className="flex justify-between items-start mb-2">
              <div style={{ fontSize: 11, color: '#6b7fa0', fontWeight: 600 }}>{label}</div>
              <div style={{ width: 28, height: 28, borderRadius: 7, background: iconBg, border: `1px solid ${iconBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={13} />
              </div>
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#0c1a2e', letterSpacing: '-0.02em' }}>{value}</div>
            <div style={{ fontSize: 10, color: subColor ?? '#6b7fa0', marginTop: 3 }}>{sub}</div>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 310px', gap: 14 }}>

        {/* Recent checks */}
        <div className="card overflow-hidden">
          <div style={{ padding: '0.9rem 1.1rem', borderBottom: '1px solid #f0f2f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div className="section-title">Recent Tenant Checks</div>
              <div className="section-sub">Equifax credit + identity screening</div>
            </div>
            <button className="btn btn-outline text-xs">Export CSV</button>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['Tenant', 'DOB', 'Date', 'Score', 'Result', 'Source'].map(h => (
                  <th key={h} className="table-th">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tenantChecks.slice(0, 6).map(row => (
                <tr key={row.id}>
                  <td className="table-td">
                    <div className="flex items-center gap-2">
                      <Avatar initials={row.initials} size={25} />
                      <span style={{ fontWeight: 500 }}>{row.name}</span>
                    </div>
                  </td>
                  <td className="table-td text-[#6b7fa0]">{row.dob}</td>
                  <td className="table-td text-[#6b7fa0]">{row.date}</td>
                  <td className="table-td"><ScoreCell score={row.score} /></td>
                  <td className="table-td"><StatusBadge status={row.result} /></td>
                  <td className="table-td">
                    <span className="badge" style={{ background: row.source === 'Equifax' ? '#eff6ff' : '#f0fdf4', color: row.source === 'Equifax' ? '#1d4ed8' : '#15803d' }}>
                      {row.source}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-3">

          {/* Subscription card */}
          <div style={{ background: '#0c1a2e', borderRadius: 11, padding: '1.1rem', color: '#fff' }}>
            <div className="flex justify-between items-start mb-2.5">
              <div style={{ fontSize: 11, color: '#4a7090', fontWeight: 500 }}>Current Plan</div>
              <span className="badge" style={{ background: '#06d6a0', color: '#0c1a2e', fontSize: 9 }}>ACTIVE</span>
            </div>
            <div style={{ fontSize: 19, fontWeight: 800, marginBottom: 2 }}>Pro Plan</div>
            <div style={{ fontSize: 10.5, color: '#4a7090', marginBottom: 12 }}>$149/mo · Renews 15 Jun 2025</div>
            <div className="flex flex-col gap-1.5 mb-3">
              {['Unlimited Equifax checks', 'Full database access', 'Dispute & audit tools', 'Priority support'].map(f => (
                <div key={f} style={{ fontSize: 10.5, color: '#a0c4e0' }}>✓ {f}</div>
              ))}
            </div>
            <a href="/subscription" className="btn" style={{ width: '100%', justifyContent: 'center', background: '#06d6a015', border: '1px solid #06d6a0', color: '#06d6a0', fontSize: 11 }}>
              Manage Subscription
            </a>
          </div>

          {/* Activity feed */}
          <div className="card flex-1">
            <div style={{ padding: '0.8rem 1rem', borderBottom: '1px solid #f0f2f6' }}>
              <div className="section-title">Recent Activity</div>
            </div>
            <div>
              {activityFeed.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 9, padding: '7px 1rem', alignItems: 'flex-start', borderBottom: i < activityFeed.length - 1 ? '1px solid #f8f9fb' : 'none' }}>
                  <div style={{ width: 26, height: 26, borderRadius: '50%', background: item.color + '1a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2" dangerouslySetInnerHTML={{ __html: ACTIVITY_ICON_SVG[item.type] }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 11, fontWeight: 600 }}>{item.action}</div>
                    <div style={{ fontSize: 10, color: '#9aa3b0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.subject}</div>
                  </div>
                  <div style={{ fontSize: 9.5, color: '#b0bac8', whiteSpace: 'nowrap', flexShrink: 0 }}>{item.time}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
