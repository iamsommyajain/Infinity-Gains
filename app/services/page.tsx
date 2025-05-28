import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  TrendingUp,
  Calculator,
  Heart,
  Home,
  Briefcase,
  PiggyBank,
  Target,
  Users,
  CheckCircle,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">Our Services</Badge>
          <h1 className="text-5xl font-bold mb-6">Comprehensive Financial Solutions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            From protection to wealth creation, we offer a complete range of financial services designed to secure your
            future and help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Insurance Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Insurance Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect what matters most with our comprehensive insurance solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Life Insurance</CardTitle>
                <CardDescription>Secure your family's financial future</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Term Life Insurance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Whole Life Insurance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    ULIP Plans
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Pension Plans
                  </li>
                </ul>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Health Insurance</CardTitle>
                <CardDescription>Comprehensive healthcare coverage</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Individual Health Plans
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Family Floater Plans
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Critical Illness Cover
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Senior Citizen Plans
                  </li>
                </ul>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Home className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>General Insurance</CardTitle>
                <CardDescription>Protect your assets and property</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Motor Insurance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Home Insurance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Travel Insurance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Business Insurance
                  </li>
                </ul>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mutual Funds */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mutual Funds</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build wealth systematically with our expert mutual fund advisory services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center p-6">
                  <PiggyBank className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold">SIP Planning</h3>
                  <p className="text-sm text-gray-600">Start with ₹500/month</p>
                </Card>
                <Card className="text-center p-6">
                  <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold">Goal Planning</h3>
                  <p className="text-sm text-gray-600">Achieve your dreams</p>
                </Card>
                <Card className="text-center p-6">
                  <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold">Portfolio Review</h3>
                  <p className="text-sm text-gray-600">Regular monitoring</p>
                </Card>
                <Card className="text-center p-6">
                  <Shield className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="font-semibold">Risk Assessment</h3>
                  <p className="text-sm text-gray-600">Balanced approach</p>
                </Card>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Why Choose Our Mutual Fund Services?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Expert Fund Selection:</strong> Our advisors help you choose the best funds based on your
                    risk profile and goals.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Regular Monitoring:</strong> We continuously track your portfolio performance and suggest
                    rebalancing when needed.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Tax Optimization:</strong> Maximize your returns with tax-efficient investment strategies.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Goal-Based Planning:</strong> Whether it's retirement, child's education, or buying a home,
                    we help you plan systematically.
                  </div>
                </li>
              </ul>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Start SIP Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Loans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Loan Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick and hassle-free loans for all your financial needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Personal Loans</CardTitle>
                <CardDescription>For your immediate financial needs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Up to ₹50 Lakhs
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Quick approval
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Minimal documentation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Competitive rates
                  </li>
                </ul>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Home className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Home Loans</CardTitle>
                <CardDescription>Make your dream home a reality</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Up to ₹5 Crores
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Low interest rates
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Flexible tenure
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tax benefits
                  </li>
                </ul>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Business Loans</CardTitle>
                <CardDescription>Fuel your business growth</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Up to ₹10 Crores
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Working capital
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Equipment financing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Collateral-free options
                  </li>
                </ul>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Secure Your Financial Future?</h2>
          <p className="text-xl mb-8 text-blue-100">Get personalized advice from our financial experts today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Call Now: +91 98765 43210
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
