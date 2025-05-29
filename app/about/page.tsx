import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, TrendingUp, Shield, Heart, CheckCircle, Calendar, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30 w-fit">About Us</Badge>
              <h1 className="text-5xl font-bold leading-tight">
                Building Financial
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}
                  Futures
                </span>
                <br />
                Since 2015
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                At Infinity Gains LLP, we believe that everyone deserves financial security and the opportunity to build
                wealth. Our mission is to make financial services accessible, understandable, and profitable for all.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-green-400">9+</div>
                    <div className="text-sm text-blue-200">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-green-400">500+</div>
                    <div className="text-sm text-blue-200">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-green-400">₹50Cr+</div>
                    <div className="text-sm text-blue-200">Assets Under Management</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-green-400">100+</div>
                    <div className="text-sm text-blue-200">Certified Agents</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-xl text-gray-600">
                Founded with a vision to democratize financial services and empower individuals to achieve their
                financial goals.
              </p>
            </div>

            <div className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Beginning</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Infinity Gains LLP was founded in 2015 by a team of financial experts who recognized the gap between
                    complex financial products and the common person's understanding. We started with a simple mission:
                    to make financial planning accessible to everyone, regardless of their background or income level.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    What began as a small consultancy has grown into a comprehensive financial services company, serving
                    hundreds of families and businesses across India.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-6 w-6 text-blue-600" />
                      <span className="font-semibold">2015 - Company Founded</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-6 w-6 text-green-600" />
                      <span className="font-semibold">2017 - 100+ Clients Milestone</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-6 w-6 text-purple-600" />
                      <span className="font-semibold">2019 - Industry Recognition</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-6 w-6 text-orange-600" />
                      <span className="font-semibold">2024 - ₹50Cr+ AUM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To empower individuals and businesses with comprehensive financial solutions that secure their present
                  and build their future, while providing exceptional service and expert guidance every step of the way.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To become India's most trusted financial services partner, known for our integrity, innovation, and
                  commitment to helping every client achieve financial freedom and prosperity.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    Integrity & Transparency
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    Client-First Approach
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    Continuous Innovation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    Excellence in Service
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who guide our company and ensure the highest standards of service for
              our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Deepak Jain",
                position: "Founder & CEO",
                experience: "15+ Years",
                specialization: "Financial Planning & Strategy",
                qualifications: "MBA Finance, CFP",
              }
            ].map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">{member.position}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Experience:</span>
                    <span className="font-semibold">{member.experience}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Specialization:</span>
                    <p className="font-medium">{member.specialization}</p>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Qualifications:</span>
                    <p className="font-medium">{member.qualifications}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Infinity Gains?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand out in the financial services industry through our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Trusted Expertise",
                description: "9+ years of proven track record in financial services",
                color: "blue",
              },
              {
                icon: Users,
                title: "Personalized Service",
                description: "Tailored solutions for your unique financial needs",
                color: "green",
              },
              {
                icon: Award,
                title: "Industry Recognition",
                description: "Award-winning service and client satisfaction",
                color: "purple",
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "Consistent growth and positive outcomes for clients",
                color: "orange",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg text-center"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-${feature.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Awards & Certifications</h2>
            <p className="text-xl text-gray-600">Recognition for our commitment to excellence and client service.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Best Financial Advisor 2023",
                organization: "Financial Services Excellence Awards",
                year: "2023",
              },
              {
                title: "Top Insurance Partner",
                organization: "Insurance Industry Awards",
                year: "2022",
              },
              {
                title: "Client Satisfaction Excellence",
                organization: "Customer Service Awards",
                year: "2023",
              },
              {
                title: "IRDA Certified Agency",
                organization: "Insurance Regulatory Authority",
                year: "2015",
              },
            ].map((award, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Award className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{award.title}</h3>
                  <p className="text-gray-600 text-sm mb-1">{award.organization}</p>
                  <p className="text-blue-600 font-semibold">{award.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Offices</h2>
            <p className="text-xl text-gray-600">Visit us at our convenient locations across the city.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Head Office</h3>
                    <p className="text-gray-600 mb-4">
                      123 Business District
                      <br />
                      Mumbai, Maharashtra 400001
                      <br />
                      India
                    </p>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Phone:</strong> +91 99710 93683
                      </p>
                      <p>
                        <strong>Email:</strong> info@infinitygains.in
                      </p>
                      <p>
                        <strong>Hours:</strong> Mon-Sat 9:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Branch Office</h3>
                    <p className="text-gray-600 mb-4">
                      456 Commercial Complex
                      <br />
                      Pune, Maharashtra 411001
                      <br />
                      India
                    </p>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Phone:</strong> +91 98765 43211
                      </p>
                      <p>
                        <strong>Email:</strong> pune@infinitygains.com
                      </p>
                      <p>
                        <strong>Hours:</strong> Mon-Sat 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Financial Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our family of satisfied clients and experience the Infinity Gains difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More About Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
