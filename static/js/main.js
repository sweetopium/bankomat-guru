function headerSearchHandler() {
    const initSearch = document.querySelector("#initSearch");
    initSearch.onclick = function () {
        const linksBlock = document.querySelector('.links--list');
        const searchBlock = document.querySelector('.search--form');
        linksBlock.classList.add("links--list__hidden");
        linksBlock.classList.remove('collapse');
        linksBlock.classList.remove('navbar-collapse');
        searchBlock.classList.add('collapse');
        searchBlock.classList.add('navbar-collapse');
        searchBlock.classList.remove("search--form__hidden")
    }
}

function handleMapTabs() {
    const tabSelectors = document.querySelectorAll('.tab__selector');
    tabSelectors.forEach((btn, index) => {
        btn.onclick = function () {
            if (btn.id === 'onMap') {
                console.log(index)
                btn.classList.remove('btn-outline-blue');
                btn.classList.add('btn-blue');
                tabSelectors[index + 1].classList.remove('btn-blue');
                tabSelectors[index + 1].classList.add('btn-outline-blue');
                let officesTabMap = document.querySelector('.offices-tab--map');
                officesTabMap.classList.remove('inactive__tab');
                let officesTabList = document.querySelector('.offices-tab--list');
                officesTabList.classList.add('inactive__tab')
            } else {
                btn.classList.remove('btn-outline-blue');
                btn.classList.add('btn-blue');
                tabSelectors[0].classList.remove('btn-blue');
                tabSelectors[0].classList.add('btn-outline-blue');
                let officesTabMap = document.querySelector('.offices-tab--map');
                officesTabMap.classList.add('inactive__tab');
                let officesTabList = document.querySelector('.offices-tab--list');
                officesTabList.classList.remove('inactive__tab')
            }
        }
    });

}

function handleProductsSlider() {
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    const bankProductCards = document.querySelectorAll(".bank--product-card")
    let currentCard = 0;
    const bankProductCardsLen = bankProductCards.length;
    arrowLeft.onclick = function () {
        if (currentCard > 0) {
            bankProductCards.forEach((card, index) => {
                card.classList.remove("active--card");
                card.classList.add("inactive--card");
            });
            currentCard--;
            bankProductCards[currentCard].classList.remove("inactive--card");
            bankProductCards[currentCard].classList.add("active--card")
        }
    };
    arrowRight.onclick = function () {
        if (bankProductCardsLen > currentCard + 1) {
            bankProductCards[currentCard].classList.add("inactive--card");
            bankProductCards[currentCard].classList.remove("active--card")
            currentCard++;
            bankProductCards[currentCard].classList.remove("inactive--card");
            bankProductCards[currentCard].classList.add("active--card")
        }
    };
}

function handleServiceTabs() {
    const tabSwitchers = document.querySelectorAll('.tab--switcher');
    const tabsList = document.querySelectorAll('.services--tab');
    tabSwitchers.forEach((btn, index) => {
        btn.onclick = function () {
            tabSwitchers.forEach(b => b.classList.remove("active-item"))
            tabsList.forEach((tab) => {
                tab.classList.remove("active--tab");
                tab.classList.add("inactive--tab");
                if (tab.classList.contains(btn.id)) {
                    tab.classList.remove("inactive--tab");
                    tab.classList.add("active--tab");
                    btn.classList.add("active-item");
                    console.log(tab)
                }
            });
        }
    });
}

let toClose = false;

function toggle(e) {
    e.stopPropagation();
    let btn = this;
    btn.classList.remove("text-gray");
    btn.classList.add("text-blue");
    let menu = btn.nextSibling;

    while (menu && menu.nodeType !== 1) {
        menu = menu.nextSibling
    }
    if (!menu) return;
    if (menu.style.display !== 'block') {
        menu.style.display = 'block';
        if (toClose) toClose.style.display = "none";
        toClose = menu;
    } else {
        menu.style.display = 'none';
        toClose = false;
        btn.classList.remove("text-blue");
        btn.classList.add("text-gray");
    }

}

function closeAll() {
    toClose.style.display = 'none';
    document.querySelectorAll(".btn-buy-list").forEach(function (btn) {
        btn.classList.remove("text-blue");
        btn.classList.add("text-gray");
    })
}

window.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".btn-buy-list").forEach(function (btn) {
        btn.addEventListener("click", toggle, true);
    });

    const navbarToggler = document.querySelector('.navbar-toggler');
    let navbarOpened = false;
    navbarToggler.onclick = function () {
        const linksList = document.querySelector('.links--list__mobile');

        if (!navbarOpened) {
            linksList.classList.remove('is__hidden');
            navbarOpened = true
        } else {
            linksList.classList.add('is__hidden');
            navbarOpened = false
        }
    };


    handleProductsSlider();
    handleServiceTabs();
    handleMapTabs();
    headerSearchHandler();
});

window.onclick = function (event) {
    if (toClose) {
        closeAll.call(event.target);
    }
};
