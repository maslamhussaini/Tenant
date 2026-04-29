import { disputes } from '@/lib/data'

export default function DisputesPage() {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex justify-between items-start">
        <div>
          <div className="section-title">Dispute Management</div>
          <div className="section-sub">Tenants may challenge the accuracy of records. All disputes must be reviewed within 30 days.</div>
        </div>
        <button className="btn btn-outline">Download Report</button>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
        {[
          { label: 'Open Disputes',    value: 4,  color: '#b91c1c', border: '#ef4444' },
          { label: 'Under Review',     value: 2,  color: '#a16207', border: '#f59e0b' },
          { label: 'Resolved (YTD)',   value: 18, color: '#15803d', border: '#22c55e' },
        ].map(({ label, value, color, border }) => (
          <div key={label} className="card p-4 text-center" style={{ borderTop: `3px solid ${border}` }}>
            <div style={{ fontSize: 22, fontWeight: 800, color }}>{value}</div>
            <div style={{ fontSize: 11, color: '#6b7fa0', marginTop: 3 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        <div style={{ padding: '0.9rem 1.1rem', borderBottom: '1px solid #f0f2f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div className="section-title">Active Disputes</div>
            <div className="section-sub">Ordered by urgency</div>
          </div>
          <select className="form-input" style={{ width: 'auto', padding: '5px 10px', fontSize: 11 }}>
            <option>All Statuses</option><option>Open</option><option>Under Review</option>
          </select>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>{['Dispute ID','Tenant','Record','Lodged','Grounds','Due Date','Status','Action'].map(h => <th key={h} className="table-th">{h}</th>)}</tr>
          </thead>
          <tbody>
            {disputes.map(d => (
              <tr key={d.id}>
                <td className="table-td" style={{ fontFamily: 'monospace', color: '#6b7fa0', fontSize: 10.5 }}>{d.id}</td>
                <td className="table-td" style={{ fontWeight: 500 }}>{d.tenant}</td>
                <td className="table-td" style={{ fontFamily: 'monospace', fontSize: 10.5 }}>{d.record}</td>
                <td className="table-td">{d.lodged}</td>
                <td className="table-td" style={{ maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{d.grounds}</td>
                <td className="table-td" style={{ color: d.urgent ? '#ef4444' : '#2d3748', fontWeight: d.urgent ? 600 : 400 }}>{d.due}</td>
                <td className="table-td">
                  <span className="badge" style={{
                    background: d.status === 'open' ? '#fee2e2' : '#fef9c3',
                    color: d.status === 'open' ? '#b91c1c' : '#a16207',
                  }}>
                    {d.status === 'review' ? 'Under Review' : 'Open'}
                  </span>
                </td>
                <td className="table-td"><button className="btn btn-outline" style={{ padding: '3px 9px', fontSize: 10 }}>Review</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
