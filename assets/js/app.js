$(document).ready(function() {
    $("#mexico-photos").toggle(
        function() {$("#mexico-photos").css({"background-image": "url(assets/images/cdmx.jpeg)"})},
        function() {$("#mexico-photos").css({"background-image": "url(assets/images/angeles.jpeg)"})},
        function() {$("#mexico-photos").css({"background-image": "url(assets/images/dubai.jpeg)"})}
    )
    $("#colombia-photo").toggle(
        function() {$("#colombia-photo").css({"background-image": "url(assets/images/colombia.jpg)"})},
        function() {$("#colombia-photo").css({"background-image": "url(assets/images/gdl.jpeg)"})},
        function() {$("#colombia-photo").css({"background-image": "url(assets/images/dubai.jpeg)"})}
    )
    
}) 
$("#mexico-photos").css({"background-image": "url(assets/images/cdmx.jpeg)"})
$("#colombia-photo").css({"background-image": "url(assets/images/colombia.jpg)"})