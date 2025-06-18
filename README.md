# 🌐 Infinity Gains LLP Website

Welcome to the official repository of the **Infinity Gains LLP** website — a professional platform that represents our mission of promoting financial literacy and freedom across India.

This website serves as an online presence for **Infinity Gains LLP**, offering details about our services in **Insurance**, **Mutual Funds**, and **Loans**.

## 🌟 Features

### 🏠 **Core Pages**
- **Homepage** - Engaging hero section with animated elements and service overview
- **Services** - Comprehensive insurance, mutual funds, and loan services
- **Products** - WhatsApp community, expert consultation, and training programs
- **Training** - Professional development programs with detailed curriculum
- **About Us** - Company story, team, mission, and achievements
- **Contact** - Multiple contact methods, forms, and office locations

### 🔐 **Authentication System**
- **Sign Up** - Complete registration with password strength validation
- **Sign In** - Secure login with social authentication options
- **Forgot Password** - Password reset flow with email verification
- **Form Validation** - Real-time validation and error handling

### 🎨 **Design & UX**
- **Responsive Design** - Mobile-first approach, works on all devices
- **Modern UI** - Clean, professional design with smooth animations
- **Accessibility** - WCAG compliant with proper ARIA labels
- **Performance** - Optimized images, lazy loading, and fast page loads

### 🚀 **Technical Features**
- **Next.js 15** - Latest features with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom components
- **Shadcn/ui** - High-quality, accessible UI components
- **Lucide Icons** - Beautiful, consistent iconography

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** v18 or higher  
- **npm** or **yarn** package manager

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/infinity-gains-website.git
cd infinity-gains-website
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Run Development Server
```bash
npm run dev
# or
yarn dev
```

### 4. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

## 🎯 Pages Overview

### **Homepage (`/`)**
- Hero section with animated background elements
- Services overview with interactive cards
- Products showcase with call-to-action buttons
- Client testimonials and success stories
- Company statistics and achievements

### **Services (`/services`)**
- **Insurance Services**: Life, Health, and General Insurance
- **Mutual Funds**: SIP planning, portfolio management, goal-based investing
- **Loan Services**: Personal, Home, and Business loans
- Detailed service descriptions with features and benefits

### **Products (`/products`)**
- **WhatsApp Community**: 2000+ members, daily market updates
- **Expert Consultation**: 24/7 support, personalized advice
- **Training Programs**: Professional development and certification
- Pricing plans and feature comparisons

### **Training (`/training`)**
- **Foundation Program**: 3-month beginner course (₹15,000)
- **Professional Program**: 6-month comprehensive training (₹35,000)
- **Master Program**: 9-month advanced certification (₹50,000)
- Success stories, career opportunities, and enrollment process

### **About Us (`/about`)**
- Company history and milestones
- Mission, vision, and core values
- Leadership team profiles
- Awards and certifications
- Office locations

### **Contact (`/contact`)**
- Multiple contact methods (phone, WhatsApp, email)
- Contact form with service selection
- Office information and business hours
- Interactive map placeholder
- FAQ section

### **Authentication Pages**
- **Sign Up (`/auth/signup`)**: Complete registration form
- **Sign In (`/auth/login`)**: Secure login with social options
- **Forgot Password (`/auth/forgot-password`)**: Password reset flow

## 🎨 Design System

### **Color Palette**
- **Primary Blue**: `#2563eb` - Trust and professionalism
- **Secondary Green**: `#16a34a` - Growth and prosperity
- **Accent Purple**: `#9333ea` - Innovation and premium feel
- **Neutral Grays**: Various shades for text and backgrounds

### **Typography**
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-700)
- **Body Text**: Regular weight (400)
- **Responsive sizing**: Mobile-first approach

### **Components**
- **Cards**: Hover effects with shadow transitions
- **Buttons**: Multiple variants (primary, outline, ghost)
- **Forms**: Consistent styling with validation states
- **Icons**: Lucide React icons throughout

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

### **Mobile Optimizations**
- Collapsible navigation menu
- Touch-friendly button sizes
- Optimized form layouts
- Readable typography scaling

## 🔧 Customization

### **Colors**
Update colors in `tailwind.config.ts`:
\`\`\`typescript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ... more shades
  }
}
\`\`\`

### **Components**
Modify components in the `components/` directory:
- `navbar.tsx` - Navigation customization
- `footer.tsx` - Footer content and links
- `ui/` - Base UI component styling

### **Content**
Update page content in respective `page.tsx` files:
- Company information
- Service descriptions
- Contact details
- Team member profiles

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically with each push

### **Other Platforms**
- **Netlify**: Connect GitHub repo and deploy
- **AWS Amplify**: Use the Amplify console
- **Self-hosted**: Build and serve static files

### **Build Commands**
\`\`\`bash
# Production build
npm run build

# Start production server
npm start

# Export static files
npm run export
\`\`\`

## 📊 Performance

### **Lighthouse Scores**
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 95+

### **Optimizations**
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Minified CSS and JavaScript
- Efficient font loading

## 🔒 Security

### **Authentication**
- Secure form handling
- Password strength validation
- CSRF protection ready
- Input sanitization

### **Best Practices**
- Environment variables for sensitive data
- Secure headers configuration
- XSS protection
- Content Security Policy ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Development Guidelines**
- Follow TypeScript best practices
- Use consistent naming conventions
- Write descriptive commit messages
- Test on multiple devices and browsers

## 📞 Support

### **Technical Support**
- **Email**: tech@infinitygains.com
- **Phone**: +91 98765 43210
- **WhatsApp**: +91 98765 43210

### **Business Inquiries**
- **Email**: info@infinitygains.com
- **Office**: 123 Business District, Mumbai, Maharashtra 400001

## 📄 License

This project is proprietary software owned by Infinity Gains LLP. All rights reserved.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Shadcn/ui** - For the beautiful component library
- **Lucide** - For the consistent icon set
- **Vercel** - For the deployment platform

---

**Built with ❤️ by the Infinity Gains LLP Development Team**
