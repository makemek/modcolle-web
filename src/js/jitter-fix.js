if(navigator.userAgent.match(/Edge\/12\./)) {
    $('body').on("mousewheel", function () {

        event.preventDefault();
        const wd = event.wheelDelta;
        const csp = window.pageYOffset;
        window.scrollTo(0, csp - wd);
    });
}

const modal = document.getElementById('login');
window.onclick = function(event) {
    if (event.target == modal) {
        window.location = "#close"
    }
}
