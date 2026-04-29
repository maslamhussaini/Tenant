import { UserPlus, Home, AlertCircle, Shield, UploadCloud } from 'lucide-react'

export default function AddRecordPage() {
  return (
    <div className="flex flex-col gap-6 animate-fade-in max-w-5xl mx-auto pb-10">
      <div className="flex items-center gap-4 border-b border-gray-200 pb-6">
        <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center">
          <UserPlus size={28} />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-navy-900">Add Tenant Record</h1>
          <p className="text-navy-400 font-medium mt-1">Contribute a tenancy record to the shared Triangletech database</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          {/* Personal Details */}
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                <span className="font-bold text-sm">1</span>
              </div>
              <h2 className="text-lg font-bold text-navy-900">Personal Details</h2>
            </div>
            
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="form-label">First Name *</label><input className="form-input" placeholder="Given name" /></div>
                <div><label className="form-label">Last Name *</label><input className="form-input" placeholder="Surname" /></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="form-label">Date of Birth *</label><input className="form-input" type="date" /></div>
                <div>
                  <label className="form-label">Gender</label>
                  <select className="form-input text-navy-700 bg-white cursor-pointer">
                    <option>Prefer not to say</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Non-binary</option>
                  </select>
                </div>
              </div>
              <div><label className="form-label">Email Address</label><input className="form-input" type="email" placeholder="tenant@email.com" /></div>
              <div><label className="form-label">Phone Number</label><input className="form-input" type="tel" placeholder="+61 4XX XXX XXX" /></div>
              <div><label className="form-label">Driver Licence / ID No.</label><input className="form-input" placeholder="Optional — for identity matching" /></div>
            </div>
          </div>

          {/* Tenancy Details */}
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                <span className="font-bold text-sm">2</span>
              </div>
              <h2 className="text-lg font-bold text-navy-900">Tenancy Details</h2>
            </div>
            
            <div className="flex flex-col gap-5">
              <div><label className="form-label">Property Address *</label><input className="form-input" placeholder="Full street address" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="form-label">Suburb</label><input className="form-input" placeholder="Suburb" /></div>
                <div>
                  <label className="form-label">State</label>
                  <select className="form-input cursor-pointer">
                    {['NSW','VIC','QLD','WA','SA','TAS','ACT','NT'].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="form-label">Tenancy Start *</label><input className="form-input" type="date" /></div>
                <div><label className="form-label">Tenancy End</label><input className="form-input" type="date" /></div>
              </div>
              <div><label className="form-label">Weekly Rent (AUD)</label><input className="form-input" type="number" placeholder="e.g. 650" /></div>
              <div>
                <label className="form-label">Tenancy Outcome *</label>
                <select className="form-input cursor-pointer">
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
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8">
          {/* Incident Notes */}
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                <span className="font-bold text-sm">3</span>
              </div>
              <h2 className="text-lg font-bold text-navy-900">Incident Notes</h2>
            </div>
            
            <div className="flex flex-col gap-5">
              <div><label className="form-label">Arrears Amount (AUD)</label><input className="form-input" type="number" placeholder="0.00 — leave blank if none" /></div>
              <div>
                <label className="form-label">Damage Description</label>
                <textarea className="form-input min-h-[100px]" placeholder="Describe any damage to property (optional)" style={{ resize: 'vertical' }} />
              </div>
              <div><label className="form-label">Tribunal / VCAT Reference</label><input className="form-input" placeholder="e.g. VCAT-2024-00312" /></div>
              <div>
                <label className="form-label">Supporting Documents</label>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 hover:border-brand transition-colors cursor-pointer group">
                  <UploadCloud className="mx-auto text-gray-400 group-hover:text-brand mb-3 transition-colors" size={32} />
                  <p className="text-navy-600 font-medium mb-1">Drop files here or <span className="text-brand font-bold">browse</span></p>
                  <p className="text-xs text-navy-400">PDF, JPG, PNG up to 10MB each</p>
                </div>
              </div>
            </div>
          </div>

          {/* Declaration */}
          <div className="card p-8 bg-gradient-to-br from-white to-gray-50 border-brand/20 shadow-lg shadow-brand/5">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <Shield className="text-brand" size={24} />
              <h2 className="text-lg font-bold text-navy-900">Declaration & Privacy</h2>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900 mb-6 leading-relaxed flex gap-3 shadow-inner">
              <AlertCircle className="shrink-0 text-amber-600 mt-0.5" size={18} />
              <p>
                <strong className="font-bold">Important:</strong> By submitting this record, you confirm that the information is accurate, lawfully collected, and submitted in compliance with the <em className="font-medium">Privacy Act 1988 (Cth)</em> and applicable state tenancy laws. False or misleading records may result in account suspension.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 mb-8">
              {[
                'I confirm the tenant was formally notified that this record may be shared.',
                'I confirm I am the lawful landlord or authorised agent for this property.',
                'I accept Triangletech\'s data contribution terms and conditions.',
              ].map((text, i) => (
                <label key={i} className="flex items-start gap-3 text-sm font-medium text-navy-700 cursor-pointer group">
                  <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-brand focus:ring-brand shrink-0 cursor-pointer" /> 
                  <span className="group-hover:text-navy-900 transition-colors">{text}</span>
                </label>
              ))}
            </div>
            
            <div className="flex gap-4">
              <button className="btn btn-outline py-3 flex-1 text-sm">Save Draft</button>
              <button className="btn btn-primary py-3 flex-1 text-sm shadow-brand/30">Submit Record</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
