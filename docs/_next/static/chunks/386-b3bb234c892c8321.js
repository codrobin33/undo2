(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[386], { 3911: function (e, t, r) { "use strict"; r.d(t, { Z: function () { return s } }); var n = r(5893), a = r(7294), i = [{ before: "img/skin_resurfacing_before.jpg", before_desc: "Baseline", after: "img/skin_resurfacing_after.jpg", after_desc: "After 1 treatment" }, { before: "img/acne_before.jpg", before_desc: "Baseline", after: "img/acne_after.jpg", after_desc: "After 5 treatment" }, { before: "img/tattoo_wing_before.jpg", before_desc: "Baseline", after: "img/tattoo_wing_after.jpg", after_desc: "After 9 treatment" }, { before: "img/vascular_lesions_before.jpg", before_desc: "Baseline", after: "img/vascular_lesions_after.jpg", after_desc: "After 9 treatment" }], o = function (e) { var t = e.set, r = e.current, a = e.count; return (0, n.jsx)("nav", { className: "flex items-center justify-center", "aria-label": "Progress", children: (0, n.jsx)("ol", { role: "list", className: "flex items-center space-x-5", children: Array.from({ length: a }).map((function (e, a) { return (0, n.jsx)("li", { children: a === r ? (0, n.jsxs)("div", { onClick: function () { return t(a) }, className: "relative flex items-center justify-center cursor-pointer", "aria-current": "step", children: [(0, n.jsx)("span", { className: "absolute w-5 h-5 p-px flex", "aria-hidden": "true", children: (0, n.jsx)("span", { className: "w-full h-full rounded-full bg-indigo-200" }) }), (0, n.jsx)("span", { className: "relative block w-2.5 h-2.5 bg-indigo-600 rounded-full", "aria-hidden": "true" }), (0, n.jsx)("span", { className: "sr-only", children: a })] }) : (0, n.jsx)("div", { onClick: function () { return t(a) }, className: "block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400 cursor-pointer", children: (0, n.jsx)("span", { className: "sr-only", children: a }) }) }, a) })) }) }) }; function s() { var e = (0, a.useState)(0), t = e[0], r = e[1], s = (0, a.useMemo)((function () { return i[t] }), [i, t]), l = (0, a.useCallback)((function (e) { e <= i.length && r(e) }), [i]); return (0, n.jsx)("div", { className: "bg-white", children: (0, n.jsx)("div", { className: "max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8", children: (0, n.jsxs)("section", { "aria-labelledby": "details-heading", children: [(0, n.jsxs)("div", { className: "flex flex-col items-center text-center", children: [(0, n.jsx)("h2", { id: "details-heading", className: "text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl", children: "Before / After" }), (0, n.jsx)("p", { className: "mt-3 max-w-3xl text-lg text-gray-600", children: "A few examples on how Undo, Skincare Center can help you!" })] }), (0, n.jsxs)("div", { className: "mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8", children: [(0, n.jsxs)("div", { children: [(0, n.jsx)("div", { className: "w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden", children: (0, n.jsx)("img", { src: s.before, alt: "", className: "w-full h-full object-center object-cover" }) }), (0, n.jsx)("p", { className: "text-center text-base text-gray-500", children: s.before_desc })] }), (0, n.jsxs)("div", { children: [(0, n.jsx)("div", { className: "w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden", children: (0, n.jsx)("img", { src: s.after, alt: "", className: "w-full h-full object-center object-cover" }) }), (0, n.jsx)("p", { className: "text-center text-base text-gray-500", children: s.after_desc })] })] }), (0, n.jsx)(o, { set: l, current: t, count: i.length })] }) }) }) } }, 7395: function (e, t, r) { "use strict"; var n = r(5893), a = r(5926); t.Z = function () { return (0, n.jsx)("div", { className: "bg-indigo-700", style: { marginTop: "0" }, children: (0, n.jsxs)("div", { className: "max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8", children: [(0, n.jsxs)("h2", { className: "text-3xl font-extrabold text-white sm:text-4xl", children: [(0, n.jsx)("span", { className: "block", children: "Welcome to Undo," }), (0, n.jsx)("span", { className: "block", children: "Kansas City's Choice in Skincare." })] }), (0, n.jsx)("p", { className: "mt-4 text-lg leading-6 text-indigo-200", children: "Our team of experts are here to provide a customized treatment plan to help you look and feel your best! Our service begins with a personalized consultation to fully understand your objective, introduce an array of innovative treatments and products to get the results you want and deserve." }), (0, n.jsx)("div", { className: "mt-8 flex justify-center", children: (0, n.jsx)("div", { className: "inline-flex rounded-md shadow", children: (0, n.jsx)(a.Z, { reversed: !0, children: "Book now" }) }) })] }) }) } }, 1698: function (e, t, r) { "use strict"; var n = r(5893), a = r(7294), i = r(3751), o = r(5685), s = r(5926), l = ["Body Sculpting", "Skin Rejuvenation", "Skincare Products", "Tattoo Removal", "Aesthetic Treatments", "Acne Treatments", "RF Body Contouring"]; t.Z = function () { var e = (0, a.useState)(0), t = e[0], r = e[1], u = (0, a.useState)(!1), c = u[0], f = u[1], d = (0, i.useStopwatch)({ autoStart: !0 }), m = d.seconds, p = d.reset, v = (0, a.useCallback)((function () { r(t >= l.length - 1 ? 0 : t + 1), f(!1), p() })); return (0, a.useEffect)((function () { m >= 3 && !c && f(!0) }), [m]), (0, n.jsx)("div", { className: "relative bg-white", style: { marginTop: "0" }, children: (0, n.jsxs)("main", { className: "lg:relative", children: [(0, n.jsx)("div", { className: "w-full pt-16 pb-20 text-center lg:py-48 lg:text-left", children: (0, n.jsxs)("div", { className: "px-4 lg:w-3/5 sm:px-8 xl:pr-16", children: [(0, n.jsxs)("h1", { className: "text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl", children: [(0, n.jsx)("span", { className: "block xl:inline", children: "We are the experts in" }), " ", l.map((function (e, r) { return (0, n.jsx)(o.u, { show: r === t && !c, enter: "transition-opacity duration-150", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "transition-opacity duration-150", leaveFrom: "opacity-100", leaveTo: "opacity-0", afterLeave: function () { return v() }, children: (0, n.jsx)("span", { className: "block text-indigo-600 xl:inline", children: e }) }, r) }))] }), (0, n.jsx)("p", { className: "mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl", children: "At Undo, Skincare Center, Tattoo Removal and Day Med Spa, we want you to look and feel your best. Our team are experts here to provide a customized treatment plan to help you get there!" }), (0, n.jsxs)("div", { className: "mt-10 sm:flex sm:justify-center lg:justify-start", children: [(0, n.jsx)("div", { className: "rounded-md shadow", children: (0, n.jsx)(s.Z, {}) }), (0, n.jsx)("div", { className: "mt-3 rounded-md shadow sm:mt-0 sm:ml-3", children: (0, n.jsx)("a", { href: "/services", className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10", children: "Learn more" }) })] })] }) }), (0, n.jsx)("div", { className: "relative hidden md:inline w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/5 lg:h-full", children: (0, n.jsx)("img", { className: "absolute inset-0 w-full h-full object-cover", src: "img/acne_slider1.jpg", alt: "" }) })] }) }) } }, 3751: function (e, t, r) { var n; "undefined" != typeof self && self, e.exports = (n = r(7294), function (e) { var t = {}; function r(n) { if (t[n]) return t[n].exports; var a = t[n] = { i: n, l: !1, exports: {} }; return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports } return r.m = e, r.c = t, r.d = function (e, t, n) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, r.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, r.t = function (e, t) { if (1 & t && (e = r(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var a in e) r.d(n, a, function (t) { return e[t] }.bind(null, a)); return n }, r.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return r.d(t, "a", t), t }, r.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "", r(r.s = 3) }([function (e, t) { e.exports = n }, function (e, t, r) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.Validate = t.Time = void 0; var n = i(r(5)), a = i(r(6)); function i(e) { return e && e.__esModule ? e : { default: e } } t.Time = n.default, t.Validate = a.default }, function (e, t, r) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.useInterval = void 0; var n = function (e) { return e && e.__esModule ? e : { default: e } }(r(7)); t.useInterval = n.default }, function (e, t, r) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.useTime = t.useStopwatch = t.useTimer = void 0; var n = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }; t.default = function (e) { if ((0, a.useEffect)((function () { console.warn("react-timer-hook: default export useTimer is deprecated, use named exports { useTimer, useStopwatch, useTime } instead") }), []), e.expiryTimestamp) { var t = (0, i.default)(e); return n({}, t, { startTimer: t.start, stopTimer: t.pause, resetTimer: function () { } }) } var r = (0, o.default)(e); return n({}, r, { startTimer: r.start, stopTimer: r.pause, resetTimer: r.reset }) }; var a = r(0), i = l(r(4)), o = l(r(8)), s = l(r(9)); function l(e) { return e && e.__esModule ? e : { default: e } } t.useTimer = i.default, t.useStopwatch = o.default, t.useTime = s.default }, function (e, t, r) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var n = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }, a = function (e, t) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return function (e, t) { var r = [], n = !0, a = !1, i = void 0; try { for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0); } catch (e) { a = !0, i = e } finally { try { !n && s.return && s.return() } finally { if (a) throw i } } return r }(e, t); throw new TypeError("Invalid attempt to destructure non-iterable instance") }; t.default = function (e) { var t = e.expiryTimestamp, r = e.onExpire, c = e.autoStart, f = void 0 === c || c, d = (0, i.useState)(t), m = a(d, 2), p = m[0], v = m[1], x = (0, i.useState)(o.Time.getSecondsFromExpiry(p)), h = a(x, 2), g = h[0], y = h[1], b = (0, i.useState)(f), j = a(b, 2), w = j[0], T = j[1], S = (0, i.useState)(f), _ = a(S, 2), N = _[0], k = _[1], O = (0, i.useState)(u(p)), M = a(O, 2), F = M[0], P = M[1]; function E(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; P(u(e)), k(t), T(t), v(e), y(o.Time.getSecondsFromExpiry(e)) } function A() { var e = new Date; e.setMilliseconds(e.getMilliseconds() + 1e3 * g), E(e) } return (0, s.useInterval)((function () { F !== l && P(l); var e = o.Time.getSecondsFromExpiry(p); y(e), e <= 0 && (o.Validate.onExpire(r) && r(), T(!1), P(null)) }), w ? F : null), n({}, o.Time.getTimeFromSeconds(g), { start: function () { N ? (y(o.Time.getSecondsFromExpiry(p)), T(!0)) : A() }, pause: function () { T(!1) }, resume: A, restart: E, isRunning: w }) }; var i = r(0), o = r(1), s = r(2), l = 1e3; function u(e) { if (!o.Validate.expiryTimestamp(e)) return null; var t = o.Time.getSecondsFromExpiry(e), r = Math.floor(1e3 * (t - Math.floor(t))); return r > 0 ? r : l } }, function (e, t, r) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var n = function () { function e(e, t) { for (var r = 0; r < t.length; r++) { var n = t[r]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } return function (t, r, n) { return r && e(t.prototype, r), n && e(t, n), t } }(), a = function () { function e() { !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e) } return n(e, null, [{ key: "getTimeFromSeconds", value: function (e) { var t = Math.ceil(e), r = Math.floor(t / 86400), n = Math.floor(t % 86400 / 3600), a = Math.floor(t % 3600 / 60); return { seconds: Math.floor(t % 60), minutes: a, hours: n, days: r } } }, { key: "getSecondsFromExpiry", value: function (e, t) { var r = e - (new Date).getTime(); if (r > 0) { var n = r / 1e3; return t ? Math.round(n) : n } return 0 } }, { key: "getSecondsFromPrevTime", value: function (e, t) { var r = (new Date).getTime() - e; if (r > 0) { var n = r / 1e3; return t ? Math.round(n) : n } return 0 } }, { key: "getSecondsFromTimeNow", value: function () { var e = new Date; return e.getTime() / 1e3 - 60 * e.getTimezoneOffset() } }, { key: "getFormattedTimeFromSeconds", value: function (t, r) { var n = e.getTimeFromSeconds(t), a = n.seconds, i = n.minutes, o = n.hours, s = "", l = o; return "12-hour" === r && (s = o >= 12 ? "pm" : "am", l = o % 12), { seconds: a, minutes: i, hours: l, ampm: s } } }]), e }(); t.default = a }, function (e, t, r) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var n = function () { function e(e, t) { for (var r = 0; r < t.length; r++) { var n = t[r]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } return function (t, r, n) { return r && e(t.prototype, r), n && e(t, n), t } }(), a = function () { function e() { !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e) } return n(e, null, [{ key: "expiryTimestamp", value: function (e) { var t = new Date(e).getTime() > 0; return t || console.warn("react-timer-hook: { useTimer } Invalid expiryTimestamp settings", e), t } }, { key: "onExpire", value: function (e) { var t = e && "function" == typeof e; return e && !t && console.warn("react-timer-hook: { useTimer } Invalid onExpire settings function", e), t } }]), e }(); t.default = a }, function (e, t, r) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e, t) { var r = (0, n.useRef)(); (0, n.useEffect)((function () { r.current = e })), (0, n.useEffect)((function () { if (!t) return function () { }; var e = setInterval((function () { r.current && r.current() }), t); return function () { return clearInterval(e) } }), [t]) }; var n = r(0) }, function (e, t, r) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var n = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }, a = function (e, t) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return function (e, t) { var r = [], n = !0, a = !1, i = void 0; try { for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0); } catch (e) { a = !0, i = e } finally { try { !n && s.return && s.return() } finally { if (a) throw i } } return r }(e, t); throw new TypeError("Invalid attempt to destructure non-iterable instance") }; t.default = function (e) { var t = e.autoStart, r = e.offsetTimestamp, l = (0, i.useState)(o.Time.getSecondsFromExpiry(r, !0) || 0), u = a(l, 2), c = u[0], f = u[1], d = (0, i.useState)(new Date), m = a(d, 2), p = m[0], v = m[1], x = (0, i.useState)(c + o.Time.getSecondsFromPrevTime(p || 0, !0)), h = a(x, 2), g = h[0], y = h[1], b = (0, i.useState)(t), j = a(b, 2), w = j[0], T = j[1]; return (0, s.useInterval)((function () { y(c + o.Time.getSecondsFromPrevTime(p, !0)) }), w ? 1e3 : null), n({}, o.Time.getTimeFromSeconds(g), { start: function () { var e = new Date; v(e), T(!0), y(c + o.Time.getSecondsFromPrevTime(e, !0)) }, pause: function () { f(g), T(!1) }, reset: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r = o.Time.getSecondsFromExpiry(e, !0) || 0, n = new Date; v(n), f(r), T(t), y(r + o.Time.getSecondsFromPrevTime(n, !0)) }, isRunning: w }) }; var i = r(0), o = r(1), s = r(2) }, function (e, t, r) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var n = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }, a = function (e, t) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return function (e, t) { var r = [], n = !0, a = !1, i = void 0; try { for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0); } catch (e) { a = !0, i = e } finally { try { !n && s.return && s.return() } finally { if (a) throw i } } return r }(e, t); throw new TypeError("Invalid attempt to destructure non-iterable instance") }; t.default = function (e) { var t = e.format, r = (0, i.useState)(o.Time.getSecondsFromTimeNow()), l = a(r, 2), u = l[0], c = l[1]; return (0, s.useInterval)((function () { c(o.Time.getSecondsFromTimeNow()) }), 1e3), n({}, o.Time.getFormattedTimeFromSeconds(u, t)) }; var i = r(0), o = r(1), s = r(2) }])) } }]);