'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { experience } from '@/data/portfolio'
import { CheckCircle2 } from 'lucide-react'
import MagicBento from './MagicBento'

export function Experience() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div className="space-y-4 text-center">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="text-accent font-semibold text-lg cursor-target"
            >
              Experience
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.05, ease: 'easeOut' }}
              className="text-5xl md:text-6xl font-bold text-foreground cursor-target"
            >
              My Journey
            </motion.h2>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div className="space-y-6 md:space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.35, delay: 0.1 + index * 0.08, ease: 'easeOut' }}
                className="relative"
              >
                {/* Timeline dot with pulse animation */}
                <motion.div
                  className="hidden md:block absolute -left-6 top-8 w-4 h-4 rounded-full bg-accent border-4 border-background z-20"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ delay: 0.15 + index * 0.08, duration: 1.2, repeat: Infinity }}
                />

                <MagicBento
                  textAutoHide={false}
                  enableStars={false}
                  enableSpotlight={false}
                  enableBorderGlow={true}
                  enableTilt={false}
                  enableMagnetism
                  clickEffect
                  spotlightRadius={50}
                  particleCount={12}
                  glowColor="87, 185, 255"
                  disableAnimations={false}
                  className="p-6 md:p-8 rounded-xl bg-secondary/40 border border-border hover:shadow-lg transition-all group cursor-target"
                >

                {/* Content */}
                <div className="space-y-4 relative z-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-primary">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-muted-foreground font-medium whitespace-nowrap px-3 py-1 bg-accent/10 rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <motion.div
                        key={highlight}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: 0.15 + index * 0.08 + hIndex * 0.03, duration: 0.3 }}
                        className="flex gap-3 items-start"
                      >
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                </MagicBento>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={staggerItem}
            className="text-center pt-8"
          >
            <a
              href="/resume.pdf"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors cursor-pointer cursor-target"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
