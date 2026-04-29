import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import Topbar  from '@/components/Topbar'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Triangletech – Landlord Portal',
  description: 'Private landlord database platform with Equifax integration',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans`}>
        <div className="flex h-screen overflow-hidden bg-background">
          <Sidebar />
          <main className="flex-1 flex flex-col overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <Topbar />
            <div className="flex-1 overflow-auto p-6 z-10 custom-scrollbar">
              <div className="max-w-7xl mx-auto">
                {children}
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
