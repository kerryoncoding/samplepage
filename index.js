
const fruitImages = {
   1:"https://drive.google.com/open?id=1vtaubItASKilyvb5sgQO7D7gjAQ7xo0i",
   2:"https://drive.google.com/open?id=1FJNbSIMKRPBnGPienoYK1Qf8wIwQSdpR",
   3:"https://drive.google.com/open?id=1TODQyZgnCjDX2Slr0ll8g-ymIV8Yizkh",
   4:"https://drive.google.com/open?id=1vtaubItASKilyvb5sgQO7D7gjAQ7xo0i",
   5:"https://drive.google.com/open?id=1FJNbSIMKRPBnGPienoYK1Qf8wIwQSdpR",
   6:"https://drive.google.com/open?id=1TODQyZgnCjDX2Slr0ll8g-ymIV8Yizkh",
   7:"https://drive.google.com/open?id=1vtaubItASKilyvb5sgQO7D7gjAQ7xo0i",
   8:"https://drive.google.com/open?id=1FJNbSIMKRPBnGPienoYK1Qf8wIwQSdpR",
   9:"https://drive.google.com/open?id=1TODQyZgnCjDX2Slr0ll8g-ymIV8Yizkh",
   10:"https://drive.google.com/open?id=1vtaubItASKilyvb5sgQO7D7gjAQ7xo0i",
   11:"https://drive.google.com/open?id=1FJNbSIMKRPBnGPienoYK1Qf8wIwQSdpR",
   12:"https://drive.google.com/open?id=1TODQyZgnCjDX2Slr0ll8g-ymIV8Yizkh",
   13:"https://drive.google.com/open?id=1vtaubItASKilyvb5sgQO7D7gjAQ7xo0i",
   14:"https://drive.google.com/open?id=1FJNbSIMKRPBnGPienoYK1Qf8wIwQSdpR",
   15:"https://drive.google.com/open?id=1TODQyZgnCjDX2Slr0ll8g-ymIV8Yizkh",
   16:"https://drive.google.com/open?id=1vtaubItASKilyvb5sgQO7D7gjAQ7xo0i",
   17:"https://drive.google.com/open?id=1FJNbSIMKRPBnGPienoYK1Qf8wIwQSdpR",
   18:"https://drive.google.com/open?id=1TODQyZgnCjDX2Slr0ll8g-ymIV8Yizkh",
   19:"https://drive.google.com/open?id=1FJNbSIMKRPBnGPienoYK1Qf8wIwQSdpR",
   20:"https://drive.google.com/open?id=1TODQyZgnCjDX2Slr0ll8g-ymIV8Yizkh"
}
// Text style
const textStyle = {
 1: {opacity: 0, transform: "0px"},
 2: {opacity: 0, transform: "0px"},
 3: {opacity: 0, transform: "0px"},
 4: {opacity: 0, transform: "0px"},
 5: {opacity: .25, transform: "15px"},
 6: {opacity: .5, transform: "10px"},
 7: {opacity: .75, transform: "5px"},
 8: {opacity: 1, transform: "0px"},
 9: {opacity: 1, transform: "0px"},
 10: {opacity: 1, transform: "0px"},
 11: {opacity: 1, transform: "0px"},
 12: {opacity: 1, transform: "0px"},
 13: {opacity: 1, transform: "0px"},
 14: {opacity: 1, transform: "0px"},
 15: {opacity: 1, transform: "0px"},
 16: {opacity: 1, transform: "0px"},
 17: {opacity: 1, transform: "0px"},
 18: {opacity: 1, transform: "0px"},
 19: {opacity: 1, transform: "0px"},
 20: {opacity: 1, transform: "0px"},
}

// Global variable to control the scrolling behavior
const step = 30; // For each 30px, change an image

function trackScrollPosition() {
 const y = window.scrollY;
 const label = Math.min(Math.floor(y/30) + 1, 20);
 const imageToUse = fruitImages[label];
 // Change the background image
 $(`.image-container`).css(`background-image`, `url(`${imageToUse}`)`);
 // Change the text style
 const textStep = 2;
 const textStyleToUseLine1 = textStyle[label];
 const textStyleToUseLine2 = textStyle[Math.min(Math.max(label - textStep, 1), 20)];
 const textStyleToUseLine3 = textStyle[Math.min(Math.max(label - textStep * 2, 1),20)];
 const textStyleToUseLine4 = textStyle[Math.min(Math.max(label - textStep * 3, 1),20)];
 $(`#line1`).css({`opacity`: textStyleToUseLine1.opacity, `transform`: `translateY(${textStyleToUseLine1.transform})`});
 $(`#line2`).css({`opacity`: textStyleToUseLine2.opacity, `transform`: `translateY(${textStyleToUseLine2.transform})`});
 $(`#line3`).css({`opacity`: textStyleToUseLine3.opacity, `transform`: `translateY(${textStyleToUseLine3.transform})`});
 $(`#line4`).css({`opacity`: textStyleToUseLine4.opacity, `transform`: `translateY(${textStyleToUseLine4.transform})`});

}

$(document).ready(()=>{
 // register an event listener on window
 $(window).scroll(()=>{
   // We don`t need to use `event` as the scroll exist in window
   trackScrollPosition();
 })
})