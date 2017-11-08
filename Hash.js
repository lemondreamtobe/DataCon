function HashTable() {
    this.table = new Array(137);
};
HashTable.prototype = {
    constructor: HashTable,
    simpleHash: function(data) {
        var total = 0;
        for (var i = 0; i < data.length; ++i) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    },
    showDistro: function () {
        var n = 0;
        for (var i = 0; i < this.table.length; ++i) {

            if (this.table[i][0] != undefined) {
                console.log(i + ": " + this.table[i].join('|--|'));
            }
        }
    },
    put: function (key, data) {
        var pos = this.betterHash(key);
        var index = 0;

        if (this.table[pos][index] == undefined) {
            this.table[pos][index] = [key, data];
            ++index;
        } else {
            while (this.table[pos][index] != undefined) {
                ++index;
            }
            this.table[pos][index] = [key, data];
        }
    },
    get: function(key){
        var index = 0;
        var pos = this.betterHash(key);

        if (this.table[pos][index][0] == key) {
            return this.table[pos][index];
        } else {
            while (this.table[pos][index][0] != key) {
                ++index;
            }
            return this.table[pos][index];
        }
        return undefined;
    },
    betterHash: function (string, arr) {
        const H = 37;
        var total = 0;
        for (var i = 0; i < string.length; ++i) {
            total += H * total + string.charCodeAt(i);
        }
        total = total % this.table.length;

        if (total < 0) {
            total += this.table.length-1;
        }
        return parseInt(total);
    },
    buildChains: function () {

        //开链法
        for (var i = 0; i < this.table.length; ++i) {
            this.table[i] = new Array();
        }
    }
};

//线性探测法
var values = [];

function put(key, data) {
    var pos = this.betterHash(key);

    if (this.table[pos] == undefined) {
        this.table[pos] = key;
        this.values[pos] = data;
    } else {
        while (this.table[pos] != undefined) {
            pos++;
        }
        this.table[pos] = key;
        this.values[pos] = data;
    }
};
function get(key) {
    var hash = -1;
    hash = this.betterHash(key);

    if (hash > -1) {
        for (var i = hash; this.table[i] != undefined; i++) {
            if (this.table[i] == key) {
                return this.values[i];
            }
        }
    }
    return undefined;
}

