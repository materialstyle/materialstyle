import Offcanvas from 'bootstrap/js/src/offcanvas'

export default Offcanvas

/**
 * Class definition
 */

class OffCanvasExpand {
  constructor() {
    this._offCanvasExpand = document.querySelector('.offcanvas[class*="offcanvas-expand"]')

    if (this._offCanvasExpand) {
      this._offCanvasInstance = Offcanvas.getOrCreateInstance(this._offCanvasExpand)

      this.addEventListeners()
    }
  }

  handleSidebarVisibility() {
    const onCanvas = window.getComputedStyle(this._offCanvasExpand).getPropertyValue('--oncanvas').trim()

    if (!this._offCanvasInstance._isShown && onCanvas === 'true') {
      this._offCanvasInstance.show()
    } else if (this._offCanvasInstance._isShown && onCanvas === 'false') {
      this._offCanvasInstance.hide()
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
