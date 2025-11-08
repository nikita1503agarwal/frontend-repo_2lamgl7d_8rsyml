import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileSpreadsheet, Handshake, CheckCircle2 } from 'lucide-react';

const steps = [
  { icon: Search, title: 'Discovery', desc: 'We map your risks, analyze claims, and benchmark coverage.' },
  { icon: FileSpreadsheet, title: 'Placement', desc: 'We structure programs and negotiate with leading carriers.' },
  { icon: Handshake, title: 'Onboarding', desc: 'Paperwork, endorsements, and policy issuance made effortless.' },
  { icon: CheckCircle2, title: 'Year-round Care', desc: 'Dedicated account managers and proactive risk advisory.' },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 bg-slate-950 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">From quote to claim — seamless</h2>
          <p className="mt-3 text-slate-300">Our concierge workflow removes friction at every step.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((S, idx) => (
            <motion.div
              key={S.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 text-slate-900 grid place-items-center">
                <S.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{S.title}</h3>
              <p className="mt-1 text-slate-300 text-sm leading-relaxed">{S.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
