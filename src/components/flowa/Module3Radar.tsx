'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingDown,
  AlertTriangle,
  Zap,
  DollarSign,
  CalendarClock,
  ArrowDownCircle,
  Send,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

const cashFlowData = [
  { mois: 'Jan', revenus: 450000, depenses: 320000 },
  { mois: 'Fév', revenus: 380000, depenses: 350000 },
  { mois: 'Mar', revenus: 420000, depenses: 380000 },
  { mois: 'Avr', revenus: 310000, depenses: 400000 },
  { mois: 'Mai', revenus: 280000, depenses: 420000 },
  { mois: 'Jun', revenus: 350000, depenses: 390000 },
  { mois: 'Jul', revenus: 300000, depenses: 410000 },
];

const summaryCards = [
  { label: 'Dettes clients', value: '150 000 FCFA', icon: DollarSign, color: 'text-orange-500', bg: 'bg-orange-50' },
  { label: 'Dépenses à venir', value: '100 000 FCFA', icon: CalendarClock, color: 'text-red-500', bg: 'bg-red-50' },
  { label: 'Solde prévisionnel', value: '-50 000 FCFA', icon: TrendingDown, color: 'text-red-600', bg: 'bg-red-50' },
  { label: 'Jours avant découvert', value: '2 jours', icon: ArrowDownCircle, color: 'text-amber-600', bg: 'bg-amber-50' },
];

export default function Module3Radar() {
  const [urgentSent, setUrgentSent] = useState(false);
  const [smsCount, setSmsCount] = useState(0);

  const handleUrgentRelance = () => {
    setUrgentSent(true);
    setSmsCount(0);
    const interval = setInterval(() => {
      setSmsCount((prev) => {
        if (prev >= 3) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 800);
  };

  return (
    <section id="module3" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-red-500/10 text-red-600 border-red-500/30">Module 3</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Radar Découvert
          </h2>
          <p className="text-lg text-slate-600">Prédiction de crise — Anticipez avant qu&apos;il ne soit trop tard</p>
        </motion.div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {summaryCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-4 sm:p-5">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${card.bg} mb-3`}>
                    <card.icon className={`h-5 w-5 ${card.color}`} />
                  </div>
                  <p className="text-xs text-slate-500 mb-1">{card.label}</p>
                  <p className={`text-lg font-black ${card.color}`}>{card.value}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cash flow chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900">Flux de trésorerie</h3>
                  <Badge variant="outline" className="text-xs">
                    6 derniers mois
                  </Badge>
                </div>
                <div className="h-64 sm:h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={cashFlowData}>
                      <defs>
                        <linearGradient id="colorRevenus" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorDepenses" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="mois" tick={{ fontSize: 12 }} stroke="#94a3b8" />
                      <YAxis tick={{ fontSize: 11 }} stroke="#94a3b8" tickFormatter={(v: number) => `${v / 1000}k`} />
                      <Tooltip
                        contentStyle={{
                          borderRadius: '12px',
                          border: '1px solid #e2e8f0',
                          fontSize: '12px',
                        }}
                        formatter={(value: number, name: string) => [
                          `${value.toLocaleString('fr-FR')} FCFA`,
                          name === 'revenus' ? 'Revenus' : 'Dépenses',
                        ]}
                      />
                      <ReferenceLine
                        y={400000}
                        stroke="#ef4444"
                        strokeDasharray="5 5"
                        label={{
                          value: 'Zone danger',
                          position: 'insideTopRight',
                          fill: '#ef4444',
                          fontSize: 10,
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="revenus"
                        stroke="#22c55e"
                        strokeWidth={2}
                        fill="url(#colorRevenus)"
                      />
                      <Area
                        type="monotone"
                        dataKey="depenses"
                        stroke="#ef4444"
                        strokeWidth={2}
                        fill="url(#colorDepenses)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Alert & Action */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Alert card */}
            <Card className="border-2 border-red-200 bg-red-50/50">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-red-700 mb-2">⚠️ Alerte découvert</h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Attention patron. Vous avez <span className="font-bold text-red-600">150 000 FCFA</span> de dettes clients,
                      mais vous devez payer votre fournisseur de <span className="font-bold text-red-600">100 000 FCFA demain</span>.
                      Si les clients ne paient pas ce soir, vous serez à découvert.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action proposal */}
            <Card className="border-2 border-orange-200 bg-orange-50/50">
              <CardContent className="p-5">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-orange-700 mb-2">Action proposée</h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Voulez-vous que je lance une campagne de relance urgente sur vos 3 plus gros impayés ?
                    </p>
                  </div>
                </div>

                {!urgentSent ? (
                  <Button
                    onClick={handleUrgentRelance}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-md"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Lancer la relance urgente
                  </Button>
                ) : (
                  <div className="space-y-2">
                    {['M. Jean — 50 000 FCFA', 'Mme Awa — 45 000 FCFA', 'M. Diallo — 55 000 FCFA'].map(
                      (client, i) => (
                        <motion.div
                          key={client}
                          initial={{ opacity: 0, x: -20 }}
                          animate={smsCount > i ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3 }}
                          className={`flex items-center gap-2 bg-white rounded-lg px-4 py-2.5 border ${
                            smsCount > i ? 'border-green-300' : 'border-slate-200'
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            smsCount > i ? 'bg-green-500' : 'bg-slate-200'
                          }`}>
                            <Send className={`h-3 w-3 ${smsCount > i ? 'text-white' : 'text-slate-400'}`} />
                          </div>
                          <span className="text-sm font-medium text-slate-700 flex-1">{client}</span>
                          {smsCount > i && (
                            <Badge className="bg-green-100 text-green-700 text-xs border-green-200">
                              SMS envoyé ✓
                            </Badge>
                          )}
                        </motion.div>
                      )
                    )}
                    {smsCount >= 3 && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-sm text-green-600 font-medium mt-2"
                      >
                        ✅ 3 SMS de relance envoyés avec succès
                      </motion.p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
