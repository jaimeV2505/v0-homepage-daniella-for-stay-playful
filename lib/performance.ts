/**
 * Performance utilities for monitoring and optimization
 */

export function reportWebVitals(metric: any) {
  if (metric.label === 'web-vital') {
    console.log(`${metric.name}: ${metric.value.toFixed(2)}ms`)
  }
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), delay)
  }
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export const performance = {
  reportWebVitals,
  debounce,
  throttle,
}
