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
    xhttp.open("GET", "http://192.168.0.58:8080/JukeboxWebService/webapi/pesme", true);
    xhttp.send();

    function myFunction(data) {
        var unique = [];
        var output = "";
        var whole = document.getElementById("whole");
        var elementi = document.getElementById("elementi");
        var content = document.getElementById("content");
        var modHead = document.getElementById("myModalLabel");
        var modBody = document.getElementById("modBody");
        var artName = document.getElementById("artName");
        var musName = document.getElementById("musName");
        // whole.style.display = "flex";
        content.setAttribute("class", "col-md-3")
        elementi.setAttribute("class", "col-md-9")
        ////Nalazi samo razlicidatate vrijednosti i stavlja ih u niz unique
        for (var i = 0; i < data.length; i++) {
            if (unique.indexOf(data[i].izvodjacIme) === -1) {
                unique.push(data[i].izvodjacIme);
            }
        }
        for (var i = 0; i < unique.length; i++) {
            output += '<ul class="nav sidebar-nav"><li id="dataMusic"onclick="selectedArtists(' + i + ')">' + unique[i] + "</li></ul>"
        }
        function selectedArtists(id) {
            var dataArt = [];
            var artData = "<ul id='musicData'";
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
                artData += '<li>' + dataArt[i].izvodjacIme + ' <br><span id="music">' + dataArt[i].naziv + '</span></li><br><a style="float: right" href="#" class="btn btn-success fa fa-shopping-cart" data-toggle="modal" data-target="#basicModal" onclick="myData(' + i + ')"> Play it</a><br><br>';
            }
            function myData(data) {
                var plyArt = "<h2>";
                var plyMus = "<h3>";
                plyArt += dataArt[data].izvodjacIme;
                plyMus += dataArt[data].naziv;
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
                    console.log(plyArt)
                    plyArt += "</h2>";
                    plyMus += "</h3>";
                    
                    artName.innerHTML = plyArt;
                    musName.innerHTML = plyMus;

                    $(document).ready(function () {
                        $("#basicModal").removeClass('fade').modal('hide')
                        $("#project-wrapper").slideDown();
                    });
                }
                )
            };
            window.myData = myData;
            artData += "</ul>"
            elementi.innerHTML = artData;

        }
        window.selectedArtists = selectedArtists;
        output += "";
        content.innerHTML = output;
    }
}
////////////////trending songs
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        trMusic(data);
    }
};
xhttp.open("GET", "http://192.168.0.58:8080/JukeboxWebService/webapi/prometi/top5songs", true);
xhttp.send();

function trMusic(data) {
    var dataout = "<h2>Trending music</h2><br><ul>";
    for (var i = 0; i < data.length; i++) {
        dataout += '<li onclick="myData(' + i + ')">' + data[i].pesmaNaziv + '</span><i style="float: right" class="fa fa-shopping-cart"></i></li><hr>';
    }
    dataout += "</ul>"
    document.getElementById("trendingTracks").innerHTML = dataout;
}
///////////////////////trending artists
var xhttpp = new XMLHttpRequest();
xhttpp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var dataA = JSON.parse(this.responseText);
        trArtists(dataA);
    }
};


xhttpp.open("GET", "http://192.168.0.58:8080/JukeboxWebService/webapi/prometi/top5artists", true);
xhttpp.send();

function trArtists(dataA) {
    var dataoutA = "<h2>Trending artists</h2><br><ul>";
    for (var i = 0; i < dataA.length; i++) {
        dataoutA += '<li onclick="myDataa(' + i + ')">' + dataA[i].izvodjacIme + '</span><i style="float: right" class="fa fa-shopping-cart"></i></li><hr>';
    }
    dataoutA += "</ul>"
    document.getElementById("trendingArtists").innerHTML = dataoutA;
}


function displayGanre() {
    var xhttp = new XMLHttpRequest();
    empty = "";
    var elementi = document.getElementById("elementi");
    var content = document.getElementById("content");
    document.getElementById("elementi").innerHTML = empty;
    content.setAttribute("class", "col-md-3")
    elementi.setAttribute("class", "col-md-9")
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            myFunction(data);
        }
    };
    xhttp.open("GET", "http://192.168.0.58:8080/JukeboxWebService/webapi/pesme", true);
    xhttp.send();


    function myFunction(data) {
        var artName = document.getElementById("artName");
        var musName = document.getElementById("musName");
        var modBody = document.getElementById("modBody");
        var modHead = document.getElementById("myModalLabel");
        var artName = document.getElementById("artName");
        var musName = document.getElementById("musName");
        var unique = [];
        var output = "<table id='ganreNames'>";
        ////Nalazi samo razlicidatate vrijednosti i stavlja ih u niz unique
        for (var i = 0; i < data.length; i++) {
            if (unique.indexOf(data[i].zanrIme) === -1) {
                unique.push(data[i].zanrIme);
            }
        }

        for (var i = 0; i < unique.length; i++) {
            output += '<tr><td onclick="selectedArtists(' + i + ')">' + unique[i] + "</td></tr>"
        }

        console.log(data)
        function selectedArtists(id) {
            var genreData = [];
            var gData = "<ul id='ganreMusic'>";
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
                gData += '<li>' + genreData[i].izvodjacIme + ' <br><span id="music">' + genreData[i].naziv + '</span></li><br><a style="float: right" href="#" class="btn btn-success fa fa-shopping-cart" data-toggle="modal" data-target="#basicModal" onclick="geData(' + i + ')"> Play it</a><br><br>';
            }
            function geData(data) {
                var plyArt = "<h2>";
                var plyMus = "<h3>";
                plyArt += genreData[data].izvodjacIme;
                plyMus += genreData[data].naziv;
                modData = "";
                console.log(data)
                modData += genreData[data].izvodjacIme + ": " + genreData[data].naziv + "<br>Cena: " + genreData[data].cenaKolicina + "din";
                modBody.innerHTML = modData;
                document.getElementById("buyIt").addEventListener("click", function () {
                    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            var data = JSON.parse(this.responseText);
                        }
                    };
                    xhttp.open("POST", "http://192.168.0.58:8080/JukeboxWebService/webapi/prometi/" + genreData[data].id, true);
                    xhttp.send();

                    plyArt += "</h2>";
                    plyMus += "</h3>";
                    
                    artName.innerHTML = plyArt;
                    musName.innerHTML = plyMus;
                    $(document).ready(function () {
                        $("#basicModal").removeClass('fade').modal('hide')
                        $("#project-wrapper").slideDown();
                    });
                }
                )
            }
            window.geData = geData;
            gData += "</ul>"
            document.getElementById("elementi").innerHTML = gData;
        }
        window.selectedArtists = selectedArtists;
        output += "</ul>";
        document.getElementById("content").innerHTML = output;
    }
}
function displayMusic() {
    content.setAttribute("class", "col-md-6")
    elementi.setAttribute("class", "col-md-6")
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
        var output = "<ul id='myUl'>";
        var empty = "";
        for (var i = 0; i < data.length; i++) {
            output += '<li data-toggle="modal" data-target="#basicModal" onclick="myData(' + i + ')">' + data[i].izvodjacIme + '<br><span id="music">' + data[i].naziv + '</span><i style="float: right" class="fa fa-shopping-cart"></i></li><hr>';
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

$(document).ready(function () {
    $("#carousel").carousel({
        interval: 2000
    });
});
