let num1=10;
function outer(){
    var num2=20;
    var inner=function(){
        console.log("num1 is "+num1);
        console.log("num2 is "+num2);
        num2+=10;
    }
    return inner;
}
var innerFun=outer();
innerFun();
innerFun();