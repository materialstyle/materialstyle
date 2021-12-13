/**
 * --------------------------------------------------------------------------
 * Material Style (v3.0.0-alpha1): utility.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const getColor = (color) => {
  const label = document.createElement('label')
  label.className = `text-${color}`
  label.style.display = 'none'
  document.querySelector('body').append(label)

  const style = getComputedStyle(label)
  color = style.color
  label.remove()

  return color
}

const getAccentColor = (element) => {
  let accent = element.className.match(/accent-[^\s]+/)
  let accentColor = '#2196F3'

  if (accent) {
    accent = accent[0].replace('accent-', '')
    accentColor = getColor(accent)
  }

  return accentColor
}

const getBaseColor = (element) => {
  let base = element.className.match(/base-[^\s]+/)
  let baseColor = '#757575'

  if (base) {
    base = base[0].replace('base-', '')
    baseColor = getColor(base)
  }

  return baseColor
}

const getPrimaryColor = (element) => {
  let primary = element.className.match(/primary-[^\s]+/)
  let primaryColor = '#2196F3'

  if (primary) {
    primary = primary[0].replace('primary-', '')
    primaryColor = getColor(primary)
  }

  return primaryColor
}

export {
  getColor,
  getAccentColor,
  getBaseColor,
  getPrimaryColor
}
