//what do we want to do?
//1. Access the tab list
    // change the tabindex of the current tab to -1
    // if the right key is pushed, move to the next tab on the right
    // if the left key is pushed, move to the next tab on the left
//2. get the pictures


const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');



//keybourd navigation
//keydown implies any key is pressed and we want an event to happen
tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
});

let tabFocus = 0;
function changeTabFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;

// change the tabindex of the current tab to -1
    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
// if the right key is pushed, move to the next tab on the right
    if (e.keyCode === keydownRight) {
        tabFocus++;
        if (tabFocus >= tabs.length) {
            tabFocus = 0;
        }
    //tabFocus is adding 1 to the above "let tabFocus=0"
    }
// if the left key is pushed, move to the next tab on the left
}    else if (e.keyCode === keydownLeft) {
        tabFocus--;
        if (tabFocus < 0) {
           tabFocus = tabs.length - 1;
        }
}
//tabFocus is subtracting 1 to the above "let tabFocus=0"

tabs[tabFocus].setAttribute("tabindex", 0);
tabs[tabFocus].focus();
}

function changeTabPanel(e) {
    const targetTab = e.target;
    //aria-control function to rotate mini menu info once tab selected
    const targetPanel = targetTab.getAttribute("aria-controls");
    //data-image function to rotate images once tab selected
    const targetImage = targetTab.getAttribute("data-image");

    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false);

    targetTab.setAttribute("aria-selected", true);

    hideContent(mainContainer, '[role="tabpanel"]');
    showContent(mainContainer, [`#${targetPanel}`]);
    
    hideContent(mainContainer, 'picture')
    showContent(mainContainer, [`#${targetImage}`])
}

function hideContent(parent, content) {
    parent
        .querySelectorAll(content)
        .forEach((item) => item.setAttribute("hidden", true));
}

function showContent(parent, content) {
     parent.querySelector(content).removeAttribute('hidden');
}
    



//mainContainer
//.querySelectorAll('[role="tabpanel"]')
//.forEach((panel) => panel.setAttribute("hidden", true));

//mainContainer
//.querySelector([`#${targetPanel}`])
//.removeAttribute('hidden');

//to hide or show the pic when menu is selected
//mainContainer
//.querySelectorAll('picture')
//.forEach((picture) => picture.setAttribute("hidden", true));

//mainContainer
//.querySelector([`#${targetImage}`])
//.removeAttribute('hidden');


    