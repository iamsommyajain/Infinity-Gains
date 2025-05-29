"use client"
import emailjs from "emailjs-com"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Simple Validation
    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Please fill in all required fields (First Name, Email, Message)")
      return
    }

    emailjs
  .send(
    "service_79xknon",       // replace with your actual service ID
    "template_9p9vyfm",      // replace with your template ID
    {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    },
    "lqKIgI9A_-zB6JZaJ" // (public key) from EmailJS dashboard → Account → API Keys
  )
  .then(
    () => {
      alert("Message sent successfully!")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    },
    (error) => {
      console.error("FAILED...", error)
      alert("Something went wrong. Please try again.")
    }
  )

    alert("Message sent successfully!")
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">Contact Us</Badge>
          <h1 className="text-5xl font-bold mb-6">Get In Touch With Our Experts</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to start your financial journey? Our team of experts is here to help you make informed decisions about your financial future.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Call */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Call Our Experts</CardTitle>
                <CardDescription>Speak directly with our financial advisors</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600 mb-2">+91 99710 93683</p>
                <p className="text-gray-600 mb-4">Mon - Sat: 9:00 AM - 7:00 PM</p>
                <a href="tel:+919971093683">
                  <Button className="w-full bg-blue-600">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>WhatsApp Support</CardTitle>
                <CardDescription>Quick responses via WhatsApp</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-600 mb-2">+91 99710 93683</p>
                <p className="text-gray-600 mb-4">Available 24/7 for queries</p>
                <a href="https://wa.me/919971093683" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-green-600">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Meeting */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Schedule Meeting</CardTitle>
                <CardDescription>Book a personalized consultation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-purple-600 mb-2">Personalized Consultation</p>
                <p className="text-gray-600 mb-4">30-minute expert session</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <Input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <Input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                      <select title="service" name="service" value={formData.service} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Select a service</option>
                        <option>Life Insurance</option>
                        <option>Health Insurance</option>
                        <option>General Insurance</option>
                        <option>Mutual Funds</option>
                        <option>Personal Loans</option>
                        <option>Home Loans</option>
                        <option>Business Loans</option>
                        <option>Agent Training</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your requirements..." rows={4} />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Info Section (unchanged) */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>

              <div className="space-y-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Office Address</h3>
                        <p className="text-gray-600">
                          Delhi 110085
                          <br />
                          India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Phone Numbers</h3>
                        <p className="text-gray-600">
                          Main: +91 99710 93683
                          <br />
                          Support: +91 93507 73503
                          <br />
                          WhatsApp: +91 99710 93683
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Email Address</h3>
                        <p className="text-gray-600">
                          info@infinitygains.in
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Saturday: 9:00 AM - 7:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">Visit our office for in-person consultations</p>
          </div>

          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600">Interactive map would be embedded here</p>
              <p className="text-sm text-gray-500">123 Business District, Mumbai, Maharashtra 400001</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How quickly can I get a response to my inquiry?",
                answer:
                  "We typically respond to all inquiries within 2-4 hours during business hours. For urgent matters, please call us directly or message us on WhatsApp.",
              },
              {
                question: "Do you charge for initial consultations?",
                answer:
                  "No, we offer free initial consultations to understand your financial needs and explain how our services can help you achieve your goals.",
              },
              {
                question: "What documents do I need for insurance applications?",
                answer:
                  "Generally, you'll need identity proof, address proof, income documents, and medical reports (for health/life insurance). We'll provide a detailed checklist based on your specific requirements.",
              },
              {
                question: "Can I track my investment portfolio online?",
                answer:
                  "Yes, we provide online access to track your mutual fund investments, insurance policies, and loan status through our client portal and regular updates.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
            