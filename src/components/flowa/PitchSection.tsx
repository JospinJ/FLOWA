'use client';

import { motion } from 'framer-motion';
import { Quote, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PitchSection() {
  return (
    <section id="pitch" className="py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Quote icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-500/10 mb-8">
            <Quote className="h-8 w-8 text-orange-500" />
          </div>

          {/* Pitch text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-10"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1.5 bg-orange-500 rounded-full" />
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight pl-6 sm:pl-8">
              &ldquo;80% des PME africaines font faillite à cause des impayés.{' '}
              <span className="text-orange-400">Pas à cause du manque de clients.</span>{' '}
              À cause de l&apos;argent qu&apos;on ne réclame pas.{' '}
              <span className="text-orange-500">Flowa, c&apos;est l&apos;IA qui fait rentrer l&apos;argent.</span>{' '}
              Pas des likes. Pas des followers.{' '}
              <span className="text-amber-400">Du cash en banque.</span>{' '}
              Pour 400 millions de PME qui n&apos;attendent que ça.&rdquo;
            </blockquote>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a href="#modules">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-6 text-lg rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all hover:scale-105"
              >
                <Zap className="h-5 w-5 mr-2" />
                Flowa, c&apos;est l&apos;IA qui fait rentrer l&apos;argent
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
