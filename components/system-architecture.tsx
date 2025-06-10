"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import {
  Database,
  Server,
  Activity,
  BarChart3,
  Network,
  Layers,
  Zap,
  AlertTriangle,
  LineChart,
  ArrowRight,
  ChevronRight,
} from "lucide-react"

export default function SystemArchitecture() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null)

  const handleLayerHover = (layer: string | null) => {
    setActiveLayer(layer)
  }

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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">System Architecture</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            InfraPulse's comprehensive architecture integrates data collection, processing, and analysis to provide
            real-time insights into microservice health and architecture.
          </p>
        </motion.div>

        <div className="relative">
          {/* Architecture Diagram */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg mb-12 overflow-hidden">
            <div className="relative h-[700px]">
              {/* Background Grid */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
                  {Array.from({ length: 144 }).map((_, i) => (
                    <div key={i} className="border border-blue-200" />
                  ))}
                </div>
              </div>

              {/* Layer 1: Data Collection */}
              <motion.div
                className={`absolute left-0 right-0 top-0 h-[180px] ${activeLayer === "collection" ? "z-30" : "z-10"}`}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                onMouseEnter={() => handleLayerHover("collection")}
                onMouseLeave={() => handleLayerHover(null)}
              >
                <div
                  className={`absolute inset-0 bg-blue-50 rounded-xl border-2 ${activeLayer === "collection" ? "border-blue-500 shadow-lg" : "border-blue-200"} transition-all duration-300`}
                ></div>

                <div className="relative p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <Layers className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Data Collection Layer</h3>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Layer 1</Badge>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { name: "Prometheus", icon: Activity, desc: "Metrics Collection" },
                      { name: "Jaeger", icon: Network, desc: "Distributed Tracing" },
                      { name: "Envoy Proxy", icon: Server, desc: "Service Mesh" },
                      { name: "Gremlin", icon: Zap, desc: "Chaos Engineering" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-lg p-3 shadow-sm border border-blue-100 flex flex-col items-center text-center"
                      >
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-2">
                          <item.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 className="font-medium text-gray-900 text-sm">{item.name}</h4>
                        <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-center">
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="h-6 w-6 text-blue-400" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Layer 2: Data Processing */}
              <motion.div
                className={`absolute left-0 right-0 top-[200px] h-[200px] ${activeLayer === "processing" ? "z-30" : "z-20"}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                onMouseEnter={() => handleLayerHover("processing")}
                onMouseLeave={() => handleLayerHover(null)}
              >
                <div
                  className={`absolute inset-0 bg-green-50 rounded-xl border-2 ${activeLayer === "processing" ? "border-green-500 shadow-lg" : "border-green-200"} transition-all duration-300`}
                ></div>

                <div className="relative p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                        <Server className="h-5 w-5 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Data Processing Layer</h3>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Layer 2</Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { name: "Apache Kafka", icon: Zap, desc: "Event Streaming" },
                      { name: "TimeScaleDB", icon: Database, desc: "Time-Series Storage" },
                      { name: "Neo4j", icon: Network, desc: "Graph Database" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-lg p-4 shadow-sm border border-green-100 flex flex-col items-center text-center"
                      >
                        <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-2">
                          <item.icon className="h-7 w-7 text-green-600" />
                        </div>
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-center">
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                    >
                      <ArrowRight className="h-6 w-6 text-green-400" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Layer 3: Analysis & Detection */}
              <motion.div
                className={`absolute left-0 right-0 top-[420px] h-[200px] ${activeLayer === "analysis" ? "z-30" : "z-20"}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                onMouseEnter={() => handleLayerHover("analysis")}
                onMouseLeave={() => handleLayerHover(null)}
              >
                <div
                  className={`absolute inset-0 bg-purple-50 rounded-xl border-2 ${activeLayer === "analysis" ? "border-purple-500 shadow-lg" : "border-purple-200"} transition-all duration-300`}
                ></div>

                <div className="relative p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                        <BarChart3 className="h-5 w-5 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Analysis & Detection Layer</h3>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">Layer 3</Badge>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { name: "Coupling Analyzer", icon: Network, desc: "Dependency Analysis" },
                      { name: "Anti-Pattern Detector", icon: AlertTriangle, desc: "Pattern Recognition" },
                      { name: "Resilience Evaluator", icon: Activity, desc: "Health Assessment" },
                      { name: "Change Point Detector", icon: LineChart, desc: "Trend Analysis" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-lg p-3 shadow-sm border border-purple-100 flex flex-col items-center text-center"
                      >
                        <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-2">
                          <item.icon className="h-6 w-6 text-purple-600" />
                        </div>
                        <h4 className="font-medium text-gray-900 text-sm">{item.name}</h4>
                        <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-center">
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                    >
                      <ArrowRight className="h-6 w-6 text-purple-400" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Layer 4: Visualization */}
              <motion.div
                className={`absolute left-0 right-0 top-[640px] h-[60px] ${activeLayer === "visualization" ? "z-30" : "z-20"}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                onMouseEnter={() => handleLayerHover("visualization")}
                onMouseLeave={() => handleLayerHover(null)}
              >
                <div
                  className={`absolute inset-0 bg-orange-50 rounded-xl border-2 ${activeLayer === "visualization" ? "border-orange-500 shadow-lg" : "border-orange-200"} transition-all duration-300`}
                ></div>

                <div className="relative p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                      <LineChart className="h-5 w-5 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Visualization Dashboard</h3>
                  </div>
                  <Badge className="bg-orange-100 text-orange-800">Layer 4</Badge>
                </div>
              </motion.div>

              {/* Data Flow Animations */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Collection to Processing */}
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={`flow1-${i}`}
                    className="absolute w-3 h-3 rounded-full bg-blue-500"
                    style={{ left: `${20 + i * 25}%`, top: "180px" }}
                    animate={{
                      y: [0, 20],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.5,
                      repeatDelay: 1,
                    }}
                  />
                ))}

                {/* Processing to Analysis */}
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={`flow2-${i}`}
                    className="absolute w-3 h-3 rounded-full bg-green-500"
                    style={{ left: `${30 + i * 15}%`, top: "400px" }}
                    animate={{
                      y: [0, 20],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.5 + 1,
                      repeatDelay: 1,
                    }}
                  />
                ))}

                {/* Analysis to Visualization */}
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={`flow3-${i}`}
                    className="absolute w-3 h-3 rounded-full bg-purple-500"
                    style={{ left: `${25 + i * 20}%`, top: "620px" }}
                    animate={{
                      y: [0, 20],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.5 + 2,
                      repeatDelay: 1,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Layer Details */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Data Collection",
                color: "blue",
                icon: Layers,
                description:
                  "Collects metrics, traces, and events from microservices using Prometheus, Jaeger, and service mesh proxies.",
                features: ["Real-time metrics", "Distributed tracing", "Service mesh integration", "Chaos engineering"],
              },
              {
                title: "Data Processing",
                color: "green",
                icon: Server,
                description:
                  "Processes and stores collected data using Kafka streams, time-series databases, and graph databases.",
                features: ["Event streaming", "Time-series analysis", "Graph data modeling", "Real-time processing"],
              },
              {
                title: "Analysis & Detection",
                color: "purple",
                icon: BarChart3,
                description:
                  "Analyzes data to detect anti-patterns, evaluate resilience, and monitor coupling between services.",
                features: [
                  "Anti-pattern detection",
                  "Coupling analysis",
                  "Resilience scoring",
                  "Change point detection",
                ],
              },
              {
                title: "Visualization",
                color: "orange",
                icon: LineChart,
                description:
                  "Presents insights through interactive dashboards with dependency graphs, metrics, and alerts.",
                features: ["Interactive graphs", "Real-time alerts", "Trend visualization", "Actionable insights"],
              },
            ].map((layer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
                className={`border-t-4 border-${layer.color}-500 bg-white rounded-lg shadow-md overflow-hidden`}
                onMouseEnter={() => handleLayerHover(layer.title.toLowerCase().split(" ")[0])}
                onMouseLeave={() => handleLayerHover(null)}
              >
                <div className={`bg-${layer.color}-50 p-4`}>
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-${layer.color}-100 rounded-lg flex items-center justify-center`}>
                      <layer.icon className={`h-5 w-5 text-${layer.color}-600`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{layer.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4">{layer.description}</p>
                  <ul className="space-y-2">
                    {layer.features.map((feature, j) => (
                      <li key={j} className="flex items-center text-sm text-gray-700">
                        <ChevronRight className={`h-4 w-4 text-${layer.color}-500 mr-2 flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
