'use strict';

var table1 = document.getElementById('table1');
var result = document.getElementById('table-content');
var table2 = document.getElementById('table2');


var Disease1 = function (filePath, h1, h2) {
    this.filePath = filePath;
    this.h1 = h1;
    this.h2 = h2;
    Disease1.avoidFood1.push(this);
};
Disease1.avoidFood1 = [];
new Disease1('../tableImgs/cheese-Na.jpg', 'Cheese', 'High in sodium');
new Disease1('../tableImgs/fast-food.jpg', 'Fast Food', 'High in Salt and fat');
new Disease1('../tableImgs/spinach2.jpg', 'Spinach', 'High in K, Mg, Ca');
new Disease1('../tableImgs/fiber1.jpg', 'Fiber', 'DASH diet');


var Disease2 = function (filePath, h1, h2) {
    this.filePath = filePath;
    this.h1 = h1;
    this.h2 = h2;
    Disease2.avoidFood2.push(this);
};
Disease2.avoidFood2 = [];
new Disease2('../tableImgs/avocado.jpg', 'Avocado', 'High in potassium');
new Disease2('../tableImgs/canned-food.jpg', 'Canned Food', 'High in sodium');
new Disease2('../tableImgs/barley.jpg', 'Barley', 'Rich in phosphorus');
new Disease2('../tableImgs/spinach1.jpg', 'Spinach', 'Rich in iron');




var Disease3 = function (filePath, h1, h2) {
    this.filePath = filePath;
    this.h1 = h1;
    this.h2 = h2;
    Disease3.avoidFood3.push(this);
};
Disease3.avoidFood3 = [];
new Disease3('../tableImgs/bread1.jpg', 'Bread', 'White wheat raise glucose');
new Disease3('../tableImgs/sweet1.jpg', 'Sweets', 'High in glycemic index');
new Disease3('../tableImgs/fiber3.jpg', 'Fiber', 'Low in GI');
new Disease3('../tableImgs/protien1.jpg', 'Protein', 'Increase satiety');



var Disease4 = function (filePath, h1, h2) {
    this.filePath = filePath;
    this.h1 = h1;
    this.h2 = h2;
    Disease4.avoidFood4.push(this);
};
Disease4.avoidFood4 = [];
new Disease4('../tableImgs/dairy1.jpg', 'Dairy', 'High in lactose');
new Disease4('../tableImgs/honey.jpg', 'Honey', 'High in fructose');
new Disease4('../tableImgs/oat.jpg', 'Oats', 'Prevent constipation');
new Disease4('../tableImgs/bean.jpg', 'Beans', 'High in soluble fibers');



var Disease5 = function (filePath, h1, h2) {
    this.filePath = filePath;
    this.h1 = h1;
    this.h2 = h2;
    Disease5.avoidFood5.push(this);
};
Disease5.avoidFood5 = [];
new Disease5('../tableImgs/wheat2.jpg', 'Wheat', 'Contain gluten');
new Disease5('../tableImgs/beer.jpg', 'Beer', 'Barley contain gluten');
new Disease5('../tableImgs/rice.jpg', 'Rice', 'Gluten-free');
new Disease5('../tableImgs/quinoa1.jpg', 'Quinoa', 'Rich in protein');



var Disease6 = function (filePath, h1, h2) {
    this.filePath = filePath;
    this.h1 = h1;
    this.h2 = h2;
    Disease6.avoidFood6.push(this);
};
Disease6.avoidFood6 = [];
new Disease6('../tableImgs/highfat.jpg', 'High Fat', 'Raises blood cholesterol levels');
new Disease6('../tableImgs/sweets.jpg', 'Sweets as a whole', 'High in calories');
new Disease6('../tableImgs/highFiber.jpg', 'High Fiber', 'boost metabolism');
new Disease6('../tableImgs/healthyfats.jpg', 'Healthy Fats', 'Improve HDL');


var Disease7 = function (filePath, h1, h2) {
    this.filePath = filePath;
    this.h1 = h1;
    this.h2 = h2;
    Disease7.avoidFood7.push(this);
};
Disease7.avoidFood7 = [];
new Disease7('../tableImgs/hightCarb.jpeg', 'CHO', 'Affect the Ketosis');
new Disease7('../tableImgs/fruits.jpg', 'Fruit', 'contain CHO');
new Disease7('../tableImgs/fat.jpg', 'Fat', 'provide the body with energy');
new Disease7('../tableImgs/eggs.jpg', 'Protein', 'maintaine muscle structure');



var renderTableFirstColumn = function (diseaseName) {
    if (diseaseName === 'Hypertension') {
        var row1 = document.createElement('tr');
        table1.appendChild(row1);
        var column1 = document.createElement('td');
        column1.textContent = "You Should Avoid";
        row1.appendChild(column1);

        for (var i = 0; i < 2; i++) {

            var row = document.createElement('tr');
            table1.appendChild(row);
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
        var row1 = document.createElement('tr');
        table1.appendChild(row1);
        var column1 = document.createElement('td');
        column1.textContent = "You Should Avoid";
        row1.appendChild(column1);

        for (var i = 0; i < 2; i++) {
            var row = document.createElement('tr');
            table1.appendChild(row);
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
        var row1 = document.createElement('tr');
        table1.appendChild(row1);
        var column1 = document.createElement('td');
        column1.textContent = "You Should Avoid";
        row1.appendChild(column1);

        for (var i = 0; i < 2; i++) {
            var row = document.createElement('tr');
            table1.appendChild(row);
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
        var row1 = document.createElement('tr');
        table1.appendChild(row1);
        var column1 = document.createElement('td');
        column1.textContent = "You Should Avoid";
        row1.appendChild(column1);

        for (var i = 0; i < 2; i++) {
            var row = document.createElement('tr');
            table1.appendChild(row);
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
        var row1 = document.createElement('tr');
        table1.appendChild(row1);
        var column1 = document.createElement('td');
        column1.textContent = "You Should Avoid";
        row1.appendChild(column1);
        console.log('wth');
        for (var i = 0; i < 2; i++) {
            var row = document.createElement('tr');
            table1.appendChild(row);
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

    if (diseaseName === 'obesity') {
        var row1 = document.createElement('tr');
        table1.appendChild(row1);
        var column1 = document.createElement('td');
        column1.textContent = "You Should Avoid";
        row1.appendChild(column1);
        console.log('wth');
        for (var i = 0; i < 2; i++) {
            var row = document.createElement('tr');
            table1.appendChild(row);
            for (var j = 0; j < 2; j++) {
                var column = document.createElement('td');
                var figcaption = document.createElement('figcaption');
                var figure = document.createElement('figure');
                var img = document.createElement('img');
                img.setAttribute('src', Disease6.avoidFood6[i].filePath);
                figure.appendChild(img);
                column.appendChild(figure);
                figcaption.textContent = Disease6.avoidFood6[i].h1 + ' ' + Disease6.avoidFood6[i].h2;
                figure.appendChild(figcaption);
                j = 2;
                console.log(column);
                row.appendChild(column);
            }
        }
    }
    if (diseaseName === 'epilepsy') {
        var row1 = document.createElement('tr');
        table1.appendChild(row1);
        var column1 = document.createElement('td');
        column1.textContent = "You Should Avoid";
        row1.appendChild(column1);
        console.log('wth');
        for (var i = 0; i < 2; i++) {
            var row = document.createElement('tr');
            table1.appendChild(row);
            for (var j = 0; j < 2; j++) {
                var column = document.createElement('td');
                var figcaption = document.createElement('figcaption');
                var figure = document.createElement('figure');
                var img = document.createElement('img');
                img.setAttribute('src', Disease7.avoidFood7[i].filePath);
                figure.appendChild(img);
                column.appendChild(figure);
                figcaption.textContent = Disease7.avoidFood7[i].h1 + ' ' + Disease7.avoidFood7[i].h2;
                figure.appendChild(figcaption);
                j = 2;
                console.log(column);
                row.appendChild(column);
            }
        }
    }
}







var renderTableSecondColumn = function (diseaseName) {
    if (diseaseName === 'Hypertension') {
        var row1 = document.createElement('tr');
        table2.appendChild(row1);
        var column1 = document.createElement('td');
        column1.textContent = "You Can Safly Consume";
        row1.appendChild(column1);
        for (var i = 2; i < 4; i++) {
            var row = document.createElement('tr');
            table2.appendChild(row);
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
        var row1 = document.createElement('tr');
        table2.appendChild(row1);
        var column1 = document.createElement('td');
        column1.textContent = "You Can Safly Consume";
        row1.appendChild(column1);

        for (var i = 2; i < 4; i++) {
            var row = document.createElement('tr');
            table2.appendChild(row);
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
        var row1 = document.createElement('tr');
        table2.appendChild(row1);
        var column1 = document.createElement('td');
        column1.textContent = "You Can Safly Consume";
        row1.appendChild(column1);

        for (var i = 2; i < 4; i++) {
            var row = document.createElement('tr');
            table2.appendChild(row);
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
        var row1 = document.createElement('tr');
        table2.appendChild(row1);
        var column1 = document.createElement('td');
        column1.textContent = "You Can Safly Consume";
        row1.appendChild(column1);

        for (var i = 2; i < 4; i++) {
            var row = document.createElement('tr');
            table2.appendChild(row);
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
        var row1 = document.createElement('tr');
        table2.appendChild(row1);
        var column1 = document.createElement('td');
        column1.textContent = "You Can Safly Consume";
        row1.appendChild(column1);

        for (var i = 2; i < 4; i++) {
            var row = document.createElement('tr');
            table2.appendChild(row);
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
    
    if (diseaseName === 'obesity') {
        var row1 = document.createElement('tr');
        table2.appendChild(row1);
        var column1 = document.createElement('td');
        column1.textContent = "You Can Safly Consume";
        row1.appendChild(column1);

        for (var i = 2; i < 4; i++) {
            var row = document.createElement('tr');
            table2.appendChild(row);
            for (var j = 0; j < 2; j++) {
                var column = document.createElement('td');
                var figcaption = document.createElement('figcaption');
                var figure = document.createElement('figure');
                var img = document.createElement('img');
                img.setAttribute('src', Disease6.avoidFood6[i].filePath);
                figure.appendChild(img);
                column.appendChild(figure);
                figcaption.textContent = Disease6.avoidFood6[i].h1 + ' ' + Disease6.avoidFood6[i].h2;
                figure.appendChild(figcaption);
                j = 2;
                console.log(column);
                row.appendChild(column);
            }
        }
    }
    
    if (diseaseName === 'epilepsy') {
        var row1 = document.createElement('tr');
        table2.appendChild(row1);
        var column1 = document.createElement('td');
        column1.textContent = "You Can Safly Consume";
        row1.appendChild(column1);

        for (var i = 2; i < 4; i++) {
            var row = document.createElement('tr');
            table2.appendChild(row);
            for (var j = 0; j < 2; j++) {
                var column = document.createElement('td');
                var figcaption = document.createElement('figcaption');
                var figure = document.createElement('figure');
                var img = document.createElement('img');
                img.setAttribute('src', Disease7.avoidFood7[i].filePath);
                figure.appendChild(img);
                column.appendChild(figure);
                figcaption.textContent = Disease7.avoidFood7[i].h1 + ' ' + Disease7.avoidFood7[i].h2;
                figure.appendChild(figcaption);
                j = 2;
                console.log(column);
                row.appendChild(column);
            }
        }
    }
}

var diseaseItself;

function generalRender() {
    renderTableFirstColumn(diseaseItself);
    renderTableSecondColumn(diseaseItself);
}



function clear() {
    document.getElementById('table1').textContent = '';
    document.getElementById('table2').textContent = '';
}