import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  Award,
  Clock,
  CheckCircle,
  Star,
  Calendar,
  Target,
  Briefcase,
  GraduationCap,
} from "lucide-react"

export default function TrainingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30 w-fit">Professional Training</Badge>
              <h1 className="text-5xl font-bold leading-tight">
                Launch Your
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}
                  Financial
                </span>
                <br />
                Career Today
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Join our comprehensive training program and become a certified financial advisor. Build a rewarding
                career while helping others achieve their financial goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                  Enroll Now
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">100+</div>
                    <div className="text-sm text-blue-200">Successful Agents Trained</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-400">95%</div>
                      <div className="text-xs text-blue-200">Pass Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">₹50K+</div>
                      <div className="text-xs text-blue-200">Avg. Monthly Income</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">6 Months</div>
                    <div className="text-sm text-blue-200">Comprehensive Program</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive training programs designed to build expertise in different areas of
              financial services.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Foundation Program</CardTitle>
                <CardDescription>Perfect for beginners entering financial services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">₹15,000</div>
                  <div className="text-sm text-gray-600">3 Months Duration</div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Financial Planning Basics
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Insurance Fundamentals
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Customer Communication
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Sales Techniques
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Regulatory Compliance
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-500 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Professional Program</CardTitle>
                <CardDescription>Comprehensive training for serious professionals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">₹35,000</div>
                  <div className="text-sm text-gray-600">6 Months Duration</div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    All Foundation Topics
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Advanced Investment Planning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mutual Fund Advisory
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Loan Processing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Business Development
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Digital Marketing
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">Enroll Now</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Master Program</CardTitle>
                <CardDescription>Advanced certification for industry leaders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">₹50,000</div>
                  <div className="text-sm text-gray-600">9 Months Duration</div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    All Professional Topics
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Team Leadership
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Agency Management
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Advanced Tax Planning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Wealth Management
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mentorship Program
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Enroll Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Training?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our training programs are designed by industry experts with real-world experience and proven success
              records.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Trainers",
                description: "Learn from certified professionals with 10+ years experience",
                color: "blue",
              },
              {
                icon: BookOpen,
                title: "Comprehensive Curriculum",
                description: "Updated content covering all aspects of financial services",
                color: "green",
              },
              {
                icon: Target,
                title: "Practical Training",
                description: "Hands-on experience with real case studies and scenarios",
                color: "purple",
              },
              {
                icon: Award,
                title: "Industry Certification",
                description: "Recognized certificates that boost your career prospects",
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

      {/* Training Schedule */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Training Schedule</h2>
            <p className="text-xl text-gray-600">Flexible timing options to fit your schedule</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Weekday Batch</CardTitle>
                <CardDescription>Perfect for full-time students</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <p className="font-semibold">Monday to Friday</p>
                  <p className="text-gray-600">10:00 AM - 2:00 PM</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-semibold">4 hours/day</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Next Batch:</span>
                    <span className="font-semibold">15th Jan 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Weekend Batch</CardTitle>
                <CardDescription>Ideal for working professionals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <p className="font-semibold">Saturday & Sunday</p>
                  <p className="text-gray-600">9:00 AM - 5:00 PM</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-semibold">8 hours/day</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Next Batch:</span>
                    <span className="font-semibold">20th Jan 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Online Batch</CardTitle>
                <CardDescription>Learn from anywhere, anytime</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <p className="font-semibold">Flexible Timing</p>
                  <p className="text-gray-600">Self-paced learning</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Access:</span>
                    <span className="font-semibold">24/7 Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Start Date:</span>
                    <span className="font-semibold">Immediate</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600">
              Hear from our successful graduates who are now thriving in their careers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rohit Sharma",
                role: "Senior Financial Advisor",
                company: "ABC Insurance",
                income: "₹75,000/month",
                story:
                  "The training program at Infinity Gains completely transformed my career. I went from zero knowledge to becoming a top performer in just 6 months.",
                rating: 5,
              },
              {
                name: "Sneha Patel",
                role: "Mutual Fund Specialist",
                company: "XYZ Investments",
                income: "₹60,000/month",
                story:
                  "The practical approach and expert guidance helped me build confidence. Now I'm successfully managing portfolios worth crores.",
                rating: 5,
              },
              {
                name: "Vikash Kumar",
                role: "Team Leader",
                company: "Infinity Gains LLP",
                income: "₹1,20,000/month",
                story:
                  "Started as a trainee and now leading a team of 15 agents. The comprehensive training gave me all the skills I needed to succeed.",
                rating: 5,
              },
            ].map((story, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{story.story}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-lg">{story.name}</div>
                    <div className="text-blue-600 font-medium">{story.role}</div>
                    <div className="text-gray-600 text-sm">{story.company}</div>
                    <div className="text-green-600 font-bold mt-2">{story.income}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the various career paths available after completing our training programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Insurance Agent",
                income: "₹30K - ₹80K/month",
                description: "Sell life, health, and general insurance policies",
                growth: "High demand, stable income",
              },
              {
                title: "Investment Advisor",
                income: "₹40K - ₹1L/month",
                description: "Help clients with mutual fund and investment planning",
                growth: "Growing market, excellent prospects",
              },
              {
                title: "Loan Consultant",
                income: "₹35K - ₹75K/month",
                description: "Assist clients with personal, home, and business loans",
                growth: "Steady demand, good commissions",
              },
              {
                title: "Team Leader",
                income: "₹60K - ₹2L/month",
                description: "Lead and manage a team of financial advisors",
                growth: "Leadership role, unlimited earning potential",
              },
            ].map((career, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{career.title}</h3>
                  <div className="text-green-600 font-semibold mb-3">{career.income}</div>
                  <p className="text-gray-600 text-sm mb-3">{career.description}</p>
                  <div className="text-blue-600 text-sm font-medium">{career.growth}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Enrollment Process</h2>
            <p className="text-xl text-gray-600">Simple steps to start your financial career journey</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Apply Online",
                  description: "Fill out our simple application form with your basic details",
                },
                {
                  step: "2",
                  title: "Interview",
                  description: "Attend a brief interview to assess your interest and suitability",
                },
                {
                  step: "3",
                  title: "Payment",
                  description: "Complete the fee payment and receive your enrollment confirmation",
                },
                {
                  step: "4",
                  title: "Start Learning",
                  description: "Begin your training journey with our expert instructors",
                },
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our next batch and start building a successful career in financial services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Enroll Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
