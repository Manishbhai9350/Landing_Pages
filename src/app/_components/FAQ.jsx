'use client'
import { useEffect, useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const faqs = [
  {
    question: 'What kind of video editing services do you offer?',
    answer: 'We provide everything from short-form content like Reels, Shorts, TikToks to long-form YouTube videos, podcast editing, educational content, ads, and cinematic edits. Basically, if it’s a video—we can edit it!'
  },
  {
    question: 'How do I send my raw footage and get the final edited video?',
    answer: 'Simple! Once you book a call, we’ll share a Google Drive or Dropbox link where you can upload your footage. We’ll discuss your vision and then deliver the final edits through the same platform.'
  },
  {
    question: ' How much time will it take to edit my video?',
    answer: 'Turnaround time depends on video length and complexity. For short-form content, we usually deliver within 24-48 hours. Long-form videos may take 3-5 days.'
  },
  {
    question: 'Can I ask for revisions if I don’t like something?',
    answer: 'Absolutely! We offer up to 2 free revisions to make sure you get exactly what you’re looking for.'
  },
  {
    question: 'What are your charges for video editing and graphic design?',
    answer: 'Pricing varies based on your project type. Book a free call with us and we’ll give you a custom quote based on your requirements.'
  },
  {
    question: 'Do you offer monthly or bulk packages?',
    answer: 'Yes, we do! We offer discounted monthly plans for content creators, agencies, and brands that need consistent editing and design services.'
  },
  {
    question: 'I’m not from India. Can I still work with Flashcut Edits?',
    answer: ' Definitely! We work with international clients from the US, UK, UAE, Canada, and more. We are fully remote and globally accessible.'
  },
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
              <div className="px-4 pb-4 text-sm text-white/80">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
