//JavaScript Document

//get all the document variables
console.log("Test test, Linked JS ");
let header = document.querySelector("header");
let section = document.querySelector("section");
let footer = document.querySelector("footer");
let body = document.querySelector("body");

// store request URL for JSON file
let requestURL =
  "https://marksong0917.github.io/Weird_Tech_Deals/products.json";

//Create a new XHR Object request and opens it
let request = new XMLHttpRequest();
request.open("GET", requestURL);
// set up the request type to Json and send it
request.responseType = "json";
request.send();

request.onload = function() {
  let WTGroup = request.response;
  console.log(WTGroup);
  makeHeaders(WTGroup);
  addProductDeals(WTGroup);
};

//Add a company title to the index page
function makeHeaders(jsonObj) {
  //insert company name, by creating a new element and adding information about it by using create element and insert html
  let headerH1 = document.createElement("h1");
  headerH1.textContent = jsonObj["groupName"];
  header.appendChild(headerH1);

  //creates a about us statement using new element p
  let aboutusP = document.createElement("p");
  aboutusP.textContent =
    "Head Quarters: " +
    jsonObj["HQ"] +
    ", Established: " +
    jsonObj["established"];
  header.appendChild(aboutusP);
}

//This function adds the featured deals onto the page
function addProductDeals(jsonObj) {
  //Products are gathered from URL Link:
  // < !--
  //   Product URL: https://www.zdnet.com/article/weird-but-super-useful-black-friday-2019-tech-deals/ -->
  // Product deals are contained in a array format in Products JSON File
  let productDeals = jsonObj["productDeals"];
  //loop through product deals's array max length using i as in item
  //for each loop creating, article, header, img, paragphs and lists
  for (let i = 0; i < productDeals.length; i++) {
    let article = document.createElement("article");
    let h2 = document.createElement("h2");
    let img = document.createElement("img");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let list = document.createElement("ul");

    //grab the data associated with the image to set the src and alt attriibute
    img.setAttribute(
      "src",
      "https://marksong0917.github.io/Weird_Tech_Deals/img/" +
        productDeals[i].img
    );
    img.setAttribute("alt", productDeals[i].img);

    // adding content,  product name, product price and product description
    h2.textContent = productDeals[i].productName;
    p1.textContent = "Price: $" + productDeals[i].productPrice;
    p2.textContent = "Description: " + productDeals[i].productDesc;

    //adding keyFeatures content using array for j for items and loop through every feature and adding it
    let keyFeatures = productDeals[i].productKeyFs;

    for (let j = 0; j < keyFeatures.length; j++) {
      let listItem = document.createElement("li");
      listItem.textContent = keyFeatures[j];
      list.appendChild(listItem);
    }

    //append each elemnt to article, then append article to section

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(list);
    section.appendChild(article);
  }
}

// Initialize and add the map
function initMap() {
  // The map, will be centered at the office location, seoul
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.5665, lng: 126.978 },
    zoom: 8
  });
  // The marker, positioned at HQ Office
  var marker = new google.maps.Marker({
    position: { lat: 37.5665, lng: 126.978 },
    map: map
  });
}
