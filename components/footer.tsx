"use client"

import { Separator } from "@/components/ui/separator"
import { Github, Mail, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-50 to-indigo-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IP</span>
              </div>
              <span className="text-xl font-bold text-gray-900">InfraPulse</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Intelligent Monitoring & Analysis Tool for Microservice Architectures. Advancing the field of distributed
              systems observability.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Home
              </a>
              <a href="#domain" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Research Domain
              </a>
              <a href="#milestones" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Milestones
              </a>
              <a href="#documents" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Documents
              </a>
              <a href="#about" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                About Us
              </a>
            </div>
          </div>

          {/* Contact & Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Connect</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/CDAP-24-25J-035"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors text-sm"
              >
                <Github className="h-4 w-4" />
                <span>GitHub Repository</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="mailto:sapumalwijekoon4@gmail.com"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>Contact Team</span>
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-gray-900 mb-1">
              InfraPulse – Microservice Architecture Monitoring & Analysis
            </h4>
            <p className="text-sm text-gray-600">
              A research project by SLIIT students under the guidance of experienced supervisors
            </p>
          </div>
          <div className="text-sm text-gray-500">© 2024 InfraPulse Research Team. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
