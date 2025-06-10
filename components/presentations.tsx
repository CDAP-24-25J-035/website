"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Presentation, Calendar, Users } from "lucide-react"
import { motion } from "framer-motion"

const presentations = [
  {
    title: "Proposal Presentation",
    description: "Initial project proposal and research methodology overview",
    type: "Proposal",
    status: "Available",
    date: "May 2024",
    duration: "15 mins",
    audience: "Academic Panel",
    link: "https://drive.google.com/file/d/1d-7C7NaLcz-idvlh5vbMiKsO11sv75_7/view?usp=drive_link",
  },
  {
    title: "Progress Presentation 1",
    description: "First milestone achievements and technical implementation progress",
    type: "Progress",
    status: "Available",
    date: "December 2024",
    duration: "20 mins",
    audience: "Supervisors & Peers",
    link: "https://drive.google.com/file/d/1BSz2KQaucUcBql23QYsPI611Q_jmgP4Z/view?usp=drive_link",
  },
  {
    title: "Progress Presentation 2",
    description: "Advanced system capabilities and research findings demonstration",
    type: "Progress",
    status: "Available",
    date: "March 2025",
    duration: "25 mins",
    audience: "Academic Panel",
    link: "https://drive.google.com/file/d/19SvkbkSt6tVoVDsh-bYGPQ-n_YY2nNmC/view?usp=drive_link",
  },
  {
    title: "Final Presentation",
    description: "Complete project showcase with results, evaluation, and future work",
    type: "Final",
    status: "Available",
    date: "May 2025",
    duration: "30 mins",
    audience: "Evaluation Panel",
    link: "https://drive.google.com/file/d/1UXd9OVgjifOE8S-QZvO4Vl0CsqpRDYiM/view?usp=drive_link",
  },
]

const getStatusColor = (status: string) => {
  return status === "Available" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "Proposal":
      return "bg-blue-100 text-blue-800"
    case "Progress":
      return "bg-purple-100 text-purple-800"
    case "Final":
      return "bg-orange-100 text-orange-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function Presentations() {
  return (
    <section id="presentations" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Presentations</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access presentation slides and materials from our research milestones
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {presentations.map((presentation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Presentation className="h-6 w-6 text-blue-600" />
                    </div>
                    <Badge className={getStatusColor(presentation.status)}>{presentation.status}</Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{presentation.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{presentation.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>{presentation.date}</span>
                      </div>
                      <Badge variant="outline" className={`text-xs ${getTypeColor(presentation.type)}`}>
                        {presentation.type}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Duration: {presentation.duration}</span>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{presentation.audience}</span>
                      </div>
                    </div>
                  </div>

                  {presentation.status === "Available" ? (
                    <a
                      href={presentation.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full" variant="default">
                        <Download className="mr-2 h-4 w-4" />
                        Download Slides
                      </Button>
                    </a>
                  ) : (
                    <Button className="w-full" variant="secondary" disabled>
                      <Download className="mr-2 h-4 w-4" />
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
