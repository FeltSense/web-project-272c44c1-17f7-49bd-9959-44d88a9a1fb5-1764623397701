'use client';

import { motion } from 'framer-motion';
import { Shield, Activity, Bell, Heart } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: '24/7 Monitoring',
    description: 'Round-the-clock health tracking keeps your loved ones safe at home.',
  },
  {
    icon: Activity,
    title: 'Vital Tracking',
    description: 'Real-time heart rate, blood pressure, and activity monitoring.',
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    description: 'Instant notifications for falls, emergencies, or unusual patterns.',
  },
  {
    icon: Heart,
    title: 'Family Connect',
    description: 'Keep family informed with shared health dashboards and updates.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">
            Health Monitoring Made Simple
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Advanced technology that watches over your family so you can focus on living life together.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-violet-50 flex items-center justify-center mb-4 group-hover:bg-violet-100 transition-all duration-300 group-hover:scale-110">
                <service.icon className="w-10 h-10 text-violet-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-500">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
