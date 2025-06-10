"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Calendar } from "lucide-react"
import { motion } from "framer-motion"

const documents = [
  {
    title: "Proposal Report",
    description: "Comprehensive project proposal with methodology and expected outcomes",
    type: "Report",
    status: "Available",
    date: "August 2024",
    link: "https://drive.google.com/drive/folders/1VIeDDKSm2nIWd8vR9yuJdscgiW-R2gJ0?usp=drive_link",
  },
  {
    title: "Status Document 1",
    description: "First quarter progress report and milestone achievements",
    type: "Status",
    status: "Available",
    date: "December 2024",
    link: "#",
  },
  {
    title: "Status Document 2",
    description: "Second quarter progress report with technical implementation details",
    type: "Status",
    status: "Available",
    date: "March 2025",
    link: "#",
  },
  {
    title: "Final Report",
    description: "Complete project evaluation, results, and future recommendations",
    type: "Report",
    status: "Available",
    date: "April 2025",
    link: "https://drive.google.com/drive/folders/1tU49fa8BtRJXRscqfgQOVe8NFi5E93R-?usp=drive_link",
  },
  {
    title: "Research Paper",
    description: "Academic publication detailing our contributions to microservice monitoring",
    type: "Paper",
    status: "Coming Soon",
    date: "March 2025",
    link: "#",
  },
]

const getStatusColor = (status: string) => {
  return status === "Available" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
}

export default function Documents() {
  return (
    <section id="documents" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Documents</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access all project documentation, reports, and research papers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
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
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <Badge className={getStatusColor(doc.status)}>{doc.status}</Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{doc.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{doc.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{doc.date}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {doc.type}
                    </Badge>
                  </div>

                  <Button
                    className="w-full"
                    variant={doc.status === "Available" ? "default" : "secondary"}
                    disabled={doc.status !== "Available"}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {doc.status === "Available" ? "Download" : "Coming Soon"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
