import { tenantChecks } from '@/lib/data'
import { StatusBadge, ScoreCell, SourceBadge, Avatar } from '@/components/ui/shared'

export default function SearchPage() {
  return (
    <div className="flex flex-col gap-3.5">
      <div>
        <div className="section-title">Tenant Search</div>
        <div className="section-sub">Search the Triangletech database or run a live Equifax credit &amp; identity check</div>
      </div>

      {/* Search form */}
      <div className="card p-5">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 12, marginBottom: 12 }}>
          <div><label className="form-label">First Name</label><input className="form-input" type="text" placeholder="e.g. Jordan" /></div>
          <div><label className="form-label">Last Name</label><input className="form-input" type="text" placeholder="e.g. Mitchell" /></div>
          <div><label className="form-label">Date of Birth</label><input className="form-input" type="date" /></div>
          <div><label className="form-label">State / Territory</label>
            <select className="form-input">
              {['All States','NSW','VIC','QLD','WA','SA','TAS','ACT','NT'].map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 12, marginBottom: 14 }}>
          <div><label className="form-label">Previous Address</label><input className="form-input" type="text" placeholder="Street address" /></div>
          <div><label className="form-label">Driver Licence No.</label><input className="form-input" type="text" placeholder="Optional" /></div>
          <div><label className="form-label">Check Type</label>
            <select className="form-input">
              {['Database Only','Equifax Full Check','Identity Verification'].map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '8px' }}>Run Search</button>
          </div>
        </div>
        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 7, padding: '9px 12px', fontSize: 11, color: '#15803d' }}>
          <strong>Equifax Integration Active</strong> — Credit and identity checks processed in real-time. Results typically returned within 30 seconds.
        </div>
      </div>

      {/* Results */}
      <div className="card overflow-hidden">
        <div style={{ padding: '0.9rem 1.1rem', borderBottom: '1px solid #f0f2f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div className="section-title">Search Results</div>
            <div className="section-sub">Showing {tenantChecks.length} of {tenantChecks.length} matches · Sorted by relevance</div>
          </div>
          <button className="btn btn-outline">Export Results</button>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>{['Name','DOB','Last Address','State','Credit Score','Result','Source','Action'].map(h => <th key={h} className="table-th">{h}</th>)}</tr>
          </thead>
          <tbody>
            {tenantChecks.map(row => (
              <tr key={row.id}>
                <td className="table-td">
                  <div className="flex items-center gap-2">
                    <Avatar initials={row.initials} size={25} />
                    <strong>{row.name}</strong>
                  </div>
                </td>
                <td className="table-td">{row.dob}</td>
                <td className="table-td text-[#6b7fa0]">{row.address}</td>
                <td className="table-td">{row.state}</td>
                <td className="table-td"><ScoreCell score={row.score} /></td>
                <td className="table-td"><StatusBadge status={row.result} /></td>
                <td className="table-td"><SourceBadge source={row.source} /></td>
                <td className="table-td"><button className="btn btn-outline" style={{ padding: '3px 9px', fontSize: 10 }}>View Full</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
