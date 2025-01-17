/*

    Here are the items we believe we need to produce for each day's coffee

    pic - image scr
    alt - the alt tag for the image
    color - color to match image
    desc - description of the coffee
    name - name of the coffee
    day - day of the week


*/

function coffeeTemplate() {
    return `<p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
    <strong class="feature">${coffee.day} Coffee Special:</strong> ${coffee.day} daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>
    `;
}

let myDate = new Date();

let coffee = "";

let today = myDate.getDay();

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

//today = 3;

if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
 }

 today = parseInt(today);

switch (today) {

    case 0:
        today = "Sunday";
        coffee = {
            name: "Pumpkin Spice Latte",
            color: "orange",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of a Pumpkin Spice Latte",
            day: "Sunday",
            desc: `The classic taste of Fall!`
        }
        break;

    
    case 1:
        today = "Monday";
        coffee = {
            name: "Cold Brew",
            color: "maroon",
            pic: "images/cold-brew.jpg",
            alt: "A picture of a Cold Brew",
            day: "Saturday",
            desc: `Ice cold.. like polar bears.`
        }
        break;

    case 2:
        today = "Tuesday";
        coffee = {
            name: "Drip Coffee",
            color: "black",
            pic: "images/drip.jpg",
            alt: "A picture of a drip coffee",
            day: "Tuesday",
            desc: `Give it to me straight!`
        }
        break;

    case 3:
        today = "Wednesday";
        coffee = {
            name: "Caramel Latte",
            color: "chartreuse",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of a Caramel Latte",
            day: "Wednesday",
            desc: `paired with an Apple to dip!`
        }
        break;

    case 4:
        today = "Thursday";
        coffee = {
            name: "Mocha",
            color: "coral",
            pic: "images/mocha.jpg",
            alt: "A picture of a Mocha",
            day: "Thursday",
            desc: `Life is too short to worry, eat all the chocolate you need.`
        }
        break;

    case 5:
        today = "Friday";
        coffee = {
            name: "Frappaccino",
            color: "beige",
            pic: "images/frappaccino.jpg",
            alt: "A picture of a Frappaccino",
            day: "Friday",
            desc: `Run a lap after you take a sip of this frap!`
        }
        break;

     case 6:
        today = "Saturday";
        coffee = {
            name: "Bubble Tea",
            color: "crimson",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            day: "Monday",
            desc: `I like me some bubble tea!`
        }
        break;


    default:
        today = "Not sure what day it is!";
}

today = "Not sure what day it is!";

function coffeeDescription(){
    return `<p>
    <span class="feature">${coffee.name} is </span> Gluten-free selfies
    normcore chillwave. Listicle 90's chambray, seitan cold-pressed try-hard
    Etsy authentic flexitarian vinyl. Meditation bespoke freegan,
    single-origin coffee cred seitan 90's gentrify brunch Williamsburg squid
    cold-pressed. Brooklyn readymade Tumblr wayfarers ethical.
  </p> 
  <p>
    <span class="feature">Enjoy ${coffee.name} with our </span> Polaroid
    iPhone plaid, Pitchfork Shoreditch paleo. Hashtag keytar chia scenester
    Pinterest, semiotics tousled food truck. YOLO scenester deep v,
    taxidermy paleo quinoa McSweeney's Carles VHS mustache Williamsburg
    gluten-free readymade cold-pressed. Truffaut Thundercats Schlitz,
    listicle organic Brooklyn paleo squid asymmetrical readymade migas
    gluten-free Austin.
  </p>
    `;
}


document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;
document.getElementById("coffee-description").innerHTML = coffeeDescription();

//alert(today);
console.log(coffee);