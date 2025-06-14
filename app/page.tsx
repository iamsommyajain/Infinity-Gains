"use client";
import { Button } from "@/components/ui/button"
import { Belleza } from 'next/font/google'; 
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
  Instagram,
  Linkedin,
  Facebook,
  Twitter
} from "lucide-react"

const belleza = Belleza({ subsets: ['latin'], weight: '400' });

const socialLinks = [
  {
    href: "https://wa.me/9971093683",
    icon: MessageCircle,
    bg: "bg-green-500",
  },
  {
    href: "https://linkedin.com/company/infinity-gains",
    icon: Linkedin,
    bg: "bg-blue-700",
  },
  {
    href: "https://instagram.com/infinitygains",
    icon: Instagram,
    bg: "bg-pink-500",
  },
  {
    href: "https://facebook.com/infinitygains",
    icon: Facebook,
    bg: "bg-blue-600",
  },
  {
    href: "https://x.com/infinitygains",
    icon: Twitter,
    bg: "bg-black",
  },
];

export function SocialSection() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4 inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
          Connect With Us
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Follow Us On Social Media
        </h2>
        <div className="flex justify-center gap-4">
          {socialLinks.map(({ href, icon: Icon, bg }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="icon"
                className={`
                  rounded-full 
                  text-white 
                  ${bg} 
                  hover:scale-150 
                  hover:shadow-lg 
                  transition 
                  duration-300 
                  ease-in-out
                `}
              >
                {/* <Icon className="w-16 h-16 sm:w-16 sm:h-16" /> */}
                <Icon width={128} height={128} />
              </Button>
            </a>
          ))}
        </div>
      </div>
    </section>
  )};


export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('/igbg7.png')] bg-cover bg-center h-[80vh] flex items-center justify-center">
  {/* Content container */}
  <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 bg-light-green-custom bg-opacity-80 h-[300px] z-10"></div>

  <div className="relative z-10 text-center max-w-3xl px-4">
    <h1 className={`${belleza.className} text-black text-5xl font-bold mb-2`}>
      INFINITY GAINS LLP
    </h1>
    <h1 className={`${belleza.className} text-black text-2xl font-bold mb-4`}>Your partner in financial success!</h1>
    <p className={`${belleza.className} text-black text-2xl mb-6`}>
      Insurance | Mutual Funds | Loans
    </p>
    
    <div className="flex justify-center gap-4">
      <Button className="bg-green-500 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-green-600 transition">
        Get Started Today
        <ArrowRight className="w-5 h-5" />
      </Button>
      <a href="tel:+911234567890">
      <Button className="bg-white text-black px-6 py-3 rounded-md flex items-center gap-2 hover:bg-gray-200 transition">
          <Phone className="w-5 h-5" />
          Call Expert
        </Button>
      </a>
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

      {/* Socials Section */}


      <SocialSection />

            

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Financial Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied clients who trust Infinity Gains for their financial needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Consultation Today
            </Button>
          </div>
        </div>
      </section>
    </div>
);}
