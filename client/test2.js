var hello={
    name:"",
    hello: function() {
        console.log("hello" + this.name)
    },
    test: function (callbaqck) {
        setTimeout(callbaqck, 3000)
    }
}

module.exports = hello