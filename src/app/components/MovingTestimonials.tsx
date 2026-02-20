import { Quote, ArrowRight } from 'lucide-react';

const row1 = [
  { text: "I finally understood why he pulled away. My reader saw it before I did.", author: "Mia S." },
  { text: "She described my situation without me saying a word. Chills.", author: "Dana F." },
  { text: "The twin flame clarity I received was unlike anything I expected.", author: "Priya N." },
  { text: "It wasn't just a reading — it was a healing.", author: "Tasha W." },
  { text: "I've been to three readers. This was the first one that felt real.", author: "Claire B." },
  { text: "She told me exactly when to reach out. I did. He came back.", author: "Rachel M." },
  { text: "Worth every second. I finally have peace.", author: "Sofia B." },
  { text: "I cried. In the best way.", author: "Jess L." },
];

const row2 = [
  { text: "My heart finally feels lighter. Like someone lifted the confusion.", author: "Anika D." },
  { text: "Best 15 minutes I've ever spent on myself.", author: "Emma K." },
  { text: "She knew about my ex without me mentioning him once.", author: "Leila T." },
  { text: "The cards showed my future and I'm choosing to trust it.", author: "Sophia R." },
  { text: "Something shifted after my reading. I can't explain it but I feel it.", author: "Nadia P." },
  { text: "I've recommended YourReading to four friends already.", author: "Camille V." },
  { text: "Divine timing is real. She helped me feel it.", author: "Iris C." },
  { text: "The spiritual insight hit differently. I felt truly seen.", author: "Maya H." },
];

function QuoteChip({ text, author }: { text: string; author: string }) {
  return (
    <div className="group flex-shrink-0 w-72 bg-white border border-purple-100 rounded-2xl px-5 py-4 shadow-sm mx-2.5 transition-shadow duration-200 hover:shadow-md hover:border-purple-200">
      <Quote className="w-4 h-4 text-[#A855F7] mb-2 opacity-60" />
      <p className="text-sm text-gray-700 leading-relaxed italic mb-2.5">{text}</p>
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-[#4A00BF]">— {author}</p>
        {/* CTA — always rendered, visible only on hover to avoid layout shift */}
        <a
          href="https://mediumchat.com/start"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] text-gray-400 hover:text-[#4A00BF] opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer"
          onClick={e => e.stopPropagation()}
        >
          Try Mediumchat
          <ArrowRight className="w-2.5 h-2.5" />
        </a>
      </div>
    </div>
  );
}

export function MovingTestimonials() {
  return (
    <div className="w-full overflow-hidden py-2 space-y-3">
      {/* Row 1 — moves left */}
      <div className="relative">
        <div className="marquee-left flex w-max">
          {[...row1, ...row1].map((q, i) => (
            <QuoteChip key={i} {...q} />
          ))}
        </div>
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
      </div>

      {/* Row 2 — moves right */}
      <div className="relative">
        <div className="marquee-right flex w-max">
          {[...row2, ...row2].map((q, i) => (
            <QuoteChip key={i} {...q} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </div>
  );
}
