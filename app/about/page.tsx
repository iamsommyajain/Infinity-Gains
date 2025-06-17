import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, TrendingUp, Shield, Heart, CheckCircle, Calendar, MapPin } from "lucide-react"
import { Belleza } from 'next/font/google'; 
import {ArrowRight, Phone} from "lucide-react"
import Image from "next/image";

const belleza = Belleza({ subsets: ['latin'], weight: '400' });

export default function AboutPage() {
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
                  Infinity Gains LLP has been a trusted name in the world of financial services — specializing in Insurance, Mutual Funds, and Loans. Founded on the principles of education, empowerment, and ethical service, our mission is to bring financial literacy and freedom to every Indian household.At the heart of our journey is <strong>Mr. Deepak Jain</strong>, a veteran of the insurance industry and former AVP at HDFC ERGO, whose vision and passion have touched the lives of over 50 lakh insurance advisors across the country. Through his guidance, Infinity Gains has become a beacon of growth for countless professionals striving to thrive in the Life, General, and Health Insurance sectors. We don’t just offer services — we build careers. We guide, train, and motivate insurance advisors to unlock their full potential and reach new professional heights. At Infinity Gains, we believe in a simple yet powerful financial formula for all 140 crore Indians: <strong>Financial Freedom = TIP (Term Insurance Plan) + HIP (Health Insurance Plan) + SIP (Systematic Investment Plan)</strong>. <br />Join us on our mission to spread financial awareness, uplift lives, and build a stronger, more secure India.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-6 w-6 text-blue-600" />
                      <span className="font-semibold">2020 - Company Founded</span>
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
      {/* <section className="py-20 bg-white">
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
      </section> */}
      <section className="py-12 px-4 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Meet Our Founder
        </h2>

        <Card className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-lg rounded-2xl overflow-hidden">
          <div className="md:w-1/3 w-full">
            <Image
              src="/founder.jpg" // Replace with actual image path
              alt="Mr. Deepak Jain"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          <CardContent className="md:w-2/3 w-full p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-2xl text-gray-800 font-semibold">
                Mr. Deepak Jain
              </CardTitle>
              <p className="text-sm text-gray-500">Founder, Infinity Gains LLP</p>
            </CardHeader>

            <p className="text-gray-700 leading-relaxed">
              With over two decades of experience in the insurance industry, Mr. Deepak Jain is a name synonymous with trust, knowledge, and leadership. A former AVP at HDFC ERGO, he has dedicated his life to empowering over <strong>50 lakh insurance advisors</strong> across India.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              As the visionary behind <strong>Infinity Gains LLP</strong>, Mr. Jain has built more than a financial services firm — he has nurtured a movement to educate, inspire, and elevate professionals across Life, General, and Health Insurance sectors. His mission is rooted in guiding people to achieve financial freedom through TIP (Term Insurance Plan), HIP (Health Insurance Plan), and SIP (Systematic Investment Plan).
            </p>
          </CardContent>
        </Card>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Financial Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our family of satisfied clients and experience the Infinity Gains difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919971093683" 
              target="_blank"
              rel="noopener noreferrer"
            >
            <Button size="lg" className="bg-white text-blue-600 hover:!bg-gray-200">
              Contact us Today
            </Button>
          </a>
          </div>
        </div>
      </section>
    </div>
  )
}
