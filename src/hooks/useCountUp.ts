import { useState, useEffect, useRef } from 'react'

export function useCountUp(target: number, decimals: number = 0, duration: number = 1800) {
  const [value, setValue] = useState<string>('0')
  const [hasStarted, setHasStarted] = useState<boolean>(false)
  const elementRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null
    let animationFrameId: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      const current = easeProgress * target

      setValue(current.toFixed(decimals))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step)
      } else {
        setValue(target.toFixed(decimals))
      }
    }

    animationFrameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrameId)
  }, [hasStarted, target, decimals, duration])

  return { value, elementRef }
}
