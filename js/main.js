let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
};

tab();

let tabInside = function () {
    let tabNavInside = document.querySelectorAll('.tab-nav-inside'),
        tabContentInside = document.querySelectorAll('.tab-inside'),
        tabNameInside;

    tabNavInside.forEach(item => {
        item.addEventListener('click', selectTabNavInside)
    });

    function selectTabNavInside() {
        tabNavInside.forEach(item => {
            item.classList.remove('is-active-nav-inside');
        });
        this.classList.add('is-active-nav-inside');
        tabNameInside = this.getAttribute('data-tab-name');
        selectTabContentInside(tabNameInside);
    }

    function selectTabContentInside(tabNameInside) {
        tabContentInside.forEach(item => {
            item.classList.contains(tabNameInside) ? item.classList.add('is-active-inside') : item.classList.remove('is-active-inside');
        })
    }

};

tabInside();
