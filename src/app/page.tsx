"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle,
  Dumbbell,
  Flame,
  Activity,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  Check,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const faqs = [
  {
    question: "Do you offer personal training?",
    answer:
      "Yes. Our elite coaches provide highly customized 1-on-1 programming tailored specifically to your biometric data and goals.",
  },
  {
    question: "Is there parking available?",
    answer:
      "We offer dedicated, secure parking for all members directly outside the facility at Govind Plaza.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "We are open from 5:30 AM to 10:30 PM, Monday through Saturday. Sundays are reserved for active recovery clinics and deep cleaning.",
  },
  {
    question: "Do you accommodate beginners?",
    answer:
      "Absolutely. Our environment is serious, but it is engineered for progression at any level. Every athlete starts somewhere.",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("success");
    setTimeout(() => setFormStatus("idle"), 4000);
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      {/* Antigravity Orbs */}
      <div className="orb w-[600px] h-[600px] bg-zinc-800/30 -top-[200px] -left-[200px]"></div>
      <div
        className="orb w-[800px] h-[800px] bg-zinc-900/20 top-[30%] -right-[300px]"
        style={{ animationDelay: "-5s" }}
      ></div>
      <div
        className="orb w-[600px] h-[600px] bg-white/5 bottom-[10%] left-[10%]"
        style={{ animationDelay: "-10s" }}
      ></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/50 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <a href="#" className="flex items-center gap-3">
              <Image
                src="/gauri/logo.png"
                alt="Warrior Gym Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col gap-0.5">
                <span className="text-xl font-medium tracking-tight text-white">
                  Warrior Gym
                </span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                  Get Fit With Gauri
                </span>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              <a
                href="#about"
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                Philosophy
              </a>
              <a
                href="#programs"
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                Training
              </a>
              <a
                href="#memberships"
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                Memberships
              </a>
              <a
                href="#faq"
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="pill-btn px-6 py-2.5 bg-white text-black text-sm font-medium hover:bg-zinc-200"
              >
                Join Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-colors"
              >
                <Menu size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Cinematic Takeover) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
              animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
              exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden bg-zinc-950 fixed inset-0 z-[100] flex flex-col px-6 py-6 h-[100dvh]"
            >
              <div className="flex justify-between items-center mb-12">
                <a href="#" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
                  <Image src="/gauri/logo.png" alt="Warrior Gym Logo" width={40} height={40} className="w-10 h-10 object-contain" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-lg font-medium tracking-tight text-white">Warrior Gym</span>
                  </div>
                </a>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex flex-col gap-8 flex-grow justify-center px-4">
                {[
                  { name: "Philosophy", href: "#about", num: "01" },
                  { name: "Training", href: "#programs", num: "02" },
                  { name: "Memberships", href: "#memberships", num: "03" },
                  { name: "FAQ", href: "#faq", num: "04" },
                  { name: "Contact", href: "#contact", num: "05" },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-baseline gap-6 group"
                  >
                    <span className="text-sm font-mono text-zinc-500 group-hover:text-white transition-colors">{item.num}</span>
                    <span className="text-5xl font-medium tracking-tighter text-zinc-300 group-hover:text-white transition-colors">{item.name}</span>
                  </motion.a>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-auto border-t border-white/10 pt-8 pb-4 px-4"
              >
                <p className="text-xs text-zinc-500 uppercase tracking-widest mb-4">Get in touch</p>
                <p className="text-xl text-white font-light tracking-wide">+91 93056 32033</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow relative z-10">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-6">
          <div className="max-w-5xl mx-auto text-center relative z-20 flex-grow flex flex-col justify-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12"
              >
                <MapPin size={14} className="text-zinc-400" />
                <span className="text-xs font-medium text-zinc-300 tracking-wide">
                  Prayagraj, UP
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-6xl sm:text-7xl md:text-9xl font-medium tracking-tighter mb-10 leading-[0.9] text-gradient-soft text-glow"
              >
                Elevate your
                <br />
                potential.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg md:text-2xl text-zinc-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed"
              >
                Experience a higher standard of fitness. Precision training and
                intelligent programming at Warrior Gym.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <a
                  href="#contact"
                  className="pill-btn w-full sm:w-auto px-10 py-4 bg-white text-black font-medium text-lg"
                >
                  Start journey
                </a>
                <a
                  href="#programs"
                  className="pill-btn w-full sm:w-auto px-10 py-4 bg-white/10 text-white font-medium text-lg hover:bg-white/20"
                >
                  Explore programs
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent"
            />
          </motion.div>
        </section>

        {/* IMAGE BREAKOUT */}
        <section className="px-4 sm:px-8 max-w-[1400px] mx-auto relative z-20 mt-16 mb-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[4/3] md:aspect-[21/9] w-full relative rounded-3xl overflow-hidden"
          >
            <Image
              src="/gauri/1.jpg"
              alt="Premium Gym Facility"
              fill
              className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </motion.div>
        </section>

        {/* PHILOSOPHY / ABOUT */}
        <section id="about" className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid md:grid-cols-2 gap-16 md:gap-24"
            >
              <div>
                <motion.h2
                  variants={fadeUp}
                  className="text-4xl md:text-6xl font-medium tracking-tight mb-8"
                >
                  The philosophy <br />
                  of strength.
                </motion.h2>
              </div>
              <div className="space-y-8 text-xl text-zinc-400 font-light leading-relaxed">
                <motion.p variants={fadeUp}>
                  Welcome to{" "}
                  <span className="text-white font-medium">
                    Get Fit With Gauri
                  </span>
                  . We believe that true physical transformation requires more
                  than effort; it requires intelligent design.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Our space is engineered to remove distractions and focus
                  entirely on your progression. We pair advanced training
                  methodologies with an environment built for focus.
                </motion.p>
                <motion.div variants={fadeUp} className="pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-white font-medium group hover:text-zinc-300 transition-colors"
                  >
                    Meet your coach{" "}
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROGRAMS */}
        <section id="programs" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
                Intelligent design. <br />
                <span className="text-zinc-500">Targeted results.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Strength",
                  desc: "Build foundational power through progressive overload.",
                  icon: Dumbbell,
                },
                {
                  title: "Conditioning",
                  desc: "Optimize metabolic pathways and cardiovascular health.",
                  icon: Flame,
                },
                {
                  title: "Hypertrophy",
                  desc: "Targeted cellular adaptation for muscular growth.",
                  icon: Activity,
                },
                {
                  title: "Personal",
                  desc: "One-on-one architecture for your specific physiology.",
                  icon: CheckCircle,
                },
              ].map((program, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="glass-panel p-12 group hover:bg-white/5 transition-colors cursor-default"
                >
                  <program.icon
                    className="h-8 w-8 mb-8 text-zinc-400 group-hover:text-white transition-colors"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-3xl font-medium tracking-tight mb-4">
                    {program.title}
                  </h3>
                  <p className="text-zinc-400 text-lg font-light leading-relaxed mb-8">
                    {program.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* MEMBERSHIPS (NEW) */}
        <section
          id="memberships"
          className="py-32 px-6 border-t border-white/5"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
                Select your tier.
              </h2>
              <p className="text-xl text-zinc-400 font-light">
                Transparent structuring for absolute clarity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              {[
                {
                  name: "Base",
                  price: "₹2,500",
                  freq: "/mo",
                  features: [
                    "Full facility access",
                    "Cardio & Weight zones",
                    "Locker access",
                  ],
                },
                {
                  name: "Elite",
                  price: "₹4,500",
                  freq: "/mo",
                  features: [
                    "Everything in Base",
                    "Group training classes",
                    "Monthly body composition",
                    "Priority support",
                  ],
                  popular: true,
                },
                {
                  name: "Athlete",
                  price: "₹8,000",
                  freq: "/mo",
                  features: [
                    "Everything in Elite",
                    "Personalized diet plans",
                    "2 PT sessions/mo",
                    "Recovery zone access",
                  ],
                },
              ].map((tier, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.8 }}
                  className={`glass-panel p-10 flex flex-col h-full relative ${tier.popular ? "border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.05)] scale-105 z-10 bg-white/5" : ""}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-xs font-medium tracking-wide">
                      Most Selected
                    </div>
                  )}
                  <h3 className="text-2xl font-medium tracking-tight mb-2">
                    {tier.name}
                  </h3>
                  <div className="mb-8 flex items-baseline gap-1">
                    <span className="text-5xl font-medium tracking-tighter">
                      {tier.price}
                    </span>
                    <span className="text-zinc-500 font-light">
                      {tier.freq}
                    </span>
                  </div>

                  <div className="flex-grow space-y-4 mb-10">
                    {tier.features.map((feat, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <Check
                          size={16}
                          className="text-zinc-400 flex-shrink-0"
                        />
                        <span className="text-zinc-300 font-light">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className={`pill-btn w-full py-4 font-medium text-lg ${tier.popular ? "bg-white text-black hover:bg-zinc-200" : "bg-white/10 text-white hover:bg-white/20"}`}
                  >
                    Select {tier.name}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSFORMATION & TESTIMONIALS */}
        <section
          id="transformations"
          className="py-32 px-6 relative border-t border-white/5"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="text-4xl md:text-5xl font-medium tracking-tight mb-10"
                >
                  Data-driven <span className="text-zinc-500">outcomes.</span>
                </motion.h2>
                <div className="space-y-6">
                  {[
                    {
                      quote:
                        "I've trained at several premium facilities, but Warrior Gym stands apart. The programming is meticulous.",
                      name: "Rahul Verma",
                      title: "Software Engineer",
                    },
                    {
                      quote:
                        "The personalized attention changed my trajectory. Lost 14kg in 6 months while building serious strength.",
                      name: "Anjali Tiwari",
                      title: "Architect",
                    },
                  ].map((testimonial, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      className="glass-panel p-8"
                    >
                      <p className="text-lg text-zinc-300 font-light leading-relaxed mb-6">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <div>
                        <p className="font-medium text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-zinc-500 mt-1">
                          {testimonial.title}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel aspect-[4/5] w-full flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-black"></div>
                <div className="relative z-10 flex flex-col items-center p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-8 backdrop-blur-md">
                    <Activity className="text-white h-8 w-8" />
                  </div>
                  <p className="text-2xl font-medium text-white tracking-wide mb-2">
                    Priya S. &mdash; Transformation
                  </p>
                  <p className="text-zinc-400 font-light mb-8">
                    Comprehensive recomposition protocol.
                  </p>
                  <div className="flex gap-8 border-t border-white/10 pt-8 w-full justify-center">
                    <div>
                      <p className="text-4xl font-medium text-white tracking-tighter">
                        -12
                      </p>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
                        Kilograms
                      </p>
                    </div>
                    <div>
                      <p className="text-4xl font-medium text-white tracking-tighter">
                        24
                      </p>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
                        Weeks
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION (NEW) */}
        <section id="faq" className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
                Frequently asked.
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="glass-panel overflow-hidden border border-white/5 transition-colors hover:border-white/20"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-8 py-6 flex justify-between items-center text-left"
                  >
                    <span className="text-lg font-medium tracking-tight text-white">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <ChevronDown className="text-zinc-400" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-8 pb-8 text-zinc-400 font-light leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT & LOCATION */}
        <section
          id="contact"
          className="py-32 px-6 border-t border-white/5 relative z-20"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20">
              {/* Location */}
              <div>
                <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-12">
                  Visit us.
                </h2>

                <div className="mb-10 w-full aspect-[16/9] relative rounded-2xl overflow-hidden border border-white/10 group">
                  <Image
                    src="/gauri/4.jpg"
                    alt="Gym Location Map"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <MapPin className="text-white w-4 h-4" />
                    <span className="text-white text-xs font-medium tracking-wide">
                      Govind Plaza
                    </span>
                  </div>
                </div>

                <div className="space-y-12 text-lg">
                  <div>
                    <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">
                      Location
                    </h4>
                    <p className="text-white leading-relaxed font-light">
                      Govind Plaza, near Kalevam Restaurant,
                      <br />
                      Sector 5, Transport Nagar,
                      <br />
                      Dhoomanganj, Prayagraj,
                      <br />
                      Uttar Pradesh 211011
                    </p>
                    <a
                      href="https://www.google.com/maps/place/%F0%9F%92%AAWARRIOR+GYM+%F0%9F%8F%8B%EF%B8%8F+'GET+FIT+WITH+GAURI'%F0%9F%92%AA/@25.4526561,81.7676765,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIDLu5viIg!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9TtZr8GQct3QzLzVChDoinVh9V9p7ZParDt2EQKf5dvaj1Qjr6i8qeT1eBA8jd8JiIDGta4nFtvy0a2QVEMULMFnirWHFV9S1ros5K3F6oOJmPCPJKJ7jWWRXzBvb4lsoS3rCum%3Dw398-h298-k-no!7i4640!8i3472!4m9!3m8!1s0x399acd425a746a99:0x3e249e3cbd2255f4!8m2!3d25.4526561!4d81.7676765!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11w4485grt?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-6 text-sm font-medium border-b border-white pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-colors"
                    >
                      View in Maps
                    </a>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">
                      Contact
                    </h4>
                    <p className="text-2xl text-white font-light tracking-wide">
                      +91 93056 32033
                    </p>

                    <a
                      href="https://wa.me/919305632033"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pill-btn mt-6 px-6 py-3 bg-[#25D366]/10 text-[#25D366] text-sm font-medium hover:bg-[#25D366]/20 gap-2 border border-[#25D366]/20"
                    >
                      <MessageCircle size={18} /> Contact via WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="glass-panel p-10 md:p-14">
                <h3 className="text-3xl font-medium tracking-tight mb-8">
                  Begin your journey.
                </h3>
                {formStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-[400px] flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mb-6">
                      <CheckCircle size={32} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-2xl font-medium mb-2">
                      Request received.
                    </h4>
                    <p className="text-zinc-400 font-light">
                      We will contact you shortly to schedule your initial
                      consultation.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-8">
                    <div>
                      <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        aria-label="Your name"
                        className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors text-lg font-light"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <input
                        required
                        type="tel"
                        id="phone"
                        name="phone"
                        aria-label="Phone number"
                        className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors text-lg font-light"
                        placeholder="Phone number"
                      />
                    </div>
                    <div>
                      <select
                        defaultValue=""
                        id="goal"
                        name="goal"
                        aria-label="Primary objective"
                        className="w-full bg-transparent border-b border-white/20 pb-4 text-zinc-400 focus:outline-none focus:border-white focus:text-white transition-colors text-lg font-light appearance-none rounded-none cursor-pointer"
                      >
                        <option value="" disabled>
                          Primary objective
                        </option>
                        <option value="strength">Strength</option>
                        <option value="fat-loss">Fat Loss</option>
                        <option value="muscle">Hypertrophy</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="pill-btn w-full py-5 bg-white text-black font-medium text-lg mt-4"
                    >
                      Submit application
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="pt-12 pb-40 md:pb-12 px-6 border-t border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <span className="text-xl font-medium tracking-tight text-white block">
              Warrior Gym
            </span>
            <span className="text-xs text-zinc-500 uppercase tracking-widest block mt-1">
              Get Fit With Gauri
            </span>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-zinc-500 font-light">
            <a href="#about" className="hover:text-white transition-colors">
              Philosophy
            </a>
            <a href="#programs" className="hover:text-white transition-colors">
              Training
            </a>
            <a
              href="#memberships"
              className="hover:text-white transition-colors"
            >
              Memberships
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY BAR */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50 flex gap-2">
        <a
          href="tel:+919305632033"
          className="pill-btn flex-1 py-4 bg-zinc-900/90 backdrop-blur-md border border-white/10 text-white shadow-xl flex items-center justify-center gap-2"
        >
          <Phone size={18} /> <span className="text-xs font-medium">Call</span>
        </a>
        <a
          href="#contact"
          className="pill-btn flex-1 py-4 bg-white text-black shadow-xl flex items-center justify-center gap-2"
        >
          <span className="text-xs font-medium">Join</span>
        </a>
      </div>
    </div>
  );
}
