// var content = document.getElementById("content");
// var elementi = document.getElementById("elementi");

function openPunk() {
    $("#elementi").empty();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            myFunction(data);
            console.log(data);
        }
    };
    xhttp.open("GET", "http://192.168.0.58:8080/JukeboxWebService/webapi/pesme", true);
    xhttp.send();

    function myFunction(data) {
        var content = document.getElementById("content");
        var out = "Punk <ul>";
        for (var i = 0; i < data.length; i++) {
            if (data[i].zanrIme === "Punk") {
                out += "<li>" + data[i].naziv + "</li><br>"
            }
        }
        out += "</ul>"
        document.getElementById("content").innerHTML = out;
    }
}
function openRock() {
    empty = "";
    document.getElementById("elementi").innerHTML = empty;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            myFunction(data);
            console.log(data);
        }
    };
    xhttp.open("GET", "http://192.168.0.58:8080/JukeboxWebService/webapi/pesme", true);
    xhttp.send();

    function myFunction(data) {
        var content = document.getElementById("content");
        var out = "Rock <ul>";
        for (var i = 0; i < data.length; i++) {
            if (data[i].zanrIme === "Rock") {
                out += "<li>" + data[i].naziv + "</li><br>"
            }
        }
        out += "</ul>"
        document.getElementById("content").innerHTML = out;
    }
}
function openNarodna() {
    empty = "";
    document.getElementById("elementi").innerHTML = empty;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            myFunction(data);
            console.log(data);
        }
    };
    xhttp.open("GET", "http://192.168.0.58:8080/JukeboxWebService/webapi/pesme", true);
    xhttp.send();

    function myFunction(data) {
        var content = document.getElementById("content");
        var out = "Narodna <ul>";
        for (var i = 0; i < data.length; i++) {
            if (data[i].zanrIme === "Narodna") {
                out += "<li>" + data[i].naziv + "</li><br>"
            }
        }
        out += "</ul>"
        document.getElementById("content").innerHTML = out;
    }
}
function openHouse() {
    empty = "";
    document.getElementById("elementi").innerHTML = empty;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            myFunction(data);
        }
    };
    xhttp.open("GET", "http://192.168.0.58:8080/JukeboxWebService/webapi/pesme", true);
    xhttp.send();

    function myFunction(data) {
        var content = document.getElementById("content");
        var out = "House <ul>";
        for (var i = 0; i < data.length; i++) {
            if (data[i].zanrIme === "House") {
                out += "<li>" + data[i].naziv + "</li><br>"
            }
        }
        out += "</ul>"
        document.getElementById("content").innerHTML = out;
    }
}
function displayArtists() {
    empty = "";
    document.getElementById("elementi").innerHTML = empty;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            myFunction(data);
        }
    };
    xhttp.open("GET", "file.JSON", true);
    xhttp.send();

    function myFunction(data) {
        var unique = [];
        var output = "<ul>";
        var logo = document.createElement('img');
        var elementi = document.getElementById("elementi");
        var content = document.getElementById("content");
        var modHead = document.getElementById("myModalLabel");
        var modBody = document.getElementById("modBody");
        ////Nalazi samo razlicidatate vrijednosti i stavlja ih u niz unique
        for (var i = 0; i < data.length; i++) {
            if (unique.indexOf(data[i].izvodjacIme) === -1) {
                unique.push(data[i].izvodjacIme);
            }
        }

        for (var i = 0; i < unique.length; i++) {
            output += '<li onclick="selectedArtists(' + i + ')">' + unique[i] + "</li>"
        }

        function selectedArtists(id) {
            var dataArt = [];
            console.log(unique[id])
            var artData = "<ul>";
            var modData = "";
            if (unique[id] === "EKV") {
                dataArt.push(data[5])
            } else if (unique[id] === "Riblja corba") {
                dataArt.push(data[3])
                dataArt.push(data[4])
            }
            else if (unique[id] === "Goblini") {
                dataArt.push(data[2])
            }
            else if (unique[id] === "Hladno pivo") {
                dataArt.push(data[0])
                dataArt.push(data[1])
            }
            else if (unique[id] === "Miroslav Ilic") {
                dataArt.push(data[6])
                dataArt.push(data[8])
            }
            else if (unique[id] === "Saban Saulic") {
                dataArt.push(data[7])
            }
            // za prikaz u browseru
            for (var i = 0; i < dataArt.length; i++) {
                artData += "<li>" + dataArt[i].izvodjacIme + ": " + dataArt[i].naziv + "</li><hr><li>" + dataArt[i].zanrIme + "</li><hr><li>" + dataArt[i].cenaKolicina + 'din</li><a href="#" class="btn btn-lg btn-success" data-toggle="modal" data-target="#basicModal" onclick="myData(' + i + ')">Play it</a><br><br>';


            }
            function myData(data) {
                modData = "";
                modData += dataArt[data].izvodjacIme + ": " + dataArt[data].naziv + "<br>Cena: " + dataArt[data].cenaKolicina + "din";
                modBody.innerHTML = modData;
                document.getElementById("buyIt").addEventListener("click", function () {
                    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            var data = JSON.parse(this.responseText);
                        }
                    };
                    xhttp.open("POST", "http://192.168.0.58:8080/JukeboxWebService/webapi/prometi/" + dataArt[data].id, true);
                    xhttp.send();
                }
                )
            };
            window.myData = myData;
            artData += "</ul>"
            elementi.innerHTML = artData;
            elementi.setAttribute('class', 'allArtStyleMusic')

        }
        window.selectedArtists = selectedArtists;
        output += "</ul>";
        content.innerHTML = output;
        content.setAttribute('class', 'allArtStyle')
    }
}
////////////////trending artists
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        trArtists(data);
    }
};
xhttp.open("GET", "file.JSON", true);
xhttp.send();

function trArtists(data) {
    var unique = [];
    var output = "<ul>";
    var trendingArtists = document.getElementById("trendingArtists");
    ////Nalazi samo razlicidatate vrijednosti i stavlja ih u niz unique
    for (var i = 0; i < data.length; i++) {
        if (unique.indexOf(data[i].izvodjacIme) === -1) {
            unique.push(data[i].izvodjacIme);
        }
    }

    for (var i = 0; i < unique.length; i++) {
        output += '<li onclick="selectedArtists(' + i + ')">' + unique[i] + "</li><hr>"
    }

    function selectedArtists(id) {
        output += "<li>" + unique[id] + "</li>"
        console.log(unique[id])
    }
    window.selectedArtists = selectedArtists;
    output += "</ul>";
    trendingArtists.innerHTML = output;
}

function displayGanre() {
    var xhttp = new XMLHttpRequest();
    empty = "";
    document.getElementById("elementi").innerHTML = empty;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            myFunction(data);
        }
    };
    xhttp.open("GET", "http://192.168.0.58:8080/JukeboxWebService/webapi/pesme", true);
    xhttp.send();


    function myFunction(data) {
        var unique = [];
        var output = "<ul>";
        ////Nalazi samo razlicidatate vrijednosti i stavlja ih u niz unique
        for (var i = 0; i < data.length; i++) {
            if (unique.indexOf(data[i].zanrIme) === -1) {
                unique.push(data[i].zanrIme);
            }
        }

        for (var i = 0; i < unique.length; i++) {
            output += '<li onclick="selectedArtists(' + i + ')">' + unique[i] + "</li>"
        }
        console.log(data)
        function selectedArtists(id) {
            var genreData = [];
            var gData = "";
            if (unique[id] === "Punk") {
                genreData.push(data[0])
                genreData.push(data[1])
                genreData.push(data[2])
            } else if (unique[id] === "Rock") {
                genreData.push(data[3])
                genreData.push(data[4])
                genreData.push(data[5])
            }
            else if (unique[id] === "Narodna") {
                genreData.push(data[6])
                genreData.push(data[7])
                genreData.push(data[8])
            }
            // document.getElementById("elementi").innerHTML = dataArt;
            for (var i = 0; i < genreData.length; i++) {
                gData += "<ul><li>" + genreData[i].izvodjacIme + "</li><li>" + genreData[i].naziv + "</li><li>" + genreData[i].zanrIme + "</li><li>" + genreData[i].cenaKolicina + "</li><li></ul>";
            }
            // artData ="</ul>"
            document.getElementById("elementi").innerHTML = gData;
        }
        window.selectedArtists = selectedArtists;
        output += "</ul>";
        document.getElementById("content").innerHTML = output;
    }
}
function displayMusic() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            myFunction(data);
        }
    };
    xhttp.open("GET", "http://192.168.0.58:8080/JukeboxWebService/webapi/pesme", true);
    xhttp.send();

    function myFunction(data) {
        var output = "<ul>";
        var empty = "";
        for (var i = 0; i < data.length; i++) {
            output += '<li data-toggle="modal" data-target="#basicModal" onclick="myData(' + i + ')">' + data[i].izvodjacIme + '<br><span id="music">' + data[i].naziv + '</span></li><hr>';
        }
        console.log(data)
        function myData(pased) {
            console.log(pased)
            modData = "";
            modData += data[pased].izvodjacIme + ": " + data[pased].naziv + "<br>Cena: " + data[pased].cenaKolicina + "din";
            modBody.innerHTML = modData;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var data = JSON.parse(this.responseText);
                }
            };
            xhttp.open("POST", "http://192.168.0.58:8080/JukeboxWebService/webapi/prometi/" + data[pased].id, true);
            xhttp.send();
        }
        window.myData = myData;
        output += "</ul>"
        document.getElementById("content").innerHTML = output;
        document.getElementById("elementi").innerHTML = empty;
    }
}
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        trendingFunction(data);
    }
};
xhttp.open("GET", "http://192.168.0.58:8080/JukeboxWebService/webapi/prometi", true);
xhttp.send();

function trendingFunction(data) {
    var output = "";
    var empty = "";
    var one ="";
    var one1 ="";
    var one2 ="";
    var one3 ="";
    var one4 ="";
    var one5 ="";
    var one6 ="";
    var one7 ="";
    var one8 ="";

    var dataProm = data;
    var uniqueTracks = [];
    var trendingTracks = document.getElementById("trendingTracks");


    console.log(dataProm)

    }
    trendingTracks.innerHTML = output;
}


$(document).ready(function () {
    $("#carousel").carousel({
        interval: 2000
    });
});
