'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Link2,
  Smartphone,
  CreditCard,
  MessageSquare,
  AlertTriangle,
  Bell,
  Clock,
  ChevronRight,
  Play,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const paymentFlow = [
  { icon: FileText, label: 'Facture', desc: 'Générée automatiquement', color: 'bg-orange-500' },
  { icon: Link2, label: 'Lien Orange Money', desc: 'Lien de paiement sécurisé', color: 'bg-amber-500' },
  { icon: Smartphone, label: 'SMS au client', desc: 'Rappel avec lien de paiement', color: 'bg-blue-500' },
  { icon: CreditCard, label: 'Paiement', desc: 'Client paie via Orange Money', color: 'bg-emerald-500' },
];

const escalationSteps = [
  {
    day: 'J+1',
    label: 'Échéance',
    color: 'bg-emerald-500',
    borderColor: 'border-emerald-500',
    title: 'SMS poli',
    message: 'Rappel amical : votre facture de 25 000 FCFA est arrivée à échéance. Cliquez ici pour payer via Orange Money : [Lien]',
    channel: 'SMS',
    detail: 'Premier rappel courtois, pas de pression. Le client reçoit un SMS avec le lien de paiement direct.',
  },
  {
    day: 'J+3',
    label: 'Rappel ferme',
    color: 'bg-yellow-500',
    borderColor: 'border-yellow-500',
    title: 'WhatsApp au gérant + SMS ferme',
    message: 'M. Jean n\'a pas encore payé. Voulez-vous que j\'envoie un rappel ferme ? → Oui → SMS ferme à Jean',
    channel: 'WhatsApp + SMS',
    detail: 'Flowa prévient le gérant et demande l\'autorisation d\'escalader. Si oui, SMS plus ferme au client.',
  },
  {
    day: 'J+7',
    label: 'Avertissement',
    color: 'bg-orange-500',
    borderColor: 'border-orange-500',
    title: 'WhatsApp à Jean',
    message: 'Votre compte est en retard. Le lien de paiement expire dans 24h. Régularisez immédiatement.',
    channel: 'WhatsApp',
    detail: 'Communication directe au client via WhatsApp. Menace d\'expiration du lien de paiement.',
  },
  {
    day: 'J+14',
    label: 'Critique',
    color: 'bg-red-500',
    borderColor: 'border-red-500',
    title: 'Alerte au gérant',
    message: 'M. Jean est en retard critique (14 jours). Je vous conseille de suspendre ses futures commandes.',
    channel: 'WhatsApp',
    detail: 'Alerte sévère au gérant. Recommandation de suspension des commandes futures pour ce client.',
  },
];

export default function Module2Collector() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [launchRelance, setLaunchRelance] = useState(false);
  const [relanceStep, setRelanceStep] = useState(0);

  const handleLaunchRelance = () => {
    setLaunchRelance(true);
    setRelanceStep(0);
    const interval = setInterval(() => {
      setRelanceStep((prev) => {
        if (prev >= 3) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);
  };

  return (
    <section id="module2" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-orange-500/10 text-orange-600 border-orange-500/30">Module 2</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Collecteur IA & Lien Orange Money
          </h2>
          <p className="text-lg text-slate-600">De la facture au paiement — automatisé</p>
        </motion.div>

        {/* Part A: Payment Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Flux de paiement</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            {paymentFlow.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                  <step.icon className="h-7 w-7 text-white" />
                </div>
                <p className="font-bold text-sm text-slate-900">{step.label}</p>
                <p className="text-xs text-slate-500 mt-1">{step.desc}</p>
                {i < paymentFlow.length - 1 && (
                  <ChevronRight className="h-4 w-4 text-slate-300 mx-auto mt-2 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>

          {/* SMS Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-md mx-auto"
          >
            <Card className="border-2 border-green-200 bg-green-50/50">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="h-4 w-4 text-green-600" />
                  <span className="text-xs font-bold text-green-700 uppercase">SMS Preview</span>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Bonjour M. Jean, votre facture de <span className="font-bold">25 000 FCFA</span> est prête.
                    Cliquez ici pour payer via Orange Money : <span className="text-green-600 underline">[Lien]</span>
                  </p>
                </div>
                <div className="mt-3 text-center">
                  <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 shadow-md">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Payer 25 000 FCFA
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Part B: Escalation Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-slate-900">Timeline de relance</h3>
            <Button
              onClick={handleLaunchRelance}
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-md"
            >
              <Play className="h-4 w-4 mr-2" />
              Lancer la relance
            </Button>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 hidden sm:block" />

            <div className="space-y-4">
              {escalationSteps.map((step, index) => {
                const isActive = activeStep === index;
                const isRevealed = launchRelance && relanceStep >= index;

                return (
                  <motion.div
                    key={step.day}
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: isRevealed || isActive ? 1 : 0.4 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div
                      className={`flex gap-4 cursor-pointer group ${isRevealed || isActive ? '' : 'pointer-events-none sm:pointer-events-auto'}`}
                      onClick={() => setActiveStep(isActive ? null : index)}
                    >
                      {/* Timeline dot */}
                      <div className={`hidden sm:flex items-center justify-center w-12 h-12 rounded-full ${isRevealed || isActive ? step.color : 'bg-slate-300'} text-white font-bold text-sm shadow-md flex-shrink-0 z-10 transition-all`}>
                        {step.day}
                      </div>

                      {/* Content */}
                      <div className={`flex-1 border-2 rounded-xl transition-all ${isActive ? step.borderColor + ' shadow-lg' : 'border-slate-200'}`}>
                        <div className="p-4 sm:p-5">
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`sm:hidden flex items-center justify-center w-8 h-8 rounded-full ${isRevealed || isActive ? step.color : 'bg-slate-300'} text-white font-bold text-xs`}>
                              {step.day}
                            </div>
                            <h4 className="font-bold text-slate-900">{step.title}</h4>
                            <Badge variant="outline" className="text-xs">{step.channel}</Badge>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed">{step.message}</p>

                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-3 pt-3 border-t border-slate-200"
                              >
                                <div className="flex items-start gap-2">
                                  <AlertTriangle className={`h-4 w-4 mt-0.5 ${step.color.replace('bg-', 'text-')}`} />
                                  <p className="text-xs text-slate-500 leading-relaxed">{step.detail}</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
