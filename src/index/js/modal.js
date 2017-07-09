export function initModal() {
  const modal = document.getElementById('login')

  window.onclick = function(event) {
    if (event.target == modal)
      window.location = '#close'
  }
}
