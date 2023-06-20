// ==================================================
// fancyBox v3.3.5
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2018 fancyApps
//
// ==================================================
! function(t, e, n, o) {
    "use strict";

    function i(t, e) {
        var o, i, a = [],
            s = 0;
        t && t.isDefaultPrevented() || (t.preventDefault(), e = t && t.data ? t.data.options : e || {}, o = e.$target || n(t.currentTarget), i = o.attr("data-fancybox") || "", i ? (a = e.selector ? n(e.selector) : t.data ? t.data.items : [], a = a.length ? a.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]'), s = a.index(o), s < 0 && (s = 0)) : a = [o], n.fancybox.open(a, e, s))
    }
    if (t.console = t.console || {
            info: function(t) {}
        }, n) {
        if (n.fn.fancybox) return void console.info("fancyBox already initialized");
        var a = {
                loop: !1,
                gutter: 50,
                keyboard: !0,
                arrows: !0,
                infobar: !0,
                smallBtn: "auto",
                toolbar: "auto",
                buttons: ["zoom", "thumbs", "close"],
                idleTime: 3,
                protect: !1,
                modal: !1,
                image: {
                    preload: !1
                },
                ajax: {
                    settings: {
                        data: {
                            fancybox: !0
                        }
                    }
                },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: {
                        scrolling: "auto"
                    }
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                btnTpl: {
                    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M13,16 L20,23 L27,16 M20,7 L20,23 M10,24 L10,28 L30,28 L30,24" /></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M18,17 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 M24,22 L31,29" /></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
                    smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"><svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"></path></svg></button>',
                    arrowLeft: '<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M18,12 L10,20 L18,28 M10,20 L30,20"></path></svg></a>',
                    arrowRight: '<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 M22,12 L30,20 L22,28"></path></svg></a>'
                },
                parentEl: "body",
                hideScrollbar: !0,
                autoFocus: !1,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {
                    autoStart: !1
                },
                touch: {
                    vertical: !0,
                    momentum: !0
                },
                hash: null,
                media: {},
                slideShow: {
                    autoStart: !1,
                    speed: 4e3
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                },
                wheel: "auto",
                onInit: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop,
                onActivate: n.noop,
                onDeactivate: n.noop,
                clickContent: function(t, e) {
                    return "image" === t.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    idleTime: !1,
                    clickContent: function(t, e) {
                        return "image" === t.type && "toggleControls"
                    },
                    clickSlide: function(t, e) {
                        return "image" === t.type ? "toggleControls" : "close"
                    },
                    dblclickContent: function(t, e) {
                        return "image" === t.type && "zoom"
                    },
                    dblclickSlide: function(t, e) {
                        return "image" === t.type && "zoom"
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom"
                    },
                    de: {
                        CLOSE: "Schliessen",
                        NEXT: "Weiter",
                        PREV: "ZurÃ¼ck",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es spÃ¤ter nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "MaÃŸstab"
                    }
                }
            },
            s = n(t),
            r = n(e),
            c = 0,
            l = function(t) {
                return t && t.hasOwnProperty && t instanceof n
            },
            d = function() {
                return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                    return t.setTimeout(e, 1e3 / 60)
                }
            }(),
            u = function() {
                var t, n = e.createElement("fakeelement"),
                    i = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (t in i)
                    if (n.style[t] !== o) return i[t];
                return "transitionend"
            }(),
            f = function(t) {
                return t && t.length && t[0].offsetHeight
            },
            p = function(t, e) {
                var o = n.extend(!0, {}, t, e);
                return n.each(e, function(t, e) {
                    n.isArray(e) && (o[t] = e)
                }), o
            },
            h = function(t, o, i) {
                var a = this;
                a.opts = p({
                    index: i
                }, n.fancybox.defaults), n.isPlainObject(o) && (a.opts = p(a.opts, o)), n.fancybox.isMobile && (a.opts = p(a.opts, a.opts.mobile)), a.id = a.opts.id || ++c, a.currIndex = parseInt(a.opts.index, 10) || 0, a.prevIndex = null, a.prevPos = null, a.currPos = 0, a.firstRun = !0, a.group = [], a.slides = {}, a.addContent(t), a.group.length && (a.$lastFocus = n(e.activeElement).trigger("blur"), a.init())
            };
        n.extend(h.prototype, {
            init: function() {
                var i, a, s, r = this,
                    c = r.group[r.currIndex],
                    l = c.opts,
                    d = n.fancybox.scrollbarWidth;
                n("body").addClass("fancybox-active"), !n.fancybox.getInstance() && l.hideScrollbar !== !1 && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (d === o && (i = n('<div style="width:100px;height:100px;overflow:scroll;" />').appendTo("body"), d = n.fancybox.scrollbarWidth = i[0].offsetWidth - i[0].clientWidth, i.remove()), n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + d + "px; }</style>"), n("body").addClass("compensate-for-scrollbar")), s = "", n.each(l.buttons, function(t, e) {
                    s += l.btnTpl[e] || ""
                }), a = n(r.translate(r, l.baseTpl.replace("{{buttons}}", s).replace("{{arrows}}", l.btnTpl.arrowLeft + l.btnTpl.arrowRight))).attr("id", "fancybox-container-" + r.id).addClass("fancybox-is-hidden").addClass(l.baseClass).data("FancyBox", r).appendTo(l.parentEl), r.$refs = {
                    container: a
                }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(t) {
                    r.$refs[t] = a.find(".fancybox-" + t)
                }), r.trigger("onInit"), r.activate(), r.jumpTo(r.currIndex)
            },
            translate: function(t, e) {
                var n = t.opts.i18n[t.opts.lang];
                return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                    var i = n[e];
                    return i === o ? t : i
                })
            },
            addContent: function(t) {
                var e, i = this,
                    a = n.makeArray(t);
                n.each(a, function(t, e) {
                    var a, s, r, c, l, d = {},
                        u = {};
                    n.isPlainObject(e) ? (d = e, u = e.opts || e) : "object" === n.type(e) && n(e).length ? (a = n(e), u = a.data() || {}, u = n.extend(!0, {}, u, u.options), u.$orig = a, d.src = i.opts.src || u.src || a.attr("href"), d.type || d.src || (d.type = "inline", d.src = e)) : d = {
                        type: "html",
                        src: e + ""
                    }, d.opts = n.extend(!0, {}, i.opts, u), n.isArray(u.buttons) && (d.opts.buttons = u.buttons), s = d.type || d.opts.type, c = d.src || "", !s && c && ((r = c.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i)) ? (s = "video", d.opts.videoFormat || (d.opts.videoFormat = "video/" + ("ogv" === r[1] ? "ogg" : r[1]))) : c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : c.match(/\.(pdf)((\?|#).*)?$/i) ? s = "iframe" : "#" === c.charAt(0) && (s = "inline")), s ? d.type = s : i.trigger("objectNeedsType", d), d.contentType || (d.contentType = n.inArray(d.type, ["html", "inline", "ajax"]) > -1 ? "html" : d.type), d.index = i.group.length, "auto" == d.opts.smallBtn && (d.opts.smallBtn = n.inArray(d.type, ["html", "inline", "ajax"]) > -1), "auto" === d.opts.toolbar && (d.opts.toolbar = !d.opts.smallBtn), d.opts.$trigger && d.index === i.opts.index && (d.opts.$thumb = d.opts.$trigger.find("img:first")), d.opts.$thumb && d.opts.$thumb.length || !d.opts.$orig || (d.opts.$thumb = d.opts.$orig.find("img:first")), "function" === n.type(d.opts.caption) && (d.opts.caption = d.opts.caption.apply(e, [i, d])), "function" === n.type(i.opts.caption) && (d.opts.caption = i.opts.caption.apply(e, [i, d])), d.opts.caption instanceof n || (d.opts.caption = d.opts.caption === o ? "" : d.opts.caption + ""), "ajax" === d.type && (l = c.split(/\s+/, 2), l.length > 1 && (d.src = l.shift(), d.opts.filter = l.shift())), d.opts.modal && (d.opts = n.extend(!0, d.opts, {
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    })), i.group.push(d)
                }), Object.keys(i.slides).length && (i.updateControls(), e = i.Thumbs, e && e.isActive && (e.create(), e.focus()))
            },
            addEvents: function() {
                var o = this;
                o.removeEvents(), o.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                    t.stopPropagation(), t.preventDefault(), o.close(t)
                }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(t) {
                    t.stopPropagation(), t.preventDefault(), o.previous()
                }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(t) {
                    t.stopPropagation(), t.preventDefault(), o.next()
                }).on("click.fb", "[data-fancybox-zoom]", function(t) {
                    o[o.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                }), s.on("orientationchange.fb resize.fb", function(t) {
                    t && t.originalEvent && "resize" === t.originalEvent.type ? d(function() {
                        o.update()
                    }) : (o.$refs.stage.hide(), setTimeout(function() {
                        o.$refs.stage.show(), o.update()
                    }, n.fancybox.isMobile ? 600 : 250))
                }), r.on("focusin.fb", function(t) {
                    var o = n.fancybox ? n.fancybox.getInstance() : null;
                    o.isClosing || !o.current || !o.current.opts.trapFocus || n(t.target).hasClass("fancybox-container") || n(t.target).is(e) || o && "fixed" !== n(t.target).css("position") && !o.$refs.container.has(t.target).length && (t.stopPropagation(), o.focus())
                }), r.on("keydown.fb", function(t) {
                    var e = o.current,
                        i = t.keyCode || t.which;
                    if (e && e.opts.keyboard && !(t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input") || n(t.target).is("textarea"))) return 8 === i || 27 === i ? (t.preventDefault(), void o.close(t)) : 37 === i || 38 === i ? (t.preventDefault(), void o.previous()) : 39 === i || 40 === i ? (t.preventDefault(), void o.next()) : void o.trigger("afterKeydown", t, i)
                }), o.group[o.currIndex].opts.idleTime && (o.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(t) {
                    o.idleSecondsCounter = 0, o.isIdle && o.showControls(), o.isIdle = !1
                }), o.idleInterval = t.setInterval(function() {
                    o.idleSecondsCounter++, o.idleSecondsCounter >= o.group[o.currIndex].opts.idleTime && !o.isDragging && (o.isIdle = !0, o.idleSecondsCounter = 0, o.hideControls())
                }, 1e3))
            },
            removeEvents: function() {
                var e = this;
                s.off("orientationchange.fb resize.fb"), r.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
            },
            previous: function(t) {
                return this.jumpTo(this.currPos - 1, t)
            },
            next: function(t) {
                return this.jumpTo(this.currPos + 1, t)
            },
            jumpTo: function(t, e) {
                var i, a, s, r, c, l, d, u = this,
                    p = u.group.length;
                if (!(u.isDragging || u.isClosing || u.isAnimating && u.firstRun)) {
                    if (t = parseInt(t, 10), a = u.current ? u.current.opts.loop : u.opts.loop, !a && (t < 0 || t >= p)) return !1;
                    if (i = u.firstRun = !Object.keys(u.slides).length, !(p < 2 && !i && u.isDragging)) {
                        if (r = u.current, u.prevIndex = u.currIndex, u.prevPos = u.currPos, s = u.createSlide(t), p > 1 && ((a || s.index > 0) && u.createSlide(t - 1), (a || s.index < p - 1) && u.createSlide(t + 1)), u.current = s, u.currIndex = s.index, u.currPos = s.pos, u.trigger("beforeShow", i), u.updateControls(), l = n.fancybox.getTranslate(s.$slide), s.isMoved = (0 !== l.left || 0 !== l.top) && !s.$slide.hasClass("fancybox-animated"), s.forcedDuration = o, n.isNumeric(e) ? s.forcedDuration = e : e = s.opts[i ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), i) return s.opts.animationEffect && e && u.$refs.container.css("transition-duration", e + "ms"), u.$refs.container.removeClass("fancybox-is-hidden"), f(u.$refs.container), u.$refs.container.addClass("fancybox-is-open"), f(u.$refs.container), s.$slide.addClass("fancybox-slide--previous"), u.loadSlide(s), s.$slide.removeClass("fancybox-slide--previous").addClass("fancybox-slide--current"), void u.preload("image");
                        n.each(u.slides, function(t, e) {
                            n.fancybox.stop(e.$slide)
                        }), s.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), s.isMoved ? (c = Math.round(s.$slide.width()), n.each(u.slides, function(t, o) {
                            var i = o.pos - s.pos;
                            n.fancybox.animate(o.$slide, {
                                top: 0,
                                left: i * c + i * o.opts.gutter
                            }, e, function() {
                                o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === u.currPos && (s.isMoved = !1, u.complete())
                            })
                        })) : u.$refs.stage.children().removeAttr("style"), s.isLoaded ? u.revealContent(s) : u.loadSlide(s), u.preload("image"), r.pos !== s.pos && (d = "fancybox-slide--" + (r.pos > s.pos ? "next" : "previous"), r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), r.isComplete = !1, e && (s.isMoved || s.opts.transitionEffect) && (s.isMoved ? r.$slide.addClass(d) : (d = "fancybox-animated " + d + " fancybox-fx-" + s.opts.transitionEffect, n.fancybox.animate(r.$slide, d, e, function() {
                            r.$slide.removeClass(d).removeAttr("style")
                        }))))
                    }
                }
            },
            createSlide: function(t) {
                var e, o, i = this;
                return o = t % i.group.length, o = o < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[t] = n.extend(!0, {}, i.group[o], {
                    pos: t,
                    $slide: e,
                    isLoaded: !1
                }), i.updateSlide(i.slides[t])), i.slides[t]
            },
            scaleToActual: function(t, e, i) {
                var a, s, r, c, l, d = this,
                    u = d.current,
                    f = u.$content,
                    p = n.fancybox.getTranslate(u.$slide).width,
                    h = n.fancybox.getTranslate(u.$slide).height,
                    g = u.width,
                    b = u.height;
                !d.isAnimating && f && "image" == u.type && u.isLoaded && !u.hasError && (n.fancybox.stop(f), d.isAnimating = !0, t = t === o ? .5 * p : t, e = e === o ? .5 * h : e, a = n.fancybox.getTranslate(f), a.top -= n.fancybox.getTranslate(u.$slide).top, a.left -= n.fancybox.getTranslate(u.$slide).left, c = g / a.width, l = b / a.height, s = .5 * p - .5 * g, r = .5 * h - .5 * b, g > p && (s = a.left * c - (t * c - t), s > 0 && (s = 0), s < p - g && (s = p - g)), b > h && (r = a.top * l - (e * l - e), r > 0 && (r = 0), r < h - b && (r = h - b)), d.updateCursor(g, b), n.fancybox.animate(f, {
                    top: r,
                    left: s,
                    scaleX: c,
                    scaleY: l
                }, i || 330, function() {
                    d.isAnimating = !1
                }), d.SlideShow && d.SlideShow.isActive && d.SlideShow.stop())
            },
            scaleToFit: function(t) {
                var e, o = this,
                    i = o.current,
                    a = i.$content;
                !o.isAnimating && a && "image" == i.type && i.isLoaded && !i.hasError && (n.fancybox.stop(a), o.isAnimating = !0, e = o.getFitPos(i), o.updateCursor(e.width, e.height), n.fancybox.animate(a, {
                    top: e.top,
                    left: e.left,
                    scaleX: e.width / a.width(),
                    scaleY: e.height / a.height()
                }, t || 330, function() {
                    o.isAnimating = !1
                }))
            },
            getFitPos: function(t) {
                var e, n, o, i, a, s = this,
                    r = t.$content,
                    c = t.width || t.opts.width,
                    l = t.height || t.opts.height,
                    d = {};
                return !!(t.isLoaded && r && r.length) && (i = {
                    top: parseInt(t.$slide.css("paddingTop"), 10),
                    right: parseInt(t.$slide.css("paddingRight"), 10),
                    bottom: parseInt(t.$slide.css("paddingBottom"), 10),
                    left: parseInt(t.$slide.css("paddingLeft"), 10)
                }, e = parseInt(s.$refs.stage.width(), 10) - (i.left + i.right), n = parseInt(s.$refs.stage.height(), 10) - (i.top + i.bottom), c && l || (c = e, l = n), o = Math.min(1, e / c, n / l), c = Math.floor(o * c), l = Math.floor(o * l), "image" === t.type ? (d.top = Math.floor(.5 * (n - l)) + i.top, d.left = Math.floor(.5 * (e - c)) + i.left) : "video" === t.contentType && (a = t.opts.width && t.opts.height ? c / l : t.opts.ratio || 16 / 9, l > c / a ? l = c / a : c > l * a && (c = l * a)), d.width = c, d.height = l, d)
            },
            update: function() {
                var t = this;
                n.each(t.slides, function(e, n) {
                    t.updateSlide(n)
                })
            },
            updateSlide: function(t, e) {
                var o = this,
                    i = t && t.$content,
                    a = t.width || t.opts.width,
                    s = t.height || t.opts.height;
                i && (a || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(i), n.fancybox.setTranslate(i, o.getFitPos(t)), t.pos === o.currPos && (o.isAnimating = !1, o.updateCursor())), t.$slide.trigger("refresh"), o.$refs.toolbar.toggleClass("compensate-for-scrollbar", t.$slide.get(0).scrollHeight > t.$slide.get(0).clientHeight), o.trigger("onUpdate", t)
            },
            centerSlide: function(t, e) {
                var i, a, s = this;
                s.current && (i = Math.round(t.$slide.width()), a = t.pos - s.current.pos, n.fancybox.animate(t.$slide, {
                    top: 0,
                    left: a * i + a * t.opts.gutter,
                    opacity: 1
                }, e === o ? 0 : e, null, !1))
            },
            updateCursor: function(t, e) {
                var o, i = this,
                    a = i.current,
                    s = i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                a && !i.isClosing && (o = i.isZoomable(), s.toggleClass("fancybox-is-zoomable", o), n("[data-fancybox-zoom]").prop("disabled", !o), o && ("zoom" === a.opts.clickContent || n.isFunction(a.opts.clickContent) && "zoom" === a.opts.clickContent(a)) ? i.isScaledDown(t, e) ? s.addClass("fancybox-can-zoomIn") : a.opts.touch ? s.addClass("fancybox-can-drag") : s.addClass("fancybox-can-zoomOut") : a.opts.touch && "video" !== a.contentType && s.addClass("fancybox-can-drag"))
            },
            isZoomable: function() {
                var t, e = this,
                    n = e.current;
                if (n && !e.isClosing && "image" === n.type && !n.hasError) {
                    if (!n.isLoaded) return !0;
                    if (t = e.getFitPos(n), n.width > t.width || n.height > t.height) return !0
                }
                return !1
            },
            isScaledDown: function(t, e) {
                var i = this,
                    a = !1,
                    s = i.current,
                    r = s.$content;
                return t !== o && e !== o ? a = t < s.width && e < s.height : r && (a = n.fancybox.getTranslate(r), a = a.width < s.width && a.height < s.height), a
            },
            canPan: function() {
                var t, e = this,
                    n = !1,
                    o = e.current;
                return "image" === o.type && (t = o.$content) && !o.hasError && (n = e.getFitPos(o), n = Math.abs(t.width() - n.width) > 1 || Math.abs(t.height() - n.height) > 1), n
            },
            loadSlide: function(t) {
                var e, o, i, a = this;
                if (!t.isLoading && !t.isLoaded) {
                    switch (t.isLoading = !0, a.trigger("beforeLoad", t), e = t.type, o = t.$slide, o.off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
                        case "image":
                            a.setImage(t);
                            break;
                        case "iframe":
                            a.setIframe(t);
                            break;
                        case "html":
                            a.setContent(t, t.src || t.content);
                            break;
                        case "video":
                            a.setContent(t, '<video class="fancybox-video" controls controlsList="nodownload"><source src="' + t.src + '" type="' + t.opts.videoFormat + "\">Your browser doesn't support HTML5 video</video");
                            break;
                        case "inline":
                            n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
                            break;
                        case "ajax":
                            a.showLoading(t), i = n.ajax(n.extend({}, t.opts.ajax.settings, {
                                url: t.src,
                                success: function(e, n) {
                                    "success" === n && a.setContent(t, e)
                                },
                                error: function(e, n) {
                                    e && "abort" !== n && a.setError(t)
                                }
                            })), o.one("onReset", function() {
                                i.abort()
                            });
                            break;
                        default:
                            a.setError(t)
                    }
                    return !0
                }
            },
            setImage: function(e) {
                var o, i, a, s, r, c = this,
                    l = e.opts.srcset || e.opts.image.srcset;
                if (e.timouts = setTimeout(function() {
                        var t = e.$image;
                        !e.isLoading || t && t[0].complete || e.hasError || c.showLoading(e)
                    }, 350), l) {
                    s = t.devicePixelRatio || 1, r = t.innerWidth * s, a = l.split(",").map(function(t) {
                        var e = {};
                        return t.trim().split(/\s+/).forEach(function(t, n) {
                            var o = parseInt(t.substring(0, t.length - 1), 10);
                            return 0 === n ? e.url = t : void(o && (e.value = o, e.postfix = t[t.length - 1]))
                        }), e
                    }), a.sort(function(t, e) {
                        return t.value - e.value
                    });
                    for (var d = 0; d < a.length; d++) {
                        var u = a[d];
                        if ("w" === u.postfix && u.value >= r || "x" === u.postfix && u.value >= s) {
                            i = u;
                            break
                        }
                    }!i && a.length && (i = a[a.length - 1]), i && (e.src = i.url, e.width && e.height && "w" == i.postfix && (e.height = e.width / e.height * i.value, e.width = i.value), e.opts.srcset = l)
                }
                e.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")), o = e.opts.thumb || !(!e.opts.$thumb || !e.opts.$thumb.length) && e.opts.$thumb.attr("src"), e.opts.preload !== !1 && e.opts.width && e.opts.height && o && (e.width = e.opts.width, e.height = e.opts.height, e.$ghost = n("<img />").one("error", function() {
                    n(this).remove(), e.$ghost = null
                }).one("load", function() {
                    c.afterLoad(e)
                }).addClass("fancybox-image").appendTo(e.$content).attr("src", o)), c.setBigImage(e)
            },
            setBigImage: function(t) {
                var e = this,
                    o = n("<img />");
                t.$image = o.one("error", function() {
                    e.setError(t)
                }).one("load", function() {
                    var n;
                    t.$ghost || (e.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), e.afterLoad(t)), t.timouts && (clearTimeout(t.timouts), t.timouts = null), e.isClosing || (t.opts.srcset && (n = t.opts.sizes, n && "auto" !== n || (n = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), o.attr("sizes", n).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function() {
                        t.$ghost && !e.isClosing && t.$ghost.hide()
                    }, Math.min(300, Math.max(1e3, t.height / 1600))), e.hideLoading(t))
                }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (o[0].complete || "complete" == o[0].readyState) && o[0].naturalWidth && o[0].naturalHeight ? o.trigger("load") : o[0].error && o.trigger("error")
            },
            resolveImageSlideSize: function(t, e, n) {
                var o = parseInt(t.opts.width, 10),
                    i = parseInt(t.opts.height, 10);
                t.width = e, t.height = n, o > 0 && (t.width = o, t.height = Math.floor(o * n / e)), i > 0 && (t.width = Math.floor(i * e / n), t.height = i)
            },
            setIframe: function(t) {
                var e, i = this,
                    a = t.opts.iframe,
                    s = t.$slide;
                t.$content = n('<div class="fancybox-content' + (a.preload ? " fancybox-is-hidden" : "") + '"></div>').css(a.css).appendTo(s), s.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(a.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(a.attr).appendTo(t.$content), a.preload ? (i.showLoading(t), e.on("load.fb error.fb", function(e) {
                    this.isReady = 1, t.$slide.trigger("refresh"), i.afterLoad(t)
                }), s.on("refresh.fb", function() {
                    var n, i, s = t.$content,
                        r = a.css.width,
                        c = a.css.height;
                    if (1 === e[0].isReady) {
                        try {
                            n = e.contents(), i = n.find("body")
                        } catch (t) {}
                        i && i.length && i.children().length && (s.css({
                            width: "",
                            height: ""
                        }), r === o && (r = Math.ceil(Math.max(i[0].clientWidth, i.outerWidth(!0)))), r && s.width(r), c === o && (c = Math.ceil(Math.max(i[0].clientHeight, i.outerHeight(!0)))), c && s.height(c)), s.removeClass("fancybox-is-hidden")
                    }
                })) : this.afterLoad(t), e.attr("src", t.src), s.one("onReset", function() {
                    try {
                        n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                    } catch (t) {}
                    n(this).off("refresh.fb").empty(), t.isLoaded = !1
                })
            },
            setContent: function(t, e) {
                var o = this;
                o.isClosing || (o.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), l(e) && e.parent().length ? (e.parent().parent(".fancybox-slide--inline").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents(), 3 === e[0].nodeType && (e = n("<div>").html(e))), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function() {
                    n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1)
                }), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio").first().addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), this.afterLoad(t))
            },
            setError: function(t) {
                t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
            },
            showLoading: function(t) {
                var e = this;
                t = t || e.current, t && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide))
            },
            hideLoading: function(t) {
                var e = this;
                t = t || e.current, t && t.$spinner && (t.$spinner.remove(), delete t.$spinner)
            },
            afterLoad: function(t) {
                var e = this;
                e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.pos === e.currPos && e.updateCursor(), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).prependTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                    return 2 == t.button && t.preventDefault(), !0
                }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.revealContent(t))
            },
            revealContent: function(t) {
                var e, i, a, s, r = this,
                    c = t.$slide,
                    l = !1,
                    d = !1;
                return e = t.opts[r.firstRun ? "animationEffect" : "transitionEffect"], a = t.opts[r.firstRun ? "animationDuration" : "transitionDuration"], a = parseInt(t.forcedDuration === o ? a : t.forcedDuration, 10), t.pos === r.currPos && (t.isComplete ? e = !1 : r.isAnimating = !0), !t.isMoved && t.pos === r.currPos && a || (e = !1), "zoom" === e && (t.pos === r.currPos && a && "image" === t.type && !t.hasError && (d = r.getThumbPos(t)) ? l = r.getFitPos(t) : e = "fade"), "zoom" === e ? (l.scaleX = l.width / d.width, l.scaleY = l.height / d.height, s = t.opts.zoomOpacity, "auto" == s && (s = Math.abs(t.width / t.height - d.width / d.height) > .1), s && (d.opacity = .1, l.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), d), f(t.$content), void n.fancybox.animate(t.$content, l, a, function() {
                    r.isAnimating = !1, r.complete()
                })) : (r.updateSlide(t), e ? (n.fancybox.stop(c), i = "fancybox-animated fancybox-slide--" + (t.pos >= r.prevPos ? "next" : "previous") + " fancybox-fx-" + e, c.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i), t.$content.removeClass("fancybox-is-hidden"), f(c), void n.fancybox.animate(c, "fancybox-slide--current", a, function(e) {
                    c.removeClass(i).removeAttr("style"), t.pos === r.currPos && r.complete()
                }, !0)) : (f(c), t.$content.removeClass("fancybox-is-hidden"), void(t.pos === r.currPos && r.complete())))
            },
            getThumbPos: function(o) {
                var i, a = this,
                    s = !1,
                    r = o.opts.$thumb,
                    c = r && r.length && r[0].ownerDocument === e ? r.offset() : 0,
                    l = function(e) {
                        for (var o, i = e[0], a = i.getBoundingClientRect(), s = []; null !== i.parentElement;) "hidden" !== n(i.parentElement).css("overflow") && "auto" !== n(i.parentElement).css("overflow") || s.push(i.parentElement.getBoundingClientRect()), i = i.parentElement;
                        return o = s.every(function(t) {
                            var e = Math.min(a.right, t.right) - Math.max(a.left, t.left),
                                n = Math.min(a.bottom, t.bottom) - Math.max(a.top, t.top);
                            return e > 0 && n > 0
                        }), o && a.bottom > 0 && a.right > 0 && a.left < n(t).width() && a.top < n(t).height()
                    };
                return c && l(r) && (i = a.$refs.stage.offset(), s = {
                    top: c.top - i.top + parseFloat(r.css("border-top-width") || 0),
                    left: c.left - i.left + parseFloat(r.css("border-left-width") || 0),
                    width: r.width(),
                    height: r.height(),
                    scaleX: 1,
                    scaleY: 1
                }), s
            },
            complete: function() {
                var t = this,
                    o = t.current,
                    i = {};
                !o.isMoved && o.isLoaded && (o.isComplete || (o.isComplete = !0, o.$slide.siblings().trigger("onReset"), t.preload("inline"), f(o.$slide), o.$slide.addClass("fancybox-slide--complete"), n.each(t.slides, function(e, o) {
                    o.pos >= t.currPos - 1 && o.pos <= t.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove())
                }), t.slides = i), t.isAnimating = !1, t.updateCursor(), t.trigger("afterShow"), o.$slide.find("video,audio").filter(":visible:first").trigger("play"), (n(e.activeElement).is("[disabled]") || o.opts.autoFocus && "image" != o.type && "iframe" !== o.type) && t.focus())
            },
            preload: function(t) {
                var e = this,
                    n = e.slides[e.currPos + 1],
                    o = e.slides[e.currPos - 1];
                n && n.type === t && e.loadSlide(n), o && o.type === t && e.loadSlide(o)
            },
            focus: function() {
                var t, e = this.current;
                this.isClosing || e && e.isComplete && e.$content && (t = e.$content.find("input[autofocus]:enabled:visible:first"), t.length || (t = e.$content.find("button,:input,[tabindex],a").filter(":enabled:visible:first")), t = t && t.length ? t : e.$content, t.trigger("focus"))
            },
            activate: function() {
                var t = this;
                n(".fancybox-container").each(function() {
                    var e = n(this).data("FancyBox");
                    e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
                }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
            },
            close: function(t, e) {
                var o, i, a, s, r, c, l, p = this,
                    h = p.current,
                    g = function() {
                        p.cleanUp(t)
                    };
                return !p.isClosing && (p.isClosing = !0, p.trigger("beforeClose", t) === !1 ? (p.isClosing = !1, d(function() {
                    p.update()
                }), !1) : (p.removeEvents(), h.timouts && clearTimeout(h.timouts), a = h.$content, o = h.opts.animationEffect, i = n.isNumeric(e) ? e : o ? h.opts.animationDuration : 0, h.$slide.off(u).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), h.$slide.siblings().trigger("onReset").remove(), i && p.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), p.hideLoading(h), p.hideControls(), p.updateCursor(), "zoom" !== o || t !== !0 && a && i && "image" === h.type && !h.hasError && (l = p.getThumbPos(h)) || (o = "fade"), "zoom" === o ? (n.fancybox.stop(a), s = n.fancybox.getTranslate(a), c = {
                    top: s.top,
                    left: s.left,
                    scaleX: s.width / l.width,
                    scaleY: s.height / l.height,
                    width: l.width,
                    height: l.height
                }, r = h.opts.zoomOpacity, "auto" == r && (r = Math.abs(h.width / h.height - l.width / l.height) > .1), r && (l.opacity = 0), n.fancybox.setTranslate(a, c), f(a), n.fancybox.animate(a, l, i, g), !0) : (o && i ? t === !0 ? setTimeout(g, i) : n.fancybox.animate(h.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + o, i, g) : g(), !0)))
            },
            cleanUp: function(t) {
                var e, o = this,
                    i = n("body");
                o.current.$slide.trigger("onReset"), o.$refs.container.empty().remove(), o.trigger("afterClose", t), o.$lastFocus && o.current.opts.backFocus && o.$lastFocus.trigger("focus"), o.current = null, e = n.fancybox.getInstance(), e ? e.activate() : (i.removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove())
            },
            trigger: function(t, e) {
                var o, i = Array.prototype.slice.call(arguments, 1),
                    a = this,
                    s = e && e.opts ? e : a.current;
                return s ? i.unshift(s) : s = a, i.unshift(a), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)), o === !1 ? o : void("afterClose" !== t && a.$refs ? a.$refs.container.trigger(t + ".fb", i) : r.trigger(t + ".fb", i))
            },
            updateControls: function(t) {
                var e = this,
                    n = e.current,
                    o = n.index,
                    i = n.opts.caption,
                    a = e.$refs.container,
                    s = e.$refs.caption;
                n.$slide.trigger("refresh"), e.$caption = i && i.length ? s.html(i) : null, e.isHiddenControls || e.isIdle || e.showControls(), a.find("[data-fancybox-count]").html(e.group.length), a.find("[data-fancybox-index]").html(o + 1), a.find("[data-fancybox-prev]").toggleClass("disabled", !n.opts.loop && o <= 0), a.find("[data-fancybox-next]").toggleClass("disabled", !n.opts.loop && o >= e.group.length - 1), "image" === n.type ? a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", n.opts.image.src || n.src).show() : n.opts.toolbar && a.find("[data-fancybox-download],[data-fancybox-zoom]").hide()
            },
            hideControls: function() {
                this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
            },
            showControls: function() {
                var t = this,
                    e = t.current ? t.current.opts : t.opts,
                    n = t.$refs.container;
                t.isHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal), t.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption")
            },
            toggleControls: function() {
                this.isHiddenControls ? this.showControls() : this.hideControls()
            }
        }), n.fancybox = {
            version: "3.3.5",
            defaults: a,
            getInstance: function(t) {
                var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                    o = Array.prototype.slice.call(arguments, 1);
                return e instanceof h && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e)
            },
            open: function(t, e, n) {
                return new h(t, e, n)
            },
            close: function(t) {
                var e = this.getInstance();
                e && (e.close(), t === !0 && this.close())
            },
            destroy: function() {
                this.close(!0), r.add("body").off("click.fb-start", "**")
            },
            isMobile: e.createTouch !== o && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: function() {
                var n = e.createElement("div");
                return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
            }(),
            getTranslate: function(t) {
                var e;
                return !(!t || !t.length) && (e = t[0].getBoundingClientRect(), {
                    top: e.top || 0,
                    left: e.left || 0,
                    width: e.width,
                    height: e.height,
                    opacity: parseFloat(t.css("opacity"))
                })
            },
            setTranslate: function(t, e) {
                var n = "",
                    i = {};
                if (t && e) return e.left === o && e.top === o || (n = (e.left === o ? t.position().left : e.left) + "px, " + (e.top === o ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), e.scaleX !== o && e.scaleY !== o && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), n.length && (i.transform = n), e.opacity !== o && (i.opacity = e.opacity), e.width !== o && (i.width = e.width), e.height !== o && (i.height = e.height), t.css(i)
            },
            animate: function(t, e, i, a, s) {
                var r = !1;
                n.isFunction(i) && (a = i, i = null), n.isPlainObject(e) || t.removeAttr("style"), n.fancybox.stop(t), t.on(u, function(o) {
                    (!o || !o.originalEvent || t.is(o.originalEvent.target) && "z-index" != o.originalEvent.propertyName) && (n.fancybox.stop(t), r && n.fancybox.setTranslate(t, r),
                        n.isPlainObject(e) ? s === !1 && t.removeAttr("style") : s !== !0 && t.removeClass(e), n.isFunction(a) && a(o))
                }), n.isNumeric(i) && t.css("transition-duration", i + "ms"), n.isPlainObject(e) ? (e.scaleX !== o && e.scaleY !== o && (r = n.extend({}, e, {
                    width: t.width() * e.scaleX,
                    height: t.height() * e.scaleY,
                    scaleX: 1,
                    scaleY: 1
                }), delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function() {
                    t.trigger("transitionend")
                }, i + 16))
            },
            stop: function(t) {
                t && t.length && (clearTimeout(t.data("timer")), t.off("transitionend").css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
            }
        }, n.fn.fancybox = function(t) {
            var e;
            return t = t || {}, e = t.selector || !1, e ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
                options: t
            }, i) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: t
            }, i), this
        }, r.on("click.fb-start", "[data-fancybox]", i), r.on("click.fb-start", "[data-trigger]", function(t) {
            i(t, {
                $target: n('[data-fancybox="' + n(t.currentTarget).attr("data-trigger") + '"]').eq(n(t.currentTarget).attr("data-index") || 0),
                $trigger: n(this)
            })
        })
    }
}(window, document, window.jQuery || jQuery),
function(t) {
    "use strict";
    var e = function(e, n, o) {
            if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(n, function(t, n) {
                e = e.replace("$" + t, n || "")
            }), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e
        },
        n = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "//www.youtube.com/embed/$4",
                thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1,
                    api: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function(t) {
                    return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                }
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function(t) {
                    return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                }
            }
        };
    t(document).on("objectNeedsType.fb", function(o, i, a) {
        var s, r, c, l, d, u, f, p = a.src || "",
            h = !1;
        s = t.extend(!0, {}, n, a.opts.media), t.each(s, function(n, o) {
            if (c = p.match(o.matcher)) {
                if (h = o.type, f = n, u = {}, o.paramPlace && c[o.paramPlace]) {
                    d = c[o.paramPlace], "?" == d[0] && (d = d.substring(1)), d = d.split("&");
                    for (var i = 0; i < d.length; ++i) {
                        var s = d[i].split("=", 2);
                        2 == s.length && (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")))
                    }
                }
                return l = t.extend(!0, {}, o.params, a.opts[n], u), p = "function" === t.type(o.url) ? o.url.call(this, c, l, a) : e(o.url, c, l), r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, a) : e(o.thumb, c), "youtube" === n ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function(t, e, n, o) {
                    return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                }) : "vimeo" === n && (p = p.replace("&%23", "#")), !1
            }
        }), h ? (a.opts.thumb || a.opts.$thumb && a.opts.$thumb.length || (a.opts.thumb = r), "iframe" === h && (a.opts = t.extend(!0, a.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })), t.extend(a, {
            type: h,
            src: p,
            origSrc: a.src,
            contentSource: f,
            contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video"
        })) : p && (a.type = a.opts.defaultType)
    })
}(window.jQuery || jQuery),
function(t, e, n) {
    "use strict";
    var o = function() {
            return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                return t.setTimeout(e, 1e3 / 60)
            }
        }(),
        i = function() {
            return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
                t.clearTimeout(e)
            }
        }(),
        a = function(e) {
            var n = [];
            e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
            for (var o in e) e[o].pageX ? n.push({
                x: e[o].pageX,
                y: e[o].pageY
            }) : e[o].clientX && n.push({
                x: e[o].clientX,
                y: e[o].clientY
            });
            return n
        },
        s = function(t, e, n) {
            return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
        },
        r = function(t) {
            if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
            for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
                if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
            return !1
        },
        c = function(e) {
            var n = t.getComputedStyle(e)["overflow-y"],
                o = t.getComputedStyle(e)["overflow-x"],
                i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
                a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
            return i || a
        },
        l = function(t) {
            for (var e = !1;;) {
                if (e = c(t.get(0))) break;
                if (t = t.parent(), !t.length || t.hasClass("fancybox-stage") || t.is("body")) break
            }
            return e
        },
        d = function(t) {
            var e = this;
            e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
        };
    d.prototype.destroy = function() {
        this.$container.off(".fb.touch")
    }, d.prototype.ontouchstart = function(o) {
        var i = this,
            c = n(o.target),
            d = i.instance,
            u = d.current,
            f = u.$content,
            p = "touchstart" == o.type;
        if (p && i.$container.off("mousedown.fb.touch"), (!o.originalEvent || 2 != o.originalEvent.button) && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
            if (!u || d.isAnimating || d.isClosing) return o.stopPropagation(), void o.preventDefault();
            if (i.realPoints = i.startPoints = a(o), i.startPoints.length) {
                if (o.stopPropagation(), i.startEvent = o, i.canTap = !0, i.$target = c, i.$content = f, i.opts = u.opts.touch, i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.isScrolling = !1, i.startTime = (new Date).getTime(), i.distanceX = i.distanceY = i.distance = 0, i.canvasWidth = Math.round(u.$slide[0].clientWidth), i.canvasHeight = Math.round(u.$slide[0].clientHeight), i.contentLastPos = null, i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
                        top: 0,
                        left: 0
                    }, i.sliderStartPos = i.sliderLastPos || n.fancybox.getTranslate(u.$slide), i.stagePos = n.fancybox.getTranslate(d.$refs.stage), i.sliderStartPos.top -= i.stagePos.top, i.sliderStartPos.left -= i.stagePos.left, i.contentStartPos.top -= i.stagePos.top, i.contentStartPos.left -= i.stagePos.left, n(e).off(".fb.touch").on(p ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")).on(p ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", i.onscroll, !0), !i.opts && !d.canPan() || !c.is(i.$stage) && !i.$stage.find(c).length) return void(c.is(".fancybox-image") && o.preventDefault());
                n.fancybox.isMobile && (l(c) || l(c.parent())) || o.preventDefault(), (1 === i.startPoints.length || u.hasError) && (i.instance.canPan() ? (n.fancybox.stop(i.$content), i.$content.css("transition-duration", ""), i.isPanning = !0) : i.isSwiping = !0, i.$container.addClass("fancybox-controls--isGrabbing")), 2 === i.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (i.canTap = !1, i.isSwiping = !1, i.isPanning = !1, i.isZooming = !0, n.fancybox.stop(i.$content), i.$content.css("transition-duration", ""), i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(), i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(), i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))
            }
        }
    }, d.prototype.onscroll = function(t) {
        var n = this;
        n.isScrolling = !0, e.removeEventListener("scroll", n.onscroll, !0)
    }, d.prototype.ontouchmove = function(t) {
        var e = this,
            o = n(t.target);
        return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling || !o.is(e.$stage) && !e.$stage.find(o).length ? void(e.canTap = !1) : (e.newPoints = a(t), void((e.opts || e.instance.canPan()) && e.newPoints.length && e.newPoints.length && (e.isSwiping && e.isSwiping === !0 || t.preventDefault(), e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
    }, d.prototype.onSwipe = function(e) {
        var a, s = this,
            r = s.isSwiping,
            c = s.sliderStartPos.left || 0;
        if (r !== !0) "x" == r && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? c += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? c -= Math.pow(-s.distanceX, .8) : c += s.distanceX), s.sliderLastPos = {
            top: "x" == r ? 0 : s.sliderStartPos.top + s.distanceY,
            left: c
        }, s.requestId && (i(s.requestId), s.requestId = null), s.requestId = o(function() {
            s.sliderLastPos && (n.each(s.instance.slides, function(t, e) {
                var o = e.pos - s.instance.currPos;
                n.fancybox.setTranslate(e.$slide, {
                    top: s.sliderLastPos.top,
                    left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter
                })
            }), s.$container.addClass("fancybox-is-sliding"))
        });
        else if (Math.abs(s.distance) > 10) {
            if (s.canTap = !1, s.instance.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : s.instance.isDragging || s.opts.vertical === !1 || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (a = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = a > 45 && a < 135 ? "y" : "x"), s.canTap = !1, "y" === s.isSwiping && n.fancybox.isMobile && (l(s.$target) || l(s.$target.parent()))) return void(s.isScrolling = !0);
            s.instance.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(s.instance.slides, function(t, e) {
                n.fancybox.stop(e.$slide), e.$slide.css("transition-duration", ""), e.inTransition = !1, e.pos === s.instance.current.pos && (s.sliderStartPos.left = n.fancybox.getTranslate(e.$slide).left - n.fancybox.getTranslate(s.instance.$refs.stage).left)
            }), s.instance.SlideShow && s.instance.SlideShow.isActive && s.instance.SlideShow.stop()
        }
    }, d.prototype.onPan = function() {
        var t = this;
        return s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? void(t.startPoints = t.newPoints) : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && (i(t.requestId), t.requestId = null), void(t.requestId = o(function() {
            n.fancybox.setTranslate(t.$content, t.contentLastPos)
        })))
    }, d.prototype.limitMovement = function() {
        var t, e, n, o, i, a, s = this,
            r = s.canvasWidth,
            c = s.canvasHeight,
            l = s.distanceX,
            d = s.distanceY,
            u = s.contentStartPos,
            f = u.left,
            p = u.top,
            h = u.width,
            g = u.height;
        return i = h > r ? f + l : f, a = p + d, t = Math.max(0, .5 * r - .5 * h), e = Math.max(0, .5 * c - .5 * g), n = Math.min(r - h, .5 * r - .5 * h), o = Math.min(c - g, .5 * c - .5 * g), l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, .8) || 0), d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, .8) || 0), d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, .8) || 0), {
            top: a,
            left: i
        }
    }, d.prototype.limitPosition = function(t, e, n, o) {
        var i = this,
            a = i.canvasWidth,
            s = i.canvasHeight;
        return n > a ? (t = t > 0 ? 0 : t, t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2), o > s ? (e = e > 0 ? 0 : e, e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2), {
            top: e,
            left: t
        }
    }, d.prototype.onZoom = function() {
        var e = this,
            a = e.contentStartPos,
            r = a.width,
            c = a.height,
            l = a.left,
            d = a.top,
            u = s(e.newPoints[0], e.newPoints[1]),
            f = u / e.startDistanceBetweenFingers,
            p = Math.floor(r * f),
            h = Math.floor(c * f),
            g = (r - p) * e.percentageOfImageAtPinchPointX,
            b = (c - h) * e.percentageOfImageAtPinchPointY,
            m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
            y = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
            v = m - e.centerPointStartX,
            x = y - e.centerPointStartY,
            w = l + (g + v),
            $ = d + (b + x),
            S = {
                top: $,
                left: w,
                scaleX: f,
                scaleY: f
            };
        e.canTap = !1, e.newWidth = p, e.newHeight = h, e.contentLastPos = S, e.requestId && (i(e.requestId), e.requestId = null), e.requestId = o(function() {
            n.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }, d.prototype.ontouchend = function(t) {
        var o = this,
            s = Math.max((new Date).getTime() - o.startTime, 1),
            r = o.isSwiping,
            c = o.isPanning,
            l = o.isZooming,
            d = o.isScrolling;
        return o.endPoints = a(t), o.$container.removeClass("fancybox-controls--isGrabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", o.onscroll, !0), o.requestId && (i(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.isScrolling = !1, o.instance.isDragging = !1, o.canTap ? o.onTap(t) : (o.speed = 366, o.velocityX = o.distanceX / s * .5, o.velocityY = o.distanceY / s * .5, o.speedX = Math.max(.5 * o.speed, Math.min(1.5 * o.speed, 1 / Math.abs(o.velocityX) * o.speed)), void(c ? o.endPanning() : l ? o.endZooming() : o.endSwiping(r, d)))
    }, d.prototype.endSwiping = function(t, e) {
        var o = this,
            i = !1,
            a = o.instance.group.length;
        o.sliderLastPos = null, "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, {
            top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
            opacity: 0
        }, 200), i = o.instance.close(!0, 200)) : "x" == t && o.distanceX > 50 && a > 1 ? i = o.instance.previous(o.speedX) : "x" == t && o.distanceX < -50 && a > 1 && (i = o.instance.next(o.speedX)), i !== !1 || "x" != t && "y" != t || (e || a < 2 ? o.instance.centerSlide(o.instance.current, 150) : o.instance.jumpTo(o.instance.current.index)), o.$container.removeClass("fancybox-is-sliding")
    }, d.prototype.endPanning = function() {
        var t, e, o, i = this;
        i.contentLastPos && (i.opts.momentum === !1 ? (t = i.contentLastPos.left, e = i.contentLastPos.top) : (t = i.contentLastPos.left + i.velocityX * i.speed, e = i.contentLastPos.top + i.velocityY * i.speed), o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height), o.width = i.contentStartPos.width, o.height = i.contentStartPos.height, n.fancybox.animate(i.$content, o, 330))
    }, d.prototype.endZooming = function() {
        var t, e, o, i, a = this,
            s = a.instance.current,
            r = a.newWidth,
            c = a.newHeight;
        a.contentLastPos && (t = a.contentLastPos.left, e = a.contentLastPos.top, i = {
            top: e,
            left: t,
            width: r,
            height: c,
            scaleX: 1,
            scaleY: 1
        }, n.fancybox.setTranslate(a.$content, i), r < a.canvasWidth && c < a.canvasHeight ? a.instance.scaleToFit(150) : r > s.width || c > s.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (o = a.limitPosition(t, e, r, c), n.fancybox.setTranslate(a.$content, n.fancybox.getTranslate(a.$content)), n.fancybox.animate(a.$content, o, 150)))
    }, d.prototype.onTap = function(e) {
        var o, i = this,
            s = n(e.target),
            r = i.instance,
            c = r.current,
            l = e && a(e) || i.startPoints,
            d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
            u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
            f = function(t) {
                var o = c.opts[t];
                if (n.isFunction(o) && (o = o.apply(r, [c, e])), o) switch (o) {
                    case "close":
                        r.close(i.startEvent);
                        break;
                    case "toggleControls":
                        r.toggleControls(!0);
                        break;
                    case "next":
                        r.next();
                        break;
                    case "nextOrClose":
                        r.group.length > 1 ? r.next() : r.close(i.startEvent);
                        break;
                    case "zoom":
                        "image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, u) : r.group.length < 2 && r.close(i.startEvent))
                }
            };
        if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(d > s[0].clientWidth + s.offset().left))) {
            if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) o = "Outside";
            else if (s.is(".fancybox-slide")) o = "Slide";
            else {
                if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length) return;
                o = "Content"
            }
            if (i.tapped) {
                if (clearTimeout(i.tapped), i.tapped = null, Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50) return this;
                f("dblclick" + o)
            } else i.tapX = d, i.tapY = u, c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o] ? i.tapped = setTimeout(function() {
                i.tapped = null, f("click" + o)
            }, 500) : f("click" + o);
            return this
        }
    }, n(e).on("onActivate.fb", function(t, e) {
        e && !e.Guestures && (e.Guestures = new d(e))
    })
}(window, document, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3
        }
    });
    var n = function(t) {
        this.instance = t, this.init()
    };
    e.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var t = this;
            t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                t.toggle()
            }), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide()
        },
        set: function(t) {
            var e = this;
            e.instance && e.instance.current && (t === !0 || e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1) ? e.timer = setTimeout(function() {
                e.isActive && e.instance.jumpTo((e.instance.currIndex + 1) % e.instance.group.length)
            }, e.instance.current.opts.slideShow.speed) : (e.stop(), e.instance.idleSecondsCounter = 0, e.instance.showControls())
        },
        clear: function() {
            var t = this;
            clearTimeout(t.timer), t.timer = null
        },
        start: function() {
            var t = this,
                e = t.instance.current;
            e && (t.isActive = !0, t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.set(!0))
        },
        stop: function() {
            var t = this,
                e = t.instance.current;
            t.clear(), t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1
        },
        toggle: function() {
            var t = this;
            t.isActive ? t.stop() : t.start()
        }
    }), e(t).on({
        "onInit.fb": function(t, e) {
            e && !e.SlideShow && (e.SlideShow = new n(e))
        },
        "beforeShow.fb": function(t, e, n, o) {
            var i = e && e.SlideShow;
            o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear()
        },
        "afterShow.fb": function(t, e, n) {
            var o = e && e.SlideShow;
            o && o.isActive && o.set()
        },
        "afterKeydown.fb": function(n, o, i, a, s) {
            var r = o && o.SlideShow;
            !r || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (a.preventDefault(), r.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(t, e) {
            var n = e && e.SlideShow;
            n && n.stop()
        }
    }), e(t).on("visibilitychange", function() {
        var n = e.fancybox.getInstance(),
            o = n && n.SlideShow;
        o && o.isActive && (t.hidden ? o.clear() : o.set())
    })
}(document, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    var n = function() {
        for (var e = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ], n = {}, o = 0; o < e.length; o++) {
            var i = e[o];
            if (i && i[1] in t) {
                for (var a = 0; a < i.length; a++) n[e[0][a]] = i[a];
                return n
            }
        }
        return !1
    }();
    if (!n) return void(e && e.fancybox && (e.fancybox.defaults.btnTpl.fullScreen = !1));
    var o = {
        request: function(e) {
            e = e || t.documentElement, e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
        },
        exit: function() {
            t[n.exitFullscreen]()
        },
        toggle: function(e) {
            e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
        },
        isFullscreen: function() {
            return Boolean(t[n.fullscreenElement])
        },
        enabled: function() {
            return Boolean(t[n.fullscreenEnabled])
        }
    };
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 v16 h22 v-16 h-22 v8" /></svg></button>'
        },
        fullScreen: {
            autoStart: !1
        }
    }), e(t).on({
        "onInit.fb": function(t, e) {
            var n;
            e && e.group[e.currIndex].opts.fullScreen ? (n = e.$refs.container, n.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                t.stopPropagation(), t.preventDefault(), o.toggle()
            }), e.opts.fullScreen && e.opts.fullScreen.autoStart === !0 && o.request(), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
        },
        "afterKeydown.fb": function(t, e, n, o, i) {
            e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle())
        },
        "beforeClose.fb": function(t, e) {
            e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit()
        }
    }), e(t).on(n.fullscreenchange, function() {
        var t = o.isFullscreen(),
            n = e.fancybox.getInstance();
        n && (n.current && "image" === n.current.type && n.isAnimating && (n.current.$content.css("transition", "none"), n.isAnimating = !1, n.update(!0, !0, 0)), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t))
    })
}(document, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    var n = "fancybox-thumbs",
        o = n + "-active",
        i = n + "-loading";
    e.fancybox.defaults = e.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, e.fancybox.defaults);
    var a = function(t) {
        this.init(t)
    };
    e.extend(a.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(t) {
            var e, n, o = this;
            o.instance = t, t.Thumbs = o, o.opts = t.group[t.currIndex].opts.thumbs, e = t.group[0], e = e.opts.thumb || !(!e.opts.$thumb || !e.opts.$thumb.length) && e.opts.$thumb.attr("src"), t.group.length > 1 && (n = t.group[1], n = n.opts.thumb || !(!n.opts.$thumb || !n.opts.$thumb.length) && n.opts.$thumb.attr("src")), o.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"), o.opts && e && n && e && n ? (o.$button.show().on("click", function() {
                o.toggle()
            }), o.isActive = !0) : o.$button.hide()
        },
        create: function() {
            var t, o = this,
                a = o.instance,
                s = o.opts.parentEl,
                r = [];
            o.$grid || (o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(a.$refs.container.find(s).addBack().filter(s)), o.$grid.on("click", "li", function() {
                a.jumpTo(e(this).attr("data-index"))
            })), o.$list || (o.$list = e("<ul>").appendTo(o.$grid)), e.each(a.group, function(e, n) {
                t = n.opts.thumb || (n.opts.$thumb ? n.opts.$thumb.attr("src") : null), t || "image" !== n.type || (t = n.src), r.push('<li data-index="' + e + '" tabindex="0" class="' + i + '"' + (t && t.length ? ' style="background-image:url(' + t + ')" />' : "") + "></li>")
            }), o.$list[0].innerHTML = r.join(""), "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + a.group.length * o.$list.children().eq(0).outerWidth(!0))
        },
        focus: function(t) {
            var e, n, i = this,
                a = i.$list,
                s = i.$grid;
            i.instance.current && (e = a.children().removeClass(o).filter('[data-index="' + i.instance.current.index + '"]').addClass(o), n = e.position(), "y" === i.opts.axis && (n.top < 0 || n.top > a.height() - e.outerHeight()) ? a.stop().animate({
                scrollTop: a.scrollTop() + n.top
            }, t) : "x" === i.opts.axis && (n.left < s.scrollLeft() || n.left > s.scrollLeft() + (s.width() - e.outerWidth())) && a.parent().stop().animate({
                scrollLeft: n.left
            }, t))
        },
        update: function() {
            var t = this;
            t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update()
        },
        hide: function() {
            this.isVisible = !1, this.update()
        },
        show: function() {
            this.isVisible = !0, this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible, this.update()
        }
    }), e(t).on({
        "onInit.fb": function(t, e) {
            var n;
            e && !e.Thumbs && (n = new a(e), n.isActive && n.opts.autoStart === !0 && n.show())
        },
        "beforeShow.fb": function(t, e, n, o) {
            var i = e && e.Thumbs;
            i && i.isVisible && i.focus(o ? 0 : 250)
        },
        "afterKeydown.fb": function(t, e, n, o, i) {
            var a = e && e.Thumbs;
            a && a.isActive && 71 === i && (o.preventDefault(), a.toggle())
        },
        "beforeClose.fb": function(t, e) {
            var n = e && e.Thumbs;
            n && n.isVisible && n.opts.hideOnClose !== !1 && n.$grid.hide()
        }
    })
}(document, window.jQuery || jQuery),
function(t, e) {
    "use strict";

    function n(t) {
        var e = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        };
        return String(t).replace(/[&<>"'`=\/]/g, function(t) {
            return e[t]
        })
    }
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'
        },
        share: {
            url: function(t, e) {
                return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>'
        }
    }), e(t).on("click", "[data-fancybox-share]", function() {
        var t, o, i = e.fancybox.getInstance(),
            a = i.current || null;
        a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [i, a])), o = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, n(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), e.fancybox.open({
            src: i.translate(i, o),
            type: "html",
            opts: {
                animationEffect: !1,
                afterLoad: function(t, e) {
                    i.$refs.container.one("beforeClose.fb", function() {
                        t.close(null, 0)
                    }), e.$content.find(".fancybox-share__links a").click(function() {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    })
                }
            }
        }))
    })
}(document, window.jQuery || jQuery),
function(t, e, n) {
    "use strict";

    function o() {
        var t = e.location.hash.substr(1),
            n = t.split("-"),
            o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
            i = n.join("-");
        return {
            hash: t,
            index: o < 1 ? 1 : o,
            gallery: i
        }
    }

    function i(t) {
        var e;
        "" !== t.gallery && (e = n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).trigger("click.fb-start"))
    }

    function a(t) {
        var e, n;
        return !!t && (e = t.current ? t.current.opts : t.opts, n = e.hash || (e.$orig ? e.$orig.data("fancybox") : ""), "" !== n && n)
    }
    n.escapeSelector || (n.escapeSelector = function(t) {
        var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            n = function(t, e) {
                return e ? "\0" === t ? "ï¿½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            };
        return (t + "").replace(e, n)
    }), n(function() {
        n.fancybox.defaults.hash !== !1 && (n(t).on({
            "onInit.fb": function(t, e) {
                var n, i;
                e.group[e.currIndex].opts.hash !== !1 && (n = o(), i = a(e), i && n.gallery && i == n.gallery && (e.currIndex = n.index - 1))
            },
            "beforeShow.fb": function(n, o, i, s) {
                var r;
                i && i.opts.hash !== !1 && (r = a(o), r && (o.currentHash = r + (o.group.length > 1 ? "-" + (i.index + 1) : ""), e.location.hash !== "#" + o.currentHash && (o.origHash || (o.origHash = e.location.hash), o.hashTimer && clearTimeout(o.hashTimer), o.hashTimer = setTimeout(function() {
                    "replaceState" in e.history ? (e.history[s ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + o.currentHash), s && (o.hasCreatedHistory = !0)) : e.location.hash = o.currentHash, o.hashTimer = null
                }, 300))))
            },
            "beforeClose.fb": function(n, o, i) {
                var s;
                i.opts.hash !== !1 && (s = a(o), o.currentHash && o.hasCreatedHistory ? e.history.back() : o.currentHash && ("replaceState" in e.history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + (o.origHash || "")) : e.location.hash = o.origHash), o.currentHash = null, clearTimeout(o.hashTimer))
            }
        }), n(e).on("hashchange.fb", function() {
            var t, e = o();
            n.each(n(".fancybox-container").get().reverse(), function(e, o) {
                var i = n(o).data("FancyBox");
                if (i.currentHash) return t = i, !1
            }), t ? !t.currentHash || t.currentHash === e.gallery + "-" + e.index || 1 === e.index && t.currentHash == e.gallery || (t.currentHash = null, t.close()) : "" !== e.gallery && i(e)
        }), setTimeout(function() {
            n.fancybox.getInstance() || i(o())
        }, 50))
    })
}(document, window, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    var n = (new Date).getTime();
    e(t).on({
        "onInit.fb": function(t, e, o) {
            e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(t) {
                var o = e.current,
                    i = (new Date).getTime();
                e.group.length < 2 || o.opts.wheel === !1 || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(), t.stopPropagation(), o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, i - n < 250 || (n = i, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, window.jQuery || jQuery);


/*! odometer 0.4.7 */
(function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G = [].slice;
    q = '<span class="odometer-value"></span>', n = '<span class="odometer-ribbon"><span class="odometer-ribbon-inner">' + q + "</span></span>", d = '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">' + n + "</span></span>", g = '<span class="odometer-formatting-mark"></span>', c = "(,ddd).dd", h = /^\(?([^)]*)\)?(?:(.)(d+))?$/, i = 30, f = 2e3, a = 20, j = 2, e = .5, k = 1e3 / i, b = 1e3 / a, o = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", y = document.createElement("div").style, p = null != y.transition || null != y.webkitTransition || null != y.mozTransition || null != y.oTransition, w = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, l = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, s = function(a) {
        var b;
        return b = document.createElement("div"), b.innerHTML = a, b.children[0]
    }, v = function(a, b) {
        return a.className = a.className.replace(new RegExp("(^| )" + b.split(" ").join("|") + "( |$)", "gi"), " ")
    }, r = function(a, b) {
        return v(a, b), a.className += " " + b
    }, z = function(a, b) {
        var c;
        return null != document.createEvent ? (c = document.createEvent("HTMLEvents"), c.initEvent(b, !0, !0), a.dispatchEvent(c)) : void 0
    }, u = function() {
        var a, b;
        return null != (a = null != (b = window.performance) && "function" == typeof b.now ? b.now() : void 0) ? a : +new Date
    }, x = function(a, b) {
        return null == b && (b = 0), b ? (a *= Math.pow(10, b), a += .5, a = Math.floor(a), a /= Math.pow(10, b)) : Math.round(a)
    }, A = function(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }, t = function(a) {
        return a - x(a)
    }, C = !1, (B = function() {
        var a, b, c, d, e;
        if (!C && null != window.jQuery) {
            for (C = !0, d = ["html", "text"], e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(function(a) {
                var b;
                return b = window.jQuery.fn[a], window.jQuery.fn[a] = function(a) {
                    var c;
                    return null == a || null == (null != (c = this[0]) ? c.odometer : void 0) ? b.apply(this, arguments) : this[0].odometer.update(a)
                }
            }(a));
            return e
        }
    })(), setTimeout(B, 0), m = function() {
        function a(b) {
            var c, d, e, g, h, i, l, m, n, o, p = this;
            if (this.options = b, this.el = this.options.el, null != this.el.odometer) return this.el.odometer;
            this.el.odometer = this, m = a.options;
            for (d in m) g = m[d], null == this.options[d] && (this.options[d] = g);
            null == (h = this.options).duration && (h.duration = f), this.MAX_VALUES = this.options.duration / k / j | 0, this.resetFormat(), this.value = this.cleanValue(null != (n = this.options.value) ? n : ""), this.renderInside(), this.render();
            try {
                for (o = ["innerHTML", "innerText", "textContent"], i = 0, l = o.length; l > i; i++) e = o[i], null != this.el[e] && ! function(a) {
                    return Object.defineProperty(p.el, a, {
                        get: function() {
                            var b;
                            return "innerHTML" === a ? p.inside.outerHTML : null != (b = p.inside.innerText) ? b : p.inside.textContent
                        },
                        set: function(a) {
                            return p.update(a)
                        }
                    })
                }(e)
            } catch (q) {
                c = q, this.watchForMutations()
            }
        }
        return a.prototype.renderInside = function() {
            return this.inside = document.createElement("div"), this.inside.className = "odometer-inside", this.el.innerHTML = "", this.el.appendChild(this.inside)
        }, a.prototype.watchForMutations = function() {
            var a, b = this;
            if (null != l) try {
                return null == this.observer && (this.observer = new l(function() {
                    var a;
                    return a = b.el.innerText, b.renderInside(), b.render(b.value), b.update(a)
                })), this.watchMutations = !0, this.startWatchingMutations()
            } catch (c) {
                a = c
            }
        }, a.prototype.startWatchingMutations = function() {
            return this.watchMutations ? this.observer.observe(this.el, {
                childList: !0
            }) : void 0
        }, a.prototype.stopWatchingMutations = function() {
            var a;
            return null != (a = this.observer) ? a.disconnect() : void 0
        }, a.prototype.cleanValue = function(a) {
            var b;
            return "string" == typeof a && (a = a.replace(null != (b = this.format.radix) ? b : ".", "<radix>"), a = a.replace(/[.,]/g, ""), a = a.replace("<radix>", "."), a = parseFloat(a, 10) || 0), x(a, this.format.precision)
        }, a.prototype.bindTransitionEnd = function() {
            var a, b, c, d, e, f, g = this;
            if (!this.transitionEndBound) {
                for (this.transitionEndBound = !0, b = !1, e = o.split(" "), f = [], c = 0, d = e.length; d > c; c++) a = e[c], f.push(this.el.addEventListener(a, function() {
                    return b ? !0 : (b = !0, setTimeout(function() {
                        return g.render(), b = !1, z(g.el, "odometerdone")
                    }, 0), !0)
                }, !1));
                return f
            }
        }, a.prototype.resetFormat = function() {
            var a, b, d, e, f, g, i, j;
            if (a = null != (i = this.options.format) ? i : c, a || (a = "d"), d = h.exec(a), !d) throw new Error("Odometer: Unparsable digit format");
            return j = d.slice(1, 4), g = j[0], f = j[1], b = j[2], e = (null != b ? b.length : void 0) || 0, this.format = {
                repeating: g,
                radix: f,
                precision: e
            }
        }, a.prototype.render = function(a) {
            var b, c, d, e, f, g, h;
            for (null == a && (a = this.value), this.stopWatchingMutations(), this.resetFormat(), this.inside.innerHTML = "", f = this.options.theme, b = this.el.className.split(" "), e = [], g = 0, h = b.length; h > g; g++) c = b[g], c.length && ((d = /^odometer-theme-(.+)$/.exec(c)) ? f = d[1] : /^odometer(-|$)/.test(c) || e.push(c));
            return e.push("odometer"), p || e.push("odometer-no-transitions"), e.push(f ? "odometer-theme-" + f : "odometer-auto-theme"), this.el.className = e.join(" "), this.ribbons = {}, this.formatDigits(a), this.startWatchingMutations()
        }, a.prototype.formatDigits = function(a) {
            var b, c, d, e, f, g, h, i, j, k;
            if (this.digits = [], this.options.formatFunction)
                for (d = this.options.formatFunction(a), j = d.split("").reverse(), f = 0, h = j.length; h > f; f++) c = j[f], c.match(/0-9/) ? (b = this.renderDigit(), b.querySelector(".odometer-value").innerHTML = c, this.digits.push(b), this.insertDigit(b)) : this.addSpacer(c);
            else
                for (e = !this.format.precision || !t(a) || !1, k = a.toString().split("").reverse(), g = 0, i = k.length; i > g; g++) b = k[g], "." === b && (e = !0), this.addDigit(b, e)
        }, a.prototype.update = function(a) {
            var b, c = this;
            return a = this.cleanValue(a), (b = a - this.value) ? (v(this.el, "odometer-animating-up odometer-animating-down odometer-animating"), b > 0 ? r(this.el, "odometer-animating-up") : r(this.el, "odometer-animating-down"), this.stopWatchingMutations(), this.animate(a), this.startWatchingMutations(), setTimeout(function() {
                return c.el.offsetHeight, r(c.el, "odometer-animating")
            }, 0), this.value = a) : void 0
        }, a.prototype.renderDigit = function() {
            return s(d)
        }, a.prototype.insertDigit = function(a, b) {
            return null != b ? this.inside.insertBefore(a, b) : this.inside.children.length ? this.inside.insertBefore(a, this.inside.children[0]) : this.inside.appendChild(a)
        }, a.prototype.addSpacer = function(a, b, c) {
            var d;
            return d = s(g), d.innerHTML = a, c && r(d, c), this.insertDigit(d, b)
        }, a.prototype.addDigit = function(a, b) {
            var c, d, e, f;
            if (null == b && (b = !0), "-" === a) return this.addSpacer(a, null, "odometer-negation-mark");
            if ("." === a) return this.addSpacer(null != (f = this.format.radix) ? f : ".", null, "odometer-radix-mark");
            if (b)
                for (e = !1;;) {
                    if (!this.format.repeating.length) {
                        if (e) throw new Error("Bad odometer format without digits");
                        this.resetFormat(), e = !0
                    }
                    if (c = this.format.repeating[this.format.repeating.length - 1], this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1), "d" === c) break;
                    this.addSpacer(c)
                }
            return d = this.renderDigit(), d.querySelector(".odometer-value").innerHTML = a, this.digits.push(d), this.insertDigit(d)
        }, a.prototype.animate = function(a) {
            return p && "count" !== this.options.animation ? this.animateSlide(a) : this.animateCount(a)
        }, a.prototype.animateCount = function(a) {
            var c, d, e, f, g, h = this;
            if (d = +a - this.value) return f = e = u(), c = this.value, (g = function() {
                var i, j, k;
                return u() - f > h.options.duration ? (h.value = a, h.render(), void z(h.el, "odometerdone")) : (i = u() - e, i > b && (e = u(), k = i / h.options.duration, j = d * k, c += j, h.render(Math.round(c))), null != w ? w(g) : setTimeout(g, b))
            })()
        }, a.prototype.getDigitCount = function() {
            var a, b, c, d, e, f;
            for (d = 1 <= arguments.length ? G.call(arguments, 0) : [], a = e = 0, f = d.length; f > e; a = ++e) c = d[a], d[a] = Math.abs(c);
            return b = Math.max.apply(Math, d), Math.ceil(Math.log(b + 1) / Math.log(10))
        }, a.prototype.getFractionalDigitCount = function() {
            var a, b, c, d, e, f, g;
            for (e = 1 <= arguments.length ? G.call(arguments, 0) : [], b = /^\-?\d*\.(\d*?)0*$/, a = f = 0, g = e.length; g > f; a = ++f) d = e[a], e[a] = d.toString(), c = b.exec(e[a]), e[a] = null == c ? 0 : c[1].length;
            return Math.max.apply(Math, e)
        }, a.prototype.resetDigits = function() {
            return this.digits = [], this.ribbons = [], this.inside.innerHTML = "", this.resetFormat()
        }, a.prototype.animateSlide = function(a) {
            var b, c, d, f, g, h, i, j, k, l, m, n, o, p, q, s, t, u, v, w, x, y, z, B, C, D, E;
            if (s = this.value, j = this.getFractionalDigitCount(s, a), j && (a *= Math.pow(10, j), s *= Math.pow(10, j)), d = a - s) {
                for (this.bindTransitionEnd(), f = this.getDigitCount(s, a), g = [], b = 0, m = v = 0; f >= 0 ? f > v : v > f; m = f >= 0 ? ++v : --v) {
                    if (t = A(s / Math.pow(10, f - m - 1)), i = A(a / Math.pow(10, f - m - 1)), h = i - t, Math.abs(h) > this.MAX_VALUES) {
                        for (l = [], n = h / (this.MAX_VALUES + this.MAX_VALUES * b * e), c = t; h > 0 && i > c || 0 > h && c > i;) l.push(Math.round(c)), c += n;
                        l[l.length - 1] !== i && l.push(i), b++
                    } else l = function() {
                        E = [];
                        for (var a = t; i >= t ? i >= a : a >= i; i >= t ? a++ : a--) E.push(a);
                        return E
                    }.apply(this);
                    for (m = w = 0, y = l.length; y > w; m = ++w) k = l[m], l[m] = Math.abs(k % 10);
                    g.push(l)
                }
                for (this.resetDigits(), D = g.reverse(), m = x = 0, z = D.length; z > x; m = ++x)
                    for (l = D[m], this.digits[m] || this.addDigit(" ", m >= j), null == (u = this.ribbons)[m] && (u[m] = this.digits[m].querySelector(".odometer-ribbon-inner")), this.ribbons[m].innerHTML = "", 0 > d && (l = l.reverse()), o = C = 0, B = l.length; B > C; o = ++C) k = l[o], q = document.createElement("div"), q.className = "odometer-value", q.innerHTML = k, this.ribbons[m].appendChild(q), o === l.length - 1 && r(q, "odometer-last-value"), 0 === o && r(q, "odometer-first-value");
                return 0 > t && this.addDigit("-"), p = this.inside.querySelector(".odometer-radix-mark"), null != p && p.parent.removeChild(p), j ? this.addSpacer(this.format.radix, this.digits[j - 1], "odometer-radix-mark") : void 0
            }
        }, a
    }(), m.options = null != (E = window.odometerOptions) ? E : {}, setTimeout(function() {
        var a, b, c, d, e;
        if (window.odometerOptions) {
            d = window.odometerOptions, e = [];
            for (a in d) b = d[a], e.push(null != (c = m.options)[a] ? (c = m.options)[a] : c[a] = b);
            return e
        }
    }, 0), m.init = function() {
        var a, b, c, d, e, f;
        if (null != document.querySelectorAll) {
            for (b = document.querySelectorAll(m.options.selector || ".odometer"), f = [], c = 0, d = b.length; d > c; c++) a = b[c], f.push(a.odometer = new m({
                el: a,
                value: null != (e = a.innerText) ? e : a.textContent
            }));
            return f
        }
    }, null != (null != (F = document.documentElement) ? F.doScroll : void 0) && null != document.createEventObject ? (D = document.onreadystatechange, document.onreadystatechange = function() {
        return "complete" === document.readyState && m.options.auto !== !1 && m.init(), null != D ? D.apply(this, arguments) : void 0
    }) : document.addEventListener("DOMContentLoaded", function() {
        return m.options.auto !== !1 ? m.init() : void 0
    }, !1), "function" == typeof define && define.amd ? define(["jquery"], function() {
        return m
    }) : "undefined" != typeof exports && null !== exports ? module.exports = m : window.Odometer = m
}).call(this);



/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/
(function() {
    var a, b, c, d, e, f = function(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        },
        g = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in b) d = b[c], null == a[c] && (a[c] = d);
            return a
        }, a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }, a.prototype.createEvent = function(a, b, c, d) {
            var e;
            return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
        }, a.prototype.emitEvent = function(a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }, a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }, a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }, a.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, a
    }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() {
            this.keys = [], this.values = []
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                if (c = f[b], c === a) return this.values[b]
        }, a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a), this.values.push(b)
        }, a
    }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0, a.prototype.observe = function() {}, a
    }()), d = this.getComputedStyle || function(a, b) {
        return this.getPropertyValue = function(b) {
            var c;
            return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) {
                return b.toUpperCase()
            }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }, this
    }, e = /(\-([a-z]){1})/g, this.WOW = function() {
        function e(a) {
            null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, e.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function() {
                    var a, c, d, e;
                    for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.all = function() {
                    var a, c, d, e;
                    for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function() {
                        var a, b, c, d;
                        for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
                        return d
                    }.call(a));
                    return g
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, e.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, e.prototype.sync = function(b) {
            return a.notSupported ? this.doSync(this.element) : void 0
        }, e.prototype.doSync = function(a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element), 1 === a.nodeType) {
                for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }, e.prototype.show = function(a) {
            return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
        }, e.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }, e.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(a) {
                return window.requestAnimationFrame(a)
            } : function(a) {
                return a()
            }
        }(), e.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
            return e
        }, e.prototype.resetAnimation = function(a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }, e.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
                animationDuration: c
            }), d && this.vendorSet(a.style, {
                animationDelay: d
            }), e && this.vendorSet(a.style, {
                animationIterationCount: e
            }), this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }), a
        }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b) e = b[c], a["" + c] = e, d.push(function() {
                var b, d, g, h;
                for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                return h
            }.call(this));
            return d
        }, e.prototype.vendorCSS = function(a, b) {
            var c, e, f, g, h, i;
            for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }, e.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }, e.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }, e.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        }, e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, e.prototype.scrollCallback = function() {
            var a;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, e.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop;) a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
            return b
        }, e.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
        }, e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new b
        }, e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, e
    }()
}).call(this);




/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

! function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";

    function i(i, r, a) {
        function h(t, e, n) {
            var o, r = "$()." + i + '("' + e + '")';
            return t.each(function(t, h) {
                var u = a.data(h, i);
                if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                var d = u[e];
                if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method");
                var l = d.apply(u, n);
                o = void 0 === o ? l : o
            }), void 0 !== o ? o : t
        }

        function u(t, e) {
            t.each(function(t, n) {
                var o = a.data(n, i);
                o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
            })
        }
        a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = o.call(arguments, 1);
                return h(this, t, e)
            }
            return u(this, t), this
        }, n(a))
    }

    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var o = Array.prototype.slice,
        r = t.console,
        s = "undefined" == typeof r ? function() {} : function(t) {
            r.error(t)
        };
    return n(e || t.jQuery), i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[t] = i[t] || {};
            return n[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                var r = i[o],
                    s = n && n[r];
                s && (this.off(t, r), delete n[r]), r.apply(this, e)
            }
            return this
        }
    }, e.allOff = function() {
        delete this._events, delete this._onceEvents
    }, t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";

    function t(t) {
        var e = parseFloat(t),
            i = -1 == t.indexOf("%") && !isNaN(e);
        return i && e
    }

    function e() {}

    function i() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; u > e; e++) {
            var i = h[e];
            t[i] = 0
        }
        return t
    }

    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
    }

    function o() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var o = n(e);
            s = 200 == Math.round(t(o.width)), r.isBoxSizeOuter = s, i.removeChild(e)
        }
    }

    function r(e) {
        if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var r = n(e);
            if ("none" == r.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; u > l; l++) {
                var c = h[l],
                    f = r[c],
                    m = parseFloat(f);
                a[c] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight,
                g = a.paddingTop + a.paddingBottom,
                y = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom,
                _ = a.borderLeftWidth + a.borderRightWidth,
                z = a.borderTopWidth + a.borderBottomWidth,
                E = d && s,
                b = t(r.width);
            b !== !1 && (a.width = b + (E ? 0 : p + _));
            var x = t(r.height);
            return x !== !1 && (a.height = x + (E ? 0 : g + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (g + z), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a
        }
    }
    var s, a = "undefined" == typeof console ? e : function(t) {
            console.error(t)
        },
        h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        u = h.length,
        d = !1;
    return r
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i],
                o = n + "MatchesSelector";
            if (t[o]) return o
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function(t, e) {
        return (t % e + e) % e
    };
    var n = Array.prototype.slice;
    i.makeArray = function(t) {
        if (Array.isArray(t)) return t;
        if (null === t || void 0 === t) return [];
        var e = "object" == typeof t && "number" == typeof t.length;
        return e ? n.call(t) : [t]
    }, i.removeFrom = function(t, e) {
        var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
    }, i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body;)
            if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var o = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!n) return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
            }
        }), o
    }, i.debounceMethod = function(t, e, i) {
        i = i || 100;
        var n = t.prototype[e],
            o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            clearTimeout(t);
            var e = arguments,
                r = this;
            this[o] = setTimeout(function() {
                n.apply(r, e), delete r[o]
            }, i)
        }
    }, i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var o = t.console;
    return i.htmlInit = function(e, n) {
        i.docReady(function() {
            var r = i.toDashed(n),
                s = "data-" + r,
                a = document.querySelectorAll("[" + s + "]"),
                h = document.querySelectorAll(".js-" + r),
                u = i.makeArray(a).concat(i.makeArray(h)),
                d = s + "-options",
                l = t.jQuery;
            u.forEach(function(t) {
                var i, r = t.getAttribute(s) || t.getAttribute(d);
                try {
                    i = r && JSON.parse(r)
                } catch (a) {
                    return void(o && o.error("Error parsing " + s + " on " + t.className + ": " + a))
                }
                var h = new e(t, i);
                l && l.data(t, n, h)
            })
        })
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";

    function i(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function n(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }

    function o(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var r = document.documentElement.style,
        s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
        h = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[s],
        u = {
            transform: a,
            transition: s,
            transitionDuration: s + "Duration",
            transitionProperty: s + "Property",
            transitionDelay: s + "Delay"
        },
        d = n.prototype = Object.create(t.prototype);
    d.constructor = n, d._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, d.getSize = function() {
        this.size = e(this.element)
    }, d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var n = u[i] || i;
            e[n] = t[i]
        }
    }, d.getPosition = function() {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            n = t[e ? "left" : "right"],
            o = t[i ? "top" : "bottom"],
            r = parseFloat(n),
            s = parseFloat(o),
            a = this.layout.size; - 1 != n.indexOf("%") && (r = r / 100 * a.width), -1 != o.indexOf("%") && (s = s / 100 * a.height), r = isNaN(r) ? 0 : r, s = isNaN(s) ? 0 : s, r -= e ? a.paddingLeft : a.paddingRight, s -= i ? a.paddingTop : a.paddingBottom, this.position.x = r, this.position.y = s
    }, d.layoutPosition = function() {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            o = i ? "paddingLeft" : "paddingRight",
            r = i ? "left" : "right",
            s = i ? "right" : "left",
            a = this.position.x + t[o];
        e[r] = this.getXValue(a), e[s] = "";
        var h = n ? "paddingTop" : "paddingBottom",
            u = n ? "top" : "bottom",
            d = n ? "bottom" : "top",
            l = this.position.y + t[h];
        e[u] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, d.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, d.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
            n = this.position.y,
            o = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e), o && !this.isTransitioning) return void this.layoutPosition();
        var r = t - i,
            s = e - n,
            a = {};
        a.transform = this.getTranslate(r, s), this.transition({
            to: a,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop");
        return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, d.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
        this.position.x = parseFloat(t), this.position.y = parseFloat(e)
    }, d._nonTransition = function(t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var l = "opacity," + o(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(h, this, !1)
        }
    }, d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }, d.onotransitionend = function(t) {
        this.ontransitionend(t)
    };
    var c = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn,
                n = c[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                var o = e.onEnd[n];
                o.call(this), delete e.onEnd[n]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, d.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1
    }, d._removeStyles = function(t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var f = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function() {
        this.css(f)
    }, d.stagger = function(t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, d.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, d.remove = function() {
        return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, d.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, d.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, d.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, n
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r) {
        return e(t, i, n, o, r)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, o) {
    "use strict";

    function r(t, e) {
        var i = n.getQueryElement(t);
        if (!i) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
        var o = ++l;
        this.element.outlayerGUID = o, c[o] = this, this._create();
        var r = this._getOption("initLayout");
        r && this.layout()
    }

    function s(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            n = e && e[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var o = m[n] || 1;
        return i * o
    }
    var h = t.console,
        u = t.jQuery,
        d = function() {},
        l = 0,
        c = {};
    r.namespace = "outlayer", r.Item = o, r.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var f = r.prototype;
    n.extend(f, e.prototype), f.option = function(t) {
        n.extend(this.options, t)
    }, f._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, f._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }, f.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, f._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
            var r = e[o],
                s = new i(r, this);
            n.push(s)
        }
        return n
    }, f._filterFindItemElements = function(t) {
        return n.filterFindElements(t, this.options.itemSelector)
    }, f.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }, f.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, f._init = f.layout, f._resetLayout = function() {
        this.getSize()
    }, f.getSize = function() {
        this.size = i(this.element)
    }, f._getMeasurement = function(t, e) {
        var n, o = this.options[t];
        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
    }, f.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, f._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }, f._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
            }, this), this._processLayoutQueue(i)
        }
    }, f._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, f._processLayoutQueue = function(t) {
        this.updateStagger(), t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, f.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
    }, f._positionItem = function(t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
    }, f._postLayout = function() {
        this.resizeContainer()
    }, f.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, f._getContainerSize = d, f._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, f._emitCompleteOnItems = function(t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e])
        }

        function n() {
            s++, s == r && i()
        }
        var o = this,
            r = e.length;
        if (!e || !r) return void i();
        var s = 0;
        e.forEach(function(e) {
            e.once(t, n)
        })
    }, f.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), u)
            if (this.$element = this.$element || u(this.element), e) {
                var o = u.Event(e);
                o.type = t, this.$element.trigger(o, i)
            } else this.$element.trigger(t, i)
    }, f.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, f.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, f.stamp = function(t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, f.unstamp = function(t) {
        t = this._find(t), t && t.forEach(function(t) {
            n.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, f._find = function(t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
    }, f._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, f._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, f._manageStamp = d, f._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
            n = this._boundingRect,
            o = i(t),
            r = {
                left: e.left - n.left - o.marginLeft,
                top: e.top - n.top - o.marginTop,
                right: n.right - e.right - o.marginRight,
                bottom: n.bottom - e.bottom - o.marginBottom
            };
        return r
    }, f.handleEvent = n.handleEvent, f.bindResize = function() {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, f.unbindResize = function() {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, f.onresize = function() {
        this.resize()
    }, n.debounceMethod(r, "onresize", 100), f.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, f.needsResizeLayout = function() {
        var t = i(this.element),
            e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, f.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, f.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, f.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, f.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.reveal()
            })
        }
    }, f.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.hide()
            })
        }
    }, f.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, f.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }, f.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, f.getItems = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, f.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
            t.remove(), n.removeFrom(this.items, t)
        }, this)
    }, f.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete c[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
    }, r.data = function(t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && c[e]
    }, r.create = function(t, e) {
        var i = s(r);
        return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
    };
    var m = {
        ms: 1,
        s: 1e3
    };
    return r.Item = o, r
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return n._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, n.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter,
            o = this.containerWidth + this.gutter,
            r = o / n,
            s = n - o % n,
            a = s && 1 > s ? "round" : "floor";
        r = Math[a](r), this.cols = Math.max(r, 1)
    }, n.getContainerWidth = function() {
        var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            n = e(i);
        this.containerWidth = n && n.innerWidth
    }, n._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = e && 1 > e ? "round" : "ceil",
            n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var o = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", r = this[o](n, t), s = {
                x: this.columnWidth * r.col,
                y: r.y
            }, a = r.y + t.size.outerHeight, h = n + r.col, u = r.col; h > u; u++) this.colYs[u] = a;
        return s
    }, n._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t),
            i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    }, n._getTopColGroup = function(t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) e[n] = this._getColGroupY(n, t);
        return e
    }, n._getColGroupY = function(t, e) {
        if (2 > e) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }, n._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols,
            n = t > 1 && i + t > this.cols;
        i = n ? 0 : i;
        var o = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = o ? i + t : this.horizontalColIndex, {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }, n._manageStamp = function(t) {
        var i = e(t),
            n = this._getElementOffset(t),
            o = this._getOption("originLeft"),
            r = o ? n.left : n.right,
            s = r + i.outerWidth,
            a = Math.floor(r / this.columnWidth);
        a = Math.max(0, a);
        var h = Math.floor(s / this.columnWidth);
        h -= s % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
        for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++) this.colYs[l] = Math.max(d, this.colYs[l])
    }, n._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, n._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, n.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
});


! function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.Splitting = t()
}(this, function() {
    "use strict"
    var u = document,
        l = u.createTextNode.bind(u)

    function d(n, t, e) {
        n.style.setProperty(t, e)
    }

    function f(n, t) {
        return n.appendChild(t)
    }

    function p(n, t, e, r) {
        var i = u.createElement("span")
        return t && (i.className = t), e && (!r && i.setAttribute("data-" + t, e), i.textContent = e), n && f(n, i) || i
    }

    function h(n, t) {
        return n.getAttribute("data-" + t)
    }

    function m(n, t) {
        return n && 0 != n.length ? n.nodeName ? [n] : [].slice.call(n[0].nodeName ? n : (t || u).querySelectorAll(n)) : []
    }

    function o(n) {
        for (var t = []; n--;) t[n] = []
        return t
    }

    function g(n, t) {
        n && n.some(t)
    }

    function c(t) {
        return function(n) {
            return t[n]
        }
    }
    var a = {}

    function n(n, t, e, r) {
        return {
            by: n,
            depends: t,
            key: e,
            split: r
        }
    }

    function e(n) {
        return function t(e, n, r) {
            var i = r.indexOf(e)
            if (-1 == i) r.unshift(e), g(a[e].depends, function(n) {
                t(n, e, r)
            })
            else {
                var u = r.indexOf(n)
                r.splice(i, 1), r.splice(u, 0, e)
            }
            return r
        }(n, 0, []).map(c(a))
    }

    function t(n) {
        a[n.by] = n
    }

    function v(n, r, i, u, o) {
        n.normalize()
        var c = [],
            a = document.createDocumentFragment()
        u && c.push(n.previousSibling)
        var s = []
        return m(n.childNodes).some(function(n) {
            if (!n.tagName || n.hasChildNodes()) {
                if (n.childNodes && n.childNodes.length) return s.push(n), void c.push.apply(c, v(n, r, i, u, o))
                var t = n.wholeText || "",
                    e = t.trim()
                e.length && (" " === t[0] && s.push(l(" ")), g(e.split(i), function(n, t) {
                    t && o && s.push(p(a, "whitespace", " ", o))
                    var e = p(a, r, n)
                    c.push(e), s.push(e)
                }), " " === t[t.length - 1] && s.push(l(" ")))
            } else s.push(n)
        }), g(s, function(n) {
            f(a, n)
        }), n.innerHTML = "", f(n, a), c
    }
    var s = 0
    var i = "words",
        r = n(i, s, "word", function(n) {
            return v(n, "word", /\s+/, 0, 1)
        }),
        y = "chars",
        w = n(y, [i], "char", function(n, e, t) {
            var r = []
            return g(t[i], function(n, t) {
                r.push.apply(r, v(n, "char", "", e.whitespace && t))
            }), r
        })

    function b(t) {
        var f = (t = t || {}).key
        return m(t.target || "[data-splitting]").map(function(a) {
            var s = a["ðŸŒ"]
            if (!t.force && s) return s
            s = a["ðŸŒ"] = {
                el: a
            }
            var n = e(t.by || h(a, "splitting") || y),
                l = function(n, t) {
                    for (var e in t) n[e] = t[e]
                    return n
                }({}, t)
            return g(n, function(n) {
                if (n.split) {
                    var t = n.by,
                        e = (f ? "-" + f : "") + n.key,
                        r = n.split(a, l, s)
                    e && (i = a, c = (o = "--" + e) + "-index", g(u = r, function(n, t) {
                        Array.isArray(n) ? g(n, function(n) {
                            d(n, c, t)
                        }) : d(n, c, t)
                    }), d(i, o + "-total", u.length)), s[t] = r, a.classList.add(t)
                }
                var i, u, o, c
            }), a.classList.add("splitting"), s
        })
    }

    function N(n, t, e) {
        var r = m(t.matching || n.children, n),
            i = {}
        return g(r, function(n) {
            var t = Math.round(n[e]);
            (i[t] || (i[t] = [])).push(n)
        }), Object.keys(i).map(Number).sort(x).map(c(i))
    }

    function x(n, t) {
        return n - t
    }
    b.html = function(n) {
        var t = (n = n || {}).target = p()
        return t.innerHTML = n.content, b(n), t.outerHTML
    }, b.add = t
    var T = n("lines", [i], "line", function(n, t, e) {
            return N(n, {
                matching: e[i]
            }, "offsetTop")
        }),
        L = n("items", s, "item", function(n, t) {
            return m(t.matching || n.children, n)
        }),
        k = n("rows", s, "row", function(n, t) {
            return N(n, t, "offsetTop")
        }),
        A = n("cols", s, "col", function(n, t) {
            return N(n, t, "offsetLeft")
        }),
        C = n("grid", ["rows", "cols"]),
        M = "layout",
        S = n(M, s, s, function(n, t) {
            var e = t.rows = +(t.rows || h(n, "rows") || 1),
                r = t.columns = +(t.columns || h(n, "columns") || 1)
            if (t.image = t.image || h(n, "image") || n.currentSrc || n.src, t.image) {
                var i = m("img", n)[0]
                t.image = i && (i.currentSrc || i.src)
            }
            t.image && d(n, "background-image", "url(" + t.image + ")")
            for (var u = e * r, o = [], c = p(s, "cell-grid"); u--;) {
                var a = p(c, "cell")
                p(a, "cell-inner"), o.push(a)
            }
            return f(n, c), o
        }),
        H = n("cellRows", [M], "row", function(n, t, e) {
            var r = t.rows,
                i = o(r)
            return g(e[M], function(n, t, e) {
                i[Math.floor(t / (e.length / r))].push(n)
            }), i
        }),
        O = n("cellColumns", [M], "col", function(n, t, e) {
            var r = t.columns,
                i = o(r)
            return g(e[M], function(n, t) {
                i[t % r].push(n)
            }), i
        }),
        j = n("cells", ["cellRows", "cellColumns"], "cell", function(n, t, e) {
            return e[M]
        })
    return t(r), t(w), t(T), t(L), t(k), t(A), t(C), t(S), t(H), t(O), t(j), b
})




/*!
 * VERSION: 0.2.1
 * DATE: 2017-01-12
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("easing.CustomEase", ["easing.Ease"], function(x) {
            var C = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                S = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                y = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
                p = /[cLlsS]/g,
                w = "CustomEase only accepts Cubic Bezier data.",
                n = "CustomEase",
                i = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
                r = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47),
                a = function(e) {
                    for (var t = -1 !== (window ? window.location.href : "").indexOf(String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107)) && -1 !== e.indexOf(String.fromCharCode(108, 111, 99, 97, 108, 104, 111, 115, 116)), o = [i, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), String.fromCharCode(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), String.fromCharCode(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), String.fromCharCode(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), String.fromCharCode(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), String.fromCharCode(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), String.fromCharCode(112, 108, 110, 107, 114, 46, 99, 111), String.fromCharCode(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), String.fromCharCode(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), String.fromCharCode(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), String.fromCharCode(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), String.fromCharCode(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 105, 101, 114, 46, 105, 111), String.fromCharCode(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], r = o.length; - 1 < --r;)
                        if (-1 !== e.indexOf(o[r])) return !0;
                    return t && window && window.console && console.log(String.fromCharCode(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + n + String.fromCharCode(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)), t
                }(window ? window.location.host : ""),
                D = function(e, t, o, r, n, i, a, s, h, f, g) {
                    var u, c = (e + o) / 2,
                        d = (t + r) / 2,
                        l = (o + n) / 2,
                        C = (r + i) / 2,
                        p = (n + a) / 2,
                        m = (i + s) / 2,
                        x = (c + l) / 2,
                        S = (d + C) / 2,
                        y = (l + p) / 2,
                        w = (C + m) / 2,
                        v = (x + y) / 2,
                        _ = (S + w) / 2,
                        M = a - e,
                        b = s - t,
                        k = Math.abs((o - a) * b - (r - s) * M),
                        z = Math.abs((n - a) * b - (i - s) * M);
                    return f || (f = [{
                        x: e,
                        y: t
                    }, {
                        x: a,
                        y: s
                    }], g = 1), f.splice(g || f.length - 1, 0, {
                        x: v,
                        y: _
                    }), h * (M * M + b * b) < (k + z) * (k + z) && (u = f.length, D(e, t, c, d, x, S, v, _, h, f, g), D(v, _, y, w, p, m, a, s, h, f, g + 1 + (f.length - u))), f
                },
                s = function(e) {
                    var t = this.lookup[e * this.l | 0] || this.lookup[this.l - 1];
                    return t.nx < e && (t = t.n), t.y + (e - t.x) / t.cx * t.cy
                },
                h = function(e, t, o) {
                    if (this._calcEnd = !0, this.id = e, !a) return window.location.href = "http://" + i + r + "?plugin=" + n + "&source=codepen", !1;
                    e && (x.map[e] = this), this.getRatio = s, this.setData(t, o)
                },
                e = h.prototype = new x;
            return e.constructor = h, e.setData = function(e, t) {
                var o, r, n, i, a, s, h, f, g, u, c = (e = e || "0,0,1,1").match(C),
                    d = 1,
                    l = [];
                if (u = (t = t || {}).precision || 1, this.data = e, this.lookup = [], this.points = l, this.fast = u <= 1, (p.test(e) || -1 !== e.indexOf("M") && -1 === e.indexOf("C")) && (c = function(e) {
                        var t, o, r, n, i, a, s, h, f, g, u, c = (e + "").replace(y, function(e) {
                                var t = +e;
                                return t < 1e-4 && -1e-4 < t ? 0 : t
                            }).match(S) || [],
                            d = [],
                            l = 0,
                            C = 0,
                            p = c.length,
                            m = 2;
                        for (t = 0; t < p; t++)
                            if (f = n, isNaN(c[t]) ? i = (n = c[t].toUpperCase()) !== c[t] : t--, o = +c[t + 1], r = +c[t + 2], i && (o += l, r += C), t || (s = o, h = r), "M" === n) a && a.length < 8 && (d.length -= 1, m = 0), l = s = o, C = h = r, a = [o, r], m = 2, d.push(a), t += 2, n = "L";
                            else if ("C" === n) a || (a = [0, 0]), a[m++] = o, a[m++] = r, i || (l = C = 0), a[m++] = l + 1 * c[t + 3], a[m++] = C + 1 * c[t + 4], a[m++] = l += 1 * c[t + 5], a[m++] = C += 1 * c[t + 6], t += 6;
                        else if ("S" === n) "C" === f || "S" === f ? (g = l - a[m - 4], u = C - a[m - 3], a[m++] = l + g, a[m++] = C + u) : (a[m++] = l, a[m++] = C), a[m++] = o, a[m++] = r, i || (l = C = 0), a[m++] = l += 1 * c[t + 3], a[m++] = C += 1 * c[t + 4], t += 4;
                        else {
                            if ("L" !== n && "Z" !== n) throw w;
                            "Z" === n && (o = s, r = h, a.closed = !0), ("L" === n || .5 < Math.abs(l - o) || .5 < Math.abs(C - r)) && (a[m++] = l + (o - l) / 3, a[m++] = C + (r - C) / 3, a[m++] = l + 2 * (o - l) / 3, a[m++] = C + 2 * (r - C) / 3, a[m++] = o, a[m++] = r, "L" === n && (t += 2)), l = o, C = r
                        }
                        return d[0]
                    }(e)), 4 === (o = c.length)) c.unshift(0, 0), c.push(1, 1), o = 8;
                else if ((o - 2) % 6) throw w;
                for (0 == +c[0] && 1 == +c[o - 2] || function(e, t, o) {
                        o || 0 === o || (o = Math.max(+e[e.length - 1], +e[1]));
                        var r, n = -1 * +e[0],
                            i = -o,
                            a = e.length,
                            s = 1 / (+e[a - 2] + n),
                            h = -t || (Math.abs(+e[a - 1] - +e[1]) < .01 * (+e[a - 2] - +e[0]) ? function(e) {
                                var t, o = e.length,
                                    r = 999999999999;
                                for (t = 1; t < o; t += 6) + e[t] < r && (r = +e[t]);
                                return r
                            }(e) + i : +e[a - 1] + i);
                        for (h = h ? 1 / h : -s, r = 0; r < a; r += 2) e[r] = (+e[r] + n) * s, e[r + 1] = (+e[r + 1] + i) * h
                    }(c, t.height, t.originY), this.rawBezier = c, i = 2; i < o; i += 6) r = {
                    x: +c[i - 2],
                    y: +c[i - 1]
                }, n = {
                    x: +c[i + 4],
                    y: +c[i + 5]
                }, l.push(r, n), D(r.x, r.y, +c[i], +c[i + 1], +c[i + 2], +c[i + 3], n.x, n.y, 1 / (2e5 * u), l, l.length - 1);
                for (o = l.length, i = 0; i < o; i++) h = l[i], f = l[i - 1] || h, h.x > f.x || f.y !== h.y && f.x === h.x || h === f ? (f.cx = h.x - f.x, f.cy = h.y - f.y, f.n = h, f.nx = h.x, this.fast && 1 < i && 2 < Math.abs(f.cy / f.cx - l[i - 2].cy / l[i - 2].cx) && (this.fast = !1), f.cx < d && (f.cx ? d = f.cx : (f.cx = .001, i === o - 1 && (f.x -= .001, d = Math.min(d, .001), this.fast = !1)))) : (l.splice(i--, 1), o--);
                if (o = 1 / d + 1 | 0, a = 1 / (this.l = o), h = l[s = 0], this.fast) {
                    for (i = 0; i < o; i++) g = i * a, h.nx < g && (h = l[++s]), r = h.y + (g - h.x) / h.cx * h.cy, this.lookup[i] = {
                        x: g,
                        cx: a,
                        y: r,
                        cy: 0,
                        nx: 9
                    }, i && (this.lookup[i - 1].cy = r - this.lookup[i - 1].y);
                    this.lookup[o - 1].cy = l[l.length - 1].y - r
                } else {
                    for (i = 0; i < o; i++) h.nx < i * a && (h = l[++s]), this.lookup[i] = h;
                    s < l.length - 1 && (this.lookup[i - 1] = l[l.length - 2])
                }
                return this._calcEnd = 1 !== l[l.length - 1].y || 0 !== l[0].y, this
            }, e.getRatio = s, e.getSVGData = function(e) {
                return h.getSVGData(this, e)
            }, h.create = function(e, t, o) {
                return new h(e, t, o)
            }, h.version = "0.2.1", h.bezierToPoints = D, h.get = function(e) {
                return x.map[e]
            }, h.getSVGData = function(e, t) {
                var o, r, n, i, a, s, h, f, g, u, c = 1e3,
                    d = (t = t || {}).width || 100,
                    l = t.height || 100,
                    C = t.x || 0,
                    p = (t.y || 0) + l,
                    m = t.path;
                if (t.invert && (l = -l, p = 0), (e = e.getRatio ? e : x.map[e] || console.log("No ease found: ", e)).rawBezier) {
                    for (o = [], h = e.rawBezier.length, n = 0; n < h; n += 2) o.push(((C + e.rawBezier[n] * d) * c | 0) / c + "," + ((p + e.rawBezier[n + 1] * -l) * c | 0) / c);
                    o[0] = "M" + o[0], o[1] = "C" + o[1]
                } else
                    for (o = ["M" + C + "," + p], i = 1 / (h = Math.max(5, 200 * (t.precision || 1))), f = 5 / (h += 2), g = ((C + i * d) * c | 0) / c, r = ((u = ((p + e.getRatio(i) * -l) * c | 0) / c) - p) / (g - C), n = 2; n < h; n++) a = ((C + n * i * d) * c | 0) / c, s = ((p + e.getRatio(n * i) * -l) * c | 0) / c, (Math.abs((s - u) / (a - g) - r) > f || n === h - 1) && (o.push(g + "," + u), r = (s - u) / (a - g)), g = a, u = s;
                return m && ("string" == typeof m ? document.querySelector(m) : m).setAttribute("d", o.join(" ")), o.join(" ")
            }, h
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope).CustomEase
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = t())
    }();



/*!
 * VERSION: 1.18.0
 * DATE: 2015-09-05
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    r = function(t, e, i) {
                        var s, r, n = t.cycle;
                        for (s in n) r = n[s], t[s] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                        delete t.cycle
                    },
                    n = function(t, e, s) {
                        i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = n.prototype.render
                    },
                    a = 1e-10,
                    o = i._internals,
                    l = o.isSelector,
                    h = o.isArray,
                    _ = n.prototype = i.to({}, .1, {}),
                    u = [];
                n.version = "1.18.0", _.constructor = n, _.kill()._gc = !1, n.killTweensOf = n.killDelayedCallsTo = i.killTweensOf, n.getTweensOf = i.getTweensOf, n.lagSmoothing = i.lagSmoothing, n.ticker = i.ticker, n.render = i.render, _.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, _.updateTo = function(t, e) {
                    var s, r = this.ratio,
                        n = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (s in t) this.vars[s] = t[s];
                    if (this._initted || n)
                        if (e) this._initted = !1, n && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var a = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                    } else if (this._time > 0 || n) {
                        this._initted = !1, this._init();
                        for (var o, l = 1 / (1 - r), h = this._firstPT; h;) o = h.s + h.c, h.c *= l, h.s = o - h.c, h = h._next
                    }
                    return this
                }, _.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var s, r, n, l, h, _, u, c, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        m = this._totalTime,
                        d = this._cycle,
                        g = this._duration,
                        v = this._rawPrevTime;
                    if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > v || v === a) && v !== t && (i = !0, v > a && (r = "onReverseComplete")), this._rawPrevTime = c = !e || t || v === t ? t : a)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === g && v > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = c = !e || t || v === t ? t : a)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = g + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / g, _ = this._easeType, u = this._easePower, (1 === _ || 3 === _ && h >= .5) && (h = 1 - h), 3 === _ && (h *= 2), 1 === u ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h), this.ratio = 1 === _ ? 1 - h : 2 === _ ? h : .5 > this._time / g ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / g)), p === this._time && !i && d === this._cycle) return m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")), void 0;
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = p, this._totalTime = m, this._rawPrevTime = v, this._cycle = d, o.lazyTweens.push(this), this._lazy = [t, e], void 0;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / g) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || s) && this._callback("onUpdate")), this._cycle !== d && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === g && this._rawPrevTime === a && c !== a && (this._rawPrevTime = 0))
                }, n.to = function(t, e, i) {
                    return new n(t, e, i)
                }, n.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new n(t, e, i)
                }, n.fromTo = function(t, e, i, s) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new n(t, e, s)
                }, n.staggerTo = n.allTo = function(t, e, a, o, _, c, f) {
                    o = o || 0;
                    var p, m, d, g, v = a.delay || 0,
                        y = [],
                        T = function() {
                            a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), _.apply(f || a.callbackScope || this, c || u)
                        },
                        x = a.cycle,
                        w = a.startAt && a.startAt.cycle;
                    for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t))), t = t || [], 0 > o && (t = s(t), t.reverse(), o *= -1), p = t.length - 1, d = 0; p >= d; d++) {
                        m = {};
                        for (g in a) m[g] = a[g];
                        if (x && r(m, t, d), w) {
                            w = m.startAt = {};
                            for (g in a.startAt) w[g] = a.startAt[g];
                            r(m.startAt, t, d)
                        }
                        m.delay = v, d === p && _ && (m.onComplete = T), y[d] = new n(t[d], e, m), v += o
                    }
                    return y
                }, n.staggerFrom = n.allFrom = function(t, e, i, s, r, a, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, n.staggerTo(t, e, i, s, r, a, o)
                }, n.staggerFromTo = n.allFromTo = function(t, e, i, s, r, a, o, l) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, n.staggerTo(t, e, s, r, a, o, l)
                }, n.delayedCall = function(t, e, i, s, r) {
                    return new n(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: s,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, n.set = function(t, e) {
                    return new n(t, 0, e)
                }, n.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var c = function(t, e) {
                        for (var s = [], r = 0, n = t._first; n;) n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(c(n, e)), r = s.length), n = n._next;
                        return s
                    },
                    f = n.getAllTweens = function(e) {
                        return c(t._rootTimeline, e).concat(c(t._rootFramesTimeline, e))
                    };
                n.killAll = function(t, i, s, r) {
                    null == i && (i = !0), null == s && (s = !0);
                    var n, a, o, l = f(0 != r),
                        h = l.length,
                        _ = i && s && r;
                    for (o = 0; h > o; o++) a = l[o], (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }, n.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var r, a, _, u, c, f = o.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t)), h(t))
                            for (u = t.length; --u > -1;) n.killChildTweensOf(t[u], e);
                        else {
                            r = [];
                            for (_ in f)
                                for (a = f[_].target.parentNode; a;) a === t && (r = r.concat(f[_].tweens)), a = a.parentNode;
                            for (c = r.length, u = 0; c > u; u++) e && r[u].totalTime(r[u].totalDuration()), r[u]._enabled(!1, !1)
                        }
                    }
                };
                var p = function(t, i, s, r) {
                    i = i !== !1, s = s !== !1, r = r !== !1;
                    for (var n, a, o = f(r), l = i && s && r, h = o.length; --h > -1;) a = o[h], (l || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
                };
                return n.pauseAll = function(t, e, i) {
                    p(!0, t, e, i)
                }, n.resumeAll = function(t, e, i) {
                    p(!1, t, e, i)
                }, n.globalTimeScale = function(e) {
                    var s = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || a, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
                }, _.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, _.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, _.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, _.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, _.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, _.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, _.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, _.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, n
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, s, r = this.vars;
                        for (s in r) i = r[s], l(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                        l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    n = i._internals,
                    a = s._internals = {},
                    o = n.isSelector,
                    l = n.isArray,
                    h = n.lazyTweens,
                    _ = n.lazyRender,
                    u = _gsScope._gsDefine.globals,
                    c = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    f = function(t, e, i) {
                        var s, r, n = t.cycle;
                        for (s in n) r = n[s], t[s] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                        delete t.cycle
                    },
                    p = a.pauseCallback = function() {},
                    m = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    d = s.prototype = new e;
                return s.version = "1.18.0", d.constructor = s, d.kill()._gc = d._forcingPlayhead = d._hasPause = !1, d.to = function(t, e, s, r) {
                    var n = s.repeat && u.TweenMax || i;
                    return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
                }, d.from = function(t, e, s, r) {
                    return this.add((s.repeat && u.TweenMax || i).from(t, e, s), r)
                }, d.fromTo = function(t, e, s, r, n) {
                    var a = r.repeat && u.TweenMax || i;
                    return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
                }, d.staggerTo = function(t, e, r, n, a, l, h, _) {
                    var u, p, d = new s({
                            onComplete: l,
                            onCompleteParams: h,
                            callbackScope: _,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        g = r.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = m(t)), n = n || 0, 0 > n && (t = m(t), t.reverse(), n *= -1), p = 0; t.length > p; p++) u = c(r), u.startAt && (u.startAt = c(u.startAt), u.startAt.cycle && f(u.startAt, t, p)), g && f(u, t, p), d.to(t[p], e, u, p * n);
                    return this.add(d, a)
                }, d.staggerFrom = function(t, e, i, s, r, n, a, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
                }, d.staggerFromTo = function(t, e, i, s, r, n, a, o, l) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, l)
                }, d.call = function(t, e, s, r) {
                    return this.add(i.delayedCall(0, t, e, s), r)
                }, d.set = function(t, e, s) {
                    return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
                }, s.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, n, a = new s(t),
                        o = a._timeline;
                    for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
                    return o.add(a, 0), a
                }, d.add = function(r, n, a, o) {
                    var h, _, u, c, f, p;
                    if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && l(r)) {
                            for (a = a || "normal", o = o || 0, h = n, _ = r.length, u = 0; _ > u; u++) l(c = r[u]) && (c = new s({
                                tweens: c
                            })), this.add(c, h), "string" != typeof c && "function" != typeof c && ("sequence" === a ? h = c._startTime + c.totalDuration() / c._timeScale : "start" === a && (c._startTime -= c.delay())), h += o;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, n);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (f = this, p = f.rawTime() > r._startTime; f._timeline;) p && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
                    return this
                }, d.remove = function(e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var s = e.length; --s > -1;) this.remove(e[s]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, d._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var s = this._last;
                    return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, d.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, d.insert = d.insertMultiple = function(t, e, i, s) {
                    return this.add(t, e || 0, i, s)
                }, d.appendMultiple = function(t, e, i, s) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
                }, d.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, d.addPause = function(t, e, s, r) {
                    var n = i.delayedCall(0, p, s, r || this);
                    return n.vars.onComplete = n.vars.onReverseComplete = e, n.data = "isPause", this._hasPause = !0, this.add(n, t)
                }, d.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, d.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, d._parseTimeOrLabel = function(e, i, s, r) {
                    var n;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && l(r)))
                        for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
                    }
                    return Number(e) + i
                }, d.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, d.stop = function() {
                    return this.paused(!0)
                }, d.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, d.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, d.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, a, o, l, u, c = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        p = this._startTime,
                        m = this._timeScale,
                        d = this._paused;
                    if (t >= c) this._totalTime = this._time = c, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = c + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = n = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
                            t = 0, this._initted || (l = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= f)
                                for (s = this._first; s && t >= s._startTime && !u;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (u = s), s = s._next;
                            else
                                for (s = this._last; s && s._startTime >= t && !u;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (u = s), s = s._prev;
                            u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== f && this._first || i || l || u) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= f)
                            for (s = this._first; s && (a = s._next, !this._paused || d);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (u === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        else
                            for (s = this._last; s && (a = s._prev, !this._paused || d);) {
                                if (s._active || f >= s._startTime && !s._paused && !s._gc) {
                                    if (u === s) {
                                        for (u = s._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                                        u = null, this.pause()
                                    }
                                    s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                                }
                                s = a
                            }
                        this._onUpdate && (e || (h.length && _(), this._callback("onUpdate"))), o && (this._gc || (p === this._startTime || m !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (n && (h.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                    }
                }, d._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, d.getChildren = function(t, e, s, r) {
                    r = r || -9999999999;
                    for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
                    return n
                }, d.getTweensOf = function(t, e) {
                    var s, r, n = this._gc,
                        a = [],
                        o = 0;
                    for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
                    return n && this._enabled(!1, !0), a
                }, d.recent = function() {
                    return this._recent
                }, d._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, d.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (s in n) n[s] >= i && (n[s] += t);
                    return this._uncache(!0)
                }, d._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
                    return r
                }, d.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, d.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, d._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                    return e.prototype._enabled.call(this, t, i)
                }, d.totalTime = function() {
                    this._forcingPlayhead = !0;
                    var e = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, e
                }, d.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, d.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                            this._duration = this._totalDuration = s, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, d.paused = function(e) {
                    if (!e)
                        for (var i = this._first, s = this._time; i;) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, d.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, d.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, s
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var s = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    r = 1e-10,
                    n = e._internals,
                    a = n.lazyTweens,
                    o = n.lazyRender,
                    l = new i(null, null, 1, 0),
                    h = s.prototype = new t;
                return h.constructor = s, h.kill()._gc = !1, s.version = "1.18.0", h.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, h.addCallback = function(t, i, s, r) {
                    return this.add(e.delayedCall(0, t, s, r), i)
                }, h.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
                    return this
                }, h.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, h.tweenTo = function(t, i) {
                    i = i || {};
                    var s, r, n, a = {
                        ease: l,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in i) a[r] = i[r];
                    return a.time = this._parseTimeOrLabel(t), s = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, n = new e(this, s, a), a.onStart = function() {
                        n.target.paused(!0), n.vars.time !== n.target.time() && s === n.duration() && n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale), i.onStart && n._callback("onStart")
                    }, n
                }, h.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var s = this.tweenTo(e, i);
                    return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
                }, h.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, l, h, _, u, c, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._duration,
                        m = this._time,
                        d = this._totalTime,
                        g = this._startTime,
                        v = this._timeScale,
                        y = this._rawPrevTime,
                        T = this._paused,
                        x = this._cycle;
                    if (t >= f) this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (n = !0, h = "onComplete", _ = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (_ = !0, y > r && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = p, t = p + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === p && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (h = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (_ = n = !0, h = "onReverseComplete") : y >= 0 && this._first && (_ = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = p || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
                            t = 0, this._initted || (_ = !0)
                        }
                    else if (0 === p && 0 > y && (_ = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = p + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, t = p + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if (t = this._time, t >= m)
                            for (s = this._first; s && t >= s._startTime && !c;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (c = s), s = s._next;
                        else
                            for (s = this._last; s && s._startTime >= t && !c;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (c = s), s = s._prev;
                        c && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== x && !this._locked) {
                        var w = this._yoyo && 0 !== (1 & x),
                            b = w === (this._yoyo && 0 !== (1 & this._cycle)),
                            P = this._totalTime,
                            k = this._cycle,
                            S = this._rawPrevTime,
                            R = this._time;
                        if (this._totalTime = x * p, x > this._cycle ? w = !w : this._totalTime += p, this._time = m, this._rawPrevTime = 0 === p ? y - 1e-4 : y, this._cycle = x, this._locked = !0, m = w ? 0 : p, this.render(m, e, 0 === p), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), b && (m = w ? p + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !T) return;
                        this._time = R, this._totalTime = P, this._cycle = k, this._rawPrevTime = S
                    }
                    if (!(this._time !== m && this._first || i || _ || c)) return d !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")), void 0;
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), this._time >= m)
                        for (s = this._first; s && (l = s._next, !this._paused || T);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (c === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
                    else
                        for (s = this._last; s && (l = s._prev, !this._paused || T);) {
                            if (s._active || m >= s._startTime && !s._paused && !s._gc) {
                                if (c === s) {
                                    for (c = s._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i), c = c._prev;
                                    c = null, this.pause()
                                }
                                s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                            }
                            s = l
                        }
                    this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))), h && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (n && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
                }, h.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var s, r, n = [],
                        a = this.getChildren(t, e, i),
                        o = 0,
                        l = a.length;
                    for (s = 0; l > s; s++) r = a[s], r.isActive() && (n[o++] = r);
                    return n
                }, h.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        s = i.length;
                    for (e = 0; s > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, h.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null
                }, h.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, h.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, h.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, h.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, h.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, h.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, h.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, s
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    s = [],
                    r = {},
                    n = _gsScope._gsDefine.globals,
                    a = function(t, e, i, s) {
                        this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
                    },
                    o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function(t, e, i, s) {
                        var r = {
                                a: t
                            },
                            n = {},
                            a = {},
                            o = {
                                c: s
                            },
                            l = (t + e) / 2,
                            h = (e + i) / 2,
                            _ = (i + s) / 2,
                            u = (l + h) / 2,
                            c = (h + _) / 2,
                            f = (c - u) / 8;
                        return r.b = l + (t - l) / 4, n.b = u + f, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + c) / 2, a.b = c - f, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
                    },
                    h = function(t, r, n, a, o) {
                        var h, _, u, c, f, p, m, d, g, v, y, T, x, w = t.length - 1,
                            b = 0,
                            P = t[0].a;
                        for (h = 0; w > h; h++) f = t[b], _ = f.a, u = f.d, c = t[b + 1].d, o ? (y = e[h], T = i[h], x = .25 * (T + y) * r / (a ? .5 : s[h] || .5), p = u - (u - _) * (a ? .5 * r : 0 !== y ? x / y : 0), m = u + (c - u) * (a ? .5 * r : 0 !== T ? x / T : 0), d = u - (p + ((m - p) * (3 * y / (y + T) + .5) / 4 || 0))) : (p = u - .5 * (u - _) * r, m = u + .5 * (c - u) * r, d = u - (p + m) / 2), p += d, m += d, f.c = g = p, f.b = 0 !== h ? P : P = f.a + .6 * (f.c - f.a), f.da = u - _, f.ca = g - _, f.ba = P - _, n ? (v = l(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
                        f = t[b], f.b = P, f.c = P + .4 * (f.d - P), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = P - f.a, n && (v = l(f.a, P, f.c, f.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
                    },
                    _ = function(t, s, r, n) {
                        var o, l, h, _, u, c, f = [];
                        if (n)
                            for (t = [n].concat(t), l = t.length; --l > -1;) "string" == typeof(c = t[l][s]) && "=" === c.charAt(1) && (t[l][s] = n[s] + Number(c.charAt(0) + c.substr(2)));
                        if (o = t.length - 2, 0 > o) return f[0] = new a(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s]), f;
                        for (l = 0; o > l; l++) h = t[l][s], _ = t[l + 1][s], f[l] = new a(h, 0, 0, _), r && (u = t[l + 2][s], e[l] = (e[l] || 0) + (_ - h) * (_ - h), i[l] = (i[l] || 0) + (u - _) * (u - _));
                        return f[l] = new a(t[l][s], 0, 0, t[l + 1][s]), f
                    },
                    u = function(t, n, a, l, u, c) {
                        var f, p, m, d, g, v, y, T, x = {},
                            w = [],
                            b = c || t[0];
                        u = "string" == typeof u ? "," + u + "," : o, null == n && (n = 1);
                        for (p in t[0]) w.push(p);
                        if (t.length > 1) {
                            for (T = t[t.length - 1], y = !0, f = w.length; --f > -1;)
                                if (p = w[f], Math.abs(b[p] - T[p]) > .05) {
                                    y = !1;
                                    break
                                }
                            y && (t = t.concat(), c && t.unshift(c), t.push(t[1]), c = t[t.length - 3])
                        }
                        for (e.length = i.length = s.length = 0, f = w.length; --f > -1;) p = w[f], r[p] = -1 !== u.indexOf("," + p + ","), x[p] = _(t, p, r[p], c);
                        for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                        if (!l) {
                            for (f = w.length; --f > -1;)
                                if (r[p])
                                    for (m = x[w[f]], v = m.length - 1, d = 0; v > d; d++) g = m[d + 1].da / i[d] + m[d].da / e[d], s[d] = (s[d] || 0) + g * g;
                            for (f = s.length; --f > -1;) s[f] = Math.sqrt(s[f])
                        }
                        for (f = w.length, d = a ? 4 : 1; --f > -1;) p = w[f], m = x[p], h(m, n, a, l, r[p]), y && (m.splice(0, d), m.splice(m.length - d, d));
                        return x
                    },
                    c = function(t, e, i) {
                        e = e || "soft";
                        var s, r, n, o, l, h, _, u, c, f, p, m = {},
                            d = "cubic" === e ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length) throw "invalid Bezier data";
                        for (c in t[0]) v.push(c);
                        for (h = v.length; --h > -1;) {
                            for (c = v[h], m[c] = l = [], f = 0, u = t.length, _ = 0; u > _; _++) s = null == i ? t[_][c] : "string" == typeof(p = t[_][c]) && "=" === p.charAt(1) ? i[c] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && _ > 1 && u - 1 > _ && (l[f++] = (s + l[f - 2]) / 2), l[f++] = s;
                            for (u = f - d + 1, f = 0, _ = 0; u > _; _ += d) s = l[_], r = l[_ + 1], n = l[_ + 2], o = 2 === d ? 0 : l[_ + 3], l[f++] = p = 3 === d ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                            l.length = f
                        }
                        return m
                    },
                    f = function(t, e, i) {
                        for (var s, r, n, a, o, l, h, _, u, c, f, p = 1 / i, m = t.length; --m > -1;)
                            for (c = t[m], n = c.a, a = c.d - n, o = c.c - n, l = c.b - n, s = r = 0, _ = 1; i >= _; _++) h = p * _, u = 1 - h, s = r - (r = (h * h * a + 3 * u * (h * o + u * l)) * h), f = m * i + _ - 1, e[f] = (e[f] || 0) + s * s
                    },
                    p = function(t, e) {
                        e = e >> 0 || 6;
                        var i, s, r, n, a = [],
                            o = [],
                            l = 0,
                            h = 0,
                            _ = e - 1,
                            u = [],
                            c = [];
                        for (i in t) f(t[i], a, e);
                        for (r = a.length, s = 0; r > s; s++) l += Math.sqrt(a[s]), n = s % e, c[n] = l, n === _ && (h += l, n = s / e >> 0, u[n] = c, o[n] = h, l = 0, c = []);
                        return {
                            length: h,
                            lengths: o,
                            segments: u
                        }
                    },
                    m = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var s, r, n, a, o, l = e.values || [],
                                h = {},
                                _ = l[0],
                                f = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = f ? f instanceof Array ? f : [
                                ["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]
                            ] : null;
                            for (s in _) this._props.push(s);
                            for (n = this._props.length; --n > -1;) s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], h[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || h[s] !== l[0][s] && (o = h);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : c(l, e.type, h), this._segCount = this._beziers[s].length, this._timeRes) {
                                var m = p(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (f = this._autoRotate)
                                for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), n = f.length; --n > -1;) {
                                    for (a = 0; 3 > a; a++) s = f[n][a], this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
                                    s = f[n][2], this._initialRotations[n] = this._func[s] ? this._func[s].call(this._target) : this._target[s]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, s, r, n, a, o, l, h, _, u, c = this._segCount,
                                f = this._func,
                                p = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && c - 1 > r) {
                                    for (h = c - 1; h > r && e >= (this._l2 = _[++r]););
                                    this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                                } else if (this._l1 > e && r > 0) {
                                    for (; r > 0 && (this._l1 = _[--r]) >= e;);
                                    0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                                    for (h = u.length - 1; h > r && e >= (this._s2 = u[++r]););
                                    this._s1 = u[r - 1], this._si = r
                                } else if (this._s1 > e && r > 0) {
                                    for (; r > 0 && (this._s1 = u[--r]) >= e;);
                                    0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                                }
                                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? c - 1 : c * e >> 0, o = (e - i * (1 / c)) * c;
                            for (s = 1 - o, r = this._props.length; --r > -1;) n = this._props[r], a = this._beziers[n][i], l = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[n] && (l = Math.round(l)), f[n] ? p[n](l) : p[n] = l;
                            if (this._autoRotate) {
                                var d, g, v, y, T, x, w, b = this._autoRotate;
                                for (r = b.length; --r > -1;) n = b[r][2], x = b[r][3] || 0, w = b[r][4] === !0 ? 1 : t, a = this._beziers[b[r][0]], d = this._beziers[b[r][1]], a && d && (a = a[i], d = d[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = d.a + (d.b - d.a) * o, T = d.b + (d.c - d.b) * o, v += (T - v) * o, T += (d.c + (d.d - d.c) * o - T) * o, l = m ? Math.atan2(T - v, y - g) * w + x : this._initialRotations[r], f[n] ? p[n](l) : p[n] = l)
                            }
                        }
                    }),
                    d = m.prototype;
                m.bezierThrough = u, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
                    return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, m._cssRegister = function() {
                    var t = n.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            s = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, n, a, o, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new m;
                                var h, _, u, c = e.values,
                                    f = c.length - 1,
                                    p = [],
                                    d = {};
                                if (0 > f) return o;
                                for (h = 0; f >= h; h++) u = i(t, c[h], a, o, l, f !== h), p[h] = u.end;
                                for (_ in e) d[_] = e[_];
                                return d.values = p, o = new r(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = l, o.setRatio = s, 0 === d.autoRotate && (d.autoRotate = !0), !d.autoRotate || d.autoRotate instanceof Array || (h = d.autoRotate === !0 ? 0 : Number(d.autoRotate), d.autoRotate = null != u.end.left ? [
                                    ["left", "top", "rotation", h, !1]
                                ] : null != u.end.x ? [
                                    ["x", "y", "rotation", h, !1]
                                ] : !1), d.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform), l._onInitTween(u.proxy, d, a._tween), o
                            }
                        })
                    }
                }, d._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, s = i.length; --s > -1;)(t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
                }, d._kill = function(t) {
                    var e, i, s = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, s, r, n, a = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    },
                    o = _gsScope._gsDefine.globals,
                    l = {},
                    h = a.prototype = new t("css");
                h.constructor = a, a.version = "1.18.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, h = "px", a.suffixMap = {
                    top: h,
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h,
                    lineHeight: ""
                };
                var _, u, c, f, p, m, d = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    T = /(?:\d|\-|\+|=|#|\.)*/g,
                    x = /opacity *= *([^)]*)/i,
                    w = /opacity:([^;]*)/i,
                    b = /alpha\(opacity *=.+?\)/i,
                    P = /^(rgb|hsl)/,
                    k = /([A-Z])/g,
                    S = /-([a-z])/gi,
                    R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    O = function(t, e) {
                        return e.toUpperCase()
                    },
                    A = /(?:Left|Right|Width)/i,
                    C = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    M = /,(?=[^\)]*(?:\(|$))/gi,
                    z = Math.PI / 180,
                    F = 180 / Math.PI,
                    I = {},
                    E = document,
                    N = function(t) {
                        return E.createElementNS ? E.createElementNS("http://www.w3.org/1999/xhtml", t) : E.createElement(t)
                    },
                    L = N("div"),
                    X = N("img"),
                    B = a._internals = {
                        _specialProps: l
                    },
                    j = navigator.userAgent,
                    Y = function() {
                        var t = j.indexOf("Android"),
                            e = N("a");
                        return c = -1 !== j.indexOf("Safari") && -1 === j.indexOf("Chrome") && (-1 === t || Number(j.substr(t + 8, 1)) > 3), p = c && 6 > Number(j.substr(j.indexOf("Version/") + 8, 1)), f = -1 !== j.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(j) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(j)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                    }(),
                    U = function(t) {
                        return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    q = function(t) {
                        window.console && console.log(t)
                    },
                    V = "",
                    G = "",
                    W = function(t, e) {
                        e = e || L;
                        var i, s, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
                        return s >= 0 ? (G = 3 === s ? "ms" : i[s], V = "-" + G.toLowerCase() + "-", G + t) : null
                    },
                    Z = E.defaultView ? E.defaultView.getComputedStyle : function() {},
                    Q = a.getStyle = function(t, e, i, s, r) {
                        var n;
                        return Y || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Z(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : U(t)
                    },
                    $ = B.convertToPixels = function(t, i, s, r, n) {
                        if ("px" === r || !r) return s;
                        if ("auto" === r || !s) return 0;
                        var o, l, h, _ = A.test(i),
                            u = t,
                            c = L.style,
                            f = 0 > s;
                        if (f && (s = -s), "%" === r && -1 !== i.indexOf("border")) o = s / 100 * (_ ? t.clientWidth : t.clientHeight);
                        else {
                            if (c.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== r && u.appendChild && "v" !== r.charAt(0) && "rem" !== r) c[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r;
                            else {
                                if (u = t.parentNode || E.body, l = u._gsCache, h = e.ticker.frame, l && _ && l.time === h) return l.width * s / 100;
                                c[_ ? "width" : "height"] = s + r
                            }
                            u.appendChild(L), o = parseFloat(L[_ ? "offsetWidth" : "offsetHeight"]), u.removeChild(L), _ && "%" === r && a.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {}, l.time = h, l.width = 100 * (o / s)), 0 !== o || n || (o = $(t, i, s, r, !0))
                        }
                        return f ? -o : o
                    },
                    H = B.calculateOffset = function(t, e, i) {
                        if ("absolute" !== Q(t, "position", i)) return 0;
                        var s = "left" === e ? "Left" : "Top",
                            r = Q(t, "margin" + s, i);
                        return t["offset" + s] - ($(t, e, parseFloat(r), r.replace(T, "")) || 0)
                    },
                    K = function(t, e) {
                        var i, s, r, n = {};
                        if (e = e || Z(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r = e[i], (-1 === r.indexOf("-transform") || ke === r) && (n[r.replace(S, O)] = e.getPropertyValue(r));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || Pe === i) && (n[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(S, O)] = e[i]);
                        return Y || (n.opacity = U(t)), s = Ne(t, e, !1), n.rotation = s.rotation, n.skewX = s.skewX, n.scaleX = s.scaleX, n.scaleY = s.scaleY, n.x = s.x, n.y = s.y, Re && (n.z = s.z, n.rotationX = s.rotationX, n.rotationY = s.rotationY, n.scaleZ = s.scaleZ), n.filters && delete n.filters, n
                    },
                    J = function(t, e, i, s, r) {
                        var n, a, o, l = {},
                            h = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(y, "") ? n : 0 : H(t, a), void 0 !== h[a] && (o = new pe(h, a, h[a], o)));
                        if (s)
                            for (a in s) "className" !== a && (l[a] = s[a]);
                        return {
                            difs: l,
                            firstMPT: o
                        }
                    },
                    te = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ie = function(t, e, i) {
                        var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = te[e],
                            n = r.length;
                        for (i = i || Z(t, null); --n > -1;) s -= parseFloat(Q(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(Q(t, "border" + r[n] + "Width", i, !0)) || 0;
                        return s
                    },
                    se = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null == t || "" === t) && (t = "0 0");
                        var i = t.split(" "),
                            s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), t = s + " " + r + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(y, "")), e.oy = parseFloat(r.replace(y, "")), e.v = t), e || t
                    },
                    re = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    ne = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    },
                    ae = function(t, e, i, s) {
                        var r, n, a, o, l, h = 1e-6;
                        return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : F) - (l ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), h > o && o > -h && (o = 0), o
                    },
                    oe = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    le = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                    },
                    he = a.parseColor = function(t, e) {
                        var i, s, r, n, a, o, l, h, _, u, c;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, 255 & t >> 8, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t]) i = oe[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (s = t.charAt(1), r = t.charAt(2), n = t.charAt(3), t = "#" + s + s + r + r + n + n), t = parseInt(t.substr(1), 16), i = [t >> 16, 255 & t >> 8, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = c = t.match(d), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(g)
                                    } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, l = Number(i[2]) / 100, r = .5 >= l ? l * (o + 1) : l + o - l * o, s = 2 * l - r, i.length > 3 && (i[3] = Number(t[3])), i[0] = le(a + 1 / 3, s, r), i[1] = le(a, s, r), i[2] = le(a - 1 / 3, s, r);
                                else i = t.match(d) || oe.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else i = oe.black;
                        return e && !c && (s = i[0] / 255, r = i[1] / 255, n = i[2] / 255, h = Math.max(s, r, n), _ = Math.min(s, r, n), l = (h + _) / 2, h === _ ? a = o = 0 : (u = h - _, o = l > .5 ? u / (2 - h - _) : u / (h + _), a = h === s ? (r - n) / u + (n > r ? 6 : 0) : h === r ? (n - s) / u + 2 : (s - r) / u + 4, a *= 60), i[0] = 0 | a + .5, i[1] = 0 | 100 * o + .5, i[2] = 0 | 100 * l + .5), i
                    },
                    _e = function(t, e) {
                        var i, s, r, n = t.match(ue) || [],
                            a = 0,
                            o = n.length ? "" : t;
                        for (i = 0; n.length > i; i++) s = n[i], r = t.substr(a, t.indexOf(s, a) - a), a += r.length + s.length, s = he(s, e), 3 === s.length && s.push(1), o += r + (e ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
                        return o
                    },
                    ue = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (h in oe) ue += "|" + h + "\\b";
                ue = RegExp(ue + ")", "gi"), a.colorStringFilter = function(t) {
                    var e, i = t[0] + t[1];
                    ue.lastIndex = 0, ue.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = _e(t[0], e), t[1] = _e(t[1], e))
                }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
                var ce = function(t, e, i, s) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, n = e ? (t.match(ue) || [""])[0] : "",
                            a = t.split(n).join("").match(v) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            h = -1 !== t.indexOf(" ") ? " " : ",",
                            _ = a.length,
                            u = _ > 0 ? a[0].replace(d, "") : "";
                        return _ ? r = e ? function(t) {
                            var e, c, f, p;
                            if ("number" == typeof t) t += u;
                            else if (s && M.test(t)) {
                                for (p = t.replace(M, "|").split("|"), f = 0; p.length > f; f++) p[f] = r(p[f]);
                                return p.join(",")
                            }
                            if (e = (t.match(ue) || [n])[0], c = t.split(e).join("").match(v) || [], f = c.length, _ > f--)
                                for (; _ > ++f;) c[f] = i ? c[0 | (f - 1) / 2] : a[f];
                            return o + c.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, n, c;
                            if ("number" == typeof t) t += u;
                            else if (s && M.test(t)) {
                                for (n = t.replace(M, "|").split("|"), c = 0; n.length > c; c++) n[c] = r(n[c]);
                                return n.join(",")
                            }
                            if (e = t.match(v) || [], c = e.length, _ > c--)
                                for (; _ > ++c;) e[c] = i ? e[0 | (c - 1) / 2] : a[c];
                            return o + e.join(h) + l
                        } : function(t) {
                            return t
                        }
                    },
                    fe = function(t) {
                        return t = t.split(","),
                            function(e, i, s, r, n, a, o) {
                                var l, h = (i + "").split(" ");
                                for (o = {}, l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                                return r.parse(e, o, n, a)
                            }
                    },
                    pe = (B._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, l = 1e-6; o;) e = a[o.v], o.r ? e = Math.round(e) : l > e && e > -l && (e = 0), o.t[o.p] = e, o = o._next;
                        if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                            for (o = n.firstMPT; o;) {
                                if (i = o.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                        i.e = r
                                    }
                                } else i.e = i.s + i.xs0;
                                o = o._next
                            }
                    }, function(t, e, i, s, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
                    }),
                    me = (B._parseToProxy = function(t, e, i, s, r, n) {
                        var a, o, l, h, _, u = s,
                            c = {},
                            f = {},
                            p = i._transform,
                            m = I;
                        for (i._transform = null, I = e, s = _ = i.parse(t, e, s, r), I = m, n && (i._transform = p, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                            if (1 >= s.type && (o = s.p, f[o] = s.s + s.c, c[o] = s.s, n || (h = new pe(s, "s", o, h, s.r), s.c = 0), 1 === s.type))
                                for (a = s.l; --a > 0;) l = "xn" + a, o = s.p + "_" + l, f[o] = s.data[l], c[o] = s[l], n || (h = new pe(s, l, o, h, s.rxp[l]));
                            s = s._next
                        }
                        return {
                            proxy: c,
                            end: f,
                            firstMPT: h,
                            pt: _
                        }
                    }, B.CSSPropTween = function(t, e, s, r, a, o, l, h, _, u, c) {
                        this.t = t, this.p = e, this.s = s, this.c = r, this.n = l || e, t instanceof me || n.push(this.n), this.r = h, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === c ? s + r : c, a && (this._next = a, a._prev = this)
                    }),
                    de = function(t, e, i, s, r, n) {
                        var a = new me(t, e, i, s - i, r, -1, n);
                        return a.b = i, a.e = a.xs0 = s, a
                    },
                    ge = a.parseComplex = function(t, e, i, s, r, n, a, o, l, h) {
                        i = i || n || "", a = new me(t, e, 0, 0, a, h ? 2 : 1, null, !1, o, i, s), s += "";
                        var u, c, f, p, m, v, y, T, x, w, b, P, k, S = i.split(", ").join(",").split(" "),
                            R = s.split(", ").join(",").split(" "),
                            O = S.length,
                            A = _ !== !1;
                        for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (S = S.join(" ").replace(M, ", ").split(" "), R = R.join(" ").replace(M, ", ").split(" "), O = S.length), O !== R.length && (S = (n || "").split(" "), O = S.length), a.plugin = l, a.setRatio = h, ue.lastIndex = 0, u = 0; O > u; u++)
                            if (p = S[u], m = R[u], T = parseFloat(p), T || 0 === T) a.appendXtra("", T, re(m, T), m.replace(g, ""), A && -1 !== m.indexOf("px"), !0);
                            else if (r && ue.test(p)) P = "," === m.charAt(m.length - 1) ? ")," : ")", k = -1 !== m.indexOf("hsl") && Y, p = he(p, k), m = he(m, k), x = p.length + m.length > 6, x && !Y && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[u]).join("transparent")) : (Y || (x = !1), k ? a.appendXtra(x ? "hsla(" : "hsl(", p[0], re(m[0], p[0]), ",", !1, !0).appendXtra("", p[1], re(m[1], p[1]), "%,", !1).appendXtra("", p[2], re(m[2], p[2]), x ? "%," : "%" + P, !1) : a.appendXtra(x ? "rgba(" : "rgb(", p[0], m[0] - p[0], ",", !0, !0).appendXtra("", p[1], m[1] - p[1], ",", !0).appendXtra("", p[2], m[2] - p[2], x ? "," : P, !0), x && (p = 4 > p.length ? 1 : p[3], a.appendXtra("", p, (4 > m.length ? 1 : m[3]) - p, P, !1))), ue.lastIndex = 0;
                        else if (v = p.match(d)) {
                            if (y = m.match(g), !y || y.length !== v.length) return a;
                            for (f = 0, c = 0; v.length > c; c++) b = v[c], w = p.indexOf(b, f), a.appendXtra(p.substr(f, w - f), Number(b), re(y[c], b), "", A && "px" === p.substr(w + b.length, 2), 0 === c), f = w + b.length;
                            a["xs" + a.l] += p.substr(f)
                        } else a["xs" + a.l] += a.l ? " " + p : p;
                        if (-1 !== s.indexOf("=") && a.data) {
                            for (P = a.xs0 + a.data.s, u = 1; a.l > u; u++) P += a["xs" + u] + a.data["xn" + u];
                            a.e = P + a["xs" + u]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    ve = 9;
                for (h = me.prototype, h.l = h.pr = 0; --ve > 0;) h["xn" + ve] = 0, h["xs" + ve] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, s, r, n) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new me(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
                };
                var ye = function(t, e) {
                        e = e || {}, this.p = e.prefix ? W(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || ce(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    Te = B._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var s, r, n = t.split(","),
                            a = e.defaultValue;
                        for (i = i || [a], s = 0; n.length > s; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new ye(n[s], e)
                    },
                    xe = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            Te(t, {
                                parser: function(t, i, s, r, n, a, h) {
                                    var _ = o.com.greensock.plugins[e];
                                    return _ ? (_._cssRegister(), l[s].parse(t, i, s, r, n, a, h)) : (q("Error: " + e + " js file not loaded."), n)
                                }
                            })
                        }
                    };
                h = ye.prototype, h.parseComplex = function(t, e, i, s, r, n) {
                    var a, o, l, h, _, u, c = this.keyword;
                    if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"), l = i.replace(M, "|").split("|")) : c && (o = [e], l = [i])), l) {
                        for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, c && (_ = e.indexOf(c), u = i.indexOf(c), _ !== u && (-1 === u ? o[a] = o[a].split(c).join("") : -1 === _ && (o[a] += " " + c)));
                        e = o.join(", "), i = l.join(", ")
                    }
                    return ge(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
                }, h.parse = function(t, e, i, s, n, a) {
                    return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
                }, a.registerSpecialProp = function(t, e, i) {
                    Te(t, {
                        parser: function(t, s, r, n, a, o) {
                            var l = new me(t, r, 0, 0, a, 2, r, !1, i);
                            return l.plugin = o, l.setRatio = e(t, s, n._tween, r), l
                        },
                        priority: i
                    })
                }, a.useSVGTransformAttr = c || f;
                var we, be = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Pe = W("transform"),
                    ke = V + "transform",
                    Se = W("transformOrigin"),
                    Re = null !== W("perspective"),
                    Oe = B.Transform = function() {
                        this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Re ? a.defaultForce3D || "auto" : !1
                    },
                    Ae = window.SVGElement,
                    Ce = function(t, e, i) {
                        var s, r = E.createElementNS("http://www.w3.org/2000/svg", t),
                            n = /([a-z])([A-Z])/g;
                        for (s in i) r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
                        return e.appendChild(r), r
                    },
                    De = E.documentElement,
                    Me = function() {
                        var t, e, i, s = m || /Android/i.test(j) && !window.chrome;
                        return E.createElementNS && !s && (t = Ce("svg", De), e = Ce("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[Se] = "50% 50%", e.style[Pe] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(f && Re), De.removeChild(t)), s
                    }(),
                    ze = function(t, e, i, s, r) {
                        var n, o, l, h, _, u, c, f, p, m, d, g, v, y, T = t._gsTransform,
                            x = Ee(t, !0);
                        T && (v = T.xOrigin, y = T.yOrigin), (!s || 2 > (n = s.split(" ")).length) && (c = t.getBBox(), e = se(e).split(" "), n = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]), i.xOrigin = h = parseFloat(n[0]), i.yOrigin = _ = parseFloat(n[1]), s && x !== Ie && (u = x[0], c = x[1], f = x[2], p = x[3], m = x[4], d = x[5], g = u * p - c * f, o = h * (p / g) + _ * (-f / g) + (f * d - p * m) / g, l = h * (-c / g) + _ * (u / g) - (u * d - c * m) / g, h = i.xOrigin = n[0] = o, _ = i.yOrigin = n[1] = l), T && (r || r !== !1 && a.defaultSmoothOrigin !== !1 ? (o = h - v, l = _ - y, T.xOffset += o * x[0] + l * x[2] - o, T.yOffset += o * x[1] + l * x[3] - l) : T.xOffset = T.yOffset = 0), t.setAttribute("data-svg-origin", n.join(" "))
                    },
                    Fe = function(t) {
                        return !!(Ae && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                    },
                    Ie = [1, 0, 0, 1, 0, 0],
                    Ee = function(t, e) {
                        var i, s, r, n, a, o = t._gsTransform || new Oe,
                            l = 1e5;
                        if (Pe ? s = Q(t, ke, null, !0) : t.currentStyle && (s = t.currentStyle.filter.match(C), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), o.x || 0, o.y || 0].join(",") : ""), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, (o.svg || t.getBBox && Fe(t)) && (i && -1 !== (t.style[Pe] + "").indexOf("matrix") && (s = t.style[Pe], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (s = r, i = 0) : -1 !== r.indexOf("translate") && (s = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Ie;
                        for (r = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], ve = r.length; --ve > -1;) n = Number(r[ve]), r[ve] = (a = n - (n |= 0)) ? (0 | a * l + (0 > a ? -.5 : .5)) / l + n : n;
                        return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    Ne = B.getTransform = function(t, i, s, n) {
                        if (t._gsTransform && s && !n) return t._gsTransform;
                        var o, l, h, _, u, c, f = s ? t._gsTransform || new Oe : new Oe,
                            p = 0 > f.scaleX,
                            m = 2e-5,
                            d = 1e5,
                            g = Re ? parseFloat(Q(t, Se, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                            v = parseFloat(a.defaultTransformPerspective) || 0;
                        if (f.svg = !(!t.getBBox || !Fe(t)), f.svg && (ze(t, Q(t, Se, r, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), we = a.useSVGTransformAttr || Me), o = Ee(t), o !== Ie) {
                            if (16 === o.length) {
                                var y, T, x, w, b, P = o[0],
                                    k = o[1],
                                    S = o[2],
                                    R = o[3],
                                    O = o[4],
                                    A = o[5],
                                    C = o[6],
                                    D = o[7],
                                    M = o[8],
                                    z = o[9],
                                    I = o[10],
                                    E = o[12],
                                    N = o[13],
                                    L = o[14],
                                    X = o[11],
                                    B = Math.atan2(C, I);
                                f.zOrigin && (L = -f.zOrigin, E = M * L - o[12], N = z * L - o[13], L = I * L + f.zOrigin - o[14]), f.rotationX = B * F, B && (w = Math.cos(-B), b = Math.sin(-B), y = O * w + M * b, T = A * w + z * b, x = C * w + I * b, M = O * -b + M * w, z = A * -b + z * w, I = C * -b + I * w, X = D * -b + X * w, O = y, A = T, C = x), B = Math.atan2(M, I), f.rotationY = B * F, B && (w = Math.cos(-B), b = Math.sin(-B), y = P * w - M * b, T = k * w - z * b, x = S * w - I * b, z = k * b + z * w, I = S * b + I * w, X = R * b + X * w, P = y, k = T, S = x), B = Math.atan2(k, P), f.rotation = B * F, B && (w = Math.cos(-B), b = Math.sin(-B), P = P * w + O * b, T = k * w + A * b, A = k * -b + A * w, C = S * -b + C * w, k = T), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY += 180), f.scaleX = (0 | Math.sqrt(P * P + k * k) * d + .5) / d, f.scaleY = (0 | Math.sqrt(A * A + z * z) * d + .5) / d, f.scaleZ = (0 | Math.sqrt(C * C + I * I) * d + .5) / d, f.skewX = 0, f.perspective = X ? 1 / (0 > X ? -X : X) : 0, f.x = E, f.y = N, f.z = L, f.svg && (f.x -= f.xOrigin - (f.xOrigin * P - f.yOrigin * O), f.y -= f.yOrigin - (f.yOrigin * k - f.xOrigin * A))
                            } else if (!(Re && !n && o.length && f.x === o[4] && f.y === o[5] && (f.rotationX || f.rotationY) || void 0 !== f.x && "none" === Q(t, "display", i))) {
                                var j = o.length >= 6,
                                    Y = j ? o[0] : 1,
                                    U = o[1] || 0,
                                    q = o[2] || 0,
                                    V = j ? o[3] : 1;
                                f.x = o[4] || 0, f.y = o[5] || 0, h = Math.sqrt(Y * Y + U * U), _ = Math.sqrt(V * V + q * q), u = Y || U ? Math.atan2(U, Y) * F : f.rotation || 0, c = q || V ? Math.atan2(q, V) * F + u : f.skewX || 0, Math.abs(c) > 90 && 270 > Math.abs(c) && (p ? (h *= -1, c += 0 >= u ? 180 : -180, u += 0 >= u ? 180 : -180) : (_ *= -1, c += 0 >= c ? 180 : -180)), f.scaleX = h, f.scaleY = _, f.rotation = u, f.skewX = c, Re && (f.rotationX = f.rotationY = f.z = 0, f.perspective = v, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * Y + f.yOrigin * q), f.y -= f.yOrigin - (f.xOrigin * U + f.yOrigin * V))
                            }
                            f.zOrigin = g;
                            for (l in f) m > f[l] && f[l] > -m && (f[l] = 0)
                        }
                        return s && (t._gsTransform = f, f.svg && (we && t.style[Pe] ? e.delayedCall(.001, function() {
                            je(t.style, Pe)
                        }) : !we && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), f
                    },
                    Le = function(t) {
                        var e, i, s = this.data,
                            r = -s.rotation * z,
                            n = r + s.skewX * z,
                            a = 1e5,
                            o = (0 | Math.cos(r) * s.scaleX * a) / a,
                            l = (0 | Math.sin(r) * s.scaleX * a) / a,
                            h = (0 | Math.sin(n) * -s.scaleY * a) / a,
                            _ = (0 | Math.cos(n) * s.scaleY * a) / a,
                            u = this.t.style,
                            c = this.t.currentStyle;
                        if (c) {
                            i = l, l = -h, h = -i, e = c.filter, u.filter = "";
                            var f, p, d = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== c.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + _,
                                w = s.x + d * s.xPercent / 100,
                                b = s.y + g * s.yPercent / 100;
                            if (null != s.ox && (f = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, p = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, w += f - (f * o + p * l), b += p - (f * h + p * _)), v ? (f = d / 2, p = g / 2, y += ", Dx=" + (f - (f * o + p * l) + w) + ", Dy=" + (p - (f * h + p * _) + b) + ")") : y += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === _ && (v && -1 === y.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                                var P, k, S, R = 8 > m ? 1 : -1;
                                for (f = s.ieOffsetX || 0, p = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > l ? -l : l) * g)) / 2 + w), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > h ? -h : h) * d)) / 2 + b), ve = 0; 4 > ve; ve++) k = ee[ve], P = c[k], i = -1 !== P.indexOf("px") ? parseFloat(P) : $(this.t, k, parseFloat(P), P.replace(T, "")) || 0, S = i !== s[k] ? 2 > ve ? -s.ieOffsetX : -s.ieOffsetY : 2 > ve ? f - s.ieOffsetX : p - s.ieOffsetY, u[k] = (s[k] = Math.round(i - S * (0 === ve || 2 === ve ? 1 : R))) + "px"
                            }
                        }
                    },
                    Xe = B.set3DTransformRatio = B.setTransformRatio = function(t) {
                        var e, i, s, r, n, a, o, l, h, _, u, c, p, m, d, g, v, y, T, x, w, b, P, k = this.data,
                            S = this.t.style,
                            R = k.rotation,
                            O = k.rotationX,
                            A = k.rotationY,
                            C = k.scaleX,
                            D = k.scaleY,
                            M = k.scaleZ,
                            F = k.x,
                            I = k.y,
                            E = k.z,
                            N = k.svg,
                            L = k.perspective,
                            X = k.force3D;
                        if (!(((1 !== t && 0 !== t || "auto" !== X || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && X || E || L || A || O) && (!we || !N) && Re)) return R || k.skewX || N ? (R *= z, b = k.skewX * z, P = 1e5, e = Math.cos(R) * C, r = Math.sin(R) * C, i = Math.sin(R - b) * -D, n = Math.cos(R - b) * D, b && "simple" === k.skewType && (v = Math.tan(b), v = Math.sqrt(1 + v * v), i *= v, n *= v, k.skewY && (e *= v, r *= v)), N && (F += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, I += k.yOrigin - (k.xOrigin * r + k.yOrigin * n) + k.yOffset, we && (k.xPercent || k.yPercent) && (m = this.t.getBBox(), F += .01 * k.xPercent * m.width, I += .01 * k.yPercent * m.height), m = 1e-6, m > F && F > -m && (F = 0), m > I && I > -m && (I = 0)), T = (0 | e * P) / P + "," + (0 | r * P) / P + "," + (0 | i * P) / P + "," + (0 | n * P) / P + "," + F + "," + I + ")", N && we ? this.t.setAttribute("transform", "matrix(" + T) : S[Pe] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + T) : S[Pe] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + D + "," + F + "," + I + ")", void 0;
                        if (f && (m = 1e-4, m > C && C > -m && (C = M = 2e-5), m > D && D > -m && (D = M = 2e-5), !L || k.z || k.rotationX || k.rotationY || (L = 0)), R || k.skewX) R *= z, d = e = Math.cos(R), g = r = Math.sin(R), k.skewX && (R -= k.skewX * z, d = Math.cos(R), g = Math.sin(R), "simple" === k.skewType && (v = Math.tan(k.skewX * z), v = Math.sqrt(1 + v * v), d *= v, g *= v, k.skewY && (e *= v, r *= v))), i = -g, n = d;
                        else {
                            if (!(A || O || 1 !== M || L || N)) return S[Pe] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + F + "px," + I + "px," + E + "px)" + (1 !== C || 1 !== D ? " scale(" + C + "," + D + ")" : ""), void 0;
                            e = n = 1, i = r = 0
                        }
                        h = 1, s = a = o = l = _ = u = 0, c = L ? -1 / L : 0, p = k.zOrigin, m = 1e-6, x = ",", w = "0", R = A * z, R && (d = Math.cos(R), g = Math.sin(R), o = -g, _ = c * -g, s = e * g, a = r * g, h = d, c *= d, e *= d, r *= d), R = O * z, R && (d = Math.cos(R), g = Math.sin(R), v = i * d + s * g, y = n * d + a * g, l = h * g, u = c * g, s = i * -g + s * d, a = n * -g + a * d, h *= d, c *= d, i = v, n = y), 1 !== M && (s *= M, a *= M, h *= M, c *= M), 1 !== D && (i *= D, n *= D, l *= D, u *= D), 1 !== C && (e *= C, r *= C, o *= C, _ *= C), (p || N) && (p && (F += s * -p, I += a * -p, E += h * -p + p), N && (F += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, I += k.yOrigin - (k.xOrigin * r + k.yOrigin * n) + k.yOffset), m > F && F > -m && (F = w), m > I && I > -m && (I = w), m > E && E > -m && (E = 0)), T = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", T += (m > e && e > -m ? w : e) + x + (m > r && r > -m ? w : r) + x + (m > o && o > -m ? w : o), T += x + (m > _ && _ > -m ? w : _) + x + (m > i && i > -m ? w : i) + x + (m > n && n > -m ? w : n), O || A ? (T += x + (m > l && l > -m ? w : l) + x + (m > u && u > -m ? w : u) + x + (m > s && s > -m ? w : s), T += x + (m > a && a > -m ? w : a) + x + (m > h && h > -m ? w : h) + x + (m > c && c > -m ? w : c) + x) : T += ",0,0,0,0,1,0,", T += F + x + I + x + E + x + (L ? 1 + -E / L : 1) + ")", S[Pe] = T
                    };
                h = Oe.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, Te("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, s, n, o, l) {
                        if (s._lastParsedTransform === l) return n;
                        s._lastParsedTransform = l;
                        var h, _, u, c, f, p, m, d, g, v, y = t._gsTransform,
                            T = t.style,
                            x = 1e-6,
                            w = be.length,
                            b = l,
                            P = {},
                            k = "transformOrigin";
                        if (l.display ? (c = Q(t, "display"), T.display = "block", h = Ne(t, r, !0, l.parseTransform), T.display = c) : h = Ne(t, r, !0, l.parseTransform), s._transform = h, "string" == typeof b.transform && Pe) c = L.style, c[Pe] = b.transform, c.display = "block", c.position = "absolute", E.body.appendChild(L), _ = Ne(L, null, !1), E.body.removeChild(L), _.perspective || (_.perspective = h.perspective), null != b.xPercent && (_.xPercent = ne(b.xPercent, h.xPercent)), null != b.yPercent && (_.yPercent = ne(b.yPercent, h.yPercent));
                        else if ("object" == typeof b) {
                            if (_ = {
                                    scaleX: ne(null != b.scaleX ? b.scaleX : b.scale, h.scaleX),
                                    scaleY: ne(null != b.scaleY ? b.scaleY : b.scale, h.scaleY),
                                    scaleZ: ne(b.scaleZ, h.scaleZ),
                                    x: ne(b.x, h.x),
                                    y: ne(b.y, h.y),
                                    z: ne(b.z, h.z),
                                    xPercent: ne(b.xPercent, h.xPercent),
                                    yPercent: ne(b.yPercent, h.yPercent),
                                    perspective: ne(b.transformPerspective, h.perspective)
                                }, d = b.directionalRotation, null != d)
                                if ("object" == typeof d)
                                    for (c in d) b[c] = d[c];
                                else b.rotation = d;
                            "string" == typeof b.x && -1 !== b.x.indexOf("%") && (_.x = 0, _.xPercent = ne(b.x, h.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (_.y = 0, _.yPercent = ne(b.y, h.yPercent)), _.rotation = ae("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : h.rotation, h.rotation, "rotation", P), Re && (_.rotationX = ae("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : h.rotationX || 0, h.rotationX, "rotationX", P), _.rotationY = ae("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : h.rotationY || 0, h.rotationY, "rotationY", P)), _.skewX = null == b.skewX ? h.skewX : ae(b.skewX, h.skewX), _.skewY = null == b.skewY ? h.skewY : ae(b.skewY, h.skewY), (u = _.skewY - h.skewY) && (_.skewX += u, _.rotation += u)
                        }
                        for (Re && null != b.force3D && (h.force3D = b.force3D, m = !0), h.skewType = b.skewType || h.skewType || a.defaultSkewType, p = h.force3D || h.z || h.rotationX || h.rotationY || _.z || _.rotationX || _.rotationY || _.perspective, p || null == b.scale || (_.scaleZ = 1); --w > -1;) i = be[w], f = _[i] - h[i], (f > x || -x > f || null != b[i] || null != I[i]) && (m = !0, n = new me(h, i, h[i], f, n), i in P && (n.e = P[i]), n.xs0 = 0, n.plugin = o, s._overwriteProps.push(n.n));
                        return f = b.transformOrigin, h.svg && (f || b.svgOrigin) && (g = h.xOffset, v = h.yOffset, ze(t, se(f), _, b.svgOrigin, b.smoothOrigin), n = de(h, "xOrigin", (y ? h : _).xOrigin, _.xOrigin, n, k), n = de(h, "yOrigin", (y ? h : _).yOrigin, _.yOrigin, n, k), (g !== h.xOffset || v !== h.yOffset) && (n = de(h, "xOffset", y ? g : h.xOffset, h.xOffset, n, k), n = de(h, "yOffset", y ? v : h.yOffset, h.yOffset, n, k)), f = we ? null : "0px 0px"), (f || Re && p && h.zOrigin) && (Pe ? (m = !0, i = Se, f = (f || Q(t, i, r, !1, "50% 50%")) + "", n = new me(T, i, 0, 0, n, -1, k), n.b = T[i], n.plugin = o, Re ? (c = h.zOrigin, f = f.split(" "), h.zOrigin = (f.length > 2 && (0 === c || "0px" !== f[2]) ? parseFloat(f[2]) : c) || 0, n.xs0 = n.e = f[0] + " " + (f[1] || "50%") + " 0px", n = new me(h, "zOrigin", 0, 0, n, -1, n.n), n.b = c, n.xs0 = n.e = h.zOrigin) : n.xs0 = n.e = f) : se(f + "", h)), m && (s._transformType = h.svg && we || !p && 3 !== this._transformType ? 2 : 3), n
                    },
                    prefix: !0
                }), Te("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), Te("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, n, a) {
                        e = this.format(e);
                        var o, l, h, _, u, c, f, p, m, d, g, v, y, T, x, w, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            P = t.style;
                        for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; b.length > l; l++) this.p.indexOf("border") && (b[l] = W(b[l])), u = _ = Q(t, b[l], r, !1, "0px"), -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), c = h = o[l], f = parseFloat(u), v = u.substr((f + "").length), y = "=" === c.charAt(1), y ? (p = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), p *= parseFloat(c), g = c.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(c), g = c.substr((p + "").length)), "" === g && (g = s[i] || v), g !== v && (T = $(t, "borderLeft", f, v), x = $(t, "borderTop", f, v), "%" === g ? (u = 100 * (T / m) + "%", _ = 100 * (x / d) + "%") : "em" === g ? (w = $(t, "borderLeft", 1, "em"), u = T / w + "em", _ = x / w + "em") : (u = T + "px", _ = x + "px"), y && (c = parseFloat(u) + p + g, h = parseFloat(_) + p + g)), a = ge(P, b[l], u + " " + _, c + " " + h, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: ce("0px 0px 0px 0px", !1, !0)
                }), Te("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, s, n, a) {
                        var o, l, h, _, u, c, f = "background-position",
                            p = r || Z(t, null),
                            d = this.format((p ? m ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (c = Q(t, "backgroundImage").replace(R, ""), c && "none" !== c)) {
                            for (o = d.split(" "), l = g.split(" "), X.setAttribute("src", c), h = 2; --h > -1;) d = o[h], _ = -1 !== d.indexOf("%"), _ !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - X.width : t.offsetHeight - X.height, o[h] = _ ? parseFloat(d) / 100 * u + "px" : 100 * (parseFloat(d) / u) + "%");
                            d = o.join(" ")
                        }
                        return this.parseComplex(t.style, d, g, n, a)
                    },
                    formatter: se
                }), Te("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: se
                }), Te("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), Te("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), Te("transformStyle", {
                    prefix: !0
                }), Te("backfaceVisibility", {
                    prefix: !0
                }), Te("userSelect", {
                    prefix: !0
                }), Te("margin", {
                    parser: fe("marginTop,marginRight,marginBottom,marginLeft")
                }), Te("padding", {
                    parser: fe("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), Te("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, s, n, a) {
                        var o, l, h;
                        return 9 > m ? (l = t.currentStyle, h = 8 > m ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
                    }
                }), Te("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), Te("autoRound,strictUnits", {
                    parser: function(t, e, i, s, r) {
                        return r
                    }
                }), Te("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, s, n, a) {
                        return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ue) || ["#000"])[0]
                    }
                }), Te("borderWidth", {
                    parser: fe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), Te("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, s, r) {
                        var n = t.style,
                            a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                        return new me(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
                    }
                });
                var Be = function(t) {
                    var e, i = this.t,
                        s = i.filter || Q(this.data, "filter") || "",
                        r = 0 | this.s + this.c * t;
                    100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = s.replace(b, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(x, "opacity=" + r))
                };
                Te("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, s, n, a) {
                        var o = parseFloat(Q(t, "opacity", r, !1, "1")),
                            l = t.style,
                            h = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === Q(t, "visibility", r) && 0 !== e && (o = 0), Y ? n = new me(l, "opacity", o, e - o, n) : (n = new me(l, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Be), h && (n = new me(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n
                    }
                });
                var je = function(t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Ye = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : je(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                Te("className", {
                    parser: function(t, e, s, n, a, o, l) {
                        var h, _, u, c, f, p = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (a = n._classNamePT = new me(t, s, 0, 0, a, 2), a.setRatio = Ye, a.pr = -11, i = !0, a.b = p, _ = K(t, r), u = t._gsClassPT) {
                            for (c = {}, f = u.data; f;) c[f.p] = 1, f = f._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : p.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), h = J(t, _, K(t), l, c), t.setAttribute("class", p), a.data = h.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, h.difs, a, o)
                    }
                });
                var Ue = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, s, r, n, a = this.t.style,
                            o = l.transform.parse;
                        if ("all" === this.e) a.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;) i = e[s], l[i] && (l[i].parse === o ? r = !0 : i = "transformOrigin" === i ? Se : l[i].p), je(a, i);
                        r && (je(a, Pe), n = this.t._gsTransform, n && (n.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                    }
                };
                for (Te("clearProps", {
                        parser: function(t, e, s, r, n) {
                            return n = new me(t, s, 0, 0, n, 2), n.setRatio = Ue, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), ve = h.length; ve--;) xe(h[ve]);
                h = a.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, o) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = o, this._vars = e, _ = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = Z(t, ""), n = this._overwriteProps;
                    var h, f, m, d, g, v, y, T, x, b = t.style;
                    if (u && "" === b.zIndex && (h = Q(t, "zIndex", r), ("auto" === h || "" === h) && this._addLazySet(b, "zIndex", 0)), "string" == typeof e && (d = b.cssText, h = K(t, r), b.cssText = d + ";" + e, h = J(t, h, K(t)).difs, !Y && w.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, b.cssText = d), this._firstPT = f = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                        for (x = 3 === this._transformType, Pe ? c && (u = !0, "" === b.zIndex && (y = Q(t, "zIndex", r), ("auto" === y || "" === y) && this._addLazySet(b, "zIndex", 0)), p && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : b.zoom = 1, m = f; m && m._next;) m = m._next;
                        T = new me(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, m), T.setRatio = Pe ? Xe : Le, T.data = this._transform || Ne(t, r, !0), T.tween = o, T.pr = -1, n.pop()
                    }
                    if (i) {
                        for (; f;) {
                            for (v = f._next, m = d; m && m.pr > f.pr;) m = m._next;
                            (f._prev = m ? m._prev : g) ? f._prev._next = f: d = f, (f._next = m) ? m._prev = f : g = f, f = v
                        }
                        this._firstPT = d
                    }
                    return !0
                }, h.parse = function(t, e, i, n) {
                    var a, o, h, u, c, f, p, m, d, g, v = t.style;
                    for (a in e) f = e[a], o = l[a], o ? i = o.parse(t, f, a, this, i, n, e) : (c = Q(t, a, r) + "", d = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && P.test(f) ? (d || (f = he(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = ge(v, a, c, f, !0, "transparent", i, 0, n)) : !d || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (h = parseFloat(c), p = h || 0 === h ? c.substr((h + "").length) : "", ("" === c || "auto" === c) && ("width" === a || "height" === a ? (h = ie(t, a, r), p = "px") : "left" === a || "top" === a ? (h = H(t, a, r), p = "px") : (h = "opacity" !== a ? 0 : 1, p = "")), g = d && "=" === f.charAt(1), g ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), m = f.replace(T, "")) : (u = parseFloat(f), m = d ? f.replace(T, "") : ""), "" === m && (m = a in s ? s[a] : p), f = u || 0 === u ? (g ? u + h : u) + m : e[a], p !== m && "" !== m && (u || 0 === u) && h && (h = $(t, a, h, p), "%" === m ? (h /= $(t, a, 100, "%") / 100, e.strictUnits !== !0 && (c = h + "%")) : "em" === m || "rem" === m ? h /= $(t, a, 1, m) : "px" !== m && (u = $(t, a, u, m), m = "px"), g && (u || 0 === u) && (f = u + h + m)), g && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new me(v, a, u || h || 0, 0, i, -1, a, !1, 0, c, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : c) : q("invalid " + a + " tween value: " + e[a]) : (i = new me(v, a, h, u - h, i, 0, a, _ !== !1 && ("px" === m || "zIndex" === a), 0, c, f), i.xs0 = m)) : i = ge(v, a, c, f, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
                    return i
                }, h.setRatio = function(t) {
                    var e, i, s, r = this._firstPT,
                        n = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : n > e && e > -n && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (s = r.l, 2 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (e = Math.round(r.s + r.c), r.type) {
                                            if (1 === r.type) {
                                                for (s = r.l, i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                                r.t[r.p] = i
                                            }
                                        } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                                else r.setRatio(t);
                                r = r._next
                            }
                }, h._enableTransforms = function(t) {
                    this._transform = this._transform || Ne(this._target, r, !0), this._transformType = this._transform.svg && we || !t && 3 !== this._transformType ? 2 : 3
                };
                var qe = function() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                h._addLazySet = function(t, e, i) {
                    var s = this._firstPT = new me(t, e, 0, 0, this._firstPT, 2);
                    s.e = i, s.setRatio = qe, s.data = this
                }, h._linkCSSP = function(t, e, i, s) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, h._kill = function(e) {
                    var i, s, r, n = e;
                    if (e.autoAlpha || e.alpha) {
                        n = {};
                        for (s in e) n[s] = e[s];
                        n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
                };
                var Ve = function(t, e, i) {
                    var s, r, n, a;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Ve(t[r], e, i);
                    else
                        for (s = t.childNodes, r = s.length; --r > -1;) n = s[r], a = n.type, n.style && (e.push(K(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Ve(n, e, i)
                };
                return a.cascadeTo = function(t, i, s) {
                    var r, n, a, o, l = e.to(t, i, s),
                        h = [l],
                        _ = [],
                        u = [],
                        c = [],
                        f = e._internals.reservedProps;
                    for (t = l._targets || l.target, Ve(t, _, c), l.render(i, !0, !0), Ve(t, u), l.render(0, !0, !0), l._enabled(!0), r = c.length; --r > -1;)
                        if (n = J(c[r], _[r], u[r]), n.firstMPT) {
                            n = n.difs;
                            for (a in s) f[a] && (n[a] = s[a]);
                            o = {};
                            for (a in n) o[a] = _[r][a];
                            h.push(e.fromTo(c[r], i, o, n))
                        }
                    return h
                }, t.activate([a]), a
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.5",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = function(t) {
                        for (; t;) t.f || t.blob || (t.r = 1), t = t._next
                    },
                    i = t.prototype;
                i._onInitAllProps = function() {
                    for (var t, i, s, r = this._tween, n = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), a = n.length, o = {}, l = r._propLookup.roundProps; --a > -1;) o[n[a]] = 1;
                    for (a = n.length; --a > -1;)
                        for (t = n[a], i = r._firstPT; i;) s = i._next, i.pg ? i.t._roundProps(o, !0) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), s && (s._prev = i._prev), i._prev ? i._prev._next = s : r._firstPT === i && (r._firstPT = s), i._next = i._prev = null, r._propLookup[t] = l)), i = s;
                    return !1
                }, i._add = function(t, e, i, s) {
                    this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e)
                }
            }(),
            function() {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.5.0",
                    init: function(t, e) {
                        var i;
                        if ("function" != typeof t.setAttribute) return !1;
                        for (i in e) this._addTween(t, "setAttribute", t.getAttribute(i) + "", e[i] + "", i, !1, i), this._overwriteProps.push(i);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var i, s, r, n, a, o, l = e.useRadians === !0 ? 2 * Math.PI : 360,
                        h = 1e-6;
                    for (i in e) "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= l, a !== a % (l / 2) && (a = 0 > a ? a + l : a - l)), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * l) % l - (0 | a / l) * l : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * l) % l - (0 | a / l) * l)), (a > h || -h > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope,
                    n = r.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    l = n._class,
                    h = function(e, i) {
                        var s = l("easing." + e, function() {}, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, s
                    },
                    _ = t.register || function() {},
                    u = function(t, e, i, s) {
                        var r = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new s
                        }, !0);
                        return _(r, t), r
                    },
                    c = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    f = function(e, i) {
                        var s = l("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, r.config = function(t) {
                            return new s(t)
                        }, s
                    },
                    p = u("Back", f("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), f("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), f("BackInOut", function(t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    d = m.prototype = new t;
                return d.constructor = m, d.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, e = l("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, d.config = e.config = function(t) {
                    return new e(t)
                }, i = l("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, s, r, n, a, o, l = e.taper || "none", h = [], _ = 0, u = 0 | (e.points || 20), f = u, p = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = p ? Math.random() : 1 / u * f, s = d ? d.getRatio(i) : i, "none" === l ? r = g : "out" === l ? (n = 1 - i, r = n * n * g) : "in" === l ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), p ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), h[_++] = {
                        x: i,
                        y: s
                    };
                    for (h.sort(function(t, e) {
                            return t.x - e.x
                        }), o = new c(1, 1, null), f = u; --f > -1;) a = h[f], o = new c(a.x, a.y, o);
                    this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
                }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, d.config = function(t) {
                    return new i(t)
                }, i.ease = new i, u("Bounce", h("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), h("BounceIn", function(t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), h("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), u("Circ", h("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), h("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), h("CircInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), s = function(e, i, s) {
                    var r = l("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || s) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                        }, !0),
                        n = r.prototype = new t;
                    return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, u("Elastic", s("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), s("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                }, .3), s("ElasticInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1
                }, .45)), u("Expo", h("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), h("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), h("ExpoInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), u("Sine", h("SineOut", function(t) {
                    return Math.sin(t * o)
                }), h("SineIn", function(t) {
                    return -Math.cos(t * o) + 1
                }), h("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), p
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var s, r, n, a, o, l = function(t) {
                    var e, s = t.split("."),
                        r = i;
                    for (e = 0; s.length > e; e++) r[s[e]] = r = r[s[e]] || {};
                    return r
                },
                h = l("com.greensock"),
                _ = 1e-10,
                u = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                c = function() {},
                f = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                p = {},
                m = function(s, r, n, a) {
                    this.sc = p[s] ? p[s].sc : [], p[s] = this, this.gsClass = null, this.func = n;
                    var o = [];
                    this.check = function(h) {
                        for (var _, u, c, f, d, g = r.length, v = g; --g > -1;)(_ = p[r[g]] || new m(r[g], [])).gsClass ? (o[g] = _.gsClass, v--) : h && _.sc.push(this);
                        if (0 === v && n)
                            for (u = ("com.greensock." + s).split("."), c = u.pop(), f = l(u.join("."))[c] = this.gsClass = n.apply(n, o), a && (i[c] = f, d = "undefined" != typeof module && module.exports, !d && "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() {
                                    return f
                                }) : s === e && d && (module.exports = f)), g = 0; this.sc.length > g; g++) this.sc[g].check()
                    }, this.check(!0)
                },
                d = t._gsDefine = function(t, e, i, s) {
                    return new m(t, e, i, s)
                },
                g = h._class = function(t, e, i) {
                    return e = e || function() {}, d(t, [], function() {
                        return e
                    }, i), e
                };
            d.globals = i;
            var v = [0, 0, 1, 1],
                y = [],
                T = g("easing.Ease", function(t, e, i, s) {
                    this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? v.concat(e) : v
                }, !0),
                x = T.map = {},
                w = T.register = function(t, e, i, s) {
                    for (var r, n, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                        for (n = l[_], r = s ? g("easing." + n, null, !0) : h.easing[n] || {}, a = u.length; --a > -1;) o = u[a], x[n + "." + o] = x[o + n] = r[o] = t.getRatio ? t : t[o] || new t
                };
            for (n = T.prototype, n._calcEnd = !1, n.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
                }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = s.length; --r > -1;) n = s[r] + ",Power" + r, w(new T(null, null, 1, r), n, "easeOut", !0), w(new T(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" : "")), w(new T(null, null, 3, r), n, "easeInOut");
            x.linear = h.easing.Linear.easeIn, x.swing = h.easing.Quad.easeInOut;
            var b = g("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            n = b.prototype, n.addEventListener = function(t, e, i, s, r) {
                r = r || 0;
                var n, l, h = this._listeners[t],
                    _ = 0;
                for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) n = h[l], n.c === e && n.s === i ? h.splice(l, 1) : 0 === _ && r > n.pr && (_ = l + 1);
                h.splice(_, 0, {
                    c: e,
                    s: i,
                    up: s,
                    pr: r
                }), this !== a || o || a.wake()
            }, n.removeEventListener = function(t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; --i > -1;)
                        if (s[i].c === e) return s.splice(i, 1), void 0
            }, n.dispatchEvent = function(t) {
                var e, i, s, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e], s && (s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i))
            };
            var P = t.requestAnimationFrame,
                k = t.cancelAnimationFrame,
                S = Date.now || function() {
                    return (new Date).getTime()
                },
                R = S();
            for (s = ["ms", "moz", "webkit", "o"], r = s.length; --r > -1 && !P;) P = t[s[r] + "RequestAnimationFrame"], k = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"];
            g("Ticker", function(t, e) {
                var i, s, r, n, l, h = this,
                    u = S(),
                    f = e !== !1 && P,
                    p = 500,
                    m = 33,
                    d = "tick",
                    g = function(t) {
                        var e, a, o = S() - R;
                        o > p && (u += o - m), R += o, h.time = (R - u) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= n ? .004 : n - e), a = !0), t !== !0 && (r = s(g)), a && h.dispatchEvent(d)
                    };
                b.call(h), h.time = h.frame = 0, h.tick = function() {
                    g(!0)
                }, h.lagSmoothing = function(t, e) {
                    p = t || 1 / _, m = Math.min(e, p, 0)
                }, h.sleep = function() {
                    null != r && (f && k ? k(r) : clearTimeout(r), s = c, r = null, h === a && (o = !1))
                }, h.wake = function() {
                    null !== r ? h.sleep() : h.frame > 10 && (R = S() - p + 5), s = 0 === i ? c : f && P ? P : function(t) {
                        return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                    }, h === a && (o = !0), g(2)
                }, h.fps = function(t) {
                    return arguments.length ? (i = t, n = 1 / (i || 60), l = this.time + n, h.wake(), void 0) : i
                }, h.useRAF = function(t) {
                    return arguments.length ? (h.sleep(), f = t, h.fps(i), void 0) : f
                }, h.fps(t), setTimeout(function() {
                    f && 5 > h.frame && h.useRAF(!1)
                }, 1500)
            }), n = h.Ticker.prototype = new h.events.EventDispatcher, n.constructor = h.Ticker;
            var O = g("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, W) {
                    o || a.wake();
                    var i = this.vars.useFrames ? G : W;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            a = O.ticker = new h.Ticker, n = O.prototype, n._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;
            var A = function() {
                o && S() - R > 2e3 && a.wake(), setTimeout(A, 2e3)
            };
            A(), n.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, n.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, n.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, n.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, n.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, n.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, n.render = function() {}, n.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, n.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, n._enabled = function(t, e) {
                return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, n._kill = function() {
                return this._enabled(!1, !1)
            }, n.kill = function(t, e) {
                return this._kill(t, e), this
            }, n._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, n._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, n._callback = function(t) {
                var e = this.vars;
                e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || y)
            }, n.eventCallback = function(t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, n.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, n.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, n.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, n.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, n.totalTime = function(t, e, i) {
                if (o || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            r = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (F.length && Q(), this.render(t, e, !1), F.length && Q())
                }
                return this
            }, n.progress = n.totalProgress = function(t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, n.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, n.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, n.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, n.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, n.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, s = this._timeline;
                return t != this._paused && s && (o || t || a.wake(), e = s.rawTime(), i = e - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var C = g("core.SimpleTimeline", function(t) {
                O.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            n = C.prototype = new O, n.constructor = C, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function(t, e) {
                var i, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (s = t._startTime; i && i._startTime > s;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, n._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, n.render = function(t, e, i) {
                var s, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
            }, n.rawTime = function() {
                return o || a.wake(), this._totalTime
            };
            var D = g("TweenLite", function(e, i, s) {
                    if (O.call(this, i, s), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                    var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? V[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : V[l], (o || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                        for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[r] = $(n, this, !1), 1 === l && this._siblings[r].length > 1 && K(n, this, null, 1, this._siblings[r])) : (n = a[r--] = D.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = $(e, this, !1), 1 === l && this._siblings.length > 1 && K(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay))
                }, !0),
                M = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                z = function(t, e) {
                    var i, s = {};
                    for (i in t) q[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!j[i] || j[i] && j[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                    t.css = s
                };
            n = D.prototype = new O, n.constructor = D, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, D.version = "1.18.0", D.defaultEase = n._ease = new T(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = a, D.autoSleep = 120, D.lagSmoothing = function(t, e) {
                a.lagSmoothing(t, e)
            }, D.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var F = [],
                I = {},
                E = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                N = function(t) {
                    for (var e, i = this._firstPT, s = 1e-6; i;) e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                },
                L = function(t, e, i, s) {
                    var r, n, a, o, l, h, _, u = [t, e],
                        c = 0,
                        f = "",
                        p = 0;
                    for (u.start = t, i && (i(u), t = u[0], e = u[1]), u.length = 0, r = t.match(E) || [], n = e.match(E) || [], s && (s._next = null, s.blob = 1, u._firstPT = s), l = n.length, o = 0; l > o; o++) _ = n[o], h = e.substr(c, e.indexOf(_, c) - c), f += h || !o ? h : ",", c += h.length, p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1), _ === r[o] || o >= r.length ? f += _ : (f && (u.push(f), f = ""), a = parseFloat(r[o]), u.push(a), u._firstPT = {
                        _next: u._firstPT,
                        t: u,
                        p: u.length - 1,
                        s: a,
                        c: ("=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * parseFloat(_.substr(2)) : parseFloat(_) - a) || 0,
                        f: 0,
                        r: p && 4 > p
                    }), c += _.length;
                    return f += e.substr(c), f && u.push(f), u.setRatio = N, u
                },
                X = function(t, e, i, s, r, n, a, o) {
                    var l, h, _ = "get" === i ? t[e] : i,
                        u = typeof t[e],
                        c = "string" == typeof s && "=" === s.charAt(1),
                        f = {
                            t: t,
                            p: e,
                            s: _,
                            f: "function" === u,
                            pg: 0,
                            n: r || e,
                            r: n,
                            pr: 0,
                            c: c ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - _ || 0
                        };
                    return "number" !== u && ("function" === u && "get" === i && (h = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), f.s = _ = a ? t[h](a) : t[h]()), "string" == typeof _ && (a || isNaN(_)) ? (f.fp = a, l = L(_, s, o || D.defaultStringFilter, f), f = {
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: r || e,
                        pr: 0
                    }) : c || (f.c = parseFloat(s) - parseFloat(_) || 0)), f.c ? ((f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f) : void 0
                },
                B = D._internals = {
                    isArray: f,
                    isSelector: M,
                    lazyTweens: F,
                    blobDif: L
                },
                j = D._plugins = {},
                Y = B.tweenLookup = {},
                U = 0,
                q = B.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1
                },
                V = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                G = O._rootFramesTimeline = new C,
                W = O._rootTimeline = new C,
                Z = 30,
                Q = B.lazyRender = function() {
                    var t, e = F.length;
                    for (I = {}; --e > -1;) t = F[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    F.length = 0
                };
            W._startTime = a.time, G._startTime = a.frame, W._active = G._active = !0, setTimeout(Q, 1), O._updateRoot = D.render = function() {
                var t, e, i;
                if (F.length && Q(), W.render((a.time - W._startTime) * W._timeScale, !1, !1), G.render((a.frame - G._startTime) * G._timeScale, !1, !1), F.length && Q(), a.frame >= Z) {
                    Z = a.frame + (parseInt(D.autoSleep, 10) || 120);
                    for (i in Y) {
                        for (e = Y[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete Y[i]
                    }
                    if (i = W._first, (!i || i._paused) && D.autoSleep && !G._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep()
                    }
                }
            }, a.addEventListener("tick", O._updateRoot);
            var $ = function(t, e, i) {
                    var s, r, n = t._gsTweenID;
                    if (Y[n || (t._gsTweenID = n = "t" + U++)] || (Y[n] = {
                            target: t,
                            tweens: []
                        }), e && (s = Y[n].tweens, s[r = s.length] = e, i))
                        for (; --r > -1;) s[r] === e && s.splice(r, 1);
                    return Y[n].tweens
                },
                H = function(t, e, i, s) {
                    var r, n, a = t.vars.onOverwrite;
                    return a && (r = a(t, e, i, s)), a = D.onOverwrite, a && (n = a(t, e, i, s)), r !== !1 && n !== !1
                },
                K = function(t, e, i, s, r) {
                    var n, a, o, l;
                    if (1 === s || s >= 4) {
                        for (l = r.length, n = 0; l > n; n++)
                            if ((o = r[n]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                            else if (5 === s) break;
                        return a
                    }
                    var h, u = e._startTime + _,
                        c = [],
                        f = 0,
                        p = 0 === e._duration;
                    for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || J(e, 0, p), 0 === J(o, h, p) && (c[f++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((p || !o._initted) && 2e-10 >= u - o._startTime || (c[f++] = o)));
                    for (n = f; --n > -1;)
                        if (o = c[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                            if (2 !== s && !H(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0)
                        }
                    return a
                },
                J = function(t, e, i) {
                    for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                        if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _
                };
            n._init = function() {
                var t, e, i, s, r, n = this.vars,
                    a = this._overwrittenProps,
                    o = this._duration,
                    l = !!n.immediateRender,
                    h = n.ease;
                if (n.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (s in n.startAt) r[s] = n.startAt[s];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && n.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== o) return
                } else if (n.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (s in n) q[s] && "autoCSS" !== s || (i[s] = n[s]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && n.lazy !== !1, i.immediateRender = l, this._startAt = D.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = h = h ? h instanceof T ? h : "function" == typeof h ? new T(h, n.easeParams) : x[h] || D.defaultEase : D.defaultEase, n.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (e && D._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = n.onUpdate, this._initted = !0
            }, n._initProps = function(e, i, s, r) {
                var n, a, o, l, h, _;
                if (null == e) return !1;
                I[e._gsTweenID] && Q(), this.vars.css || e.style && e !== t && e.nodeType && j.css && this.vars.autoCSS !== !1 && z(this.vars, e);
                for (n in this.vars)
                    if (_ = this.vars[n], q[n]) _ && (_ instanceof Array || _.push && f(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                    else if (j[n] && (l = new j[n])._onInitTween(e, this.vars[n], this)) {
                    for (this._firstPT = h = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: n,
                            pg: 1,
                            pr: l._priority
                        }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), h._next && (h._next._prev = h)
                } else i[n] = X.call(this, e, n, "get", _, n, 0, null, this.vars.stringFilter);
                return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && K(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (I[e._gsTweenID] = !0), o)
            }, n.render = function(t, e, i) {
                var s, r, n, a, o = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === _ && "isPause" !== this.data) && h !== t && (i = !0, h > _ && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : _);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : _)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / l,
                        c = this._easeType,
                        f = this._easePower;
                    (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u : .5 > t / l ? u / 2 : 1 - u / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, F.push(this), this._lazy = [t, e], void 0;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
                }
            }, n._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                var s, r, n, a, o, l, h, _, u, c = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((f(e) || M(e)) && "number" != typeof e[0])
                    for (s = e.length; --s > -1;) this._kill(t, e[s], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (s = this._targets.length; --s > -1;)
                            if (e === this._targets[s]) {
                                o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (o) {
                        if (h = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                            for (n in h) o[n] && (u || (u = []), u.push(n));
                            if ((u || !t) && !H(this, i, e, u)) return !1
                        }
                        for (n in h)(a = o[n]) && (c && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, n.invalidate = function() {
                return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this
            }, n._enabled = function(t, e) {
                if (o || a.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; --i > -1;) this._siblings[i] = $(s[i], this, !0);
                    else this._siblings = $(this.target, this, !0)
                }
                return O.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, D.to = function(t, e, i) {
                return new D(t, e, i)
            }, D.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
            }, D.fromTo = function(t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new D(t, e, s)
            }, D.delayedCall = function(t, e, i, s, r) {
                return new D(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, D.set = function(t, e) {
                return new D(t, 0, e)
            }, D.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : D.selector(t) || t;
                var i, s, r, n;
                if ((f(t) || M(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; --i > -1;) s = s.concat(D.getTweensOf(t[i], e));
                    for (i = s.length; --i > -1;)
                        for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
                } else
                    for (s = $(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s
            }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t)
            };
            var te = g("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = te.prototype
            }, !0);
            if (n = te.prototype, te.version = "1.18.0", te.API = 2, n._firstPT = null, n._addTween = X, n.setRatio = N, n._kill = function(t) {
                    var e, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, n._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, D._onPluginEvent = function(t, e) {
                    var i, s, r, n, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                            (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
                        }
                        o = e._firstPT = r
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, te.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === te.API && (j[(new t[e])._propName] = t[e]);
                    return !0
                }, d.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        s = t.priority || 0,
                        r = t.overwriteProps,
                        n = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            te.call(this, i, s), this._overwriteProps = r || []
                        }, t.global === !0),
                        o = a.prototype = new te(i);
                    o.constructor = a, a.API = t.API;
                    for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                    return a.version = t.version, te.activate([a]), a
                }, s = t._gsQueue) {
                for (r = 0; s.length > r; r++) s[r]();
                for (n in p) p[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n)
            }
            o = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");




/**
 * Swiper 4.0.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2017 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 28, 2017
 */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function() {
    "use strict";

    function e(e, t) {
        var a = [],
            i = 0;
        if (e && !t && e instanceof r) return e;
        if (e)
            if ("string" == typeof e) {
                var s, n, o = e.trim();
                if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                    var l = "div";
                    for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), (n = document.createElement(l)).innerHTML = o, i = 0; i < n.childNodes.length; i += 1) a.push(n.childNodes[i])
                } else
                    for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || document).querySelectorAll(e.trim()) : [document.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) s[i] && a.push(s[i])
            } else if (e.nodeType || e === window || e === document) a.push(e);
        else if (e.length > 0 && e[0].nodeType)
            for (i = 0; i < e.length; i += 1) a.push(e[i]);
        return new r(a)
    }

    function t(e) {
        for (var t = [], a = 0; a < e.length; a += 1) - 1 === t.indexOf(e[a]) && t.push(e[a]);
        return t
    }

    function a() {
        var e = "onwheel" in d;
        if (!e) {
            var t = d.createElement("div");
            t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
        }
        return !e && d.implementation && d.implementation.hasFeature && !0 !== d.implementation.hasFeature("", "") && (e = d.implementation.hasFeature("Events.wheel", "3.0")), e
    }
    var i, s = i = "undefined" == typeof window ? {
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            getComputedStyle: function() {
                return {}
            },
            Image: function() {},
            Date: function() {},
            screen: {}
        } : window,
        r = function(e) {
            for (var t = this, a = 0; a < e.length; a += 1) t[a] = e[a];
            return t.length = e.length, this
        };
    e.fn = r.prototype, e.Class = r, e.Dom7 = r;
    "resize scroll".split(" ");
    var n = {
        addClass: function(e) {
            var t = this;
            if (void 0 === e) return this;
            for (var a = e.split(" "), i = 0; i < a.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== t[s].classList && t[s].classList.add(a[i]);
            return this
        },
        removeClass: function(e) {
            for (var t = this, a = e.split(" "), i = 0; i < a.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== t[s].classList && t[s].classList.remove(a[i]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = this, a = e.split(" "), i = 0; i < a.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== t[s].classList && t[s].classList.toggle(a[i]);
            return this
        },
        attr: function(e, t) {
            var a = arguments,
                i = this;
            if (1 !== arguments.length || "string" != typeof e) {
                for (var s = 0; s < this.length; s += 1)
                    if (2 === a.length) i[s].setAttribute(e, t);
                    else
                        for (var r in e) i[s][r] = e[r], i[s].setAttribute(r, e[r]);
                return this
            }
            if (this[0]) return this[0].getAttribute(e)
        },
        removeAttr: function(e) {
            for (var t = this, a = 0; a < this.length; a += 1) t[a].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var a, i = this;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1)(a = i[s]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
                return this
            }
            if (a = this[0]) {
                if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
                var r = a.getAttribute("data-" + e);
                if (r) return r
            }
        },
        transform: function(e) {
            for (var t = this, a = 0; a < this.length; a += 1) {
                var i = t[a].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        },
        transition: function(e) {
            var t = this;
            "string" != typeof e && (e += "ms");
            for (var a = 0; a < this.length; a += 1) {
                var i = t[a].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        },
        on: function() {
            function t(t) {
                var a = t.target;
                if (a) {
                    var i = t.target.dom7EventData || [];
                    if (i.unshift(t), e(a).is(o)) l.apply(a, i);
                    else
                        for (var s = e(a).parents(), r = 0; r < s.length; r += 1) e(s[r]).is(o) && l.apply(s[r], i)
                }
            }

            function a(e) {
                var t = e && e.target ? e.target.dom7EventData || [] : [];
                t.unshift(e), l.apply(this, t)
            }
            for (var i = this, s = [], r = arguments.length; r--;) s[r] = arguments[r];
            var n = s[0],
                o = s[1],
                l = s[2],
                d = s[3];
            if ("function" == typeof s[1]) {
                var p;
                n = (p = s)[0], l = p[1], d = p[2], o = void 0
            }
            d || (d = !1);
            for (var c, u = n.split(" "), h = 0; h < this.length; h += 1) {
                var v = i[h];
                if (o)
                    for (c = 0; c < u.length; c += 1) v.dom7LiveListeners || (v.dom7LiveListeners = []), v.dom7LiveListeners.push({
                        type: n,
                        listener: l,
                        proxyListener: t
                    }), v.addEventListener(u[c], t, d);
                else
                    for (c = 0; c < u.length; c += 1) v.dom7Listeners || (v.dom7Listeners = []), v.dom7Listeners.push({
                        type: n,
                        listener: l,
                        proxyListener: a
                    }), v.addEventListener(u[c], a, d)
            }
            return this
        },
        off: function() {
            for (var e = this, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            var i = t[0],
                s = t[1],
                r = t[2],
                n = t[3];
            if ("function" == typeof t[1]) {
                var o;
                i = (o = t)[0], r = o[1], n = o[2], s = void 0
            }
            n || (n = !1);
            for (var l = i.split(" "), d = 0; d < l.length; d += 1)
                for (var p = 0; p < this.length; p += 1) {
                    var c = e[p];
                    if (s) {
                        if (c.dom7LiveListeners)
                            for (var u = 0; u < c.dom7LiveListeners.length; u += 1) r ? c.dom7LiveListeners[u].listener === r && c.removeEventListener(l[d], c.dom7LiveListeners[u].proxyListener, n) : c.dom7LiveListeners[u].type === l[d] && c.removeEventListener(l[d], c.dom7LiveListeners[u].proxyListener, n)
                    } else if (c.dom7Listeners)
                        for (var h = 0; h < c.dom7Listeners.length; h += 1) r ? c.dom7Listeners[h].listener === r && c.removeEventListener(l[d], c.dom7Listeners[h].proxyListener, n) : c.dom7Listeners[h].type === l[d] && c.removeEventListener(l[d], c.dom7Listeners[h].proxyListener, n)
                }
            return this
        },
        trigger: function() {
            for (var e = this, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            for (var i = t[0].split(" "), s = t[1], r = 0; r < i.length; r += 1)
                for (var n = 0; n < this.length; n += 1) {
                    var o = void 0;
                    try {
                        o = new window.CustomEvent(i[r], {
                            detail: s,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (o = document.createEvent("Event")).initEvent(i[r], !0, !0), o.detail = s
                    }
                    e[n].dom7EventData = t.filter(function(e, t) {
                        return t > 0
                    }), e[n].dispatchEvent(o), e[n].dom7EventData = [], delete e[n].dom7EventData
                }
            return this
        },
        transitionEnd: function(e) {
            function t(r) {
                if (r.target === this)
                    for (e.call(this, r), a = 0; a < i.length; a += 1) s.off(i[a], t)
            }
            var a, i = ["webkitTransitionEnd", "transitionend"],
                s = this;
            if (e)
                for (a = 0; a < i.length; a += 1) s.on(i[a], t);
            return this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (this.length > 0) {
                var e = this[0],
                    t = e.getBoundingClientRect(),
                    a = document.body,
                    i = e.clientTop || a.clientTop || 0,
                    s = e.clientLeft || a.clientLeft || 0,
                    r = e === window ? window.scrollY : e.scrollTop,
                    n = e === window ? window.scrollX : e.scrollLeft;
                return {
                    top: t.top + r - i,
                    left: t.left + n - s
                }
            }
            return null
        },
        css: function(e, t) {
            var a, i = this;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (var s in e) i[a].style[s] = e[s];
                    return this
                }
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) i[a].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            var t = this;
            if (!e) return this;
            for (var a = 0; a < this.length; a += 1)
                if (!1 === e.call(t[a], a, t[a])) return t;
            return this
        },
        html: function(e) {
            var t = this;
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var a = 0; a < this.length; a += 1) t[a].innerHTML = e;
            return this
        },
        text: function(e) {
            var t = this;
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var a = 0; a < this.length; a += 1) t[a].textContent = e;
            return this
        },
        is: function(t) {
            var a, i, s = this[0];
            if (!s || void 0 === t) return !1;
            if ("string" == typeof t) {
                if (s.matches) return s.matches(t);
                if (s.webkitMatchesSelector) return s.webkitMatchesSelector(t);
                if (s.msMatchesSelector) return s.msMatchesSelector(t);
                for (a = e(t), i = 0; i < a.length; i += 1)
                    if (a[i] === s) return !0;
                return !1
            }
            if (t === document) return s === document;
            if (t === window) return s === window;
            if (t.nodeType || t instanceof r) {
                for (a = t.nodeType ? [t] : t, i = 0; i < a.length; i += 1)
                    if (a[i] === s) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            var t, a = this.length;
            return e > a - 1 ? new r([]) : e < 0 ? (t = a + e, new r(t < 0 ? [] : [this[t]])) : new r([this[e]])
        },
        append: function() {
            for (var e = this, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            for (var i, s = 0; s < t.length; s += 1) {
                i = t[s];
                for (var n = 0; n < this.length; n += 1)
                    if ("string" == typeof i) {
                        var o = document.createElement("div");
                        for (o.innerHTML = i; o.firstChild;) e[n].appendChild(o.firstChild)
                    } else if (i instanceof r)
                    for (var l = 0; l < i.length; l += 1) e[n].appendChild(i[l]);
                else e[n].appendChild(i)
            }
            return this
        },
        prepend: function(e) {
            var t, a, i = this;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var s = document.createElement("div");
                    for (s.innerHTML = e, a = s.childNodes.length - 1; a >= 0; a -= 1) i[t].insertBefore(s.childNodes[a], i[t].childNodes[0])
                } else if (e instanceof r)
                for (a = 0; a < e.length; a += 1) i[t].insertBefore(e[a], i[t].childNodes[0]);
            else i[t].insertBefore(e, i[t].childNodes[0]);
            return this
        },
        next: function(t) {
            return new r(this.length > 0 ? t ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
        },
        nextAll: function(t) {
            var a = [],
                i = this[0];
            if (!i) return new r([]);
            for (; i.nextElementSibling;) {
                var s = i.nextElementSibling;
                t ? e(s).is(t) && a.push(s) : a.push(s), i = s
            }
            return new r(a)
        },
        prev: function(t) {
            if (this.length > 0) {
                var a = this[0];
                return new r(t ? a.previousElementSibling && e(a.previousElementSibling).is(t) ? [a.previousElementSibling] : [] : a.previousElementSibling ? [a.previousElementSibling] : [])
            }
            return new r([])
        },
        prevAll: function(t) {
            var a = [],
                i = this[0];
            if (!i) return new r([]);
            for (; i.previousElementSibling;) {
                var s = i.previousElementSibling;
                t ? e(s).is(t) && a.push(s) : a.push(s), i = s
            }
            return new r(a)
        },
        parent: function(a) {
            for (var i = this, s = [], r = 0; r < this.length; r += 1) null !== i[r].parentNode && (a ? e(i[r].parentNode).is(a) && s.push(i[r].parentNode) : s.push(i[r].parentNode));
            return e(t(s))
        },
        parents: function(a) {
            for (var i = this, s = [], r = 0; r < this.length; r += 1)
                for (var n = i[r].parentNode; n;) a ? e(n).is(a) && s.push(n) : s.push(n), n = n.parentNode;
            return e(t(s))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new r([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            for (var t = this, a = [], i = 0; i < this.length; i += 1)
                for (var s = t[i].querySelectorAll(e), n = 0; n < s.length; n += 1) a.push(s[n]);
            return new r(a)
        },
        children: function(a) {
            for (var i = this, s = [], n = 0; n < this.length; n += 1)
                for (var o = i[n].childNodes, l = 0; l < o.length; l += 1) a ? 1 === o[l].nodeType && e(o[l]).is(a) && s.push(o[l]) : 1 === o[l].nodeType && s.push(o[l]);
            return new r(t(s))
        },
        remove: function() {
            for (var e = this, t = 0; t < this.length; t += 1) e[t].parentNode && e[t].parentNode.removeChild(e[t]);
            return this
        },
        add: function() {
            for (var t = [], a = arguments.length; a--;) t[a] = arguments[a];
            var i, s, r = this;
            for (i = 0; i < t.length; i += 1) {
                var n = e(t[i]);
                for (s = 0; s < n.length; s += 1) r[r.length] = n[s], r.length += 1
            }
            return r
        },
        styles: function() {
            return this[0] ? window.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(n).forEach(function(t) {
        e.fn[t] = n[t]
    });
    var o, l = {
            deleteProps: function(e) {
                var t = e;
                Object.keys(t).forEach(function(e) {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                })
            },
            nextTick: function(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            },
            now: function() {
                return Date.now()
            },
            getTranslate: function(e, t) {
                void 0 === t && (t = "x");
                var a, i, r, n = s.getComputedStyle(e, null);
                return s.WebKitCSSMatrix ? ((i = n.transform || n.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")), r = new s.WebKitCSSMatrix("none" === i ? "" : i)) : a = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = s.WebKitCSSMatrix ? r.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? r.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
            },
            parseUrlQuery: function(e) {
                var t, a, i, r, n = {},
                    o = e || s.location.href;
                if ("string" == typeof o && o.length)
                    for (r = (a = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                            return "" !== e
                        })).length, t = 0; t < r; t += 1) i = a[t].replace(/#\S+/g, "").split("="), n[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
                return n
            },
            isObject: function(e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
            },
            extend: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
                    var s = e[i];
                    if (void 0 !== s && null !== s)
                        for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
                            var d = r[n],
                                p = Object.getOwnPropertyDescriptor(s, d);
                            void 0 !== p && p.enumerable && (l.isObject(a[d]) && l.isObject(s[d]) ? l.extend(a[d], s[d]) : !l.isObject(a[d]) && l.isObject(s[d]) ? (a[d] = {}, l.extend(a[d], s[d])) : a[d] = s[d])
                        }
                }
                return a
            }
        },
        d = o = "undefined" == typeof document ? {
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return {}
            },
            querySelectorAll: function() {
                return []
            },
            createElement: function() {
                return {
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document,
        p = {
            touch: s.Modernizr && !0 === s.Modernizr.touch || !!("ontouchstart" in s || s.DocumentTouch && d instanceof s.DocumentTouch),
            transforms3d: s.Modernizr && !0 === s.Modernizr.csstransforms3d || function() {
                var e = d.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
            }(),
            flexbox: function() {
                for (var e = d.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1)
                    if (t[a] in e) return !0;
                return !1
            }(),
            observer: "MutationObserver" in s || "WebkitMutationObserver" in s,
            passiveListener: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    s.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in s
        },
        c = function(e) {
            void 0 === e && (e = {});
            var t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
                t.on(e, t.params.on[e])
            })
        },
        u = {
            components: {}
        };
    c.prototype.on = function(e, t) {
        var a = this;
        return "function" != typeof t ? a : (e.split(" ").forEach(function(e) {
            a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e].push(t)
        }), a)
    }, c.prototype.once = function(e, t) {
        function a() {
            for (var s = [], r = arguments.length; r--;) s[r] = arguments[r];
            t.apply(i, s), i.off(e, a)
        }
        var i = this;
        return "function" != typeof t ? i : i.on(e, a)
    }, c.prototype.off = function(e, t) {
        var a = this;
        return e.split(" ").forEach(function(e) {
            void 0 === t ? a.eventsListeners[e] = [] : a.eventsListeners[e].forEach(function(i, s) {
                i === t && a.eventsListeners[e].splice(s, 1)
            })
        }), a
    }, c.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var a = this;
        if (!a.eventsListeners) return a;
        var i, s, r;
        return "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), r = a) : (i = e[0].events, s = e[0].data, r = e[0].context || a), (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
            if (a.eventsListeners[e]) {
                var t = [];
                a.eventsListeners[e].forEach(function(e) {
                    t.push(e)
                }), t.forEach(function(e) {
                    e.apply(r, s)
                })
            }
        }), a
    }, c.prototype.useModulesParams = function(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(a) {
            var i = t.modules[a];
            i.params && l.extend(e, i.params)
        })
    }, c.prototype.useModules = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(a) {
            var i = t.modules[a],
                s = e[a] || {};
            i.instance && Object.keys(i.instance).forEach(function(e) {
                var a = i.instance[e];
                t[e] = "function" == typeof a ? a.bind(t) : a
            }), i.on && t.on && Object.keys(i.on).forEach(function(e) {
                t.on(e, i.on[e])
            }), i.create && i.create.bind(t)(s)
        })
    }, u.components.set = function(e) {
        var t = this;
        t.use && t.use(e)
    }, c.installModule = function(e) {
        for (var t = [], a = arguments.length - 1; a-- > 0;) t[a] = arguments[a + 1];
        var i = this;
        i.prototype.modules || (i.prototype.modules = {});
        var s = e.name || Object.keys(i.prototype.modules).length + "_" + l.now();
        return i.prototype.modules[s] = e, e.proto && Object.keys(e.proto).forEach(function(t) {
            i.prototype[t] = e.proto[t]
        }), e.static && Object.keys(e.static).forEach(function(t) {
            i[t] = e.static[t]
        }), e.install && e.install.apply(i, t), i
    }, c.use = function(e) {
        for (var t = [], a = arguments.length - 1; a-- > 0;) t[a] = arguments[a + 1];
        var i = this;
        return Array.isArray(e) ? (e.forEach(function(e) {
            return i.installModule(e)
        }), i) : i.installModule.apply(i, [e].concat(t))
    }, Object.defineProperties(c, u);
    var h = {
            updateSize: function() {
                var e, t, a = this,
                    i = a.$el;
                e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), l.extend(a, {
                    width: e,
                    height: t,
                    size: a.isHorizontal() ? e : t
                }))
            },
            updateSlides: function() {
                var e = this,
                    t = e.params,
                    a = e.$wrapperEl,
                    i = e.size,
                    s = e.rtl,
                    r = e.wrongRTL,
                    n = a.children("." + e.params.slideClass),
                    o = e.virtual && t.virtual.enabled ? e.virtual.slides.length : n.length,
                    d = [],
                    c = [],
                    u = [],
                    h = t.slidesOffsetBefore;
                "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
                var v = t.slidesOffsetAfter;
                "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
                var f = o,
                    m = e.snapGrid.length,
                    g = e.snapGrid.length,
                    b = t.spaceBetween,
                    w = -h,
                    y = 0,
                    x = 0;
                if (void 0 !== i) {
                    "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * i), e.virtualSize = -b, s ? n.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : n.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    var T;
                    t.slidesPerColumn > 1 && (T = Math.floor(o / t.slidesPerColumn) === o / e.params.slidesPerColumn ? o : Math.ceil(o / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));
                    for (var E, S = t.slidesPerColumn, C = T / S, M = C - (t.slidesPerColumn * C - o), z = 0; z < o; z += 1) {
                        E = 0;
                        var P = n.eq(z);
                        if (t.slidesPerColumn > 1) {
                            var k = void 0,
                                $ = void 0,
                                I = void 0;
                            "column" === t.slidesPerColumnFill ? (I = z - ($ = Math.floor(z / S)) * S, ($ > M || $ === M && I === S - 1) && (I += 1) >= S && (I = 0, $ += 1), k = $ + I * T / S, P.css({
                                "-webkit-box-ordinal-group": k,
                                "-moz-box-ordinal-group": k,
                                "-ms-flex-order": k,
                                "-webkit-order": k,
                                order: k
                            })) : $ = z - (I = Math.floor(z / C)) * C, P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== I && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", I)
                        }
                        "none" !== P.css("display") && ("auto" === t.slidesPerView ? (E = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0), t.roundLengths && (E = Math.floor(E))) : (E = (i - (t.slidesPerView - 1) * b) / t.slidesPerView, t.roundLengths && (E = Math.floor(E)), n[z] && (e.isHorizontal() ? n[z].style.width = E + "px" : n[z].style.height = E + "px")), n[z] && (n[z].swiperSlideSize = E), u.push(E), t.centeredSlides ? (w = w + E / 2 + y / 2 + b, 0 === y && 0 !== z && (w = w - i / 2 - b), 0 === z && (w = w - i / 2 - b), Math.abs(w) < .001 && (w = 0), x % t.slidesPerGroup == 0 && d.push(w), c.push(w)) : (x % t.slidesPerGroup == 0 && d.push(w), c.push(w), w = w + E + b), e.virtualSize += E + b, y = E, x += 1)
                    }
                    e.virtualSize = Math.max(e.virtualSize, i) + v;
                    var L;
                    if (s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({
                            width: e.virtualSize + t.spaceBetween + "px"
                        }), p.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
                            width: e.virtualSize + t.spaceBetween + "px"
                        }) : a.css({
                            height: e.virtualSize + t.spaceBetween + "px"
                        })), t.slidesPerColumn > 1 && (e.virtualSize = (E + t.spaceBetween) * T, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({
                            width: e.virtualSize + t.spaceBetween + "px"
                        }) : a.css({
                            height: e.virtualSize + t.spaceBetween + "px"
                        }), t.centeredSlides)) {
                        L = [];
                        for (var D = 0; D < d.length; D += 1) d[D] < e.virtualSize + d[0] && L.push(d[D]);
                        d = L
                    }
                    if (!t.centeredSlides) {
                        L = [];
                        for (var O = 0; O < d.length; O += 1) d[O] <= e.virtualSize - i && L.push(d[O]);
                        d = L, Math.floor(e.virtualSize - i) - Math.floor(d[d.length - 1]) > 1 && d.push(e.virtualSize - i)
                    }
                    0 === d.length && (d = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? n.css({
                        marginLeft: b + "px"
                    }) : n.css({
                        marginRight: b + "px"
                    }) : n.css({
                        marginBottom: b + "px"
                    })), l.extend(e, {
                        slides: n,
                        snapGrid: d,
                        slidesGrid: c,
                        slidesSizesGrid: u
                    }), o !== f && e.emit("slidesLengthChange"), d.length !== m && e.emit("snapGridLengthChange"), c.length !== g && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
                }
            },
            updateAutoHeight: function() {
                var e, t = this,
                    a = [],
                    i = 0;
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                    for (e = 0; e < Math.ceil(t.params.slidesPerView); e += 1) {
                        var s = t.activeIndex + e;
                        if (s > t.slides.length) break;
                        a.push(t.slides.eq(s)[0])
                    } else a.push(t.slides.eq(t.activeIndex)[0]);
                for (e = 0; e < a.length; e += 1)
                    if (void 0 !== a[e]) {
                        var r = a[e].offsetHeight;
                        i = r > i ? r : i
                    }
                i && t.$wrapperEl.css("height", i + "px")
            },
            updateSlidesOffset: function() {
                for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) t[a].swiperSlideOffset = e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop
            },
            updateSlidesProgress: function(e) {
                void 0 === e && (e = this.translate || 0);
                var t = this,
                    a = t.params,
                    i = t.slides,
                    s = t.rtl;
                if (0 !== i.length) {
                    void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                    var r = -e;
                    s && (r = e), i.removeClass(a.slideVisibleClass);
                    for (var n = 0; n < i.length; n += 1) {
                        var o = i[n],
                            l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
                        if (a.watchSlidesVisibility) {
                            var d = -(r - o.swiperSlideOffset),
                                p = d + t.slidesSizesGrid[n];
                            (d >= 0 && d < t.size || p > 0 && p <= t.size || d <= 0 && p >= t.size) && i.eq(n).addClass(a.slideVisibleClass)
                        }
                        o.progress = s ? -l : l
                    }
                }
            },
            updateProgress: function(e) {
                void 0 === e && (e = this.translate || 0);
                var t = this,
                    a = t.params,
                    i = t.maxTranslate() - t.minTranslate(),
                    s = t.progress,
                    r = t.isBeginning,
                    n = t.isEnd,
                    o = r,
                    d = n;
                0 === i ? (s = 0, r = !0, n = !0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = s >= 1), l.extend(t, {
                    progress: s,
                    isBeginning: r,
                    isEnd: n
                }), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !d && t.emit("reachEnd toEdge"), (o && !r || d && !n) && t.emit("fromEdge"), t.emit("progress", s)
            },
            updateSlidesClasses: function() {
                var e = this,
                    t = e.slides,
                    a = e.params,
                    i = e.$wrapperEl,
                    s = e.activeIndex,
                    r = e.realIndex,
                    n = e.virtual && a.virtual.enabled;
                t.removeClass(a.slideActiveClass + " " + a.slideNextClass + " " + a.slidePrevClass + " " + a.slideDuplicateActiveClass + " " + a.slideDuplicateNextClass + " " + a.slideDuplicatePrevClass);
                var o;
                (o = n ? e.$wrapperEl.find("." + a.slideClass + '[data-swiper-slide-index="' + s + '"]') : t.eq(s)).addClass(a.slideActiveClass), a.loop && (o.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(a.slideDuplicateActiveClass) : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(a.slideDuplicateActiveClass));
                var l = o.nextAll("." + a.slideClass).eq(0).addClass(a.slideNextClass);
                a.loop && 0 === l.length && (l = t.eq(0)).addClass(a.slideNextClass);
                var d = o.prevAll("." + a.slideClass).eq(0).addClass(a.slidePrevClass);
                a.loop && 0 === d.length && (d = t.eq(-1)).addClass(a.slidePrevClass), a.loop && (l.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass) : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass), d.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass) : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass))
            },
            updateActiveIndex: function(e) {
                var t, a = this,
                    i = a.rtl ? a.translate : -a.translate,
                    s = a.slidesGrid,
                    r = a.snapGrid,
                    n = a.params,
                    o = a.activeIndex,
                    d = a.realIndex,
                    p = a.snapIndex,
                    c = e;
                if (void 0 === c) {
                    for (var u = 0; u < s.length; u += 1) void 0 !== s[u + 1] ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2 ? c = u : i >= s[u] && i < s[u + 1] && (c = u + 1) : i >= s[u] && (c = u);
                    n.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                }
                if ((t = r.indexOf(i) >= 0 ? r.indexOf(i) : Math.floor(c / n.slidesPerGroup)) >= r.length && (t = r.length - 1), c !== o) {
                    var h = parseInt(a.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                    l.extend(a, {
                        snapIndex: t,
                        realIndex: h,
                        previousIndex: o,
                        activeIndex: c
                    }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), d !== h && a.emit("realIndexChange"), a.emit("slideChange")
                } else t !== p && (a.snapIndex = t, a.emit("snapIndexChange"))
            },
            updateClickedSlide: function(t) {
                var a = this,
                    i = a.params,
                    s = e(t.target).closest("." + i.slideClass)[0],
                    r = !1;
                if (s)
                    for (var n = 0; n < a.slides.length; n += 1) a.slides[n] === s && (r = !0);
                if (!s || !r) return a.clickedSlide = void 0, void(a.clickedIndex = void 0);
                a.clickedSlide = s, a.virtual && a.params.virtual.enabled ? a.clickedIndex = parseInt(e(s).attr("data-swiper-slide-index"), 10) : a.clickedIndex = e(s).index(), i.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide()
            }
        },
        v = {
            getTranslate: function(e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var t = this,
                    a = t.params,
                    i = t.rtl,
                    s = t.translate,
                    r = t.$wrapperEl;
                if (a.virtualTranslate) return i ? -s : s;
                var n = l.getTranslate(r[0], e);
                return i && (n = -n), n || 0
            },
            setTranslate: function(e, t) {
                var a = this,
                    i = a.rtl,
                    s = a.params,
                    r = a.$wrapperEl,
                    n = a.progress,
                    o = 0,
                    l = 0;
                a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (p.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.translate = a.isHorizontal() ? o : l;
                var d = a.maxTranslate() - a.minTranslate();
                (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            }
        },
        f = {
            setTransition: function(e, t) {
                var a = this;
                a.$wrapperEl.transition(e), a.emit("setTransition", e, t)
            },
            transitionStart: function(e) {
                void 0 === e && (e = !0);
                var t = this,
                    a = t.activeIndex,
                    i = t.params,
                    s = t.previousIndex;
                i.autoHeight && t.updateAutoHeight(), t.emit("transitionStart"), e && a !== s && (t.emit("slideChangeTransitionStart"), a > s ? t.emit("slideNextTransitionStart") : t.emit("slidePrevTransitionStart"))
            },
            transitionEnd: function(e) {
                void 0 === e && (e = !0);
                var t = this,
                    a = t.activeIndex,
                    i = t.previousIndex;
                t.animating = !1, t.setTransition(0), t.emit("transitionEnd"), e && a !== i && (t.emit("slideChangeTransitionEnd"), a > i ? t.emit("slideNextTransitionEnd") : t.emit("slidePrevTransitionEnd"))
            }
        },
        m = function() {
            return {
                isSafari: function() {
                    var e = s.navigator.userAgent.toLowerCase();
                    return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                }(),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent),
                ie: s.navigator.pointerEnabled || s.navigator.msPointerEnabled,
                ieTouch: s.navigator.msPointerEnabled && s.navigator.msMaxTouchPoints > 1 || s.navigator.pointerEnabled && s.navigator.maxTouchPoints > 1,
                lteIE9: function() {
                    var e = d.createElement("div");
                    return e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e", 1 === e.getElementsByTagName("i").length
                }()
            }
        }(),
        g = {
            slideTo: function(e, t, a, i) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
                var s = this,
                    r = e;
                r < 0 && (r = 0);
                var n = s.params,
                    o = s.snapGrid,
                    l = s.slidesGrid,
                    d = s.previousIndex,
                    p = s.activeIndex,
                    c = s.rtl,
                    u = s.$wrapperEl,
                    h = Math.floor(r / n.slidesPerGroup);
                h >= o.length && (h = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
                var v = -o[h];
                if (s.updateProgress(v), n.normalizeSlideIndex)
                    for (var f = 0; f < l.length; f += 1) - Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
                return !(!s.allowSlideNext && v < s.translate && v < s.minTranslate() || !s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r || (c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), 1) : (0 === t || m.lteIE9 ? (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a), s.transitionEnd(a)) : (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a), s.animating || (s.animating = !0, u.transitionEnd(function() {
                    s && !s.destroyed && s.transitionEnd(a)
                }))), 0)))
            },
            slideNext: function(e, t, a) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var i = this,
                    s = i.params,
                    r = i.animating;
                return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
            },
            slidePrev: function(e, t, a) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var i = this,
                    s = i.params,
                    r = i.animating;
                return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex - 1, e, t, a)) : i.slideTo(i.activeIndex - 1, e, t, a)
            },
            slideReset: function(e, t, a) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var i = this;
                return i.slideTo(i.activeIndex, e, t, a)
            },
            slideToClickedSlide: function() {
                var t, a = this,
                    i = a.params,
                    s = a.$wrapperEl,
                    r = "auto" === i.slidesPerView ? a.slidesPerViewDynamic() : i.slidesPerView,
                    n = a.clickedIndex;
                if (i.loop) {
                    if (a.animating) return;
                    t = parseInt(e(a.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? n < a.loopedSlides - r / 2 || n > a.slides.length - a.loopedSlides + r / 2 ? (a.loopFix(), n = s.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), l.nextTick(function() {
                        a.slideTo(n)
                    })) : a.slideTo(n) : n > a.slides.length - r ? (a.loopFix(), n = s.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), l.nextTick(function() {
                        a.slideTo(n)
                    })) : a.slideTo(n)
                } else a.slideTo(n)
            }
        },
        b = {
            loopCreate: function() {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl;
                i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
                var s = i.children("." + a.slideClass);
                if (a.loopFillGroupWithBlank) {
                    var r = a.slidesPerGroup - s.length % a.slidesPerGroup;
                    if (r !== a.slidesPerGroup) {
                        for (var n = 0; n < r; n += 1) {
                            var o = e(d.createElement("div")).addClass(a.slideClass + " " + a.slideBlankClass);
                            i.append(o)
                        }
                        s = i.children("." + a.slideClass)
                    }
                }
                "auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = s.length), t.loopedSlides = parseInt(a.loopedSlides || a.slidesPerView, 10), t.loopedSlides += a.loopAdditionalSlides, t.loopedSlides > s.length && (t.loopedSlides = s.length);
                var l = [],
                    p = [];
                s.each(function(a, i) {
                    var r = e(i);
                    a < t.loopedSlides && p.push(i), a < s.length && a >= s.length - t.loopedSlides && l.push(i), r.attr("data-swiper-slide-index", a)
                });
                for (var c = 0; c < p.length; c += 1) i.append(e(p[c].cloneNode(!0)).addClass(a.slideDuplicateClass));
                for (var u = l.length - 1; u >= 0; u -= 1) i.prepend(e(l[u].cloneNode(!0)).addClass(a.slideDuplicateClass))
            },
            loopFix: function() {
                var e, t = this,
                    a = t.params,
                    i = t.activeIndex,
                    s = t.slides,
                    r = t.loopedSlides,
                    n = t.allowSlidePrev,
                    o = t.allowSlideNext;
                t.allowSlidePrev = !0, t.allowSlideNext = !0, i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0)) : ("auto" === a.slidesPerView && i >= 2 * r || i > s.length - 2 * a.slidesPerView) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0)), t.allowSlidePrev = n, t.allowSlideNext = o
            },
            loopDestroy: function() {
                var e = this,
                    t = e.$wrapperEl,
                    a = e.params,
                    i = e.slides;
                t.children("." + a.slideClass + "." + a.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index")
            }
        },
        w = {
            setGrabCursor: function(e) {
                var t = this;
                if (!p.touch && t.params.simulateTouch) {
                    var a = t.el;
                    a.style.cursor = "move", a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", a.style.cursor = e ? "-moz-grabbin" : "-moz-grab", a.style.cursor = e ? "grabbing" : "grab"
                }
            },
            unsetGrabCursor: function() {
                var e = this;
                p.touch || (e.el.style.cursor = "")
            }
        },
        y = {
            appendSlide: function(e) {
                var t = this,
                    a = t.$wrapperEl,
                    i = t.params;
                if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                    for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
                else a.append(e);
                i.loop && t.loopCreate(), i.observer && p.observer || t.update()
            },
            prependSlide: function(e) {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl,
                    s = t.activeIndex;
                a.loop && t.loopDestroy();
                var r = s + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
                    r = s + e.length
                } else i.prepend(e);
                a.loop && t.loopCreate(), a.observer && p.observer || t.update(), t.slideTo(r, 0, !1)
            },
            removeSlide: function(e) {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl,
                    s = t.activeIndex;
                a.loop && (t.loopDestroy(), t.slides = i.children("." + a.slideClass));
                var r, n = s;
                if ("object" == typeof e && "length" in e) {
                    for (var o = 0; o < e.length; o += 1) r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
                    n = Math.max(n, 0)
                } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);
                a.loop && t.loopCreate(), a.observer && p.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
            },
            removeAllSlides: function() {
                for (var e = this, t = [], a = 0; a < e.slides.length; a += 1) t.push(a);
                e.removeSlide(t)
            }
        },
        x = function() {
            var e = s.navigator.userAgent,
                t = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    windows: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    cordova: s.cordova || s.phonegap,
                    phonegap: s.cordova || s.phonegap
                },
                a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                r = e.match(/(iPad).*OS\s([\d_]+)/),
                n = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                o = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (r || o || n) && (t.os = "ios", t.ios = !0), o && !n && (t.osVersion = o[2].replace(/_/g, "."), t.iphone = !0), r && (t.osVersion = r[2].replace(/_/g, "."), t.ipad = !0), n && (t.osVersion = n[3] ? n[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (o || r || n) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
                var l = t.osVersion.split("."),
                    p = d.querySelector('meta[name="viewport"]');
                t.minimalUi = !t.webView && (n || o) && (1 * l[0] == 7 ? 1 * l[1] >= 1 : 1 * l[0] > 7) && p && p.getAttribute("content").indexOf("minimal-ui") >= 0
            }
            return t.pixelRatio = s.devicePixelRatio || 1, t
        }(),
        T = function(t) {
            var a = this,
                i = a.touchEventsData,
                s = a.params,
                r = a.touches,
                n = t;
            if (n.originalEvent && (n = n.originalEvent), i.isTouchEvent = "touchstart" === n.type, (i.isTouchEvent || !("which" in n) || 3 !== n.which) && (!i.isTouched || !i.isMoved))
                if (s.noSwiping && e(n.target).closest("." + s.noSwipingClass)[0]) a.allowClick = !0;
                else if (!s.swipeHandler || e(n).closest(s.swipeHandler)[0]) {
                r.currentX = "touchstart" === n.type ? n.targetTouches[0].pageX : n.pageX, r.currentY = "touchstart" === n.type ? n.targetTouches[0].pageY : n.pageY;
                var o = r.currentX,
                    p = r.currentY;
                if (!(x.ios && !x.cordova && s.iOSEdgeSwipeDetection && o <= s.iOSEdgeSwipeThreshold && o >= window.screen.width - s.iOSEdgeSwipeThreshold)) {
                    if (l.extend(i, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }), r.startX = o, r.startY = p, i.touchStartTime = l.now(), a.allowClick = !0, a.updateSize(), a.swipeDirection = void 0, s.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== n.type) {
                        var c = !0;
                        e(n.target).is(i.formElements) && (c = !1), d.activeElement && e(d.activeElement).is(i.formElements) && d.activeElement.blur(), c && a.allowTouchMove && n.preventDefault()
                    }
                    a.emit("touchStart", n)
                }
            }
        },
        E = function(t) {
            var a = this,
                i = a.touchEventsData,
                s = a.params,
                r = a.touches,
                n = a.rtl,
                o = t;
            if (o.originalEvent && (o = o.originalEvent), !i.isTouchEvent || "mousemove" !== o.type) {
                var p = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
                    c = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
                if (o.preventedByNestedSwiper) return r.startX = p, void(r.startY = c);
                if (!a.allowTouchMove) return a.allowClick = !1, void(i.isTouched && (l.extend(r, {
                    startX: p,
                    startY: c,
                    currentX: p,
                    currentY: c
                }), i.touchStartTime = l.now()));
                if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                    if (a.isVertical()) {
                        if (c < r.startY && a.translate <= a.maxTranslate() || c > r.startY && a.translate >= a.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                    } else if (p < r.startX && a.translate <= a.maxTranslate() || p > r.startX && a.translate >= a.minTranslate()) return;
                if (i.isTouchEvent && d.activeElement && o.target === d.activeElement && e(o.target).is(i.formElements)) return i.isMoved = !0, void(a.allowClick = !1);
                if (i.allowTouchCallbacks && a.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
                    r.currentX = p, r.currentY = c;
                    var u = r.currentX - r.startX,
                        h = r.currentY - r.startY;
                    if (void 0 === i.isScrolling) {
                        var v;
                        a.isHorizontal() && r.currentY === r.startY || a.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : u * u + h * h >= 25 && (v = 180 * Math.atan2(Math.abs(h), Math.abs(u)) / Math.PI, i.isScrolling = a.isHorizontal() ? v > s.touchAngle : 90 - v > s.touchAngle)
                    }
                    if (i.isScrolling && a.emit("touchMoveOpposite", o), "undefined" == typeof startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isTouched)
                        if (i.isScrolling) i.isTouched = !1;
                        else if (i.startMoving) {
                        a.allowClick = !1, o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), i.isMoved || (s.loop && a.loopFix(), i.startTranslate = a.getTranslate(), a.setTransition(0), a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0), a.emit("sliderFirstMove", o)), a.emit("sliderMove", o), i.isMoved = !0;
                        var f = a.isHorizontal() ? u : h;
                        r.diff = f, f *= s.touchRatio, n && (f = -f), a.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
                        var m = !0,
                            g = s.resistanceRatio;
                        if (s.touchReleaseOnEdges && (g = 0), f > 0 && i.currentTranslate > a.minTranslate() ? (m = !1, s.resistance && (i.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + i.startTranslate + f, g))) : f < 0 && i.currentTranslate < a.maxTranslate() && (m = !1, s.resistance && (i.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - i.startTranslate - f, g))), m && (o.preventedByNestedSwiper = !0), !a.allowSlideNext && "next" === a.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !a.allowSlidePrev && "prev" === a.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                            if (!(Math.abs(f) > s.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = a.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                        }
                        s.followFinger && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (a.updateActiveIndex(), a.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                            position: r[a.isHorizontal() ? "startX" : "startY"],
                            time: i.touchStartTime
                        }), i.velocities.push({
                            position: r[a.isHorizontal() ? "currentX" : "currentY"],
                            time: l.now()
                        })), a.updateProgress(i.currentTranslate), a.setTranslate(i.currentTranslate))
                    }
                }
            }
        },
        S = function(e) {
            var t = this,
                a = t.touchEventsData,
                i = t.params,
                s = t.touches,
                r = t.rtl,
                n = t.$wrapperEl,
                o = t.slidesGrid,
                d = t.snapGrid,
                p = e;
            if (p.originalEvent && (p = p.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", p), a.allowTouchCallbacks = !1, a.isTouched) {
                i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var c = l.now(),
                    u = c - a.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(p), t.emit("tap", p), u < 300 && c - a.lastClickTime > 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = l.nextTick(function() {
                        t && !t.destroyed && t.emit("click", p)
                    }, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", p))), a.lastClickTime = l.now(), l.nextTick(function() {
                        t.destroyed || (t.allowClick = !0)
                    }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, void(a.isMoved = !1);
                a.isTouched = !1, a.isMoved = !1;
                var h;
                if (h = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
                    if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (h > -t.maxTranslate()) return void(t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));
                    if (i.freeModeMomentum) {
                        if (a.velocities.length > 1) {
                            var v = a.velocities.pop(),
                                f = a.velocities.pop(),
                                m = v.position - f.position,
                                g = v.time - f.time;
                            t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || l.now() - v.time > 300) && (t.velocity = 0)
                        } else t.velocity = 0;
                        t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
                        var b = 1e3 * i.freeModeMomentumRatio,
                            w = t.velocity * b,
                            y = t.translate + w;
                        r && (y = -y);
                        var x, T = !1,
                            E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                        if (y < t.maxTranslate()) i.freeModeMomentumBounce ? (y + t.maxTranslate() < -E && (y = t.maxTranslate() - E), x = t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : y = t.maxTranslate();
                        else if (y > t.minTranslate()) i.freeModeMomentumBounce ? (y - t.minTranslate() > E && (y = t.minTranslate() + E), x = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : y = t.minTranslate();
                        else if (i.freeModeSticky) {
                            for (var S, C = 0; C < d.length; C += 1)
                                if (d[C] > -y) {
                                    S = C;
                                    break
                                }
                            y = -(y = Math.abs(d[S] - y) < Math.abs(d[S - 1] - y) || "next" === t.swipeDirection ? d[S] : d[S - 1])
                        }
                        if (0 !== t.velocity) b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);
                        else if (i.freeModeSticky) return void t.slideReset();
                        i.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(), t.animating = !0, n.transitionEnd(function() {
                            t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(x), n.transitionEnd(function() {
                                t && !t.destroyed && t.transitionEnd()
                            }))
                        })) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(), t.animating || (t.animating = !0, n.transitionEnd(function() {
                            t && !t.destroyed && t.transitionEnd()
                        }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
                    }(!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                } else {
                    for (var M = 0, z = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup) void 0 !== o[P + i.slidesPerGroup] ? h >= o[P] && h < o[P + i.slidesPerGroup] && (M = P, z = o[P + i.slidesPerGroup] - o[P]) : h >= o[P] && (M = P, z = o[o.length - 1] - o[o.length - 2]);
                    var k = (h - o[M]) / z;
                    if (u > i.longSwipesMs) {
                        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (k >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (k > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M))
                    } else {
                        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M)
                    }
                }
            }
        },
        C = function() {
            var e = this,
                t = e.params,
                a = e.el;
            if (!a || 0 !== a.offsetWidth) {
                t.breakpoints && e.setBreakpoint();
                var i = e.allowSlideNext,
                    s = e.allowSlidePrev;
                if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
                    var r = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
                } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
                e.allowSlidePrev = s, e.allowSlideNext = i
            }
        },
        M = function(e) {
            var t = this;
            t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
        },
        z = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        },
        P = {
            update: h,
            translate: v,
            transition: f,
            slide: g,
            loop: b,
            grabCursor: w,
            manipulation: y,
            events: {
                attachEvents: function() {
                    var e = this,
                        t = e.params,
                        a = e.touchEvents,
                        i = e.el,
                        s = e.wrapperEl;
                    e.onTouchStart = T.bind(e), e.onTouchMove = E.bind(e), e.onTouchEnd = S.bind(e), e.onClick = M.bind(e);
                    var r = "container" === t.touchEventsTarget ? i : s,
                        n = !!t.nested;
                    if (m.ie) r.addEventListener(a.start, e.onTouchStart, !1), (p.touch ? r : d).addEventListener(a.move, e.onTouchMove, n), (p.touch ? r : d).addEventListener(a.end, e.onTouchEnd, !1);
                    else {
                        if (p.touch) {
                            var o = !("touchstart" !== a.start || !p.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, p.passiveListener ? {
                                passive: !1,
                                capture: n
                            } : n), r.addEventListener(a.end, e.onTouchEnd, o)
                        }(t.simulateTouch && !x.ios && !x.android || t.simulateTouch && !p.touch && x.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), d.addEventListener("mousemove", e.onTouchMove, n), d.addEventListener("mouseup", e.onTouchEnd, !1))
                    }(t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on("resize observerUpdate", C)
                },
                detachEvents: function() {
                    var e = this,
                        t = e.params,
                        a = e.touchEvents,
                        i = e.el,
                        s = e.wrapperEl,
                        r = "container" === t.touchEventsTarget ? i : s,
                        n = !!t.nested;
                    if (m.ie) r.removeEventListener(a.start, e.onTouchStart, !1), (p.touch ? r : d).removeEventListener(a.move, e.onTouchMove, n), (p.touch ? r : d).removeEventListener(a.end, e.onTouchEnd, !1);
                    else {
                        if (p.touch) {
                            var o = !("onTouchStart" !== a.start || !p.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o)
                        }(t.simulateTouch && !x.ios && !x.android || t.simulateTouch && !p.touch && x.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), d.removeEventListener("mousemove", e.onTouchMove, n), d.removeEventListener("mouseup", e.onTouchEnd, !1))
                    }(t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off("resize observerUpdate", C)
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    var e = this,
                        t = e.activeIndex,
                        a = e.loopedSlides;
                    void 0 === a && (a = 0);
                    var i = e.params,
                        s = i.breakpoints;
                    if (s && (!s || 0 !== Object.keys(s).length)) {
                        var r = e.getBreakpoint(s);
                        if (r && e.currentBreakpoint !== r) {
                            var n = r in s ? s[r] : e.originalParams,
                                o = i.loop && n.slidesPerView !== i.slidesPerView;
                            l.extend(e.params, n), l.extend(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), e.currentBreakpoint = r, o && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", n)
                        }
                    }
                },
                getBreakpoint: function(e) {
                    if (e) {
                        var t = !1,
                            a = [];
                        Object.keys(e).forEach(function(e) {
                            a.push(e)
                        }), a.sort(function(e, t) {
                            return parseInt(e, 10) - parseInt(t, 10)
                        });
                        for (var i = 0; i < a.length; i += 1) {
                            var r = a[i];
                            r >= s.innerWidth && !t && (t = r)
                        }
                        return t || "max"
                    }
                }
            },
            classes: {
                addClasses: function() {
                    var e = this,
                        t = e.classNames,
                        a = e.params,
                        i = e.rtl,
                        r = e.$el,
                        n = [];
                    n.push(a.direction), a.freeMode && n.push("free-mode"), p.flexbox || n.push("no-flexbox"), a.autoHeight && n.push("autoheight"), i && n.push("rtl"), a.slidesPerColumn > 1 && n.push("multirow"), x.android && n.push("android"), x.ios && n.push("ios"), (s.navigator.pointerEnabled || s.navigator.msPointerEnabled) && n.push("wp8-" + a.direction), n.forEach(function(e) {
                        t.push(a.containerModifierClass + e)
                    }), r.addClass(t.join(" "))
                },
                removeClasses: function() {
                    var e = this,
                        t = e.$el,
                        a = e.classNames;
                    t.removeClass(a.join(" "))
                }
            },
            images: {
                loadImage: function(e, t, a, i, r, n) {
                    function o() {
                        n && n()
                    }
                    var l;
                    e.complete && r ? o() : t ? ((l = new s.Image).onload = o, l.onerror = o, i && (l.sizes = i), a && (l.srcset = a), t && (l.src = t)) : o()
                },
                preloadImages: function() {
                    var e = this;
                    e.imagesToLoad = e.$el.find("img");
                    for (var t = 0; t < e.imagesToLoad.length; t += 1) {
                        var a = e.imagesToLoad[t];
                        e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, function() {
                            void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                        })
                    }
                }
            }
        },
        k = {},
        $ = function(t) {
            function a() {
                for (var i = [], r = arguments.length; r--;) i[r] = arguments[r];
                var n, o;
                if (1 === i.length && i[0].constructor && i[0].constructor === Object) o = i[0];
                else {
                    var d;
                    n = (d = i)[0], o = d[1]
                }
                o || (o = {}), o = l.extend({}, o), n && !o.el && (o.el = n), t.call(this, o), Object.keys(P).forEach(function(e) {
                    Object.keys(P[e]).forEach(function(t) {
                        a.prototype[t] || (a.prototype[t] = P[e][t])
                    })
                });
                var c = this;
                void 0 === c.modules && (c.modules = {}), Object.keys(c.modules).forEach(function(e) {
                    var t = c.modules[e];
                    if (t.params) {
                        var a = Object.keys(t.params)[0],
                            i = t.params[a];
                        if ("object" != typeof i) return;
                        if (!(a in o && "enabled" in i)) return;
                        !0 === o[a] && (o[a] = {
                            enabled: !0
                        }), "object" != typeof o[a] || "enabled" in o[a] || (o[a].enabled = !0), o[a] || (o[a] = {
                            enabled: !1
                        })
                    }
                });
                var u = l.extend({}, z);
                c.useModulesParams(u), c.params = l.extend({}, u, k, o), c.originalParams = l.extend({}, c.params), c.passedParams = l.extend({}, o);
                var h = e(c.params.el);
                if (n = h[0]) {
                    if (h.length > 1) {
                        var v = [];
                        return h.each(function(e, t) {
                            var i = l.extend({}, o, {
                                el: t
                            });
                            v.push(new a(i))
                        }), v
                    }
                    n.swiper = c, h.data("swiper", c);
                    var f = h.children("." + c.params.wrapperClass);
                    return l.extend(c, {
                        $el: h,
                        el: n,
                        $wrapperEl: f,
                        wrapperEl: f[0],
                        classNames: [],
                        slides: e(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function() {
                            return "horizontal" === c.params.direction
                        },
                        isVertical: function() {
                            return "vertical" === c.params.direction
                        },
                        rtl: "horizontal" === c.params.direction && ("rtl" === n.dir.toLowerCase() || "rtl" === h.css("direction")),
                        wrongRTL: "-webkit-box" === f.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: c.params.allowSlideNext,
                        allowSlidePrev: c.params.allowSlidePrev,
                        touchEvents: function() {
                            var e = ["touchstart", "touchmove", "touchend"],
                                t = ["mousedown", "mousemove", "mouseup"];
                            return s.navigator.pointerEnabled ? t = ["pointerdown", "pointermove", "pointerup"] : s.navigator.msPointerEnabled && (t = ["MSPointerDown", "MsPointerMove", "MsPointerUp"]), {
                                start: p.touch || !c.params.simulateTouch ? e[0] : t[0],
                                move: p.touch || !c.params.simulateTouch ? e[1] : t[1],
                                end: p.touch || !c.params.simulateTouch ? e[2] : t[2]
                            }
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: l.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: c.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), c.useModules(), c.params.init && c.init(), c
                }
            }
            t && (a.__proto__ = t), a.prototype = Object.create(t && t.prototype), a.prototype.constructor = a;
            var i = {
                extendedDefaults: {},
                defaults: {},
                Class: {},
                $: {}
            };
            return a.prototype.slidesPerViewDynamic = function() {
                var e = this,
                    t = e.params,
                    a = e.slides,
                    i = e.slidesGrid,
                    s = e.size,
                    r = e.activeIndex,
                    n = 1;
                if (t.centeredSlides) {
                    for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !o && (n += 1, (l += a[d].swiperSlideSize) > s && (o = !0));
                    for (var p = r - 1; p >= 0; p -= 1) a[p] && !o && (n += 1, (l += a[p].swiperSlideSize) > s && (o = !0))
                } else
                    for (var c = r + 1; c < a.length; c += 1) i[c] - i[r] < s && (n += 1);
                return n
            }, a.prototype.update = function() {
                function e() {
                    a = Math.min(Math.max(t.translate, t.maxTranslate()), t.minTranslate()), t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses()
                }
                var t = this;
                if (t && !t.destroyed) {
                    t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
                    var a;
                    t.params.freeMode ? (e(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || e(), t.emit("update")
                }
            }, a.prototype.init = function() {
                var e = this;
                e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
            }, a.prototype.destroy = function(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var a = this,
                    i = a.params,
                    s = a.$el,
                    r = a.$wrapperEl,
                    n = a.slides;
                a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function(e) {
                    a.off(e)
                }), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), l.deleteProps(a)), a.destroyed = !0
            }, a.extendDefaults = function(e) {
                l.extend(k, e)
            }, i.extendedDefaults.get = function() {
                return k
            }, i.defaults.get = function() {
                return z
            }, i.Class.get = function() {
                return t
            }, i.$.get = function() {
                return e
            }, Object.defineProperties(a, i), a
        }(c),
        I = {
            name: "device",
            proto: {
                device: x
            },
            static: {
                device: x
            }
        },
        L = {
            name: "support",
            proto: {
                support: p
            },
            static: {
                support: p
            }
        },
        D = {
            name: "browser",
            proto: {
                browser: m
            },
            static: {
                browser: m
            }
        },
        O = {
            name: "resize",
            create: function() {
                var e = this;
                l.extend(e, {
                    resize: {
                        resizeHandler: function() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler: function() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    s.addEventListener("resize", e.resize.resizeHandler), s.addEventListener("orientationchange", e.resize.orientationChangeHandler)
                },
                destroy: function() {
                    var e = this;
                    s.removeEventListener("resize", e.resize.resizeHandler), s.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
                }
            }
        },
        A = {
            func: s.MutationObserver || s.WebkitMutationObserver,
            attach: function(e, t) {
                void 0 === t && (t = {});
                var a = this,
                    i = new(0, A.func)(function(e) {
                        e.forEach(function(e) {
                            a.emit("observerUpdate", e)
                        })
                    });
                i.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), a.observer.observers.push(i)
            },
            init: function() {
                var e = this;
                if (p.observer && e.params.observer) {
                    if (e.params.observeParents)
                        for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
                    e.observer.attach(e.$el[0], {
                        childList: !1
                    }), e.observer.attach(e.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function() {
                var e = this;
                e.observer.observers.forEach(function(e) {
                    e.disconnect()
                }), e.observer.observers = []
            }
        },
        H = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1
            },
            create: function() {
                var e = this;
                l.extend(e, {
                    observer: {
                        init: A.init.bind(e),
                        attach: A.attach.bind(e),
                        destroy: A.destroy.bind(e),
                        observers: []
                    }
                })
            },
            on: {
                init: function() {
                    this.observer.init()
                },
                destroy: function() {
                    this.observer.destroy()
                }
            }
        },
        N = {
            update: function(e) {
                function t() {
                    a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.lazy && a.params.lazy.enabled && a.lazy.load()
                }
                var a = this,
                    i = a.params,
                    s = i.slidesPerView,
                    r = i.slidesPerGroup,
                    n = i.centeredSlides,
                    o = a.virtual,
                    d = o.from,
                    p = o.to,
                    c = o.slides,
                    u = o.slidesGrid,
                    h = o.renderSlide,
                    v = o.offset;
                a.updateActiveIndex();
                var f, m = a.activeIndex || 0;
                f = a.rtl && a.isHorizontal() ? "right" : a.isHorizontal() ? "left" : "top";
                var g, b;
                n ? (g = Math.floor(s / 2) + r, b = Math.floor(s / 2) + r) : (g = s + (r - 1), b = r);
                var w = Math.max((m || 0) - b, 0),
                    y = Math.min((m || 0) + g, c.length - 1),
                    x = (a.slidesGrid[w] || 0) - (a.slidesGrid[0] || 0);
                if (l.extend(a.virtual, {
                        from: w,
                        to: y,
                        offset: x,
                        slidesGrid: a.slidesGrid
                    }), d === w && p === y && !e) return a.slidesGrid !== u && x !== v && a.slides.css(f, x + "px"), void a.updateProgress();
                if (a.params.virtual.renderExternal) return a.params.virtual.renderExternal.call(a, {
                    offset: x,
                    from: w,
                    to: y,
                    slides: function() {
                        for (var e = [], t = w; t <= y; t += 1) e.push(c[t]);
                        return e
                    }()
                }), void t();
                var T = [],
                    E = [];
                if (e) a.$wrapperEl.find("." + a.params.slideClass).remove();
                else
                    for (var S = d; S <= p; S += 1)(S < w || S > y) && a.$wrapperEl.find("." + a.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
                for (var C = 0; C < c.length; C += 1) C >= w && C <= y && (void 0 === p || e ? E.push(C) : (C > p && E.push(C), C < d && T.push(C)));
                E.forEach(function(e) {
                    a.$wrapperEl.append(h(c[e], e))
                }), T.sort(function(e, t) {
                    return e < t
                }).forEach(function(e) {
                    a.$wrapperEl.prepend(h(c[e], e))
                }), a.$wrapperEl.children(".swiper-slide").css(f, x + "px"), t()
            },
            renderSlide: function(t, a) {
                var i = this,
                    s = i.params.virtual;
                if (s.cache && i.virtual.cache[a]) return i.virtual.cache[a];
                var r = e(s.renderSlide ? s.renderSlide.call(i, t, a) : '<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + a + '">' + t + "</div>");
                return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", a), s.cache && (i.virtual.cache[a] = r), r
            },
            appendSlide: function(e) {
                var t = this;
                t.virtual.slides.push(e), t.virtual.update(!0)
            },
            prependSlide: function(e) {
                var t = this;
                if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
                    var a = t.virtual.cache,
                        i = {};
                    Object.keys(a).forEach(function(e) {
                        i[e + 1] = a[e]
                    }), t.virtual.cache = i
                }
                t.virtual.update(!0), t.slideNext(0)
            }
        },
        X = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null
                }
            },
            create: function() {
                var e = this;
                l.extend(e, {
                    virtual: {
                        update: N.update.bind(e),
                        appendSlide: N.appendSlide.bind(e),
                        prependSlide: N.prependSlide.bind(e),
                        renderSlide: N.renderSlide.bind(e),
                        slides: e.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = {
                            watchSlidesProgress: !0
                        };
                        l.extend(e.params, t), l.extend(e.originalParams, t), e.virtual.update()
                    }
                },
                setTranslate: function() {
                    var e = this;
                    e.params.virtual.enabled && e.virtual.update()
                }
            }
        },
        Y = {
            handle: function(e) {
                var t = this,
                    a = e;
                a.originalEvent && (a = a.originalEvent);
                var i = a.keyCode || a.charCode;
                if (!t.allowSlideNext && (t.isHorizontal() && 39 === i || t.isVertical() && 40 === i)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && 37 === i || t.isVertical() && 38 === i)) return !1;
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || d.activeElement && d.activeElement.nodeName && ("input" === d.activeElement.nodeName.toLowerCase() || "textarea" === d.activeElement.nodeName.toLowerCase()))) {
                    if (37 === i || 39 === i || 38 === i || 40 === i) {
                        var r = !1;
                        if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                        var n = {
                                left: s.pageXOffset,
                                top: s.pageYOffset
                            },
                            o = s.innerWidth,
                            l = s.innerHeight,
                            p = t.$el.offset();
                        t.rtl && (p.left -= t.$el[0].scrollLeft);
                        for (var c = [
                                [p.left, p.top],
                                [p.left + t.width, p.top],
                                [p.left, p.top + t.height],
                                [p.left + t.width, p.top + t.height]
                            ], u = 0; u < c.length; u += 1) {
                            var h = c[u];
                            h[0] >= n.left && h[0] <= n.left + o && h[1] >= n.top && h[1] <= n.top + l && (r = !0)
                        }
                        if (!r) return
                    }
                    t.isHorizontal() ? (37 !== i && 39 !== i || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === i && !t.rtl || 37 === i && t.rtl) && t.slideNext(), (37 === i && !t.rtl || 39 === i && t.rtl) && t.slidePrev()) : (38 !== i && 40 !== i || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === i && t.slideNext(), 38 === i && t.slidePrev()), t.emit("keyPress", i)
                }
            },
            enable: function() {
                var t = this;
                t.keyboard.enabled || (e(d).on("keydown", t.keyboard.handle), t.keyboard.enabled = !0)
            },
            disable: function() {
                var t = this;
                t.keyboard.enabled && (e(d).off("keydown", t.keyboard.handle), t.keyboard.enabled = !1)
            }
        },
        G = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1
                }
            },
            create: function() {
                var e = this;
                l.extend(e, {
                    keyboard: {
                        enabled: !1,
                        enable: Y.enable.bind(e),
                        disable: Y.disable.bind(e),
                        handle: Y.handle.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.params.keyboard.enabled && e.keyboard.enable()
                },
                destroy: function() {
                    var e = this;
                    e.keyboard.enabled && e.keyboard.disable()
                }
            }
        },
        B = {
            lastScrollTime: l.now(),
            event: s.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : a() ? "wheel" : "mousewheel",
            normalize: function(e) {
                var t = 0,
                    a = 0,
                    i = 0,
                    s = 0;
                return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: a,
                    pixelX: i,
                    pixelY: s
                }
            },
            handle: function(e) {
                var t = e,
                    a = this,
                    i = a.params.mousewheel;
                t.originalEvent && (t = t.originalEvent);
                var r = 0,
                    n = a.rtl ? -1 : 1,
                    o = B.normalize(t);
                if (i.forceToAxis)
                    if (a.isHorizontal()) {
                        if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                        r = o.pixelX * n
                    } else {
                        if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                        r = o.pixelY
                    }
                else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
                if (0 === r) return !0;
                if (i.invert && (r = -r), a.params.freeMode) {
                    var d = a.getTranslate() + r * i.sensitivity,
                        p = a.isBeginning,
                        c = a.isEnd;
                    if (d >= a.minTranslate() && (d = a.minTranslate()), d <= a.maxTranslate() && (d = a.maxTranslate()), a.setTransition(0), a.setTranslate(d), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!p && a.isBeginning || !c && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = l.nextTick(function() {
                            a.slideReset()
                        }, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.stopAutoplay(), 0 === d || d === a.maxTranslate()) return !0
                } else {
                    if (l.now() - a.mousewheel.lastScrollTime > 60)
                        if (r < 0)
                            if (a.isEnd && !a.params.loop || a.animating) {
                                if (i.releaseOnEdges) return !0
                            } else a.slideNext(), a.emit("scroll", t);
                    else if (a.isBeginning && !a.params.loop || a.animating) {
                        if (i.releaseOnEdges) return !0
                    } else a.slidePrev(), a.emit("scroll", t);
                    a.mousewheel.lastScrollTime = (new s.Date).getTime()
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            },
            enable: function() {
                var t = this;
                if (!B.event) return !1;
                if (t.mousewheel.enabled) return !1;
                var a = t.$el;
                return "container" !== t.params.mousewheel.eventsTarged && (a = e(t.params.mousewheel.eventsTarged)), a.on(B.event, t.mousewheel.handle), t.mousewheel.enabled = !0, !0
            },
            disable: function() {
                var t = this;
                if (!B.event) return !1;
                if (!t.mousewheel.enabled) return !1;
                var a = t.$el;
                return "container" !== t.params.mousewheel.eventsTarged && (a = e(t.params.mousewheel.eventsTarged)), a.off(B.event, t.mousewheel.handle), t.mousewheel.enabled = !1, !0
            }
        },
        V = {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function() {
                var e = this;
                l.extend(e, {
                    mousewheel: {
                        enabled: !1,
                        enable: B.enable.bind(e),
                        disable: B.disable.bind(e),
                        handle: B.handle.bind(e),
                        lastScrollTime: l.now()
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.params.mousewheel.enabled && e.mousewheel.enable()
                },
                destroy: function() {
                    var e = this;
                    e.mousewheel.enabled && e.mousewheel.disable()
                }
            }
        },
        R = {
            update: function() {
                var e = this,
                    t = e.params.navigation;
                if (!e.params.loop) {
                    var a = e.navigation,
                        i = a.$nextEl,
                        s = a.$prevEl;
                    s && s.length > 0 && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass)), i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass))
                }
            },
            init: function() {
                var t = this,
                    a = t.params.navigation;
                if (a.nextEl || a.prevEl) {
                    var i, s;
                    a.nextEl && (i = e(a.nextEl), t.params.uniqueNavElements && "string" == typeof a.nextEl && i.length > 1 && 1 === t.$el.find(a.nextEl).length && (i = t.$el.find(a.nextEl))), a.prevEl && (s = e(a.prevEl), t.params.uniqueNavElements && "string" == typeof a.prevEl && s.length > 1 && 1 === t.$el.find(a.prevEl).length && (s = t.$el.find(a.prevEl))), i && i.length > 0 && i.on("click", function(e) {
                        e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext()
                    }), s && s.length > 0 && s.on("click", function(e) {
                        e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev()
                    }), l.extend(t.navigation, {
                        $nextEl: i,
                        nextEl: i && i[0],
                        $prevEl: s,
                        prevEl: s && s[0]
                    })
                }
            },
            destroy: function() {
                var e = this,
                    t = e.navigation,
                    a = t.$nextEl,
                    i = t.$prevEl;
                a && a.length && (a.off("click"), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(e.params.navigation.disabledClass))
            }
        },
        W = {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden"
                }
            },
            create: function() {
                var e = this;
                l.extend(e, {
                    navigation: {
                        init: R.init.bind(e),
                        update: R.update.bind(e),
                        destroy: R.destroy.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.navigation.init(), e.navigation.update()
                },
                toEdge: function() {
                    this.navigation.update()
                },
                fromEdge: function() {
                    this.navigation.update()
                },
                destroy: function() {
                    this.navigation.destroy()
                },
                click: function(t) {
                    var a = this,
                        i = a.navigation,
                        s = i.$nextEl,
                        r = i.$prevEl;
                    !a.params.navigation.hideOnClick || e(t.target).is(r) || e(t.target).is(s) || (s && s.toggleClass(a.params.navigation.hiddenClass), r && r.toggleClass(a.params.navigation.hiddenClass))
                }
            }
        },
        F = {
            update: function() {
                var t = this,
                    a = t.rtl,
                    i = t.params.pagination;
                if (i.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
                    var s, r = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        n = t.pagination.$el,
                        o = t.params.loop ? Math.ceil((r - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                    if (t.params.loop ? ((s = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)) > r - 1 - 2 * t.loopedSlides && (s -= r - 2 * t.loopedSlides), s > o - 1 && (s -= o), s < 0 && "bullets" !== t.params.paginationType && (s = o + s)) : s = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                        var l = t.pagination.bullets;
                        if (i.dynamicBullets && (t.pagination.bulletSize = l.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), n.css(t.isHorizontal() ? "width" : "height", 5 * t.pagination.bulletSize + "px")), l.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev"), n.length > 1) l.each(function(t, a) {
                            var r = e(a);
                            r.index() === s && (r.addClass(i.bulletActiveClass), i.dynamicBullets && (r.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), r.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")))
                        });
                        else {
                            var d = l.eq(s);
                            d.addClass(i.bulletActiveClass), i.dynamicBullets && (d.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), d.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                        }
                        if (i.dynamicBullets) {
                            var p = Math.min(l.length, 5),
                                c = (t.pagination.bulletSize * p - t.pagination.bulletSize) / 2 - s * t.pagination.bulletSize,
                                u = a ? "right" : "left";
                            l.css(t.isHorizontal() ? u : "top", c + "px")
                        }
                    }
                    if ("fraction" === i.type && (n.find("." + i.currentClass).text(s + 1), n.find("." + i.totalClass).text(o)), "progressbar" === i.type) {
                        var h = (s + 1) / o,
                            v = h,
                            f = 1;
                        t.isHorizontal() || (f = h, v = 1), n.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + v + ") scaleY(" + f + ")").transition(t.params.speed)
                    }
                    "custom" === i.type && i.renderCustom ? (n.html(i.renderCustom(t, s + 1, o)), t.emit("paginationRender", t, n[0])) : t.emit("paginationUpdate", t, n[0])
                }
            },
            render: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el,
                        s = "";
                    if ("bullets" === t.type) {
                        for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                        i.html(s), e.pagination.bullets = i.find("." + t.bulletClass)
                    }
                    "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                }
            },
            init: function() {
                var t = this,
                    a = t.params.pagination;
                if (a.el) {
                    var i = e(a.el);
                    0 !== i.length && (t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === t.$el.find(a.el).length && (i = t.$el.find(a.el)), "bullets" === a.type && a.clickable && i.addClass(a.clickableClass), i.addClass(a.modifierClass + a.type), "bullets" === a.type && a.dynamicBullets && i.addClass("" + a.modifierClass + a.type + "-dynamic"), a.clickable && i.on("click", "." + a.bulletClass, function(a) {
                        a.preventDefault();
                        var i = e(this).index() * t.params.slidesPerGroup;
                        t.params.loop && (i += t.loopedSlides), t.slideTo(i)
                    }), l.extend(t.pagination, {
                        $el: i,
                        el: i[0]
                    }))
                }
            },
            destroy: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.pagination.$el;
                    a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass)
                }
            }
        },
        j = {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    type: "bullets",
                    dynamicBullets: !1,
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    clickableClass: "swiper-pagination-clickable"
                }
            },
            create: function() {
                var e = this;
                l.extend(e, {
                    pagination: {
                        init: F.init.bind(e),
                        render: F.render.bind(e),
                        update: F.update.bind(e),
                        destroy: F.destroy.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.pagination.init(), e.pagination.render(), e.pagination.update()
                },
                activeIndexChange: function() {
                    var e = this;
                    e.params.loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update()
                },
                snapIndexChange: function() {
                    var e = this;
                    e.params.loop || e.pagination.update()
                },
                slidesLengthChange: function() {
                    var e = this;
                    e.params.loop && (e.pagination.render(), e.pagination.update())
                },
                snapGridLengthChange: function() {
                    var e = this;
                    e.params.loop || (e.pagination.render(), e.pagination.update())
                },
                destroy: function() {
                    this.pagination.destroy()
                },
                click: function(t) {
                    var a = this;
                    a.params.pagination.el && a.params.pagination.hideOnClick && a.pagination.$el.length > 0 && !e(t.target).hasClass(a.params.pagination.bulletClass) && a.pagination.$el.toggleClass(a.params.pagination.hiddenClass)
                }
            }
        },
        q = {
            setTranslate: function() {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.rtl,
                        i = e.progress,
                        s = t.dragSize,
                        r = t.trackSize,
                        n = t.$dragEl,
                        o = t.$el,
                        l = e.params.scrollbar,
                        d = s,
                        c = (r - s) * i;
                    a && e.isHorizontal() ? (c = -c) > 0 ? (d = s - c, c = 0) : -c + s > r && (d = r + c) : c < 0 ? (d = s + c, c = 0) : c + s > r && (d = r - c), e.isHorizontal() ? (p.transforms3d ? n.transform("translate3d(" + c + "px, 0, 0)") : n.transform("translateX(" + c + "px)"), n[0].style.width = d + "px") : (p.transforms3d ? n.transform("translate3d(0px, " + c + "px, 0)") : n.transform("translateY(" + c + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function() {
                        o[0].style.opacity = 0, o.transition(400)
                    }, 1e3))
                }
            },
            setTransition: function(e) {
                var t = this;
                t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
            },
            updateSize: function() {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = t.$dragEl,
                        i = t.$el;
                    a[0].style.width = "", a[0].style.height = "";
                    var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        n = e.size / e.virtualSize,
                        o = n * (r / e.size);
                    s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = n >= 1 ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), l.extend(t, {
                        trackSize: r,
                        divider: n,
                        moveDivider: o,
                        dragSize: s
                    })
                }
            },
            setDragPosition: function(e) {
                var t, a = this,
                    i = a.scrollbar,
                    s = i.$el,
                    r = i.dragSize,
                    n = i.trackSize;
                t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - s.offset()[a.isHorizontal() ? "left" : "top"] - r / 2) / (n - r), t = Math.max(Math.min(t, 1), 0), a.rtl && (t = 1 - t);
                var o = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
                a.updateProgress(o), a.setTranslate(o), a.updateActiveIndex(), a.updateSlidesClasses()
            },
            onDragStart: function(e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar,
                    s = t.$wrapperEl,
                    r = i.$el,
                    n = i.$dragEl;
                t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e)
            },
            onDragMove: function(e) {
                var t = this,
                    a = t.scrollbar,
                    i = t.$wrapperEl,
                    s = a.$el,
                    r = a.$dragEl;
                t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), i.transition(0), s.transition(0), r.transition(0), t.emit("scrollbarDragMove", e))
            },
            onDragEnd: function(e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar.$el;
                t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = l.nextTick(function() {
                    i.css("opacity", 0), i.transition(400)
                }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideReset())
            },
            enableDraggable: function() {
                var t = this;
                if (t.params.scrollbar.el) {
                    var a = t.scrollbar.$el,
                        i = p.touch ? a[0] : document;
                    a.on(t.scrollbar.dragEvents.start, t.scrollbar.onDragStart), e(i).on(t.scrollbar.dragEvents.move, t.scrollbar.onDragMove), e(i).on(t.scrollbar.dragEvents.end, t.scrollbar.onDragEnd)
                }
            },
            disableDraggable: function() {
                var t = this;
                if (t.params.scrollbar.el) {
                    var a = t.scrollbar.$el,
                        i = p.touch ? a[0] : document;
                    a.off(t.scrollbar.dragEvents.start), e(i).off(t.scrollbar.dragEvents.move), e(i).off(t.scrollbar.dragEvents.end)
                }
            },
            init: function() {
                var t = this;
                if (t.params.scrollbar.el) {
                    var a = t.scrollbar,
                        i = t.$el,
                        s = t.touchEvents,
                        r = t.params.scrollbar,
                        n = e(r.el);
                    t.params.uniqueNavElements && "string" == typeof r.el && n.length > 1 && 1 === i.find(r.el).length && (n = i.find(r.el));
                    var o = n.find(".swiper-scrollbar-drag");
                    0 === o.length && (o = e('<div class="swiper-scrollbar-drag"></div>'), n.append(o)), t.scrollbar.dragEvents = !1 !== t.params.simulateTouch || p.touch ? s : {
                        start: "mousedown",
                        move: "mousemove",
                        end: "mouseup"
                    }, l.extend(a, {
                        $el: n,
                        el: n[0],
                        $dragEl: o,
                        dragEl: o[0]
                    }), r.draggable && a.enableDraggable()
                }
            },
            destroy: function() {
                this.scrollbar.disableDraggable()
            }
        },
        K = {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0
                }
            },
            create: function() {
                var e = this;
                l.extend(e, {
                    scrollbar: {
                        init: q.init.bind(e),
                        destroy: q.destroy.bind(e),
                        updateSize: q.updateSize.bind(e),
                        setTranslate: q.setTranslate.bind(e),
                        setTransition: q.setTransition.bind(e),
                        enableDraggable: q.enableDraggable.bind(e),
                        disableDraggable: q.disableDraggable.bind(e),
                        setDragPosition: q.setDragPosition.bind(e),
                        onDragStart: q.onDragStart.bind(e),
                        onDragMove: q.onDragMove.bind(e),
                        onDragEnd: q.onDragEnd.bind(e),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
                },
                update: function() {
                    this.scrollbar.updateSize()
                },
                resize: function() {
                    this.scrollbar.updateSize()
                },
                observerUpdate: function() {
                    this.scrollbar.updateSize()
                },
                setTranslate: function() {
                    this.scrollbar.setTranslate()
                },
                setTransition: function(e) {
                    this.scrollbar.setTransition(e)
                },
                destroy: function() {
                    this.scrollbar.destroy()
                }
            }
        },
        U = {
            setTransform: function(t, a) {
                var i = this,
                    s = i.rtl,
                    r = e(t),
                    n = s ? -1 : 1,
                    o = r.attr("data-swiper-parallax") || "0",
                    l = r.attr("data-swiper-parallax-x"),
                    d = r.attr("data-swiper-parallax-y"),
                    p = r.attr("data-swiper-parallax-scale"),
                    c = r.attr("data-swiper-parallax-opacity");
                if (l || d ? (l = l || "0", d = d || "0") : i.isHorizontal() ? (l = o, d = "0") : (d = o, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * a * n + "%" : l * a * n + "px", d = d.indexOf("%") >= 0 ? parseInt(d, 10) * a + "%" : d * a + "px", void 0 !== c && null !== c) {
                    var u = c - (c - 1) * (1 - Math.abs(a));
                    r[0].style.opacity = u
                }
                if (void 0 === p || null === p) r.transform("translate3d(" + l + ", " + d + ", 0px)");
                else {
                    var h = p - (p - 1) * (1 - Math.abs(a));
                    r.transform("translate3d(" + l + ", " + d + ", 0px) scale(" + h + ")")
                }
            },
            setTranslate: function() {
                var t = this,
                    a = t.$el,
                    i = t.slides,
                    s = t.progress,
                    r = t.snapGrid;
                a.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, a) {
                    t.parallax.setTransform(a, s)
                }), i.each(function(a, i) {
                    var n = i.progress;
                    t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(a / 2) - s * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), e(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, a) {
                        t.parallax.setTransform(a, n)
                    })
                })
            },
            setTransition: function(t) {
                void 0 === t && (t = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(a, i) {
                    var s = e(i),
                        r = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
                    0 === t && (r = 0), s.transition(r)
                })
            }
        },
        _ = {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                var e = this;
                l.extend(e, {
                    parallax: {
                        setTransform: U.setTransform.bind(e),
                        setTranslate: U.setTranslate.bind(e),
                        setTransition: U.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.watchSlidesProgress = !0
                },
                init: function() {
                    var e = this;
                    e.params.parallax && e.parallax.setTranslate()
                },
                setTranslate: function() {
                    var e = this;
                    e.params.parallax && e.parallax.setTranslate()
                },
                setTransition: function(e) {
                    var t = this;
                    t.params.parallax && t.parallax.setTransition(e)
                }
            }
        },
        Z = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    a = e.targetTouches[0].pageY,
                    i = e.targetTouches[1].pageX,
                    s = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
            },
            onGestureStart: function(t) {
                var a = this,
                    i = a.params.zoom,
                    s = a.zoom,
                    r = s.gesture;
                if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !p.gestures) {
                    if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                    s.fakeGestureTouched = !0, r.scaleStart = Z.getDistanceBetweenTouches(t)
                }
                r.$slideEl && r.$slideEl.length || (r.$slideEl = e(this), 0 === r.$slideEl.length && (r.$slideEl = a.slides.eq(a.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl.transition(0), a.zoom.isScaling = !0) : r.$imageEl = void 0
            },
            onGestureChange: function(e) {
                var t = this,
                    a = t.params.zoom,
                    i = t.zoom,
                    s = i.gesture;
                if (!p.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureMoved = !0, s.scaleMove = Z.getDistanceBetweenTouches(e)
                }
                s.$imageEl && 0 !== s.$imageEl.length && (p.gestures ? t.zoom.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - Math.pow(a.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
            },
            onGestureEnd: function(e) {
                var t = this,
                    a = t.params.zoom,
                    i = t.zoom,
                    s = i.gesture;
                if (!p.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !x.android) return;
                    i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                }
                s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), a.minRatio), s.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
            },
            onTouchStart: function(e) {
                var t = this.zoom,
                    a = t.gesture,
                    i = t.image;
                a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (x.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function(e) {
                var t = this,
                    a = t.zoom,
                    i = a.gesture,
                    s = a.image,
                    r = a.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
                    s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = l.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = l.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX), t.rtl && (s.startY = -s.startY));
                    var n = s.width * a.scale,
                        o = s.height * a.scale;
                    if (!(n < i.slideWidth && o < i.slideHeight)) {
                        if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
                            if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
                            if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
                        }
                        e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function() {
                var e = this.zoom,
                    t = e.gesture,
                    a = e.image,
                    i = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void(a.isMoved = !1);
                    a.isTouched = !1, a.isMoved = !1;
                    var s = 300,
                        r = 300,
                        n = i.x * s,
                        o = a.currentX + n,
                        l = i.y * r,
                        d = a.currentY + l;
                    0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
                    var p = Math.max(s, r);
                    a.currentX = o, a.currentY = d;
                    var c = a.width * e.scale,
                        u = a.height * e.scale;
                    a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
                }
            },
            onTransitionEnd: function() {
                var e = this,
                    t = e.zoom,
                    a = t.gesture;
                a.$slideEl && e.previousIndex !== e.activeIndex && (a.$imageEl.transform("translate3d(0,0,0) scale(1)"), a.$imageWrapEl.transform("translate3d(0,0,0)"), a.$slideEl = void 0, a.$imageEl = void 0, a.$imageWrapEl = void 0, t.scale = 1, t.currentScale = 1)
            },
            toggle: function(e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function(t) {
                var a = this,
                    i = a.zoom,
                    s = a.params.zoom,
                    r = i.gesture,
                    n = i.image;
                if (r.$slideEl || (r.$slideEl = a.clickedSlide ? e(a.clickedSlide) : a.slides.eq(a.activeIndex), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + s.containerClass)), r.$imageEl && 0 !== r.$imageEl.length) {
                    r.$slideEl.addClass("" + s.zoomedSlideClass);
                    var o, l, d, p, c, u, h, v, f, m, g, b, w, y, x, T;
                    void 0 === n.touchesStart.x && t ? (o = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, l = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (o = n.touchesStart.x, l = n.touchesStart.y), i.scale = r.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio, i.currentScale = r.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio, t ? (x = r.$slideEl[0].offsetWidth, T = r.$slideEl[0].offsetHeight, d = r.$slideEl.offset().left + x / 2 - o, p = r.$slideEl.offset().top + T / 2 - l, h = r.$imageEl[0].offsetWidth, v = r.$imageEl[0].offsetHeight, f = h * i.scale, m = v * i.scale, w = -(g = Math.min(x / 2 - f / 2, 0)), y = -(b = Math.min(T / 2 - m / 2, 0)), c = d * i.scale, u = p * i.scale, c < g && (c = g), c > w && (c = w), u < b && (u = b), u > y && (u = y)) : (c = 0, u = 0), r.$imageWrapEl.transition(300).transform("translate3d(" + c + "px, " + u + "px,0)"), r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + i.scale + ")")
                }
            },
            out: function() {
                var t = this,
                    a = t.zoom,
                    i = t.params.zoom,
                    s = a.gesture;
                s.$slideEl || (s.$slideEl = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass)), s.$imageEl && 0 !== s.$imageEl.length && (a.scale = 1, a.currentScale = 1, s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), s.$slideEl.removeClass("" + i.zoomedSlideClass), s.$slideEl = void 0)
            },
            enable: function() {
                var t = this,
                    a = t.zoom;
                if (!a.enabled) {
                    a.enabled = !0;
                    var i = t.slides,
                        s = !("touchstart" !== t.touchEvents.start || !p.passiveListener || !t.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    p.gestures ? (i.on("gesturestart", a.onGestureStart, s), i.on("gesturechange", a.onGestureChange, s), i.on("gestureend", a.onGestureEnd, s)) : "touchstart" === t.touchEvents.start && (i.on(t.touchEvents.start, a.onGestureStart, s), i.on(t.touchEvents.move, a.onGestureChange, s), i.on(t.touchEvents.end, a.onGestureEnd, s)), t.slides.each(function(i, s) {
                        var r = e(s);
                        r.find("." + t.params.zoom.containerClass).length > 0 && r.on(t.touchEvents.move, a.onTouchMove)
                    })
                }
            },
            disable: function() {
                var t = this,
                    a = t.zoom;
                if (a.enabled) {
                    t.zoom.enabled = !1;
                    var i = t.slides,
                        s = !("touchstart" !== t.touchEvents.start || !p.passiveListener || !t.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    p.gestures ? (i.off("gesturestart", a.onGestureStart, s), i.off("gesturechange", a.onGestureChange, s), i.off("gestureend", a.onGestureEnd, s)) : "touchstart" === t.touchEvents.start && (i.off(t.touchEvents.start, a.onGestureStart, s), i.off(t.touchEvents.move, a.onGestureChange, s), i.off(t.touchEvents.end, a.onGestureEnd, s)), t.slides.each(function(i, s) {
                        var r = e(s);
                        r.find("." + t.params.zoom.containerClass).length > 0 && r.off(t.touchEvents.move, a.onTouchMove)
                    })
                }
            }
        },
        Q = {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var e = this,
                    t = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(a) {
                    t[a] = Z[a].bind(e)
                }), l.extend(e, {
                    zoom: t
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.params.zoom.enabled && e.zoom.enable()
                },
                destroy: function() {
                    this.zoom.disable()
                },
                touchStart: function(e) {
                    var t = this;
                    t.zoom.enabled && t.zoom.onTouchStart(e)
                },
                touchEnd: function(e) {
                    var t = this;
                    t.zoom.enabled && t.zoom.onTouchEnd(e)
                },
                doubleTap: function(e) {
                    var t = this;
                    t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
                },
                transitionEnd: function() {
                    var e = this;
                    e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
                }
            }
        },
        J = {
            loadInSlide: function(t, a) {
                void 0 === a && (a = !0);
                var i = this,
                    s = i.params.lazy;
                if (void 0 !== t && 0 !== i.slides.length) {
                    var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : i.slides.eq(t),
                        n = r.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
                    !r.hasClass(s.elementClass) || r.hasClass(s.loadedClass) || r.hasClass(s.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function(t, n) {
                        var o = e(n);
                        o.addClass(s.loadingClass);
                        var l = o.attr("data-background"),
                            d = o.attr("data-src"),
                            p = o.attr("data-srcset"),
                            c = o.attr("data-sizes");
                        i.loadImage(o[0], d || l, p, c, !1, function() {
                            if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
                                if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (p && (o.attr("srcset", p), o.removeAttr("data-srcset")), c && (o.attr("sizes", c), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(s.loadedClass).removeClass(s.loadingClass), r.find("." + s.preloaderClass).remove(), i.params.loop && a) {
                                    var e = r.attr("data-swiper-slide-index");
                                    if (r.hasClass(i.params.slideDuplicateClass)) {
                                        var t = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                        i.lazy.loadInSlide(t.index(), !1)
                                    } else {
                                        var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        i.lazy.loadInSlide(n.index(), !1)
                                    }
                                }
                                i.emit("lazyImageReady", r[0], o[0])
                            }
                        }), i.emit("lazyImageLoad", r[0], o[0])
                    })
                }
            },
            load: function() {
                function t(e) {
                    if (l) {
                        if (s.children("." + r.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                    } else if (n[e]) return !0;
                    return !1
                }

                function a(t) {
                    return l ? e(t).attr("data-swiper-slide-index") : e(t).index()
                }
                var i = this,
                    s = i.$wrapperEl,
                    r = i.params,
                    n = i.slides,
                    o = i.activeIndex,
                    l = i.virtual && r.virtual.enabled,
                    d = r.lazy,
                    p = r.slidesPerView;
                if ("auto" === p && (p = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) s.children("." + r.slideVisibleClass).each(function(t, a) {
                    var s = l ? e(a).attr("data-swiper-slide-index") : e(a).index();
                    i.lazy.loadInSlide(s)
                });
                else if (p > 1)
                    for (var c = o; c < o + p; c += 1) t(c) && i.lazy.loadInSlide(c);
                else i.lazy.loadInSlide(o);
                if (d.loadPrevNext)
                    if (p > 1 || d.loadPrevNextAmount && d.loadPrevNextAmount > 1) {
                        for (var u = d.loadPrevNextAmount, h = p, v = Math.min(o + h + Math.max(u, h), n.length), f = Math.max(o - Math.max(h, u), 0), m = o + p; m < v; m += 1) t(m) && i.lazy.loadInSlide(m);
                        for (var g = f; g < o; g += 1) t(g) && i.lazy.loadInSlide(g)
                    } else {
                        var b = s.children("." + r.slideNextClass);
                        b.length > 0 && i.lazy.loadInSlide(a(b));
                        var w = s.children("." + r.slidePrevClass);
                        w.length > 0 && i.lazy.loadInSlide(a(w))
                    }
            }
        },
        ee = {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                var e = this;
                l.extend(e, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: J.load.bind(e),
                        loadInSlide: J.loadInSlide.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
                },
                init: function() {
                    var e = this;
                    e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
                },
                scroll: function() {
                    var e = this;
                    e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
                },
                resize: function() {
                    var e = this;
                    e.params.lazy.enabled && e.lazy.load()
                },
                scrollbarDragMove: function() {
                    var e = this;
                    e.params.lazy.enabled && e.lazy.load()
                },
                transitionStart: function() {
                    var e = this;
                    e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                },
                transitionEnd: function() {
                    var e = this;
                    e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
                }
            }
        },
        te = {
            LinearSpline: function(e, t) {
                var a = function() {
                    var e, t, a;
                    return function(i, s) {
                        for (t = -1, e = i.length; e - t > 1;) i[a = e + t >> 1] <= s ? t = a : e = a;
                        return e
                    }
                }();
                this.x = e, this.y = t, this.lastIndex = e.length - 1;
                var i, s;
                return this.interpolate = function(e) {
                    return e ? (s = a(this.x, e), i = s - 1, (e - this.x[i]) * (this.y[s] - this.y[i]) / (this.x[s] - this.x[i]) + this.y[i]) : 0
                }, this
            },
            getInterpolateFunction: function(e) {
                var t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new te.LinearSpline(t.slidesGrid, e.slidesGrid) : new te.LinearSpline(t.snapGrid, e.snapGrid))
            },
            setTranslate: function(e, t) {
                function a(e) {
                    var t = e.rtl && "horizontal" === e.params.direction ? -r.translate : r.translate;
                    "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e), s = -r.controller.spline.interpolate(-t)), s && "container" !== r.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()), s = (t - r.minTranslate()) * i + e.minTranslate()), r.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, r), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                var i, s, r = this,
                    n = r.controller.control;
                if (Array.isArray(n))
                    for (var o = 0; o < n.length; o += 1) n[o] !== t && n[o] instanceof $ && a(n[o]);
                else n instanceof $ && t !== n && a(n)
            },
            setTransition: function(e, t) {
                function a(t) {
                    t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function() {
                        r && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
                    }))
                }
                var i, s = this,
                    r = s.controller.control;
                if (Array.isArray(r))
                    for (i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof $ && a(r[i]);
                else r instanceof $ && t !== r && a(r)
            }
        },
        ae = {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                var e = this;
                l.extend(e, {
                    controller: {
                        control: e.params.controller.control,
                        getInterpolateFunction: te.getInterpolateFunction.bind(e),
                        setTranslate: te.setTranslate.bind(e),
                        setTransition: te.setTransition.bind(e)
                    }
                })
            },
            on: {
                update: function() {
                    var e = this;
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                },
                resize: function() {
                    var e = this;
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                },
                observerUpdate: function() {
                    var e = this;
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                },
                setTranslate: function(e, t) {
                    var a = this;
                    a.controller.control && a.controller.setTranslate(e, t)
                },
                setTransition: function(e, t) {
                    var a = this;
                    a.controller.control && a.controller.setTransition(e, t)
                }
            }
        },
        ie = {
            makeElFocusable: function(e) {
                return e.attr("tabIndex", "0"), e
            },
            addElRole: function(e, t) {
                return e.attr("role", t), e
            },
            addElLabel: function(e, t) {
                return e.attr("aria-label", t), e
            },
            disableEl: function(e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function(e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterKey: function(t) {
                var a = this,
                    i = a.params.a11y;
                if (13 === t.keyCode) {
                    var s = e(t.target);
                    a.navigation && a.navigation.$nextEl && s.is(a.navigation.$nextEl) && (a.isEnd && !a.params.loop || a.slideNext(), a.isEnd ? a.a11y.notify(i.lastSlideMessage) : a.a11y.notify(i.nextSlideMessage)), a.navigation && a.navigation.$prevEl && s.is(a.navigation.$prevEl) && (a.isBeginning && !a.params.loop || a.slidePrev(), a.isBeginning ? a.a11y.notify(i.firstSlideMessage) : a.a11y.notify(i.prevSlideMessage)), a.pagination && s.is("." + a.params.pagination.bulletClass) && s[0].click()
                }
            },
            notify: function(e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function() {
                var e = this;
                if (!e.params.loop) {
                    var t = e.navigation,
                        a = t.$nextEl,
                        i = t.$prevEl;
                    i && i.length > 0 && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && a.length > 0 && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
                }
            },
            updatePagination: function() {
                var t = this,
                    a = t.params.a11y;
                t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function(i, s) {
                    var r = e(s);
                    t.a11y.makeElFocusable(r), t.a11y.addElRole(r, "button"), t.a11y.addElLabel(r, a.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
                })
            },
            init: function() {
                var e = this;
                e.$el.append(e.a11y.liveRegion);
                var t, a, i = e.params.a11y;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
            },
            destroy: function() {
                var e = this;
                e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove();
                var t, a;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && t.off("keydown", e.a11y.onEnterKey), a && a.off("keydown", e.a11y.onEnterKey), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
            }
        },
        se = {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !1,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function() {
                var t = this;
                l.extend(t, {
                    a11y: {
                        liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }), Object.keys(ie).forEach(function(e) {
                    t.a11y[e] = ie[e].bind(t)
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
                },
                toEdge: function() {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.updateNavigation()
                },
                fromEdge: function() {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.updateNavigation()
                },
                paginationUpdate: function() {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.updatePagination()
                },
                destroy: function() {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.destroy()
                }
            }
        },
        re = {
            init: function() {
                var e = this;
                if (e.params.history) {
                    if (!s.history || !s.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                    var t = e.history;
                    t.initialized = !0, t.paths = re.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || s.addEventListener("popstate", e.history.setHistoryPopState))
                }
            },
            destroy: function() {
                var e = this;
                e.params.history.replaceState || s.removeEventListener("popstate", e.history.setHistoryPopState)
            },
            setHistoryPopState: function() {
                var e = this;
                e.history.paths = re.getPathValues(), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
            },
            getPathValues: function() {
                var e = s.location.pathname.slice(1).split("/").filter(function(e) {
                        return "" !== e
                    }),
                    t = e.length;
                return {
                    key: e[t - 2],
                    value: e[t - 1]
                }
            },
            setHistory: function(e, t) {
                var a = this;
                if (a.history.initialized && a.params.history.enabled) {
                    var i = a.slides.eq(t),
                        r = re.slugify(i.attr("data-history"));
                    s.location.pathname.includes(e) || (r = e + "/" + r);
                    var n = s.history.state;
                    n && n.value === r || (a.params.history.replaceState ? s.history.replaceState({
                        value: r
                    }, null, r) : s.history.pushState({
                        value: r
                    }, null, r))
                }
            },
            slugify: function(e) {
                return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function(e, t, a) {
                var i = this;
                if (t)
                    for (var s = 0, r = i.slides.length; s < r; s += 1) {
                        var n = i.slides.eq(s);
                        if (re.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
                            var o = n.index();
                            i.slideTo(o, e, a)
                        }
                    } else i.slideTo(0, e, a)
            }
        },
        ne = {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                var e = this;
                l.extend(e, {
                    history: {
                        init: re.init.bind(e),
                        setHistory: re.setHistory.bind(e),
                        setHistoryPopState: re.setHistoryPopState.bind(e),
                        scrollToSlide: re.scrollToSlide.bind(e),
                        destroy: re.destroy.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.params.history.enabled && e.history.init()
                },
                destroy: function() {
                    var e = this;
                    e.params.history.enabled && e.history.destroy()
                },
                transitionEnd: function() {
                    var e = this;
                    e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
                }
            }
        },
        oe = {
            onHashCange: function() {
                var e = this,
                    t = d.location.hash.replace("#", "");
                t !== e.slides.eq(e.activeIndex).attr("data-hash") && e.slideTo(e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index())
            },
            setHash: function() {
                var e = this;
                if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && s.history && s.history.replaceState) s.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                    else {
                        var t = e.slides.eq(e.activeIndex),
                            a = t.attr("data-hash") || t.attr("data-history");
                        d.location.hash = a || ""
                    }
            },
            init: function() {
                var t = this;
                if (!(!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)) {
                    t.hashNavigation.initialized = !0;
                    var a = d.location.hash.replace("#", "");
                    if (a)
                        for (var i = 0, r = t.slides.length; i < r; i += 1) {
                            var n = t.slides.eq(i);
                            if ((n.attr("data-hash") || n.attr("data-history")) === a && !n.hasClass(t.params.slideDuplicateClass)) {
                                var o = n.index();
                                t.slideTo(o, 0, t.params.runCallbacksOnInit, !0)
                            }
                        }
                    t.params.hashNavigation.watchState && e(s).on("hashchange", t.hashNavigation.onHashCange)
                }
            },
            destroy: function() {
                var t = this;
                t.params.hashNavigation.watchState && e(s).off("hashchange", t.hashNavigation.onHashCange)
            }
        },
        le = {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                var e = this;
                l.extend(e, {
                    hashNavigation: {
                        initialized: !1,
                        init: oe.init.bind(e),
                        destroy: oe.destroy.bind(e),
                        setHash: oe.setHash.bind(e),
                        onHashCange: oe.onHashCange.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.params.hashNavigation.enabled && e.hashNavigation.init()
                },
                destroy: function() {
                    var e = this;
                    e.params.hashNavigation.enabled && e.hashNavigation.destroy()
                },
                transitionEnd: function() {
                    var e = this;
                    e.hashNavigation.initialized && e.hashNavigation.setHash()
                }
            }
        },
        de = {
            run: function() {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    a = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = l.nextTick(function() {
                    e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                }, a)
            },
            start: function() {
                var e = this;
                return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
            },
            stop: function() {
                var e = this;
                return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
            },
            pause: function(e) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 === e ? (t.autoplay.paused = !1, t.autoplay.run()) : t.$wrapperEl.transitionEnd(function() {
                    t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                })))
            }
        },
        pe = {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1
                }
            },
            create: function() {
                var e = this;
                l.extend(e, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: de.run.bind(e),
                        start: de.start.bind(e),
                        stop: de.stop.bind(e),
                        pause: de.pause.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.params.autoplay.enabled && e.autoplay.start()
                },
                beforeTransitionStart: function(e, t) {
                    var a = this;
                    a.autoplay.running && (t || !a.params.autoplay.disableOnInteraction ? a.autoplay.pause(e) : a.autoplay.stop())
                },
                sliderFirstMove: function() {
                    var e = this;
                    e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
                },
                destroy: function() {
                    var e = this;
                    e.autoplay.running && e.autoplay.stop()
                }
            }
        },
        ce = {
            setTranslate: function() {
                for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                    var i = e.slides.eq(a),
                        s = -i[0].swiperSlideOffset;
                    e.params.virtualTranslate || (s -= e.translate);
                    var r = 0;
                    e.isHorizontal() || (r = s, s = 0);
                    var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({
                        opacity: n
                    }).transform("translate3d(" + s + "px, " + r + "px, 0px)")
                }
            },
            setTransition: function(e) {
                var t = this,
                    a = t.slides,
                    i = t.$wrapperEl;
                if (a.transition(e), t.params.virtualTranslate && 0 !== e) {
                    var s = !1;
                    a.transitionEnd(function() {
                        if (!s && t && !t.destroyed) {
                            s = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) i.trigger(e[a])
                        }
                    })
                }
            }
        },
        ue = {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                var e = this;
                l.extend(e, {
                    fadeEffect: {
                        setTranslate: ce.setTranslate.bind(e),
                        setTransition: ce.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("fade" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "fade");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        l.extend(e.params, t), l.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    var e = this;
                    "fade" === e.params.effect && e.fadeEffect.setTranslate()
                },
                setTransition: function(e) {
                    var t = this;
                    "fade" === t.params.effect && t.fadeEffect.setTransition(e)
                }
            }
        },
        he = {
            setTranslate: function() {
                var t, a = this,
                    i = a.$el,
                    s = a.$wrapperEl,
                    r = a.slides,
                    n = a.width,
                    o = a.height,
                    l = a.rtl,
                    d = a.size,
                    p = a.params.cubeEffect,
                    c = a.isHorizontal(),
                    u = a.virtual && a.params.virtual.enabled,
                    h = 0;
                p.shadow && (c ? (0 === (t = s.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), s.append(t)), t.css({
                    height: n + "px"
                })) : 0 === (t = i.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), i.append(t)));
                for (var v = 0; v < r.length; v += 1) {
                    var f = r.eq(v),
                        g = v;
                    u && (g = parseInt(f.attr("data-swiper-slide-index"), 10));
                    var b = 90 * g,
                        w = Math.floor(b / 360);
                    l && (b = -b, w = Math.floor(-b / 360));
                    var y = Math.max(Math.min(f[0].progress, 1), -1),
                        x = 0,
                        T = 0,
                        E = 0;
                    g % 4 == 0 ? (x = 4 * -w * d, E = 0) : (g - 1) % 4 == 0 ? (x = 0, E = 4 * -w * d) : (g - 2) % 4 == 0 ? (x = d + 4 * w * d, E = d) : (g - 3) % 4 == 0 && (x = -d, E = 3 * d + 4 * d * w), l && (x = -x), c || (T = x, x = 0);
                    var S = "rotateX(" + (c ? 0 : -b) + "deg) rotateY(" + (c ? b : 0) + "deg) translate3d(" + x + "px, " + T + "px, " + E + "px)";
                    if (y <= 1 && y > -1 && (h = 90 * g + 90 * y, l && (h = 90 * -g - 90 * y)), f.transform(S), p.slideShadows) {
                        var C = c ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            M = c ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'), f.append(C)), 0 === M.length && (M = e('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'), f.append(M)), C.length && (C[0].style.opacity = Math.max(-y, 0)), M.length && (M[0].style.opacity = Math.max(y, 0))
                    }
                }
                if (s.css({
                        "-webkit-transform-origin": "50% 50% -" + d / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + d / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + d / 2 + "px",
                        "transform-origin": "50% 50% -" + d / 2 + "px"
                    }), p.shadow)
                    if (c) t.transform("translate3d(0px, " + (n / 2 + p.shadowOffset) + "px, " + -n / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p.shadowScale + ")");
                    else {
                        var z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                            P = 1.5 - (Math.sin(2 * z * Math.PI / 360) / 2 + Math.cos(2 * z * Math.PI / 360) / 2),
                            k = p.shadowScale,
                            $ = p.shadowScale / P,
                            I = p.shadowOffset;
                        t.transform("scale3d(" + k + ", 1, " + $ + ") translate3d(0px, " + (o / 2 + I) + "px, " + -o / 2 / $ + "px) rotateX(-90deg)")
                    }
                var L = m.isSafari || m.isUiWebView ? -d / 2 : 0;
                s.transform("translate3d(0px,0," + L + "px) rotateX(" + (a.isHorizontal() ? 0 : h) + "deg) rotateY(" + (a.isHorizontal() ? -h : 0) + "deg)")
            },
            setTransition: function(e) {
                var t = this,
                    a = t.$el;
                t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && a.find(".swiper-cube-shadow").transition(e)
            }
        },
        ve = {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function() {
                var e = this;
                l.extend(e, {
                    cubeEffect: {
                        setTranslate: he.setTranslate.bind(e),
                        setTransition: he.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("cube" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        l.extend(e.params, t), l.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    var e = this;
                    "cube" === e.params.effect && e.cubeEffect.setTranslate()
                },
                setTransition: function(e) {
                    var t = this;
                    "cube" === t.params.effect && t.cubeEffect.setTransition(e)
                }
            }
        },
        fe = {
            setTranslate: function() {
                for (var t = this, a = t.slides, i = 0; i < a.length; i += 1) {
                    var s = a.eq(i),
                        r = s[0].progress;
                    t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                    var n = -180 * r,
                        o = 0,
                        l = -s[0].swiperSlideOffset,
                        d = 0;
                    if (t.isHorizontal() ? t.rtl && (n = -n) : (d = l, l = 0, o = -n, n = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + a.length, t.params.flipEffect.slideShadows) {
                        var p = t.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                            c = t.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                        0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0))
                    }
                    s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                }
            },
            setTransition: function(e) {
                var t = this,
                    a = t.slides,
                    i = t.activeIndex,
                    s = t.$wrapperEl;
                if (a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                    var r = !1;
                    a.eq(i).transitionEnd(function() {
                        if (!r && t && !t.destroyed) {
                            r = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) s.trigger(e[a])
                        }
                    })
                }
            }
        },
        me = {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                var e = this;
                l.extend(e, {
                    flipEffect: {
                        setTranslate: fe.setTranslate.bind(e),
                        setTransition: fe.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("flip" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        l.extend(e.params, t), l.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    var e = this;
                    "flip" === e.params.effect && e.flipEffect.setTranslate()
                },
                setTransition: function(e) {
                    var t = this;
                    "flip" === t.params.effect && t.flipEffect.setTransition(e)
                }
            }
        },
        ge = {
            setTranslate: function() {
                for (var t = this, a = t.width, i = t.height, s = t.slides, r = t.$wrapperEl, n = t.slidesSizesGrid, o = t.params.coverflowEffect, l = t.isHorizontal(), d = t.translate, p = l ? a / 2 - d : i / 2 - d, c = l ? o.rotate : -o.rotate, u = o.depth, h = 0, v = s.length; h < v; h += 1) {
                    var f = s.eq(h),
                        g = n[h],
                        b = (p - f[0].swiperSlideOffset - g / 2) / g * o.modifier,
                        w = l ? c * b : 0,
                        y = l ? 0 : c * b,
                        x = -u * Math.abs(b),
                        T = l ? 0 : o.stretch * b,
                        E = l ? o.stretch * b : 0;
                    Math.abs(E) < .001 && (E = 0), Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(w) < .001 && (w = 0), Math.abs(y) < .001 && (y = 0);
                    var S = "translate3d(" + E + "px," + T + "px," + x + "px)  rotateX(" + y + "deg) rotateY(" + w + "deg)";
                    if (f.transform(S), f[0].style.zIndex = 1 - Math.abs(Math.round(b)), o.slideShadows) {
                        var C = l ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            M = l ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), f.append(C)), 0 === M.length && (M = e('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), f.append(M)), C.length && (C[0].style.opacity = b > 0 ? b : 0), M.length && (M[0].style.opacity = -b > 0 ? -b : 0)
                    }
                }
                m.ie && (r[0].style.perspectiveOrigin = p + "px 50%")
            },
            setTransition: function(e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        be = {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                var e = this;
                l.extend(e, {
                    coverflowEffect: {
                        setTranslate: ge.setTranslate.bind(e),
                        setTransition: ge.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function() {
                    var e = this;
                    "coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
                },
                setTransition: function(e) {
                    var t = this;
                    "coverflow" === t.params.effect && t.coverflowEffect.setTransition(e)
                }
            }
        };
    return $.use([I, L, D, O, H, X, G, V, W, j, K, _, Q, ee, ae, se, ne, le, pe, ue, ve, me, be]), $
});
//# sourceMappingURL=swiper.min.js.map