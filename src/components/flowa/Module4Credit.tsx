'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  Banknote,
  Clock,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import PhoneMockup from './PhoneMockup';
import WhatsAppChat from './WhatsAppChat';

const scoreBreakdown = [
  { label: 'Historique paiements', value: 85, color: 'bg-emerald-500' },
  { label: 'Régularité revenus', value: 90, color: 'bg-green-500' },
  { label: 'Ancienneté', value: 80, color: 'bg-teal-500' },
];

export default function Module4Credit() {
  const [creditStep, setCreditStep] = useState(0);

  const handleAcceptCredit = () => {
    setCreditStep(1);
    setTimeout(() => setCreditStep(2), 2000);
  };

  const messages = [
    {
      id: 'credit-1',
      type: 'bot' as const,
      content:
        'Patron, vous êtes à découvert de 50 000 FCFA. 💰\n\nVotre Score Flowa est excellent (8.5/10). Orange vous propose une avance de trésorerie de 100 000 FCFA pour 14 jours.\n\nTapez 1 pour recevoir les fonds instantanément sur Orange Money.',
    },
    ...(creditStep >= 1
      ? [{ id: 'credit-2', type: 'user' as const, content: '1' }]
      : []),
    ...(creditStep >= 2
      ? [
          {
            id: 'credit-3',
            type: 'bot' as const,
            content:
              '✅ Fonds reçus ! 100 000 FCFA crédités sur votre compte Orange Money.\n\nRemboursement automatique prélevé sur vos prochains encaissements OM.',
          },
        ]
      : []),
  ];

  return (
    <section id="module4" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-emerald-500/10 text-emerald-600 border-emerald-500/30">Module 4</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Micro-Crédit Instantané
          </h2>
          <p className="text-lg text-slate-600">Quand il faut du cash, maintenant</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <PhoneMockup>
              <WhatsAppChat messages={messages}>
                {creditStep === 0 ? (
                  <Button
                    onClick={handleAcceptCredit}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold"
                  >
                    1 — Recevoir les fonds
                  </Button>
                ) : creditStep === 1 ? (
                  <div className="flex items-center justify-center gap-2 text-orange-500 text-sm font-medium">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    >
                      <Banknote className="h-4 w-4" />
                    </motion.div>
                    Transfert en cours...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2 text-green-600 text-sm font-medium">
                    <CheckCircle2 className="h-4 w-4" />
                    Fonds reçus ✓
                  </div>
                )}
              </WhatsAppChat>
            </PhoneMockup>
          </motion.div>

          {/* Score & Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Score gauge */}
            <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-5 w-5 text-orange-500" />
                  <h3 className="font-bold text-slate-900">Score de Confiance Flowa</h3>
                </div>

                <div className="flex items-center gap-6 mb-6">
                  <div className="relative w-24 h-24">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        stroke="#e2e8f0"
                        strokeWidth="8"
                        fill="none"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="42"
                        stroke="#FF6600"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 42}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                        whileInView={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - 0.85) }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-black text-orange-500">8.5</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Score sur 10</p>
                    <p className="text-lg font-bold text-emerald-600">Excellent</p>
                    <p className="text-xs text-slate-400 mt-1">Éligible au micro-crédit</p>
                  </div>
                </div>

                {/* Score breakdown */}
                <div className="space-y-3">
                  {scoreBreakdown.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-slate-600">{item.label}</span>
                        <span className="text-xs font-bold text-slate-700">{item.value}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${item.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.15 + 0.3 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Credit details */}
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-bold text-emerald-800">Offre de micro-crédit</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Montant', value: '100 000 FCFA', icon: Banknote },
                    { label: 'Durée', value: '14 jours', icon: Clock },
                    { label: 'Remboursement', value: 'Automatique via OM', icon: ArrowRight },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-sm">
                      <span className="text-sm text-slate-600 flex items-center gap-2">
                        <item.icon className="h-4 w-4 text-emerald-500" />
                        {item.label}
                      </span>
                      <span className="font-bold text-slate-900 text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-emerald-600 mt-3 leading-relaxed">
                  💡 Remboursement automatique prélevé sur vos prochains encaissements Orange Money. Zéro démarche, zéro stress.
                </p>
              </CardContent>
            </Card>

            {/* Transfer animation */}
            {creditStep >= 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-2 border-green-300 bg-green-50">
                  <CardContent className="p-5 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    >
                      <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-3" />
                    </motion.div>
                    <h3 className="font-bold text-green-700 text-lg mb-1">Fonds reçus !</h3>
                    <p className="text-2xl font-black text-green-600">100 000 FCFA</p>
                    <p className="text-sm text-green-600 mt-1">crédités sur votre compte Orange Money</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
