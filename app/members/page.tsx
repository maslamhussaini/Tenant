import { members } from '@/lib/data'
import { StatusBadge, PlanBadge, Avatar } from '@/components/ui/shared'

export default function MembersPage() {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex justify-between items-start">
        <div>
          <div className="section-title">Members Directory</div>
          <div className="section-sub">All subscribed landlords contributing to the Triangletech database</div>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-outline">Export List</button>
          <button className="btn btn-primary">Invite Member</button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }}>
        {[
          { label: 'Active Members', value: '2,841', color: '#0c1a2e' },
          { label: 'Pro Plan',       value: '1,204', color: '#0c1a2e' },
          { label: 'Basic Plan',     value: '1,637', color: '#0c1a2e' },
          { label: 'New This Month', value: '34',    color: '#22c55e' },
        ].map(({ label, value, color }) => (
          <div key={label} className="card p-4 text-center">
            <div style={{ fontSize: 22, fontWeight: 800, color }}>{value}</div>
            <div style={{ fontSize: 11, color: '#6b7fa0', marginTop: 3 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        <div style={{ padding: '0.9rem 1.1rem', borderBottom: '1px solid #f0f2f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="section-title">Member List</div>
          <div className="flex gap-2">
            <input className="form-input" type="text" placeholder="Search members..." style={{ width: 200 }} />
            <select className="form-input" style={{ width: 'auto', padding: '5px 10px', fontSize: 11 }}>
              <option>All Plans</option><option>Pro</option><option>Basic</option>
            </select>
          </div>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>{['Member','Company','Plan','Joined','Records Added','Checks Run','Status'].map(h => <th key={h} className="table-th">{h}</th>)}</tr>
          </thead>
          <tbody>
            {members.map(m => (
              <tr key={m.name}>
                <td className="table-td">
                  <div className="flex items-center gap-2">
                    <div style={{ width: 25, height: 25, borderRadius: '50%', background: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 800, color: m.textColor, flexShrink: 0 }}>
                      {m.initials}
                    </div>
                    <span style={{ fontWeight: m.name === 'Mr. Essa' ? 700 : 500 }}>{m.name}</span>
                    {m.name === 'Mr. Essa' && <span className="badge" style={{ background: '#06d6a015', color: '#059669', fontSize: 9 }}>You</span>}
                  </div>
                </td>
                <td className="table-td text-[#6b7fa0]">{m.company}</td>
                <td className="table-td"><PlanBadge plan={m.plan} /></td>
                <td className="table-td">{m.joined}</td>
                <td className="table-td" style={{ fontWeight: 600 }}>{m.records.toLocaleString()}</td>
                <td className="table-td">{m.checks.toLocaleString()}</td>
                <td className="table-td"><StatusBadge status={m.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
