'use client'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard, Search, Plus, FileText, Users,
  ShieldCheck, CheckSquare, AlertCircle, CreditCard,
  Settings, LogOut
} from 'lucide-react'

const NAV_SECTIONS = [
  {
    label: 'Main Menu',
    items: [
      { icon: LayoutDashboard, label: 'Dashboard',          href: '/dashboard'    },
      { icon: Search,          label: 'Tenant Search',      href: '/search'       },
      { icon: Plus,            label: 'Add Tenant Record',  href: '/addrecord'    },
      { icon: FileText,        label: 'My Reports',         href: '/reports'      },
      { icon: Users,           label: 'Members',            href: '/members'      },
    ]
  },
  {
    label: 'Compliance',
    items: [
      { icon: ShieldCheck,  label: 'Compliance', href: '/compliance', badge: 3 },
      { icon: CheckSquare,  label: 'Audit Log',  href: '/audit'                 },
      { icon: AlertCircle,  label: 'Disputes',   href: '/disputes'              },
    ]
  },
  {
    label: 'Account',
    items: [
      { icon: CreditCard, label: 'Subscription', href: '/subscription' },
      { icon: Settings,   label: 'Settings',      href: '/settings'     },
    ]
  }
]

export default function Sidebar() {
  const pathname = usePathname()
  const router   = useRouter()

  return (
    <aside className="flex flex-col flex-shrink-0" style={{ width: 220, background: '#0c1a2e' }}>

      {/* Logo */}
      <div style={{ padding: '1.2rem 1rem 0.9rem', borderBottom: '1px solid #162337' }}>
        <div className="flex items-center gap-2">
          <div style={{
            width: 33, height: 33, background: '#06d6a0', borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 900, fontSize: 15, color: '#0c1a2e'
          }}>▲</div>
          <div>
            <div style={{ color: '#fff', fontWeight: 800, fontSize: 14, letterSpacing: '-0.02em' }}>Triangletech</div>
            <div style={{ color: '#2e4a66', fontSize: 9.5, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Landlord Portal</div>
          </div>
        </div>
      </div>

      {/* User */}
      <div style={{ padding: '0.9rem 1rem', borderBottom: '1px solid #162337', display: 'flex', alignItems: 'center', gap: 9 }}>
        <div style={{
          width: 33, height: 33, borderRadius: '50%',
          background: 'linear-gradient(135deg, #06d6a0, #0ea5e9)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, fontWeight: 800, color: '#fff', flexShrink: 0
        }}>ME</div>
        <div>
          <div style={{ color: '#e2ecf5', fontSize: 12.5, fontWeight: 600 }}>Mr. Essa</div>
          <div style={{ color: '#2e4a66', fontSize: 10 }}>Pro Member</div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '0.5rem 0.5rem', display: 'flex', flexDirection: 'column', gap: 2, overflowY: 'auto' }}>
        {NAV_SECTIONS.map(section => (
          <div key={section.label}>
            <div style={{ fontSize: 9, color: '#2e4a66', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '8px 11px 4px' }}>
              {section.label}
            </div>
            {section.items.map(({ icon: Icon, label, href, badge }) => {
              const isActive = pathname === href || pathname.startsWith(href + '/')
              return (
                <button
                  key={href}
                  onClick={() => router.push(href)}
                  className="nav-btn"
                  style={isActive ? { background: '#1e2f45', color: '#06d6a0', fontWeight: 600 } : {}}
                >
                  <Icon size={14} />
                  <span style={{ flex: 1 }}>{label}</span>
                  {badge != null && (
                    <span style={{ background: '#ef4444', color: '#fff', fontSize: 9, fontWeight: 800, borderRadius: 10, padding: '1px 6px' }}>
                      {badge}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        ))}
      </nav>

      {/* Sign out */}
      <div style={{ padding: '0.5rem', borderTop: '1px solid #162337' }}>
        <button className="nav-btn" style={{ color: '#2e4a66' }}>
          <LogOut size={13} /> Sign Out
        </button>
      </div>
    </aside>
  )
}
