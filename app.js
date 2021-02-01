var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");

var books1Add = document.getElementById("book1");
var books2Add = document.getElementById("book2");
var books3Add = document.getElementById("book3");
var books4Add = document.getElementById("book4");
var books5Add = document.getElementById("book5");
var books6Add = document.getElementById("book6");

var games1Add = document.getElementById("games1");
var games2Add = document.getElementById("games2");
var games3Add = document.getElementById("games3");
var games4Add = document.getElementById("games4");

var crafts1Add = document.getElementById("crafts1");
var crafts2Add = document.getElementById("crafts2");
var crafts3Add = document.getElementById("crafts3");
var crafts4Add = document.getElementById("crafts4");

console.log(books1Add);

var books1 = {
    name: "This was our pact",
    quantity: 0,
    dollars: 7,
    cents: 49,
};

var books2 = {
    name: "The famous five",
    quantity: 0,
    dollars: 4,
    cents: 59,
};


var books3 = {
    name: "Matilda",
    quantity: 0,
    dollars: 6,
    cents: 80,
};


var books4 = {
    name: "Harry Potter",
    quantity: 0,
    dollars: 10,
    cents: 0,
};


var books5 = {
    name: "For Young Readers",
    quantity: 0,
    dollars: 7,
    cents: 29,
};


var books6 = {
    name: "Wimpy Kid - DIY",
    quantity: 0,
    dollars: 4,
    cents: 99,
};


var games1 = {
    name: "Dart Board",
    quantity: 0,
    dollars: 17,
    cents: 49,
};

var games2 = {
    name: "Connect 4",
    quantity: 0,
    dollars: 19,
    cents: 99,
};

var games3 = {
    name: "Jenga",
    quantity: 0,
    dollars: 20,
    cents: 99,
};

var games4 = {
    name: "Monopoly",
    quantity: 0,
    dollars: 19,
    cents: 49,
};

var crafts1 = {
    name: "Bookmarks",
    quantity: 0,
    dollars: 12,
    cents: 49,
};

var crafts2 = {
    name: "Birthday card",
    quantity: 0,
    dollars: 19,
    cents: 99,
};

var crafts3 = {
    name: "Stuffed toys",
    quantity: 0,
    dollars: 15,
    cents: 99,
};

var crafts4 = {
    name: "Dream catcher drawing",
    quantity: 0,
    dollars: 18,
    cents: 49,
};

function updateCart() {
    cart = books1.quantity +
           books2.quantity +
           books3.quantity +
           books4.quantity +
           books5.quantity +
           books6.quantity +
           games1.quantity +
           games2.quantity +
           games3.quantity +
           games4.quantity +
           crafts1.quantity +
           crafts2.quantity +
           crafts3.quantity +
           crafts4.quantity;
        cartValue.innerHTML = cart;
}

books1Add.onclick = (e) => {
    books1.quantity++;
    updateCart();
};

books2Add.onclick = (e) => {
    books2.quantity++;
    updateCart();
};

books3Add.onclick = (e) => {
    books3.quantity++;
    updateCart();
};

books4Add.onclick = (e) => {
    books4.quantity++;
    updateCart();
};

books5Add.onclick = (e) => {
    books5.quantity++;
    updateCart();
};

books6Add.onclick = (e) => {
    books6.quantity++;
    updateCart();
};

games1Add.onclick = (e) => {
    games1.quantity++;
    updateCart();
};

games2Add.onclick = (e) => {
    games2.quantity++;
    updateCart();
};

games3Add.onclick = (e) => {
    games3.quantity++;
    updateCart();
};

games4Add.onclick = (e) => {
    games4.quantity++;
    updateCart();
};

crafts1Add.onclick = (e) => {
    crafts1.quantity++;
    updateCart();
};

crafts2Add.onclick = (e) => {
    crafts2.quantity++;
    updateCart();
};

crafts3Add.onclick = (e) => {
    crafts3.quantity++;
    updateCart();
};

crafts4Add.onclick = (e) => {
    crafts4.quantity++;
    updateCart();
};

var finalDollars = 0;
var finalCents = 0;

function updatePrice() {
    var books1CostinCents =
        books1.quantity * books1.dollars * 100 + books1.quantity * books1.cents;
        var books2CostinCents =
        books2.quantity * books2.dollars * 100 + books2.quantity * books2.cents;
        var books3CostinCents =
        books3.quantity * books3.dollars * 100 + books3.quantity * books3.cents;
        var books4CostinCents =
        books4.quantity * books4.dollars * 100 + books4.quantity * books4.cents;
        var books5CostinCents =
        books5.quantity * books5.dollars * 100 + books5.quantity * books5.cents;
        var books6CostinCents =
        books6.quantity * books6.dollars * 100 + books6.quantity * books6.cents;

        var games1CostinCents =
        games1.quantity * games1.dollars * 100 + games1.quantity * games1.cents;
        var games2CostinCents =
        games2.quantity * games2.dollars * 100 + games2.quantity * games2.cents;
        var games3CostinCents =
        games3.quantity * games3.dollars * 100 + games3.quantity * games3.cents;
        var games4CostinCents =
        games4.quantity * games4.dollars * 100 + games4.quantity * games4.cents;

        var crafts1CostinCents =
        crafts1.quantity * crafts1.dollars * 100 + crafts1.quantity * crafts1.cents;
        var crafts2CostinCents =
        crafts2.quantity * crafts2.dollars * 100 + crafts2.quantity * crafts2.cents;
        var crafts3CostinCents =
        crafts3.quantity * crafts3.dollars * 100 + crafts3.quantity * crafts3.cents;
        var crafts4CostinCents =
        crafts4.quantity * crafts4.dollars * 100 + crafts4.quantity * crafts4.cents;

        totalPriceInCents =
        books1CostinCents +
        books2CostinCents +
        books3CostinCents +
        books4CostinCents +
        books5CostinCents +
        books6CostinCents +
        games1CostinCents +
        games2CostinCents +
        games3CostinCents +
        games4CostinCents +
        crafts1CostinCents +
        crafts2CostinCents +
        crafts3CostinCents +
        crafts4CostinCents;

        finalDollars = Math.floor(totalPriceInCents / 100);
        finalCents = totalPriceInCents % 100;
}

var whatsappLink = 
"https://api.whatsapp.com/send?phone=919000000000&text=Order%20details";

function updateWhatsappLink() {
    if (books1.quantity != 0) {
        whatsappLink += "%0A" + books1.name + "%20" + books1.quantity;
    }
    if (books2.quantity != 0) {
        whatsappLink += "%0A" + books2.name + "%20" + books2.quantity;
    }
    if (books3.quantity != 0) {
        whatsappLink += "%0A" + books3.name + "%20" + books3.quantity;
    }
    if (books4.quantity != 0) {
        whatsappLink += "%0A" + books4.name + "%20" + books4.quantity;
    }
    if (books5.quantity != 0) {
        whatsappLink += "%0A" + books5.name + "%20" + books5.quantity;
    }
    if (books6.quantity != 0) {
        whatsappLink += "%0A" + books6.name + "%20" + books6.quantity;
    }


    if (games1.quantity != 0) {
        whatsappLink += "%0A" + games1.name + "%20" + games1.quantity;
    }
    if (games2.quantity != 0) {
        whatsappLink += "%0A" + games2.name + "%20" + games2.quantity;
    }
    if (games3.quantity != 0) {
        whatsappLink += "%0A" + games3.name + "%20" + games3.quantity;
    }
    if (games4.quantity != 0) {
        whatsappLink += "%0A" + games4.name + "%20" + games4.quantity;
    }


    if (crafts1.quantity != 0) {
        whatsappLink += "%0A" + crafts1.name + "%20" + crafts1.quantity;
    }
    if (crafts2.quantity != 0) {
        whatsappLink += "%0A" + crafts2.name + "%20" + crafts2.quantity;
    }
    if (crafts3.quantity != 0) {
        whatsappLink += "%0A" + crafts3.name + "%20" + crafts3.quantity;
    }
    if (crafts4.quantity != 0) {
        whatsappLink += "%0A" + crafts4.name + "%20" + crafts4.quantity;
    }
    whatsappLink += "%0A" + "Total%20Price:%20$" + finalDollars + "%20" + finalCents + "c";
}

cartButton.onclick = () => {
    updatePrice();
    updateWhatsappLink();
    window.open(whatsappLink, "_blank");
};
