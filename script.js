function createform(tagname,classname,classvalue){
    let ele=document.createElement(tagname);
    ele.setAttribute(classname,classvalue);
    return ele;
}
function createinput(tagname,classname,classvalue,classname1,classvalue1,classname2,classvalue2){
    let ele=document.createElement(tagname);
    ele.setAttribute(classname,classvalue);
    ele.setAttribute(classname1,classvalue1);
    ele.setAttribute(classname2,classvalue2);
    return ele;
}
function createlinebreak(tagname){
    var ele=document.createElement(tagname);
    return ele;
    }
    function creatediv(tagname,classname,classvalue){
        var ele=document.createElement(tagname);
        ele.setAttribute(classname,classvalue)
        return ele;
        }
    function createinput1(tagname,classname,classvalue,classname1,classvalue1,classname2,classvalue2,classname3,classvalue3){
        let ele=document.createElement(tagname);
        ele.setAttribute(classname,classvalue);
        ele.setAttribute(classname1,classvalue1);
        ele.setAttribute(classname2,classvalue2);
        ele.setAttribute(classname3,classvalue3);
        return ele;
    }
let formstyle=createform("div","class","formstyle");
let form1=createform("form","name","form1");
let input=createinput("input","id","calc","type","text","name","answer");
const br=createlinebreak("br");
const br1=createlinebreak("br");
let div=creatediv("div","class","main")
let input1=createinput("input","type","button","value","1","onclick","form1.answer.value += '1'");
let input2=createinput("input","type","button","value","2","onclick","form1.answer.value += '2'");
let input3=createinput("input","type","button","value","3","onclick","form1.answer.value += '3'");
let input4=createinput("input","type","button","value","+","onclick","form1.answer.value += '+'");
const br2=createlinebreak("br");

let input5=createinput("input","type","button","value","4","onclick","form1.answer.value += '4'");
let input6=createinput("input","type","button","value","5","onclick","form1.answer.value += '5'");
let input7=createinput("input","type","button","value","6","onclick","form1.answer.value += '6'");
let input8=createinput("input","type","button","value","-","onclick","form1.answer.value += '-'");
const br4=createlinebreak("br");


let input9=createinput("input","type","button","value","7","onclick","form1.answer.value += '7'");
let input10=createinput("input","type","button","value","8","onclick","form1.answer.value += '8'");
let input11=createinput("input","type","button","value","9","onclick","form1.answer.value += '9'");
let input12=createinput("input","type","button","value","*","onclick","form1.answer.value += '*'");
const br6=createlinebreak("br");


let input13=createinput("input","type","button","value","/","onclick","form1.answer.value += '/'");
let input14=createinput("input","type","button","value","0","onclick","form1.answer.value += '0'");
let input15=createinput("input","type","button","value",".","onclick","form1.answer.value += '.'");
let input16=createinput("input","type","button","value","=","onclick","form1.answer.value = eval(form1.answer.value)");
const br8=createlinebreak("br");
let input17=createinput1("input","type","button","value","Clear All","onclick","form1.answer.value = ' ' ","id","clear");


form1.append(input,br,br1);
div.append(input1,input2,input3,input4,br2,input5,input6,input7,input8,br4,input9,input10,input11,input12,br6,input13,input14,input15,input16,br8,input17);
form1.append(div);
formstyle.append(form1);
document.body.append(formstyle);





