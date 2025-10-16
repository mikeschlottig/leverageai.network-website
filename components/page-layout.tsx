"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, ChevronDown } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "./contact-form"

interface PageLayoutProps {
  children: React.ReactNode
  currentPage?: string
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

export function PageLayout({ children, currentPage }: PageLayoutProps) {
  const [isDark, setIsDark] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
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
              href="/#services"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#industries"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Industries
            </Link>
            <Link
              href="/#contact"
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
                        className={`block px-4 py-2 text-sm transition-colors ${
                          currentPage === page.title
                            ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
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
              <Link href="/#contact">Get Consultation</Link>
            </Button>
          </div>
        </nav>
      </header>

      {children}

      {/* Footer */}
      <footer id="contact" className="bg-blue-900 dark:bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-black text-white">Ready to Unlock Your Data's Potential?</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Let's build your analytics engine. Your initial consultation is free.
          </p>
          <div className="mt-8">
            <Button
              onClick={() => setIsContactFormOpen(true)}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              Book Your Data Strategy Session
            </Button>
            <p className="mt-4 text-gray-400">
              Or call us at:{" "}
              <Link href="tel:541-450-2082" className="font-bold hover:text-white">
                (541) 450-2082
              </Link>
            </p>
          </div>
          <div className="mt-16 pt-8 border-t border-blue-800 text-sm text-gray-400">
            © 2024 Leverage AI. All rights reserved.
          </div>
        </div>
        {/* Contact Form Popup */}
        {isContactFormOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <ContactForm onClose={() => setIsContactFormOpen(false)} />
            </div>
          </div>
        )}
      </footer>
    </div>
  )
}
