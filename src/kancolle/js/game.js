const URL = require('url-parse')

export function main() {
  const gameUrl = extractGameUrlFromCurrentUrl('kc')
  cleanUrl()

  if(!gameUrl)
    return window.location.replace('/')

  startKancolle(gameUrl)
}

function extractGameUrlFromCurrentUrl(param) {
  const {query} = getBrowserUrl()
  return query[param]
}

function cleanUrl() {
  const url = getBrowserUrl()
  url.set('query', '')
  window.history.replaceState('kancolle', 'swf', url.toString())
}

function startKancolle(url) {
  const swfHolder = document.getElementById('swf-holder')
  const game = createFlashElement(url)

  swfHolder.appendChild(game)
  return swfHolder
}

function createFlashElement(source) {
  const flash = document.createElement('object')
  flash.setAttribute('type', 'application/x-shockwave-flash')
  flash.setAttribute('data', source)
  flash.setAttribute('id', 'kancolle')
  return flash
}

function getBrowserUrl() {
  return new URL(window.location.href, true)
}
