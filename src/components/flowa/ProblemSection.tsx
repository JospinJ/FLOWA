'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Frown, BookOpen, HandCoins, AlertTriangle, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(current);
    }, 25);
    return () => clearInterval(timer);
  }, [started, target]);

  return <div ref={ref}>{count}{suffix}</div>;
}

const painPoints = [
  {
    icon: Frown,
    title: 'La honte de relancer',
    description: 'Le gérant n\'aime pas harceler ses clients. Tensions sociales, relations commerciales abîmées.',
    color: 'text-red-500',
    bg: 'bg-red-500/10',
  },
  {
    icon: BookOpen,
    title: 'La comptabilité inexistante',
    description: 'Le cahier de bord est oublié, factures perdues. Aucune visibilité sur la trésorerie.',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
  {
    icon: HandCoins,
    title: 'L\'argent prêté',
    description: 'Un devis accepté ≠ argent en banque. Délai prestation → paiement peut tuer une PME.',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
  },
  {
    icon: AlertTriangle,
    title: 'L\'imprévision',
    description: 'Découvert le jour où il faut payer le fournisseur. Pas d\'anticipation, que des urgences.',
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
  },
];

export default function ProblemSection() {
  return (
    <section id="probleme" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Le sanglot silencieux des PME africaines
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-16 bg-orange-500 rounded-full" />
            <span className="text-orange-500 font-bold text-lg">Le constat</span>
            <div className="h-1 w-16 bg-orange-500 rounded-full" />
          </div>
        </motion.div>

        {/* Big stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl px-8 sm:px-12 py-6 shadow-xl shadow-red-500/20">
            <div className="text-5xl sm:text-6xl md:text-7xl font-black">
              <AnimatedCounter target={80} suffix="%" />
            </div>
            <p className="text-base sm:text-lg font-medium mt-2 opacity-90">
              des PME africaines font faillite à cause des impayés
            </p>
          </div>
        </motion.div>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-slate-200 hover:border-orange-300 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5 group cursor-default">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${point.bg} mb-4 group-hover:scale-110 transition-transform`}>
                    <point.icon className={`h-6 w-6 ${point.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{point.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Conclusion callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-slate-900 rounded-2xl p-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-500 rounded-l-2xl" />
            <div className="pl-4">
              <Quote className="h-8 w-8 text-orange-500/30 mb-3" />
              <p className="text-white text-base sm:text-lg leading-relaxed font-medium">
                Une PME n&apos;a pas besoin d&apos;un outil marketing pour avoir des likes. Elle a besoin d&apos;un{' '}
                <span className="text-orange-400 font-bold">agent de recouvrement intelligent, discret et automatisé</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
