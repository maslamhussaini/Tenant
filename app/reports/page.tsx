import { tenantChecks } from '@/lib/data'
import { StatusBadge, SourceBadge } from '@/components/ui/shared'

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex justify-between items-start">
        <div>
          <div className="section-title">My Reports</div>
          <div className="section-sub">All Equifax checks and database queries run from your account</div>
        </div>
        <button className="btn btn-primary">Download All</button>
      </div>

      {/* Summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
        {[
          { label: 'Reports This Month',     value: '147',   color: '#0c1a2e' },
          { label: 'Total Reports All Time', value: '1,284', color: '#0c1a2e' },
          { label: 'High-Risk Results',      value: '23',    color: '#b91c1c' },
        ].map(({ label, value, color }) => (
          <div key={label} className="card p-4 text-center">
            <div style={{ fontSize: 24, fontWeight: 800, color }}>{value}</div>
            <div style={{ fontSize: 11, color: '#6b7fa0', marginTop: 3 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        <div style={{ padding: '0.9rem 1.1rem', borderBottom: '1px solid #f0f2f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="section-title">Report History</div>
          <div className="flex gap-2">
            <select className="form-input" style={{ width: 'auto', padding: '5px 10px', fontSize: 11 }}>
              <option>All Types</option><option>Equifax Check</option><option>Database Search</option>
            </select>
            <select className="form-input" style={{ width: 'auto', padding: '5px 10px', fontSize: 11 }}>
              <option>Last 30 Days</option><option>Last 90 Days</option><option>This Year</option><option>All Time</option>
            </select>
          </div>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>{['Report ID','Tenant','Type','Date','Outcome','Cost','Download'].map(h => <th key={h} className="table-th">{h}</th>)}</tr>
          </thead>
          <tbody>
            {tenantChecks.map(row => (
              <tr key={row.id}>
                <td className="table-td" style={{ fontFamily: 'monospace', color: '#6b7fa0', fontSize: 10.5 }}>#{row.id}</td>
                <td className="table-td" style={{ fontWeight: 500 }}>{row.name}</td>
                <td className="table-td"><SourceBadge source={row.source} /></td>
                <td className="table-td">{row.date}</td>
                <td className="table-td"><StatusBadge status={row.result} /></td>
                <td className="table-td" style={{ fontWeight: 600 }}>{row.cost}</td>
                <td className="table-td"><button className="btn btn-outline" style={{ padding: '3px 9px', fontSize: 10 }}>PDF</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ padding: '10px 12px', borderTop: '1px solid #f0f2f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 11, color: '#9aa3b0' }}>Showing {tenantChecks.length} of 1,284 reports</div>
          <div className="flex gap-1.5">
            <button className="btn btn-outline" style={{ padding: '4px 10px', fontSize: 11 }}>← Prev</button>
            <button className="btn btn-outline" style={{ padding: '4px 10px', fontSize: 11 }}>Next →</button>
          </div>
        </div>
      </div>
    </div>
  )
}
