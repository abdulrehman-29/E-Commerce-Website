var product = document.getElementById('product');

var object = {
    footwear: {
        footwear1: {
            name: "BLUE PLAIN SANDALS",
            price: "PKR.5,592",
            category: "footwear",
            image: "https://www.junaidjamshed.com/cdn/shop/files/JPC-16028_2.jpg?v=1781335213&width=533"
        },
        footwear2: {
            name: "BLACK PESHAWARI SANDALS",
            price: "PKR.3,992",
            category: "footwear",
            image: "https://www.junaidjamshed.com/cdn/shop/files/JPC-142_1_9da72996-970f-4c82-85fd-c86ea3e25a26.jpg?v=1781698348&width=533"
        },
        footwear3: {
            name: "Beige Plain Slides",
            price: "PKR.12,000",
            category: "footwear",
            image: "https://www.junaidjamshed.com/cdn/shop/files/CCFWSLIDES-017_2.jpg?v=1779104878&width=533"
        },
        footwear4: {
            name: "MUTE MINT SUEDE BRIDGE SLIDES",
            price: "PKR.6,990",
            category: "footwear",
            image: "https://www.junaidjamshed.com/cdn/shop/files/jsndl-017_2__1_376167f5-e281-41b2-bad1-cdf9f07a2709.jpg?v=1777087482&width=533"
        }
    }



};

for (var key in object.footwear) {
    var item = object.footwear[key];

    product.innerHTML += "<div class='product-item'>" +
        "<div class='product-img'>" +
        "<img src='" + item.image + "' alt=''>" +
        "</div>" +
        "<div class='product-detail'>" +
        "<h3>" + item.name + "</h3>" +
        "</div>" +
        "<div class='category'>" + item.category + "</div>" +
        "<div class='price-row'>" + item.price + "</div>" +
        "</div>";
}


function commingsoon(){
    alert("Comming Soon!")
}