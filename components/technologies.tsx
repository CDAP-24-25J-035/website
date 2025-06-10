"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Database, Code, Cloud, BarChart3, Network, Shield, Eye } from "lucide-react"

const technologies = [
  {
    name: "Java 21 & Spring Boot 3.3",
    category: "Backend",
    description: "High-performance backend services with Project Loom virtual threads for concurrent processing",
    icon: Code,
    color: "bg-blue-100 text-blue-600",
    features: ["Virtual Threads", "Reactive Programming", "Microservice Framework"],
  },
  {
    name: "Python 3.12 & FastAPI",
    category: "Analytics",
    description: "Graph analytics and anti-pattern detection with NetworkX and Neo4j integration",
    icon: BarChart3,
    color: "bg-green-100 text-green-600",
    features: ["Graph Analytics", "Machine Learning", "Statistical Analysis"],
  },
  {
    name: "Apache Kafka 3.7",
    category: "Messaging",
    description: "High-throughput distributed streaming platform for real-time data ingestion",
    icon: Network,
    color: "bg-purple-100 text-purple-600",
    features: ["Stream Processing", "Event Sourcing", "Fault Tolerance"],
  },
  {
    name: "TimeScaleDB & Neo4j",
    category: "Storage",
    description: "Time-series database for metrics and graph database for dependency analysis",
    icon: Database,
    color: "bg-orange-100 text-orange-600",
    features: ["Time-Series Storage", "Graph Queries", "Real-time Analytics"],
  },
  {
    name: "Prometheus & Grafana",
    category: "Monitoring",
    description: "Comprehensive monitoring stack for metrics collection and visualization",
    icon: Eye,
    color: "bg-indigo-100 text-indigo-600",
    features: ["Metrics Collection", "Alerting", "Custom Dashboards"],
  },
  {
    name: "React 18 & D3.js",
    category: "Frontend",
    description: "Interactive visualization dashboard with dynamic graph rendering capabilities",
    icon: Shield,
    color: "bg-red-100 text-red-600",
    features: ["Interactive Graphs", "Real-time Updates", "Responsive Design"],
  },
]

const categoryColors = {
  Backend: "bg-blue-50 text-blue-700 border-blue-200",
  Analytics: "bg-green-50 text-green-700 border-green-200",
  Messaging: "bg-purple-50 text-purple-700 border-purple-200",
  Storage: "bg-orange-50 text-orange-700 border-orange-200",
  Monitoring: "bg-indigo-50 text-indigo-700 border-indigo-200",
  Frontend: "bg-red-50 text-red-700 border-red-200",
}

export default function Technologies() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Technology Stack</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technologies powering InfraPulse's microservice monitoring and analysis capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md group">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${tech.color} group-hover:scale-110 transition-transform`}
                    >
                      <tech.icon className="h-6 w-6" />
                    </div>
                    <Badge className={categoryColors[tech.category as keyof typeof categoryColors]}>
                      {tech.category}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">{tech.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{tech.description}</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-900">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tech.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Architecture Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Architecture Integration</h3>
                <p className="text-gray-600">
                  Our technology stack is designed for seamless integration and optimal performance
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Code className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Backend Services</h4>
                  <p className="text-sm text-gray-600">Go-based microservices with high concurrency and performance</p>
                </div>

                <div className="space-y-2">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Database className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Data Layer</h4>
                  <p className="text-sm text-gray-600">MongoDB for flexible data storage and real-time analytics</p>
                </div>

                <div className="space-y-2">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <Cloud className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Infrastructure</h4>
                  <p className="text-sm text-gray-600">Kubernetes orchestration with Docker containerization</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
