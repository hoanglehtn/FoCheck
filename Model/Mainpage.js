

// Search bar
function searchBar() {
    var search = document.getElementById("search");
    search.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("searchButton").click();
        }
    });
}


// Search button
function searchButton() {
    var search = document.getElementById("search");
    var searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", function() {
        var searchValue = search.value;
        if (searchValue == "") {
            alert("Please enter a search term.");
        } else {
            window.location.href = "https://www.google.com/search?q=" + searchValue;
        }
    });
}

// Reccommended searches
function recommendedSearches() {
    var recommendedSearches = document.getElementById("recommendedSearches");
    recommendedSearches.addEventListener("click", function() {
        var searchValue = recommendedSearches.value;
        if (searchValue == "") {
            alert("Please enter a search term.");
        } else {
            window.location.href = "https://www.google.com/search?q=" + searchValue;
        }
    });
}

// Advertising
function advertising() {
    var advertising = document.getElementById("advertising");
    advertising.addEventListener("click", function() {
        var searchValue = advertising.value;
        if (searchValue == "") {
            alert("Please enter a search term.");
        } else {
            window.location.href = "https://www.google.com/search?q=" + searchValue;
        }
    });
}

// List of products from the database
function listOfProducts() {
    var listOfProducts = document.getElementById("listOfProducts");
    listOfProducts.addEventListener("click", function() {
        var searchValue = listOfProducts.value;
        if (searchValue == "") {
            alert("Please enter a search term.");
        } else {
            window.location.href = "https://www.google.com/search?q=" + searchValue;
        }
    });
}


// Redirect when user clicks on the product icon
function redirect() {
    var productIcon = document.getElementById("productIcon");
    productIcon.addEventListener("click", function() {
        window.location.href = "https://www.tiki.vn/search?q=";
    });
}