function Dictionary() {
    this.datastore = new Array();
};
Dictionary.prototype = {
    constructor: Dictionary,
    add: function(key, value) {
        this.datastore[key] = value;
    },
    find: function(key) {
        return this.datastore[key];
    },
    remove: function(key) {
        delete this.datastore[key];
    },
    showAll: function() {
        var _this = this;
        Object.keys(this.datastore).sort().forEach(function(val, key) {
            console.log(val + " -> " + _this.datastore[val]);
        });
    },
    count: function() {
        var n = 0;
        Object.keys(this.datastore).forEach(function(val, key) {
            ++n;
        });
        return n;
    },
    clear: function() {
        var _this = this;
        Object.keys(this.datastore).forEach(function(val, key) {
             delete _this.datastore[val];
        });
    }
};
var telephoneBook = new Dictionary();
telephoneBook.add('Tom', 13713750081);
telephoneBook.add('Bom', 13713550081);
telephoneBook.add('Cindy', 43713750081);
telephoneBook.showAll();