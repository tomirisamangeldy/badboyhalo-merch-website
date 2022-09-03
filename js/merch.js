const displayImage = document.querySelector('.display-img')
const imageSelectors = document.querySelectorAll('.select-image')
imageSelectors.forEach(selector => {
    selector.addEventListener('click', (e) => {
        displayImage.src = selector.children[0].src
    })
})
// SIZE SELECT 
$(".small-size").each(function() {
    var button = $(this); button.on("click", function () { button.toggleClass("small-size"); button.toggleClass("size-selected");  
 }) }); 
    
$(".medium-size").each(function() {
    var button = $(this); button.on("click", function () { button.toggleClass("medium-size"); button.toggleClass("size-selected"); 
 }) });
    
$(".large-size").each(function() {
    var button = $(this); button.on("click", function () { button.toggleClass("large-size"); button.toggleClass("size-selected"); 
 }) });
