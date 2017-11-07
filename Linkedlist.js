/*
 *   单向链表
 *   Node 类用来表示节点
 *   LinkedList 类提供了插入节点、删除节点、显示列表元素的方法，以及其他一些辅助方法。
 */
function Node(element) {
    this.element = element;
    this.next = null;
};
function LList() {
    this.head = new Node("head");
};
LList.prototype = {
    constructor: LList,
    find: function(item) {
        var currNode = this.head;
        while (currNode && currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    },
    insert: function(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    },
    display: function() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    },
    findPrevious: function(item) {
        var currNode = this.head;
        while (!(currNode.next == null) &&
            (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    },
    remove: function(item) {
        var prevNode = this.findPrevious(item);

        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    }
};

// //这个链表还需要优化，当前面element与后面insert定位的element相同时存在问题
// //下面例子给予说明
var myName = new LList();
myName.insert('张', 'head');
myName.insert('柠', '张');
myName.insert('檬', '柠');
myName.display();  //张，柠，檬

var myName = new LList();
myName.insert('张', 'head');
myName.insert('柠', '张');
myName.insert('檬', '柠');
myName.insert('的', '檬');
myName.insert('柠', '的');
myName.insert('檬', '柠');
myName.display();  //张，柠，檬，檬， 的， 柠， 并未按照顺序来

// /*
//  *   双向链表
//  *   Node 类用来表示节点
//  *   LinkedList 类提供了插入节点、删除节点、显示列表元素的方法，以及其他一些辅助方法。
//  */
function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
};
LList.prototype = {
    constructor: Node,
    find: function(item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    },
    insert: function(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    },
    remove: function(item) {
        var currNode = this.find(item);

        if (!(currNode.next == null)) {
            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null;
        }
    },
    findLast: function() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            currNode = currNode.next;
        }
        return currNode;
    },
    dispReverse: function() {
        var currNode = this.head;
        currNode = this.findLast();
        while (!(currNode.previous == null)) {
            console.log(currNode.element);
            currNode = currNode.previous;
        }
    },
    display: function() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
};

//双向链表也存在上述问题

//循环列表
function Node(element) {
    this.element = element;
    this.next = null;
};
function LList() {
    this.head = new Node("head");
    this.head.next = this.head;
};
LList.prototype = {
    constructor: LList,
    find: function(item) {
        var currNode = this.head;
        while (currNode && currNode.element != item && !(currNode.next.element == "head")) {
            currNode = currNode.next;
        }
        return currNode.element == item ? currNode : null;
    },
    insert: function(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    },
    display: function() {
        var currNode = this.head;
        while (!(currNode.next == null) && !(currNode.next.element == "head")) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    },
    findPrevious: function(item) {
        var currNode = this.head;
        while (!(currNode.next == null) && !(currNode.next.element == "head") && (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;

    },
    remove: function (item) {
        var prevNode = this.findPrevious(item);

        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    }
};