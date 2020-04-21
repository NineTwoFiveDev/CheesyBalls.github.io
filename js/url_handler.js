///
/// USAGE:
/// var yourVar = getUrlVars()["URL Var"];
///
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

///
/// USAGE:
/// var mytext = getUrlParam('URL Var','Default Value');
///
function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
      }
    return urlparameter;
}
///
/// USAGE
/// if(UrlExists(url)){ do stuff;}
///
function UrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}
