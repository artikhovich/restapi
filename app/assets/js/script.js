! function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.Blazy = t()
}

(this, (
    function() 
{

    function e(e) {
        var n = e._util;
        n.elements = function(e) {
            for (var t = [], n = (e = e.root.querySelectorAll(e.selector)).length; n--; t.unshift(e[n]));
            return t
        }(e.options), n.count = n.elements.length, n.destroyed && (n.destroyed = !1, e.options.container && d(e.options.container, (function(e) {
            l(e, "scroll", n.validateT)
        })), l(window, "resize", n.saveViewportOffsetT), l(window, "resize", n.validateT), l(window, "scroll", n.validateT)), t(e)
    }

    function t(e) {
        for (var t = e._util, o = 0; o < t.count; o++) {
            var s, i = t.elements[o],
                r = i;
            s = e.options;
            var a = r.getBoundingClientRect();
            s.container && h && (r = r.closest(s.containerClass)) ? s = !!n(r = r.getBoundingClientRect(), p) && n(a, {
                top: r.top - s.offset,
                right: r.right + s.offset,
                bottom: r.bottom + s.offset,
                left: r.left - s.offset
            }) : s = n(a, p), (s || c(i, e.options.successClass)) && (e.load(i), t.elements.splice(o, 1), t.count--, o--)
        }
        0 === t.count && e.destroy()
    }

    function n(e, t) {
        return e.right >= t.left && e.bottom >= t.top && e.left <= t.right && e.top <= t.bottom
    }

    function o(e, t, n) {
        if (!c(e, n.successClass) && (t || n.loadInvisible || 0 < e.offsetWidth && 0 < e.offsetHeight))
            if (t = e.getAttribute(f) || e.getAttribute(n.src)) {
                var o = (t = t.split(n.separator))[g && 1 < t.length ? 1 : 0],
                    a = e.getAttribute(n.srcset),
                    m = "img" === e.nodeName.toLowerCase(),
                    p = (t = e.parentNode) && "picture" === t.nodeName.toLowerCase();
                if (m || void 0 === e.src) {
                    var h = new Image,
                        v = function() {
                            n.error && n.error(e, "invalid"), r(e, n.errorClass), u(h, "error", v), u(h, "load", y)
                        },
                        y = function() {
                            m ? p || i(e, o, a) : e.style.backgroundImage = 'url("' + o + '")', s(e, n), u(h, "load", y), u(h, "error", v)
                        };
                    p && (h = e, d(t.getElementsByTagName("source"), (function(e) {
                        var t = n.srcset,
                            o = e.getAttribute(t);
                        o && (e.setAttribute("srcset", o), e.removeAttribute(t))
                    }))), l(h, "error", v), l(h, "load", y), i(h, o, a)
                } else e.src = o, s(e, n)
            } else "video" === e.nodeName.toLowerCase() ? (d(e.getElementsByTagName("source"), (function(e) {
                var t = n.src,
                    o = e.getAttribute(t);
                o && (e.setAttribute("src", o), e.removeAttribute(t))
            })), e.load(), s(e, n)) : (n.error && n.error(e, "missing"), r(e, n.errorClass))
    }

    function s(e, t) {
        r(e, t.successClass), t.success && t.success(e), e.removeAttribute(t.src), e.removeAttribute(t.srcset), d(t.breakpoints, (function(t) {
            e.removeAttribute(t.src)
        }))
    }

    function i(e, t, n) {
        n && e.setAttribute("srcset", n), e.src = t
    }

    function c(e, t) {
        return -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
    }

    function r(e, t) {
        c(e, t) || (e.className += " " + t)
    }

    function a(e) {
        p.bottom = (window.innerHeight || document.documentElement.clientHeight) + e, p.right = (window.innerWidth || document.documentElement.clientWidth) + e
    }

    function l(e, t, n) {
        e.attachEvent ? e.attachEvent && e.attachEvent("on" + t, n) : e.addEventListener(t, n, {
            capture: !1,
            passive: !0
        })
    }

    function u(e, t, n) {
        e.detachEvent ? e.detachEvent && e.detachEvent("on" + t, n) : e.removeEventListener(t, n, {
            capture: !1,
            passive: !0
        })
    }

    function d(e, t) {
        if (e && t)
            for (var n = e.length, o = 0; o < n && !1 !== t(e[o], o); o++);
    }

    function m(e, t, n) {
        var o = 0;
        return function() {
            var s = +new Date;
            s - o < t || (o = s, e.apply(n, arguments))
        }
    }

    var f, p, g, h;
    return function(n) {
        if (!document.querySelectorAll) {
            var s = document.createStyleSheet();
            document.querySelectorAll = function(e, t, n, o, i) {
                for (i = document.all, t = [], n = (e = e.replace(/\[for\b/gi, "[htmlFor").split(",")).length; n--;) {
                    for (s.addRule(e[n], "k:v"), o = i.length; o--;) i[o].currentStyle.k && t.push(i[o]);
                    s.removeRule(0)
                }
                return t
            }
        }
        var i = this,
            c = i._util = {};
        c.elements = [], c.destroyed = !0, i.options = n || {}, i.options.error = i.options.error || !1, i.options.offset = i.options.offset || 100, i.options.root = i.options.root || document, i.options.success = i.options.success || !1, i.options.selector = i.options.selector || ".b-lazy", i.options.separator = i.options.separator || "|", i.options.containerClass = i.options.container, i.options.container = !!i.options.containerClass && document.querySelectorAll(i.options.containerClass), i.options.errorClass = i.options.errorClass || "b-error", i.options.breakpoints = i.options.breakpoints || !1, i.options.loadInvisible = i.options.loadInvisible || !1, i.options.successClass = i.options.successClass || "b-loaded", i.options.validateDelay = i.options.validateDelay || 25, i.options.saveViewportOffsetDelay = i.options.saveViewportOffsetDelay || 50, i.options.srcset = i.options.srcset || "data-srcset", i.options.src = f = i.options.src || "data-src", h = Element.prototype.closest, g = 1 < window.devicePixelRatio, (p = {}).top = 0 - i.options.offset, p.left = 0 - i.options.offset, i.revalidate = function() {
            e(i)
        }, i.load = function(e, t) {
            var n = this.options;
            void 0 === e.length ? o(e, t, n) : d(e, (function(e) {
                o(e, t, n)
            }))
        }, i.destroy = function() {
            var e = this._util;
            this.options.container && d(this.options.container, (function(t) {
                u(t, "scroll", e.validateT)
            })), u(window, "scroll", e.validateT), u(window, "resize", e.validateT), u(window, "resize", e.saveViewportOffsetT), e.count = 0, e.elements.length = 0, e.destroyed = !0
        }, c.validateT = m((function() {
            t(i)
        }), i.options.validateDelay, i), c.saveViewportOffsetT = m((function() {
            a(i.options.offset)
        }), i.options.saveViewportOffsetDelay, i), a(i.options.offset), d(i.options.breakpoints, (function(e) {
            if (e.width >= window.screen.width) return f = e.src, !1
        })), setTimeout((function() {
            e(i)
        }))
    }

}
)
),


function() {
    let e = function(e, t) {
        const n = e,
            o = document.getElementsByTagName("head")[0],
            s = o.getElementsByTagName("link");
        for (let e = 0; e < s.length; e++) {
            let t = s[e];
            "shortcut icon" == t.rel && o.removeChild(t)
        }
        const i = document.createElement("link");
        i.setAttribute("href", n), i.setAttribute("type", "image/x-icon"), i.setAttribute("rel", "shortcut icon"), o.appendChild(i), document.title = t
    };

    var t = document.getElementsByTagName("title")[0].innerHTML;
    window.onblur = function() {
        e("../img/favicon/heart.ico", "рџ¤љ Р’РµСЂРЅРёС‚РµСЃСЊ рџ­ вњ‹")
    }, 
    window.onfocus = function() {
        e("../img/favicon/favicon.ico", t)
    }
}
(), document.addEventListener("DOMContentLoaded", (function() {
    if (new Blazy({
            offset: 0
        }), document.querySelectorAll('a[title="Р”РµРјРѕРЅСЃС‚СЂР°С†РёСЏ"]').forEach((function(e) {
            e.oncontextmenu = function() {
                return !1
            }
        })), document.querySelector("#posts_wrapper")) {
        let e = document.querySelector("#posts_wrapper");
        new InfiniteScroll(e, {
            path: "#pagination__next",
            append: ".cat-list-item",
            status: ".page-load-status"
        }).on("load", (function() {
            new Blazy({
                offset: 0
            })
        }))
    }
    let e = document.querySelector(".search"),
        t = document.getElementById("searchField"),
        n = function() {
            t.classList.toggle("open")
        };
    e.onclick = function(e) {
        e.stopPropagation(), n();
        const t = document.getElementById("search-box");
        t.value = "", setTimeout(() => {
            t.focus()
        }, 200)
    }, document.addEventListener("click", (function(o) {
        let s = o.target,
            i = s == t || t.contains(s),
            c = s == e,
            r = t.classList.contains("open");
        i || c || !r || n()
    }));
    const o = document.querySelector(".mobile-menu-button");
    if (o.addEventListener("click", (function() {
            o.classList.toggle("open"), o.nextElementSibling.classList.toggle("open")
        })), window.onscroll = () => {
            let e = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
            if (document.getElementById("myBar").style.width = e + "%", window.pageYOffset > 100 ? (document.querySelector(".top-line").classList.add("fixed"), document.querySelector(".search-field").classList.add("fixed")) : (document.querySelector(".top-line").classList.remove("fixed"), document.querySelector(".search-field").classList.remove("fixed")), document.querySelector(".author + .new-date + .nav-global")) {
                var t = document.querySelector(".author + .new-date + .nav-global");
                window.pageYOffset > 500 ? t.classList.add("on") : t.classList.remove("on")
            }
            var n = document.documentElement.scrollHeight - document.documentElement.clientHeight,
                o = n - 1e3,
                s = document.querySelectorAll(".nav-global a");
            if (s && (window.pageYOffset > o ? s.forEach((function(e) {
                    e.classList.add("anim")
                })) : s.forEach((function(e) {
                    e.classList.remove("anim")
                }))), document.getElementById("lastArticles") && !document.getElementById("sideBarPost") && (document.documentElement.clientWidth > 992 || document.documentElement.clientHeight > 655)) {
                let e = n - 165;
                window.pageYOffset > 1730 && window.pageYOffset < e ? document.getElementById("lastArticles").classList.add("nav-sticky") : document.getElementById("lastArticles").classList.remove("nav-sticky")
            }
            if (document.getElementById("sideBarPost") && (document.documentElement.clientWidth > 992 || document.documentElement.clientHeight > 655)) {
                let e = n - 165;
                window.pageYOffset > 1730 && window.pageYOffset < e ? document.getElementById("sideBarPost").classList.add("nav-sticky") : document.getElementById("sideBarPost").classList.remove("nav-sticky")
            }
            const i = document.querySelector(".scrollup");
            window.pageYOffset > 580 ? i.classList.add("on") : i.classList.remove("on"), i.addEventListener("click", (function() {
                window.scrollBy({
                    top: -document.documentElement.scrollHeight,
                    behavior: "smooth"
                })
            }))
        }, document.querySelectorAll(".top-menu li a").forEach((function(e) {
            window.location.pathname.indexOf(e.getAttribute("href")) > -1 && e.classList.add("active")
        })), document.querySelectorAll(".highlight code").forEach((function(e) {
            var t = e.getAttribute("data-lang");
            e.insertAdjacentHTML("beforebegin", '<div class="language_name">' + t + "</div>"), e.insertAdjacentHTML("beforebegin", '<button class="btn-copy" data-title="РЎРєРѕРїРёСЂРѕРІР°РЅРѕ"></button>')
        })), document.querySelectorAll(".btn-copy").forEach((function(e) {
            e.addEventListener("click", (function() {
                let t = this.nextElementSibling,
                    n = document.createRange();
                n.selectNode(t), window.getSelection().addRange(n), document.execCommand("copy"), e.classList.add("add"), setTimeout(() => {
                    window.getSelection().removeAllRanges()
                }, 500), setTimeout(() => {
                    e.classList.remove("add")
                }, 700)
            }))
        })), document.querySelector(".popUp_iframe")) {
        const e = document.querySelectorAll(".popUp_iframe"),
            t = document.querySelector(".o2t-popup__iframe"),
            n = document.querySelector(".o2t-popup-wrapper"),
            o = document.querySelector(".o2t-popup__close");
        e.forEach((function(e) {
            e.addEventListener("click", (function(e) {
                e.preventDefault(), t.setAttribute("data", this.getAttribute("href")), setTimeout(() => {
                    n.classList.add("open")
                }, 300)
            }))
        }));
        const s = function() {
            n.classList.remove("open")
        };
        o.addEventListener("click", s), n.addEventListener("click", (function(e) {
            "o2t-popup__iframe" != e.target.className && s()
        }))
    }
    document.querySelectorAll("[data-fancybox]:not(.btn)").forEach((function(e) {
        tag = e.innerHTML, newTag = tag, e.outerHTML = newTag
    })), document.getElementById("view_counter") && setTimeout((function() {
        (async function(e) {
            const t = await fetch(e);
            if (!t.ok) throw new Error(`РќРµ СѓРґР°Р»РѕСЃСЊ РїРѕР»СѓС‡РёС‚СЊ ${e}, СЃС‚Р°С‚СѓСЃ: ${t.status}`);
            return await t.json()
        })("/php/metrika/metrika.json").then(e => (function(e) {
            const t = window.location.pathname;
            let n = 0,
                o = "";
            o = "/" == t.slice(-1) ? new RegExp("(\\/\\/only-to-top\\.ru\\" + t.substring(0, t.length - 1) + "\\/)($|\\?.*)") : new RegExp("(\\/\\/only-to-top\\.ru\\" + t + ")($|\\?.*)"), e.data.forEach((function(e) {
                o.test(e.dimensions[0].name) && (n += e.metrics[0])
            }));
            let s = document.createElement("span");
            s.className = "countPeople", s.innerHTML = '<i class="eye-o2t"></i>' + n;
            let i = document.getElementById("view_counter");
            n > 0 && i.appendChild(s)
        })(e)).catch(e => console.error(e))
    }), 2500)
})), document.addEventListener("DOMContentLoaded", (function() {
    const e = document.getElementById("o2t_form");
    if (e) {
        (async function(e) {
            const t = {
                    page_id: document.getElementById("page_id").getAttribute("href")
                },
                n = await fetch(e, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify(t)
                });
            if (!n.ok) throw new Error(`РќРµ СѓРґР°Р»РѕСЃСЊ РїРѕР»СѓС‡РёС‚СЊ ${e}, status: ${n.status}`);
            return await n.json()
        })("../php/comments/read.php").then(e => (function(e) {
            e.msg && e.msg.forEach(e => {
                let t = [];
                t = "Only to top" === e.user_name ? `\n                            <li class="o2t-msg__user">\n                                <div>\n                                    <img src="./img/admin.png" alt="Only to top - admin" />\n                                </div>\n                                <div class="o2t-msg__user-body">\n                                    <p class="user-name">${e.user_name}</p>\n                                    <time>${e.created}</time>\n                                    <p class="user-message">${e.user_message}</p>\n                                </div>\n                            </li>\n                        ` : `\n                            <li class="o2t-msg__user" data-id="${e.id}">\n                                <div>\n                                    <img src="./img/user.jpg" alt="Only to top - user" />\n                                </div>\n                                <div class="o2t-msg__user-body">\n                                    <p class="user-name">${e.user_name}</p>\n                                    <time>${e.created}</time>\n                                    <p class="user-message">${e.user_message}</p>\n                                </div>\n                            </li>`, document.querySelector("#comments .o2t-msg__body").insertAdjacentHTML("beforeend", t);
                const n = document.querySelector(".no-comments");
                n && n.remove()
            })
        })(e)).catch(e => console.error(e)), e.addEventListener("submit", (function(e) {
            e.preventDefault(), t()
        }));
        var t = function() {
            const e = document.getElementById("user_name").value,
                t = document.getElementById("user_message").value,
                n = {
                    user_name: e,
                    user_message: t,
                    page_id: document.getElementById("page_id").getAttribute("href"),
                    user_mail: document.getElementById("user_mail").value,
                    parent_id: document.getElementById("parent_id").value
                };
            let o = `\n                <li class="o2t-msg__user">\n                    <div>\n                        <img src="./img/user.jpg" alt="user message" />\n                    </div>\n                    <div class="o2t-msg__user-body">\n                        <p class="user-name">${e}</p>\n                        <time>${(new Date).toLocaleString("ru-RU")}</time>\n                        <p class="user-message">` + t + "</p>\n                    </div>\n                </li>\n            ",
                s = document.querySelector("#comments .o2t-msg__body");
            s && s.insertAdjacentHTML("beforeEnd", o);
            const i = document.querySelector(".no-comments");
            i && i.remove(), async function(e) {
                let t = await fetch("../php/comments/create.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                        Accept: "application/json"
                    },
                    body: JSON.stringify(e)
                });
                await t.json()
            }(n), async function(e) {
                let t = await fetch("../php/mail.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                        Accept: "application/json"
                    },
                    body: JSON.stringify(e)
                });
                await t.json()
            }(n), this.reset()
        };
        document.querySelector("#user_name").addEventListener("keyup", (function() {
            this.value = this.value.replace(/[^Рђ-РЇР°-СЏРЃС‘\s]/g, "")
        }))
    }
})), document.addEventListener("DOMContentLoaded", (function() {
    setTimeout((function() {
        ! function() {
            const e = document.querySelector(".searchcontainer"),
                t = document.querySelector("#search-box");
            (async function(e) {
                const t = await fetch(e);
                if (!t.ok) throw new Error(`Could not fetch ${e}, status: ${t.status}`);
                return await t.json()
            })("/posts.json").then(n => (function(n) {
                t.addEventListener("keyup", (function() {
                    const t = this.value.toLowerCase();
                    e.innerHTML = "", t.length > 1 ? function(t) {
                        n.forEach((function(n) {
                            const o = document.createElement("div");
                            n.content.toLowerCase().indexOf(t) > -1 && (o.className = "searchitem", o.innerHTML = `\n                            <div class='o2t-search-item'>\n                                <a class='o2t-search-item__link' href='${n.url}'>\n                                    <h4 class='o2t-search-item__title'>${n.title}</h4>\n                                    <p>${n.content}</p>\n                                </a>\n                            </div>\n                        `, e.appendChild(o))
                        }))
                    }(t) : e.innerHTML = ""
                }))
            })(n)).catch(e => console.error(e))
        }()
    }), 5e3)
}));