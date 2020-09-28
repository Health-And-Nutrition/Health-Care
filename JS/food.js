'use strict';


var table = document.getElementById('table');
var result = document.getElementById('table-content');


var Disease1 = function (filePath, h1, h2) {
    this.filePath = filePath;
    this.h1 = h1;
    this.h2 = h2;
    Disease1.avoidFood1.push(this);
};
Disease1.avoidFood1 = [];

new Disease1('tableImg/cheese-Na.jpg', 'Cheese', 'High in sodium');
new Disease1('tableImg/fast-food.jpg', 'Fast Food', 'High in Salt and fat');
new Disease1('tableImg/spinach2.jpg', 'Spinach', 'High in K, Mg, Ca');
new Disease1('tableImg/fiber1.jpg', 'Fiber', 'DASH diet');


var Disease2 = function (filePath, h1, h2) {
    this.filePath = filePath;
    this.h1 = h1;
    this.h2 = h2;
    Disease2.avoidFood2.push(this);
};
Disease2.avoidFood2 = [];

new Disease2('tableImg/avocado.jpg', 'Avocado', 'High in potassium');
new Disease2('tableImg/canned-food.jpg', 'Canned Food', 'High in sodium');
new Disease2('tableImg/barley.jpg', 'Barley', 'Rich in phosphorus');
new Disease2('tableImg/spinach1.jpg', 'Spinach', 'Rich in iron');



var Disease3 = function (filePath, h1, h2) {
    this.filePath = filePath;
    this.h1 = h1;
    this.h2 = h2;
    Disease3.avoidFood3.push(this);
};
Disease3.avoidFood3 = [];

new Disease3('tableImg/bread1.jpg', 'Bread', 'White wheat raise glucose');
new Disease3('tableImg/sweet1.jpg', 'Sweets', 'High in glycemic index');
new Disease3('tableImg/fiber3.jpg', 'Fiber', 'Low in GI');
new Disease3('tableImg/protien1.jpg', 'Protein', 'Increase satiety');



var Disease4 = function (filePath, h1, h2) {
    this.filePath = filePath;
    this.h1 = h1;
    this.h2 = h2;
    Disease4.avoidFood4.push(this);
};
Disease4.avoidFood4 = [];

new Disease4('tableImg/dairy1.jpg', 'Dairy', 'High in lactose');
new Disease4('tableImg/honey.jpg', 'Honey', 'High in fructose');
new Disease4('tableImg/oat.jpg', 'Oats', 'Prevent constipation');
new Disease4('tableImg/bean.jpg', 'Beans', 'High in soluble fibers');



var Disease5 = function (filePath, h1, h2) {
    this.filePath = filePath;
    this.h1 = h1;
    this.h2 = h2;
    Disease5.avoidFood5.push(this);
};
Disease5.avoidFood5 = [];

new Disease5('tableImg/wheat2.jpg', 'Wheat', 'Contain gluten');
new Disease5('tableImg/beer.jpg', 'Beer', 'Barley contain gluten');
new Disease5('tableImg/rice.jpg', 'Rice', 'Gluten-free');
new Disease5('tableImg/quinoa1.jpg', 'Quinoa', 'Rich in protein');


// new Disease('cheese-Na.jpg', 'Cheese', 'High in sodium');
// new Disease('fast-food.jpg', 'Fast Food', 'High in Salt and fat');
// new Disease('spinach2.jpg', 'Spinach', 'High in K, Mg, Ca');
// new Disease('fiber1.jpg', 'Fiber', 'DASH diet');


// new Disease('cheese-Na.jpg', 'Cheese', 'High in sodium');
// new Disease('fast-food.jpg', 'Fast Food', 'High in Salt and fat');
// new Disease('spinach2.jpg', 'Spinach', 'High in K, Mg, Ca');
// new Disease('fiber1.jpg', 'Fiber', 'DASH diet');


 var renderTableFirstColumn = function (diseaseName) {
    if (diseaseName === 'Hypertension') {
        for (var i = 0; i < 2; i++) {
            var row = document.createElement('tr');
            table.appendChild(row);
            for (var j = 0; j < 2; j++) {
                var column = document.createElement('td');
                var figcaption = document.createElement('figcaption');
                var figure = document.createElement('figure');
                var img = document.createElement('img');
                img.setAttribute('src', Disease1.avoidFood1[i].filePath);
                figure.appendChild(img);
                column.appendChild(figure);
                figcaption.textContent = Disease1.avoidFood1[i].h1 + ' ' + Disease1.avoidFood1[i].h2;
                figure.appendChild(figcaption);
                j = 2;
                console.log(column);
                row.appendChild(column);
            }
        }
    }

    if (diseaseName === 'Kidney Disease') {
        for (var i = 0; i < 2; i++) {
            var row = document.createElement('tr');
            table.appendChild(row);
            for (var j = 0; j < 2; j++) {
                var column = document.createElement('td');
                var figcaption = document.createElement('figcaption');
                var figure = document.createElement('figure');
                var img = document.createElement('img');
                img.setAttribute('src', Disease2.avoidFood2[i].filePath);
                figure.appendChild(img);
                column.appendChild(figure);
                figcaption.textContent = Disease2.avoidFood2[i].h1 + ' ' + Disease2.avoidFood2[i].h2;
                figure.appendChild(figcaption);
                j = 2;
                console.log(column);
                row.appendChild(column);
            }
        }
    }

    if (diseaseName === 'Diabetes') {
        for (var i = 0; i < 2; i++) {
            var row = document.createElement('tr');
            table.appendChild(row);
            for (var j = 0; j < 2; j++) {
                var column = document.createElement('td');
                var figcaption = document.createElement('figcaption');
                var figure = document.createElement('figure');
                var img = document.createElement('img');
                img.setAttribute('src', Disease3.avoidFood3[i].filePath);
                figure.appendChild(img);
                column.appendChild(figure);
                figcaption.textContent = Disease3.avoidFood3[i].h1 + ' ' + Disease3.avoidFood3[i].h2;
                figure.appendChild(figcaption);
                j = 2;
                console.log(column);
                row.appendChild(column);
            }
        }
    }

    if (diseaseName === 'IBS') {
        for (var i = 0; i < 2; i++) {
            var row = document.createElement('tr');
            table.appendChild(row);
            for (var j = 0; j < 2; j++) {
                var column = document.createElement('td');
                var figcaption = document.createElement('figcaption');
                var figure = document.createElement('figure');
                var img = document.createElement('img');
                img.setAttribute('src', Disease4.avoidFood4[i].filePath);
                figure.appendChild(img);
                column.appendChild(figure);
                figcaption.textContent = Disease4.avoidFood4[i].h1 + ' ' + Disease4.avoidFood4[i].h2;
                figure.appendChild(figcaption);
                j = 2;
                console.log(column);
                row.appendChild(column);
            }
        }

        if (diseaseName === 'Celiac Disease') {
            for (var i = 0; i < 2; i++) {
                var row = document.createElement('tr');
                table.appendChild(row);
                for (var j = 0; j < 2; j++) {
                    var column = document.createElement('td');
                    var figcaption = document.createElement('figcaption');
                    var figure = document.createElement('figure');
                    var img = document.createElement('img');
                    img.setAttribute('src', Disease5.avoidFood5[i].filePath);
                    figure.appendChild(img);
                    column.appendChild(figure);
                    figcaption.textContent = Disease5.avoidFood5[i].h1 + ' ' + Disease5.avoidFood5[i].h2;
                    figure.appendChild(figcaption);
                    j = 2;
                    console.log(column);
                    row.appendChild(column);
                }
            }
        }

    }
}

var renderTableSecondColumn = function (diseaseName) {
    if (diseaseName === 'Hypertension') {
        for (var i = 2; i < 4; i++) {
            var row = document.createElement('tr');
            table.appendChild(row);
            for (var j = 0; j < 2; j++) {
                var column = document.createElement('td');
                var figcaption = document.createElement('figcaption');
                var figure = document.createElement('figure');
                var img = document.createElement('img');
                img.setAttribute('src', Disease1.avoidFood1[i].filePath);
                figure.appendChild(img);
                column.appendChild(figure);
                figcaption.textContent = Disease1.avoidFood1[i].h1 + ' ' + Disease1.avoidFood1[i].h2;
                figure.appendChild(figcaption);
                j = 2;
                console.log(column);
                row.appendChild(column);
            }
        }
    }

    if (diseaseName === 'Kidney Disease') {
        for (var i = 2; i < 4; i++) {
            var row = document.createElement('tr');
            table.appendChild(row);
            for (var j = 0; j < 2; j++) {
                var column = document.createElement('td');
                var figcaption = document.createElement('figcaption');
                var figure = document.createElement('figure');
                var img = document.createElement('img');
                img.setAttribute('src', Disease2.avoidFood2[i].filePath);
                figure.appendChild(img);
                column.appendChild(figure);
                figcaption.textContent = Disease2.avoidFood2[i].h1 + ' ' + Disease2.avoidFood2[i].h2;
                figure.appendChild(figcaption);
                j = 2;
                console.log(column);
                row.appendChild(column);
            }
        }
    }

    if (diseaseName === 'Diabetes') {
        for (var i = 2; i < 4; i++) {
            var row = document.createElement('tr');
            table.appendChild(row);
            for (var j = 0; j < 2; j++) {
                var column = document.createElement('td');
                var figcaption = document.createElement('figcaption');
                var figure = document.createElement('figure');
                var img = document.createElement('img');
                img.setAttribute('src', Disease3.avoidFood3[i].filePath);
                figure.appendChild(img);
                column.appendChild(figure);
                figcaption.textContent = Disease3.avoidFood3[i].h1 + ' ' + Disease3.avoidFood3[i].h2;
                figure.appendChild(figcaption);
                j = 2;
                console.log(column);
                row.appendChild(column);
            }
        }
    }

    if (diseaseName === 'IBS') {
        for (var i = 2; i < 4; i++) {
            var row = document.createElement('tr');
            table.appendChild(row);
            for (var j = 0; j < 2; j++) {
                var column = document.createElement('td');
                var figcaption = document.createElement('figcaption');
                var figure = document.createElement('figure');
                var img = document.createElement('img');
                img.setAttribute('src', Disease4.avoidFood4[i].filePath);
                figure.appendChild(img);
                column.appendChild(figure);
                figcaption.textContent = Disease4.avoidFood4[i].h1 + ' ' + Disease4.avoidFood4[i].h2;
                figure.appendChild(figcaption);
                j = 2;
                console.log(column);
                row.appendChild(column);
            }
        }
    }

    if (diseaseName === 'Celiac Disease') {
        for (var i = 2; i < 4; i++) {
            var row = document.createElement('tr');
            table.appendChild(row);
            for (var j = 0; j < 2; j++) {
                var column = document.createElement('td');
                var figcaption = document.createElement('figcaption');
                var figure = document.createElement('figure');
                var img = document.createElement('img');
                img.setAttribute('src', Disease5.avoidFood5[i].filePath);
                figure.appendChild(img);
                column.appendChild(figure);
                figcaption.textContent = Disease5.avoidFood5[i].h1 + ' ' + Disease5.avoidFood5[i].h2;
                figure.appendChild(figcaption);
                j = 2;
                console.log(column);
                row.appendChild(column);
            }
        }
    }
}

renderTableFirstColumn('Hypertension');
renderTableSecondColumn('Hypertension');

renderTableFirstColumn('Kidney Disease');
renderTableSecondColumn('Kidney Disease');

renderTableFirstColumn('Diabetes');
renderTableSecondColumn('Diabetes');

renderTableFirstColumn('IBS');
renderTableSecondColumn('IBS');

renderTableFirstColumn('Celiac Disease');
renderTableSecondColumn('Celiac Disease');






