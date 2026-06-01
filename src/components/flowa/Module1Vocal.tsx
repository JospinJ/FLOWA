'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PhoneMockup from './PhoneMockup';
import WhatsAppChat from './WhatsAppChat';

const pipelineSteps = [
  { label: 'Audio', icon: '🎙️', color: 'bg-orange-500' },
  { label: 'Whisper', icon: '📝', color: 'bg-purple-500' },
  { label: 'Groq LLM', icon: '🧠', color: 'bg-blue-500' },
  { label: 'Données structurées', icon: '📊', color: 'bg-emerald-500' },
];

export default function Module1Vocal() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);

  const handleStart = () => {
    setStarted(true);
    setStep(1);
    setTimeout(() => setStep(2), 2000);
    setTimeout(() => setStep(3), 4000);
    setTimeout(() => setStep(4), 5500);
  };

  const messages = [
    ...(step >= 1
      ? [{ id: 'voice-1', type: 'user' as const, content: '', isVoice: true }]
      : []),
    ...(step >= 2
      ? [{ id: 'typing-1', type: 'bot' as const, content: '', isTyping: true }]
      : []),
    ...(step >= 3
      ? [
          {
            id: 'bot-1',
            type: 'bot' as const,
            content:
              "C'est noté patron. 📋\nClient : Jean\nMontant : 25 000 FCFA\nÉchéance : Vendredi\n\nJe programmerai une relance pour vendredi soir. ✅",
          },
        ]
      : []),
  ];

  return (
    <section id="modules" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-orange-500/10 text-orange-600 border-orange-500/30">Module 1</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Comptabilité Vocale
          </h2>
          <p className="text-lg text-slate-600">Zéro friction — Parlez, Flowa comprend</p>
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
              <WhatsAppChat
                messages={messages}
                isTyping={step === 2}
                typingText="Transcription Whisper..."
              >
                {!started ? (
                  <Button
                    onClick={handleStart}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full"
                  >
                    <Mic className="h-4 w-4 mr-2" />
                    Envoyer un vocal
                  </Button>
                ) : step >= 4 ? (
                  <div className="flex items-center justify-center gap-2 text-green-600 text-sm font-medium">
                    <CheckCircle2 className="h-4 w-4" />
                    Données enregistrées
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1.2 }}
                    >
                      <Mic className="h-4 w-4 text-orange-500" />
                    </motion.div>
                    Traitement en cours...
                  </div>
                )}
              </WhatsAppChat>
            </PhoneMockup>
          </motion.div>

          {/* Data extraction panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Pipeline steps */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Pipeline IA</h3>
              <div className="flex flex-wrap items-center gap-2">
                {pipelineSteps.map((s, i) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <motion.div
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: step >= i + 1 ? 1 : 0.3 }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                        step >= i + 1
                          ? `${s.color} text-white shadow-md`
                          : 'bg-slate-200 text-slate-400'
                      }`}
                    >
                      <span>{s.icon}</span>
                      <span>{s.label}</span>
                    </motion.div>
                    {i < pipelineSteps.length - 1 && (
                      <ArrowRight className="h-3 w-3 text-slate-300" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Extracted data */}
            {step >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Données extraites automatiquement
                </h3>
                <Card className="border-2 border-orange-200 bg-orange-50/50">
                  <CardContent className="p-5 space-y-3">
                    {[
                      { label: 'Client', value: 'Jean', icon: '👤' },
                      { label: 'Montant', value: '25 000 FCFA', icon: '💰' },
                      { label: 'Échéance', value: 'Vendredi', icon: '📅' },
                      { label: 'Statut', value: 'Impayé', icon: '⏳' },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15, duration: 0.3 }}
                        className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-sm"
                      >
                        <span className="text-sm text-slate-500 flex items-center gap-2">
                          <span>{item.icon}</span>
                          {item.label}
                        </span>
                        <span className="font-bold text-slate-900">{item.value}</span>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Voice transcript */}
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Transcription
                </h3>
                <Card className="bg-slate-900 border-slate-800">
                  <CardContent className="p-4">
                    <p className="text-slate-300 text-sm leading-relaxed italic">
                      &quot;Flowa, j&apos;ai livré 10 sacs de riz à M. Jean à 25 000 FCFA. Il doit payer vendredi.&quot;
                    </p>
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
