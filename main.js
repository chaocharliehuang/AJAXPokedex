for (var i = 1; i <= 151; i++) {
    var imgHTML = "<img src='http://pokeapi.co/media/img/" + i + ".png'";
    imgHTML += " id='" + i + "'>";
    $('.pokedex').append(imgHTML);
}

$("img").mouseover(function() {
    var imgID = $(this).attr('id');
    var url = "http://pokeapi.co/api/v1/pokemon/" + imgID;
    $.get(url, function(res) {
        var infoHTML = "<div id='pic-info'>"
        infoHTML += "<h2>" + res.name + "</h2>";
        infoHTML += "<img src='http://pokeapi.co/media/img/" + imgID + ".png'>";

        infoHTML += "<h4>Types</h4><ul>";
        for (var i = 0; i < res.types.length; i++) {
            infoHTML += "<li>" + res.types[i].name + "</li>";
        }
        infoHTML += "</ul>"

        infoHTML += "<h4>Height</h4>";
        infoHTML += res.height;

        infoHTML += "<h4>Weight</h4>";
        infoHTML += res.weight;
        infoHTML += "</div>"

        $(".pokemon-info").html(infoHTML);
        $("#pic-info").hide();
        $("#pic-info").fadeIn();

    }, 'json');
});