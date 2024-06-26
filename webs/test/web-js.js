debugger

console.log("同步代码开始执行");
let list = [];
let encodeFunc = function  encodeFunc(resultList){
    let result = [];
    for(let i=0;i<10;i++){
        result.push(resultList[i].clientX);
        result.push(resultList[i].clientY);
        result.push(resultList[i].timeStamp);
    }
    // copy(result)
    let str = btoa(result.toString());
    console.log(str);
}
let mousemoveFunc = function mousemoveFunc(event){
    console.log("正在执行mousemove回调函数");
    list.push(event);
}
let mousedownFunc = function mousedownFunc(event){
    console.log("正在执行mousedown回调函数");
    list.push(event);
}
let mouseupFunc = function mouseupFunc(event){
    console.log("正在执行mouseup回调函数");
    list.push(event);
    let len = list.length;
    let resultList = [];
    for(let i=len-10;i<len;i++){
        resultList.push(list[i]);
    }
    encodeFunc(resultList);
}
let setTimeoutcallBack = function setTimeoutcallBack(){
    console.log("正在执行setTimeout回调函数");
    document.addEventListener("mousemove", mousemoveFunc);
    document.addEventListener("mousedown", mousedownFunc);
    document.addEventListener("mouseup", mouseupFunc);
}
let unloadFunc = function unloadFunc(){
    console.log("网页卸载完成");
    debugger;
}
let loadFunc = function loadFunc(){
    console.log("网页加载完成");
    // setTimeout(setTimeoutcallBack, 0);
}
setTimeout(setTimeoutcallBack, 0);
window.addEventListener("load", loadFunc);
window.addEventListener("unload", unloadFunc);
console.log("同步代码执行完成");

debugger