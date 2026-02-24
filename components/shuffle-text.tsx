'use client'

import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ShuffleTextProps {
  text: string
  className?: string
  shuffleDirection?: 'left' | 'right' | 'up' | 'down'
  duration?: number
  ease?: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  trigger?: boolean
}

export function ShuffleText({
  text,
  className = '',
  shuffleDirection = 'right',
  duration = 0.4,
  ease = 'power3.out',
  tag = 'h2',
  trigger = true,
}: ShuffleTextProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [ready, setReady] = useState(false)
  const tlRef = useRef<gsap.core.Timeline | null>(null)
  const wrappersRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    if (!ref.current || !text) return

    const el = ref.current
    const words = text.split(' ')

    // Clear and rebuild
    wrappersRef.current.forEach(wrap => {
      if (wrap.parentNode) wrap.parentNode.removeChild(wrap)
    })
    wrappersRef.current = []
    el.innerHTML = ''

    // Build wrapped characters grouped by words
    words.forEach((word, wordIndex) => {
      // Create word wrapper to keep word together
      const wordWrap = document.createElement('span')
      wordWrap.style.cssText = 'display: inline-block; white-space: nowrap;'

      word.split('').forEach(char => {
        const wrap = document.createElement('span')
        wrap.style.cssText = 'display: inline-block; overflow: hidden; margin-right: 0.05em;'

        const inner = document.createElement('span')
        inner.style.cssText = 'display: inline-block; will-change: transform;'

        const charSpan = document.createElement('span')
        charSpan.textContent = char
        charSpan.style.cssText = 'display: inline-block;'

        inner.appendChild(charSpan)
        wrap.appendChild(inner)
        wordWrap.appendChild(wrap)
        wrappersRef.current.push(wrap)
      })

      el.appendChild(wordWrap)

      // Add space after word (except last word)
      if (wordIndex < words.length - 1) {
        const spaceWrap = document.createElement('span')
        spaceWrap.style.cssText = 'display: inline-block; overflow: hidden; margin-right: 0.05em;'
        
        const spaceInner = document.createElement('span')
        spaceInner.style.cssText = 'display: inline-block; will-change: transform;'
        
        const spaceSpan = document.createElement('span')
        spaceSpan.textContent = '\u00A0'
        spaceSpan.style.cssText = 'display: inline-block;'
        
        spaceInner.appendChild(spaceSpan)
        spaceWrap.appendChild(spaceInner)
        el.appendChild(spaceWrap)
        wrappersRef.current.push(spaceWrap)
      }
    })

    const inners = wrappersRef.current.map(w => w.querySelector('span') as HTMLElement)

    const playAnimation = () => {
      if (tlRef.current) tlRef.current.kill()

      const tl = gsap.timeline()

      inners.forEach((inner, i) => {
        let startVal = 0
        let endVal = 0

        if (shuffleDirection === 'down' || shuffleDirection === 'up') {
          const height = inner.offsetHeight
          startVal = shuffleDirection === 'down' ? -height : height
          endVal = 0
        } else {
          const width = inner.offsetWidth
          startVal = shuffleDirection === 'right' ? -width : width
          endVal = 0
        }

        const isVertical = shuffleDirection === 'up' || shuffleDirection === 'down'

        const fromVars = isVertical 
          ? { y: startVal, opacity: 0 } 
          : { x: startVal, opacity: 0 }
        
        const toVars = isVertical 
          ? { y: endVal, opacity: 1, duration, ease, delay: i * 0.03 } 
          : { x: endVal, opacity: 1, duration, ease, delay: i * 0.03 }

        tl.fromTo(inner, fromVars, toVars, 0)
      })

      tlRef.current = tl
    }

    if (trigger) {
      const st = ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        once: true,
        onEnter: playAnimation,
      })

      return () => {
        st.kill()
        if (tlRef.current) tlRef.current.kill()
      }
    } else {
      playAnimation()
    }

    setReady(true)
  }, [text, duration, ease, shuffleDirection, trigger])

  return React.createElement(
    tag,
    { ref, className: `${className} ${ready ? 'is-ready' : ''}` }
  )
}
