import { PageLayout } from "@/components/page-layout"

export default function AISalesMarketingPage() {
  return (
    <PageLayout currentPage="AI Sales & Marketing">
      <main>
        <section className="bg-gray-50 dark:bg-gray-800 py-20">
          <div className="container mx-auto px-6 text-center">
            <p className="font-mono text-blue-600 dark:text-blue-400">Your Growth Engine, Automated</p>
            <h1 className="text-4xl md:text-6xl font-black mt-2 text-blue-900 dark:text-blue-100">
              AI Sales & Marketing
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Stop guessing. Start converting. We deploy AI systems that identify your best leads, personalize outreach
              at scale, and predict what your customers will do next.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-blue-900 dark:text-blue-100">
                Focus on Closing, Not Prospecting
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Our AI sifts through the noise to find the gold, so your sales team can spend their time on what they do
                best: building relationships and closing deals.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">Intelligent Lead Scoring</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Our models analyze dozens of data points to score and prioritize incoming leads, ensuring you engage
                  with the hottest prospects first.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">Automated Campaign Triggers</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Create sophisticated, behavior-based email and ad campaigns that adapt to user actions in real-time.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">Predictive Customer Insights</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Identify customers at risk of churning, discover up-sell opportunities, and understand the lifetime
                  value of different customer segments.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  )
}
