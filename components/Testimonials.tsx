'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Margaret Chen',
    role: 'Caregiver for elderly mother',
    quote: 'SafeHome detected my mother\'s fall at 2 AM when I wasn\'t there. The instant alert saved her life. I can finally sleep peacefully knowing she\'s protected 24/7.',
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Robert Williams',
    role: 'Heart condition patient',
    quote: 'After my cardiac event, SafeHome monitors my vitals continuously. The early warning system alerted me to irregular patterns before I even felt symptoms. Truly life-changing technology.',
    avatar: 'https://i.pravatar.cc/150?img=68',
  },
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Geriatric Specialist',
    quote: 'I recommend SafeHome to all my patients. The health monitoring accuracy rivals clinical equipment, and the peace of mind it provides families is immeasurable.',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">
            Trusted by Families Everywhere
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Real stories from real people whose lives were transformed by SafeHome's intelligent health monitoring.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 relative hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -top-3 left-8 bg-violet-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                Verified User
              </div>
              
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed">"{testimonial.quote}"</p>
              
              <div className="flex items-center gap-4">
                <Image 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  width={48} 
                  height={48} 
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}