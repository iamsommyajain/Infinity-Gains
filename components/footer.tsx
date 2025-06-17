import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

// SocialLinks as a separate component
function SocialLinks() {
  const socialLinks = [
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://www.youtube.com/@infinitygainsllp",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/infinity_gains_llp/",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/deepak-jain-55507413a/",
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/infinitygainsllp/",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://x.com/infinity_llp",
    },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon: Icon, name, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
        >
          <Button
            size="icon"
            variant="outline"
            className="border-gray-700 bg-blue-600"
          >
            <Icon className="h-4 w-4 " />
          </Button>
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl">Infinity Gains</div>
                <div className="text-sm text-gray-400">LLP</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for comprehensive financial solutions including insurance, mutual funds, loans, and
              professional training.
            </p>
            <SocialLinks />
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/insurance" className="text-gray-400 hover:text-white transition-colors">Life Insurance</Link></li>
              <li><Link href="/services/insurance" className="text-gray-400 hover:text-white transition-colors">Health Insurance</Link></li>
              <li><Link href="/services/insurance" className="text-gray-400 hover:text-white transition-colors">General Insurance</Link></li>
              <li><Link href="/services/mutual-funds" className="text-gray-400 hover:text-white transition-colors">Mutual Funds</Link></li>
              <li><Link href="/services/loans" className="text-gray-400 hover:text-white transition-colors">Personal Loans</Link></li>
              <li><Link href="/services/loans" className="text-gray-400 hover:text-white transition-colors">Home Loans</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/training" className="text-gray-400 hover:text-white transition-colors">Agent Training</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">WhatsApp Group</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Call Expert</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">+91 99710 93683</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">info@infinitygains.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-gray-400">Delhi, India</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Newsletter</h4>
              <div className="flex space-x-2">
                <Input
                  placeholder="Your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Infinity Gains LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
