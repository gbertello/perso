document.getElementsByTagName("title").innerHTML = cv["name"];

document.getElementById("name").innerHTML = cv["name"];
document.getElementById("address").innerHTML = cv["address"];
document.getElementById("telephone").innerHTML = cv["telephone"];
document.getElementById("email").innerHTML = cv["email"];
document.getElementById("maritalStatus").innerHTML = cv["maritalStatus"];
document.getElementById("photo").setAttribute("src", cv["photo"]);

document.getElementById("motivation").innerHTML = cv["motivation"];

var node = document.createElement("li");
node.innerHTML = cv["programmingSkills"];
document.getElementById("programmingSkills").appendChild(node);

for (var i = 0; i < cv["personalInterests"].length; i++) {
  var node = document.createElement("li");
  node.innerHTML = cv["personalInterests"][i];
  document.getElementById("personalInterests").appendChild(node); 
}

var node = document.getElementById("employmentItems");
var nodeToCopy = node.getElementsByClassName("subsection")[0];
node.removeChild(nodeToCopy);
for (var i = 0; i < cv["employmentItems"].length; i++) {
  var clone = nodeToCopy.cloneNode(true);
  clone.getElementsByTagName("img")[0].setAttribute("src", cv["employmentItems"][i]["image"]);
  clone.getElementsByClassName("subsection-date")[0].innerHTML = cv["employmentItems"][i]["date"];
  clone.getElementsByClassName("subsection-location")[0].innerHTML = cv["employmentItems"][i]["location"];
  clone.getElementsByClassName("subsection-title")[0].innerHTML = cv["employmentItems"][i]["title"];
  for (var j = 0; j < cv["employmentItems"][i]["descriptionItems"].length; j++) {
    var li = document.createElement("li");
    li.innerHTML = cv["employmentItems"][i]["descriptionItems"][j];
    clone.getElementsByTagName("ul")[0].appendChild(li);
  }
  node.appendChild(clone);
}

var node = document.getElementById("hiddenEmploymentItems");
var nodeToCopy = node.getElementsByClassName("subsection")[0];
node.removeChild(nodeToCopy);
for (var i = 0; i < cv["hiddenEmploymentItems"].length; i++) {
  var clone = nodeToCopy.cloneNode(true);
  clone.getElementsByTagName("img")[0].setAttribute("src", cv["hiddenEmploymentItems"][i]["image"]);
  clone.getElementsByClassName("subsection-date")[0].innerHTML = cv["hiddenEmploymentItems"][i]["date"];
  clone.getElementsByClassName("subsection-location")[0].innerHTML = cv["hiddenEmploymentItems"][i]["location"];
  clone.getElementsByClassName("subsection-title")[0].innerHTML = cv["hiddenEmploymentItems"][i]["title"];
  for (var j = 0; j < cv["hiddenEmploymentItems"][i]["descriptionItems"].length; j++) {
    var li = document.createElement("li");
    li.innerHTML = cv["hiddenEmploymentItems"][i]["descriptionItems"][j];
    clone.getElementsByTagName("ul")[0].appendChild(li);
  }
  node.appendChild(clone);
}

var node = document.getElementById("educationItems");
var nodeToCopy = node.getElementsByClassName("subsection")[0];
node.removeChild(nodeToCopy);
for (var i = 0; i < cv["educationItems"].length; i++) {
  var clone = nodeToCopy.cloneNode(true);
  clone.getElementsByTagName("img")[0].setAttribute("src", cv["educationItems"][i]["image"]);
  clone.getElementsByClassName("subsection-date")[0].innerHTML = cv["educationItems"][i]["date"];
  clone.getElementsByClassName("subsection-location")[0].innerHTML = cv["educationItems"][i]["location"];
  clone.getElementsByClassName("subsection-title")[0].innerHTML = cv["educationItems"][i]["title"];
  for (var j = 0; j < cv["educationItems"][i]["descriptionItems"].length; j++) {
    var li = document.createElement("li");
    li.innerHTML = cv["educationItems"][i]["descriptionItems"][j];
    clone.getElementsByTagName("ul")[0].appendChild(li);
  }
  node.appendChild(clone);
}

var node = document.getElementById("hiddenEducationItems");
var nodeToCopy = node.getElementsByClassName("subsection")[0];
node.removeChild(nodeToCopy);
for (var i = 0; i < cv["hiddenEducationItems"].length; i++) {
  var clone = nodeToCopy.cloneNode(true);
  clone.getElementsByTagName("img")[0].setAttribute("src", cv["hiddenEducationItems"][i]["image"]);
  clone.getElementsByClassName("subsection-date")[0].innerHTML = cv["hiddenEducationItems"][i]["date"];
  clone.getElementsByClassName("subsection-location")[0].innerHTML = cv["hiddenEducationItems"][i]["location"];
  clone.getElementsByClassName("subsection-title")[0].innerHTML = cv["hiddenEducationItems"][i]["title"];
  for (var j = 0; j < cv["hiddenEducationItems"][i]["descriptionItems"].length; j++) {
    var li = document.createElement("li");
    li.innerHTML = cv["hiddenEducationItems"][i]["descriptionItems"][j];
    clone.getElementsByTagName("ul")[0].appendChild(li);
  }
  node.appendChild(clone);
}
