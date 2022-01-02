import Offcanvas from 'bootstrap/js/src/offcanvas'
export default Offcanvas

/**
 * Constants
 */

const GRID_BREAKPOINTS = {
  'offcanvas-expand-xs': 0,
  'offcanvas-expand-sm': 576,
  'offcanvas-expand-md': 768,
  'offcanvas-expand-lg': 992,
  'offcanvas-expand-xl': 1200,
  'offcanvas-expand-xxl': 1400
}
const CLASS_ONCANVAS = 'oncanvas'
const CLASS_AUTO_HIDDEN = 'auto-hidden'

/**
 * Class definition
 */

class OffCanvasExpand {
  constructor() {
    this._offCanvasExpand = document.querySelector('.offcanvas[class*="offcanvas-expand"]')
    this._offCanvasPushedContent = document.querySelector('.offcanvas-pushed-content')

    if (this._offCanvasExpand && this._offCanvasPushedContent) {
      this._offCanvasExpand.dataset.bsScroll = true
      this._offCanvasExpand.dataset.bsBackdrop = true
      this._offCanvasExpandClass = this._offCanvasExpand.className.match(/offcanvas-expand-[^\s]+/)
      this._offCanvasInstance = Offcanvas.getOrCreateInstance(this._offCanvasExpand)
      this._autoHidden = false

      this.handleSidebarVisibility(true)
      this.addEventListeners()
    }
  }

  handleSidebarVisibility(show = false) {
    if (window.innerWidth < GRID_BREAKPOINTS[this._offCanvasExpandClass]) {
      this._offCanvasInstance.hide()
      this._offCanvasExpand.classList.remove(CLASS_ONCANVAS)
      this._offCanvasExpand.classList.add(CLASS_AUTO_HIDDEN)
      this._autoHidden = true
    } else if (show || this._autoHidden) {
      this._offCanvasInstance.show()
      this._offCanvasExpand.classList.add(CLASS_ONCANVAS)
      this._autoHidden = false
    }
  }

  addEventListeners() {
    window.addEventListener('resize', () => {
      this.handleSidebarVisibility()
    })
  }
}

(() => new OffCanvasExpand())()
