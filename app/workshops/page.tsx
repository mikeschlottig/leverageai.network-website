import { PageLayout } from "@/components/page-layout"

export default function WorkshopsPage() {
  return (
    <PageLayout currentPage="In-Office AI Workshops">
      <main>
        <section className="bg-gray-50 dark:bg-gray-800 py-20">
          <div className="container mx-auto px-6 text-center">
            <p className="font-mono text-blue-600 dark:text-blue-400">Empower Your Team</p>
            <h1 className="text-4xl md:text-6xl font-black mt-2 text-blue-900 dark:text-blue-100">
              In-Office AI Workshops
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Technology is only as powerful as the people who use it. We come to you, providing hands-on training that
              demystifies AI and provides your team with actionable insights and best practices.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">Executive Level</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Strategic AI implementation workshops for leadership teams, focusing on ROI, risk management, and
                  competitive advantage.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">Manager Level</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Practical AI tools and workflows for department managers to improve team productivity and decision
                  making.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">Staff Level</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Hands-on training for employees on AI tools that can enhance their daily work and career development.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-blue-900 dark:text-blue-100">Workshop Topics</h2>
              <div className="mt-16 grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-lg font-bold text-blue-900 dark:text-blue-100">AI Fundamentals</h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Understanding AI, ML, and their business applications
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-900 dark:text-blue-100">Prompt Engineering</h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Getting better results from AI tools and chatbots
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-900 dark:text-blue-100">Data Strategy</h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">Preparing your data for AI implementation</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-900 dark:text-blue-100">AI Ethics & Governance</h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">Responsible AI deployment and risk management</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  )
}
