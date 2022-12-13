function receivesAFunction(callback) {
    callback();
}
 function hello(){
   console.log("hello world");
 }

 receivesAFunction(hello);

 function returnsANamedFunction(){
    return function name (){
    }
 }

 function returnsAnAnonymousFunction(){
    return () => console.log("an anonymous function");
 }
