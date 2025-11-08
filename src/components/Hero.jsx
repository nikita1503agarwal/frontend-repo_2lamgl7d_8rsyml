import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, PhoneCall } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[88vh] md:h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth (don't block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/20 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-md">
            <Shield className="h-4 w-4 text-teal-300" />
            <span className="text-xs text-slate-200">CMA-Licensed Insurance Brokerage in KSA</span>
          </div>

          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Insurance, Reimagined for Modern Saudi Businesses
          </h1>
          <p className="mt-4 md:mt-6 text-slate-200/90 text-base md:text-lg leading-relaxed">
            Tailored coverage, transparent pricing, and concierge support — all with a premium, digital-first experience.
          </p>

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="#process"
              className="group inline-flex items-center justify-center rounded-xl bg-teal-500/90 hover:bg-teal-400 text-slate-950 font-semibold px-5 py-3 transition-colors shadow-[0_8px_30px_rgb(56,189,248,0.35)]"
            >
              Get Your Quote
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white px-5 py-3 font-medium backdrop-blur-md transition-colors"
            >
              <PhoneCall className="mr-2 h-5 w-5" /> Talk to an Advisor
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
