'use client';

import { motion } from 'framer-motion';
import {
  Wallet,
  Landmark,
  MessageSquare,
  Briefcase,
  Smartphone,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const valueRows = [
  {
    icon: Wallet,
    domain: 'Orange Money',
    apport: 'Lien de paiement obligatoire sur chaque facture',
    gain: 'Explosion du volume de transactions et commissions',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
  {
    icon: Landmark,
    domain: 'Microfinance',
    apport: 'Score de crédit IA basé sur flux financiers réels',
    gain: 'Nouveau marché micro-crédit à faible risque',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
  },
  {
    icon: MessageSquare,
    domain: 'SMS / Données',
    apport: 'Campagnes de relance automatisées',
    gain: 'Trafic SMS B2B récurrent et consommation données',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: Briefcase,
    domain: 'Orange Business',
    apport: 'Flowa vendu comme "Pack Gestion Trésorerie"',
    gain: 'Vente croisée d\'abonnements télécoms aux PME',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    icon: Smartphone,
    domain: 'Max It',
    apport: 'Flowa comme mini-app financière native',
    gain: 'Rétention entrepreneurs sur l\'app Orange',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
];

export default function OrangeValueSection() {
  return (
    <section id="valeur-orange" className="py-20 md:py-28 bg-gradient-to-b from-white to-orange-50/30">
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
            Valeur Orange
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Ce que Flowa apporte à Orange
          </h2>
          <p className="text-lg text-slate-600">
            Un écosystème gagnant-gagnant pour chaque domaine Orange
          </p>
        </motion.div>

        {/* Value cards */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {valueRows.map((row, index) => (
            <motion.div
              key={row.domain}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="group hover:shadow-lg hover:shadow-orange-500/5 transition-all hover:border-orange-200 cursor-default">
                <CardContent className="p-5 sm:p-6">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    {/* Domain */}
                    <div className="md:col-span-3 flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl ${row.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <row.icon className={`h-5 w-5 ${row.color}`} />
                      </div>
                      <span className="font-bold text-slate-900">{row.domain}</span>
                    </div>

                    {/* Apport */}
                    <div className="md:col-span-5">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        <span className="font-semibold text-orange-600">Ce que Flowa apporte :</span>{' '}
                        {row.apport}
                      </p>
                    </div>

                    {/* Gain */}
                    <div className="md:col-span-4">
                      <div className="bg-orange-50 rounded-xl px-4 py-2.5">
                        <p className="text-sm text-slate-700 leading-relaxed">
                          <span className="font-semibold text-emerald-600">Gain pour Orange :</span>{' '}
                          {row.gain}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
