import React from 'react';
import { motion } from 'framer-motion';
import { Building2, HeartPulse, Car, Shield, Factory, Briefcase } from 'lucide-react';

const items = [
  { icon: <Building2 className="h-6 w-6" />, title: 'Property & Casualty', desc: 'Comprehensive cover for commercial buildings, contents, BI, and liability.' },
  { icon: <HeartPulse className="h-6 w-6" />, title: 'Medical Insurance', desc: 'Group health plans optimized for claims efficiency and employee satisfaction.' },
  { icon: <Car className="h-6 w-6" />, title: 'Motor Fleet', desc: 'Tailored fleet programs with telematics-driven risk optimization.' },
  { icon: <Factory className="h-6 w-6" />, title: 'Industrial Risk', desc: 'Manufacturing, logistics, energy — specialist placement with top carriers.' },
  { icon: <Briefcase className="h-6 w-6" />, title: 'SME Packages', desc: 'Fast, transparent quotes for startups and growing businesses.' },
  { icon: <Shield className="h-6 w-6" />, title: 'Cyber & Financial Lines', desc: 'Protect against cyber threats, D&O, PI, and transactional risk.' },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.12),transparent_35%)]" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Smart insurance for every need</h2>
          <p className="mt-3 text-slate-300">Expert placement powered by data, delivered with concierge service.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 text-slate-900 grid place-items-center">
                {it.icon}
              </div>
              <h3 className="mt-4 font-semibold text-lg">{it.title}</h3>
              <p className="mt-1 text-slate-300 text-sm leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
