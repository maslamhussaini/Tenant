'use client'
import { usePathname, useRouter } from 'next/navigation'
import { Bell, Plus } from 'lucide-react'

const titleMap: Record<string, string> = {
  '/dashboard':    'Dashboard',
  '/search':       'Tenant Search',
  '/addrecord':    'Add Tenant Record',
  '/reports':      'My Reports',
  '/members':      'Members Directory',
  '/compliance':   'Compliance Centre',
  '/audit':        'Audit Log',
  '/disputes':     'Dispute Management',
  '/subscription': 'Subscription & Billing',
  '/settings':     'Account Settings',
}

export default function Topbar() {
  const pathname = usePathname()
  const router   = useRouter()
  const title    = titleMap[pathname] ?? 'Dashboard'

  return (
    <header style={{
      background: '#fff', borderBottom: '1px solid #e5e8ef',
      padding: '0 1.25rem', height: 52, display: 'flex',
      alignItems: 'center', justifyContent: 'space-between', flexShrink: 0
    }}>
      <div>
        <div style={{ fontWeight: 700, fontSize: 14, color: '#1a1d23' }}>{title}</div>
        <div style={{ fontSize: 10.5, color: '#9aa3b0' }}>Wednesday, 29 April 2025 · Welcome back, Mr. Essa</div>
      </div>

      <div className="flex items-center gap-2.5">
        <button className="btn btn-outline relative" style={{ padding: '6px 10px' }}>
          <Bell size={15} />
          <span style={{
            position: 'absolute', top: 4, right: 4,
            width: 8, height: 8, borderRadius: '50%',
            background: '#ef4444', border: '2px solid #fff'
          }} />
        </button>

        <button
          className="btn btn-primary"
          onClick={() => router.push('/search')}
        >
          <Plus size={12} /> New Tenant Check
        </button>
      </div>
    </header>
  )
}
