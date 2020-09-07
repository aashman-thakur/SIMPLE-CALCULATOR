onEvent("button1", "click", function( ) {
if(getText("dropdown1")==='ADDITION'){
setNumber("text_area1", getNumber("value1")+getNumber("value2"));
}
});
onEvent("button1", "click", function( ) {
if(getText("dropdown1")==='SUBTRACTION'){
setNumber("text_area1", getNumber("value1")-getNumber("value2"));
}
});
onEvent("button1", "click", function( ) {
if(getText("dropdown1")==='MULTIPLICATION'){
setNumber("text_area1", getNumber("value1")*getNumber("value2"));
}
});
onEvent("button1", "click", function( ) {
if(getText("dropdown1")==='DIVISION'){
setNumber("text_area1", getNumber("value1")/getNumber("value2"));
}
});