'use client'
import { useEffect, useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const faqs = [
  {
    question: 'I’m just starting out, is this program suitable for me?',
    answer: 'Absolutely! This program is designed for beginners and will guide you step-by-step.'
  },
  {
    question: 'Will I be able to attract international clients right away?',
    answer: 'With consistent effort and by applying the strategies taught, you’ll be on the right path.'
  },
  {
    question: 'What kind of support will I get after the masterclass?',
    answer: 'You’ll get access to a community and additional resources to help you implement everything.'
  },
  {
    question: 'How long will it take to see results?',
    answer: 'It depends on your consistency, but many participants see progress within a few weeks.'
  },
  {
    question: 'Can I use these strategies if I don’t have an agency or team?',
    answer: 'Yes! These strategies are built for solo freelancers and small businesses too.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1)

  useEffect(() => {
  }, [openIndex])

  function UpdateIdx(idx) {
    console.log(idx)
    setOpenIndex(openIndex === idx ? -1 : idx)
  }
  

  return (
    <section className="max-w-5xl cursor-pointer relative z-50 mx-auto px-2 py-12">
      <h2 className="text-4xl sora-bold text-center mb-10">
        Frequently Asked Questions <span className="text-orange-500">(FAQs)</span>
      </h2>
      <div className="space-y-4 ">
        {faqs.map((faq, idx) => (
          <div key={idx} onClick={() => UpdateIdx(idx)} className="border rounded-lg bg-[#505355]">
            <button
              className="w-full text-left px-4 py-4 flex justify-between items-center"
            >
              <span className="font-medium">{faq.question}</span>
              {openIndex === idx ? <FaMinus size={14} /> : <FaPlus size={14} />}
            </button>
            {openIndex === idx && (
              <div className="px-4 pb-4 text-sm text-white/70">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
