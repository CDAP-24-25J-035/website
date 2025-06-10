"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { motion } from "framer-motion"

const supervisors = [
  {
    name: "Dr. Dharshana Kasthurirathna",
    email: "dharshana.k@sliit.lk",
    role: "Senior Supervisor",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Ms. Hansi De Silva",
    email: "hansi.d@sliit.lk",
    role: "Co-Supervisor",
    image: "/placeholder.svg?height=200&width=200",
  },
]

const teamMembers = [
  {
    name: "Sapumal Wijekoon",
    email: "sapumalwijekoon4@gmail.com",
    role: "Lead Developer",
    specialization: "System Architecture & Backend Development",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Shabina Farveen",
    email: "shabinafarveen@gmail.com",
    role: "Research Analyst",
    specialization: "Data Analysis & Machine Learning",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Heshanth Zimmendra",
    email: "heshanthzimmendra@gmail.com",
    role: "Frontend Developer",
    specialization: "UI/UX & Visualization",
    image: "/placeholder.svg?height=200&width=200",
  },
]

interface PersonCardProps {
  person: {
    name: string
    email: string
    role: string
    specialization?: string
    image: string
  }
}

function PersonCard({ person }: PersonCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow border-0 shadow-md">
      <div className="aspect-square overflow-hidden">
        <img
          src={person.image || "/placeholder.svg"}
          alt={`${person.name}'s picture`}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">{person.name}</h3>
          <p className="text-blue-600 font-medium">{person.role}</p>
          {person.specialization && <p className="text-sm text-gray-600">{person.specialization}</p>}
        </div>

        <div className="flex space-x-2">
          <Button size="sm" variant="outline" asChild>
            <a href={`mailto:${person.email}`}>
              <Mail className="h-4 w-4 mr-1" />
              Contact
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated team behind InfraPulse research project
          </p>
        </motion.div>

        {/* Supervisors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Project Supervisors</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {supervisors.map((supervisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PersonCard person={supervisor} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Research Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PersonCard person={member} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
