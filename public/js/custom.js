// Handle visibility of "back-to-top" button
window.onscroll = function() {
    if ($(document).scrollTop() > 140) {
        showBackToTop();
    }
    else {
        hideBackToTop();
    }
};


// Displays "back-to-top" button
var showBackToTop = function() {
    $('#back-to-top').removeClass("hidden");
}


// Hides "back-to-top" button
var hideBackToTop = function() {
    $('#back-to-top').addClass("hidden");
}


// Sets window location on clicking "back-to-top"
var backToTop = function() {
    window.scrollTo(0,0);
}


// Toggles "sticky-navbar-content" open and closed
var toggleStickyNav = function() {
    $('#sticky-navbar-content').toggleClass("hidden");
}


// Toggle "Read More - Our Story" Button
var toggleReadMore = function() {
    $('#read-more-text').toggleClass("read-more-text-class");
} 