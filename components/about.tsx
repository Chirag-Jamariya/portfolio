'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { about } from '@/data/portfolio'
import { ShuffleText } from '@/components/shuffle-text'

export function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-10"
        >
          {/* Header */}
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="text-accent font-semibold text-lg"
            >
              About Me
            </motion.p>
            <ShuffleText 
              text="Full-Stack Developer & Open Source Enthusiast"
              tag="h2"
              className="text-5xl md:text-6xl font-bold text-foreground leading-tight cursor-target [word-break:keep-all]"
              duration={0.25}
              shuffleDirection="right"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            {about.split('\n\n').map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.06, ease: 'easeOut' }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="grid grid-cols-3 gap-4 md:gap-6 pt-8"
          >
            {[
              { label: 'CGPA', value: '8.33' },
              { label: 'Graduation', value: 'May 2027' },
              { label: 'Focus', value: 'Full-Stack' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.28 + index * 0.05, ease: 'backOut' }}
                className="text-center cursor-target"
              >
                <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest">{stat.label}</p>
                <p className="text-foreground font-bold text-lg sm:text-xl mt-2">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
