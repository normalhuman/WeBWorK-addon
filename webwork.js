if (window.location.pathname.search("send_mail") !== -1) {
  var selector = document.querySelector("select.ScrollingRecordList");
  selector.setAttribute("size","7");
  var place = document.querySelector("td");
  var area = document.createElement("div");
  area.style.margin = "10px";
  place.appendChild(area);
  area.innerHTML = 'Recipient List (separated by comma or any kind of whitespace) <br> <textarea name="subject" rows="3" cols="50" id="myRecipients"></textarea> <br> <a id="selectRecipients">Select these users</a> <a id="invertSelection">Invert selection</a> <a id="clearSelection">Clear selection</a>';
  var myButton = document.getElementById("selectRecipients");
  myButton.onclick = function() {
    var i;
    var entered = document.getElementById("myRecipients").value;
    var toSelect = entered.replace(/\s/g, ",");
    var listSelect = toSelect.split(',');
    var students = selector.children;
    for (i=0; i<students.length; i++) {
      if (listSelect.indexOf(students[i].value) !== -1) {
        students[i].selected = true;
      }
      else {
        students[i].selected = false;
      }
    }
  };
  var invertButton = document.getElementById("invertSelection");
  invertButton.onclick = function() {
    var i;
    var students = selector.children;
    for (i=0; i<students.length; i++) {
      students[i].selected = !(students[i].selected);
    }
  };
  var clearButton = document.getElementById("clearSelection");
  clearButton.onclick = function() {
    var i;
    var students = selector.children;
    for (i=0; i<students.length; i++) {
      students[i].selected = false;
    }
  };

}
 