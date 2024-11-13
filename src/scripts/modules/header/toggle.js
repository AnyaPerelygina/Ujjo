import { initanimationMenu, animanionMenuClose, animanionMenuOpen } from './animation-menu'

const addToggleMenu = () => {
  const OPENED_CLASS = 'is-opened'
  const LINK_CLASS = '.nav__link'
  const BUTTON_CLASS = '.header__button'
  const root = document.querySelector('.header')
  const toggle = root.querySelector('.toggle')
  const nav = root.querySelector('.nav__list')

  const onDocumentKeydown = (evt) => {
    return evt.key === 'Escape' ? closeMenu() : null
  }

  const onLinkClick = (evt) => {
    return evt.target.matches(LINK_CLASS) || evt.target.matches(BUTTON_CLASS) ? closeMenu() : null
  }

  const isMenu = (evt) => {
    return (evt.target.closest('.header') && evt.target.closest('.toggle') || evt.target.closest('.header__subwrapper')) ? evt.preventDefault() : closeMenu()
  }

  const openMenu = () => {
    root.classList.add(OPENED_CLASS)
    toggle.classList.add(OPENED_CLASS)
    nav.classList.add(OPENED_CLASS)
    document.addEventListener('keydown', onDocumentKeydown)
    nav.addEventListener('click', onLinkClick)
    document.addEventListener('click', isMenu)
    document.body.style.overflow = 'hidden'
    window.scrollLock.disableScrolling()
    document.addEventListener('click', onDocumentOutside)

    initanimationMenu()

    setTimeout(() => {
      animanionMenuOpen()
    }, 300)
  }

  const closeMenu = () => {
    animanionMenuClose()
    setTimeout(() => {
      root.classList.remove(OPENED_CLASS)
      toggle.classList.remove(OPENED_CLASS)
      nav.classList.remove(OPENED_CLASS)
      document.removeEventListener('keydown', onDocumentKeydown)
      nav.removeEventListener('click', onLinkClick)
      document.removeEventListener('click', isMenu)
      document.body.style.overflow = ''
      window.scrollLock.enableScrolling()
      document.removeEventListener('click', onDocumentOutside)
    }, 1000)
  }

  const onDocumentOutside = (evt) => {
    if (
      (evt.target !== toggle && !toggle.contains(evt.target)) &&
      (evt.target !== nav && !nav.contains(evt.target))
    ) {
      closeMenu()
    }
  }

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      closeMenu()
    }
  }

  window.addEventListener('resize', handleResize)

  toggle.addEventListener('click', () => {
    return !toggle.classList.contains(OPENED_CLASS) ? openMenu() : closeMenu()
  })
}

export { addToggleMenu }
