$(document).ready(function () {

    var button = document.querySelector('#button');
    

    function getInfo() {

        var randomNumber = Math.floor((Math.random() * 700) + 1);
        var apiURL = "https://pokeapi.co/api/v2/pokemon/" + randomNumber;

        $.getJSON(apiURL, function (data) {
            $("#name").empty();
            $("#pokeImg").empty();
            $("#name").append(data.name);
            $("#pokeImg").append("<img src='" + data.sprites.front_default +"' alt='A random Pokemon!'>");
            
        });
        
    }

    button.addEventListener("click", getInfo);

});
