export function main() {
  startKancolle('/mainD2.swf')
}

function extractUrl() {

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
  return flash
}
