/// <reference path="jquery-2.0.2.js" />
/// <reference path="persister.js" />
/// <reference path="class.js" /> 
/// <reference path="ui.js" />

var controllers = (function () {

    var rootUrl = "http://samuraijackgallery.apphb.com//api/";

    var Controller = Class.create({

        init: function () {
            this.persister = new persisters.get(rootUrl);
        },

        loadUI: function (selector) {

            this.loadAlbumsUI(selector);

            this.attachUIEventHandlers(selector);
        },

        loadAlbumsUI: function (selector) {
            var html = ui.loadAlbumsUI();
            var that = this;
            $(selector).html(html);

            this.persister.album.getAlbums(1, function (data) {
                var html = ui.loadAlbumList(data);
                console.log(html);
                $("#albums").html(html);
            }, function () {
                console.log("Error obtaining albums!");
            })
        },

        attachUIEventHandlers: function (selector) {
            var wrapper = $(selector);

            var self = this;

            wrapper.on('click', '#btn-login', function () {
                var username = $("<div/>").html($(selector + " #tb-login-username").val()).text();
                var user = {
                    username: username,
                    password: $(selector + " #tb-login-password").val(),
                };

                self.persister.user.postUser(user, function () {
                    self.loadGameUI(selector);
                    location.reload();
                }, function () {
                    wrapper.html("<p> Logging Failed</p>");
                });
                return false;
            });

            wrapper.on('click', '.albumListItem', function (handler) {
                var target = $(this).text;
                 
                //TODO: get the AlbumId from the custom atribute and pass it to the query;
                self.persister.album.getAlbum(1, target.AlbumId, function (target) {
                    console.log(target);
                },
                    function () {
                        console.log("Error")
                    })
            }
                );
        }
    });

    function getAllAlbums(data) {


    };

    return {
        get: function () {
            return new Controller();
        }
    };

}());

$(function () {
    var controller = controllers.get();
    controller.loadUI("#wrapper");
});
