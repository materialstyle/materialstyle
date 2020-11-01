/**
 * --------------------------------------------------------------------------
 * Material Style (v2.0.2): utility.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import $ from 'jquery'

const getColor = (color) => {
  const label = $(`<label class="text-${color}"></label>`).hide().appendTo('body')
  color = label.css('color')
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

const getPrimaryColor = (element) => {
  let primary = element.className.match(/primary-[^\s]+/)
  let primaryColor = '#212121'

  if (primary) {
    primary = primary[0].replace('primary-', '')
    primaryColor = getColor(primary)
  }

  return primaryColor
}

export {
  getColor,
  getAccentColor,
  getPrimaryColor
}
