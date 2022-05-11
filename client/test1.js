 var hello=require("./test2.js")
 hello.name="손지은"
 hello.hello()
 hello.test(function() {
     console.log("콜백 호출됨")
 })