const ALERTS = [
  {
    level: 'error',
    title: 'Overdue Subject Access Request — Record #SAR-2025-014',
    body: 'A tenant has requested access to their data under the Privacy Act. Response due 22 Apr 2025 — now 7 days overdue. Action required immediately.',
    action: 'Respond Now',
  },
  {
    level: 'warning',
    title: 'Incorrect Record Flagged — TN-00291',
    body: 'Member Marcus Lee submitted a record flagged as potentially inaccurate. Pending moderation review before publication.',
    action: 'Review',
  },
  {
    level: 'warning',
    title: 'Annual Privacy Policy Review Due — 30 May 2025',
    body: 'Your platform privacy policy is scheduled for annual review. Update or confirm compliance with current APP guidelines.',
    action: 'Review Policy',
  },
]

const CHECKLIST = [
  { label: 'Privacy Policy published & current',    pass: true  },
  { label: 'Data encrypted at rest & in transit',   pass: true  },
  { label: 'Member consent forms active',            pass: true  },
  { label: 'Audit log retention (7 years) active',  pass: true  },
  { label: 'SAR response overdue — action needed',  pass: false },
  { label: 'Annual privacy review due soon',        pass: null  },
]

export default function CompliancePage() {
  return (
    <div className="flex flex-col gap-3.5">
      <div>
        <div className="section-title">Compliance Centre</div>
        <div className="section-sub">Privacy Act 1988 (Cth) compliance monitoring and data governance</div>
      </div>

      {/* Alerts */}
      <div className="flex flex-col gap-2">
        {ALERTS.map(({ level, title, body, action }) => {
          const isError = level === 'error'
          return (
            <div key={title} style={{
              background: isError ? '#fee2e2' : '#fffbeb',
              border: `1px solid ${isError ? '#fca5a5' : '#fde68a'}`,
              borderRadius: 9, padding: '0.9rem 1.1rem',
              display: 'flex', alignItems: 'flex-start', gap: 10
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={isError ? '#b91c1c' : '#a16207'} strokeWidth="2" style={{ flexShrink: 0, marginTop: 1 }}>
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: isError ? '#b91c1c' : '#a16207', marginBottom: 2 }}>{title}</div>
                <div style={{ fontSize: 11, color: isError ? '#7f1d1d' : '#78350f' }}>{body}</div>
              </div>
              <button className="btn" style={{ background: isError ? '#b91c1c' : 'transparent', color: isError ? '#fff' : '#a16207', border: isError ? 'none' : '1px solid #fde68a', whiteSpace: 'nowrap', fontSize: 10 }}>
                {action}
              </button>
            </div>
          )
        })}
      </div>

      {/* Checklist */}
      <div className="card p-5">
        <div style={{ fontSize: 12, fontWeight: 700, color: '#0c1a2e', marginBottom: 14 }}>Privacy Act Compliance Checklist</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {CHECKLIST.map(({ label, pass }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: pass === false ? '#b91c1c' : pass === null ? '#a16207' : '#2d3748' }}>
              {pass === true  && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>}
              {pass === false && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>}
              {pass === null  && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>}
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Data Requests */}
      <div className="card overflow-hidden">
        <div style={{ padding: '0.9rem 1.1rem', borderBottom: '1px solid #f0f2f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div className="section-title">Subject Access Requests (SARs)</div>
            <div className="section-sub">Must be resolved within 30 days under the Privacy Act</div>
          </div>
          <button className="btn btn-outline">New SAR</button>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>{['SAR ID','Requestor','Date Received','Due Date','Status','Action'].map(h => <th key={h} className="table-th">{h}</th>)}</tr>
          </thead>
          <tbody>
            {[
              { id:'#SAR-2025-014', name:'Dominic Farrell', received:'22 Mar 2025', due:'22 Apr 2025', status:'overdue' },
              { id:'#SAR-2025-011', name:'Sandra Okonkwo',  received:'10 Mar 2025', due:'10 Apr 2025', status:'active'  },
              { id:'#SAR-2025-009', name:'Priya Nair',      received:'01 Mar 2025', due:'01 Apr 2025', status:'paid'    },
            ].map(r => (
              <tr key={r.id}>
                <td className="table-td" style={{ fontFamily: 'monospace', fontSize: 10.5, color: '#6b7fa0' }}>{r.id}</td>
                <td className="table-td" style={{ fontWeight: 500 }}>{r.name}</td>
                <td className="table-td">{r.received}</td>
                <td className="table-td" style={{ color: r.status === 'overdue' ? '#ef4444' : '#2d3748', fontWeight: r.status === 'overdue' ? 600 : 400 }}>{r.due}</td>
                <td className="table-td">
                  <span className="badge" style={{ background: r.status === 'overdue' ? '#fee2e2' : r.status === 'active' ? '#fef9c3' : '#dcfce7', color: r.status === 'overdue' ? '#b91c1c' : r.status === 'active' ? '#a16207' : '#15803d' }}>
                    {r.status === 'paid' ? 'Resolved' : r.status.charAt(0).toUpperCase() + r.status.slice(1)}
                  </span>
                </td>
                <td className="table-td"><button className="btn btn-outline" style={{ padding: '3px 9px', fontSize: 10 }}>Respond</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
