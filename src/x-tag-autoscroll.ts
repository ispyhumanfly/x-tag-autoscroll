/// <reference path="../typings/index.d.ts" />
/* tslint:enabled */

"use strict";

const XTAG = require("x-tag")
const JQUERY = require("jquery")

export function XTagAutoScroll (parameters: any) {

    JQUERY(document).ready(() => {

        XTAG.register("x-tag-autoscroll", {
            content: parameters.content || "",
            lifecycle: {
                created: function() {
                    setTimeout(function() {
                        JQUERY("html, body").animate({
                            scrollTop: parameters.height || 300
                        }, 1000)
                    }, parameters.delay || 5000)
                }
            },
            events: {
                tap: function() {
                    JQUERY("html, body").animate({
                        scrollTop: parameters.height || 300
                    }, 1000)
                }
            }
        })

    })
}
