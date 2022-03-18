const body = document.querySelector('body');
const body1 = document.getElementById('body');
const container = document.getElementById('container');

window.onload = () => {  
    // adjust the nav (modified adjustNav())
    if (window.innerWidth < 1000) {
        nav.removeChild(navLeftReplace);
    }
    else if (window.innerWidth >= 1000) {
        nav.removeChild(navLeft);
    }
    let scrollTop =  document.documentElement.scrollTop;
    document.documentElement.scrollTop = document.body.scrollTop = 0;

    adjustNav2()
    // fix onload bug with nav 
    nav.style.opacity = 1;
   
    // default page position to 0

    // default message board to closed
    closeMessageBoard()

    // default footer options to closed
    footerTop.removeChild(footerBtn1Display);
    footerTop.removeChild(footerBtn2Display);
    footerTop.removeChild(footerBtn3Display);
    footerTop.removeChild(footerBtn4Display);
}

// when page size: adjusts
window.addEventListener("resize", () => {
    adjustNav2()
    adjustNav()
});

// scroll based functions
const nav = document.getElementById('nav');
const dropdown = document.getElementById('dropdown')
const homepage = document.getElementById('homepage');
const messageIcon = document.getElementById('message-icon');
const dropdownHeight = dropdown.offsetHeight

window.addEventListener("scroll", function() {
    let value = window.scrollY; 
    if (value > 34) {
        nav.style.position = "fixed";

        dropdown.style.top = "80px";
        dropdown.style.position = "fixed";
    }   
    else {
        nav.style.position = "relative";
        nav.style.top = "0px";
        dropdown.style.top = "0px";
        dropdown.style.position = "relative";
    }

    if (value > 200) {
        messageIcon.style.opacity = 1;
    }
})


// adjust the nav based on screen width
const navLogo = document.getElementById('nav-logo')
const navLeft = document.getElementById('nav-left');
const navLeftReplace = document.getElementById('nav-left-replace');
const navRight = document.getElementById('nav-right')
const accountIcon = document.getElementById('account-icon')
const searchIcon = document.getElementById('search-icon')
function adjustNav() {
    if (window.innerWidth < 1000) {
        nav.insertBefore(navLeft, nav.firstChild);
        navLeftReplace.remove()
    } else if (window.innerWidth >= 1000) {
        navLeft.remove()
        nav.insertBefore(navLeftReplace, nav.childNodes[3]);
    }
}

function adjustNav2() {
    if (window.innerWidth >= 1000) {
        navRight.style.width = "185px"
        navRight.insertBefore(accountIcon, navRight.firstChild);
        navRight.insertBefore(searchIcon, navRight.firstChild);

        navLogo.classList = "nav-logo"
    } else {
        navRight.style.width = "60px"
        accountIcon.remove()
        searchIcon.remove()

        navLogo.classList = "nav-logo nav-logo-before"
    }
}

// Nav search button 
let searchCount = 0
const searchX = document.getElementById('search-x')
const searchMag = document.getElementById('search-mag')
const navLeftReplaceLine = document.getElementById('nav-left-replace-line')
const navLeftReplaceP = document.getElementById('nav-left-replace-p')
const navLeftReplaceInput = document.getElementById('nav-left-replace-input')

function determineSearchPath() {
    if (navLeftReplaceText === false) {
        showSearchButton()
        // If they press enter, send to search page
        navLeftReplaceInput.onkeypress = function() {
            document.addEventListener("keyup", function(event) {
                if (event.keyCode === 13) {
                    window.location.href='index.html';
                }
            });
        }
    } else {
        // pressed search with text = true, so send to search page
        window.location.href='index.html';
    }
}

function showSearchButton() {
    searchCount += 1
    if (searchCount % 2 === 1) {
        searchMag.style.opacity = 0
        searchX.style.opacity = 1
        
        navLeftReplaceP.style.opacity = 0
        navLeftReplaceP.style.pointerEvents = 'none'

        navLeftReplaceInput.style.opacity = 1
        navLeftReplaceInput.style.pointerEvents = 'all'

        navLeftReplaceLine.style.opacity = 1;
        navLeftReplaceInput.focus()
    } else {
        searchMag.style.opacity = 1
        searchX.style.opacity = 0

        navLeftReplaceP.style.opacity = 1
        navLeftReplaceP.style.pointerEvents = 'all'

        navLeftReplaceInput.style.opacity = 0
        navLeftReplaceInput.style.pointerEvents = 'none'

        navLeftReplaceLine.style.opacity = 0;
    }
}

let navLeftReplaceText = false
function navLeftReplaceInputSwitchIcon() {
    if (navLeftReplaceInput.value != '') {
        searchMag.style.opacity = 1
        searchX.style.opacity = 0

        navLeftReplaceText = true   
    } else {
        searchMag.style.opacity = 0
        searchX.style.opacity = 1

        navLeftReplaceText = false
    }
}


// Sidebar search button
let searchCount_S = 0
const searchX_S = document.getElementById('search-x-S')
const searchMag_S = document.getElementById('search-mag-S')
const sidebarSearchLine = document.getElementById('sidebar-search-hr')
const sidebarSearchInput = document.getElementById('sidebar-search-input')

const SidebarSearchInput = document.getElementById('sidebar-search-input')
function determineSearchPath_S() {
    if (SidebarSearchText === false) {
        showSearchButton_S()
        // If they press enter, send to search page
        SidebarSearchInput.onkeypress = function() {
            document.addEventListener("keyup", function(event) {
                if (event.keyCode === 13) {
                    window.location.href='index.html';
                }
            });
        }
    } else {
        // pressed search with text = true, so send to search page
        window.location.href='index.html';
    }
}

function showSearchButton_S() {
    searchCount_S += 1
    if (searchCount_S % 2 === 1) {
        searchMag_S.style.opacity = 0
        searchX_S.style.opacity = 1

        sidebarSearchInput.style.opacity = 1
        sidebarSearchInput.style.pointerEvents = 'all'

        sidebarSearchLine.style.opacity = 1;
        sidebarSearchInput.focus()
    } else {
        searchMag_S.style.opacity = 1
        searchX_S.style.opacity = 0

        sidebarSearchInput.style.opacity = 0
        sidebarSearchInput.style.pointerEvents = 'none'

        sidebarSearchLine.style.opacity = 0;
    }
}

let SidebarSearchText = false
function navLeftReplaceInputSwitchIcon_S() {
    if (SidebarSearchInput.value != '') {
        searchMag_S.style.opacity = 1
        searchX_S.style.opacity = 0

        SidebarSearchText = true   
    } else {
        searchMag_S.style.opacity = 0
        searchX_S.style.opacity = 1

        SidebarSearchText = false
    }
}


// drop down
const dropdownSelect1 = document.querySelectorAll('.dropdown1')
const dropdownSelect2 = document.querySelectorAll('.dropdown2')
const dropdownSelect3 = document.querySelectorAll('.dropdown3')
const dropdownSelect4 = document.querySelectorAll('.dropdown4')
const dropdownSelect5 = document.querySelectorAll('.dropdown5')
const dropdownSelect6 = document.querySelectorAll('.dropdown6')


dropdownSelect1.forEach(item => {
    item.onmouseover = function() {displayDropdown(item)}
    item.onmouseleave = function() {hideDropdown(item)}
})

dropdownSelect2.forEach(item => {
    item.onmouseover = function() {displayDropdown(item)}
    item.onmouseleave = function() {hideDropdown(item)}
})

dropdownSelect3.forEach(item => {
    item.onmouseover = function() {displayDropdown(item)}
    item.onmouseleave = function() {hideDropdown(item)}
})

dropdownSelect4.forEach(item => {
    item.onmouseover = function() {displayDropdown(item)}
    item.onmouseleave = function() {hideDropdown(item)}
})

dropdownSelect5.forEach(item => {
    item.onmouseover = function() {displayDropdown(item)}
    item.onmouseleave = function() {hideDropdown(item)}
})

dropdownSelect6.forEach(item => {
    item.onmouseover = function() {displayDropdown(item)}
    item.onmouseleave = function() {hideDropdown(item)}
})

function displayDropdown(item) {
    for (i=1; i<7; i++) { 
        if (item.id === "nav-center-a" + i || item.id === "dropdown-item" + i) {
            dropdownItem = document.getElementById('dropdown-item' + i)
            navAItem = document.getElementById('nav-center-a' + i)
            navPItem = document.getElementById('nav-center-p' + i)

            dropdownItem.style.display = "flex"
            dropdownItem.style.borderBottom = "1px solid rgb(45, 45, 45, 0.3)"
            navAItem.style.paddingBottom = "35px"
            navPItem.style.borderBottom = "2px solid rgb(45, 45, 45, 0.6)"
            
}}}


function hideDropdown(item) {
    for (i=1; i<7; i++) {
        if (item.id === "nav-center-a" + i || item.id === "dropdown-item" + i) {
            dropdownItem = document.getElementById('dropdown-item' + i)
            navAItem = document.getElementById('nav-center-a' + i)
            navPItem = document.getElementById('nav-center-p' + i)
        
            dropdownItem.style.display = "none"
            dropdownItem.style.borderBottom = "none"
            navAItem.style.paddingBottom = "0px"
            navPItem.style.borderBottom = "none"
            
}}}



// sidebar
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const sideBarItems = document.getElementById('sidebar-items');
function openSideBar() {
    body.style.overflowY = "hidden";
    sidebar.style.pointerEvents = "all"
    sidebar.style.transform = "translateX(0%)"
    sidebar.style.opacity = 1;
    setTimeout(function(){
        sidebar.style.transition = "none";
    }, 200);
}
function closeSideBar() {
    sidebar.style.transition = "0.2s"
    body.style.overflowY = "visible";
    sidebar.style.pointerEvents = "none";
    sidebar.style.transform = "translateX(-100%)"
    sidebar.style.opacity = 0;
}


// HOME PAGE


// carousel 
let lastRenderTime = 0
const seconds = 1 //moves one times per second 
function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / seconds) return
    everyFiveSeconds()
    lastRenderTime = currentTime
}
window.requestAnimationFrame(main)

timeKeeper = 0
function everyFiveSeconds() {
    timeKeeper += 1
    if (timeKeeper % 4 === 0) {
        autoPlayCarousel()
    }
}

function autoPlayCarousel() {
    const offset = 1
    const slides = document.getElementById('ul-carousel')
    const activeSlide = slides.querySelector('[data-active]')
    
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
}

const buttons = document.querySelectorAll("[data-carousel-button]")
buttons.forEach(button => {
    button.addEventListener("click", () => {
        timeKeeper = 0
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector('[data-slides]')

        const activeSlide = slides.querySelector('[data-active]')
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
});

div3_button1 = document.getElementById('div3-button-1')
div3_button2 = document.getElementById('div3-button-2')
div3_button3 = document.getElementById('div3-button-3')
div3_button4 = document.getElementById('div3-button-4')
div3_buttons = document.querySelectorAll('.div3-selection-buttons')

function div3Buttons() {
    div3_buttons.forEach(item => {
        item.style.borderBottom = 'none'
    })
}
// div3 buttons
function div3Button1() {div3_button1.style.borderBottom = "1px solid rgb(45, 45, 45)"}
function div3Button2() {div3_button2.style.borderBottom = "1px solid rgb(45, 45, 45)"}
function div3Button3() {div3_button3.style.borderBottom = "1px solid rgb(45, 45, 45)"}
function div3Button4() {div3_button4.style.borderBottom = "1px solid rgb(45, 45, 45)"}


// message board
const messageButtonInterior = document.getElementById('message-button-gone');
const messageCloseButton = document.getElementById('message-close-btn');
const messageBoard = document.getElementById('message-board');
function showMessageBoard() {
    messageButtonInterior.style.transition = "0.4s";
    messageButtonInterior.style.opacity = 0;
    messageCloseButton.style.opacity = 1;
    messageCloseButton.style.pointerEvents = "all";
    messageBoard.style.opacity = 1;
    messageBoard.style.transform = "translateY(-60px)";
    messageBoard.style.pointerEvents = "all"
}
function closeMessageBoard() {
    messageCloseButton.style.opacity = 0;
    messageButtonInterior.style.opacity = 1;
    messageCloseButton.style.pointerEvents = "none";
    messageBoard.style.opacity = 0;
    messageBoard.style.transform = "translateY(0)";
    messageBoard.style.pointerEvents = "none"
}

document.addEventListener('click', function(event) {
    var isClickInsideElement1 = messageBoard.contains(event.target);
    var isClickInsideElement2 = messageButtonInterior.contains(event.target);
    if (!isClickInsideElement1 && !isClickInsideElement2) {
        closeMessageBoard()
    }   
});

const sendMessageButton = document.getElementById('send-message');
const messageTextArea = document.getElementById('message-board-input')
document.addEventListener('click', () => {
    messageTextArea.value = "";
})

// footer functions 
let footerCount1 = 0
let footerCount2 = 0
let footerCount3 = 0
let footerCount4 = 0
let openCounter1 = 0
let openCounter2 = 0
let openCounter3 = 0
const footerArrow1 = document.getElementById('fp2-1')
const footerArrow2 = document.getElementById('fp2-2')
const footerArrow3 = document.getElementById('fp2-3')
const footerArrow4 = document.getElementById('fp2-4')

const footerTop = document.getElementById('footer-top')

const footerBtn1Display = document.getElementById('footer-btn-1-display')
const footerBtn2Display = document.getElementById('footer-btn-2-display')
const footerBtn3Display = document.getElementById('footer-btn-3-display')
const footerBtn4Display = document.getElementById('footer-btn-4-display')

function footerBtn1Flip() {
    footerCount1 += 1
    if (footerCount1 % 2 === 1) {
        openCounter1 += 1
        footerArrow1.style.transform = "rotate(0deg)"
        footerTop.insertBefore(footerBtn1Display, footerTop.children[2]);
    } else if (footerCount1 % 2 === 0) {
        footerArrow1.style.transform = "rotate(180deg)"
        footerTop.removeChild(footerBtn1Display);
        openCounter1 -= 1
    }
}
function footerBtn2Flip() {
    footerCount2 += 1
    if (footerCount2 % 2 === 1) {
        footerArrow2.style.transform = "rotate(0deg)"
        footerTop.insertBefore(footerBtn2Display, footerTop.children[4+openCounter1]);
        openCounter2 += 1
    } else if (footerCount2 % 2 === 0) {
        footerArrow2.style.transform = "rotate(180deg)"
        footerTop.removeChild(footerBtn2Display);
        openCounter2 -= 1
    }
}
function footerBtn3Flip() {
    footerCount3 += 1
    if (footerCount3 % 2 === 1) {
        footerArrow3.style.transform = "rotate(0deg)"
        footerTop.insertBefore(footerBtn3Display, footerTop.children[6+openCounter1+openCounter2]);
        openCounter3 += 1
    } else if (footerCount3 % 2 === 0) {
        footerArrow3.style.transform = "rotate(180deg)"
        footerTop.removeChild(footerBtn3Display);
        openCounter3 -= 1
    }
}

const lastFooterHr = document.getElementById('last-footer-hr')
function footerBtn4Flip() {
    footerCount4 += 1
    if (footerCount4 % 2 === 1) {
        footerArrow4.style.transform = "rotate(0deg)"
        footerTop.insertBefore(footerBtn4Display, footerTop.children[8+openCounter1+openCounter2+openCounter3]);
        lastFooterHr.style.opacity = 0.5;
    } else if (footerCount4 % 2 === 0) {
        footerArrow4.style.transform = "rotate(180deg)"
        footerTop.removeChild(footerBtn4Display);
        lastFooterHr.style.opacity = 0;
    }
}

// stop arrows transition on page resize
var footerArrow = document.getElementsByClassName('footer-arrow-div');
function resizeFooter(){
    for(var index=0;index < footerArrow.length;index++){
        footerArrow[index].style.transition = '0.2s'
     }}
var resetFooterTransition;
window.onresize = ()=>{
    for(var index=0;index < footerArrow.length;index++){
        footerArrow[index].style.transition = '0s'
    }
    clearTimeout(resetFooterTransition);
    resetFooterTransition = setTimeout(resizeFooter, 100);
};



// div 7 slider
const numOfSlideItems = 7
const sliderInner = document.getElementById('slider-inner')
const sliderButtonPrev = document.getElementById('slider-button-prev')
const sliderButtonNext = document.getElementById('slider-button-next')

var sliderTransformAmount = 0
var sliderPosition = 1

function sliderButtonLeft() {
    sliderPosition -= 1
    Hide_Slide_Btns()
    sliderTransformAmount += 100 * 1/numOfSlideItems
    sliderInner.style.transform = "translateX(" + sliderTransformAmount + "%)"
}
function sliderButtonRight() {
    sliderPosition += 1
    Hide_Slide_Btns()
    sliderTransformAmount -= 100 * 1/numOfSlideItems
    sliderInner.style.transform = "translateX(" + sliderTransformAmount + "%)"
}
var resetSliderTransition;
function Hide_Slide_Btns() {
    sliderInner.style.transition = '0.8s'
    resetSliderTransition = setTimeout(resizeSlider, 800);
    if (sliderPosition === 1) {
        sliderButtonPrev.style.opacity = 0
        sliderButtonPrev.style.pointerEvents = "none"
    } else {
        sliderButtonPrev.style.opacity = 1
        sliderButtonPrev.style.pointerEvents = "all"
    }

    if (sliderPosition === numOfSlideItems - 1) {
        sliderButtonNext.style.opacity = 0
        sliderButtonNext.style.pointerEvents = "none"
    } else {
        sliderButtonNext.style.opacity = 1
        sliderButtonNext.style.pointerEvents = "all"
    }
}

function resizeSlider(){
    sliderInner.style.transition = '0s'
}