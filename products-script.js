const productsDiv3 = document.getElementById('products-div3')
// number of specific element types 
var count = productsDiv3.getElementsByTagName('div').length;

const odd = document.querySelectorAll('#products-div3 :nth-child(odd)');
const even = document.querySelectorAll('#products-div3 :nth-child(even)');

const productsDiv3Items = document.querySelectorAll('.product-items')

window.addEventListener("resize", () => {
    changeGrid()
});

window.addEventListener("load", () => {
    changeGrid()
})

function changeGrid() {
    if (window.innerWidth >= 850) {
        productsDiv3.style.gridTemplateColumns = "1fr 1fr 1fr 1fr"
        productsDiv3Items.forEach(item => {
            item.style.paddingBottom = "3vw"
        })
    } else {
        productsDiv3.style.gridTemplateColumns = "1fr 1fr"
        productsDiv3Items.forEach(item => {
            item.style.paddingBottom = "4vw"
        })
    }
}

// filter functions 
let filterCount1 = 0
let filterCount2 = 0
let filterCount3 = 0
let filterCount4 = 0

var filterBool1 = false
var filterBool2 = false
var filterBool3 = false
var filterBool4 = false

const filterArrow1 = document.getElementById('filterp2-1')
const filterArrow2 = document.getElementById('filterp2-2')
const filterArrow3 = document.getElementById('filterp2-3')
const filterArrow4 = document.getElementById('filterp2-4')

const filter = document.getElementById('filter')

const filterBtnDisplay = document.querySelectorAll('.filter-btn-display')
const filterBtn1Display = document.getElementById('filter-btn-1-display')
const filterBtn2Display = document.getElementById('filter-btn-2-display')
const filterBtn3Display = document.getElementById('filter-btn-3-display')
const filterBtn4Display = document.getElementById('filter-btn-4-display')

function closeDisplays() {
    filterBtnDisplay.forEach(item => {
        item.style.display = 'none'
        item.style.opacity = 0;
        item.style.pointerEvents = 'none'
    })
    filterBool1 = false
    filterBool2 = false
    filterBool3 = false
    filterBool4 = false

    filterArrow1.style.transform = "rotate(180deg)"
    filterArrow2.style.transform = "rotate(180deg)"
    filterArrow3.style.transform = "rotate(180deg)"
    filterArrow4.style.transform = "rotate(180deg)"
}

function filterBtn1Flip() {
    if (filterBool2 === true) {filterCount2 += 1}
    if (filterBool3 === true) {filterCount3 += 1}
    if (filterBool4 === true) {filterCount4 += 1}
    if (filterBool2 === true || filterBool3 === true || filterBool4 === true) {
        closeDisplays()
    }
    filterCount1 += 1
    if (filterCount1 % 2 === 1) {
        filterArrow1.style.transform = "rotate(0deg)"
        filterBool1 = true
        filterBtn1Display.style.display = 'block'
        filterBtn1Display.style.opacity = 1;
        filterBtn1Display.style.pointerEvents = 'all'
    } else if (filterCount1 % 2 === 0) {
        filterArrow1.style.transform = "rotate(180deg)"
        filterBool1 = false
        filterBtn1Display.style.display = 'none'
        filterBtn1Display.style.opacity = 0;
        filterBtn1Display.style.pointerEvents = 'none'
    }
}

function filterBtn2Flip() {
    if (filterBool1 === true) {filterCount1 += 1}
    if (filterBool3 === true) {filterCount3 += 1}
    if (filterBool4 === true) {filterCount4 += 1}
    if (filterBool1 === true || filterBool3 === true || filterBool4 === true) {
        closeDisplays()
    }
    filterCount2 += 1
    if (filterCount2 % 2 === 1) {
        filterArrow2.style.transform = "rotate(0deg)"
        filterBool2 = true
        filterBtn2Display.style.display = 'flex'
        filterBtn2Display.style.opacity = 1;
        filterBtn2Display.style.pointerEvents = 'all'
    } else if (filterCount2 % 2 === 0) {
        filterArrow2.style.transform = "rotate(180deg)"
        filterBool2 = false
        filterBtn2Display.style.display = 'none'
        filterBtn2Display.style.opacity = 0;
        filterBtn2Display.style.pointerEvents = 'none'
    }
}

function filterBtn3Flip() {
    if (filterBool1 === true) {filterCount1 += 1}
    if (filterBool2 === true) {filterCount2 += 1}
    if (filterBool4 === true) {filterCount4 += 1}
    if (filterBool1 === true || filterBool2 === true || filterBool4 === true) {
        closeDisplays()
    }
    filterCount3 += 1
    if (filterCount3 % 2 === 1) {
        filterArrow3.style.transform = "rotate(0deg)"
        filterBool3 = true
        filterBtn3Display.style.display = 'block'
        filterBtn3Display.style.opacity = 1;
        filterBtn3Display.style.pointerEvents = 'all'
    } else if (filterCount2 % 2 === 0) {
        filterArrow3.style.transform = "rotate(180deg)"
        filterBool3 = false
        filterBtn3Display.style.display = 'none'
        filterBtn3Display.style.opacity = 0;
        filterBtn3Display.style.pointerEvents = 'none'
    }
}

function filterBtn4Flip() {
    if (filterBool1 === true) {filterCount1 += 1}
    if (filterBool2 === true) {filterCount2 += 1}
    if (filterBool3 === true) {filterCount3 += 1}
    if (filterBool1 === true || filterBool2 === true || filterBool3 === true) {
        closeDisplays()
    }
    filterCount4 += 1
    if (filterCount4 % 2 === 1) {
        filterArrow4.style.transform = "rotate(0deg)"
        filterBool4 = true
        filterBtn4Display.style.display = 'block'
        filterBtn4Display.style.opacity = 1;
        filterBtn4Display.style.pointerEvents = 'all'
    } else if (filterCount2 % 2 === 0) {
        filterArrow4.style.transform = "rotate(180deg)"
        filterBool4 = false
        filterBtn4Display.style.display = 'none'
        filterBtn4Display.style.opacity = 0;
        filterBtn4Display.style.pointerEvents = 'none'
    }
}