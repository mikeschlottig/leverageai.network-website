"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Moon, Sun, ArrowRight, ChevronDown, X, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function HomePage() {
  const [isDark, setIsDark] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [isMainContactFormOpen, setIsMainContactFormOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }

    // Scroll animation observer
    const observerRef = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observerRef.observe(el))

    // Contact form scroll trigger
    const handleScroll = () => {
      const footer = document.getElementById("contact")
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const isFooterVisible = footerRect.top <= window.innerHeight && footerRect.bottom >= 0
        setShowContactForm(isFooterVisible)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      observerRef.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const navigationPages = [
    { title: "Home", href: "/" },
    { title: "Data & Analytics Services", href: "/data-analytics" },
    { title: "AI Phone & Chatbots", href: "/ai-communications" },
    { title: "AI Sales & Marketing", href: "/ai-sales-marketing" },
    { title: "VoIP Phone Service", href: "/voip-service" },
    { title: "Custom AI Avatars", href: "/ai-avatars" },
    { title: "AI & Cybersecurity", href: "/cybersecurity" },
    { title: "Secure AI Infrastructure", href: "/infrastructure" },
    { title: "Technical SEO Services", href: "/seo-services" },
    { title: "In-Office AI Workshops", href: "/workshops" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-2xl font-black text-blue-900 dark:text-blue-100">
            <Link href="/">
              LEVERAGE<span className="text-blue-600 dark:text-blue-400">AI</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#industries"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Industries
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={toggleTheme} className="p-2">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Navigation Dropdown */}
            <div className="relative">
              <Button
                variant="outline"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2"
              >
                Pages <ChevronDown className="h-4 w-4" />
              </Button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    {navigationPages.map((page) => (
                      <Link
                        key={page.href}
                        href={page.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {page.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Button asChild className="hidden sm:inline-flex">
              <Link href="#contact">Get Consultation</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gray-50 dark:bg-gray-800 overflow-hidden">
          <div className="container mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative flex justify-center items-center">
              <div className="hero-logo-glow">
                <Image
                  src="/images/leverage-logo.png"
                  alt="LeverageAI Logo"
                  width={400}
                  height={400}
                  className="w-full max-w-sm h-auto"
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h1 className="font-black text-4xl md:text-5xl lg:text-6xl tracking-tight text-blue-900 dark:text-blue-100">
                Elevate your operations with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Intelligent Automation
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
                Secure, Private AI Infrastructure & Data Analytics Tailored to Your Industry.
              </p>
              <div className="mt-10">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-10 py-4">
                  <Link href="#contact">🚀 Schedule Your Free AI Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <h3 className="text-center font-mono text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400">
              Powered by Enterprise-Grade Technology
            </h3>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-xl text-gray-600 dark:text-gray-400">
              {["Anaconda", "Supabase", "Cloudflare", "Next.js", "Grafana", "Prometheus"].map((tech) => (
                <span key={tech} className="font-bold">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-blue-900 dark:text-blue-100">
                Your Data, Unleashed.
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                We build powerful, secure analytics engines using Anaconda, the industry-leading platform for data
                science. Go from raw data to actionable intelligence faster and more securely than ever before.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section id="industries" className="py-20 md:py-28 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-blue-900 dark:text-blue-100">
                AI Solutions, Built For Your World
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                We don't believe in one-size-fits-all. Our models are trained on industry-specific data for unparalleled
                accuracy and insight.
              </p>
            </div>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16 justify-items-center">
              {[
                { name: "Legal", icon: "⚖️" },
                { name: "Construction", icon: "🏗️" },
                { name: "Healthcare", icon: "🏥" },
                { name: "Real Estate", icon: "🏠" },
                { name: "Automotive", icon: "🚗" },
              ].map((industry, index) => (
                <IndustryIcon key={industry.name} industry={industry.name} delay={index * 100} />
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-blue-900 dark:text-blue-100">
                A Full Suite of AI Solutions
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Beyond data, we automate and optimize every facet of your business.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "AI Communications",
                  description: "Intelligent Phone Receptionists & Chatbots that understand context and intent.",
                  href: "/ai-communications",
                },
                {
                  title: "Sales & Marketing AI",
                  description: "Automate lead qualification, personalize campaigns, and predict customer behavior.",
                  href: "/ai-sales-marketing",
                },
                {
                  title: "Cybersecurity & Infra",
                  description:
                    "Deploy your AI on SOC2 & HIPAA compliant infrastructure, on-premise or in a private cloud.",
                  href: "/cybersecurity",
                },
                {
                  title: "Custom Web & SEO",
                  description: "Visually-edited React sites with Onlook, optimized for search engines and conversions.",
                  href: "/seo-services",
                },
              ].map((service) => (
                <Link key={service.title} href={service.href}>
                  <Card className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 h-full">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">{service.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                      <div className="absolute top-0 right-0 w-12 h-12 bg-blue-600 dark:bg-blue-500 group-hover:bg-emerald-600 transition-colors duration-300 flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-white transform rotate-45" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-blue-900 dark:bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-black text-white">Ready to Elevate Your Business?</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Let's discuss how our tailored AI solutions can create a competitive advantage for you. Your initial
            consultation is free.
          </p>
          <div className="mt-8">
            <Button
              onClick={() => setIsMainContactFormOpen(true)}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              Contact Us Today
            </Button>
            <p className="mt-4 text-gray-400">
              Or call us at:{" "}
              <Link href="tel:541-450-2082" className="font-bold hover:text-white">
                (541) 450-2082
              </Link>
            </p>
          </div>
          <div className="mt-16 pt-8 border-t border-blue-800 text-sm text-gray-400">
            <p>© 2024 LeverageAI LLC. All Rights Reserved. Lever Up.</p>
          </div>
        </div>
      </footer>

      {/* Contact Form - Only on Homepage */}
      {showContactForm && (
        <div className="fixed bottom-6 right-6 z-50">
          {!isContactFormOpen ? (
            <Button
              onClick={() => setIsContactFormOpen(true)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
            >
              💬 Quick Contact
            </Button>
          ) : (
            <ContactForm onClose={() => setIsContactFormOpen(false)} />
          )}
        </div>
      )}

      {/* Main Contact Form Popup */}
      {isMainContactFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <ContactForm onClose={() => setIsMainContactFormOpen(false)} />
          </div>
        </div>
      )}
    </div>
  )
}

function IndustryIcon({ industry, delay }: { industry: string; delay: number }) {
  return (
    <div
      className="flex flex-col items-center animate-on-scroll opacity-0 translate-y-12 transition-all duration-800 ease-out"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative w-24 h-24 mb-4">
        <AnimatedSVGFrame />
      </div>
      <h4 className="font-bold text-blue-900 dark:text-blue-100">{industry}</h4>
    </div>
  )
}

function AnimatedSVGFrame() {
  return (
    <div className="relative w-full h-full group">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
      >
        <path
          d="M50 2 a 48 48 0 0 1 0 96 a 48 48 0 0 1 0 -96"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-blue-600 dark:text-blue-400 animate-spin"
          style={{ animationDuration: "7s" }}
        />
      </svg>
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:-rotate-12"
      >
        <path
          d="M50 20 a 30 30 0 0 1 0 60 a 30 30 0 0 1 0 -60"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-purple-600 dark:text-purple-400 animate-spin"
          style={{ animationDuration: "4s" }}
        />
      </svg>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="5"
          fill="currentColor"
          className="text-emerald-600 dark:text-emerald-400 animate-pulse"
        />
      </svg>
    </div>
  )
}

function ContactForm({ onClose }: { onClose: () => void }) {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      onClose()
      setIsSubmitted(false)
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <Card className="w-80 shadow-xl border-emerald-200 dark:border-emerald-800">
        <CardContent className="p-6 text-center">
          <div className="text-emerald-600 dark:text-emerald-400 text-4xl mb-4">✓</div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Thank You!</h3>
          <p className="text-gray-600 dark:text-gray-400">We'll get back to you within 24 hours.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-80 shadow-xl">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100">Quick Contact</h3>
          <Button variant="ghost" size="sm" onClick={onClose} className="p-1">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input id="name" required placeholder="Your full name" />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" required placeholder="your@email.com" />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="(555) 123-4567" />
          </div>
          <div>
            <Label htmlFor="message">What can LeverageAI do for you? *</Label>
            <Textarea
              id="message"
              required
              placeholder="Tell us about your project or goals..."
              className="min-h-[80px]"
            />
          </div>
          <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
            <Send className="h-4 w-4 mr-2" />
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
