"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { AlertTriangle, TrendingDown, Eye, Target, Zap } from "lucide-react"

const problemAreas = [
  {
    icon: AlertTriangle,
    title: "Architectural Smells",
    description: "Cyclic dependencies, tightly coupled modules, inappropriate service granularity",
  },
  {
    icon: TrendingDown,
    title: "Technical Debt",
    description: "Growing complexity and maintainability risks that are hard to detect",
  },
  {
    icon: Eye,
    title: "Limited Observability",
    description: "Lack of real-time architectural integrity visualization and analysis",
  },
  {
    icon: Target,
    title: "Root Cause Analysis",
    description: "Slow identification of architectural drift and failure patterns",
  },
]

export default function ResearchProblem() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Animated Problem Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-red-50 to-orange-100 rounded-2xl overflow-hidden shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="border border-red-300"
                      animate={{ opacity: [0.1, 0.3, 0.1] }}
                      transition={{
                        duration: 4,
                        delay: i * 0.05,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Problematic Microservice Architecture */}
              <div className="absolute inset-0 p-6">
                {/* Services with Problems */}
                {[
                  { name: "Gateway", x: "15%", y: "20%", status: "overloaded", color: "bg-red-500" },
                  { name: "Auth", x: "45%", y: "15%", status: "coupled", color: "bg-orange-500" },
                  { name: "User", x: "75%", y: "25%", status: "bottleneck", color: "bg-red-600" },
                  { name: "Order", x: "70%", y: "60%", status: "cyclic", color: "bg-yellow-600" },
                  { name: "Payment", x: "40%", y: "70%", status: "chatty", color: "bg-orange-600" },
                  { name: "Inventory", x: "15%", y: "65%", status: "knot", color: "bg-red-700" },
                  { name: "Notification", x: "25%", y: "45%", status: "shared", color: "bg-yellow-500" },
                ].map((service, index) => (
                  <motion.div
                    key={service.name}
                    className={`absolute w-16 h-16 ${service.color} rounded-lg shadow-lg flex items-center justify-center`}
                    style={{ left: service.x, top: service.y }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: service.status === "overloaded" ? [0, 5, -5, 0] : 0,
                    }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      duration: 0.5,
                      rotate: {
                        duration: 2,
                        repeat: service.status === "overloaded" ? Number.POSITIVE_INFINITY : 0,
                      },
                    }}
                  >
                    <div className="text-white text-xs font-medium text-center">{service.name}</div>

                    {/* Problem Indicators */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: [0, 1.2, 1],
                      }}
                      transition={{
                        delay: 1 + index * 0.2,
                        scale: {
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                        },
                      }}
                    >
                      <AlertTriangle className="w-3 h-3 text-white" />
                    </motion.div>
                  </motion.div>
                ))}

                {/* Problematic Connections */}
                <svg className="absolute inset-0 w-full h-full">
                  {/* Cyclic Dependencies - Red Dashed Lines */}
                  <motion.path
                    d="M 45 15 L 75 25 L 70 60 L 40 70 L 45 15"
                    stroke="#dc2626"
                    strokeWidth="3"
                    strokeDasharray="8,4"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ delay: 2, duration: 2 }}
                  />

                  {/* Tight Coupling - Thick Orange Lines */}
                  <motion.path
                    d="M 15 20 L 45 15"
                    stroke="#ea580c"
                    strokeWidth="4"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.7 }}
                    transition={{ delay: 2.5, duration: 1 }}
                  />
                  <motion.path
                    d="M 15 20 L 25 45"
                    stroke="#ea580c"
                    strokeWidth="4"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.7 }}
                    transition={{ delay: 2.7, duration: 1 }}
                  />

                  {/* Chatty Communication - Multiple Thin Lines */}
                  {[0, 1, 2, 3].map((i) => (
                    <motion.path
                      key={i}
                      d={`M 40 70 L 25 ${45 + i * 2}`}
                      stroke="#f59e0b"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.6 }}
                      transition={{ delay: 3 + i * 0.1, duration: 0.5 }}
                    />
                  ))}

                  {/* Data Flow Issues */}
                  {[
                    { path: "M 15 20 L 75 25", color: "#dc2626" },
                    { path: "M 75 25 L 70 60", color: "#ea580c" },
                    { path: "M 70 60 L 40 70", color: "#f59e0b" },
                  ].map((flow, index) => (
                    <motion.circle
                      key={index}
                      r="4"
                      fill={flow.color}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        offsetDistance: ["0%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        delay: 4 + index * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 2,
                      }}
                      style={{
                        offsetPath: `path("${flow.path}")`,
                      }}
                    />
                  ))}
                </svg>

                {/* Problem Annotations */}
                <motion.div
                  className="absolute top-4 right-4 bg-red-600/90 backdrop-blur-sm rounded-lg p-3 text-white"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 4, duration: 0.5 }}
                >
                  <div className="text-xs font-medium mb-2 flex items-center">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    Critical Issues
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Cyclic Dependencies:</span>
                      <span className="font-mono">4</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tight Coupling:</span>
                      <span className="font-mono">High</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bottlenecks:</span>
                      <span className="font-mono">3</span>
                    </div>
                  </div>
                </motion.div>

                {/* Anti-Pattern Labels */}
                {[
                  { text: "Service Knot", x: "15%", y: "80%", delay: 4.5 },
                  { text: "Chatty Service", x: "40%", y: "85%", delay: 5 },
                  { text: "Bottleneck", x: "75%", y: "40%", delay: 5.5 },
                  { text: "Cyclic Dependency", x: "55%", y: "35%", delay: 6 },
                ].map((label, index) => (
                  <motion.div
                    key={index}
                    className="absolute bg-red-500/80 text-white text-xs px-2 py-1 rounded"
                    style={{ left: label.x, top: label.y }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: label.delay, duration: 0.3 }}
                  >
                    {label.text}
                  </motion.div>
                ))}

                {/* Performance Degradation Indicator */}
                <motion.div
                  className="absolute bottom-4 left-4 bg-orange-600/90 backdrop-blur-sm rounded-lg p-3 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 6.5, duration: 0.5 }}
                >
                  <div className="text-xs font-medium mb-2 flex items-center">
                    <TrendingDown className="w-3 h-3 mr-1" />
                    Performance Impact
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Latency:</span>
                      <span className="font-mono text-red-300">+340%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Error Rate:</span>
                      <span className="font-mono text-red-300">12.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Availability:</span>
                      <span className="font-mono text-red-300">87.2%</span>
                    </div>
                  </div>
                </motion.div>

                {/* Complexity Visualization */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ delay: 7, duration: 1 }}
                >
                  <div className="w-32 h-32 border-4 border-red-400 rounded-full animate-pulse">
                    <div className="w-24 h-24 border-4 border-orange-400 rounded-full m-3 animate-pulse">
                      <div className="w-16 h-16 border-4 border-yellow-400 rounded-full m-3 animate-pulse">
                        <div className="w-8 h-8 bg-red-500 rounded-full m-3 flex items-center justify-center">
                          <Zap className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Problem Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="w-16 h-1 bg-red-600 mb-4"></div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Research Problem</h2>
            </div>

            <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                Microservice-based systems, while offering scalability and flexibility, inherently introduce operational
                complexity due to their distributed and interdependent nature. This complexity significantly elevates
                the likelihood of partial service degradation, performance bottlenecks, and cascading failures.
              </p>
              <p>
                Currently, there exists no unified methodology to synthesize telemetry, testing, and fault injection
                outputs into a coherent, quantifiable metric that reflects the overall resilience and architectural
                health of a microservice system. Three critical problems emerge:
              </p>
              <p>
                <strong>Resilience Quantification:</strong> How can the resiliency of microservices be quantified using
                runtime metrics, automated stress testing, and chaos engineering to provide actionable insights?
              </p>
              <p>
                <strong>Architectural Erosion:</strong> How can we detect and prevent architectural degradation through
                real-time monitoring of service coupling and dependency evolution using weighted graphs?
              </p>
              <p>
                <strong>Anti-Pattern Detection:</strong> How can we automatically detect architectural anti-patterns in
                both synchronous and asynchronous communication patterns using distributed tracing and graph analytics?
              </p>
            </div>

            {/* Problem Areas Grid */}
            <div className="grid grid-cols-2 gap-4">
              {problemAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow border-l-4 border-red-400">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                            <area.icon className="h-4 w-4 text-red-600" />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold text-gray-900 text-sm">{area.title}</h3>
                          <p className="text-gray-600 text-xs leading-relaxed">{area.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Solution Preview */}
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Badge className="bg-blue-600">Solution</Badge>
                <span className="text-sm font-medium text-blue-900">InfraPulse Approach</span>
              </div>
              <p className="text-blue-800 text-sm">
                InfraPulse addresses these limitations by introducing a graph-based, runtime-aware platform that enables
                architectural visualization, smell detection, and evolution tracking in microservice ecosystems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
