const clicksDisplay = document.getElementById("clicks");
const perDisplay = document.getElementById("perclick");
const clicker = document.getElementById("clicker");
const upgradeButton = document.getElementById("upgrade");
let clicks = 0;
let perClick = 1;
let upgradeCost = 10;

function update() {
    clicksDisplay.textContent = `Clicks: ${clicks}`;
    perDisplay.textContent = `Clicks per click: ${perClick}`;
    if (upgradeCost < clicks) {
        upgradeButton.disabled = false;
    } else {
        upgradeButton.disabled = true;
    }
}

function click() {
    clicks += perClick;
    update();
}

function upgrade() {
    clicks -= upgradeCost;
    upgradeCost = Math.round(upgradeCost *= 1.8);
    perClick = Math.round(perClick *= 1.5);
    update();
}
update();
clicker.addEventListener("click", click);
upgradeButton.addEventListener("click", upgrade);
