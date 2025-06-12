"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Network, Activity, TrendingUp, AlertTriangle, Eye, Zap } from "lucide-react"

const features = [
  {
    icon: Network,
    title: "Weighted Dependency Graph Construction",
    description:
      "Constructs dynamic dependency graphs where services are nodes and interactions are weighted edges based on request frequency, latency, and co-execution rates.",
  },
  {
    icon: Activity,
    title: "Real-Time Coupling Metrics",
    description:
      "Computes Absolute Dependence Score (ADS) and Absolute Importance Score (AIS) to quantify service interdependencies and identify critical architectural components.",
  },
  {
    icon: TrendingUp,
    title: "Change Point Detection",
    description:
      "Implements statistical algorithms including Cox-Stuart trend analysis and CUSUM to detect significant shifts in coupling behavior and architectural drift.",
  },
  {
    icon: Zap,
    title: "Anti-Pattern Identification",
    description:
      "Automatically detects 12 types of architectural anti-patterns including cyclic dependencies, service knots, bottlenecks, and chatty services using graph theory algorithms.",
  },
  {
    icon: AlertTriangle,
    title: "Resilience Score Calculation",
    description:
      "Generates normalized resilience scores (0-100) based on latency performance, error rates, resource utilization stability, and fault recovery efficiency.",
  },
  {
    icon: Eye,
    title: "Interactive Visualization Dashboard",
    description:
      "Provides real-time architectural insights through interactive dependency graphs, anti-pattern alerts, and historical trend analysis with drill-down capabilities.",
  },
]

export default function CouplingAnalysis() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="w-16 h-1 bg-blue-600 mb-4"></div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Coupling Analysis</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our comprehensive framework combines three integrated approaches: automated resilience testing with
                chaos engineering, real-time coupling monitoring using weighted dependency graphs, and anti-pattern
                detection through distributed tracing and graph analytics.
              </p>
            </div>

            <div className="grid gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-md transition-shadow border-l-4 border-blue-200">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <feature.icon className="h-4 w-4 text-blue-600" />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold text-gray-900 text-sm">{feature.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Badge className="bg-blue-600">Architecture</Badge>
                <span className="text-sm font-medium text-blue-900">Deployment Ready</span>
              </div>
              <p className="text-blue-800 text-sm">
                Designed for modular deployment, containerized with Docker, orchestrated via Kubernetes, and seamlessly
                integrates with the broader monitoring ecosystem.
              </p>
            </div>
          </motion.div>

          {/* System Coupling Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* <img
                src="/images/dependency-graph.png"
                alt="Microservice Dependency Graph"
                className="w-full h-auto rounded-2xl shadow-2xl border border-gray-200"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>

              {/* Floating metrics cards */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="text-xs text-gray-600">Detection Accuracy</div>
                <div className="text-lg font-bold text-green-600">93.2%</div>
                <div className="text-xs text-gray-500">Precision</div>
              </div>

              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="text-xs text-gray-600">Anti-Patterns</div>
                <div className="text-lg font-bold text-blue-600">12</div>
                <div className="text-xs text-gray-500">Detected Types</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
