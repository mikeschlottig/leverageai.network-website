import { PageLayout } from "@/components/page-layout"

export default function SEOServicesPage() {
  return (
    <PageLayout currentPage="Technical SEO Services">
      <main>
        <section className="bg-gray-50 dark:bg-gray-800 py-20">
          <div className="container mx-auto px-6 text-center">
            <p className="font-mono text-blue-600 dark:text-blue-400">Be Seen. Be Chosen.</p>
            <h1 className="text-4xl md:text-6xl font-black mt-2 text-blue-900 dark:text-blue-100">
              Technical SEO Services
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A beautiful website is useless if no one can find it. Our development process is built around a foundation
              of technical SEO to maximize your visibility and authority on search engines.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100">Built for Search Engines</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Our websites are architected from the ground up with SEO best practices, ensuring maximum visibility
                  and organic traffic growth.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold mt-1">✓</span>
                    <span className="text-white">
                      <strong>Core Web Vitals:</strong> Optimized for Google's performance metrics.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold mt-1">✓</span>
                    <span className="text-white">
                      <strong>Schema Markup:</strong> Rich snippets that make your content stand out.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold mt-1">✓</span>
                    <span className="text-white">
                      <strong>Technical Audits:</strong> Comprehensive analysis and optimization recommendations.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">SEO Services Include:</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Technical SEO audits</li>
                  <li>• Page speed optimization</li>
                  <li>• Mobile-first design</li>
                  <li>• Schema markup implementation</li>
                  <li>• Content optimization</li>
                  <li>• Local SEO setup</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  )
}
