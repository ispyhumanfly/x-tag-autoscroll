"use strict";

var XTAG = require("../node_modules/x-tag/dist/x-tag-core-with-shadowdom.min.js");

var JQUERY = require("../node_modules/jquery/dist/jquery.min.js");

function XTagAutoScroll(delay, height, content) {
    JQUERY(document).ready(function() {
        XTAG.register("x-tag-autoscroll", {
            content: content || "",
            lifecycle: {
                created: function() {
                    setTimeout(function() {
                        JQUERY("html, body").animate({
                            scrollTop: height || 300
                        }, 1e3);
                    }, delay || 5e3);
                }
            },
            events: {
                tap: function() {
                    JQUERY("html, body").animate({
                        scrollTop: height || 300
                    }, 1e3);
                }
            }
        });
    });
}

exports.XTagAutoScroll = XTagAutoScroll;