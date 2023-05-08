function loadXMLDoc() 
{
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", "available.xml", true);
    xmlhttp.send();
  }
  function myFunction(xml) 
  {
    let i;
    let xmlDoc = xml.responseXML;
    let table= "<tr><th>Название</th><th>Уровень</th><th>Время</th><th>Цена</th></tr>";
    let x = xmlDoc.getElementsByTagName("TARIF");
    for (i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("LEVEL")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("TIME")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
  }