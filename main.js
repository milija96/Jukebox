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
$(document).ready(function (){
    $("#rock").click(function(){
        var displayRock = $('#content');
        displayRock.text('Rock pesme');

        $.ajax({
            type: "GET",
            url: "http://192.168.0.58:8080/JukeboxWebService/webapi/pesme",
            success: function(result){
            console.log(result);
                var output ="<table><thead><tr><th>Izvodjac<th></th><th>Pesma</th></tr></thead><tbody>"
     
                    output +="<tr><td>" + result.izvodjacIme + "</td><td>" +result.naziv+ "</td></tr>"
                output +="</tbody></table>";
               displayRock.html(output);
            //    $("table").addClass("table");
            }
        });
    });
});