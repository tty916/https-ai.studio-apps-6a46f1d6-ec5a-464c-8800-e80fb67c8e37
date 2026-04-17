import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Menu, X, ChevronRight, HardHat, Home, Building2, Warehouse, ShieldCheck, Clock, Banknote, UserCheck, CheckCircle2, Instagram, Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#gallery' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#how-it-works' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-charcoal/95 backdrop-blur-md py-4' : 'bg-transparent py-6'} border-b border-gray-border`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-display font-bold uppercase tracking-tighter text-burnt-orange leading-none">
              Solid Built
            </span>
          </div>
          <span className="hidden md:block text-[10px] uppercase tracking-[0.2em] text-white/40 mt-1 font-bold">
            Building Gauteng, NW & Mpumalanga
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-burnt-orange transition-colors">
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/27123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-burnt-orange hover:bg-burnt-orange-dark text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-burnt-orange/20"
          >
            FREE QUOTE
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-charcoal-light border-t border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium p-2 border-b border-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/27123456789"
              className="bg-burnt-orange text-white text-center py-4 rounded-xl font-bold mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              WHATSAPP US FOR A QUOTE
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden border-b border-gray-border">
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-0 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 lg:pr-20 lg:border-r lg:border-gray-border flex flex-col justify-center"
        >
          <h1 className="text-6xl md:text-[100px] font-display font-bold leading-[0.85] mb-8 uppercase tracking-tighter">
            We Build Your <span className="text-burnt-orange">Dream</span>,<br />Brick by Brick.
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-xl font-medium">
            Specializing in affordable, solid concrete block homes, backyard rooms, and rental units across townships and rural areas in South Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/27123456789"
              className="flex items-center justify-center bg-burnt-orange text-white px-10 py-5 rounded-none font-display font-bold text-xl hover:bg-burnt-orange-dark transition-colors tracking-tight uppercase"
            >
              Send WhatsApp Quote
            </a>
          </div>
          <div className="mt-20 flex items-center justify-between border-t border-gray-border pt-10">
            <div className="text-center md:text-left">
              <p className="text-3xl font-display font-bold text-burnt-orange">150+</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Homes Built</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-3xl font-display font-bold text-burnt-orange">10 Yrs</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Experience</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-3xl font-display font-bold text-burnt-orange">100%</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Solid Build</p>
            </div>
          </div>
        </motion.div>

        <div className="hidden lg:flex flex-col justify-center p-12 bg-charcoal-light">
           <img
             src="https://picsum.photos/seed/block-house/800/800"
             alt="Concrete Block House"
             className="w-full grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
             referrerPolicy="no-referrer"
           />
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Full House Builds',
      desc: 'Complete residential homes built with concrete blocks and solid foundations. From foundation to roofing.',
      icon: <Home className="w-10 h-10" />,
      image: 'https://picsum.photos/seed/house-build/400/300'
    },
    {
      title: 'Rental Units (Bachelor Flats)',
      desc: 'Maximize your property income with perfectly aligned rental unit rows. Professional finish for quality tenants.',
      icon: <Building2 className="w-10 h-10" />,
      image: 'https://picsum.photos/seed/flats/400/300'
    },
    {
      title: 'Backyard Rooms',
      desc: 'Solid, secure rooms for family or extra space. Faster and more reliable than wendy-houses.',
      icon: <Warehouse className="w-10 h-10" />,
      image: 'https://picsum.photos/seed/backyard/400/300'
    },
    {
      title: 'Garages & Extensions',
      desc: 'Built-to-match garages and verandas. Secure your vehicle and beautify your living area.',
      icon: <HardHat className="w-10 h-10" />,
      image: 'https://picsum.photos/seed/garage/400/300'
    }
  ];

  return (
    <section id="services" className="py-24 bg-charcoal border-b border-gray-border">
      <div className="container mx-auto px-6">
        <div className="mb-16 border-l-4 border-burnt-orange pl-6">
          <h2 className="text-burnt-orange font-display font-bold uppercase tracking-widest text-sm mb-2">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Specialized Building</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-border">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-charcoal p-10 border-r border-b border-gray-border last:border-r-0"
            >
               <div className="p-0">
                  <h4 className="text-xl font-display font-bold mb-4 uppercase">{s.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed mb-8 h-20 overflow-hidden">{s.desc}</p>
                  <a href="https://wa.me/27123456789" className="inline-flex items-center justify-between w-full text-burnt-orange font-bold text-sm border-t border-gray-border pt-6 group-hover:text-white transition-colors">
                    <span className="uppercase tracking-widest">Inquire Now</span>
                    <ChevronRight size={16} />
                  </a>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
    const images = [
        'https://picsum.photos/seed/build1/800/600',
        'https://picsum.photos/seed/build2/800/600',
        'https://picsum.photos/seed/build3/800/600',
        'https://picsum.photos/seed/build4/800/600',
        'https://picsum.photos/seed/build5/800/600',
        'https://picsum.photos/seed/build6/800/600',
    ];

    return (
        <section id="gallery" className="py-24 bg-charcoal border-b border-gray-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8 text-center md:text-left border-b border-gray-border pb-10">
                    <div>
                        <h2 className="text-burnt-orange font-display font-bold uppercase tracking-widest text-sm mb-2">Recent Projects</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold uppercase">Solid Builds</h3>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 bg-gray-border border border-gray-border">
                    {images.map((img, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="aspect-square bg-charcoal overflow-hidden cursor-pointer relative group p-6 flex items-end"
                        >
                            <img src={img} alt="Build Projects" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-60 transition-opacity grayscale" referrerPolicy="no-referrer" />
                            <div className="relative z-10">
                                <p className="font-display font-bold text-xs uppercase tracking-widest text-burnt-orange mb-2">Project Case {i + 1}</p>
                                <p className="font-display font-bold text-sm uppercase">Gauteng Region</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const WhyUs = () => {
    const reasons = [
        { icon: <Clock />, title: 'Fast Delivery', text: 'We respect your time. Projects are completed on schedule, every time.' },
        { icon: <ShieldCheck />, title: 'Solid Materials', text: 'Only the best concrete blocks and SABS approved materials used.' },
        { icon: <Banknote />, title: 'Affordable Pricing', text: 'Professional construction at township-friendly prices.' },
        { icon: <UserCheck />, title: 'Experienced Team', text: 'Over 10 years experience building in rural and urban Gauteng.' },
    ];

    return (
        <section id="why-us" className="py-24 bg-charcoal border-b border-gray-border">
            <div className="container mx-auto px-6 grid lg:grid-cols-[1fr_1fr] gap-0 border border-gray-border">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="p-12 md:p-20 border-r border-gray-border"
                >
                    <h2 className="text-burnt-orange font-display font-bold uppercase tracking-widest text-sm mb-4">The Standard</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold mb-12 uppercase leading-none">Why Choose Us</h3>
                    <div className="grid gap-8">
                         {reasons.map(r => (
                             <div key={r.title} className="flex gap-6 items-start">
                                 <div className="text-burnt-orange pt-1">{r.icon}</div>
                                 <div>
                                     <h4 className="text-lg font-display font-bold mb-2 uppercase">{r.title}</h4>
                                     <p className="text-white/40 text-sm leading-relaxed">{r.text}</p>
                                 </div>
                             </div>
                         ))}
                    </div>
                </motion.div>

                <div className="hidden lg:block bg-charcoal-light">
                    <img src="https://picsum.photos/seed/builders-team/800/800" alt="Our Team" className="w-full h-full object-cover grayscale opacity-50" referrerPolicy="no-referrer" />
                </div>
            </div>
        </section>
    )
}

const Process = () => {
    const steps = [
        { num: '01', title: 'Consultation', text: 'Contact us via WhatsApp or Call. We discuss your dream and requirements.' },
        { num: '02', title: 'Site Visit & Quote', text: 'Our team visits your site to measure and provide a final, transparent quote.' },
        { num: '03', title: 'Solid Build', text: 'We start the construction. Fast, quality, and ready for you to move in.' },
    ];

    return (
        <section id="how-it-works" className="py-24 bg-charcoal border-b border-gray-border">
            <div className="container mx-auto px-6">
                <div className="mb-16 border-l-4 border-burnt-orange pl-6">
                    <h2 className="text-burnt-orange font-display font-bold uppercase tracking-widest text-sm mb-2">How It Works</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold">The Process</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-0 border border-gray-border">
                    {steps.map(s => (
                        <div key={s.num} className="bg-charcoal p-12 border-r border-gray-border last:border-r-0 flex gap-6 items-start">
                            <div className="text-5xl font-display font-bold text-gray-border border-b border-gray-border leading-none pb-2">
                                {s.num}
                            </div>
                            <div>
                                <h4 className="text-xl font-display font-bold mb-4 uppercase">{s.title}</h4>
                                <p className="text-white/40 text-sm">{s.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const Testimonials = () => {
    const reviews = [
        { name: 'Thabo Mokoena', loc: 'Soweto', text: 'They built my backyard rooms in record time. Professional and very clean workers. My tenants are happy!' },
        { name: 'Lerato Gumede', loc: 'Katlehong', text: 'The house is solid. They used quality blocks and the foundation is deep. No cracks, just great quality.' },
        { name: 'Jacob Nkosi', loc: 'Tembisa', text: 'I built a 3-unit bachelor flat block.mkhentane team guided me through the whole process. Highly recommended.' },
    ];

    return (
        <section className="py-24 bg-charcoal border-b border-gray-border">
            <div className="container mx-auto px-6">
                <div className="mb-16 border-l-4 border-burnt-orange pl-6">
                    <h2 className="text-burnt-orange font-display font-bold uppercase tracking-widest text-sm mb-2">Testimonials</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold uppercase">Client Reviews</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-0 border border-gray-border">
                    {reviews.map((r, i) => (
                        <div key={r.name} className="bg-charcoal p-12 border-r border-gray-border last:border-r-0">
                             <p className="text-lg font-medium text-white/80 mb-10 leading-relaxed">"{r.text}"</p>
                             <div className="pt-8 border-t border-gray-border">
                                 <p className="font-display font-bold text-burnt-orange uppercase text-sm mb-1">{r.name}</p>
                                 <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{r.loc}</p>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const Contact = () => {
    return (
        <section className="py-24 bg-charcoal relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-burnt-orange/5 blur-[150px] -z-10" />
            
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                         <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h2>
                         <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">Ready to Build Your Dream Home?</h3>
                         <p className="text-white/60 text-lg mb-12">
                            Contact us today for a free on-site consultation and quote. We operate across Gauteng and surrounding provinces.
                         </p>

                         <div className="space-y-6 mb-12">
                             <div className="flex items-center gap-4 text-white/80">
                                 <Phone className="text-burnt-orange" />
                                 <span className="text-xl">+27 12 345 6789</span>
                             </div>
                             <div className="flex items-center gap-4 text-white/80">
                                 <MessageCircle className="text-burnt-orange" />
                                 <span className="text-xl">WhatsApp: +27 12 345 6789</span>
                             </div>
                         </div>

                         <div className="flex gap-4">
                              <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-burnt-orange transition-colors">
                                  <Facebook size={20} />
                              </a>
                              <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-burnt-orange transition-colors">
                                  <Instagram size={20} />
                              </a>
                         </div>
                    </div>

                    <div className="bg-charcoal p-8 md:p-12 rounded-none border border-gray-border">
                         <form className="space-y-6">
                             <div>
                                 <label className="block text-[10px] font-display font-bold uppercase tracking-widest text-white/40 mb-3">Your Name</label>
                                 <input type="text" className="w-full bg-charcoal-light border border-gray-border p-5 rounded-none focus:border-burnt-orange outline-none transition-colors uppercase font-bold text-sm" placeholder="Full Name" />
                             </div>
                             <div>
                                 <label className="block text-[10px] font-display font-bold uppercase tracking-widest text-white/40 mb-3">Phone Number</label>
                                 <input type="tel" className="w-full bg-charcoal-light border border-gray-border p-5 rounded-none focus:border-burnt-orange outline-none transition-colors uppercase font-bold text-sm" placeholder="+27 ..." />
                             </div>
                             <button className="w-full bg-burnt-orange hover:bg-burnt-orange-dark text-white font-display font-bold py-6 rounded-none transition-all uppercase tracking-widest text-lg">
                                 Request A Quote
                             </button>
                         </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Footer = () => {
    return (
        <footer className="py-12 bg-charcoal-light border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    <HardHat className="text-burnt-orange w-6 h-6" />
                    <span className="font-display font-bold uppercase tracking-tight">
                        Solid<span className="text-burnt-orange">Built</span>
                    </span>
                    <span className="text-white/30 text-xs ml-4">© 2026 Solid Built Construction SA.</span>
                </div>
                <div className="flex gap-8 text-sm text-white/50 font-medium">
                    <a href="#" className="hover:text-burnt-orange">Privacy Policy</a>
                    <a href="#" className="hover:text-burnt-orange">Terms of Service</a>
                </div>
                <div className="flex items-center gap-2 text-white/50 text-xs">
                    Built by <span className="text-burnt-orange font-bold italic">Mkhentane Construction Marketing</span>
                </div>
            </div>
        </footer>
    )
}

const FloatingWhatsApp = () => {
    return (
        <a 
            href="https://wa.me/27123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[100] group flex items-center gap-3"
        >
            <div className="bg-white text-charcoal px-4 py-2 rounded-full font-bold shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                Start WhatsApp Quote
            </div>
            <div className="bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce">
                <MessageCircle size={32} fill="white" className="text-white" />
            </div>
        </a>
    )
}

// --- Main App ---

export default function App() {
  return (
    <div className="antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <WhyUs />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
