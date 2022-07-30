var studentArray=[];
function submit(){
    var name1=document.getElementById("nameOfPerson1").value;
    studentArray.push(name1);
    studentArray.sort();
    document.getElementById("result").innerHTML=studentArray;
}
