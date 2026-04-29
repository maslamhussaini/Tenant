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
    <aside className="flex flex-col flex-shrink-0 w-[240px] bg-navy-900 border-r border-navy-800 relative z-20">
      
      {/* Glow effect */}
      <div className="absolute top-0 left-0 w-full h-32 bg-brand/10 blur-[50px] pointer-events-none" />

      {/* Logo */}
      <div className="px-6 py-8 border-b border-navy-800/50 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-brand rounded-xl flex items-center justify-center font-black text-lg text-navy-900 shadow-lg shadow-brand/20">
            ▲
          </div>
          <div>
            <div className="text-white font-bold text-[15px] tracking-tight">Triangletech</div>
            <div className="text-brand text-[9px] font-bold tracking-[0.15em] uppercase">Landlord Portal</div>
          </div>
        </div>
      </div>

      {/* User */}
      <div className="px-6 py-5 border-b border-navy-800/50 flex items-center gap-3 relative z-10">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-blue-500 flex items-center justify-center text-sm font-bold text-white shrink-0 shadow-lg shadow-brand/10 ring-2 ring-navy-800">
          ME
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-gray-100 text-sm font-bold truncate">Mr. Essa</div>
          <div className="text-brand/80 text-[10px] font-semibold uppercase tracking-wider">Pro Member</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 flex flex-col gap-6 overflow-y-auto custom-scrollbar relative z-10">
        {NAV_SECTIONS.map(section => (
          <div key={section.label} className="flex flex-col gap-1">
            <div className="text-[10px] text-navy-400 font-bold tracking-[0.1em] uppercase px-3 mb-1">
              {section.label}
            </div>
            {section.items.map(({ icon: Icon, label, href, badge }) => {
              const isActive = pathname === href || pathname.startsWith(href + '/')
              return (
                <button
                  key={href}
                  onClick={() => router.push(href)}
                  className={`nav-btn group ${isActive ? 'active' : ''}`}
                >
                  <Icon size={16} className={isActive ? 'text-brand' : 'text-navy-400 group-hover:text-white transition-colors'} />
                  <span className="flex-1">{label}</span>
                  {badge != null && (
                    <span className="bg-red-500 text-white text-[9px] font-bold rounded-full px-2 py-0.5 shadow-sm shadow-red-500/20">
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
      <div className="p-4 border-t border-navy-800/50 relative z-10 bg-navy-900/50 backdrop-blur-md">
        <button className="nav-btn w-full hover:bg-red-500/10 hover:text-red-400 group">
          <LogOut size={16} className="text-navy-400 group-hover:text-red-400 transition-colors" /> 
          <span className="font-semibold">Sign Out</span>
        </button>
      </div>
    </aside>
  )
}
