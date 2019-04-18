function menuClick() {
    $('.menu').on('click', function(event) {
        $('nav').html(`
            <div class="menuDrop">
                <p>HOME</p>
                <p>PROJECTS</p>
                <p>ABOUT ME</p>
                <p>GET IN TOUCH</p>
            </div>
        `).hide().fadeIn(500);
        $('.tagBox').html(`<div class="menuDrop">
    </div>`);
    });
};

function menuReturn() {
    $('nav').on('click', '.menuDrop', function(event) {
        $('.tagBox').html(`
            <p class="introTag"><img class="tent" src="https://lh3.googleusercontent.com/H4ZZKZ8DGz-ZcTD8MN3D8X6PnCDs38bkj_G86MlfuI2mAbGpoD-jCLJ_ywj2faQJjfpMJkMjZkxIQQzaoNFiS7xbZB2PKusoi3dSL9dz62Bzyf78hqQMoT6Giy0Uj-7qrgnzqToMEt28B1OXfPy7O4pVIl-Pw9vqEZtfApBaJQ_XBaHL4s1lUGLqSrSSCagumNMu6wh-p1AS-zxEF5bDTrMXOr3ZWuwXZ0-82gVUrsLzEc61vtQGqpbh7z0WJQtakU9emUadiU8G8TgpYifo-9r2SG2r695-1wgz52qh4734hcZZ_7MCzbczsZWhWkacg8DJanfp5XLljj4XNHF5abXu3UHwUeXmC3kgcbNnM6-DbmyVlifQrYR7lU3zw6EQe5O6fDt7C4NDlCasKB2oZ1zMQEYAciUA7I_mp1JDxQ6HvLWutxtYjtGBMac6P3Nu32kHPKiLhGTPaHIbS9HlcpyAB_x0AjuBYMdAESNcDZpFa-JpDxBq6by_UahXMWLfQUskVZyubzanSrJww7OA85-3DpHh5lv6GoXk2jidekKvHcB83VNZEJrAAJBEy9-Pz334PHAEsVyZY989xWbottEwlmbaLpvvOGHfgbXZxIhBo2ElPIESsb_2kmck7gsd0CXm_7ZH6IrKj_YbrPxWVhJHPFLwpKK7WXTmVJNYN38RGTti31FBoG-UsUEYToo1dewRWDy90Ii7lJq9HaoYP5wf=s512-no" alt="tent">Hi, my name is Zach Gwirtz. I design websites & forward thinking applications. My inspiration lies with in the Pacific Northwest<br>
            <br>Life is full of problems, I am here to help you solve them</p>`).hide().fadeIn(500);
    });
}; 

function runPortfolio() {
    menuClick();
    menuReturn();
}

$(runPortfolio);