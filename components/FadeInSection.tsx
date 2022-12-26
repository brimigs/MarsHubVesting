import styles from './FadeInSection.module.scss'
import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'

const FadeInSection = ({ children, className }: FadeInProps) => {
  const [isVisible, setVisible] = useState(true)
  const domRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const [classes, setClasses] = useState(styles.fadeIn)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting)
          setClasses(classNames(styles.fadeIn, entry.isIntersecting && styles.isVisible))
        }
      })
    })
    observer.observe(domRef.current)

    return () => observer.unobserve(domRef.current)
  }, [])

  return (
    <section className={classes} ref={domRef}>
      <div className={className}>{children}</div>
    </section>
  )
}

export default FadeInSection
