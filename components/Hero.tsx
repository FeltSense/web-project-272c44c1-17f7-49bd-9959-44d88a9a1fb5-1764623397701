'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shield, CheckCircle, Star, Heart, Activity } from 'lucide-react';

const avatars = [
  'https://i.pravatar.cc/100?img=1',
  'https://i.pravatar.cc/100?img=2',
  'https://i.pravatar.cc/100?img=3',
  'https://i.pravatar.cc/100?img=4',
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pb-32 bg-slate-950 overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-600/5 to-transparent pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* TRUST BADGES */}
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-2">
                <Shield className="w-5 h-5 text-violet-600" />
                <span className="text-sm font-medium text-slate-300">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium text-slate-300">24/7 Monitoring</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white">
              Protect Your Loved Ones.{' '}
              <span className="text-violet-600">Peace of Mind</span> Delivered.
            </h1>
            
            <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
              Smart health monitoring that keeps your family safe at home. Real-time alerts, 
              fall detection, and vital tracking—all in one seamless platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 text-lg transition-all duration-300 shadow-sm hover:shadow-md text-center"
              >
                Start Free Trial
              </a>
              <a 
                href="#services" 
                className="border-2 border-slate-700 text-white hover:bg-slate-800 font-semibold rounded-xl px-8 py-4 text-lg transition-all duration-300 text-center"
              >
                See How It Works
              </a>
            </div>
            
            {/* SOCIAL PROOF */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {avatars.map((avatar, i) => (
                  <Image 
                    key={i} 
                    src={avatar} 
                    alt="User avatar"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border-2 border-slate-950"
                  />
                ))}
              </div>
              <div>
                <p className="font-semibold text-white">10,000+ families protected</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm text-slate-500 ml-1">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* IMAGE/APP PREVIEW SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-6 relative">
              {/* App Preview Card */}
              <div className="bg-slate-50 rounded-2xl p-6 space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-violet-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Mom&apos;s Health</p>
                      <p className="text-sm text-emerald-500 font-medium">All systems normal</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-white rounded-xl p-4 border border-slate-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Activity className="w-4 h-4 text-violet-600" />
                      <span className="text-sm text-slate-500">Heart Rate</span>
                    </div>
                    <p className="text-2xl font-bold text-slate-900">72 <span className="text-sm font-normal text-slate-400">bpm</span></p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-slate-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm text-slate-500">Activity</span>
                    </div>
                    <p className="text-2xl font-bold text-slate-900">Active <span className="text-sm font-normal text-slate-400">now</span></p>
                  </div>
                </div>
                
                {/* Alert Status */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <div>
                    <p className="font-medium text-emerald-800">No alerts today</p>
                    <p className="text-sm text-emerald-600">Last check: 2 minutes ago</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating notification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Daily Check Complete</p>
                  <p className="text-sm text-slate-500">All vitals within range</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
