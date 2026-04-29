export default function AddRecordPage() {
  return (
    <div className="flex flex-col gap-3.5">
      <div>
        <div className="section-title">Add Tenant Record</div>
        <div className="section-sub">Contribute a tenancy record to the shared Triangletech database</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>

        {/* Personal Details */}
        <div className="card p-5">
          <div style={{ fontSize: 12, fontWeight: 700, color: '#0c1a2e', marginBottom: 12, paddingBottom: 8, borderBottom: '1px solid #f0f2f6' }}>Personal Details</div>
          <div className="flex flex-col gap-2.5">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div><label className="form-label">First Name *</label><input className="form-input" placeholder="Given name" /></div>
              <div><label className="form-label">Last Name *</label><input className="form-input" placeholder="Surname" /></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div><label className="form-label">Date of Birth *</label><input className="form-input" type="date" /></div>
              <div><label className="form-label">Gender</label>
                <select className="form-input"><option>Prefer not to say</option><option>Male</option><option>Female</option><option>Non-binary</option></select>
              </div>
            </div>
            <div><label className="form-label">Email Address</label><input className="form-input" type="email" placeholder="tenant@email.com" /></div>
            <div><label className="form-label">Phone Number</label><input className="form-input" type="tel" placeholder="+61 4XX XXX XXX" /></div>
            <div><label className="form-label">Driver Licence / ID No.</label><input className="form-input" placeholder="Optional — for identity matching" /></div>
          </div>
        </div>

        {/* Tenancy Details */}
        <div className="card p-5">
          <div style={{ fontSize: 12, fontWeight: 700, color: '#0c1a2e', marginBottom: 12, paddingBottom: 8, borderBottom: '1px solid #f0f2f6' }}>Tenancy Details</div>
          <div className="flex flex-col gap-2.5">
            <div><label className="form-label">Property Address *</label><input className="form-input" placeholder="Full street address" /></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div><label className="form-label">Suburb</label><input className="form-input" placeholder="Suburb" /></div>
              <div><label className="form-label">State</label>
                <select className="form-input">{['NSW','VIC','QLD','WA','SA','TAS','ACT','NT'].map(s => <option key={s}>{s}</option>)}</select>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div><label className="form-label">Tenancy Start *</label><input className="form-input" type="date" /></div>
              <div><label className="form-label">Tenancy End</label><input className="form-input" type="date" /></div>
            </div>
            <div><label className="form-label">Weekly Rent (AUD)</label><input className="form-input" type="number" placeholder="e.g. 650" /></div>
            <div><label className="form-label">Tenancy Outcome *</label>
              <select className="form-input">
                <option>Select outcome...</option>
                <option>Completed — No Issues</option>
                <option>Early Exit — Mutual Agreement</option>
                <option>Eviction — Rent Arrears</option>
                <option>Eviction — Property Damage</option>
                <option>Eviction — Anti-social Behaviour</option>
                <option>Bond Dispute — Tribunal</option>
              </select>
            </div>
          </div>
        </div>

        {/* Incident Notes */}
        <div className="card p-5">
          <div style={{ fontSize: 12, fontWeight: 700, color: '#0c1a2e', marginBottom: 12, paddingBottom: 8, borderBottom: '1px solid #f0f2f6' }}>Incident Notes</div>
          <div className="flex flex-col gap-2.5">
            <div><label className="form-label">Arrears Amount (AUD)</label><input className="form-input" type="number" placeholder="0.00 — leave blank if none" /></div>
            <div><label className="form-label">Damage Description</label>
              <textarea className="form-input" rows={3} placeholder="Describe any damage to property (optional)" style={{ resize: 'vertical' }} />
            </div>
            <div><label className="form-label">Tribunal / VCAT Reference</label><input className="form-input" placeholder="e.g. VCAT-2024-00312" /></div>
            <div>
              <label className="form-label">Supporting Documents</label>
              <div style={{ border: '1px dashed #dde1ea', borderRadius: 7, padding: 14, textAlign: 'center', color: '#9aa3b0', fontSize: 11 }}>
                Drop files here or <span style={{ color: '#06d6a0', cursor: 'pointer', fontWeight: 600 }}>browse</span><br />
                <span style={{ fontSize: 10 }}>PDF, JPG, PNG up to 10MB each</span>
              </div>
            </div>
          </div>
        </div>

        {/* Declaration */}
        <div className="card p-5">
          <div style={{ fontSize: 12, fontWeight: 700, color: '#0c1a2e', marginBottom: 12, paddingBottom: 8, borderBottom: '1px solid #f0f2f6' }}>Declaration &amp; Privacy</div>
          <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 7, padding: '10px 12px', fontSize: 11, color: '#92400e', marginBottom: 12, lineHeight: 1.6 }}>
            <strong>Important:</strong> By submitting this record, you confirm that the information is accurate, lawfully collected, and submitted in compliance with the <em>Privacy Act 1988 (Cth)</em> and applicable state tenancy laws. False or misleading records may result in account suspension.
          </div>
          <div className="flex flex-col gap-2 mb-4">
            {[
              'I confirm the tenant was formally notified that this record may be shared.',
              'I confirm I am the lawful landlord or authorised agent for this property.',
              'I accept Triangletech\'s data contribution terms and conditions.',
            ].map(text => (
              <label key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 11, fontWeight: 400, color: '#2d3748', cursor: 'pointer' }}>
                <input type="checkbox" style={{ marginTop: 2, flexShrink: 0 }} /> {text}
              </label>
            ))}
          </div>
          <div className="flex gap-2">
            <button className="btn btn-outline flex-1 justify-center">Save Draft</button>
            <button className="btn btn-primary flex-1 justify-center">Submit Record</button>
          </div>
        </div>

      </div>
    </div>
  )
}
