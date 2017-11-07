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

//基数排序
function distribute(nums, queues, n, digit) { // 参数 digit 表示个位或十位上的值
    for (var i = 0; i < n; ++i) {

        if (digit == 1) {
            queues[nums[i] % 10].enqueue(nums[i]);
        } else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}
function collect(queues, nums) {
    var i = 0;
    for (var digit = 0; digit < 10; ++digit) {
        while (!queues[digit].isEmpty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}
function dispArray(arr) {
    for (var i = 0; i < arr.length; ++i) {
        console.log(arr[i] + " ");
    }
}
var queues = [];
for (var i = 0; i < 10; ++i) {
    queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 10; ++i) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
console.log("Before radix sort: ");
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log("\n\nAfter radix sort: ");
dispArray(nums);

//优先队列
function Patient(name, code) {
    this.name = name;
    this.code = code; //优先级
};
function dequeue() {
    var  pos = 0, priority = this.dataStore[0].code;
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code < priority) {
            pos = i;
            priority = this.dataStore[i].code;
        }
    }
    return this.dataStore.splice(pos, 1);
};
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + " code: " +
            this.dataStore[i].code + "\n";
    }
    return retStr;
};
var p = new Patient("Smith",5);
var ed = new Queue();
ed.dequeue = dequeue;
ed.toString = toString;
ed.enqueue(p);

p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());

// 下一轮
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());

var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());