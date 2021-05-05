function para1(){
var array1=[]   
for (var index = 1; index <7 ; index++){
array1.push(document.getElementById("text"+index).value)
}
 document.getElementById("entirepara1").innerHTML=array1.join(".")
}
function para2(){
    var array2=[]   
    for (var index = 7; index <13 ; index++){
    array2.push(document.getElementById("text"+index).value)
    }
     document.getElementById("entirepara2").innerHTML=array2.join(".")
    }