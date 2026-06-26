var product = document.getElementById('product');
var select = document.getElementById('select')

var object = {
    
    watch: {
        watch1:{
            name:"Arabic Aura Watch",
            price: "PKR.1,500",
            category:"watch",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW0U2qBY8kVWJAbeExFzJDCA3N0sncEtcHNW37pQgHeg&s=10"
        },
        watch2:{
            name:"POEDAGAR Men Watch",
            price: "PKR 10,260",
            category:"watch",
            image:"https://i5.walmartimages.com/seo/POEDAGAR-Men-Watch-Top-Brand-Luxury-Waterproof-Luminous-Men-Stainless-Quartz-Wristwatch-Sport-Man-Watch-Date-Week-Business-Clock_9db66f53-7323-4aa7-bdbc-0a3e4a01c19d.2f1628a0faa89d537bb799262e1acad3.jpeg"
        },
        watch3:{
            name:"Rolex Oyster Golden",
            price: "PKR 24,900",
            category:"watch",
            image:"https://finebuy.co.in/wp-content/uploads/2025/09/rolex-10.webp"
        },
        watch4:{
            name:"POEDGAR 615 Watch",
            price: "PKR.5,499",
            category:"watch",
            image:"https://zuhaibwatches.pk/cdn/shop/files/9f66dc51-17ce-4306-a663-df7497f76b2e.jpg?v=1722694418&width=713"
        },
    },

    cap: {
        cap1: {
            name: "Polo Ralph Lauren Grim Reaper Parody",
            price: "$35",
            category: "cap",
            image: "https://www.junaidjamshed.com/cdn/shop/files/0001-r91_423536e0-88da-4602-96ce-4732b3f7bdaa.jpg?v=1777087466&width=533"
        },
        cap2: {
            name: "Winter Cap for men    ",
            price: "$45",
            category: "cap",
            image: "https://m.media-amazon.com/images/I/71UdT0ntPlL._AC_SX425_.jpg"
        },
        cap3: {
            name: "Coffee Dealer Goose",
            price: "$50",
            category: "cap",
            image: "https://i.etsystatic.com/21940676/r/il/4219da/7531543015/il_1588xN.7531543015_h5f6.jpg"
        },
        cap4: {
            name: "DNK Orange Shoes",
            price: "$950",
            category: "cap",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwtHlZgrUf3bgUQBjSVXvPoh07tOboeMFCkiAnlKyqrg&s=10"
        }
    },

    footwear: {
        footwear1: {
            name: "BLUE PLAIN SANDALS",
            price: "PKR.5,592",
            category : "footwear",
            image: "https://www.junaidjamshed.com/cdn/shop/files/JPC-16028_2.jpg?v=1781335213&width=533"
        },
        footwear2: {
            name: "BLACK PESHAWARI SANDALS",
            price: "PKR.3,992",
            category : "footwear",
            image: "https://www.junaidjamshed.com/cdn/shop/files/JPC-142_1_9da72996-970f-4c82-85fd-c86ea3e25a26.jpg?v=1781698348&width=533"
        },
        footwear3: {
            name: "Beige Plain Slides",
            price: "PKR.12,000",
            category : "footwear",
            image: "https://www.junaidjamshed.com/cdn/shop/files/CCFWSLIDES-017_2.jpg?v=1779104878&width=533"
        },
        footwear4: {
            name: "MUTE MINT SUEDE BRIDGE SLIDES",
            price: "PKR.6,990",
            category : "footwear",
            image: "https://www.junaidjamshed.com/cdn/shop/files/jsndl-017_2__1_376167f5-e281-41b2-bad1-cdf9f07a2709.jpg?v=1777087482&width=533"
        }
    },

    shalwarKameez:{
        shalwarKameez1:{
            name:"Traditional shalwar kameez",
            price: "PKR.3,999",
            category:"Shalwar Kameez",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwyKG5SYWvJ-ihPDMcDPqOTsNp9KdBz1EwiJE9esoetw&s=10"
        },
        shalwarKameez2:{
            name:"Off White Plain Deluxe",
            price: "PKR.4,599",
            category:"Shalwar Kameez",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt9fJnOKN9-dw2YSPG_OCiup-UcwBUc_sNyX0O0J17YA&s=10"
        },
        shalwarKameez3:{
            name:"WHITE BOSKI UNSTITCHED FABRIC",
            price: "PKR.5,990",
            category:"Shalwar Kameez",
            image:"https://www.junaidjamshed.com/cdn/shop/files/JJMS-3002white_1_a89b5772-ca13-4d24-995f-9b99cb75cb76.jpg?v=1777282325&width=533"
        },
        shalwarKameez4:{
            name:"WHITE COTTON UNSTITCHED FABRIC",
            price: "PKR.4,290",
            category:"Shalwar Kameez",
            image:"https://www.junaidjamshed.com/cdn/shop/files/untitled-1_-_copy_1_1.webp?v=1777191135&width=533"
        },

    }


};

function selectValue() {
    product.innerHTML = "";
    var selectedValue = select.value;

    for (var catKey in object) {
        if (selectedValue === "All Category" || selectedValue === catKey) {
            for (var itemKey in object[catKey]) {
                var item = object[catKey][itemKey];
                product.innerHTML += "<div class='product-item'>" +
                    "<div class='product-img'><img src='" + item.image + "' alt=''></div>" +
                    "<div class='product-detail'><h3>" + item.name + "</h3></div>" +
                    "<div class='category'>" + item.category + "</div>" +
                    "<div class='price-row'>" + item.price + "</div>" +
                    "</div>";
                }
            }
        }
    }
    
    
setInterval(selectValue, 500)

function commingsoon(){
    alert("Comming Soon!")
}