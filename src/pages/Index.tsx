
import { ArrowRight, CheckCircle, Users, TrendingUp, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const services = [
    {
      title: "Strategic Consulting",
      description: "Develop comprehensive business strategies that drive sustainable growth and competitive advantage.",
      icon: TrendingUp,
      features: ["Market Analysis", "Growth Strategy", "Digital Transformation"]
    },
    {
      title: "Organizational Development", 
      description: "Optimize your organizational structure and processes for maximum efficiency and performance.",
      icon: Users,
      features: ["Change Management", "Process Optimization", "Team Development"]
    },
    {
      title: "International Expansion",
      description: "Navigate global markets with confidence through our comprehensive international business expertise.",
      icon: Globe,
      features: ["Market Entry", "Cultural Adaptation", "Risk Assessment"]
    }
  ];

  const benefits = [
    "15+ years of industry experience",
    "Proven track record of success",
    "Customized solutions for your bess projects",
    "International market expertise",
    "End-to-end project management",
    "Measurable results and ROI"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-slate-800">
              BESS-CON
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-8 animate-fade-in">
              Insights unlocked!
              <span className="block text-blue-600">Transforming Challenges into Opportunities</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Optimize Your Energy Future: Expert Technical Due Diligence for Advanced Battery Storage Solutions. Boost performance today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-slate-300 hover:bg-slate-50"
                onClick={() => {
                  const aboutSection = document.getElementById("about");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive consulting solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-slate-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-2xl text-slate-800">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-600">
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

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
                Why Choose BESS-CON
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                With over two decades of experience in strategic business consulting, we've helped hundreds 
                of companies transform their operations and achieve sustainable growth.
              </p>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Business meeting"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">15+</div>
                  <div className="text-sm text-slate-600">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">100+ MWh</div>
              <div className="text-blue-100">Consulted projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">4+</div>
              <div className="text-blue-100">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ready unlock the full potential of your BESS project? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Email Us</h3>
              <p className="text-slate-600">info@bess-con.de</p>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Visit Us</h3>
              <p className="text-slate-600">Munich, Germany</p>
            </Card>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg" onClick={() => {window.location.href = "mailto:info@bess-con.de"; }}>
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4">BESS-CON</div>
            <p className="text-slate-400 mb-8">Strategic Business Consulting</p>
            <div className="border-t border-slate-700 pt-8">
              <p className="text-slate-400">
                © 2024 BESS-CON. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
