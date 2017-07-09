if(navigator.userAgent.match(/Edge\/12\./))
  document.getElementsByTagName('body')[0].on('mousewheel', () => {

    event.preventDefault()
    const wd = event.wheelDelta
    const csp = window.pageYOffset
    window.scrollTo(0, csp - wd)
  })
