import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  Phone,
  Users,
  TrendingUp,
  Bell,
  Calendar,
  CheckCircle,
  Star,
  Download,
  Share2,
} from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">Our Products</Badge>
          <h1 className="text-5xl font-bold mb-6">Stay Connected & Informed</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Access exclusive financial insights, expert guidance, and community support through our innovative products
            and services.
          </p>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* WhatsApp Community */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl">WhatsApp Community</CardTitle>
                <CardDescription className="text-lg">Daily market updates and financial insights</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">2000+</div>
                  <div className="text-gray-600">Active Members</div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">What You Get:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Daily market analysis and trends
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Investment opportunities alerts
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Policy updates and changes
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Expert tips and strategies
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Q&A sessions with experts
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Exclusive webinar invitations
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h5 className="font-semibold mb-2">Recent Updates:</h5>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• New tax-saving mutual funds launched</p>
                    <p>• Health insurance premium changes</p>
                    <p>• SIP investment strategies for 2024</p>
                  </div>
                </div>

                <Button className="w-full bg-green-500 hover:bg-green-600 text-lg py-3">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Join WhatsApp Group
                </Button>
              </CardContent>
            </Card>

            {/* Call the Expert */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl">Call the Expert</CardTitle>
                <CardDescription className="text-lg">Direct access to financial advisors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Expert Support</div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Services Available:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      One-on-one consultation
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      Portfolio review and analysis
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      Goal-based financial planning
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      Insurance needs assessment
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      Tax planning strategies
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      Emergency financial guidance
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h5 className="font-semibold mb-2">Expert Availability:</h5>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Mon-Fri: 9:00 AM - 9:00 PM</p>
                    <p>Saturday: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-lg py-3">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: +91 98765 43210
                  </Button>
                  <Button variant="outline" className="w-full border-blue-300 text-blue-600">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Callback
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Agent Training */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl">Agent Training Hub</CardTitle>
                <CardDescription className="text-lg">Professional development programs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                  <div className="text-gray-600">Certified Agents</div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Training Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      Comprehensive certification courses
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      Advanced sales training
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      Product knowledge sessions
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      Digital marketing skills
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      Career advancement support
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      Ongoing mentorship program
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <h5 className="font-semibold mb-2">Next Batch:</h5>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Start Date: 15th January 2024</p>
                    <p>Duration: 6 Months</p>
                    <p>Mode: Hybrid (Online + Offline)</p>
                  </div>
                </div>

                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-lg py-3">
                  <Users className="mr-2 h-5 w-5" />
                  Join Training Program
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of digital tools and resources designed to enhance your financial journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Bell className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Smart Alerts</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get personalized notifications for policy renewals, SIP dates, and investment opportunities.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Enable Alerts
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Portfolio Tracker</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Monitor your investments, track performance, and get detailed analytics on your portfolio.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Track Portfolio
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Download className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Resource Library</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Access guides, calculators, and educational materials to make informed financial decisions.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Browse Resources
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Share2 className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Referral Program</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Earn rewards by referring friends and family to our financial services and training programs.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Start Referring
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Features Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect combination of our products and services that suits your needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Basic Access</CardTitle>
                <CardDescription>Perfect for individual investors</CardDescription>
                <div className="text-4xl font-bold text-green-600 mt-4">Free</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    WhatsApp community access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Daily market updates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Basic investment tips
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Email support
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg relative bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Premium Access</CardTitle>
                <CardDescription>For serious investors and professionals</CardDescription>
                <div className="text-4xl font-bold text-blue-600 mt-4">₹999/month</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                    All Basic features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                    Direct expert consultation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                    Portfolio tracking tools
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                    Priority phone support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                    Exclusive webinars
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                    Personalized alerts
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Subscribe Now</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>For businesses and training institutes</CardDescription>
                <div className="text-4xl font-bold text-purple-600 mt-4">Custom</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    All Premium features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    Training program access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    Custom solutions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    White-label options
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    API access
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Real feedback from our community members and clients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Arjun Mehta",
                role: "Software Engineer",
                content:
                  "The WhatsApp community has been incredibly valuable. I get daily insights that help me make better investment decisions. The expert tips are spot on!",
                rating: 5,
                product: "WhatsApp Community",
              },
              {
                name: "Kavya Sharma",
                role: "Business Owner",
                content:
                  "The 'Call the Expert' service saved me from making a costly mistake. The advisor reviewed my portfolio and suggested better alternatives.",
                rating: 5,
                product: "Expert Consultation",
              },
              {
                name: "Rajesh Kumar",
                role: "Insurance Agent",
                content:
                  "The training program completely transformed my career. From earning ₹20K to ₹80K per month in just 8 months. Highly recommended!",
                rating: 5,
                product: "Training Program",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {testimonial.product}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about our products and services</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How do I join the WhatsApp community?",
                answer:
                  "Simply click the 'Join WhatsApp Group' button and you'll be redirected to our community. It's completely free and you'll start receiving daily updates immediately.",
              },
              {
                question: "What are the charges for expert consultation?",
                answer:
                  "The first consultation is completely free for all new clients. Subsequent consultations are charged based on the complexity and duration, starting from ₹500 for a 30-minute session.",
              },
              {
                question: "Do I need prior experience to join the training program?",
                answer:
                  "No prior experience is required. Our Foundation Program is designed for complete beginners. We start with the basics and gradually build up your knowledge and skills.",
              },
              {
                question: "Can I access the services from anywhere in India?",
                answer:
                  "Yes, all our digital services including WhatsApp community, expert calls, and online training are available across India. For in-person meetings, we have offices in Mumbai and Pune.",
              },
              {
                question: "How often do you share updates in the WhatsApp group?",
                answer:
                  "We share 2-3 updates daily including morning market briefing, midday opportunities, and evening wrap-up. During volatile market conditions, we may share more frequent updates.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied users who trust our products for their financial success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <MessageCircle className="mr-2 h-5 w-5" />
              Join WhatsApp Community
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Phone className="mr-2 h-5 w-5" />
              Talk to Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
