(function () {
    "use strict";
    var e = {
        2100: function (e, n, t) {
            var o = t(9242),
                r = t(3396),
                i = t(7139);
            const a = { id: "container" },
                l = (0, r._)("div", null, "to", -1),
                u = { id: "result" };

            function c(e, n, t, c, s, f) {
                const d = (0, r.up)("HelloWorld");
                return (0, r.wg)(), (0, r.iD)("div", a, [(0, r.Wm)(d, { msg: "Super Converter" }), (0, r._)("div", null, [(0, r.wy)((0, r._)("input", { type: "text", "onUpdate:modelValue": n[0] || (n[0] = n => e.fromValue = n), placeholder: "enter amount" }, null, 512), [[o.nr, e.fromValue]])]), (0, r._)("div", null, [(0, r.wy)((0, r._)("input", { type: "text", "onUpdate:modelValue": n[1] || (n[1] = n => e.fromUnit = n), placeholder: "enter current unit" }, null, 512), [[o.nr, e.fromUnit]])]), l, (0, r._)("div", null, [(0, r.wy)((0, r._)("input", { type: "text", "onUpdate:modelValue": n[2] || (n[2] = n => e.toUnit = n), placeholder: "enter wanted unit" }, null, 512), [[o.nr, e.toUnit]])]), (0, r._)("div", null, [(0, r._)("p", u, (0, i.zw)(e.fromValue) + " " + (0, i.zw)(e.fromUnit) + " equals " + (0, i.zw)(f.result) + " " + (0, i.zw)(e.toUnit), 1)])]);
            }
            const s = e => ((0, r.dD)("data-v-a543ac78"), e = e(), (0, r.Cn)(), e),
                f = { class: "hello" },
                const d = s(() => (0, r._)("p", null, [
                    (0, r.Uk)(" Converter Website "),
                    (0, r._)("br"),
                    (0, r.Uk)(" You can choose between: "),
                    (0, r._)("br"),
                    (0, r.Uk)(" Grams to Grains"),
                    (0, r._)("br"),
                    (0, r.Uk)(" Millimeters to Inches"),
                    (0, r._)("br"),
                    (0, r.Uk)(" and vice versa"),
                    (0, r._)("br"),
                    (0, r.Uk)("to Convert ")
                ], -1)));
                
            function p(e, n, t, o, a, l) {
                return (0, r.wg)(), (0, r.iD)("div", f, [(0, r._)("h1", null, (0, i.zw)(t.msg), 1), d]);
            }
            var v = { name: "HelloWorld", props: { msg: String } },
                h = t(89);
            const m = (0, h.Z)(v, [["render", p], ["__scopeId", "data-v-a543ac78"]]);
            var g = m,
                w = { name: "App", components: { HelloWorld: g }, methods: { toBanana: function (e, n) { 
                    switch (n.toLowerCase()) { 
                        case "grains": 
                            return 15.4324 * e; // 1 gram = 15.4324 grains
                        case "inches": 
                            return 0.0393701 * e; // 1 millimeter = 0.0393701 inch
                        default: 
                            return console.log("Conversion failed"), e 
                    } 
                } }, props: { physicalQuantity: Object }, data: function () { return { fromValue: "", fromUnit: "", toUnit: "" } }, computed: { result: function () { 
                    let e = parseFloat(this.fromValue); 
                    if (isFinite(e)) { 
                        let n = this.toBanana(e, this.fromUnit); 
                        switch (this.toUnit.toLowerCase()) { 
                            case "grains": 
                                return parseFloat(n.toFixed(5)); 
                            case "inches": 
                                return parseFloat(n.toFixed(5)); 
                            default: 
                                return console.log("Error: Unsupported unit"), "value" 
                        } 
                    } 
                    return this.fromValue 
                } } };
            const b = (0, h.Z)(w, [["render", c]]);
            var _ = b,
                U = t(5431);
            (0, U.z)("/service-worker.js", { ready() { console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB") }, registered() { console.log("Service worker has been registered.") }, cached() { console.log("Content has been cached for offline use.") }, updatefound() { console.log("New content is downloading.") }, updated() { console.log("New content is available; please refresh.") }, offline() { console.log("No internet connection found. App is running in offline mode.") }, error(e) { console.error("Error during service worker registration:", e) } }), (0, o.ri)(_).mount("#app")
        }
    }, n = {};
    function t(o) {
        var r = n[o];
        if (void 0 !== r) return r.exports;
        var i = n[o] = { exports: {} };
        return e[o](i, i.exports, t), i.exports
    }
    t.m = e, function () {
        var e = [];
        t.O = function (n, o, r, i) {
            if (!o) {
                var a = 1 / 0;
                for (s = 0; s < e.length; s++) {
                    o = e[s][0], r = e[s][1], i = e[s][2];
                    for (var l = !0, u = 0; u < o.length; u++) (!1 & i || a >= i) && Object.keys(t.O).every((function (e) { return t.O[e](o[u]) })) ? o.splice(u--, 1) : (l = !1, i < a && (a = i));
                    if (l) { e.splice(s--, 1); var c = r(); void 0 !== c && (n = c) }
                }
                return n
            }
            i = i || 0;
            for (var s = e.length; s > 0 && e[s - 1][2] > i; s--) e[s] = e[s - 1];
            e[s] = [o, r, i]
        }
    }(), function () {
        t.n = function (e) {
            var n = e && e.__esModule ? function () { return e["default"] } : function () { return e };
            return t.d(n, { a: n }), n
        }
    }(), function () {
        t.d = function (e, n) {
            for (var o in n) t.o(n, o) && !t.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: n[o] })
        }
    }(), function () {
        t.g = function () {
            if ("object" === typeof globalThis) return globalThis;
            try { return this || new Function("return this")() } catch (e) { if ("object" === typeof window) return window }
        }()
    }(), function () {
        t.o = function (e, n) { return Object.prototype.hasOwnProperty.call(e, n) }
    }(), function () {
        var e = { 143: 0 };
        t.O.j = function (n) { return 0 === e[n] };
        var n = function (n, o) {
            var r, i, a = o[0],
                l = o[1],
                u = o[2],
                c = 0;
            if (a.some((function (n) { return 0 !== e[n] }))) {
                for (r in l) t.o(l, r) && (t.m[r] = l[r]);
                if (u) var s = u(t)
            }
            for (n && n(o); c < a.length; c++) i = a[c], t.o(e, i) && e[i] && e[i][0](), e[i] = 0;
            return t.O(s)
        }, o = self["webpackChunkmy_converter"] = self["webpackChunkmy_converter"] || [];
        o.forEach(n.bind(null, 0)), o.push = n.bind(null, o.push.bind(o))
    }();
    var o = t.O(void 0, [998], (function () { return t(2100) }));
    o = t.O(o)
})();
