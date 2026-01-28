"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Zap, BarChart3, MessageCircle, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import Link from "next/link"
import { openChatWidget } from "@/lib/chat-widget"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <main className="min-h-[100dvh] flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="flex items-center justify-between px-4 sm:px-6 py-4">
          {/* Logo Section */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Image src="/assets/image/assistloop.svg" className="h-6 sm:h-8 dark:invert" alt="AssistLoop" width={120} height={24} />
            <div className="w-px h-5 sm:h-6 bg-border mx-1 sm:mx-2" />
            <Image src="/assets/image/vercel.svg" className="h-8 sm:h-10 dark:invert" alt="Vercel" width={100} height={100} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <Link target="_blank" href="https://assistloop.ai" className="hover:text-foreground transition-colors">
              Features
            </Link>
            <Link target="_blank" href="https://assistloop.ai/docs/integrations/vercel" className="hover:text-foreground transition-colors">
              Docs
            </Link>
            <Link target="_blank" href="https://assistloop.ai/pricing" className="hover:text-foreground transition-colors">
              Pricing
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            <Button onClick={openChatWidget} variant="outline" size="sm" className="text-sm bg-transparent hidden sm:flex">
              <MessageCircle className="h-4 w-4 mr-1.5" />
              Open Chat
            </Button>
            <Button onClick={openChatWidget} variant="outline" size="sm" className="bg-transparent sm:hidden" aria-label="Open chat">
              <MessageCircle className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="flex flex-col px-4 py-3 space-y-3">
              <Link
                target="_blank"
                href="https://assistloop.ai"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                target="_blank"
                href="https://assistloop.ai/docs/integrations/vercel"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Docs
              </Link>
              <Link
                target="_blank"
                href="https://assistloop.ai/pricing"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase">
            Next.js Template
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
            AssistLoop Template
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
            Build AI support agents that understand your business. Train on your
            docs, knowledge base, and chat history to give accurate answers 24/7.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button asChild size="lg" className="px-6">
              <Link
                href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAssistLoop%2Fnextjs-template&env=NEXT_PUBLIC_ASSISTLOOP_AGENT_ID&envDescription=Agent%20ID%20from%20AssistLoop%20dashboard&integration-ids=oac_JcDufklR2a4mGqWCzSOB1klc&products=%5B%7B%22type%22%3A%22integration%22%2C%22integrationSlug%22%3A%22assistloop%22%2C%22productSlug%22%3A%22assistloop%22%2C%22protocol%22%3A%22ai%22%7D%5D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="mr-2 h-4 w-4"
                  viewBox="0 0 76 65"
                  fill="currentColor"
                >
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
                </svg>
                <div className="w-px h-4 bg-border mx-2" />
                Deploy to Vercel
              </Link>
            </Button>
           
          </div>
        </div>

        {/* Features Grid */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
          <FeatureCard
            icon={<BookOpen className="w-5 h-5" />}
            title="Train on Your Data"
            description="Docs, FAQs, and links"
          />
          <FeatureCard
            icon={<Users className="w-5 h-5" />}
            title="Human Handoff"
            description="Smooth escalation when needed"
          />
          <FeatureCard
            icon={<Zap className="w-5 h-5" />}
            title="Custom AI Actions"
            description="Collect leads, book meetings"
          />
          <FeatureCard
            icon={<BarChart3 className="w-5 h-5" />}
            title="Analytics & History"
            description="Review and improve performance"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link target="_blank" href="https://assistloop.ai/docs/integrations/vercel" className="hover:text-foreground transition-colors">
              Documentation
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link target="_blank" href="https://github.com/assistloop/nextjs-template" className="hover:text-foreground transition-colors">
              GitHub
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-card p-6 flex flex-col gap-3">
      <div className="text-muted-foreground">{icon}</div>
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
