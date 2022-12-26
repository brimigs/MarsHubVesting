import classNames from 'classnames'

import styles from './CircularProgress.module.scss'

interface Props {
  color?: string
  size?: number
  className?: string
}

const CircularProgress = ({ color = '#FFFFFF', size = 20, className }: Props) => {
  const borderWidth = `${size / 10}px`
  const borderColor = `${color} transparent transparent transparent`
  const loaderClasses = classNames(styles.loader, className)

  return (
    <div className={loaderClasses} style={{ width: `${size}px`, height: `${size}px` }}>
      <div
        className={styles.element}
        style={{
          borderWidth: borderWidth,
          borderColor: borderColor,
        }}
      />
      <div
        className={styles.element}
        style={{
          borderWidth: borderWidth,
          borderColor: borderColor,
        }}
      />
      <div
        className={styles.element}
        style={{
          borderWidth: borderWidth,
          borderColor: borderColor,
        }}
      />
      <div
        className={styles.element}
        style={{
          borderWidth: borderWidth,
          borderColor: borderColor,
        }}
      />
    </div>
  )
}

export default CircularProgress
