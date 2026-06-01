'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ChevronDown, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const demoSteps = [
  {
    time: '0:00',
    title: "L'accroche",
    detail: '"80% des PME africaines font faillite à cause des impayés. Pas à cause du manque de clients. À cause de l\'argent qu\'on ne réclame pas." — Pause dramatique. Regarder le jury.',
    waouh: false,
  },
  {
    time: '1:00',
    title: 'Le live vocal',
    detail: 'Démonstration en direct : dicter une facture à Flowa via WhatsApp. Montrer la transcription Whisper et l\'extraction des données en temps réel. Le jury voit l\'IA comprendre et structurer la commande vocale.',
    waouh: true,
  },
  {
    time: '2:30',
    title: 'Le paiement live',
    detail: 'Montrer le lien Orange Money généré automatiquement. Simuler le paiement du client. Le gérant reçoit la confirmation. Cash en banque en 30 secondes.',
    waouh: true,
  },
  {
    time: '3:45',
    title: 'Le micro-crédit',
    detail: 'Flowa détecte le découvert. Propose une avance de trésorerie instantanée basée sur le Score Flowa. Un clic = 100 000 FCFA sur Orange Money. Montrer la simplicité absolue.',
    waouh: true,
  },
  {
    time: '4:45',
    title: 'Le coup de grâce',
    detail: '"Flowa, c\'est l\'IA qui fait rentrer l\'argent. Pas des likes. Pas des followers. Du cash en banque. Pour 400 millions de PME qui n\'attendent que ça." — Regarder le jury. Silence.',
    waouh: false,
  },
];

export default function DemoScenario() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <section id="demo" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-orange-500/10 text-orange-600 border-orange-500/30">
            Scénario de démonstration
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Démo 5 minutes
          </h2>
          <p className="text-lg text-slate-600">Le script parfait pour convaincre en 300 secondes</p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto space-y-4">
          {demoSteps.map((step, index) => {
            const isExpanded = expandedStep === index;

            return (
              <motion.div
                key={step.time}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    isExpanded ? 'border-orange-300 shadow-md' : 'border-slate-200'
                  }`}
                  onClick={() => setExpandedStep(isExpanded ? null : index)}
                >
                  <CardContent className="p-5">
                    <div className="flex items-center gap-4">
                      {/* Time badge */}
                      <div className="flex items-center gap-2 bg-orange-50 rounded-xl px-3 py-2 flex-shrink-0">
                        <Clock className="h-4 w-4 text-orange-500" />
                        <span className="font-bold text-orange-600 text-sm">{step.time}</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-slate-900 flex-1">{step.title}</h3>

                      {/* Waouh badge */}
                      {step.waouh && (
                        <Badge className="bg-amber-100 text-amber-700 border-amber-200 text-xs">
                          <Sparkles className="h-3 w-3 mr-1" />
                          Effet Waouh
                        </Badge>
                      )}

                      {/* Chevron */}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-5 w-5 text-slate-400" />
                      </motion.div>
                    </div>

                    {/* Expandable detail */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-slate-200"
                        >
                          <p className="text-sm text-slate-600 leading-relaxed">{step.detail}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
