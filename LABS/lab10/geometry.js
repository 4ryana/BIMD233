function calcCircleGeometries(radius) {
    const pi = Math.PI;
    var area = pi * radius * radius;
    area = area.toFixed(3);

    var circumference = 2 * pi * radius;
    circumference = circumference.toFixed(3);

    var diameter = Math.round(2 * radius);
    diameter = diameter.toFixed(3);

    var geometries = [area, circumference, diameter];
    return geometries;
};

document.getElementById('first').innerHTML= calcCircleGeometries(3);
document.getElementById('sec').innerHTML= calcCircleGeometries(5);
document.getElementById('third').innerHTML= calcCircleGeometries(8);


