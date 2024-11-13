// import { gsap } from 'gsap'

// let animanionMenuOpen
// let animanionMenuClose

// const initanimationMenu = () => {
//   const isMobile = () => window.innerWidth < 768

//   if (isMobile()) {
//     const menu = document.querySelector('.header')
//     const items = menu.querySelectorAll('.nav__item')

//     gsap.set(items, { opacity: 0, y: '7rem' })

//     animanionMenuOpen = () => {
//       if (!isMobile()) return

//       const tlMenu = gsap.timeline()
//       tlMenu
//         .to(
//           items,
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.8,
//             ease: 'power2.out',
//             stagger: 0.1
//           },
//           0
//         )
//       tlMenu.play()
//     }

//     animanionMenuClose = () => {
//       if (!isMobile()) return

//       const tlMenuClose = gsap.timeline()
//       tlMenuClose
//         .to(
//           items,
//           {
//             opacity: 0,
//             y: '7rem',
//             duration: 0.8,
//             ease: 'power2.in',
//             stagger: -0.1
//           },
//           0
//         )
//       tlMenuClose.play()
//     }
//   }
// }

// export { initanimationMenu, animanionMenuOpen, animanionMenuClose }

import { gsap } from 'gsap'

let animanionMenuOpen
let animanionMenuClose

const initanimationMenu = () => {
  const isMobile = () => window.innerWidth < 768

  const menu = document.querySelector('.header')
  const items = menu.querySelectorAll('.nav__item')

  // Сброс стилей для мобильной версии
  const resetMobileStyles = () => {
    gsap.set(items, { opacity: 0, y: '7rem' })
  }

  // Инициализация анимаций
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
      // Для десктопа, меню всегда видно
      gsap.set(items, { opacity: 1, y: 0 })
    }
  }

  // Инициализация анимаций при загрузке
  initAnimations()

  // Слушаем событие изменения размера экрана
  window.addEventListener('resize', () => {
    initAnimations() // Переинициализация анимаций при изменении размера
  })
}

export { initanimationMenu, animanionMenuOpen, animanionMenuClose }
