'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { skills } from '@/data/portfolio'
import MagicBento from './MagicBento'

export function Skills() {
  const { ref, isVisible } = useScrollAnimation()

  const skillColors = {
    'Languages': 'from-blue-500/20 to-blue-400/10',
    'Frameworks & Libraries': 'from-sky-500/20 to-sky-400/10',
    'Databases': 'from-blue-600/20 to-blue-500/10',
    'Tools & Environments': 'from-cyan-500/20 to-cyan-400/10',
  }

  const pulseAnimation = (delay: number) => ({
    animate: isVisible ? {
      scale: [1, 1.02, 1],
    } : {},
    transition: {
      delay,
      duration: 1.2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  })

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? 'animate' : 'initial'}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="space-y-4 text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="text-accent font-semibold text-lg cursor-target"
            >
              Technical Stack
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-foreground cursor-target"
            >
              Languages & Tools
            </motion.h2>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.35, delay: 0.15 + groupIndex * 0.08 }}
              >
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
                  className="p-6 md:p-8 rounded-xl bg-secondary/40 border border-border hover:shadow-lg transition-all cursor-target group h-full"
                >
                  <h3 className="text-xl font-bold text-primary mb-5 tracking-tight">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, itemIndex) => (
                      <motion.button
                        key={skill}
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
                        whileHover={{
                          scale: 1.12,
                          backgroundColor: 'var(--accent)',
                          color: 'var(--accent-foreground)',
                        }}
                        transition={{
                          delay: 0.18 + groupIndex * 0.08 + itemIndex * 0.03,
                          duration: 0.25,
                        }}
                        className="px-3 py-1.5 bg-background rounded-full text-foreground text-sm font-medium border border-border cursor-pointer transition-all hover:border-accent active:scale-95 cursor-target"
                      >
                        {skill}
                      </motion.button>
                    ))}
                  </div>
                </MagicBento>
              </motion.div>
            ))}
          </motion.div>


        </motion.div>
      </div>
    </section>
  )
}
