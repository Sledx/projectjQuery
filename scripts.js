$(document).ready(function(){

var span = $("span");

span.each(function(index, element){
    if(index % 2 == 1) {
        $(element).css("color", "red");
    };
});
    //$("span:odd").css("color", "red") w zadaniu jest pewien bład w tresci, taki raczej logiczny, czepiam się pewnie, ale w konsekwencji wersja skrotowa nie jest rowna tej dluzszej. Mamy wybrac co drugi element, jednak tym kodem tego nei robimy, bo zaczynamy 0/2 co daje 0 wiec pierwszy element jest juz czerwony nie drugi, oczywiście powinniśmy dac == 1. Skroconwa wersja oczywiscie works fine.

var paragraphs = $("p");

paragraphs.each(function(index, element) {
   $(element).append('<button class="btn" data-tmp="' + index + '">Click me</button>')
});

$("button").click(function() {
    alert($(this).attr("data-tmp"));
});    

});
