import { useState } from 'react'

function FaqItem({ faq, onSelectFaq }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-start gap-3 p-4 sm:gap-4 sm:p-5">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600">
          ?
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
              {faq.category}
            </span>
            {faq.isHot && (
              <span className="rounded-full bg-orange-100 px-2.5 py-1 text-[11px] font-bold text-orange-700">
                Hot
              </span>
            )}
          </div>
          <button
            type="button"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="mt-3 flex w-full items-center justify-between gap-4 text-left font-semibold text-slate-800 hover:text-indigo-700"
          >
            <span>{faq.question}</span>
            <span className={`shrink-0 text-xl text-slate-400 transition-transform ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true">
              +
            </span>
          </button>
          {isOpen && (
            <div className="mt-3 border-t border-slate-100 pt-3">
              <p className="text-sm leading-6 text-slate-600">{faq.answer}</p>
              <button
                type="button"
                onClick={() => onSelectFaq(faq.id)}
                className="mt-3 text-sm font-semibold text-indigo-600 hover:text-indigo-800 focus:outline-none focus:underline"
              >
                Xem chi tiết
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

function FaqAccordion({ faqData, onSelectFaq }) {
  return (
    <div className="grid gap-3">
      {faqData.length > 0 && faqData.map((faq) => (
        <FaqItem key={faq.id} faq={faq} onSelectFaq={onSelectFaq} />
      ))}
    </div>
  )
}

export default FaqAccordion
