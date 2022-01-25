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

/**
 * Class definition
 */

class OffCanvasExpand {
  constructor() {
    this._offCanvasExpand = document.querySelector('.offcanvas[class*="offcanvas-expand"]')

    if (this._offCanvasExpand) {
      this._offCanvasExpandClass = this._offCanvasExpand.className.match(/offcanvas-expand-[^\s]+/)
      this._offCanvasInstance = Offcanvas.getOrCreateInstance(this._offCanvasExpand)

      this.addEventListeners()
    }
  }

  handleSidebarVisibility() {
    if (window.innerWidth < GRID_BREAKPOINTS[this._offCanvasExpandClass]) {
      this._offCanvasInstance.hide()
    } else {
      this._offCanvasInstance.show()
    }
  }

  addEventListeners() {
    window.addEventListener('resize', () => {
      this.handleSidebarVisibility()
    }, {
      passive: true
    })

    window.addEventListener('load', () => {
      this.handleSidebarVisibility()
    }, {
      passive: true
    })
  }
}

(() => new OffCanvasExpand())()
