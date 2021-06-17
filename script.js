document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

function attMap() {
    var hokages = [document.querySelector("#hokage1"), document.querySelector("#hokage2"), document.querySelector("#hokage3"), document.querySelector("#hokage4"), document.querySelector("#hokage5"), document.querySelector("#hokage6"), document.querySelector("#hokage7")],
        coordenadasHokage = [7],
        altura = window.innerHeight,
        largura = window.innerWidth,
        x1 = 0,
        x2 = 0,
        y = 0,
        mult = 0;
    y = altura * 0.20;
    for (var i = 0; i < 7; i++) {
        mult += 1;
        x1 = x2;
        x2 = largura / 100;
        x2 = x2 * (14.28 * mult);
        coordenadasHokage[i] = x1 + "," + y + "," + x2 + "," + altura;
        hokages[i].setAttribute("coords", coordenadasHokage[i]);
    }
};
window.addEventListener('resize', function () {
    attMap();
});
attMap();