'use client'

/**
 * Accessibility utilities for WCAG 2.1 compliance
 */

export function skipToMainContent() {
  const main = document.querySelector('main')
  if (main) {
    main.focus()
    main.scrollIntoView({ behavior: 'smooth' })
  }
}

export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite') {
  const announcement = document.createElement('div')
  announcement.setAttribute('role', 'status')
  announcement.setAttribute('aria-live', priority)
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message
  
  document.body.appendChild(announcement)
  
  setTimeout(() => {
    announcement.remove()
  }, 1000)
}

export function createAriaLabel(text: string, description?: string): string {
  return description ? `${text}. ${description}` : text
}

export const a11y = {
  skipToMainContent,
  announceToScreenReader,
  createAriaLabel,
}
