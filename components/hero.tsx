"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {
  const handleGithubClick = () => {
    window.open("https://github.com/CDAP-24-25J-035", "_blank")
  }

  // For the animated metrics
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCount1(93)
    }, 1000)
    const timer2 = setTimeout(() => {
      setCount2(87)
    }, 1500)
    const timer3 = setTimeout(() => {
      setCount3(12)
    }, 2000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16 lg:pt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-blue-600 font-semibold text-lg"
              >
                Welcome to InfraPulse
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Building Resilient <span className="text-blue-600">Microservices</span>: A Comprehensive Framework
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-gray-600 leading-relaxed max-w-2xl"
              >
                A comprehensive framework for performance testing, fault injection, continuous monitoring, coupling
                analysis, anti-pattern detection, and resilience evaluation in microservice architectures.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={handleGithubClick}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                <Github className="mr-2 h-5 w-5" />
                Explore on GitHub
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg border-blue-200 hover:bg-blue-50"
                onClick={() => document.getElementById("domain")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Microservice Architecture Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl overflow-hidden shadow-2xl">
              {/* Grid Background */}
              <div className="absolute inset-0">
                <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
                  {Array.from({ length: 100 }).map((_, i) => (
                    <div key={i} className="border border-blue-800/20" />
                  ))}
                </div>
              </div>

              {/* Microservices */}
              <div className="absolute inset-0 p-8">
                {/* Service Nodes */}
                {[
                  { name: "API Gateway", x: "20%", y: "20%", color: "bg-blue-500", size: "lg" },
                  { name: "User Service", x: "70%", y: "15%", color: "bg-green-500", size: "md" },
                  { name: "Order Service", x: "80%", y: "50%", color: "bg-purple-500", size: "md" },
                  { name: "Payment Service", x: "65%", y: "80%", color: "bg-yellow-500", size: "md" },
                  { name: "Inventory", x: "30%", y: "75%", color: "bg-red-500", size: "md" },
                  { name: "Notification", x: "15%", y: "50%", color: "bg-teal-500", size: "sm" },
                ].map((service, index) => {
                  const sizeClasses = {
                    sm: "w-14 h-14",
                    md: "w-16 h-16",
                    lg: "w-20 h-20",
                  }

                  return (
                    <motion.div
                      key={service.name}
                      className={`absolute ${sizeClasses[service.size as keyof typeof sizeClasses]} ${
                        service.color
                      } rounded-lg shadow-lg flex items-center justify-center`}
                      style={{ left: service.x, top: service.y }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                    >
                      <div className="text-white text-xs font-medium text-center px-1">{service.name}</div>

                      {/* Pulse Effect */}
                      <motion.div
                        className={`absolute inset-0 ${service.color} rounded-lg`}
                        animate={{ opacity: [0.7, 0], scale: [1, 1.5] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: index * 0.5,
                        }}
                      />
                    </motion.div>
                  )
                })}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  {/* API Gateway to Services */}
                  <motion.path
                    d="M 20 20 L 70 15"
                    stroke="#4f46e5"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  />
                  <motion.path
                    d="M 20 20 L 80 50"
                    stroke="#4f46e5"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                  />
                  <motion.path
                    d="M 20 20 L 65 80"
                    stroke="#4f46e5"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                  />
                  <motion.path
                    d="M 20 20 L 30 75"
                    stroke="#4f46e5"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                  />
                  <motion.path
                    d="M 20 20 L 15 50"
                    stroke="#4f46e5"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ delay: 2.0, duration: 0.8 }}
                  />

                  {/* Service to Service */}
                  <motion.path
                    d="M 70 15 L 80 50"
                    stroke="#a855f7"
                    strokeWidth="2"
                    strokeDasharray="4"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ delay: 2.2, duration: 0.8 }}
                  />
                  <motion.path
                    d="M 80 50 L 65 80"
                    stroke="#a855f7"
                    strokeWidth="2"
                    strokeDasharray="4"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ delay: 2.4, duration: 0.8 }}
                  />
                  <motion.path
                    d="M 65 80 L 30 75"
                    stroke="#a855f7"
                    strokeWidth="2"
                    strokeDasharray="4"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ delay: 2.6, duration: 0.8 }}
                  />

                  {/* Data Flow Animation */}
                  {[
                    "M 20 20 L 70 15",
                    "M 20 20 L 80 50",
                    "M 20 20 L 65 80",
                    "M 20 20 L 30 75",
                    "M 20 20 L 15 50",
                    "M 70 15 L 80 50",
                    "M 80 50 L 65 80",
                    "M 65 80 L 30 75",
                  ].map((path, index) => (
                    <motion.circle
                      key={index}
                      r="3"
                      fill="#60a5fa"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        offsetDistance: ["0%", "100%"],
                      }}
                      transition={{
                        duration: 3,
                        delay: 3 + index * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: index * 0.5,
                      }}
                      style={{
                        offsetPath: `path("${path}")`,
                      }}
                    />
                  ))}
                </svg>

                {/* Monitoring Overlay */}
                <motion.div
                  className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3, duration: 0.5 }}
                >
                  <div className="text-xs font-medium mb-2">InfraPulse Monitor</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Detection Accuracy:</span>
                      <span className="font-mono">{count1}%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Resilience Score:</span>
                      <span className="font-mono">{count2}%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Anti-Patterns:</span>
                      <span className="font-mono">{count3} detected</span>
                    </div>
                  </div>
                </motion.div>

                {/* Framework Features */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.5, duration: 0.5 }}
                >
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="space-y-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto"></div>
                      <div className="text-[10px] font-medium">Coupling Analysis</div>
                    </div>
                    <div className="space-y-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full mx-auto"></div>
                      <div className="text-[10px] font-medium">Anti-Pattern Detection</div>
                    </div>
                    <div className="space-y-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mx-auto"></div>
                      <div className="text-[10px] font-medium">Resilience Evaluation</div>
                    </div>
                  </div>
                </motion.div>

                {/* Alert Indicators */}
                <motion.div
                  className="absolute top-[50%] left-[80%] bg-red-500/80 rounded-full w-6 h-6 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: [0, 1.2, 1] }}
                  transition={{ delay: 4, duration: 0.5 }}
                >
                  <span className="text-white text-xs font-bold">!</span>
                </motion.div>

                {/* Cyclic Dependency Indicator */}
                <motion.div
                  className="absolute top-[15%] left-[70%]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4.5, duration: 0.5 }}
                >
                  <div className="bg-orange-500/80 text-white text-[10px] px-2 py-1 rounded">Anti-Pattern</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
