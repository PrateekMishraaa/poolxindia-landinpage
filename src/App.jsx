import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import {
  FaStore, FaRupeeSign, FaRegBuilding, FaRoad, FaTrain, FaPlane, FaIndustry,
  FaPhoneAlt, FaMapMarkerAlt, FaArrowRight, FaBars, FaTimes, FaWhatsapp,
  FaChartLine, FaClock, FaRegCheckCircle, FaStar, FaStarHalfAlt, FaRegStar,
  FaDumbbell, FaWifi, FaCar, FaCoffee, FaLeaf, FaShieldAlt, FaBabyCarriage,
  FaFireExtinguisher, FaTint, FaBolt, FaTrashAlt, FaCamera, FaRegBuilding as FaBuilding,
  FaCalculator, FaInfoCircle, FaQuestionCircle, FaDownload, FaRegCalendarAlt,
} from 'react-icons/fa';
import {  GiShoppingBag, GiElectric, GiWaterFountain } from 'react-icons/gi';
import { MdOutlineLocationOn, MdOutlineSquareFoot, MdOutlinePriceChange, MdSecurity } from 'react-icons/md';
import { TbRulerMeasure } from 'react-icons/tb';

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

// Counter component
const Counter = ({ from, to, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (inView) {
      let start = from;
      const end = to;
      const increment = (end - start) / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) { setCount(end); clearInterval(timer); }
        else setCount(Math.floor(start));
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, from, to, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
};

// Navbar (same as before but with added sections)
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = ['Home', 'Overview', 'Amenities', 'Floor Plans', 'Pricing', 'Location', 'Gallery', 'Contact'];
  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, type: 'spring' }}
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-2xl py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaStore className={`text-3xl ${scrolled ? 'text-amber-600' : 'text-amber-400'}`} />
          <span className={`font-serif text-2xl font-bold tracking-tight ${scrolled ? 'text-gray-800' : 'text-white'}`}>Shyam<span className="text-amber-500">Plaza</span></span>
        </div>
        <div className="hidden md:flex space-x-6">
          {navLinks.map(link => <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className={`font-medium transition hover:text-amber-500 ${scrolled ? 'text-gray-700' : 'text-white'}`}>{link}</a>)}
          <a href="tel:9818027338" className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-full transition shadow-md">Call Now</a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl text-white z-50">{isOpen ? <FaTimes /> : <FaBars />}</button>
      </div>
      <AnimatePresence>
        {isOpen && <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-xl py-6 px-6 flex flex-col space-y-5">
          {navLinks.map(link => <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} onClick={() => setIsOpen(false)} className="text-gray-800 font-medium hover:text-amber-600">{link}</a>)}
          <a href="tel:9818027338" className="bg-amber-600 text-white px-5 py-2 rounded-full text-center">Call 9818027338</a>
        </motion.div>}
      </AnimatePresence>
    </motion.nav>
  );
};

// Hero Section (unchanged, premium)
const Hero = () => (
  <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0"><div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />
      <img src="https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Commercial Plaza" className="w-full h-full object-cover scale-110 animate-slow-zoom" />
    </div>
    <div className="container mx-auto px-6 lg:px-12 relative z-20 text-center text-white">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <span className="inline-block px-4 py-1 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-300 text-sm font-semibold mb-4 border border-amber-400/30">⚡ Limited Commercial Shops</span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight drop-shadow-2xl">Shyam Plaza <br /><span className="text-amber-400">Khatushyamji</span></h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mt-6 backdrop-blur-sm bg-black/20 p-4 rounded-2xl inline-block">Starting at just <span className="text-amber-300 font-bold text-2xl">₹5 Lakh*</span><br />250 sq.ft. | Prime location | High growth corridor</p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
          <motion.a whileHover={{ scale: 1.05 }} href="tel:9818027338" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl transition flex items-center gap-2"><FaPhoneAlt /> Call: 9818027338</motion.a>
          <motion.a whileHover={{ scale: 1.05 }} href="#contact" className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 px-8 py-4 rounded-full text-lg font-semibold transition">Get Brochure</motion.a>
        </div>
      </motion.div>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2"><div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center"><div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce" /></div></motion.div>
    </div>
  </section>
);

// Overview / About Section
const Overview = () => {
  const { ref, controls } = useScrollAnimation();
  const features = [
    { icon: <FaChartLine />, title: 'High Appreciation', desc: 'Rapidly developing corridor with upcoming airport & expressway' },
    { icon: <FaStore />, title: 'Retail Hub', desc: 'Ideal for shops, offices, clinics, and showrooms' },
    { icon: <FaShieldAlt />, title: 'RERA Approved', desc: 'Government-approved project with clear titles' },
    { icon: <FaClock />, title: 'Early Possession', desc: 'Handover by Dec 2025' },
  ];
  return (
    <section id="overview" className="py-24 bg-gradient-to-br from-white to-amber-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div ref={ref} animate={controls} initial="hidden" variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }} className="text-center mb-16">
          <h2 className="text-amber-600 font-semibold uppercase text-sm">Project Overview</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mt-2">Why Invest in Shyam Plaza?</h3>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl text-amber-600 mb-4 flex justify-center">{item.icon}</div>
              <h4 className="text-xl font-bold text-gray-800">{item.title}</h4>
              <p className="text-gray-500 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="bg-amber-50 rounded-3xl p-8 flex flex-wrap justify-around gap-6">
          {[{ label: 'Total Shops', value: 48 }, { label: 'Area Range', value: '250-500 sqft' }, { label: 'Parking', value: '2/Shop' }, { label: 'Open Space', value: '35%' }].map((stat, i) => (
            <div key={i} className="text-center"><div className="text-3xl font-bold text-amber-700">{stat.value}</div><div className="text-gray-600">{stat.label}</div></div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Amenities (expanded)
const Amenities = () => {
  const amenitiesList = [
    {
      //  icon: <GiParking />, 
      name: 'Ample Parking', desc: 'Dedicated parking slots for every shop' },
    { icon: <MdSecurity />, name: '24/7 Security', desc: 'CCTV surveillance & security cabin' },
    { icon: <FaWifi />, name: 'High-Speed WiFi', desc: 'Common area internet zone' },
    { icon: <FaBolt />, name: 'Power Backup', desc: 'Full generator backup for shops' },
    { icon: <FaTint />, name: 'Water Supply', desc: '24x7 RO water connection' },
    { icon: <GiShoppingBag />, name: 'Retail Plaza', desc: 'High footfall design with wide corridors' },
    { icon: <FaLeaf />, name: 'Landscaping', desc: 'Green buffer zone and plants' },
    { icon: <FaFireExtinguisher />, name: 'Fire Safety', desc: 'Fire hydrant & alarm system' },
    { icon: <FaTrashAlt />, name: 'Waste Mgmt', desc: 'Daily waste disposal service' },
    { icon: <FaCamera />, name: 'Smart Entry', desc: 'Automated gate & intercom' },
  ];
  return (
    <section id="amenities" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-14"><h2 className="text-amber-600 font-semibold uppercase">Amenities</h2><h3 className="font-serif text-4xl md:text-5xl font-bold text-gray-800">World-Class Facilities</h3><div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full" /></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenitiesList.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={{ y: -5 }} className="bg-gray-50 rounded-xl p-5 flex flex-col items-center text-center shadow-md hover:shadow-xl transition">
              <div className="text-4xl text-amber-600 mb-3">{item.icon}</div><h4 className="font-bold text-gray-800">{item.name}</h4><p className="text-sm text-gray-500 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Floor Plans
const FloorPlans = () => {
  const plans = [
    { name: 'Standard Shop', size: '250 sq.ft', dimensions: '10 x 25 ft', image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=400', price: '₹5 Lakh' },
    { name: 'Corner Shop', size: '350 sq.ft', dimensions: '14 x 25 ft', image: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=400', price: '₹7 Lakh' },
  ];
  return (
    <section id="floor-plans" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-14"><h2 className="text-amber-600 uppercase text-sm">Layouts</h2><h3 className="font-serif text-4xl md:text-5xl font-bold text-gray-800">Floor Plans</h3><div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full" /></div>
        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.2 }} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <img src={plan.image} alt={plan.name} className="w-full h-56 object-cover" />
              <div className="p-6"><h4 className="text-2xl font-bold">{plan.name}</h4><div className="flex justify-between mt-4"><span className="text-gray-600"><TbRulerMeasure className="inline mr-1" />{plan.size}</span><span className="text-gray-600"><FaBuilding className="inline mr-1" />{plan.dimensions}</span><span className="text-amber-700 font-bold">{plan.price}</span></div></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Price List & Payment Plan
const PriceList = () => {
  const [showEMI, setShowEMI] = useState(false);
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interest, setInterest] = useState(9);
  const [tenure, setTenure] = useState(5);
  const emi = (loanAmount * (interest / 1200) * Math.pow(1 + interest / 1200, tenure * 12)) / (Math.pow(1 + interest / 1200, tenure * 12) - 1);
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-14"><h2 className="text-amber-600 uppercase text-sm">Investment</h2><h3 className="font-serif text-4xl md:text-5xl font-bold text-gray-800">Price List & Payment Plan</h3><div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full" /></div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="overflow-x-auto"><table className="w-full text-left border-collapse"><thead><tr className="bg-amber-100"><th className="p-4">Shop Type</th><th className="p-4">Size</th><th className="p-4">Price</th><th className="p-4">Booking Amt</th></tr></thead><tbody><tr className="border-b"><td className="p-4">Standard</td><td>250 sqft</td><td className="font-bold">₹5 Lakh</td><td>₹11,000</td></tr><tr className="border-b"><td className="p-4">Corner</td><td>350 sqft</td><td className="font-bold">₹7 Lakh</td><td>₹21,000</td></tr><tr><td className="p-4">Premium</td><td>500 sqft</td><td className="font-bold">₹10 Lakh</td><td>₹31,000</td></tr></tbody></table></div>
          <div className="bg-gray-50 rounded-2xl p-6 shadow-md"><div className="flex justify-between items-center"><h4 className="text-xl font-bold">EMI Calculator</h4><button onClick={() => setShowEMI(!showEMI)} className="text-amber-600"><FaCalculator /></button></div>{showEMI && <div className="mt-4 space-y-4"><div><label>Loan Amount (₹)</label><input type="range" min="100000" max="1000000" step="10000" value={loanAmount} onChange={e => setLoanAmount(e.target.value)} className="w-full" /><div>₹{loanAmount.toLocaleString()}</div></div><div><label>Interest Rate (%)</label><input type="range" min="7" max="15" step="0.5" value={interest} onChange={e => setInterest(e.target.value)} /><div>{interest}%</div></div><div><label>Tenure (Years)</label><input type="range" min="1" max="10" value={tenure} onChange={e => setTenure(e.target.value)} /><div>{tenure} years</div></div><div className="text-center pt-4 border-t"><p className="text-amber-700 font-bold text-2xl">₹{emi.toFixed(0)}/month</p><p className="text-sm">Estimated EMI</p></div></div>}</div>
        </div>
      </div>
    </section>
  );
};

// Connectivity with original map (same as before but placed after pricing)
const Connectivity = () => {
  const connections = [
    { icon: <FaRoad />, text: "10 mins drive from Khatushyamji Temple" }, { 
      // icon: <GiParking />,
       text: "Accessible Baba Parking nearby" },
    { icon: <FaTrain />, text: "Nearby Kishangarh - Renwal Railway Station" }, { icon: <FaIndustry />, text: "RICCO Industrial Area" },
    { icon: <FaRoad />, text: "GREEN FIELD EXPRESSWAY" }, { icon: <FaPlane />, text: "Upcoming Airport – 3.5 km" },
    { icon: <FaRoad />, text: "2.5 km from 6 Lane Highway" }, { icon: <MdOutlineLocationOn />, text: "Dantaramgarh Tehsil – 10 km" },
  ];
  return (
    <section id="location" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-14"><h2 className="text-amber-600 uppercase text-sm">Location Advantage</h2><h3 className="font-serif text-4xl md:text-5xl font-bold text-gray-800">Excellent Connectivity</h3><div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full" /></div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="grid gap-4">{connections.map((item, idx) => <motion.div key={idx} whileHover={{ x: 5 }} className="bg-white rounded-xl p-4 flex items-center gap-3 shadow"><div className="text-amber-600 text-xl">{item.icon}</div><p>{item.text}</p></motion.div>)}</div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white"><iframe title="Khatushyamji Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14221.106519076626!2d75.421394!3d26.992937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b1f6d8b9b5b%3A0x7c8d9e2f6a1c4d3f!2sKhatushyamji%20Temple!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe><div className="bg-white p-2 text-center text-sm"><FaMapMarkerAlt className="inline text-amber-500" /> Near Green Field Expressway, Khatushyamji</div></div>
        </div>
      </div>
    </section>
  );
};

// Gallery (lightbox not needed, just grid)
const Gallery = () => {
  const images = ['https://images.unsplash.com/photo-1568667256549-094345857637', 'https://images.unsplash.com/photo-1580674285054-bed31e145f59', 'https://images.unsplash.com/photo-1582407947304-fd86f028f716', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136'].map(u => u + '?w=800&q=80');
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-14"><h2 className="text-amber-600 uppercase text-sm">Visuals</h2><h3 className="font-serif text-4xl md:text-5xl font-bold text-gray-800">Project Gallery</h3><div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full" /></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">{images.map((img, idx) => <motion.div key={idx} whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden shadow-xl"><img src={img} className="w-full h-64 object-cover" /></motion.div>)}</div>
      </div>
    </section>
  );
};

// Testimonials
const Testimonials = () => {
  const reviews = [
    { name: 'Ramesh Gupta', location: 'Jaipur', rating: 5, text: 'Perfect location near temple and highway. Best investment decision.' },
    { name: 'Neha Sharma', location: 'Delhi', rating: 4.5, text: 'Clean design, good price point. The connectivity is excellent.' },
    { name: 'Amit Patel', location: 'Kolkata', rating: 5, text: 'Shyam Plaza team is professional. Got my shop registered smoothly.' },
  ];
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) stars.push(<FaStar key={i} className="text-yellow-500" />);
      else if (i - 0.5 === rating) stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      else stars.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
    return stars;
  };
  return (
    <section className="py-24 bg-amber-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-14"><h2 className="text-amber-600 uppercase text-sm">Testimonials</h2><h3 className="font-serif text-4xl md:text-5xl font-bold text-gray-800">What Our Clients Say</h3><div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full" /></div>
        <div className="grid md:grid-cols-3 gap-8">{reviews.map((rev, idx) => <motion.div key={idx} whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-lg"><div className="flex gap-1 mb-2">{renderStars(rev.rating)}</div><p className="text-gray-600 italic">"{rev.text}"</p><div className="mt-4 font-bold">{rev.name}</div><div className="text-sm text-gray-500">{rev.location}</div></motion.div>)}</div>
      </div>
    </section>
  );
};

// FAQ Accordion
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { q: 'What is the price of a shop?', a: 'Starting from ₹5 Lakh for 250 sq.ft. standard shop.' },
    { q: 'Is the project RERA approved?', a: 'Yes, Shyam Plaza is RERA approved with clear titles.' },
    { q: 'What is the possession date?', a: 'Expected possession by December 2025.' },
    { q: 'Can I get home loan?', a: 'Yes, all leading banks provide loans for this project.' },
    { q: 'Is GST applicable?', a: 'Yes, GST as per government norms will be applicable.' },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-14"><h2 className="text-amber-600 uppercase text-sm">FAQ</h2><h3 className="font-serif text-4xl md:text-5xl font-bold text-gray-800">Frequently Asked Questions</h3><div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full" /></div>
        {faqs.map((faq, idx) => (<div key={idx} className="border-b border-gray-200 py-4"><button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800"><span>{faq.q}</span><span>{openIndex === idx ? '−' : '+'}</span></button>{openIndex === idx && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-2 text-gray-600 pl-2">{faq.a}</motion.div>}</div>))}
      </div>
    </section>
  );
};

// Contact / Site Visit Form
const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"><div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full filter blur-3xl" /><div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl" /></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}><h2 className="text-amber-400 uppercase text-sm tracking-wider">Book Your Shop</h2><h3 className="font-serif text-4xl md:text-5xl font-bold mt-2">Schedule a Site Visit</h3><div className="w-20 h-1 bg-amber-500 my-6 rounded-full" /><p className="text-gray-300 text-lg mb-8">Visit our sales gallery, see the actual shops, and get the best deal.</p><div className="space-y-4"><div className="flex items-center gap-3"><FaPhoneAlt className="text-amber-500" /><span className="text-xl font-bold">9818027338</span></div><div className="flex items-center gap-3"><FaWhatsapp className="text-amber-500" /><span>WhatsApp: 9818027338</span></div><div className="flex items-center gap-3"><FaMapMarkerAlt className="text-amber-500" /><span>Near Green Field Expressway, Khatushyamji</span></div></div><div className="mt-8 flex gap-4"><a href="tel:9818027338" className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-full font-semibold flex items-center gap-2"><FaPhoneAlt /> Call Now</a><a href="https://wa.me/919818027338" target="_blank" className="bg-green-600 px-6 py-3 rounded-full flex items-center gap-2"><FaWhatsapp /> WhatsApp</a></div></motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20"><h4 className="text-2xl font-bold mb-6">Request a Callback</h4><form className="space-y-5"><input type="text" placeholder="Full Name" className="w-full bg-white/20 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500" /><input type="email" placeholder="Email" className="w-full bg-white/20 rounded-xl px-5 py-3" /><input type="tel" placeholder="Phone" className="w-full bg-white/20 rounded-xl px-5 py-3" /><textarea rows="2" placeholder="Message" className="w-full bg-white/20 rounded-xl px-5 py-3"></textarea><motion.button whileHover={{ scale: 1.02 }} className="w-full bg-amber-600 hover:bg-amber-700 py-3 rounded-xl font-bold">Send Enquiry</motion.button></form><p className="text-xs text-gray-300 mt-4 text-center">We'll get back to you in 1 hour.</p></motion.div>
        </div>
      </div>
    </section>
  );
};

// Floating WhatsApp
const FloatingWhatsApp = () => <a href="https://wa.me/919818027338" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition hover:scale-110"><FaWhatsapp className="text-2xl" /></a>;

// Footer
const Footer = () => (
  <footer className="bg-gray-950 text-gray-400 py-12"><div className="container mx-auto px-6 text-center"><div className="flex justify-center items-center gap-2 mb-6"><FaStore className="text-amber-500 text-3xl" /><span className="font-serif text-2xl font-bold text-white">ShyamPlaza</span></div><p>Commercial shops in Khatushyamji – unbeatable price, excellent connectivity, high ROI.</p><div className="flex justify-center gap-6 mt-6"><a href="#" className="hover:text-amber-400">Privacy</a><a href="#" className="hover:text-amber-400">Terms</a><a href="#" className="hover:text-amber-400">Sitemap</a></div><div className="border-t border-gray-800 mt-6 pt-6 text-sm">&copy; 2025 Shyam Plaza. Contact: 9818027338 | RERA approved</div></div></footer>
);

// Main App
const App = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `@keyframes slow-zoom { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }.animate-slow-zoom { animation: slow-zoom 20s ease-in-out infinite alternate; }html { scroll-behavior: smooth; }`;
    document.head.appendChild(style);
  }, []);
  return (<div className="font-sans overflow-x-hidden"><Navbar /><Hero /><Overview /><Amenities /><FloorPlans /><PriceList /><Connectivity /><Gallery /><Testimonials /><FAQ /><Contact /><FloatingWhatsApp /><Footer /></div>);
};

export default App;