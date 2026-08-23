import type { ProjectVisual as Visual } from '../data/site'

/** The framed screenshot band at the top of a featured project card. */
export function ProjectVisual({ visual }: { visual: Visual }) {
  return (
    <div className="shot">
      <div className="shot__bar">
        <span className="shot__dots" />
        <span className="shot__label">{visual.label}</span>
      </div>
      <div className="shot__body">
        <img
          className="shot__img"
          src={visual.src}
          alt={visual.alt}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  )
}
