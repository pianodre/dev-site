import { useEffect, useRef } from 'react'

/** Ratio at which an element reveals. */
const SHOW_AT = 0.15

/**
 * Toggles `.is-visible` as the element scrolls in and out of view, so the
 * reveal replays on the way back up as well as on the way down.
 *
 * The element is re-armed from whichever edge it left through (`.reveal--above`
 * when it exited past the top), so it always slides in from the side the
 * viewport is arriving from rather than jumping to the other side.
 *
 * Pair with the `.reveal` class; reduced-motion users see content immediately
 * (CSS guard).
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= SHOW_AT) {
          el.classList.add('is-visible')
        } else if (entry.intersectionRatio === 0) {
          // Only re-arm once fully out of view, so an element parked near the
          // reveal threshold cannot flicker between the two states.
          el.classList.toggle('reveal--above', entry.boundingClientRect.top < 0)
          el.classList.remove('is-visible')
        }
      },
      { threshold: [0, SHOW_AT] },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
