import React from 'react';
import { motion } from 'framer-motion';
import { Mail, PhoneCall } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-950 text-white">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-teal-400/20 via-cyan-400/10 to-teal-400/20 blur-2xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight">Let’s protect your business with precision</h3>
              <p className="mt-3 text-slate-300 max-w-2xl">Share your requirements and receive a tailored quote from our licensed advisors within 24 hours.</p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <a href="mailto:info@ammn.com.sa" className="inline-flex items-center justify-center rounded-xl bg-teal-500/90 hover:bg-teal-400 text-slate-950 font-semibold px-5 py-3 transition-colors">
                <Mail className="mr-2 h-5 w-5" /> Email Us
              </a>
              <a href="tel:+966000000000" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white px-5 py-3 font-medium backdrop-blur-md transition-colors">
                <PhoneCall className="mr-2 h-5 w-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
