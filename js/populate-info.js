const info = document.getElementsByClassName("info");

function populateInfo(link){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      pop(this);
    }
  };
  xhttp.open("GET", link, true);
  xhttp.send();
}

function pop(populate) {
  var xmlDoc = populate.responseXML;
  var xml_settings_section = xmlDoc.getElementsByTagName("settings");
  var xml_settings_list = xml_settings_section[0].getElementsByTagName("personal");

  var xml_settings_about = xml_settings_list[0].getElementsByTagName("aboutYou");
  xml_settings_about = xml_settings_about[0].childNodes[0].nodeValue;

  var xml_settings_links = xml_settings_list[0].getElementsByTagName("link");

  var html = "";

  html += "<p class=\"text\" data-simplebar data-simplebar-auto-hide=\"false\" data-simplebar-scrollbar-Min-Size=\"90\">" +
    xml_settings_about +
    "</p>";

  html +="<ul class=\"personal-links\">";
  for(var i = 0; i < xml_settings_links.length; i++){
    var icon = xml_settings_links[i].getElementsByTagName("icon");
    icon = icon[0].childNodes[0].nodeValue;
    var link = xml_settings_links[i].getElementsByTagName("location");
    link = link[0].childNodes[0].nodeValue;

    html += "<li><a href=\"" + link + "\"><i class=\"" + icon + "\"></i></a></li>";
  }
  html += "</ul>";
  info[0].innerHTML = html;
}
