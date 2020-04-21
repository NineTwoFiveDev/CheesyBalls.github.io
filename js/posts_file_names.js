var content = document.getElementsByClassName("content");
var url = getUrlParam('post', 'noPost');
if(UrlExists("pst/" + url + ".html")){
    content[0].innerHTML = "<iframe src=\"pst/" + url + ".html\" width=\"100%\" height=\"100%\"></iframe>";
}else{
  content[0].innerHTML = "<iframe src=\"noPost.html\" width=\"100%\" height=\"100%\"></iframe>";
}
