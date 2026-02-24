'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { profile } from '@/data/portfolio'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

export function Contact() {
  const { ref, isVisible } = useScrollAnimation()

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: profile.location,
      href: '#',
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: profile.social.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: profile.social.linkedin,
    },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? 'animate' : 'initial'}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="space-y-4 text-center">
            <motion.p
              variants={staggerItem}
              className="text-accent font-semibold text-lg cursor-target"
            >
              Let's Connect
            </motion.p>
            <motion.h2
              variants={staggerItem}
              className="text-4xl md:text-5xl font-bold text-foreground cursor-target"
            >
              Get in Touch
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-lg text-muted-foreground pt-2 max-w-2xl mx-auto"
            >
              Have an opportunity or just want to chat? Feel free to reach out through any of these channels.
            </motion.p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  variants={staggerItem}
                  whileHover={{ y: -8, scale: 1.05 }}
                  animate={isVisible ? { y: [0, -5, 0] } : {}}
                  transition={{ delay: index * 0.2, duration: 2, repeat: Infinity }}
                  className="p-6 md:p-8 rounded-xl bg-gradient-to-br from-secondary to-secondary/50 border border-border hover:border-accent hover:shadow-lg transition-all text-center group cursor-target"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ delay: index * 0.1, duration: 3, repeat: Infinity }}
                  >
                    <Icon className="w-10 h-10 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  </motion.div>
                  <h3 className="font-semibold text-primary mb-2 text-lg">{item.label}</h3>
                  <p className="text-muted-foreground hover:text-accent transition-colors">
                    {item.value}
                  </p>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={staggerItem}
            className="flex gap-4 justify-center"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  animate={isVisible ? { y: [0, -3, 0] } : {}}
                  transition={{ delay: index * 0.15, duration: 2, repeat: Infinity }}
                  className="p-4 rounded-full bg-secondary border border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all cursor-target"
                  aria-label={link.label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              )
            })}
          </motion.div>

          {/* CTA Message */}
          <motion.div
            variants={staggerItem}
            className="p-8 rounded-xl bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 text-center cursor-target"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-foreground font-medium">
              📧 Prefer email?{' '}
              <a href={`mailto:${profile.email}`} className="font-bold text-accent hover:underline transition-all">
                Send me a message
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
