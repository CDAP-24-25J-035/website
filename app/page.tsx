"use client"

import { useRef } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Domain from "@/components/domain"
import Methodology from "@/components/methodology"
import CouplingAnalysis from "@/components/coupling-analysis"
import Milestones from "@/components/milestones"
import Documents from "@/components/documents"
import AboutUs from "@/components/about-us"
import Footer from "@/components/footer"
import Presentations from "@/components/presentations"
import ResearchGap from "@/components/research-gap"
import Technologies from "@/components/technologies"
import ResearchProblem from "@/components/research-problem"
import ResearchObjectives from "@/components/research-objectives"
import ContactUs from "@/components/contact-us"
import SystemArchitecture from "@/components/system-architecture"

export default function Home() {
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    domain: useRef<HTMLElement>(null),
    milestones: useRef<HTMLElement>(null),
    documents: useRef<HTMLElement>(null),
    presentations: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  }

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen">
      <Navbar onNavigate={handleNavigate} />
      <Hero />
      <Domain />
      <ResearchProblem />
      <ResearchGap />
      <ResearchObjectives />
      <SystemArchitecture />
      <Methodology />
      <CouplingAnalysis />
      <Technologies />
      <Milestones />
      <Documents />
      <Presentations />
      <AboutUs />
      <ContactUs />
      <Footer />
    </main>
  )
}
