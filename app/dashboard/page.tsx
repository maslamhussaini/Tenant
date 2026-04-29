import { Search, Users, AlertTriangle, ShieldCheck, ArrowUpRight, Activity } from 'lucide-react'
import { tenantChecks, activityFeed } from '@/lib/data'
import { StatusBadge, ScoreCell, Avatar } from '@/components/ui/shared'

const STATS = [
  { label: 'Checks This Month', value: '1,284', sub: '+12% vs last month', subColor: 'text-emerald-500', iconBg: 'bg-brand/10', iconColor: 'text-brand', icon: Search },
  { label: 'Database Records',  value: '34,912',sub: '+208 new this week',  subColor: 'text-blue-500',  iconBg: 'bg-blue-500/10', iconColor: 'text-blue-500', icon: Users },
  { label: 'Flagged Alerts',    value: '47',    sub: '3 require action',    subColor: 'text-red-500',  iconBg: 'bg-red-500/10', iconColor: 'text-red-500', icon: AlertTriangle },
  { label: 'Active Members',    value: '2,841', sub: '+34 joined this month',subColor:'text-emerald-500',  iconBg: 'bg-emerald-500/10', iconColor: 'text-emerald-500', icon: ShieldCheck },
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
    <div className="flex flex-col gap-6 animate-fade-in">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-navy-900 text-white p-8 shadow-glass">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Welcome to your Landlord Hub</h2>
          <p className="text-navy-300 text-lg max-w-2xl">Access premium Equifax credit checks, report disputes, and ensure reliable tenancy outcomes across all your properties.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map(({ label, value, sub, subColor, iconBg, iconColor, icon: Icon }, i) => (
          <div key={label} className="card p-6 flex flex-col relative overflow-hidden group">
            <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-20 blur-2xl transition-all duration-500 group-hover:scale-150 ${iconBg}`} />
            <div className="flex justify-between items-start mb-4">
              <div className="text-sm text-navy-400 font-semibold tracking-wide uppercase">{label}</div>
              <div className={`w-10 h-10 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center shadow-inner`}>
                <Icon size={20} />
              </div>
            </div>
            <div className="text-4xl font-bold text-navy-900 tracking-tight mb-1">{value}</div>
            <div className={`text-xs font-medium flex items-center gap-1 ${subColor}`}>
              <ArrowUpRight size={14} /> {sub}
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Checks - Takes up 2 columns */}
        <div className="lg:col-span-2 card flex flex-col">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white/50 rounded-t-2xl">
            <div>
              <h3 className="section-title">Recent Tenant Checks</h3>
              <p className="section-sub">Equifax credit + identity screening</p>
            </div>
            <button className="btn btn-outline text-xs px-4 py-2 hover:bg-navy-50">Export CSV</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  {['Tenant', 'DOB', 'Date', 'Score', 'Result', 'Source'].map(h => (
                    <th key={h} className="table-th">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50/50">
                {tenantChecks.slice(0, 6).map(row => (
                  <tr key={row.id} className="group hover:bg-blue-50/20 transition-colors">
                    <td className="table-td">
                      <div className="flex items-center gap-3">
                        <Avatar initials={row.initials} size={32} />
                        <span className="font-semibold text-navy-800">{row.name}</span>
                      </div>
                    </td>
                    <td className="table-td font-medium">{row.dob}</td>
                    <td className="table-td font-medium">{row.date}</td>
                    <td className="table-td"><ScoreCell score={row.score} /></td>
                    <td className="table-td"><StatusBadge status={row.result} /></td>
                    <td className="table-td">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${row.source === 'Equifax' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'bg-emerald-50 text-emerald-600 border border-emerald-100'}`}>
                        {row.source}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Sidebar Area */}
        <div className="flex flex-col gap-6">
          {/* Pro Plan Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 text-white p-6 shadow-glass border border-navy-700">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ShieldCheck size={100} />
            </div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="text-xs text-navy-300 font-semibold uppercase tracking-wider">Current Plan</div>
              <span className="bg-brand text-navy-900 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest shadow-sm">Active</span>
            </div>
            <div className="text-3xl font-bold mb-1 relative z-10">Pro Plan</div>
            <div className="text-xs text-navy-300 mb-6 relative z-10">$149/mo · Renews 15 Jun 2026</div>
            <div className="flex flex-col gap-2.5 mb-6 relative z-10">
              {['Unlimited Equifax checks', 'Full database access', 'Dispute & audit tools', 'Priority support'].map(f => (
                <div key={f} className="text-sm text-navy-100 flex items-center gap-2 font-medium">
                  <div className="w-4 h-4 rounded-full bg-brand/20 flex items-center justify-center text-brand">✓</div>
                  {f}
                </div>
              ))}
            </div>
            <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-all relative z-10">
              Manage Subscription
            </button>
          </div>

          {/* Activity Feed */}
          <div className="card flex-1 flex flex-col">
            <div className="p-5 border-b border-gray-100 bg-white/50 rounded-t-2xl flex items-center gap-2">
              <Activity size={18} className="text-brand" />
              <h3 className="section-title text-lg">Activity Feed</h3>
            </div>
            <div className="p-2 flex-1 overflow-y-auto custom-scrollbar max-h-80">
              {activityFeed.map((item, i) => (
                <div key={i} className="flex gap-4 p-3 hover:bg-gray-50/50 rounded-xl transition-colors cursor-default">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" dangerouslySetInnerHTML={{ __html: ACTIVITY_ICON_SVG[item.type] }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-navy-800">{item.action}</div>
                    <div className="text-xs text-navy-400 truncate mt-0.5 font-medium">{item.subject}</div>
                  </div>
                  <div className="text-[10px] text-navy-300 font-semibold shrink-0 pt-0.5">{item.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
