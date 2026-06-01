'use client';

import { motion } from 'framer-motion';
import { DollarSign, Mic, TrendingUp, ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,102,0,0.3) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[15%] left-[10%] flowa-float"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <DollarSign className="h-10 w-10 text-orange-500" />
        </motion.div>
        <motion.div
          className="absolute top-[25%] right-[12%] flowa-float-delay-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          <Mic className="h-8 w-8 text-orange-400" />
        </motion.div>
        <motion.div
          className="absolute bottom-[30%] left-[8%] flowa-float-delay-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          <TrendingUp className="h-9 w-9 text-amber-400" />
        </motion.div>
        <motion.div
          className="absolute bottom-[20%] right-[15%] flowa-float-delay-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ delay: 1.9, duration: 1 }}
        >
          <DollarSign className="h-7 w-7 text-orange-300" />
        </motion.div>
      </div>

      {/* Voice wave animation */}
      <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 flex items-end gap-1 pointer-events-none">
        {[0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1.05, 1.2].map((delay, i) => (
          <motion.div
            key={i}
            className="w-1 bg-orange-500/20 rounded-full"
            animate={{
              height: [8, 24, 8],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* OSC Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Badge className="mb-6 bg-orange-500/10 text-orange-400 border-orange-500/30 px-4 py-1.5 text-sm">
            <Sparkles className="h-3.5 w-3.5 mr-1.5" />
            OSC 2026 — L&apos;IA comme accélérateur d&apos;affaires
          </Badge>
        </motion.div>

        {/* Logo */}
        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-orange-500 flowa-glow-text">FLOWA</span>
        </motion.h1>

        {/* Baseline */}
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          L&apos;IA qui garantit votre trésorerie
        </motion.p>

        {/* Sub-baseline */}
        <motion.p
          className="text-base sm:text-lg text-slate-300 mb-3 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Ne recherche plus des clients. Faites payer ceux que vous avez.
        </motion.p>

        {/* Target */}
        <motion.p
          className="text-sm text-slate-500 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          400 millions de PME en Afrique et au Moyen-Orient (Réseau OMEA)
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <a href="#modules">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-6 text-lg rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:shadow-orange-500/40 hover:scale-105"
            >
              Découvrir les workflows
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
