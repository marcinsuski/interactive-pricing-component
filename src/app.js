const slider = document.getElementById("slider");
const output = document.getElementById("js-pageviews");
const toggle = document.querySelector(".top__billing__toggle");
const toggleSwitch = document.querySelector(".top__billing__toggle-switch");
const price = document.getElementById("price");
const togglePrice = document.getElementById("month");

const min = slider.min;
const max = slider.max;
const value = slider.value;

output.innerText = slider.value;

slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%), hsl(174, 77%, 80%) ${
    ((value - min) / (max - min)) * 100
}%, #DEE2E6 ${((value - min) / (max - min)) * 100}%, #DEE2E6 100%)`;

slider.oninput = function () {
    this.style.background = `linear-gradient(to right, hsl(174, 77%, 80%), hsl(174, 77%, 80%) ${
        ((this.value - this.min) / (this.max - this.min)) * 100
    }%, #DEE2E6 ${
        ((this.value - this.min) / (this.max - this.min)) * 100
    }%, #DEE2E6 100%)`;
    output.innerHTML = this.value;

    checkPrice();
};

function checkPrice() {
    checkYearly();
}

function checkMonthly() {
    let cheap = "$" + 12 + ".00";
    let medium = "$" + 16 + ".00";
    let expensive = "$" + 24 + ".00";
    if (slider.value < 50) {
        price.innerText = cheap;
    } else if (slider.value >= 50 && slider.value < 150) {
        price.innerText = medium;
    } else if (slider.value >= 150) {
        price.innerText = expensive;
    }
}

function checkYearly() {
    let cheap = "$" + 12 * 12 * 0.75 + ".00";
    let medium = "$" + 16 * 12 * 0.75 + ".00";
    let expensive = "$" + 24 * 12 * 0.75 + ".00";
    if (slider.value < 50) {
        price.innerText = cheap;
    } else if (slider.value >= 50 && slider.value < 150) {
        price.innerText = medium;
    } else if (slider.value >= 150) {
        price.innerText = expensive;
    }
}

function toggletime() {
    toggleSwitch.classList.toggle("active");
    if ((toggleSwitch.classlist = "active")) {
        togglePrice.innerText = "/year";
    } else {
        togglePrice.innerText = "/month";
    }
}

toggle.addEventListener("click", toggletime);
