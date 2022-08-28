/* global $, mdc, materialstyle, anchors */

function saveOffcanvasScrollPosition() {
  const offcanvas = document.querySelector('#site-offcanvas .offcanvas-body')

  if (offcanvas) {
    const offcanvasHeight = offcanvas.clientHeight
    const offcanvasActiveLink = document.querySelector('.active')
    const offcanvasActiveLinkTop = offcanvasActiveLink.offsetTop
    const offcanvasActiveLinkHeight = offcanvasActiveLink.clientHeight
    const viewportTop = offcanvasActiveLinkTop
    const viewportBottom = viewportTop - offcanvasHeight + offcanvasActiveLinkHeight

    if (offcanvas.scrollTop > viewportTop || offcanvas.scrollTop < viewportBottom) {
      offcanvas.scrollTop = viewportTop - (offcanvasHeight / 2) + (offcanvasActiveLinkHeight / 2)
    }
  }
}

function lazyLoadImages() {
  let lazyImages = Array.prototype.slice.call(document.querySelectorAll('img.lazy'))
  let active = false

  const lazyLoad = function () {
    if (active === false) {
      active = true

      setTimeout(() => {
        for (const lazyImage of lazyImages) {
          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== 'none') {
            lazyImage.src = lazyImage.dataset.src
            lazyImage.srcset = lazyImage.dataset.srcset
            lazyImage.classList.remove('lazy')

            lazyImages = lazyImages.filter(image => {
              return image !== lazyImage
            })

            if (lazyImages.length === 0) {
              document.removeEventListener('scroll', lazyLoad)
              window.removeEventListener('resize', lazyLoad)
              window.removeEventListener('orientationchange', lazyLoad)
            }
          }
        }

        active = false
      }, 200)
    }
  }

  lazyLoad()
  document.addEventListener('scroll', lazyLoad)
  window.addEventListener('resize', lazyLoad)
  window.addEventListener('orientationchange', lazyLoad)
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $('#top-btn').css('display', 'inline-block')
  } else {
    $('#top-btn').css('display', 'none')
  }
}

function getHighlightedText() {
  let text = ''
  if (window.getSelection) {
    text = window.getSelection().toString()
  } else if (document.selection && document.selection.type !== 'Control') {
    text = document.selection.createRange().text
  }

  return text
}

function initComponents() {
  // TextField
  const textFieldList = Array.prototype.slice.call(document.querySelectorAll('.form-control'))
  textFieldList.map(textField => {
    return new materialstyle.TextField(textField)
  })

  // SelectField
  const selectList = Array.prototype.slice.call(document.querySelectorAll('.form-select'))
  selectList.map(select => {
    return new materialstyle.SelectField(select)
  })

  // Shape
  const shapes = Array.prototype.slice.call(document.querySelectorAll('.m-shape-container'))
  shapes.map(s => {
    return new materialstyle.Shape(s)
  })

  // Initialize Ripple
  const rippleSurface = Array.prototype.slice.call(document.querySelectorAll('.ripple-surface'))
  rippleSurface.map(s => {
    return new mdc.ripple.MDCRipple(s)
  })

  const tabs = Array.prototype.slice.call(document.querySelectorAll('.nav-tabs'))
  tabs.map(tab => {
    return new materialstyle.MaterialTab(tab)
  })

  // Popover
  const popoverTriggerList = Array.prototype.slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  popoverTriggerList.map(popoverTriggerEl => {
    return new materialstyle.Popover(popoverTriggerEl)
  })

  // Progress Bar
  const rainbowList = Array.prototype.slice.call(document.querySelectorAll('.progress-bar-rainbow'))
  rainbowList.map(rainbow => {
    return new materialstyle.Rainbow(rainbow)
  })

  // Toast
  const toastTrigger = document.getElementById('show-toast')
  const toastLiveExample = document.getElementById('live-toast')
  if (toastTrigger && toastLiveExample) {
    toastTrigger.addEventListener('click', () => {
      const toast = new materialstyle.Toast(toastLiveExample)

      toast.show()
    })
  }

  // Toast
  const stackedToastTrigger = document.getElementById('show-stacked-toasts')
  const stackedToast1 = document.getElementById('stacked-toast-1')
  const stackedToast2 = document.getElementById('stacked-toast-2')
  if (stackedToastTrigger && stackedToast1 && stackedToast2) {
    stackedToastTrigger.addEventListener('click', () => {
      const toast1 = new materialstyle.Toast(stackedToast1)
      const toast2 = new materialstyle.Toast(stackedToast2)

      toast1.show()

      setTimeout(() => {
        toast2.show()
      }, 1000)
    })
  }

  // Tooltip
  const tooltipTriggerList = Array.prototype.slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.map(tooltipTriggerEl => {
    return new materialstyle.Tooltip(tooltipTriggerEl)
  })

  // Modal
  const myModal = document.getElementById('myModal2')
  if (myModal) {
    myModal.addEventListener('shown.bs.modal', function () {
      // Redraw Text Field
      const textFields = this.querySelectorAll('.form-control')
      for (const [, value] of Object.entries(textFields)) {
        const textFieldInstance = materialstyle.TextField.getOrCreateInstance(value)
        textFieldInstance.redraw()
      }

      // Redraw Select Field
      const selectFields = document.querySelectorAll('.form-select')
      for (const [, value] of Object.entries(selectFields)) {
        const selectFieldInstance = materialstyle.SelectField.getOrCreateInstance(value)
        selectFieldInstance.redraw()
      }

      // Redraw Tabs
      const tabs = this.querySelectorAll('.nav-tabs')
      for (const [, value] of Object.entries(tabs)) {
        const tabInstance = materialstyle.MaterialTab.getOrCreateInstance(value)
        tabInstance.redraw()
      }
    })
  }
}

function populateShadows() {
  const shadowsContainer = document.getElementById('shadows-container')

  if (shadowsContainer) {
    for (let i = 1; i <= 24; i++) {
      const shadowBox = document.createElement('div')
      shadowBox.className = 'shadows shadow-' + i + 'dp'
      shadowBox.innerHTML = 'class="shadow-' + i + 'dp"'
      shadowsContainer.append(shadowBox)
    }
  }
}

function populateColors() {
  const colorContainer = document.getElementById('defaultColorOptions')
  if (colorContainer) {
    const bgToColorMap = {
      'red,danger': '#dc3545,white',
      pink: '#d63384,white',
      purple: '#6f42c1,white',
      indigo: '#6610f2,white',
      'blue,primary': '#0d6efd,white',
      'cyan,info': '#0dcaf0,black',
      teal: '#20c997,black',
      'green,success': '#198754,white',
      'yellow,warning': '#ffc107,black',
      orange: '#fd7e14,black',
      'gray,secondary': '#6c757d,white',
      light: '#f8f9fa,black',
      dark: '#212529,white',
      white: '#fff,black',
      black: '#000,white'
    }

    for (const [key, value] of Object.entries(bgToColorMap)) {
      const colorClasses = key.split(',')
      const colors = value.split(',')

      const colorName = document.createElement('span')
      colorName.innerHTML = colorClasses.join(' | ')

      const color = document.createElement('span')
      color.className = 'user-select-all'
      color.innerHTML = colors[0]

      const colorBox = document.createElement('div')
      colorBox.className = 'color-box bg-' + colorClasses[0] + ' text-' + colors[1]
      colorBox.append(colorName)
      colorBox.append(color)

      colorContainer.append(colorBox)
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  anchors.add('h2:not(.accordion-header):not(.badge-example-headings h2), h3:not(.badge-example-headings h3), h4:not(.badge-example-headings h4):not(.card h4)')

  // Hide AdSpace
  const ad = document.querySelector('.adspace')
  if (ad) {
    ad.innerHTML = ''
    ad.style.display = 'none'
  }

  // Hide / Show "Scroll to top" button
  scrollFunction()
  window.addEventListener('scroll', () => {
    scrollFunction()
  }, {
    passive: true
  })

  lazyLoadImages()
  saveOffcanvasScrollPosition()

  initComponents()

  populateColors()
  populateShadows()
})

$(() => {
  $('.highlight').append('<span class="copy-btn p-1"><b>click</b> or <b>highlight</b> the code to copy</span>')

  $('.highlight').on('click', function () {
    const clip = $('<textarea>')
    $('body').append(clip)

    const highlightedText = getHighlightedText()

    if (highlightedText.length) {
      clip.val(highlightedText.replace(/\u00A0/g, ' ')).select()
    } else {
      clip.val($(this).find('code').find('br').prepend('\r\n').end().text().replace(/\u00A0/g, ' ')).select()
    }

    document.execCommand('copy')
    $(this).find('.copy-btn').html('<b>copied</b>')

    $(this).find('code').find('br').text('')

    clip.remove()
  })

  $('.highlight').on('mouseenter', function () {
    $(this).find('.copy-btn').html('<b>click</b> or <b>highlight</b> the code to copy')
  })

  $('#top-btn').on('click', () => {
    $('html, body').animate({ scrollTop: 0 }, 300, 'swing')
  })
})
