//////navbar colapse when menu item is clicked


$(document).ready(function () {
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    $('.navbar-nav>li>').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    var curentTheme = document.getElementById("navBar").classList.item(3);
    document.getElementById("navBar").classList.toggle(curentTheme, false);
    document.getElementById("navBar").classList.toggle(sessionStorage.getItem("theme"), true);

})
/////recomendations by me
$("#project-wrapper").slideUp();
var xhttp1 = new XMLHttpRequest();
xhttp1.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var dataR = JSON.parse(this.responseText);
        myReco(dataR);
    }
};
xhttp1.open("GET", "http://192.168.0.58:8080/JukeboxWebService/webapi/pesme", true);
xhttp1.send();

function myReco(dataR) {
    var reco = document.getElementById("reco");
    var recoData = "<h2>Recomendations</h2><br>";
    var recom = [];
    for (var i = 0; i < dataR.length; i++) {
        if (dataR[i].id === 9) {
            recom.push(dataR[i]);
        }
        if (dataR[i].id === 10) {
            recom.push(dataR[i]);
        }
        if (dataR[i].id === 11) {
            recom.push(dataR[i]);
        }
    }
    for (var i = 0; i < recom.length; i++) {
        recoData += "<p id='buyP'><a id='link' href='#' data-toggle='modal' data-target='#basicModal' onclick='myRecoData(" + i + ")'>" + recom[i].izvodjacIme + "<span id='music'> " + recom[i].naziv + "</span></a></p><hr>";
    }
    reco.innerHTML = recoData;
    function myRecoData(dataReClick) {
        $("#project-wrapper").slideUp();
        var plyArt = "<h4>";
        var plyMus = "<h5>";
        plyArt += recom[dataReClick].izvodjacIme;
        plyMus += recom[dataReClick].naziv;
        modData = "";
        modData += recom[dataReClick].izvodjacIme + ": " + recom[dataReClick].naziv + "<br>Cena: " + recom[dataReClick].cenaKolicina + "din";
        modBody.innerHTML = modData;
        document.getElementById("buyIt").addEventListener("click", function () {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var data = JSON.parse(this.responseText);
                }
            };
            xhttp.open("POST", "http://192.168.0.58:8080/JukeboxWebService/webapi/prometi/" + recom[dataReClick].id, true);
            xhttp.send();
            plyArt += "</h4>";
            plyMus += "</h5>";

            artName.innerHTML = plyArt;
            musName.innerHTML = plyMus;

            $("#basicModal").removeClass('fade').modal('hide')
            $("#project-wrapper").slideDown();

        })

    } window.myRecoData = myRecoData;
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
    document.onreadystatechange = function () {
        var state = document.readyState
        if (state = 'interactive') {
            document.getElementById('trendingTracks').style.visibility = "hidden";
        } else if (state == 'complete') {
            document.getElementById('interactive');
            document.getElementById('loader').style.visibility = "hidden";
            document.getElementById('trendingTracks').style.visibility = "visible";
        }
    }
    var dataout = "<h2>Trending music</h2><br>";
    for (var i = 0; i < data.length; i++) {
        dataout += '<p  data-toggle="modal" data-target="#basicModal" onclick="myTrendMusic(' + i + ')">' + data[i].pesmaNaziv + '</span><i style="float: right" class="fa fa-play fa spin"></i></p><hr>';
    }
    function myTrendMusic(dataTrending) {
        $("#project-wrapper").slideUp();
        modData = "";
        modData += data[dataTrending].pesmaNaziv + ": " + data[dataTrending].cenaKolicina + "din";
        modBody.innerHTML = modData;
        document.getElementById("buyIt").addEventListener("click", function () {
            var plyArt = "<h4>";
            var plyMus = "<h5>";
            plyMus += data[dataTrending].pesmaNaziv;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var data = JSON.parse(this.responseText);
                }
            };
            xhttp.open("POST", "http://192.168.0.58:8080/JukeboxWebService/webapi/prometi/" + data[dataTrending].id, true);
            xhttp.send();
            plyArt += "</h4>";
            plyMus += "</h5>";

            artName.innerHTML = plyArt;
            musName.innerHTML = plyMus;

            $("#basicModal").removeClass('fade').modal('hide')
            $("#project-wrapper").slideDown();
        }

        )
    } window.myTrendMusic = myTrendMusic;

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
    var dataoutA = "<h2>Trending artists</h2><br>";
    for (var i = 0; i < dataA.length; i++) {
        dataoutA += '<p onclick="displayMusicOfArt(' + i + ')">' + dataA[i].izvodjacIme + '</span></p><hr>';
    }
    dataoutA += ""

    document.getElementById("trendingArtists").innerHTML = dataoutA;
    function displayMusicOfArt(dat) {
        console.log(dat)
        var elementi = document.getElementById("elementi");
        var content = document.getElementById("content");

        var artName = document.getElementById("artName");
        var musName = document.getElementById("musName");
        var modBody = document.getElementById("modBody");
        var modHead = document.getElementById("myModalLabel");
        var artName = document.getElementById("artName");
        var musName = document.getElementById("musName");

        content.setAttribute("class", "col-md-6");
        elementi.setAttribute("class", "col-md-6");
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
            var output = "";
            var empty = "";
            for (var i = 0; i < data.length; i++) {
                output += '<p id="buyMus" data-toggle="modal" data-target="#basicModal" onclick="myData(' + i + ')">' + data[i].izvodjacIme + '<br><span id="music">' + data[i].naziv + '</span><i id="cart" class="fa fa-shopping-cart"></i></p><hr>';
            }
            console.log(dat)
            function myData(pased) {
                $("#project-wrapper").slideUp();
                var plyArt = "<h4>";
                var plyMus = "<h5>";
                plyArt += dat[pased].izvodjacIme;
                plyMus += dat[pased].naziv;
                modData = "";
                modData += dat[pased].izvodjacIme + ": " + dat[pased].naziv + "<br>Cena: " + dat[pased].cenaKolicina + "din";
                modBody.innerHTML = modData;
                document.getElementById("buyIt").addEventListener("click", function () {
                    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            var data = JSON.parse(this.responseText);
                        }
                    };
                    xhttp.open("POST", "http://192.168.0.58:8080/JukeboxWebService/webapi/prometi/" + data[pased].id, true);
                    xhttp.send();
                    plyArt += "</h4>";
                    plyMus += "</h5>";

                    artName.innerHTML = plyArt;
                    musName.innerHTML = plyMus;
                    $(document).ready(function () {
                        $("#basicModal").removeClass('fade').modal('hide')
                        $("#project-wrapper").slideDown();
                    });
                })

            }
            window.myData = myData;

            document.getElementById("content").innerHTML = output;
            document.getElementById("elementi").innerHTML = empty;
        }
    } window.displayMusicOfArt = displayMusicOfArt;
}
//////open all music with ganre punk
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
                out += "<li id='buyMus' data-toggle='modal' data-target='#basicModal' onclick='myData(" + i + ")'>" + data[i].izvodjacIme + '<br><span id="music">' + data[i].naziv + '</span><i id="cart" class="fa fa-shopping-cart"></i></li><hr>';
            }
        }
        function myData(pased) {
            $("#project-wrapper").slideUp();
            var plyArt = "<h4>";
            var plyMus = "<h5>";
            plyArt += data[pased].izvodjacIme;
            plyMus += data[pased].naziv;
            modData = "";
            modData += data[pased].izvodjacIme + ": " + data[pased].naziv + "<br>Cena: " + data[pased].cenaKolicina + "din";
            modBody.innerHTML = modData;
            document.getElementById("buyIt").addEventListener("click", function () {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        var data = JSON.parse(this.responseText);
                    }
                };
                xhttp.open("POST", "http://192.168.0.58:8080/JukeboxWebService/webapi/prometi/" + data[pased].id, true);
                xhttp.send();
                plyArt += "</h4>";
                plyMus += "</h5>";

                artName.innerHTML = plyArt;
                musName.innerHTML = plyMus;
                $(document).ready(function () {
                    $("#basicModal").removeClass('fade').modal('hide')
                    $("#project-wrapper").slideDown();
                });
            })

        }
        window.myData = myData;
        out += "</ul>"
        document.getElementById("content").innerHTML = out;

    }
}
//////open all music with ganre rock
function openRock() {
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
        var out = "Rock <ul>";
        for (var i = 0; i < data.length; i++) {
            if (data[i].zanrIme === "Rock") {
                out += "<li id='buyMus' data-toggle='modal' data-target='#basicModal' onclick='myData(" + i + ")'>" + data[i].izvodjacIme + '<br><span id="music">' + data[i].naziv + '</span><i id="cart" class="fa fa-shopping-cart"></i></li><hr>';
            }
        }
        function myData(pased) {
            $("#project-wrapper").slideUp();
            var plyArt = "<h4>";
            var plyMus = "<h5>";
            plyArt += data[pased].izvodjacIme;
            plyMus += data[pased].naziv;
            modData = "";
            modData += data[pased].izvodjacIme + ": " + data[pased].naziv + "<br>Cena: " + data[pased].cenaKolicina + "din";
            modBody.innerHTML = modData;
            document.getElementById("buyIt").addEventListener("click", function () {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        var data = JSON.parse(this.responseText);
                    }
                };
                xhttp.open("POST", "http://192.168.0.58:8080/JukeboxWebService/webapi/prometi/" + data[pased].id, true);
                xhttp.send();
                plyArt += "</h4>";
                plyMus += "</h5>";

                artName.innerHTML = plyArt;
                musName.innerHTML = plyMus;
                $(document).ready(function () {
                    $("#basicModal").removeClass('fade').modal('hide')
                    $("#project-wrapper").slideDown();
                });
            })

        }
        window.myData = myData;
        out += "</ul>"
        document.getElementById("content").innerHTML = out;
    }
}
//////open all music with ganre narodna
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
                out += "<li id='buyMus' data-toggle='modal' data-target='#basicModal' onclick='myData(" + i + ")'>" + data[i].izvodjacIme + '<br><span id="music">' + data[i].naziv + '</span><i id="cart" class="fa fa-shopping-cart"></i></li><hr>';
            }
        }
        function myData(pased) {
            $("#project-wrapper").slideUp();
            var plyArt = "<h4>";
            var plyMus = "<h5>";
            plyArt += data[pased].izvodjacIme;
            plyMus += data[pased].naziv;
            modData = "";
            modData += data[pased].izvodjacIme + ": " + data[pased].naziv + "<br>Cena: " + data[pased].cenaKolicina + "din";
            modBody.innerHTML = modData;
            document.getElementById("buyIt").addEventListener("click", function () {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        var data = JSON.parse(this.responseText);
                    }
                };
                xhttp.open("POST", "http://192.168.0.58:8080/JukeboxWebService/webapi/prometi/" + data[pased].id, true);
                xhttp.send();
                plyArt += "</h4>";
                plyMus += "</h5>";

                artName.innerHTML = plyArt;
                musName.innerHTML = plyMus;
                $(document).ready(function () {
                    $("#basicModal").removeClass('fade').modal('hide')
                    $("#project-wrapper").slideDown();
                });
            })

        }
        window.myData = myData;
        out += "</ul>"
        document.getElementById("content").innerHTML = out;
    }
}
//////open all music with ganre house
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
        function myData(pased) {
            $("#project-wrapper").slideUp();
            var plyArt = "<h4>";
            var plyMus = "<h5>";
            plyArt += data[pased].izvodjacIme;
            plyMus += data[pased].naziv;
            modData = "";
            modData += data[pased].izvodjacIme + ": " + data[pased].naziv + "<br>Cena: " + data[pased].cenaKolicina + "din";
            modBody.innerHTML = modData;
            document.getElementById("buyIt").addEventListener("click", function () {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        var data = JSON.parse(this.responseText);
                    }
                };
                xhttp.open("POST", "http://192.168.0.58:8080/JukeboxWebService/webapi/prometi/" + data[pased].id, true);
                xhttp.send();
                plyArt += "</h4>";
                plyMus += "</h5>";

                artName.innerHTML = plyArt;
                musName.innerHTML = plyMus;
                $(document).ready(function () {
                    $("#basicModal").removeClass('fade').modal('hide')
                    $("#project-wrapper").slideDown();
                });
            })

        }
        window.myData = myData;
        out += "</ul>"
        document.getElementById("content").innerHTML = out;
    }
}
////display all artist then all their music
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
        var output = "<table id='ganreNames'><th colspan='3'>Music</th>";
        var whole = document.getElementById("whole");
        var elementi = document.getElementById("elementi");
        var content = document.getElementById("content");
        var modHead = document.getElementById("myModalLabel");
        var modBody = document.getElementById("modBody");
        var artName = document.getElementById("artName");
        var musName = document.getElementById("musName");
        // whole.style.display = "flex";
        content.setAttribute("class", "col-md-3 col-lg-3 col-sm-12")
        elementi.setAttribute("class", "col-md-7 col-lg-7 col-sm-12")
        ////Nalazi samo razlicidatate vrijednosti i stavlja ih u niz unique
        for (var i = 0; i < data.length; i++) {
            if (unique.indexOf(data[i].izvodjacIme) === -1) {
                unique.push(data[i].izvodjacIme);
            }
        }
        for (var i = 0; i < unique.length; i++) {
            output += '<tr id="musicRow" class=""><td>' + '<i class="fa fa-music"></i></td><td onclick="selectedArtists(' + i + ')">' + unique[i] + "</td></tr>"
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
                artData += '<li>' + dataArt[i].izvodjacIme + ' <br><span id="music">' + dataArt[i].naziv + '</span></li><br><a id="musicButton" style="float: right" href="#" class="btn btn-success " data-toggle="modal" data-target="#basicModal" onclick="myData(' + i + ')"> Play it</a><br><br>';
            }
            function myData(data) {
                $("#project-wrapper").slideUp();
                var plyArt = "<h4>";
                var plyMus = "<h5>";
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
                    plyArt += "</h4>";
                    plyMus += "</h5>";

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
        output += "</tr></table>";
        content.innerHTML = output;
    }
}
//////open all ganres then music by ganres
function displayGanre() {
    var xhttp = new XMLHttpRequest();
    empty = "";
    var elementi = document.getElementById("elementi");
    var content = document.getElementById("content");
    document.getElementById("elementi").innerHTML = empty;
    content.setAttribute("class", "col-md-3")
    elementi.setAttribute("class", "col-md-7")
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            myFunction(data);
        }
    };
    xhttp.open("GET", "http://192.168.0.58:8080/JukeboxWebService/webapi/pesme", true);
    xhttp.send();

    function myFunction(data) {
        console.log(data)
        var artName = document.getElementById("artName");
        var musName = document.getElementById("musName");
        var modBody = document.getElementById("modBody");
        var modHead = document.getElementById("myModalLabel");
        var artName = document.getElementById("artName");
        var musName = document.getElementById("musName");
        var unique = [];
        var output = "<table id='ganreNames'><th colspan='3'>Music ganres</th>";
        ////Nalazi samo razlicidatate vrijednosti i stavlja ih u niz unique
        for (var i = 0; i < data.length; i++) {
            if (unique.indexOf(data[i].zanrIme) === -1) {
                unique.push(data[i].zanrIme);
            }
        }

        for (var i = 0; i < unique.length; i++) {
            output += '<tr id="ganreRow"><td>' + '<i class="fa fa-music"></i></td><td onclick="selectedArtists(' + i + ')">' + unique[i] + "</td></tr>"

        }
        function selectedArtists(id) {
            $("#project-wrapper").slideUp();
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
                gData += '<li>' + genreData[i].izvodjacIme + ' <br><span id="music">' + genreData[i].naziv + '</span></li><br><a id="playItbtn" style="float: right" href="#" class="btn btn-success fa fa-shopping-cart" data-toggle="modal" data-target="#basicModal" onclick="geData(' + i + ')"> Play it</a><br><br>';
            }
            function geData(data) {
                $("#project-wrapper").slideUp();
                var plyArt = "<h4>";
                var plyMus = "<h5>";
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

                    plyArt += "</h4>";
                    plyMus += "</h5>";

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
        output += "</tr></table>";
        document.getElementById("content").innerHTML = output;
    }
}
///////////////display all music
function displayMusic() {
    var elementi = document.getElementById("elementi");
    var content = document.getElementById("content");

    var artName = document.getElementById("artName");
    var musName = document.getElementById("musName");
    var modBody = document.getElementById("modBody");
    var modHead = document.getElementById("myModalLabel");
    var artName = document.getElementById("artName");
    var musName = document.getElementById("musName");

    content.setAttribute("class", "col-md-6");
    elementi.setAttribute("class", "col-md-6");
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
        var output = "<ul id='myUl'>";
        var empty = "";
        for (var i = 0; i < data.length; i++) {
            output += '<li id="buyMus" data-toggle="modal" data-target="#basicModal" onclick="myData(' + i + ')">' + data[i].izvodjacIme + '<br><span id="music">' + data[i].naziv + '</span><i id="cart" class="fa fa-shopping-cart"></i></li><hr>';
        }
        console.log(data)
        function myData(pased) {
            $("#project-wrapper").slideUp();
            var plyArt = "<h4>";
            var plyMus = "<h5>";
            plyArt += data[pased].izvodjacIme;
            plyMus += data[pased].naziv;
            modData = "";
            modData += data[pased].izvodjacIme + ": " + data[pased].naziv + "<br>Cena: " + data[pased].cenaKolicina + "din";
            modBody.innerHTML = modData;
            document.getElementById("buyIt").addEventListener("click", function () {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        var data = JSON.parse(this.responseText);
                    }
                };
                xhttp.open("POST", "http://192.168.0.58:8080/JukeboxWebService/webapi/prometi/" + data[pased].id, true);
                xhttp.send();
                plyArt += "</h4>";
                plyMus += "</h5>";

                artName.innerHTML = plyArt;
                musName.innerHTML = plyMus;
                $(document).ready(function () {
                    $("#basicModal").removeClass('fade').modal('hide')
                    $("#project-wrapper").slideDown();
                });
            })

        }
        window.myData = myData;
        output += "</ul>"
        document.getElementById("content").innerHTML = output;
        document.getElementById("elementi").innerHTML = empty;
    }
}
///////////sing up form function
function singUp() {
    event.preventDefault();
    var id = "";
    var emailValue = "";
    var passwordValue = ""
    var elements = document.getElementById("sing-up-form").elements;
    for (var i = 0; i < elements.length; i++) {
        emailValue = elements[0].value;
        passwordValue = elements[1].value;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
        }
    };
    xhttp.open("POST", "http://192.168.0.58:8080/JukeboxWebService/webapi/korisnici", true, );
    xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhttp.send(JSON.stringify({ email: emailValue, sifra: passwordValue }));
}
/////////////sing in form function
function singIn() {
    event.preventDefault();
    var id = "";
    var emailValue = "";
    var passwordValue = "";
    var empty = "";
    var mesagge = "Wrong credentials";
    var elements = document.getElementById("sing-in-form").elements;
    document.getElementById("msg").innerHTML = empty;
    for (var i = 0; i < elements.length; i++) {
        emailValue = elements[0].value;
        passwordValue = elements[1].value;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function ()
    {
        var stat = xhttp.status;
        status(stat);
        if (this.readyState == 4 && this.status == 200) {
            var data = this.responseText;
            localStorage.setItem('token', data)
            
        }
  
    };
    xhttp.open("POST", "http://192.168.0.58:8080/JukeboxWebService/webapi/korisnici/login", true, );
    xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhttp.send(JSON.stringify({email: emailValue, sifra: passwordValue}));
    function status(stat){
        if(stat === 403 || stat === 0){
            document.getElementById("msg").innerHTML = mesagge;
        }
    }
}
///////////the next function is used to change the style of the page, and save propertyes in session storage
function changeIt() {
    var clicked = document.activeElement;
    var themeName = clicked.getAttribute("rel");
    var theme = themeName;
    setTheme(theme);
}
function setTheme(theme) {
    var curentTheme = document.getElementById("navBar").classList.item(3);
    document.getElementById("navBar").classList.toggle(curentTheme, false);
    document.getElementById("navBar").classList.toggle(theme, true);
    sessionStorage.theme = theme;
}
$(document).ready(function () {
    $("#carousel").carousel({
        interval: 2000
    });
});