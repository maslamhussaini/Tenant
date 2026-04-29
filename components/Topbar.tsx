'use client'
import { usePathname, useRouter } from 'next/navigation'
import { Bell, Plus, Search } from 'lucide-react'

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
    <header className="sticky top-0 z-50 bg-surface/60 backdrop-blur-xl border-b border-white/20 h-20 px-8 flex items-center justify-between shrink-0 shadow-sm">
      <div className="flex items-center gap-6">
        <div>
          <h1 className="text-2xl font-bold text-navy-900 tracking-tight">{title}</h1>
          <p className="text-sm font-medium text-navy-400 mt-0.5">Welcome back, Mr. Essa · Wednesday, 29 April 2026</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block mr-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400" size={16} />
          <input 
            type="text" 
            placeholder="Quick search..." 
            className="pl-9 pr-4 py-2 bg-navy-50/50 border border-transparent focus:border-brand/30 focus:bg-white rounded-full text-sm font-medium outline-none transition-all w-64"
          />
        </div>

        <button className="relative p-2.5 rounded-full text-navy-500 hover:text-navy-900 hover:bg-navy-50 transition-colors">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-white animate-pulse" />
        </button>

        <button
          className="btn btn-primary animate-pulse-glow rounded-full px-5"
          onClick={() => router.push('/search')}
        >
          <Plus size={16} /> <span className="font-bold">New Tenant Check</span>
        </button>
      </div>
    </header>
  )
}
