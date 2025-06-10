"use client"

import { motion } from "framer-motion"
import { Calendar, CheckCircle, Clock } from "lucide-react"
import { Timeline, TimelineItem, TimelineConnector, TimelineDot, TimelineContent } from "@/components/ui/timeline"

const milestones = [
  {
    date: "05/05/2024",
    title: "Project Proposal",
    description: "Initial project proposal submission",
    status: "completed",
  },
  {
    date: "23/08/2024",
    title: "Proposal Report",
    description: "Comprehensive project proposal document describing the project vision and scope",
    status: "completed",
  },
  {
    date: "04/12/2024",
    title: "Progress Presentation 1",
    description: "First milestone presentation showcasing initial development progress",
    status: "completed",
  },
  {
    date: "19/03/2025",
    title: "Progress Presentation 2",
    description: "Second progress presentation demonstrating advanced system capabilities",
    status: "current",
  },
  {
    date: "19/03/2025",
    title: "Research Paper",
    description: "Academic paper describing contributions to existing knowledge in microservice monitoring",
    status: "upcoming",
  },
  {
    date: "11/04/2025",
    title: "Final Report",
    description: "Comprehensive evaluation of the completed project and its outcomes",
    status: "upcoming",
  },
  {
    date: "27/05/2025",
    title: "Final Presentation & Viva",
    description: "Individual assessment of each member's contribution to the project",
    status: "upcoming",
  },
  {
    date: "27/05/2025",
    title: "Website Assessment",
    description: "Evaluation of the project website and its effectiveness in promoting the research",
    status: "upcoming",
  },
  {
    date: "June 2025",
    title: "Research Logbook",
    description: "Final validation of project status including all status documents and deliverables",
    status: "upcoming",
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-4 w-4 text-green-600" />
    case "current":
      return <Clock className="h-4 w-4 text-blue-600" />
    default:
      return <Calendar className="h-4 w-4 text-gray-400" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "border-green-500 bg-green-50"
    case "current":
      return "border-blue-500 bg-blue-50"
    default:
      return "border-gray-300 bg-gray-50"
  }
}

export default function Milestones() {
  return (
    <section id="milestones" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Milestones</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track our research journey from initial proposal to final delivery
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Timeline>
            {milestones.map((milestone, index) => (
              <TimelineItem key={index}>
                <TimelineConnector />
                <TimelineDot className={getStatusColor(milestone.status)}>
                  {getStatusIcon(milestone.status)}
                </TimelineDot>
                <TimelineContent>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{milestone.date}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  )
}
