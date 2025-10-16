import { PageLayout } from "@/components/page-layout"

export default function VoIPServicePage() {
  return (
    <PageLayout currentPage="VoIP Phone Service">
      <main>
        <section className="bg-gray-50 dark:bg-gray-800 py-20">
          <div className="container mx-auto px-6 text-center">
            <p className="font-mono text-blue-600 dark:text-blue-400">The Foundation for AI Communication</p>
            <h1 className="text-4xl md:text-6xl font-black mt-2 text-blue-900 dark:text-blue-100">
              Enterprise-Grade VoIP
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Crystal-clear calls, 99.999% uptime, and seamless integration with our AI Receptionist. This is the modern
              phone system your business deserves.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100">Built for Business</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Our VoIP infrastructure is designed from the ground up for enterprise reliability and AI integration.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold mt-1">✓</span>
                    <span className="text-white">
                      <strong>99.999% Uptime:</strong> Enterprise-grade reliability you can count on.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold mt-1">✓</span>
                    <span className="text-white">
                      <strong>AI-Ready:</strong> Seamlessly integrates with our AI receptionist and chatbot systems.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold mt-1">✓</span>
                    <span className="text-white">
                      <strong>Scalable:</strong> From 1 to 1000+ users, our system grows with your business.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">Features Include:</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Call forwarding & routing</li>
                  <li>• Voicemail to email</li>
                  <li>• Conference calling</li>
                  <li>• Mobile app integration</li>
                  <li>• Real-time analytics</li>
                  <li>• CRM integration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  )
}
