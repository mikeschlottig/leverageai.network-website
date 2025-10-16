import { PageLayout } from "@/components/page-layout"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Phone Service & Chatbots | 24/7 Customer Engagement",
  description: "Intelligent AI phone receptionists and chatbots that understand intent, book appointments, and qualify leads—24/7 without human intervention.",
  keywords: "AI phone service, AI chatbot Oregon, intelligent receptionist, automated customer service, lead qualification AI, appointment booking AI",
  openGraph: {
    type: "website",
    url: "https://leverageai.network/ai-communications",
    title: "AI Phone Service & Chatbots for Oregon Businesses",
    description: "Intelligent AI phone receptionists and chatbots that understand intent, book appointments, and qualify leads—24/7 without human intervention.",
    images: [
      {
        url: "/images/og/ai-communications.jpg",
        width: 1200,
        height: 630,
        alt: "AI Phone Service & Chatbots"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Phone Service & Chatbots for Oregon Businesses",
    description: "24/7 intelligent customer engagement that books appointments, qualifies leads, and resolves issues automatically.",
    images: ["/images/og/ai-communications.jpg"]
  },
  alternates: {
    canonical: "https://leverageai.network/ai-communications"
  }
}

export default function AICommunicationsPage() {
  return (
    <PageLayout currentPage="AI Phone & Chatbots">
      <main>
        <section className="bg-gray-50 dark:bg-gray-800 py-20">
          <div className="container mx-auto px-6 text-center">
            <p className="font-mono text-blue-600 dark:text-blue-400">Communication, Automated</p>
            <h1 className="text-4xl md:text-6xl font-black mt-2 text-blue-900 dark:text-blue-100">
              AI Phone & Chatbots
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Engage customers 24/7 with intelligent, human-like conversations that resolve issues, book appointments,
              and qualify leads—all without human intervention.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100">
                More Than a Bot. A Digital Colleague.
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Our communication AI is built on advanced Natural Language Processing (NLP) models. It doesn't just
                match keywords; it understands intent, remembers context from previous conversations, and knows when to
                seamlessly hand off to a human agent.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold mt-1">✓</span>
                  <span className="text-white">
                    <strong>24/7 Availability:</strong> Never miss a customer inquiry, day or night.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold mt-1">✓</span>
                  <span className="text-white">
                    <strong>Multi-Platform:</strong> Deploy across your website, social media, and VoIP phone system.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold mt-1">✓</span>
                  <span className="text-white">
                    <strong>Industry-Trained:</strong> Our bots know the difference between a "leaky faucet" and a
                    "leaky sales funnel."
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="font-mono text-sm space-y-4">
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white p-3 rounded-lg rounded-br-none max-w-xs">
                    I need to reschedule my appointment.
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-3 rounded-lg rounded-bl-none max-w-xs">
                    Of course. Your next appointment is for Thursday at 2 PM. What new day and time works for you?
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white p-3 rounded-lg rounded-br-none max-w-xs">
                    How about Friday afternoon?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-3 rounded-lg rounded-bl-none max-w-xs">
                    I have openings at 1 PM and 4 PM on Friday. Which would you prefer?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Blog Posts Section */}
        <section className="py-20 md:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-8 text-center">
              Related Insights
            </h2>
            <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <Badge className="text-xs">AI Communications</Badge>
                  <span className="text-xs text-gray-500 dark:text-gray-400">4 min read</span>
                </div>
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
                  <a href="/blog/missed-call-cost" className="hover:text-blue-600 transition-colors">
                    The $47,000 Voicemail: What One Missed Call Cost a Law Firm
                  </a>
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  A Portland personal injury case lost to voicemail at 6:47 PM—and how AI phone systems are capturing revenue law firms didn't know they were losing.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  )
}
