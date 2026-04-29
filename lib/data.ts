export const tenantChecks = [
  { id: 'RPT-20250428', name: 'Jordan Mitchell',  initials: 'JM', dob: '14/03/1988', date: '28 Apr 2025', score: 782, result: 'clear',   source: 'Equifax', cost: '$19.90', state: 'NSW', address: '22 Harbour View Rd, Bondi' },
  { id: 'RPT-20250427', name: 'Sandra Okonkwo',   initials: 'SO', dob: '22/07/1994', date: '27 Apr 2025', score: 541, result: 'caution', source: 'Equifax', cost: '$19.90', state: 'VIC', address: '14 Elm Street, Fitzroy' },
  { id: 'RPT-20250426', name: 'Peter Halverson',  initials: 'PH', dob: '05/11/1979', date: '26 Apr 2025', score: 710, result: 'clear',   source: 'Database', cost: 'Included', state: 'QLD', address: '8 Ridge Cres, Kelvin Grove' },
  { id: 'RPT-20250425', name: 'Mei-Ling Zhao',    initials: 'MZ', dob: '30/01/2000', date: '25 Apr 2025', score: 668, result: 'clear',   source: 'Database', cost: 'Included', state: 'VIC', address: '3/45 Park Blvd, Carlton' },
  { id: 'RPT-20250424', name: 'Dominic Farrell',  initials: 'DF', dob: '18/09/1985', date: '24 Apr 2025', score: 390, result: 'review',  source: 'Equifax', cost: '$19.90', state: 'VIC', address: '112 Flinders Lane, CBD' },
  { id: 'RPT-20250422', name: 'Alice Brennan',    initials: 'AB', dob: '09/04/1991', date: '22 Apr 2025', score: 730, result: 'clear',   source: 'Equifax', cost: '$19.90', state: 'NSW', address: '72 Ocean Drive, Manly' },
  { id: 'RPT-20250421', name: 'Raj Patel',        initials: 'RP', dob: '17/12/1986', date: '21 Apr 2025', score: 580, result: 'caution', source: 'Equifax', cost: '$19.90', state: 'WA',  address: '19 Sunset Ave, Fremantle' },
  { id: 'RPT-20250420', name: 'Nicole Tran',      initials: 'NT', dob: '03/08/1997', date: '20 Apr 2025', score: 695, result: 'clear',   source: 'Database', cost: 'Included', state: 'QLD', address: '55 Brunswick St, Fortitude Valley' },
]

export const members = [
  { initials: 'ME', name: 'Mr. Essa',       company: 'Essa Properties',         plan: 'Pro',   joined: 'Jan 2023', records: 312, checks: 1284, status: 'active', color: '#dbeafe', textColor: '#1d4ed8' },
  { initials: 'RP', name: 'Rebecca Park',   company: 'Ridgeline Properties Pty', plan: 'Pro',   joined: 'Mar 2023', records: 189, checks: 742,  status: 'active', color: '#e0e7ff', textColor: '#4f46e5' },
  { initials: 'TW', name: 'Thomas Webb',    company: 'Webb Investments',         plan: 'Basic', joined: 'Jul 2023', records: 45,  checks: 203,  status: 'active', color: '#fce7f3', textColor: '#be185d' },
  { initials: 'AC', name: 'Angela Chen',    company: 'Chen Real Estate Group',   plan: 'Pro',   joined: 'Feb 2024', records: 78,  checks: 391,  status: 'active', color: '#f3f4f6', textColor: '#6b7280' },
  { initials: 'ML', name: 'Marcus Lee',     company: 'Lee Family Trust',         plan: 'Basic', joined: 'Nov 2023', records: 22,  checks: 88,   status: 'overdue',color: '#fef3c7', textColor: '#b45309' },
  { initials: 'SV', name: 'Sarah Varga',    company: 'Varga Holdings',           plan: 'Pro',   joined: 'Apr 2024', records: 134, checks: 520,  status: 'active', color: '#ffe4e6', textColor: '#be123c' },
]

export const auditLog = [
  { timestamp: '2025-04-29 09:14:32', type: 'Equifax Check',   user: 'Mr. Essa', description: 'Credit check — Jordan Mitchell (DOB 14/03/1988)',   ip: '203.18.xx.xx', status: 'success' },
  { timestamp: '2025-04-29 08:52:11', type: 'DB Search',       user: 'Mr. Essa', description: 'Tenant database searched — "Sandra Okonkwo"',         ip: '203.18.xx.xx', status: 'success' },
  { timestamp: '2025-04-28 17:30:05', type: 'Record Added',    user: 'Mr. Essa', description: 'New tenancy record — Okonkwo / 14 Elm St VIC',        ip: '203.18.xx.xx', status: 'pending' },
  { timestamp: '2025-04-28 14:22:48', type: 'Login',           user: 'Mr. Essa', description: 'Successful login — Chrome 124 / Windows',             ip: '203.18.xx.xx', status: 'success' },
  { timestamp: '2025-04-27 11:05:19', type: 'Export',          user: 'Mr. Essa', description: 'Report exported — #RPT-20250427 (PDF)',               ip: '203.18.xx.xx', status: 'success' },
  { timestamp: '2025-04-26 09:44:00', type: 'Equifax Check',   user: 'Mr. Essa', description: 'Full credit check — Dominic Farrell (DOB 18/09/1985)',ip: '203.18.xx.xx', status: 'success' },
  { timestamp: '2025-04-25 16:30:00', type: 'Record Modified', user: 'System',   description: 'Auto-moderation flag applied — Record TN-00291',      ip: 'System',       status: 'flagged' },
]

export const disputes = [
  { id: '#DIS-0041', tenant: 'Dominic Farrell', record: 'TN-00291', lodged: '25 Apr 2025', grounds: 'Incorrect eviction outcome',          due: '25 May 2025', status: 'open',   urgent: true  },
  { id: '#DIS-0039', tenant: 'Marcus Webb',     record: 'TN-00278', lodged: '20 Apr 2025', grounds: 'Record belongs to different person',  due: '20 May 2025', status: 'review', urgent: true  },
  { id: '#DIS-0038', tenant: 'Priya Nair',      record: 'TN-00265', lodged: '18 Apr 2025', grounds: 'Arrears amount incorrect',            due: '18 May 2025', status: 'open',   urgent: false },
  { id: '#DIS-0036', tenant: 'Leon Kowalski',   record: 'TN-00244', lodged: '10 Apr 2025', grounds: 'Tenancy dates inaccurate',            due: '10 May 2025', status: 'review', urgent: false },
  { id: '#DIS-0034', tenant: 'Yuki Tanaka',     record: 'TN-00231', lodged: '02 Apr 2025', grounds: 'Damage claim disputed',              due: '02 May 2025', status: 'open',   urgent: false },
]

export const billingHistory = [
  { date: '15 Apr 2025', desc: 'Pro Plan — April',    amount: '$149.00', status: 'paid' },
  { date: '15 Mar 2025', desc: 'Pro Plan — March',    amount: '$149.00', status: 'paid' },
  { date: '15 Feb 2025', desc: 'Pro Plan — February', amount: '$149.00', status: 'paid' },
  { date: '15 Jan 2025', desc: 'Pro Plan — January',  amount: '$149.00', status: 'paid' },
]

export const activityFeed = [
  { type: 'check',   color: '#0ea5e9', action: 'Equifax check completed', subject: 'Jordan Mitchell',           time: '2 hrs ago'  },
  { type: 'add',     color: '#10b981', action: 'Tenant record added',      subject: 'Sandra Okonkwo – 14 Elm St',time: '5 hrs ago'  },
  { type: 'dispute', color: '#f59e0b', action: 'Dispute submitted',        subject: 'Record #TN-00291',          time: 'Yesterday'  },
  { type: 'payment', color: '#8b5cf6', action: 'Subscription renewed',     subject: 'Pro Plan – $149/mo',        time: '2 days ago' },
  { type: 'member',  color: '#6366f1', action: 'New member joined',        subject: 'Ridgeline Properties Pty',  time: '3 days ago' },
]
