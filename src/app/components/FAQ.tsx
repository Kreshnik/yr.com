import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

const faqs = [
  {
    question: 'Is this truly free and safe?',
    answer: 'Yes, completely. No credit card. No hidden obligations. You\'ll receive emails about spiritual guidance, but participation is always your choice.'
  },
  {
    question: 'How do you select winners?',
    answer: 'Through a completely random, unbiased digital process. We\'ll share a video showing our transparent selection method.'
  },
  {
    question: 'How many spots are left this week?',
    answer: 'We select exactly 10 souls each Monday. As entries grow, your odds shift — which is why entering now, early in the week, gives your spirit the best chance to be seen. The door is open right now.'
  },
  {
    question: 'What if I\'m not selected this week?',
    answer: 'You\'re automatically included in every Monday\'s drawing for 3 months — 12–13 genuine opportunities. After 3 months, re-enter with one click.'
  },
  {
    question: 'Can I choose my reader?',
    answer: 'Absolutely. When selected, explore profiles of our tarot readers, numerologists, and intuitive coaches, then choose who resonates with you.'
  },
  {
    question: 'How is my privacy protected?',
    answer: 'Winners are honored only by nickname and first 3 letters of email. Your full identity and reading remain completely confidential.'
  },
  {
    question: 'What questions can I ask?',
    answer: 'Anything weighing on your heart. Our guides specialize in love and relationships, but welcome all questions. No judgment, only compassionate guidance.'
  },
  {
    question: 'What\'s Mediumchat?',
    answer: 'A trusted spiritual platform with 267+ experienced psychic coaches since 2020. With 49,598+ heartfelt reviews, it\'s a safe space where your vulnerability is honored.'
  },
  {
    question: 'What happens when I win?',
    answer: 'We\'ll email you with simple instructions. You\'ll receive credits for 15 minutes with a psychic of your choice through secure chat. Completely free and private.'
  }
];

export function FAQ() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F3E8FF] to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent mb-4">Questions You Might Be Holding</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-xl px-6 sm:px-8 border border-purple-100 shadow-[0_1px_6px_rgba(74,0,191,0.06)] hover:border-purple-200 transition-colors duration-150"
            >
              <AccordionTrigger className="text-left text-base sm:text-lg font-medium text-gray-900 hover:text-[#4A00BF] hover:no-underline py-5 sm:py-6 gap-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base sm:text-lg text-gray-600 leading-relaxed pb-5 sm:pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
