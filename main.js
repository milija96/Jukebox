// function loadPunk() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//              myFunction();
//        }
//     };
//     xhttp.open("GET", "http://192.168.0.58:8080/JukeboxWebService/webapi/zanrovi", true);
//     xhttp.send(); 
// }
// function myFunction(xml)
$(document).ready(function () {
    $("#carousel").carousel({
        interval: 2000
    });



    $("#rock").click(function () {
        var displayRock = $('#content');
        displayRock.text('Rock pesme');

        $.ajax({
            type: "GET",
            url: "http://192.168.0.58:8080/JukeboxWebService/webapi/pesme",
            success: function (result) {
                var output = "Rock music <ul>"
                for (var i = 0; i < result.length; i++) {
                    if (result[i].zanrIme === 'Rock') {
                        output += "<li>" + result[i].izvodjacIme + " " + result[i].naziv + "</li>"
                    }
                    //    $("table").addClass("table");
                }
                output += "</ul>";
                displayRock.html(output);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status, );
            }
        });
    });
    $("#punk").click(function () {
        var displayPunk = $('#content');
        displayPunk.text('Punk pesme');
        $.ajax({
            type: "GET",
            url: "http://192.168.0.58:8080/JukeboxWebService/webapi/pesme",
            success: function (result) {
                var output = "Punk music <ul>"
                for (var i = 0; i < result.length; i++) {
                    if (result[i].zanrIme === 'Punk') {
                        output += "<li>" + result[i].izvodjacIme + " " + result[i].naziv + "</li>"
                    }
                    //    $("table").addClass("table");
                }
                output += "</ul>";
                displayPunk.html(output);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status, );
            }
        });
    });
    $("#narodna").click(function(){
        var displayNarodna = $('#content');
        displayNarodna.text('Narodne pesme');

        $.ajax({
            type: "GET",
            url: "http://192.168.0.58:8080/JukeboxWebService/webapi/pesme",
            success: function (result) {
                var output = "Narodna music <ul>"
                for (var i = 0; i < result.length; i++) {
                    if (result[i].zanrIme === 'Narodna') {
                        output += "<li>" + result[i].izvodjacIme + " " + result[i].naziv + "</li>"
                    }
                    //    $("table").addClass("table");
                }
                output += "</ul>";
                displayNarodna.html(output);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status, );
            }
        });
    });
    $("#house").click(function(){
        var displayHouse = $('#content');
        displayHouse.text('House music');

        $.ajax({
            type: "GET",
            url: "http://192.168.0.58:8080/JukeboxWebService/webapi/pesme",
            success: function (result) {
                var output = "House <ul>"
                for (var i = 0; i < result.length; i++) {
                    if (result[i].zanrIme === 'House') {
                        output += "<li>" + result[i].izvodjacIme + " " + result[i].naziv + "</li>"
                    }
                    //    $("table").addClass("table");
                }
                output += "</tbody></table>";
                displayHouse.html(output);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status, );
            }
        });
    });
    var unique = [];
    var allArtists;
    
    $("#artistNav").click(function(){
        var displayArtists = $("#content");
        displayArtists.text("All artists");

        $.ajax({
            type: "GET",
            url: "http://192.168.0.58:8080/JukeboxWebService/webapi/pesme",
            success: function(result){
                allArtists= result;
                var output="<ul>";
                ////Nalazi samo razlicite vrijednosti i stavlja ih u niz unique
                for(var i=0; i<result.length;i++){
                     if(unique.indexOf(result[i].izvodjacIme)=== -1){
                         unique.push(result[i].izvodjacIme);
                     }
                }
                console.log(unique)
                for(var i=0; i<unique.length;i++){
                    output +='<li id="art" onclick="selectedArtists('+ i + ')">' +unique[i]+"</li>"
                }
                output +="</ul>";
                displayArtists.html(output);
                $("#art").click(function(){
                    var data="<ul>";
                    var elem = $("#elementi");
                    for(var i=0;i<allArtists.length;i++){
                        if(allArtists[i].izvodjacIme === "Hladno pivo"){
                            data +="<li>"+ allArtists[i].naziv + "</li>"
                        }
                    }
                    data +="</ul>"
                    elem.html(data);
                });
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status, );
            }
        });


    });
            function selectedArtists(id){
                // console.log(id);
                // console.log(unique[id])
                // console.log(allArtists)
            }
    
            window.selectedArtists = selectedArtists;
});