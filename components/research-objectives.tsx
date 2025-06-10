"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Eye, Search, BarChart3, Database } from "lucide-react"

const objectives = [
  {
    number: "01",
    icon: Eye,
    title: "Automated Resilience Evaluation Framework",
    description:
      "Design and implement an automated, domain-independent framework that evaluates and quantifies the resilience of microservices-based architectures using real-time telemetry, automated stress testing with Postman, and chaos engineering with Gremlin to produce a normalized Resiliency Score.",
    category: "Resilience Testing",
    color: "bg-blue-100 text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    number: "02",
    icon: Search,
    title: "Real-Time Coupling Monitoring Tool",
    description:
      "Develop a real-time monitoring tool that utilizes weighted dependency graphs to capture and analyze the strength and nature of service interactions, incorporating change point analysis algorithms to detect significant variations in coupling patterns over time.",
    category: "Coupling Analysis",
    color: "bg-green-100 text-green-600",
    borderColor: "border-green-200",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Comprehensive Anti-Pattern Detection Framework",
    description:
      "Create a framework for real-time detection and visualization of architectural anti-patterns using distributed tracing and graph analytics, covering both synchronous and asynchronous communication patterns with automated detection algorithms.",
    category: "Anti-Pattern Detection",
    color: "bg-purple-100 text-purple-600",
    borderColor: "border-purple-200",
  },
  {
    number: "04",
    icon: Database,
    title: "Integrated Visualization and Analytics Platform",
    description:
      "Implement an intuitive visualization dashboard that provides real-time insights into system resilience, coupling metrics, detected anti-patterns, and architectural health, enabling proactive maintenance and informed decision-making.",
    category: "Visualization",
    color: "bg-orange-100 text-orange-600",
    borderColor: "border-orange-200",
  },
]

export default function ResearchObjectives() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="w-16 h-1 bg-blue-600 mb-4"></div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Research Objectives</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Our research is structured around four core objectives that address the critical challenges in microservice
            architecture monitoring and analysis.
          </p>
        </motion.div>

        <div className="space-y-8">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`hover:shadow-lg transition-all duration-300 border-l-4 ${objective.borderColor}`}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Objective Number */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-600">{objective.number}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${objective.color}`}>
                            <objective.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{objective.title}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {objective.category}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed text-lg">{objective.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expected Impact</h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                By achieving these objectives, InfraPulse will empower system architects and engineers with actionable
                insights to maintain structural quality, reduce long-term complexity, and improve system maintainability
                in microservice ecosystems.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
