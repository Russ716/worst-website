const photoArray = ['./images/bus-for-sale.jpeg', './images/bus-people.jpeg', './images/bus1.jpeg', './images/bus2.jpeg', './images/bus4.webp', './images/bus5.jpeg', './images/bus6.jpeg', './images/dedicate-the-russ-bus.png', './images/how-to-buy-a-bus.jpeg', './images/man-bus.png', './images/man-with-bus.jpeg', './images/russ-bus.jpeg', './images/sing-abd-play.jpeg']
const buttonText = ["Bet you won't", "You clicked it??", "stop?", "alright whatever press away", "only a couple more", "ok one more click", "that was it! thanks :)", "?????", "you're out of clicks buddy", "STOP", "you're grounded","log off NOW","whatever. resetting"]

let counter = 0

const jdDiv = document.querySelector("#jdDiv")
let jdDivHtml = `<button id="jdbutton" type="button">${buttonText[counter]}</button>`
jdDiv.innerHTML = jdDivHtml

const jdImageDiv = document.querySelector("#jdImageDiv")
let jdImageDivHtml = `<img id="jdImg" src=${photoArray[counter]}>`
jdImageDiv.innerHTML = jdImageDivHtml

jdDiv.addEventListener('click', event => {
    if(counter < 12){
            counter++
            } else {
                counter = 0
            }
    jdDivHtml = `<button id="jdbutton" type="button">${buttonText[counter]}</button>`
    jdImageDivHtml = `<img id="jdImg" src=${photoArray[counter]}>`
    jdImageDiv.innerHTML = jdImageDivHtml
    jdDiv.innerHTML = jdDivHtml
  });