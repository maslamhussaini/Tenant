import { auditLog } from '@/lib/data'

const TYPE_STYLES: Record<string, { bg: string; color: string }> = {
  'Equifax Check':   { bg: '#eff6ff', color: '#1d4ed8' },
  'DB Search':       { bg: '#f0fdf4', color: '#15803d' },
  'Record Added':    { bg: '#fef9c3', color: '#a16207' },
  'Record Modified': { bg: '#fef9c3', color: '#a16207' },
  'Login':           { bg: '#f3e8ff', color: '#7e22ce' },
  'Export':          { bg: '#fee2e2', color: '#b91c1c' },
}

const STATUS_STYLES: Record<string, { bg: string; color: string; label: string }> = {
  success: { bg: '#dcfce7', color: '#15803d', label: 'Success' },
  pending: { bg: '#fef9c3', color: '#a16207', label: 'Pending' },
  flagged: { bg: '#fef9c3', color: '#a16207', label: 'Flagged' },
}

export default function AuditPage() {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex justify-between items-start">
        <div>
          <div className="section-title">Audit Log</div>
          <div className="section-sub">Immutable record of all platform actions — retained for 7 years per regulatory requirements</div>
        </div>
        <button className="btn btn-outline">Export Log</button>
      </div>

      <div className="card overflow-hidden">
        <div style={{ padding: '0.9rem 1.1rem', borderBottom: '1px solid #f0f2f6', display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          <input className="form-input" type="text" placeholder="Search audit log..." style={{ width: 250 }} />
          <select className="form-input" style={{ width: 'auto', padding: '5px 10px', fontSize: 11 }}>
            <option>All Event Types</option>
            {Object.keys(TYPE_STYLES).map(t => <option key={t}>{t}</option>)}
          </select>
          <select className="form-input" style={{ width: 'auto', padding: '5px 10px', fontSize: 11 }}>
            <option>All Users</option><option>Mr. Essa</option><option>System</option>
          </select>
          <select className="form-input" style={{ width: 'auto', padding: '5px 10px', fontSize: 11 }}>
            <option>Last 7 Days</option><option>Last 30 Days</option><option>Last 90 Days</option><option>All Time</option>
          </select>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>{['Timestamp','Event Type','User','Description','IP Address','Status'].map(h => <th key={h} className="table-th">{h}</th>)}</tr>
          </thead>
          <tbody>
            {auditLog.map((row, i) => {
              const typeStyle   = TYPE_STYLES[row.type]   ?? { bg: '#f0f2f6', color: '#6b7fa0' }
              const statusStyle = STATUS_STYLES[row.status] ?? STATUS_STYLES.pending
              return (
                <tr key={i}>
                  <td className="table-td" style={{ fontFamily: 'monospace', fontSize: 10.5 }}>{row.timestamp}</td>
                  <td className="table-td"><span className="badge" style={typeStyle}>{row.type}</span></td>
                  <td className="table-td" style={{ fontWeight: 500 }}>{row.user}</td>
                  <td className="table-td" style={{ maxWidth: 280, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.description}</td>
                  <td className="table-td" style={{ fontFamily: 'monospace', fontSize: 10.5, color: '#9aa3b0' }}>{row.ip}</td>
                  <td className="table-td"><span className="badge" style={{ background: statusStyle.bg, color: statusStyle.color }}>{statusStyle.label}</span></td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <div style={{ padding: '10px 12px', borderTop: '1px solid #f0f2f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 11, color: '#9aa3b0' }}>Showing {auditLog.length} of 14,832 entries</div>
          <div className="flex gap-1.5">
            <button className="btn btn-outline" style={{ padding: '4px 10px', fontSize: 11 }}>← Prev</button>
            <button className="btn btn-outline" style={{ padding: '4px 10px', fontSize: 11 }}>Next →</button>
          </div>
        </div>
      </div>
    </div>
  )
}
