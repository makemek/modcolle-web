if(navigator.userAgent.match(/Edge\/12\./)) {
    $('body').on("mousewheel", function () {

        event.preventDefault();
        const wd = event.wheelDelta;
        const csp = window.pageYOffset;
        window.scrollTo(0, csp - wd);
    });
}
