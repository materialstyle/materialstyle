import Offcanvas from 'bootstrap/js/src/offcanvas'

export default Offcanvas

/**
 * Class definition
 */

class OffCanvasResponsive {
  constructor() {
    this._offCanvas = document.querySelector('.offcanvas')

    if (this._offCanvas) {
      this._offCanvasInstance = Offcanvas.getOrCreateInstance(this._offCanvas)

      this.addEventListeners()
    }
  }

  handleSidebarVisibility() {
    const onCanvas = window.getComputedStyle(this._offCanvas).getPropertyValue('--oncanvas').trim()

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

(() => new OffCanvasResponsive())()
