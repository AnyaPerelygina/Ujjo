import { gsap } from 'gsap'

let animanionMenuOpen
let animanionMenuClose

const initanimationMenu = () => {
  const isMobile = () => window.innerWidth < 768

  const menu = document.querySelector('.header')
  const items = menu.querySelectorAll('.nav__item')

  const resetMobileStyles = () => {
    gsap.set(items, { opacity: 0, y: '7rem' })
  }

  const initAnimations = () => {
    if (isMobile()) {
      resetMobileStyles()

      animanionMenuOpen = () => {
        if (!isMobile()) return

        const tlMenu = gsap.timeline()
        tlMenu
          .to(
            items,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              stagger: 0.1
            },
            0
          )
        tlMenu.play()
      }

      animanionMenuClose = () => {
        if (!isMobile()) return

        const tlMenuClose = gsap.timeline()
        tlMenuClose
          .to(
            items,
            {
              opacity: 0,
              y: '7rem',
              duration: 0.8,
              ease: 'power2.in',
              stagger: -0.1
            },
            0
          )
        tlMenuClose.play()
      }
    } else {
      gsap.set(items, { opacity: 1, y: 0 })
    }
  }

  initAnimations()

  window.addEventListener('resize', () => {
    const previousWidth = window.innerWidth
    window.requestAnimationFrame(() => {
      const newWidth = window.innerWidth

      if (previousWidth !== newWidth) {
        initAnimations()
      }
    })
  })
}

export { initanimationMenu, animanionMenuOpen, animanionMenuClose }
