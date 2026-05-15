import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  FaServer, FaShieldAlt, FaRocket, FaCloudUploadAlt, FaGlobe,
  FaBolt, FaUsers, FaLock, FaTwitter, FaDiscord, FaGithub,
  FaChevronRight, FaFire, FaSkull, FaBrain, FaDatabase, FaNetworkWired,
  FaCode, FaDocker, FaAws, FaCloud, FaRegImage, FaVideo, FaEnvelope,
  FaChartLine, FaCalendarAlt, FaPhoneAlt, FaMapMarkerAlt, FaQuoteLeft,
  FaBalanceScale, FaClock, FaFileAlt, FaKey, FaRobot, FaArrowAltCircleRight,
  FaCloudSun, FaHdd, FaLayerGroup, FaPlug, FaSyncAlt, FaWifi, FaEye,
  FaTachometerAlt, FaLockOpen, FaUserSecret, FaCertificate, FaInfinity,
  FaReact, FaNodeJs, FaVuejs, FaAngular, FaPhp, FaPython, FaJava,
  FaAward, FaTrophy, FaChartBar, FaCheckCircle
} from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiMysql, SiPostgresql, SiRedis, SiGraphql, SiSvelte, SiSolid, SiTypescript, SiJavascript } from 'react-icons/si';

const useScrollAnimation = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });
  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);
  return { ref, controls, inView };
};

// Reusable Section Header
const SectionHeader = ({ badge, title, highlight, description }) => (
  <div className="text-center mb-16">
    <span className="px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-500 text-sm font-bold uppercase tracking-wider inline-block mb-4">
      {badge}
    </span>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tighter">
      {title} <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">{highlight}</span>
    </h2>
    <p className="text-gray-400 text-lg max-w-2xl mx-auto">{description}</p>
  </div>
);

// Reusable Feature Card
const FeatureCard = ({ icon: Icon, title, description, color }) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full hover:border-red-500/50 transition-all"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <Icon className={`w-12 h-12 mb-4 ${color} group-hover:scale-110 transition-transform`} />
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </motion.div>
);

// ========== NAVBAR ==========
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-red-500/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-500 rounded-lg rotate-45"></div>
          <span className="text-2xl font-black text-white tracking-tighter">POOL<span className="text-red-500">X</span>INDIA</span>
        </div>
        <div className="hidden md:flex space-x-8 text-white/80 font-semibold">
          {['Edge', 'Security', 'Compute', 'Roadmap', 'Contact'].map(item => (
            <motion.a key={item} href="#" whileHover={{ color: '#ef4444', y: -2 }} className="hover:text-red-500 transition-colors">{item}</motion.a>
          ))}
        </div>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-2 rounded-full font-bold text-white shadow-lg shadow-red-500/25 hover:shadow-red-500/50 transition-all">
          DEPLOY NOW
        </motion.button>
      </div>
    </motion.nav>
  );
};

// ========== 1. HERO ==========
const Hero = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/10 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full filter blur-[120px] opacity-20 animate-pulse delay-1000"></div>
      <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } } }}
        className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="inline-block">
              <span className="px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-500 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                <FaFire className="animate-pulse" /> INDIA'S FASTEST EDGE NETWORK
              </span>
            </motion.div>
            <motion.h1 variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="text-6xl md:text-7xl lg:text-8xl font-black text-white mt-6 leading-tight tracking-tighter">
              AGGRESSIVE <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">WEB SERVICES</span>
            </motion.h1>
            <motion.p variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="text-gray-400 text-lg mt-6 max-w-lg">
              Unlimited bandwidth, <span className="text-red-500 font-bold">100% SLA</span>, and sub‑millisecond latency. Enterprise-grade infrastructure at degen pricing.
            </motion.p>
            <motion.div variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="flex flex-wrap gap-4 mt-8">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 rounded-full font-bold text-white text-lg shadow-xl shadow-red-500/30 flex items-center gap-2">
                START FREE TIER <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border border-red-500/50 px-8 py-4 rounded-full font-bold text-white text-lg hover:bg-red-500/10">
                SEE LIVE DEMO
              </motion.button>
            </motion.div>
            <motion.div variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="flex gap-8 mt-12">
              <div><div className="text-3xl font-black text-white">99.999%</div><div className="text-gray-500 text-sm">Uptime SLA</div></div>
              <div><div className="text-3xl font-black text-white">&lt;10ms</div><div className="text-gray-500 text-sm">Global Latency</div></div>
              <div><div className="text-3xl font-black text-white">50+</div><div className="text-gray-500 text-sm">Edge Locations</div></div>
            </motion.div>
          </div>
          <motion.div variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }} animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="relative">
            <div className="relative bg-gradient-to-br from-red-500/20 to-red-900/20 p-8 rounded-2xl border border-red-500/30 backdrop-blur-xl">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-500 rounded-full filter blur-2xl opacity-60"></div>
              <div className="flex justify-between items-center mb-6"><span className="text-white font-bold">Network Status</span><span className="text-green-500 font-bold">100% OPERATIONAL</span></div>
              <div className="text-4xl font-black text-white mb-2">1.2 Tbps</div>
              <div className="text-gray-400 text-sm mb-2">Total Edge Capacity</div>
              <div className="h-32 bg-gradient-to-r from-green-500/20 to-red-500/20 rounded-lg mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201440%20320%22%3E%3Cpath%20fill%3D%22%23ef4444%22%20fill-opacity%3D%220.2%22%20d%3D%22M0%2C256L48%2C245.3C96%2C235%2C192%2C213%2C288%2C208C384%2C203%2C480%2C213%2C576%2C229.3C672%2C245%2C768%2C267%2C864%2C261.3C960%2C256%2C1056%2C224%2C1152%2C208C1248%2C192%2C1344%2C192%2C1392%2C192L1440%2C192L1440%2C320L1392%2C320C1344%2C320%2C1248%2C320%2C1152%2C320C1056%2C320%2C960%2C320%2C864%2C320C768%2C320%2C672%2C320%2C576%2C320C480%2C320%2C384%2C320%2C288%2C320C192%2C320%2C96%2C320%2C48%2C320L0%2C320Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')] bg-cover bg-center opacity-50"></div>
              </div>
              <div className="flex justify-between text-sm"><span className="text-gray-400">DDoS Mitigation: 2 Tbps</span><span className="text-gray-400">Zero Packet Loss</span></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

// ========== 2. STATS ==========
const Stats = () => {
  const { ref, controls } = useScrollAnimation();
  const stats = [
    { label: 'Global POPs', value: '50+', icon: FaGlobe, color: 'from-red-500 to-orange-700' },
    { label: 'Total Bandwidth', value: '12 Tbps', icon: FaBolt, color: 'from-blue-500 to-cyan-700' },
    { label: 'Websites Powered', value: '250K+', icon: FaServer, color: 'from-green-500 to-emerald-700' },
    { label: 'DDoS Mitigation', value: '2 Tbps', icon: FaShieldAlt, color: 'from-purple-500 to-indigo-700' },
  ];
  return (
    <div className="bg-gradient-to-b from-black to-gray-950 py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }} whileHover={{ scale: 1.05, y: -5 }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-800/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 text-center">
                <stat.icon className={`w-12 h-12 mx-auto mb-4 text-transparent bg-gradient-to-r ${stat.color} bg-clip-text`} />
                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 font-semibold">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// ========== 3. CORE EDGE NETWORK ==========
const EdgeNetwork = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="🌍 GLOBAL REACH" title="EDGE NETWORK" highlight="DOMINATION" description="50+ edge locations across India and the world. Your content is always milliseconds away." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaGlobe, title: "Anycast Routing", desc: "Traffic automatically routed to the nearest POP for lowest latency.", color: "text-blue-500" },
              { icon: FaBolt, title: "Instant Cache Purge", desc: "Purge entire CDN cache in under 2 seconds.", color: "text-yellow-500" },
              { icon: FaSyncAlt, title: "Origin Shield", desc: "Reduce origin load with tiered caching and smart backoff.", color: "text-green-500" }
            ].map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 4. DDoS MITIGATION ==========
const DDoS = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <div className="bg-gray-950 py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="🛡️ ZERO DOWNTIME" title="DDoS ANNIHILATION" highlight="2 TBPS" description="Multi‑layer scrubbing centers absorb the largest attacks before they reach your origin." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaShieldAlt, title: "L3/4/7 Protection", desc: "Mitigate UDP floods, SYN floods, HTTP floods, and Slowloris.", color: "text-red-500" },
              { icon: FaBrain, title: "Behavioral Analysis", desc: "AI detects and blocks zero‑day attacks in real time.", color: "text-purple-500" },
              { icon: FaClock, title: "Always‑On Scrubbing", desc: "No failover delay – we continuously filter malicious traffic.", color: "text-orange-500" }
            ].map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 5. GLOBAL LOAD BALANCING ==========
const LoadBalancing = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="⚖️ UNBREAKABLE" title="GLOBAL LOAD" highlight="BALANCING" description="Distribute traffic across multiple regions, clouds, and origins with health checks and auto‑failover." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaNetworkWired, title: "Geo‑Steering", desc: "Route users to the closest healthy endpoint based on location.", color: "text-cyan-500" },
              { icon: FaTachometerAlt, title: "Weighted Round Robin", desc: "Fine‑control traffic distribution across origins.", color: "text-indigo-500" },
              { icon: FaEye, title: "Health Checks", desc: "Active/passive monitoring with automatic failover.", color: "text-green-500" }
            ].map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 6. SERVERLESS EDGE FUNCTIONS ==========
const EdgeFunctions = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <div className="bg-gray-950 py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="⚡ ULTRA‑LOW LATENCY" title="SERVERLESS EDGE" highlight="FUNCTIONS" description="Deploy JavaScript, Rust, or Go at the edge with 0 cold starts. Execute code in milliseconds." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaCode, title: "Native WASM", desc: "Run high‑performance WebAssembly modules at the edge.", color: "text-yellow-500" },
              { icon: FaRocket, title: "Sub‑millisecond", desc: "Median execution time under 5ms for lightweight logic.", color: "text-red-500" },
              { icon: FaPlug, title: "Integrate Anywhere", desc: "Connect to databases, auth, and third‑party APIs.", color: "text-blue-500" }
            ].map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 7. OBJECT STORAGE ==========
const ObjectStorage = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="📦 INFINITE SCALE" title="OBJECT STORAGE" highlight="S3‑COMPATIBLE" description="Store and serve petabytes of data with 11 nines durability and instant global access." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaDatabase, title: "S3 Compatible API", desc: "Use existing tools – awscli, boto3, MinIO client.", color: "text-orange-500" },
              { icon: FaCloudUploadAlt, title: "Automatic Tiering", desc: "Hot/archive tiers to optimise cost vs. performance.", color: "text-blue-500" },
              { icon: FaLock, title: "Server‑Side Encryption", desc: "AES‑256 with customer‑managed keys.", color: "text-green-500" }
            ].map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 8. CDN CACHING ==========
const CDN = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <div className="bg-gray-950 py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="🚀 BLAZING FAST" title="CDN CACHING" highlight="EDGE DELIVERY" description="Static & dynamic content acceleration. 100% cache hit ratio with predictive prefetching." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaCloud, title: "Dynamic Content", desc: "Edge‑side includes and real‑time compression.", color: "text-purple-500" },
              { icon: FaRegImage, title: "Image Optimization", desc: "On‑the‑fly resizing, WebP/AVIF conversion.", color: "text-pink-500" },
              { icon: FaFileAlt, title: "Cache Analytics", desc: "See what's cached and why.", color: "text-indigo-500" }
            ].map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 9. DNS MANAGEMENT ==========
const DNS = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="🌐 INSTANT PROPAGATION" title="DNS MANAGEMENT" highlight="ANYCAST DNS" description="Millisecond query resolution, DNSSEC, and 100% uptime. Manage records via API or dashboard." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaGlobe, title: "Anycast DNS", desc: "Global resolvers with sub‑10ms average response.", color: "text-blue-500" },
              { icon: FaKey, title: "DNSSEC", desc: "Cryptographically sign your zones.", color: "text-green-500" },
              { icon: FaArrowAltCircleRight, title: "Traffic Steering", desc: "Failover, weighted, and geo‑based routing.", color: "text-red-500" }
            ].map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 10. WAF ==========
const WAF = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <div className="bg-gray-950 py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="🔒 HARDENED" title="WEB APPLICATION" highlight="FIREWALL" description="OWASP top 10 protection, custom rules, and bot mitigation. Block attacks before they reach your app." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaUserSecret, title: "Bot Management", desc: "Identify and block scraper bots, credential stuffers.", color: "text-red-500" },
              { icon: FaRobot, title: "Rate Limiting", desc: "Protect endpoints from brute force and DDoS.", color: "text-purple-500" },
              { icon: FaEye, title: "Virtual Patching", desc: "Instantly fix vulnerabilities without code changes.", color: "text-cyan-500" }
            ].map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 11. API GATEWAY ==========
const APIGateway = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="🔌 UNIFIED ENTRY" title="API GATEWAY" highlight="EDGE ROUTING" description="Authenticate, rate‑limit, transform, and route API requests at the edge with millisecond latency." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaKey, title: "JWT Validation", desc: "Verify tokens before requests hit your backend.", color: "text-yellow-500" },
              { icon: FaLayerGroup, title: "Request/Response Transformation", desc: "Modify headers, body, or query strings.", color: "text-blue-500" },
              { icon: FaChartLine, title: "Analytics", desc: "Per‑endpoint metrics and error tracking.", color: "text-green-500" }
            ].map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 12. REAL‑TIME MESSAGING ==========
const RealtimeMessaging = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <div className="bg-gray-950 py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="💬 LIVE" title="REAL‑TIME MESSAGING" highlight="GLOBAL PUB/SUB" description="WebSocket and MQTT support. Broadcast messages to millions of devices instantly." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaWifi, title: "WebSockets", desc: "Persistent connections with auto‑reconnect.", color: "text-blue-500" },
              { icon: FaCloud, title: "MQTT Broker", desc: "IoT‑optimised messaging protocol.", color: "text-green-500" },
              { icon: FaSyncAlt, title: "Message History", desc: "Store and replay recent messages.", color: "text-orange-500" }
            ].map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 13. IMAGE OPTIMIZATION ==========
const ImageOptimization = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="📸 VISUAL SPEED" title="IMAGE OPTIMIZATION" highlight="ON‑THE‑FLY" description="Resize, crop, compress, and convert images automatically. Save bandwidth and accelerate pages." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaRegImage, title: "Format Conversion", desc: "WebP, AVIF, JPEG‑XL support.", color: "text-purple-500" },
              { icon: FaTachometerAlt, title: "Smart Compression", desc: "Visual quality‑preserving algorithms.", color: "text-blue-500" },
              { icon: FaCloud, title: "Responsive Images", desc: "Serve correct dimensions per device.", color: "text-green-500" }
            ].map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 14. VIDEO STREAMING ==========
const VideoStreaming = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <div className="bg-gray-950 py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="🎬 UNBUFFERED" title="VIDEO STREAMING" highlight="HLS/DASH" description="Adaptive bitrate streaming, live transcoding, and low‑latency CMAF. 4K ready." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaVideo, title: "Live Transcoding", desc: "Convert input to multiple resolutions in real time.", color: "text-red-500" },
              { icon: FaCloud, title: "JIT Packaging", desc: "Package as HLS or DASH on demand.", color: "text-blue-500" },
              { icon: FaLock, title: "DRM", desc: "Widevine, PlayReady, FairPlay support.", color: "text-green-500" }
            ].map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 15. CONTAINER REGISTRY ==========
const ContainerRegistry = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="🐳 OCI COMPATIBLE" title="CONTAINER REGISTRY" highlight="GLOBAL PULLS" description="Secure, high‑speed container image storage with vulnerability scanning and geo‑replication." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaDocker, title: "Docker/OCI", desc: "Push/pull using standard CLI tools.", color: "text-blue-500" },
              { icon: FaShieldAlt, title: "Vulnerability Scan", desc: "Auto‑scan for CVEs on every push.", color: "text-red-500" },
              { icon: FaGlobe, title: "Replicated Pools", desc: "Pull images from nearest POP.", color: "text-green-500" }
            ].map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 16. MANAGED KUBERNETES ==========
const ManagedK8s = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <div className="bg-gray-950 py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="☸️ SCALE OR DIE" title="MANAGED KUBERNETES" highlight="TURNKEY K8S" description="Production‑ready clusters with auto‑scaling, GPU support, and integrated service mesh." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaNetworkWired, title: "Istio Mesh", desc: "Secure service‑to‑service communication.", color: "text-cyan-500" },
              { icon: FaTachometerAlt, title: "Auto‑scaling", desc: "Horizontal Pod Autoscaler + cluster auto‑scaler.", color: "text-blue-500" },
              { icon: FaShieldAlt, title: "Policy as Code", desc: "OPA/Gatekeeper integration.", color: "text-red-500" }
            ].map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 17. DATABASE HOSTING ==========
const DatabaseHosting = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="🗄️ FULLY MANAGED" title="DATABASE HOSTING" highlight="POSTGRES & MYSQL" description="High‑availability clusters, automated backups, point‑in‑time recovery, and read replicas." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaDatabase, title: "PostgreSQL 16", desc: "Extensions, logical replication, and vector search.", color: "text-blue-500" },
              { icon: FaSyncAlt, title: "Automated Failover", desc: "<30s failover with zero data loss.", color: "text-green-500" },
              { icon: FaLock, title: "Encryption at Rest", desc: "AES‑256 + customer keys.", color: "text-red-500" }
            ].map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 18. BACKUP & DISASTER RECOVERY ==========
const BackupDR = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <div className="bg-gray-950 py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="💾 NEVER LOSE DATA" title="BACKUP & DISASTER" highlight="RECOVERY" description="Automated backups, cross‑region replication, and orchestrated recovery playbooks." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaClock, title: "Point‑in‑Time", desc: "Restore any second from the last 35 days.", color: "text-purple-500" },
              { icon: FaCloud, title: "Cross‑Region Replication", desc: "Backup in 3+ data centers.", color: "text-blue-500" },
              { icon: FaRobot, title: "One‑Click Failover", desc: "Promote replica to primary instantly.", color: "text-red-500" }
            ].map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 19. MONITORING & LOGGING ==========
const Monitoring = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="📊 FULL OBSERVABILITY" title="MONITORING & LOGGING" highlight="GRAFANA & PROMETHEUS" description="Infrastructure, application, and business metrics. 30 days log retention out of the box." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaChartLine, title: "Metrics", desc: "CPU, memory, disk, network, custom.", color: "text-green-500" },
              { icon: FaFileAlt, title: "Log Aggregation", desc: "Loki + structured logs.", color: "text-blue-500" },
              { icon: FaEye, title: "Alerts", desc: "Slack, PagerDuty, Webhook integrations.", color: "text-red-500" }
            ].map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 20. SSL/TLS CERTIFICATES ==========
const SSL = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <div className="bg-gray-950 py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="🔐 AUTO HTTPS" title="SSL/TLS CERTIFICATES" highlight="MANAGED & FREE" description="Let's Encrypt integration, wildcard support, and custom CAs. Auto‑renewal + HSTS." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaCertificate, title: "Let's Encrypt", desc: "Free 90‑day certs with auto‑renew.", color: "text-green-500" },
              { icon: FaKey, title: "Custom Certs", desc: "Upload your own PEM or PKCS#12.", color: "text-blue-500" },
              { icon: FaShieldAlt, title: "HSTS Preload", desc: "Submit to Chrome HSTS preload list.", color: "text-red-500" }
            ].map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 21. COMPLIANCE & SECURITY ==========
const Compliance = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="✅ AUDIT READY" title="COMPLIANCE & SECURITY" highlight="SOC2, ISO, GDPR" description="Enterprise‑grade controls, pen‑tested infrastructure, and dedicated compliance team." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaBalanceScale, title: "SOC2 Type II", desc: "Annual audit report available under NDA.", color: "text-purple-500" },
              { icon: FaGlobe, title: "GDPR Compliant", desc: "Data processing addendum (DPA) signed.", color: "text-blue-500" },
              { icon: FaUserSecret, title: "Privacy Shield", desc: "EU‑US Data Privacy Framework.", color: "text-green-500" }
            ].map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 22. INTEGRATIONS ==========
const Integrations = () => {
  const { ref, controls } = useScrollAnimation();
  const integrations = [
    { name: "AWS", icon: FaAws, color: "text-orange-500" },
    { name: "Docker", icon: FaDocker, color: "text-blue-400" },
    { name: "Terraform", icon: FaCode, color: "text-purple-400" },
    { name: "Kubernetes", icon: FaNetworkWired, color: "text-cyan-400" },
    { name: "GitHub", icon: FaGithub, color: "text-gray-400" },
    { name: "Slack", icon: FaEnvelope, color: "text-green-400" }
  ];
  return (
    <div className="bg-gray-950 py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="🔌 PLUG & PLAY" title="SEAMLESS" highlight="INTEGRATIONS" description="Works with your favourite tools out of the box. Terraform provider, CLI, and SDKs." />
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex flex-wrap justify-center gap-12">
            {integrations.map((item, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.1, y: -5 }} className="flex flex-col items-center gap-3">
                <item.icon className={`w-16 h-16 ${item.color}`} />
                <span className="text-white font-semibold">{item.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 23. FRONTEND & FRAMEWORKS ==========
const FrontendTechnologies = () => {
  const { ref, controls } = useScrollAnimation();
  const techs = [
    { name: "React", icon: FaReact, color: "text-cyan-400", desc: "Component‑based UI library" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white", desc: "React framework with SSR & SSG" },
    { name: "Vue.js", icon: FaVuejs, color: "text-green-400", desc: "Progressive JS framework" },
    { name: "Angular", icon: FaAngular, color: "text-red-500", desc: "Enterprise MVC framework" },
    { name: "Svelte", icon: SiSvelte, color: "text-orange-500", desc: "Compile‑time framework" },
    { name: "Solid", icon: SiSolid, color: "text-blue-400", desc: "Fine‑grained reactivity" }
  ];
  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="⚛️ MODERN STACKS" title="FRONTEND & FRAMEWORKS" highlight="PERFECT HOSTING" description="Deploy any frontend framework with edge caching, automatic SSL, and global CDN." />
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techs.map((tech, idx) => (
              <motion.div key={idx} variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }} whileHover={{ y: -5, scale: 1.05 }} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-red-500/50 transition-all">
                <tech.icon className={`w-12 h-12 mx-auto mb-3 ${tech.color}`} />
                <h3 className="text-white font-bold text-lg">{tech.name}</h3>
                <p className="text-gray-400 text-xs mt-1">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 24. BACKEND & DATABASES ==========
const BackendTechnologies = () => {
  const { ref, controls } = useScrollAnimation();
  const techs = [
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500", desc: "JavaScript runtime" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400", desc: "NoSQL database" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-500", desc: "Relational DB" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-500", desc: "Advanced RDBMS" },
    { name: "Redis", icon: SiRedis, color: "text-red-500", desc: "In‑memory cache" },
    { name: "GraphQL", icon: SiGraphql, color: "text-pink-500", desc: "API query language" }
  ];
  return (
    <div className="bg-gray-950 py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="🗄️ SCALABLE BACKENDS" title="BACKEND & DATABASES" highlight="CLOUD READY" description="Host Node.js apps, deploy databases, and scale APIs with built‑in load balancing." />
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techs.map((tech, idx) => (
              <motion.div key={idx} variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }} whileHover={{ y: -5, scale: 1.05 }} className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-red-500/50 transition-all">
                <tech.icon className={`w-12 h-12 mx-auto mb-3 ${tech.color}`} />
                <h3 className="text-white font-bold text-lg">{tech.name}</h3>
                <p className="text-gray-400 text-xs mt-1">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== NEW SECTION 25: BATTLE‑TESTED INFRASTRUCTURE (replaces Pricing) ==========
const BattleTested = () => {
  const { ref, controls } = useScrollAnimation();
  const metrics = [
    { icon: FaTrophy, value: "99.999%", label: "Uptime Guarantee", desc: "Financial credits for every minute of downtime.", color: "text-yellow-500" },
    { icon: FaRocket, value: "<10ms", label: "Global Latency", desc: "Average response time from any edge location.", color: "text-red-500" },
    { icon: FaShieldAlt, value: "2 Tbps", label: "DDoS Capacity", desc: "Largest scrubbing centers in India.", color: "text-green-500" },
    { icon: FaChartBar, value: "50+", label: "Edge POPs", desc: "Covering every major region globally.", color: "text-blue-500" },
    { icon: FaCheckCircle, value: "100%", label: "SLA Credits", desc: "Automatic credits if we miss our guarantees.", color: "text-purple-500" },
    { icon: FaFire, value: "24/7", label: "War Room Support", desc: "Direct line to our SRE team.", color: "text-orange-500" }
  ];
  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="💪 NO EXCUSES" title="BATTLE‑TESTED" highlight="INFRASTRUCTURE" description="We put our money where our mouth is. These are not just claims – they are guarantees backed by financial penalties." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metrics.map((item, idx) => (
              <motion.div key={idx} variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }} whileHover={{ y: -5, scale: 1.02 }} className="bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 text-center hover:border-red-500/50 transition-all">
                <item.icon className={`w-14 h-14 mx-auto mb-4 ${item.color}`} />
                <div className="text-4xl font-black text-white mb-1">{item.value}</div>
                <div className="text-red-500 font-bold text-sm uppercase tracking-wider mb-2">{item.label}</div>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
              <div className="bg-red-500/10 border border-red-500/30 rounded-full px-8 py-3 backdrop-blur-sm">
                <p className="text-gray-300 text-sm">🔒 <span className="font-bold text-white">100% SLA backed</span> – if we fail, you don't pay. Period.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 26. TESTIMONIALS ==========
const Testimonials = () => {
  const { ref, controls } = useScrollAnimation();
  const testimonials = [
    { quote: "Latency dropped by 70% after moving to PoolXIndia. Our global customers finally get sub‑100ms responses.", author: "Neha Sharma", role: "CTO, ShopIndia", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    { quote: "DDoS attacks used to take us offline for hours. Now they're just a blip. The mitigation is automatic and invisible.", author: "Vikram Rathore", role: "Head of Infrastructure, GameZop", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
    { quote: "Edge functions cut our login latency from 800ms to 80ms. Our users love it.", author: "Anjali Patil", role: "Lead Developer, FinWise", avatar: "https://randomuser.me/api/portraits/women/68.jpg" }
  ];
  return (
    <div className="bg-gray-950 py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="🗣️ WARRIORS TESTIFY" title="REAL SCALE." highlight="REAL RESULTS." description="Hear from developers and CTOs who shipped faster with us." />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div key={idx} variants={{ hidden: { scale: 0.9, opacity: 0 }, visible: { scale: 1, opacity: 1 } }} whileHover={{ y: -5 }} className="bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6">
                <FaQuoteLeft className="text-red-500/30 text-3xl mb-4" />
                <p className="text-gray-300 mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-4"><img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full object-cover border border-red-500" /><div><div className="font-bold text-white">{t.author}</div><div className="text-gray-400 text-sm">{t.role}</div></div></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 27. ROADMAP ==========
const Roadmap = () => {
  const { ref, controls } = useScrollAnimation();
  const milestones = [
    { quarter: "Q1 2025", title: "Edge Network Launch", details: "10 POPs, basic DDoS, 1 Tbps", done: true },
    { quarter: "Q2 2025", title: "Serverless Functions", details: "WASM edge compute", done: true },
    { quarter: "Q3 2025", title: "Global Anycast", details: "Unified IP anycast + rate limiting", done: false },
    { quarter: "Q4 2025", title: "AI Traffic Predictor", details: "Predictive scaling & auto‑failover", done: false }
  ];
  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          <SectionHeader badge="📅 CONQUEST ROADMAP" title="BUILDING THE" highlight="GLOBAL EDGE" description="Our relentless march to dominate the web services landscape." />
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-red-500/30 hidden md:block"></div>
            <div className="space-y-12">
              {milestones.map((m, idx) => (
                <motion.div key={idx} variants={{ hidden: { x: idx % 2 === 0 ? -50 : 50, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className={`flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                  <div className="md:w-1/2"><div className={`bg-black/50 backdrop-blur-sm border ${m.done ? 'border-green-500' : 'border-red-500/30'} rounded-2xl p-6`}><div className="flex justify-between items-start mb-2"><h3 className="text-2xl font-black text-white">{m.title}</h3><span className={`px-3 py-1 rounded-full text-xs font-bold ${m.done ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>{m.done ? 'DEPLOYED' : 'UPCOMING'}</span></div><p className="text-gray-400">{m.details}</p></div></div>
                  <div className="md:w-1/2 flex justify-center"><div className="w-16 h-16 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center font-black text-red-500">{m.quarter}</div></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 28. CTA ==========
const CTA = () => {
  const { ref, controls } = useScrollAnimation();
  const [email, setEmail] = useState('');
  return (
    <div className="bg-gradient-to-b from-black to-gray-950 py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } } }} className="relative bg-gradient-to-r from-red-500/10 via-red-900/20 to-red-500/10 rounded-3xl p-12 text-center border border-red-500/30 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500 rounded-full filter blur-[100px] opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full filter blur-[100px] opacity-20"></div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">READY TO OUTPACE <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">EVERYONE</span>?</h2>
          <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">Join 250,000+ developers and companies using PoolXIndia to deliver insane speed.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 px-6 py-4 bg-black/50 border border-red-500/30 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-red-500" />
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 rounded-full font-bold text-white shadow-lg">Get Early Access</motion.button>
          </div>
          <p className="text-gray-500 text-sm mt-4">No spam. Just edge‑compute alpha 🔥</p>
        </motion.div>
      </div>
    </div>
  );
};

// ========== 29. FOOTER ==========
const Footer = () => {
  return (
    <footer className="bg-black border-t border-red-500/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div><div className="flex items-center space-x-2 mb-4"><div className="w-6 h-6 bg-gradient-to-r from-red-600 to-red-500 rounded-lg rotate-45"></div><span className="text-xl font-black text-white">POOL<span className="text-red-500">X</span>INDIA</span></div><p className="text-gray-500 text-sm">India's most aggressive edge network. Built for speed, scale, and relentless uptime.</p></div>
          <div><h4 className="text-white font-bold mb-4">Product</h4><ul className="space-y-2 text-gray-400 text-sm"><li><a href="#" className="hover:text-red-500">Edge CDN</a></li><li><a href="#" className="hover:text-red-500">Serverless Functions</a></li><li><a href="#" className="hover:text-red-500">DDoS Protection</a></li><li><a href="#" className="hover:text-red-500">Global Load Balancer</a></li></ul></div>
          <div><h4 className="text-white font-bold mb-4">Resources</h4><ul className="space-y-2 text-gray-400 text-sm"><li><a href="#" className="hover:text-red-500">Documentation</a></li><li><a href="#" className="hover:text-red-500">API Reference</a></li><li><a href="#" className="hover:text-red-500">Support</a></li><li><a href="#" className="hover:text-red-500">Status Page</a></li></ul></div>
          <div><h4 className="text-white font-bold mb-4">Legal</h4><ul className="space-y-2 text-gray-400 text-sm"><li><a href="#" className="hover:text-red-500">Terms of Service</a></li><li><a href="#" className="hover:text-red-500">Privacy Policy</a></li><li><a href="#" className="hover:text-red-500">SLA</a></li></ul></div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 PoolXIndia. Built for aggression. Deploy with confidence.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.a whileHover={{ y: -3 }} href="#" className="text-gray-400 hover:text-red-500"><FaTwitter size={20} /></motion.a>
            <motion.a whileHover={{ y: -3 }} href="#" className="text-gray-400 hover:text-red-500"><FaDiscord size={20} /></motion.a>
            <motion.a whileHover={{ y: -3 }} href="#" className="text-gray-400 hover:text-red-500"><FaGithub size={20} /></motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ========== MAIN APP ==========
const App = () => {
  return (
    <div className="bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <EdgeNetwork />
      <DDoS />
      <LoadBalancing />
      <EdgeFunctions />
      <ObjectStorage />
      <CDN />
      <DNS />
      <WAF />
      <APIGateway />
      <RealtimeMessaging />
      <ImageOptimization />
      <VideoStreaming />
      <ContainerRegistry />
      <ManagedK8s />
      <DatabaseHosting />
      <BackupDR />
      <Monitoring />
      <SSL />
      <Compliance />
      <Integrations />
      <FrontendTechnologies />
      <BackendTechnologies />
      <BattleTested />    {/* REPLACED PRICING SECTION */}
      <Testimonials />
      <Roadmap />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;