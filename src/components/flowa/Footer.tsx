'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-orange-500 flowa-glow-text mb-3">FLOWA</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              L&apos;IA qui garantit votre trésorerie. Assistant financier intelligent pour les PME africaines, accessible via WhatsApp vocal et SMS.
            </p>
          </div>

          {/* Liens */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">Navigation</h4>
            <ul className="space-y-2">
              {['Problème', 'Solution', 'Modules', 'Architecture', 'Valeur Orange', 'Démo'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-slate-400 hover:text-orange-400 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">Contact</h4>
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
              <MessageCircle className="h-4 w-4 text-green-500" />
              <span>WhatsApp Business API</span>
            </div>
            <p className="text-slate-400 text-sm">OSC 2026 — L&apos;IA comme accélérateur d&apos;affaires</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs text-slate-500"
          >
            © 2026 Flowa — Orange Startup Challenge
          </motion.p>
          <p className="text-xs text-orange-500/70 font-medium">
            400 millions de PME en Afrique et au Moyen-Orient
          </p>
        </div>
      </div>
    </footer>
  );
}
