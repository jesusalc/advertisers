'use strict';


function sendRequest(url, callback, postData) {
  var req = createXMLHTTPObject();
  if (!req) {
    return;
  }
  var method = (postData) ? "POST" : "GET";
  req.open(method, url, true);
  //req.setRequestHeader('User-Agent', 'XMLHTTP/1.0');
  if (postData) {
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  }
  req.onreadystatechange = function () {
    if (req.readyState != 4) {
      return;
    }
    if (req.status != 200 && req.status != 304) {
      //          alert('HTTP error ' + req.status);
      return;
    }
    callback(req);
  }
  if (req.readyState == 4) {
    return;
  }
  req.send(postData);
}

var XMLHttpFactories = [
  function () {
    return new XMLHttpRequest()
  },
  function () {
    return new ActiveXObject("Msxml2.XMLHTTP")
  },
  function () {
    return new ActiveXObject("Msxml3.XMLHTTP")
  },
  function () {
    return new ActiveXObject("Microsoft.XMLHTTP")
  }
];

function createXMLHTTPObject() {
  var xmlhttp = false;
  for (var i = 0; i < XMLHttpFactories.length; i++) {
    try {
      xmlhttp = XMLHttpFactories[i]();
    }
    catch (e) {
      continue;
    }
    break;
  }
  return xmlhttp;
}

function syntaxHighlight(json) {
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
    var cls = 'number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'key';
      } else {
        cls = 'string';
      }
    } else if (/true|false/.test(match)) {
      cls = 'boolean';
    } else if (/null/.test(match)) {
      cls = 'null';
    }
    return '<span class="' + cls + '">' + match + '</span>';
  });
}

function changeFormat(event, formatProvided) {
  console.log(event.target.value || formatProvided);
  var format = event.target.value || formatProvided,
    url = "/advertisers/?format=" + format,
    callback = function (data) {
      console.log(data.response);
      var response = '';
      if (format == 'json') {
        response = JSON.parse(data.response);
        response = JSON.stringify(response, undefined, 2);
        response = syntaxHighlight(response);
        console.log(response);
      } else {
        response = syntaxHighlight(data.response);
      }
      window.responsebodypre.innerHTML = (response);


    };
  sendRequest(url, callback);
}