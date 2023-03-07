var stocks = new Array();

stocks[0] = {
    Company: 'Microsoft MSFT',
    Market: '$381.7 B',
    Sales: '$86.8 B',
    Profit: '$22.1 B',
    Employees: 128000
};

stocks[1] = {
    Company: 'Symetra Financial SYA',
    Market: '$2.7 B',
    Sales: '$2.2 B',
    Profit: '$254.4 M',
    Employees: 1400
};

stocks[2] = {
    Company: 'Micron Technology MU',
    Market: '$381.7 B',
    Sales: '$86.8 B',
    Profit: '$22.1 B',
    Employees: 128000
};

stocks[3] = {
    Company: 'F5 Networks FFIV',
    Market: '$9.5 B',
    Sales: '$1.7B',
    Profit: '$311.2 M',
    Employees: 3834
};

stocks[4] = {
    Company: 'Expedia EXPE',
    Market: '$10.8 B',
    Sales: '$5.8 B',
    Profit: '$398. M',
    Employees: 18210
};

stocks[5] = {
    Company: 'Nautilus NLS',
    Market: '$476 M',
    Sales: '$274.4 M',
    Profit: '$18.8 M',
    Employees: 340
};

stocks[6] = {
    Company: 'Heritage Financial HFWA',
    Market: '$531 M',
    Sales: '$137.6 M',
    Profit: '$21 M',
    Employees: 748
};

stocks[7] = {
    Company: 'Cascade MicrotecH CSCD',
    Market: '$239 M',
    Sales: '$136 M',
    Profit: '$9.9 M',
    Employees: 449
};

stocks[8] = {
    Company: 'Nike NKE',
    Market: '$83.1 B',
    Sales: '$27.8 B',
    Profit: '$2.7 B',
    Employees: 56500
};

stocks[9] = {
    Company: 'Alaska Air Group ALK',
    Market: '$7.9 B',
    Sales: '$5.4 B',
    Profit: '$605 M',
    Employees: 13952
};


var headerNames = Object.getOwnPropertyNames(stocks[0]);

var columnCount = headerNames.length;

for (var i = 0; i < columnCount; i++){
    document.getElementById('header' + i ).innerHTML = headerNames[i];
}   



for (var i = 0; i <stocks.length; i++) {
    var companys = Object.values(stocks[i]);
    document.getElementById('company' + i).innerHTML = companys[0];
}

for (var i = 0; i <stocks.length; i++) {
    var market = Object.values(stocks[i]);
    document.getElementById('market' + i).innerHTML = market[1];
}

for (var i = 0; i <stocks.length; i++) {
    var sales = Object.values(stocks[i]);
    document.getElementById('sales' + i).innerHTML = sales[2];
}

for (var i = 0; i <stocks.length; i++) {
    var profit = Object.values(stocks[i]);
    document.getElementById('profit' + i).innerHTML = profit[3];
}

for (var i = 0; i <stocks.length; i++) {
    var employees = Object.values(stocks[i]);
    document.getElementById('employees' + i).innerHTML = employees[4];
}