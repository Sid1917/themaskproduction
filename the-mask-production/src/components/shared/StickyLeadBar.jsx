import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// TODO: replace with your actual WhatsApp business number (country code + number, no + or spaces)
const WHATSAPP_NUMBER = '919876543210'

const EVENT_TYPES = [
  'Wedding',
  'Commercial / Brand',
  'Corporate Event',
  'Drone / Aerial',
  'Other',
]

const initialForm = {
  name: '',
  phone: '',
  email: '',
  eventType: '',
  message: '',
}

export default function StickyLeadBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [form, setForm] = useState(initialForm)

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const text =
      `New enquiry from website:\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email}\n` +
      `Event Type: ${form.eventType}\n` +
      `Message: ${form.message}`

    const encoded = encodeURIComponent(text)
    const url = `https://wa.me/${8779556779}?text=${encoded}`

    window.open(url, '_blank', 'noopener,noreferrer')

    setForm(initialForm)
    setIsOpen(false)
  }

  return (
    <>
      {/* ── Collapsed sticky bar ── */}
      <div className="fixed bottom-0 left-0 right-0 z-[45] border-t border-white/[0.08]
        bg-black/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-5 py-3">
          <div className="hidden sm:block">
            <p className="text-[11px] uppercase tracking-[0.15em] text-white/40">
              Ready to tell your story?
            </p>
            <p className="text-sm text-white/85 font-medium">
              Get in touch for a free consultation
            </p>
          </div>
          <a
           href={`https://wa.me/${8779556779}?text=${encodeURIComponent(
              "Hi! I'd like to enquire about your services."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-2 px-5 py-2.5 rounded-full
              text-black text-[13px] font-semibold uppercase tracking-[0.1em]
              transition-opacity hover:opacity-90"
            style={{ background: '#c9963a' }}
          >
            Enquire Now
          </a>
          {/* <button
            onClick={() => setIsOpen(true)}
            className="ml-auto flex items-center gap-2 px-5 py-2.5 rounded-full
              text-black text-[13px] font-semibold uppercase tracking-[0.1em]
              transition-opacity hover:opacity-90"
            style={{ background: '#c9963a' }}
          >
            Enquire Now
          </button> */}
        </div>
      </div>

      {/* ── Expanded form overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              className="fixed bottom-0 left-0 right-0 z-[90]
                bg-[#0a0a0a] border-t border-white/[0.08]
                px-5 pt-6 pb-8 sm:px-8"
              style={{ borderTopColor: 'rgba(201,150,58,0.15)' }}
            >
              <div className="max-w-xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white/95 tracking-tight">
                      Let's create something memorable
                    </h3>
                    <p className="text-xs text-white/40 mt-1">
                      We'll reply on WhatsApp within a day.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-9 h-9 rounded-[10px] bg-white/[0.06] border border-white/[0.12]
                      flex items-center justify-center flex-shrink-0"
                    aria-label="Close form"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 3l10 10M13 3L3 13" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange('name')}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1]
                      text-sm text-white placeholder-white/30 outline-none
                      focus:border-[#c9963a]/50 transition-colors"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1]
                      text-sm text-white placeholder-white/30 outline-none
                      focus:border-[#c9963a]/50 transition-colors"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange('email')}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1]
                      text-sm text-white placeholder-white/30 outline-none
                      focus:border-[#c9963a]/50 transition-colors"
                  />
                  <select
                    required
                    value={form.eventType}
                    onChange={handleChange('eventType')}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1]
                      text-sm text-white outline-none focus:border-[#c9963a]/50 transition-colors
                      [&>option]:bg-[#0a0a0a]"
                  >
                    <option value="" disabled>Event Type</option>
                    {EVENT_TYPES.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <textarea
                    placeholder="Tell us about your event..."
                    value={form.message}
                    onChange={handleChange('message')}
                    rows={3}
                    className="sm:col-span-2 w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1]
                      text-sm text-white placeholder-white/30 outline-none resize-none
                      focus:border-[#c9963a]/50 transition-colors"
                  />

                  <button
                    type="submit"
                    className="sm:col-span-2 mt-1 flex items-center justify-center gap-2
                      px-5 py-3.5 rounded-xl text-black text-sm font-semibold
                      uppercase tracking-[0.1em] transition-opacity hover:opacity-90"
                    style={{ background: '#c9963a' }}
                  >
                    Send via WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}