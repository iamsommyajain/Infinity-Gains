import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Users,
  Phone,
  MessageCircle,
  BookOpen,
  Calculator,
  Star,
  CheckCircle,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30 w-fit">
                Your Trusted Financial Partner
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}
                  Infinity Gains
                </span>
                <br />
                {/* <span className="text-3xl lg:text-4xl text-blue-200">LLP</span> */}
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Your gateway to financial freedom through expert insurance, mutual funds, loans, and professional
                training services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <a href="tel:+919971093683">
                  <Button size="lg" variant="outline"
                    className="border-white/30 text-black hover:bg-white/10"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Expert
                  </Button>
                </a>

              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">1000+</div>
                    <div className="text-sm text-blue-200">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">₹10Cr+</div>
                    <div className="text-sm text-blue-200">Assets Managed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">100+</div>
                    <div className="text-sm text-blue-200">Trained Agents</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">24/7</div>
                    <div className="text-sm text-blue-200">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Financial Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From insurance protection to wealth creation, we provide end-to-end financial services tailored to your
              needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Insurance",
                description: "Life, Health & General Insurance",
                features: ["Life Insurance", "Health Coverage", "General Insurance", "Claims Support"],
                color: "blue",
              },
              {
                icon: TrendingUp,
                title: "Mutual Funds",
                description: "Wealth creation through SIP & Lumpsum",
                features: ["SIP Planning", "Portfolio Review", "Risk Assessment", "Goal Planning"],
                color: "green",
              },
              {
                icon: Calculator,
                title: "Loans",
                description: "Personal, Home & Business Loans",
                features: ["Personal Loans", "Home Loans", "Business Loans", "Quick Approval"],
                color: "purple",
              },
              {
                icon: BookOpen,
                title: "Training",
                description: "Professional agent training programs",
                features: ["Certification", "Skill Development", "Market Updates", "Career Growth"],
                color: "orange",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-${service.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Products</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Stay Connected & Informed</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our exclusive community and get access to expert insights, market updates, and personalized financial
              guidance.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-green-50 to-blue-50">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">WhatsApp Community</CardTitle>
                <CardDescription>Daily market updates and financial insights</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Daily market analysis
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Investment opportunities
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Policy updates
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Expert tips
                  </li>
                </ul>
                <Button className="w-full bg-green-500 hover:bg-green-600">Join WhatsApp Group</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Call the Expert</CardTitle>
                <CardDescription>Direct access to financial advisors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    One-on-one consultation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Personalized advice
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Portfolio review
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Goal planning
                  </li>
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">Schedule Call</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Agent Training</CardTitle>
                <CardDescription>Professional development programs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    Certification courses
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    Sales training
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    Product knowledge
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    Career support
                  </li>
                </ul>
                <Button className="w-full bg-purple-500 hover:bg-purple-600">Join Training</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Business Owner",
                content:
                  "Infinity Gains helped me secure the perfect insurance coverage for my family. Their expert guidance made the process seamless.",
                rating: 5,
              },
              {
                name: "Priya Sharma",
                role: "Software Engineer",
                content:
                  "The mutual fund advisory service is excellent. My portfolio has grown significantly with their strategic planning.",
                rating: 5,
              },
              {
                name: "Amit Patel",
                role: "Insurance Agent",
                content:
                  "The training program transformed my career. I'm now a certified agent with confidence and knowledge to help clients.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Financial Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied clients who trust Infinity Gains for their financial needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
