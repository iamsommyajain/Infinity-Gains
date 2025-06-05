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
} from "lucide-react"

const belleza = Belleza({ subsets: ['latin'], weight: '400' });

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('/igbg7.png')] bg-cover bg-center h-[80vh] flex items-center justify-center">
  {/* Content container */}
  <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 bg-light-green-custom bg-opacity-40 h-[300px] z-10"></div>

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
<section className="py-10 bg-white">
  <div className="container mx-auto px-4 text-center">
    <Badge className="mb-4">Connect With Us</Badge>
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Follow Us On Social Media</h2>
    <div className="flex justify-center gap-6">
      {[
        {
          href: "https://wa.me/911234567890",
          icon: <MessageCircle className="w-5 h-5" />,
          bg: "bg-green-500",
        },
        {
          href: "https://linkedin.com/company/infinity-gains",
          icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3C3.34 3 2 4.34 2 5.98s1.34 2.98 2.98 2.98 2.98-1.34 2.98-2.98S6.62 3 4.98 3zM3 8.98h3.96V21H3V8.98zM9.98 8.98h3.79v1.64h.05c.53-1 1.84-2.06 3.8-2.06 4.07 0 4.82 2.68 4.82 6.16V21h-3.96v-5.52c0-1.32-.02-3.02-1.84-3.02s-2.12 1.44-2.12 2.92V21H9.98V8.98z"/></svg>,
          bg: "bg-blue-700",
        },
        {
          href: "https://instagram.com/infinitygains",
          icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.5.2.8.4 1.2.8s.6.7.8 1.2c.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.5-.4.8-.8 1.2s-.7.6-1.2.8c-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.5-.2-.8-.4-1.2-.8s-.6-.7-.8-1.2c-.2-.4-.4-1.1-.5-2.3-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.5.4-.8.8-1.2s.7-.6 1.2-.8c.4-.2 1.1-.4 2.3-.5 1.3-.1 1.7-.1 4.9-.1zm0-2.2C8.7 0 8.3 0 7 .1 5.6.2 4.6.5 3.8.9c-.8.4-1.4.9-2.1 1.6S.5 3 0.1 3.8C-.3 4.6-.6 5.6-.7 7-.8 8.3-.8 8.7-.8 12s0 3.7.1 5c.1 1.4.4 2.4.8 3.2.4.8.9 1.4 1.6 2.1s1.3 1.2 2.1 1.6c.8.4 1.8.7 3.2.8 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.4-.1 2.4-.4 3.2-.8.8-.4 1.4-.9 2.1-1.6s1.2-1.3 1.6-2.1c.4-.8.7-1.8.8-3.2.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.4-.4-2.4-.8-3.2C23.5 2.4 23 1.8 22.3 1.1S20.9.5 20.1.1c-.8-.4-1.8-.7-3.2-.8C15.7 0 15.3 0 12 0zM12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-10.8c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4.6-1.4 1.4-1.4 1.4.6 1.4 1.4z"/></svg>,
          bg: "bg-pink-500",
        },
        {
          href: "https://facebook.com/infinitygains",
          icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.68 0H1.32C.59 0 0 .6 0 1.34v21.32C0 23.4.59 24 1.32 24H12v-9.29H9.29V11.3H12V8.73c0-2.7 1.63-4.19 4.04-4.19 1.15 0 2.14.09 2.43.12v2.81h-1.67c-1.3 0-1.55.62-1.55 1.53v2.01h3.1l-.4 3.41h-2.7V24h5.29c.74 0 1.34-.6 1.34-1.34V1.34C24 .6 23.41 0 22.68 0z"/></svg>,
          bg: "bg-blue-600",
        },
        {
          href: "https://x.com/infinitygains",
          icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.162 0H1.838C.822 0 0 .822 0 1.838v20.324C0 23.178.822 24 1.838 24h20.324c1.016 0 1.838-.822 1.838-1.838V1.838C24 .822 23.178 0 22.162 0zM18.097 17.211l-2.187-.002-3.067-4.236-3.588 4.238H6.172l4.775-5.61-4.775-6.023h2.21l3.054 3.888 3.3-3.888 2.186-.002-4.733 5.771 4.908 5.864z"/></svg>,
          bg: "bg-black",
        },
      ].map(({ href, icon, bg }, idx) => (
        <a
          key={idx}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${bg} hover:scale-110 transition-transform`}
        >
          {icon}
        </a>
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
              Get Consultation Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  ); 
}
