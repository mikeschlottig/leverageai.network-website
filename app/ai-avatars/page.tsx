import { PageLayout } from "@/components/page-layout"

export default function AIAvatarsPage() {
  return (
    <PageLayout currentPage="Custom AI Avatars">
      <main>
        <section className="bg-gray-50 dark:bg-gray-800 py-20">
          <div className="container mx-auto px-6 text-center">
            <p className="font-mono text-blue-600 dark:text-blue-400">The Face of Your AI</p>
            <h1 className="text-4xl md:text-6xl font-black mt-2 text-blue-900 dark:text-blue-100">
              Custom Digital Avatars
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Create a unique, memorable brand experience with a personalized digital representative. Our AI avatars can
              speak any text, in any language, creating a new dimension of interaction.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100">Bring Your Brand to Life</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Custom AI avatars provide a human face to your digital interactions, building trust and engagement
                  with your audience.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold mt-1">✓</span>
                    <span className="text-white">
                      <strong>Fully Customizable:</strong> Design avatars that match your brand identity.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold mt-1">✓</span>
                    <span className="text-white">
                      <strong>Multi-Language:</strong> Speak in any language with natural pronunciation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold mt-1">✓</span>
                    <span className="text-white">
                      <strong>Real-time Generation:</strong> Create personalized videos on demand.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">Use Cases:</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Website welcome messages</li>
                  <li>• Training and onboarding</li>
                  <li>• Personalized sales outreach</li>
                  <li>• Customer support videos</li>
                  <li>• Product demonstrations</li>
                  <li>• Social media content</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  )
}
