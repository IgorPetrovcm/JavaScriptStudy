const formTag = document.getElementById("form1");

let input = formTag.elements["input1"];

document.write("<p>",input.name,"</p>");

document.write("<p>",input.value,"</p>");

input.value = "new input";
document.write("<p>",input.value,"</p>");

document.write("<p>",input.type,"</p>")
