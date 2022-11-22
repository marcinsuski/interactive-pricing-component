const toggle = document.querySelector(".top__billing__toggle");
const toggleSwitch = document.querySelector(".top__billing__toggle-switch");
const discountMobile = document.querySelector(".top__billing__discount-mobile");
const discountPc = document.querySelector(".top__billing__discount-pc");

// slider variables
const slider = document.getElementById("slider");
const min = slider.min;
const max = slider.max;
const value = slider.value;

// pricing variables
const output = document.getElementById("js-pageviews"); //??? pageviews
const price = document.getElementById("price"); // price m/y
const togglePrice = document.getElementById("month"); //text next to price - indication of monthyl/yearly price
const priceList = {
    cheap: 12,
    medium: 16,
    expensive: 24,
}; // price list to change quickly if needed

// control of defaultslider background
slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%), hsl(174, 77%, 80%) ${
    ((value - min) / (max - min)) * 100
}%, #DEE2E6 ${((value - min) / (max - min)) * 100}%, #DEE2E6 100%)`;

//control of slider background during changes, push result to pageviews and update price offer
slider.oninput = function () {
    this.style.background = `linear-gradient(to right, hsl(174, 77%, 80%), hsl(174, 77%, 80%) ${
        ((this.value - this.min) / (this.max - this.min)) * 100
    }%, #DEE2E6 ${
        ((this.value - this.min) / (this.max - this.min)) * 100
    }%, #DEE2E6 100%)`;

    output.innerHTML = this.value;

    checkPrice();
};
output.innerText = slider.value;

// check if the price should be monthly or yearly
function checkPrice() {
    if (toggleSwitch.classList.contains("yearly")) {
        togglePrice.innerText = "/year";
        checkYearly();
    } else {
        togglePrice.innerText = "/month";
        checkMonthly();
    }
}

// function to control toggle switch for monthly and yearly price offer
toggle.addEventListener("click", toggletime);

function toggletime() {
    toggleSwitch.classList.toggle("yearly");
    if (toggleSwitch.classList.contains("yearly")) {
        togglePrice.innerText = "/year";
        checkYearly();
    } else {
        togglePrice.innerText = "/month";
        checkMonthly();
    }
}

//controls monthly prices
function checkMonthly() {
    let cheapM = `$${priceList.cheap}.00`;
    let mediumM = `$${priceList.medium}.00`;
    let expensiveM = `$${priceList.expensive}.00`;
    if (slider.value < 50) {
        price.innerText = cheapM;
    } else if (slider.value >= 50 && slider.value < 150) {
        price.innerText = mediumM;
    } else if (slider.value >= 150) {
        price.innerText = expensiveM;
    }
}

//controls yearly prices
function checkYearly() {
    let cheapY = `$${priceList.cheap * 12 * 0.75}.00`;
    let mediumY = `$${priceList.medium * 12 * 0.75}.00`;
    let expensiveY = `$${priceList.expensive * 12 * 0.75}.00`;
    if (slider.value < 50) {
        price.innerText = cheapY;
    } else if (slider.value >= 50 && slider.value < 150) {
        price.innerText = mediumY;
    } else if (slider.value >= 150) {
        price.innerText = expensiveY;
    }
}

// window listener to check when mobile view kicks in and change "discount" appearance.
window.addEventListener("resize", resizeListener);
function resizeListener() {
    if (window.innerWidth <= 800) {
        discountMobile.classList.remove("hidden");
        discountPc.classList.add("hidden");
    } else {
        discountMobile.classList.add("hidden");
        discountPc.classList.remove("hidden");
    }
}
