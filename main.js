function remain() {
    var clicked = document.activeElement;
    var attr = clicked.getAttribute("rel");
    console.log(clicked)
    if (attr !== null) {
        funct = "display" + attr + "";
        localStorage.funct = funct;
        console.log(funct)
    }
}
function clickItY() {
    var xhttp = new XMLHttpRequest();
    var token = localStorage.getItem("token");
    console.log(token)
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        }
    };
    xhttp.open("GET", " http://192.168.0.58:8080/JukeboxWebService/webapi/prometi/checkJWT", true);
    xhttp.setRequestHeader("Authorization", token);
    xhttp.send();

}
function showSpiner() {
    var whole = document.getElementById("whole");
    var spiner = document.getElementById("spiner");
    spiner.style.visibility = "visible";
}
function hideSpiner() {
    var whole = document.getElementById("whole");
    var spiner = document.getElementById("spiner");
    whole.style.visibility = "visible";
    spiner.style.visibility = "hidden";
}
setInterval(hideSpiner, 1200);
setTimeout(showSpiner, 0);

$(document).ready(function () {
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    $('.navbar-nav>li>').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    var status = localStorage.getItem("status");
    if(status !== null){
    document.getElementById("status").style.backgroundColor = status;
    }
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
        recoData += "<p id='buyP'><a id='link' href='#' data-toggle='modal' data-target='#basicModal' onclick='myRecoData(" + i + ")'>" + recom[i].izvodjacIme + "<span id='music'> " + recom[i].naziv + "</span></a></p>";
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
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         var data = JSON.parse(this.responseText);
//         trMusic(data);
//     }
// };
// xhttp.open("GET", "http://192.168.0.58:8080/JukeboxWebService/webapi/prometi/top5songs", true);
// xhttp.send();

// function trMusic(data) {
//     var token = localStorage.getItem("token");
//     document.onreadystatechange = function () {
//         var state = document.readyState

//     }
//     var dataout = "<h2>Trending music</h2><br>";
//     for (var i = 0; i < data.length; i++) {
//         dataout += '<p  data-toggle="modal" data-target="#basicModal" onclick="myTrendMusic(' + i + ')">' + data[i].pesmaNaziv + '</span><i style="float: right" class="fa fa-play fa spin"></i></p><hr>';
//     }
//     function myTrendMusic(dataTrending) {
//         $("#project-wrapper").slideUp();
//         modData = "";
//         modData += data[dataTrending].pesmaNaziv + ": " + data[dataTrending].cenaKolicina + "din";
//         modBody.innerHTML = modData;
//         document.getElementById("buyIt").addEventListener("click", function () {
//             if (token !== null) {
//                 var plyArt = "<h4>";
//                 var plyMus = "<h5>";
//                 plyMus += data[dataTrending].pesmaNaziv;
//                 var xhttp = new XMLHttpRequest();
//                 xhttp.onreadystatechange = function () {
//                     if (this.readyState == 4 && this.status == 200) {
//                         var data = JSON.parse(this.responseText);
//                     }
//                 };
//                 xhttp.open("POST", "http://192.168.0.58:8080/JukeboxWebService/webapi/prometi/" + data[dataTrending].id, true);
//                 xhttp.send();
//                 plyArt += "</h4>";
//                 plyMus += "</h5>";

//                 artName.innerHTML = plyArt;
//                 musName.innerHTML = plyMus;

//                 $("#basicModal").removeClass('fade').modal('hide')
//                 $("#project-wrapper").slideDown();
//             }
//             else {
//                 alert("You need to be loged in");
//             }
//         }

//         )
//     } window.myTrendMusic = myTrendMusic;

//     document.getElementById("trendingTracks").innerHTML = dataout;
// }
///////////////////////trending artists
// var xhttpp = new XMLHttpRequest();
// xhttpp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         var dataA = JSON.parse(this.responseText);
//         trArtists(dataA);
//     }
// };

// xhttpp.open("GET", "http://192.168.0.58:8080/JukeboxWebService/webapi/prometi/top5artists", true);
// xhttpp.send();

// function trArtists(dataA) {
//     var token = localStorage.getItem("token");

//     var dataoutA = "<h2>Trending artists</h2><br>";
//     for (var i = 0; i < dataA.length; i++) {
//         dataoutA += '<p onclick="displayMusicOfArt(' + i + ')">' + dataA[i].izvodjacIme + '</span></p><hr>';
//     }
//     dataoutA += ""

//     document.getElementById("trendingArtists").innerHTML = dataoutA;
//     function displayMusicOfArt(dat) {
//         var elementi = document.getElementById("elementi");
//         var content = document.getElementById("content");

//         var artName = document.getElementById("artName");
//         var musName = document.getElementById("musName");
//         var modBody = document.getElementById("modBody");
//         var modHead = document.getElementById("myModalLabel");
//         var artName = document.getElementById("artName");
//         var musName = document.getElementById("musName");

//         content.setAttribute("class", "col-md-6");
//         elementi.setAttribute("class", "col-md-6");
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 var data = JSON.parse(this.responseText);
//                 myFunction(data);
//             }
//         };
//         xhttp.open("GET", "http://192.168.0.58:8080/JukeboxWebService/webapi/pesme", true);
//         xhttp.send();

//         window.myData = myData;

//         document.getElementById("content").innerHTML = output;
//         document.getElementById("elementi").innerHTML = empty;
//     }
// } window.displayMusicOfArt = displayMusicOfArt;

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
        var token = localStorage.getItem("token");
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
                if (token !== null) {
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
                } else {
                    alert("You are not logged in")
                }
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
        var token = localStorage.getItem("token");

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
                if (token !== null) {
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
                } else {
                    alert("You are not logged in")
                }
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
        var token = localStorage.getItem("token");

        var content = document.getElementById("content");
        var out = "Narodna <ul>";
        for (var i = 0; i < data.length; i++) {
            if (data[i].zanrIme === "Narodna") {
                out += "<li id='buyMus' data-toggle='modal' data-target='#basicModal' onclick='myData(" + i + ")'>" + data[i].izvodjacIme + '<br><span id="music">' + data[i].naziv + '</span><i id="cart" class="fa fa-shopping-cart"></i></li>';
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
                if (token !== null) {
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
                } else {
                    alert("You are not logged in")
                }
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
        var token = localStorage.getItem("token");

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
                if (token !== null) {
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
                } else {
                    alert("You are not logged in")
                }
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
    xhttp.open("GET", "http://192.168.0.58:8080/JukeboxWebService/webapi/pesme", true);
    xhttp.send();
    var tag = document.getElementById("art");

    remain()

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

        var token = localStorage.getItem("token");

        var tag = document.getElementById("art");


        // whole.style.display = "flex";
        content.setAttribute("class", "col-md-5 col-lg-3 col-sm-12")
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
                var modUser = "";
                plyArt += dataArt[data].izvodjacIme;
                plyMus += dataArt[data].naziv;


                modData = "";
                modData += dataArt[data].izvodjacIme + ": " + dataArt[data].naziv + "<br>Cena: " + dataArt[data].cenaKolicina + "din<br>You are logged as:" + modUser;
                modBody.innerHTML = modData;

                document.getElementById("buyIt").addEventListener("click", function () {
                    if (token !== null) {
                        console.log(token)
                        var xhttp = new XMLHttpRequest();
                        xhttp.onreadystatechange = function () {
                            if (this.readyState == 4 && this.status == 200) {
                                var data = JSON.parse(this.responseText);
                            }
                        };
                        xhttp.open("POST", "http://192.168.0.58:8080/JukeboxWebService/webapi/prometi/" + dataArt[data].id, true);
                        xhttp.setRequestHeader("Authorization", token);
                        xhttp.send();
                        plyArt += "</h4>";
                        plyMus += "</h5>";


                        artName.innerHTML = plyArt;
                        musName.innerHTML = plyMus;

                        $(document).ready(function () {
                            $("#basicModal").removeClass('fade').modal('hide')
                            $("#project-wrapper").slideDown();
                        });
                    } else {
                        alert("You need to be logged in")
                    }

                })

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
    content.setAttribute("class", "col-md-5 col-lg-3 col-sm-12")
    elementi.setAttribute("class", "col-md-7 col-lg-7 col-sm-12")
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            myFunction(data);
        }
    };
    xhttp.open("GET", "file.JSON", true);
    xhttp.send();

    remain()

    function myFunction(data) {
        var token = localStorage.getItem("token");

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
                gData += '<li>' + genreData[i].izvodjacIme + ' <br><span id="music">' + genreData[i].naziv + '</span></li><br><a id="playItbtn" style="float: right" href="#" class="btn btn-success" data-toggle="modal" data-target="#basicModal" onclick="geData(' + i + ')"> Play it</a><br><br>';
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
                    if(token !== null){
                    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            var data = JSON.parse(this.responseText);
                        }
                    };
                    xhttp.open("POST", "http://192.168.0.58:8080/JukeboxWebService/webapi/prometi/" + genreData[data].id, true);
                    xhttp.send(token);

                    plyArt += "</h4>";
                    plyMus += "</h5>";

                    artName.innerHTML = plyArt;
                    musName.innerHTML = plyMus;
                    $(document).ready(function () {
                        $("#basicModal").removeClass('fade').modal('hide')
                        $("#project-wrapper").slideDown();
                    });
                }
                else{
                    alert("You need to be logged in")
                }
                })
                
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
    var token = localStorage.getItem("token");

    var tag = document.getElementById("mus");
    content.setAttribute("class", "col-md-6");
    elementi.setAttribute("class", "col-md-12");



    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            myFunction(data);
        }
    };
    xhttp.open("GET", "file.JSON", true);
    xhttp.send();

    remain()

    function myFunction(data) {
        var output = "";
        var empty = "";
        for (var i = 0; i < data.length; i++) {
            output += '<p id="buyMus" data-toggle="modal" data-target="#basicModal" onclick="myData(' + i + ')">' + data[i].izvodjacIme + '<br><span id="music">' + data[i].naziv + '</span><i id="cart" class="fa fa-shopping-cart"></i></p>';
        }
        // var list = "<ul class='pagination'>";
        // var listI = "";
        // var num ="dzoooooo";
        // for(let i = 0;i<5;i++){
        //     listI += "<li class='page-item'><a class='page-link'>"+num+"</a></li>"
        // }
        // list +="</ul>"
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
        // output += "</ul>"
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
        repeatPasswordValue = elements[2].value;
    }
    if (passwordValue === repeatPasswordValue) {
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
}
/////////////sing in form function
function singIn() {
    event.preventDefault();
    var id = "";
    var emailValue = "";
    var passwordValue = "";
    var empty = "";
    var mesagge1 = "Wrong credentials";
    var mesagge2 = "Success";
    var mesagge3 = "Something went wrong";
    var elements = document.getElementById("sing-in-form").elements;
    document.getElementById("msg").innerHTML = empty;
    for (var i = 0; i < elements.length; i++) {
        emailValue = elements[0].value;
        passwordValue = elements[1].value;
    }
    var xhttp = new XMLHttpRequest();
    var status = xhttp.status;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var stat = xhttp.status;
            statusOf(stat)
            var data = this.responseText;
            localStorage.setItem('token', data)
        }

    };
    localStorage.status = "green";
    function statusOf(stat) {
        if (stat === 409) {
            document.getElementById("msg").innerHTML = mesagge1;
        }
        if (stat === 200) {
            document.getElementById("msg").innerHTML = mesagge2;
            localStorage.status = "green";
            document.getElementById("status").style.backgroundColor = "green";
            $("#sing-modal").removeClass("fade").modal("hide")
            $("#sing-in").trigger("reset");
        }
        else {
            document.getElementById("msg").innerHTML = mesagge3;
        }
    }
    xhttp.open("POST", "http://192.168.0.58:8080/JukeboxWebService/webapi/korisnici/login", true, );
    xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhttp.send(JSON.stringify({ email: emailValue, sifra: passwordValue }));

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
function singOut() {
    if (localStorage.getItem("token") !== null) {
        localStorage.removeItem("token");
        alert("You have singed out");
    }
    if(localStorage.getItem("status") !== null) {
        localStorage.removeItem("status");
        document.getElementById("status").style.backgroundColor = "transparent";
    }

}
function remain() {
    var clicked = document.activeElement;
    var attr = clicked.getAttribute("rel");
    console.log(clicked)
    if (attr !== null) {
        funct = "display" + attr + "";
        localStorage.funct = funct;
        console.log(funct)
    }
}
function displayHome() {
    localStorage.removeItem("funct")
}
function showSing() {
    console.log("W")
    var singUp = document.getElementById("sing-up");
    $(singUp).slideToggle();
}
function remain() {
    var clicked = document.activeElement;
    var attr = clicked.getAttribute("rel");
    console.log(clicked)
    if (attr !== null) {
        funct = "display" + attr + "";
        localStorage.funct = funct;
        console.log(funct)
    }
}
$(document).ready(function () {
    $("#carousel").carousel({
        interval: 2000
    });
});
