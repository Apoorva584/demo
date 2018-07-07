function getfile(file,callback) {
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4 && xhr.status == "200"){
    callback(xhr.responseText);
}
};
xhr.send(null);
}
getfile("data.json",function(text){
let data = JSON.parse(text);
console.log(data);
career(data.career);
education(data.education);
skills(data.skills);
}
)
var childtwo=document.querySelector(".childtwo");
function career(careerInfo){
  console.log(careerInfo);
  var careerHeading=document.createElement("h3");
  childtwo.appendChild(careerHeading);
  careerHeading.textContent="career objective";
  var careerHr=document.createElement("Hr");
  childtwo.appendChild(careerHr);
  var ch=document.createElement("p");
  ch.textContent=careerInfo.info;
  childtwo.appendChild(ch);
}
function education(edu){
var eduHeading=document.createElement("h3");
eduHeading.textContent="Educational Qualifications";
childtwo.appendChild(eduHeading);
var careerHr=document.createElement("Hr");
childtwo.appendChild(careerHr);
var edutable=document.createElement("table");
edutable.border="1";
var tr1="<tr><td>degree</td><td>Institute</td><td>Data</td></tr>";
//edutable.innerHTML=tr1;
var tr2="";
// console.log(edu.length);
for(var i=0; i<edu.length; i++){
  console.log(edu.length);
tr2+="<tr><td>"+edu[i].degree+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].data+"</td></tr>";
console.log(tr2);
}
edutable.innerHTML=tr1+tr2;
childtwo.appendChild(edutable);
}
function skills(skil){
  var ul=document.createElement("ul");
  childtwo.appendChild(ul);
  for(var i=0; i<skil.length; i++){
    var li=document.createElement("li");
    li.textContent=skil[i].title+":"+skil[i].content;
    ul.appendChild(li);
  }
}
