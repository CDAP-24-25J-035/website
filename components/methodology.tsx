"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Search, Target, Layers, Code, BarChart3 } from "lucide-react"

const methodologySteps = [
  {
    icon: Search,
    title: "Multi-Component System Architecture",
    description:
      "Designed a comprehensive system with three core components: Resiliency Monitoring System (RMS) using Prometheus and Postman, Coupling Monitoring Tool using weighted dependency graphs, and Anti-Pattern Detection Framework using distributed tracing.",
    badge: "Architecture",
  },
  {
    icon: Target,
    title: "Data Collection and Instrumentation",
    description:
      "Implemented lightweight distributed tracing mechanisms, service mesh instrumentation with Envoy/Istio, and telemetry collection using Micrometer and Spring Boot Actuator for comprehensive runtime data capture.",
    badge: "Data Collection",
  },
  {
    icon: Layers,
    title: "Advanced Analytics and Processing",
    description:
      "Developed Kafka-based data ingestion pipelines, TimeScaleDB for time-series storage, Neo4j for graph analytics, and implemented statistical change point detection algorithms including CUSUM and Bayesian Online Change Point Detection.",
    badge: "Analytics",
  },
  {
    icon: Code,
    title: "Algorithm Implementation",
    description:
      "Implemented graph theory algorithms including Tarjan's Strongly Connected Components for cycle detection, centrality analysis for bottleneck identification, and clustering coefficients for knot detection across 12 anti-pattern types.",
    badge: "Algorithms",
  },
  {
    icon: BarChart3,
    title: "Evaluation and Validation",
    description:
      "Conducted comprehensive testing using synthetic e-commerce platforms, controlled laboratory scenarios, and real-world microservice deployments to validate detection accuracy, performance overhead, and scalability.",
    badge: "Validation",
  },
]

export default function Methodology() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* System Architecture Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img
                src="/images/system-architecture.png"
                alt="InfraPulse System Architecture"
                className="w-full h-auto rounded-2xl shadow-2xl border border-gray-200"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Methodology Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="w-16 h-1 bg-blue-600 mb-4"></div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Methodology</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our research follows a structured, evidence-based approach to develop InfraPulse as a comprehensive
                microservice monitoring solution.
              </p>
            </div>

            <div className="space-y-4">
              {methodologySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-l-4 border-blue-500 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <step.icon className="h-5 w-5 text-blue-600" />
                          </div>
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center space-x-3">
                            <h3 className="font-semibold text-gray-900">{step.title}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {step.badge}
                            </Badge>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
