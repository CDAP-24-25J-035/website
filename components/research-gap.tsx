"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Settings, Search, Target, GitMerge, Zap } from "lucide-react"

const researchGaps = [
  {
    icon: Search,
    title: "Static vs. Runtime Analysis Disconnect",
    description:
      "Traditional static analysis tools fail to capture production-specific anti-patterns like improper circuit breaker configurations or dynamic service discovery issues.",
  },
  {
    icon: GitMerge,
    title: "Visualization-Implementation Gap",
    description:
      "While practitioners demand architectural visualization, current tools offer basic dependency graphs without anti-pattern context or actionable insights.",
  },
  {
    icon: Zap,
    title: "Narrow Anti-Pattern Detection Scope",
    description:
      "Existing research identifies 87 distinct anti-patterns, yet typical tools detect ≤12 patterns, missing critical issues like event storming and schema entanglement.",
  },
]

export default function ResearchGap() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Research Gap</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Identifying the critical limitations in current microservice monitoring and architectural analysis tools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {researchGaps.slice(0, 2).map((gap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-1 md:col-span-1"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md group">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-200 transition-colors">
                    <gap.icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{gap.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{gap.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Center the middle card on large screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1 md:col-span-2 lg:mx-auto"
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md group max-w-sm mx-auto">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-200 transition-colors">
                  {React.createElement(researchGaps[2].icon, { className: "h-10 w-10 text-blue-600" })}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{researchGaps[2].title}</h3>
                <p className="text-gray-600 leading-relaxed">{researchGaps[2].description}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bottom row */}
          {researchGaps.slice(3).map((gap, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index + 3) * 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-1 md:col-span-1"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md group">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-200 transition-colors">
                    <gap.icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{gap.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{gap.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
