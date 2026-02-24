'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { fadeInUp, fadeInDown, staggerContainer, staggerItem } from '@/lib/animations'
import { profile } from '@/data/portfolio'
import { ShuffleText } from '@/components/shuffle-text'
import Lanyard from '@/components/lanyard'

export function Hero() {
  const socialLinks = [
    { icon: Github, href: profile.social.github, label: 'GitHub' },
    { icon: Linkedin, href: profile.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
          animate={{ x: [0, -60, 0], y: [0, -30, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 md:space-y-8"
          >
          {/* Greeting */}
          <motion.div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="text-accent font-semibold text-lg"
            >
              Welcome
            </motion.p>
            <ShuffleText 
              text={`I'm ${profile.name}`}
              tag="h1"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground cursor-target break-words leading-tight"
              duration={0.3}
              shuffleDirection="right"
              trigger={false}
            />
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
              className="text-xl md:text-3xl text-muted-foreground font-normal"
            >
              {profile.title}
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
          >
            {profile.shortBio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors text-center cursor-pointer cursor-target"
            >
              View My Work
            </motion.a>
            {/* <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-secondary text-foreground border border-border rounded-lg font-semibold hover:bg-primary/5 transition-colors text-center cursor-pointer cursor-target"
            >
              Get in Touch
            </motion.a> */}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center gap-4 pt-4"
          >
            <span className="text-sm text-muted-foreground font-medium">Follow me:</span>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.32 + index * 0.05 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground text-foreground transition-all cursor-pointer cursor-target"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

          {/* Right side - 3D Lanyard */}
          <div className="hidden lg:block">
            <Lanyard></Lanyard>
          </div>
        </div>
      </div>
    </section>
  )
}
