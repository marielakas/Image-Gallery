/// <reference path="class.js" />
/// <reference path="jquery-2.0.2.js" />

var ui = (function () {

    var loadAlbumsUI = function () {
        var content =
         '<h1>ImageViewer</h1>' +
         '<div id="albums">Albums</div>' +
         '<div id="gallery"><h2>Galery</h2></div>' +
          '<div id="notifications"><h2>Notifications</h2></div>';
        return content;
    };

    var loadAlbumList = function (data) {
        var html = "<h2>Albums: </h2>";
        html += "<ul>";

        for (var i in data) {
            html += "<li class='albumListItem'><a href='#' albumId = '" + data[i].AlbumId + "'>" + data[i].AlbumName + "</a></li>";
        }

        html += "</ul>";

        return html;
    };

    var logInForm = function () {
        var content =
'<div id="tabs">' +
'<ul>' +
'<li><a href="#tabs-1">LogIn</a></li>' +
'<li><a href="#tabs-2">Register</a></li>' +
'</ul>' +
'<div id="tabs-1">' +
'<form id="Form1">' +
'<label for="tb-login-username">User Name: </label>' +
'<input type="text" id="tb-login-username"><br />' +
'<label for="tb-login-password">Password: </label>' +
'<input type="password" id="tb-login-password"><br />' +
'<button id="btn-login">Log In</button>' +
'</form>' +
'</div>' +
'<div id="tabs-2">' +
'<form id="user-form">' +
'<label for="tb-register-username">User Name: </label>' +
'<input type="text" id="tb-register-username"><br />' +
'<label for="tb-register-nickname">Nickname: </label>' +
'<input type="text" id="tb-register-nickname"><br />' +
'<label for="tb-register-password">Password: </label>' +
'<input type="text" id="tb-register-password"><br />' +
'<button id="btn-register-user">Register</button>' +
'</form>' +
'</div>' +
'</div>';
        return content;
    };
    return {

        loadAlbumsUI: loadAlbumsUI,
        loadLogInForm: logInForm,
        loadAlbumList: loadAlbumList,
    };

})();