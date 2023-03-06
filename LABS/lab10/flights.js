var flight = new Array();
    flight[0] = {
        Airline: 'Alaska',
        Flight: 'ASA107',
        Origin: 'Seattle-Tacoma Intl (KSEA)',
        Destination: 'Anchorage, AK',
        Departure: 'Sun 10:19PM PST',
        Arrival: 'Mon 12:34AM AKST',
        Gate: 'C1',
        Duration: 'TEST'
    };

    flight[1] = {
        Airline: 'Alaska',
        Flight: 'ASA1330',
        Origin: 'Los Angeles Intl (KLAX)',
        Destination: 'Guanacaste (LIR / MRLB)',
        Departure: 'Sun 11:35PM PST',
        Arrival: 'Mon 06:39AM CST',
        Gate: 'LIR',
        Duration: 'TEST'
    };

    flight[2] = {
        Airline: 'Alaska',
        Flight: 'ASA1416',
        Origin: 'San Jose Intl (KSJC)',
        Destination: 'Don Miguel Hidalgo y Costilla Intl (GDL/MMGL)',
        Departure: 'Sun 11:14PM PST',
        Arrival: 'Mon 04:27AM CST',
        Gate: 'B12',
        Duration: 'TEST'
    };

    flight[3] = {
        Airline: 'Alaska',
        Flight: 'ASA36',
        Origin: 'San Diego Intl (KSAN)',
        Destination: 'John F Kennedy Intl (KJFK)',
        Departure: 'Sun 10:19PM PST',
        Arrival: 'Mon 06:28AM EST',
        Gate: '8',
        Duration: 'TEST'
    };

    flight[4] = {
        Airline: 'Alaska',
        Flight: 'ASA38',
        Origin: 'San Francisco Intl (KSFO)',
        Destination: 'John F Kennedy Intl (KJFK)',
        Departure: 'Sun 10:48PM PST',
        Arrival: 'Mon 05:56AM EST',
        Gate: '2',
        Duration: 'TEST'
    };




function drawTable (tbody) {
    var tbody = document.getElementById('flightBoard');

    var headerNames = Object.getOwnPropertyNames(flight[0]);
    var columnCount = headerNames.length;
    //Add the header row.
    var row = tbody.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = headerNames[i];
        row.appendChild(headerCell);
    }


    var tr, td;

    for (var i = 0; i < flight.length; i++) {
        tr = tbody.insertRow(tbody.rows.length);
        td = tr.insertCell(tr.cells.length);
        td.setAttribute("align", "center");
        
        td.innerHTML = flight[i].Airline;
        td = tr.insertCell(tr.cells.length);

        td.innerHTML = flight[i].Flight;
        td = tr.insertCell(tr.cells.length);

        
        td.innerHTML = flight[i].Origin;
        td = tr.insertCell(tr.cells.length);

        
        td.innerHTML = flight[i].Destination;
        td = tr.insertCell(tr.cells.length);

        td.innerHTML = flight[i].Departure;
        td = tr.insertCell(tr.cells.length);

        
        td.innerHTML = flight[i].Arrival;
        td = tr.insertCell(tr.cells.length);

        
        td.innerHTML = flight[i].Gate;
        td = tr.insertCell(tr.cells.length);

        
        td.innerHTML = flight[i].Duration;
        td = tr.insertCell(tr.cells.length);

        td.setAttribute("align", "center");
        
    }
}
    drawTable("flightBoard");
