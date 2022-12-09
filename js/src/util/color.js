/**
 * --------------------------------------------------------------------------
 * Material Style (v3.0.0): color.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const getColor = color => {
  const label = document.createElement('label')
  label.className = `text-${color}`
  label.style.display = 'none'
  document.querySelector('body').append(label)

  const style = getComputedStyle(label)
  color = style.color
  label.remove()

  return color
}

const getBaseColor = element => {
  let base = element.className.match(/base-\S+/)
  let baseColor = '#757575'

  if (element.classList.contains('form-floating-dark')) {
    baseColor = '#fff'
  }

  if (base) {
    base = base[0].replace('base-', '')
    baseColor = getColor(base)
  }

  return baseColor
}

const getPrimaryColor = element => {
  let primary = element.className.match(/primary-\S+/)
  let primaryColor = '#0d6efd'

  if (element.classList.contains('form-floating-dark')) {
    primaryColor = '#0dcaf0'
  }

  if (primary) {
    primary = primary[0].replace('primary-', '')
    primaryColor = getColor(primary)
  }

  return primaryColor
}

export {
  getColor,
  getBaseColor,
  getPrimaryColor
}
