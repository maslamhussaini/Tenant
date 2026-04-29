import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import Topbar  from '@/components/Topbar'

export const metadata: Metadata = {
  title: 'Triangletech – Landlord Portal',
  description: 'Private landlord database platform with Equifax integration',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
          <Sidebar />
          <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <Topbar />
            <div style={{ flex: 1, overflow: 'auto', padding: '1.2rem' }}>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
