/*! jQuery Browser - v0.1.0 - 3/23/2012
 * https://github.com/jquery/jquery-browser
 * Copyright (c) 2012 John Resig; Licensed MIT */
/*
 THIS IS A STRIPPED VERSION OF THE ORIGINAL LIBRARY!
 */
/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-csstransforms3d-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
 */
/*!
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
/*
 * @name wowBook
 *
 * @author Marcio Aguiar
 * @version 1.0
 * @requires jQuery v1.7.0
 *
 * Copyright 2010 Marcio Aguiar. All rights reserved.
 *
 * To use this file you must to buy a license at http://codecanyon.net/user/maguiar01/portfolio
 *
 * Date: Wed Dec 8 10:05:49 2010 -0200
 */
(function (d) {
    if (!d.browser) {
        var l;
        l = navigator.userAgent || "";
        d.uaMatch = function (d) {
            d = d.toLowerCase();
            d = /(chrome)[ \/]([\w.]+)/.exec(d) || /(webkit)[ \/]([\w.]+)/.exec(d) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(d) || /(msie) ([\w.]+)/.exec(d) || 0 > d.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(d) || [];
            return {
                browser: d[1] || "",
                version: d[2] || "0"
            }
        };
        l = d.uaMatch(l);
        d.browser = {};
        l.browser && (d.browser[l.browser] = !0, d.browser.version = l.version);
        d.browser.webkit && (d.browser.safari = !0)
    }
})(jQuery);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    easeOutCubic: function (d, l, u, w, p) {
        return w * ((l = l / p - 1) * l * l + 1) + u
    },
    easeOutExpo: function (d, l, u, w, p) {
        return l == p ? u + w: w * ( - Math.pow(2, -10 * l / p) + 1) + u
    }
});
window.Modernizr = function (d, l, u) {
    function w(a, b) {
        for (var c in a) if (z[a[c]] !== u) return "pfx" == b ? a[c] : !0;
        return ! 1
    }
    function p(a, b, c) {
        var e = a.charAt(0).toUpperCase() + a.substr(1),
            f = (a + " " + A.join(e + " ") + e).split(" ");
        if ("string" === typeof b || "undefined" === typeof b) b = w(f, b);
        else a: {
            f = (a + " " + B.join(e + " ") + e).split(" "),
                a = f;
            for (var d in a) if (e = b[a[d]], e !== u) {
                b = !1 === c ? a[d] : "function" === typeof e ? e.bind(c || b) : e;
                break a
            }
            b = !1
        }
        return b
    }
    var g = {},
        s = l.documentElement,
        n = l.createElement("modernizr"),
        z = n.style;
    d = " -webkit- -moz- -o- -ms- ".split(" ");
    var A = ["Webkit", "Moz", "O", "ms"],
        B = ["webkit", "moz", "o", "ms"],
        n = {},
        a = [],
        c = a.slice,
        b,
        e = function (a, b, c, e) {
            var f, d, k, h = l.createElement("div"),
                p = l.body,
                g = p ? p: l.createElement("body");
            if (parseInt(c, 10)) for (; c--;) k = l.createElement("div"),
                k.id = e ? e[c] : "modernizr" + (c + 1),
                h.appendChild(k);
            return f = ["&#173;<style>", a, "</style>"].join(""),
                h.id = "modernizr",
                (p ? h: g).innerHTML += f,
                g.appendChild(h),
            p || (g.style.background = "", s.appendChild(g)),
                d = b(h, a),
                p ? h.parentNode.removeChild(h) : g.parentNode.removeChild(g),
                !!d
        },
        f = {}.hasOwnProperty,
        k;
    "undefined" === typeof f || "undefined" === typeof f.call ? k = function (a, b) {
        return b in a && "undefined" === typeof a.constructor.prototype[b]
    }: k = function (a, b) {
        return f.call(a, b)
    };
    Function.prototype.bind || (Function.prototype.bind = function (a) {
        var b = this;
        if ("function" != typeof b) throw new TypeError;
        var e = c.call(arguments, 1),
            f = function () {
                if (this instanceof f) {
                    var d = function () {};
                    d.prototype = b.prototype;
                    var d = new d,
                        k = b.apply(d, e.concat(c.call(arguments)));
                    return Object(k) === k ? k: d
                }
                return b.apply(a, e.concat(c.call(arguments)))
            };
        return f
    });
    (function (a, b) {
        var c = a.join(""),
            f = b.length;
        e(c, function (a, b) {
                for (var c = a.childNodes, e = {}; f--;) e[c[f].id] = c[f];
                g.csstransforms3d = 9 === (e.csstransforms3d && e.csstransforms3d.offsetLeft) && 3 === e.csstransforms3d.offsetHeight
            },
            f, b)
    })([, ["@media (", d.join("transform-3d),("), "modernizr){#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join("")], [, "csstransforms3d"]);
    n.csstransforms3d = function () {
        var a = !!p("perspective");
        return a && "webkitPerspective" in s.style && (a = g.csstransforms3d),
            a
    };
    for (var h in n) k(n, h) && (b = h.toLowerCase(), g[b] = n[h](), a.push((g[b] ? "": "no-") + b));
    z.cssText = "";
    return n = null,
        g._version = "2.5.3",
        g._prefixes = d,
        g._domPrefixes = B,
        g._cssomPrefixes = A,
        g.testProp = function (a) {
            return w([a])
        },
        g.testAllProps = p,
        g.testStyles = e,
        g.prefixed = function (a, b, c) {
            return b ? p(a, b, c) : p(a, "pfx")
        },
        g
} (this, this.document);
(function (d, l, u) {
    function w(d) {
        d = d || location.href;
        return "#" + d.replace(/^[^#]*#?(.*)$/, "$1")
    }
    "$:nomunge";
    var p = "hashchange",
        g = document,
        s, n = d.event.special,
        z = g.documentMode,
        A = "on" + p in l && (z === u || 7 < z);
    d.fn[p] = function (d) {
        return d ? this.bind(p, d) : this.trigger(p)
    };
    d.fn[p].delay = 50;
    n[p] = d.extend(n[p], {
        setup: function () {
            if (A) return ! 1;
            d(s.start)
        },
        teardown: function () {
            if (A) return ! 1;
            d(s.stop)
        }
    });
    s = function () {
        function n() {
            var a = w(),
                e = k(b);
            a !== b ? (f(b = a, e), d(l).trigger(p)) : e !== b && (location.href = location.href.replace(/#.*/, "") + e);
            c = setTimeout(n, d.fn[p].delay)
        }
        var a = {},
            c, b = w(),
            e = function (a) {
                return a
            },
            f = e,
            k = e;
        a.start = function () {
            c || n()
        };
        a.stop = function () {
            c && clearTimeout(c);
            c = u
        };
        d.browser.msie && !A &&
        function () {
            var b, c;
            a.start = function () {
                b || (c = (c = d.fn[p].src) && c + w(), b = d('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
                    c || f(w());
                    n()
                }).attr("src", c || "javascript:0").insertAfter("body")[0].contentWindow, g.onpropertychange = function () {
                    try {
                        "title" === event.propertyName && (b.document.title = g.title)
                    } catch(a) {}
                })
            };
            a.stop = e;
            k = function () {
                return w(b.location.href)
            };
            f = function (a, c) {
                var e = b.document,
                    f = d.fn[p].domain;
                a !== c && (e.title = g.title, e.open(), f && e.write('<script>document.domain="' + f + '"\x3c/script>'), e.close(), b.location.hash = a)
            }
        } ();
        return a
    } ()
})(jQuery, this);
(function (d) {
    function l(a, c) {
        a = d(a);
        var b = this;
        this.elem = a;
        this.id = a.attr("id");
        this.pages = [];
        this.opts = c;
        this.currentPage = null;
        this.pageWidth = c.width / 2;
        this.pageHeight = c.height;
        this.transparentPages = c.transparentPages = !1;
        this.startPage = c.startPage;
        this.onShowPage = c.onShowPage;
        this.slideShow = c.slideShow;
        this.slideShowDelay = c.slideShowDelay;
        this.pauseOnHover = c.pauseOnHover;
        this.turnPageDuration = c.turnPageDuration;
        this.foldGradient = c.foldGradient;
        this.foldGradientThreshold = c.foldGradientThreshold;
        this.shadows = c.shadows;
        this.shadowThreshold = c.shadowThreshold;
        this.clipBoundaries = c.clipBoundaries;
        this.zoomLevel = 1;
        this.zoomMax = c.zoomMax;
        this.zoomMin = c.zoomMin;
        this.zoomBoundingBox = c.zoomBoundingBox;
        this.zoomStep = c.zoomStep;
        this.onZoom = c.onZoom;
        this.mouseWheel = c.mouseWheel;
        this.flipSound = c.flipSound;
        this.centeredWhenClosed = c.centeredWhenClosed;
        this.sectionDefinition = c.sections;
        this.rtl = !!c.rtl;
        d.wowBook.support.filters = "filters" in a[0];
        a.addClass("wowbook");
        "static" === a.css("position") && a.css("position", "relative");
        var e = a.children();
        if (e.length < c.pageCount) {
            for (var f = c.pageCount - e.length; f--;) a.append("<div />");
            e = a.children()
        }
        f = this.pagesContainer = this.origin = d("<div class='wowbook-origin'></div>").css({
            position: "absolute"
        }).appendTo(a);
        b.bookShadow = d("<div class='wowbook-book-shadow'></div>").appendTo(a).css({
            top: 0,
            position: "absolute",
            display: "none",
            zIndex: 0
        });
        this.insertPages(e, !0);
        f.append("<div class='wowbook-shadow-clipper'><div class='wowbook-shadow-container'><div class='wowbook-shadow-internal'></div></div></div>");
        b.shadowContainer = d(".wowbook-shadow-container", f);
        b.internalShadow = d(".wowbook-shadow-internal", f);
        b.shadowClipper = d(".wowbook-shadow-clipper", f).css({
            display: "none"
        });
        b.foldShadow = d("<div class='wowbook-shadow-fold'></div>").appendTo(b.shadowContainer);
        b.foldGradientContainer = d("<div class='wowbook-fold-gradient-container'></div>").appendTo(b.shadowContainer);
        b.foldGradientElem = d("<div class='wowbook-fold-gradient'></div>").appendTo(b.foldGradientContainer);
        b.hardPageShadow = d("<div class='wowbook-hard-page-shadow'></div>").css({
            display: "none"
        }).appendTo(f); ! d.support.opacity && d.wowBook.support.filters && d.wowBook.applyAlphaImageLoader(["wowbook-fold-gradient", "wowbook-fold-gradient-flipped", "wowbook-shadow-fold", "wowbook-shadow-fold-flipped"]);
        b.shadowContainer.css("position", "relative");
        this.leftHandle = d("<div class='wowbook-handle wowbook-left'></div>").data("corner", "l").appendTo(f);
        this.rightHandle = d("<div class='wowbook-handle wowbook-right'></div>").data("corner", "r").appendTo(f);
        Modernizr.csstransforms3d && (e = d("<div>").css("transform", "perspective(1px)"), this.perspectiveUnit = "none" != e.css("transform") ? "px": "", e = null);
        d.browser.msie && d(".wowbook-handle", a).css({
            backgroundColor: "#fff",
            opacity: "0.01"
        });
        d(".wowbook-handle", f).bind("mousedown.wowbook", function (a) {
            return b.pageEdgeDragStart(a)
        });
        c.curl && d(".wowbook-handle", f).hover(function (a) {
                if (!b.curlTimer) {
                    var c = this == b.leftHandle[0] ? b.leftPage() : b.rightPage();
                    if (c) {
                        var e = c.offset(),
                            f = a.pageY - e.top;
                        b.curlTimer = setTimeout(function () {
                                b.curl(c, f > b.pageHeight / 2)
                            },
                            120)
                    }
                }
            },
            function () {
                b.curlTimer = clearTimeout(b.curlTimer);
                b.uncurl()
            });
        var k;
        d(".wowbook-handle", f).on("mousedown.wowbook", function () {
            k = d.now()
        }).on("mouseup.wowbook", function () {
            if (! ((new Date).getTime() - k > b.opts.handleClickDuration)) {
                b.stopAnimation();
                var a = d(this).data("corner");
                if ("r" === a) b[b.rtl ? "back": "advance"]();
                if ("l" === a) b[b.rtl ? "advance": "back"]()
            }
        });
        var h = !1;
        a.hover(function (a) {
                if (b.pauseOnHover) {
                    h = b.slideShowTimer;
                    a = d(b.opts.controls.slideShow);
                    var c = a.hasClass("wowbook-disabled");
                    b.stopSlideShow();
                    a.toggleClass("wowbook-disabled", c)
                }
            },
            function () {
                b.pauseOnHover && h && b.startSlideShow()
            });
        this.clipBoundaries && (this.origin.wrap("<div class='wowbook-clipper'><div class='wowbook-inner-clipper'></div></div>"), d(".wowbook-inner-clipper", a).css({
            position: "absolute",
            width: "100%",
            overflow: "hidden"
        }), this.clipper = d(".wowbook-clipper", a).css({
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            overflow: "hidden",
            zIndex: 1
        }));
        this.detectBestZoomMethod();
        a.wrapInner("<div class='wowbook-zoomwindow'><div class='wowbook-zoomcontent'></div></div>");
        this.zoomWindow = d(".wowbook-zoomwindow", a);
        this.zoomContent = d(".wowbook-zoomcontent", a);
        d.browser.ie8mode && this.zoomContent.wrapInner("<div class='IE8-zoom-helper'style='position:relative'></div>");
        this.zoomWindow.css({
            position: "absolute",
            top: 0
        });
        this.zoomContent.css({
            position: "absolute",
            left: 0,
            top: 0
        });
        this.setDimensions(this.opts.width, this.opts.height);
        c.scaleToFit && (this.scaleToFit(), this.responsive());
        this.fillToc();
        f = c.useTranslate3d;
        Modernizr.csstransforms3d && f && (d.wowBook.useTranslate3d = !0 == f || "mobile" == f && d.wowBook.utils.isMobile());
        if (c.deepLinking && this.getLocationHash()) {
            var m;
            try {
                m = b.selectorToPage("#" + this.getLocationHash())
            } catch(v) {}
            void 0 === m && (m = b.locationHashToPage());
            "number" === typeof m && (b.startPage = m, w(b.elem) || b.elem[0].scrollIntoView())
        }
        this.flipSound && (this.audio = this.createAudioPlayer());
        if (this.opts.keyboardNavigation) d(document).on("keydown.wowbook", function (a) {
            d(a.target).filter("input, textarea, select").length || (a.which === b.opts.keyboardNavigation.back && b.back(), a.which === b.opts.keyboardNavigation.advance && b.advance())
        });
        d(window).on("hashchange.wowbook", function () {
            var a = window.location.hash;
            if (a === b.locationHashSetTo) b.locationHashSetTo = void 0;
            else {
                var c = (a = "" === a && !b.locationEndsInHash()) ? b.startPage: b.locationHashToPage();
                "number" === typeof c && (b.gotoPage(c, !a), a || w(b.elem) || b.elem[0].scrollIntoView())
            }
        });
        c.forceBasicPage && (this.foldPage = this.holdHardpage = this.foldPageBasic);
        d.wowBook.support.transform || (this.foldPage = this.foldPageBasic, d.wowBook.support.filters || (this.holdHardpage = this.foldPageBasic));
        this.mouseWheel && a.mousewheel(function (a, c) {
            if (b.mouseWheel) return "zoom" === b.mouseWheel ? (0 < c && b.zoomIn(), 0 > c && b.zoomOut(), b.zoomedAt(a)) : (0 < c && b.advance(), 0 > c && b.back()),
                !1
        });
        this.opts.touchEnabled && this.touchSupport();
        this.controllify(this.opts.controls);
        this.opts.thumbnails && this.createThumbnails();
        this.setupFullscreen();
        this.showPage(this.startPage, !1);
        this.zoom(this.opts.zoomLevel);
        this.callRAFCallback = function () {
            b.rafCallback()
        };
        window.raf(this.callRAFCallback);
        c.slideShow && this.startSlideShow()
    }
    function u(a, c) {
        var b = Math.cos(c),
            e = Math.sin(c);
        return {
            x: b * a.x - e * a.y,
            y: e * a.x + b * a.y
        }
    }
    function w(a) {
        var c = d(window).height(),
            b = a.offset(),
            e = d(window).scrollTop();
        return b.top > e && b.top + a.height() < e + c
    }
    function p(a, c, b) {
        var e, f, k, h;
        e = f = 0;
        if (!d.wowBook.support.boxSizing) {
            var m;
            e = "none" == a.css("borderTopStyle") ? 0 : s[m = a.css("borderTopWidth")] || parseFloat(m);
            f = "none" == a.css("borderRightStyle") ? 0 : s[m = a.css("borderRightWidth")] || parseFloat(m);
            k = "none" == a.css("borderBottomStyle") ? 0 : s[m = a.css("borderBottomWidth")] || parseFloat(m);
            h = "none" == a.css("borderLeftStyle") ? 0 : s[m = a.css("borderLeftWidth")] || parseFloat(m);
            f = parseFloat(a.css("paddingLeft")) + parseFloat(a.css("paddingRight")) + h + f;
            e = parseFloat(a.css("paddingTop")) + parseFloat(a.css("paddingBottom")) + e + k
        }
        a.css("width", c - f);
        a.css("height", b - e)
    }
    d.wowBook = function (a) {
        return d(a).data("wowBook")
    };
    d.wowBook.support = {};
    d.fn.wowBook = function (a) {
        if ("string" === typeof a) {
            var c = Array.prototype.slice.call(arguments, 1);
            if ("options" === a || "prop" === a) {
                var b = d.wowBook(this[0]),
                    e = c[0];
                return 1 < c.length ? b[e] = c[1] : b[e]
            }
            return this.each(function () {
                var b = d.wowBook(this);
                b[a].apply(b, c)
            })
        }
        var f = d.extend({},
            d.wowBook.defaults, a);
        return this.each(function () {
            var a = new l(this, f);
            d(this).data("wowBook", a)
        })
    };
    l.prototype = {
        destroy: function () {
            this.callRAFCallback = d.noop;
            this.curlTimer = clearTimeout(this.curlTimer);
            d("*").add(document).add(window).off(".wowbook");
            this.destroyThumbnails();
            this.stopSlideShow();
            this.stopAnimation(!1);
            this.elem.empty().removeData().off()
        },
        setDimensions: function (a, c) {
            this.zoomed && this.zoom(1);
            this.currentScale = 1;
            var b = this.elem,
                e = this.pageWidth;
            b.css({
                height: c,
                width: a
            });
            var f = b.height();
            this.pageWidth = b.width() / 2;
            this.pageHeight = f;
            this._originalHeight || (this._originalHeight = this.pageHeight);
            this._originalWidth || (this._originalWidth = 2 * this.pageWidth);
            var k = this.origin.css({
                width: "100%",
                height: f
            });
            if (e && this.centeredWhenClosed) {
                var h = parseFloat(k.css("left"), 10);
                k.css("left", h / (e / this.pageWidth))
            }
            this.bookShadow.css({
                width: a,
                height: c
            });
            for (var h = 0, m = this.pages.length; h < m; h++) this.pages[h].css({
                width: this.pageWidth,
                height: this.pageHeight,
                left: this.pages[h].onLeft ? 0 : this.pageWidth
            }),
                e = d(".wowbook-page-content", this.pages[h]),
                p(e, this.pageWidth, this.pageHeight);
            this.opts.gutterShadow && d(".wowbook-gutter-shadow", b).css("height", this.pageHeight);
            this.positionBookShadow();
            this.shadowClipper.css({
                width: b.width(),
                height: f
            });
            this.hardPageShadow.css({
                width: this.pageWidth,
                height: this.pageHeight
            });
            this.opts.handleWidth && d(".wowbook-handle", k).css("width", this.opts.handleWidth);
            this.rightHandle.css("left", a - this.rightHandle.width());
            this.clipBoundaries && (k = Math.ceil(Math.sqrt(this.pageWidth * this.pageWidth + this.pageHeight * this.pageHeight)), k = [this.pageHeight - k, b.width(), k, 0], this.origin.css("top", -k[0]), d(".wowbook-inner-clipper", b).css({
                width: "100%",
                height: k[2] - k[0],
                top: k[0]
            }), this.clipper.css({
                width: "100%",
                height: f
            }));
            this.zoomWindow.css({
                width: 2 * this.pageWidth,
                height: f
            });
            this.zoomContent.css({
                width: 2 * this.pageWidth,
                height: f
            });
            this.corners = {
                tl: [0, 0],
                bl: [0, this.pageHeight],
                tr: [this.pageWidth, 0],
                br: [this.pageWidth, this.pageHeight],
                l: [0, 0],
                r: [this.pageWidth, 0]
            };
            this.thumbnails && this.updateThumbnails()
        },
        scale: function (a) {
            if (d.wowBook.support.transform) {
                this.zoomed && this.zoom(1);
                this.currentScale = a;
                var c = this.zoomContent;
                this.opts.zoomUsingTransform ? c.css({
                    transform: "scale(" + a + ")",
                    transformOrigin: "0 0"
                }) : c.css("zoom", a);
                this.elem.css({
                    height: this._originalHeight * a,
                    width: this._originalWidth * a
                });
                if (this.opts.onResize) this.opts.onResize(this)
            }
        },
        scaleToFit: function (a, c) {
            var b = a;
            if (!d.isNumeric(a)) {
                var e = d(a || this.opts.scaleToFit);
                if (!e.length) throw "jQuery selector passed to wowbook.resize did not matched in any DOM element.";
                b = e.width();
                c = e.height()
            }
            e = this._originalWidth / this._originalHeight;
            c * e <= b || (c = b / e);
            this.scale(c / this._originalHeight)
        },
        resize: function (a, c) {
            this.setDimensions(a, c);
            if (this.opts.onResize) this.opts.onResize(this)
        },
        responsive: function () {
            var a = this;
            d(window).on("resize.wowbook", function () {
                a.scaleToFit()
            })
        },
        insertPages: function (a, c) {
            for (var b = 0, e = a.length; b < e; b++) this.insertPage(a[b], !0);
            this.updateBook(c)
        },
        insertPage: function (a, c) {
            if (this.isDoublePage(a)) this.insertDoublePage(a, c);
            else {
                a = d(a).addClass("wowbook-page-content");
                var b = d("<div class='wowbook-page'></div>").css({
                    width: this.pageWidth,
                    height: this.pageHeight,
                    display: "none",
                    position: "absolute"
                }).appendTo(this.pagesContainer).append(a);
                d.wowBook.support.boxSizing && a.css(d.wowBook.support.boxSizing, "border-box");
                p(a, this.pageWidth, this.pageHeight);
                b.hardPageSetByUser = a.hasClass("wowbook-hardpage");
                this.opts.gutterShadow && d("<div class='wowbook-gutter-shadow'></div>").appendTo(a).css("height", this.pageHeight);
                this.pages.push(b);
                c || this.updateBook();
                return b
            }
        },
        insertDoublePage: function (a, c) {
            if (!this._insertingDoublePage) {
                this._insertingDoublePage = !0;
                var b = d(a),
                    e = b.clone().insertAfter(b),
                    f = b.add(e);
                b.css("left", 0);
                e.css("right", "100%");
                f.css({
                    width: "200%",
                    height: "100%",
                    position: "relative"
                });
                f.css(d.wowBook.support.boxSizing + "", "border-box").wrap("<div class='wowbook-double-page'></div>");
                this.insertPage(b.parent(), !0);
                this.insertPage(e.parent(), !0);
                d.wowBook.support.boxSizing || (p(b, 2 * this.pageWidth, this.pageHeight), p(e, 2 * this.pageWidth, this.pageHeight));
                c || this.updateBook();
                this._insertingDoublePage = !1
            }
        },
        isDoublePage: function (a) {
            a = d(a);
            return a.data("double") || a.is(this.opts.doublePages)
        },
        replaceNumberHolder: function (a, c) {
            if (void 0 == a) return a;
            c += "";
            return a.replace(/\{\{([^}]+)\}\}/g, function (a, e) {
                if (c.length < e.length) {
                    var f = e.replace(/./g, "0");
                    return (f + c).slice( - f.length)
                }
                return c
            })
        },
        loadPage: function (a) {
            "number" === typeof a && (a = this.pages[a]);
            if (a && !a.loaded && !a.loading && (a.src || a.image)) {
                a.loading = !0;
                var c = this;
                if (a.src) d.get(a.src, function (b) {
                    a.loaded = !0;
                    a.find(".wowbook-page-content").append(b);
                    a.removeClass("wowbook-loading");
                    c.updateThumbnail(a.pageIndex)
                });
                else if (a.image) {
                    var b = new Image;
                    b.onload = function () {
                        a.loaded = !0;
                        a.find(".wowbook-page-content").append(this);
                        d(this).addClass("wowbook-lazy");
                        a.removeClass("wowbook-loading");
                        c.updateThumbnail(a.pageIndex)
                    };
                    b.src = a.image
                }
            }
        },
        removePages: function (a, c) {
            arguments.length || (a = 0, c = -1);
            this.holdedPage && this.releasePage(this.holdedPage);
            var b = this.pages;
            c = (c || a) + 1 || b.length;
            var e = b.slice(a, c),
                f = b.slice(c);
            b.length = 0 > a ? b.length + a: a;
            b.push.apply(b, f);
            for (var f = 0, d = e.length; f < d; f++) e[f].remove();
            this.updateBook();
            return b.length
        },
        updateBook: function (a) {
            this.doPageNumbering();
            this.findPagesType();
            this.positionBookShadow();
            for (var c = this.rtl, b, e = 0, f = this.pages.length; e < f; e++) {
                b = this.pages[e].toggleClass("wowbook-left", c).toggleClass("wowbook-right", !c).data({
                    pageIndex: e,
                    holded: !1
                });
                b.pageIndex = e;
                var k = d(".wowbook-page-content", b);
                b.src = this.replaceNumberHolder(k.data("src") || this.opts.srcs, e);
                b.image = this.replaceNumberHolder(k.data("image") || this.opts.images, e); ! 0 != b.loaded && (b.loaded = !b.src && !b.image);
                b.loaded || b.addClass("wowbook-loading");
                b.onLeft = c;
                b.onRight = !c;
                c = !c
            }
            this.findSections();
            a || this.showPage(this.currentPage)
        },
        doPageNumbering: function () {
            var a = this.opts;
            if (a.pageNumbers) {
                var c = a.numberedPages,
                    a = this.pages.length - 1,
                    b = this.pageIsOnTheLeft(a);
                "all" == c && (c = [0, -1]);
                c || (c = [2, b ? -3 : -2]);
                var e = c[0],
                    c = c[1];
                0 > e && (e = a + e + 1);
                0 > e && (e = 0);
                e > this.pages.length - 1 && (e = a);
                0 > c && (c = a + c + 1);
                0 > c && (c = 0);
                c > this.pages.length - 1 && (c = a);
                for (var f = this.opts.firstPageNumber, b = 0; b < e; b++) d(".wowbook-page-number", this.pages[b]).remove();
                for (b = c + 1; b < a; b++) d(".wowbook-page-number", this.pages[b]).remove();
                for (b = e; b <= c; b++) a = d(".wowbook-page-number", this.pages[b]),
                a.length || (a = d(".wowbook-page-content", this.pages[b]), a = d('<div class="wowbook-page-number"></div>').appendTo(a)),
                    a.html(f++)
            }
        },
        findPagesType: function () {
            var a = this.opts,
                c = {},
                b, e, f;
            f = a.hardPages || [];
            var d = !0 === f;
            if (!d) for (a.hardcovers && (f.push(0, 1, -1), this.pageIsOnTheLeft(this.pages.length - 1) && f.push( - 2)), a = 0, e = f.length; a < e; a++) b = f[a],
            0 > b && (b = this.pages.length + b),
            0 <= b && b < this.pages.length && (c[b] = !0);
            for (a = this.pages.length; a--;) f = d || c[a] || this.pages[a].hardPageSetByUser,
                this.pages[a].toggleClass("wowbook-hardpage", f).isHardPage = f
        },
        showPage: function (a, c) {
            0 > a && (a = 0);
            a > this.pages.length - 1 && (a = this.pages.length - 1);
            var b = this.leftPageIndex(a),
                e = this.rightPageIndex(a),
                f = this.pageBelow(b),
                k = this.pageBelow(e),
                h = this.pageWidth,
                m = this.rtl,
                v = this.pages.length - 1,
                p,
                g;
            this.loadPage(b);
            this.loadPage(e);
            this.loadPage(f);
            this.loadPage(k);
            this.loadPage(this.backPage(b));
            this.loadPage(this.backPage(e));
            for (var t = 0; t <= v; t++) p = this.pages[t].onLeft != this.rtl ? t: v - t,
                g = this.transparentPages ? m ? t <= b ? "block": "none": t >= e ? "block": "none": t === f || t === b || t === e || t === k ? "block": "none",
                this.pages[t].data("zIndex", p).css({
                    display: g,
                    left: this.pages[t].onLeft ? 0 : h,
                    top: 0,
                    zIndex: p
                }),
                m = !m;
            f = 0 == a;
            v = a == v || a == this.otherPage(v);
            this.leftHandle.toggleClass("wowbook-disabled", !this.backPage(b));
            this.rightHandle.toggleClass("wowbook-disabled", !this.backPage(e));
            this.toggleControl("back", f);
            this.toggleControl("next", v);
            this.toggleControl("first", f);
            this.toggleControl("last", v);
            (b = this.onShowPage) && d.isFunction(b) && !this.isOnPage(a) && (b(this, this.pages[a], a), (e = this.otherPage(a)) && b(this, this.pages[e], e));
            this.currentPage = a;
            this.centeredWhenClosed && (b = !!this.leftPage(a), e = this.rightPage(a), this.origin.css("left", b && e ? 0 : b ? h / 2 : -h / 2));
            this.positionBookShadow(); ! 1 !== c && this.opts.updateBrowserURL && this.locationHashToPage() != a && (this.locationHashSetTo = window.location.hash = this.pageToLocationHash(a));
            this.showThumbnail()
        },
        holdPage: function (a, c, b, e, f) {
            "number" === typeof a && (a = this.pages[a]);
            if (a) {
                var d = a.pageIndex,
                    h = this.pages.length - 1,
                    m = !this.otherPage(h);
                if (!e) e = this.pageIsOnTheLeft(d) ? "l": "r";
                else if (!this.corners[e] || (this.pageIsOnTheLeft(d) ? /r/: /l/).test(e)) return;
                void 0 === f && (f = this.backPage(d));
                if (f) {
                    var v = f.pageIndex;
                    a.data("holded_info", [c, b, e]);
                    if (this.centeredWhenClosed && (0 === d || 0 === v || m && (v === h || d === h))) {
                        var p = 0,
                            g, t = !this.rtl,
                            q = this.pageWidth,
                            r, n, l, u, s, w, z, A;
                        if (t ? 0 === d: d === h && m) r = -q / 2,
                            n = -q / 4,
                            l = 0,
                            u = -q / 2,
                            s = -q,
                            w = n,
                            z = s,
                            A = c;
                        if (t ? d === h && m: 0 === d) r = q,
                            n = 3 * q / 2,
                            l = q / 2,
                            u = 0,
                            s = q,
                            w = 2 * q,
                            z = c,
                            A = w;
                        if (t ? 0 === v: v === h && m) r = q / 2,
                            n = d === (t ? h: 0) ? q: 3 * q / 2,
                            l = d === (t ? h: 0) ? q / 2 : 0,
                            u = -q / 2,
                            s = r,
                            w = 2 * q,
                            z = c,
                            A = w;
                        if (t ? v === h && m: 0 === v) r = d === (t ? 0 : h) ? 0 : -q / 2,
                            n = q / 2,
                            l = q / 2,
                            u = d === (t ? 0 : h) ? -q / 2 : 0,
                            s = -q,
                            w = n,
                            z = s,
                            A = c;
                        c < r && (p = l, g = z);
                        c > n && (p = u, g = A);
                        c >= r && c <= n && (c = (c - r) / (n - r), p = l + c * (u - l), g = s + c * (w - s));
                        c = g;
                        this.origin.css("left", p);
                        this.positionBookShadow()
                    }
                    this.zoomed || "basic" == this.pageType(a) || "basic" == this.pageType(f) ? this.foldPageBasic(a, c, b, e, f) : a.isHardPage || f.isHardPage ? this.holdHardpage(a, c, b, e, f) : this.foldPage(a, c, b, e, f);
                    if (!a.data("holded") && (a.addClass("wowbook-page-holded"), f.addClass("wowbook-page-holded"), a.data("holded", !0), this.holdedPage = a, this.holdedPageBack = f, this.shadows && this.shadowClipper.css("display", "block"), this.clipBoundaries && this.clipper.css("overflow", "visible"), this.positionBookShadow(), this.opts.onHoldPage)) this.opts.onHoldPage(this, d, a, f)
                }
            }
        },
        foldPage: function (a, c, b, e, f) {
            this._currentFlip || (this._currentFlip = this.foldPageStart(a, c, b, e, f));
            this._currentFlip.page == a && (this._currentFlip.x = c, this._currentFlip.y = b, this._currentFlip.page.data("holdedAt", {
                x: c,
                y: b
            }), this._currentFlip.corner = e, this.foldPageStyles(this._currentFlip))
        },
        foldPageStart: function (a, c, b, e, f) {
            var d = {};
            "number" === typeof a && (a = this.pages[a]);
            d.book = this;
            d.page = a;
            d.pageIndex = a.data("pageIndex");
            void 0 === f && (f = this.backPage(d.pageIndex));
            if (f && f.length) {
                d.back = f;
                d.pageContent = a.children().first();
                d.backContent = f.children().first();
                var h = this.pageWidth,
                    m = this.pageHeight;
                e || (e = "tl");
                if ("l" == e || "r" == e) {
                    var v = {
                        x: "l" == e ? 0 : h,
                        y: b
                    };
                    a.data("grabPoint", v);
                    d.grabPoint = v;
                    e = (b >= v.y ? "t": "b") + e
                }
                d.page.data("holdedAt", {
                    x: c,
                    y: b
                });
                d.x = c;
                d.y = b;
                d.page.data("holdedCorner", e);
                d.corner = e;
                d.pageDiagonal = Math.sqrt(h * h + m * m);
                d.page.css("clip", "rect(-1000px 2000px 2000px 0px)");
                d.pageLeft = parseFloat(a.css("left"));
                f.css({
                    left: d.pageLeft + "px",
                    zIndex: 1E3,
                    clip: "rect(-1000px 2000px 2000px 0px)"
                });
                d.shadowHeight = 2 * Math.ceil(d.pageDiagonal);
                d.shadowTop = -(d.shadowHeight - m) / 2;
                this.internalShadow.css({
                    display: "block",
                    height: d.shadowHeight
                });
                d.foldShadowWidth = this.foldShadow.width();
                this.foldShadow.css({
                    display: "block",
                    height: d.shadowHeight
                });
                this.foldGradientContainer.appendTo(d.backContent);
                d.foldGradientWidth = this.foldGradientElem.width();
                d.foldGradientHeight = 2 * Math.ceil(d.pageDiagonal);
                this.foldGradientElem.css("height", d.foldGradientHeight);
                this.foldGradientContainer.css({
                    position: "absolute",
                    width: d.foldGradientWidth,
                    height: d.foldGradientHeight,
                    top: 0,
                    left: 0,
                    display: "none"
                });
                d.foldGradientVisible = !1;
                return d
            }
        },
        foldPageStyles: function (a) {
            var c = this.pageWidth,
                b = this.pageHeight,
                e = c / 2,
                f = b / 2,
                k = d.wowBook.utils.translate,
                h = a.pageLeft,
                m = a.x,
                v = a.y,
                p = a.back,
                g = a.corner || "tl";
            if ("l" == g || "r" == g) {
                var t = a.page.data("grabPoint");
                t || (t = {
                    x: "l" == g ? 0 : c,
                    y: v
                },
                    page.data("grabPoint", t));
                g = (v >= t.y ? "t": "b") + (this.pageIsOnTheLeft(a.pageIndex) ? "l": "r");
                a.corner = g;
                a.page.data("holdedCorner", g);
                var q = m - t.x,
                    r = v - t.y,
                    q = Math.atan2(r, q),
                    t = {
                        x: 0,
                        y: (v >= t.y ? 0 : b) - t.y
                    },
                    t = u(t, 2 * q),
                    m = t.x + m,
                    v = t.y + v
            }
            a.page.data("holdedAt", {
                x: m,
                y: v
            });
            a.page.data("holdedCorner", g);
            var t = this.corners[g],
                g = c - t[0],
                n = t[1],
                q = m - g,
                r = v - n,
                l = Math.sqrt(q * q + r * r);
            l > c && (m = g + c * q / l, v = n + c * r / l);
            var n = b - n,
                q = m - g,
                r = v - n,
                l = Math.sqrt(q * q + r * r),
                s = a.pageDiagonal;
            l > s && (m = g + s * q / l, v = n + s * r / l);
            g = t[0];
            t = t[1];
            t == v && (v = t + 0.001);
            q = m - g;
            r = v - t;
            l = Math.sqrt(q * q + r * r);
            m = l / 2;
            q = Math.atan2(r, q);
            r = Math.tan(q);
            v = q;
            q = 180 * q / Math.PI;
            n = {
                x: g - e,
                y: f - t
            };
            s = u(n, v);
            l = s.x + m + e + 0.5;
            a.pageContent.css("transform", k( - l, 0) + " rotate(" + ( - q).toFixed(7) + "deg)");
            a.page.css("transform", k((Math.cos(v) * l).toFixed(5), (Math.sin(v) * l).toFixed(5)) + " rotate(" + q.toFixed(7) + "deg)");
            s = this.calculateOpacity(m, c, this.shadowThreshold, 50);
            if (this.shadows && 0 < s) {
                var w = a.shadowTop;
                this.internalShadow.css({
                    transform: k(l + h, w) + " rotate(" + q + "deg)",
                    transformOrigin: e - l + "px " + (f + (a.shadowHeight - b) / 2) + "px"
                });
                l -= a.foldShadowWidth;
                this.foldShadow.css({
                    transform: k(l + h, w) + " rotate(" + q + "deg)",
                    transformOrigin: e - l + "px " + (f + (a.shadowHeight - b) / 2) + "px"
                });
                this.shadowContainer.css({
                    opacity: s,
                    display: "block"
                })
            } else this.shadowContainer.css("display", "none");
            p.show();
            n.x = -n.x;
            s = u(n, -v);
            l = s.x - m + e - 1;
            b = {
                x: s.x - m,
                y: s.y + m * r
            };
            h = {
                x: s.x - m,
                y: s.y - m / (0 == r ? 1E-4: r)
            };
            b = u(b, -v);
            h = u(h, -v);
            h = -(h.x + e);
            b = -(b.y - f);
            a.backContent.css("transform", k( - l, 0) + " rotate(" + q + "deg)");
            a.back.css("transform", k((g + h + Math.cos(v) * l).toFixed(5), (t - b + Math.sin(v) * l).toFixed(5)) + " rotate(" + q + "deg)");
            s = this.calculateOpacity(2 * m, 2 * c, this.foldGradientThreshold, 50);
            this.foldGradient && 0 < s ? (this.foldGradientContainer.css({
                opacity: s,
                display: "block",
                transform: k(c - g - a.foldGradientWidth / 2, t - a.foldGradientHeight / 2) + " rotate(" + -q + "deg)"
            }), this.foldGradientElem.css("transform", k( - m + a.foldGradientWidth / 2, 0)), a.foldGradientVisible || (this.foldGradientContainer.css("display", "block"), a.foldGradientVisible = !0)) : a.foldGradientVisible && (this.foldGradientContainer.css("display", "none"), a.foldGradientVisible = !1)
        },
        holdHardpage: function (a, c, b, e, d) {
            this._currentFlip || (this._currentFlip = this.flipHardPageStart(a, c, b, e, d));
            this._currentFlip.page == a && (this._currentFlip.x = c, this._currentFlip.y = b, this._currentFlip.page.data("holdedAt", {
                x: c,
                y: b
            }), this._currentFlip.corner = e, this.flipHardPageStyles(this._currentFlip))
        },
        flipHardPageStart: function (a, c, b, e, d) {
            this.clipBoundaries && this.clipper.children(".wowbook-inner-clipper").css("overflow", "visible");
            var k = {};
            "number" === typeof a && (a = this.pages[a]);
            k.book = this;
            k.page = a;
            k.pageIndex = a.data("pageIndex");
            void 0 === d && (d = this.backPage(k.pageIndex));
            if (d && d.length) {
                k.back = d;
                var h = this.pageWidth;
                e || (e = "tl");
                a.data("holdedAt", {
                    x: c,
                    y: b
                });
                a.data("holdedCorner", e);
                a.css("zIndex", 1E3);
                d.css("zIndex", 1E3);
                this.opts.use3d && Modernizr.csstransforms3d && (a.css(Modernizr.prefixed("perspectiveOrigin"), "0 50%"), d.css(Modernizr.prefixed("perspectiveOrigin"), "0 50%"));
                c = this.pageIsOnTheLeft(k.pageIndex) ? h: 0;
                a.css("transformOrigin", c + "px 50%");
                d.css("transformOrigin", h - c + "px 50%");
                this.shadows && this.hardPageShadow.css("display", "block");
                return k
            }
        },
        flipHardPageStyles: function (a) {
            var c = a.page,
                b = a.back;
            x = a.x;
            y = a.y;
            var e = this.pageIsOnTheRight(a.pageIndex),
                f = this.pageWidth,
                k = this.pageHeight;
            (a = a.corner) || (a = "tl");
            c.data("holdedAt", {
                x: x,
                y: y
            });
            c.data("holdedCorner", a);
            a = e ? f - x: x;
            var h = e ? 0 : f,
                m;
            0 > a && (a = 0);
            a = (m = a < f) ? c: b;
            (m ? b: c).css("display", "none");
            c = e != m;
            b = x - h;
            b > f && (b = f);
            b < -f && (b = -f);
            h = -Math.sqrt(1600 * (1 - b * b / ((f + 15) * (f + 15))));
            e = Math.abs(b / f);
            h = 1 == e ? 0 : Math.atan2(h, b);
            if (this.opts.use3d && Modernizr.csstransforms3d) {
                var g;
                g = c ? -this._calculateAngleFromX( - b, f) : this._calculateAngleFromX(b, f);
                this.animating && (m = this._animationData, this.curledPage || m.curled ? (m.curled = !0, m.angle || (h = {
                    from: g,
                    to: 0
                },
                    m.angle = h, g = b + m.dx, h.to = c ? -this._calculateAngleFromX( - g, f) : this._calculateAngleFromX(g, f), Math.abs(b) == f && (h.from = 0), Math.abs(g) == f && (h.to = 0), h.delta = h.to - h.from), g = m.angle.from - m.angle.delta * (m.from.x - x) / m.dx) : (Math.abs(x - m.from.x), Math.abs(m.dx / 2)));
                a.css({
                    transform: "perspective(" + this.opts.perspective + this.perspectiveUnit + ") rotate3d(0, 1, 0, " + g + "deg)",
                    display: "block"
                })
            } else a.css({
                transform: "skewY(" + h + "rad) scaleX(" + e + ")",
                display: "block"
            }); ! d.wowBook.support.transform && d.wowBook.support.filters && (e = "M11=" + e + ", M12=0, M21=" + Math.tan(h) * e + ", M22=1", a.css("filter", "progid:DXImageTransform.Microsoft.Matrix(" + e + ", sizingMethod='auto expand')"), a.css({
                marginTop: k - a.height(),
                marginLeft: c ? f - a.width() : 0
            }));
            this.shadows && this.hardPageShadow.css({
                left: c ? 0 : f,
                opacity: 0.5 * Math.abs(b / f)
            })
        },
        _calculateAngleFromX: function (a, c, b) {
            var e = 2 * c / 3;
            if (a > e) {
                var d = this._calculateAngleFromX(e, c, b);
                return d + (a - e) / (c - e) * (0 - d)
            }
            b = b || this.opts.perspective;
            e = 180 / Math.PI;
            d = c * c;
            b *= b;
            var k = a * a;
            a = Math.acos((c * b * a - Math.sqrt(d * d * b * k + d * d * k * k - d * b * k * k)) / (d * b + d * k));
            return a = -a * e
        },
        foldPageBasic: function (a, c, b, e, d) {
            this._currentFlip || (this._currentFlip = this.foldPageBasicStart(a, c, b, e, d));
            this._currentFlip && this._currentFlip.page == a && (this._currentFlip.x = c, this._currentFlip.y = b, this._currentFlip.page.data("holdedAt", {
                x: c,
                y: b
            }), this._currentFlip.corner = e, this.foldPageBasicStyles(this._currentFlip))
        },
        foldPageBasicStart: function (a, c, b, e, d) {
            var k = {};
            "number" === typeof a && (a = this.pages[a]);
            k.book = this;
            k.page = a;
            k.pageIndex = a.data("pageIndex");
            void 0 === d && (d = this.backPage(k.pageIndex));
            if (d && d.length) {
                k.back = d;
                var h = this.pageHeight;
                e || (e = "tl");
                a.data("holdedAt", {
                    x: c,
                    y: b
                });
                a.data("holdedCorner", e);
                d.css("zIndex", 1E3);
                a.data("foldPageBasic", !0);
                k.foldGradientWidth = this.foldGradientElem.width();
                k.foldShadowWidth = this.foldShadow.width();
                this.internalShadow.css("display", "none");
                this.foldShadow.css({
                    display: "none",
                    height: h,
                    transform: "",
                    top: 0
                }).toggleClass("wowbook-shadow-fold-flipped", a.onRight);
                this.shadowContainer.css("display", "block");
                c = d.children().first();
                this.foldGradientContainer.appendTo(c).css({
                    width: k.foldGradientWidth,
                    height: h,
                    top: 0,
                    transform: "",
                    zIndex: 1E9
                });
                this.foldGradientElem.css({
                    left: 0,
                    height: h
                }).toggleClass("wowbook-fold-gradient-flipped", a.onRight);
                return k
            }
        },
        foldPageBasicStyles: function (a) {
            var c = a.page,
                b = a.back;
            x = a.x;
            y = a.y;
            var d = this.pageWidth,
                f = a.corner;
            f || (f = "tl");
            c.data("holdedAt", {
                x: x,
                y: y
            });
            c.data("holdedCorner", f);
            var k = (f = this.pageIsOnTheLeft(a.pageIndex)) ? x: d - x;
            0 > k && (k = 0);
            k > 2 * d && (k = 2 * d);
            var h = k / 2,
                m, g;
            f ? (m = "rect(-1000px 1000px 1000px " + h + "px)", g = "rect(-1000px 1000px 1000px " + (d - h) + "px)", k -= d) : (m = "rect(-1000px " + (d - h) + "px 1000px -1000px)", g = "rect(-1000px " + h + "px 1000px -1000px)", k = d - k + d);
            c.css("clip", m);
            b.css({
                clip: g,
                left: k,
                display: "block"
            });
            c = this.calculateOpacity(2 * h, 2 * d, this.shadowThreshold, 50);
            this.shadows && 0 < c ? (b = f ? h - a.foldShadowWidth: d - h + d, this.shadowContainer.css("opacity", c), this.foldShadow.css({
                left: b,
                display: "block"
            })) : this.foldShadow.css("display", "none");
            c = this.calculateOpacity(2 * h, 2 * d, this.foldGradientThreshold, 50);
            this.foldGradient && 0 < c ? (b = f ? d - h: h - a.foldGradientWidth, this.foldGradientContainer.css({
                opacity: c,
                left: b,
                display: "block"
            })) : this.foldGradientContainer.css("display", "none")
        },
        stopAnimation: function (a) {
            arguments.length || (a = !0);
            d(this).stop(!0, a);
            this.animating = !1
        },
        flip: function (a, c, b, e) {
            e || (e = d.isPlainObject(a) ? a: {});
            e.from || (e.from = []);
            e.to || (e.to = []);
            var f = this;
            if (!f.animating) {
                f.animating = !0;
                b || (b = e.page || f.holdedPage);
                var k = b.data("holded_info");
                b.data("holdedAt");
                var h = e.corner || b.data("holdedCorner"),
                    m = d.easing[e.easing] || e.easing ||
                        function (a) {
                            return 1 == a ? 1 : -Math.pow(2, -10 * a) + 1
                        };
                a = {
                    page: b,
                    back: e.back || f.holdedPageBack || f.backPage(b.pageIndex),
                    initialX: void 0 != e.from[0] ? e.from[0] : k[0],
                    initialY: void 0 != e.from[1] ? e.from[1] : k[1],
                    finalX: void 0 != e.to[0] ? e.to[0] : a,
                    finalY: void 0 != e.to[1] ? e.to[1] : c,
                    corner: h || k[2],
                    duration: e.duration,
                    complete: function () {
                        f.animating = !1;
                        d.isFunction(e.complete) && e.complete()
                    },
                    easing: m,
                    arc: e.arc,
                    dragging: e.dragging,
                    start: d.now(),
                    finished: !1
                };
                a.deltaX = a.finalX - a.initialX;
                a.deltaY = a.finalY - a.initialY;
                this._animationData = {
                    from: {
                        x: a.initialX,
                        y: a.initialY
                    },
                    to: {
                        x: a.finalX,
                        y: a.finalY
                    },
                    dx: a.deltaX
                };
                void 0 == a.duration && (a.duration = this.turnPageDuration * Math.abs(a.deltaX) / (2 * this.pageWidth));
                a.duration < this.opts.turnPageDurationMin && (a.duration = this.opts.turnPageDurationMin); ! b.isHardPage && 0.4 < a.duration / this.turnPageDuration && this.playFlipSound();
                this.currentFlip = a
            }
        },
        rafCallback: function () {
            window.raf(this.callRAFCallback);
            if (this.currentFlip && !this.currentFlip.finished) {
                var a = this.currentFlip,
                    c = (d.now() - a.start) / a.duration;
                1 <= c && (c = 1);
                a.x = a.initialX + a.deltaX * a.easing(c, a.duration * c, 0, 1, a.duration);
                a.y = a.initialY + a.deltaY * a.easing(c, a.duration * c, 0, 1, a.duration);
                a.arc && (a.y -= (0.5 - Math.abs(0.5 - a.easing(c, a.duration * c, 0, 1))) * this.pageHeight / 10);
                a.dragging && (a.x = a.initialX + 0.2 * a.deltaX, a.y = a.initialY + 0.2 * a.deltaY, a.initialX = a.x, a.initialY = a.y, a.deltaX = a.finalX - a.initialX, a.deltaY = a.finalY - a.initialY, 1 > a.deltaX && 1 > a.deltaY && 1 == c);
                this.holdPage(a.page, a.x, a.y, a.corner, a.back);
                1 == c && (a.finished = !0, a.complete && a.complete())
            }
        },
        releasePages: function () {
            for (var a = 0, c = this.pages.length; a < c; a++) this.pages[a].data("holded") && this.releasePage(a)
        },
        releasePage: function (a, c, b, d) {
            "number" === typeof a && (a = this.pages[a]);
            var f = this,
                k = a.data("holdedAt"),
                h = a.data("holdedCorner");
            if (c && k) this.flip({
                from: [k.x, k.y],
                to: this.corners[h],
                page: a,
                easing: "linear",
                duration: 1E4,
                duration: d,
                complete: function () {
                    f.releasePage(a)
                }
            });
            else if (c = a.data("pageIndex"), void 0 === b && (b = this.holdedPageBack || this.backPage(c)), this.holdedPageBack = this.holdedPage = null, a.data({
                    holded_info: null,
                    holdedAt: null,
                    holdedCorner: null,
                    grabPoint: !1,
                    foldPageBasic: null,
                    holded: !1
                }), this.clipBoundaries && !this.zoomed && (this.clipper.css("overflow", "hidden"), this.clipper.children(".wowbook-inner-clipper").css("overflow", "hidden")), this.shadowClipper.css("display", "none"), this.internalShadow.parent().hide(), this.foldGradientContainer.hide(), this.hardPageShadow.hide(), this.resetPage(a), b && b.length && (this.resetPage(b), b.hide()), this.foldShadow.removeClass("wowbook-shadow-fold-flipped").css({
                    transform: "",
                    left: ""
                }), this.foldGradientElem.removeClass("wowbook-fold-gradient-flipped").css("transform", ""), this.foldGradientContainer.css("transform", "").appendTo(this.pagesContainer), this.positionBookShadow(), this.opts.onReleasePage) this.opts.onReleasePage(this, c, a, b)
        },
        resetPage: function (a) {
            this._currentFlip = void 0;
            a.removeClass("wowbook-page-holded");
            this.resetCSS || (this.resetCSS = {
                transform: "",
                transformOrigin: "",
                clip: "auto",
                marginLeft: 0,
                marginTop: 0,
                filter: ""
            });
            var c = this.pageWidth,
                b = this.pageHeight;
            a.css(this.resetCSS).css({
                zIndex: a.data("zIndex"),
                width: c,
                height: b,
                left: this.pageIsOnTheLeft(a.data("pageIndex")) ? 0 : c
            });
            d.browser.msie && 9 > d.browser.version && a.attr("style", a.attr("style").replace(/clip\: [^;]+;/i, ""));
            a = d(".wowbook-page-content", a);
            a.css(this.resetCSS);
            p(a, c, b)
        },
        gotoPage: function (a, c) {
            var b, d;
            if (!this.animating && (this._cantStopAnimation = !0, "string" === typeof a && "#" == a.charAt(0) && (a = this.selectorToPage(a)), 0 > a && (a = 0), a > this.pages.length - 1 && (a = this.pages.length - 1), !this.isOnPage(a))) {
                var f = a < this.currentPage;
                b = this.rtl ? a > this.currentPage: f;
                var k = this,
                    h = b ? k.leftPage() : k.rightPage();
                if (h) {
                    this.uncurl(!0);
                    var m, g;
                    b ? (m = this.leftPage(a), g = this.rightPage(a)) : (m = this.rightPage(a), g = this.leftPage(a));
                    var p = g && g.is(":visible");
                    if (f) for (f = h.pageIndex - 1; 0 <= f; f--) this.pages[f].css("display", "none");
                    else for (f = h.pageIndex + 1, d = this.pages.length; f < d; f++) this.pages[f].css("display", "none");
                    m && m.css("display", "block");
                    p && g.css("display", "block");
                    var l = a;
                    m = h.data("holdedAt");
                    p = h.data("holdedAt");
                    f = h.data("holdedCorner") || (b ? "tl": "tr");
                    b ? (p = p || {
                        x: 0,
                        y: 0
                    },
                        b = 2 * k.pageWidth, d = "bl" != f ? 0 : this.pageHeight) : (p = p || {
                        x: this.pageWidth,
                        y: 0
                    },
                        b = -k.pageWidth, d = "br" != f ? 0 : this.pageHeight);
                    var n = "linear";
                    if (this.centeredWhenClosed && (h.isHardPage || g.isHardPage)) {
                        var q = this.pages.length - 1,
                            r = !this.rtl,
                            n = "easeOutCubic";
                        this.currentPage == (r ? 0 : q) && (b += this.pageWidth / 2, r ? a == q && this.pageIsOnTheLeft(a) : 0 == a) && (b += this.pageWidth / 2);
                        this.currentPage == (r ? q: 0) && (b -= this.pageWidth / 2, a == (r ? 0 : q) && (b -= this.pageWidth / 2))
                    }
                    k.flip({
                        from: [p.x, p.y],
                        to: [b, d],
                        easing: n,
                        arc: !m,
                        page: h,
                        back: g,
                        corner: f,
                        complete: function () {
                            k._cantStopAnimation = !1;
                            k.releasePage(h, !1);
                            k.showPage(l, c)
                        }
                    });
                    return a
                }
            }
        },
        back: function () {
            return this.gotoPage(this.currentPage - 2)
        },
        advance: function () {
            return this.gotoPage(this.currentPage + 2)
        },
        leftPage: function (a) {
            void 0 === a && (a = this.currentPage);
            return this.pages[this.leftPageIndex(a)] || null
        },
        leftPageIndex: function (a) {
            this.pageIsOnTheLeft(a) || (a += this.rtl ? 1 : -1);
            if (0 > a || a > this.pages.length - 1) a = null;
            return a
        },
        rightPage: function (a) {
            void 0 === a && (a = this.currentPage);
            return this.pages[this.rightPageIndex(a)] || null
        },
        rightPageIndex: function (a) {
            this.pageIsOnTheRight(a) || (a += this.rtl ? -1 : 1);
            if (0 > a || a > this.pages.length - 1) a = null;
            return a
        },
        pageIsOnTheRight: function (a) {
            return this.rtl ? !!(a % 2) : !(a % 2)
        },
        pageIsOnTheLeft: function (a) {
            return this.rtl ? !(a % 2) : !!(a % 2)
        },
        otherPage: function (a) {
            a = this.pageIsOnTheLeft(a) ? a + (this.rtl ? -1 : 1) : a + (this.rtl ? 1 : -1);
            if (0 > a || a > this.pages.length - 1) a = null;
            return a
        },
        isOnPage: function (a) {
            return "number" === typeof a && (a === this.currentPage || a === this.otherPage(this.currentPage))
        },
        backPage: function (a) {
            return this.pages[a] ? this.pages[a + (a % 2 ? -1 : 1)] : null
        },
        pageBelow: function (a) {
            a = parseInt(a, 10);
            if (a != a) return null;
            a += this.pageIsOnTheLeft(a) != this.rtl ? -2 : 2;
            if (0 > a || a > this.pages.length - 1) a = null;
            return a
        },
        pageType: function (a) {
            a = "number" === typeof a ? this.pages[a] : a;
            return a.isHardPage ? "hard": a.find(".wowbook-page-content.wowbook-basic-page").length ? "basic": "soft"
        },
        calculateOpacity: function (a, c, b, d) {
            if (a <= b || a >= c - b) return 0;
            if (a >= d && a <= c - d) return 1;
            a > d && (a = c - a);
            return (a - b) / (d - b)
        },
        startSlideShow: function () {
            this.slideShowRunning = !0;
            this.advanceAfterTimeout(this.slideShowDelay);
            d(this.opts.controls.slideShow).addClass("wowbook-disabled")
        },
        advanceAfterTimeout: function (a) {
            var c = this;
            this.slideShowTimer = setTimeout(function () {
                    c.animating || c.holdedPage ? c.advanceAfterTimeout(100) : (c.advance(), c.isOnPage(c.pages.length - 1) ? c.stopSlideShow() : c.advanceAfterTimeout(c.slideShowDelay + c.turnPageDuration))
                },
                a)
        },
        stopSlideShow: function () {
            clearTimeout(this.slideShowTimer);
            this.slideShowTimer = void 0;
            this.slideShowRunning = !1;
            d(this.opts.controls.slideShow).removeClass("wowbook-disabled")
        },
        toggleSlideShow: function () {
            this.slideShowRunning ? this.stopSlideShow() : this.startSlideShow()
        },
        findSections: function (a) {
            a && (this.sectionDefinition = a);
            var c = this.sectionDefinition;
            a = [];
            var b;
            "string" === typeof c && (b = c, c = [], d(b, this.elem).each(function (a, b) {
                c.push(["#" + b.id, d(b).html()])
            }));
            if (d.isArray(c)) {
                for (var e = 0, f = c.length; e < f; e++) {
                    b = c[e];
                    if ("string" === typeof b) try {
                        b = [b, d(b, this.elem).html()]
                    } catch(k) {
                        continue
                    }
                    try {
                        b[2] = this.selectorToPage(b[0])
                    } catch(h) {
                        continue
                    }
                    void 0 !== b[2] && a.push({
                        id: b[0],
                        title: b[1],
                        page: b[2]
                    })
                }
                a = a.sort(function (a, b) {
                    return a.page - b.page
                })
            }
            return this.sections = a
        },
        pageToSection: function (a) {
            for (var c = this.sections, b, d = 0, f = c.length; d < f && !(c[d].page > a); d++) b = c[d];
            return b
        },
        currentSection: function () {
            return this.pageToSection(this.currentPage)
        },
        fillToc: function (a, c) {
            var b = d(a || this.opts.toc),
                e,
                f,
                k = "";
            if (0 !== b.length) {
                e = this.sections;
                "undefined" === typeof c && (c = this.opts.tocTemplate);
                c || (k = b.is("UL, OL") ? "<li>": "<div>", c = '<a href="${link}">${section}</a>');
                for (var h = 0, g = e.length; h < g; h++) f = e[h],
                    f = c.replace(/\$\{link\}/g, "#" + this.id + "/" + f.id.substr(1)).replace(/\$\{section\}/g, f.title).replace(/\$\{page\}/g, f.page),
                    d(f).appendTo(b).wrap(k)
            }
        },
        locationHashToPage: function (a, c) {
            void 0 === a && (a = window.location.hash);
            if (a == "#" + this.id + "/") return 0;
            a = a.slice(1).split("/");
            if (a[0] === this.id) {
                if (1 === a.length) return 0;
                var b = parseInt(a[1]);
                if (!isNaN(b)) return Math.max(b - 1, 0);
                b = this.selectorToPage("#" + a[1]);
                if (void 0 === b) return 0;
                isNaN(a[2]) || (b += Math.max(parseInt(a[2]) - 1, 0));
                return + b
            }
        },
        pageToLocationHash: function (a) {
            var c = "",
                b = a + 1;
            if (a = this.pageToSection(a)) c += "/" + a.id.replace("#", ""),
                b -= a.page;
            1 < b && (c += "/" + b);
            return "#" + this.id + (c || "/")
        },
        selectorToPage: function (a) {
            a = d(a, this.elem).closest(".wowbook-page");
            if (a.length) return + a.data("pageIndex")
        },
        getLocationHash: function () {
            return window.location.hash.slice(1)
        },
        locationEndsInHash: function (a) {
            void 0 === a && (a = window.location.href);
            return a.lastIndexOf("#") == a.length - 1
        },
        zoom: function (a) {
            for (var c = 0, b = this.pages.length; c < b; c++) if (this.pages[c].data("holdedAt")) return;
            a < this.zoomMin && (a = this.zoomMin);
            a > this.zoomMax && (a = this.zoomMax);
            if (a !== this.zoomLevel) {
                this.zoomLevel = a;
                var e = this,
                    c = this.zoomWindow,
                    b = this.zoomContent,
                    f = d(this.zoomBoundingBox),
                    k = 2 * e.pageWidth * a * this.currentScale,
                    h = e.pageHeight * a * this.currentScale,
                    g = f.width(),
                    p = f.height(),
                    l = Math.min(k, g),
                    n = Math.min(h, p),
                    s = (2 * this.pageWidth * this.currentScale - l) / 2,
                    q = (this.pageHeight * this.currentScale - n) / 2;
                c.css({
                    width: l,
                    height: n,
                    left: s,
                    top: q
                });
                this.zoomContentOverflowed = k > g || h > p;
                var r = c.offset(),
                    f = f[0] !== window ? f.offset() : {
                        left: f.scrollLeft(),
                        top: f.scrollTop()
                    };
                r.right = r.left + l;
                r.bottom = r.top + n;
                f.right = f.left + g;
                f.bottom = f.top + p;
                r.left < f.left && c.css("left", s + (f.left - r.left));
                r.right > f.right && c.css("left", s + (f.right - r.right));
                r.top < f.top && c.css("top", q + (f.top - r.top));
                r.bottom > f.bottom && c.css("top", q + (f.bottom - r.bottom));
                r = c.offset();
                g = b.offset();
                r.right = r.left + l;
                r.bottom = r.top + n;
                g.right = g.left + k;
                g.bottom = g.top + h;
                g.left > r.left && b.css("marginLeft", 0);
                g.right < r.right && b.css("marginLeft", (parseFloat(b.css("marginLeft")) || 0) + (r.right - g.right));
                g.top > r.top && b.css("marginTop", 0);
                g.bottom < r.bottom && b.css("marginTop", (parseFloat(b.css("marginTop")) || 0) + (r.bottom - g.bottom));
                l === k && b.css("marginLeft", 0);
                n === h && b.css("marginTop", 0);
                this.opts.zoomUsingTransform ? b.css({
                    transform: "scale(" + a * this.currentScale + ")",
                    transformOrigin: "0 0"
                }) : b.css("zoom", a * this.currentScale);
                1 === this.zoomLevel ? (c.unbind("mousemove.wowbook").css({
                    overflow: "visible",
                    left: 0,
                    top: 0
                }), this.clipBoundaries && this.clipper.css("overflow", "hidden"), b.css({
                    marginLeft: 0,
                    marginTop: 0
                })) : (this.clipBoundaries && this.clipper.css("overflow", "visible"), c.css("overflow", "hidden"), this.zoomed || c.bind("mousemove.wowbook", function (a) {
                    e.zoomedAt(a)
                }));
                this.zoomed = 1 !== a;
                this.positionBookShadow();
                if (this.onZoom) this.onZoom(this);
                this.toggleControl("zoomIn", this.zoomLevel == this.zoomMax);
                this.toggleControl("zoomOut", this.zoomLevel == this.zoomMin)
            }
        },
        zoomIn: function (a) {
            this.zoom(this.zoomLevel + (a || this.zoomStep))
        },
        zoomOut: function (a) {
            this.zoom(this.zoomLevel - (a || this.zoomStep))
        },
        zoomedAt: function (a) {
            if (this.zoomContentOverflowed) {
                var c = this.zoomLevel,
                    b = this.zoomWindow.offset(),
                    d = a.pageX - b.left;
                a = a.pageY - b.top;
                var f = this.zoomWindow.width(),
                    b = 2 * this.pageWidth * c * this.currentScale - f,
                    d = d / f,
                    f = this.zoomWindow.height(),
                    g = this.pageHeight * c * this.currentScale - f;
                adjust = this.opts.zoomUsingTransform ? 1 : c;
                this.zoomContent.css({
                    marginLeft: -b * d / adjust,
                    marginTop: a / f * -g / adjust
                })
            }
        },
        detectBestZoomMethod: function (a, c, b) {
            void 0 === a && (a = d.wowBook.support.transform);
            void 0 === b && (b = d.browser.ie8mode);
            a = d.browser.chrome || d.browser.webkit || d.browser.safari || d.browser.opera || b || !a;
            this.opts.zoomUsingTransform = !a;
            return a ? "zoom": "transform"
        },
        setupFullscreen: function () {
            if (A) {
                var a = this,
                    c, b = "fullscreenerror mozfullscreenerror webkitfullscreenerror MSFullscreenError ";
                c = "fullscreenchange mozfullscreenchange webkitfullscreenchange MSFullscreenChange ".replace(/ /g, ".wowbook ");
                b = b.replace(/ /g, ".wowbook ");
                this._fullscreenChangeHandler = function () {
                    var b = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement || n.msFullscreenElement;
                    d(a.opts.fullscreenElement).toggleClass("fullscreen", b);
                    a.elem.toggleClass("fullscreen", b);
                    a.toggleControl("fullscreen", b)
                };
                d(document).on(c, this._fullscreenChangeHandler);
                this._fullscreenErrorHandler = function () {
                    a.opts.onFullscreenError && a.opts.onFullscreenError.apply(this, arguments)
                };
                d(document).on(b, this._fullscreenErrorHandler)
            } else d(this.opts.controls.fullscreen).hide()
        },
        enterFullscreen: function (a) {
            a = d(a || this.opts.fullscreenElement)[0];
            A.call(a || z)
        },
        exitFullscreen: function () {
            B.call(n)
        },
        toggleFullscreen: function () {
            n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement || n.msFullscreenElement ? this.exitFullscreen() : this.enterFullscreen()
        },
        positionBookShadow: function () {
            var a = this.pages.length,
                c = !(!this.opts.bookShadow || this.zoomed || !a || 3 > a && this.holdedPage);
            this.bookShadow.toggle(c);
            if (c) {
                var c = this.pageWidth,
                    b = this.holdedPageBack,
                    d = !!b && b.onRight && b.pageIndex == (this.rtl ? a - 1 : 0);
                liftingLastPageOnRight = !!b && b.onLeft && b.pageIndex == (this.rtl ? 0 : a - 1);
                noPageOnLeft = !this.leftPage() || d;
                noPageOnRight = !this.rightPage() || liftingLastPageOnRight;
                onePageVisible = noPageOnLeft != noPageOnRight;
                noPageOnLeft && noPageOnRight ? this.bookShadow.hide() : (a = this.opts.zoomUsingTransform ? this.currentScale: 1, this.bookShadow.css({
                    left: (noPageOnLeft ? c: 0) + this.pagesContainer.position().left / a,
                    width: onePageVisible ? c: 2 * c
                }))
            }
        },
        playFlipSound: function () {
            if (this.flipSound) {
                var a = this.opts.onPlayFlipSound;
                d.isFunction(a) && !1 === a(this) || (this.audio || (this.audio = this.createAudioPlayer()), this.audio && this.audio.play && this.audio.play())
            }
        },
        toggleFlipSound: function (a) {
            arguments.length || (a = !this.flipSound);
            this.flipSound = a;
            this.toggleControl("flipSound", !a)
        },
        createAudioPlayer: function (a, c) {
            a || (a = this.opts.flipSoundPath);
            c || (c = this.opts.flipSoundFile);
            for (var b = [], e = 0, f = c.length; e < f; e++) b.push('<source src="' + a + c[e] + '">');
            return d("<audio preload>" + b.join("") + "</audio>")[0]
        },
        _untouch: function (a) {
            return a.originalEvent.touches && a.originalEvent.touches[0] || a
        },
        touchSupport: function () {
            var a = this;
            a.elem.bind("touchstart.wowbook", function (c) {
                var b = c.originalEvent.touches;
                1 < b.length || (a._touchStarted = {
                    x: b[0].pageX,
                    y: b[0].pageY,
                    timestamp: c.originalEvent.timeStamp,
                    inHandle: d(c.target).hasClass("wowbook-handle")
                },
                a._touchStarted.inHandle && a.pageEdgeDragStart(a._untouch(c)))
            });
            d(document).on("touchmove.wowbook", function (c) {
                if (a._touchStarted) {
                    var b = c.originalEvent.touches;
                    a._touchEnded = {
                        x: b[0].pageX,
                        y: b[0].pageY,
                        timestamp: c.originalEvent.timeStamp
                    };
                    if (a._touchStarted.inHandle) return a.pageEdgeDrag(a._untouch(c));
                    20 < Math.abs(a._touchEnded.x - a._touchStarted.x) && c.preventDefault();
                    c.preventDefault()
                }
            });
            d(document).on("touchend.wowbook touchcancel.wowbook", function (c) {
                if (a._touchStarted) { ! a._touchEnded && d(c.target).hasClass("wowbook-handle") && (c = d(c.target).data("corner"), "r" === c && a.advance(), "l" === c && a.back());
                    var b = a._touchStarted,
                        e = a._touchEnded || a._touchStarted;
                    a._touchStarted = null;
                    a._touchEnded = null;
                    if (b.inHandle) return a.pageEdgeDragStop({
                        pageX: e.x
                    }),
                        !1;
                    c = e.x - b.x;
                    var f = e.y - b.y,
                        b = e.timestamp - b.timestamp;
                    if (! (20 > Math.abs(c) || 200 < b) && Math.abs(c) > Math.abs(f)) return 0 > c ? a.advance() : a.back(),
                        !1
                }
            })
        },
        pageEdgeDragStart: function (a) {
            if (this.animating && !this.curledPage || this.zoomed || !d(a.target).hasClass("wowbook-handle")) return ! 1;
            var c = this,
                b = c.elem.offset();
            c.elem.addClass("wowbook-unselectable");
            c.mouseDownAtLeft = (a.pageX - b.left) / this.currentScale < c.pageWidth;
            c.pageGrabbed = c.mouseDownAtLeft ? c.leftPage() : c.rightPage();
            if (!c.pageGrabbed) return ! 1;
            this.uncurl(!0);
            c.pageGrabbedOffset = c.pageGrabbed.offset();
            this.opts.zoomUsingTransform && (c.pageGrabbedOffset.left /= this.currentScale, c.pageGrabbedOffset.top /= this.currentScale);
            b = a.pageX / this.currentScale - this.pageGrabbedOffset.left;
            a = a.pageY / this.currentScale - this.pageGrabbedOffset.top;
            this.stopAnimation(!1);
            var e = c.mouseDownAtLeft ? "l": "r";
            this.holdPage(this.pageGrabbed, b, a);
            this.flip(b, a, this.pageGrabbed, {
                corner: e
            });
            d(document).bind("mousemove.wowbook", function (a) {
                return c.pageEdgeDrag(a)
            }).bind("mouseup.wowbook", function (a) {
                return c.pageEdgeDragStop(a)
            });
            return ! 1
        },
        pageEdgeDrag: function (a) {
            var c = a.pageX / this.currentScale - this.pageGrabbedOffset.left;
            a = a.pageY / this.currentScale - this.pageGrabbedOffset.top;
            var b = this.mouseDownAtLeft ? "l": "r";
            this.stopAnimation(!1);
            this.flip(c, a, this.pageGrabbed, {
                corner: b,
                dragging: !0
            });
            return ! 1
        },
        pageEdgeDragStop: function (a) {
            var c = this.elem.offset();
            a = (a.pageX - c.left) / this.currentScale < this.pageWidth;
            this.elem.removeClass("wowbook-unselectable");
            this._cantStopAnimation || this.stopAnimation(!1);
            this.mouseDownAtLeft && !a ? this.rtl ? this.advance() : this.back() : !this.mouseDownAtLeft && a ? this.rtl ? this.back() : this.advance() : this.releasePage(this.pageGrabbed, !0);
            d(document).unbind("mousemove.wowbook mouseup.wowbook")
        },
        curl: function (a, c) {
            if (!this.curledPage && !this.holdedPage) {
                void 0 == a && (a = this.currentPage);
                if ("number" == typeof a || "string" == typeof a) a = this.pages[ + a];
                if (a && !a.isCurled) {
                    a.isCurled = !0;
                    this.curledPage = a;
                    var b = this.pageIsOnTheLeft(a.pageIndex),
                        d = b ? 0 : this.pageWidth,
                        f = c ? this.pageHeight - 1 : 2;
                    this.flip({
                        from: [d, f],
                        to: [d + this.opts.curlSize * (b ? 1 : -1), f + this.opts.curlSize * (c ? -1 : 1)],
                        corner: (c ? "b": "t") + (b ? "l": "r"),
                        page: a,
                        duration: 400
                    })
                }
            }
        },
        uncurl: function (a, c) {
            if (this.curledPage) { ! 0 == a && (c = !0, a = void 0);
                void 0 == a && (a = this.curledPage || this.currentPage);
                if ("number" == typeof a || "string" == typeof a) a = this.pages[ + a];
                a.isCurled && (this.stopAnimation(!1), this.releasePage(a, !c, void 0, 400), a.isCurled = !1, this.curledPage = null)
            }
        },
        initThumbnails: function () {
            var a = this.opts;
            this.thumbnails = [];
            var c = this.thumbnailsContainer = d("<div class='wowbook-thumbnails'>").append("<div class='wowbook-wrapper'><div class='wowbook-back wowbook-button' /><div class='wowbook-clipper'><ul></ul></div><div class='wowbook-next wowbook-button' /></div>").css("display", "none").css("transform", "translateZ(0)").appendTo(d(a.thumbnailsParent));
            this.thumbnailsList = c.find("ul");
            this.thumbnailsClipper = c.find(".wowbook-clipper");
            a.thumbnailsContainerWidth && c.width(a.thumbnailsContainerWidth);
            a.thumbnailsContainerHeight && c.height(a.thumbnailsContainerHeight);
            var b = a.thumbnailsPosition;
            if ("left" == b || "right" == b) a.thumbnailsVertical = !0,
            "right" == b && c.css({
                position: "absolute",
                left: "auto",
                right: "0px"
            });
            if ("top" == b || "bottom" == b) a.thumbnailsVertical = !1,
            "bottom" == b && c.css({
                position: "absolute",
                top: "auto",
                bottom: "0px"
            });
            c.addClass(a.thumbnailsVertical ? "wowbook-vertical": "wowbook-horizontal");
            var e = this,
                f = a.thumbnailsVertical ? "height": "width";
            this.thumbnailsBackButton = c.find(".wowbook-back.wowbook-button").click(function () {
                e._moveThumbnailsList(e.thumbnailsClipper[f]())
            });
            this.thumbnailsNextButton = c.find(".wowbook-next.wowbook-button").click(function () {
                e._moveThumbnailsList( - e.thumbnailsClipper[f]())
            });
            this.thumbnailsClipper.css("transform", "translateZ(0)")
        },
        destroyThumbnails: function () {
            this.thumbnailsContainer && this.thumbnailsContainer.remove();
            this.thumbnails = this.thumbnailsContainer = null
        },
        createThumbnails: function () {
            this.thumbnails || this.initThumbnails();
            var a, c = this.thumbnailConfig();
            this.thumbnails = [];
            for (var b = 0, d = this.pages.length; b < d; b++) a = this.createThumbnail(b, c),
                this.thumbnailsList.append(a),
                this.thumbnails.push(a);
            if (this.rtl) for (a = this.thumbnailsList.children(), a.eq(0).addClass("wowbook-right").removeClass("wowbook-left"), b = 1, d = a.length; b < d; b += 2) a.eq(b).insertAfter(a.eq(b + 1));
            b = this.thumbnailsContainer;
            b.width() || b.width(2 * c.width)
        },
        thumbnailConfig: function () {
            var a = {},
                c = d('<div class="wowbook-thumbnail" style="display:none;position:absolute;line-height:0px;font-size:0px;">').prependTo(this.thumbnailsContainer),
                b = this.opts.thumbnailHeight || (2 >= c.height() ? 0 : c.height()),
                e = this.opts.thumbnailWidth || c.width(),
                f = e / this.pageWidth || b / this.pageHeight || this.opts.thumbnailScale;
            c.remove();
            a.width = e || this.pageWidth * f;
            a.height = b || this.pageHeight * f;
            a.cloneCSS = {
                display: "block",
                left: 0,
                top: 0,
                position: "relative",
                transformOrigin: "0 0"
            };
            d.wowBook.support.transform ? a.cloneCSS.transform = "scale(" + f + ")": a.cloneCSS.zoom = f;
            return a
        },
        createThumbnail: function (a, c) {
            var b = this.pages[a];
            if (b) {
                c || (c = this.thumbnailConfig());
                var e = d('<li class="wowbook-thumbnail"><div class="wowbook-overlay">').addClass(this.pageIsOnTheLeft(a) ? "wowbook-left": "wowbook-right").css({
                    width: c.width,
                    height: c.height
                });
                this.opts.thumbnailsSprite ? e.css("background", "url(" + this.opts.thumbnailsSprite + ") no-repeat 0px -" + a * c.height + "px") : (b = b.clone(), b.hasClass("wowbook-page-holded") && (this.resetPage(b), b.find(".wowbook-fold-gradient-container").remove()), b.css(c.cloneCSS), e.prepend(b));
                var f = this;
                e.click(function () {
                    f.gotoPage(a)
                });
                return e
            }
        },
        updateThumbnail: function (a, c) {
            if (this.thumbnails) {
                var b = this.thumbnails[a];
                if (b) {
                    var d = this.createThumbnail(a, c);
                    d && (this.opts.thumbnailsSprite || b.children(":not(.wowbook-overlay)").replaceWith(d.children(":not(.wowbook-overlay)")), b.width(d.width()), b.height(d.height()))
                }
            }
        },
        updateThumbnails: function () {
            if (this.thumbnails) {
                for (var a = this.thumbnailConfig(), c = 0, b = this.pages.length; c < b; c++) this.updateThumbnail(c, a);
                c = this.thumbnailsContainer;
                c.width() || c.width(2 * a.width)
            } else this.createThumbnails()
        },
        _moveThumbnailsList: function (a, c) {
            var b = this.thumbnailsList.position()[this.opts.thumbnailsVertical ? "top": "left"];
            this._setThumbnailsListPosition(b + a, c)
        },
        _setThumbnailsListPosition: function (a, c) {
            var b = this.opts.thumbnailsVertical,
                d = b ? "height": "width",
                f = {},
                g = this.thumbnailsClipper[d](),
                d = -this.thumbnailsList[d]() + g;
            a < d && (a = d);
            0 < a && (a = 0);
            this.thumbnailsBackButton.toggleClass("wowbook-disabled", 0 == a || 0 < d);
            this.thumbnailsNextButton.toggleClass("wowbook-disabled", a == d || 0 < d);
            f[b ? "top": "left"] = a;
            this.thumbnailsList.animate(f, void 0 != c ? c: this.opts.thumbnailsAnimOptions)
        },
        showThumbnail: function (a, c) {
            if (this.thumbnails && this.thumbnailsContainer.is(":visible")) {
                void 0 == a && (a = this.currentPage);
                0 < a && this.pageIsOnTheRight(a) && a--;
                var b = this.opts.thumbnailsVertical,
                    d = b ? "top": "left",
                    f = b ? "height": "width",
                    g = this.thumbnails[a],
                    h = this.thumbnailsClipper,
                    b = h[f]() / 2 - g[f]() / (b ? 2 : 1),
                    d = g.offset()[d] - h.offset()[d];
                this._moveThumbnailsList(b - d, c)
            }
        },
        showThumbnails: function (a) {
            this.thumbnails && this.thumbnails.length || this.createThumbnails();
            this.thumbnailsContainer.fadeIn(void 0 != a ? a: this.opts.thumbnailsAnimOptions);
            this.showThumbnail(void 0, 0)
        },
        hideThumbnails: function (a) {
            this.thumbnailsContainer.fadeOut(void 0 != a ? a: this.opts.thumbnailsAnimOptions)
        },
        toggleThumbnails: function (a) {
            d(this.thumbnailsContainer).is(":visible") ? this.hideThumbnails(a) : this.showThumbnails(a)
        },
        controllify: function (a) {
            var c = this;
            d(a.zoomIn).on("click.wowbook", function () {
                c.zoomIn();
                return ! 1
            });
            d(a.zoomOut).on("click.wowbook", function () {
                c.zoomOut();
                return ! 1
            });
            d(a.next).on("click.wowbook", function () {
                c.advance();
                return ! 1
            });
            d(a.back).on("click.wowbook", function () {
                c.back();
                return ! 1
            });
            d(a.first).on("click.wowbook", function () {
                c.gotoPage(0);
                return ! 1
            });
            d(a.last).on("click.wowbook", function () {
                c.gotoPage(c.pages.length - 1);
                return ! 1
            });
            d(a.slideShow).on("click.wowbook", function () {
                c.toggleSlideShow();
                return ! 1
            });
            d(a.flipSound).on("click.wowbook", function () {
                c.toggleFlipSound();
                return ! 1
            });
            d(a.thumbnails).on("click.wowbook", function () {
                c.toggleThumbnails();
                return ! 1
            });
            d(a.fullscreen).on("click.wowbook", function () {
                c.toggleFullscreen();
                return ! 1
            })
        },
        toggleControl: function (a, c) { (a = this.opts.controls[a]) && d(a).toggleClass("wowbook-disabled", c)
        }
    };
    d.wowBook.defaults = {
        width: 500,
        height: 300,
        startPage: 0,
        hardcovers: !1,
        hardPages: !1,
        centeredWhenClosed: !1,
        transparentPages: !1,
        doublePages: ".double",
        responsive: !1,
        scaleToFit: "",
        onResize: null,
        fullscreenElement: document.documentElement,
        onFullscreenError: null,
        use3d: !0,
        perspective: 2E3,
        useTranslate3d: "mobile",
        bookShadow: !0,
        gutterShadow: !0,
        shadowThreshold: 20,
        shadows: !0,
        foldGradient: !0,
        foldGradientThreshold: 20,
        pageNumbers: !0,
        firstPageNumber: 1,
        numberedPages: !1,
        deepLinking: !0,
        updateBrowserURL: !0,
        curl: !0,
        curlSize: 40,
        slideShow: !1,
        slideShowDelay: 1E3,
        pauseOnHover: !0,
        touchEnabled: !0,
        mouseWheel: !1,
        handleWidth: !1,
        handleClickDuration: 300,
        turnPageDuration: 1E3,
        turnPageDurationMin: 300,
        forceBasicPage: !1,
        sections: ".wowbook-section",
        zoomLevel: 1,
        zoomMax: 2,
        zoomMin: 1,
        zoomBoundingBox: window,
        zoomStep: 0.05,
        onZoom: null,
        flipSound: !0,
        flipSoundFile: ["page-flip.mp3", "page-flip.ogg"],
        flipSoundPath: "./sound/",
        onPlayFlipSound: null,
        keyboardNavigation: {
            back: 37,
            advance: 39
        },
        clipBoundaries: !0,
        controls: {},
        onShowPage: null,
        onHoldPage: null,
        onReleasePage: null,
        thumbnails: !1,
        thumbnailsParent: "body",
        thumbnailScale: 0.2,
        thumbnailWidth: null,
        thumbnailHeight: null,
        thumbnailsPosition: null,
        thumbnailsVertical: !0,
        thumbnailsContainerWidth: null,
        thumbnailsContainerHeight: null,
        thumbnailsSprite: null,
        thumbnailsAnimOptions: {}
    };
    window.raf = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
        function (a) {
            window.setTimeout(a, 1E3 / 60)
        }
    } ();
    d.browser.ie8mode = d.browser.msie && 8 == document.documentMode;
    var g = d.browser.msie && 9 > d.browser.version ? 1 : 0,
        s = {
            thin: 2 - g,
            medium: 4 - g,
            thick: 6 - g
        },
        n = window.document,
        z = n.documentElement,
        A = z.requestFullscreen || z.mozRequestFullScreen || z.webkitRequestFullscreen || z.msRequestFullscreen,
        B = n.exitFullscreen || n.mozCancelFullScreen || n.webkitExitFullscreen || n.msExitFullscreen;
    d.wowBook.utils = {
        translate: function (a, c, b) {
            return d.wowBook.useTranslate3d ? "translate3d(" + a + "px, " + c + "px, " + (b || 0) + "px) ": "translate(" + a + "px, " + c + "px) "
        },
        isMobile: function () {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        }
    }
})(jQuery);
(function (d) {
    function l(p) {
        var g = p || window.event,
            l = [].slice.call(arguments, 1),
            n = 0,
            u = 0,
            w = 0;
        p = d.event.fix(g);
        p.type = "mousewheel";
        g.wheelDelta && (n = g.wheelDelta / 120);
        g.detail && (n = -g.detail / 3);
        w = n;
        void 0 !== g.axis && g.axis === g.HORIZONTAL_AXIS && (w = 0, u = -1 * n);
        void 0 !== g.wheelDeltaY && (w = g.wheelDeltaY / 120);
        void 0 !== g.wheelDeltaX && (u = -1 * g.wheelDeltaX / 120);
        l.unshift(p, n, u, w);
        return (d.event.dispatch || d.event.handle).apply(this, l)
    }
    var u = ["DOMMouseScroll", "mousewheel"];
    if (d.event.fixHooks) for (var w = u.length; w;) d.event.fixHooks[u[--w]] = d.event.mouseHooks;
    d.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener) for (var d = u.length; d;) this.addEventListener(u[--d], l, !1);
            else this.onmousewheel = l
        },
        teardown: function () {
            if (this.removeEventListener) for (var d = u.length; d;) this.removeEventListener(u[--d], l, !1);
            else this.onmousewheel = null
        }
    };
    d.fn.extend({
        mousewheel: function (d) {
            return d ? this.bind("mousewheel", d) : this.trigger("mousewheel")
        },
        unmousewheel: function (d) {
            return this.unbind("mousewheel", d)
        }
    })
})(jQuery);
(function (d) {
    function l(l) {
        if (l in u.style) return d.wowBook.support[l] = l;
        for (var g = w.length, s, n = l.charAt(0).toUpperCase() + l.substr(1); g--;) if (s = w[g] + n, s in u.style) return d.wowBook.support[l] = s
    }
    if (d.cssHooks) {
        var u = document.createElement("div"),
            w = ["O", "ms", "Webkit", "Moz"];
        l("transform");
        l("transformOrigin");
        l("boxSizing");
        l("zoom");
        d.wowBook.support.boxSizing && 8 > document.documentMode && (d.wowBook.support.boxSizing = !1);
        u = null;
        d.each(["transform", "transformOrigin"], function (l, g) {
            d.wowBook.support[g] && d.wowBook.support[g] !== g && !d.cssHooks[g] && (d.cssHooks[g] = {
                get: function (l, n, p) {
                    return d.css(l, d.wowBook.support[g])
                },
                set: function (l, n) {
                    l.style[d.wowBook.support[g]] = n
                }
            })
        });
        d.wowBook.applyAlphaImageLoader = function (l) {
            var g, s, n, u, w = "",
                B = d("<div style='display:none'></div>").appendTo("body");
            s = 0;
            for (n = l.length; s < n; s++) if (u = l[s], B.addClass(u), g = B.css("background-image").match(/^url\("(.*)"\)$/)) w += "." + u + "{background:none; filter : progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + g[1] + "', sizingMethod='scale'); } ",
                B.removeClass(u);
            d("body").append("<style>" + w + "</style>")
        }
    } else alert("jQuery 1.4.3+ is needed for this plugin to work")
})(jQuery);