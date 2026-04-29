import { billingHistory } from '@/lib/data'

const PLANS = [
  {
    name: 'Basic',
    price: '$79',
    features: ['50 database searches/month', '10 Equifax checks/month', 'Add up to 100 records/month', 'Standard support'],
    current: false,
  },
  {
    name: 'Pro',
    price: '$149',
    features: ['Unlimited database searches', 'Unlimited Equifax checks', 'Add up to 500 records/month', 'Full dispute & audit tools', 'CSV/PDF exports', 'Priority support'],
    current: true,
  },
  {
    name: 'Enterprise',
    price: '$349',
    features: ['Everything in Pro', 'Unlimited record submissions', 'Dedicated account manager', 'API access', 'Custom SLA agreement', 'White-label option'],
    current: false,
  },
]

export default function SubscriptionPage() {
  return (
    <div className="flex flex-col gap-3.5">
      <div>
        <div className="section-title">Subscription & Billing</div>
        <div className="section-sub">Manage your Triangletech plan, payment method, and billing history</div>
      </div>

      {/* Plan comparison */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
        {PLANS.map(plan => (
          <div key={plan.name} className="card p-5" style={{ borderTop: plan.current ? '3px solid #06d6a0' : '3px solid transparent', position: 'relative' }}>
            {plan.current && (
              <span className="badge" style={{ background: '#06d6a0', color: '#0c1a2e', fontSize: 9, position: 'absolute', top: 12, right: 12 }}>CURRENT</span>
            )}
            <div style={{ fontSize: 16, fontWeight: 800, color: '#0c1a2e', marginBottom: 4 }}>{plan.name} Plan</div>
            <div style={{ fontSize: 26, fontWeight: 800, color: '#0c1a2e', marginBottom: 2 }}>
              {plan.price}<span style={{ fontSize: 12, fontWeight: 400, color: '#6b7fa0' }}>/month</span>
            </div>
            <div style={{ marginTop: 12, marginBottom: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {plan.features.map(f => (
                <div key={f} style={{ fontSize: 11, color: '#4a5568', display: 'flex', gap: 6, alignItems: 'flex-start' }}>
                  <span style={{ color: '#06d6a0', flexShrink: 0 }}>✓</span> {f}
                </div>
              ))}
            </div>
            <button className="btn" style={{
              width: '100%', justifyContent: 'center',
              background: plan.current ? '#06d6a0' : 'transparent',
              color: plan.current ? '#fff' : '#6b7fa0',
              border: plan.current ? 'none' : '1px solid #e5e8ef',
              fontSize: 11,
            }}>
              {plan.current ? 'Current Plan' : 'Switch to ' + plan.name}
            </button>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>

        {/* Payment method */}
        <div className="card p-5">
          <div style={{ fontSize: 12, fontWeight: 700, color: '#0c1a2e', marginBottom: 12, paddingBottom: 8, borderBottom: '1px solid #f0f2f6' }}>Payment Method</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 10, border: '1px solid #e5e8ef', borderRadius: 8, marginBottom: 10 }}>
            <div style={{ background: '#1434cb', color: '#fff', borderRadius: 5, padding: '4px 8px', fontSize: 10, fontWeight: 900, letterSpacing: '0.05em' }}>PAYPAL</div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600 }}>essa.payments@gmail.com</div>
              <div style={{ fontSize: 10, color: '#9aa3b0' }}>PayPal account · Primary</div>
            </div>
            <span className="badge" style={{ background: '#dcfce7', color: '#15803d', marginLeft: 'auto' }}>Active</span>
          </div>
          <div style={{ background: '#f8f9fb', border: '1px solid #e5e8ef', borderRadius: 8, padding: '10px 12px', fontSize: 11, color: '#6b7fa0', marginBottom: 10 }}>
            <strong style={{ color: '#1a1d23' }}>Next Billing:</strong> $149.00 on 15 June 2025 via PayPal
          </div>
          <div className="flex gap-2">
            <button className="btn btn-outline flex-1 justify-center" style={{ fontSize: 11 }}>Update Payment</button>
            <button className="btn btn-outline flex-1 justify-center" style={{ fontSize: 11 }}>Add PayPal</button>
          </div>
        </div>

        {/* Billing history */}
        <div className="card overflow-hidden">
          <div style={{ padding: '0.9rem 1.1rem', borderBottom: '1px solid #f0f2f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="section-title">Billing History</div>
            <button className="btn btn-outline" style={{ fontSize: 10 }}>Download All</button>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>{['Date','Description','Amount','Status','Receipt'].map(h => <th key={h} className="table-th">{h}</th>)}</tr>
            </thead>
            <tbody>
              {billingHistory.map(row => (
                <tr key={row.date}>
                  <td className="table-td">{row.date}</td>
                  <td className="table-td">{row.desc}</td>
                  <td className="table-td" style={{ fontWeight: 600 }}>{row.amount}</td>
                  <td className="table-td"><span className="badge" style={{ background: '#dcfce7', color: '#15803d' }}>Paid</span></td>
                  <td className="table-td"><button className="btn btn-outline" style={{ padding: '3px 9px', fontSize: 10 }}>PDF</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
