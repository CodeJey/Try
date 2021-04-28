function loadPage() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "cd_catalog.xml", true)
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            loadData(this);
        }
    }
}
function loadData(req) {
    var xmlR = req.responseXML;
    var table = "<tr><th>Title</th><th>Artist</th></tr>";
    var el = xmlR.getElementsByTagName("CD");
    for (var i = 0; i < el.length; i++ ){
        table += "<tr><td>" + el[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue + "</td><td>" + el[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue + "</td></tr>";
    }
    document.getElementById("demo").style = "display: table";
    document.getElementById("demo").innerHTML = table;
}