'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { projects } from '@/data/portfolio'
import { ExternalLink, Github } from 'lucide-react'
import MagicBento from './MagicBento'
import Image, { StaticImageData } from 'next/image'
import discordImg from '../public/discord.png'
import soundcircleimg from '../public/soundcircle.png'
import spotifzimg from '../public/spotifz.png'

const projectImages: Record<string, StaticImageData> = {
  'Brain-Rot': discordImg,
  'Sound Circle': soundcircleimg,
  'Spotifz': spotifzimg,
}

export function Projects() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
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
              Projects
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.05, ease: 'easeOut' }}
              className="text-5xl md:text-6xl font-bold text-foreground cursor-target"
            >
              Building Real Solutions
            </motion.h2>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.35, delay: 0.1 + index * 0.08, ease: 'easeOut' }}
                className="h-full"
              >
                <MagicBento
                  textAutoHide={false}
                  enableStars={false}
                  enableSpotlight={false}
                  enableBorderGlow={false}
                  enableTilt={false}
                  enableMagnetism
                  clickEffect
                  spotlightRadius={50}
                  particleCount={12}
                  glowColor="87, 185, 255"
                  disableAnimations={false}
                  className="h-full rounded-xl overflow-hidden bg-background border border-border hover:border-accent hover:shadow-xl transition-all group cursor-target"
                >
                {/* Project Image */}
                <div className={`relative w-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 ${projectImages[project.title] ? 'h-65' : 'h-48'}`}>
                  {projectImages[project.title] ? (
                    <Image
                      src={projectImages[project.title]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 770px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="text-foreground/30 font-bold text-center text-base">
                        {project.title}
                      </p>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {project.highlights.slice(0, 2).map((highlight) => (
                      <motion.div
                        key={highlight}
                        className="text-sm text-foreground/70 flex items-start gap-2"
                      >
                        <span className="text-accent mt-1">•</span>
                        <span>{highlight}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    {project.title === 'Sound Circle' && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer cursor-target"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </motion.a>
                    )}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-secondary text-foreground border border-border rounded-lg font-semibold hover:bg-primary/5 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer cursor-target"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  </div>
                </div>
                </MagicBento>
              </motion.div>
            ))}
          </motion.div>

          {/* See More */}
          <motion.div variants={staggerItem} className="text-center pt-8">
            <a
              href="https://github.com/chirag"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors cursor-target"
            >
              View All Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
