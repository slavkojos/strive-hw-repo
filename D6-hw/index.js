/* You have been assigned to the creation of a Smartphone Shop Website. The homepage you're about to write is just a showcase of the products of the shop with some extra information. No shopping cart / checkout features are required.

Complete exercises from 1 to 6 with plain HTML.

EX1.: Add H1 title with the name of the shop

EX2.: Add a TABLE with the top 5 products of the shop

EX3.: Each product should have one image, title, description and price

EX4.: Add the links to Amazon products for each item in the table

EX5.: Add a footer with the address and the name of the shop

EX6.: Add a message board where the user can type a message in it

EXTRA (use JS here)

EX7.: Write a function to change the H1 text

EX8.: Write a function to change the page background color

EX9.: Write a function to change the footer address with a fake one

EX10.: Write a function to add a CSS class to every Amazon link

EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

EX12: Write a function to color the price of every product in a different one every time */


const changeh1text = (text) => {
    const h1 = document.querySelector("h1");
    h1.innerText=text
    return console.log("changed h1 to ",text)
}

const changePageBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
    return console.log("body color changed to ",color);

}

const changeFooterAddress = (address) => {
    const shopInfo = document.getElementsByClassName("shop-info")[0]
    const shopAddress = shopInfo.getElementsByTagName("p")[0]
    shopAddress.innerText = address
    return console.log("shop address changed to ", address);

}

const addCSSclass = (cssclass) => {
    const amazonLink = document.getElementsByTagName("a");
    for (let i=0;i<amazonLink.length;i++) {
        amazonLink[i].classList.add(cssclass)
    }
        
    
    return console.log("class added", cssclass);
}

const setImagesToInvisible = () => {
    const imagesArray = document.getElementsByTagName("img")
    console.log(imagesArray)
    for (let i=0;i<imagesArray.length;i++) {
        imagesArray[i].classList.toggle("invisible")
    }
}

function randomHexCode() {
    const randomnumber = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + randomnumber.slice(0, 6);
  }

const colorPrices = () => {
    const prices = document.getElementsByClassName("product-price")
    const chosenColor = randomHexCode();
    for (let i=0;i<prices.length;i++) {
        prices[i].style.color = chosenColor;
    }
    

}



