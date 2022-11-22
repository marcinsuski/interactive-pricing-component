const slider = document.getElementById("slider");
const output = document.getElementById("js-pageviews");
output.innerText = slider.value;

const min = slider.min;
const max = slider.max;
const value = slider.value;

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
};
