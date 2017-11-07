function Queue() {
    this.dataStore = [];
}

Queue.prototype = {
    constrcutor: Queue,
    enqueue: function(element) {
        this.dataStore.push(element);
    },
    dequeue: function() {
        return this.dataStore.shift();
    },
    front: function() {
        return this.dataStore[0];
    },
    back: function() {
        return this.dataStore[this.dataStore.length - 1];
    },
    toString: function() {
        var retStr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i] + "\n";
        }
        return retStr;
    },
    isEmpty: function() {

        if (this.dataStore.length == 0) {
            return true;
        } else {
            return false;
        }
    },
    count: function() {
        return this.dataStore.length;
    }
};
var males = new Queue(),
    females = new Queue(),
    dancers = [
    'F Allison McMillan',
    'M Frank Opitz',
    'M Mason McMillan',
    'M Clayton Ruff',
    'F Cheryl Ferenback',
    'M Raymond Williams',
    'F Jennifer Ingram',
    'M Bryan Frazer',
    'M David Durr',
    'M Danny Martin',
    'F Aurora Adney'
];
function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
};
function getDancers(males, females) {
    dancers.forEach(function(val, key) {
        var dancer = val.split(' ');

        if (dancer[0] == 'M') {
            males.enqueue(new Dancer(dancer[1], dancer[0]));
        } else if (dancer[0] == 'F') {
            females.enqueue(new Dancer(dancer[1], dancer[0]));
        }
    })
};
function dance(males, females) {
    console.log("The dance partners are: \n");
    while (!females.isEmpty() && !males.isEmpty()) {
        person = females.dequeue();
        console.log("   Female dancer is: " + person.name);
        person = males.dequeue();
        console.log("   and the male dancer is: " + person.name);
    }
    console.log('let\'s give them a big hand!');
};
getDancers(males, females);
dance(males, females);

if (!females.isEmpty()) {
    console.log(females.front().name + " is waiting to dance.");
}
if (!males.isEmpty()) {
    console.log(males.front().name + " is waiting to dance.");
}
if (males.count() > 0) {
    console.log("There are " + males.count() +
        " male dancers waiting to dance.");
}
if (females.count() > 0) {
    console.log("There are " + females.count() +
        " female dancers waiting to dance.");
}
 