var uCalcHeight_106002 = {
    "160": "3351",
    "180": "3111",
    "200": "2991",
    "220": "2847",
    "240": "2679",
    "260": "2679",
    "280": "2600",
    "300": "2503",
    "320": "2450",
    "340": "2426",
    "360": "2378",
    "380": "2323",
    "400": "2246",
    "420": "2246",
    "440": "2246",
    "460": "2246",
    "480": "2246",
    "500": "2246",
    "520": "2215",
    "540": "2191",
    "560": "2191",
    "580": "2191",
    "600": "2191",
    "620": "2191",
    "640": "2191",
    "660": "2191",
    "680": "2191",
    "700": "2191",
    "720": "2191",
    "740": "2191",
    "760": "2191",
    "780": "2191",
    "800": "2191",
    "820": "2191",
    "840": "2191",
    "860": "2191",
    "880": "2191",
    "900": "2191",
    "920": "2191",
    "940": "2191",
    "960": "2191"
};
var uCalc = {
    "scheme": "https:\/\/",
    "host": "api.ucalc.pro",
    "TID": "SlBVV0JV"
};
var XD = function() {
    var e,
        t,
        n,
        i = 1,
        o = this;
    return {
        receiveMessage: function(i, a) {
            o.postMessage ? (i && (n = function(e) {
                if ("string" == typeof a && e.origin !== a || "[object Function]" === Object.prototype.toString.call(a) && !1 === a(e.origin))
                    return !1;
                i(e)
            }), o.addEventListener ? o[i ? "addEventListener" : "removeEventListener"]("message", n, !1) : o[i ? "attachEvent" : "detachEvent"]("onmessage", n)) : (e && clearInterval(e), e = null, i && (e = setInterval(function() {
                var e = document.location.hash,
                    n = /^#?\d+&/;
                e !== t && n.test(e) && (t = e, i({
                    data: e.replace(n, "")
                }))
            }, 100)))
        },
        postMessage: function(e, t, n) {
            t && (n = n || parent, o.postMessage ? n.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : t && (n.location = t.replace(/#.*$/, "") + "#" + +new Date + i++ + "&" + e))
        }
    }
}();
function uCalcCreate(e) {
    var t = "uCalcWaitScript",
        n = "uCalcRun",
        i = window;
    function o(e, t) {
        [].forEach.call(e, t)
    }
    function a(e) {
        return document.querySelectorAll("#widget_container" + e + ", .uCalc_" + e)
    }
    function r(e) {
        return document.getElementsByClassName("uCalc-frame_" + e)
    }
    function l(e) {
        var t = [];
        return o(a(e), function(e) {
            t.push(e.getElementsByClassName("uc-loader-zone")[0])
        }), t
    }
    function s(e) {
        var t = "uCalc";
        return void 0 !== i[t + e] || (i[t + e] = {}), i[t + e]
    }
    var u,
        d,
        f = function(e) {
            var t = e.classList;
            if ("string" == typeof t)
                t = "" == t ? [] : t.split(" ");
            else if ("object" == typeof t) {
                for (var n = [], i = 0; i < t.length; i++)
                    n.push(t[i]);
                t = n
            }
            return t
        },
        p = function() {
            var e = window.location.search,
                t = new Object;
            e = e.substring(1).split("&");
            for (var n = 0; n < e.length; n++)
                c = e[n].split("="), t[c[0]] = c[1];
            return t
        }(),
        h = Object.keys(p).map(function(e) {
            return e + "=" + p[e]
        }).filter(function(e) {
            return new RegExp("^(utm|UTM)_").test(e)
        }).join("&");
    void 0 !== i.calcs || (i.calcs = []), o(document.querySelectorAll('.ucalc-div, [class^="uCalc_"]'), function(c) {
        if (u = c.getAttribute("id"), d = u ? u.replace(/\D+/g, "") : 0, f(c).forEach(function(e) {
            /^uCalc_/.test(e) && (d = e.replace(/\D+/g, ""))
        }), -1 == calcs.indexOf(d)) {
            var p = {
                    extendObject: function(e, t) {
                        for (prop in t)
                            e[prop] = t[prop];
                        return e
                    },
                    proto: "http:" == document.location.protocol ? "http://" : "https://"
                },
                m = i["widgetOptions" + d],
                v = p.extendObject({
                    id: d,
                    domain: uCalc.host + "/api/",
                    serv: uCalc.scheme + uCalc.host,
                    bg_color: "FFFFFF"
                }, m);
            if (XD.receiveMessage(function(e) {
                var c = e.data;
                if (c.ucalc) {
                    var u = r(c.id);
                    if (s(v.id).message = e, c.height > 0 && u.length > 0) {
                        var d,
                            f,
                            p = l(c.id),
                            h = function(e) {
                                return parseInt(e, 10)
                            },
                            m = h(c.width),
                            g = h(c.height),
                            w = 0,
                            C = h(c.widthHtml);
                        if (g) {
                            if (o(u, function(e) {
                                e.clientWidth == m && (e.style.height = g + "px", w = 1)
                            }), w || o(u, function(e) {
                                d = e.offsetWidth, f = d / C, e.style.height = g * f + "px"
                            }), void 0 === p[0])
                                return;
                            o(p, function(e) {
                                e.classList.add("uc-loader-hide"), e.parentNode.classList.add("uc-frame-show")
                            }), setTimeout(function() {
                                a(v.id).length > 0 && l(c.id).length > 0 && o(p, function(e) {
                                    null != e.parentNode && e.parentNode.removeChild(e)
                                })
                            }, 1500)
                        }
                    }
                    if (void 0 !== i[n + c.v])
                        i[n + c.v](e);
                    else if (void 0 === i[t] || void 0 !== i[t] && 1 != i[t]) {
                        i[t] = 1;
                        var E = document.createElement("script");
                        E.type = "text/javascript", E.async = !0, E.src = ("https:" == document.location.protocol ? "https:" : "http:") + v.domain + "run" + c.v + ".js", document.getElementsByTagName("head")[0].appendChild(E)
                    }
                }
            }, v.serv), 1 == e)
                v.widget_url = [p.proto, v.domain, v.id, "?bg_color=", v.bg_color].join(""), v.widget_url += "&TID=" + uCalc.TID, v.widget_url += h ? "&" + h : "", v.widget_url += "#" + encodeURIComponent(document.location.href), s(v.id).created = !1, s(v.id).widgetElement = null, s(v.id).message = {}, s(v.id).show = function() {
                    if (!this.created) {
                        if (void 0 === i.uCalcPreloadCSS) {
                            var e = document.createElement("link");
                            e.type = "text/css", e.rel = "stylesheet", e.href = ("https:" == document.location.protocol ? "https:" : "http:") + "//" + v.domain + "widget.css?2", document.getElementsByTagName("head")[0].appendChild(e), i.uCalcPreloadCSS = 1
                        }
                        var t = a(v.id),
                            n = i["uCalcHeight_" + v.id],
                            c = null == n ? "height:150px" : "",
                            l = '<iframe class="uCalc-frame_' + v.id + '" src="' + v.widget_url + '" scrolling="no" style="border:0;width:100%;' + c + '" frameborder="0"></iframe><div class="uc-loader-zone"><div class="uc-loader uc-loader-pulser"></div></div><div class="widget_helper' + v.id + '"></div>';
                        o(t, function(e) {
                            if (!(f(e).indexOf("uc-frame-show") >= 0)) {
                                e.innerHTML = l, e.style.position = "relative";
                                var t = r(v.id),
                                    i = e.clientWidth;
                                for (search in n)
                                    search - i < 20 && search - i >= 0 && o(t, function(e) {
                                        e.style.height = n[search] + "px"
                                    })
                            }
                        }), this.widgetElement = l, this.created = !0
                    }
                }, s(v.id).show();
            else {
                var g = s(v.id).message;
                i[n + g.data.v](g)
            }
        }
    })
}
function uCalcRun2(e) {
    void 0 === window.calcData && (window.calcData = {
        wait_scroll: []
    });
    var t,
        n,
        i,
        o,
        a,
        c = e.data,
        r = c.id,
        l = document.querySelectorAll("#widget_container" + r + ", .uCalc_" + r),
        s = document.getElementsByClassName("uCalc-frame_" + e.data.id);
    if (c.hasOwnProperty("overlay")) {
        t = function(e) {
            return e.getElementsByClassName("widget_helper" + r)[0]
        }, n = function() {
            [].forEach.call(l, function(e) {
                t(e).innerHTML = ""
            }), document.removeEventListener("scroll_uCalc", i, !1)
        }, i = function() {
            clearTimeout(u), u = setTimeout(n, 400)
        }, o = function() {
            var e = new CustomEvent("scroll_uCalc", {
                scroll: 1
            });
            document.dispatchEvent(e)
        };
        var u = setTimeout(n, 400);
        [].forEach.call(l, function(e) {
            t(e).innerHTML = '<div class="widget_over" style="position:absolute;width:100%;height:100%;left:0;top:0"></div>'
        }), document.addEventListener("scroll_uCalc", i, !1), -1 == calcData.wait_scroll.indexOf(r) && (calcData.wait_scroll.push(r), document.addEventListener("scroll", o, !1))
    }
    c.hasOwnProperty("sliderIsMoved") && (a = function() {
        var e = 0;
        [].forEach.call(s, function(t) {
            e || (XD.postMessage({
                ucalc: 1,
                mouseup: 1
            }, "*", t.contentWindow), e = 1)
        }), document.removeEventListener("mouseup", a, !1)
    }, document.removeEventListener("mouseup", a, !1), document.addEventListener("mouseup", a, !1)), c.hasOwnProperty("sliderIsStop") && document.removeEventListener("mouseup", a, !1)
}
uCalcCreate(1);
