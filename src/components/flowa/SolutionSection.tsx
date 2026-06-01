'use client';

import { motion } from 'framer-motion';
import { Mic, Send, Clock, Banknote, ArrowRight, Smartphone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const steps = [
  { icon: Mic, label: 'Dictée vocale', color: 'bg-orange-500', textColor: 'text-orange-500' },
  { icon: Send, label: 'Envoi de lien de paiement', color: 'bg-green-500', textColor: 'text-green-500' },
  { icon: Clock, label: 'Relance automatique', color: 'bg-amber-500', textColor: 'text-amber-500' },
  { icon: Banknote, label: 'Cash en banque', color: 'bg-emerald-500', textColor: 'text-emerald-500' },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 md:py-28 bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
            La Solution
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            La Solution Flowa
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-white/90 mb-2">
            Le Directeur Financier IA 100% Vocal
          </p>
        </motion.div>

        {/* Key points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16"
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5">
            <Mic className="h-5 w-5 text-white" />
            <span className="text-white font-medium">WhatsApp vocal</span>
          </div>
          <span className="text-white/50 font-bold">+</span>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5">
            <Smartphone className="h-5 w-5 text-white" />
            <span className="text-white font-medium">SMS only</span>
          </div>
          <span className="text-white/50 font-bold">=</span>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/30">
            <span className="text-white font-bold">Pas d&apos;app à télécharger</span>
          </div>
        </motion.div>

        {/* Promise flow */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-3 shadow-lg`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <span className="text-sm font-bold text-white">{step.label}</span>

                {index < steps.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-white/50 mt-3 hidden lg:block" />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Arrow pipeline for mobile */}
          <div className="flex items-center justify-center gap-2 mt-4 lg:hidden">
            {steps.map((step, index) => (
              <div key={step.label} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${step.color}`} />
                {index < steps.length - 1 && <ArrowRight className="h-3 w-3 text-white/50" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
