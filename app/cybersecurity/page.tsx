import { PageLayout } from "@/components/page-layout"

export default function CybersecurityPage() {
  return (
    <PageLayout currentPage="AI & Cybersecurity">
      <main>
        <section className="bg-gray-50 dark:bg-gray-800 py-20">
          <div className="container mx-auto px-6 text-center">
            <p className="font-mono text-blue-600 dark:text-blue-400">Security First, Always</p>
            <h1 className="text-4xl md:text-6xl font-black mt-2 text-blue-900 dark:text-blue-100">
              AI & Cybersecurity
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              In the age of AI, security isn't an afterthought—it's the foundation. We architect our solutions to
              protect your data, your customers, and your reputation with enterprise-grade security protocols.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">Data Encryption</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  End-to-end encryption for all data in transit and at rest, using industry-standard AES-256 encryption.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">Compliance Ready</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  SOC2, HIPAA, GDPR compliant infrastructure ensures your AI solutions meet regulatory requirements.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">Threat Detection</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  AI-powered threat detection and response systems protect against emerging cybersecurity threats.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  )
}
