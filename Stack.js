function Stack() {
    this.dataStore = []; //存储栈元素
}
Stack.prototype = {
    constructor: Stack,
    push: function(element) {
        this.dataStore.push(element)
    },
    pop: function() {
        return this.dataStore.pop()
    },
    peek: function() {
        return this.dataStore[this.dataStore.length - 1];
    },
    length: function() {
        return this.dataStore.length;
    },
    clear: function() {
        this.dataStore.length = 0;
    }
};

//转换进制
function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}
var num = 125;
var base = 8;

//125转8进制
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);

//验证回文串
function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }
    if (word == rword) {
        return true;
    } else {
        return false;
    }
}
var word = "ollo";
if (isPalindrome(word)) {
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is not a palindrome.");
}