// IE11 transform fix
Modernizr.addTest('preserve3d', function () {
    return Modernizr.testAllProps('transformStyle', 'preserve-3d');
});
