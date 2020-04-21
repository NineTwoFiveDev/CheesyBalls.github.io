var content = document.getElementById("content");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
  myFunction(this);
  }
};
xhttp.open("GET", "../posts/Posts.xml", true);
xhttp.send();

function myFunction(populate) {
  var xmlDoc = populate.responseXML;

  var page="<div class=\"posts\">";
  var posts = [];

  var xml_posts_section = xmlDoc.getElementsByTagName("BLOGPOSTS");
  var xml_posts_list = xml_posts_section[0].getElementsByTagName("BPOST");

  for(var i = 0; i < xml_posts_list.length; i++){
    var title = xml_posts_list[i].getElementsByTagName("Title");
    var filename = xml_posts_list[i].getElementsByTagName("FileName");
    var date = xml_posts_list[i].getElementsByTagName("DateAdded");
    var category = xml_posts_list[i].getElementsByTagName("BlogCategory");

    title = title[0].childNodes[0].nodeValue;
    filename = filename[0].childNodes[0].nodeValue;
    date = date[0].childNodes[0].nodeValue;
    category = category[0].childNodes[0].nodeValue;

    var info = [title, filename, date];
    var hasCate = false;
    for (var cat in posts){
      if(category === cat){
        hasCate = true;
        break;
      }
    }
    if(hasCate){
      posts[category].push(info);
    }else{
      posts[category] = [info];
    }
  }

  for(var cat in posts){
    page += "<h1>" + cat + "</h1>";
    for(var i = 0; i < posts[cat].length; i++){
      page += "<a class=\"post\" href=\"../posts/" + posts[cat][i][1] + ".html\">" + posts[cat][i][0] + "</a>"
    }
  }
  page += "</div>";
  content.innerHTML = page;
}
