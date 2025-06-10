"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Target } from "lucide-react"
import { motion } from "framer-motion"

export default function Domain() {
  return (
    <section id="domain" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Domain</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Literature Review */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h3 className="text-3xl font-bold text-gray-900">Literature Review</h3>
            </div>

            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p>
                Microservices Architecture (MSA) has emerged as a dominant paradigm for building large-scale distributed
                systems, enabling the design of applications as a suite of small, independently deployable services.
                Unlike monolithic systems, microservices decompose functionality into discrete services, each focused on
                a specific business capability.
              </p>
              <p>
                However, the distributed nature of MSA introduces substantial architectural complexity, especially as
                systems grow and services evolve. Key challenges include managing inter-service dependencies, ensuring
                resilience under fault conditions, and maintaining architectural integrity over time.
              </p>
              <p>
                Current monitoring tools focus primarily on operational metrics like CPU usage, memory consumption, and
                response times, but fail to provide insights into structural dependencies, coupling evolution, and
                architectural anti-patterns that can degrade system performance and maintainability.
              </p>
              <p>
                This research addresses these limitations through three integrated approaches: automated resilience
                testing with fault injection, real-time coupling monitoring using weighted dependency graphs, and
                comprehensive anti-pattern detection through distributed tracing and graph analytics.
              </p>
            </div>
          </motion.div>

          {/* References */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Key References</h3>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-200 pl-4">
                    <p className="text-sm text-gray-600 mb-1">[1]</p>
                    <p className="text-gray-800 font-medium">T. J. O. Prometheus Authors</p>
                    <p className="text-gray-600">
                      "A Comprehensive Overview of Prometheus for Monitoring System and Time-Series Data," Journal of
                      Cloud Monitoring Systems, 2020.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-200 pl-4">
                    <p className="text-sm text-gray-600 mb-1">[2]</p>
                    <p className="text-gray-800 font-medium">B. Apolinário, B. de França</p>
                    <p className="text-gray-600">
                      "Monitoring software architecture erosion in microservices," Journal of Systems and Software,
                      2020.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-200 pl-4">
                    <p className="text-sm text-gray-600 mb-1">[3]</p>
                    <p className="text-gray-800 font-medium">D. Taibi, V. Lenarduzzi</p>
                    <p className="text-gray-600">
                      "On the Definition of Microservice Bad Smells," IEEE Software, 2018.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
