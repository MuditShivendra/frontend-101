function hamburger() {
    var x = document.getElementById("navBar");
    if (x.className === "upperBar") {
      x.className += " clicked";
    } else {
      x.className = "upperBar";
    }
  }

function inputform(){
    var addmem = document.getElementById("add-mem");
    addmem.style.display = 'none';

    var form = document.getElementById("form");
    form.style.display = "block";
}
function newmem(){
  alert("yahoo");
  var node = document.createElement("div");
  // document.getElementById("grid").appendChild(node);
  
  var att = document.createAttribute("class");
  att.value = "member";
  node.setAttributeNode(att);

  var img = document.createElement("img");
  img = document.getElementById("image").value;
  // document.getElementsByClassName("member")[0].appendChild(img);


  var node2 = document.createElement("div");
  // document.node.appendChild(node2);

  var att2 = document.createAttribute("class");
  att2.value = "info";
  node2.setAttributeNode(att2);

  var he1 = document.createElement("h1");
  var he3 = document.createElement("h3");

  var name = document.getElementById("fullname").value;
  var posit = document.getElementById("position").value;

  he1.innerHTML = name;
  he3.innerHTML = posit;

  //experiment
  node2.innerHTML += he1.outerHTML + he3.outerHTML;
  node.innerHTML += img.outerHTML + node2.outerHTML;
  document.getElementById("grid").appendChild(node);

}
