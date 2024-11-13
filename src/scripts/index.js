import './utils/scroll-lock'
import { mobileVhFix } from './utils/mobile-vh-fix'
import { addToggleMenu } from './modules/header/toggle'
import { initanimationMenu } from './modules/header/animation-menu'

mobileVhFix()
addToggleMenu()
document.addEventListener(
  'DOMContentLoaded',
  () => {
    initanimationMenu()
  },
  true
)
