import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  FaStore,
  FaRupeeSign,
  FaRegBuilding,
  FaRoad,
  FaTrain,
  FaPlane,
  FaIndustry,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaChartLine,
  FaClock,
  FaRegCheckCircle,
  FaStar,
} from 'react-icons/fa';
// import { GiParking } from 'react-icons/gi';
import { MdOutlineLocationOn, MdOutlineSquareFoot, MdOutlinePriceChange } from 'react-icons/md';

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);
  return { ref, controls, inView };
};

// Counter component for stats
const Counter = ({ from, to, duration = 2 }) => {
  const [count, setCount] = useState(from);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = from;
      const end = to;
      const increment = (end - start) / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, from, to, duration]);
  return <span ref={countRef}>{count}</span>;
};

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Highlights', 'Connectivity', 'Gallery', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: 'spring' }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl shadow-2xl py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaStore className={`text-3xl ${scrolled ? 'text-amber-600' : 'text-amber-400'}`} />
          <span className={`font-serif text-2xl font-bold tracking-tight ${scrolled ? 'text-gray-800' : 'text-white'}`}>
            Shyam<span className="text-amber-500">Plaza</span>
          </span>
        </div>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`font-medium transition-all duration-300 hover:text-amber-500 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {link}
            </a>
          ))}
          <a href="tel:9818027338" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full transition-all shadow-md hover:shadow-xl">
            Call Now
          </a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl text-white z-50">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-xl py-6 px-6 flex flex-col space-y-5"
        >
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-gray-800 font-medium hover:text-amber-600">
              {link}
            </a>
          ))}
          <a href="tel:9818027338" className="bg-amber-600 text-white px-5 py-2 rounded-full text-center">Call 9818027338</a>
        </motion.div>
      )}
    </motion.nav>
  );
};

// Hero Section with video background (premium)
const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Commercial Plaza" 
          className="w-full h-full object-cover scale-110 animate-slow-zoom"
        />
      </div>
      <div className="container mx-auto px-6 lg:px-12 relative z-20 text-center text-white">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <span className="inline-block px-4 py-1 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-300 text-sm font-semibold mb-4 border border-amber-400/30">
            ⚡ Limited Commercial Shops
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight drop-shadow-2xl">
            Shyam Plaza <br />
            <span className="text-amber-400">Khatushyamji</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mt-6 backdrop-blur-sm bg-black/20 p-4 rounded-2xl inline-block">
            Starting at just <span className="text-amber-300 font-bold text-2xl">₹5 Lakh*</span><br />
            250 sq.ft. | Prime location | High growth corridor
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
            <motion.a whileHover={{ scale: 1.05 }} href="tel:9818027338" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all flex items-center justify-center gap-2">
              <FaPhoneAlt /> Call: 9818027338
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} href="#contact" className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 px-8 py-4 rounded-full text-lg font-semibold transition-all">
              Get Brochure
            </motion.a>
          </div>
        </motion.div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center"><div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce" /></div>
        </motion.div>
      </div>
    </section>
  );
};

// Highlights with animated stats
const Highlights = () => {
  const { ref, controls } = useScrollAnimation();
  const highlights = [
    { icon: <FaRupeeSign />, title: 'Price', desc: 'Only ₹5 Lakh per shop', highlight: true, stat: '5 Lakh' },
    { icon: <MdOutlineSquareFoot />, title: 'Shop Size', desc: '250 sq.ft. (10 x 25 ft)', highlight: true, stat: '250 sqft' },
    { icon: <FaRegBuilding />, title: 'Registration', desc: 'Just ₹11,000 only', highlight: true, stat: '₹11K' },
    { icon: <FaChartLine />, title: 'ROI Potential', desc: 'High appreciation zone', highlight: false },
  ];

  return (
    <section id="highlights" className="py-24 bg-gradient-to-br from-white to-amber-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div ref={ref} animate={controls} initial="hidden" variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }} className="text-center mb-16">
          <h2 className="text-amber-600 font-semibold tracking-wide uppercase text-sm">Unbeatable Offer</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mt-2">Own a Commercial Shop <span className="text-amber-600">at Record Price</span></h3>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="max-w-3xl mx-auto text-gray-600 mt-6 text-lg">Perfect for retail, office, or investment. High footfall area with rapid infrastructure growth.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -8, scale: 1.02 }} className={`rounded-3xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 border backdrop-blur-sm ${item.highlight ? 'bg-gradient-to-br from-amber-100 to-amber-50 border-amber-300' : 'bg-white/80 border-gray-200'}`}>
              <div className={`text-5xl mb-4 flex justify-center ${item.highlight ? 'text-amber-700' : 'text-amber-600'}`}>{item.icon}</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
              <p className={`text-lg font-semibold ${item.highlight ? 'text-amber-800' : 'text-gray-700'}`}>{item.desc}</p>
              {item.stat && <div className="mt-3 text-sm text-amber-600 font-medium">✨ {item.stat}</div>}
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="mt-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-6 text-white text-center shadow-2xl">
          <p className="text-xl md:text-2xl font-bold">🎉 Limited Shots! Registration amount just ₹11,000. 🎉</p>
          <p className="mt-2">Book your shop today – Prices will increase soon.</p>
        </motion.div>
        {/* Animated stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Shops', value: 48, suffix: '' },
            { label: 'Expected ROI', value: 18, suffix: '%' },
            { label: 'Booked', value: 32, suffix: '+' },
            { label: 'Possession', value: 2025, suffix: '' }
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 bg-white rounded-2xl shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-amber-700"><Counter from={0} to={stat.value} duration={2} />{stat.suffix}</div>
              <div className="text-gray-600 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Connectivity with original Google Maps
const Connectivity = () => {
  const connections = [
    { icon: <FaRoad />, text: "10 mins drive from Khatushyamji Temple" },
    { 
      // icon: <GiParking />, 
      text: "Accessible Baba Parking nearby" },
    { icon: <FaTrain />, text: "Nearby Kishangarh - Renwal Railway Station" },
    { icon: <FaIndustry />, text: "RICCO Industrial Area Kishangarh - Renwal" },
    { icon: <FaRoad />, text: "GREEN FIELD EXPRESSWAY Mega highway connectivity" },
    { icon: <FaPlane />, text: "Upcoming Airport – only 3.5 km away" },
    { icon: <FaRoad />, text: "Only 2.5 km from Upcoming 6 Lane Highway" },
    { icon: <MdOutlineLocationOn />, text: "Dantaramgarh main Tehsil – just 10 km" },
  ];

  return (
    <section id="connectivity" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <h2 className="text-amber-600 font-semibold uppercase text-sm tracking-wider">Strategic Location</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mt-2">Excellent Connectivity</h3>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="grid sm:grid-cols-1 gap-4">
            {connections.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }} whileHover={{ scale: 1.01 }} className="bg-gray-50 rounded-xl p-4 flex items-center gap-4 shadow-md hover:shadow-lg transition">
                <div className="text-amber-600 text-2xl">{item.icon}</div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
          {/* Original Google Maps Embed */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              title="Khatushyamji Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14221.106519076626!2d75.421394!3d26.992937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b1f6d8b9b5b%3A0x7c8d9e2f6a1c4d3f!2sKhatushyamji%20Temple!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            />
            <div className="bg-white p-3 text-center text-gray-600 text-sm border-t">
              <FaMapMarkerAlt className="inline text-amber-500 mr-1" /> Exact location: Near Green Field Expressway, Khatushyamji, Rajasthan (2.5km from 6-lane highway)
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Gallery with lightbox effect (simple)
const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  ];
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <h2 className="text-amber-600 font-semibold uppercase text-sm">Project Visuals</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mt-2">Shop Gallery</h3>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {images.map((img, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }} whileHover={{ scale: 1.05 }} className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer group">
              <img src={img} alt={`Shop View ${idx}`} className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end justify-center p-4">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact & CTA
const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10"><div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full filter blur-3xl" /><div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl" /></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-amber-400 font-semibold uppercase text-sm tracking-wider">Secure Your Shop</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold mt-2">Call or Visit Today</h3>
            <div className="w-20 h-1 bg-amber-500 my-6 rounded-full" />
            <p className="text-gray-300 text-lg mb-8">Shops are selling fast at this price point. Contact us for site visit, payment plan, and registration details.</p>
            <div className="space-y-5">
              <div className="flex items-center gap-4"><FaPhoneAlt className="text-amber-500 text-2xl" /><span className="text-2xl font-bold">9818027338</span></div>
              <div className="flex items-center gap-4"><FaWhatsapp className="text-amber-500 text-2xl" /><span>WhatsApp: 9818027338</span></div>
              <div className="flex items-center gap-4"><FaMapMarkerAlt className="text-amber-500 text-2xl" /><span>Near Green Field Expressway, Khatushyamji, Rajasthan</span></div>
            </div>
            <div className="mt-8 flex gap-4">
              <a href="tel:9818027338" className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-full font-semibold transition shadow-lg flex items-center gap-2"><FaPhoneAlt /> Call Now</a>
              <a href="https://wa.me/919818027338" target="_blank" rel="noreferrer" className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold transition flex items-center gap-2"><FaWhatsapp /> WhatsApp</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20">
            <h4 className="text-2xl font-bold mb-6">Request a Callback</h4>
            <form className="space-y-5">
              <input type="text" placeholder="Full Name" className="w-full bg-white/20 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500" />
              <input type="email" placeholder="Email Address" className="w-full bg-white/20 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-white/20 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500" />
              <textarea rows="2" placeholder="Message (e.g., preferred visit time)" className="w-full bg-white/20 rounded-xl px-5 py-3 outline-none"></textarea>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="button" className="w-full bg-amber-600 hover:bg-amber-700 py-3 rounded-xl font-bold text-lg transition shadow-lg">Send Enquiry</motion.button>
            </form>
            <p className="text-xs text-gray-300 mt-4 text-center">We’ll call you back within 1 hour.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Floating WhatsApp Button
const FloatingWhatsApp = () => (
  <a href="https://wa.me/919818027338" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110">
    <FaWhatsapp className="text-2xl" />
  </a>
);

// Footer
const Footer = () => (
  <footer className="bg-gray-950 text-gray-400 py-12">
    <div className="container mx-auto px-6 text-center">
      <div className="flex justify-center space-x-2 items-center mb-6"><FaStore className="text-amber-500 text-3xl" /><span className="font-serif text-2xl font-bold text-white">ShyamPlaza</span></div>
      <p className="max-w-lg mx-auto">Commercial shops in Khatushyamji – unbeatable price, excellent connectivity, high ROI.</p>
      <div className="flex justify-center gap-6 mt-6 text-sm"><a href="#" className="hover:text-amber-400">Privacy Policy</a><a href="#" className="hover:text-amber-400">Terms</a><a href="#" className="hover:text-amber-400">Sitemap</a></div>
      <div className="border-t border-gray-800 mt-8 pt-6 text-sm">&copy; 2025 Shyam Plaza. Contact: 9818027338 | RERA approved project</div>
    </div>
  </footer>
);

// Main App
const App = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Highlights />
      <Connectivity />
      <Gallery />
      <Contact />
      <FloatingWhatsApp />
      <Footer />
      <style jsx global>{`
        @keyframes slow-zoom { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }
        .animate-slow-zoom { animation: slow-zoom 20s ease-in-out infinite alternate; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default App;