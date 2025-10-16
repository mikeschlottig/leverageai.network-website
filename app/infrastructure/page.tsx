import { PageLayout } from "@/components/page-layout"

export default function InfrastructurePage() {
  return (
    <PageLayout currentPage="Secure AI Infrastructure">
      <main>
        <section className="bg-gray-50 dark:bg-gray-800 py-20">
          <div className="container mx-auto px-6 text-center">
            <p className="font-mono text-blue-600 dark:text-blue-400">Your Data, Your Control</p>
            <h1 className="text-4xl md:text-6xl font-black mt-2 text-blue-900 dark:text-blue-100">
              Secure AI Infrastructure
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We provide the robust foundation your AI needs to perform. Choose from on-premise, private cloud, or
              hybrid models to meet your specific security, compliance, and performance requirements.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">On-Premise</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Complete control over your AI infrastructure with on-site deployment for maximum security and
                  compliance.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">Private Cloud</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Dedicated cloud infrastructure that provides scalability while maintaining data isolation and
                  security.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">Hybrid Solutions</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Best of both worlds - combine on-premise security with cloud scalability for optimal performance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  )
}
