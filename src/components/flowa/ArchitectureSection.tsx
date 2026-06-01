'use client';

import { motion } from 'framer-motion';
import {
  MessageSquare,
  Server,
  Brain,
  Database,
  Globe,
  CreditCard,
  ArrowDownRight,
  ArrowUpRight,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const layers = [
  {
    title: 'Interface',
    icon: MessageSquare,
    color: 'bg-green-500',
    items: ['WhatsApp Business API', 'SMS (Africa\'s Talking)'],
    badges: ['Frontend', 'Vocal + SMS'],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'bg-orange-500',
    items: ['FastAPI (Python)', 'Webhooks & Cron Jobs'],
    badges: ['API', 'Orchestration'],
  },
  {
    title: 'IA',
    icon: Brain,
    color: 'bg-purple-500',
    items: ['Whisper (Transcription)', 'Groq Llama 3.3 70B (Extraction & Logique)'],
    badges: ['ML', 'NLP'],
  },
  {
    title: 'Base de données',
    icon: Database,
    color: 'bg-blue-500',
    items: ['Supabase (PostgreSQL)', 'Temps réel & Auth'],
    badges: ['DB', 'Realtime'],
  },
  {
    title: 'Intégrations',
    icon: Globe,
    color: 'bg-amber-500',
    items: ["Africa's Talking (SMS)", 'Orange Money API'],
    badges: ['Paiement', 'Communication'],
  },
];

const techBadges = [
  { label: 'Python', color: 'bg-blue-100 text-blue-700' },
  { label: 'FastAPI', color: 'bg-teal-100 text-teal-700' },
  { label: 'WhatsApp API', color: 'bg-green-100 text-green-700' },
  { label: 'Whisper', color: 'bg-purple-100 text-purple-700' },
  { label: 'Llama 3.3 70B', color: 'bg-indigo-100 text-indigo-700' },
  { label: 'Groq', color: 'bg-orange-100 text-orange-700' },
  { label: 'Supabase', color: 'bg-emerald-100 text-emerald-700' },
  { label: 'PostgreSQL', color: 'bg-blue-100 text-blue-700' },
  { label: 'Africa\'s Talking', color: 'bg-amber-100 text-amber-700' },
  { label: 'Orange Money', color: 'bg-orange-100 text-orange-700' },
];

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="py-20 md:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-orange-500/20 text-orange-400 border-orange-500/30">
            Architecture
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Architecture Technique MVP
          </h2>
          <p className="text-lg text-slate-400">Simple, robuste, scalable</p>
        </motion.div>

        {/* Architecture diagram */}
        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:border-orange-500/30 transition-all hover:shadow-lg hover:shadow-orange-500/5">
                <CardContent className="p-5">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl ${layer.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <layer.icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-white">{layer.title}</h3>
                        {layer.badges.map((badge) => (
                          <Badge
                            key={badge}
                            variant="outline"
                            className="text-xs border-slate-600 text-slate-400"
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {layer.items.map((item) => (
                          <span
                            key={item}
                            className="text-sm bg-slate-700/50 text-slate-300 px-3 py-1 rounded-lg"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Arrow connector */}
              {index < layers.length - 1 && (
                <div className="flex justify-center my-1">
                  <div className="flex flex-col items-center">
                    <ArrowDownRight className="h-5 w-5 text-orange-500/50" />
                    <ArrowUpRight className="h-5 w-5 text-orange-500/50 -mt-1" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Tech stack badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {techBadges.map((badge) => (
            <span
              key={badge.label}
              className={`px-3 py-1.5 rounded-full text-xs font-bold ${badge.color}`}
            >
              {badge.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
