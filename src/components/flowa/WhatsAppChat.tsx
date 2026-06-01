'use client';

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

interface WhatsAppMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  isVoice?: boolean;
  isTyping?: boolean;
}

interface WhatsAppChatProps {
  messages: WhatsAppMessage[];
  isTyping?: boolean;
  typingText?: string;
  children?: ReactNode;
}

export default function WhatsAppChat({ messages, isTyping, typingText, children }: WhatsAppChatProps) {
  return (
    <div className="flex flex-col h-full">
      {/* WhatsApp Header */}
      <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
          <Phone className="h-4 w-4 text-white" />
        </div>
        <div>
          <p className="text-white font-bold text-sm">Flowa</p>
          <p className="text-green-200 text-xs">en ligne</p>
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 bg-[#ECE5DD] p-3 overflow-y-auto chat-scroll" style={{ minHeight: '320px', maxHeight: '380px' }}>
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex mb-2 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] px-3 py-2 text-sm shadow-sm ${
                  msg.type === 'user'
                    ? 'whatsapp-bubble-user text-slate-800'
                    : 'whatsapp-bubble-bot text-slate-800'
                }`}
              >
                {msg.isVoice ? (
                  <div className="flex items-center gap-2 min-w-[140px]">
                    <div className="flex gap-0.5 items-end">
                      {[4, 8, 12, 8, 6, 10, 4, 8, 6].map((h, i) => (
                        <div
                          key={i}
                          className="w-0.5 bg-slate-600 rounded-full"
                          style={{ height: `${h}px` }}
                        />
                      ))}
                    </div>
                    <div className="flex-1 h-0.5 bg-slate-400 rounded-full" />
                    <span className="text-xs text-slate-500">0:12</span>
                  </div>
                ) : msg.isTyping ? (
                  <div className="flex items-center gap-1 py-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                ) : (
                  <span className="leading-relaxed">{msg.content}</span>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start mb-2"
          >
            <div className="whatsapp-bubble-bot px-3 py-2 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                {typingText && <span className="text-xs text-slate-500 italic">{typingText}</span>}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Input area */}
      {children && (
        <div className="bg-[#F0F0F0] px-3 py-2">
          {children}
        </div>
      )}
    </div>
  );
}
