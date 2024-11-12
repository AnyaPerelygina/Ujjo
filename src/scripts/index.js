import './utils/scroll-lock'
import { mobileVhFix } from './utils/mobile-vh-fix'
import { addToggleMenu } from './modules/header/toggle'

mobileVhFix()
addToggleMenu()
document.addEventListener(
  'DOMContentLoaded',
  () => {
    // тут пусто
  },
  true
)
