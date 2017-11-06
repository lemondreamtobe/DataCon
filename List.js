function List(arr) {
    this.listSize  = arr.length; //列表元素个数
    this.pos       = 0;          //列表当前位置  
    this.dataStore = arr;        //初始化一个空数组来保存列表元素
}
List.prototype = {
    constructor: List,
    append: function(element) {
        this.dataStore[this.listSize++] = element;
    },
    find: function (element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;
    },
    remove: function (element) {
        var foundAt = this.find(element);

        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    },
    length: function() {
        return this.listSize;
    },
    toString: function() {
        return this.dataStore;
    },
    insert: function (element, after) {
        var insertPos = this.find(after);

        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    },
    clear: function() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    },
    contains: function (element) {
        for (var i = 0; i < this.dataStore.length; ++i) {

            if (this.dataStore[i] == element) {
                return true;
            }
        }
        return false;
    },
    front: function() {
        this.pos = 0;
    },
    end: function() {
        this.pos = this.listSize-1;
    },
    prev: function() {

        if (this.pos > 0) {
            --this.pos;
        } else {
            console.log('已到达首页');
        }
    },
    next: function() {

        if (this.pos < this.listSize-1) {
            ++this.pos;
        } else {
            console.log('已到达末页');
        }
    },
    currPos: function() {
        return this.pos;
    },
    moveTo: function(position) {
        this.pos = position;
    },
    getElement: function() {
        return this.dataStore[this.pos];
    },
    displayObjList: function(Objtype) {
        for (var pos = 0; pos < this.length(); pos++) {
            if (this.dataStore[pos] instanceof Objtype) {
               console.log(this.dataStore[pos]["name"] + ", " +
                   this.dataStore[pos]["movie"]);
            } else {
              continue;
            }
        }
    },

    showAllList: function() {
        for (var pos = 0; pos < this.length(); pos++) {
               console.log(this.dataStore[pos]);
        }
    }  
}

//文件数据
var string = '(1)The Shawshank Redemption（ 《肖申克的救赎》 ）'
           + '(2)The Godfather（ 《教父》 ）'
           + '(3)The Godfather: Part II（ 《教父 2》 ）'
           + '(4)Pulp Fiction（ 《低俗小说》 ）'
           + '(5)The Good, the Bad and the Ugly（ 《黄金三镖客》 ）'
           + '(6)12 Angry Men（ 《十二怒汉》 ）'
           + '(7)Schindler’s List（ 《辛德勒名单》 ）'
           + '(8)The Dark Knight（ 《黑暗骑士》 ）'
           + '(9)The Lord of the Rings: The Return of the King（ 《指环王：王者归来》 ）'  
           + '(10)Fight Club（ 《搏击俱乐部》 ）'
           + '(11)Star Wars: Episode V - The Empire Strikes Back（ 《星球大战 5：帝国反击战》 ）'
           + '(12)One Flew Over the Cuckoo’s Nest（ 《飞越疯人院》 ）'
           + '(13)The Lord of the Rings: The Fellowship of the Ring（ 《指环王：护戒使者》 ）'
           + '(14)Inception（ 《盗梦空间》 ）'
           + '(15)Goodfellas（ 《好家伙》 ）'
           + '(16)Star Wars（ 《星球大战》 ）'
           + '(17)Seven Samurai（ 《七武士》 ）'
           + '(18)The Matrix（ 《黑客帝国》 ）'
           + '(19)Forrest Gump（ 《阿甘正传》 ）'
           + '(20)City of God（ 《上帝之城》 )';
var movies = string.split(/\(\d+\)/g).splice(1);
var moviesList = new List(movies); //保存电影
var customers = new List([]);      //保存租赁电影的顾客
var rentedMovies = new List([]);   //保存已租的电影

//顾客类
function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
};
function checkOut(name, movie, customerList, rentedList) {

    if (this.contains(movie)) {
        var c = new Customer(name, movie);
        customerList.append(c);
        rentedList.append(movie);
        this.remove(movie);
    } else {
        console.log(movie + " is not available.");
    }
};

function checkIn(movie, customerList, rentedList) {

    if (rentedList.contains(movie)) {
        rentedList.remove(movie);
        this.append(movie);
        customerList.getBack(movie);
    } else {
        console.log(movie + " is not available.");
    }
};
function getBack(movie) {
    customers.dataStore.forEach(function(val, key) {

        if (val.movie == movie) {
            customers.dataStore.splice(key, 1);
            customers.listSize = customers.dataStore.length;
            return;
        }
    })
}
moviesList.checkOut = checkOut;
moviesList.checkIn = checkIn;
customers.getBack = getBack;
console.log("Available movies is under follow: \n");
moviesList.showAllList();
var name = window.prompt('what is your name?');
var movie = window.prompt('which movies do your like to see?');
moviesList.checkOut(name, movie, customers, rentedMovies);
console.log("Now available movies is under follow: \n");
moviesList.showAllList();

