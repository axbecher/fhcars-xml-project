function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {

        
        if (this.readyState == 4 && this.status == 200) {
            empDetails(this);
        }
    };

    
    xmlhttp.open("GET", "../FH_Cars.xml", true);
    xmlhttp.send();
}

function empDetails(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table =
        `<tr class='sticky-top'>
        <th>Imagine</th>
        <th>Nume si Model</th>
        <th>Tip model</th>
        <th>Pret in jpc</th>
        <th>Sursa masina</th>
        <th>Statistici stoc</th>
        <th>Rating stoc</th>
        <th>Tractiune</th>
        <th>Scor Viteza</th>
        <th>Scor Control</th>
        <th>Scor Acceleratie</th>
        <th>Scor Lansare</th>
        <th>Scor Franare</th>
        <th>Scor Offroad</th>
        <th>Viteza maxima</th>
        <th>De la 0 la 60 MPH</th>
        <th>De la 0 la 100 MPH</th>
        <th>Forta G</th>
        <th>Sursa masina 1</th>
        <th>Sursa masina 2</th>
        <th>Cai putere</th>
        <th>Greutate in lbs</th>
        </tr>`;
    var x = xmlDoc.getElementsByTagName("GameObject");

    // Start to fetch the data by using TagName 
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            `<img src="${x[i].getElementsByTagName("Car_Image")[0].childNodes[0].nodeValue}">`
            + "</td><td>" +
            x[i].getElementsByTagName("Name_and_model")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Model_type")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("In_Game_Price")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("car_source")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("stock_specs")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Stock_Rating")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Drive_Type")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("speed")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("handling")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("acceleration")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("launch")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("braking")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Offroad")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Top_Speed")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("_0-60_Mph")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("_0-100_Mph")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("g-force")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("car_source_1")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("car_source_2")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Horse_Power")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Weight_lbs")[0]
            .childNodes[0].nodeValue + "</td></tr>";
    }

    // Print the xml data in table form
    document.getElementById("tableFHCars").innerHTML = table;

    

}