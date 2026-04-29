const NOTIFICATIONS = [
  { label: 'Email on new Equifax result',      on: true  },
  { label: 'Dispute status updates',           on: true  },
  { label: 'Monthly billing receipts',         on: true  },
  { label: 'Compliance deadline reminders',    on: false },
  { label: 'New platform features & updates',  on: false },
]

function Toggle({ on }: { on: boolean }) {
  return (
    <div style={{ width: 36, height: 20, borderRadius: 10, background: on ? '#06d6a0' : '#dde1ea', position: 'relative', cursor: 'pointer', flexShrink: 0 }}>
      <div style={{ width: 16, height: 16, background: '#fff', borderRadius: '50%', position: 'absolute', top: 2, [on ? 'right' : 'left']: 2, transition: 'all 0.2s' }} />
    </div>
  )
}

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-3.5">
      <div>
        <div className="section-title">Account Settings</div>
        <div className="section-sub">Manage your profile, security, notifications and platform preferences</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>

        {/* Profile */}
        <div className="card p-5">
          <div style={{ fontSize: 12, fontWeight: 700, color: '#0c1a2e', marginBottom: 12, paddingBottom: 8, borderBottom: '1px solid #f0f2f6' }}>Profile Details</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'linear-gradient(135deg, #06d6a0, #0ea5e9)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 800, color: '#fff' }}>ME</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#0c1a2e' }}>Mr. Essa</div>
              <div style={{ fontSize: 11, color: '#9aa3b0' }}>essa.properties@gmail.com</div>
              <button className="btn btn-outline" style={{ marginTop: 4, fontSize: 10, padding: '3px 9px' }}>Change Avatar</button>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div><label className="form-label">Display Name</label><input className="form-input" defaultValue="Mr. Essa" /></div>
              <div><label className="form-label">Business Name</label><input className="form-input" defaultValue="Essa Properties" /></div>
            </div>
            <div><label className="form-label">Email Address</label><input className="form-input" type="email" defaultValue="essa.properties@gmail.com" /></div>
            <div><label className="form-label">Phone Number</label><input className="form-input" type="tel" defaultValue="+61 411 222 333" /></div>
            <div><label className="form-label">ABN</label><input className="form-input" defaultValue="51 824 753 556" /></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div><label className="form-label">State</label>
                <select className="form-input"><option>NSW</option><option selected>VIC</option><option>QLD</option><option>WA</option></select>
              </div>
              <div><label className="form-label">Postcode</label><input className="form-input" defaultValue="3000" /></div>
            </div>
            <button className="btn btn-primary" style={{ justifyContent: 'center' }}>Save Changes</button>
          </div>
        </div>

        {/* Security + Notifications */}
        <div className="flex flex-col gap-3">

          {/* Security */}
          <div className="card p-5">
            <div style={{ fontSize: 12, fontWeight: 700, color: '#0c1a2e', marginBottom: 12, paddingBottom: 8, borderBottom: '1px solid #f0f2f6' }}>Security</div>
            <div className="flex flex-col gap-2.5">
              <div><label className="form-label">Current Password</label><input className="form-input" type="password" defaultValue="••••••••••" /></div>
              <div><label className="form-label">New Password</label><input className="form-input" type="password" placeholder="Min 12 characters" /></div>
              <div><label className="form-label">Confirm Password</label><input className="form-input" type="password" placeholder="Repeat new password" /></div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', background: '#f8f9fb', borderRadius: 8 }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#1a1d23' }}>Two-Factor Authentication</div>
                  <div style={{ fontSize: 10, color: '#9aa3b0' }}>Adds a layer of login security</div>
                </div>
                <Toggle on={true} />
              </div>
              <button className="btn btn-primary" style={{ justifyContent: 'center' }}>Update Password</button>
            </div>
          </div>

          {/* Notifications */}
          <div className="card p-5">
            <div style={{ fontSize: 12, fontWeight: 700, color: '#0c1a2e', marginBottom: 12, paddingBottom: 8, borderBottom: '1px solid #f0f2f6' }}>Notifications</div>
            <div className="flex flex-col gap-2.5">
              {NOTIFICATIONS.map(({ label, on }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 11, color: '#2d3748' }}>{label}</span>
                  <Toggle on={on} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
