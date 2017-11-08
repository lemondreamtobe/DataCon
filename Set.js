function Set() {
    this.dataStore = [];   
};
Set.prototype = {
    constructor: Set,
    add: function (data) {

        if (this.dataStore.indexOf(data) < 0) {
            this.dataStore.push(data);
            return true;
        } else {
            return false;
        }
    },
    remove: function(data) {

        var pos = this.dataStore.indexOf(data);

        if (pos > -1) {
            this.dataStore.splice(pos, 1);
            return true;
        } else {
            return false;
        }
    },
    show: function() {
        return this.dataStore;
    },
    contains: function(data) {

        if (this.dataStore.indexOf(data) > -1) {
            return true;
        } else {
            return false;
        }
    },
    union: function(set) {

        //合集
        if (! (set instanceof Set)) {
            return;
        } 
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; ++i) {
            tempSet.add(this.dataStore[i]);
        }
        for (var i = 0; i < set.dataStore.length; ++i) {
            if (!tempSet.contains(set.dataStore[i])) {
                tempSet.dataStore.push(set.dataStore[i]);
            }
        }
        return tempSet;
    },
    intersect: function (set) {

        //交集
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; ++i) {

            if (set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    },
    size: function() {
        return this.dataStore.length;
    },
    subset: function (set) {

        //判断是否子集
        if (this.size() > set.size()) {
            return false;
        } else {
            for (var member in this.dataStore) {

                //不包含
                if (!set.contains(member)) {
                    return false;
                }
            }
        }
        return true;
    },
    difference: function (set) {

        //补集
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; ++i) {

            if (!set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    }
};
var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Bryan");
var hj = cis.union(dmp); //并集
var jj = cis.intersect(dmp); //交集
console.log(cis.subset(dmp)); //判断是否dmp子集
var bj = cis.difference(dmp); //补集
console.log(hj);
console.log(jj);
console.log(bj);