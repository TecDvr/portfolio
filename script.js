function menuClick() {
    $('.menu').on('click', function(event) {
        $('.menu').html();
        console.log('working');
    });
};

function runPortfolio() {
    menuClick();
}

$(runPortfolio);