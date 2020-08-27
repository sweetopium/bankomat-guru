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

      console.log('navbar')
    };

    headerSearchHandler();
});

window.onclick = function (event) {
    if (toClose) {
        closeAll.call(event.target);
    }
};
