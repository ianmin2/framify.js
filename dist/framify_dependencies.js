"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
  "use strict";
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
  "use strict";
  var c = [],
      d = a.document,
      e = Object.getPrototypeOf,
      f = c.slice,
      g = c.concat,
      h = c.push,
      i = c.indexOf,
      j = {},
      k = j.toString,
      l = j.hasOwnProperty,
      m = l.toString,
      n = m.call(Object),
      o = {};function p(a, b) {
    b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
  }var q = "3.1.1",
      r = function r(a, b) {
    return new r.fn.init(a, b);
  },
      s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      t = /^-ms-/,
      u = /-([a-z])/g,
      v = function v(a, b) {
    return b.toUpperCase();
  };r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
      return f.call(this);
    }, get: function get(a) {
      return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
    }, pushStack: function pushStack(a) {
      var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
    }, each: function each(a) {
      return r.each(this, a);
    }, map: function map(a) {
      return this.pushStack(r.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(f.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (a < 0 ? b : 0);return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }return g;
  }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === r.type(a);
    }, isArray: Array.isArray, isWindow: function isWindow(a) {
      return null != a && a === a.window;
    }, isNumeric: function isNumeric(a) {
      var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
    }, isPlainObject: function isPlainObject(a) {
      var b, c;return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n));
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(a) {
      p(a);
    }, camelCase: function camelCase(a) {
      return a.replace(t, "ms-").replace(u, v);
    }, nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function each(a, b) {
      var c,
          d = 0;if (w(a)) {
        for (c = a.length; d < c; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(s, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      return null == b ? -1 : i.call(b, a, c);
    }, merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; d < c; d++) {
        a[e++] = b[d];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          e,
          f = 0,
          h = [];if (w(a)) for (d = a.length; f < d; f++) {
        e = b(a[f], f, c), null != e && h.push(e);
      } else for (f in a) {
        e = b(a[f], f, c), null != e && h.push(e);
      }return g.apply([], h);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, d, e;if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function e() {
        return a.apply(b || this, d.concat(f.call(arguments)));
      }, e.guid = a.guid = a.guid || r.guid++, e;
    }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    j["[object " + b + "]"] = b.toLowerCase();
  });function w(a) {
    var b = !!a && "length" in a && a.length,
        c = r.type(a);return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
  }var x = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ha(),
        z = ha(),
        A = ha(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = {}.hasOwnProperty,
        D = [],
        E = D.pop,
        F = D.push,
        G = D.push,
        H = D.slice,
        I = function I(a, b) {
      for (var c = 0, d = a.length; c < d; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        K = "[\\x20\\t\\r\\n\\f]",
        L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
        N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
        O = new RegExp(K + "+", "g"),
        P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
        Q = new RegExp("^" + K + "*," + K + "*"),
        R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
        S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
        T = new RegExp(N),
        U = new RegExp("^" + L + "$"),
        V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
        W = /^(?:input|select|textarea|button)$/i,
        X = /^h\d$/i,
        Y = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        $ = /[+~]/,
        _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
        aa = function aa(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ca = function ca(a, b) {
      return b ? "\0" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
    },
        da = function da() {
      m();
    },
        ea = ta(function (a) {
      return a.disabled === !0 && ("form" in a || "label" in a);
    }, { dir: "parentNode", next: "legend" });try {
      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
    } catch (fa) {
      G = { apply: D.length ? function (a, b) {
          F.apply(a, H.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function ga(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s = b && b.ownerDocument,
          w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
          if (9 === w) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
              o[h] = "#" + k + " " + sa(o[h]);
            }r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
          }if (r) try {
            return G.apply(d, s.querySelectorAll(r)), d;
          } catch (x) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(P, "$1"), b, d, e);
    }function ha() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ia(a) {
      return a[u] = !0, a;
    }function ja(a) {
      var b = n.createElement("fieldset");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ka(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function la(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function oa(a) {
      return function (b) {
        return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a;
      };
    }function pa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return !!b && "HTML" !== b.nodeName;
    }, m = ga.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          return a.getAttribute("id") === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }) : (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c,
              d,
              e,
              f = b.getElementById(a);if (f) {
            if (c = f.getAttributeNode("id"), c && c.value === a) return [f];e = b.getElementsByName(a), d = 0;while (f = e[d++]) {
              if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
            }
          }return [];
        }
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
      }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ja(function (a) {
        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
          g.unshift(c);
        }c = b;while (c = c.parentNode) {
          h.unshift(c);
        }while (g[d] === h[d]) {
          d++;
        }return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b);
    }, ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return ga(b, n, null, [a]).length > 0;
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, ga.escape = function (a) {
      return (a + "").replace(ba, ca);
    }, ga.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, ga.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = ga.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = I(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ia(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0;
          };
        }), contains: ia(function (a) {
          return a = a.replace(_, aa), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ia(function (a) {
          return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return X.test(a.nodeName);
        }, input: function input(a) {
          return W.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: pa(function () {
          return [0];
        }), last: pa(function (a, b) {
          return [b - 1];
        }), eq: pa(function (a, b, c) {
          return [c < 0 ? c + b : c];
        }), even: pa(function (a, b) {
          for (var c = 0; c < b; c += 2) {
            a.push(c);
          }return a;
        }), odd: pa(function (a, b) {
          for (var c = 1; c < b; c += 2) {
            a.push(c);
          }return a;
        }), lt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = ma(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = na(b);
    }function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    };function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) {
        d += a[b].value;
      }return d;
    }function ta(a, b, c) {
      var d = b.dir,
          e = b.next,
          f = e || d,
          g = c && "parentNode" === f,
          h = x++;return b.first ? function (b, c, e) {
        while (b = b[d]) {
          if (1 === b.nodeType || g) return a(b, c, e);
        }return !1;
      } : function (b, c, i) {
        var j,
            k,
            l,
            m = [w, h];if (i) {
          while (b = b[d]) {
            if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
            if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
          }
        }return !1;
      };
    }function ua(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function va(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) {
        ga(a, b[d], c);
      }return c;
    }function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) {
        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      }return g;
    }function xa(a, b, c, d, e, f) {
      return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || va(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : wa(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
      });
    }function ya(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
        return a === b;
      }, h, !0), l = ta(function (a) {
        return I(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; i < f; i++) {
        if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; e < f; e++) {
              if (d.relative[a[e].type]) break;
            }return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
          }m.push(c);
        }
      }return ua(m);
    }function za(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);break;
              }
            }k && (w = y);
          }c && ((l = !q && l) && r--, _f && t.push(l));
        }if (r += s, c && s !== r) {
          o = 0;while (q = b[o++]) {
            q(t, u, g, h);
          }if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = E.call(i));
            }u = wa(u);
          }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ia(f) : f;
    }return h = ga.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, za(e, d)), f.selector = a;
      }return f;
    }, i = ga.select = function (a, b, c, e) {
      var f,
          i,
          j,
          k,
          l,
          m = "function" == typeof a && a,
          n = !e && g(a = m.selector || a);if (c = c || [], 1 === n.length) {
        if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
          if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;m && (b = b.parentNode), a = a.slice(i.shift().value.length);
        }f = V.needsContext.test(a) ? 0 : i.length;while (f--) {
          if (j = i[f], d.relative[k = j.type]) break;if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
            if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;break;
          }
        }
      }return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
    }), ja(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ka("type|href|height|width", function (a, b, c) {
      if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ja(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ka("value", function (a, b, c) {
      if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
    }), ja(function (a) {
      return null == a.getAttribute("disabled");
    }) || ka(J, function (a, b, c) {
      var d;if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), ga;
  }(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && r(a).is(c)) break;d.push(a);
      }
    }return d;
  },
      z = function z(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }return c;
  },
      A = r.expr.match.needsContext,
      B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      C = /^.[^:#\[\.,]*$/;function D(a, b, c) {
    return r.isFunction(b) ? r.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    }) : b.nodeType ? r.grep(a, function (a) {
      return a === b !== c;
    }) : "string" != typeof b ? r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c;
    }) : C.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c && 1 === a.nodeType;
    }));
  }r.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, r.fn.extend({ find: function find(a) {
      var b,
          c,
          d = this.length,
          e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
        for (b = 0; b < d; b++) {
          if (r.contains(e[b], this)) return !0;
        }
      }));for (c = this.pushStack([]), b = 0; b < d; b++) {
        r.find(a, e[b], c);
      }return d > 1 ? r.uniqueSort(c) : c;
    }, filter: function filter(a) {
      return this.pushStack(D(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(D(this, a || [], !0));
    }, is: function is(a) {
      return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
    } });var E,
      F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      G = r.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if (c = c || E, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b)) for (e in b) {
          r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }return this;
      }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
    }return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
  };G.prototype = r.fn, E = r(d);var H = /^(?:parents|prev(?:Until|All))/,
      I = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
      var b = r(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; a < c; a++) {
          if (r.contains(this, b[a])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      var c,
          d = 0,
          e = this.length,
          f = [],
          g = "string" != typeof a && r(a);if (!A.test(a)) for (; d < e; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function J(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
  }r.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return y(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return y(a, "parentNode", c);
    }, next: function next(a) {
      return J(a, "nextSibling");
    }, prev: function prev(a) {
      return J(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return y(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return y(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return y(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return y(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return z((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return z(a.firstChild);
    }, contents: function contents(a) {
      return a.contentDocument || r.merge([], a.childNodes);
    } }, function (a, b) {
    r.fn[a] = function (c, d) {
      var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e);
    };
  });var K = /[^\x20\t\r\n\f]+/g;function L(a) {
    var b = {};return r.each(a.match(K) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }r.Callbacks = function (a) {
    a = "string" == typeof a ? L(a) : r.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          r.each(b, function (b, c) {
            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      }, remove: function remove() {
        return r.each(arguments, function (a, b) {
          var c;while ((c = r.inArray(b, f, c)) > -1) {
            f.splice(c, 1), c <= h && h--;
          }
        }), this;
      }, has: function has(a) {
        return a ? r.inArray(a, f) > -1 : f.length > 0;
      }, empty: function empty() {
        return f && (f = []), this;
      }, disable: function disable() {
        return e = g = [], f = c = "", this;
      }, disabled: function disabled() {
        return !f;
      }, lock: function lock() {
        return e = g = [], c || b || (f = c = ""), this;
      }, locked: function locked() {
        return !!e;
      }, fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function fire() {
        return j.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return j;
  };function M(a) {
    return a;
  }function N(a) {
    throw a;
  }function O(a, b, c) {
    var d;try {
      a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a);
    } catch (a) {
      c.call(void 0, a);
    }
  }r.extend({ Deferred: function Deferred(b) {
      var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
          d = "pending",
          e = { state: function state() {
          return d;
        }, always: function always() {
          return f.done(arguments).fail(arguments), this;
        }, "catch": function _catch(a) {
          return e.then(null, a);
        }, pipe: function pipe() {
          var a = arguments;return r.Deferred(function (b) {
            r.each(c, function (c, d) {
              var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
                var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, then: function then(b, d, e) {
          var f = 0;function g(b, c, d, e) {
            return function () {
              var h = this,
                  i = arguments,
                  j = function j() {
                var a, j;if (!(b < f)) {
                  if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
                }
              },
                  k = e ? j : function () {
                try {
                  j();
                } catch (a) {
                  r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i));
                }
              };b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
            };
          }return r.Deferred(function (a) {
            c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N));
          }).promise();
        }, promise: function promise(a) {
          return null != a ? r.extend(a, e) : e;
        } },
          f = {};return r.each(c, function (a, b) {
        var g = b[2],
            h = b[5];e[b[1]] = g.add, h && g.add(function () {
          d = h;
        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
          return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
        }, f[b[0] + "With"] = g.fireWith;
      }), e.promise(f), b && b.call(f, f), f;
    }, when: function when(a) {
      var b = arguments.length,
          c = b,
          d = Array(c),
          e = f.call(arguments),
          g = r.Deferred(),
          h = function h(a) {
        return function (c) {
          d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
        };
      };if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
        O(e[c], h(c), g.reject);
      }return g.promise();
    } });var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
    a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }, r.readyException = function (b) {
    a.setTimeout(function () {
      throw b;
    });
  };var Q = r.Deferred();r.fn.ready = function (a) {
    return Q.then(a)["catch"](function (a) {
      r.readyException(a);
    }), this;
  }, r.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
      a ? r.readyWait++ : r.ready(!0);
    }, ready: function ready(a) {
      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]));
    } }), r.ready.then = Q.then;function R() {
    d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), r.ready();
  }"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));var S = function S(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === r.type(c)) {
      e = !0;for (h in c) {
        S(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
      return j.call(r(a), c);
    })), b)) for (; h < i; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      T = function T(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };function U() {
    this.expando = r.expando + U.uid++;
  }U.uid = 1, U.prototype = { cache: function cache(a) {
      var b = a[this.expando];return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
    }, set: function set(a, b, c) {
      var d,
          e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
        e[r.camelCase(d)] = b[d];
      }return e;
    }, get: function get(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
    }, access: function access(a, b, c) {
      return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function remove(a, b) {
      var c,
          d = a[this.expando];if (void 0 !== d) {
        if (void 0 !== b) {
          r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;while (c--) {
            delete d[b[c]];
          }
        }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    }, hasData: function hasData(a) {
      var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
    } };var V = new U(),
      W = new U(),
      X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Y = /[A-Z]/g;function Z(a) {
    return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : X.test(a) ? JSON.parse(a) : a);
  }function $(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = Z(c);
      } catch (e) {}W.set(a, b, c);
    } else c = void 0;return c;
  }r.extend({ hasData: function hasData(a) {
      return W.hasData(a) || V.hasData(a);
    }, data: function data(a, b, c) {
      return W.access(a, b, c);
    }, removeData: function removeData(a, b) {
      W.remove(a, b);
    }, _data: function _data(a, b, c) {
      return V.access(a, b, c);
    }, _removeData: function _removeData(a, b) {
      V.remove(a, b);
    } }), r.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), $(f, d, e[d])));
          }V.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        W.set(this, a);
      }) : S(this, function (b) {
        var c;if (f && void 0 === b) {
          if (c = W.get(f, a), void 0 !== c) return c;if (c = $(f, a), void 0 !== c) return c;
        } else this.each(function () {
          W.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function removeData(a) {
      return this.each(function () {
        W.remove(this, a);
      });
    } }), r.extend({ queue: function queue(a, b, c) {
      var d;if (a) return b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || [];
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = r.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = r._queueHooks(a, b),
          g = function g() {
        r.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return V.get(a, c) || V.access(a, c, { empty: r.Callbacks("once memory").add(function () {
          V.remove(a, [b + "queue", c]);
        }) });
    } }), r.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        r.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = r.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      aa = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"),
      ba = ["Top", "Right", "Bottom", "Left"],
      ca = function ca(a, b) {
    return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
  },
      da = function da(a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  };function ea(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return r.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
        k = (r.cssNumber[b] || "px" !== j && +i) && aa.exec(r.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do {
        f = f || ".5", k /= f, r.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var fa = {};function ga(a) {
    var b,
        c = a.ownerDocument,
        d = a.nodeName,
        e = fa[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), fa[d] = e, e);
  }function ha(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++) {
      d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ca(d) && (e[f] = ga(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
    }for (f = 0; f < g; f++) {
      null != e[f] && (a[f].style.display = e[f]);
    }return a;
  }r.fn.extend({ show: function show() {
      return ha(this, !0);
    }, hide: function hide() {
      return ha(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        ca(this) ? r(this).show() : r(this).hide();
      });
    } });var ia = /^(?:checkbox|radio)$/i,
      ja = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      ka = /^$|\/(?:java|ecma)script/i,
      la = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };la.optgroup = la.option, la.tbody = la.tfoot = la.colgroup = la.caption = la.thead, la.th = la.td;function ma(a, b) {
    var c;return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c;
  }function na(a, b) {
    for (var c = 0, d = a.length; c < d; c++) {
      V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"));
    }
  }var oa = /<|&#?\w+;/;function pa(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) {
      if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (oa.test(f)) {
        g = g || l.appendChild(b.createElement("div")), h = (ja.exec(f) || ["", ""])[1].toLowerCase(), i = la[h] || la._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
          g = g.lastChild;
        }r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
      } else m.push(b.createTextNode(f));
    }l.textContent = "", n = 0;while (f = m[n++]) {
      if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = ma(l.appendChild(f), "script"), j && na(g), c) {
        k = 0;while (f = g[k++]) {
          ka.test(f.type || "") && c.push(f);
        }
      }
    }return l;
  }!function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var qa = d.documentElement,
      ra = /^key/,
      sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ta = /^([^.]*)(?:\.(.+)|)/;function ua() {
    return !0;
  }function va() {
    return !1;
  }function wa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function xa(a, b, c, d, e, f) {
    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
        xa(a, h, c, d, b[h], f);
      }return a;
    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = va;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
      return r().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
      r.event.add(this, b, e, d, c);
    });
  }r.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = V.get(a);if (q) {
        c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(qa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(K) || [""], j = b.length;while (j--) {
          h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
        }
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = V.hasData(a) && V.get(a);if (q && (i = q.events)) {
        b = (b || "").match(K) || [""], j = b.length;while (j--) {
          if (h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
            l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
              k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
          } else for (n in i) {
            r.event.remove(a, n + b[j], c, d, !0);
          }
        }r.isEmptyObject(i) && V.remove(a, "handle events");
      }
    }, dispatch: function dispatch(a) {
      var b = r.event.fix(a),
          c,
          d,
          e,
          f,
          g,
          h,
          i = new Array(arguments.length),
          j = (V.get(this, "events") || {})[b.type] || [],
          k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
        i[c] = arguments[c];
      }if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
        h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
          b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
            b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, b), b.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g,
          h = [],
          i = b.delegateCount,
          j = a.target;if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) {
        if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
          for (f = [], g = {}, c = 0; c < i; c++) {
            d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
          }f.length && h.push({ elem: j, handlers: f });
        }
      }return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h;
    }, addProp: function addProp(a, b) {
      Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
          if (this.originalEvent) return b(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[a];
        }, set: function set(b) {
          Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
        } });
    }, fix: function fix(a) {
      return a[r.expando] ? a : new r.Event(a);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== wa() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === wa() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && r.nodeName(this, "input")) return this.click(), !1;
        }, _default: function _default(a) {
          return r.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } } }, r.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, r.Event = function (a, b) {
    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ua : va, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
  }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: va, isPropagationStopped: va, isImmediatePropagationStopped: va, isSimulated: !1, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = ua, a && !this.isSimulated && a.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = ua, a && !this.isSimulated && a.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = ua, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
    } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
      var b = a.button;return null == a.which && ra.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && sa.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
    } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), r.fn.extend({ on: function on(a, b, c, d) {
      return xa(this, a, b, c, d);
    }, one: function one(a, b, c, d) {
      return xa(this, a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = va), this.each(function () {
        r.event.remove(this, a, c, b);
      });
    } });var ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      za = /<script|<style|<link/i,
      Aa = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ba = /^true\/(.*)/,
      Ca = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a, b) {
    return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a;
  }function Ea(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function Fa(a) {
    var b = Ba.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function Ga(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) {
          for (c = 0, d = j[e].length; c < d; c++) {
            r.event.add(b, e, j[e][c]);
          }
        }
      }W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i));
    }
  }function Ha(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && ia.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
  }function Ia(a, b, c, d) {
    b = g.apply([], b);var e,
        f,
        h,
        i,
        j,
        k,
        l = 0,
        m = a.length,
        n = m - 1,
        q = b[0],
        s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && Aa.test(q)) return a.each(function (e) {
      var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ia(f, b, c, d);
    });if (m && (e = pa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
      for (h = r.map(ma(e, "script"), Ea), i = h.length; l < m; l++) {
        j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, ma(j, "script"))), c.call(a[l], j, l);
      }if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Fa), l = 0; l < i; l++) {
        j = h[l], ka.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ca, ""), k));
      }
    }return a;
  }function Ja(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || r.cleanData(ma(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && na(ma(d, "script")), d.parentNode.removeChild(d));
    }return a;
  }r.extend({ htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(ya, "<$1></$2>");
    }, clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = ma(h), f = ma(a), d = 0, e = f.length; d < e; d++) {
        Ha(f[d], g[d]);
      }if (b) if (c) for (f = f || ma(a), g = g || ma(h), d = 0, e = f.length; d < e; d++) {
        Ga(f[d], g[d]);
      } else Ga(a, h);return g = ma(h, "script"), g.length > 0 && na(g, !i && ma(a, "script")), h;
    }, cleanData: function cleanData(a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
        if (T(c)) {
          if (b = c[V.expando]) {
            if (b.events) for (d in b.events) {
              e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            }c[V.expando] = void 0;
          }c[W.expando] && (c[W.expando] = void 0);
        }
      }
    } }), r.fn.extend({ detach: function detach(a) {
      return Ja(this, a, !0);
    }, remove: function remove(a) {
      return Ja(this, a);
    }, text: function text(a) {
      return S(this, function (a) {
        return void 0 === a ? r.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function append() {
      return Ia(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Da(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return Ia(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Da(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return Ia(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return Ia(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (r.cleanData(ma(a, !1)), a.textContent = "");
      }return this;
    }, clone: function clone(a, b) {
      return a = null != a && a, b = null == b ? a : b, this.map(function () {
        return r.clone(this, a, b);
      });
    }, html: function html(a) {
      return S(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !za.test(a) && !la[(ja.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = r.htmlPrefilter(a);try {
            for (; c < d; c++) {
              b = this[c] || {}, 1 === b.nodeType && (r.cleanData(ma(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = [];return Ia(this, arguments, function (b) {
        var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(ma(this)), c && c.replaceChild(b, this));
      }, a);
    } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    r.fn[a] = function (a) {
      for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) {
        c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
      }return this.pushStack(d);
    };
  });var Ka = /^margin/,
      La = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
      Ma = function Ma(b) {
    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
  };!function () {
    function b() {
      if (i) {
        i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", qa.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, qa.removeChild(h), i = null;
      }
    }var c,
        e,
        f,
        g,
        h = d.createElement("div"),
        i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
        return b(), c;
      }, boxSizingReliable: function boxSizingReliable() {
        return b(), e;
      }, pixelMarginRight: function pixelMarginRight() {
        return b(), f;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return b(), g;
      } }));
  }();function Na(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ma(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && La.test(g) && Ka.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
  }function Oa(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Pa = /^(none|table(?!-c[ea]).+)/,
      Qa = { position: "absolute", visibility: "hidden", display: "block" },
      Ra = { letterSpacing: "0", fontWeight: "400" },
      Sa = ["Webkit", "Moz", "ms"],
      Ta = d.createElement("div").style;function Ua(a) {
    if (a in Ta) return a;var b = a[0].toUpperCase() + a.slice(1),
        c = Sa.length;while (c--) {
      if (a = Sa[c] + b, a in Ta) return a;
    }
  }function Va(a, b, c) {
    var d = aa.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }function Wa(a, b, c, d, e) {
    var f,
        g = 0;for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) {
      "margin" === c && (g += r.css(a, c + ba[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ba[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ba[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ba[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ba[f] + "Width", !0, e)));
    }return g;
  }function Xa(a, b, c) {
    var d,
        e = !0,
        f = Ma(a),
        g = "border-box" === r.css(a, "boxSizing", !1, f);if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
      if (d = Na(a, b, f), (d < 0 || null == d) && (d = a.style[b]), La.test(d)) return d;e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0;
    }return d + Wa(a, b, c || (g ? "border" : "content"), e, f) + "px";
  }r.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Na(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = r.camelCase(b),
            i = a.style;return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = aa.exec(c)) && e[1] && (c = ea(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = r.camelCase(b);return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Na(a, b, d)), "normal" === e && b in Ra && (e = Ra[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    } }), r.each(["height", "width"], function (a, b) {
    r.cssHooks[b] = { get: function get(a, c, d) {
        if (c) return !Pa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Xa(a, b, d) : da(a, Qa, function () {
          return Xa(a, b, d);
        });
      }, set: function set(a, c, d) {
        var e,
            f = d && Ma(a),
            g = d && Wa(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = aa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Va(a, c, g);
      } };
  }), r.cssHooks.marginLeft = Oa(o.reliableMarginLeft, function (a, b) {
    if (b) return (parseFloat(Na(a, "marginLeft")) || a.getBoundingClientRect().left - da(a, { marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    })) + "px";
  }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    r.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) {
          e[a + ba[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, Ka.test(a) || (r.cssHooks[a + b].set = Va);
  }), r.fn.extend({ css: function css(a, b) {
      return S(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (r.isArray(b)) {
          for (d = Ma(a), e = b.length; g < e; g++) {
            f[b[g]] = r.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
      }, a, b, arguments.length > 1);
    } });function Ya(a, b, c, d, e) {
    return new Ya.prototype.init(a, b, c, d, e);
  }r.Tween = Ya, Ya.prototype = { constructor: Ya, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = Ya.propHooks[this.prop];return a && a.get ? a.get(this) : Ya.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = Ya.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ya.propHooks._default.set(this), this;
    } }, Ya.prototype.init.prototype = Ya.prototype, Ya.propHooks = { _default: { get: function get(a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function set(a) {
        r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
      } } }, Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, r.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, r.fx = Ya.prototype.init, r.fx.step = {};var Za,
      $a,
      _a = /^(?:toggle|show|hide)$/,
      ab = /queueHooks$/;function bb() {
    $a && (a.requestAnimationFrame(bb), r.fx.tick());
  }function cb() {
    return a.setTimeout(function () {
      Za = void 0;
    }), Za = r.now();
  }function db(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; d < 4; d += 2 - b) {
      c = ba[d], e["margin" + c] = e["padding" + c] = a;
    }return b && (e.opacity = e.width = a), e;
  }function eb(a, b, c) {
    for (var d, e = (hb.tweeners[b] || []).concat(hb.tweeners["*"]), f = 0, g = e.length; f < g; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function fb(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = "width" in b || "height" in b,
        m = this,
        n = {},
        o = a.style,
        p = a.nodeType && ca(a),
        q = V.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
      g.unqueued || h();
    }), g.unqueued++, m.always(function () {
      m.always(function () {
        g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
      });
    }));for (d in b) {
      if (e = b[d], _a.test(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
        }n[d] = q && q[d] || r.style(a, d);
      }
    }if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
      l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ha([a], !0), j = a.style.display || j, k = r.css(a, "display"), ha([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
        o.display = j;
      }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
      })), i = !1;for (d in n) {
        i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ha([a], !0), m.done(function () {
          p || ha([a]), V.remove(a, "fxshow");for (d in n) {
            r.style(a, d, n[d]);
          }
        })), i = eb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
      }
    }
  }function gb(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function hb(a, b, c) {
    var d,
        e,
        f = 0,
        g = hb.prefilters.length,
        h = r.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = Za || cb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Za || cb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; c < d; c++) {
          j.tweens[c].run(1);
        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for (gb(k, j.opts.specialEasing); f < g; f++) {
      if (d = hb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
    }return r.map(k, eb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }r.Animation = r.extend(hb, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return ea(c.elem, a, aa.exec(b), c), c;
      }] }, tweener: function tweener(a, b) {
      r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);for (var c, d = 0, e = a.length; d < e; d++) {
        c = a[d], hb.tweeners[c] = hb.tweeners[c] || [], hb.tweeners[c].unshift(b);
      }
    }, prefilters: [fb], prefilter: function prefilter(a, b) {
      b ? hb.prefilters.unshift(a) : hb.prefilters.push(a);
    } }), r.speed = function (a, b, c) {
    var e = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off || d.hidden ? e.duration = 0 : "number" != typeof e.duration && (e.duration in r.fx.speeds ? e.duration = r.fx.speeds[e.duration] : e.duration = r.fx.speeds._default), null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function () {
      r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue);
    }, e;
  }, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(ca).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = r.isEmptyObject(a),
          f = r.speed(b, c, d),
          g = function g() {
        var b = hb(this, r.extend({}, a), f);(e || V.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = r.timers,
            g = V.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && ab.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }!b && c || r.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = V.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = r.timers,
            g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; b < g; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), r.each(["toggle", "show", "hide"], function (a, b) {
    var c = r.fn[b];r.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e);
    };
  }), r.each({ slideDown: db("show"), slideUp: db("hide"), slideToggle: db("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    r.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), r.timers = [], r.fx.tick = function () {
    var a,
        b = 0,
        c = r.timers;for (Za = r.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }c.length || r.fx.stop(), Za = void 0;
  }, r.fx.timer = function (a) {
    r.timers.push(a), a() ? r.fx.start() : r.timers.pop();
  }, r.fx.interval = 13, r.fx.start = function () {
    $a || ($a = a.requestAnimationFrame ? a.requestAnimationFrame(bb) : a.setInterval(r.fx.tick, r.fx.interval));
  }, r.fx.stop = function () {
    a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a), $a = null;
  }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
    return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
  }();var ib,
      jb = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
      return S(this, r.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        r.removeAttr(this, a);
      });
    } }), r.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? ib : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function set(a, b) {
          if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function removeAttr(a, b) {
      var c,
          d = 0,
          e = b && b.match(K);if (e && 1 === a.nodeType) while (c = e[d++]) {
        a.removeAttribute(c);
      }
    } }), ib = { set: function set(a, b, c) {
      return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = jb[b] || r.find.attr;jb[b] = function (a, b, d) {
      var e,
          f,
          g = b.toLowerCase();return d || (f = jb[g], jb[g] = e, e = null != c(a, b, d) ? g : null, jb[g] = f), e;
    };
  });var kb = /^(?:input|select|textarea|button)$/i,
      lb = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
      return S(this, r.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[r.propFix[a] || a];
      });
    } }), r.extend({ prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    }, set: function set(a) {
      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    r.propFix[this.toLowerCase()] = this;
  });function mb(a) {
    var b = a.match(K) || [];return b.join(" ");
  }function nb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }r.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).addClass(a.call(this, b, nb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(K) || [];while (c = this[i++]) {
          if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
            g = 0;while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }h = mb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).removeClass(a.call(this, b, nb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(K) || [];while (c = this[i++]) {
          if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
            g = 0;while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }h = mb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
        r(this).toggleClass(a.call(this, c, nb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = r(this), f = a.match(K) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else void 0 !== a && "boolean" !== c || (b = nb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) {
        if (1 === c.nodeType && (" " + mb(nb(c)) + " ").indexOf(b) > -1) return !0;
      }return !1;
    } });var ob = /\r/g;r.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ob, "") : null == c ? "" : c);
      }
    } }), r.extend({ valHooks: { option: { get: function get(a) {
          var b = r.find.attr(a, "value");return null != b ? b : mb(r.text(a));
        } }, select: { get: function get(a) {
          var b,
              c,
              d,
              e = a.options,
              f = a.selectedIndex,
              g = "select-one" === a.type,
              h = g ? null : [],
              i = g ? f + 1 : e.length;for (d = f < 0 ? i : g ? f : 0; d < i; d++) {
            if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
              if (b = r(c).val(), g) return b;h.push(b);
            }
          }return h;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = r.makeArray(b),
              g = e.length;while (g--) {
            d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
          }return c || (a.selectedIndex = -1), f;
        } } } }), r.each(["radio", "checkbox"], function () {
    r.valHooks[this] = { set: function set(a, b) {
        if (r.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1;
      } }, o.checkOn || (r.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var pb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          k,
          m,
          n,
          o = [e || d],
          p = l.call(b, "type") ? b.type : b,
          q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
            o.push(h), i = h;
          }i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
        }g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
          b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        }return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
      }
    }, simulate: function simulate(a, b, c) {
      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
    } }), r.fn.extend({ trigger: function trigger(a, b) {
      return this.each(function () {
        r.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];if (c) return r.event.trigger(a, b, c, !0);
    } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
    r.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), r.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      r.event.simulate(b, a.target, r.event.fix(a));
    };r.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = V.access(d, b);e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = V.access(d, b) - 1;e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b));
      } };
  });var qb = a.location,
      rb = r.now(),
      sb = /\?/;r.parseXML = function (b) {
    var c;if (!b || "string" != typeof b) return null;try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
  };var tb = /\[\]$/,
      ub = /\r?\n/g,
      vb = /^(?:submit|button|image|reset|file)$/i,
      wb = /^(?:input|select|textarea|keygen)/i;function xb(a, b, c, d) {
    var e;if (r.isArray(b)) r.each(b, function (b, e) {
      c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
      xb(a + "[" + e + "]", b[e], c, d);
    }
  }r.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
    };if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      xb(c, a[c], b, e);
    }return d.join("&");
  }, r.fn.extend({ serialize: function serialize() {
      return r.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a));
      }).map(function (a, b) {
        var c = r(this).val();return null == c ? null : r.isArray(c) ? r.map(c, function (a) {
          return { name: b.name, value: a.replace(ub, "\r\n") };
        }) : { name: b.name, value: c.replace(ub, "\r\n") };
      }).get();
    } });var yb = /%20/g,
      zb = /#.*$/,
      Ab = /([?&])_=[^&]*/,
      Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Db = /^(?:GET|HEAD)$/,
      Eb = /^\/\//,
      Fb = {},
      Gb = {},
      Hb = "*/".concat("*"),
      Ib = d.createElement("a");Ib.href = qb.href;function Jb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(K) || [];if (r.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function Kb(a, b, c, d) {
    var e = {},
        f = a === Gb;function g(h) {
      var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function Lb(a, b) {
    var c,
        d,
        e = r.ajaxSettings.flatOptions || {};for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }return d && r.extend(!0, a, d), a;
  }function Mb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }if (f) return f !== i[0] && i.unshift(f), c[f];
  }function Nb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: qb.href, type: "GET", isLocal: Cb.test(qb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Hb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a);
    }, ajaxPrefilter: Jb(Fb), ajaxTransport: Jb(Gb), ajax: function ajax(b, c) {
      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = r.ajaxSetup({}, c),
          p = o.context || o,
          q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
          s = r.Deferred(),
          t = r.Callbacks("once memory"),
          u = o.statusCode || {},
          v = {},
          w = {},
          x = "canceled",
          y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (k) {
            if (!h) {
              h = {};while (b = Bb.exec(g)) {
                h[b[1].toLowerCase()] = b[2];
              }
            }b = h[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return k ? g : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return null == k && (o.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
            u[b] = [u[b], a[b]];
          }return this;
        }, abort: function abort(a) {
          var b = a || x;return e && e.abort(b), A(0, b), this;
        } };if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
        j = d.createElement("a");try {
          j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host;
        } catch (z) {
          o.crossDomain = !0;
        }
      }if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, "$1"), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
        y.setRequestHeader(m, o.headers[m]);
      }if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
        if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
          y.abort("timeout");
        }, o.timeout));try {
          k = !1, e.send(v, A);
        } catch (z) {
          if (k) throw z;A(-1, z);
        }
      } else A(-1, "No Transport");function A(b, c, d, h) {
        var j,
            m,
            n,
            v,
            w,
            x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
      }return y;
    }, getJSON: function getJSON(a, b, c) {
      return r.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return r.get(a, void 0, b, "script");
    } }), r.each(["get", "post"], function (a, b) {
    r[b] = function (a, c, d, e) {
      return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
    };
  }), r._evalUrl = function (a) {
    return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
  }, r.fn.extend({ wrapAll: function wrapAll(a) {
      var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) {
          a = a.firstElementChild;
        }return a;
      }).append(this)), this;
    }, wrapInner: function wrapInner(a) {
      return r.isFunction(a) ? this.each(function (b) {
        r(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = r(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = r.isFunction(a);return this.each(function (c) {
        r(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap(a) {
      return this.parent(a).not("body").each(function () {
        r(this).replaceWith(this.childNodes);
      }), this;
    } }), r.expr.pseudos.hidden = function (a) {
    return !r.expr.pseudos.visible(a);
  }, r.expr.pseudos.visible = function (a) {
    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
  }, r.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };var Ob = { 0: 200, 1223: 204 },
      Pb = r.ajaxSettings.xhr();o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function (b) {
    var _c, d;if (o.cors || Pb && !b.crossDomain) return { send: function send(e, f) {
        var g,
            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
          h[g] = b.xhrFields[g];
        }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
          h.setRequestHeader(g, e[g]);
        }_c = function c(a) {
          return function () {
            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
          };
        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            _c && d();
          });
        }, _c = _c("abort");try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (_c) throw i;
        }
      }, abort: function abort() {
        _c && _c();
      } };
  }), r.ajaxPrefilter(function (a) {
    a.crossDomain && (a.contents.script = !1);
  }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
        return r.globalEval(a), a;
      } } }), r.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), r.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c2;return { send: function send(e, f) {
          b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        }, abort: function abort() {
          _c2 && _c2();
        } };
    }
  });var Qb = [],
      Rb = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = Qb.pop() || r.expando + "_" + rb++;return this[a] = !0, a;
    } }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || r.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script";
  }), o.createHTMLDocument = function () {
    var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
  }(), r.parseHTML = function (a, b, c) {
    if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = pa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
  }, r.fn.load = function (a, b, c) {
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = mb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    r.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), r.expr.pseudos.animated = function (a) {
    return r.grep(r.timers, function (b) {
      return a === b.elem;
    }).length;
  };function Sb(a) {
    return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }r.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = r.css(a, "position"),
          l = r(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, r.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        r.offset.setOffset(this, a, b);
      });var b,
          c,
          d,
          e,
          f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
          a = a.offsetParent;
        }return a || qa;
      });
    } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = "pageYOffset" === b;r.fn[a] = function (d) {
      return S(this, function (a, d, e) {
        var f = Sb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), r.each(["top", "left"], function (a, b) {
    r.cssHooks[b] = Oa(o.pixelPosition, function (a, c) {
      if (c) return c = Na(a, b), La.test(c) ? r(a).position()[b] + "px" : c;
    });
  }), r.each({ Height: "height", Width: "width" }, function (a, b) {
    r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      r.fn[d] = function (e, f) {
        var g = arguments.length && (c || "boolean" != typeof e),
            h = c || (e === !0 || f === !0 ? "margin" : "border");return S(this, function (b, c, e) {
          var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
        }, b, g ? e : void 0, g);
      };
    });
  }), r.fn.extend({ bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    } }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
    return r;
  });var Tb = a.jQuery,
      Ub = a.$;return r.noConflict = function (b) {
    return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r;
  }, b || (a.jQuery = a.$ = r), r;
});
"use strict";

/*! jQuery Migrate v3.0.0 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0), function (a, b) {
  "use strict";
  function c(c) {
    var d = b.console;e[c] || (e[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()));
  }function d(a, b, d, e) {
    Object.defineProperty(a, b, { configurable: !0, enumerable: !0, get: function get() {
        return c(e), d;
      } });
  }a.migrateVersion = "3.0.0", function () {
    var c = b.console && b.console.log && function () {
      b.console.log.apply(b.console, arguments);
    },
        d = /^[12]\./;c && (a && !d.test(a.fn.jquery) || c("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), a.migrateWarnings && c("JQMIGRATE: Migrate plugin loaded multiple times"), c("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion));
  }();var e = {};a.migrateWarnings = [], void 0 === a.migrateTrace && (a.migrateTrace = !0), a.migrateReset = function () {
    e = {}, a.migrateWarnings.length = 0;
  }, "BackCompat" === document.compatMode && c("jQuery is not compatible with Quirks Mode");var f = a.fn.init,
      g = a.isNumeric,
      h = a.find,
      i = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      j = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;a.fn.init = function (a) {
    var b = Array.prototype.slice.call(arguments);return "string" == typeof a && "#" === a && (c("jQuery( '#' ) is not a valid selector"), b[0] = []), f.apply(this, b);
  }, a.fn.init.prototype = a.fn, a.find = function (a) {
    var b = Array.prototype.slice.call(arguments);if ("string" == typeof a && i.test(a)) try {
      document.querySelector(a);
    } catch (d) {
      a = a.replace(j, function (a, b, c, d) {
        return "[" + b + c + '"' + d + '"]';
      });try {
        document.querySelector(a), c("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a;
      } catch (e) {
        c("Attribute selector with '#' was not fixed: " + b[0]);
      }
    }return h.apply(this, b);
  };var k;for (k in h) {
    Object.prototype.hasOwnProperty.call(h, k) && (a.find[k] = h[k]);
  }a.fn.size = function () {
    return c("jQuery.fn.size() is deprecated; use the .length property"), this.length;
  }, a.parseJSON = function () {
    return c("jQuery.parseJSON is deprecated; use JSON.parse"), JSON.parse.apply(null, arguments);
  }, a.isNumeric = function (b) {
    function d(b) {
      var c = b && b.toString();return !a.isArray(b) && c - parseFloat(c) + 1 >= 0;
    }var e = g(b),
        f = d(b);return e !== f && c("jQuery.isNumeric() should not be called on constructed objects"), f;
  }, d(a, "unique", a.uniqueSort, "jQuery.unique is deprecated, use jQuery.uniqueSort"), d(a.expr, "filters", a.expr.pseudos, "jQuery.expr.filters is now jQuery.expr.pseudos"), d(a.expr, ":", a.expr.pseudos, 'jQuery.expr[":"] is now jQuery.expr.pseudos');var l = a.ajax;a.ajax = function () {
    var a = l.apply(this, arguments);return a.promise && (d(a, "success", a.done, "jQXHR.success is deprecated and removed"), d(a, "error", a.fail, "jQXHR.error is deprecated and removed"), d(a, "complete", a.always, "jQXHR.complete is deprecated and removed")), a;
  };var m = a.fn.removeAttr,
      n = a.fn.toggleClass,
      o = /\S+/g;a.fn.removeAttr = function (b) {
    var d = this;return a.each(b.match(o), function (b, e) {
      a.expr.match.bool.test(e) && (c("jQuery.fn.removeAttr no longer sets boolean properties: " + e), d.prop(e, !1));
    }), m.apply(this, arguments);
  }, a.fn.toggleClass = function (b) {
    return void 0 !== b && "boolean" != typeof b ? n.apply(this, arguments) : (c("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function () {
      var c = this.getAttribute && this.getAttribute("class") || "";c && a.data(this, "__className__", c), this.setAttribute && this.setAttribute("class", c || b === !1 ? "" : a.data(this, "__className__") || "");
    }));
  };var p = !1;a.swap && a.each(["height", "width", "reliableMarginRight"], function (b, c) {
    var d = a.cssHooks[c] && a.cssHooks[c].get;d && (a.cssHooks[c].get = function () {
      var a;return p = !0, a = d.apply(this, arguments), p = !1, a;
    });
  }), a.swap = function (a, b, d, e) {
    var f,
        g,
        h = {};p || c("jQuery.swap() is undocumented and deprecated");for (g in b) {
      h[g] = a.style[g], a.style[g] = b[g];
    }f = d.apply(a, e || []);for (g in b) {
      a.style[g] = h[g];
    }return f;
  };var q = a.data;a.data = function (b, d, e) {
    var f;return d && d !== a.camelCase(d) && (f = a.hasData(b) && q.call(this, b), f && d in f) ? (c("jQuery.data() always sets/gets camelCased names: " + d), arguments.length > 2 && (f[d] = e), f[d]) : q.apply(this, arguments);
  };var r = a.Tween.prototype.run;a.Tween.prototype.run = function (b) {
    a.easing[this.easing].length > 1 && (c('easing function "jQuery.easing.' + this.easing.toString() + '" should use only first argument'), a.easing[this.easing] = a.easing[this.easing].bind(a.easing, b, this.options.duration * b, 0, 1, this.options.duration)), r.apply(this, arguments);
  };var s = a.fn.load,
      t = a.event.fix;a.event.props = [], a.event.fixHooks = {}, a.event.fix = function (b) {
    var d,
        e = b.type,
        f = this.fixHooks[e],
        g = a.event.props;if (g.length) for (c("jQuery.event.props are deprecated and removed: " + g.join()); g.length;) {
      a.event.addProp(g.pop());
    }if (f && !f._migrated_ && (f._migrated_ = !0, c("jQuery.event.fixHooks are deprecated and removed: " + e), (g = f.props) && g.length)) for (; g.length;) {
      a.event.addProp(g.pop());
    }return d = t.call(this, b), f && f.filter ? f.filter(d, b) : d;
  }, a.each(["load", "unload", "error"], function (b, d) {
    a.fn[d] = function () {
      var a = Array.prototype.slice.call(arguments, 0);return "load" === d && "string" == typeof a[0] ? s.apply(this, a) : (c("jQuery.fn." + d + "() is deprecated"), a.splice(0, 0, d), arguments.length ? this.on.apply(this, a) : (this.triggerHandler.apply(this, a), this));
    };
  }), a(function () {
    a(document).triggerHandler("ready");
  }), a.event.special.ready = { setup: function setup() {
      this === document && c("'ready' event is deprecated");
    } }, a.fn.extend({ bind: function bind(a, b, d) {
      return c("jQuery.fn.bind() is deprecated"), this.on(a, null, b, d);
    }, unbind: function unbind(a, b) {
      return c("jQuery.fn.unbind() is deprecated"), this.off(a, null, b);
    }, delegate: function delegate(a, b, d, e) {
      return c("jQuery.fn.delegate() is deprecated"), this.on(b, a, d, e);
    }, undelegate: function undelegate(a, b, d) {
      return c("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", d);
    } });var u = a.fn.offset;a.fn.offset = function () {
    var b,
        d = this[0],
        e = { top: 0, left: 0 };return d && d.nodeType ? (b = (d.ownerDocument || document).documentElement, a.contains(b, d) ? u.apply(this, arguments) : (c("jQuery.fn.offset() requires an element connected to a document"), e)) : (c("jQuery.fn.offset() requires a valid DOM element"), e);
  };var v = a.param;a.param = function (b, d) {
    var e = a.ajaxSettings && a.ajaxSettings.traditional;return void 0 === d && e && (c("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), d = e), v.call(this, b, d);
  };var w = a.fn.andSelf || a.fn.addBack;a.fn.andSelf = function () {
    return c("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments);
  };var x = a.Deferred,
      y = [["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"], ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"], ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]];a.Deferred = function (b) {
    var d = x(),
        e = d.promise();return d.pipe = e.pipe = function () {
      var b = arguments;return c("deferred.pipe() is deprecated"), a.Deferred(function (c) {
        a.each(y, function (f, g) {
          var h = a.isFunction(b[f]) && b[f];d[g[1]](function () {
            var b = h && h.apply(this, arguments);b && a.isFunction(b.promise) ? b.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g[0] + "With"](this === e ? c.promise() : this, h ? [b] : arguments);
          });
        }), b = null;
      }).promise();
    }, b && b.call(d, d), d;
  };
}(jQuery, window);
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 AngularJS v1.5.8
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (C) {
  'use strict';
  function N(a) {
    return function () {
      var b = arguments[0],
          d;d = "[" + (a ? a + ":" : "") + b + "] http://errors.angularjs.org/1.5.8/" + (a ? a + "/" : "") + b;for (b = 1; b < arguments.length; b++) {
        d = d + (1 == b ? "?" : "&") + "p" + (b - 1) + "=";var c = encodeURIComponent,
            e;e = arguments[b];e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;d += c(e);
      }return Error(d);
    };
  }function ta(a) {
    if (null == a || Va(a)) return !1;if (L(a) || G(a) || F && a instanceof F) return !0;
    var b = "length" in Object(a) && a.length;return T(b) && (0 <= b && (b - 1 in a || a instanceof Array) || "function" == typeof a.item);
  }function q(a, b, d) {
    var c, e;if (a) if (z(a)) for (c in a) {
      "prototype" == c || "length" == c || "name" == c || a.hasOwnProperty && !a.hasOwnProperty(c) || b.call(d, a[c], c, a);
    } else if (L(a) || ta(a)) {
      var f = "object" !== (typeof a === "undefined" ? "undefined" : _typeof(a));c = 0;for (e = a.length; c < e; c++) {
        (f || c in a) && b.call(d, a[c], c, a);
      }
    } else if (a.forEach && a.forEach !== q) a.forEach(b, d, a);else if (sc(a)) for (c in a) {
      b.call(d, a[c], c, a);
    } else if ("function" === typeof a.hasOwnProperty) for (c in a) {
      a.hasOwnProperty(c) && b.call(d, a[c], c, a);
    } else for (c in a) {
      ua.call(a, c) && b.call(d, a[c], c, a);
    }return a;
  }function tc(a, b, d) {
    for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++) {
      b.call(d, a[c[e]], c[e]);
    }return c;
  }function uc(a) {
    return function (b, d) {
      a(d, b);
    };
  }function Yd() {
    return ++pb;
  }function Pb(a, b, d) {
    for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
      var g = b[e];if (D(g) || z(g)) for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
        var m = h[k],
            n = g[m];d && D(n) ? da(n) ? a[m] = new Date(n.valueOf()) : Wa(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) : Qb(n) ? a[m] = n.clone() : (D(a[m]) || (a[m] = L(n) ? [] : {}), Pb(a[m], [n], !0)) : a[m] = n;
      }
    }c ? a.$$hashKey = c : delete a.$$hashKey;return a;
  }function S(a) {
    return Pb(a, va.call(arguments, 1), !1);
  }function Zd(a) {
    return Pb(a, va.call(arguments, 1), !0);
  }function Z(a) {
    return parseInt(a, 10);
  }function Rb(a, b) {
    return S(Object.create(a), b);
  }function A() {}function Xa(a) {
    return a;
  }function ha(a) {
    return function () {
      return a;
    };
  }function vc(a) {
    return z(a.toString) && a.toString !== ma;
  }function y(a) {
    return "undefined" === typeof a;
  }function w(a) {
    return "undefined" !== typeof a;
  }function D(a) {
    return null !== a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a));
  }function sc(a) {
    return null !== a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && !wc(a);
  }function G(a) {
    return "string" === typeof a;
  }function T(a) {
    return "number" === typeof a;
  }function da(a) {
    return "[object Date]" === ma.call(a);
  }function z(a) {
    return "function" === typeof a;
  }function Wa(a) {
    return "[object RegExp]" === ma.call(a);
  }function Va(a) {
    return a && a.window === a;
  }function Ya(a) {
    return a && a.$evalAsync && a.$watch;
  }function Ga(a) {
    return "boolean" === typeof a;
  }function $d(a) {
    return a && T(a.length) && ae.test(ma.call(a));
  }function Qb(a) {
    return !(!a || !(a.nodeName || a.prop && a.attr && a.find));
  }function be(a) {
    var b = {};a = a.split(",");var d;for (d = 0; d < a.length; d++) {
      b[a[d]] = !0;
    }return b;
  }function wa(a) {
    return Q(a.nodeName || a[0] && a[0].nodeName);
  }function Za(a, b) {
    var d = a.indexOf(b);0 <= d && a.splice(d, 1);return d;
  }function pa(a, b) {
    function d(a, b) {
      var d = b.$$hashKey,
          e;if (L(a)) {
        e = 0;for (var f = a.length; e < f; e++) {
          b.push(c(a[e]));
        }
      } else if (sc(a)) for (e in a) {
        b[e] = c(a[e]);
      } else if (a && "function" === typeof a.hasOwnProperty) for (e in a) {
        a.hasOwnProperty(e) && (b[e] = c(a[e]));
      } else for (e in a) {
        ua.call(a, e) && (b[e] = c(a[e]));
      }d ? b.$$hashKey = d : delete b.$$hashKey;return b;
    }function c(a) {
      if (!D(a)) return a;var b = f.indexOf(a);if (-1 !== b) return g[b];if (Va(a) || Ya(a)) throw xa("cpws");var b = !1,
          c = e(a);void 0 === c && (c = L(a) ? [] : Object.create(wc(a)), b = !0);f.push(a);g.push(c);return b ? d(a, c) : c;
    }function e(a) {
      switch (ma.call(a)) {case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":
          return new a.constructor(c(a.buffer), a.byteOffset, a.length);case "[object ArrayBuffer]":
          if (!a.slice) {
            var b = new ArrayBuffer(a.byteLength);new Uint8Array(b).set(new Uint8Array(a));return b;
          }return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":
          return new a.constructor(a.valueOf());case "[object RegExp]":
          return b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex, b;case "[object Blob]":
          return new a.constructor([a], { type: a.type });}if (z(a.cloneNode)) return a.cloneNode(!0);
    }
    var f = [],
        g = [];if (b) {
      if ($d(b) || "[object ArrayBuffer]" === ma.call(b)) throw xa("cpta");if (a === b) throw xa("cpi");L(b) ? b.length = 0 : q(b, function (a, d) {
        "$$hashKey" !== d && delete b[d];
      });f.push(a);g.push(b);return d(a, b);
    }return c(a);
  }function na(a, b) {
    if (a === b) return !0;if (null === a || null === b) return !1;if (a !== a && b !== b) return !0;var d = typeof a === "undefined" ? "undefined" : _typeof(a),
        c;if (d == (typeof b === "undefined" ? "undefined" : _typeof(b)) && "object" == d) if (L(a)) {
      if (!L(b)) return !1;if ((d = a.length) == b.length) {
        for (c = 0; c < d; c++) {
          if (!na(a[c], b[c])) return !1;
        }return !0;
      }
    } else {
      if (da(a)) return da(b) ? na(a.getTime(), b.getTime()) : !1;if (Wa(a)) return Wa(b) ? a.toString() == b.toString() : !1;if (Ya(a) || Ya(b) || Va(a) || Va(b) || L(b) || da(b) || Wa(b)) return !1;d = U();for (c in a) {
        if ("$" !== c.charAt(0) && !z(a[c])) {
          if (!na(a[c], b[c])) return !1;d[c] = !0;
        }
      }for (c in b) {
        if (!(c in d) && "$" !== c.charAt(0) && w(b[c]) && !z(b[c])) return !1;
      }return !0;
    }return !1;
  }function $a(a, b, d) {
    return a.concat(va.call(b, d));
  }function ab(a, b) {
    var d = 2 < arguments.length ? va.call(arguments, 2) : [];return !z(b) || b instanceof RegExp ? b : d.length ? function () {
      return arguments.length ? b.apply(a, $a(d, arguments, 0)) : b.apply(a, d);
    } : function () {
      return arguments.length ? b.apply(a, arguments) : b.call(a);
    };
  }function ce(a, b) {
    var d = b;"string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = void 0 : Va(b) ? d = "$WINDOW" : b && C.document === b ? d = "$DOCUMENT" : Ya(b) && (d = "$SCOPE");return d;
  }function bb(a, b) {
    if (!y(a)) return T(b) || (b = b ? 2 : null), JSON.stringify(a, ce, b);
  }function xc(a) {
    return G(a) ? JSON.parse(a) : a;
  }function yc(a, b) {
    a = a.replace(de, "");var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6E4;return isNaN(d) ? b : d;
  }function Sb(a, b, d) {
    d = d ? -1 : 1;var c = a.getTimezoneOffset();b = yc(b, c);d *= b - c;a = new Date(a.getTime());a.setMinutes(a.getMinutes() + d);return a;
  }function ya(a) {
    a = F(a).clone();try {
      a.empty();
    } catch (b) {}var d = F("<div>").append(a).html();try {
      return a[0].nodeType === Ma ? Q(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
        return "<" + Q(b);
      });
    } catch (c) {
      return Q(d);
    }
  }function zc(a) {
    try {
      return decodeURIComponent(a);
    } catch (b) {}
  }function Ac(a) {
    var b = {};q((a || "").split("&"), function (a) {
      var c, e, f;a && (e = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (e = a.substring(0, c), f = a.substring(c + 1)), e = zc(e), w(e) && (f = w(f) ? zc(f) : !0, ua.call(b, e) ? L(b[e]) ? b[e].push(f) : b[e] = [b[e], f] : b[e] = f));
    });return b;
  }function Tb(a) {
    var b = [];q(a, function (a, c) {
      L(a) ? q(a, function (a) {
        b.push(ea(c, !0) + (!0 === a ? "" : "=" + ea(a, !0)));
      }) : b.push(ea(c, !0) + (!0 === a ? "" : "=" + ea(a, !0)));
    });return b.length ? b.join("&") : "";
  }function qb(a) {
    return ea(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
  }function ea(a, b) {
    return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+");
  }function ee(a, b) {
    var d,
        c,
        e = Na.length;for (c = 0; c < e; ++c) {
      if (d = Na[c] + b, G(d = a.getAttribute(d))) return d;
    }return null;
  }function fe(a, b) {
    var d,
        c,
        e = {};q(Na, function (b) {
      b += "app";!d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b));
    });q(Na, function (b) {
      b += "app";var e;!d && (e = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (d = e, c = e.getAttribute(b));
    });d && (e.strictDi = null !== ee(d, "strict-di"), b(d, c ? [c] : [], e));
  }function Bc(a, b, d) {
    D(d) || (d = {});d = S({ strictDi: !1 }, d);var c = function c() {
      a = F(a);if (a.injector()) {
        var c = a[0] === C.document ? "document" : ya(a);throw xa("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
      }b = b || [];b.unshift(["$provide", function (b) {
        b.value("$rootElement", a);
      }]);d.debugInfoEnabled && b.push(["$compileProvider", function (a) {
        a.debugInfoEnabled(!0);
      }]);b.unshift("ng");c = cb(b, d.strictDi);c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
        a.$apply(function () {
          b.data("$injector", d);c(b)(a);
        });
      }]);return c;
    },
        e = /^NG_ENABLE_DEBUG_INFO!/,
        f = /^NG_DEFER_BOOTSTRAP!/;C && e.test(C.name) && (d.debugInfoEnabled = !0, C.name = C.name.replace(e, ""));if (C && !f.test(C.name)) return c();C.name = C.name.replace(f, "");ca.resumeBootstrap = function (a) {
      q(a, function (a) {
        b.push(a);
      });return c();
    };z(ca.resumeDeferredBootstrap) && ca.resumeDeferredBootstrap();
  }function ge() {
    C.name = "NG_ENABLE_DEBUG_INFO!" + C.name;C.location.reload();
  }function he(a) {
    a = ca.element(a).injector();if (!a) throw xa("test");return a.get("$$testability");
  }
  function Cc(a, b) {
    b = b || "_";return a.replace(ie, function (a, c) {
      return (c ? b : "") + a.toLowerCase();
    });
  }function je() {
    var a;if (!Dc) {
      var b = rb();(qa = y(b) ? C.jQuery : b ? C[b] : void 0) && qa.fn.on ? (F = qa, S(qa.fn, { scope: Oa.scope, isolateScope: Oa.isolateScope, controller: Oa.controller, injector: Oa.injector, inheritedData: Oa.inheritedData }), a = qa.cleanData, qa.cleanData = function (b) {
        for (var c, e = 0, f; null != (f = b[e]); e++) {
          (c = qa._data(f, "events")) && c.$destroy && qa(f).triggerHandler("$destroy");
        }a(b);
      }) : F = O;ca.element = F;Dc = !0;
    }
  }function sb(a, b, d) {
    if (!a) throw xa("areq", b || "?", d || "required");return a;
  }function Pa(a, b, d) {
    d && L(a) && (a = a[a.length - 1]);sb(z(a), b, "not a function, got " + (a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) ? a.constructor.name || "Object" : typeof a === "undefined" ? "undefined" : _typeof(a)));return a;
  }function Qa(a, b) {
    if ("hasOwnProperty" === a) throw xa("badname", b);
  }function Ec(a, b, d) {
    if (!b) return a;b = b.split(".");for (var c, e = a, f = b.length, g = 0; g < f; g++) {
      c = b[g], a && (a = (e = a)[c]);
    }return !d && z(a) ? ab(e, a) : a;
  }function tb(a) {
    for (var b = a[0], d = a[a.length - 1], c, e = 1; b !== d && (b = b.nextSibling); e++) {
      if (c || a[e] !== b) c || (c = F(va.call(a, 0, e))), c.push(b);
    }return c || a;
  }function U() {
    return Object.create(null);
  }function ke(a) {
    function b(a, b, c) {
      return a[b] || (a[b] = c());
    }var d = N("$injector"),
        c = N("ng");a = b(a, "angular", Object);a.$$minErr = a.$$minErr || N;return b(a, "module", function () {
      var a = {};return function (f, g, h) {
        if ("hasOwnProperty" === f) throw c("badname", "module");g && a.hasOwnProperty(f) && (a[f] = null);return b(a, f, function () {
          function a(b, d, e, f) {
            f || (f = c);return function () {
              f[e || "push"]([b, d, arguments]);return R;
            };
          }function b(a, d) {
            return function (b, e) {
              e && z(e) && (e.$$moduleName = f);c.push([a, d, arguments]);return R;
            };
          }if (!g) throw d("nomod", f);var c = [],
              e = [],
              p = [],
              u = a("$injector", "invoke", "push", e),
              R = { _invokeQueue: c, _configBlocks: e, _runBlocks: p, requires: g, name: f, provider: b("$provide", "provider"), factory: b("$provide", "factory"), service: b("$provide", "service"), value: a("$provide", "value"), constant: a("$provide", "constant", "unshift"), decorator: b("$provide", "decorator"), animation: b("$animateProvider", "register"), filter: b("$filterProvider", "register"), controller: b("$controllerProvider", "register"), directive: b("$compileProvider", "directive"), component: b("$compileProvider", "component"), config: u, run: function run(a) {
              p.push(a);return this;
            } };h && u(h);return R;
        });
      };
    });
  }function ia(a, b) {
    if (L(a)) {
      b = b || [];for (var d = 0, c = a.length; d < c; d++) {
        b[d] = a[d];
      }
    } else if (D(a)) for (d in b = b || {}, a) {
      if ("$" !== d.charAt(0) || "$" !== d.charAt(1)) b[d] = a[d];
    }return b || a;
  }function le(a) {
    S(a, { bootstrap: Bc, copy: pa, extend: S, merge: Zd, equals: na, element: F, forEach: q, injector: cb, noop: A, bind: ab,
      toJson: bb, fromJson: xc, identity: Xa, isUndefined: y, isDefined: w, isString: G, isFunction: z, isObject: D, isNumber: T, isElement: Qb, isArray: L, version: me, isDate: da, lowercase: Q, uppercase: ub, callbacks: { $$counter: 0 }, getTestability: he, $$minErr: N, $$csp: Ba, reloadWithDebugInfo: ge });Ub = ke(C);Ub("ng", ["ngLocale"], ["$provide", function (a) {
      a.provider({ $$sanitizeUri: ne });a.provider("$compile", Fc).directive({ a: oe, input: Gc, textarea: Gc, form: pe, script: qe, select: re, style: se, option: te, ngBind: ue, ngBindHtml: ve, ngBindTemplate: we, ngClass: xe,
        ngClassEven: ye, ngClassOdd: ze, ngCloak: Ae, ngController: Be, ngForm: Ce, ngHide: De, ngIf: Ee, ngInclude: Fe, ngInit: Ge, ngNonBindable: He, ngPluralize: Ie, ngRepeat: Je, ngShow: Ke, ngStyle: Le, ngSwitch: Me, ngSwitchWhen: Ne, ngSwitchDefault: Oe, ngOptions: Pe, ngTransclude: Qe, ngModel: Re, ngList: Se, ngChange: Te, pattern: Hc, ngPattern: Hc, required: Ic, ngRequired: Ic, minlength: Jc, ngMinlength: Jc, maxlength: Kc, ngMaxlength: Kc, ngValue: Ue, ngModelOptions: Ve }).directive({ ngInclude: We }).directive(vb).directive(Lc);a.provider({ $anchorScroll: Xe,
        $animate: Ye, $animateCss: Ze, $$animateJs: $e, $$animateQueue: af, $$AnimateRunner: bf, $$animateAsyncRun: cf, $browser: df, $cacheFactory: ef, $controller: ff, $document: gf, $exceptionHandler: hf, $filter: Mc, $$forceReflow: jf, $interpolate: kf, $interval: lf, $http: mf, $httpParamSerializer: nf, $httpParamSerializerJQLike: of, $httpBackend: pf, $xhrFactory: qf, $jsonpCallbacks: rf, $location: sf, $log: tf, $parse: uf, $rootScope: vf, $q: wf, $$q: xf, $sce: yf, $sceDelegate: zf, $sniffer: Af, $templateCache: Bf, $templateRequest: Cf, $$testability: Df, $timeout: Ef,
        $window: Ff, $$rAF: Gf, $$jqLite: Hf, $$HashMap: If, $$cookieReader: Jf });
    }]);
  }function db(a) {
    return a.replace(Kf, function (a, d, c, e) {
      return e ? c.toUpperCase() : c;
    }).replace(Lf, "Moz$1");
  }function Nc(a) {
    a = a.nodeType;return 1 === a || !a || 9 === a;
  }function Oc(a, b) {
    var d,
        c,
        e = b.createDocumentFragment(),
        f = [];if (Vb.test(a)) {
      d = e.appendChild(b.createElement("div"));c = (Mf.exec(a) || ["", ""])[1].toLowerCase();c = ja[c] || ja._default;d.innerHTML = c[1] + a.replace(Nf, "<$1></$2>") + c[2];for (c = c[0]; c--;) {
        d = d.lastChild;
      }f = $a(f, d.childNodes);d = e.firstChild;
      d.textContent = "";
    } else f.push(b.createTextNode(a));e.textContent = "";e.innerHTML = "";q(f, function (a) {
      e.appendChild(a);
    });return e;
  }function Pc(a, b) {
    var d = a.parentNode;d && d.replaceChild(b, a);b.appendChild(a);
  }function O(a) {
    if (a instanceof O) return a;var b;G(a) && (a = W(a), b = !0);if (!(this instanceof O)) {
      if (b && "<" != a.charAt(0)) throw Wb("nosel");return new O(a);
    }if (b) {
      b = C.document;var d;a = (d = Of.exec(a)) ? [b.createElement(d[1])] : (d = Oc(a, b)) ? d.childNodes : [];
    }Qc(this, a);
  }function Xb(a) {
    return a.cloneNode(!0);
  }function wb(a, b) {
    b || eb(a);if (a.querySelectorAll) for (var d = a.querySelectorAll("*"), c = 0, e = d.length; c < e; c++) {
      eb(d[c]);
    }
  }function Rc(a, b, d, c) {
    if (w(c)) throw Wb("offargs");var e = (c = xb(a)) && c.events,
        f = c && c.handle;if (f) if (b) {
      var g = function g(b) {
        var c = e[b];w(d) && Za(c || [], d);w(d) && c && 0 < c.length || (a.removeEventListener(b, f, !1), delete e[b]);
      };q(b.split(" "), function (a) {
        g(a);yb[a] && g(yb[a]);
      });
    } else for (b in e) {
      "$destroy" !== b && a.removeEventListener(b, f, !1), delete e[b];
    }
  }function eb(a, b) {
    var d = a.ng339,
        c = d && fb[d];c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), Rc(a)), delete fb[d], a.ng339 = void 0));
  }function xb(a, b) {
    var d = a.ng339,
        d = d && fb[d];b && !d && (a.ng339 = d = ++Pf, d = fb[d] = { events: {}, data: {}, handle: void 0 });return d;
  }function Yb(a, b, d) {
    if (Nc(a)) {
      var c = w(d),
          e = !c && b && !D(b),
          f = !b;a = (a = xb(a, !e)) && a.data;if (c) a[b] = d;else {
        if (f) return a;if (e) return a && a[b];S(a, b);
      }
    }
  }function zb(a, b) {
    return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1;
  }function Ab(a, b) {
    b && a.setAttribute && q(b.split(" "), function (b) {
      a.setAttribute("class", W((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + W(b) + " ", " ")));
    });
  }function Bb(a, b) {
    if (b && a.setAttribute) {
      var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");q(b.split(" "), function (a) {
        a = W(a);-1 === d.indexOf(" " + a + " ") && (d += a + " ");
      });a.setAttribute("class", W(d));
    }
  }function Qc(a, b) {
    if (b) if (b.nodeType) a[a.length++] = b;else {
      var d = b.length;if ("number" === typeof d && b.window !== b) {
        if (d) for (var c = 0; c < d; c++) {
          a[a.length++] = b[c];
        }
      } else a[a.length++] = b;
    }
  }function Sc(a, b) {
    return Cb(a, "$" + (b || "ngController") + "Controller");
  }function Cb(a, b, d) {
    9 == a.nodeType && (a = a.documentElement);for (b = L(b) ? b : [b]; a;) {
      for (var c = 0, e = b.length; c < e; c++) {
        if (w(d = F.data(a, b[c]))) return d;
      }a = a.parentNode || 11 === a.nodeType && a.host;
    }
  }function Tc(a) {
    for (wb(a, !0); a.firstChild;) {
      a.removeChild(a.firstChild);
    }
  }function Db(a, b) {
    b || wb(a);var d = a.parentNode;d && d.removeChild(a);
  }function Qf(a, b) {
    b = b || C;if ("complete" === b.document.readyState) b.setTimeout(a);else F(b).on("load", a);
  }function Uc(a, b) {
    var d = Eb[b.toLowerCase()];return d && Vc[wa(a)] && d;
  }function Rf(a, b) {
    var d = function d(c, _d) {
      c.isDefaultPrevented = function () {
        return c.defaultPrevented;
      };var f = b[_d || c.type],
          g = f ? f.length : 0;if (g) {
        if (y(c.immediatePropagationStopped)) {
          var h = c.stopImmediatePropagation;c.stopImmediatePropagation = function () {
            c.immediatePropagationStopped = !0;c.stopPropagation && c.stopPropagation();h && h.call(c);
          };
        }c.isImmediatePropagationStopped = function () {
          return !0 === c.immediatePropagationStopped;
        };var k = f.specialHandlerWrapper || Sf;1 < g && (f = ia(f));for (var l = 0; l < g; l++) {
          c.isImmediatePropagationStopped() || k(a, c, f[l]);
        }
      }
    };d.elem = a;return d;
  }function Sf(a, b, d) {
    d.call(a, b);
  }function Tf(a, b, d) {
    var c = b.relatedTarget;c && (c === a || Uf.call(a, c)) || d.call(a, b);
  }function Hf() {
    this.$get = function () {
      return S(O, { hasClass: function hasClass(a, b) {
          a.attr && (a = a[0]);return zb(a, b);
        }, addClass: function addClass(a, b) {
          a.attr && (a = a[0]);return Bb(a, b);
        }, removeClass: function removeClass(a, b) {
          a.attr && (a = a[0]);return Ab(a, b);
        } });
    };
  }function Ca(a, b) {
    var d = a && a.$$hashKey;if (d) return "function" === typeof d && (d = a.$$hashKey()), d;d = typeof a === "undefined" ? "undefined" : _typeof(a);return d = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || Yd)() : d + ":" + a;
  }function Ra(a, b) {
    if (b) {
      var d = 0;this.nextUid = function () {
        return ++d;
      };
    }q(a, this.put, this);
  }function Wc(a) {
    a = (Function.prototype.toString.call(a) + " ").replace(Vf, "");return a.match(Wf) || a.match(Xf);
  }function Yf(a) {
    return (a = Wc(a)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
  }function cb(a, b) {
    function d(a) {
      return function (b, c) {
        if (D(b)) q(b, uc(a));else return a(b, c);
      };
    }function c(a, b) {
      Qa(a, "service");if (z(b) || L(b)) b = p.instantiate(b);if (!b.$get) throw Ha("pget", a);return n[a + "Provider"] = b;
    }function e(a, b) {
      return function () {
        var c = B.invoke(b, this);if (y(c)) throw Ha("undef", a);return c;
      };
    }function f(a, b, d) {
      return c(a, { $get: !1 !== d ? e(a, b) : b });
    }function g(a) {
      sb(y(a) || L(a), "modulesToLoad", "not an array");var b = [],
          c;q(a, function (a) {
        function d(a) {
          var b, c;b = 0;for (c = a.length; b < c; b++) {
            var e = a[b],
                f = p.get(e[0]);f[e[1]].apply(f, e[2]);
          }
        }if (!m.get(a)) {
          m.put(a, !0);try {
            G(a) ? (c = Ub(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : z(a) ? b.push(p.invoke(a)) : L(a) ? b.push(p.invoke(a)) : Pa(a, "module");
          } catch (e) {
            throw L(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ha("modulerr", a, e.stack || e.message || e);
          }
        }
      });return b;
    }function h(a, c) {
      function d(b, e) {
        if (a.hasOwnProperty(b)) {
          if (a[b] === k) throw Ha("cdep", b + " <- " + l.join(" <- "));return a[b];
        }try {
          return l.unshift(b), a[b] = k, a[b] = c(b, e);
        } catch (f) {
          throw a[b] === k && delete a[b], f;
        } finally {
          l.shift();
        }
      }function e(a, c, f) {
        var g = [];a = cb.$$annotate(a, b, f);for (var h = 0, k = a.length; h < k; h++) {
          var l = a[h];if ("string" !== typeof l) throw Ha("itkn", l);g.push(c && c.hasOwnProperty(l) ? c[l] : d(l, f));
        }return g;
      }return { invoke: function invoke(a, b, c, d) {
          "string" === typeof c && (d = c, c = null);c = e(a, c, d);L(a) && (a = a[a.length - 1]);d = 11 >= Ea ? !1 : "function" === typeof a && /^(?:class\b|constructor\()/.test(Function.prototype.toString.call(a) + " ");return d ? (c.unshift(null), new (Function.prototype.bind.apply(a, c))()) : a.apply(b, c);
        }, instantiate: function instantiate(a, b, c) {
          var d = L(a) ? a[a.length - 1] : a;a = e(a, b, c);a.unshift(null);return new (Function.prototype.bind.apply(d, a))();
        }, get: d, annotate: cb.$$annotate, has: function has(b) {
          return n.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b);
        } };
    }b = !0 === b;var k = {},
        l = [],
        m = new Ra([], !0),
        n = { $provide: { provider: d(c), factory: d(f), service: d(function (a, b) {
          return f(a, ["$injector", function (a) {
            return a.instantiate(b);
          }]);
        }), value: d(function (a, b) {
          return f(a, ha(b), !1);
        }), constant: d(function (a, b) {
          Qa(a, "constant");n[a] = b;u[a] = b;
        }), decorator: function decorator(a, b) {
          var c = p.get(a + "Provider"),
              d = c.$get;c.$get = function () {
            var a = B.invoke(d, c);return B.invoke(b, null, { $delegate: a });
          };
        } } },
        p = n.$injector = h(n, function (a, b) {
      ca.isString(b) && l.push(b);throw Ha("unpr", l.join(" <- "));
    }),
        u = {},
        R = h(u, function (a, b) {
      var c = p.get(a + "Provider", b);return B.invoke(c.$get, c, void 0, a);
    }),
        B = R;n.$injectorProvider = { $get: ha(R) };var r = g(a),
        B = R.get("$injector");B.strictDi = b;q(r, function (a) {
      a && B.invoke(a);
    });return B;
  }function Xe() {
    var a = !0;this.disableAutoScrolling = function () {
      a = !1;
    };this.$get = ["$window", "$location", "$rootScope", function (b, d, c) {
      function e(a) {
        var b = null;Array.prototype.some.call(a, function (a) {
          if ("a" === wa(a)) return b = a, !0;
        });return b;
      }function f(a) {
        if (a) {
          a.scrollIntoView();var c;c = g.yOffset;z(c) ? c = c() : Qb(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : T(c) || (c = 0);c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c));
        } else b.scrollTo(0, 0);
      }function g(a) {
        a = G(a) ? a : d.hash();var b;a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null);
      }var h = b.document;a && c.$watch(function () {
        return d.hash();
      }, function (a, b) {
        a === b && "" === a || Qf(function () {
          c.$evalAsync(g);
        });
      });return g;
    }];
  }function gb(a, b) {
    if (!a && !b) return "";if (!a) return b;if (!b) return a;L(a) && (a = a.join(" "));L(b) && (b = b.join(" "));return a + " " + b;
  }function Zf(a) {
    G(a) && (a = a.split(" "));var b = U();q(a, function (a) {
      a.length && (b[a] = !0);
    });return b;
  }function Ia(a) {
    return D(a) ? a : {};
  }function $f(a, b, d, c) {
    function e(a) {
      try {
        a.apply(null, va.call(arguments, 1));
      } finally {
        if (R--, 0 === R) for (; B.length;) {
          try {
            B.pop()();
          } catch (b) {
            d.error(b);
          }
        }
      }
    }
    function f() {
      t = null;g();h();
    }function g() {
      r = K();r = y(r) ? null : r;na(r, E) && (r = E);E = r;
    }function h() {
      if (v !== k.url() || J !== r) v = k.url(), J = r, q(M, function (a) {
        a(k.url(), r);
      });
    }var k = this,
        l = a.location,
        m = a.history,
        n = a.setTimeout,
        p = a.clearTimeout,
        u = {};k.isMock = !1;var R = 0,
        B = [];k.$$completeOutstandingRequest = e;k.$$incOutstandingRequestCount = function () {
      R++;
    };k.notifyWhenNoOutstandingRequests = function (a) {
      0 === R ? a() : B.push(a);
    };var r,
        J,
        v = l.href,
        fa = b.find("base"),
        t = null,
        K = c.history ? function () {
      try {
        return m.state;
      } catch (a) {}
    } : A;g();J = r;k.url = function (b, d, e) {
      y(e) && (e = null);l !== a.location && (l = a.location);m !== a.history && (m = a.history);if (b) {
        var f = J === e;if (v === b && (!c.history || f)) return k;var h = v && Ja(v) === Ja(b);v = b;J = e;!c.history || h && f ? (h || (t = b), d ? l.replace(b) : h ? (d = l, e = b.indexOf("#"), e = -1 === e ? "" : b.substr(e), d.hash = e) : l.href = b, l.href !== b && (t = b)) : (m[d ? "replaceState" : "pushState"](e, "", b), g(), J = r);t && (t = b);return k;
      }return t || l.href.replace(/%27/g, "'");
    };k.state = function () {
      return r;
    };var M = [],
        H = !1,
        E = null;k.onUrlChange = function (b) {
      if (!H) {
        if (c.history) F(a).on("popstate", f);F(a).on("hashchange", f);H = !0;
      }M.push(b);return b;
    };k.$$applicationDestroyed = function () {
      F(a).off("hashchange popstate", f);
    };k.$$checkUrlChange = h;k.baseHref = function () {
      var a = fa.attr("href");return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
    };k.defer = function (a, b) {
      var c;R++;c = n(function () {
        delete u[c];e(a);
      }, b || 0);u[c] = !0;return c;
    };k.defer.cancel = function (a) {
      return u[a] ? (delete u[a], p(a), e(A), !0) : !1;
    };
  }function df() {
    this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, d, c) {
      return new $f(a, c, b, d);
    }];
  }function ef() {
    this.$get = function () {
      function a(a, c) {
        function e(a) {
          a != n && (p ? p == a && (p = a.n) : p = a, f(a.n, a.p), f(a, n), n = a, n.n = null);
        }function f(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a));
        }if (a in b) throw N("$cacheFactory")("iid", a);var g = 0,
            h = S({}, c, { id: a }),
            k = U(),
            l = c && c.capacity || Number.MAX_VALUE,
            m = U(),
            n = null,
            p = null;return b[a] = { put: function put(a, b) {
            if (!y(b)) {
              if (l < Number.MAX_VALUE) {
                var c = m[a] || (m[a] = { key: a });e(c);
              }a in k || g++;k[a] = b;g > l && this.remove(p.key);return b;
            }
          }, get: function get(a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];
              if (!b) return;e(b);
            }return k[a];
          }, remove: function remove(a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];if (!b) return;b == n && (n = b.p);b == p && (p = b.n);f(b.n, b.p);delete m[a];
            }a in k && (delete k[a], g--);
          }, removeAll: function removeAll() {
            k = U();g = 0;m = U();n = p = null;
          }, destroy: function destroy() {
            m = h = k = null;delete b[a];
          }, info: function info() {
            return S({}, h, { size: g });
          } };
      }var b = {};a.info = function () {
        var a = {};q(b, function (b, e) {
          a[e] = b.info();
        });return a;
      };a.get = function (a) {
        return b[a];
      };return a;
    };
  }function Bf() {
    this.$get = ["$cacheFactory", function (a) {
      return a("templates");
    }];
  }
  function Fc(a, b) {
    function d(a, b, c) {
      var d = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,
          e = U();q(a, function (a, f) {
        if (a in n) e[f] = n[a];else {
          var g = a.match(d);if (!g) throw ga("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");e[f] = { mode: g[1][0], collection: "*" === g[2], optional: "?" === g[3], attrName: g[4] || f };g[4] && (n[a] = e[f]);
        }
      });return e;
    }function c(a) {
      var b = a.charAt(0);if (!b || b !== Q(b)) throw ga("baddir", a);if (a !== a.trim()) throw ga("baddir", a);
    }function e(a) {
      var b = a.require || a.controller && a.name;
      !L(b) && D(b) && q(b, function (a, c) {
        var d = a.match(l);a.substring(d[0].length) || (b[c] = d[0] + c);
      });return b;
    }var f = {},
        g = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
        h = /(([\w\-]+)(?:\:([^;]+))?;?)/,
        k = be("ngSrc,ngSrcset,src,srcset"),
        l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
        m = /^(on[a-z]+|formaction)$/,
        n = U();this.directive = function B(b, d) {
      Qa(b, "directive");G(b) ? (c(b), sb(d, "directiveFactory"), f.hasOwnProperty(b) || (f[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function (a, c) {
        var d = [];q(f[b], function (f, g) {
          try {
            var h = a.invoke(f);z(h) ? h = { compile: ha(h) } : !h.compile && h.link && (h.compile = ha(h.link));h.priority = h.priority || 0;h.index = g;h.name = h.name || b;h.require = e(h);h.restrict = h.restrict || "EA";h.$$moduleName = f.$$moduleName;d.push(h);
          } catch (k) {
            c(k);
          }
        });return d;
      }])), f[b].push(d)) : q(b, uc(B));return this;
    };this.component = function (a, b) {
      function c(a) {
        function e(b) {
          return z(b) || L(b) ? function (c, d) {
            return a.invoke(b, this, { $element: c, $attrs: d });
          } : b;
        }var f = b.template || b.templateUrl ? b.template : "",
            g = { controller: d, controllerAs: Xc(b.controller) || b.controllerAs || "$ctrl", template: e(f), templateUrl: e(b.templateUrl), transclude: b.transclude, scope: {}, bindToController: b.bindings || {}, restrict: "E", require: b.require };q(b, function (a, b) {
          "$" === b.charAt(0) && (g[b] = a);
        });return g;
      }var d = b.controller || function () {};q(b, function (a, b) {
        "$" === b.charAt(0) && (c[b] = a, z(d) && (d[b] = a));
      });c.$inject = ["$injector"];return this.directive(a, c);
    };this.aHrefSanitizationWhitelist = function (a) {
      return w(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist();
    };this.imgSrcSanitizationWhitelist = function (a) {
      return w(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist();
    };var p = !0;this.debugInfoEnabled = function (a) {
      return w(a) ? (p = a, this) : p;
    };var u = 10;this.onChangesTtl = function (a) {
      return arguments.length ? (u = a, this) : u;
    };this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, e, n, t, K, M, H, E) {
      function I() {
        try {
          if (! --qa) throw Y = void 0, ga("infchng", u);K.$apply(function () {
            for (var a = [], b = 0, c = Y.length; b < c; ++b) {
              try {
                Y[b]();
              } catch (d) {
                a.push(d);
              }
            }Y = void 0;if (a.length) throw a;
          });
        } finally {
          qa++;
        }
      }function Da(a, b) {
        if (b) {
          var c = Object.keys(b),
              d,
              e,
              f;d = 0;for (e = c.length; d < e; d++) {
            f = c[d], this[f] = b[f];
          }
        } else this.$attr = {};this.$$element = a;
      }function P(a, b, c) {
        pa.innerHTML = "<span " + b + ">";b = pa.firstChild.attributes;var d = b[0];b.removeNamedItem(d.name);d.value = c;a.attributes.setNamedItem(d);
      }function x(a, b) {
        try {
          a.addClass(b);
        } catch (c) {}
      }function aa(a, b, c, d, e) {
        a instanceof F || (a = F(a));for (var f = /\S+/, g = 0, h = a.length; g < h; g++) {
          var k = a[g];k.nodeType === Ma && k.nodeValue.match(f) && Pc(k, a[g] = C.document.createElement("span"));
        }var l = s(a, b, a, c, d, e);aa.$$addScopeClass(a);var m = null;return function (b, c, d) {
          sb(b, "scope");e && e.needsNewScope && (b = b.$parent.$new());d = d || {};var f = d.parentBoundTranscludeFn,
              g = d.transcludeControllers;d = d.futureParentElement;f && f.$$boundTransclude && (f = f.$$boundTransclude);m || (m = (d = d && d[0]) ? "foreignobject" !== wa(d) && ma.call(d).match(/SVG/) ? "svg" : "html" : "html");d = "html" !== m ? F(da(m, F("<div>").append(a).html())) : c ? Oa.clone.call(a) : a;if (g) for (var h in g) {
            d.data("$" + h + "Controller", g[h].instance);
          }aa.$$addScopeInfo(d, b);c && c(d, b);l && l(b, d, d, f);return d;
        };
      }function s(a, b, c, d, e, f) {
        function g(a, c, d, e) {
          var f, k, l, m, p, r, v;if (n) for (v = Array(c.length), m = 0; m < h.length; m += 3) {
            f = h[m], v[f] = c[f];
          } else v = c;m = 0;for (p = h.length; m < p;) {
            k = v[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l = a.$new(), aa.$$addScopeInfo(F(k), l)) : l = a, r = c.transcludeOnThisElement ? za(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? za(a, b) : null, c(f, l, k, d, r)) : f && f(a, k.childNodes, void 0, e);
          }
        }for (var h = [], k, l, m, p, n, r = 0; r < a.length; r++) {
          k = new Da();l = $b(a[r], [], k, 0 === r ? d : void 0, e);(f = l.length ? oa(l, a[r], k, b, c, null, [], [], f) : null) && f.scope && aa.$$addScopeClass(k.$$element);k = f && f.terminal || !(m = a[r].childNodes) || !m.length ? null : s(m, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);if (f || k) h.push(r, f, k), p = !0, n = n || f;f = null;
        }return p ? g : null;
      }function za(a, b, c) {
        function d(e, f, g, h, k) {
          e || (e = a.$new(!1, k), e.$$transcluded = !0);return b(e, f, { parentBoundTranscludeFn: c,
            transcludeControllers: g, futureParentElement: h });
        }var e = d.$$slots = U(),
            f;for (f in b.$$slots) {
          e[f] = b.$$slots[f] ? za(a, b.$$slots[f], c) : null;
        }return d;
      }function $b(a, b, c, d, e) {
        var f = c.$attr;switch (a.nodeType) {case 1:
            O(b, Aa(wa(a)), "E", d, e);for (var g, k, l, m, p = a.attributes, n = 0, r = p && p.length; n < r; n++) {
              var v = !1,
                  u = !1;g = p[n];k = g.name;l = W(g.value);g = Aa(k);if (m = Ba.test(g)) k = k.replace(Yc, "").substr(8).replace(/_(.)/g, function (a, b) {
                return b.toUpperCase();
              });(g = g.match(Ca)) && V(g[1]) && (v = k, u = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6));g = Aa(k.toLowerCase());f[g] = k;if (m || !c.hasOwnProperty(g)) c[g] = l, Uc(a, g) && (c[g] = !0);ia(a, b, l, g, m);O(b, g, "A", d, e, v, u);
            }f = a.className;D(f) && (f = f.animVal);if (G(f) && "" !== f) for (; a = h.exec(f);) {
              g = Aa(a[2]), O(b, g, "C", d, e) && (c[g] = W(a[3])), f = f.substr(a.index + a[0].length);
            }break;case Ma:
            if (11 === Ea) for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === Ma;) {
              a.nodeValue += a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
            }ca(b, a.nodeValue);break;case 8:
            hb(a, b, c, d, e);}b.sort(Z);
        return b;
      }function hb(a, b, c, d, e) {
        try {
          var f = g.exec(a.nodeValue);if (f) {
            var h = Aa(f[1]);O(b, h, "M", d, e) && (c[h] = W(f[2]));
          }
        } catch (k) {}
      }function N(a, b, c) {
        var d = [],
            e = 0;if (b && a.hasAttribute && a.hasAttribute(b)) {
          do {
            if (!a) throw ga("uterdir", b, c);1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);d.push(a);a = a.nextSibling;
          } while (0 < e);
        } else d.push(a);return F(d);
      }function Zc(a, b, c) {
        return function (d, e, f, g, h) {
          e = N(e[0], b, c);return a(d, e, f, g, h);
        };
      }function ac(a, b, c, d, e, f) {
        var g;return a ? aa(b, c, d, e, f) : function () {
          g || (g = aa(b, c, d, e, f), b = c = f = null);return g.apply(this, arguments);
        };
      }function oa(a, b, d, e, f, g, h, k, l) {
        function m(a, b, c, d) {
          if (a) {
            c && (a = Zc(a, c, d));a.require = x.require;a.directiveName = I;if (u === x || x.$$isolateScope) a = ja(a, { isolateScope: !0 });h.push(a);
          }if (b) {
            c && (b = Zc(b, c, d));b.require = x.require;b.directiveName = I;if (u === x || x.$$isolateScope) b = ja(b, { isolateScope: !0 });k.push(b);
          }
        }function p(a, e, f, g, l) {
          function m(a, b, c, d) {
            var e;Ya(a) || (d = c, c = b, b = a, a = void 0);fa && (e = t);c || (c = fa ? I.parent() : I);if (d) {
              var f = l.$$slots[d];if (f) return f(a, b, e, c, s);if (y(f)) throw ga("noslot", d, ya(I));
            } else return l(a, b, e, c, s);
          }var n, E, x, M, B, t, P, I;b === f ? (g = d, I = d.$$element) : (I = F(f), g = new Da(I, d));B = e;u ? M = e.$new(!0) : r && (B = e.$parent);l && (P = m, P.$$boundTransclude = l, P.isSlotFilled = function (a) {
            return !!l.$$slots[a];
          });v && (t = ag(I, g, P, v, M, e, u));u && (aa.$$addScopeInfo(I, M, !0, !(H && (H === u || H === u.$$originalDirective))), aa.$$addScopeClass(I, !0), M.$$isolateBindings = u.$$isolateBindings, E = ka(e, g, M, M.$$isolateBindings, u), E.removeWatches && M.$on("$destroy", E.removeWatches));
          for (n in t) {
            E = v[n];x = t[n];var Zb = E.$$bindings.bindToController;x.bindingInfo = x.identifier && Zb ? ka(B, g, x.instance, Zb, E) : {};var K = x();K !== x.instance && (x.instance = K, I.data("$" + E.name + "Controller", K), x.bindingInfo.removeWatches && x.bindingInfo.removeWatches(), x.bindingInfo = ka(B, g, x.instance, Zb, E));
          }q(v, function (a, b) {
            var c = a.require;a.bindToController && !L(c) && D(c) && S(t[b].instance, ib(b, c, I, t));
          });q(t, function (a) {
            var b = a.instance;if (z(b.$onChanges)) try {
              b.$onChanges(a.bindingInfo.initialChanges);
            } catch (d) {
              c(d);
            }if (z(b.$onInit)) try {
              b.$onInit();
            } catch (e) {
              c(e);
            }z(b.$doCheck) && (B.$watch(function () {
              b.$doCheck();
            }), b.$doCheck());z(b.$onDestroy) && B.$on("$destroy", function () {
              b.$onDestroy();
            });
          });n = 0;for (E = h.length; n < E; n++) {
            x = h[n], la(x, x.isolateScope ? M : e, I, g, x.require && ib(x.directiveName, x.require, I, t), P);
          }var s = e;u && (u.template || null === u.templateUrl) && (s = M);a && a(s, f.childNodes, void 0, l);for (n = k.length - 1; 0 <= n; n--) {
            x = k[n], la(x, x.isolateScope ? M : e, I, g, x.require && ib(x.directiveName, x.require, I, t), P);
          }q(t, function (a) {
            a = a.instance;z(a.$postLink) && a.$postLink();
          });
        }l = l || {};for (var n = -Number.MAX_VALUE, r = l.newScopeDirective, v = l.controllerDirectives, u = l.newIsolateScopeDirective, H = l.templateDirective, E = l.nonTlbTranscludeDirective, M = !1, B = !1, fa = l.hasElementTranscludeDirective, t = d.$$element = F(b), x, I, P, K = e, s, Fa = !1, za = !1, w, A = 0, C = a.length; A < C; A++) {
          x = a[A];var G = x.$$start,
              hb = x.$$end;G && (t = N(b, G, hb));P = void 0;if (n > x.priority) break;if (w = x.scope) x.templateUrl || (D(w) ? (X("new/isolated scope", u || r, x, t), u = x) : X("new/isolated scope", u, x, t)), r = r || x;I = x.name;if (!Fa && (x.replace && (x.templateUrl || x.template) || x.transclude && !x.$$tlb)) {
            for (w = A + 1; Fa = a[w++];) {
              if (Fa.transclude && !Fa.$$tlb || Fa.replace && (Fa.templateUrl || Fa.template)) {
                za = !0;break;
              }
            }Fa = !0;
          }!x.templateUrl && x.controller && (w = x.controller, v = v || U(), X("'" + I + "' controller", v[I], x, t), v[I] = x);if (w = x.transclude) if (M = !0, x.$$tlb || (X("transclusion", E, x, t), E = x), "element" == w) fa = !0, n = x.priority, P = t, t = d.$$element = F(aa.$$createComment(I, d[I])), b = t[0], ea(f, va.call(P, 0), b), P[0].$$parentNode = P[0].parentNode, K = ac(za, P, e, n, g && g.name, { nonTlbTranscludeDirective: E });else {
            var oa = U();P = F(Xb(b)).contents();
            if (D(w)) {
              P = [];var Q = U(),
                  O = U();q(w, function (a, b) {
                var c = "?" === a.charAt(0);a = c ? a.substring(1) : a;Q[a] = b;oa[b] = null;O[b] = c;
              });q(t.contents(), function (a) {
                var b = Q[Aa(wa(a))];b ? (O[b] = !0, oa[b] = oa[b] || [], oa[b].push(a)) : P.push(a);
              });q(O, function (a, b) {
                if (!a) throw ga("reqslot", b);
              });for (var V in oa) {
                oa[V] && (oa[V] = ac(za, oa[V], e));
              }
            }t.empty();K = ac(za, P, e, void 0, void 0, { needsNewScope: x.$$isolateScope || x.$$newScope });K.$$slots = oa;
          }if (x.template) if (B = !0, X("template", H, x, t), H = x, w = z(x.template) ? x.template(t, d) : x.template, w = xa(w), x.replace) {
            g = x;P = Vb.test(w) ? $c(da(x.templateNamespace, W(w))) : [];b = P[0];if (1 != P.length || 1 !== b.nodeType) throw ga("tplrt", I, "");ea(f, t, b);C = { $attr: {} };w = $b(b, [], C);var Z = a.splice(A + 1, a.length - (A + 1));(u || r) && T(w, u, r);a = a.concat(w).concat(Z);$(d, C);C = a.length;
          } else t.html(w);if (x.templateUrl) B = !0, X("template", H, x, t), H = x, x.replace && (g = x), p = ba(a.splice(A, a.length - A), t, d, f, M && K, h, k, { controllerDirectives: v, newScopeDirective: r !== x && r, newIsolateScopeDirective: u, templateDirective: H, nonTlbTranscludeDirective: E }), C = a.length;else if (x.compile) try {
            s = x.compile(t, d, K);var Y = x.$$originalDirective || x;z(s) ? m(null, ab(Y, s), G, hb) : s && m(ab(Y, s.pre), ab(Y, s.post), G, hb);
          } catch (ca) {
            c(ca, ya(t));
          }x.terminal && (p.terminal = !0, n = Math.max(n, x.priority));
        }p.scope = r && !0 === r.scope;p.transcludeOnThisElement = M;p.templateOnThisElement = B;p.transclude = K;l.hasElementTranscludeDirective = fa;return p;
      }function ib(a, b, c, d) {
        var e;if (G(b)) {
          var f = b.match(l);b = b.substring(f[0].length);var g = f[1] || f[3],
              f = "?" === f[2];"^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;if (!e) {
            var h = "$" + b + "Controller";e = g ? c.inheritedData(h) : c.data(h);
          }if (!e && !f) throw ga("ctreq", b, a);
        } else if (L(b)) for (e = [], g = 0, f = b.length; g < f; g++) {
          e[g] = ib(a, b[g], c, d);
        } else D(b) && (e = {}, q(b, function (b, f) {
          e[f] = ib(a, b, c, d);
        }));return e || null;
      }function ag(a, b, c, d, e, f, g) {
        var h = U(),
            k;for (k in d) {
          var l = d[k],
              m = { $scope: l === g || l.$$isolateScope ? e : f, $element: a, $attrs: b, $transclude: c },
              p = l.controller;"@" == p && (p = b[l.name]);m = t(p, m, !0, l.controllerAs);h[l.name] = m;a.data("$" + l.name + "Controller", m.instance);
        }return h;
      }
      function T(a, b, c) {
        for (var d = 0, e = a.length; d < e; d++) {
          a[d] = Rb(a[d], { $$isolateScope: b, $$newScope: c });
        }
      }function O(b, e, g, h, k, l, m) {
        if (e === k) return null;k = null;if (f.hasOwnProperty(e)) {
          var p;e = a.get(e + "Directive");for (var n = 0, r = e.length; n < r; n++) {
            try {
              if (p = e[n], (y(h) || h > p.priority) && -1 != p.restrict.indexOf(g)) {
                l && (p = Rb(p, { $$start: l, $$end: m }));if (!p.$$bindings) {
                  var u = p,
                      v = p,
                      x = p.name,
                      H = { isolateScope: null, bindToController: null };D(v.scope) && (!0 === v.bindToController ? (H.bindToController = d(v.scope, x, !0), H.isolateScope = {}) : H.isolateScope = d(v.scope, x, !1));D(v.bindToController) && (H.bindToController = d(v.bindToController, x, !0));if (D(H.bindToController)) {
                    var E = v.controller,
                        M = v.controllerAs;if (!E) throw ga("noctrl", x);if (!Xc(E, M)) throw ga("noident", x);
                  }var t = u.$$bindings = H;D(t.isolateScope) && (p.$$isolateBindings = t.isolateScope);
                }b.push(p);k = p;
              }
            } catch (I) {
              c(I);
            }
          }
        }return k;
      }function V(b) {
        if (f.hasOwnProperty(b)) for (var c = a.get(b + "Directive"), d = 0, e = c.length; d < e; d++) {
          if (b = c[d], b.multiElement) return !0;
        }return !1;
      }function $(a, b) {
        var c = b.$attr,
            d = a.$attr;q(a, function (d, e) {
          "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]));
        });q(b, function (b, e) {
          a.hasOwnProperty(e) || "$" === e.charAt(0) || (a[e] = b, "class" !== e && "style" !== e && (d[e] = c[e]));
        });
      }function ba(a, b, c, d, f, g, h, k) {
        var l = [],
            m,
            p,
            n = b[0],
            r = a.shift(),
            u = Rb(r, { templateUrl: null, transclude: null, replace: null, $$originalDirective: r }),
            H = z(r.templateUrl) ? r.templateUrl(b, c) : r.templateUrl,
            E = r.templateNamespace;b.empty();e(H).then(function (e) {
          var v, M;e = xa(e);if (r.replace) {
            e = Vb.test(e) ? $c(da(E, W(e))) : [];v = e[0];if (1 != e.length || 1 !== v.nodeType) throw ga("tplrt", r.name, H);e = { $attr: {} };ea(d, b, v);var B = $b(v, [], e);D(r.scope) && T(B, !0);a = B.concat(a);$(c, e);
          } else v = n, b.html(e);a.unshift(u);m = oa(a, v, c, f, b, r, g, h, k);q(d, function (a, c) {
            a == v && (d[c] = b[0]);
          });for (p = s(b[0].childNodes, f); l.length;) {
            e = l.shift();M = l.shift();var t = l.shift(),
                I = l.shift(),
                B = b[0];if (!e.$$destroyed) {
              if (M !== n) {
                var P = M.className;k.hasElementTranscludeDirective && r.replace || (B = Xb(v));ea(t, F(M), B);x(F(B), P);
              }M = m.transcludeOnThisElement ? za(e, m.transclude, I) : I;m(p, e, B, d, M);
            }
          }l = null;
        });return function (a, b, c, d, e) {
          a = e;b.$$destroyed || (l ? l.push(b, c, d, a) : (m.transcludeOnThisElement && (a = za(b, m.transclude, e)), m(p, b, c, d, a)));
        };
      }function Z(a, b) {
        var c = b.priority - a.priority;return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
      }function X(a, b, c, d) {
        function e(a) {
          return a ? " (module: " + a + ")" : "";
        }if (b) throw ga("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, ya(d));
      }function ca(a, c) {
        var d = b(c, !0);d && a.push({ priority: 0, compile: function compile(a) {
            a = a.parent();var b = !!a.length;b && aa.$$addBindingClass(a);return function (a, c) {
              var e = c.parent();b || aa.$$addBindingClass(e);aa.$$addBindingInfo(e, d.expressions);a.$watch(d, function (a) {
                c[0].nodeValue = a;
              });
            };
          } });
      }function da(a, b) {
        a = Q(a || "html");switch (a) {case "svg":case "math":
            var c = C.document.createElement("div");c.innerHTML = "<" + a + ">" + b + "</" + a + ">";return c.childNodes[0].childNodes;default:
            return b;}
      }function ha(a, b) {
        if ("srcdoc" == b) return M.HTML;var c = wa(a);if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b)) return M.RESOURCE_URL;
      }function ia(a, c, d, e, f) {
        var g = ha(a, e);f = k[e] || f;var h = b(d, !0, g, f);if (h) {
          if ("multiple" === e && "select" === wa(a)) throw ga("selmulti", ya(a));c.push({ priority: 100, compile: function compile() {
              return { pre: function pre(a, c, k) {
                  c = k.$$observers || (k.$$observers = U());if (m.test(e)) throw ga("nodomevents");var l = k[e];l !== d && (h = l && b(l, !0, g, f), d = l);h && (k[e] = h(a), (c[e] || (c[e] = [])).$$inter = !0, (k.$$observers && k.$$observers[e].$$scope || a).$watch(h, function (a, b) {
                    "class" === e && a != b ? k.$updateClass(a, b) : k.$set(e, a);
                  }));
                } };
            } });
        }
      }function ea(a, b, c) {
        var d = b[0],
            e = b.length,
            f = d.parentNode,
            g,
            h;if (a) for (g = 0, h = a.length; g < h; g++) {
          if (a[g] == d) {
            a[g++] = c;h = g + e - 1;for (var k = a.length; g < k; g++, h++) {
              h < k ? a[g] = a[h] : delete a[g];
            }a.length -= e - 1;a.context === d && (a.context = c);break;
          }
        }f && f.replaceChild(c, d);a = C.document.createDocumentFragment();for (g = 0; g < e; g++) {
          a.appendChild(b[g]);
        }F.hasData(d) && (F.data(c, F.data(d)), F(d).off("$destroy"));F.cleanData(a.querySelectorAll("*"));for (g = 1; g < e; g++) {
          delete b[g];
        }b[0] = c;b.length = 1;
      }function ja(a, b) {
        return S(function () {
          return a.apply(null, arguments);
        }, a, b);
      }function la(a, b, d, e, f, g) {
        try {
          a(b, d, e, f, g);
        } catch (h) {
          c(h, ya(d));
        }
      }function ka(a, c, d, e, f) {
        function g(b, c, e) {
          z(d.$onChanges) && c !== e && (Y || (a.$$postDigest(I), Y = []), m || (m = {}, Y.push(h)), m[b] && (e = m[b].previousValue), m[b] = new Fb(e, c));
        }function h() {
          d.$onChanges(m);m = void 0;
        }var k = [],
            l = {},
            m;q(e, function (e, h) {
          var m = e.attrName,
              p = e.optional,
              v,
              u,
              x,
              H;switch (e.mode) {case "@":
              p || ua.call(c, m) || (d[h] = c[m] = void 0);c.$observe(m, function (a) {
                if (G(a) || Ga(a)) g(h, a, d[h]), d[h] = a;
              });c.$$observers[m].$$scope = a;v = c[m];G(v) ? d[h] = b(v)(a) : Ga(v) && (d[h] = v);l[h] = new Fb(bc, d[h]);break;case "=":
              if (!ua.call(c, m)) {
                if (p) break;c[m] = void 0;
              }if (p && !c[m]) break;u = n(c[m]);H = u.literal ? na : function (a, b) {
                return a === b || a !== a && b !== b;
              };x = u.assign || function () {
                v = d[h] = u(a);throw ga("nonassign", c[m], m, f.name);
              };v = d[h] = u(a);p = function p(b) {
                H(b, d[h]) || (H(b, v) ? x(a, b = d[h]) : d[h] = b);return v = b;
              };p.$stateful = !0;p = e.collection ? a.$watchCollection(c[m], p) : a.$watch(n(c[m], p), null, u.literal);k.push(p);break;case "<":
              if (!ua.call(c, m)) {
                if (p) break;c[m] = void 0;
              }if (p && !c[m]) break;u = n(c[m]);var E = d[h] = u(a);l[h] = new Fb(bc, d[h]);p = a.$watch(u, function (a, b) {
                if (b === a) {
                  if (b === E) return;b = E;
                }g(h, a, b);d[h] = a;
              }, u.literal);k.push(p);break;case "&":
              u = c.hasOwnProperty(m) ? n(c[m]) : A;if (u === A && p) break;d[h] = function (b) {
                return u(a, b);
              };}
        });return { initialChanges: l, removeWatches: k.length && function () {
            for (var a = 0, b = k.length; a < b; ++a) {
              k[a]();
            }
          } };
      }var ta = /^\w/,
          pa = C.document.createElement("div"),
          qa = u,
          Y;Da.prototype = { $normalize: Aa, $addClass: function $addClass(a) {
          a && 0 < a.length && H.addClass(this.$$element, a);
        }, $removeClass: function $removeClass(a) {
          a && 0 < a.length && H.removeClass(this.$$element, a);
        }, $updateClass: function $updateClass(a, b) {
          var c = ad(a, b);c && c.length && H.addClass(this.$$element, c);(c = ad(b, a)) && c.length && H.removeClass(this.$$element, c);
        }, $set: function $set(a, b, d, e) {
          var f = Uc(this.$$element[0], a),
              g = bd[a],
              h = a;f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);this[a] = b;e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Cc(a, "-"));f = wa(this.$$element);if ("a" === f && ("href" === a || "xlinkHref" === a) || "img" === f && "src" === a) this[a] = b = E(b, "src" === a);else if ("img" === f && "srcset" === a && w(b)) {
            for (var f = "", g = W(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l < k; l++) {
              var m = 2 * l,
                  f = f + E(W(g[m]), !0),
                  f = f + (" " + W(g[m + 1]));
            }g = W(g[2 * l]).split(/\s/);f += E(W(g[0]), !0);2 === g.length && (f += " " + W(g[1]));this[a] = b = f;
          }!1 !== d && (null === b || y(b) ? this.$$element.removeAttr(e) : ta.test(e) ? this.$$element.attr(e, b) : P(this.$$element[0], e, b));(a = this.$$observers) && q(a[h], function (a) {
            try {
              a(b);
            } catch (d) {
              c(d);
            }
          });
        },
        $observe: function $observe(a, b) {
          var c = this,
              d = c.$$observers || (c.$$observers = U()),
              e = d[a] || (d[a] = []);e.push(b);K.$evalAsync(function () {
            e.$$inter || !c.hasOwnProperty(a) || y(c[a]) || b(c[a]);
          });return function () {
            Za(e, b);
          };
        } };var ra = b.startSymbol(),
          sa = b.endSymbol(),
          xa = "{{" == ra && "}}" == sa ? Xa : function (a) {
        return a.replace(/\{\{/g, ra).replace(/}}/g, sa);
      },
          Ba = /^ngAttr[A-Z]/,
          Ca = /^(.+)Start$/;aa.$$addBindingInfo = p ? function (a, b) {
        var c = a.data("$binding") || [];L(b) ? c = c.concat(b) : c.push(b);a.data("$binding", c);
      } : A;aa.$$addBindingClass = p ? function (a) {
        x(a, "ng-binding");
      } : A;aa.$$addScopeInfo = p ? function (a, b, c, d) {
        a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
      } : A;aa.$$addScopeClass = p ? function (a, b) {
        x(a, b ? "ng-isolate-scope" : "ng-scope");
      } : A;aa.$$createComment = function (a, b) {
        var c = "";p && (c = " " + (a || "") + ": ", b && (c += b + " "));return C.document.createComment(c);
      };return aa;
    }];
  }function Fb(a, b) {
    this.previousValue = a;this.currentValue = b;
  }function Aa(a) {
    return db(a.replace(Yc, ""));
  }function ad(a, b) {
    var d = "",
        c = a.split(/\s+/),
        e = b.split(/\s+/),
        f = 0;a: for (; f < c.length; f++) {
      for (var g = c[f], h = 0; h < e.length; h++) {
        if (g == e[h]) continue a;
      }d += (0 < d.length ? " " : "") + g;
    }return d;
  }function $c(a) {
    a = F(a);var b = a.length;if (1 >= b) return a;for (; b--;) {
      8 === a[b].nodeType && bg.call(a, b, 1);
    }return a;
  }function Xc(a, b) {
    if (b && G(b)) return b;if (G(a)) {
      var d = cd.exec(a);if (d) return d[3];
    }
  }function ff() {
    var a = {},
        b = !1;this.has = function (b) {
      return a.hasOwnProperty(b);
    };this.register = function (b, c) {
      Qa(b, "controller");D(b) ? S(a, b) : a[b] = c;
    };this.allowGlobals = function () {
      b = !0;
    };this.$get = ["$injector", "$window", function (d, c) {
      function e(a, b, c, d) {
        if (!a || !D(a.$scope)) throw N("$controller")("noscp", d, b);a.$scope[b] = c;
      }return function (f, g, h, k) {
        var l, m, n;h = !0 === h;k && G(k) && (n = k);if (G(f)) {
          k = f.match(cd);if (!k) throw cg("ctrlfmt", f);m = k[1];n = n || k[3];f = a.hasOwnProperty(m) ? a[m] : Ec(g.$scope, m, !0) || (b ? Ec(c, m, !0) : void 0);Pa(f, m, !0);
        }if (h) return h = (L(f) ? f[f.length - 1] : f).prototype, l = Object.create(h || null), n && e(g, n, l, m || f.name), S(function () {
          var a = d.invoke(f, l, g, m);a !== l && (D(a) || z(a)) && (l = a, n && e(g, n, l, m || f.name));return l;
        }, { instance: l, identifier: n });l = d.instantiate(f, g, m);n && e(g, n, l, m || f.name);return l;
      };
    }];
  }function gf() {
    this.$get = ["$window", function (a) {
      return F(a.document);
    }];
  }function hf() {
    this.$get = ["$log", function (a) {
      return function (b, d) {
        a.error.apply(a, arguments);
      };
    }];
  }function cc(a) {
    return D(a) ? da(a) ? a.toISOString() : bb(a) : a;
  }function nf() {
    this.$get = function () {
      return function (a) {
        if (!a) return "";var b = [];tc(a, function (a, c) {
          null === a || y(a) || (L(a) ? q(a, function (a) {
            b.push(ea(c) + "=" + ea(cc(a)));
          }) : b.push(ea(c) + "=" + ea(cc(a))));
        });
        return b.join("&");
      };
    };
  }function of() {
    this.$get = function () {
      return function (a) {
        function b(a, e, f) {
          null === a || y(a) || (L(a) ? q(a, function (a, c) {
            b(a, e + "[" + (D(a) ? c : "") + "]");
          }) : D(a) && !da(a) ? tc(a, function (a, c) {
            b(a, e + (f ? "" : "[") + c + (f ? "" : "]"));
          }) : d.push(ea(e) + "=" + ea(cc(a))));
        }if (!a) return "";var d = [];b(a, "", !0);return d.join("&");
      };
    };
  }function dc(a, b) {
    if (G(a)) {
      var d = a.replace(dg, "").trim();if (d) {
        var c = b("Content-Type");(c = c && 0 === c.indexOf(dd)) || (c = (c = d.match(eg)) && fg[c[0]].test(d));c && (a = xc(d));
      }
    }return a;
  }function ed(a) {
    var b = U(),
        d;G(a) ? q(a.split("\n"), function (a) {
      d = a.indexOf(":");var e = Q(W(a.substr(0, d)));a = W(a.substr(d + 1));e && (b[e] = b[e] ? b[e] + ", " + a : a);
    }) : D(a) && q(a, function (a, d) {
      var f = Q(d),
          g = W(a);f && (b[f] = b[f] ? b[f] + ", " + g : g);
    });return b;
  }function fd(a) {
    var b;return function (d) {
      b || (b = ed(a));return d ? (d = b[Q(d)], void 0 === d && (d = null), d) : b;
    };
  }function gd(a, b, d, c) {
    if (z(c)) return c(a, b, d);q(c, function (c) {
      a = c(a, b, d);
    });return a;
  }function mf() {
    var a = this.defaults = { transformResponse: [dc], transformRequest: [function (a) {
        return D(a) && "[object File]" !== ma.call(a) && "[object Blob]" !== ma.call(a) && "[object FormData]" !== ma.call(a) ? bb(a) : a;
      }], headers: { common: { Accept: "application/json, text/plain, */*" }, post: ia(ec), put: ia(ec), patch: ia(ec) }, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", paramSerializer: "$httpParamSerializer" },
        b = !1;this.useApplyAsync = function (a) {
      return w(a) ? (b = !!a, this) : b;
    };var d = !0;this.useLegacyPromiseExtensions = function (a) {
      return w(a) ? (d = !!a, this) : d;
    };var c = this.interceptors = [];this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (e, f, g, h, k, l) {
      function m(b) {
        function c(a, b) {
          for (var d = 0, e = b.length; d < e;) {
            var f = b[d++],
                g = b[d++];a = a.then(f, g);
          }b.length = 0;return a;
        }function e(a, b) {
          var c,
              d = {};q(a, function (a, e) {
            z(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a;
          });return d;
        }function f(a) {
          var b = S({}, a);b.data = gd(a.data, a.headers, a.status, g.transformResponse);a = a.status;return 200 <= a && 300 > a ? b : k.reject(b);
        }if (!D(b)) throw N("$http")("badreq", b);if (!G(b.url)) throw N("$http")("badreq", b.url);var g = S({ method: "get", transformRequest: a.transformRequest,
          transformResponse: a.transformResponse, paramSerializer: a.paramSerializer }, b);g.headers = function (b) {
          var c = a.headers,
              d = S({}, b.headers),
              f,
              g,
              h,
              c = S({}, c.common, c[Q(b.method)]);a: for (f in c) {
            g = Q(f);for (h in d) {
              if (Q(h) === g) continue a;
            }d[f] = c[f];
          }return e(d, ia(b));
        }(b);g.method = ub(g.method);g.paramSerializer = G(g.paramSerializer) ? l.get(g.paramSerializer) : g.paramSerializer;var h = [],
            m = [],
            p = k.when(g);q(R, function (a) {
          (a.request || a.requestError) && h.unshift(a.request, a.requestError);(a.response || a.responseError) && m.push(a.response, a.responseError);
        });p = c(p, h);p = p.then(function (b) {
          var c = b.headers,
              d = gd(b.data, fd(c), void 0, b.transformRequest);y(d) && q(c, function (a, b) {
            "content-type" === Q(b) && delete c[b];
          });y(b.withCredentials) && !y(a.withCredentials) && (b.withCredentials = a.withCredentials);return n(b, d).then(f, f);
        });p = c(p, m);d ? (p.success = function (a) {
          Pa(a, "fn");p.then(function (b) {
            a(b.data, b.status, b.headers, g);
          });return p;
        }, p.error = function (a) {
          Pa(a, "fn");p.then(null, function (b) {
            a(b.data, b.status, b.headers, g);
          });return p;
        }) : (p.success = hd("success"), p.error = hd("error"));return p;
      }function n(c, d) {
        function g(a) {
          if (a) {
            var c = {};q(a, function (a, d) {
              c[d] = function (c) {
                function d() {
                  a(c);
                }b ? h.$applyAsync(d) : h.$$phase ? d() : h.$apply(d);
              };
            });return c;
          }
        }function l(a, c, d, e) {
          function f() {
            n(c, a, d, e);
          }E && (200 <= a && 300 > a ? E.put(P, [a, c, ed(d), e]) : E.remove(P));b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply());
        }function n(a, b, d, e) {
          b = -1 <= b ? b : 0;(200 <= b && 300 > b ? M.resolve : M.reject)({ data: a, status: b, headers: fd(d), config: c, statusText: e });
        }function t(a) {
          n(a.data, a.status, ia(a.headers()), a.statusText);
        }function R() {
          var a = m.pendingRequests.indexOf(c);-1 !== a && m.pendingRequests.splice(a, 1);
        }var M = k.defer(),
            H = M.promise,
            E,
            I,
            Da = c.headers,
            P = p(c.url, c.paramSerializer(c.params));m.pendingRequests.push(c);H.then(R, R);!c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (E = D(c.cache) ? c.cache : D(a.cache) ? a.cache : u);E && (I = E.get(P), w(I) ? I && z(I.then) ? I.then(t, t) : L(I) ? n(I[1], I[0], ia(I[2]), I[3]) : n(I, 200, {}, "OK") : E.put(P, H));y(I) && ((I = id(c.url) ? f()[c.xsrfCookieName || a.xsrfCookieName] : void 0) && (Da[c.xsrfHeaderName || a.xsrfHeaderName] = I), e(c.method, P, d, l, Da, c.timeout, c.withCredentials, c.responseType, g(c.eventHandlers), g(c.uploadEventHandlers)));return H;
      }function p(a, b) {
        0 < b.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + b);return a;
      }var u = g("$http");a.paramSerializer = G(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;var R = [];q(c, function (a) {
        R.unshift(G(a) ? l.get(a) : l.invoke(a));
      });m.pendingRequests = [];(function (a) {
        q(arguments, function (a) {
          m[a] = function (b, c) {
            return m(S({}, c || {}, { method: a, url: b }));
          };
        });
      })("get", "delete", "head", "jsonp");(function (a) {
        q(arguments, function (a) {
          m[a] = function (b, c, d) {
            return m(S({}, d || {}, { method: a, url: b, data: c }));
          };
        });
      })("post", "put", "patch");m.defaults = a;return m;
    }];
  }function qf() {
    this.$get = function () {
      return function () {
        return new C.XMLHttpRequest();
      };
    };
  }function pf() {
    this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function (a, b, d, c) {
      return gg(a, c, a.defer, b, d[0]);
    }];
  }function gg(a, b, d, c, e) {
    function f(a, b, d) {
      a = a.replace("JSON_CALLBACK", b);var f = e.createElement("script"),
          _m = null;f.type = "text/javascript";f.src = a;f.async = !0;_m = function m(a) {
        f.removeEventListener("load", _m, !1);f.removeEventListener("error", _m, !1);e.body.removeChild(f);f = null;var g = -1,
            u = "unknown";a && ("load" !== a.type || c.wasCalled(b) || (a = { type: "error" }), u = a.type, g = "error" === a.type ? 404 : 200);d && d(g, u);
      };f.addEventListener("load", _m, !1);f.addEventListener("error", _m, !1);e.body.appendChild(f);return _m;
    }return function (e, h, k, l, m, n, p, u, R, B) {
      function r() {
        fa && fa();t && t.abort();
      }function J(b, c, e, f, g) {
        w(M) && d.cancel(M);fa = t = null;b(c, e, f, g);a.$$completeOutstandingRequest(A);
      }a.$$incOutstandingRequestCount();h = h || a.url();if ("jsonp" === Q(e)) var v = c.createCallback(h),
          fa = f(h, v, function (a, b) {
        var d = 200 === a && c.getResponse(v);J(l, a, d, "", b);c.removeCallback(v);
      });else {
        var t = b(e, h);t.open(e, h, !0);q(m, function (a, b) {
          w(a) && t.setRequestHeader(b, a);
        });t.onload = function () {
          var a = t.statusText || "",
              b = "response" in t ? t.response : t.responseText,
              c = 1223 === t.status ? 204 : t.status;0 === c && (c = b ? 200 : "file" == Y(h).protocol ? 404 : 0);J(l, c, b, t.getAllResponseHeaders(), a);
        };e = function e() {
          J(l, -1, null, null, "");
        };t.onerror = e;t.onabort = e;q(R, function (a, b) {
          t.addEventListener(b, a);
        });q(B, function (a, b) {
          t.upload.addEventListener(b, a);
        });p && (t.withCredentials = !0);if (u) try {
          t.responseType = u;
        } catch (K) {
          if ("json" !== u) throw K;
        }t.send(y(k) ? null : k);
      }if (0 < n) var M = d(r, n);else n && z(n.then) && n.then(r);
    };
  }function kf() {
    var a = "{{",
        b = "}}";this.startSymbol = function (b) {
      return b ? (a = b, this) : a;
    };this.endSymbol = function (a) {
      return a ? (b = a, this) : b;
    };this.$get = ["$parse", "$exceptionHandler", "$sce", function (d, c, e) {
      function f(a) {
        return "\\\\\\" + a;
      }function g(c) {
        return c.replace(n, a).replace(p, b);
      }function h(a, b, c, d) {
        var e;return e = a.$watch(function (a) {
          e();return d(a);
        }, b, c);
      }function k(f, k, p, n) {
        function J(a) {
          try {
            var b = a;a = p ? e.getTrusted(p, b) : e.valueOf(b);var d;if (n && !w(a)) d = a;else if (null == a) d = "";else {
              switch (typeof a === "undefined" ? "undefined" : _typeof(a)) {case "string":
                  break;case "number":
                  a = "" + a;break;default:
                  a = bb(a);}d = a;
            }return d;
          } catch (g) {
            c(Ka.interr(f, g));
          }
        }if (!f.length || -1 === f.indexOf(a)) {
          var v;k || (k = g(f), v = ha(k), v.exp = f, v.expressions = [], v.$$watchDelegate = h);return v;
        }n = !!n;var q,
            t,
            K = 0,
            M = [],
            H = [];v = f.length;for (var E = [], I = []; K < v;) {
          if (-1 != (q = f.indexOf(a, K)) && -1 != (t = f.indexOf(b, q + l))) K !== q && E.push(g(f.substring(K, q))), K = f.substring(q + l, t), M.push(K), H.push(d(K, J)), K = t + m, I.push(E.length), E.push("");else {
            K !== v && E.push(g(f.substring(K)));break;
          }
        }p && 1 < E.length && Ka.throwNoconcat(f);if (!k || M.length) {
          var Da = function Da(a) {
            for (var b = 0, c = M.length; b < c; b++) {
              if (n && y(a[b])) return;E[I[b]] = a[b];
            }return E.join("");
          };return S(function (a) {
            var b = 0,
                d = M.length,
                e = Array(d);try {
              for (; b < d; b++) {
                e[b] = H[b](a);
              }return Da(e);
            } catch (g) {
              c(Ka.interr(f, g));
            }
          }, { exp: f, expressions: M, $$watchDelegate: function $$watchDelegate(a, b) {
              var c;return a.$watchGroup(H, function (d, e) {
                var f = Da(d);z(b) && b.call(this, f, d !== e ? c : f, a);c = f;
              });
            } });
        }
      }var l = a.length,
          m = b.length,
          n = new RegExp(a.replace(/./g, f), "g"),
          p = new RegExp(b.replace(/./g, f), "g");k.startSymbol = function () {
        return a;
      };k.endSymbol = function () {
        return b;
      };return k;
    }];
  }function lf() {
    this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (a, b, d, c, e) {
      function f(f, k, l, m) {
        function n() {
          p ? f.apply(null, u) : f(r);
        }var p = 4 < arguments.length,
            u = p ? va.call(arguments, 4) : [],
            R = b.setInterval,
            q = b.clearInterval,
            r = 0,
            J = w(m) && !m,
            v = (J ? c : d).defer(),
            fa = v.promise;l = w(l) ? l : 0;fa.$$intervalId = R(function () {
          J ? e.defer(n) : a.$evalAsync(n);v.notify(r++);0 < l && r >= l && (v.resolve(r), q(fa.$$intervalId), delete g[fa.$$intervalId]);J || a.$apply();
        }, k);g[fa.$$intervalId] = v;return fa;
      }var g = {};f.cancel = function (a) {
        return a && a.$$intervalId in g ? (g[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], !0) : !1;
      };return f;
    }];
  }function fc(a) {
    a = a.split("/");for (var b = a.length; b--;) {
      a[b] = qb(a[b]);
    }return a.join("/");
  }function jd(a, b) {
    var d = Y(a);b.$$protocol = d.protocol;b.$$host = d.hostname;b.$$port = Z(d.port) || hg[d.protocol] || null;
  }function kd(a, b) {
    var d = "/" !== a.charAt(0);d && (a = "/" + a);var c = Y(a);b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);b.$$search = Ac(c.search);b.$$hash = decodeURIComponent(c.hash);b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
  }function ka(a, b) {
    if (0 === b.lastIndexOf(a, 0)) return b.substr(a.length);
  }function Ja(a) {
    var b = a.indexOf("#");return -1 == b ? a : a.substr(0, b);
  }function jb(a) {
    return a.replace(/(#.+)|#$/, "$1");
  }function gc(a, b, d) {
    this.$$html5 = !0;d = d || "";jd(a, this);this.$$parse = function (a) {
      var d = ka(b, a);if (!G(d)) throw Gb("ipthprfx", a, b);kd(d, this);this.$$path || (this.$$path = "/");this.$$compose();
    };this.$$compose = function () {
      var a = Tb(this.$$search),
          d = this.$$hash ? "#" + qb(this.$$hash) : "";this.$$url = fc(this.$$path) + (a ? "?" + a : "") + d;this.$$absUrl = b + this.$$url.substr(1);
    };this.$$parseLinkUrl = function (c, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;var f, g;w(f = ka(a, c)) ? (g = f, g = w(f = ka(d, f)) ? b + (ka("/", f) || f) : a + g) : w(f = ka(b, c)) ? g = b + f : b == c + "/" && (g = b);g && this.$$parse(g);return !!g;
    };
  }function hc(a, b, d) {
    jd(a, this);this.$$parse = function (c) {
      var e = ka(a, c) || ka(b, c),
          f;y(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", y(e) && (a = c, this.replace())) : (f = ka(d, e), y(f) && (f = e));kd(f, this);c = this.$$path;var e = a,
          g = /^\/[A-Z]:(\/.*)/;0 === f.lastIndexOf(e, 0) && (f = f.replace(e, ""));g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);this.$$path = c;this.$$compose();
    };this.$$compose = function () {
      var b = Tb(this.$$search),
          e = this.$$hash ? "#" + qb(this.$$hash) : "";this.$$url = fc(this.$$path) + (b ? "?" + b : "") + e;this.$$absUrl = a + (this.$$url ? d + this.$$url : "");
    };this.$$parseLinkUrl = function (b, d) {
      return Ja(a) == Ja(b) ? (this.$$parse(b), !0) : !1;
    };
  }function ld(a, b, d) {
    this.$$html5 = !0;hc.apply(this, arguments);this.$$parseLinkUrl = function (c, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;var f, g;a == Ja(c) ? f = c : (g = ka(b, c)) ? f = a + d + g : b === c + "/" && (f = b);f && this.$$parse(f);return !!f;
    };this.$$compose = function () {
      var b = Tb(this.$$search),
          e = this.$$hash ? "#" + qb(this.$$hash) : "";this.$$url = fc(this.$$path) + (b ? "?" + b : "") + e;this.$$absUrl = a + d + this.$$url;
    };
  }function Hb(a) {
    return function () {
      return this[a];
    };
  }function md(a, b) {
    return function (d) {
      if (y(d)) return this[a];this[a] = b(d);this.$$compose();return this;
    };
  }function sf() {
    var a = "",
        b = { enabled: !1, requireBase: !0, rewriteLinks: !0 };this.hashPrefix = function (b) {
      return w(b) ? (a = b, this) : a;
    };this.html5Mode = function (a) {
      return Ga(a) ? (b.enabled = a, this) : D(a) ? (Ga(a.enabled) && (b.enabled = a.enabled), Ga(a.requireBase) && (b.requireBase = a.requireBase), Ga(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b;
    };this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (d, c, e, f, g) {
      function h(a, b, d) {
        var e = l.url(),
            f = l.$$state;try {
          c.url(a, b, d), l.$$state = c.state();
        } catch (g) {
          throw l.url(e), l.$$state = f, g;
        }
      }function k(a, b) {
        d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b);
      }var l, m;m = c.baseHref();var n = c.url(),
          p;if (b.enabled) {
        if (!m && b.requireBase) throw Gb("nobase");p = n.substring(0, n.indexOf("/", n.indexOf("//") + 2)) + (m || "/");m = e.history ? gc : ld;
      } else p = Ja(n), m = hc;var u = p.substr(0, Ja(p).lastIndexOf("/") + 1);l = new m(p, u, "#" + a);l.$$parseLinkUrl(n, n);l.$$state = c.state();var R = /^\s*(javascript|mailto):/i;f.on("click", function (a) {
        if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
          for (var e = F(a.target); "a" !== wa(e[0]);) {
            if (e[0] === f[0] || !(e = e.parent())[0]) return;
          }var h = e.prop("href"),
              k = e.attr("href") || e.attr("xlink:href");D(h) && "[object SVGAnimatedString]" === h.toString() && (h = Y(h.animVal).href);R.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(h, k) || (a.preventDefault(), l.absUrl() != c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0));
        }
      });jb(l.absUrl()) != jb(n) && c.url(l.absUrl(), !0);var q = !0;c.onUrlChange(function (a, b) {
        y(ka(u, a)) ? g.location.href = a : (d.$evalAsync(function () {
          var c = l.absUrl(),
              e = l.$$state,
              f;a = jb(a);l.$$parse(a);l.$$state = b;f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;l.absUrl() === a && (f ? (l.$$parse(c), l.$$state = e, h(c, !1, e)) : (q = !1, k(c, e)));
        }), d.$$phase || d.$digest());
      });d.$watch(function () {
        var a = jb(c.url()),
            b = jb(l.absUrl()),
            f = c.state(),
            g = l.$$replace,
            m = a !== b || l.$$html5 && e.history && f !== l.$$state;if (q || m) q = !1, d.$evalAsync(function () {
          var b = l.absUrl(),
              c = d.$broadcast("$locationChangeStart", b, a, l.$$state, f).defaultPrevented;l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = f) : (m && h(b, g, f === l.$$state ? null : l.$$state), k(a, f)));
        });l.$$replace = !1;
      });return l;
    }];
  }function tf() {
    var a = !0,
        b = this;this.debugEnabled = function (b) {
      return w(b) ? (a = b, this) : a;
    };this.$get = ["$window", function (d) {
      function c(a) {
        a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));return a;
      }function e(a) {
        var b = d.console || {},
            e = b[a] || b.log || A;a = !1;try {
          a = !!e.apply;
        } catch (k) {}return a ? function () {
          var a = [];q(arguments, function (b) {
            a.push(c(b));
          });
          return e.apply(b, a);
        } : function (a, b) {
          e(a, null == b ? "" : b);
        };
      }return { log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
          var c = e("debug");return function () {
            a && c.apply(b, arguments);
          };
        }() };
    }];
  }function Sa(a, b) {
    if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw X("isecfld", b);return a;
  }function ig(a) {
    return a + "";
  }function ra(a, b) {
    if (a) {
      if (a.constructor === a) throw X("isecfn", b);if (a.window === a) throw X("isecwindow", b);if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw X("isecdom", b);if (a === Object) throw X("isecobj", b);
    }return a;
  }function nd(a, b) {
    if (a) {
      if (a.constructor === a) throw X("isecfn", b);if (a === jg || a === kg || a === lg) throw X("isecff", b);
    }
  }function Ib(a, b) {
    if (a && (a === 0 .constructor || a === (!1).constructor || a === "".constructor || a === {}.constructor || a === [].constructor || a === Function.constructor)) throw X("isecaf", b);
  }function mg(a, b) {
    return "undefined" !== typeof a ? a : b;
  }function od(a, b) {
    return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b;
  }function V(a, b) {
    var d, c;switch (a.type) {case s.Program:
        d = !0;q(a.body, function (a) {
          V(a.expression, b);d = d && a.expression.constant;
        });a.constant = d;break;case s.Literal:
        a.constant = !0;a.toWatch = [];break;case s.UnaryExpression:
        V(a.argument, b);a.constant = a.argument.constant;a.toWatch = a.argument.toWatch;break;case s.BinaryExpression:
        V(a.left, b);V(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:
        V(a.left, b);V(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = a.constant ? [] : [a];break;case s.ConditionalExpression:
        V(a.test, b);V(a.alternate, b);V(a.consequent, b);a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;a.toWatch = a.constant ? [] : [a];break;case s.Identifier:
        a.constant = !1;a.toWatch = [a];break;case s.MemberExpression:
        V(a.object, b);a.computed && V(a.property, b);a.constant = a.object.constant && (!a.computed || a.property.constant);a.toWatch = [a];break;case s.CallExpression:
        d = a.filter ? !b(a.callee.name).$stateful : !1;c = [];q(a.arguments, function (a) {
          V(a, b);d = d && a.constant;a.constant || c.push.apply(c, a.toWatch);
        });a.constant = d;a.toWatch = a.filter && !b(a.callee.name).$stateful ? c : [a];break;case s.AssignmentExpression:
        V(a.left, b);V(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = [a];break;case s.ArrayExpression:
        d = !0;c = [];q(a.elements, function (a) {
          V(a, b);d = d && a.constant;a.constant || c.push.apply(c, a.toWatch);
        });a.constant = d;a.toWatch = c;break;case s.ObjectExpression:
        d = !0;c = [];q(a.properties, function (a) {
          V(a.value, b);d = d && a.value.constant && !a.computed;a.value.constant || c.push.apply(c, a.value.toWatch);
        });a.constant = d;a.toWatch = c;break;case s.ThisExpression:
        a.constant = !1;a.toWatch = [];break;case s.LocalsExpression:
        a.constant = !1, a.toWatch = [];}
  }function pd(a) {
    if (1 == a.length) {
      a = a[0].expression;var b = a.toWatch;return 1 !== b.length ? b : b[0] !== a ? b : void 0;
    }
  }function qd(a) {
    return a.type === s.Identifier || a.type === s.MemberExpression;
  }function rd(a) {
    if (1 === a.body.length && qd(a.body[0].expression)) return { type: s.AssignmentExpression,
      left: a.body[0].expression, right: { type: s.NGValueParameter }, operator: "=" };
  }function sd(a) {
    return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === s.Literal || a.body[0].expression.type === s.ArrayExpression || a.body[0].expression.type === s.ObjectExpression);
  }function td(a, b) {
    this.astBuilder = a;this.$filter = b;
  }function ud(a, b) {
    this.astBuilder = a;this.$filter = b;
  }function Jb(a) {
    return "constructor" == a;
  }function ic(a) {
    return z(a.valueOf) ? a.valueOf() : ng.call(a);
  }function uf() {
    var a = U(),
        b = U(),
        d = { "true": !0,
      "false": !1, "null": null, undefined: void 0 },
        c,
        e;this.addLiteral = function (a, b) {
      d[a] = b;
    };this.setIdentifierFns = function (a, b) {
      c = a;e = b;return this;
    };this.$get = ["$filter", function (f) {
      function g(c, d, e) {
        var g, k, H;e = e || J;switch (typeof c === "undefined" ? "undefined" : _typeof(c)) {case "string":
            H = c = c.trim();var E = e ? b : a;g = E[H];if (!g) {
              ":" === c.charAt(0) && ":" === c.charAt(1) && (k = !0, c = c.substring(2));g = e ? r : B;var q = new jc(g);g = new kc(q, f, g).parse(c);g.constant ? g.$$watchDelegate = p : k ? g.$$watchDelegate = g.literal ? n : m : g.inputs && (g.$$watchDelegate = l);e && (g = h(g));E[H] = g;
            }return u(g, d);case "function":
            return u(c, d);default:
            return u(A, d);}
      }function h(a) {
        function b(c, d, e, f) {
          var g = J;J = !0;try {
            return a(c, d, e, f);
          } finally {
            J = g;
          }
        }if (!a) return a;b.$$watchDelegate = a.$$watchDelegate;b.assign = h(a.assign);b.constant = a.constant;b.literal = a.literal;for (var c = 0; a.inputs && c < a.inputs.length; ++c) {
          a.inputs[c] = h(a.inputs[c]);
        }b.inputs = a.inputs;return b;
      }function k(a, b) {
        return null == a || null == b ? a === b : "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && (a = ic(a), "object" === (typeof a === "undefined" ? "undefined" : _typeof(a))) ? !1 : a === b || a !== a && b !== b;
      }function l(a, b, c, d, e) {
        var f = d.inputs,
            g;if (1 === f.length) {
          var h = k,
              f = f[0];return a.$watch(function (a) {
            var b = f(a);k(b, h) || (g = d(a, void 0, void 0, [b]), h = b && ic(b));return g;
          }, b, c, e);
        }for (var l = [], m = [], p = 0, n = f.length; p < n; p++) {
          l[p] = k, m[p] = null;
        }return a.$watch(function (a) {
          for (var b = !1, c = 0, e = f.length; c < e; c++) {
            var h = f[c](a);if (b || (b = !k(h, l[c]))) m[c] = h, l[c] = h && ic(h);
          }b && (g = d(a, void 0, void 0, m));return g;
        }, b, c, e);
      }function m(a, b, c, d) {
        var e, f;return e = a.$watch(function (a) {
          return d(a);
        }, function (a, c, d) {
          f = a;z(b) && b.apply(this, arguments);w(a) && d.$$postDigest(function () {
            w(f) && e();
          });
        }, c);
      }function n(a, b, c, d) {
        function e(a) {
          var b = !0;q(a, function (a) {
            w(a) || (b = !1);
          });return b;
        }var f, g;return f = a.$watch(function (a) {
          return d(a);
        }, function (a, c, d) {
          g = a;z(b) && b.call(this, a, c, d);e(a) && d.$$postDigest(function () {
            e(g) && f();
          });
        }, c);
      }function p(a, b, c, d) {
        var e;return e = a.$watch(function (a) {
          e();return d(a);
        }, b, c);
      }function u(a, b) {
        if (!b) return a;var c = a.$$watchDelegate,
            d = !1,
            c = c !== n && c !== m ? function (c, e, f, g) {
          f = d && g ? g[0] : a(c, e, f, g);return b(f, c, e);
        } : function (c, d, e, f) {
          e = a(c, d, e, f);c = b(e, c, d);return w(e) ? c : e;
        };a.$$watchDelegate && a.$$watchDelegate !== l ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = l, d = !a.inputs, c.inputs = a.inputs ? a.inputs : [a]);return c;
      }var R = Ba().noUnsafeEval,
          B = { csp: R, expensiveChecks: !1, literals: pa(d), isIdentifierStart: z(c) && c, isIdentifierContinue: z(e) && e },
          r = { csp: R, expensiveChecks: !0, literals: pa(d), isIdentifierStart: z(c) && c, isIdentifierContinue: z(e) && e },
          J = !1;g.$$runningExpensiveChecks = function () {
        return J;
      };return g;
    }];
  }function wf() {
    this.$get = ["$rootScope", "$exceptionHandler", function (a, b) {
      return vd(function (b) {
        a.$evalAsync(b);
      }, b);
    }];
  }function xf() {
    this.$get = ["$browser", "$exceptionHandler", function (a, b) {
      return vd(function (b) {
        a.defer(b);
      }, b);
    }];
  }function vd(a, b) {
    function d() {
      this.$$state = { status: 0 };
    }function c(a, b) {
      return function (c) {
        b.call(a, c);
      };
    }function e(c) {
      !c.processScheduled && c.pending && (c.processScheduled = !0, a(function () {
        var a, d, e;e = c.pending;c.processScheduled = !1;c.pending = void 0;for (var f = 0, g = e.length; f < g; ++f) {
          d = e[f][0];a = e[f][c.status];
          try {
            z(a) ? d.resolve(a(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value);
          } catch (h) {
            d.reject(h), b(h);
          }
        }
      }));
    }function f() {
      this.promise = new d();
    }var g = N("$q", TypeError),
        h = function h() {
      var a = new f();a.resolve = c(a, a.resolve);a.reject = c(a, a.reject);a.notify = c(a, a.notify);return a;
    };S(d.prototype, { then: function then(a, b, c) {
        if (y(a) && y(b) && y(c)) return this;var d = new f();this.$$state.pending = this.$$state.pending || [];this.$$state.pending.push([d, a, b, c]);0 < this.$$state.status && e(this.$$state);return d.promise;
      }, "catch": function _catch(a) {
        return this.then(null, a);
      }, "finally": function _finally(a, b) {
        return this.then(function (b) {
          return l(b, !0, a);
        }, function (b) {
          return l(b, !1, a);
        }, b);
      } });S(f.prototype, { resolve: function resolve(a) {
        this.promise.$$state.status || (a === this.promise ? this.$$reject(g("qcycle", a)) : this.$$resolve(a));
      }, $$resolve: function $$resolve(a) {
        function d(a) {
          k || (k = !0, h.$$resolve(a));
        }function f(a) {
          k || (k = !0, h.$$reject(a));
        }var g,
            h = this,
            k = !1;try {
          if (D(a) || z(a)) g = a && a.then;z(g) ? (this.promise.$$state.status = -1, g.call(a, d, f, c(this, this.notify))) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, e(this.promise.$$state));
        } catch (l) {
          f(l), b(l);
        }
      }, reject: function reject(a) {
        this.promise.$$state.status || this.$$reject(a);
      }, $$reject: function $$reject(a) {
        this.promise.$$state.value = a;this.promise.$$state.status = 2;e(this.promise.$$state);
      }, notify: function notify(c) {
        var d = this.promise.$$state.pending;0 >= this.promise.$$state.status && d && d.length && a(function () {
          for (var a, e, f = 0, g = d.length; f < g; f++) {
            e = d[f][0];a = d[f][3];try {
              e.notify(z(a) ? a(c) : c);
            } catch (h) {
              b(h);
            }
          }
        });
      } });var k = function k(a, b) {
      var c = new f();b ? c.resolve(a) : c.reject(a);return c.promise;
    },
        l = function l(a, b, c) {
      var d = null;try {
        z(c) && (d = c());
      } catch (e) {
        return k(e, !1);
      }return d && z(d.then) ? d.then(function () {
        return k(a, b);
      }, function (a) {
        return k(a, !1);
      }) : k(a, b);
    },
        m = function m(a, b, c, d) {
      var e = new f();e.resolve(a);return e.promise.then(b, c, d);
    },
        n = function n(a) {
      if (!z(a)) throw g("norslvr", a);var b = new f();a(function (a) {
        b.resolve(a);
      }, function (a) {
        b.reject(a);
      });return b.promise;
    };n.prototype = d.prototype;n.defer = h;n.reject = function (a) {
      var b = new f();b.reject(a);return b.promise;
    };n.when = m;n.resolve = m;n.all = function (a) {
      var b = new f(),
          c = 0,
          d = L(a) ? [] : {};q(a, function (a, e) {
        c++;m(a).then(function (a) {
          d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
        }, function (a) {
          d.hasOwnProperty(e) || b.reject(a);
        });
      });0 === c && b.resolve(d);return b.promise;
    };n.race = function (a) {
      var b = h();q(a, function (a) {
        m(a).then(b.resolve, b.reject);
      });return b.promise;
    };return n;
  }function Gf() {
    this.$get = ["$window", "$timeout", function (a, b) {
      var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
          c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
          e = !!d,
          f = e ? function (a) {
        var b = d(a);return function () {
          c(b);
        };
      } : function (a) {
        var c = b(a, 16.66, !1);return function () {
          b.cancel(c);
        };
      };f.supported = e;return f;
    }];
  }function vf() {
    function a(a) {
      function b() {
        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$id = ++pb;this.$$ChildScope = null;
      }b.prototype = a;return b;
    }var b = 10,
        d = N("$rootScope"),
        c = null,
        e = null;this.digestTtl = function (a) {
      arguments.length && (b = a);return b;
    };this.$get = ["$exceptionHandler", "$parse", "$browser", function (f, g, h) {
      function k(a) {
        a.currentScope.$$destroyed = !0;
      }function l(a) {
        9 === Ea && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling));a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null;
      }function m() {
        this.$id = ++pb;this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;this.$root = this;this.$$destroyed = !1;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$$isolateBindings = null;
      }function n(a) {
        if (J.$$phase) throw d("inprog", J.$$phase);J.$$phase = a;
      }function p(a, b) {
        do {
          a.$$watchersCount += b;
        } while (a = a.$parent);
      }function u(a, b, c) {
        do {
          a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
        } while (a = a.$parent);
      }function s() {}function B() {
        for (; t.length;) {
          try {
            t.shift()();
          } catch (a) {
            f(a);
          }
        }e = null;
      }function r() {
        null === e && (e = h.defer(function () {
          J.$apply(B);
        }));
      }m.prototype = { constructor: m, $new: function $new(b, c) {
          var d;c = c || this;b ? (d = new m(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope());d.$parent = c;d.$$prevSibling = c.$$childTail;c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;(b || c != this) && d.$on("$destroy", k);return d;
        }, $watch: function $watch(a, b, d, e) {
          var f = g(a);if (f.$$watchDelegate) return f.$$watchDelegate(this, b, d, f, a);var h = this,
              k = h.$$watchers,
              l = { fn: b, last: s, get: f, exp: e || a, eq: !!d };c = null;z(b) || (l.fn = A);k || (k = h.$$watchers = []);k.unshift(l);p(this, 1);return function () {
            0 <= Za(k, l) && p(h, -1);c = null;
          };
        }, $watchGroup: function $watchGroup(a, b) {
          function c() {
            h = !1;k ? (k = !1, b(e, e, g)) : b(e, d, g);
          }var d = Array(a.length),
              e = Array(a.length),
              f = [],
              g = this,
              h = !1,
              k = !0;if (!a.length) {
            var l = !0;g.$evalAsync(function () {
              l && b(e, e, g);
            });return function () {
              l = !1;
            };
          }if (1 === a.length) return this.$watch(a[0], function (a, c, f) {
            e[0] = a;d[0] = c;b(e, a === c ? e : d, f);
          });q(a, function (a, b) {
            var k = g.$watch(a, function (a, f) {
              e[b] = a;d[b] = f;h || (h = !0, g.$evalAsync(c));
            });f.push(k);
          });return function () {
            for (; f.length;) {
              f.shift()();
            }
          };
        },
        $watchCollection: function $watchCollection(a, b) {
          function c(a) {
            e = a;var b, d, g, h;if (!y(e)) {
              if (D(e)) {
                if (ta(e)) for (f !== n && (f = n, u = f.length = 0, l++), a = e.length, u !== a && (l++, f.length = u = a), b = 0; b < a; b++) {
                  h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g);
                } else {
                  f !== p && (f = p = {}, u = 0, l++);a = 0;for (b in e) {
                    ua.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (u++, f[b] = g, l++));
                  }if (u > a) for (b in l++, f) {
                    ua.call(e, b) || (u--, delete f[b]);
                  }
                }
              } else f !== e && (f = e, l++);return l;
            }
          }c.$stateful = !0;var d = this,
              e,
              f,
              h,
              k = 1 < b.length,
              l = 0,
              m = g(a, c),
              n = [],
              p = {},
              r = !0,
              u = 0;return this.$watch(m, function () {
            r ? (r = !1, b(e, e, d)) : b(e, h, d);if (k) if (D(e)) {
              if (ta(e)) {
                h = Array(e.length);for (var a = 0; a < e.length; a++) {
                  h[a] = e[a];
                }
              } else for (a in h = {}, e) {
                ua.call(e, a) && (h[a] = e[a]);
              }
            } else h = e;
          });
        }, $digest: function $digest() {
          var a,
              g,
              k,
              l,
              m,
              p,
              u,
              r,
              q = b,
              t,
              y = [],
              A,
              C;n("$digest");h.$$checkUrlChange();this === J && null !== e && (h.defer.cancel(e), B());c = null;do {
            r = !1;t = this;for (p = 0; p < v.length; p++) {
              try {
                C = v[p], C.scope.$eval(C.expression, C.locals);
              } catch (F) {
                f(F);
              }c = null;
            }v.length = 0;a: do {
              if (p = t.$$watchers) for (u = p.length; u--;) {
                try {
                  if (a = p[u]) if (m = a.get, (g = m(t)) !== (k = a.last) && !(a.eq ? na(g, k) : "number" === typeof g && "number" === typeof k && isNaN(g) && isNaN(k))) r = !0, c = a, a.last = a.eq ? pa(g, null) : g, l = a.fn, l(g, k === s ? g : k, t), 5 > q && (A = 4 - q, y[A] || (y[A] = []), y[A].push({ msg: z(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp, newVal: g, oldVal: k }));else if (a === c) {
                    r = !1;break a;
                  }
                } catch (G) {
                  f(G);
                }
              }if (!(p = t.$$watchersCount && t.$$childHead || t !== this && t.$$nextSibling)) for (; t !== this && !(p = t.$$nextSibling);) {
                t = t.$parent;
              }
            } while (t = p);if ((r || v.length) && !q--) throw J.$$phase = null, d("infdig", b, y);
          } while (r || v.length);for (J.$$phase = null; K < w.length;) {
            try {
              w[K++]();
            } catch (D) {
              f(D);
            }
          }w.length = K = 0;
        }, $destroy: function $destroy() {
          if (!this.$$destroyed) {
            var a = this.$parent;this.$broadcast("$destroy");this.$$destroyed = !0;this === J && h.$$applicationDestroyed();p(this, -this.$$watchersCount);for (var b in this.$$listenerCount) {
              u(this, this.$$listenerCount[b], b);
            }a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling);a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling);this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = A;this.$on = this.$watch = this.$watchGroup = function () {
              return A;
            };this.$$listeners = {};this.$$nextSibling = null;l(this);
          }
        }, $eval: function $eval(a, b) {
          return g(a)(this, b);
        }, $evalAsync: function $evalAsync(a, b) {
          J.$$phase || v.length || h.defer(function () {
            v.length && J.$digest();
          });v.push({ scope: this, expression: g(a), locals: b });
        }, $$postDigest: function $$postDigest(a) {
          w.push(a);
        },
        $apply: function $apply(a) {
          try {
            n("$apply");try {
              return this.$eval(a);
            } finally {
              J.$$phase = null;
            }
          } catch (b) {
            f(b);
          } finally {
            try {
              J.$digest();
            } catch (c) {
              throw f(c), c;
            }
          }
        }, $applyAsync: function $applyAsync(a) {
          function b() {
            c.$eval(a);
          }var c = this;a && t.push(b);a = g(a);r();
        }, $on: function $on(a, b) {
          var c = this.$$listeners[a];c || (this.$$listeners[a] = c = []);c.push(b);var d = this;do {
            d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
          } while (d = d.$parent);var e = this;return function () {
            var d = c.indexOf(b);-1 !== d && (c[d] = null, u(e, 1, a));
          };
        }, $emit: function $emit(a, b) {
          var c = [],
              d,
              e = this,
              g = !1,
              h = { name: a, targetScope: e, stopPropagation: function stopPropagation() {
              g = !0;
            }, preventDefault: function preventDefault() {
              h.defaultPrevented = !0;
            }, defaultPrevented: !1 },
              k = $a([h], arguments, 1),
              l,
              m;do {
            d = e.$$listeners[a] || c;h.currentScope = e;l = 0;for (m = d.length; l < m; l++) {
              if (d[l]) try {
                d[l].apply(null, k);
              } catch (n) {
                f(n);
              } else d.splice(l, 1), l--, m--;
            }if (g) return h.currentScope = null, h;e = e.$parent;
          } while (e);h.currentScope = null;return h;
        }, $broadcast: function $broadcast(a, b) {
          var c = this,
              d = this,
              e = { name: a, targetScope: this, preventDefault: function preventDefault() {
              e.defaultPrevented = !0;
            }, defaultPrevented: !1 };if (!this.$$listenerCount[a]) return e;for (var g = $a([e], arguments, 1), h, k; c = d;) {
            e.currentScope = c;d = c.$$listeners[a] || [];h = 0;for (k = d.length; h < k; h++) {
              if (d[h]) try {
                d[h].apply(null, g);
              } catch (l) {
                f(l);
              } else d.splice(h, 1), h--, k--;
            }if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (; c !== this && !(d = c.$$nextSibling);) {
              c = c.$parent;
            }
          }e.currentScope = null;return e;
        } };var J = new m(),
          v = J.$$asyncQueue = [],
          w = J.$$postDigestQueue = [],
          t = J.$$applyAsyncQueue = [],
          K = 0;return J;
    }];
  }function ne() {
    var a = /^\s*(https?|ftp|mailto|tel|file):/,
        b = /^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist = function (b) {
      return w(b) ? (a = b, this) : a;
    };this.imgSrcSanitizationWhitelist = function (a) {
      return w(a) ? (b = a, this) : b;
    };this.$get = function () {
      return function (d, c) {
        var e = c ? b : a,
            f;f = Y(d).href;return "" === f || f.match(e) ? d : "unsafe:" + f;
      };
    };
  }function og(a) {
    if ("self" === a) return a;if (G(a)) {
      if (-1 < a.indexOf("***")) throw sa("iwcard", a);a = wd(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");return new RegExp("^" + a + "$");
    }if (Wa(a)) return new RegExp("^" + a.source + "$");throw sa("imatcher");
  }function xd(a) {
    var b = [];w(a) && q(a, function (a) {
      b.push(og(a));
    });return b;
  }function zf() {
    this.SCE_CONTEXTS = la;var a = ["self"],
        b = [];this.resourceUrlWhitelist = function (b) {
      arguments.length && (a = xd(b));return a;
    };this.resourceUrlBlacklist = function (a) {
      arguments.length && (b = xd(a));return b;
    };this.$get = ["$injector", function (d) {
      function c(a, b) {
        return "self" === a ? id(b) : !!a.exec(b.href);
      }function e(a) {
        var b = function b(a) {
          this.$$unwrapTrustedValue = function () {
            return a;
          };
        };a && (b.prototype = new a());b.prototype.valueOf = function () {
          return this.$$unwrapTrustedValue();
        };b.prototype.toString = function () {
          return this.$$unwrapTrustedValue().toString();
        };return b;
      }var f = function f(a) {
        throw sa("unsafe");
      };d.has("$sanitize") && (f = d.get("$sanitize"));var g = e(),
          h = {};h[la.HTML] = e(g);h[la.CSS] = e(g);h[la.URL] = e(g);h[la.JS] = e(g);h[la.RESOURCE_URL] = e(h[la.URL]);return { trustAs: function trustAs(a, b) {
          var c = h.hasOwnProperty(a) ? h[a] : null;if (!c) throw sa("icontext", a, b);if (null === b || y(b) || "" === b) return b;if ("string" !== typeof b) throw sa("itype", a);return new c(b);
        }, getTrusted: function getTrusted(d, e) {
          if (null === e || y(e) || "" === e) return e;var g = h.hasOwnProperty(d) ? h[d] : null;if (g && e instanceof g) return e.$$unwrapTrustedValue();if (d === la.RESOURCE_URL) {
            var g = Y(e.toString()),
                n,
                p,
                u = !1;n = 0;for (p = a.length; n < p; n++) {
              if (c(a[n], g)) {
                u = !0;break;
              }
            }if (u) for (n = 0, p = b.length; n < p; n++) {
              if (c(b[n], g)) {
                u = !1;break;
              }
            }if (u) return e;throw sa("insecurl", e.toString());
          }if (d === la.HTML) return f(e);throw sa("unsafe");
        }, valueOf: function valueOf(a) {
          return a instanceof g ? a.$$unwrapTrustedValue() : a;
        } };
    }];
  }function yf() {
    var a = !0;this.enabled = function (b) {
      arguments.length && (a = !!b);return a;
    };this.$get = ["$parse", "$sceDelegate", function (b, d) {
      if (a && 8 > Ea) throw sa("iequirks");var c = ia(la);c.isEnabled = function () {
        return a;
      };c.trustAs = d.trustAs;c.getTrusted = d.getTrusted;c.valueOf = d.valueOf;a || (c.trustAs = c.getTrusted = function (a, b) {
        return b;
      }, c.valueOf = Xa);c.parseAs = function (a, d) {
        var e = b(d);return e.literal && e.constant ? e : b(d, function (b) {
          return c.getTrusted(a, b);
        });
      };var e = c.parseAs,
          f = c.getTrusted,
          g = c.trustAs;q(la, function (a, b) {
        var d = Q(b);c[db("parse_as_" + d)] = function (b) {
          return e(a, b);
        };c[db("get_trusted_" + d)] = function (b) {
          return f(a, b);
        };c[db("trust_as_" + d)] = function (b) {
          return g(a, b);
        };
      });return c;
    }];
  }function Af() {
    this.$get = ["$window", "$document", function (a, b) {
      var d = {},
          c = !(a.chrome && a.chrome.app && a.chrome.app.runtime) && a.history && a.history.pushState,
          e = Z((/android (\d+)/.exec(Q((a.navigator || {}).userAgent)) || [])[1]),
          f = /Boxee/i.test((a.navigator || {}).userAgent),
          g = b[0] || {},
          h,
          k = /^(Moz|webkit|ms)(?=[A-Z])/,
          l = g.body && g.body.style,
          m = !1,
          n = !1;if (l) {
        for (var p in l) {
          if (m = k.exec(p)) {
            h = m[0];h = h[0].toUpperCase() + h.substr(1);break;
          }
        }h || (h = "WebkitOpacity" in l && "webkit");m = !!("transition" in l || h + "Transition" in l);n = !!("animation" in l || h + "Animation" in l);!e || m && n || (m = G(l.webkitTransition), n = G(l.webkitAnimation));
      }return { history: !(!c || 4 > e || f), hasEvent: function hasEvent(a) {
          if ("input" === a && 11 >= Ea) return !1;if (y(d[a])) {
            var b = g.createElement("div");d[a] = "on" + a in b;
          }return d[a];
        }, csp: Ba(), vendorPrefix: h, transitions: m, animations: n, android: e };
    }];
  }
  function Cf() {
    var a;this.httpOptions = function (b) {
      return b ? (a = b, this) : a;
    };this.$get = ["$templateCache", "$http", "$q", "$sce", function (b, d, c, e) {
      function f(g, h) {
        f.totalPendingRequests++;if (!G(g) || y(b.get(g))) g = e.getTrustedResourceUrl(g);var k = d.defaults && d.defaults.transformResponse;L(k) ? k = k.filter(function (a) {
          return a !== dc;
        }) : k === dc && (k = null);return d.get(g, S({ cache: b, transformResponse: k }, a))["finally"](function () {
          f.totalPendingRequests--;
        }).then(function (a) {
          b.put(g, a.data);return a.data;
        }, function (a) {
          if (!h) throw pg("tpload", g, a.status, a.statusText);return c.reject(a);
        });
      }f.totalPendingRequests = 0;return f;
    }];
  }function Df() {
    this.$get = ["$rootScope", "$browser", "$location", function (a, b, d) {
      return { findBindings: function findBindings(a, b, d) {
          a = a.getElementsByClassName("ng-binding");var g = [];q(a, function (a) {
            var c = ca.element(a).data("$binding");c && q(c, function (c) {
              d ? new RegExp("(^|\\s)" + wd(b) + "(\\s|\\||$)").test(c) && g.push(a) : -1 != c.indexOf(b) && g.push(a);
            });
          });return g;
        }, findModels: function findModels(a, b, d) {
          for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
            var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');if (k.length) return k;
          }
        }, getLocation: function getLocation() {
          return d.url();
        }, setLocation: function setLocation(b) {
          b !== d.url() && (d.url(b), a.$digest());
        }, whenStable: function whenStable(a) {
          b.notifyWhenNoOutstandingRequests(a);
        } };
    }];
  }function Ef() {
    this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, d, c, e) {
      function f(f, k, l) {
        z(f) || (l = k, k = f, f = A);var m = va.call(arguments, 3),
            n = w(l) && !l,
            p = (n ? c : d).defer(),
            u = p.promise,
            q;q = b.defer(function () {
          try {
            p.resolve(f.apply(null, m));
          } catch (b) {
            p.reject(b), e(b);
          } finally {
            delete g[u.$$timeoutId];
          }n || a.$apply();
        }, k);u.$$timeoutId = q;g[q] = p;return u;
      }var g = {};f.cancel = function (a) {
        return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1;
      };return f;
    }];
  }function Y(a) {
    Ea && ($.setAttribute("href", a), a = $.href);$.setAttribute("href", a);return { href: $.href, protocol: $.protocol ? $.protocol.replace(/:$/, "") : "", host: $.host, search: $.search ? $.search.replace(/^\?/, "") : "", hash: $.hash ? $.hash.replace(/^#/, "") : "", hostname: $.hostname, port: $.port, pathname: "/" === $.pathname.charAt(0) ? $.pathname : "/" + $.pathname };
  }function id(a) {
    a = G(a) ? Y(a) : a;return a.protocol === yd.protocol && a.host === yd.host;
  }function Ff() {
    this.$get = ha(C);
  }function zd(a) {
    function b(a) {
      try {
        return decodeURIComponent(a);
      } catch (b) {
        return a;
      }
    }var d = a[0] || {},
        c = {},
        e = "";return function () {
      var a, g, h, k, l;a = d.cookie || "";if (a !== e) for (e = a, a = e.split("; "), c = {}, h = 0; h < a.length; h++) {
        g = a[h], k = g.indexOf("="), 0 < k && (l = b(g.substring(0, k)), y(c[l]) && (c[l] = b(g.substring(k + 1))));
      }return c;
    };
  }function Jf() {
    this.$get = zd;
  }function Mc(a) {
    function b(d, c) {
      if (D(d)) {
        var e = {};q(d, function (a, c) {
          e[c] = b(c, a);
        });return e;
      }return a.factory(d + "Filter", c);
    }this.register = b;this.$get = ["$injector", function (a) {
      return function (b) {
        return a.get(b + "Filter");
      };
    }];b("currency", Ad);b("date", Bd);b("filter", qg);b("json", rg);b("limitTo", sg);b("lowercase", tg);b("number", Cd);b("orderBy", Dd);b("uppercase", ug);
  }function qg() {
    return function (a, b, d, c) {
      if (!ta(a)) {
        if (null == a) return a;throw N("filter")("notarray", a);
      }c = c || "$";var e;switch (lc(b)) {case "function":
          break;case "boolean":case "null":case "number":case "string":
          e = !0;case "object":
          b = vg(b, d, c, e);break;default:
          return a;}return Array.prototype.filter.call(a, b);
    };
  }function vg(a, b, d, c) {
    var e = D(a) && d in a;!0 === b ? b = na : z(b) || (b = function b(a, _b) {
      if (y(a)) return !1;if (null === a || null === _b) return a === _b;if (D(_b) || D(a) && !vc(a)) return !1;a = Q("" + a);_b = Q("" + _b);return -1 !== a.indexOf(_b);
    });return function (f) {
      return e && !D(f) ? La(f, a[d], b, d, !1) : La(f, a, b, d, c);
    };
  }function La(a, b, d, c, e, f) {
    var g = lc(a),
        h = lc(b);if ("string" === h && "!" === b.charAt(0)) return !La(a, b.substring(1), d, c, e);if (L(a)) return a.some(function (a) {
      return La(a, b, d, c, e);
    });switch (g) {case "object":
        var k;if (e) {
          for (k in a) {
            if ("$" !== k.charAt(0) && La(a[k], b, d, c, !0)) return !0;
          }return f ? !1 : La(a, b, d, c, !1);
        }if ("object" === h) {
          for (k in b) {
            if (f = b[k], !z(f) && !y(f) && (g = k === c, !La(g ? a : a[k], f, d, c, g, g))) return !1;
          }return !0;
        }return d(a, b);case "function":
        return !1;default:
        return d(a, b);}
  }function lc(a) {
    return null === a ? "null" : typeof a === "undefined" ? "undefined" : _typeof(a);
  }function Ad(a) {
    var b = a.NUMBER_FORMATS;return function (a, c, e) {
      y(c) && (c = b.CURRENCY_SYM);y(e) && (e = b.PATTERNS[1].maxFrac);return null == a ? a : Ed(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, e).replace(/\u00A4/g, c);
    };
  }function Cd(a) {
    var b = a.NUMBER_FORMATS;return function (a, c) {
      return null == a ? a : Ed(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
    };
  }function wg(a) {
    var b = 0,
        d,
        c,
        e,
        f,
        g;-1 < (c = a.indexOf(Fd)) && (a = a.replace(Fd, ""));0 < (e = a.search(/e/i)) ? (0 > c && (c = e), c += +a.slice(e + 1), a = a.substring(0, e)) : 0 > c && (c = a.length);for (e = 0; a.charAt(e) == mc; e++) {}
    if (e == (g = a.length)) d = [0], c = 1;else {
      for (g--; a.charAt(g) == mc;) {
        g--;
      }c -= e;d = [];for (f = 0; e <= g; e++, f++) {
        d[f] = +a.charAt(e);
      }
    }c > Gd && (d = d.splice(0, Gd - 1), b = c - 1, c = 1);return { d: d, e: b, i: c };
  }function xg(a, b, d, c) {
    var e = a.d,
        f = e.length - a.i;b = y(b) ? Math.min(Math.max(d, f), c) : +b;d = b + a.i;c = e[d];if (0 < d) {
      e.splice(Math.max(a.i, d));for (var g = d; g < e.length; g++) {
        e[g] = 0;
      }
    } else for (f = Math.max(0, f), a.i = 1, e.length = Math.max(1, d = b + 1), e[0] = 0, g = 1; g < d; g++) {
      e[g] = 0;
    }if (5 <= c) if (0 > d - 1) {
      for (c = 0; c > d; c--) {
        e.unshift(0), a.i++;
      }e.unshift(1);a.i++;
    } else e[d - 1]++;
    for (; f < Math.max(0, b); f++) {
      e.push(0);
    }if (b = e.reduceRight(function (a, b, c, d) {
      b += a;d[c] = b % 10;return Math.floor(b / 10);
    }, 0)) e.unshift(b), a.i++;
  }function Ed(a, b, d, c, e) {
    if (!G(a) && !T(a) || isNaN(a)) return "";var f = !isFinite(a),
        g = !1,
        h = Math.abs(a) + "",
        k = "";if (f) k = "\u221E";else {
      g = wg(h);xg(g, e, b.minFrac, b.maxFrac);k = g.d;h = g.i;e = g.e;f = [];for (g = k.reduce(function (a, b) {
        return a && !b;
      }, !0); 0 > h;) {
        k.unshift(0), h++;
      }0 < h ? f = k.splice(h, k.length) : (f = k, k = [0]);h = [];for (k.length >= b.lgSize && h.unshift(k.splice(-b.lgSize, k.length).join("")); k.length > b.gSize;) {
        h.unshift(k.splice(-b.gSize, k.length).join(""));
      }k.length && h.unshift(k.join(""));k = h.join(d);f.length && (k += c + f.join(""));e && (k += "e+" + e);
    }return 0 > a && !g ? b.negPre + k + b.negSuf : b.posPre + k + b.posSuf;
  }function Kb(a, b, d, c) {
    var e = "";if (0 > a || c && 0 >= a) c ? a = -a + 1 : (a = -a, e = "-");for (a = "" + a; a.length < b;) {
      a = mc + a;
    }d && (a = a.substr(a.length - b));return e + a;
  }function ba(a, b, d, c, e) {
    d = d || 0;return function (f) {
      f = f["get" + a]();if (0 < d || f > -d) f += d;0 === f && -12 == d && (f = 12);return Kb(f, b, c, e);
    };
  }function kb(a, b, d) {
    return function (c, e) {
      var f = c["get" + a](),
          g = ub((d ? "STANDALONE" : "") + (b ? "SHORT" : "") + a);return e[g][f];
    };
  }function Hd(a) {
    var b = new Date(a, 0, 1).getDay();return new Date(a, 0, (4 >= b ? 5 : 12) - b);
  }function Id(a) {
    return function (b) {
      var d = Hd(b.getFullYear());b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;b = 1 + Math.round(b / 6048E5);return Kb(b, a);
    };
  }function nc(a, b) {
    return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1];
  }function Bd(a) {
    function b(a) {
      var b;if (b = a.match(d)) {
        a = new Date(0);var f = 0,
            g = 0,
            h = b[8] ? a.setUTCFullYear : a.setFullYear,
            k = b[8] ? a.setUTCHours : a.setHours;b[9] && (f = Z(b[9] + b[10]), g = Z(b[9] + b[11]));h.call(a, Z(b[1]), Z(b[2]) - 1, Z(b[3]));f = Z(b[4] || 0) - f;g = Z(b[5] || 0) - g;h = Z(b[6] || 0);b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));k.call(a, f, g, h, b);
      }return a;
    }var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function (c, d, f) {
      var g = "",
          h = [],
          k,
          l;d = d || "mediumDate";d = a.DATETIME_FORMATS[d] || d;G(c) && (c = yg.test(c) ? Z(c) : b(c));T(c) && (c = new Date(c));if (!da(c) || !isFinite(c.getTime())) return c;
      for (; d;) {
        (l = zg.exec(d)) ? (h = $a(h, l, 1), d = h.pop()) : (h.push(d), d = null);
      }var m = c.getTimezoneOffset();f && (m = yc(f, m), c = Sb(c, f, !0));q(h, function (b) {
        k = Ag[b];g += k ? k(c, a.DATETIME_FORMATS, m) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'");
      });return g;
    };
  }function rg() {
    return function (a, b) {
      y(b) && (b = 2);return bb(a, b);
    };
  }function sg() {
    return function (a, b, d) {
      b = Infinity === Math.abs(Number(b)) ? Number(b) : Z(b);if (isNaN(b)) return a;T(a) && (a = a.toString());if (!ta(a)) return a;d = !d || isNaN(d) ? 0 : Z(d);d = 0 > d ? Math.max(0, a.length + d) : d;return 0 <= b ? oc(a, d, d + b) : 0 === d ? oc(a, b, a.length) : oc(a, Math.max(0, d + b), d);
    };
  }function oc(a, b, d) {
    return G(a) ? a.slice(b, d) : va.call(a, b, d);
  }function Dd(a) {
    function b(b) {
      return b.map(function (b) {
        var c = 1,
            d = Xa;if (z(b)) d = b;else if (G(b)) {
          if ("+" == b.charAt(0) || "-" == b.charAt(0)) c = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1);if ("" !== b && (d = a(b), d.constant)) var e = d(),
              d = function d(a) {
            return a[e];
          };
        }return { get: d, descending: c };
      });
    }function d(a) {
      switch (typeof a === "undefined" ? "undefined" : _typeof(a)) {case "number":case "boolean":case "string":
          return !0;default:
          return !1;}
    }
    function c(a, b) {
      var c = 0,
          d = a.type,
          k = b.type;if (d === k) {
        var k = a.value,
            l = b.value;"string" === d ? (k = k.toLowerCase(), l = l.toLowerCase()) : "object" === d && (D(k) && (k = a.index), D(l) && (l = b.index));k !== l && (c = k < l ? -1 : 1);
      } else c = d < k ? -1 : 1;return c;
    }return function (a, f, g, h) {
      if (null == a) return a;if (!ta(a)) throw N("orderBy")("notarray", a);L(f) || (f = [f]);0 === f.length && (f = ["+"]);var k = b(f),
          l = g ? -1 : 1,
          m = z(h) ? h : c;a = Array.prototype.map.call(a, function (a, b) {
        return { value: a, tieBreaker: { value: b, type: "number", index: b }, predicateValues: k.map(function (c) {
            var e = c.get(a);c = typeof e === "undefined" ? "undefined" : _typeof(e);if (null === e) c = "string", e = "null";else if ("object" === c) a: {
              if (z(e.valueOf) && (e = e.valueOf(), d(e))) break a;vc(e) && (e = e.toString(), d(e));
            }return { value: e, type: c, index: b };
          }) };
      });a.sort(function (a, b) {
        for (var c = 0, d = k.length; c < d; c++) {
          var e = m(a.predicateValues[c], b.predicateValues[c]);if (e) return e * k[c].descending * l;
        }return m(a.tieBreaker, b.tieBreaker) * l;
      });return a = a.map(function (a) {
        return a.value;
      });
    };
  }function Ta(a) {
    z(a) && (a = { link: a });a.restrict = a.restrict || "AC";return ha(a);
  }function Jd(a, b, d, c, e) {
    var f = this,
        g = [];f.$error = {};f.$$success = {};f.$pending = void 0;f.$name = e(b.name || b.ngForm || "")(d);f.$dirty = !1;f.$pristine = !0;f.$valid = !0;f.$invalid = !1;f.$submitted = !1;f.$$parentForm = Lb;f.$rollbackViewValue = function () {
      q(g, function (a) {
        a.$rollbackViewValue();
      });
    };f.$commitViewValue = function () {
      q(g, function (a) {
        a.$commitViewValue();
      });
    };f.$addControl = function (a) {
      Qa(a.$name, "input");g.push(a);a.$name && (f[a.$name] = a);a.$$parentForm = f;
    };f.$$renameControl = function (a, b) {
      var c = a.$name;f[c] === a && delete f[c];f[b] = a;a.$name = b;
    };f.$removeControl = function (a) {
      a.$name && f[a.$name] === a && delete f[a.$name];q(f.$pending, function (b, c) {
        f.$setValidity(c, null, a);
      });q(f.$error, function (b, c) {
        f.$setValidity(c, null, a);
      });q(f.$$success, function (b, c) {
        f.$setValidity(c, null, a);
      });Za(g, a);a.$$parentForm = Lb;
    };Kd({ ctrl: this, $element: a, set: function set(a, b, c) {
        var d = a[b];d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c];
      }, unset: function unset(a, b, c) {
        var d = a[b];d && (Za(d, c), 0 === d.length && delete a[b]);
      }, $animate: c });f.$setDirty = function () {
      c.removeClass(a, Ua);c.addClass(a, Mb);f.$dirty = !0;f.$pristine = !1;f.$$parentForm.$setDirty();
    };f.$setPristine = function () {
      c.setClass(a, Ua, Mb + " ng-submitted");f.$dirty = !1;f.$pristine = !0;f.$submitted = !1;q(g, function (a) {
        a.$setPristine();
      });
    };f.$setUntouched = function () {
      q(g, function (a) {
        a.$setUntouched();
      });
    };f.$setSubmitted = function () {
      c.addClass(a, "ng-submitted");f.$submitted = !0;f.$$parentForm.$setSubmitted();
    };
  }function pc(a) {
    a.$formatters.push(function (b) {
      return a.$isEmpty(b) ? b : b.toString();
    });
  }function lb(a, b, d, c, e, f) {
    var g = Q(b[0].type);if (!e.android) {
      var h = !1;b.on("compositionstart", function () {
        h = !0;
      });b.on("compositionend", function () {
        h = !1;l();
      });
    }var k,
        l = function l(a) {
      k && (f.defer.cancel(k), k = null);if (!h) {
        var e = b.val();a = a && a.type;"password" === g || d.ngTrim && "false" === d.ngTrim || (e = W(e));(c.$viewValue !== e || "" === e && c.$$hasNativeValidators) && c.$setViewValue(e, a);
      }
    };if (e.hasEvent("input")) b.on("input", l);else {
      var m = function m(a, b, c) {
        k || (k = f.defer(function () {
          k = null;b && b.value === c || l(a);
        }));
      };b.on("keydown", function (a) {
        var b = a.keyCode;91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value);
      });if (e.hasEvent("paste")) b.on("paste cut", m);
    }b.on("change", l);if (Ld[g] && c.$$hasNativeValidators && g === d.type) b.on("keydown wheel mousedown", function (a) {
      if (!k) {
        var b = this.validity,
            c = b.badInput,
            d = b.typeMismatch;k = f.defer(function () {
          k = null;b.badInput === c && b.typeMismatch === d || l(a);
        });
      }
    });c.$render = function () {
      var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;b.val() !== a && b.val(a);
    };
  }function Nb(a, b) {
    return function (d, c) {
      var e, f;if (da(d)) return d;if (G(d)) {
        '"' == d.charAt(0) && '"' == d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));if (Bg.test(d)) return new Date(d);a.lastIndex = 0;if (e = a.exec(d)) return e.shift(), f = c ? { yyyy: c.getFullYear(), MM: c.getMonth() + 1, dd: c.getDate(), HH: c.getHours(), mm: c.getMinutes(), ss: c.getSeconds(), sss: c.getMilliseconds() / 1E3 } : { yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0 }, q(e, function (a, c) {
          c < b.length && (f[b[c]] = +a);
        }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0);
      }return NaN;
    };
  }function mb(a, b, d, c) {
    return function (e, f, g, h, k, l, m) {
      function n(a) {
        return a && !(a.getTime && a.getTime() !== a.getTime());
      }function p(a) {
        return w(a) && !da(a) ? d(a) || void 0 : a;
      }Md(e, f, g, h);lb(e, f, g, h, k, l);var u = h && h.$options && h.$options.timezone,
          q;h.$$parserName = a;h.$parsers.push(function (a) {
        if (h.$isEmpty(a)) return null;if (b.test(a)) return a = d(a, q), u && (a = Sb(a, u)), a;
      });h.$formatters.push(function (a) {
        if (a && !da(a)) throw nb("datefmt", a);if (n(a)) return (q = a) && u && (q = Sb(q, u, !0)), m("date")(a, c, u);q = null;return "";
      });if (w(g.min) || g.ngMin) {
        var s;h.$validators.min = function (a) {
          return !n(a) || y(s) || d(a) >= s;
        };g.$observe("min", function (a) {
          s = p(a);h.$validate();
        });
      }if (w(g.max) || g.ngMax) {
        var r;h.$validators.max = function (a) {
          return !n(a) || y(r) || d(a) <= r;
        };g.$observe("max", function (a) {
          r = p(a);h.$validate();
        });
      }
    };
  }function Md(a, b, d, c) {
    (c.$$hasNativeValidators = D(b[0].validity)) && c.$parsers.push(function (a) {
      var c = b.prop("validity") || {};return c.badInput || c.typeMismatch ? void 0 : a;
    });
  }function Nd(a, b, d, c, e) {
    if (w(c)) {
      a = a(c);if (!a.constant) throw nb("constexpr", d, c);return a(b);
    }return e;
  }function qc(a, b) {
    a = "ngClass" + a;return ["$animate", function (d) {
      function c(a, b) {
        var c = [],
            d = 0;a: for (; d < a.length; d++) {
          for (var e = a[d], m = 0; m < b.length; m++) {
            if (e == b[m]) continue a;
          }c.push(e);
        }return c;
      }function e(a) {
        var b = [];return L(a) ? (q(a, function (a) {
          b = b.concat(e(a));
        }), b) : G(a) ? a.split(" ") : D(a) ? (q(a, function (a, c) {
          a && (b = b.concat(c.split(" ")));
        }), b) : a;
      }return { restrict: "AC", link: function link(f, g, h) {
          function k(a) {
            a = l(a, 1);h.$addClass(a);
          }function l(a, b) {
            var c = g.data("$classCounts") || U(),
                d = [];q(a, function (a) {
              if (0 < b || c[a]) c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
            });g.data("$classCounts", c);return d.join(" ");
          }
          function m(a, b) {
            var e = c(b, a),
                f = c(a, b),
                e = l(e, 1),
                f = l(f, -1);e && e.length && d.addClass(g, e);f && f.length && d.removeClass(g, f);
          }function n(a) {
            if (!0 === b || (f.$index & 1) === b) {
              var c = e(a || []);if (!p) k(c);else if (!na(a, p)) {
                var d = e(p);m(d, c);
              }
            }p = L(a) ? a.map(function (a) {
              return ia(a);
            }) : ia(a);
          }var p;f.$watch(h[a], n, !0);h.$observe("class", function (b) {
            n(f.$eval(h[a]));
          });"ngClass" !== a && f.$watch("$index", function (c, d) {
            var g = c & 1;if (g !== (d & 1)) {
              var m = e(f.$eval(h[a]));g === b ? k(m) : (g = l(m, -1), h.$removeClass(g));
            }
          });
        } };
    }];
  }function Kd(a) {
    function b(a, b) {
      b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1);
    }function d(a, c) {
      a = a ? "-" + Cc(a, "-") : "";b(ob + a, !0 === c);b(Od + a, !1 === c);
    }var c = a.ctrl,
        e = a.$element,
        f = {},
        g = a.set,
        h = a.unset,
        k = a.$animate;f[Od] = !(f[ob] = e.hasClass(ob));c.$setValidity = function (a, e, f) {
      y(e) ? (c.$pending || (c.$pending = {}), g(c.$pending, a, f)) : (c.$pending && h(c.$pending, a, f), Pd(c.$pending) && (c.$pending = void 0));Ga(e) ? e ? (h(c.$error, a, f), g(c.$$success, a, f)) : (g(c.$error, a, f), h(c.$$success, a, f)) : (h(c.$error, a, f), h(c.$$success, a, f));c.$pending ? (b(Qd, !0), c.$valid = c.$invalid = void 0, d("", null)) : (b(Qd, !1), c.$valid = Pd(c.$error), c.$invalid = !c.$valid, d("", c.$valid));e = c.$pending && c.$pending[a] ? void 0 : c.$error[a] ? !1 : c.$$success[a] ? !0 : null;d(a, e);c.$$parentForm.$setValidity(a, e, c);
    };
  }function Pd(a) {
    if (a) for (var b in a) {
      if (a.hasOwnProperty(b)) return !1;
    }return !0;
  }var Cg = /^\/(.+)\/([a-z]*)$/,
      ua = Object.prototype.hasOwnProperty,
      Q = function Q(a) {
    return G(a) ? a.toLowerCase() : a;
  },
      ub = function ub(a) {
    return G(a) ? a.toUpperCase() : a;
  },
      Ea,
      F,
      qa,
      va = [].slice,
      bg = [].splice,
      Dg = [].push,
      ma = Object.prototype.toString,
      wc = Object.getPrototypeOf,
      xa = N("ng"),
      ca = C.angular || (C.angular = {}),
      Ub,
      pb = 0;Ea = C.document.documentMode;A.$inject = [];Xa.$inject = [];var L = Array.isArray,
      ae = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
      W = function W(a) {
    return G(a) ? a.trim() : a;
  },
      wd = function wd(a) {
    return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
  },
      Ba = function Ba() {
    if (!w(Ba.rules)) {
      var a = C.document.querySelector("[ng-csp]") || C.document.querySelector("[data-ng-csp]");if (a) {
        var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");Ba.rules = { noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"), noInlineStyle: !b || -1 !== b.indexOf("no-inline-style") };
      } else {
        a = Ba;try {
          new Function(""), b = !1;
        } catch (d) {
          b = !0;
        }a.rules = { noUnsafeEval: b, noInlineStyle: !1 };
      }
    }return Ba.rules;
  },
      rb = function rb() {
    if (w(rb.name_)) return rb.name_;var a,
        b,
        d = Na.length,
        c,
        e;for (b = 0; b < d; ++b) {
      if (c = Na[b], a = C.document.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
        e = a.getAttribute(c + "jq");break;
      }
    }return rb.name_ = e;
  },
      de = /:/g,
      Na = ["ng-", "data-ng-", "ng:", "x-ng-"],
      ie = /[A-Z]/g,
      Dc = !1,
      Ma = 3,
      me = { full: "1.5.8", major: 1, minor: 5, dot: 8, codeName: "arbitrary-fallbacks" };O.expando = "ng339";var fb = O.cache = {},
      Pf = 1;O._data = function (a) {
    return this.cache[a[this.expando]] || {};
  };var Kf = /([\:\-\_]+(.))/g,
      Lf = /^moz([A-Z])/,
      yb = { mouseleave: "mouseout", mouseenter: "mouseover" },
      Wb = N("jqLite"),
      Of = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      Vb = /<|&#?\w+;/,
      Mf = /<([\w:-]+)/,
      Nf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      ja = { option: [1, '<select multiple="multiple">', "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ja.optgroup = ja.option;ja.tbody = ja.tfoot = ja.colgroup = ja.caption = ja.thead;ja.th = ja.td;var Uf = C.Node.prototype.contains || function (a) {
    return !!(this.compareDocumentPosition(a) & 16);
  },
      Oa = O.prototype = { ready: function ready(a) {
      function b() {
        d || (d = !0, a());
      }var d = !1;"complete" === C.document.readyState ? C.setTimeout(b) : (this.on("DOMContentLoaded", b), O(C).on("load", b));
    }, toString: function toString() {
      var a = [];q(this, function (b) {
        a.push("" + b);
      });return "[" + a.join(", ") + "]";
    }, eq: function eq(a) {
      return 0 <= a ? F(this[a]) : F(this[this.length + a]);
    }, length: 0, push: Dg, sort: [].sort, splice: [].splice },
      Eb = {};q("multiple selected checked disabled readOnly required open".split(" "), function (a) {
    Eb[Q(a)] = a;
  });var Vc = {};q("input select option textarea button form details".split(" "), function (a) {
    Vc[a] = !0;
  });var bd = { ngMinlength: "minlength",
    ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern" };q({ data: Yb, removeData: eb, hasData: function hasData(a) {
      for (var b in fb[a.ng339]) {
        return !0;
      }return !1;
    }, cleanData: function cleanData(a) {
      for (var b = 0, d = a.length; b < d; b++) {
        eb(a[b]);
      }
    } }, function (a, b) {
    O[b] = a;
  });q({ data: Yb, inheritedData: Cb, scope: function scope(a) {
      return F.data(a, "$scope") || Cb(a.parentNode || a, ["$isolateScope", "$scope"]);
    }, isolateScope: function isolateScope(a) {
      return F.data(a, "$isolateScope") || F.data(a, "$isolateScopeNoTemplate");
    }, controller: Sc, injector: function injector(a) {
      return Cb(a, "$injector");
    }, removeAttr: function removeAttr(a, b) {
      a.removeAttribute(b);
    }, hasClass: zb, css: function css(a, b, d) {
      b = db(b);if (w(d)) a.style[b] = d;else return a.style[b];
    }, attr: function attr(a, b, d) {
      var c = a.nodeType;if (c !== Ma && 2 !== c && 8 !== c) if (c = Q(b), Eb[c]) {
        if (w(d)) d ? (a[b] = !0, a.setAttribute(b, c)) : (a[b] = !1, a.removeAttribute(c));else return a[b] || (a.attributes.getNamedItem(b) || A).specified ? c : void 0;
      } else if (w(d)) a.setAttribute(b, d);else if (a.getAttribute) return a = a.getAttribute(b, 2), null === a ? void 0 : a;
    }, prop: function prop(a, b, d) {
      if (w(d)) a[b] = d;else return a[b];
    }, text: function () {
      function a(a, d) {
        if (y(d)) {
          var c = a.nodeType;return 1 === c || c === Ma ? a.textContent : "";
        }a.textContent = d;
      }a.$dv = "";return a;
    }(), val: function val(a, b) {
      if (y(b)) {
        if (a.multiple && "select" === wa(a)) {
          var d = [];q(a.options, function (a) {
            a.selected && d.push(a.value || a.text);
          });return 0 === d.length ? null : d;
        }return a.value;
      }a.value = b;
    }, html: function html(a, b) {
      if (y(b)) return a.innerHTML;wb(a, !0);a.innerHTML = b;
    }, empty: Tc }, function (a, b) {
    O.prototype[b] = function (b, c) {
      var e,
          f,
          g = this.length;if (a !== Tc && y(2 == a.length && a !== zb && a !== Sc ? b : c)) {
        if (D(b)) {
          for (e = 0; e < g; e++) {
            if (a === Yb) a(this[e], b);else for (f in b) {
              a(this[e], f, b[f]);
            }
          }return this;
        }e = a.$dv;g = y(e) ? Math.min(g, 1) : g;for (f = 0; f < g; f++) {
          var h = a(this[f], b, c);e = e ? e + h : h;
        }return e;
      }for (e = 0; e < g; e++) {
        a(this[e], b, c);
      }return this;
    };
  });q({ removeData: eb, on: function on(a, b, d, c) {
      if (w(c)) throw Wb("onargs");if (Nc(a)) {
        c = xb(a, !0);var e = c.events,
            f = c.handle;f || (f = c.handle = Rf(a, e));c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];for (var g = c.length, h = function h(b, c, g) {
          var h = e[b];h || (h = e[b] = [], h.specialHandlerWrapper = c, "$destroy" === b || g || a.addEventListener(b, f, !1));h.push(d);
        }; g--;) {
          b = c[g], yb[b] ? (h(yb[b], Tf), h(b, void 0, !0)) : h(b);
        }
      }
    }, off: Rc, one: function one(a, b, d) {
      a = F(a);a.on(b, function e() {
        a.off(b, d);a.off(b, e);
      });a.on(b, d);
    }, replaceWith: function replaceWith(a, b) {
      var d,
          c = a.parentNode;wb(a);q(new O(b), function (b) {
        d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);d = b;
      });
    }, children: function children(a) {
      var b = [];q(a.childNodes, function (a) {
        1 === a.nodeType && b.push(a);
      });return b;
    }, contents: function contents(a) {
      return a.contentDocument || a.childNodes || [];
    }, append: function append(a, b) {
      var d = a.nodeType;if (1 === d || 11 === d) {
        b = new O(b);for (var d = 0, c = b.length; d < c; d++) {
          a.appendChild(b[d]);
        }
      }
    }, prepend: function prepend(a, b) {
      if (1 === a.nodeType) {
        var d = a.firstChild;q(new O(b), function (b) {
          a.insertBefore(b, d);
        });
      }
    }, wrap: function wrap(a, b) {
      Pc(a, F(b).eq(0).clone()[0]);
    }, remove: Db, detach: function detach(a) {
      Db(a, !0);
    }, after: function after(a, b) {
      var d = a,
          c = a.parentNode;b = new O(b);for (var e = 0, f = b.length; e < f; e++) {
        var g = b[e];c.insertBefore(g, d.nextSibling);d = g;
      }
    }, addClass: Bb, removeClass: Ab, toggleClass: function toggleClass(a, b, d) {
      b && q(b.split(" "), function (b) {
        var e = d;y(e) && (e = !zb(a, b));(e ? Bb : Ab)(a, b);
      });
    }, parent: function parent(a) {
      return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
    }, next: function next(a) {
      return a.nextElementSibling;
    }, find: function find(a, b) {
      return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
    }, clone: Xb, triggerHandler: function triggerHandler(a, b, d) {
      var c,
          e,
          f = b.type || b,
          g = xb(a);if (g = (g = g && g.events) && g[f]) c = { preventDefault: function preventDefault() {
          this.defaultPrevented = !0;
        }, isDefaultPrevented: function isDefaultPrevented() {
          return !0 === this.defaultPrevented;
        }, stopImmediatePropagation: function stopImmediatePropagation() {
          this.immediatePropagationStopped = !0;
        }, isImmediatePropagationStopped: function isImmediatePropagationStopped() {
          return !0 === this.immediatePropagationStopped;
        }, stopPropagation: A, type: f, target: a }, b.type && (c = S(c, b)), b = ia(g), e = d ? [c].concat(d) : [c], q(b, function (b) {
        c.isImmediatePropagationStopped() || b.apply(a, e);
      });
    } }, function (a, b) {
    O.prototype[b] = function (b, c, e) {
      for (var f, g = 0, h = this.length; g < h; g++) {
        y(f) ? (f = a(this[g], b, c, e), w(f) && (f = F(f))) : Qc(f, a(this[g], b, c, e));
      }return w(f) ? f : this;
    };O.prototype.bind = O.prototype.on;O.prototype.unbind = O.prototype.off;
  });Ra.prototype = { put: function put(a, b) {
      this[Ca(a, this.nextUid)] = b;
    }, get: function get(a) {
      return this[Ca(a, this.nextUid)];
    }, remove: function remove(a) {
      var b = this[a = Ca(a, this.nextUid)];delete this[a];return b;
    } };var If = [function () {
    this.$get = [function () {
      return Ra;
    }];
  }],
      Wf = /^([^\(]+?)=>/,
      Xf = /^[^\(]*\(\s*([^\)]*)\)/m,
      Eg = /,/,
      Fg = /^\s*(_?)(\S+?)\1\s*$/,
      Vf = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
      Ha = N("$injector");cb.$$annotate = function (a, b, d) {
    var c;if ("function" === typeof a) {
      if (!(c = a.$inject)) {
        c = [];if (a.length) {
          if (b) throw G(d) && d || (d = a.name || Yf(a)), Ha("strictdi", d);
          b = Wc(a);q(b[1].split(Eg), function (a) {
            a.replace(Fg, function (a, b, d) {
              c.push(d);
            });
          });
        }a.$inject = c;
      }
    } else L(a) ? (b = a.length - 1, Pa(a[b], "fn"), c = a.slice(0, b)) : Pa(a, "fn", !0);return c;
  };var Rd = N("$animate"),
      $e = function $e() {
    this.$get = A;
  },
      af = function af() {
    var a = new Ra(),
        b = [];this.$get = ["$$AnimateRunner", "$rootScope", function (d, c) {
      function e(a, b, c) {
        var d = !1;b && (b = G(b) ? b.split(" ") : L(b) ? b : [], q(b, function (b) {
          b && (d = !0, a[b] = c);
        }));return d;
      }function f() {
        q(b, function (b) {
          var c = a.get(b);if (c) {
            var d = Zf(b.attr("class")),
                e = "",
                f = "";q(c, function (a, b) {
              a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b);
            });q(b, function (a) {
              e && Bb(a, e);f && Ab(a, f);
            });a.remove(b);
          }
        });b.length = 0;
      }return { enabled: A, on: A, off: A, pin: A, push: function push(g, h, k, l) {
          l && l();k = k || {};k.from && g.css(k.from);k.to && g.css(k.to);if (k.addClass || k.removeClass) if (h = k.addClass, l = k.removeClass, k = a.get(g) || {}, h = e(k, h, !0), l = e(k, l, !1), h || l) a.put(g, k), b.push(g), 1 === b.length && c.$$postDigest(f);g = new d();g.complete();return g;
        } };
    }];
  },
      Ye = ["$provide", function (a) {
    var b = this;this.$$registeredAnimations = Object.create(null);this.register = function (d, c) {
      if (d && "." !== d.charAt(0)) throw Rd("notcsel", d);var e = d + "-animation";b.$$registeredAnimations[d.substr(1)] = e;a.factory(e, c);
    };this.classNameFilter = function (a) {
      if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw Rd("nongcls", "ng-animate");return this.$$classNameFilter;
    };this.$get = ["$$animateQueue", function (a) {
      function b(a, c, d) {
        if (d) {
          var h;a: {
            for (h = 0; h < d.length; h++) {
              var k = d[h];if (1 === k.nodeType) {
                h = k;break a;
              }
            }h = void 0;
          }!h || h.parentNode || h.previousElementSibling || (d = null);
        }d ? d.after(a) : c.prepend(a);
      }return { on: a.on, off: a.off, pin: a.pin, enabled: a.enabled, cancel: function cancel(a) {
          a.end && a.end();
        }, enter: function enter(e, f, g, h) {
          f = f && F(f);g = g && F(g);f = f || g.parent();b(e, f, g);return a.push(e, "enter", Ia(h));
        }, move: function move(e, f, g, h) {
          f = f && F(f);g = g && F(g);f = f || g.parent();b(e, f, g);return a.push(e, "move", Ia(h));
        }, leave: function leave(b, c) {
          return a.push(b, "leave", Ia(c), function () {
            b.remove();
          });
        }, addClass: function addClass(b, c, g) {
          g = Ia(g);g.addClass = gb(g.addclass, c);return a.push(b, "addClass", g);
        }, removeClass: function removeClass(b, c, g) {
          g = Ia(g);g.removeClass = gb(g.removeClass, c);return a.push(b, "removeClass", g);
        }, setClass: function setClass(b, c, g, h) {
          h = Ia(h);h.addClass = gb(h.addClass, c);h.removeClass = gb(h.removeClass, g);return a.push(b, "setClass", h);
        }, animate: function animate(b, c, g, h, k) {
          k = Ia(k);k.from = k.from ? S(k.from, c) : c;k.to = k.to ? S(k.to, g) : g;k.tempClasses = gb(k.tempClasses, h || "ng-inline-animate");return a.push(b, "animate", k);
        } };
    }];
  }],
      cf = function cf() {
    this.$get = ["$$rAF", function (a) {
      function b(b) {
        d.push(b);1 < d.length || a(function () {
          for (var a = 0; a < d.length; a++) {
            d[a]();
          }d = [];
        });
      }var d = [];return function () {
        var a = !1;b(function () {
          a = !0;
        });return function (d) {
          a ? d() : b(d);
        };
      };
    }];
  },
      bf = function bf() {
    this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function (a, b, d, c, e) {
      function f(a) {
        this.setHost(a);var b = d();this._doneCallbacks = [];this._tick = function (a) {
          var d = c[0];d && d.hidden ? e(a, 0, !1) : b(a);
        };this._state = 0;
      }f.chain = function (a, b) {
        function c() {
          if (d === a.length) b(!0);else a[d](function (a) {
            !1 === a ? b(!1) : (d++, c());
          });
        }var d = 0;c();
      };f.all = function (a, b) {
        function c(f) {
          e = e && f;++d === a.length && b(e);
        }var d = 0,
            e = !0;q(a, function (a) {
          a.done(c);
        });
      };f.prototype = { setHost: function setHost(a) {
          this.host = a || {};
        }, done: function done(a) {
          2 === this._state ? a() : this._doneCallbacks.push(a);
        }, progress: A, getPromise: function getPromise() {
          if (!this.promise) {
            var b = this;this.promise = a(function (a, c) {
              b.done(function (b) {
                !1 === b ? c() : a();
              });
            });
          }return this.promise;
        }, then: function then(a, b) {
          return this.getPromise().then(a, b);
        }, "catch": function _catch(a) {
          return this.getPromise()["catch"](a);
        },
        "finally": function _finally(a) {
          return this.getPromise()["finally"](a);
        }, pause: function pause() {
          this.host.pause && this.host.pause();
        }, resume: function resume() {
          this.host.resume && this.host.resume();
        }, end: function end() {
          this.host.end && this.host.end();this._resolve(!0);
        }, cancel: function cancel() {
          this.host.cancel && this.host.cancel();this._resolve(!1);
        }, complete: function complete(a) {
          var b = this;0 === b._state && (b._state = 1, b._tick(function () {
            b._resolve(a);
          }));
        }, _resolve: function _resolve(a) {
          2 !== this._state && (q(this._doneCallbacks, function (b) {
            b(a);
          }), this._doneCallbacks.length = 0, this._state = 2);
        } };return f;
    }];
  },
      Ze = function Ze() {
    this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (a, b, d) {
      return function (b, e) {
        function f() {
          a(function () {
            g.addClass && (b.addClass(g.addClass), g.addClass = null);g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null);g.to && (b.css(g.to), g.to = null);h || k.complete();h = !0;
          });return k;
        }var g = e || {};g.$$prepared || (g = pa(g));g.cleanupStyles && (g.from = g.to = null);g.from && (b.css(g.from), g.from = null);var h,
            k = new d();return { start: f, end: f };
      };
    }];
  },
      ga = N("$compile"),
      bc = new function () {}();
  Fc.$inject = ["$provide", "$$sanitizeUriProvider"];Fb.prototype.isFirstChange = function () {
    return this.previousValue === bc;
  };var Yc = /^((?:x|data)[\:\-_])/i,
      cg = N("$controller"),
      cd = /^(\S+)(\s+as\s+([\w$]+))?$/,
      jf = function jf() {
    this.$get = ["$document", function (a) {
      return function (b) {
        b ? !b.nodeType && b instanceof F && (b = b[0]) : b = a[0].body;return b.offsetWidth + 1;
      };
    }];
  },
      dd = "application/json",
      ec = { "Content-Type": dd + ";charset=utf-8" },
      eg = /^\[|^\{(?!\{)/,
      fg = { "[": /]$/, "{": /}$/ },
      dg = /^\)\]\}',?\n/,
      Gg = N("$http"),
      hd = function hd(a) {
    return function () {
      throw Gg("legacy", a);
    };
  },
      Ka = ca.$interpolateMinErr = N("$interpolate");Ka.throwNoconcat = function (a) {
    throw Ka("noconcat", a);
  };Ka.interr = function (a, b) {
    return Ka("interr", a, b.toString());
  };var rf = function rf() {
    this.$get = ["$window", function (a) {
      function b(a) {
        var b = function b(a) {
          b.data = a;b.called = !0;
        };b.id = a;return b;
      }var d = a.angular.callbacks,
          c = {};return { createCallback: function createCallback(a) {
          a = "_" + (d.$$counter++).toString(36);var f = "angular.callbacks." + a,
              g = b(a);c[f] = d[a] = g;return f;
        }, wasCalled: function wasCalled(a) {
          return c[a].called;
        }, getResponse: function getResponse(a) {
          return c[a].data;
        },
        removeCallback: function removeCallback(a) {
          delete d[c[a].id];delete c[a];
        } };
    }];
  },
      Hg = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
      hg = { http: 80, https: 443, ftp: 21 },
      Gb = N("$location"),
      Ig = { $$absUrl: "", $$html5: !1, $$replace: !1, absUrl: Hb("$$absUrl"), url: function url(a) {
      if (y(a)) return this.$$url;var b = Hg.exec(a);(b[1] || "" === a) && this.path(decodeURIComponent(b[1]));(b[2] || b[1] || "" === a) && this.search(b[3] || "");this.hash(b[5] || "");return this;
    }, protocol: Hb("$$protocol"), host: Hb("$$host"), port: Hb("$$port"), path: md("$$path", function (a) {
      a = null !== a ? a.toString() : "";return "/" == a.charAt(0) ? a : "/" + a;
    }), search: function search(a, b) {
      switch (arguments.length) {case 0:
          return this.$$search;case 1:
          if (G(a) || T(a)) a = a.toString(), this.$$search = Ac(a);else if (D(a)) a = pa(a, {}), q(a, function (b, c) {
            null == b && delete a[c];
          }), this.$$search = a;else throw Gb("isrcharg");break;default:
          y(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b;}this.$$compose();return this;
    }, hash: md("$$hash", function (a) {
      return null !== a ? a.toString() : "";
    }), replace: function replace() {
      this.$$replace = !0;return this;
    } };q([ld, hc, gc], function (a) {
    a.prototype = Object.create(Ig);a.prototype.state = function (b) {
      if (!arguments.length) return this.$$state;if (a !== gc || !this.$$html5) throw Gb("nostate");this.$$state = y(b) ? null : b;return this;
    };
  });var X = N("$parse"),
      jg = Function.prototype.call,
      kg = Function.prototype.apply,
      lg = Function.prototype.bind,
      Ob = U();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
    Ob[a] = !0;
  });var Jg = { n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"' },
      jc = function jc(a) {
    this.options = a;
  };jc.prototype = { constructor: jc,
    lex: function lex(a) {
      this.text = a;this.index = 0;for (this.tokens = []; this.index < this.text.length;) {
        if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a);else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();else if (this.is(a, "(){}[].,;:?")) this.tokens.push({ index: this.index, text: a }), this.index++;else if (this.isWhitespace(a)) this.index++;else {
          var b = a + this.peek(),
              d = b + this.peek(2),
              c = Ob[b],
              e = Ob[d];Ob[a] || c || e ? (a = e ? d : c ? b : a, this.tokens.push({ index: this.index, text: a, operator: !0 }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1);
        }
      }return this.tokens;
    }, is: function is(a, b) {
      return -1 !== b.indexOf(a);
    }, peek: function peek(a) {
      a = a || 1;return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
    }, isNumber: function isNumber(a) {
      return "0" <= a && "9" >= a && "string" === typeof a;
    }, isWhitespace: function isWhitespace(a) {
      return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\xA0" === a;
    }, isIdentifierStart: function isIdentifierStart(a) {
      return this.options.isIdentifierStart ? this.options.isIdentifierStart(a, this.codePointAt(a)) : this.isValidIdentifierStart(a);
    }, isValidIdentifierStart: function isValidIdentifierStart(a) {
      return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a;
    }, isIdentifierContinue: function isIdentifierContinue(a) {
      return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(a, this.codePointAt(a)) : this.isValidIdentifierContinue(a);
    }, isValidIdentifierContinue: function isValidIdentifierContinue(a, b) {
      return this.isValidIdentifierStart(a, b) || this.isNumber(a);
    }, codePointAt: function codePointAt(a) {
      return 1 === a.length ? a.charCodeAt(0) : (a.charCodeAt(0) << 10) + a.charCodeAt(1) - 56613888;
    }, peekMultichar: function peekMultichar() {
      var a = this.text.charAt(this.index),
          b = this.peek();if (!b) return a;var d = a.charCodeAt(0),
          c = b.charCodeAt(0);return 55296 <= d && 56319 >= d && 56320 <= c && 57343 >= c ? a + b : a;
    }, isExpOperator: function isExpOperator(a) {
      return "-" === a || "+" === a || this.isNumber(a);
    }, throwError: function throwError(a, b, d) {
      d = d || this.index;b = w(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;throw X("lexerr", a, b, this.text);
    }, readNumber: function readNumber() {
      for (var a = "", b = this.index; this.index < this.text.length;) {
        var d = Q(this.text.charAt(this.index));if ("." == d || this.isNumber(d)) a += d;else {
          var c = this.peek();if ("e" == d && this.isExpOperator(c)) a += d;else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" == a.charAt(a.length - 1)) a += d;else if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" != a.charAt(a.length - 1)) break;else this.throwError("Invalid exponent");
        }this.index++;
      }this.tokens.push({ index: b, text: a, constant: !0, value: Number(a) });
    }, readIdent: function readIdent() {
      var a = this.index;for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
        var b = this.peekMultichar();if (!this.isIdentifierContinue(b)) break;this.index += b.length;
      }this.tokens.push({ index: a, text: this.text.slice(a, this.index), identifier: !0 });
    }, readString: function readString(a) {
      var b = this.index;this.index++;for (var d = "", c = a, e = !1; this.index < this.text.length;) {
        var f = this.text.charAt(this.index),
            c = c + f;if (e) "u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + e + "]"), this.index += 4, d += String.fromCharCode(parseInt(e, 16))) : d += Jg[f] || f, e = !1;else if ("\\" === f) e = !0;else {
          if (f === a) {
            this.index++;this.tokens.push({ index: b, text: c, constant: !0, value: d });return;
          }d += f;
        }this.index++;
      }this.throwError("Unterminated quote", b);
    } };var s = function s(a, b) {
    this.lexer = a;this.options = b;
  };s.Program = "Program";s.ExpressionStatement = "ExpressionStatement";s.AssignmentExpression = "AssignmentExpression";s.ConditionalExpression = "ConditionalExpression";s.LogicalExpression = "LogicalExpression";s.BinaryExpression = "BinaryExpression";s.UnaryExpression = "UnaryExpression";
  s.CallExpression = "CallExpression";s.MemberExpression = "MemberExpression";s.Identifier = "Identifier";s.Literal = "Literal";s.ArrayExpression = "ArrayExpression";s.Property = "Property";s.ObjectExpression = "ObjectExpression";s.ThisExpression = "ThisExpression";s.LocalsExpression = "LocalsExpression";s.NGValueParameter = "NGValueParameter";s.prototype = { ast: function ast(a) {
      this.text = a;this.tokens = this.lexer.lex(a);a = this.program();0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);return a;
    },
    program: function program() {
      for (var a = [];;) {
        if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return { type: s.Program, body: a };
      }
    }, expressionStatement: function expressionStatement() {
      return { type: s.ExpressionStatement, expression: this.filterChain() };
    }, filterChain: function filterChain() {
      for (var a = this.expression(); this.expect("|");) {
        a = this.filter(a);
      }return a;
    }, expression: function expression() {
      return this.assignment();
    }, assignment: function assignment() {
      var a = this.ternary();this.expect("=") && (a = { type: s.AssignmentExpression,
        left: a, right: this.assignment(), operator: "=" });return a;
    }, ternary: function ternary() {
      var a = this.logicalOR(),
          b,
          d;return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), { type: s.ConditionalExpression, test: a, alternate: b, consequent: d }) : a;
    }, logicalOR: function logicalOR() {
      for (var a = this.logicalAND(); this.expect("||");) {
        a = { type: s.LogicalExpression, operator: "||", left: a, right: this.logicalAND() };
      }return a;
    }, logicalAND: function logicalAND() {
      for (var a = this.equality(); this.expect("&&");) {
        a = { type: s.LogicalExpression,
          operator: "&&", left: a, right: this.equality() };
      }return a;
    }, equality: function equality() {
      for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!==");) {
        a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.relational() };
      }return a;
    }, relational: function relational() {
      for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");) {
        a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.additive() };
      }return a;
    }, additive: function additive() {
      for (var a = this.multiplicative(), b; b = this.expect("+", "-");) {
        a = { type: s.BinaryExpression, operator: b.text,
          left: a, right: this.multiplicative() };
      }return a;
    }, multiplicative: function multiplicative() {
      for (var a = this.unary(), b; b = this.expect("*", "/", "%");) {
        a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.unary() };
      }return a;
    }, unary: function unary() {
      var a;return (a = this.expect("+", "-", "!")) ? { type: s.UnaryExpression, operator: a.text, prefix: !0, argument: this.unary() } : this.primary();
    }, primary: function primary() {
      var a;this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = pa(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? a = { type: s.Literal, value: this.options.literals[this.consume().text] } : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());for (var b; b = this.expect("(", "[", ".");) {
        "(" === b.text ? (a = { type: s.CallExpression, callee: a, arguments: this.parseArguments() }, this.consume(")")) : "[" === b.text ? (a = { type: s.MemberExpression, object: a, property: this.expression(), computed: !0 }, this.consume("]")) : "." === b.text ? a = { type: s.MemberExpression, object: a, property: this.identifier(), computed: !1 } : this.throwError("IMPOSSIBLE");
      }return a;
    }, filter: function filter(a) {
      a = [a];for (var b = { type: s.CallExpression, callee: this.identifier(), arguments: a, filter: !0 }; this.expect(":");) {
        a.push(this.expression());
      }return b;
    }, parseArguments: function parseArguments() {
      var a = [];if (")" !== this.peekToken().text) {
        do {
          a.push(this.filterChain());
        } while (this.expect(","));
      }return a;
    }, identifier: function identifier() {
      var a = this.consume();a.identifier || this.throwError("is not a valid identifier", a);return { type: s.Identifier, name: a.text };
    }, constant: function constant() {
      return { type: s.Literal, value: this.consume().value };
    }, arrayDeclaration: function arrayDeclaration() {
      var a = [];if ("]" !== this.peekToken().text) {
        do {
          if (this.peek("]")) break;a.push(this.expression());
        } while (this.expect(","));
      }this.consume("]");return { type: s.ArrayExpression, elements: a };
    }, object: function object() {
      var a = [],
          b;if ("}" !== this.peekToken().text) {
        do {
          if (this.peek("}")) break;
          b = { type: s.Property, kind: "init" };this.peek().constant ? (b.key = this.constant(), b.computed = !1, this.consume(":"), b.value = this.expression()) : this.peek().identifier ? (b.key = this.identifier(), b.computed = !1, this.peek(":") ? (this.consume(":"), b.value = this.expression()) : b.value = b.key) : this.peek("[") ? (this.consume("["), b.key = this.expression(), this.consume("]"), b.computed = !0, this.consume(":"), b.value = this.expression()) : this.throwError("invalid key", this.peek());a.push(b);
        } while (this.expect(","));
      }this.consume("}");
      return { type: s.ObjectExpression, properties: a };
    }, throwError: function throwError(a, b) {
      throw X("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
    }, consume: function consume(a) {
      if (0 === this.tokens.length) throw X("ueoe", this.text);var b = this.expect(a);b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());return b;
    }, peekToken: function peekToken() {
      if (0 === this.tokens.length) throw X("ueoe", this.text);return this.tokens[0];
    }, peek: function peek(a, b, d, c) {
      return this.peekAhead(0, a, b, d, c);
    }, peekAhead: function peekAhead(a, b, d, c, e) {
      if (this.tokens.length > a) {
        a = this.tokens[a];var f = a.text;if (f === b || f === d || f === c || f === e || !(b || d || c || e)) return a;
      }return !1;
    }, expect: function expect(a, b, d, c) {
      return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1;
    }, selfReferential: { "this": { type: s.ThisExpression }, $locals: { type: s.LocalsExpression } } };td.prototype = { compile: function compile(a, b) {
      var d = this,
          c = this.astBuilder.ast(a);this.state = { nextId: 0, filters: {}, expensiveChecks: b, fn: { vars: [], body: [], own: {} }, assign: { vars: [], body: [], own: {} }, inputs: [] };V(c, d.$filter);var e = "",
          f;this.stage = "assign";
      if (f = rd(c)) this.state.computing = "assign", e = this.nextId(), this.recurse(f, e), this.return_(e), e = "fn.assign=" + this.generateFunction("assign", "s,v,l");f = pd(c.body);d.stage = "inputs";q(f, function (a, b) {
        var c = "fn" + b;d.state[c] = { vars: [], body: [], own: {} };d.state.computing = c;var e = d.nextId();d.recurse(a, e);d.return_(e);d.state.inputs.push(c);a.watchId = b;
      });this.state.computing = "fn";this.stage = "main";this.recurse(c);e = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + e + this.watchFns() + "return fn;";e = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", e)(this.$filter, Sa, ra, nd, ig, Ib, mg, od, a);this.state = this.stage = void 0;e.literal = sd(c);e.constant = c.constant;return e;
    }, USE: "use", STRICT: "strict", watchFns: function watchFns() {
      var a = [],
          b = this.state.inputs,
          d = this;q(b, function (b) {
        a.push("var " + b + "=" + d.generateFunction(b, "s"));
      });b.length && a.push("fn.inputs=[" + b.join(",") + "];");
      return a.join("");
    }, generateFunction: function generateFunction(a, b) {
      return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};";
    }, filterPrefix: function filterPrefix() {
      var a = [],
          b = this;q(this.state.filters, function (d, c) {
        a.push(d + "=$filter(" + b.escape(c) + ")");
      });return a.length ? "var " + a.join(",") + ";" : "";
    }, varsPrefix: function varsPrefix(a) {
      return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : "";
    }, body: function body(a) {
      return this.state[a].body.join("");
    }, recurse: function recurse(a, b, d, c, e, f) {
      var g,
          h,
          k = this,
          l,
          m,
          n;c = c || A;if (!f && w(a.watchId)) b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, e, !0));else switch (a.type) {case s.Program:
          q(a.body, function (b, c) {
            k.recurse(b.expression, void 0, void 0, function (a) {
              h = a;
            });c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h);
          });break;case s.Literal:
          m = this.escape(a.value);this.assign(b, m);c(m);break;case s.UnaryExpression:
          this.recurse(a.argument, void 0, void 0, function (a) {
            h = a;
          });m = a.operator + "(" + this.ifDefined(h, 0) + ")";this.assign(b, m);
          c(m);break;case s.BinaryExpression:
          this.recurse(a.left, void 0, void 0, function (a) {
            g = a;
          });this.recurse(a.right, void 0, void 0, function (a) {
            h = a;
          });m = "+" === a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : "(" + g + ")" + a.operator + "(" + h + ")";this.assign(b, m);c(m);break;case s.LogicalExpression:
          b = b || this.nextId();k.recurse(a.left, b);k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));c(b);break;case s.ConditionalExpression:
          b = b || this.nextId();k.recurse(a.test, b);k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));c(b);break;case s.Identifier:
          b = b || this.nextId();d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name);Sa(a.name);k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function () {
            k.if_("inputs" === k.stage || "s", function () {
              e && 1 !== e && k.if_(k.not(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));k.assign(b, k.nonComputedMember("s", a.name));
            });
          }, b && k.lazyAssign(b, k.nonComputedMember("l", a.name)));(k.state.expensiveChecks || Jb(a.name)) && k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:
          g = d && (d.context = this.nextId()) || this.nextId();b = b || this.nextId();k.recurse(a.object, g, void 0, function () {
            k.if_(k.notNull(g), function () {
              e && 1 !== e && k.addEnsureSafeAssignContext(g);if (a.computed) h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), k.addEnsureSafeMemberName(h), e && 1 !== e && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), "{}")), m = k.ensureSafeObject(k.computedMember(g, h)), k.assign(b, m), d && (d.computed = !0, d.name = h);else {
                Sa(a.property.name);e && 1 !== e && k.if_(k.not(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}"));m = k.nonComputedMember(g, a.property.name);if (k.state.expensiveChecks || Jb(a.property.name)) m = k.ensureSafeObject(m);k.assign(b, m);d && (d.computed = !1, d.name = a.property.name);
              }
            }, function () {
              k.assign(b, "undefined");
            });c(b);
          }, !!e);break;case s.CallExpression:
          b = b || this.nextId();
          a.filter ? (h = k.filter(a.callee.name), l = [], q(a.arguments, function (a) {
            var b = k.nextId();k.recurse(a, b);l.push(b);
          }), m = h + "(" + l.join(",") + ")", k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, l = [], k.recurse(a.callee, h, g, function () {
            k.if_(k.notNull(h), function () {
              k.addEnsureSafeFunction(h);q(a.arguments, function (a) {
                k.recurse(a, k.nextId(), void 0, function (a) {
                  l.push(k.ensureSafeObject(a));
                });
              });g.name ? (k.state.expensiveChecks || k.addEnsureSafeObject(g.context), m = k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")") : m = h + "(" + l.join(",") + ")";m = k.ensureSafeObject(m);k.assign(b, m);
            }, function () {
              k.assign(b, "undefined");
            });c(b);
          }));break;case s.AssignmentExpression:
          h = this.nextId();g = {};if (!qd(a.left)) throw X("lval");this.recurse(a.left, void 0, g, function () {
            k.if_(k.notNull(g.context), function () {
              k.recurse(a.right, h);k.addEnsureSafeObject(k.member(g.context, g.name, g.computed));k.addEnsureSafeAssignContext(g.context);m = k.member(g.context, g.name, g.computed) + a.operator + h;k.assign(b, m);c(b || m);
            });
          }, 1);break;case s.ArrayExpression:
          l = [];q(a.elements, function (a) {
            k.recurse(a, k.nextId(), void 0, function (a) {
              l.push(a);
            });
          });m = "[" + l.join(",") + "]";this.assign(b, m);c(m);break;case s.ObjectExpression:
          l = [];n = !1;q(a.properties, function (a) {
            a.computed && (n = !0);
          });n ? (b = b || this.nextId(), this.assign(b, "{}"), q(a.properties, function (a) {
            a.computed ? (g = k.nextId(), k.recurse(a.key, g)) : g = a.key.type === s.Identifier ? a.key.name : "" + a.key.value;h = k.nextId();k.recurse(a.value, h);k.assign(k.member(b, g, a.computed), h);
          })) : (q(a.properties, function (b) {
            k.recurse(b.value, a.constant ? void 0 : k.nextId(), void 0, function (a) {
              l.push(k.escape(b.key.type === s.Identifier ? b.key.name : "" + b.key.value) + ":" + a);
            });
          }), m = "{" + l.join(",") + "}", this.assign(b, m));c(b || m);break;case s.ThisExpression:
          this.assign(b, "s");c("s");break;case s.LocalsExpression:
          this.assign(b, "l");c("l");break;case s.NGValueParameter:
          this.assign(b, "v"), c("v");}
    }, getHasOwnProperty: function getHasOwnProperty(a, b) {
      var d = a + "." + b,
          c = this.current().own;c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")"));return c[d];
    },
    assign: function assign(a, b) {
      if (a) return this.current().body.push(a, "=", b, ";"), a;
    }, filter: function filter(a) {
      this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));return this.state.filters[a];
    }, ifDefined: function ifDefined(a, b) {
      return "ifDefined(" + a + "," + this.escape(b) + ")";
    }, plus: function plus(a, b) {
      return "plus(" + a + "," + b + ")";
    }, return_: function return_(a) {
      this.current().body.push("return ", a, ";");
    }, if_: function if_(a, b, d) {
      if (!0 === a) b();else {
        var c = this.current().body;c.push("if(", a, "){");b();c.push("}");d && (c.push("else{"), d(), c.push("}"));
      }
    }, not: function not(a) {
      return "!(" + a + ")";
    }, notNull: function notNull(a) {
      return a + "!=null";
    }, nonComputedMember: function nonComputedMember(a, b) {
      var d = /[^$_a-zA-Z0-9]/g;return (/[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b) ? a + "." + b : a + '["' + b.replace(d, this.stringEscapeFn) + '"]'
      );
    }, computedMember: function computedMember(a, b) {
      return a + "[" + b + "]";
    }, member: function member(a, b, d) {
      return d ? this.computedMember(a, b) : this.nonComputedMember(a, b);
    }, addEnsureSafeObject: function addEnsureSafeObject(a) {
      this.current().body.push(this.ensureSafeObject(a), ";");
    }, addEnsureSafeMemberName: function addEnsureSafeMemberName(a) {
      this.current().body.push(this.ensureSafeMemberName(a), ";");
    }, addEnsureSafeFunction: function addEnsureSafeFunction(a) {
      this.current().body.push(this.ensureSafeFunction(a), ";");
    }, addEnsureSafeAssignContext: function addEnsureSafeAssignContext(a) {
      this.current().body.push(this.ensureSafeAssignContext(a), ";");
    }, ensureSafeObject: function ensureSafeObject(a) {
      return "ensureSafeObject(" + a + ",text)";
    }, ensureSafeMemberName: function ensureSafeMemberName(a) {
      return "ensureSafeMemberName(" + a + ",text)";
    }, ensureSafeFunction: function ensureSafeFunction(a) {
      return "ensureSafeFunction(" + a + ",text)";
    }, getStringValue: function getStringValue(a) {
      this.assign(a, "getStringValue(" + a + ")");
    }, ensureSafeAssignContext: function ensureSafeAssignContext(a) {
      return "ensureSafeAssignContext(" + a + ",text)";
    }, lazyRecurse: function lazyRecurse(a, b, d, c, e, f) {
      var g = this;return function () {
        g.recurse(a, b, d, c, e, f);
      };
    }, lazyAssign: function lazyAssign(a, b) {
      var d = this;return function () {
        d.assign(a, b);
      };
    }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function stringEscapeFn(a) {
      return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
    }, escape: function escape(a) {
      if (G(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";if (T(a)) return a.toString();if (!0 === a) return "true";if (!1 === a) return "false";if (null === a) return "null";if ("undefined" === typeof a) return "undefined";throw X("esc");
    }, nextId: function nextId(a, b) {
      var d = "v" + this.state.nextId++;a || this.current().vars.push(d + (b ? "=" + b : ""));return d;
    }, current: function current() {
      return this.state[this.state.computing];
    } };ud.prototype = { compile: function compile(a, b) {
      var d = this,
          c = this.astBuilder.ast(a);this.expression = a;this.expensiveChecks = b;V(c, d.$filter);var e, f;if (e = rd(c)) f = this.recurse(e);e = pd(c.body);var g;e && (g = [], q(e, function (a, b) {
        var c = d.recurse(a);a.input = c;g.push(c);a.watchId = b;
      }));var h = [];q(c.body, function (a) {
        h.push(d.recurse(a.expression));
      });
      e = 0 === c.body.length ? A : 1 === c.body.length ? h[0] : function (a, b) {
        var c;q(h, function (d) {
          c = d(a, b);
        });return c;
      };f && (e.assign = function (a, b, c) {
        return f(a, c, b);
      });g && (e.inputs = g);e.literal = sd(c);e.constant = c.constant;return e;
    }, recurse: function recurse(a, b, d) {
      var c,
          e,
          f = this,
          g;if (a.input) return this.inputs(a.input, a.watchId);switch (a.type) {case s.Literal:
          return this.value(a.value, b);case s.UnaryExpression:
          return e = this.recurse(a.argument), this["unary" + a.operator](e, b);case s.BinaryExpression:
          return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);case s.LogicalExpression:
          return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);case s.ConditionalExpression:
          return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);case s.Identifier:
          return Sa(a.name, f.expression), f.identifier(a.name, f.expensiveChecks || Jb(a.name), b, d, f.expression);case s.MemberExpression:
          return c = this.recurse(a.object, !1, !!d), a.computed || (Sa(a.property.name, f.expression), e = a.property.name), a.computed && (e = this.recurse(a.property)), a.computed ? this.computedMember(c, e, b, d, f.expression) : this.nonComputedMember(c, e, f.expensiveChecks, b, d, f.expression);case s.CallExpression:
          return g = [], q(a.arguments, function (a) {
            g.push(f.recurse(a));
          }), a.filter && (e = this.$filter(a.callee.name)), a.filter || (e = this.recurse(a.callee, !0)), a.filter ? function (a, c, d, f) {
            for (var n = [], p = 0; p < g.length; ++p) {
              n.push(g[p](a, c, d, f));
            }a = e.apply(void 0, n, f);return b ? { context: void 0, name: void 0, value: a } : a;
          } : function (a, c, d, m) {
            var n = e(a, c, d, m),
                p;if (null != n.value) {
              ra(n.context, f.expression);nd(n.value, f.expression);p = [];for (var q = 0; q < g.length; ++q) {
                p.push(ra(g[q](a, c, d, m), f.expression));
              }p = ra(n.value.apply(n.context, p), f.expression);
            }return b ? { value: p } : p;
          };case s.AssignmentExpression:
          return c = this.recurse(a.left, !0, 1), e = this.recurse(a.right), function (a, d, g, m) {
            var n = c(a, d, g, m);a = e(a, d, g, m);ra(n.value, f.expression);Ib(n.context);n.context[n.name] = a;return b ? { value: a } : a;
          };case s.ArrayExpression:
          return g = [], q(a.elements, function (a) {
            g.push(f.recurse(a));
          }), function (a, c, d, e) {
            for (var f = [], p = 0; p < g.length; ++p) {
              f.push(g[p](a, c, d, e));
            }return b ? { value: f } : f;
          };case s.ObjectExpression:
          return g = [], q(a.properties, function (a) {
            a.computed ? g.push({ key: f.recurse(a.key), computed: !0, value: f.recurse(a.value) }) : g.push({ key: a.key.type === s.Identifier ? a.key.name : "" + a.key.value, computed: !1, value: f.recurse(a.value) });
          }), function (a, c, d, e) {
            for (var f = {}, p = 0; p < g.length; ++p) {
              g[p].computed ? f[g[p].key(a, c, d, e)] = g[p].value(a, c, d, e) : f[g[p].key] = g[p].value(a, c, d, e);
            }return b ? { value: f } : f;
          };case s.ThisExpression:
          return function (a) {
            return b ? { value: a } : a;
          };case s.LocalsExpression:
          return function (a, c) {
            return b ? { value: c } : c;
          };case s.NGValueParameter:
          return function (a, c, d) {
            return b ? { value: d } : d;
          };}
    }, "unary+": function unary(a, b) {
      return function (d, c, e, f) {
        d = a(d, c, e, f);d = w(d) ? +d : 0;return b ? { value: d } : d;
      };
    }, "unary-": function unary(a, b) {
      return function (d, c, e, f) {
        d = a(d, c, e, f);d = w(d) ? -d : 0;return b ? { value: d } : d;
      };
    }, "unary!": function unary(a, b) {
      return function (d, c, e, f) {
        d = !a(d, c, e, f);return b ? { value: d } : d;
      };
    }, "binary+": function binary(a, b, d) {
      return function (c, e, f, g) {
        var h = a(c, e, f, g);c = b(c, e, f, g);h = od(h, c);return d ? { value: h } : h;
      };
    }, "binary-": function binary(a, b, d) {
      return function (c, e, f, g) {
        var h = a(c, e, f, g);c = b(c, e, f, g);h = (w(h) ? h : 0) - (w(c) ? c : 0);return d ? { value: h } : h;
      };
    }, "binary*": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) * b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary/": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) / b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary%": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) % b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary===": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) === b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary!==": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) !== b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary==": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) == b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary!=": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) != b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary<": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) < b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary>": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) > b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary<=": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) <= b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary>=": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) >= b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary&&": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) && b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary||": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) || b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "ternary?:": function ternary(a, b, d, c) {
      return function (e, f, g, h) {
        e = a(e, f, g, h) ? b(e, f, g, h) : d(e, f, g, h);return c ? { value: e } : e;
      };
    }, value: function value(a, b) {
      return function () {
        return b ? { context: void 0, name: void 0, value: a } : a;
      };
    }, identifier: function identifier(a, b, d, c, e) {
      return function (f, g, h, k) {
        f = g && a in g ? g : f;c && 1 !== c && f && !f[a] && (f[a] = {});g = f ? f[a] : void 0;b && ra(g, e);return d ? { context: f, name: a, value: g } : g;
      };
    }, computedMember: function computedMember(a, b, d, c, e) {
      return function (f, g, h, k) {
        var l = a(f, g, h, k),
            m,
            n;null != l && (m = b(f, g, h, k), m += "", Sa(m, e), c && 1 !== c && (Ib(l), l && !l[m] && (l[m] = {})), n = l[m], ra(n, e));return d ? { context: l, name: m, value: n } : n;
      };
    }, nonComputedMember: function nonComputedMember(a, b, d, c, e, f) {
      return function (g, h, k, l) {
        g = a(g, h, k, l);e && 1 !== e && (Ib(g), g && !g[b] && (g[b] = {}));h = null != g ? g[b] : void 0;(d || Jb(b)) && ra(h, f);return c ? { context: g, name: b, value: h } : h;
      };
    }, inputs: function inputs(a, b) {
      return function (d, c, e, f) {
        return f ? f[b] : a(d, c, e);
      };
    } };var kc = function kc(a, b, d) {
    this.lexer = a;this.$filter = b;this.options = d;this.ast = new s(a, d);this.astCompiler = d.csp ? new ud(this.ast, b) : new td(this.ast, b);
  };kc.prototype = { constructor: kc, parse: function parse(a) {
      return this.astCompiler.compile(a, this.options.expensiveChecks);
    } };var ng = Object.prototype.valueOf,
      sa = N("$sce"),
      la = { HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js" },
      pg = N("$compile"),
      $ = C.document.createElement("a"),
      yd = Y(C.location.href);zd.$inject = ["$document"];Mc.$inject = ["$provide"];var Gd = 22,
      Fd = ".",
      mc = "0";Ad.$inject = ["$locale"];Cd.$inject = ["$locale"];var Ag = { yyyy: ba("FullYear", 4, 0, !1, !0), yy: ba("FullYear", 2, 0, !0, !0), y: ba("FullYear", 1, 0, !1, !0), MMMM: kb("Month"), MMM: kb("Month", !0), MM: ba("Month", 2, 1), M: ba("Month", 1, 1), LLLL: kb("Month", !1, !0), dd: ba("Date", 2), d: ba("Date", 1), HH: ba("Hours", 2), H: ba("Hours", 1), hh: ba("Hours", 2, -12), h: ba("Hours", 1, -12), mm: ba("Minutes", 2), m: ba("Minutes", 1), ss: ba("Seconds", 2), s: ba("Seconds", 1), sss: ba("Milliseconds", 3), EEEE: kb("Day"), EEE: kb("Day", !0), a: function a(_a, b) {
      return 12 > _a.getHours() ? b.AMPMS[0] : b.AMPMS[1];
    }, Z: function Z(a, b, d) {
      a = -1 * d;return a = (0 <= a ? "+" : "") + (Kb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Kb(Math.abs(a % 60), 2));
    }, ww: Id(2), w: Id(1), G: nc, GG: nc, GGG: nc, GGGG: function GGGG(a, b) {
      return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1];
    } },
      zg = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
      yg = /^\-?\d+$/;Bd.$inject = ["$locale"];var tg = ha(Q),
      ug = ha(ub);Dd.$inject = ["$parse"];var oe = ha({ restrict: "E", compile: function compile(a, b) {
      if (!b.href && !b.xlinkHref) return function (a, b) {
        if ("a" === b[0].nodeName.toLowerCase()) {
          var e = "[object SVGAnimatedString]" === ma.call(b.prop("href")) ? "xlink:href" : "href";b.on("click", function (a) {
            b.attr(e) || a.preventDefault();
          });
        }
      };
    } }),
      vb = {};q(Eb, function (a, b) {
    function d(a, d, e) {
      a.$watch(e[c], function (a) {
        e.$set(b, !!a);
      });
    }if ("multiple" != a) {
      var c = Aa("ng-" + b),
          e = d;"checked" === a && (e = function e(a, b, _e) {
        _e.ngModel !== _e[c] && d(a, b, _e);
      });vb[c] = function () {
        return { restrict: "A", priority: 100, link: e };
      };
    }
  });q(bd, function (a, b) {
    vb[b] = function () {
      return { priority: 100, link: function link(a, c, e) {
          if ("ngPattern" === b && "/" == e.ngPattern.charAt(0) && (c = e.ngPattern.match(Cg))) {
            e.$set("ngPattern", new RegExp(c[1], c[2]));return;
          }a.$watch(e[b], function (a) {
            e.$set(b, a);
          });
        } };
    };
  });q(["src", "srcset", "href"], function (a) {
    var b = Aa("ng-" + a);vb[b] = function () {
      return { priority: 99, link: function link(d, c, e) {
          var f = a,
              g = a;"href" === a && "[object SVGAnimatedString]" === ma.call(c.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null);e.$observe(b, function (b) {
            b ? (e.$set(g, b), Ea && f && c.prop(f, e[g])) : "href" === a && e.$set(g, null);
          });
        } };
    };
  });var Lb = { $addControl: A, $$renameControl: function $$renameControl(a, b) {
      a.$name = b;
    }, $removeControl: A, $setValidity: A,
    $setDirty: A, $setPristine: A, $setSubmitted: A };Jd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];var Sd = function Sd(a) {
    return ["$timeout", "$parse", function (b, d) {
      function c(a) {
        return "" === a ? d('this[""]').assign : d(a).assign || A;
      }return { name: "form", restrict: a ? "EAC" : "E", require: ["form", "^^?form"], controller: Jd, compile: function compile(d, f) {
          d.addClass(Ua).addClass(ob);var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;return { pre: function pre(a, d, e, f) {
              var n = f[0];if (!("action" in e)) {
                var p = function p(b) {
                  a.$apply(function () {
                    n.$commitViewValue();
                    n.$setSubmitted();
                  });b.preventDefault();
                };d[0].addEventListener("submit", p, !1);d.on("$destroy", function () {
                  b(function () {
                    d[0].removeEventListener("submit", p, !1);
                  }, 0, !1);
                });
              }(f[1] || n.$$parentForm).$addControl(n);var q = g ? c(n.$name) : A;g && (q(a, n), e.$observe(g, function (b) {
                n.$name !== b && (q(a, void 0), n.$$parentForm.$$renameControl(n, b), q = c(n.$name), q(a, n));
              }));d.on("$destroy", function () {
                n.$$parentForm.$removeControl(n);q(a, void 0);S(n, Lb);
              });
            } };
        } };
    }];
  },
      pe = Sd(),
      Ce = Sd(!0),
      Bg = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
      Kg = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
      Lg = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
      Mg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
      Td = /^(\d{4,})-(\d{2})-(\d{2})$/,
      Ud = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      rc = /^(\d{4,})-W(\d\d)$/,
      Vd = /^(\d{4,})-(\d\d)$/,
      Wd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      Ld = U();q(["date", "datetime-local", "month", "time", "week"], function (a) {
    Ld[a] = !0;
  });var Xd = { text: function text(a, b, d, c, e, f) {
      lb(a, b, d, c, e, f);pc(c);
    }, date: mb("date", Td, Nb(Td, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"), "datetime-local": mb("datetimelocal", Ud, Nb(Ud, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"), time: mb("time", Wd, Nb(Wd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"), week: mb("week", rc, function (a, b) {
      if (da(a)) return a;if (G(a)) {
        rc.lastIndex = 0;var d = rc.exec(a);
        if (d) {
          var c = +d[1],
              e = +d[2],
              f = d = 0,
              g = 0,
              h = 0,
              k = Hd(c),
              e = 7 * (e - 1);b && (d = b.getHours(), f = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds());return new Date(c, 0, k.getDate() + e, d, f, g, h);
        }
      }return NaN;
    }, "yyyy-Www"), month: mb("month", Vd, Nb(Vd, ["yyyy", "MM"]), "yyyy-MM"), number: function number(a, b, d, c, e, f) {
      Md(a, b, d, c);lb(a, b, d, c, e, f);c.$$parserName = "number";c.$parsers.push(function (a) {
        if (c.$isEmpty(a)) return null;if (Mg.test(a)) return parseFloat(a);
      });c.$formatters.push(function (a) {
        if (!c.$isEmpty(a)) {
          if (!T(a)) throw nb("numfmt", a);a = a.toString();
        }return a;
      });if (w(d.min) || d.ngMin) {
        var g;c.$validators.min = function (a) {
          return c.$isEmpty(a) || y(g) || a >= g;
        };d.$observe("min", function (a) {
          w(a) && !T(a) && (a = parseFloat(a));g = T(a) && !isNaN(a) ? a : void 0;c.$validate();
        });
      }if (w(d.max) || d.ngMax) {
        var h;c.$validators.max = function (a) {
          return c.$isEmpty(a) || y(h) || a <= h;
        };d.$observe("max", function (a) {
          w(a) && !T(a) && (a = parseFloat(a));h = T(a) && !isNaN(a) ? a : void 0;c.$validate();
        });
      }
    }, url: function url(a, b, d, c, e, f) {
      lb(a, b, d, c, e, f);pc(c);c.$$parserName = "url";c.$validators.url = function (a, b) {
        var d = a || b;return c.$isEmpty(d) || Kg.test(d);
      };
    }, email: function email(a, b, d, c, e, f) {
      lb(a, b, d, c, e, f);pc(c);c.$$parserName = "email";c.$validators.email = function (a, b) {
        var d = a || b;return c.$isEmpty(d) || Lg.test(d);
      };
    }, radio: function radio(a, b, d, c) {
      y(d.name) && b.attr("name", ++pb);b.on("click", function (a) {
        b[0].checked && c.$setViewValue(d.value, a && a.type);
      });c.$render = function () {
        b[0].checked = d.value == c.$viewValue;
      };d.$observe("value", c.$render);
    }, checkbox: function checkbox(a, b, d, c, e, f, g, h) {
      var k = Nd(h, a, "ngTrueValue", d.ngTrueValue, !0),
          l = Nd(h, a, "ngFalseValue", d.ngFalseValue, !1);b.on("click", function (a) {
        c.$setViewValue(b[0].checked, a && a.type);
      });c.$render = function () {
        b[0].checked = c.$viewValue;
      };c.$isEmpty = function (a) {
        return !1 === a;
      };c.$formatters.push(function (a) {
        return na(a, k);
      });c.$parsers.push(function (a) {
        return a ? k : l;
      });
    }, hidden: A, button: A, submit: A, reset: A, file: A },
      Gc = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, d, c) {
    return { restrict: "E", require: ["?ngModel"], link: { pre: function pre(e, f, g, h) {
          h[0] && (Xd[Q(g.type)] || Xd.text)(e, f, g, h[0], b, a, d, c);
        } } };
  }],
      Ng = /^(true|false|\d+)$/,
      Ue = function Ue() {
    return { restrict: "A", priority: 100, compile: function compile(a, b) {
        return Ng.test(b.ngValue) ? function (a, b, e) {
          e.$set("value", a.$eval(e.ngValue));
        } : function (a, b, e) {
          a.$watch(e.ngValue, function (a) {
            e.$set("value", a);
          });
        };
      } };
  },
      ue = ["$compile", function (a) {
    return { restrict: "AC", compile: function compile(b) {
        a.$$addBindingClass(b);return function (b, c, e) {
          a.$$addBindingInfo(c, e.ngBind);c = c[0];b.$watch(e.ngBind, function (a) {
            c.textContent = y(a) ? "" : a;
          });
        };
      } };
  }],
      we = ["$interpolate", "$compile", function (a, b) {
    return { compile: function compile(d) {
        b.$$addBindingClass(d);return function (c, d, f) {
          c = a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d, c.expressions);d = d[0];f.$observe("ngBindTemplate", function (a) {
            d.textContent = y(a) ? "" : a;
          });
        };
      } };
  }],
      ve = ["$sce", "$parse", "$compile", function (a, b, d) {
    return { restrict: "A", compile: function compile(c, e) {
        var f = b(e.ngBindHtml),
            g = b(e.ngBindHtml, function (b) {
          return a.valueOf(b);
        });d.$$addBindingClass(c);return function (b, c, e) {
          d.$$addBindingInfo(c, e.ngBindHtml);b.$watch(g, function () {
            var d = f(b);c.html(a.getTrustedHtml(d) || "");
          });
        };
      } };
  }],
      Te = ha({ restrict: "A", require: "ngModel", link: function link(a, b, d, c) {
      c.$viewChangeListeners.push(function () {
        a.$eval(d.ngChange);
      });
    } }),
      xe = qc("", !0),
      ze = qc("Odd", 0),
      ye = qc("Even", 1),
      Ae = Ta({ compile: function compile(a, b) {
      b.$set("ngCloak", void 0);a.removeClass("ng-cloak");
    } }),
      Be = [function () {
    return { restrict: "A", scope: !0, controller: "@", priority: 500 };
  }],
      Lc = {},
      Og = { blur: !0, focus: !0 };q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
    var b = Aa("ng-" + a);Lc[b] = ["$parse", "$rootScope", function (d, c) {
      return { restrict: "A", compile: function compile(e, f) {
          var g = d(f[b], null, !0);return function (b, d) {
            d.on(a, function (d) {
              var e = function e() {
                g(b, { $event: d });
              };Og[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e);
            });
          };
        } };
    }];
  });var Ee = ["$animate", "$compile", function (a, b) {
    return { multiElement: !0, transclude: "element", priority: 600, terminal: !0, restrict: "A", $$tlb: !0, link: function link(d, c, e, f, g) {
        var h, k, l;d.$watch(e.ngIf, function (d) {
          d ? k || g(function (d, f) {
            k = f;d[d.length++] = b.$$createComment("end ngIf", e.ngIf);h = { clone: d };a.enter(d, c.parent(), c);
          }) : (l && (l.remove(), l = null), k && (k.$destroy(), k = null), h && (l = tb(h.clone), a.leave(l).then(function () {
            l = null;
          }), h = null));
        });
      } };
  }],
      Fe = ["$templateRequest", "$anchorScroll", "$animate", function (a, b, d) {
    return { restrict: "ECA", priority: 400, terminal: !0, transclude: "element", controller: ca.noop, compile: function compile(c, e) {
        var f = e.ngInclude || e.src,
            g = e.onload || "",
            h = e.autoscroll;return function (c, e, m, n, p) {
          var q = 0,
              s,
              B,
              r,
              y = function y() {
            B && (B.remove(), B = null);s && (s.$destroy(), s = null);r && (d.leave(r).then(function () {
              B = null;
            }), B = r, r = null);
          };c.$watch(f, function (f) {
            var m = function m() {
              !w(h) || h && !c.$eval(h) || b();
            },
                t = ++q;f ? (a(f, !0).then(function (a) {
              if (!c.$$destroyed && t === q) {
                var b = c.$new();n.template = a;a = p(b, function (a) {
                  y();d.enter(a, null, e).then(m);
                });s = b;r = a;s.$emit("$includeContentLoaded", f);c.$eval(g);
              }
            }, function () {
              c.$$destroyed || t !== q || (y(), c.$emit("$includeContentError", f));
            }), c.$emit("$includeContentRequested", f)) : (y(), n.template = null);
          });
        };
      } };
  }],
      We = ["$compile", function (a) {
    return { restrict: "ECA",
      priority: -400, require: "ngInclude", link: function link(b, d, c, e) {
        ma.call(d[0]).match(/SVG/) ? (d.empty(), a(Oc(e.template, C.document).childNodes)(b, function (a) {
          d.append(a);
        }, { futureParentElement: d })) : (d.html(e.template), a(d.contents())(b));
      } };
  }],
      Ge = Ta({ priority: 450, compile: function compile() {
      return { pre: function pre(a, b, d) {
          a.$eval(d.ngInit);
        } };
    } }),
      Se = function Se() {
    return { restrict: "A", priority: 100, require: "ngModel", link: function link(a, b, d, c) {
        var e = b.attr(d.$attr.ngList) || ", ",
            f = "false" !== d.ngTrim,
            g = f ? W(e) : e;c.$parsers.push(function (a) {
          if (!y(a)) {
            var b = [];a && q(a.split(g), function (a) {
              a && b.push(f ? W(a) : a);
            });return b;
          }
        });c.$formatters.push(function (a) {
          if (L(a)) return a.join(e);
        });c.$isEmpty = function (a) {
          return !a || !a.length;
        };
      } };
  },
      ob = "ng-valid",
      Od = "ng-invalid",
      Ua = "ng-pristine",
      Mb = "ng-dirty",
      Qd = "ng-pending",
      nb = N("ngModel"),
      Pg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, b, d, c, e, f, g, h, k, l) {
    this.$modelValue = this.$viewValue = Number.NaN;this.$$rawModelValue = void 0;this.$validators = {};
    this.$asyncValidators = {};this.$parsers = [];this.$formatters = [];this.$viewChangeListeners = [];this.$untouched = !0;this.$touched = !1;this.$pristine = !0;this.$dirty = !1;this.$valid = !0;this.$invalid = !1;this.$error = {};this.$$success = {};this.$pending = void 0;this.$name = l(d.name || "", !1)(a);this.$$parentForm = Lb;var m = e(d.ngModel),
        n = m.assign,
        p = m,
        u = n,
        s = null,
        B,
        r = this;this.$$setOptions = function (a) {
      if ((r.$options = a) && a.getterSetter) {
        var b = e(d.ngModel + "()"),
            f = e(d.ngModel + "($$$p)");p = function p(a) {
          var c = m(a);z(c) && (c = b(a));
          return c;
        };u = function u(a, b) {
          z(m(a)) ? f(a, { $$$p: b }) : n(a, b);
        };
      } else if (!m.assign) throw nb("nonassign", d.ngModel, ya(c));
    };this.$render = A;this.$isEmpty = function (a) {
      return y(a) || "" === a || null === a || a !== a;
    };this.$$updateEmptyClasses = function (a) {
      r.$isEmpty(a) ? (f.removeClass(c, "ng-not-empty"), f.addClass(c, "ng-empty")) : (f.removeClass(c, "ng-empty"), f.addClass(c, "ng-not-empty"));
    };var J = 0;Kd({ ctrl: this, $element: c, set: function set(a, b) {
        a[b] = !0;
      }, unset: function unset(a, b) {
        delete a[b];
      }, $animate: f });this.$setPristine = function () {
      r.$dirty = !1;r.$pristine = !0;f.removeClass(c, Mb);f.addClass(c, Ua);
    };this.$setDirty = function () {
      r.$dirty = !0;r.$pristine = !1;f.removeClass(c, Ua);f.addClass(c, Mb);r.$$parentForm.$setDirty();
    };this.$setUntouched = function () {
      r.$touched = !1;r.$untouched = !0;f.setClass(c, "ng-untouched", "ng-touched");
    };this.$setTouched = function () {
      r.$touched = !0;r.$untouched = !1;f.setClass(c, "ng-touched", "ng-untouched");
    };this.$rollbackViewValue = function () {
      g.cancel(s);r.$viewValue = r.$$lastCommittedViewValue;r.$render();
    };this.$validate = function () {
      if (!T(r.$modelValue) || !isNaN(r.$modelValue)) {
        var a = r.$$rawModelValue,
            b = r.$valid,
            c = r.$modelValue,
            d = r.$options && r.$options.allowInvalid;r.$$runValidators(a, r.$$lastCommittedViewValue, function (e) {
          d || b === e || (r.$modelValue = e ? a : void 0, r.$modelValue !== c && r.$$writeModelToScope());
        });
      }
    };this.$$runValidators = function (a, b, c) {
      function d() {
        var c = !0;q(r.$validators, function (d, e) {
          var g = d(a, b);c = c && g;f(e, g);
        });return c ? !0 : (q(r.$asyncValidators, function (a, b) {
          f(b, null);
        }), !1);
      }function e() {
        var c = [],
            d = !0;q(r.$asyncValidators, function (e, g) {
          var h = e(a, b);if (!h || !z(h.then)) throw nb("nopromise", h);f(g, void 0);c.push(h.then(function () {
            f(g, !0);
          }, function () {
            d = !1;f(g, !1);
          }));
        });c.length ? k.all(c).then(function () {
          g(d);
        }, A) : g(!0);
      }function f(a, b) {
        h === J && r.$setValidity(a, b);
      }function g(a) {
        h === J && c(a);
      }J++;var h = J;(function () {
        var a = r.$$parserName || "parse";if (y(B)) f(a, null);else return B || (q(r.$validators, function (a, b) {
          f(b, null);
        }), q(r.$asyncValidators, function (a, b) {
          f(b, null);
        })), f(a, B), B;return !0;
      })() ? d() ? e() : g(!1) : g(!1);
    };this.$commitViewValue = function () {
      var a = r.$viewValue;g.cancel(s);if (r.$$lastCommittedViewValue !== a || "" === a && r.$$hasNativeValidators) r.$$updateEmptyClasses(a), r.$$lastCommittedViewValue = a, r.$pristine && this.$setDirty(), this.$$parseAndValidate();
    };this.$$parseAndValidate = function () {
      var b = r.$$lastCommittedViewValue;if (B = y(b) ? void 0 : !0) for (var c = 0; c < r.$parsers.length; c++) {
        if (b = r.$parsers[c](b), y(b)) {
          B = !1;break;
        }
      }T(r.$modelValue) && isNaN(r.$modelValue) && (r.$modelValue = p(a));var d = r.$modelValue,
          e = r.$options && r.$options.allowInvalid;r.$$rawModelValue = b;e && (r.$modelValue = b, r.$modelValue !== d && r.$$writeModelToScope());r.$$runValidators(b, r.$$lastCommittedViewValue, function (a) {
        e || (r.$modelValue = a ? b : void 0, r.$modelValue !== d && r.$$writeModelToScope());
      });
    };this.$$writeModelToScope = function () {
      u(a, r.$modelValue);q(r.$viewChangeListeners, function (a) {
        try {
          a();
        } catch (c) {
          b(c);
        }
      });
    };this.$setViewValue = function (a, b) {
      r.$viewValue = a;r.$options && !r.$options.updateOnDefault || r.$$debounceViewValueCommit(b);
    };this.$$debounceViewValueCommit = function (b) {
      var c = 0,
          d = r.$options;
      d && w(d.debounce) && (d = d.debounce, T(d) ? c = d : T(d[b]) ? c = d[b] : T(d["default"]) && (c = d["default"]));g.cancel(s);c ? s = g(function () {
        r.$commitViewValue();
      }, c) : h.$$phase ? r.$commitViewValue() : a.$apply(function () {
        r.$commitViewValue();
      });
    };a.$watch(function () {
      var b = p(a);if (b !== r.$modelValue && (r.$modelValue === r.$modelValue || b === b)) {
        r.$modelValue = r.$$rawModelValue = b;B = void 0;for (var c = r.$formatters, d = c.length, e = b; d--;) {
          e = c[d](e);
        }r.$viewValue !== e && (r.$$updateEmptyClasses(e), r.$viewValue = r.$$lastCommittedViewValue = e, r.$render(), r.$$runValidators(b, e, A));
      }return b;
    });
  }],
      Re = ["$rootScope", function (a) {
    return { restrict: "A", require: ["ngModel", "^?form", "^?ngModelOptions"], controller: Pg, priority: 1, compile: function compile(b) {
        b.addClass(Ua).addClass("ng-untouched").addClass(ob);return { pre: function pre(a, b, e, f) {
            var g = f[0];b = f[1] || g.$$parentForm;g.$$setOptions(f[2] && f[2].$options);b.$addControl(g);e.$observe("name", function (a) {
              g.$name !== a && g.$$parentForm.$$renameControl(g, a);
            });a.$on("$destroy", function () {
              g.$$parentForm.$removeControl(g);
            });
          }, post: function post(b, c, e, f) {
            var g = f[0];if (g.$options && g.$options.updateOn) c.on(g.$options.updateOn, function (a) {
              g.$$debounceViewValueCommit(a && a.type);
            });c.on("blur", function () {
              g.$touched || (a.$$phase ? b.$evalAsync(g.$setTouched) : b.$apply(g.$setTouched));
            });
          } };
      } };
  }],
      Qg = /(\s+|^)default(\s+|$)/,
      Ve = function Ve() {
    return { restrict: "A", controller: ["$scope", "$attrs", function (a, b) {
        var d = this;this.$options = pa(a.$eval(b.ngModelOptions));w(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = W(this.$options.updateOn.replace(Qg, function () {
          d.$options.updateOnDefault = !0;return " ";
        }))) : this.$options.updateOnDefault = !0;
      }] };
  },
      He = Ta({ terminal: !0, priority: 1E3 }),
      Rg = N("ngOptions"),
      Sg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
      Pe = ["$compile", "$document", "$parse", function (a, b, d) {
    function c(a, b, c) {
      function e(a, b, c, d, f) {
        this.selectValue = a;this.viewValue = b;this.label = c;this.group = d;this.disabled = f;
      }function f(a) {
        var b;if (!q && ta(a)) b = a;else {
          b = [];for (var c in a) {
            a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c);
          }
        }return b;
      }var n = a.match(Sg);if (!n) throw Rg("iexp", a, ya(b));var p = n[5] || n[7],
          q = n[6];a = / as /.test(n[0]) && n[1];var s = n[9];b = d(n[2] ? n[1] : p);var w = a && d(a) || b,
          r = s && d(s),
          y = s ? function (a, b) {
        return r(c, b);
      } : function (a) {
        return Ca(a);
      },
          v = function v(a, b) {
        return y(a, E(a, b));
      },
          A = d(n[2] || n[1]),
          t = d(n[3] || ""),
          K = d(n[4] || ""),
          z = d(n[8]),
          H = {},
          E = q ? function (a, b) {
        H[q] = b;H[p] = a;return H;
      } : function (a) {
        H[p] = a;return H;
      };return { trackBy: s, getTrackByValue: v, getWatchables: d(z, function (a) {
          var b = [];a = a || [];for (var d = f(a), e = d.length, g = 0; g < e; g++) {
            var h = a === d ? g : d[g],
                l = a[h],
                h = E(l, h),
                l = y(l, h);b.push(l);if (n[2] || n[1]) l = A(c, h), b.push(l);n[4] && (h = K(c, h), b.push(h));
          }return b;
        }), getOptions: function getOptions() {
          for (var a = [], b = {}, d = z(c) || [], g = f(d), h = g.length, n = 0; n < h; n++) {
            var p = d === g ? n : g[n],
                q = E(d[p], p),
                r = w(c, q),
                p = y(r, q),
                u = A(c, q),
                H = t(c, q),
                q = K(c, q),
                r = new e(p, r, u, H, q);a.push(r);b[p] = r;
          }return { items: a, selectValueMap: b,
            getOptionFromViewValue: function getOptionFromViewValue(a) {
              return b[v(a)];
            }, getViewValueFromOption: function getViewValueFromOption(a) {
              return s ? ca.copy(a.viewValue) : a.viewValue;
            } };
        } };
    }var e = C.document.createElement("option"),
        f = C.document.createElement("optgroup");return { restrict: "A", terminal: !0, require: ["select", "ngModel"], link: { pre: function pre(a, b, c, d) {
          d[0].registerOption = A;
        }, post: function post(d, h, k, l) {
          function m(a, b) {
            a.element = b;b.disabled = a.disabled;a.label !== b.label && (b.label = a.label, b.textContent = a.label);a.value !== b.value && (b.value = a.selectValue);
          }function n() {
            var a = t && p.readValue();if (t) for (var b = t.items.length - 1; 0 <= b; b--) {
              var c = t.items[b];w(c.group) ? Db(c.element.parentNode) : Db(c.element);
            }t = K.getOptions();var d = {};v && h.prepend(B);t.items.forEach(function (a) {
              var b;if (w(a.group)) {
                b = d[a.group];b || (b = f.cloneNode(!1), C.appendChild(b), b.label = null === a.group ? "null" : a.group, d[a.group] = b);var c = e.cloneNode(!1);
              } else b = C, c = e.cloneNode(!1);b.appendChild(c);m(a, c);
            });h[0].appendChild(C);s.$render();s.$isEmpty(a) || (b = p.readValue(), (K.trackBy || y ? na(a, b) : a === b) || (s.$setViewValue(b), s.$render()));
          }var p = l[0],
              s = l[1],
              y = k.multiple,
              B;l = 0;for (var r = h.children(), A = r.length; l < A; l++) {
            if ("" === r[l].value) {
              B = r.eq(l);break;
            }
          }var v = !!B,
              z = F(e.cloneNode(!1));z.val("?");var t,
              K = c(k.ngOptions, h, d),
              C = b[0].createDocumentFragment();y ? (s.$isEmpty = function (a) {
            return !a || 0 === a.length;
          }, p.writeValue = function (a) {
            t.items.forEach(function (a) {
              a.element.selected = !1;
            });a && a.forEach(function (a) {
              if (a = t.getOptionFromViewValue(a)) a.element.selected = !0;
            });
          }, p.readValue = function () {
            var a = h.val() || [],
                b = [];q(a, function (a) {
              (a = t.selectValueMap[a]) && !a.disabled && b.push(t.getViewValueFromOption(a));
            });return b;
          }, K.trackBy && d.$watchCollection(function () {
            if (L(s.$viewValue)) return s.$viewValue.map(function (a) {
              return K.getTrackByValue(a);
            });
          }, function () {
            s.$render();
          })) : (p.writeValue = function (a) {
            var b = t.getOptionFromViewValue(a);b ? (h[0].value !== b.selectValue && (z.remove(), v || B.remove(), h[0].value = b.selectValue, b.element.selected = !0), b.element.setAttribute("selected", "selected")) : null === a || v ? (z.remove(), v || h.prepend(B), h.val(""), B.prop("selected", !0), B.attr("selected", !0)) : (v || B.remove(), h.prepend(z), h.val("?"), z.prop("selected", !0), z.attr("selected", !0));
          }, p.readValue = function () {
            var a = t.selectValueMap[h.val()];return a && !a.disabled ? (v || B.remove(), z.remove(), t.getViewValueFromOption(a)) : null;
          }, K.trackBy && d.$watch(function () {
            return K.getTrackByValue(s.$viewValue);
          }, function () {
            s.$render();
          }));v ? (B.remove(), a(B)(d), B.removeClass("ng-scope")) : B = F(e.cloneNode(!1));h.empty();n();d.$watchCollection(K.getWatchables, n);
        } } };
  }],
      Ie = ["$locale", "$interpolate", "$log", function (a, b, d) {
    var c = /{}/g,
        e = /^when(Minus)?(.+)$/;return { link: function link(f, g, h) {
        function k(a) {
          g.text(a || "");
        }var l = h.count,
            m = h.$attr.when && g.attr(h.$attr.when),
            n = h.offset || 0,
            p = f.$eval(m) || {},
            s = {},
            w = b.startSymbol(),
            B = b.endSymbol(),
            r = w + l + "-" + n + B,
            z = ca.noop,
            v;q(h, function (a, b) {
          var c = e.exec(b);c && (c = (c[1] ? "-" : "") + Q(c[2]), p[c] = g.attr(h.$attr[b]));
        });q(p, function (a, d) {
          s[d] = b(a.replace(c, r));
        });f.$watch(l, function (b) {
          var c = parseFloat(b),
              e = isNaN(c);e || c in p || (c = a.pluralCat(c - n));c === v || e && T(v) && isNaN(v) || (z(), e = s[c], y(e) ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), z = A, k()) : z = f.$watch(e, k), v = c);
        });
      } };
  }],
      Je = ["$parse", "$animate", "$compile", function (a, b, d) {
    var c = N("ngRepeat"),
        e = function e(a, b, c, d, _e2, m, n) {
      a[c] = d;_e2 && (a[_e2] = m);a.$index = b;a.$first = 0 === b;a.$last = b === n - 1;a.$middle = !(a.$first || a.$last);a.$odd = !(a.$even = 0 === (b & 1));
    };return { restrict: "A", multiElement: !0, transclude: "element", priority: 1E3, terminal: !0, $$tlb: !0, compile: function compile(f, g) {
        var h = g.ngRepeat,
            k = d.$$createComment("end ngRepeat", h),
            l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if (!l) throw c("iexp", h);var m = l[1],
            n = l[2],
            p = l[3],
            s = l[4],
            l = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if (!l) throw c("iidexp", m);var w = l[3] || l[1],
            y = l[2];if (p && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p))) throw c("badident", p);var r,
            z,
            v,
            A,
            t = { $id: Ca };s ? r = a(s) : (v = function v(a, b) {
          return Ca(b);
        }, A = function A(a) {
          return a;
        });return function (a, d, f, g, l) {
          r && (z = function z(b, c, d) {
            y && (t[y] = b);t[w] = c;t.$index = d;return r(a, t);
          });var m = U();a.$watchCollection(n, function (f) {
            var g,
                n,
                r = d[0],
                s,
                u = U(),
                t,
                C,
                F,
                E,
                G,
                D,
                H;p && (a[p] = f);if (ta(f)) G = f, n = z || v;else for (H in n = z || A, G = [], f) {
              ua.call(f, H) && "$" !== H.charAt(0) && G.push(H);
            }t = G.length;H = Array(t);for (g = 0; g < t; g++) {
              if (C = f === G ? g : G[g], F = f[C], E = n(C, F, g), m[E]) D = m[E], delete m[E], u[E] = D, H[g] = D;else {
                if (u[E]) throw q(H, function (a) {
                  a && a.scope && (m[a.id] = a);
                }), c("dupes", h, E, F);H[g] = { id: E,
                  scope: void 0, clone: void 0 };u[E] = !0;
              }
            }for (s in m) {
              D = m[s];E = tb(D.clone);b.leave(E);if (E[0].parentNode) for (g = 0, n = E.length; g < n; g++) {
                E[g].$$NG_REMOVED = !0;
              }D.scope.$destroy();
            }for (g = 0; g < t; g++) {
              if (C = f === G ? g : G[g], F = f[C], D = H[g], D.scope) {
                s = r;do {
                  s = s.nextSibling;
                } while (s && s.$$NG_REMOVED);D.clone[0] != s && b.move(tb(D.clone), null, r);r = D.clone[D.clone.length - 1];e(D.scope, g, w, F, y, C, t);
              } else l(function (a, c) {
                D.scope = c;var d = k.cloneNode(!1);a[a.length++] = d;b.enter(a, null, r);r = d;D.clone = a;u[D.id] = D;e(D.scope, g, w, F, y, C, t);
              });
            }m = u;
          });
        };
      } };
  }],
      Ke = ["$animate", function (a) {
    return { restrict: "A", multiElement: !0, link: function link(b, d, c) {
        b.$watch(c.ngShow, function (b) {
          a[b ? "removeClass" : "addClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
        });
      } };
  }],
      De = ["$animate", function (a) {
    return { restrict: "A", multiElement: !0, link: function link(b, d, c) {
        b.$watch(c.ngHide, function (b) {
          a[b ? "addClass" : "removeClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
        });
      } };
  }],
      Le = Ta(function (a, b, d) {
    a.$watch(d.ngStyle, function (a, d) {
      d && a !== d && q(d, function (a, c) {
        b.css(c, "");
      });a && b.css(a);
    }, !0);
  }),
      Me = ["$animate", "$compile", function (a, b) {
    return { require: "ngSwitch", controller: ["$scope", function () {
        this.cases = {};
      }], link: function link(d, c, e, f) {
        var g = [],
            h = [],
            k = [],
            l = [],
            m = function m(a, b) {
          return function () {
            a.splice(b, 1);
          };
        };d.$watch(e.ngSwitch || e.on, function (c) {
          var d, e;d = 0;for (e = k.length; d < e; ++d) {
            a.cancel(k[d]);
          }d = k.length = 0;for (e = l.length; d < e; ++d) {
            var s = tb(h[d].clone);l[d].$destroy();(k[d] = a.leave(s)).then(m(k, d));
          }h.length = 0;l.length = 0;(g = f.cases["!" + c] || f.cases["?"]) && q(g, function (c) {
            c.transclude(function (d, e) {
              l.push(e);var f = c.element;d[d.length++] = b.$$createComment("end ngSwitchWhen");h.push({ clone: d });a.enter(d, f.parent(), f);
            });
          });
        });
      } };
  }],
      Ne = Ta({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, b, d, c, e) {
      c.cases["!" + d.ngSwitchWhen] = c.cases["!" + d.ngSwitchWhen] || [];c.cases["!" + d.ngSwitchWhen].push({ transclude: e, element: b });
    } }),
      Oe = Ta({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, b, d, c, e) {
      c.cases["?"] = c.cases["?"] || [];c.cases["?"].push({ transclude: e,
        element: b });
    } }),
      Tg = N("ngTransclude"),
      Qe = ["$compile", function (a) {
    return { restrict: "EAC", terminal: !0, compile: function compile(b) {
        var d = a(b.contents());b.empty();return function (a, b, f, g, h) {
          function k() {
            d(a, function (a) {
              b.append(a);
            });
          }if (!h) throw Tg("orphan", ya(b));f.ngTransclude === f.$attr.ngTransclude && (f.ngTransclude = "");f = f.ngTransclude || f.ngTranscludeSlot;h(function (a, c) {
            a.length ? b.append(a) : (k(), c.$destroy());
          }, null, f);f && !h.isSlotFilled(f) && k();
        };
      } };
  }],
      qe = ["$templateCache", function (a) {
    return { restrict: "E", terminal: !0,
      compile: function compile(b, d) {
        "text/ng-template" == d.type && a.put(d.id, b[0].text);
      } };
  }],
      Ug = { $setViewValue: A, $render: A },
      Vg = ["$element", "$scope", function (a, b) {
    var d = this,
        c = new Ra();d.ngModelCtrl = Ug;d.unknownOption = F(C.document.createElement("option"));d.renderUnknownOption = function (b) {
      b = "? " + Ca(b) + " ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b);
    };b.$on("$destroy", function () {
      d.renderUnknownOption = A;
    });d.removeUnknownOption = function () {
      d.unknownOption.parent() && d.unknownOption.remove();
    };d.readValue = function () {
      d.removeUnknownOption();
      return a.val();
    };d.writeValue = function (b) {
      d.hasOption(b) ? (d.removeUnknownOption(), a.val(b), "" === b && d.emptyOption.prop("selected", !0)) : null == b && d.emptyOption ? (d.removeUnknownOption(), a.val("")) : d.renderUnknownOption(b);
    };d.addOption = function (a, b) {
      if (8 !== b[0].nodeType) {
        Qa(a, '"option value"');"" === a && (d.emptyOption = b);var g = c.get(a) || 0;c.put(a, g + 1);d.ngModelCtrl.$render();b[0].hasAttribute("selected") && (b[0].selected = !0);
      }
    };d.removeOption = function (a) {
      var b = c.get(a);b && (1 === b ? (c.remove(a), "" === a && (d.emptyOption = void 0)) : c.put(a, b - 1));
    };d.hasOption = function (a) {
      return !!c.get(a);
    };d.registerOption = function (a, b, c, h, k) {
      if (h) {
        var l;c.$observe("value", function (a) {
          w(l) && d.removeOption(l);l = a;d.addOption(a, b);
        });
      } else k ? a.$watch(k, function (a, e) {
        c.$set("value", a);e !== a && d.removeOption(e);d.addOption(a, b);
      }) : d.addOption(c.value, b);b.on("$destroy", function () {
        d.removeOption(c.value);d.ngModelCtrl.$render();
      });
    };
  }],
      re = function re() {
    return { restrict: "E", require: ["select", "?ngModel"], controller: Vg, priority: 1, link: { pre: function pre(a, b, d, c) {
          var e = c[1];if (e) {
            var f = c[0];f.ngModelCtrl = e;b.on("change", function () {
              a.$apply(function () {
                e.$setViewValue(f.readValue());
              });
            });if (d.multiple) {
              f.readValue = function () {
                var a = [];q(b.find("option"), function (b) {
                  b.selected && a.push(b.value);
                });return a;
              };f.writeValue = function (a) {
                var c = new Ra(a);q(b.find("option"), function (a) {
                  a.selected = w(c.get(a.value));
                });
              };var g,
                  h = NaN;a.$watch(function () {
                h !== e.$viewValue || na(g, e.$viewValue) || (g = ia(e.$viewValue), e.$render());h = e.$viewValue;
              });e.$isEmpty = function (a) {
                return !a || 0 === a.length;
              };
            }
          }
        }, post: function post(a, b, d, c) {
          var e = c[1];if (e) {
            var f = c[0];e.$render = function () {
              f.writeValue(e.$viewValue);
            };
          }
        } } };
  },
      te = ["$interpolate", function (a) {
    return { restrict: "E", priority: 100, compile: function compile(b, d) {
        if (w(d.value)) var c = a(d.value, !0);else {
          var e = a(b.text(), !0);e || d.$set("value", b.text());
        }return function (a, b, d) {
          var k = b.parent();(k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a, b, d, c, e);
        };
      } };
  }],
      se = ha({ restrict: "E", terminal: !1 }),
      Ic = function Ic() {
    return { restrict: "A",
      require: "?ngModel", link: function link(a, b, d, c) {
        c && (d.required = !0, c.$validators.required = function (a, b) {
          return !d.required || !c.$isEmpty(b);
        }, d.$observe("required", function () {
          c.$validate();
        }));
      } };
  },
      Hc = function Hc() {
    return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
        if (c) {
          var e,
              f = d.ngPattern || d.pattern;d.$observe("pattern", function (a) {
            G(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));if (a && !a.test) throw N("ngPattern")("noregexp", f, a, ya(b));e = a || void 0;c.$validate();
          });c.$validators.pattern = function (a, b) {
            return c.$isEmpty(b) || y(e) || e.test(b);
          };
        }
      } };
  },
      Kc = function Kc() {
    return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
        if (c) {
          var e = -1;d.$observe("maxlength", function (a) {
            a = Z(a);e = isNaN(a) ? -1 : a;c.$validate();
          });c.$validators.maxlength = function (a, b) {
            return 0 > e || c.$isEmpty(b) || b.length <= e;
          };
        }
      } };
  },
      Jc = function Jc() {
    return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
        if (c) {
          var e = 0;d.$observe("minlength", function (a) {
            e = Z(a) || 0;c.$validate();
          });c.$validators.minlength = function (a, b) {
            return c.$isEmpty(b) || b.length >= e;
          };
        }
      } };
  };C.angular.bootstrap ? C.console && console.log("WARNING: Tried to load angular more than once.") : (je(), le(ca), ca.module("ngLocale", [], ["$provide", function (a) {
    function b(a) {
      a += "";var b = a.indexOf(".");return -1 == b ? 0 : a.length - b - 1;
    }a.value("$locale", { DATETIME_FORMATS: { AMPMS: ["AM", "PM"], DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), ERANAMES: ["Before Christ", "Anno Domini"], ERAS: ["BC", "AD"], FIRSTDAYOFWEEK: 6, MONTH: "January February March April May June July August September October November December".split(" "),
        SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "), SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), STANDALONEMONTH: "January February March April May June July August September October November December".split(" "), WEEKENDRANGE: [5, 6], fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", medium: "MMM d, y h:mm:ss a", mediumDate: "MMM d, y", mediumTime: "h:mm:ss a", "short": "M/d/yy h:mm a", shortDate: "M/d/yy", shortTime: "h:mm a" }, NUMBER_FORMATS: { CURRENCY_SYM: "$", DECIMAL_SEP: ".", GROUP_SEP: ",",
        PATTERNS: [{ gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 3, lgSize: 3, maxFrac: 2, minFrac: 2, minInt: 1, negPre: "-\xA4", negSuf: "", posPre: "\xA4", posSuf: "" }] }, id: "en-us", localeID: "en_US", pluralCat: function pluralCat(a, c) {
        var e = a | 0,
            f = c;void 0 === f && (f = Math.min(b(a), 3));Math.pow(10, f);return 1 == e && 0 == f ? "one" : "other";
      } });
  }]), F(C.document).ready(function () {
    fe(C.document, Bc);
  }));
})(window);!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map
"use strict";

/**
 * State-based routing for AngularJS
 * @version v0.3.2
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"), function (a, b, c) {
  "use strict";
  function d(a, b) {
    return S(new (S(function () {}, { prototype: a }))(), b);
  }function e(a) {
    return R(arguments, function (b) {
      b !== a && R(b, function (b, c) {
        a.hasOwnProperty(c) || (a[c] = b);
      });
    }), a;
  }function f(a, b) {
    var c = [];for (var d in a.path) {
      if (a.path[d] !== b.path[d]) break;c.push(a.path[d]);
    }return c;
  }function g(a) {
    if (Object.keys) return Object.keys(a);var b = [];return R(a, function (a, c) {
      b.push(c);
    }), b;
  }function h(a, b) {
    if (Array.prototype.indexOf) return a.indexOf(b, Number(arguments[2]) || 0);var c = a.length >>> 0,
        d = Number(arguments[2]) || 0;for (d = d < 0 ? Math.ceil(d) : Math.floor(d), d < 0 && (d += c); d < c; d++) {
      if (d in a && a[d] === b) return d;
    }return -1;
  }function i(a, b, c, d) {
    var e,
        i = f(c, d),
        j = {},
        k = [];for (var l in i) {
      if (i[l] && i[l].params && (e = g(i[l].params), e.length)) for (var m in e) {
        h(k, e[m]) >= 0 || (k.push(e[m]), j[e[m]] = a[e[m]]);
      }
    }return S({}, j, b);
  }function j(a, b, c) {
    if (!c) {
      c = [];for (var d in a) {
        c.push(d);
      }
    }for (var e = 0; e < c.length; e++) {
      var f = c[e];if (a[f] != b[f]) return !1;
    }return !0;
  }function k(a, b) {
    var c = {};return R(a, function (a) {
      c[a] = b[a];
    }), c;
  }function l(a) {
    var b = {},
        c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));return R(c, function (c) {
      c in a && (b[c] = a[c]);
    }), b;
  }function m(a) {
    var b = {},
        c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));for (var d in a) {
      h(c, d) == -1 && (b[d] = a[d]);
    }return b;
  }function n(a, b) {
    var c = Q(a),
        d = c ? [] : {};return R(a, function (a, e) {
      b(a, e) && (d[c ? d.length : e] = a);
    }), d;
  }function o(a, b) {
    var c = Q(a) ? [] : {};return R(a, function (a, d) {
      c[d] = b(a, d);
    }), c;
  }function p(a) {
    return a.then(c, function () {}) && a;
  }function q(a, b) {
    var d = 1,
        f = 2,
        i = {},
        j = [],
        k = i,
        l = S(a.when(i), { $$promises: i, $$values: i });this.study = function (i) {
      function n(a, c) {
        if (s[c] !== f) {
          if (r.push(c), s[c] === d) throw r.splice(0, h(r, c)), new Error("Cyclic dependency: " + r.join(" -> "));if (s[c] = d, O(a)) q.push(c, [function () {
            return b.get(a);
          }], j);else {
            var e = b.annotate(a);R(e, function (a) {
              a !== c && i.hasOwnProperty(a) && n(i[a], a);
            }), q.push(c, a, e);
          }r.pop(), s[c] = f;
        }
      }function o(a) {
        return P(a) && a.then && a.$$promises;
      }if (!P(i)) throw new Error("'invocables' must be an object");var p = g(i || {}),
          q = [],
          r = [],
          s = {};return R(i, n), i = r = s = null, function (d, f, g) {
        function h() {
          --u || (v || e(t, f.$$values), r.$$values = t, r.$$promises = r.$$promises || !0, delete r.$$inheritedValues, n.resolve(t));
        }function i(a) {
          r.$$failure = a, n.reject(a);
        }function j(c, e, f) {
          function j(a) {
            l.reject(a), i(a);
          }function k() {
            if (!M(r.$$failure)) try {
              l.resolve(b.invoke(e, g, t)), l.promise.then(function (a) {
                t[c] = a, h();
              }, j);
            } catch (a) {
              j(a);
            }
          }var l = a.defer(),
              m = 0;R(f, function (a) {
            s.hasOwnProperty(a) && !d.hasOwnProperty(a) && (m++, s[a].then(function (b) {
              t[a] = b, --m || k();
            }, j));
          }), m || k(), s[c] = l.promise;
        }if (o(d) && g === c && (g = f, f = d, d = null), d) {
          if (!P(d)) throw new Error("'locals' must be an object");
        } else d = k;if (f) {
          if (!o(f)) throw new Error("'parent' must be a promise returned by $resolve.resolve()");
        } else f = l;var n = a.defer(),
            r = n.promise,
            s = r.$$promises = {},
            t = S({}, d),
            u = 1 + q.length / 3,
            v = !1;if (M(f.$$failure)) return i(f.$$failure), r;f.$$inheritedValues && e(t, m(f.$$inheritedValues, p)), S(s, f.$$promises), f.$$values ? (v = e(t, m(f.$$values, p)), r.$$inheritedValues = m(f.$$values, p), h()) : (f.$$inheritedValues && (r.$$inheritedValues = m(f.$$inheritedValues, p)), f.then(h, i));for (var w = 0, x = q.length; w < x; w += 3) {
          d.hasOwnProperty(q[w]) ? h() : j(q[w], q[w + 1], q[w + 2]);
        }return r;
      };
    }, this.resolve = function (a, b, c, d) {
      return this.study(a)(b, c, d);
    };
  }function r(a, b, c) {
    this.fromConfig = function (a, b, c) {
      return M(a.template) ? this.fromString(a.template, b) : M(a.templateUrl) ? this.fromUrl(a.templateUrl, b) : M(a.templateProvider) ? this.fromProvider(a.templateProvider, b, c) : null;
    }, this.fromString = function (a, b) {
      return N(a) ? a(b) : a;
    }, this.fromUrl = function (c, d) {
      return N(c) && (c = c(d)), null == c ? null : a.get(c, { cache: b, headers: { Accept: "text/html" } }).then(function (a) {
        return a.data;
      });
    }, this.fromProvider = function (a, b, d) {
      return c.invoke(a, null, d || { params: b });
    };
  }function s(a, b, e) {
    function f(b, c, d, e) {
      if (q.push(b), o[b]) return o[b];if (!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b)) throw new Error("Invalid parameter name '" + b + "' in pattern '" + a + "'");if (p[b]) throw new Error("Duplicate parameter name '" + b + "' in pattern '" + a + "'");return p[b] = new V.Param(b, c, d, e), p[b];
    }function g(a, b, c, d) {
      var e = ["", ""],
          f = a.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");if (!b) return f;switch (c) {case !1:
          e = ["(", ")" + (d ? "?" : "")];break;case !0:
          f = f.replace(/\/$/, ""), e = ["(?:/(", ")|/)?"];break;default:
          e = ["(" + c + "|", ")?"];}return f + e[0] + b + e[1];
    }function h(e, f) {
      var g, h, i, j, k;return g = e[2] || e[3], k = b.params[g], i = a.substring(m, e.index), h = f ? e[4] : e[4] || ("*" == e[1] ? ".*" : null), h && (j = V.type(h) || d(V.type("string"), { pattern: new RegExp(h, b.caseInsensitive ? "i" : c) })), { id: g, regexp: h, segment: i, type: j, cfg: k };
    }b = S({ params: {} }, P(b) ? b : {});var i,
        j = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
        k = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
        l = "^",
        m = 0,
        n = this.segments = [],
        o = e ? e.params : {},
        p = this.params = e ? e.params.$$new() : new V.ParamSet(),
        q = [];this.source = a;for (var r, s, t; (i = j.exec(a)) && (r = h(i, !1), !(r.segment.indexOf("?") >= 0));) {
      s = f(r.id, r.type, r.cfg, "path"), l += g(r.segment, s.type.pattern.source, s.squash, s.isOptional), n.push(r.segment), m = j.lastIndex;
    }t = a.substring(m);var u = t.indexOf("?");if (u >= 0) {
      var v = this.sourceSearch = t.substring(u);if (t = t.substring(0, u), this.sourcePath = a.substring(0, m + u), v.length > 0) for (m = 0; i = k.exec(v);) {
        r = h(i, !0), s = f(r.id, r.type, r.cfg, "search"), m = j.lastIndex;
      }
    } else this.sourcePath = a, this.sourceSearch = "";l += g(t) + (b.strict === !1 ? "/?" : "") + "$", n.push(t), this.regexp = new RegExp(l, b.caseInsensitive ? "i" : c), this.prefix = n[0], this.$$paramNames = q;
  }function t(a) {
    S(this, a);
  }function u() {
    function a(a) {
      return null != a ? a.toString().replace(/(~|\/)/g, function (a) {
        return { "~": "~~", "/": "~2F" }[a];
      }) : a;
    }function e(a) {
      return null != a ? a.toString().replace(/(~~|~2F)/g, function (a) {
        return { "~~": "~", "~2F": "/" }[a];
      }) : a;
    }function f() {
      return { strict: p, caseInsensitive: m };
    }function i(a) {
      return N(a) || Q(a) && N(a[a.length - 1]);
    }function j() {
      for (; w.length;) {
        var a = w.shift();if (a.pattern) throw new Error("You cannot override a type's .pattern at runtime.");b.extend(r[a.name], l.invoke(a.def));
      }
    }function k(a) {
      S(this, a || {});
    }V = this;var l,
        m = !1,
        p = !0,
        q = !1,
        r = {},
        v = !0,
        w = [],
        x = { string: { encode: a, decode: e, is: function is(a) {
          return null == a || !M(a) || "string" == typeof a;
        }, pattern: /[^\/]*/ }, int: { encode: a, decode: function decode(a) {
          return parseInt(a, 10);
        }, is: function is(a) {
          return M(a) && this.decode(a.toString()) === a;
        }, pattern: /\d+/ }, bool: { encode: function encode(a) {
          return a ? 1 : 0;
        }, decode: function decode(a) {
          return 0 !== parseInt(a, 10);
        }, is: function is(a) {
          return a === !0 || a === !1;
        }, pattern: /0|1/ }, date: { encode: function encode(a) {
          return this.is(a) ? [a.getFullYear(), ("0" + (a.getMonth() + 1)).slice(-2), ("0" + a.getDate()).slice(-2)].join("-") : c;
        }, decode: function decode(a) {
          if (this.is(a)) return a;var b = this.capture.exec(a);return b ? new Date(b[1], b[2] - 1, b[3]) : c;
        }, is: function is(a) {
          return a instanceof Date && !isNaN(a.valueOf());
        }, equals: function equals(a, b) {
          return this.is(a) && this.is(b) && a.toISOString() === b.toISOString();
        }, pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/, capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/ }, json: { encode: b.toJson, decode: b.fromJson, is: b.isObject, equals: b.equals, pattern: /[^\/]*/ }, any: { encode: b.identity, decode: b.identity, equals: b.equals, pattern: /.*/ } };u.$$getDefaultValue = function (a) {
      if (!i(a.value)) return a.value;if (!l) throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value);
    }, this.caseInsensitive = function (a) {
      return M(a) && (m = a), m;
    }, this.strictMode = function (a) {
      return M(a) && (p = a), p;
    }, this.defaultSquashPolicy = function (a) {
      if (!M(a)) return q;if (a !== !0 && a !== !1 && !O(a)) throw new Error("Invalid squash policy: " + a + ". Valid policies: false, true, arbitrary-string");return q = a, a;
    }, this.compile = function (a, b) {
      return new s(a, S(f(), b));
    }, this.isMatcher = function (a) {
      if (!P(a)) return !1;var b = !0;return R(s.prototype, function (c, d) {
        N(c) && (b = b && M(a[d]) && N(a[d]));
      }), b;
    }, this.type = function (a, b, c) {
      if (!M(b)) return r[a];if (r.hasOwnProperty(a)) throw new Error("A type named '" + a + "' has already been defined.");return r[a] = new t(S({ name: a }, b)), c && (w.push({ name: a, def: c }), v || j()), this;
    }, R(x, function (a, b) {
      r[b] = new t(S({ name: b }, a));
    }), r = d(r, {}), this.$get = ["$injector", function (a) {
      return l = a, v = !1, j(), R(x, function (a, b) {
        r[b] || (r[b] = new t(a));
      }), this;
    }], this.Param = function (a, d, e, f) {
      function j(a) {
        var b = P(a) ? g(a) : [],
            c = h(b, "value") === -1 && h(b, "type") === -1 && h(b, "squash") === -1 && h(b, "array") === -1;return c && (a = { value: a }), a.$$fn = i(a.value) ? a.value : function () {
          return a.value;
        }, a;
      }function k(c, d, e) {
        if (c.type && d) throw new Error("Param '" + a + "' has two type configurations.");return d ? d : c.type ? b.isString(c.type) ? r[c.type] : c.type instanceof t ? c.type : new t(c.type) : "config" === e ? r.any : r.string;
      }function m() {
        var b = { array: "search" === f && "auto" },
            c = a.match(/\[\]$/) ? { array: !0 } : {};return S(b, c, e).array;
      }function p(a, b) {
        var c = a.squash;if (!b || c === !1) return !1;if (!M(c) || null == c) return q;if (c === !0 || O(c)) return c;throw new Error("Invalid squash policy: '" + c + "'. Valid policies: false, true, or arbitrary string");
      }function s(a, b, d, e) {
        var f,
            g,
            i = [{ from: "", to: d || b ? c : "" }, { from: null, to: d || b ? c : "" }];return f = Q(a.replace) ? a.replace : [], O(e) && f.push({ from: e, to: c }), g = o(f, function (a) {
          return a.from;
        }), n(i, function (a) {
          return h(g, a.from) === -1;
        }).concat(f);
      }function u() {
        if (!l) throw new Error("Injectable functions cannot be called at configuration time");var a = l.invoke(e.$$fn);if (null !== a && a !== c && !x.type.is(a)) throw new Error("Default value (" + a + ") for parameter '" + x.id + "' is not an instance of Type (" + x.type.name + ")");return a;
      }function v(a) {
        function b(a) {
          return function (b) {
            return b.from === a;
          };
        }function c(a) {
          var c = o(n(x.replace, b(a)), function (a) {
            return a.to;
          });return c.length ? c[0] : a;
        }return a = c(a), M(a) ? x.type.$normalize(a) : u();
      }function w() {
        return "{Param:" + a + " " + d + " squash: '" + A + "' optional: " + z + "}";
      }var x = this;e = j(e), d = k(e, d, f);var y = m();d = y ? d.$asArray(y, "search" === f) : d, "string" !== d.name || y || "path" !== f || e.value !== c || (e.value = "");var z = e.value !== c,
          A = p(e, z),
          B = s(e, y, z, A);S(this, { id: a, type: d, location: f, array: y, squash: A, replace: B, isOptional: z, value: v, dynamic: c, config: e, toString: w });
    }, k.prototype = { $$new: function $$new() {
        return d(this, S(new k(), { $$parent: this }));
      }, $$keys: function $$keys() {
        for (var a = [], b = [], c = this, d = g(k.prototype); c;) {
          b.push(c), c = c.$$parent;
        }return b.reverse(), R(b, function (b) {
          R(g(b), function (b) {
            h(a, b) === -1 && h(d, b) === -1 && a.push(b);
          });
        }), a;
      }, $$values: function $$values(a) {
        var b = {},
            c = this;return R(c.$$keys(), function (d) {
          b[d] = c[d].value(a && a[d]);
        }), b;
      }, $$equals: function $$equals(a, b) {
        var c = !0,
            d = this;return R(d.$$keys(), function (e) {
          var f = a && a[e],
              g = b && b[e];d[e].type.equals(f, g) || (c = !1);
        }), c;
      }, $$validates: function $$validates(a) {
        var d,
            e,
            f,
            g,
            h,
            i = this.$$keys();for (d = 0; d < i.length && (e = this[i[d]], f = a[i[d]], f !== c && null !== f || !e.isOptional); d++) {
          if (g = e.type.$normalize(f), !e.type.is(g)) return !1;if (h = e.type.encode(g), b.isString(h) && !e.type.pattern.exec(h)) return !1;
        }return !0;
      }, $$parent: c }, this.ParamSet = k;
  }function v(a, d) {
    function e(a) {
      var b = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null != b ? b[1].replace(/\\(.)/g, "$1") : "";
    }function f(a, b) {
      return a.replace(/\$(\$|\d{1,2})/, function (a, c) {
        return b["$" === c ? 0 : Number(c)];
      });
    }function g(a, b, c) {
      if (!c) return !1;var d = a.invoke(b, b, { $match: c });return !M(d) || d;
    }function h(d, e, f, g, h) {
      function m(a, b, c) {
        return "/" === q ? a : b ? q.slice(0, -1) + a : c ? q.slice(1) + a : a;
      }function n(a) {
        function b(a) {
          var b = a(f, d);return !!b && (O(b) && d.replace().url(b), !0);
        }if (!a || !a.defaultPrevented) {
          p && d.url() === p;p = c;var e,
              g = j.length;for (e = 0; e < g; e++) {
            if (b(j[e])) return;
          }k && b(k);
        }
      }function o() {
        return i = i || e.$on("$locationChangeSuccess", n);
      }var p,
          q = g.baseHref(),
          r = d.url();return l || o(), { sync: function sync() {
          n();
        }, listen: function listen() {
          return o();
        }, update: function update(a) {
          return a ? void (r = d.url()) : void (d.url() !== r && (d.url(r), d.replace()));
        }, push: function push(a, b, e) {
          var f = a.format(b || {});null !== f && b && b["#"] && (f += "#" + b["#"]), d.url(f), p = e && e.$$avoidResync ? d.url() : c, e && e.replace && d.replace();
        }, href: function href(c, e, f) {
          if (!c.validates(e)) return null;var g = a.html5Mode();b.isObject(g) && (g = g.enabled), g = g && h.history;var i = c.format(e);if (f = f || {}, g || null === i || (i = "#" + a.hashPrefix() + i), null !== i && e && e["#"] && (i += "#" + e["#"]), i = m(i, g, f.absolute), !f.absolute || !i) return i;var j = !g && i ? "/" : "",
              k = d.port();return k = 80 === k || 443 === k ? "" : ":" + k, [d.protocol(), "://", d.host(), k, j, i].join("");
        } };
    }var i,
        j = [],
        k = null,
        l = !1;this.rule = function (a) {
      if (!N(a)) throw new Error("'rule' must be a function");return j.push(a), this;
    }, this.otherwise = function (a) {
      if (O(a)) {
        var b = a;a = function a() {
          return b;
        };
      } else if (!N(a)) throw new Error("'rule' must be a function");return k = a, this;
    }, this.when = function (a, b) {
      var c,
          h = O(b);if (O(a) && (a = d.compile(a)), !h && !N(b) && !Q(b)) throw new Error("invalid 'handler' in when()");var i = { matcher: function matcher(a, b) {
          return h && (c = d.compile(b), b = ["$match", function (a) {
            return c.format(a);
          }]), S(function (c, d) {
            return g(c, b, a.exec(d.path(), d.search()));
          }, { prefix: O(a.prefix) ? a.prefix : "" });
        }, regex: function regex(a, b) {
          if (a.global || a.sticky) throw new Error("when() RegExp must not be global or sticky");return h && (c = b, b = ["$match", function (a) {
            return f(c, a);
          }]), S(function (c, d) {
            return g(c, b, a.exec(d.path()));
          }, { prefix: e(a) });
        } },
          j = { matcher: d.isMatcher(a), regex: a instanceof RegExp };for (var k in j) {
        if (j[k]) return this.rule(i[k](a, b));
      }throw new Error("invalid 'what' in when()");
    }, this.deferIntercept = function (a) {
      a === c && (a = !0), l = a;
    }, this.$get = h, h.$inject = ["$location", "$rootScope", "$injector", "$browser", "$sniffer"];
  }function w(a, e) {
    function f(a) {
      return 0 === a.indexOf(".") || 0 === a.indexOf("^");
    }function m(a, b) {
      if (!a) return c;var d = O(a),
          e = d ? a : a.name,
          g = f(e);if (g) {
        if (!b) throw new Error("No reference point given for path '" + e + "'");b = m(b);for (var h = e.split("."), i = 0, j = h.length, k = b; i < j; i++) {
          if ("" !== h[i] || 0 !== i) {
            if ("^" !== h[i]) break;if (!k.parent) throw new Error("Path '" + e + "' not valid for state '" + b.name + "'");k = k.parent;
          } else k = b;
        }h = h.slice(i).join("."), e = k.name + (k.name && h ? "." : "") + h;
      }var l = A[e];return !l || !d && (d || l !== a && l.self !== a) ? c : l;
    }function n(a, b) {
      B[a] || (B[a] = []), B[a].push(b);
    }function q(a) {
      for (var b = B[a] || []; b.length;) {
        r(b.shift());
      }
    }function r(b) {
      b = d(b, { self: b, resolve: b.resolve || {}, toString: function toString() {
          return this.name;
        } });var c = b.name;if (!O(c) || c.indexOf("@") >= 0) throw new Error("State must have a valid name");if (A.hasOwnProperty(c)) throw new Error("State '" + c + "' is already defined");var e = c.indexOf(".") !== -1 ? c.substring(0, c.lastIndexOf(".")) : O(b.parent) ? b.parent : P(b.parent) && O(b.parent.name) ? b.parent.name : "";if (e && !A[e]) return n(e, b.self);for (var f in D) {
        N(D[f]) && (b[f] = D[f](b, D.$delegates[f]));
      }return A[c] = b, !b[C] && b.url && a.when(b.url, ["$match", "$stateParams", function (a, c) {
        z.$current.navigable == b && j(a, c) || z.transitionTo(b, a, { inherit: !0, location: !1 });
      }]), q(c), b;
    }function s(a) {
      return a.indexOf("*") > -1;
    }function t(a) {
      for (var b = a.split("."), c = z.$current.name.split("."), d = 0, e = b.length; d < e; d++) {
        "*" === b[d] && (c[d] = "*");
      }return "**" === b[0] && (c = c.slice(h(c, b[1])), c.unshift("**")), "**" === b[b.length - 1] && (c.splice(h(c, b[b.length - 2]) + 1, Number.MAX_VALUE), c.push("**")), b.length == c.length && c.join("") === b.join("");
    }function u(a, b) {
      return O(a) && !M(b) ? D[a] : N(b) && O(a) ? (D[a] && !D.$delegates[a] && (D.$delegates[a] = D[a]), D[a] = b, this) : this;
    }function v(a, b) {
      return P(a) ? b = a : b.name = a, r(b), this;
    }function w(a, e, f, h, l, n, q, r, u) {
      function v(b, c, d, f) {
        var g = a.$broadcast("$stateNotFound", b, c, d);if (g.defaultPrevented) return q.update(), F;if (!g.retry) return null;if (f.$retry) return q.update(), G;var h = z.transition = e.when(g.retry);return h.then(function () {
          return h !== z.transition ? (a.$broadcast("$stateChangeCancel", b.to, b.toParams, c, d), D) : (b.options.$retry = !0, z.transitionTo(b.to, b.toParams, b.options));
        }, function () {
          return F;
        }), q.update(), h;
      }function w(a, c, d, g, i, j) {
        function m() {
          var c = [];return R(a.views, function (d, e) {
            var g = d.resolve && d.resolve !== a.resolve ? d.resolve : {};g.$template = [function () {
              return f.load(e, { view: d, locals: i.globals, params: n, notify: j.notify }) || "";
            }], c.push(l.resolve(g, i.globals, i.resolve, a).then(function (c) {
              if (N(d.controllerProvider) || Q(d.controllerProvider)) {
                var f = b.extend({}, g, i.globals);c.$$controller = h.invoke(d.controllerProvider, null, f);
              } else c.$$controller = d.controller;c.$$state = a, c.$$controllerAs = d.controllerAs, c.$$resolveAs = d.resolveAs, i[e] = c;
            }));
          }), e.all(c).then(function () {
            return i.globals;
          });
        }var n = d ? c : k(a.params.$$keys(), c),
            o = { $stateParams: n };i.resolve = l.resolve(a.resolve, o, i.resolve, a);var p = [i.resolve.then(function (a) {
          i.globals = a;
        })];return g && p.push(g), e.all(p).then(m).then(function (a) {
          return i;
        });
      }var B = new Error("transition superseded"),
          D = p(e.reject(B)),
          E = p(e.reject(new Error("transition prevented"))),
          F = p(e.reject(new Error("transition aborted"))),
          G = p(e.reject(new Error("transition failed")));return y.locals = { resolve: null, globals: { $stateParams: {} } }, z = { params: {}, current: y.self, $current: y, transition: null }, z.reload = function (a) {
        return z.transitionTo(z.current, n, { reload: a || !0, inherit: !1, notify: !0 });
      }, z.go = function (a, b, c) {
        return z.transitionTo(a, b, S({ inherit: !0, relative: z.$current }, c));
      }, z.transitionTo = function (b, c, f) {
        c = c || {}, f = S({ location: !0, inherit: !1, relative: null, notify: !0, reload: !1, $retry: !1 }, f || {});var g,
            j = z.$current,
            l = z.params,
            o = j.path,
            p = m(b, f.relative),
            r = c["#"];if (!M(p)) {
          var s = { to: b, toParams: c, options: f },
              t = v(s, j.self, l, f);if (t) return t;if (b = s.to, c = s.toParams, f = s.options, p = m(b, f.relative), !M(p)) {
            if (!f.relative) throw new Error("No such state '" + b + "'");throw new Error("Could not resolve '" + b + "' from state '" + f.relative + "'");
          }
        }if (p[C]) throw new Error("Cannot transition to abstract state '" + b + "'");if (f.inherit && (c = i(n, c || {}, z.$current, p)), !p.params.$$validates(c)) return G;c = p.params.$$values(c), b = p;var u = b.path,
            A = 0,
            F = u[A],
            H = y.locals,
            I = [];if (f.reload) {
          if (O(f.reload) || P(f.reload)) {
            if (P(f.reload) && !f.reload.name) throw new Error("Invalid reload state object");var J = f.reload === !0 ? o[0] : m(f.reload);if (f.reload && !J) throw new Error("No such reload state '" + (O(f.reload) ? f.reload : f.reload.name) + "'");for (; F && F === o[A] && F !== J;) {
              H = I[A] = F.locals, A++, F = u[A];
            }
          }
        } else for (; F && F === o[A] && F.ownParams.$$equals(c, l);) {
          H = I[A] = F.locals, A++, F = u[A];
        }if (x(b, c, j, l, H, f)) return r && (c["#"] = r), z.params = c, T(z.params, n), T(k(b.params.$$keys(), n), b.locals.globals.$stateParams), f.location && b.navigable && b.navigable.url && (q.push(b.navigable.url, c, { $$avoidResync: !0, replace: "replace" === f.location }), q.update(!0)), z.transition = null, e.when(z.current);if (c = k(b.params.$$keys(), c || {}), r && (c["#"] = r), f.notify && a.$broadcast("$stateChangeStart", b.self, c, j.self, l, f).defaultPrevented) return a.$broadcast("$stateChangeCancel", b.self, c, j.self, l), null == z.transition && q.update(), E;for (var K = e.when(H), L = A; L < u.length; L++, F = u[L]) {
          H = I[L] = d(H), K = w(F, c, F === b, K, H, f);
        }var N = z.transition = K.then(function () {
          var d, e, g;if (z.transition !== N) return a.$broadcast("$stateChangeCancel", b.self, c, j.self, l), D;for (d = o.length - 1; d >= A; d--) {
            g = o[d], g.self.onExit && h.invoke(g.self.onExit, g.self, g.locals.globals), g.locals = null;
          }for (d = A; d < u.length; d++) {
            e = u[d], e.locals = I[d], e.self.onEnter && h.invoke(e.self.onEnter, e.self, e.locals.globals);
          }return z.transition !== N ? (a.$broadcast("$stateChangeCancel", b.self, c, j.self, l), D) : (z.$current = b, z.current = b.self, z.params = c, T(z.params, n), z.transition = null, f.location && b.navigable && q.push(b.navigable.url, b.navigable.locals.globals.$stateParams, { $$avoidResync: !0, replace: "replace" === f.location }), f.notify && a.$broadcast("$stateChangeSuccess", b.self, c, j.self, l), q.update(!0), z.current);
        }).then(null, function (d) {
          return d === B ? D : z.transition !== N ? (a.$broadcast("$stateChangeCancel", b.self, c, j.self, l), D) : (z.transition = null, g = a.$broadcast("$stateChangeError", b.self, c, j.self, l, d), g.defaultPrevented || q.update(), e.reject(d));
        });return N;
      }, z.is = function (a, b, d) {
        d = S({ relative: z.$current }, d || {});var e = m(a, d.relative);return M(e) ? z.$current === e && (!b || j(e.params.$$values(b), n)) : c;
      }, z.includes = function (a, b, d) {
        if (d = S({ relative: z.$current }, d || {}), O(a) && s(a)) {
          if (!t(a)) return !1;a = z.$current.name;
        }var e = m(a, d.relative);if (!M(e)) return c;if (!M(z.$current.includes[e.name])) return !1;if (!b) return !0;for (var f = g(b), h = 0; h < f.length; h++) {
          var i = f[h],
              j = e.params[i];if (j && !j.type.equals(n[i], b[i])) return !1;
        }return !0;
      }, z.href = function (a, b, d) {
        d = S({ lossy: !0, inherit: !0, absolute: !1, relative: z.$current }, d || {});var e = m(a, d.relative);if (!M(e)) return null;d.inherit && (b = i(n, b || {}, z.$current, e));var f = e && d.lossy ? e.navigable : e;return f && f.url !== c && null !== f.url ? q.href(f.url, k(e.params.$$keys().concat("#"), b || {}), { absolute: d.absolute }) : null;
      }, z.get = function (a, b) {
        if (0 === arguments.length) return o(g(A), function (a) {
          return A[a].self;
        });var c = m(a, b || z.$current);return c && c.self ? c.self : null;
      }, z;
    }function x(a, b, c, d, e, f) {
      function g(a, b, c) {
        function d(b) {
          return "search" != a.params[b].location;
        }var e = a.params.$$keys().filter(d),
            f = l.apply({}, [a.params].concat(e)),
            g = new V.ParamSet(f);return g.$$equals(b, c);
      }if (!f.reload && a === c && (e === c.locals || a.self.reloadOnSearch === !1 && g(c, d, b))) return !0;
    }var y,
        z,
        A = {},
        B = {},
        C = "abstract",
        D = { parent: function parent(a) {
        if (M(a.parent) && a.parent) return m(a.parent);var b = /^(.+)\.[^.]+$/.exec(a.name);return b ? m(b[1]) : y;
      }, data: function data(a) {
        return a.parent && a.parent.data && (a.data = a.self.data = d(a.parent.data, a.data)), a.data;
      }, url: function url(a) {
        var b = a.url,
            c = { params: a.params || {} };if (O(b)) return "^" == b.charAt(0) ? e.compile(b.substring(1), c) : (a.parent.navigable || y).url.concat(b, c);if (!b || e.isMatcher(b)) return b;throw new Error("Invalid url '" + b + "' in state '" + a + "'");
      }, navigable: function navigable(a) {
        return a.url ? a : a.parent ? a.parent.navigable : null;
      }, ownParams: function ownParams(a) {
        var b = a.url && a.url.params || new V.ParamSet();return R(a.params || {}, function (a, c) {
          b[c] || (b[c] = new V.Param(c, null, a, "config"));
        }), b;
      }, params: function params(a) {
        var b = l(a.ownParams, a.ownParams.$$keys());return a.parent && a.parent.params ? S(a.parent.params.$$new(), b) : new V.ParamSet();
      }, views: function views(a) {
        var b = {};return R(M(a.views) ? a.views : { "": a }, function (c, d) {
          d.indexOf("@") < 0 && (d += "@" + a.parent.name), c.resolveAs = c.resolveAs || a.resolveAs || "$resolve", b[d] = c;
        }), b;
      }, path: function path(a) {
        return a.parent ? a.parent.path.concat(a) : [];
      }, includes: function includes(a) {
        var b = a.parent ? S({}, a.parent.includes) : {};return b[a.name] = !0, b;
      }, $delegates: {} };y = r({ name: "", url: "^", views: null, abstract: !0 }), y.navigable = null, this.decorator = u, this.state = v, this.$get = w, w.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"];
  }function x() {
    function a(a, b) {
      return { load: function load(a, c) {
          var d,
              e = { template: null, controller: null, view: null, locals: null, notify: !0, async: !0, params: {} };return c = S(e, c), c.view && (d = b.fromConfig(c.view, c.params, c.locals)), d;
        } };
    }this.$get = a, a.$inject = ["$rootScope", "$templateFactory"];
  }function y() {
    var a = !1;this.useAnchorScroll = function () {
      a = !0;
    }, this.$get = ["$anchorScroll", "$timeout", function (b, c) {
      return a ? b : function (a) {
        return c(function () {
          a[0].scrollIntoView();
        }, 0, !1);
      };
    }];
  }function z(a, c, d, e, f) {
    function g() {
      return c.has ? function (a) {
        return c.has(a) ? c.get(a) : null;
      } : function (a) {
        try {
          return c.get(a);
        } catch (a) {
          return null;
        }
      };
    }function h(a, c) {
      var d = function d() {
        return { enter: function enter(a, b, c) {
            b.after(a), c();
          }, leave: function leave(a, b) {
            a.remove(), b();
          } };
      };if (k) return { enter: function enter(a, c, d) {
          b.version.minor > 2 ? k.enter(a, null, c).then(d) : k.enter(a, null, c, d);
        }, leave: function leave(a, c) {
          b.version.minor > 2 ? k.leave(a).then(c) : k.leave(a, c);
        } };if (j) {
        var e = j && j(c, a);return { enter: function enter(a, b, c) {
            e.enter(a, null, b), c();
          }, leave: function leave(a, b) {
            e.leave(a), b();
          } };
      }return d();
    }var i = g(),
        j = i("$animator"),
        k = i("$animate"),
        l = { restrict: "ECA", terminal: !0, priority: 400, transclude: "element", compile: function compile(c, g, i) {
        return function (c, g, j) {
          function k() {
            if (m && (m.remove(), m = null), o && (o.$destroy(), o = null), n) {
              var a = n.data("$uiViewAnim");s.leave(n, function () {
                a.$$animLeave.resolve(), m = null;
              }), m = n, n = null;
            }
          }function l(h) {
            var l,
                m = B(c, j, g, e),
                t = m && a.$current && a.$current.locals[m];if (h || t !== p) {
              l = c.$new(), p = a.$current.locals[m], l.$emit("$viewContentLoading", m);var u = i(l, function (a) {
                var e = f.defer(),
                    h = f.defer(),
                    i = { $animEnter: e.promise, $animLeave: h.promise, $$animLeave: h };a.data("$uiViewAnim", i), s.enter(a, g, function () {
                  e.resolve(), o && o.$emit("$viewContentAnimationEnded"), (b.isDefined(r) && !r || c.$eval(r)) && d(a);
                }), k();
              });n = u, o = l, o.$emit("$viewContentLoaded", m), o.$eval(q);
            }
          }var m,
              n,
              o,
              p,
              q = j.onload || "",
              r = j.autoscroll,
              s = h(j, c);g.inheritedData("$uiView");c.$on("$stateChangeSuccess", function () {
            l(!1);
          }), l(!0);
        };
      } };return l;
  }function A(a, c, d, e) {
    return { restrict: "ECA", priority: -400, compile: function compile(f) {
        var g = f.html();return function (f, h, i) {
          var j = d.$current,
              k = B(f, i, h, e),
              l = j && j.locals[k];if (l) {
            h.data("$uiView", { name: k, state: l.$$state }), h.html(l.$template ? l.$template : g);var m = b.extend({}, l);f[l.$$resolveAs] = m;var n = a(h.contents());if (l.$$controller) {
              l.$scope = f, l.$element = h;var o = c(l.$$controller, l);l.$$controllerAs && (f[l.$$controllerAs] = o, f[l.$$controllerAs][l.$$resolveAs] = m), N(o.$onInit) && o.$onInit(), h.data("$ngControllerController", o), h.children().data("$ngControllerController", o);
            }n(f);
          }
        };
      } };
  }function B(a, b, c, d) {
    var e = d(b.uiView || b.name || "")(a),
        f = c.inheritedData("$uiView");return e.indexOf("@") >= 0 ? e : e + "@" + (f ? f.state.name : "");
  }function C(a, b) {
    var c,
        d = a.match(/^\s*({[^}]*})\s*$/);if (d && (a = b + "(" + d[1] + ")"), c = a.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !c || 4 !== c.length) throw new Error("Invalid state ref '" + a + "'");return { state: c[1], paramExpr: c[3] || null };
  }function D(a) {
    var b = a.parent().inheritedData("$uiView");if (b && b.state && b.state.name) return b.state;
  }function E(a) {
    var b = "[object SVGAnimatedString]" === Object.prototype.toString.call(a.prop("href")),
        c = "FORM" === a[0].nodeName;return { attr: c ? "action" : b ? "xlink:href" : "href", isAnchor: "A" === a.prop("tagName").toUpperCase(), clickable: !c };
  }function F(a, b, c, d, e) {
    return function (f) {
      var g = f.which || f.button,
          h = e();if (!(g > 1 || f.ctrlKey || f.metaKey || f.shiftKey || a.attr("target"))) {
        var i = c(function () {
          b.go(h.state, h.params, h.options);
        });f.preventDefault();var j = d.isAnchor && !h.href ? 1 : 0;f.preventDefault = function () {
          j-- <= 0 && c.cancel(i);
        };
      }
    };
  }function G(a, b) {
    return { relative: D(a) || b.$current, inherit: !0 };
  }function H(a, c) {
    return { restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function link(d, e, f, g) {
        var h,
            i = C(f.uiSref, a.current.name),
            j = { state: i.state, href: null, params: null },
            k = E(e),
            l = g[1] || g[0],
            m = null;j.options = S(G(e, a), f.uiSrefOpts ? d.$eval(f.uiSrefOpts) : {});var n = function n(c) {
          c && (j.params = b.copy(c)), j.href = a.href(i.state, j.params, j.options), m && m(), l && (m = l.$$addStateInfo(i.state, j.params)), null !== j.href && f.$set(k.attr, j.href);
        };i.paramExpr && (d.$watch(i.paramExpr, function (a) {
          a !== j.params && n(a);
        }, !0), j.params = b.copy(d.$eval(i.paramExpr))), n(), k.clickable && (h = F(e, a, c, k, function () {
          return j;
        }), e[e.on ? "on" : "bind"]("click", h), d.$on("$destroy", function () {
          e[e.off ? "off" : "unbind"]("click", h);
        }));
      } };
  }function I(a, b) {
    return { restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function link(c, d, e, f) {
        function g(b) {
          m.state = b[0], m.params = b[1], m.options = b[2], m.href = a.href(m.state, m.params, m.options), n && n(), j && (n = j.$$addStateInfo(m.state, m.params)), m.href && e.$set(i.attr, m.href);
        }var h,
            i = E(d),
            j = f[1] || f[0],
            k = [e.uiState, e.uiStateParams || null, e.uiStateOpts || null],
            l = "[" + k.map(function (a) {
          return a || "null";
        }).join(", ") + "]",
            m = { state: null, params: null, options: null, href: null },
            n = null;c.$watch(l, g, !0), g(c.$eval(l)), i.clickable && (h = F(d, a, b, i, function () {
          return m;
        }), d[d.on ? "on" : "bind"]("click", h), c.$on("$destroy", function () {
          d[d.off ? "off" : "unbind"]("click", h);
        }));
      } };
  }function J(a, b, c) {
    return { restrict: "A", controller: ["$scope", "$element", "$attrs", "$timeout", function (b, d, e, f) {
        function g(b, c, e) {
          var f = a.get(b, D(d)),
              g = h(b, c),
              i = { state: f || { name: b }, params: c, hash: g };return p.push(i), q[g] = e, function () {
            var a = p.indexOf(i);a !== -1 && p.splice(a, 1);
          };
        }function h(a, c) {
          if (!O(a)) throw new Error("state should be a string");return P(c) ? a + U(c) : (c = b.$eval(c), P(c) ? a + U(c) : a);
        }function i() {
          for (var a = 0; a < p.length; a++) {
            l(p[a].state, p[a].params) ? j(d, q[p[a].hash]) : k(d, q[p[a].hash]), m(p[a].state, p[a].params) ? j(d, n) : k(d, n);
          }
        }function j(a, b) {
          f(function () {
            a.addClass(b);
          });
        }function k(a, b) {
          a.removeClass(b);
        }function l(b, c) {
          return a.includes(b.name, c);
        }function m(b, c) {
          return a.is(b.name, c);
        }var n,
            o,
            p = [],
            q = {};n = c(e.uiSrefActiveEq || "", !1)(b);try {
          o = b.$eval(e.uiSrefActive);
        } catch (a) {}o = o || c(e.uiSrefActive || "", !1)(b), P(o) && R(o, function (c, d) {
          if (O(c)) {
            var e = C(c, a.current.name);g(e.state, b.$eval(e.paramExpr), d);
          }
        }), this.$$addStateInfo = function (a, b) {
          if (!(P(o) && p.length > 0)) {
            var c = g(a, b, o);return i(), c;
          }
        }, b.$on("$stateChangeSuccess", i), i();
      }] };
  }function K(a) {
    var b = function b(_b, c) {
      return a.is(_b, c);
    };return b.$stateful = !0, b;
  }function L(a) {
    var b = function b(_b2, c, d) {
      return a.includes(_b2, c, d);
    };return b.$stateful = !0, b;
  }var M = b.isDefined,
      N = b.isFunction,
      O = b.isString,
      P = b.isObject,
      Q = b.isArray,
      R = b.forEach,
      S = b.extend,
      T = b.copy,
      U = b.toJson;b.module("ui.router.util", ["ng"]), b.module("ui.router.router", ["ui.router.util"]), b.module("ui.router.state", ["ui.router.router", "ui.router.util"]), b.module("ui.router", ["ui.router.state"]), b.module("ui.router.compat", ["ui.router"]), q.$inject = ["$q", "$injector"], b.module("ui.router.util").service("$resolve", q), r.$inject = ["$http", "$templateCache", "$injector"], b.module("ui.router.util").service("$templateFactory", r);var V;s.prototype.concat = function (a, b) {
    var c = { caseInsensitive: V.caseInsensitive(), strict: V.strictMode(), squash: V.defaultSquashPolicy() };return new s(this.sourcePath + a + this.sourceSearch, S(c, b), this);
  }, s.prototype.toString = function () {
    return this.source;
  }, s.prototype.exec = function (a, b) {
    function c(a) {
      function b(a) {
        return a.split("").reverse().join("");
      }function c(a) {
        return a.replace(/\\-/g, "-");
      }var d = b(a).split(/-(?!\\)/),
          e = o(d, b);return o(e, c).reverse();
    }var d = this.regexp.exec(a);if (!d) return null;b = b || {};var e,
        f,
        g,
        h = this.parameters(),
        i = h.length,
        j = this.segments.length - 1,
        k = {};if (j !== d.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");var l, m;for (e = 0; e < j; e++) {
      for (g = h[e], l = this.params[g], m = d[e + 1], f = 0; f < l.replace.length; f++) {
        l.replace[f].from === m && (m = l.replace[f].to);
      }m && l.array === !0 && (m = c(m)), M(m) && (m = l.type.decode(m)), k[g] = l.value(m);
    }for (; e < i; e++) {
      for (g = h[e], k[g] = this.params[g].value(b[g]), l = this.params[g], m = b[g], f = 0; f < l.replace.length; f++) {
        l.replace[f].from === m && (m = l.replace[f].to);
      }M(m) && (m = l.type.decode(m)), k[g] = l.value(m);
    }return k;
  }, s.prototype.parameters = function (a) {
    return M(a) ? this.params[a] || null : this.$$paramNames;
  }, s.prototype.validates = function (a) {
    return this.params.$$validates(a);
  }, s.prototype.format = function (a) {
    function b(a) {
      return encodeURIComponent(a).replace(/-/g, function (a) {
        return "%5C%" + a.charCodeAt(0).toString(16).toUpperCase();
      });
    }a = a || {};var c = this.segments,
        d = this.parameters(),
        e = this.params;if (!this.validates(a)) return null;var f,
        g = !1,
        h = c.length - 1,
        i = d.length,
        j = c[0];for (f = 0; f < i; f++) {
      var k = f < h,
          l = d[f],
          m = e[l],
          n = m.value(a[l]),
          p = m.isOptional && m.type.equals(m.value(), n),
          q = !!p && m.squash,
          r = m.type.encode(n);if (k) {
        var s = c[f + 1],
            t = f + 1 === h;if (q === !1) null != r && (j += Q(r) ? o(r, b).join("-") : encodeURIComponent(r)), j += s;else if (q === !0) {
          var u = j.match(/\/$/) ? /\/?(.*)/ : /(.*)/;j += s.match(u)[1];
        } else O(q) && (j += q + s);t && m.squash === !0 && "/" === j.slice(-1) && (j = j.slice(0, -1));
      } else {
        if (null == r || p && q !== !1) continue;if (Q(r) || (r = [r]), 0 === r.length) continue;r = o(r, encodeURIComponent).join("&" + l + "="), j += (g ? "&" : "?") + (l + "=" + r), g = !0;
      }
    }return j;
  }, t.prototype.is = function (a, b) {
    return !0;
  }, t.prototype.encode = function (a, b) {
    return a;
  }, t.prototype.decode = function (a, b) {
    return a;
  }, t.prototype.equals = function (a, b) {
    return a == b;
  }, t.prototype.$subPattern = function () {
    var a = this.pattern.toString();return a.substr(1, a.length - 2);
  }, t.prototype.pattern = /.*/, t.prototype.toString = function () {
    return "{Type:" + this.name + "}";
  }, t.prototype.$normalize = function (a) {
    return this.is(a) ? a : this.decode(a);
  }, t.prototype.$asArray = function (a, b) {
    function d(a, b) {
      function d(a, b) {
        return function () {
          return a[b].apply(a, arguments);
        };
      }function e(a) {
        return Q(a) ? a : M(a) ? [a] : [];
      }function f(a) {
        switch (a.length) {case 0:
            return c;case 1:
            return "auto" === b ? a[0] : a;default:
            return a;}
      }function g(a) {
        return !a;
      }function h(a, b) {
        return function (c) {
          if (Q(c) && 0 === c.length) return c;c = e(c);var d = o(c, a);return b === !0 ? 0 === n(d, g).length : f(d);
        };
      }function i(a) {
        return function (b, c) {
          var d = e(b),
              f = e(c);if (d.length !== f.length) return !1;for (var g = 0; g < d.length; g++) {
            if (!a(d[g], f[g])) return !1;
          }return !0;
        };
      }this.encode = h(d(a, "encode")), this.decode = h(d(a, "decode")), this.is = h(d(a, "is"), !0), this.equals = i(d(a, "equals")), this.pattern = a.pattern, this.$normalize = h(d(a, "$normalize")), this.name = a.name, this.$arrayMode = b;
    }if (!a) return this;if ("auto" === a && !b) throw new Error("'auto' array mode is for query parameters only");return new d(this, a);
  }, b.module("ui.router.util").provider("$urlMatcherFactory", u), b.module("ui.router.util").run(["$urlMatcherFactory", function (a) {}]), v.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.router").provider("$urlRouter", v), w.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.state").factory("$stateParams", function () {
    return {};
  }).constant("$state.runtime", { autoinject: !0 }).provider("$state", w).run(["$injector", function (a) {
    a.get("$state.runtime").autoinject && a.get("$state");
  }]), x.$inject = [], b.module("ui.router.state").provider("$view", x), b.module("ui.router.state").provider("$uiViewScroll", y), z.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate", "$q"], A.$inject = ["$compile", "$controller", "$state", "$interpolate"], b.module("ui.router.state").directive("uiView", z), b.module("ui.router.state").directive("uiView", A), H.$inject = ["$state", "$timeout"], I.$inject = ["$state", "$timeout"], J.$inject = ["$state", "$stateParams", "$interpolate"], b.module("ui.router.state").directive("uiSref", H).directive("uiSrefActive", J).directive("uiSrefActiveEq", J).directive("uiState", I), K.$inject = ["$state"], L.$inject = ["$state"], b.module("ui.router.state").filter("isState", K).filter("includedByState", L);
}(window, window.angular);
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.4.0
 *
 * Copyright 2016 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!function (t) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = t();else if ("function" == typeof define && define.amd) define([], t);else {
    var e;e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Chart = t();
  }
}(function () {
  return function t(e, a, i) {
    function n(r, l) {
      if (!a[r]) {
        if (!e[r]) {
          var s = "function" == typeof require && require;if (!l && s) return s(r, !0);if (o) return o(r, !0);var d = new Error("Cannot find module '" + r + "'");throw d.code = "MODULE_NOT_FOUND", d;
        }var u = a[r] = { exports: {} };e[r][0].call(u.exports, function (t) {
          var a = e[r][1][t];return n(a ? a : t);
        }, u, u.exports, t, e, a, i);
      }return a[r].exports;
    }for (var o = "function" == typeof require && require, r = 0; r < i.length; r++) {
      n(i[r]);
    }return n;
  }({ 1: [function (t, e, a) {}, {}], 2: [function (t, e, a) {
      function i(t) {
        if (t) {
          var e = /^#([a-fA-F0-9]{3})$/,
              a = /^#([a-fA-F0-9]{6})$/,
              i = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
              n = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
              o = /(\w+)/,
              r = [0, 0, 0],
              l = 1,
              s = t.match(e);if (s) {
            s = s[1];for (var d = 0; d < r.length; d++) {
              r[d] = parseInt(s[d] + s[d], 16);
            }
          } else if (s = t.match(a)) {
            s = s[1];for (var d = 0; d < r.length; d++) {
              r[d] = parseInt(s.slice(2 * d, 2 * d + 2), 16);
            }
          } else if (s = t.match(i)) {
            for (var d = 0; d < r.length; d++) {
              r[d] = parseInt(s[d + 1]);
            }l = parseFloat(s[4]);
          } else if (s = t.match(n)) {
            for (var d = 0; d < r.length; d++) {
              r[d] = Math.round(2.55 * parseFloat(s[d + 1]));
            }l = parseFloat(s[4]);
          } else if (s = t.match(o)) {
            if ("transparent" == s[1]) return [0, 0, 0, 0];if (r = y[s[1]], !r) return;
          }for (var d = 0; d < r.length; d++) {
            r[d] = v(r[d], 0, 255);
          }return l = l || 0 == l ? v(l, 0, 1) : 1, r[3] = l, r;
        }
      }function n(t) {
        if (t) {
          var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
              a = t.match(e);if (a) {
            var i = parseFloat(a[4]),
                n = v(parseInt(a[1]), 0, 360),
                o = v(parseFloat(a[2]), 0, 100),
                r = v(parseFloat(a[3]), 0, 100),
                l = v(isNaN(i) ? 1 : i, 0, 1);return [n, o, r, l];
          }
        }
      }function o(t) {
        if (t) {
          var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
              a = t.match(e);if (a) {
            var i = parseFloat(a[4]),
                n = v(parseInt(a[1]), 0, 360),
                o = v(parseFloat(a[2]), 0, 100),
                r = v(parseFloat(a[3]), 0, 100),
                l = v(isNaN(i) ? 1 : i, 0, 1);return [n, o, r, l];
          }
        }
      }function r(t) {
        var e = i(t);return e && e.slice(0, 3);
      }function l(t) {
        var e = n(t);return e && e.slice(0, 3);
      }function s(t) {
        var e = i(t);return e ? e[3] : (e = n(t)) ? e[3] : (e = o(t)) ? e[3] : void 0;
      }function d(t) {
        return "#" + x(t[0]) + x(t[1]) + x(t[2]);
      }function u(t, e) {
        return 1 > e || t[3] && t[3] < 1 ? c(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
      }function c(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")";
      }function h(t, e) {
        if (1 > e || t[3] && t[3] < 1) return f(t, e);var a = Math.round(t[0] / 255 * 100),
            i = Math.round(t[1] / 255 * 100),
            n = Math.round(t[2] / 255 * 100);return "rgb(" + a + "%, " + i + "%, " + n + "%)";
      }function f(t, e) {
        var a = Math.round(t[0] / 255 * 100),
            i = Math.round(t[1] / 255 * 100),
            n = Math.round(t[2] / 255 * 100);return "rgba(" + a + "%, " + i + "%, " + n + "%, " + (e || t[3] || 1) + ")";
      }function g(t, e) {
        return 1 > e || t[3] && t[3] < 1 ? p(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
      }function p(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")";
      }function m(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")";
      }function b(t) {
        return k[t.slice(0, 3)];
      }function v(t, e, a) {
        return Math.min(Math.max(e, t), a);
      }function x(t) {
        var e = t.toString(16).toUpperCase();return e.length < 2 ? "0" + e : e;
      }var y = t(6);e.exports = { getRgba: i, getHsla: n, getRgb: r, getHsl: l, getHwb: o, getAlpha: s, hexString: d, rgbString: u, rgbaString: c, percentString: h, percentaString: f, hslString: g, hslaString: p, hwbString: m, keyword: b };var k = {};for (var S in y) {
        k[y[S]] = S;
      }
    }, { 6: 6 }], 3: [function (t, e, a) {
      var i = t(5),
          n = t(2),
          o = function o(t) {
        if (t instanceof o) return t;if (!(this instanceof o)) return new o(t);this.values = { rgb: [0, 0, 0], hsl: [0, 0, 0], hsv: [0, 0, 0], hwb: [0, 0, 0], cmyk: [0, 0, 0, 0], alpha: 1 };var e;if ("string" == typeof t) {
          if (e = n.getRgba(t)) this.setValues("rgb", e);else if (e = n.getHsla(t)) this.setValues("hsl", e);else {
            if (!(e = n.getHwb(t))) throw new Error('Unable to parse color from string "' + t + '"');this.setValues("hwb", e);
          }
        } else if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) if (e = t, void 0 !== e.r || void 0 !== e.red) this.setValues("rgb", e);else if (void 0 !== e.l || void 0 !== e.lightness) this.setValues("hsl", e);else if (void 0 !== e.v || void 0 !== e.value) this.setValues("hsv", e);else if (void 0 !== e.w || void 0 !== e.whiteness) this.setValues("hwb", e);else {
          if (void 0 === e.c && void 0 === e.cyan) throw new Error("Unable to parse color from object " + JSON.stringify(t));this.setValues("cmyk", e);
        }
      };o.prototype = { rgb: function rgb() {
          return this.setSpace("rgb", arguments);
        }, hsl: function hsl() {
          return this.setSpace("hsl", arguments);
        }, hsv: function hsv() {
          return this.setSpace("hsv", arguments);
        }, hwb: function hwb() {
          return this.setSpace("hwb", arguments);
        }, cmyk: function cmyk() {
          return this.setSpace("cmyk", arguments);
        }, rgbArray: function rgbArray() {
          return this.values.rgb;
        }, hslArray: function hslArray() {
          return this.values.hsl;
        }, hsvArray: function hsvArray() {
          return this.values.hsv;
        }, hwbArray: function hwbArray() {
          var t = this.values;return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
        }, cmykArray: function cmykArray() {
          return this.values.cmyk;
        }, rgbaArray: function rgbaArray() {
          var t = this.values;return t.rgb.concat([t.alpha]);
        }, hslaArray: function hslaArray() {
          var t = this.values;return t.hsl.concat([t.alpha]);
        }, alpha: function alpha(t) {
          return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this);
        }, red: function red(t) {
          return this.setChannel("rgb", 0, t);
        }, green: function green(t) {
          return this.setChannel("rgb", 1, t);
        }, blue: function blue(t) {
          return this.setChannel("rgb", 2, t);
        }, hue: function hue(t) {
          return t && (t %= 360, t = 0 > t ? 360 + t : t), this.setChannel("hsl", 0, t);
        }, saturation: function saturation(t) {
          return this.setChannel("hsl", 1, t);
        }, lightness: function lightness(t) {
          return this.setChannel("hsl", 2, t);
        }, saturationv: function saturationv(t) {
          return this.setChannel("hsv", 1, t);
        }, whiteness: function whiteness(t) {
          return this.setChannel("hwb", 1, t);
        }, blackness: function blackness(t) {
          return this.setChannel("hwb", 2, t);
        }, value: function value(t) {
          return this.setChannel("hsv", 2, t);
        }, cyan: function cyan(t) {
          return this.setChannel("cmyk", 0, t);
        }, magenta: function magenta(t) {
          return this.setChannel("cmyk", 1, t);
        }, yellow: function yellow(t) {
          return this.setChannel("cmyk", 2, t);
        }, black: function black(t) {
          return this.setChannel("cmyk", 3, t);
        }, hexString: function hexString() {
          return n.hexString(this.values.rgb);
        }, rgbString: function rgbString() {
          return n.rgbString(this.values.rgb, this.values.alpha);
        }, rgbaString: function rgbaString() {
          return n.rgbaString(this.values.rgb, this.values.alpha);
        }, percentString: function percentString() {
          return n.percentString(this.values.rgb, this.values.alpha);
        }, hslString: function hslString() {
          return n.hslString(this.values.hsl, this.values.alpha);
        }, hslaString: function hslaString() {
          return n.hslaString(this.values.hsl, this.values.alpha);
        }, hwbString: function hwbString() {
          return n.hwbString(this.values.hwb, this.values.alpha);
        }, keyword: function keyword() {
          return n.keyword(this.values.rgb, this.values.alpha);
        }, rgbNumber: function rgbNumber() {
          var t = this.values.rgb;return t[0] << 16 | t[1] << 8 | t[2];
        }, luminosity: function luminosity() {
          for (var t = this.values.rgb, e = [], a = 0; a < t.length; a++) {
            var i = t[a] / 255;e[a] = .03928 >= i ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4);
          }return .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
        }, contrast: function contrast(t) {
          var e = this.luminosity(),
              a = t.luminosity();return e > a ? (e + .05) / (a + .05) : (a + .05) / (e + .05);
        }, level: function level(t) {
          var e = this.contrast(t);return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
        }, dark: function dark() {
          var t = this.values.rgb,
              e = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3;return 128 > e;
        }, light: function light() {
          return !this.dark();
        }, negate: function negate() {
          for (var t = [], e = 0; 3 > e; e++) {
            t[e] = 255 - this.values.rgb[e];
          }return this.setValues("rgb", t), this;
        }, lighten: function lighten(t) {
          var e = this.values.hsl;return e[2] += e[2] * t, this.setValues("hsl", e), this;
        }, darken: function darken(t) {
          var e = this.values.hsl;return e[2] -= e[2] * t, this.setValues("hsl", e), this;
        }, saturate: function saturate(t) {
          var e = this.values.hsl;return e[1] += e[1] * t, this.setValues("hsl", e), this;
        }, desaturate: function desaturate(t) {
          var e = this.values.hsl;return e[1] -= e[1] * t, this.setValues("hsl", e), this;
        }, whiten: function whiten(t) {
          var e = this.values.hwb;return e[1] += e[1] * t, this.setValues("hwb", e), this;
        }, blacken: function blacken(t) {
          var e = this.values.hwb;return e[2] += e[2] * t, this.setValues("hwb", e), this;
        }, greyscale: function greyscale() {
          var t = this.values.rgb,
              e = .3 * t[0] + .59 * t[1] + .11 * t[2];return this.setValues("rgb", [e, e, e]), this;
        }, clearer: function clearer(t) {
          var e = this.values.alpha;return this.setValues("alpha", e - e * t), this;
        }, opaquer: function opaquer(t) {
          var e = this.values.alpha;return this.setValues("alpha", e + e * t), this;
        }, rotate: function rotate(t) {
          var e = this.values.hsl,
              a = (e[0] + t) % 360;return e[0] = 0 > a ? 360 + a : a, this.setValues("hsl", e), this;
        }, mix: function mix(t, e) {
          var a = this,
              i = t,
              n = void 0 === e ? .5 : e,
              o = 2 * n - 1,
              r = a.alpha() - i.alpha(),
              l = ((o * r === -1 ? o : (o + r) / (1 + o * r)) + 1) / 2,
              s = 1 - l;return this.rgb(l * a.red() + s * i.red(), l * a.green() + s * i.green(), l * a.blue() + s * i.blue()).alpha(a.alpha() * n + i.alpha() * (1 - n));
        }, toJSON: function toJSON() {
          return this.rgb();
        }, clone: function clone() {
          var t,
              e,
              a = new o(),
              i = this.values,
              n = a.values;for (var r in i) {
            i.hasOwnProperty(r) && (t = i[r], e = {}.toString.call(t), "[object Array]" === e ? n[r] = t.slice(0) : "[object Number]" === e ? n[r] = t : console.error("unexpected color value:", t));
          }return a;
        } }, o.prototype.spaces = { rgb: ["red", "green", "blue"], hsl: ["hue", "saturation", "lightness"], hsv: ["hue", "saturation", "value"], hwb: ["hue", "whiteness", "blackness"], cmyk: ["cyan", "magenta", "yellow", "black"] }, o.prototype.maxes = { rgb: [255, 255, 255], hsl: [360, 100, 100], hsv: [360, 100, 100], hwb: [360, 100, 100], cmyk: [100, 100, 100, 100] }, o.prototype.getValues = function (t) {
        for (var e = this.values, a = {}, i = 0; i < t.length; i++) {
          a[t.charAt(i)] = e[t][i];
        }return 1 !== e.alpha && (a.a = e.alpha), a;
      }, o.prototype.setValues = function (t, e) {
        var a,
            n = this.values,
            o = this.spaces,
            r = this.maxes,
            l = 1;if ("alpha" === t) l = e;else if (e.length) n[t] = e.slice(0, t.length), l = e[t.length];else if (void 0 !== e[t.charAt(0)]) {
          for (a = 0; a < t.length; a++) {
            n[t][a] = e[t.charAt(a)];
          }l = e.a;
        } else if (void 0 !== e[o[t][0]]) {
          var s = o[t];for (a = 0; a < t.length; a++) {
            n[t][a] = e[s[a]];
          }l = e.alpha;
        }if (n.alpha = Math.max(0, Math.min(1, void 0 === l ? n.alpha : l)), "alpha" === t) return !1;var d;for (a = 0; a < t.length; a++) {
          d = Math.max(0, Math.min(r[t][a], n[t][a])), n[t][a] = Math.round(d);
        }for (var u in o) {
          u !== t && (n[u] = i[t][u](n[t]));
        }return !0;
      }, o.prototype.setSpace = function (t, e) {
        var a = e[0];return void 0 === a ? this.getValues(t) : ("number" == typeof a && (a = Array.prototype.slice.call(e)), this.setValues(t, a), this);
      }, o.prototype.setChannel = function (t, e, a) {
        var i = this.values[t];return void 0 === a ? i[e] : a === i[e] ? this : (i[e] = a, this.setValues(t, i), this);
      }, "undefined" != typeof window && (window.Color = o), e.exports = o;
    }, { 2: 2, 5: 5 }], 4: [function (t, e, a) {
      function i(t) {
        var e,
            a,
            i,
            n = t[0] / 255,
            o = t[1] / 255,
            r = t[2] / 255,
            l = Math.min(n, o, r),
            s = Math.max(n, o, r),
            d = s - l;return s == l ? e = 0 : n == s ? e = (o - r) / d : o == s ? e = 2 + (r - n) / d : r == s && (e = 4 + (n - o) / d), e = Math.min(60 * e, 360), 0 > e && (e += 360), i = (l + s) / 2, a = s == l ? 0 : .5 >= i ? d / (s + l) : d / (2 - s - l), [e, 100 * a, 100 * i];
      }function n(t) {
        var e,
            a,
            i,
            n = t[0],
            o = t[1],
            r = t[2],
            l = Math.min(n, o, r),
            s = Math.max(n, o, r),
            d = s - l;return a = 0 == s ? 0 : d / s * 1e3 / 10, s == l ? e = 0 : n == s ? e = (o - r) / d : o == s ? e = 2 + (r - n) / d : r == s && (e = 4 + (n - o) / d), e = Math.min(60 * e, 360), 0 > e && (e += 360), i = s / 255 * 1e3 / 10, [e, a, i];
      }function o(t) {
        var e = t[0],
            a = t[1],
            n = t[2],
            o = i(t)[0],
            r = 1 / 255 * Math.min(e, Math.min(a, n)),
            n = 1 - 1 / 255 * Math.max(e, Math.max(a, n));return [o, 100 * r, 100 * n];
      }function l(t) {
        var e,
            a,
            i,
            n,
            o = t[0] / 255,
            r = t[1] / 255,
            l = t[2] / 255;return n = Math.min(1 - o, 1 - r, 1 - l), e = (1 - o - n) / (1 - n) || 0, a = (1 - r - n) / (1 - n) || 0, i = (1 - l - n) / (1 - n) || 0, [100 * e, 100 * a, 100 * i, 100 * n];
      }function s(t) {
        return G[JSON.stringify(t)];
      }function d(t) {
        var e = t[0] / 255,
            a = t[1] / 255,
            i = t[2] / 255;e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92, i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92;var n = .4124 * e + .3576 * a + .1805 * i,
            o = .2126 * e + .7152 * a + .0722 * i,
            r = .0193 * e + .1192 * a + .9505 * i;return [100 * n, 100 * o, 100 * r];
      }function u(t) {
        var e,
            a,
            i,
            n = d(t),
            o = n[0],
            r = n[1],
            l = n[2];return o /= 95.047, r /= 100, l /= 108.883, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, l = l > .008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116, e = 116 * r - 16, a = 500 * (o - r), i = 200 * (r - l), [e, a, i];
      }function c(t) {
        return W(u(t));
      }function h(t) {
        var e,
            a,
            i,
            n,
            o,
            r = t[0] / 360,
            l = t[1] / 100,
            s = t[2] / 100;if (0 == l) return o = 255 * s, [o, o, o];a = .5 > s ? s * (1 + l) : s + l - s * l, e = 2 * s - a, n = [0, 0, 0];for (var d = 0; 3 > d; d++) {
          i = r + 1 / 3 * -(d - 1), 0 > i && i++, i > 1 && i--, o = 1 > 6 * i ? e + 6 * (a - e) * i : 1 > 2 * i ? a : 2 > 3 * i ? e + (a - e) * (2 / 3 - i) * 6 : e, n[d] = 255 * o;
        }return n;
      }function f(t) {
        var e,
            a,
            i = t[0],
            n = t[1] / 100,
            o = t[2] / 100;return 0 === o ? [0, 0, 0] : (o *= 2, n *= 1 >= o ? o : 2 - o, a = (o + n) / 2, e = 2 * n / (o + n), [i, 100 * e, 100 * a]);
      }function p(t) {
        return o(h(t));
      }function m(t) {
        return l(h(t));
      }function v(t) {
        return s(h(t));
      }function x(t) {
        var e = t[0] / 60,
            a = t[1] / 100,
            i = t[2] / 100,
            n = Math.floor(e) % 6,
            o = e - Math.floor(e),
            r = 255 * i * (1 - a),
            l = 255 * i * (1 - a * o),
            s = 255 * i * (1 - a * (1 - o)),
            i = 255 * i;switch (n) {case 0:
            return [i, s, r];case 1:
            return [l, i, r];case 2:
            return [r, i, s];case 3:
            return [r, l, i];case 4:
            return [s, r, i];case 5:
            return [i, r, l];}
      }function y(t) {
        var e,
            a,
            i = t[0],
            n = t[1] / 100,
            o = t[2] / 100;return a = (2 - n) * o, e = n * o, e /= 1 >= a ? a : 2 - a, e = e || 0, a /= 2, [i, 100 * e, 100 * a];
      }function k(t) {
        return o(x(t));
      }function S(t) {
        return l(x(t));
      }function w(t) {
        return s(x(t));
      }function M(t) {
        var e,
            a,
            i,
            n,
            o = t[0] / 360,
            l = t[1] / 100,
            s = t[2] / 100,
            d = l + s;switch (d > 1 && (l /= d, s /= d), e = Math.floor(6 * o), a = 1 - s, i = 6 * o - e, 0 != (1 & e) && (i = 1 - i), n = l + i * (a - l), e) {default:case 6:case 0:
            r = a, g = n, b = l;break;case 1:
            r = n, g = a, b = l;break;case 2:
            r = l, g = a, b = n;break;case 3:
            r = l, g = n, b = a;break;case 4:
            r = n, g = l, b = a;break;case 5:
            r = a, g = l, b = n;}return [255 * r, 255 * g, 255 * b];
      }function C(t) {
        return i(M(t));
      }function D(t) {
        return n(M(t));
      }function I(t) {
        return l(M(t));
      }function A(t) {
        return s(M(t));
      }function T(t) {
        var e,
            a,
            i,
            n = t[0] / 100,
            o = t[1] / 100,
            r = t[2] / 100,
            l = t[3] / 100;return e = 1 - Math.min(1, n * (1 - l) + l), a = 1 - Math.min(1, o * (1 - l) + l), i = 1 - Math.min(1, r * (1 - l) + l), [255 * e, 255 * a, 255 * i];
      }function P(t) {
        return i(T(t));
      }function F(t) {
        return n(T(t));
      }function _(t) {
        return o(T(t));
      }function R(t) {
        return s(T(t));
      }function V(t) {
        var e,
            a,
            i,
            n = t[0] / 100,
            o = t[1] / 100,
            r = t[2] / 100;return e = 3.2406 * n + -1.5372 * o + r * -.4986, a = n * -.9689 + 1.8758 * o + .0415 * r, i = .0557 * n + o * -.204 + 1.057 * r, e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e = 12.92 * e, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : a = 12.92 * a, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i = 12.92 * i, e = Math.min(Math.max(0, e), 1), a = Math.min(Math.max(0, a), 1), i = Math.min(Math.max(0, i), 1), [255 * e, 255 * a, 255 * i];
      }function L(t) {
        var e,
            a,
            i,
            n = t[0],
            o = t[1],
            r = t[2];return n /= 95.047, o /= 100, r /= 108.883, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, e = 116 * o - 16, a = 500 * (n - o), i = 200 * (o - r), [e, a, i];
      }function O(t) {
        return W(L(t));
      }function B(t) {
        var e,
            a,
            i,
            n,
            o = t[0],
            r = t[1],
            l = t[2];return 8 >= o ? (a = 100 * o / 903.3, n = 7.787 * (a / 100) + 16 / 116) : (a = 100 * Math.pow((o + 16) / 116, 3), n = Math.pow(a / 100, 1 / 3)), e = .008856 >= e / 95.047 ? e = 95.047 * (r / 500 + n - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + n, 3), i = .008859 >= i / 108.883 ? i = 108.883 * (n - l / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(n - l / 200, 3), [e, a, i];
      }function W(t) {
        var e,
            a,
            i,
            n = t[0],
            o = t[1],
            r = t[2];return e = Math.atan2(r, o), a = 360 * e / 2 / Math.PI, 0 > a && (a += 360), i = Math.sqrt(o * o + r * r), [n, i, a];
      }function z(t) {
        return V(B(t));
      }function N(t) {
        var e,
            a,
            i,
            n = t[0],
            o = t[1],
            r = t[2];return i = r / 360 * 2 * Math.PI, e = o * Math.cos(i), a = o * Math.sin(i), [n, e, a];
      }function E(t) {
        return B(N(t));
      }function H(t) {
        return z(N(t));
      }function U(t) {
        return Z[t];
      }function j(t) {
        return i(U(t));
      }function q(t) {
        return n(U(t));
      }function Y(t) {
        return o(U(t));
      }function X(t) {
        return l(U(t));
      }function K(t) {
        return u(U(t));
      }function J(t) {
        return d(U(t));
      }e.exports = { rgb2hsl: i, rgb2hsv: n, rgb2hwb: o, rgb2cmyk: l, rgb2keyword: s, rgb2xyz: d, rgb2lab: u, rgb2lch: c, hsl2rgb: h, hsl2hsv: f, hsl2hwb: p, hsl2cmyk: m, hsl2keyword: v, hsv2rgb: x, hsv2hsl: y, hsv2hwb: k, hsv2cmyk: S, hsv2keyword: w, hwb2rgb: M, hwb2hsl: C, hwb2hsv: D, hwb2cmyk: I, hwb2keyword: A, cmyk2rgb: T, cmyk2hsl: P, cmyk2hsv: F, cmyk2hwb: _, cmyk2keyword: R, keyword2rgb: U, keyword2hsl: j, keyword2hsv: q, keyword2hwb: Y, keyword2cmyk: X, keyword2lab: K, keyword2xyz: J, xyz2rgb: V, xyz2lab: L, xyz2lch: O, lab2xyz: B, lab2rgb: z, lab2lch: W, lch2lab: N, lch2xyz: E, lch2rgb: H };var Z = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
          G = {};for (var Q in Z) {
        G[JSON.stringify(Z[Q])] = Q;
      }
    }, {}], 5: [function (t, e, a) {
      var i = t(4),
          n = function n() {
        return new d();
      };for (var o in i) {
        n[o + "Raw"] = function (t) {
          return function (e) {
            return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), i[t](e);
          };
        }(o);var r = /(\w+)2(\w+)/.exec(o),
            l = r[1],
            s = r[2];n[l] = n[l] || {}, n[l][s] = n[o] = function (t) {
          return function (e) {
            "number" == typeof e && (e = Array.prototype.slice.call(arguments));var a = i[t](e);if ("string" == typeof a || void 0 === a) return a;for (var n = 0; n < a.length; n++) {
              a[n] = Math.round(a[n]);
            }return a;
          };
        }(o);
      }var d = function d() {
        this.convs = {};
      };d.prototype.routeSpace = function (t, e) {
        var a = e[0];return void 0 === a ? this.getValues(t) : ("number" == typeof a && (a = Array.prototype.slice.call(e)), this.setValues(t, a));
      }, d.prototype.setValues = function (t, e) {
        return this.space = t, this.convs = {}, this.convs[t] = e, this;
      }, d.prototype.getValues = function (t) {
        var e = this.convs[t];if (!e) {
          var a = this.space,
              i = this.convs[a];e = n[a][t](i), this.convs[t] = e;
        }return e;
      }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
        d.prototype[t] = function (e) {
          return this.routeSpace(t, arguments);
        };
      }), e.exports = n;
    }, { 4: 4 }], 6: [function (t, e, a) {
      e.exports = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
    }, {}], 7: [function (t, e, a) {
      var i = t(28)();t(26)(i), t(22)(i), t(25)(i), t(21)(i), t(23)(i), t(24)(i), t(29)(i), t(33)(i), t(31)(i), t(34)(i), t(32)(i), t(35)(i), t(30)(i), t(27)(i), t(36)(i), t(37)(i), t(38)(i), t(39)(i), t(40)(i), t(43)(i), t(41)(i), t(42)(i), t(44)(i), t(45)(i), t(46)(i), t(15)(i), t(16)(i), t(17)(i), t(18)(i), t(19)(i), t(20)(i), t(8)(i), t(9)(i), t(10)(i), t(11)(i), t(12)(i), t(13)(i), t(14)(i), window.Chart = e.exports = i;
    }, { 10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 15: 15, 16: 16, 17: 17, 18: 18, 19: 19, 20: 20, 21: 21, 22: 22, 23: 23, 24: 24, 25: 25, 26: 26, 27: 27, 28: 28, 29: 29, 30: 30, 31: 31, 32: 32, 33: 33, 34: 34, 35: 35, 36: 36, 37: 37, 38: 38, 39: 39, 40: 40, 41: 41, 42: 42, 43: 43, 44: 44, 45: 45, 46: 46, 8: 8, 9: 9 }], 8: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        t.Bar = function (e, a) {
          return a.type = "bar", new t(e, a);
        };
      };
    }, {}], 9: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        t.Bubble = function (e, a) {
          return a.type = "bubble", new t(e, a);
        };
      };
    }, {}], 10: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        t.Doughnut = function (e, a) {
          return a.type = "doughnut", new t(e, a);
        };
      };
    }, {}], 11: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        t.Line = function (e, a) {
          return a.type = "line", new t(e, a);
        };
      };
    }, {}], 12: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        t.PolarArea = function (e, a) {
          return a.type = "polarArea", new t(e, a);
        };
      };
    }, {}], 13: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        t.Radar = function (e, a) {
          return a.type = "radar", new t(e, a);
        };
      };
    }, {}], 14: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = { hover: { mode: "single" }, scales: { xAxes: [{ type: "linear", position: "bottom", id: "x-axis-1" }], yAxes: [{ type: "linear", position: "left", id: "y-axis-1" }] }, tooltips: { callbacks: { title: function title() {
                return "";
              }, label: function label(t) {
                return "(" + t.xLabel + ", " + t.yLabel + ")";
              } } } };t.defaults.scatter = e, t.controllers.scatter = t.controllers.line, t.Scatter = function (e, a) {
          return a.type = "scatter", new t(e, a);
        };
      };
    }, {}], 15: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers;t.defaults.bar = { hover: { mode: "label" }, scales: { xAxes: [{ type: "category", categoryPercentage: .8, barPercentage: .9, gridLines: { offsetGridLines: !0 } }], yAxes: [{ type: "linear" }] } }, t.controllers.bar = t.DatasetController.extend({ dataElementType: t.elements.Rectangle, initialize: function initialize(e, a) {
            t.DatasetController.prototype.initialize.call(this, e, a), this.getMeta().bar = !0;
          }, getBarCount: function getBarCount() {
            var t = this,
                a = 0;return e.each(t.chart.data.datasets, function (e, i) {
              var n = t.chart.getDatasetMeta(i);n.bar && t.chart.isDatasetVisible(i) && ++a;
            }, t), a;
          }, update: function update(t) {
            var a = this;e.each(a.getMeta().data, function (e, i) {
              a.updateElement(e, i, t);
            }, a);
          }, updateElement: function updateElement(t, a, i) {
            var n = this,
                o = n.getMeta(),
                r = n.getScaleForId(o.xAxisID),
                l = n.getScaleForId(o.yAxisID),
                s = l.getBasePixel(),
                d = n.chart.options.elements.rectangle,
                u = t.custom || {},
                c = n.getDataset();t._xScale = r, t._yScale = l, t._datasetIndex = n.index, t._index = a;var h = n.getRuler(a);t._model = { x: n.calculateBarX(a, n.index, h), y: i ? s : n.calculateBarY(a, n.index), label: n.chart.data.labels[a], datasetLabel: c.label, base: i ? s : n.calculateBarBase(n.index, a), width: n.calculateBarWidth(h), backgroundColor: u.backgroundColor ? u.backgroundColor : e.getValueAtIndexOrDefault(c.backgroundColor, a, d.backgroundColor), borderSkipped: u.borderSkipped ? u.borderSkipped : d.borderSkipped, borderColor: u.borderColor ? u.borderColor : e.getValueAtIndexOrDefault(c.borderColor, a, d.borderColor), borderWidth: u.borderWidth ? u.borderWidth : e.getValueAtIndexOrDefault(c.borderWidth, a, d.borderWidth) }, t.pivot();
          }, calculateBarBase: function calculateBarBase(t, e) {
            var a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.yAxisID),
                o = 0;if (n.options.stacked) {
              for (var r = a.chart, l = r.data.datasets, s = Number(l[t].data[e]), d = 0; t > d; d++) {
                var u = l[d],
                    c = r.getDatasetMeta(d);if (c.bar && c.yAxisID === n.id && r.isDatasetVisible(d)) {
                  var h = Number(u.data[e]);o += 0 > s ? Math.min(h, 0) : Math.max(h, 0);
                }
              }return n.getPixelForValue(o);
            }return n.getBasePixel();
          }, getRuler: function getRuler(t) {
            var e,
                a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.xAxisID),
                o = a.getBarCount();e = "category" === n.options.type ? n.getPixelForTick(t + 1) - n.getPixelForTick(t) : n.width / n.ticks.length;var r = e * n.options.categoryPercentage,
                l = (e - e * n.options.categoryPercentage) / 2,
                s = r / o;if (n.ticks.length !== a.chart.data.labels.length) {
              var d = n.ticks.length / a.chart.data.labels.length;s *= d;
            }var u = s * n.options.barPercentage,
                c = s - s * n.options.barPercentage;return { datasetCount: o, tickWidth: e, categoryWidth: r, categorySpacing: l, fullBarWidth: s, barWidth: u, barSpacing: c };
          }, calculateBarWidth: function calculateBarWidth(t) {
            var e = this.getScaleForId(this.getMeta().xAxisID);return e.options.barThickness ? e.options.barThickness : e.options.stacked ? t.categoryWidth : t.barWidth;
          }, getBarIndex: function getBarIndex(t) {
            var e,
                a,
                i = 0;for (a = 0; t > a; ++a) {
              e = this.chart.getDatasetMeta(a), e.bar && this.chart.isDatasetVisible(a) && ++i;
            }return i;
          }, calculateBarX: function calculateBarX(t, e, a) {
            var i = this,
                n = i.getMeta(),
                o = i.getScaleForId(n.xAxisID),
                r = i.getBarIndex(e),
                l = o.getPixelForValue(null, t, e, i.chart.isCombo);return l -= i.chart.isCombo ? a.tickWidth / 2 : 0, o.options.stacked ? l + a.categoryWidth / 2 + a.categorySpacing : l + a.barWidth / 2 + a.categorySpacing + a.barWidth * r + a.barSpacing / 2 + a.barSpacing * r;
          }, calculateBarY: function calculateBarY(t, e) {
            var a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.yAxisID),
                o = Number(a.getDataset().data[t]);if (n.options.stacked) {
              for (var r = 0, l = 0, s = 0; e > s; s++) {
                var d = a.chart.data.datasets[s],
                    u = a.chart.getDatasetMeta(s);if (u.bar && u.yAxisID === n.id && a.chart.isDatasetVisible(s)) {
                  var c = Number(d.data[t]);0 > c ? l += c || 0 : r += c || 0;
                }
              }return 0 > o ? n.getPixelForValue(l + o) : n.getPixelForValue(r + o);
            }return n.getPixelForValue(o);
          }, draw: function draw(t) {
            var e,
                a,
                i = this,
                n = t || 1,
                o = i.getMeta().data,
                r = i.getDataset();for (e = 0, a = o.length; a > e; ++e) {
              var l = r.data[e];null === l || void 0 === l || isNaN(l) || o[e].transition(n).draw();
            }
          }, setHoverStyle: function setHoverStyle(t) {
            var a = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                o = t._model;o.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : e.getValueAtIndexOrDefault(a.hoverBackgroundColor, i, e.getHoverColor(o.backgroundColor)), o.borderColor = n.hoverBorderColor ? n.hoverBorderColor : e.getValueAtIndexOrDefault(a.hoverBorderColor, i, e.getHoverColor(o.borderColor)), o.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : e.getValueAtIndexOrDefault(a.hoverBorderWidth, i, o.borderWidth);
          }, removeHoverStyle: function removeHoverStyle(t) {
            var a = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                o = t._model,
                r = this.chart.options.elements.rectangle;o.backgroundColor = n.backgroundColor ? n.backgroundColor : e.getValueAtIndexOrDefault(a.backgroundColor, i, r.backgroundColor), o.borderColor = n.borderColor ? n.borderColor : e.getValueAtIndexOrDefault(a.borderColor, i, r.borderColor), o.borderWidth = n.borderWidth ? n.borderWidth : e.getValueAtIndexOrDefault(a.borderWidth, i, r.borderWidth);
          } }), t.defaults.horizontalBar = { hover: { mode: "label" }, scales: { xAxes: [{ type: "linear", position: "bottom" }], yAxes: [{ position: "left", type: "category", categoryPercentage: .8, barPercentage: .9, gridLines: { offsetGridLines: !0 } }] }, elements: { rectangle: { borderSkipped: "left" } }, tooltips: { callbacks: { title: function title(t, e) {
                var a = "";return t.length > 0 && (t[0].yLabel ? a = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (a = e.labels[t[0].index])), a;
              }, label: function label(t, e) {
                var a = e.datasets[t.datasetIndex].label || "";return a + ": " + t.xLabel;
              } } } }, t.controllers.horizontalBar = t.controllers.bar.extend({ updateElement: function updateElement(t, a, i) {
            var n = this,
                o = n.getMeta(),
                r = n.getScaleForId(o.xAxisID),
                l = n.getScaleForId(o.yAxisID),
                s = r.getBasePixel(),
                d = t.custom || {},
                u = n.getDataset(),
                c = n.chart.options.elements.rectangle;t._xScale = r, t._yScale = l, t._datasetIndex = n.index, t._index = a;var h = n.getRuler(a);t._model = { x: i ? s : n.calculateBarX(a, n.index), y: n.calculateBarY(a, n.index, h), label: n.chart.data.labels[a], datasetLabel: u.label, base: i ? s : n.calculateBarBase(n.index, a), height: n.calculateBarHeight(h), backgroundColor: d.backgroundColor ? d.backgroundColor : e.getValueAtIndexOrDefault(u.backgroundColor, a, c.backgroundColor), borderSkipped: d.borderSkipped ? d.borderSkipped : c.borderSkipped, borderColor: d.borderColor ? d.borderColor : e.getValueAtIndexOrDefault(u.borderColor, a, c.borderColor), borderWidth: d.borderWidth ? d.borderWidth : e.getValueAtIndexOrDefault(u.borderWidth, a, c.borderWidth) }, t.draw = function () {
              function t(t) {
                return s[(u + t) % 4];
              }var e = this._chart.ctx,
                  a = this._view,
                  i = a.height / 2,
                  n = a.y - i,
                  o = a.y + i,
                  r = a.base - (a.base - a.x),
                  l = a.borderWidth / 2;a.borderWidth && (n += l, o -= l, r += l), e.beginPath(), e.fillStyle = a.backgroundColor, e.strokeStyle = a.borderColor, e.lineWidth = a.borderWidth;var s = [[a.base, o], [a.base, n], [r, n], [r, o]],
                  d = ["bottom", "left", "top", "right"],
                  u = d.indexOf(a.borderSkipped, 0);-1 === u && (u = 0), e.moveTo.apply(e, t(0));for (var c = 1; 4 > c; c++) {
                e.lineTo.apply(e, t(c));
              }e.fill(), a.borderWidth && e.stroke();
            }, t.pivot();
          }, calculateBarBase: function calculateBarBase(t, e) {
            var a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.xAxisID),
                o = 0;if (n.options.stacked) {
              for (var r = a.chart, l = r.data.datasets, s = Number(l[t].data[e]), d = 0; t > d; d++) {
                var u = l[d],
                    c = r.getDatasetMeta(d);if (c.bar && c.xAxisID === n.id && r.isDatasetVisible(d)) {
                  var h = Number(u.data[e]);o += 0 > s ? Math.min(h, 0) : Math.max(h, 0);
                }
              }return n.getPixelForValue(o);
            }return n.getBasePixel();
          }, getRuler: function getRuler(t) {
            var e,
                a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.yAxisID),
                o = a.getBarCount();e = "category" === n.options.type ? n.getPixelForTick(t + 1) - n.getPixelForTick(t) : n.width / n.ticks.length;var r = e * n.options.categoryPercentage,
                l = (e - e * n.options.categoryPercentage) / 2,
                s = r / o;if (n.ticks.length !== a.chart.data.labels.length) {
              var d = n.ticks.length / a.chart.data.labels.length;s *= d;
            }var u = s * n.options.barPercentage,
                c = s - s * n.options.barPercentage;return { datasetCount: o, tickHeight: e, categoryHeight: r, categorySpacing: l, fullBarHeight: s, barHeight: u, barSpacing: c };
          }, calculateBarHeight: function calculateBarHeight(t) {
            var e = this,
                a = e.getScaleForId(e.getMeta().yAxisID);return a.options.barThickness ? a.options.barThickness : a.options.stacked ? t.categoryHeight : t.barHeight;
          }, calculateBarX: function calculateBarX(t, e) {
            var a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.xAxisID),
                o = Number(a.getDataset().data[t]);if (n.options.stacked) {
              for (var r = 0, l = 0, s = 0; e > s; s++) {
                var d = a.chart.data.datasets[s],
                    u = a.chart.getDatasetMeta(s);if (u.bar && u.xAxisID === n.id && a.chart.isDatasetVisible(s)) {
                  var c = Number(d.data[t]);0 > c ? l += c || 0 : r += c || 0;
                }
              }return 0 > o ? n.getPixelForValue(l + o) : n.getPixelForValue(r + o);
            }return n.getPixelForValue(o);
          }, calculateBarY: function calculateBarY(t, e, a) {
            var i = this,
                n = i.getMeta(),
                o = i.getScaleForId(n.yAxisID),
                r = i.getBarIndex(e),
                l = o.getPixelForValue(null, t, e, i.chart.isCombo);return l -= i.chart.isCombo ? a.tickHeight / 2 : 0, o.options.stacked ? l + a.categoryHeight / 2 + a.categorySpacing : l + a.barHeight / 2 + a.categorySpacing + a.barHeight * r + a.barSpacing / 2 + a.barSpacing * r;
          } });
      };
    }, {}], 16: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers;t.defaults.bubble = { hover: { mode: "single" }, scales: { xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }], yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }] }, tooltips: { callbacks: { title: function title() {
                return "";
              }, label: function label(t, e) {
                var a = e.datasets[t.datasetIndex].label || "",
                    i = e.datasets[t.datasetIndex].data[t.index];return a + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")";
              } } } }, t.controllers.bubble = t.DatasetController.extend({ dataElementType: t.elements.Point, update: function update(t) {
            var a = this,
                i = a.getMeta(),
                n = i.data;e.each(n, function (e, i) {
              a.updateElement(e, i, t);
            });
          }, updateElement: function updateElement(a, i, n) {
            var o = this,
                r = o.getMeta(),
                l = o.getScaleForId(r.xAxisID),
                s = o.getScaleForId(r.yAxisID),
                d = a.custom || {},
                u = o.getDataset(),
                c = u.data[i],
                h = o.chart.options.elements.point,
                f = o.index;e.extend(a, { _xScale: l, _yScale: s, _datasetIndex: f, _index: i, _model: { x: n ? l.getPixelForDecimal(.5) : l.getPixelForValue("object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) ? c : NaN, i, f, o.chart.isCombo), y: n ? s.getBasePixel() : s.getPixelForValue(c, i, f), radius: n ? 0 : d.radius ? d.radius : o.getRadius(c), hitRadius: d.hitRadius ? d.hitRadius : e.getValueAtIndexOrDefault(u.hitRadius, i, h.hitRadius) } }), t.DatasetController.prototype.removeHoverStyle.call(o, a, h);var g = a._model;g.skip = d.skip ? d.skip : isNaN(g.x) || isNaN(g.y), a.pivot();
          }, getRadius: function getRadius(t) {
            return t.r || this.chart.options.elements.point.radius;
          }, setHoverStyle: function setHoverStyle(a) {
            var i = this;t.DatasetController.prototype.setHoverStyle.call(i, a);var n = i.chart.data.datasets[a._datasetIndex],
                o = a._index,
                r = a.custom || {},
                l = a._model;l.radius = r.hoverRadius ? r.hoverRadius : e.getValueAtIndexOrDefault(n.hoverRadius, o, i.chart.options.elements.point.hoverRadius) + i.getRadius(n.data[o]);
          }, removeHoverStyle: function removeHoverStyle(e) {
            var a = this;t.DatasetController.prototype.removeHoverStyle.call(a, e, a.chart.options.elements.point);var i = a.chart.data.datasets[e._datasetIndex].data[e._index],
                n = e.custom || {},
                o = e._model;o.radius = n.radius ? n.radius : a.getRadius(i);
          } });
      };
    }, {}], 17: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers,
            a = t.defaults;a.doughnut = { animation: { animateRotate: !0, animateScale: !1 }, aspectRatio: 1, hover: { mode: "single" }, legendCallback: function legendCallback(t) {
            var e = [];e.push('<ul class="' + t.id + '-legend">');var a = t.data,
                i = a.datasets,
                n = a.labels;if (i.length) for (var o = 0; o < i[0].data.length; ++o) {
              e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), n[o] && e.push(n[o]), e.push("</li>");
            }return e.push("</ul>"), e.join("");
          }, legend: { labels: { generateLabels: function generateLabels(t) {
                var a = t.data;return a.labels.length && a.datasets.length ? a.labels.map(function (i, n) {
                  var o = t.getDatasetMeta(0),
                      r = a.datasets[0],
                      l = o.data[n],
                      s = l && l.custom || {},
                      d = e.getValueAtIndexOrDefault,
                      u = t.options.elements.arc,
                      c = s.backgroundColor ? s.backgroundColor : d(r.backgroundColor, n, u.backgroundColor),
                      h = s.borderColor ? s.borderColor : d(r.borderColor, n, u.borderColor),
                      f = s.borderWidth ? s.borderWidth : d(r.borderWidth, n, u.borderWidth);return { text: i, fillStyle: c, strokeStyle: h, lineWidth: f, hidden: isNaN(r.data[n]) || o.data[n].hidden, index: n };
                }) : [];
              } }, onClick: function onClick(t, e) {
              var a,
                  i,
                  n,
                  o = e.index,
                  r = this.chart;for (a = 0, i = (r.data.datasets || []).length; i > a; ++a) {
                n = r.getDatasetMeta(a), n.data[o] && (n.data[o].hidden = !n.data[o].hidden);
              }r.update();
            } }, cutoutPercentage: 50, rotation: Math.PI * -.5, circumference: 2 * Math.PI, tooltips: { callbacks: { title: function title() {
                return "";
              }, label: function label(t, a) {
                var i = a.labels[t.index],
                    n = ": " + a.datasets[t.datasetIndex].data[t.index];return e.isArray(i) ? (i = i.slice(), i[0] += n) : i += n, i;
              } } } }, a.pie = e.clone(a.doughnut), e.extend(a.pie, { cutoutPercentage: 0 }), t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({ dataElementType: t.elements.Arc, linkScales: e.noop, getRingIndex: function getRingIndex(t) {
            for (var e = 0, a = 0; t > a; ++a) {
              this.chart.isDatasetVisible(a) && ++e;
            }return e;
          }, update: function update(t) {
            var a = this,
                i = a.chart,
                n = i.chartArea,
                o = i.options,
                r = o.elements.arc,
                l = n.right - n.left - r.borderWidth,
                s = n.bottom - n.top - r.borderWidth,
                d = Math.min(l, s),
                u = { x: 0, y: 0 },
                c = a.getMeta(),
                h = o.cutoutPercentage,
                f = o.circumference;if (f < 2 * Math.PI) {
              var g = o.rotation % (2 * Math.PI);g += 2 * Math.PI * (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0);var p = g + f,
                  m = { x: Math.cos(g), y: Math.sin(g) },
                  b = { x: Math.cos(p), y: Math.sin(p) },
                  v = 0 >= g && p >= 0 || g <= 2 * Math.PI && 2 * Math.PI <= p,
                  x = g <= .5 * Math.PI && .5 * Math.PI <= p || g <= 2.5 * Math.PI && 2.5 * Math.PI <= p,
                  y = g <= -Math.PI && -Math.PI <= p || g <= Math.PI && Math.PI <= p,
                  k = g <= .5 * -Math.PI && .5 * -Math.PI <= p || g <= 1.5 * Math.PI && 1.5 * Math.PI <= p,
                  S = h / 100,
                  w = { x: y ? -1 : Math.min(m.x * (m.x < 0 ? 1 : S), b.x * (b.x < 0 ? 1 : S)), y: k ? -1 : Math.min(m.y * (m.y < 0 ? 1 : S), b.y * (b.y < 0 ? 1 : S)) },
                  M = { x: v ? 1 : Math.max(m.x * (m.x > 0 ? 1 : S), b.x * (b.x > 0 ? 1 : S)), y: x ? 1 : Math.max(m.y * (m.y > 0 ? 1 : S), b.y * (b.y > 0 ? 1 : S)) },
                  C = { width: .5 * (M.x - w.x), height: .5 * (M.y - w.y) };d = Math.min(l / C.width, s / C.height), u = { x: (M.x + w.x) * -.5, y: (M.y + w.y) * -.5 };
            }i.borderWidth = a.getMaxBorderWidth(c.data), i.outerRadius = Math.max((d - i.borderWidth) / 2, 0), i.innerRadius = Math.max(h ? i.outerRadius / 100 * h : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), i.offsetX = u.x * i.outerRadius, i.offsetY = u.y * i.outerRadius, c.total = a.calculateTotal(), a.outerRadius = i.outerRadius - i.radiusLength * a.getRingIndex(a.index), a.innerRadius = a.outerRadius - i.radiusLength, e.each(c.data, function (e, i) {
              a.updateElement(e, i, t);
            });
          }, updateElement: function updateElement(t, a, i) {
            var n = this,
                o = n.chart,
                r = o.chartArea,
                l = o.options,
                s = l.animation,
                d = (r.left + r.right) / 2,
                u = (r.top + r.bottom) / 2,
                c = l.rotation,
                h = l.rotation,
                f = n.getDataset(),
                g = i && s.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(f.data[a]) * (l.circumference / (2 * Math.PI)),
                p = i && s.animateScale ? 0 : n.innerRadius,
                m = i && s.animateScale ? 0 : n.outerRadius,
                b = e.getValueAtIndexOrDefault;e.extend(t, { _datasetIndex: n.index, _index: a, _model: { x: d + o.offsetX, y: u + o.offsetY, startAngle: c, endAngle: h, circumference: g, outerRadius: m, innerRadius: p, label: b(f.label, a, o.data.labels[a]) } });var v = t._model;this.removeHoverStyle(t), i && s.animateRotate || (0 === a ? v.startAngle = l.rotation : v.startAngle = n.getMeta().data[a - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), t.pivot();
          }, removeHoverStyle: function removeHoverStyle(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
          }, calculateTotal: function calculateTotal() {
            var t,
                a = this.getDataset(),
                i = this.getMeta(),
                n = 0;return e.each(i.data, function (e, i) {
              t = a.data[i], isNaN(t) || e.hidden || (n += Math.abs(t));
            }), n;
          }, calculateCircumference: function calculateCircumference(t) {
            var e = this.getMeta().total;return e > 0 && !isNaN(t) ? 2 * Math.PI * (t / e) : 0;
          }, getMaxBorderWidth: function getMaxBorderWidth(t) {
            for (var e, a, i = 0, n = this.index, o = t.length, r = 0; o > r; r++) {
              e = t[r]._model ? t[r]._model.borderWidth : 0, a = t[r]._chart ? t[r]._chart.config.data.datasets[n].hoverBorderWidth : 0, i = e > i ? e : i, i = a > i ? a : i;
            }return i;
          } });
      };
    }, {}], 18: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        function e(t, e) {
          return a.getValueOrDefault(t.showLine, e.showLines);
        }var a = t.helpers;t.defaults.line = { showLines: !0, spanGaps: !1, hover: { mode: "label" }, scales: { xAxes: [{ type: "category", id: "x-axis-0" }], yAxes: [{ type: "linear", id: "y-axis-0" }] } }, t.controllers.line = t.DatasetController.extend({ datasetElementType: t.elements.Line, dataElementType: t.elements.Point, update: function update(t) {
            var i,
                n,
                o,
                r = this,
                l = r.getMeta(),
                s = l.dataset,
                d = l.data || [],
                u = r.chart.options,
                c = u.elements.line,
                h = r.getScaleForId(l.yAxisID),
                f = r.getDataset(),
                g = e(f, u);for (g && (o = s.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), s._scale = h, s._datasetIndex = r.index, s._children = d, s._model = { spanGaps: f.spanGaps ? f.spanGaps : u.spanGaps, tension: o.tension ? o.tension : a.getValueOrDefault(f.lineTension, c.tension), backgroundColor: o.backgroundColor ? o.backgroundColor : f.backgroundColor || c.backgroundColor, borderWidth: o.borderWidth ? o.borderWidth : f.borderWidth || c.borderWidth, borderColor: o.borderColor ? o.borderColor : f.borderColor || c.borderColor, borderCapStyle: o.borderCapStyle ? o.borderCapStyle : f.borderCapStyle || c.borderCapStyle, borderDash: o.borderDash ? o.borderDash : f.borderDash || c.borderDash, borderDashOffset: o.borderDashOffset ? o.borderDashOffset : f.borderDashOffset || c.borderDashOffset, borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : f.borderJoinStyle || c.borderJoinStyle, fill: o.fill ? o.fill : void 0 !== f.fill ? f.fill : c.fill, steppedLine: o.steppedLine ? o.steppedLine : a.getValueOrDefault(f.steppedLine, c.stepped), cubicInterpolationMode: o.cubicInterpolationMode ? o.cubicInterpolationMode : a.getValueOrDefault(f.cubicInterpolationMode, c.cubicInterpolationMode), scaleTop: h.top, scaleBottom: h.bottom, scaleZero: h.getBasePixel() }, s.pivot()), i = 0, n = d.length; n > i; ++i) {
              r.updateElement(d[i], i, t);
            }for (g && 0 !== s._model.tension && r.updateBezierControlPoints(), i = 0, n = d.length; n > i; ++i) {
              d[i].pivot();
            }
          }, getPointBackgroundColor: function getPointBackgroundColor(t, e) {
            var i = this.chart.options.elements.point.backgroundColor,
                n = this.getDataset(),
                o = t.custom || {};return o.backgroundColor ? i = o.backgroundColor : n.pointBackgroundColor ? i = a.getValueAtIndexOrDefault(n.pointBackgroundColor, e, i) : n.backgroundColor && (i = n.backgroundColor), i;
          }, getPointBorderColor: function getPointBorderColor(t, e) {
            var i = this.chart.options.elements.point.borderColor,
                n = this.getDataset(),
                o = t.custom || {};return o.borderColor ? i = o.borderColor : n.pointBorderColor ? i = a.getValueAtIndexOrDefault(n.pointBorderColor, e, i) : n.borderColor && (i = n.borderColor), i;
          }, getPointBorderWidth: function getPointBorderWidth(t, e) {
            var i = this.chart.options.elements.point.borderWidth,
                n = this.getDataset(),
                o = t.custom || {};return o.borderWidth ? i = o.borderWidth : n.pointBorderWidth ? i = a.getValueAtIndexOrDefault(n.pointBorderWidth, e, i) : n.borderWidth && (i = n.borderWidth), i;
          }, updateElement: function updateElement(t, e, i) {
            var n,
                o,
                r = this,
                l = r.getMeta(),
                s = t.custom || {},
                d = r.getDataset(),
                u = r.index,
                c = d.data[e],
                h = r.getScaleForId(l.yAxisID),
                f = r.getScaleForId(l.xAxisID),
                g = r.chart.options.elements.point,
                p = r.chart.data.labels || [],
                m = 1 === p.length || 1 === d.data.length || r.chart.isCombo;void 0 !== d.radius && void 0 === d.pointRadius && (d.pointRadius = d.radius), void 0 !== d.hitRadius && void 0 === d.pointHitRadius && (d.pointHitRadius = d.hitRadius), n = f.getPixelForValue("object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) ? c : NaN, e, u, m), o = i ? h.getBasePixel() : r.calculatePointY(c, e, u), t._xScale = f, t._yScale = h, t._datasetIndex = u, t._index = e, t._model = { x: n, y: o, skip: s.skip || isNaN(n) || isNaN(o), radius: s.radius || a.getValueAtIndexOrDefault(d.pointRadius, e, g.radius), pointStyle: s.pointStyle || a.getValueAtIndexOrDefault(d.pointStyle, e, g.pointStyle), backgroundColor: r.getPointBackgroundColor(t, e), borderColor: r.getPointBorderColor(t, e), borderWidth: r.getPointBorderWidth(t, e), tension: l.dataset._model ? l.dataset._model.tension : 0, steppedLine: l.dataset._model ? l.dataset._model.steppedLine : !1, hitRadius: s.hitRadius || a.getValueAtIndexOrDefault(d.pointHitRadius, e, g.hitRadius) };
          }, calculatePointY: function calculatePointY(t, e, a) {
            var i,
                n,
                o,
                r = this,
                l = r.chart,
                s = r.getMeta(),
                d = r.getScaleForId(s.yAxisID),
                u = 0,
                c = 0;if (d.options.stacked) {
              for (i = 0; a > i; i++) {
                if (n = l.data.datasets[i], o = l.getDatasetMeta(i), "line" === o.type && o.yAxisID === d.id && l.isDatasetVisible(i)) {
                  var h = Number(d.getRightValue(n.data[e]));0 > h ? c += h || 0 : u += h || 0;
                }
              }var f = Number(d.getRightValue(t));return 0 > f ? d.getPixelForValue(c + f) : d.getPixelForValue(u + f);
            }return d.getPixelForValue(t);
          }, updateBezierControlPoints: function updateBezierControlPoints() {
            function t(t, e, a) {
              return Math.max(Math.min(t, a), e);
            }var e,
                i,
                n,
                o,
                r,
                l = this,
                s = l.getMeta(),
                d = l.chart.chartArea,
                u = s.data || [];if (s.dataset._model.spanGaps && (u = u.filter(function (t) {
              return !t._model.skip;
            })), "monotone" === s.dataset._model.cubicInterpolationMode) a.splineCurveMonotone(u);else for (e = 0, i = u.length; i > e; ++e) {
              n = u[e], o = n._model, r = a.splineCurve(a.previousItem(u, e)._model, o, a.nextItem(u, e)._model, s.dataset._model.tension), o.controlPointPreviousX = r.previous.x, o.controlPointPreviousY = r.previous.y, o.controlPointNextX = r.next.x, o.controlPointNextY = r.next.y;
            }if (l.chart.options.elements.line.capBezierPoints) for (e = 0, i = u.length; i > e; ++e) {
              o = u[e]._model, o.controlPointPreviousX = t(o.controlPointPreviousX, d.left, d.right), o.controlPointPreviousY = t(o.controlPointPreviousY, d.top, d.bottom), o.controlPointNextX = t(o.controlPointNextX, d.left, d.right), o.controlPointNextY = t(o.controlPointNextY, d.top, d.bottom);
            }
          }, draw: function draw(t) {
            var a,
                i,
                n = this,
                o = n.getMeta(),
                r = o.data || [],
                l = t || 1;for (a = 0, i = r.length; i > a; ++a) {
              r[a].transition(l);
            }for (e(n.getDataset(), n.chart.options) && o.dataset.transition(l).draw(), a = 0, i = r.length; i > a; ++a) {
              r[a].draw();
            }
          }, setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                o = t._model;o.radius = n.hoverRadius || a.getValueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), o.backgroundColor = n.hoverBackgroundColor || a.getValueAtIndexOrDefault(e.pointHoverBackgroundColor, i, a.getHoverColor(o.backgroundColor)), o.borderColor = n.hoverBorderColor || a.getValueAtIndexOrDefault(e.pointHoverBorderColor, i, a.getHoverColor(o.borderColor)), o.borderWidth = n.hoverBorderWidth || a.getValueAtIndexOrDefault(e.pointHoverBorderWidth, i, o.borderWidth);
          }, removeHoverStyle: function removeHoverStyle(t) {
            var e = this,
                i = e.chart.data.datasets[t._datasetIndex],
                n = t._index,
                o = t.custom || {},
                r = t._model;void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), r.radius = o.radius || a.getValueAtIndexOrDefault(i.pointRadius, n, e.chart.options.elements.point.radius), r.backgroundColor = e.getPointBackgroundColor(t, n), r.borderColor = e.getPointBorderColor(t, n), r.borderWidth = e.getPointBorderWidth(t, n);
          } });
      };
    }, {}], 19: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers;t.defaults.polarArea = { scale: { type: "radialLinear", lineArc: !0, ticks: { beginAtZero: !0 } }, animation: { animateRotate: !0, animateScale: !0 }, startAngle: -.5 * Math.PI, aspectRatio: 1, legendCallback: function legendCallback(t) {
            var e = [];e.push('<ul class="' + t.id + '-legend">');var a = t.data,
                i = a.datasets,
                n = a.labels;if (i.length) for (var o = 0; o < i[0].data.length; ++o) {
              e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), n[o] && e.push(n[o]), e.push("</li>");
            }return e.push("</ul>"), e.join("");
          }, legend: { labels: { generateLabels: function generateLabels(t) {
                var a = t.data;return a.labels.length && a.datasets.length ? a.labels.map(function (i, n) {
                  var o = t.getDatasetMeta(0),
                      r = a.datasets[0],
                      l = o.data[n],
                      s = l.custom || {},
                      d = e.getValueAtIndexOrDefault,
                      u = t.options.elements.arc,
                      c = s.backgroundColor ? s.backgroundColor : d(r.backgroundColor, n, u.backgroundColor),
                      h = s.borderColor ? s.borderColor : d(r.borderColor, n, u.borderColor),
                      f = s.borderWidth ? s.borderWidth : d(r.borderWidth, n, u.borderWidth);return { text: i, fillStyle: c, strokeStyle: h, lineWidth: f, hidden: isNaN(r.data[n]) || o.data[n].hidden, index: n };
                }) : [];
              } }, onClick: function onClick(t, e) {
              var a,
                  i,
                  n,
                  o = e.index,
                  r = this.chart;for (a = 0, i = (r.data.datasets || []).length; i > a; ++a) {
                n = r.getDatasetMeta(a), n.data[o].hidden = !n.data[o].hidden;
              }r.update();
            } }, tooltips: { callbacks: { title: function title() {
                return "";
              }, label: function label(t, e) {
                return e.labels[t.index] + ": " + t.yLabel;
              } } } }, t.controllers.polarArea = t.DatasetController.extend({ dataElementType: t.elements.Arc, linkScales: e.noop, update: function update(t) {
            var a = this,
                i = a.chart,
                n = i.chartArea,
                o = a.getMeta(),
                r = i.options,
                l = r.elements.arc,
                s = Math.min(n.right - n.left, n.bottom - n.top);i.outerRadius = Math.max((s - l.borderWidth / 2) / 2, 0), i.innerRadius = Math.max(r.cutoutPercentage ? i.outerRadius / 100 * r.cutoutPercentage : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), a.outerRadius = i.outerRadius - i.radiusLength * a.index, a.innerRadius = a.outerRadius - i.radiusLength, o.count = a.countVisibleElements(), e.each(o.data, function (e, i) {
              a.updateElement(e, i, t);
            });
          }, updateElement: function updateElement(t, a, i) {
            for (var n = this, o = n.chart, r = n.getDataset(), l = o.options, s = l.animation, d = o.scale, u = e.getValueAtIndexOrDefault, c = o.data.labels, h = n.calculateCircumference(r.data[a]), f = d.xCenter, g = d.yCenter, p = 0, m = n.getMeta(), b = 0; a > b; ++b) {
              isNaN(r.data[b]) || m.data[b].hidden || ++p;
            }var v = l.startAngle,
                x = t.hidden ? 0 : d.getDistanceFromCenterForValue(r.data[a]),
                y = v + h * p,
                k = y + (t.hidden ? 0 : h),
                S = s.animateScale ? 0 : d.getDistanceFromCenterForValue(r.data[a]);e.extend(t, { _datasetIndex: n.index, _index: a, _scale: d, _model: { x: f, y: g, innerRadius: 0, outerRadius: i ? S : x, startAngle: i && s.animateRotate ? v : y, endAngle: i && s.animateRotate ? v : k, label: u(c, a, c[a]) } }), n.removeHoverStyle(t), t.pivot();
          }, removeHoverStyle: function removeHoverStyle(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
          }, countVisibleElements: function countVisibleElements() {
            var t = this.getDataset(),
                a = this.getMeta(),
                i = 0;return e.each(a.data, function (e, a) {
              isNaN(t.data[a]) || e.hidden || i++;
            }), i;
          }, calculateCircumference: function calculateCircumference(t) {
            var e = this.getMeta().count;return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0;
          } });
      };
    }, {}], 20: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers;t.defaults.radar = { aspectRatio: 1, scale: { type: "radialLinear" }, elements: { line: { tension: 0 } } }, t.controllers.radar = t.DatasetController.extend({ datasetElementType: t.elements.Line, dataElementType: t.elements.Point, linkScales: e.noop, update: function update(t) {
            var a = this,
                i = a.getMeta(),
                n = i.dataset,
                o = i.data,
                r = n.custom || {},
                l = a.getDataset(),
                s = a.chart.options.elements.line,
                d = a.chart.scale;void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), e.extend(i.dataset, { _datasetIndex: a.index, _children: o, _loop: !0, _model: { tension: r.tension ? r.tension : e.getValueOrDefault(l.lineTension, s.tension), backgroundColor: r.backgroundColor ? r.backgroundColor : l.backgroundColor || s.backgroundColor, borderWidth: r.borderWidth ? r.borderWidth : l.borderWidth || s.borderWidth, borderColor: r.borderColor ? r.borderColor : l.borderColor || s.borderColor, fill: r.fill ? r.fill : void 0 !== l.fill ? l.fill : s.fill, borderCapStyle: r.borderCapStyle ? r.borderCapStyle : l.borderCapStyle || s.borderCapStyle, borderDash: r.borderDash ? r.borderDash : l.borderDash || s.borderDash, borderDashOffset: r.borderDashOffset ? r.borderDashOffset : l.borderDashOffset || s.borderDashOffset, borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : l.borderJoinStyle || s.borderJoinStyle, scaleTop: d.top, scaleBottom: d.bottom, scaleZero: d.getBasePosition() } }), i.dataset.pivot(), e.each(o, function (e, i) {
              a.updateElement(e, i, t);
            }, a), a.updateBezierControlPoints();
          }, updateElement: function updateElement(t, a, i) {
            var n = this,
                o = t.custom || {},
                r = n.getDataset(),
                l = n.chart.scale,
                s = n.chart.options.elements.point,
                d = l.getPointPositionForValue(a, r.data[a]);e.extend(t, { _datasetIndex: n.index, _index: a, _scale: l, _model: { x: i ? l.xCenter : d.x, y: i ? l.yCenter : d.y, tension: o.tension ? o.tension : e.getValueOrDefault(r.tension, n.chart.options.elements.line.tension), radius: o.radius ? o.radius : e.getValueAtIndexOrDefault(r.pointRadius, a, s.radius), backgroundColor: o.backgroundColor ? o.backgroundColor : e.getValueAtIndexOrDefault(r.pointBackgroundColor, a, s.backgroundColor), borderColor: o.borderColor ? o.borderColor : e.getValueAtIndexOrDefault(r.pointBorderColor, a, s.borderColor), borderWidth: o.borderWidth ? o.borderWidth : e.getValueAtIndexOrDefault(r.pointBorderWidth, a, s.borderWidth), pointStyle: o.pointStyle ? o.pointStyle : e.getValueAtIndexOrDefault(r.pointStyle, a, s.pointStyle), hitRadius: o.hitRadius ? o.hitRadius : e.getValueAtIndexOrDefault(r.hitRadius, a, s.hitRadius) } }), t._model.skip = o.skip ? o.skip : isNaN(t._model.x) || isNaN(t._model.y);
          }, updateBezierControlPoints: function updateBezierControlPoints() {
            var t = this.chart.chartArea,
                a = this.getMeta();e.each(a.data, function (i, n) {
              var o = i._model,
                  r = e.splineCurve(e.previousItem(a.data, n, !0)._model, o, e.nextItem(a.data, n, !0)._model, o.tension);o.controlPointPreviousX = Math.max(Math.min(r.previous.x, t.right), t.left), o.controlPointPreviousY = Math.max(Math.min(r.previous.y, t.bottom), t.top), o.controlPointNextX = Math.max(Math.min(r.next.x, t.right), t.left), o.controlPointNextY = Math.max(Math.min(r.next.y, t.bottom), t.top), i.pivot();
            });
          }, draw: function draw(t) {
            var a = this.getMeta(),
                i = t || 1;e.each(a.data, function (t) {
              t.transition(i);
            }), a.dataset.transition(i).draw(), e.each(a.data, function (t) {
              t.draw();
            });
          }, setHoverStyle: function setHoverStyle(t) {
            var a = this.chart.data.datasets[t._datasetIndex],
                i = t.custom || {},
                n = t._index,
                o = t._model;o.radius = i.hoverRadius ? i.hoverRadius : e.getValueAtIndexOrDefault(a.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), o.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : e.getValueAtIndexOrDefault(a.pointHoverBackgroundColor, n, e.getHoverColor(o.backgroundColor)), o.borderColor = i.hoverBorderColor ? i.hoverBorderColor : e.getValueAtIndexOrDefault(a.pointHoverBorderColor, n, e.getHoverColor(o.borderColor)), o.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : e.getValueAtIndexOrDefault(a.pointHoverBorderWidth, n, o.borderWidth);
          }, removeHoverStyle: function removeHoverStyle(t) {
            var a = this.chart.data.datasets[t._datasetIndex],
                i = t.custom || {},
                n = t._index,
                o = t._model,
                r = this.chart.options.elements.point;o.radius = i.radius ? i.radius : e.getValueAtIndexOrDefault(a.radius, n, r.radius), o.backgroundColor = i.backgroundColor ? i.backgroundColor : e.getValueAtIndexOrDefault(a.pointBackgroundColor, n, r.backgroundColor), o.borderColor = i.borderColor ? i.borderColor : e.getValueAtIndexOrDefault(a.pointBorderColor, n, r.borderColor), o.borderWidth = i.borderWidth ? i.borderWidth : e.getValueAtIndexOrDefault(a.pointBorderWidth, n, r.borderWidth);
          } });
      };
    }, {}], 21: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers;t.defaults.global.animation = { duration: 1e3, easing: "easeOutQuart", onProgress: e.noop, onComplete: e.noop }, t.Animation = t.Element.extend({ currentStep: null, numSteps: 60, easing: "", render: null, onAnimationProgress: null, onAnimationComplete: null }), t.animationService = { frameDuration: 17, animations: [], dropFrames: 0, request: null, addAnimation: function addAnimation(t, e, a, i) {
            var n = this;i || (t.animating = !0);for (var o = 0; o < n.animations.length; ++o) {
              if (n.animations[o].chartInstance === t) return void (n.animations[o].animationObject = e);
            }n.animations.push({ chartInstance: t, animationObject: e }), 1 === n.animations.length && n.requestAnimationFrame();
          }, cancelAnimation: function cancelAnimation(t) {
            var a = e.findIndex(this.animations, function (e) {
              return e.chartInstance === t;
            });-1 !== a && (this.animations.splice(a, 1), t.animating = !1);
          }, requestAnimationFrame: function requestAnimationFrame() {
            var t = this;null === t.request && (t.request = e.requestAnimFrame.call(window, function () {
              t.request = null, t.startDigest();
            }));
          }, startDigest: function startDigest() {
            var t = this,
                e = Date.now(),
                a = 0;t.dropFrames > 1 && (a = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1);for (var i = 0; i < t.animations.length;) {
              null === t.animations[i].animationObject.currentStep && (t.animations[i].animationObject.currentStep = 0), t.animations[i].animationObject.currentStep += 1 + a, t.animations[i].animationObject.currentStep > t.animations[i].animationObject.numSteps && (t.animations[i].animationObject.currentStep = t.animations[i].animationObject.numSteps), t.animations[i].animationObject.render(t.animations[i].chartInstance, t.animations[i].animationObject), t.animations[i].animationObject.onAnimationProgress && t.animations[i].animationObject.onAnimationProgress.call && t.animations[i].animationObject.onAnimationProgress.call(t.animations[i].chartInstance, t.animations[i]), t.animations[i].animationObject.currentStep === t.animations[i].animationObject.numSteps ? (t.animations[i].animationObject.onAnimationComplete && t.animations[i].animationObject.onAnimationComplete.call && t.animations[i].animationObject.onAnimationComplete.call(t.animations[i].chartInstance, t.animations[i]), t.animations[i].chartInstance.animating = !1, t.animations.splice(i, 1)) : ++i;
            }var n = Date.now(),
                o = (n - e) / t.frameDuration;t.dropFrames += o, t.animations.length > 0 && t.requestAnimationFrame();
          } };
      };
    }, {}], 22: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.canvasHelpers = {};e.drawPoint = function (t, e, a, i, n) {
          var o, r, l, s, d, u;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (o = e.toString(), "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)) return void t.drawImage(e, i - e.width / 2, n - e.height / 2);if (!(isNaN(a) || 0 >= a)) {
            switch (e) {default:
                t.beginPath(), t.arc(i, n, a, 0, 2 * Math.PI), t.closePath(), t.fill();break;case "triangle":
                t.beginPath(), r = 3 * a / Math.sqrt(3), d = r * Math.sqrt(3) / 2, t.moveTo(i - r / 2, n + d / 3), t.lineTo(i + r / 2, n + d / 3), t.lineTo(i, n - 2 * d / 3), t.closePath(), t.fill();break;case "rect":
                u = 1 / Math.SQRT2 * a, t.beginPath(), t.fillRect(i - u, n - u, 2 * u, 2 * u), t.strokeRect(i - u, n - u, 2 * u, 2 * u);break;case "rectRot":
                u = 1 / Math.SQRT2 * a, t.beginPath(), t.moveTo(i - u, n), t.lineTo(i, n + u), t.lineTo(i + u, n), t.lineTo(i, n - u), t.closePath(), t.fill();break;case "cross":
                t.beginPath(), t.moveTo(i, n + a), t.lineTo(i, n - a), t.moveTo(i - a, n), t.lineTo(i + a, n), t.closePath();break;case "crossRot":
                t.beginPath(), l = Math.cos(Math.PI / 4) * a, s = Math.sin(Math.PI / 4) * a, t.moveTo(i - l, n - s), t.lineTo(i + l, n + s), t.moveTo(i - l, n + s), t.lineTo(i + l, n - s), t.closePath();break;case "star":
                t.beginPath(), t.moveTo(i, n + a), t.lineTo(i, n - a), t.moveTo(i - a, n), t.lineTo(i + a, n), l = Math.cos(Math.PI / 4) * a, s = Math.sin(Math.PI / 4) * a, t.moveTo(i - l, n - s), t.lineTo(i + l, n + s), t.moveTo(i - l, n + s), t.lineTo(i + l, n - s), t.closePath();break;case "line":
                t.beginPath(), t.moveTo(i - a, n), t.lineTo(i + a, n), t.closePath();break;case "dash":
                t.beginPath(), t.moveTo(i, n), t.lineTo(i + a, n), t.closePath();}t.stroke();
          }
        };
      };
    }, {}], 23: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        function e(t, e) {
          var a = r.getStyle(t, e),
              i = a && a.match(/(\d+)px/);return i ? Number(i[1]) : void 0;
        }function a(t, a) {
          var i = t.style,
              n = t.getAttribute("height"),
              o = t.getAttribute("width");if (t._chartjs = { initial: { height: n, width: o, style: { display: i.display, height: i.height, width: i.width } } }, i.display = i.display || "block", null === o || "" === o) {
            var r = e(t, "width");void 0 !== r && (t.width = r);
          }if (null === n || "" === n) if ("" === t.style.height) t.height = t.width / (a.options.aspectRatio || 2);else {
            var l = e(t, "height");void 0 !== r && (t.height = l);
          }return t;
        }function i(t) {
          if (t._chartjs) {
            var e = t._chartjs.initial;["height", "width"].forEach(function (a) {
              var i = e[a];void 0 === i || null === i ? t.removeAttribute(a) : t.setAttribute(a, i);
            }), r.each(e.style || {}, function (e, a) {
              t.style[a] = e;
            }), t.width = t.width, delete t._chartjs;
          }
        }function n(t, e) {
          if ("string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t instanceof HTMLCanvasElement) {
            var i = t.getContext && t.getContext("2d");if (i instanceof CanvasRenderingContext2D) return a(t, e), i;
          }return null;
        }function o(e) {
          e = e || {};var a = e.data = e.data || {};return a.datasets = a.datasets || [], a.labels = a.labels || [], e.options = r.configMerge(t.defaults.global, t.defaults[e.type], e.options || {}), e;
        }var r = t.helpers;t.types = {}, t.instances = {}, t.controllers = {}, t.Controller = function (e, a, i) {
          var l = this;a = o(a);var s = n(e, a),
              d = s && s.canvas,
              u = d && d.height,
              c = d && d.width;return i.ctx = s, i.canvas = d, i.config = a, i.width = c, i.height = u, i.aspectRatio = u ? c / u : null, l.id = r.uid(), l.chart = i, l.config = a, l.options = a.options, l._bufferedRender = !1, t.instances[l.id] = l, Object.defineProperty(l, "data", { get: function get() {
              return l.config.data;
            } }), s && d ? (r.retinaScale(i), l.options.responsive && (r.addResizeListener(d.parentNode, function () {
            l.resize();
          }), l.resize(!0)), l.initialize(), l) : (console.error("Failed to create chart: can't acquire context from the given item"), l);
        }, r.extend(t.Controller.prototype, { initialize: function initialize() {
            var e = this;return t.plugins.notify("beforeInit", [e]), e.bindEvents(), e.ensureScalesHaveIDs(), e.buildOrUpdateControllers(), e.buildScales(), e.updateLayout(), e.resetElements(), e.initToolTip(), e.update(), t.plugins.notify("afterInit", [e]), e;
          }, clear: function clear() {
            return r.clear(this.chart), this;
          }, stop: function stop() {
            return t.animationService.cancelAnimation(this), this;
          }, resize: function resize(e) {
            var a = this,
                i = a.chart,
                n = a.options,
                o = i.canvas,
                l = n.maintainAspectRatio && i.aspectRatio || null,
                s = Math.floor(r.getMaximumWidth(o)),
                d = Math.floor(l ? s / l : r.getMaximumHeight(o));if (i.width !== s || i.height !== d) {
              o.width = i.width = s, o.height = i.height = d, o.style.width = s + "px", o.style.height = d + "px", r.retinaScale(i);var u = { width: s, height: d };t.plugins.notify("resize", [a, u]), a.options.onResize && a.options.onResize(a, u), e || (a.stop(), a.update(a.options.responsiveAnimationDuration));
            }
          }, ensureScalesHaveIDs: function ensureScalesHaveIDs() {
            var t = this.options,
                e = t.scales || {},
                a = t.scale;r.each(e.xAxes, function (t, e) {
              t.id = t.id || "x-axis-" + e;
            }), r.each(e.yAxes, function (t, e) {
              t.id = t.id || "y-axis-" + e;
            }), a && (a.id = a.id || "scale");
          }, buildScales: function buildScales() {
            var e = this,
                a = e.options,
                i = e.scales = {},
                n = [];a.scales && (n = n.concat((a.scales.xAxes || []).map(function (t) {
              return { options: t, dtype: "category" };
            }), (a.scales.yAxes || []).map(function (t) {
              return { options: t, dtype: "linear" };
            }))), a.scale && n.push({ options: a.scale, dtype: "radialLinear", isDefault: !0 }), r.each(n, function (a) {
              var n = a.options,
                  o = r.getValueOrDefault(n.type, a.dtype),
                  l = t.scaleService.getScaleConstructor(o);if (l) {
                var s = new l({ id: n.id, options: n, ctx: e.chart.ctx, chart: e });i[s.id] = s, a.isDefault && (e.scale = s);
              }
            }), t.scaleService.addScalesToLayout(this);
          }, updateLayout: function updateLayout() {
            t.layoutService.update(this, this.chart.width, this.chart.height);
          }, buildOrUpdateControllers: function buildOrUpdateControllers() {
            var e = this,
                a = [],
                i = [];if (r.each(e.data.datasets, function (n, o) {
              var r = e.getDatasetMeta(o);r.type || (r.type = n.type || e.config.type), a.push(r.type), r.controller ? r.controller.updateIndex(o) : (r.controller = new t.controllers[r.type](e, o), i.push(r.controller));
            }, e), a.length > 1) for (var n = 1; n < a.length; n++) {
              if (a[n] !== a[n - 1]) {
                e.isCombo = !0;break;
              }
            }return i;
          }, resetElements: function resetElements() {
            var t = this;r.each(t.data.datasets, function (e, a) {
              t.getDatasetMeta(a).controller.reset();
            }, t);
          }, reset: function reset() {
            this.resetElements(), this.tooltip.initialize();
          }, update: function update(e, a) {
            var i = this;t.plugins.notify("beforeUpdate", [i]), i.tooltip._data = i.data;var n = i.buildOrUpdateControllers();r.each(i.data.datasets, function (t, e) {
              i.getDatasetMeta(e).controller.buildOrUpdateElements();
            }, i), t.layoutService.update(i, i.chart.width, i.chart.height), t.plugins.notify("afterScaleUpdate", [i]), r.each(n, function (t) {
              t.reset();
            }), i.updateDatasets(), t.plugins.notify("afterUpdate", [i]), i._bufferedRender ? i._bufferedRequest = { lazy: a, duration: e } : i.render(e, a);
          }, updateDatasets: function updateDatasets() {
            var e,
                a,
                i = this;if (t.plugins.notify("beforeDatasetsUpdate", [i])) {
              for (e = 0, a = i.data.datasets.length; a > e; ++e) {
                i.getDatasetMeta(e).controller.update();
              }t.plugins.notify("afterDatasetsUpdate", [i]);
            }
          }, render: function render(e, a) {
            var i = this;t.plugins.notify("beforeRender", [i]);var n = i.options.animation;if (n && ("undefined" != typeof e && 0 !== e || "undefined" == typeof e && 0 !== n.duration)) {
              var o = new t.Animation();o.numSteps = (e || n.duration) / 16.66, o.easing = n.easing, o.render = function (t, e) {
                var a = r.easingEffects[e.easing],
                    i = e.currentStep / e.numSteps,
                    n = a(i);t.draw(n, i, e.currentStep);
              }, o.onAnimationProgress = n.onProgress, o.onAnimationComplete = n.onComplete, t.animationService.addAnimation(i, o, e, a);
            } else i.draw(), n && n.onComplete && n.onComplete.call && n.onComplete.call(i);return i;
          }, draw: function draw(e) {
            var a = this,
                i = e || 1;a.clear(), t.plugins.notify("beforeDraw", [a, i]), r.each(a.boxes, function (t) {
              t.draw(a.chartArea);
            }, a), a.scale && a.scale.draw(), t.plugins.notify("beforeDatasetsDraw", [a, i]), r.each(a.data.datasets, function (t, i) {
              a.isDatasetVisible(i) && a.getDatasetMeta(i).controller.draw(e);
            }, a, !0), t.plugins.notify("afterDatasetsDraw", [a, i]), a.tooltip.transition(i).draw(), t.plugins.notify("afterDraw", [a, i]);
          }, getElementAtEvent: function getElementAtEvent(e) {
            return t.Interaction.modes.single(this, e);
          }, getElementsAtEvent: function getElementsAtEvent(e) {
            return t.Interaction.modes.label(this, e, { intersect: !0 });
          }, getElementsAtXAxis: function getElementsAtXAxis(e) {
            return t.Interaction.modes["x-axis"](this, e, { intersect: !0 });
          }, getElementsAtEventForMode: function getElementsAtEventForMode(e, a, i) {
            var n = t.Interaction.modes[a];return "function" == typeof n ? n(this, e, i) : [];
          }, getDatasetAtEvent: function getDatasetAtEvent(e) {
            return t.Interaction.modes.dataset(this, e);
          }, getDatasetMeta: function getDatasetMeta(t) {
            var e = this,
                a = e.data.datasets[t];a._meta || (a._meta = {});
            var i = a._meta[e.id];return i || (i = a._meta[e.id] = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null }), i;
          }, getVisibleDatasetCount: function getVisibleDatasetCount() {
            for (var t = 0, e = 0, a = this.data.datasets.length; a > e; ++e) {
              this.isDatasetVisible(e) && t++;
            }return t;
          }, isDatasetVisible: function isDatasetVisible(t) {
            var e = this.getDatasetMeta(t);return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden;
          }, generateLegend: function generateLegend() {
            return this.options.legendCallback(this);
          }, destroy: function destroy() {
            var e,
                a,
                n,
                o = this,
                l = o.chart.canvas;for (o.stop(), a = 0, n = o.data.datasets.length; n > a; ++a) {
              e = o.getDatasetMeta(a), e.controller && (e.controller.destroy(), e.controller = null);
            }l && (r.unbindEvents(o, o.events), r.removeResizeListener(l.parentNode), r.clear(o.chart), i(l), o.chart.canvas = null, o.chart.ctx = null), t.plugins.notify("destroy", [o]), delete t.instances[o.id];
          }, toBase64Image: function toBase64Image() {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
          }, initToolTip: function initToolTip() {
            var e = this;e.tooltip = new t.Tooltip({ _chart: e.chart, _chartInstance: e, _data: e.data, _options: e.options.tooltips }, e), e.tooltip.initialize();
          }, bindEvents: function bindEvents() {
            var t = this;r.bindEvents(t, t.options.events, function (e) {
              t.eventHandler(e);
            });
          }, updateHoverStyle: function updateHoverStyle(t, e, a) {
            var i,
                n,
                o,
                r = a ? "setHoverStyle" : "removeHoverStyle";for (n = 0, o = t.length; o > n; ++n) {
              i = t[n], i && this.getDatasetMeta(i._datasetIndex).controller[r](i);
            }
          }, eventHandler: function eventHandler(t) {
            var e = this,
                a = e.legend,
                i = e.tooltip,
                n = e.options.hover;e._bufferedRender = !0, e._bufferedRequest = null;var o = e.handleEvent(t);o |= a && a.handleEvent(t), o |= i && i.handleEvent(t);var r = e._bufferedRequest;return r ? e.render(r.duration, r.lazy) : o && !e.animating && (e.stop(), e.render(n.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e;
          }, handleEvent: function handleEvent(t) {
            var e = this,
                a = e.options || {},
                i = a.hover,
                n = !1;return e.lastActive = e.lastActive || [], "mouseout" === t.type ? e.active = [] : e.active = e.getElementsAtEventForMode(t, i.mode, i), i.onHover && i.onHover.call(e, e.active), ("mouseup" === t.type || "click" === t.type) && a.onClick && a.onClick.call(e, t, e.active), e.lastActive.length && e.updateHoverStyle(e.lastActive, i.mode, !1), e.active.length && i.mode && e.updateHoverStyle(e.active, i.mode, !0), n = !r.arrayEquals(e.active, e.lastActive), e.lastActive = e.active, n;
          } });
      };
    }, {}], 24: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        function e(t, e) {
          return t._chartjs ? void t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [e] } }), void n.forEach(function (e) {
            var a = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                n = t[e];Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: function value() {
                var e = Array.prototype.slice.call(arguments),
                    o = n.apply(this, e);return i.each(t._chartjs.listeners, function (t) {
                  "function" == typeof t[a] && t[a].apply(t, e);
                }), o;
              } });
          }));
        }function a(t, e) {
          var a = t._chartjs;if (a) {
            var i = a.listeners,
                o = i.indexOf(e);-1 !== o && i.splice(o, 1), i.length > 0 || (n.forEach(function (e) {
              delete t[e];
            }), delete t._chartjs);
          }
        }var i = t.helpers,
            n = ["push", "pop", "shift", "splice", "unshift"];t.DatasetController = function (t, e) {
          this.initialize(t, e);
        }, i.extend(t.DatasetController.prototype, { datasetElementType: null, dataElementType: null, initialize: function initialize(t, e) {
            var a = this;a.chart = t, a.index = e, a.linkScales(), a.addElements();
          }, updateIndex: function updateIndex(t) {
            this.index = t;
          }, linkScales: function linkScales() {
            var t = this,
                e = t.getMeta(),
                a = t.getDataset();null === e.xAxisID && (e.xAxisID = a.xAxisID || t.chart.options.scales.xAxes[0].id), null === e.yAxisID && (e.yAxisID = a.yAxisID || t.chart.options.scales.yAxes[0].id);
          }, getDataset: function getDataset() {
            return this.chart.data.datasets[this.index];
          }, getMeta: function getMeta() {
            return this.chart.getDatasetMeta(this.index);
          }, getScaleForId: function getScaleForId(t) {
            return this.chart.scales[t];
          }, reset: function reset() {
            this.update(!0);
          }, destroy: function destroy() {
            this._data && a(this._data, this);
          }, createMetaDataset: function createMetaDataset() {
            var t = this,
                e = t.datasetElementType;return e && new e({ _chart: t.chart.chart, _datasetIndex: t.index });
          }, createMetaData: function createMetaData(t) {
            var e = this,
                a = e.dataElementType;return a && new a({ _chart: e.chart.chart, _datasetIndex: e.index, _index: t });
          }, addElements: function addElements() {
            var t,
                e,
                a = this,
                i = a.getMeta(),
                n = a.getDataset().data || [],
                o = i.data;for (t = 0, e = n.length; e > t; ++t) {
              o[t] = o[t] || a.createMetaData(t);
            }i.dataset = i.dataset || a.createMetaDataset();
          }, addElementAndReset: function addElementAndReset(t) {
            var e = this.createMetaData(t);this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
          }, buildOrUpdateElements: function buildOrUpdateElements() {
            var t = this,
                i = t.getDataset(),
                n = i.data || (i.data = []);t._data !== n && (t._data && a(t._data, t), e(n, t), t._data = n), t.resyncElements();
          }, update: i.noop, draw: function draw(t) {
            var e,
                a,
                i = t || 1,
                n = this.getMeta().data;for (e = 0, a = n.length; a > e; ++e) {
              n[e].transition(i).draw();
            }
          }, removeHoverStyle: function removeHoverStyle(t, e) {
            var a = this.chart.data.datasets[t._datasetIndex],
                n = t._index,
                o = t.custom || {},
                r = i.getValueAtIndexOrDefault,
                l = t._model;l.backgroundColor = o.backgroundColor ? o.backgroundColor : r(a.backgroundColor, n, e.backgroundColor), l.borderColor = o.borderColor ? o.borderColor : r(a.borderColor, n, e.borderColor), l.borderWidth = o.borderWidth ? o.borderWidth : r(a.borderWidth, n, e.borderWidth);
          }, setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                a = t._index,
                n = t.custom || {},
                o = i.getValueAtIndexOrDefault,
                r = i.getHoverColor,
                l = t._model;l.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : o(e.hoverBackgroundColor, a, r(l.backgroundColor)), l.borderColor = n.hoverBorderColor ? n.hoverBorderColor : o(e.hoverBorderColor, a, r(l.borderColor)), l.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : o(e.hoverBorderWidth, a, l.borderWidth);
          }, resyncElements: function resyncElements() {
            var t = this,
                e = t.getMeta(),
                a = t.getDataset().data,
                i = e.data.length,
                n = a.length;i > n ? e.data.splice(n, i - n) : n > i && t.insertElements(i, n - i);
          }, insertElements: function insertElements(t, e) {
            for (var a = 0; e > a; ++a) {
              this.addElementAndReset(t + a);
            }
          }, onDataPush: function onDataPush() {
            this.insertElements(this.getDataset().data.length - 1, arguments.length);
          }, onDataPop: function onDataPop() {
            this.getMeta().data.pop();
          }, onDataShift: function onDataShift() {
            this.getMeta().data.shift();
          }, onDataSplice: function onDataSplice(t, e) {
            this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2);
          }, onDataUnshift: function onDataUnshift() {
            this.insertElements(0, arguments.length);
          } }), t.DatasetController.extend = i.inherits;
      };
    }, {}], 25: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers;t.elements = {}, t.Element = function (t) {
          e.extend(this, t), this.initialize.apply(this, arguments);
        }, e.extend(t.Element.prototype, { initialize: function initialize() {
            this.hidden = !1;
          }, pivot: function pivot() {
            var t = this;return t._view || (t._view = e.clone(t._model)), t._start = e.clone(t._view), t;
          }, transition: function transition(t) {
            var a = this;return a._view || (a._view = e.clone(a._model)), 1 === t ? (a._view = a._model, a._start = null, a) : (a._start || a.pivot(), e.each(a._model, function (i, n) {
              if ("_" === n[0]) ;else if (a._view.hasOwnProperty(n)) {
                if (i === a._view[n]) ;else if ("string" == typeof i) try {
                  var o = e.color(a._model[n]).mix(e.color(a._start[n]), t);a._view[n] = o.rgbString();
                } catch (r) {
                  a._view[n] = i;
                } else if ("number" == typeof i) {
                  var l = void 0 !== a._start[n] && isNaN(a._start[n]) === !1 ? a._start[n] : 0;a._view[n] = (a._model[n] - l) * t + l;
                } else a._view[n] = i;
              } else "number" != typeof i || isNaN(a._view[n]) ? a._view[n] = i : a._view[n] = i * t;
            }, a), a);
          }, tooltipPosition: function tooltipPosition() {
            return { x: this._model.x, y: this._model.y };
          }, hasValue: function hasValue() {
            return e.isNumber(this._model.x) && e.isNumber(this._model.y);
          } }), t.Element.extend = e.inherits;
      };
    }, {}], 26: [function (t, e, a) {
      "use strict";
      var i = t(3);e.exports = function (t) {
        function e(t, e, a) {
          var i;return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[a])) : i = t, i;
        }function a(t) {
          return void 0 !== t && null !== t && "none" !== t;
        }function n(t, i, n) {
          var o = document.defaultView,
              r = t.parentNode,
              l = o.getComputedStyle(t)[i],
              s = o.getComputedStyle(r)[i],
              d = a(l),
              u = a(s),
              c = Number.POSITIVE_INFINITY;return d || u ? Math.min(d ? e(l, t, n) : c, u ? e(s, r, n) : c) : "none";
        }var o = t.helpers = {};o.each = function (t, e, a, i) {
          var n, r;if (o.isArray(t)) {
            if (r = t.length, i) for (n = r - 1; n >= 0; n--) {
              e.call(a, t[n], n);
            } else for (n = 0; r > n; n++) {
              e.call(a, t[n], n);
            }
          } else if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
            var l = Object.keys(t);for (r = l.length, n = 0; r > n; n++) {
              e.call(a, t[l[n]], l[n]);
            }
          }
        }, o.clone = function (t) {
          var e = {};return o.each(t, function (t, a) {
            o.isArray(t) ? e[a] = t.slice(0) : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t ? e[a] = o.clone(t) : e[a] = t;
          }), e;
        }, o.extend = function (t) {
          for (var e = function e(_e, a) {
            t[a] = _e;
          }, a = 1, i = arguments.length; i > a; a++) {
            o.each(arguments[a], e);
          }return t;
        }, o.configMerge = function (e) {
          var a = o.clone(e);return o.each(Array.prototype.slice.call(arguments, 1), function (e) {
            o.each(e, function (e, i) {
              var n = a.hasOwnProperty(i),
                  r = n ? a[i] : {};"scales" === i ? a[i] = o.scaleMerge(r, e) : "scale" === i ? a[i] = o.configMerge(r, t.scaleService.getScaleDefaults(e.type), e) : !n || "object" != (typeof r === "undefined" ? "undefined" : _typeof(r)) || o.isArray(r) || null === r || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) || o.isArray(e) ? a[i] = e : a[i] = o.configMerge(r, e);
            });
          }), a;
        }, o.scaleMerge = function (e, a) {
          var i = o.clone(e);return o.each(a, function (e, a) {
            "xAxes" === a || "yAxes" === a ? i.hasOwnProperty(a) ? o.each(e, function (e, n) {
              var r = o.getValueOrDefault(e.type, "xAxes" === a ? "category" : "linear"),
                  l = t.scaleService.getScaleDefaults(r);n >= i[a].length || !i[a][n].type ? i[a].push(o.configMerge(l, e)) : e.type && e.type !== i[a][n].type ? i[a][n] = o.configMerge(i[a][n], l, e) : i[a][n] = o.configMerge(i[a][n], e);
            }) : (i[a] = [], o.each(e, function (e) {
              var n = o.getValueOrDefault(e.type, "xAxes" === a ? "category" : "linear");i[a].push(o.configMerge(t.scaleService.getScaleDefaults(n), e));
            })) : i.hasOwnProperty(a) && "object" == _typeof(i[a]) && null !== i[a] && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? i[a] = o.configMerge(i[a], e) : i[a] = e;
          }), i;
        }, o.getValueAtIndexOrDefault = function (t, e, a) {
          return void 0 === t || null === t ? a : o.isArray(t) ? e < t.length ? t[e] : a : t;
        }, o.getValueOrDefault = function (t, e) {
          return void 0 === t ? e : t;
        }, o.indexOf = Array.prototype.indexOf ? function (t, e) {
          return t.indexOf(e);
        } : function (t, e) {
          for (var a = 0, i = t.length; i > a; ++a) {
            if (t[a] === e) return a;
          }return -1;
        }, o.where = function (t, e) {
          if (o.isArray(t) && Array.prototype.filter) return t.filter(e);var a = [];return o.each(t, function (t) {
            e(t) && a.push(t);
          }), a;
        }, o.findIndex = Array.prototype.findIndex ? function (t, e, a) {
          return t.findIndex(e, a);
        } : function (t, e, a) {
          a = void 0 === a ? t : a;for (var i = 0, n = t.length; n > i; ++i) {
            if (e.call(a, t[i], i, t)) return i;
          }return -1;
        }, o.findNextWhere = function (t, e, a) {
          (void 0 === a || null === a) && (a = -1);for (var i = a + 1; i < t.length; i++) {
            var n = t[i];if (e(n)) return n;
          }
        }, o.findPreviousWhere = function (t, e, a) {
          (void 0 === a || null === a) && (a = t.length);for (var i = a - 1; i >= 0; i--) {
            var n = t[i];if (e(n)) return n;
          }
        }, o.inherits = function (t) {
          var e = this,
              a = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
            return e.apply(this, arguments);
          },
              i = function i() {
            this.constructor = a;
          };return i.prototype = e.prototype, a.prototype = new i(), a.extend = o.inherits, t && o.extend(a.prototype, t), a.__super__ = e.prototype, a;
        }, o.noop = function () {}, o.uid = function () {
          var t = 0;return function () {
            return t++;
          };
        }(), o.isNumber = function (t) {
          return !isNaN(parseFloat(t)) && isFinite(t);
        }, o.almostEquals = function (t, e, a) {
          return Math.abs(t - e) < a;
        }, o.max = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.max(t, e);
          }, Number.NEGATIVE_INFINITY);
        }, o.min = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.min(t, e);
          }, Number.POSITIVE_INFINITY);
        }, o.sign = Math.sign ? function (t) {
          return Math.sign(t);
        } : function (t) {
          return t = +t, 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1;
        }, o.log10 = Math.log10 ? function (t) {
          return Math.log10(t);
        } : function (t) {
          return Math.log(t) / Math.LN10;
        }, o.toRadians = function (t) {
          return t * (Math.PI / 180);
        }, o.toDegrees = function (t) {
          return t * (180 / Math.PI);
        }, o.getAngleFromPoint = function (t, e) {
          var a = e.x - t.x,
              i = e.y - t.y,
              n = Math.sqrt(a * a + i * i),
              o = Math.atan2(i, a);return o < -.5 * Math.PI && (o += 2 * Math.PI), { angle: o, distance: n };
        }, o.distanceBetweenPoints = function (t, e) {
          return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }, o.aliasPixel = function (t) {
          return t % 2 === 0 ? 0 : .5;
        }, o.splineCurve = function (t, e, a, i) {
          var n = t.skip ? e : t,
              o = e,
              r = a.skip ? e : a,
              l = Math.sqrt(Math.pow(o.x - n.x, 2) + Math.pow(o.y - n.y, 2)),
              s = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
              d = l / (l + s),
              u = s / (l + s);d = isNaN(d) ? 0 : d, u = isNaN(u) ? 0 : u;var c = i * d,
              h = i * u;return { previous: { x: o.x - c * (r.x - n.x), y: o.y - c * (r.y - n.y) }, next: { x: o.x + h * (r.x - n.x), y: o.y + h * (r.y - n.y) } };
        }, o.EPSILON = Number.EPSILON || 1e-14, o.splineCurveMonotone = function (t) {
          var e,
              a,
              i,
              n,
              r = (t || []).map(function (t) {
            return { model: t._model, deltaK: 0, mK: 0 };
          }),
              l = r.length;for (e = 0; l > e; ++e) {
            i = r[e], i.model.skip || (a = e > 0 ? r[e - 1] : null, n = l - 1 > e ? r[e + 1] : null, n && !n.model.skip && (i.deltaK = (n.model.y - i.model.y) / (n.model.x - i.model.x)), !a || a.model.skip ? i.mK = i.deltaK : !n || n.model.skip ? i.mK = a.deltaK : this.sign(a.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (a.deltaK + i.deltaK) / 2);
          }var s, d, u, c;for (e = 0; l - 1 > e; ++e) {
            i = r[e], n = r[e + 1], i.model.skip || n.model.skip || (o.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = n.mK = 0 : (s = i.mK / i.deltaK, d = n.mK / i.deltaK, c = Math.pow(s, 2) + Math.pow(d, 2), 9 >= c || (u = 3 / Math.sqrt(c), i.mK = s * u * i.deltaK, n.mK = d * u * i.deltaK)));
          }var h;for (e = 0; l > e; ++e) {
            i = r[e], i.model.skip || (a = e > 0 ? r[e - 1] : null, n = l - 1 > e ? r[e + 1] : null, a && !a.model.skip && (h = (i.model.x - a.model.x) / 3, i.model.controlPointPreviousX = i.model.x - h, i.model.controlPointPreviousY = i.model.y - h * i.mK), n && !n.model.skip && (h = (n.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + h, i.model.controlPointNextY = i.model.y + h * i.mK));
          }
        }, o.nextItem = function (t, e, a) {
          return a ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1];
        }, o.previousItem = function (t, e, a) {
          return a ? 0 >= e ? t[t.length - 1] : t[e - 1] : 0 >= e ? t[0] : t[e - 1];
        }, o.niceNum = function (t, e) {
          var a,
              i = Math.floor(o.log10(t)),
              n = t / Math.pow(10, i);return a = e ? 1.5 > n ? 1 : 3 > n ? 2 : 7 > n ? 5 : 10 : 1 >= n ? 1 : 2 >= n ? 2 : 5 >= n ? 5 : 10, a * Math.pow(10, i);
        };var r = o.easingEffects = { linear: function linear(t) {
            return t;
          }, easeInQuad: function easeInQuad(t) {
            return t * t;
          }, easeOutQuad: function easeOutQuad(t) {
            return -1 * t * (t - 2);
          }, easeInOutQuad: function easeInOutQuad(t) {
            return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1);
          }, easeInCubic: function easeInCubic(t) {
            return t * t * t;
          }, easeOutCubic: function easeOutCubic(t) {
            return 1 * ((t = t / 1 - 1) * t * t + 1);
          }, easeInOutCubic: function easeInOutCubic(t) {
            return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
          }, easeInQuart: function easeInQuart(t) {
            return t * t * t * t;
          }, easeOutQuart: function easeOutQuart(t) {
            return -1 * ((t = t / 1 - 1) * t * t * t - 1);
          }, easeInOutQuart: function easeInOutQuart(t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
          }, easeInQuint: function easeInQuint(t) {
            return 1 * (t /= 1) * t * t * t * t;
          }, easeOutQuint: function easeOutQuint(t) {
            return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
          }, easeInOutQuint: function easeInOutQuint(t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
          }, easeInSine: function easeInSine(t) {
            return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
          }, easeOutSine: function easeOutSine(t) {
            return 1 * Math.sin(t / 1 * (Math.PI / 2));
          }, easeInOutSine: function easeInOutSine(t) {
            return -0.5 * (Math.cos(Math.PI * t / 1) - 1);
          }, easeInExpo: function easeInExpo(t) {
            return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
          }, easeOutExpo: function easeOutExpo(t) {
            return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
          }, easeInOutExpo: function easeInOutExpo(t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2);
          }, easeInCirc: function easeInCirc(t) {
            return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
          }, easeOutCirc: function easeOutCirc(t) {
            return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
          }, easeInOutCirc: function easeInOutCirc(t) {
            return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
          }, easeInElastic: function easeInElastic(t) {
            var e = 1.70158,
                a = 0,
                i = 1;return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (a || (a = .3), i < Math.abs(1) ? (i = 1, e = a / 4) : e = a / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / a)));
          }, easeOutElastic: function easeOutElastic(t) {
            var e = 1.70158,
                a = 0,
                i = 1;return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (a || (a = .3), i < Math.abs(1) ? (i = 1, e = a / 4) : e = a / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / a) + 1);
          }, easeInOutElastic: function easeInOutElastic(t) {
            var e = 1.70158,
                a = 0,
                i = 1;return 0 === t ? 0 : 2 === (t /= .5) ? 1 : (a || (a = 1 * (.3 * 1.5)), i < Math.abs(1) ? (i = 1, e = a / 4) : e = a / (2 * Math.PI) * Math.asin(1 / i), 1 > t ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / a)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / a) * .5 + 1);
          }, easeInBack: function easeInBack(t) {
            var e = 1.70158;return 1 * (t /= 1) * t * ((e + 1) * t - e);
          }, easeOutBack: function easeOutBack(t) {
            var e = 1.70158;return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1);
          }, easeInOutBack: function easeInOutBack(t) {
            var e = 1.70158;return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2);
          }, easeInBounce: function easeInBounce(t) {
            return 1 - r.easeOutBounce(1 - t);
          }, easeOutBounce: function easeOutBounce(t) {
            return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
          }, easeInOutBounce: function easeInOutBounce(t) {
            return .5 > t ? .5 * r.easeInBounce(2 * t) : .5 * r.easeOutBounce(2 * t - 1) + .5;
          } };o.requestAnimFrame = function () {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
            return window.setTimeout(t, 1e3 / 60);
          };
        }(), o.cancelAnimFrame = function () {
          return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (t) {
            return window.clearTimeout(t, 1e3 / 60);
          };
        }(), o.getRelativePosition = function (t, e) {
          var a,
              i,
              n = t.originalEvent || t,
              r = t.currentTarget || t.srcElement,
              l = r.getBoundingClientRect(),
              s = n.touches;s && s.length > 0 ? (a = s[0].clientX, i = s[0].clientY) : (a = n.clientX, i = n.clientY);var d = parseFloat(o.getStyle(r, "padding-left")),
              u = parseFloat(o.getStyle(r, "padding-top")),
              c = parseFloat(o.getStyle(r, "padding-right")),
              h = parseFloat(o.getStyle(r, "padding-bottom")),
              f = l.right - l.left - d - c,
              g = l.bottom - l.top - u - h;return a = Math.round((a - l.left - d) / f * r.width / e.currentDevicePixelRatio), i = Math.round((i - l.top - u) / g * r.height / e.currentDevicePixelRatio), { x: a, y: i };
        }, o.addEvent = function (t, e, a) {
          t.addEventListener ? t.addEventListener(e, a) : t.attachEvent ? t.attachEvent("on" + e, a) : t["on" + e] = a;
        }, o.removeEvent = function (t, e, a) {
          t.removeEventListener ? t.removeEventListener(e, a, !1) : t.detachEvent ? t.detachEvent("on" + e, a) : t["on" + e] = o.noop;
        }, o.bindEvents = function (t, e, a) {
          var i = t.events = t.events || {};o.each(e, function (e) {
            i[e] = function () {
              a.apply(t, arguments);
            }, o.addEvent(t.chart.canvas, e, i[e]);
          });
        }, o.unbindEvents = function (t, e) {
          var a = t.chart.canvas;o.each(e, function (t, e) {
            o.removeEvent(a, e, t);
          });
        }, o.getConstraintWidth = function (t) {
          return n(t, "max-width", "clientWidth");
        }, o.getConstraintHeight = function (t) {
          return n(t, "max-height", "clientHeight");
        }, o.getMaximumWidth = function (t) {
          var e = t.parentNode,
              a = parseInt(o.getStyle(e, "padding-left"), 10),
              i = parseInt(o.getStyle(e, "padding-right"), 10),
              n = e.clientWidth - a - i,
              r = o.getConstraintWidth(t);return isNaN(r) ? n : Math.min(n, r);
        }, o.getMaximumHeight = function (t) {
          var e = t.parentNode,
              a = parseInt(o.getStyle(e, "padding-top"), 10),
              i = parseInt(o.getStyle(e, "padding-bottom"), 10),
              n = e.clientHeight - a - i,
              r = o.getConstraintHeight(t);return isNaN(r) ? n : Math.min(n, r);
        }, o.getStyle = function (t, e) {
          return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
        }, o.retinaScale = function (t) {
          var e = t.currentDevicePixelRatio = window.devicePixelRatio || 1;if (1 !== e) {
            var a = t.canvas,
                i = t.height,
                n = t.width;a.height = i * e, a.width = n * e, t.ctx.scale(e, e), a.style.height = i + "px", a.style.width = n + "px";
          }
        }, o.clear = function (t) {
          t.ctx.clearRect(0, 0, t.width, t.height);
        }, o.fontString = function (t, e, a) {
          return e + " " + t + "px " + a;
        }, o.longestText = function (t, e, a, i) {
          i = i || {};var n = i.data = i.data || {},
              r = i.garbageCollect = i.garbageCollect || [];i.font !== e && (n = i.data = {}, r = i.garbageCollect = [], i.font = e), t.font = e;var l = 0;o.each(a, function (e) {
            void 0 !== e && null !== e && o.isArray(e) !== !0 ? l = o.measureText(t, n, r, l, e) : o.isArray(e) && o.each(e, function (e) {
              void 0 === e || null === e || o.isArray(e) || (l = o.measureText(t, n, r, l, e));
            });
          });var s = r.length / 2;if (s > a.length) {
            for (var d = 0; s > d; d++) {
              delete n[r[d]];
            }r.splice(0, s);
          }return l;
        }, o.measureText = function (t, e, a, i, n) {
          var o = e[n];return o || (o = e[n] = t.measureText(n).width, a.push(n)), o > i && (i = o), i;
        }, o.numberOfLabelLines = function (t) {
          var e = 1;return o.each(t, function (t) {
            o.isArray(t) && t.length > e && (e = t.length);
          }), e;
        }, o.drawRoundedRectangle = function (t, e, a, i, n, o) {
          t.beginPath(), t.moveTo(e + o, a), t.lineTo(e + i - o, a), t.quadraticCurveTo(e + i, a, e + i, a + o), t.lineTo(e + i, a + n - o), t.quadraticCurveTo(e + i, a + n, e + i - o, a + n), t.lineTo(e + o, a + n), t.quadraticCurveTo(e, a + n, e, a + n - o), t.lineTo(e, a + o), t.quadraticCurveTo(e, a, e + o, a), t.closePath();
        }, o.color = function (e) {
          return i ? i(e instanceof CanvasGradient ? t.defaults.global.defaultColor : e) : (console.error("Color.js not found!"), e);
        }, o.addResizeListener = function (t, e) {
          var a = document.createElement("iframe");a.className = "chartjs-hidden-iframe", a.style.cssText = "display:block;overflow:hidden;border:0;margin:0;top:0;left:0;bottom:0;right:0;height:100%;width:100%;position:absolute;pointer-events:none;z-index:-1;", a.tabIndex = -1;var i = t._chartjs = { resizer: a, ticking: !1 },
              n = function n() {
            i.ticking || (i.ticking = !0, o.requestAnimFrame.call(window, function () {
              return i.resizer ? (i.ticking = !1, e()) : void 0;
            }));
          };o.addEvent(a, "load", function () {
            o.addEvent(a.contentWindow || a, "resize", n), n();
          }), t.insertBefore(a, t.firstChild);
        }, o.removeResizeListener = function (t) {
          if (t && t._chartjs) {
            var e = t._chartjs.resizer;e && (e.parentNode.removeChild(e), t._chartjs.resizer = null), delete t._chartjs;
          }
        }, o.isArray = Array.isArray ? function (t) {
          return Array.isArray(t);
        } : function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        }, o.arrayEquals = function (t, e) {
          var a, i, n, r;if (!t || !e || t.length !== e.length) return !1;for (a = 0, i = t.length; i > a; ++a) {
            if (n = t[a], r = e[a], n instanceof Array && r instanceof Array) {
              if (!o.arrayEquals(n, r)) return !1;
            } else if (n !== r) return !1;
          }return !0;
        }, o.callCallback = function (t, e, a) {
          t && "function" == typeof t.call && t.apply(a, e);
        }, o.getHoverColor = function (t) {
          return t instanceof CanvasPattern ? t : o.color(t).saturate(.5).darken(.1).rgbString();
        };
      };
    }, { 3: 3 }], 27: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        function e(t, e) {
          var a,
              i,
              n,
              o,
              r,
              l = t.data.datasets;for (i = 0, o = l.length; o > i; ++i) {
            if (t.isDatasetVisible(i)) for (a = t.getDatasetMeta(i), n = 0, r = a.data.length; r > n; ++n) {
              var s = a.data[n];s._view.skip || e(s);
            }
          }
        }function a(t, a) {
          var i = [];return e(t, function (t) {
            t.inRange(a.x, a.y) && i.push(t);
          }), i;
        }function i(t, a, i, n) {
          var r = Number.POSITIVE_INFINITY,
              l = [];return n || (n = o.distanceBetweenPoints), e(t, function (t) {
            if (!i || t.inRange(a.x, a.y)) {
              var e = t.getCenterPoint(),
                  o = n(a, e);r > o ? (l = [t], r = o) : o === r && l.push(t);
            }
          }), l;
        }function n(t, e, n) {
          var r = o.getRelativePosition(e, t.chart),
              l = function l(t, e) {
            return Math.abs(t.x - e.x);
          },
              s = n.intersect ? a(t, r) : i(t, r, !1, l),
              d = [];return s.length ? (t.data.datasets.forEach(function (e, a) {
            if (t.isDatasetVisible(a)) {
              var i = t.getDatasetMeta(a),
                  n = i.data[s[0]._index];n && !n._view.skip && d.push(n);
            }
          }), d) : [];
        }var o = t.helpers;t.Interaction = { modes: { single: function single(t, a) {
              var i = o.getRelativePosition(a, t.chart),
                  n = [];return e(t, function (t) {
                return t.inRange(i.x, i.y) ? (n.push(t), n) : void 0;
              }), n.slice(0, 1);
            }, label: n, index: n, dataset: function dataset(t, e, n) {
              var r = o.getRelativePosition(e, t.chart),
                  l = n.intersect ? a(t, r) : i(t, r, !1);return l.length > 0 && (l = t.getDatasetMeta(l[0]._datasetIndex).data), l;
            }, "x-axis": function xAxis(t, e) {
              return n(t, e, !0);
            }, point: function point(t, e) {
              var i = o.getRelativePosition(e, t.chart);return a(t, i);
            }, nearest: function nearest(t, e, a) {
              var n = o.getRelativePosition(e, t.chart),
                  r = i(t, n, a.intersect);return r.length > 1 && r.sort(function (t, e) {
                var a = t.getArea(),
                    i = e.getArea(),
                    n = a - i;return 0 === n && (n = t._datasetIndex - e._datasetIndex), n;
              }), r.slice(0, 1);
            }, x: function x(t, a, i) {
              var n = o.getRelativePosition(a, t.chart),
                  r = [],
                  l = !1;return e(t, function (t) {
                t.inXRange(n.x) && r.push(t), t.inRange(n.x, n.y) && (l = !0);
              }), i.intersect && !l && (r = []), r;
            }, y: function y(t, a, i) {
              var n = o.getRelativePosition(a, t.chart),
                  r = [],
                  l = !1;return e(t, function (t) {
                t.inYRange(n.y) && r.push(t), t.inRange(n.x, n.y) && (l = !0);
              }), i.intersect && !l && (r = []), r;
            } } };
      };
    }, {}], 28: [function (t, e, a) {
      "use strict";
      e.exports = function () {
        var t = function t(e, a) {
          return this.controller = new t.Controller(e, a, this), this.controller;
        };return t.defaults = { global: { responsive: !0, responsiveAnimationDuration: 0, maintainAspectRatio: !0, events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"], hover: { onHover: null, mode: "nearest", intersect: !0, animationDuration: 400 }, onClick: null, defaultColor: "rgba(0,0,0,0.1)", defaultFontColor: "#666", defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", defaultFontSize: 12, defaultFontStyle: "normal", showLines: !0, elements: {}, legendCallback: function legendCallback(t) {
              var e = [];e.push('<ul class="' + t.id + '-legend">');for (var a = 0; a < t.data.datasets.length; a++) {
                e.push('<li><span style="background-color:' + t.data.datasets[a].backgroundColor + '"></span>'), t.data.datasets[a].label && e.push(t.data.datasets[a].label), e.push("</li>");
              }return e.push("</ul>"), e.join("");
            } } }, t.Chart = t, t;
      };
    }, {}], 29: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers;t.layoutService = { defaults: {}, addBox: function addBox(t, e) {
            t.boxes || (t.boxes = []), t.boxes.push(e);
          }, removeBox: function removeBox(t, e) {
            t.boxes && t.boxes.splice(t.boxes.indexOf(e), 1);
          }, update: function update(t, a, i) {
            function n(t) {
              var e,
                  a = t.isHorizontal();a ? (e = t.update(t.options.fullWidth ? x : C, M), D -= e.height) : (e = t.update(w, S), C -= e.width), I.push({ horizontal: a, minSize: e, box: t });
            }function o(t) {
              var a = e.findNextWhere(I, function (e) {
                return e.box === t;
              });if (a) if (t.isHorizontal()) {
                var i = { left: A, right: T, top: 0, bottom: 0 };t.update(t.options.fullWidth ? x : C, y / 2, i);
              } else t.update(a.minSize.width, D);
            }function r(t) {
              var a = e.findNextWhere(I, function (e) {
                return e.box === t;
              }),
                  i = { left: 0, right: 0, top: P, bottom: F };a && t.update(a.minSize.width, D, i);
            }function l(t) {
              t.isHorizontal() ? (t.left = t.options.fullWidth ? u : A, t.right = t.options.fullWidth ? a - c : A + C, t.top = L, t.bottom = L + t.height, L = t.bottom) : (t.left = V, t.right = V + t.width, t.top = P, t.bottom = P + D, V = t.right);
            }if (t) {
              var s = t.options.layout,
                  d = s ? s.padding : null,
                  u = 0,
                  c = 0,
                  h = 0,
                  f = 0;isNaN(d) ? (u = d.left || 0, c = d.right || 0, h = d.top || 0, f = d.bottom || 0) : (u = d, c = d, h = d, f = d);var g = e.where(t.boxes, function (t) {
                return "left" === t.options.position;
              }),
                  p = e.where(t.boxes, function (t) {
                return "right" === t.options.position;
              }),
                  m = e.where(t.boxes, function (t) {
                return "top" === t.options.position;
              }),
                  b = e.where(t.boxes, function (t) {
                return "bottom" === t.options.position;
              }),
                  v = e.where(t.boxes, function (t) {
                return "chartArea" === t.options.position;
              });m.sort(function (t, e) {
                return (e.options.fullWidth ? 1 : 0) - (t.options.fullWidth ? 1 : 0);
              }), b.sort(function (t, e) {
                return (t.options.fullWidth ? 1 : 0) - (e.options.fullWidth ? 1 : 0);
              });var x = a - u - c,
                  y = i - h - f,
                  k = x / 2,
                  S = y / 2,
                  w = (a - k) / (g.length + p.length),
                  M = (i - S) / (m.length + b.length),
                  C = x,
                  D = y,
                  I = [];e.each(g.concat(p, m, b), n);var A = u,
                  T = c,
                  P = h,
                  F = f;e.each(g.concat(p), o), e.each(g, function (t) {
                A += t.width;
              }), e.each(p, function (t) {
                T += t.width;
              }), e.each(m.concat(b), o), e.each(m, function (t) {
                P += t.height;
              }), e.each(b, function (t) {
                F += t.height;
              }), e.each(g.concat(p), r), A = u, T = c, P = h, F = f, e.each(g, function (t) {
                A += t.width;
              }), e.each(p, function (t) {
                T += t.width;
              }), e.each(m, function (t) {
                P += t.height;
              }), e.each(b, function (t) {
                F += t.height;
              });var _ = i - P - F,
                  R = a - A - T;(R !== C || _ !== D) && (e.each(g, function (t) {
                t.height = _;
              }), e.each(p, function (t) {
                t.height = _;
              }), e.each(m, function (t) {
                t.options.fullWidth || (t.width = R);
              }), e.each(b, function (t) {
                t.options.fullWidth || (t.width = R);
              }), D = _, C = R);var V = u,
                  L = h;e.each(g.concat(m), l), V += C, L += D, e.each(p, l), e.each(b, l), t.chartArea = { left: A, top: P, right: A + C, bottom: P + D }, e.each(v, function (e) {
                e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(C, D);
              });
            }
          } };
      };
    }, {}], 30: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        function e(t, e) {
          return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth;
        }var a = t.helpers,
            i = a.noop;t.defaults.global.legend = { display: !0, position: "top", fullWidth: !0, reverse: !1, onClick: function onClick(t, e) {
            var a = e.datasetIndex,
                i = this.chart,
                n = i.getDatasetMeta(a);n.hidden = null === n.hidden ? !i.data.datasets[a].hidden : null, i.update();
          }, onHover: null, labels: { boxWidth: 40, padding: 10, generateLabels: function generateLabels(t) {
              var e = t.data;return a.isArray(e.datasets) ? e.datasets.map(function (e, i) {
                return { text: e.label, fillStyle: a.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor, hidden: !t.isDatasetVisible(i), lineCap: e.borderCapStyle, lineDash: e.borderDash, lineDashOffset: e.borderDashOffset, lineJoin: e.borderJoinStyle, lineWidth: e.borderWidth, strokeStyle: e.borderColor, pointStyle: e.pointStyle, datasetIndex: i };
              }, this) : [];
            } } }, t.Legend = t.Element.extend({ initialize: function initialize(t) {
            a.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1;
          }, beforeUpdate: i, update: function update(t, e, a) {
            var i = this;return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = a, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
          }, afterUpdate: i, beforeSetDimensions: i, setDimensions: function setDimensions() {
            var t = this;t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = { width: 0, height: 0 };
          }, afterSetDimensions: i, beforeBuildLabels: i, buildLabels: function buildLabels() {
            var t = this;t.legendItems = t.options.labels.generateLabels.call(t, t.chart), t.options.reverse && t.legendItems.reverse();
          }, afterBuildLabels: i, beforeFit: i, fit: function fit() {
            var i = this,
                n = i.options,
                o = n.labels,
                r = n.display,
                l = i.ctx,
                s = t.defaults.global,
                d = a.getValueOrDefault,
                u = d(o.fontSize, s.defaultFontSize),
                c = d(o.fontStyle, s.defaultFontStyle),
                h = d(o.fontFamily, s.defaultFontFamily),
                f = a.fontString(u, c, h),
                g = i.legendHitBoxes = [],
                p = i.minSize,
                m = i.isHorizontal();if (m ? (p.width = i.maxWidth, p.height = r ? 10 : 0) : (p.width = r ? 10 : 0, p.height = i.maxHeight), r) if (l.font = f, m) {
              var b = i.lineWidths = [0],
                  v = i.legendItems.length ? u + o.padding : 0;l.textAlign = "left", l.textBaseline = "top", a.each(i.legendItems, function (t, a) {
                var n = e(o, u),
                    r = n + u / 2 + l.measureText(t.text).width;b[b.length - 1] + r + o.padding >= i.width && (v += u + o.padding, b[b.length] = i.left), g[a] = { left: 0, top: 0, width: r, height: u }, b[b.length - 1] += r + o.padding;
              }), p.height += v;
            } else {
              var x = o.padding,
                  y = i.columnWidths = [],
                  k = o.padding,
                  S = 0,
                  w = 0,
                  M = u + x;a.each(i.legendItems, function (t, a) {
                var i = e(o, u),
                    n = i + u / 2 + l.measureText(t.text).width;w + M > p.height && (k += S + o.padding, y.push(S), S = 0, w = 0), S = Math.max(S, n), w += M, g[a] = { left: 0, top: 0, width: n, height: u };
              }), k += S, y.push(S), p.width += k;
            }i.width = p.width, i.height = p.height;
          }, afterFit: i, isHorizontal: function isHorizontal() {
            return "top" === this.options.position || "bottom" === this.options.position;
          }, draw: function draw() {
            var i = this,
                n = i.options,
                o = n.labels,
                r = t.defaults.global,
                l = r.elements.line,
                s = i.width,
                d = i.lineWidths;if (n.display) {
              var u,
                  c = i.ctx,
                  h = a.getValueOrDefault,
                  f = h(o.fontColor, r.defaultFontColor),
                  g = h(o.fontSize, r.defaultFontSize),
                  p = h(o.fontStyle, r.defaultFontStyle),
                  m = h(o.fontFamily, r.defaultFontFamily),
                  b = a.fontString(g, p, m);c.textAlign = "left", c.textBaseline = "top", c.lineWidth = .5, c.strokeStyle = f, c.fillStyle = f, c.font = b;var v = e(o, g),
                  x = i.legendHitBoxes,
                  y = function y(e, a, i) {
                if (!(isNaN(v) || 0 >= v)) {
                  c.save(), c.fillStyle = h(i.fillStyle, r.defaultColor), c.lineCap = h(i.lineCap, l.borderCapStyle), c.lineDashOffset = h(i.lineDashOffset, l.borderDashOffset), c.lineJoin = h(i.lineJoin, l.borderJoinStyle), c.lineWidth = h(i.lineWidth, l.borderWidth), c.strokeStyle = h(i.strokeStyle, r.defaultColor);var o = 0 === h(i.lineWidth, l.borderWidth);if (c.setLineDash && c.setLineDash(h(i.lineDash, l.borderDash)), n.labels && n.labels.usePointStyle) {
                    var s = g * Math.SQRT2 / 2,
                        d = s / Math.SQRT2,
                        u = e + d,
                        f = a + d;t.canvasHelpers.drawPoint(c, i.pointStyle, s, u, f);
                  } else o || c.strokeRect(e, a, v, g), c.fillRect(e, a, v, g);c.restore();
                }
              },
                  k = function k(t, e, a, i) {
                c.fillText(a.text, v + g / 2 + t, e), a.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(v + g / 2 + t, e + g / 2), c.lineTo(v + g / 2 + t + i, e + g / 2), c.stroke());
              },
                  S = i.isHorizontal();u = S ? { x: i.left + (s - d[0]) / 2, y: i.top + o.padding, line: 0 } : { x: i.left + o.padding, y: i.top + o.padding, line: 0 };var w = g + o.padding;a.each(i.legendItems, function (t, e) {
                var a = c.measureText(t.text).width,
                    n = v + g / 2 + a,
                    r = u.x,
                    l = u.y;S ? r + n >= s && (l = u.y += w, u.line++, r = u.x = i.left + (s - d[u.line]) / 2) : l + w > i.bottom && (r = u.x = r + i.columnWidths[u.line] + o.padding, l = u.y = i.top, u.line++), y(r, l, t), x[e].left = r, x[e].top = l, k(r, l, t, a), S ? u.x += n + o.padding : u.y += w;
              });
            }
          }, handleEvent: function handleEvent(t) {
            var e = this,
                i = e.options,
                n = "mouseup" === t.type ? "click" : t.type,
                o = !1;if ("mousemove" === n) {
              if (!i.onHover) return;
            } else {
              if ("click" !== n) return;if (!i.onClick) return;
            }var r = a.getRelativePosition(t, e.chart.chart),
                l = r.x,
                s = r.y;if (l >= e.left && l <= e.right && s >= e.top && s <= e.bottom) for (var d = e.legendHitBoxes, u = 0; u < d.length; ++u) {
              var c = d[u];if (l >= c.left && l <= c.left + c.width && s >= c.top && s <= c.top + c.height) {
                if ("click" === n) {
                  i.onClick.call(e, t, e.legendItems[u]), o = !0;break;
                }if ("mousemove" === n) {
                  i.onHover.call(e, t, e.legendItems[u]), o = !0;break;
                }
              }
            }return o;
          } }), t.plugins.register({ beforeInit: function beforeInit(e) {
            var a = e.options,
                i = a.legend;i && (e.legend = new t.Legend({ ctx: e.chart.ctx, options: i, chart: e }), t.layoutService.addBox(e, e.legend));
          } });
      };
    }, {}], 31: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers.noop;t.plugins = { _plugins: [], register: function register(t) {
            var e = this._plugins;[].concat(t).forEach(function (t) {
              -1 === e.indexOf(t) && e.push(t);
            });
          }, unregister: function unregister(t) {
            var e = this._plugins;[].concat(t).forEach(function (t) {
              var a = e.indexOf(t);-1 !== a && e.splice(a, 1);
            });
          }, clear: function clear() {
            this._plugins = [];
          }, count: function count() {
            return this._plugins.length;
          }, getAll: function getAll() {
            return this._plugins;
          }, notify: function notify(t, e) {
            var a,
                i,
                n = this._plugins,
                o = n.length;
            for (a = 0; o > a; ++a) {
              if (i = n[a], "function" == typeof i[t] && i[t].apply(i, e || []) === !1) return !1;
            }return !0;
          } }, t.PluginBase = t.Element.extend({ beforeInit: e, afterInit: e, beforeUpdate: e, afterUpdate: e, beforeDraw: e, afterDraw: e, destroy: e }), t.pluginService = t.plugins;
      };
    }, {}], 32: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers;t.defaults.scale = { display: !0, position: "left", gridLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1, drawBorder: !0, drawOnChartArea: !0, drawTicks: !0, tickMarkLength: 10, zeroLineWidth: 1, zeroLineColor: "rgba(0,0,0,0.25)", offsetGridLines: !1, borderDash: [], borderDashOffset: 0 }, scaleLabel: { labelString: "", display: !1 }, ticks: { beginAtZero: !1, minRotation: 0, maxRotation: 50, mirror: !1, padding: 10, reverse: !1, display: !0, autoSkip: !0, autoSkipPadding: 0, labelOffset: 0, callback: t.Ticks.formatters.values } }, t.Scale = t.Element.extend({ beforeUpdate: function beforeUpdate() {
            e.callCallback(this.options.beforeUpdate, [this]);
          }, update: function update(t, a, i) {
            var n = this;return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = a, n.margins = e.extend({ left: 0, right: 0, top: 0, bottom: 0 }, i), n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeDataLimits(), n.determineDataLimits(), n.afterDataLimits(), n.beforeBuildTicks(), n.buildTicks(), n.afterBuildTicks(), n.beforeTickToLabelConversion(), n.convertTicksToLabels(), n.afterTickToLabelConversion(), n.beforeCalculateTickRotation(), n.calculateTickRotation(), n.afterCalculateTickRotation(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize;
          }, afterUpdate: function afterUpdate() {
            e.callCallback(this.options.afterUpdate, [this]);
          }, beforeSetDimensions: function beforeSetDimensions() {
            e.callCallback(this.options.beforeSetDimensions, [this]);
          }, setDimensions: function setDimensions() {
            var t = this;t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0;
          }, afterSetDimensions: function afterSetDimensions() {
            e.callCallback(this.options.afterSetDimensions, [this]);
          }, beforeDataLimits: function beforeDataLimits() {
            e.callCallback(this.options.beforeDataLimits, [this]);
          }, determineDataLimits: e.noop, afterDataLimits: function afterDataLimits() {
            e.callCallback(this.options.afterDataLimits, [this]);
          }, beforeBuildTicks: function beforeBuildTicks() {
            e.callCallback(this.options.beforeBuildTicks, [this]);
          }, buildTicks: e.noop, afterBuildTicks: function afterBuildTicks() {
            e.callCallback(this.options.afterBuildTicks, [this]);
          }, beforeTickToLabelConversion: function beforeTickToLabelConversion() {
            e.callCallback(this.options.beforeTickToLabelConversion, [this]);
          }, convertTicksToLabels: function convertTicksToLabels() {
            var t = this,
                e = t.options.ticks;t.ticks = t.ticks.map(e.userCallback || e.callback);
          }, afterTickToLabelConversion: function afterTickToLabelConversion() {
            e.callCallback(this.options.afterTickToLabelConversion, [this]);
          }, beforeCalculateTickRotation: function beforeCalculateTickRotation() {
            e.callCallback(this.options.beforeCalculateTickRotation, [this]);
          }, calculateTickRotation: function calculateTickRotation() {
            var a = this,
                i = a.ctx,
                n = t.defaults.global,
                o = a.options.ticks,
                r = e.getValueOrDefault(o.fontSize, n.defaultFontSize),
                l = e.getValueOrDefault(o.fontStyle, n.defaultFontStyle),
                s = e.getValueOrDefault(o.fontFamily, n.defaultFontFamily),
                d = e.fontString(r, l, s);i.font = d;var u,
                c = i.measureText(a.ticks[0]).width,
                h = i.measureText(a.ticks[a.ticks.length - 1]).width;if (a.labelRotation = o.minRotation || 0, a.paddingRight = 0, a.paddingLeft = 0, a.options.display && a.isHorizontal()) {
              a.paddingRight = h / 2 + 3, a.paddingLeft = c / 2 + 3, a.longestTextCache || (a.longestTextCache = {});for (var f, g, p = e.longestText(i, d, a.ticks, a.longestTextCache), m = p, b = a.getPixelForTick(1) - a.getPixelForTick(0) - 6; m > b && a.labelRotation < o.maxRotation;) {
                if (f = Math.cos(e.toRadians(a.labelRotation)), g = Math.sin(e.toRadians(a.labelRotation)), u = f * c, u + r / 2 > a.yLabelWidth && (a.paddingLeft = u + r / 2), a.paddingRight = r / 2, g * p > a.maxHeight) {
                  a.labelRotation--;break;
                }a.labelRotation++, m = f * p;
              }
            }a.margins && (a.paddingLeft = Math.max(a.paddingLeft - a.margins.left, 0), a.paddingRight = Math.max(a.paddingRight - a.margins.right, 0));
          }, afterCalculateTickRotation: function afterCalculateTickRotation() {
            e.callCallback(this.options.afterCalculateTickRotation, [this]);
          }, beforeFit: function beforeFit() {
            e.callCallback(this.options.beforeFit, [this]);
          }, fit: function fit() {
            var a = this,
                i = a.minSize = { width: 0, height: 0 },
                n = a.options,
                o = t.defaults.global,
                r = n.ticks,
                l = n.scaleLabel,
                s = n.gridLines,
                d = n.display,
                u = a.isHorizontal(),
                c = e.getValueOrDefault(r.fontSize, o.defaultFontSize),
                h = e.getValueOrDefault(r.fontStyle, o.defaultFontStyle),
                f = e.getValueOrDefault(r.fontFamily, o.defaultFontFamily),
                g = e.fontString(c, h, f),
                p = e.getValueOrDefault(l.fontSize, o.defaultFontSize),
                m = n.gridLines.tickMarkLength;if (u ? i.width = a.isFullWidth() ? a.maxWidth - a.margins.left - a.margins.right : a.maxWidth : i.width = d && s.drawTicks ? m : 0, u ? i.height = d && s.drawTicks ? m : 0 : i.height = a.maxHeight, l.display && d && (u ? i.height += 1.5 * p : i.width += 1.5 * p), r.display && d) {
              a.longestTextCache || (a.longestTextCache = {});var b = e.longestText(a.ctx, g, a.ticks, a.longestTextCache),
                  v = e.numberOfLabelLines(a.ticks),
                  x = .5 * c;if (u) {
                a.longestLabelWidth = b;var y = Math.sin(e.toRadians(a.labelRotation)) * a.longestLabelWidth + c * v + x * v;i.height = Math.min(a.maxHeight, i.height + y), a.ctx.font = g;var k = a.ctx.measureText(a.ticks[0]).width,
                    S = a.ctx.measureText(a.ticks[a.ticks.length - 1]).width,
                    w = Math.cos(e.toRadians(a.labelRotation)),
                    M = Math.sin(e.toRadians(a.labelRotation));a.paddingLeft = 0 !== a.labelRotation ? w * k + 3 : k / 2 + 3, a.paddingRight = 0 !== a.labelRotation ? M * (c / 2) + 3 : S / 2 + 3;
              } else {
                var C = a.maxWidth - i.width,
                    D = r.mirror;D ? b = 0 : b += a.options.ticks.padding, C > b ? i.width += b : i.width = a.maxWidth, a.paddingTop = c / 2, a.paddingBottom = c / 2;
              }
            }a.margins && (a.paddingLeft = Math.max(a.paddingLeft - a.margins.left, 0), a.paddingTop = Math.max(a.paddingTop - a.margins.top, 0), a.paddingRight = Math.max(a.paddingRight - a.margins.right, 0), a.paddingBottom = Math.max(a.paddingBottom - a.margins.bottom, 0)), a.width = i.width, a.height = i.height;
          }, afterFit: function afterFit() {
            e.callCallback(this.options.afterFit, [this]);
          }, isHorizontal: function isHorizontal() {
            return "top" === this.options.position || "bottom" === this.options.position;
          }, isFullWidth: function isFullWidth() {
            return this.options.fullWidth;
          }, getRightValue: function getRightValue(t) {
            return null === t || "undefined" == typeof t ? NaN : "number" != typeof t || isFinite(t) ? "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t instanceof Date || t.isValid ? t : this.getRightValue(this.isHorizontal() ? t.x : t.y) : t : NaN;
          }, getLabelForIndex: e.noop, getPixelForValue: e.noop, getValueForPixel: e.noop, getPixelForTick: function getPixelForTick(t, e) {
            var a = this;if (a.isHorizontal()) {
              var i = a.width - (a.paddingLeft + a.paddingRight),
                  n = i / Math.max(a.ticks.length - (a.options.gridLines.offsetGridLines ? 0 : 1), 1),
                  o = n * t + a.paddingLeft;e && (o += n / 2);var r = a.left + Math.round(o);return r += a.isFullWidth() ? a.margins.left : 0;
            }var l = a.height - (a.paddingTop + a.paddingBottom);return a.top + t * (l / (a.ticks.length - 1));
          }, getPixelForDecimal: function getPixelForDecimal(t) {
            var e = this;if (e.isHorizontal()) {
              var a = e.width - (e.paddingLeft + e.paddingRight),
                  i = a * t + e.paddingLeft,
                  n = e.left + Math.round(i);return n += e.isFullWidth() ? e.margins.left : 0;
            }return e.top + t * e.height;
          }, getBasePixel: function getBasePixel() {
            var t = this,
                e = t.min,
                a = t.max;return t.getPixelForValue(t.beginAtZero ? 0 : 0 > e && 0 > a ? a : e > 0 && a > 0 ? e : 0);
          }, draw: function draw(a) {
            var i = this,
                n = i.options;if (n.display) {
              var o,
                  r,
                  l = i.ctx,
                  s = t.defaults.global,
                  d = n.ticks,
                  u = n.gridLines,
                  c = n.scaleLabel,
                  h = 0 !== i.labelRotation,
                  f = d.autoSkip,
                  g = i.isHorizontal();d.maxTicksLimit && (r = d.maxTicksLimit);var p = e.getValueOrDefault(d.fontColor, s.defaultFontColor),
                  m = e.getValueOrDefault(d.fontSize, s.defaultFontSize),
                  b = e.getValueOrDefault(d.fontStyle, s.defaultFontStyle),
                  v = e.getValueOrDefault(d.fontFamily, s.defaultFontFamily),
                  x = e.fontString(m, b, v),
                  y = u.tickMarkLength,
                  k = e.getValueOrDefault(u.borderDash, s.borderDash),
                  S = e.getValueOrDefault(u.borderDashOffset, s.borderDashOffset),
                  w = e.getValueOrDefault(c.fontColor, s.defaultFontColor),
                  M = e.getValueOrDefault(c.fontSize, s.defaultFontSize),
                  C = e.getValueOrDefault(c.fontStyle, s.defaultFontStyle),
                  D = e.getValueOrDefault(c.fontFamily, s.defaultFontFamily),
                  I = e.fontString(M, C, D),
                  A = e.toRadians(i.labelRotation),
                  T = Math.cos(A),
                  P = i.longestLabelWidth * T;l.fillStyle = p;var F = [];if (g) {
                if (o = !1, h && (P /= 2), (P + d.autoSkipPadding) * i.ticks.length > i.width - (i.paddingLeft + i.paddingRight) && (o = 1 + Math.floor((P + d.autoSkipPadding) * i.ticks.length / (i.width - (i.paddingLeft + i.paddingRight)))), r && i.ticks.length > r) for (; !o || i.ticks.length / (o || 1) > r;) {
                  o || (o = 1), o += 1;
                }f || (o = !1);
              }var _ = "right" === n.position ? i.left : i.right - y,
                  R = "right" === n.position ? i.left + y : i.right,
                  V = "bottom" === n.position ? i.top : i.bottom - y,
                  L = "bottom" === n.position ? i.top + y : i.bottom;if (e.each(i.ticks, function (t, r) {
                if (void 0 !== t && null !== t) {
                  var l = i.ticks.length === r + 1,
                      s = o > 1 && r % o > 0 || r % o === 0 && r + o >= i.ticks.length;if ((!s || l) && void 0 !== t && null !== t) {
                    var c, f;r === ("undefined" != typeof i.zeroLineIndex ? i.zeroLineIndex : 0) ? (c = u.zeroLineWidth, f = u.zeroLineColor) : (c = e.getValueAtIndexOrDefault(u.lineWidth, r), f = e.getValueAtIndexOrDefault(u.color, r));var p,
                        m,
                        b,
                        v,
                        x,
                        w,
                        M,
                        C,
                        D,
                        I,
                        T = "middle",
                        P = "middle";if (g) {
                      h || (P = "top" === n.position ? "bottom" : "top"), T = h ? "right" : "center";var O = i.getPixelForTick(r) + e.aliasPixel(c);D = i.getPixelForTick(r, u.offsetGridLines) + d.labelOffset, I = h ? i.top + 12 : "top" === n.position ? i.bottom - y : i.top + y, p = b = x = M = O, m = V, v = L, w = a.top, C = a.bottom;
                    } else {
                      "left" === n.position ? d.mirror ? (D = i.right + d.padding, T = "left") : (D = i.right - d.padding, T = "right") : d.mirror ? (D = i.left - d.padding, T = "right") : (D = i.left + d.padding, T = "left");var B = i.getPixelForTick(r);B += e.aliasPixel(c), I = i.getPixelForTick(r, u.offsetGridLines), p = _, b = R, x = a.left, M = a.right, m = v = w = C = B;
                    }F.push({ tx1: p, ty1: m, tx2: b, ty2: v, x1: x, y1: w, x2: M, y2: C, labelX: D, labelY: I, glWidth: c, glColor: f, glBorderDash: k, glBorderDashOffset: S, rotation: -1 * A, label: t, textBaseline: P, textAlign: T });
                  }
                }
              }), e.each(F, function (t) {
                if (u.display && (l.save(), l.lineWidth = t.glWidth, l.strokeStyle = t.glColor, l.setLineDash && (l.setLineDash(t.glBorderDash), l.lineDashOffset = t.glBorderDashOffset), l.beginPath(), u.drawTicks && (l.moveTo(t.tx1, t.ty1), l.lineTo(t.tx2, t.ty2)), u.drawOnChartArea && (l.moveTo(t.x1, t.y1), l.lineTo(t.x2, t.y2)), l.stroke(), l.restore()), d.display) {
                  l.save(), l.translate(t.labelX, t.labelY), l.rotate(t.rotation), l.font = x, l.textBaseline = t.textBaseline, l.textAlign = t.textAlign;var a = t.label;if (e.isArray(a)) for (var i = 0, n = -(a.length - 1) * m * .75; i < a.length; ++i) {
                    l.fillText("" + a[i], 0, n), n += 1.5 * m;
                  } else l.fillText(a, 0, 0);l.restore();
                }
              }), c.display) {
                var O,
                    B,
                    W = 0;if (g) O = i.left + (i.right - i.left) / 2, B = "bottom" === n.position ? i.bottom - M / 2 : i.top + M / 2;else {
                  var z = "left" === n.position;O = z ? i.left + M / 2 : i.right - M / 2, B = i.top + (i.bottom - i.top) / 2, W = z ? -.5 * Math.PI : .5 * Math.PI;
                }l.save(), l.translate(O, B), l.rotate(W), l.textAlign = "center", l.textBaseline = "middle", l.fillStyle = w, l.font = I, l.fillText(c.labelString, 0, 0), l.restore();
              }if (u.drawBorder) {
                l.lineWidth = e.getValueAtIndexOrDefault(u.lineWidth, 0), l.strokeStyle = e.getValueAtIndexOrDefault(u.color, 0);var N = i.left,
                    E = i.right,
                    H = i.top,
                    U = i.bottom,
                    j = e.aliasPixel(l.lineWidth);g ? (H = U = "top" === n.position ? i.bottom : i.top, H += j, U += j) : (N = E = "left" === n.position ? i.right : i.left, N += j, E += j), l.beginPath(), l.moveTo(N, H), l.lineTo(E, U), l.stroke();
              }
            }
          } });
      };
    }, {}], 33: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers;t.scaleService = { constructors: {}, defaults: {}, registerScaleType: function registerScaleType(t, a, i) {
            this.constructors[t] = a, this.defaults[t] = e.clone(i);
          }, getScaleConstructor: function getScaleConstructor(t) {
            return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0;
          }, getScaleDefaults: function getScaleDefaults(a) {
            return this.defaults.hasOwnProperty(a) ? e.scaleMerge(t.defaults.scale, this.defaults[a]) : {};
          }, updateScaleDefaults: function updateScaleDefaults(t, a) {
            var i = this.defaults;i.hasOwnProperty(t) && (i[t] = e.extend(i[t], a));
          }, addScalesToLayout: function addScalesToLayout(a) {
            e.each(a.scales, function (e) {
              t.layoutService.addBox(a, e);
            });
          } };
      };
    }, {}], 34: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers;t.Ticks = { generators: { linear: function linear(t, a) {
              var i,
                  n = [];if (t.stepSize && t.stepSize > 0) i = t.stepSize;else {
                var o = e.niceNum(a.max - a.min, !1);i = e.niceNum(o / (t.maxTicks - 1), !0);
              }var r = Math.floor(a.min / i) * i,
                  l = Math.ceil(a.max / i) * i;if (t.min && t.max && t.stepSize) {
                var s = (t.max - t.min) % t.stepSize === 0;s && (r = t.min, l = t.max);
              }var d = (l - r) / i;d = e.almostEquals(d, Math.round(d), i / 1e3) ? Math.round(d) : Math.ceil(d), n.push(void 0 !== t.min ? t.min : r);for (var u = 1; d > u; ++u) {
                n.push(r + u * i);
              }return n.push(void 0 !== t.max ? t.max : l), n;
            }, logarithmic: function logarithmic(t, a) {
              for (var i = [], n = e.getValueOrDefault, o = n(t.min, Math.pow(10, Math.floor(e.log10(a.min)))); o < a.max;) {
                i.push(o);var r, l;0 === o ? (r = Math.floor(e.log10(a.minNotZero)), l = Math.round(a.minNotZero / Math.pow(10, r))) : (r = Math.floor(e.log10(o)), l = Math.floor(o / Math.pow(10, r)) + 1), 10 === l && (l = 1, ++r), o = l * Math.pow(10, r);
              }var s = n(t.max, o);return i.push(s), i;
            } }, formatters: { values: function values(t) {
              return e.isArray(t) ? t : "" + t;
            }, linear: function linear(t, a, i) {
              var n = i.length > 3 ? i[2] - i[1] : i[1] - i[0];Math.abs(n) > 1 && t !== Math.floor(t) && (n = t - Math.floor(t));var o = e.log10(Math.abs(n)),
                  r = "";if (0 !== t) {
                var l = -1 * Math.floor(o);l = Math.max(Math.min(l, 20), 0), r = t.toFixed(l);
              } else r = "0";return r;
            }, logarithmic: function logarithmic(t, a, i) {
              var n = t / Math.pow(10, Math.floor(e.log10(t)));return 0 === t ? "0" : 1 === n || 2 === n || 5 === n || 0 === a || a === i.length - 1 ? t.toExponential() : "";
            } } };
      };
    }, {}], 35: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers;t.defaults.global.title = { display: !1, position: "top", fullWidth: !0, fontStyle: "bold", padding: 10, text: "" };var a = e.noop;t.Title = t.Element.extend({ initialize: function initialize(a) {
            var i = this;e.extend(i, a), i.options = e.configMerge(t.defaults.global.title, a.options), i.legendHitBoxes = [];
          }, beforeUpdate: function beforeUpdate() {
            var a = this.chart.options;a && a.title && (this.options = e.configMerge(t.defaults.global.title, a.title));
          }, update: function update(t, e, a) {
            var i = this;return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = a, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
          }, afterUpdate: a, beforeSetDimensions: a, setDimensions: function setDimensions() {
            var t = this;t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = { width: 0, height: 0 };
          }, afterSetDimensions: a, beforeBuildLabels: a, buildLabels: a, afterBuildLabels: a, beforeFit: a, fit: function fit() {
            var a = this,
                i = e.getValueOrDefault,
                n = a.options,
                o = t.defaults.global,
                r = n.display,
                l = i(n.fontSize, o.defaultFontSize),
                s = a.minSize;a.isHorizontal() ? (s.width = a.maxWidth, s.height = r ? l + 2 * n.padding : 0) : (s.width = r ? l + 2 * n.padding : 0, s.height = a.maxHeight), a.width = s.width, a.height = s.height;
          }, afterFit: a, isHorizontal: function isHorizontal() {
            var t = this.options.position;return "top" === t || "bottom" === t;
          }, draw: function draw() {
            var a = this,
                i = a.ctx,
                n = e.getValueOrDefault,
                o = a.options,
                r = t.defaults.global;if (o.display) {
              var l,
                  s,
                  d,
                  u = n(o.fontSize, r.defaultFontSize),
                  c = n(o.fontStyle, r.defaultFontStyle),
                  h = n(o.fontFamily, r.defaultFontFamily),
                  f = e.fontString(u, c, h),
                  g = 0,
                  p = a.top,
                  m = a.left,
                  b = a.bottom,
                  v = a.right;i.fillStyle = n(o.fontColor, r.defaultFontColor), i.font = f, a.isHorizontal() ? (l = m + (v - m) / 2, s = p + (b - p) / 2, d = v - m) : (l = "left" === o.position ? m + u / 2 : v - u / 2, s = p + (b - p) / 2, d = b - p, g = Math.PI * ("left" === o.position ? -.5 : .5)), i.save(), i.translate(l, s), i.rotate(g), i.textAlign = "center", i.textBaseline = "middle", i.fillText(o.text, 0, 0, d), i.restore();
            }
          } }), t.plugins.register({ beforeInit: function beforeInit(e) {
            var a = e.options,
                i = a.title;i && (e.titleBlock = new t.Title({ ctx: e.chart.ctx, options: i, chart: e }), t.layoutService.addBox(e, e.titleBlock));
          } });
      };
    }, {}], 36: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        function e(t, e) {
          var a = s.color(t);return a.alpha(e * a.alpha()).rgbaString();
        }function a(t, e) {
          return e && (s.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
        }function i(t) {
          var e = t._xScale,
              a = t._yScale || t._scale,
              i = t._index,
              n = t._datasetIndex;return { xLabel: e ? e.getLabelForIndex(i, n) : "", yLabel: a ? a.getLabelForIndex(i, n) : "", index: i, datasetIndex: n, x: t._model.x, y: t._model.y };
        }function n(e) {
          var a = t.defaults.global,
              i = s.getValueOrDefault;return { xPadding: e.xPadding, yPadding: e.yPadding, xAlign: e.xAlign, yAlign: e.yAlign, bodyFontColor: e.bodyFontColor, _bodyFontFamily: i(e.bodyFontFamily, a.defaultFontFamily), _bodyFontStyle: i(e.bodyFontStyle, a.defaultFontStyle), _bodyAlign: e.bodyAlign, bodyFontSize: i(e.bodyFontSize, a.defaultFontSize), bodySpacing: e.bodySpacing, titleFontColor: e.titleFontColor, _titleFontFamily: i(e.titleFontFamily, a.defaultFontFamily), _titleFontStyle: i(e.titleFontStyle, a.defaultFontStyle), titleFontSize: i(e.titleFontSize, a.defaultFontSize), _titleAlign: e.titleAlign, titleSpacing: e.titleSpacing, titleMarginBottom: e.titleMarginBottom, footerFontColor: e.footerFontColor, _footerFontFamily: i(e.footerFontFamily, a.defaultFontFamily), _footerFontStyle: i(e.footerFontStyle, a.defaultFontStyle), footerFontSize: i(e.footerFontSize, a.defaultFontSize), _footerAlign: e.footerAlign, footerSpacing: e.footerSpacing, footerMarginTop: e.footerMarginTop, caretSize: e.caretSize, cornerRadius: e.cornerRadius, backgroundColor: e.backgroundColor, opacity: 0, legendColorBackground: e.multiKeyBackground, displayColors: e.displayColors };
        }function o(t, e) {
          var a = t._chart.ctx,
              i = 2 * e.yPadding,
              n = 0,
              o = e.body,
              r = o.reduce(function (t, e) {
            return t + e.before.length + e.lines.length + e.after.length;
          }, 0);r += e.beforeBody.length + e.afterBody.length;var l = e.title.length,
              d = e.footer.length,
              u = e.titleFontSize,
              c = e.bodyFontSize,
              h = e.footerFontSize;i += l * u, i += l ? (l - 1) * e.titleSpacing : 0, i += l ? e.titleMarginBottom : 0, i += r * c, i += r ? (r - 1) * e.bodySpacing : 0, i += d ? e.footerMarginTop : 0, i += d * h, i += d ? (d - 1) * e.footerSpacing : 0;var f = 0,
              g = function g(t) {
            n = Math.max(n, a.measureText(t).width + f);
          };return a.font = s.fontString(u, e._titleFontStyle, e._titleFontFamily), s.each(e.title, g), a.font = s.fontString(c, e._bodyFontStyle, e._bodyFontFamily), s.each(e.beforeBody.concat(e.afterBody), g), f = e.displayColors ? c + 2 : 0, s.each(o, function (t) {
            s.each(t.before, g), s.each(t.lines, g), s.each(t.after, g);
          }), f = 0, a.font = s.fontString(h, e._footerFontStyle, e._footerFontFamily), s.each(e.footer, g), n += 2 * e.xPadding, { width: n, height: i };
        }function r(t, e) {
          var a = t._model,
              i = t._chart,
              n = t._chartInstance.chartArea,
              o = "center",
              r = "center";a.y < e.height ? r = "top" : a.y > i.height - e.height && (r = "bottom");var l,
              s,
              d,
              u,
              c,
              h = (n.left + n.right) / 2,
              f = (n.top + n.bottom) / 2;"center" === r ? (l = function l(t) {
            return h >= t;
          }, s = function s(t) {
            return t > h;
          }) : (l = function l(t) {
            return t <= e.width / 2;
          }, s = function s(t) {
            return t >= i.width - e.width / 2;
          }), d = function d(t) {
            return t + e.width > i.width;
          }, u = function u(t) {
            return t - e.width < 0;
          }, c = function c(t) {
            return f >= t ? "top" : "bottom";
          }, l(a.x) ? (o = "left", d(a.x) && (o = "center", r = c(a.y))) : s(a.x) && (o = "right", u(a.x) && (o = "center", r = c(a.y)));var g = t._options;return { xAlign: g.xAlign ? g.xAlign : o, yAlign: g.yAlign ? g.yAlign : r };
        }function l(t, e, a) {
          var i = t.x,
              n = t.y,
              o = t.caretSize,
              r = t.caretPadding,
              l = t.cornerRadius,
              s = a.xAlign,
              d = a.yAlign,
              u = o + r,
              c = l + r;return "right" === s ? i -= e.width : "center" === s && (i -= e.width / 2), "top" === d ? n += u : n -= "bottom" === d ? e.height + u : e.height / 2, "center" === d ? "left" === s ? i += u : "right" === s && (i -= u) : "left" === s ? i -= c : "right" === s && (i += c), { x: i, y: n };
        }var s = t.helpers;t.defaults.global.tooltips = { enabled: !0, custom: null, mode: "nearest", position: "average", intersect: !0, backgroundColor: "rgba(0,0,0,0.8)", titleFontStyle: "bold", titleSpacing: 2, titleMarginBottom: 6, titleFontColor: "#fff", titleAlign: "left", bodySpacing: 2, bodyFontColor: "#fff", bodyAlign: "left", footerFontStyle: "bold", footerSpacing: 2, footerMarginTop: 6, footerFontColor: "#fff", footerAlign: "left", yPadding: 6, xPadding: 6, caretSize: 5, cornerRadius: 6, multiKeyBackground: "#fff", displayColors: !0, callbacks: { beforeTitle: s.noop, title: function title(t, e) {
              var a = "",
                  i = e.labels,
                  n = i ? i.length : 0;if (t.length > 0) {
                var o = t[0];o.xLabel ? a = o.xLabel : n > 0 && o.index < n && (a = i[o.index]);
              }return a;
            }, afterTitle: s.noop, beforeBody: s.noop, beforeLabel: s.noop, label: function label(t, e) {
              var a = e.datasets[t.datasetIndex].label || "";return a + ": " + t.yLabel;
            }, labelColor: function labelColor(t, e) {
              var a = e.getDatasetMeta(t.datasetIndex),
                  i = a.data[t.index],
                  n = i._view;return { borderColor: n.borderColor, backgroundColor: n.backgroundColor };
            }, afterLabel: s.noop, afterBody: s.noop, beforeFooter: s.noop, footer: s.noop, afterFooter: s.noop } }, t.Tooltip = t.Element.extend({ initialize: function initialize() {
            this._model = n(this._options);
          }, getTitle: function getTitle() {
            var t = this,
                e = t._options,
                i = e.callbacks,
                n = i.beforeTitle.apply(t, arguments),
                o = i.title.apply(t, arguments),
                r = i.afterTitle.apply(t, arguments),
                l = [];return l = a(l, n), l = a(l, o), l = a(l, r);
          }, getBeforeBody: function getBeforeBody() {
            var t = this._options.callbacks.beforeBody.apply(this, arguments);return s.isArray(t) ? t : void 0 !== t ? [t] : [];
          }, getBody: function getBody(t, e) {
            var i = this,
                n = i._options.callbacks,
                o = [];return s.each(t, function (t) {
              var r = { before: [], lines: [], after: [] };a(r.before, n.beforeLabel.call(i, t, e)), a(r.lines, n.label.call(i, t, e)), a(r.after, n.afterLabel.call(i, t, e)), o.push(r);
            }), o;
          }, getAfterBody: function getAfterBody() {
            var t = this._options.callbacks.afterBody.apply(this, arguments);return s.isArray(t) ? t : void 0 !== t ? [t] : [];
          }, getFooter: function getFooter() {
            var t = this,
                e = t._options.callbacks,
                i = e.beforeFooter.apply(t, arguments),
                n = e.footer.apply(t, arguments),
                o = e.afterFooter.apply(t, arguments),
                r = [];return r = a(r, i), r = a(r, n), r = a(r, o);
          }, update: function update(e) {
            var a,
                d,
                u = this,
                c = u._options,
                h = u._model,
                f = u._model = n(c),
                g = u._active,
                p = u._data,
                m = u._chartInstance,
                b = { xAlign: h.xAlign, yAlign: h.yAlign },
                v = { x: h.x, y: h.y },
                x = { width: h.width, height: h.height },
                y = { x: h.caretX, y: h.caretY };if (g.length) {
              f.opacity = 1;var k = [];y = t.Tooltip.positioners[c.position](g, u._eventPosition);var S = [];for (a = 0, d = g.length; d > a; ++a) {
                S.push(i(g[a]));
              }c.filter && (S = S.filter(function (t) {
                return c.filter(t, p);
              })), c.itemSort && (S = S.sort(function (t, e) {
                return c.itemSort(t, e, p);
              })), s.each(S, function (t) {
                k.push(c.callbacks.labelColor.call(u, t, m));
              }), f.title = u.getTitle(S, p), f.beforeBody = u.getBeforeBody(S, p), f.body = u.getBody(S, p), f.afterBody = u.getAfterBody(S, p), f.footer = u.getFooter(S, p), f.x = Math.round(y.x), f.y = Math.round(y.y), f.caretPadding = s.getValueOrDefault(y.padding, 2), f.labelColors = k, f.dataPoints = S, x = o(this, f), b = r(this, x), v = l(f, x, b);
            } else f.opacity = 0;return f.xAlign = b.xAlign, f.yAlign = b.yAlign, f.x = v.x, f.y = v.y, f.width = x.width, f.height = x.height, f.caretX = y.x, f.caretY = y.y, u._model = f, e && c.custom && c.custom.call(u, f), u;
          }, drawCaret: function drawCaret(t, a, i) {
            var n,
                o,
                r,
                l,
                s,
                d,
                u = this._view,
                c = this._chart.ctx,
                h = u.caretSize,
                f = u.cornerRadius,
                g = u.xAlign,
                p = u.yAlign,
                m = t.x,
                b = t.y,
                v = a.width,
                x = a.height;"center" === p ? ("left" === g ? (n = m, o = n - h, r = n) : (n = m + v, o = n + h, r = n), s = b + x / 2, l = s - h, d = s + h) : ("left" === g ? (n = m + f, o = n + h, r = o + h) : "right" === g ? (n = m + v - f, o = n - h, r = o - h) : (o = m + v / 2, n = o - h, r = o + h), "top" === p ? (l = b, s = l - h, d = l) : (l = b + x, s = l + h, d = l)), c.fillStyle = e(u.backgroundColor, i), c.beginPath(), c.moveTo(n, l), c.lineTo(o, s), c.lineTo(r, d), c.closePath(), c.fill();
          }, drawTitle: function drawTitle(t, a, i, n) {
            var o = a.title;if (o.length) {
              i.textAlign = a._titleAlign, i.textBaseline = "top";var r = a.titleFontSize,
                  l = a.titleSpacing;i.fillStyle = e(a.titleFontColor, n), i.font = s.fontString(r, a._titleFontStyle, a._titleFontFamily);var d, u;for (d = 0, u = o.length; u > d; ++d) {
                i.fillText(o[d], t.x, t.y), t.y += r + l, d + 1 === o.length && (t.y += a.titleMarginBottom - l);
              }
            }
          }, drawBody: function drawBody(t, a, i, n) {
            var o = a.bodyFontSize,
                r = a.bodySpacing,
                l = a.body;i.textAlign = a._bodyAlign, i.textBaseline = "top";var d = e(a.bodyFontColor, n);i.fillStyle = d, i.font = s.fontString(o, a._bodyFontStyle, a._bodyFontFamily);var u = 0,
                c = function c(e) {
              i.fillText(e, t.x + u, t.y), t.y += o + r;
            };s.each(a.beforeBody, c);var h = a.displayColors;u = h ? o + 2 : 0, s.each(l, function (r, l) {
              s.each(r.before, c), s.each(r.lines, function (r) {
                h && (i.fillStyle = e(a.legendColorBackground, n), i.fillRect(t.x, t.y, o, o), i.strokeStyle = e(a.labelColors[l].borderColor, n), i.strokeRect(t.x, t.y, o, o), i.fillStyle = e(a.labelColors[l].backgroundColor, n), i.fillRect(t.x + 1, t.y + 1, o - 2, o - 2), i.fillStyle = d), c(r);
              }), s.each(r.after, c);
            }), u = 0, s.each(a.afterBody, c), t.y -= r;
          }, drawFooter: function drawFooter(t, a, i, n) {
            var o = a.footer;o.length && (t.y += a.footerMarginTop, i.textAlign = a._footerAlign, i.textBaseline = "top", i.fillStyle = e(a.footerFontColor, n), i.font = s.fontString(a.footerFontSize, a._footerFontStyle, a._footerFontFamily), s.each(o, function (e) {
              i.fillText(e, t.x, t.y), t.y += a.footerFontSize + a.footerSpacing;
            }));
          }, drawBackground: function drawBackground(t, a, i, n, o) {
            i.fillStyle = e(a.backgroundColor, o), s.drawRoundedRectangle(i, t.x, t.y, n.width, n.height, a.cornerRadius), i.fill();
          }, draw: function draw() {
            var t = this._chart.ctx,
                e = this._view;if (0 !== e.opacity) {
              var a = { width: e.width, height: e.height },
                  i = { x: e.x, y: e.y },
                  n = Math.abs(e.opacity < .001) ? 0 : e.opacity;this._options.enabled && (this.drawBackground(i, e, t, a, n), this.drawCaret(i, a, n), i.x += e.xPadding, i.y += e.yPadding, this.drawTitle(i, e, t, n), this.drawBody(i, e, t, n), this.drawFooter(i, e, t, n));
            }
          }, handleEvent: function handleEvent(t) {
            var e = this,
                a = e._options,
                i = !1;if (e._lastActive = e._lastActive || [], "mouseout" === t.type ? e._active = [] : e._active = e._chartInstance.getElementsAtEventForMode(t, a.mode, a), i = !s.arrayEquals(e._active, e._lastActive), e._lastActive = e._active, a.enabled || a.custom) {
              e._eventPosition = s.getRelativePosition(t, e._chart);var n = e._model;e.update(!0), e.pivot(), i |= n.x !== e._model.x || n.y !== e._model.y;
            }return i;
          } }), t.Tooltip.positioners = { average: function average(t) {
            if (!t.length) return !1;var e,
                a,
                i = 0,
                n = 0,
                o = 0;for (e = 0, a = t.length; a > e; ++e) {
              var r = t[e];if (r && r.hasValue()) {
                var l = r.tooltipPosition();i += l.x, n += l.y, ++o;
              }
            }return { x: Math.round(i / o), y: Math.round(n / o) };
          }, nearest: function nearest(t, e) {
            var a,
                i,
                n,
                o = e.x,
                r = e.y,
                l = Number.POSITIVE_INFINITY;for (i = 0, n = t.length; n > i; ++i) {
              var d = t[i];if (d && d.hasValue()) {
                var u = d.getCenterPoint(),
                    c = s.distanceBetweenPoints(e, u);l > c && (l = c, a = d);
              }
            }if (a) {
              var h = a.tooltipPosition();o = h.x, r = h.y;
            }return { x: o, y: r };
          } };
      };
    }, {}], 37: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers,
            a = t.defaults.global;a.elements.arc = { backgroundColor: a.defaultColor, borderColor: "#fff", borderWidth: 2 }, t.elements.Arc = t.Element.extend({ inLabelRange: function inLabelRange(t) {
            var e = this._view;return e ? Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2) : !1;
          }, inRange: function inRange(t, a) {
            var i = this._view;if (i) {
              for (var n = e.getAngleFromPoint(i, { x: t, y: a }), o = n.angle, r = n.distance, l = i.startAngle, s = i.endAngle; l > s;) {
                s += 2 * Math.PI;
              }for (; o > s;) {
                o -= 2 * Math.PI;
              }for (; l > o;) {
                o += 2 * Math.PI;
              }var d = o >= l && s >= o,
                  u = r >= i.innerRadius && r <= i.outerRadius;return d && u;
            }return !1;
          }, getCenterPoint: function getCenterPoint() {
            var t = this._view,
                e = (t.startAngle + t.endAngle) / 2,
                a = (t.innerRadius + t.outerRadius) / 2;return { x: t.x + Math.cos(e) * a, y: t.y + Math.sin(e) * a };
          }, getArea: function getArea() {
            var t = this._view;return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2));
          }, tooltipPosition: function tooltipPosition() {
            var t = this._view,
                e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                a = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;return { x: t.x + Math.cos(e) * a, y: t.y + Math.sin(e) * a };
          }, draw: function draw() {
            var t = this._chart.ctx,
                e = this._view,
                a = e.startAngle,
                i = e.endAngle;t.beginPath(), t.arc(e.x, e.y, e.outerRadius, a, i), t.arc(e.x, e.y, e.innerRadius, i, a, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke();
          } });
      };
    }, {}], 38: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers,
            a = t.defaults.global;t.defaults.global.elements.line = { tension: .4, backgroundColor: a.defaultColor, borderWidth: 3, borderColor: a.defaultColor, borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", capBezierPoints: !0, fill: !0 }, t.elements.Line = t.Element.extend({ draw: function draw() {
            function t(t, e) {
              var a = e._view;e._view.steppedLine === !0 ? (s.lineTo(a.x, t._view.y), s.lineTo(a.x, a.y)) : 0 === e._view.tension ? s.lineTo(a.x, a.y) : s.bezierCurveTo(t._view.controlPointNextX, t._view.controlPointNextY, a.controlPointPreviousX, a.controlPointPreviousY, a.x, a.y);
            }var i = this,
                n = i._view,
                o = n.spanGaps,
                r = n.scaleZero,
                l = i._loop;l || ("top" === n.fill ? r = n.scaleTop : "bottom" === n.fill && (r = n.scaleBottom));var s = i._chart.ctx;s.save();var d = i._children.slice(),
                u = -1;l && d.length && d.push(d[0]);var c, h, f, g;if (d.length && n.fill) {
              for (s.beginPath(), c = 0; c < d.length; ++c) {
                h = d[c], f = e.previousItem(d, c), g = h._view, 0 === c ? (l ? s.moveTo(r.x, r.y) : s.moveTo(g.x, r), g.skip || (u = c, s.lineTo(g.x, g.y))) : (f = -1 === u ? f : d[u], g.skip ? o || u !== c - 1 || (l ? s.lineTo(r.x, r.y) : s.lineTo(f._view.x, r)) : (u !== c - 1 ? o && -1 !== u ? t(f, h) : l ? s.lineTo(g.x, g.y) : (s.lineTo(g.x, r), s.lineTo(g.x, g.y)) : t(f, h), u = c));
              }l || -1 === u || s.lineTo(d[u]._view.x, r), s.fillStyle = n.backgroundColor || a.defaultColor, s.closePath(), s.fill();
            }var p = a.elements.line;for (s.lineCap = n.borderCapStyle || p.borderCapStyle, s.setLineDash && s.setLineDash(n.borderDash || p.borderDash), s.lineDashOffset = n.borderDashOffset || p.borderDashOffset, s.lineJoin = n.borderJoinStyle || p.borderJoinStyle, s.lineWidth = n.borderWidth || p.borderWidth, s.strokeStyle = n.borderColor || a.defaultColor, s.beginPath(), u = -1, c = 0; c < d.length; ++c) {
              h = d[c], f = e.previousItem(d, c), g = h._view, 0 === c ? g.skip || (s.moveTo(g.x, g.y), u = c) : (f = -1 === u ? f : d[u], g.skip || (u !== c - 1 && !o || -1 === u ? s.moveTo(g.x, g.y) : t(f, h), u = c));
            }s.stroke(), s.restore();
          } });
      };
    }, {}], 39: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        function e(t) {
          var e = this._view;return e ? Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2) : !1;
        }function a(t) {
          var e = this._view;return e ? Math.pow(t - e.y, 2) < Math.pow(e.radius + e.hitRadius, 2) : !1;
        }var i = t.helpers,
            n = t.defaults.global,
            o = n.defaultColor;n.elements.point = { radius: 3, pointStyle: "circle", backgroundColor: o, borderWidth: 1, borderColor: o, hitRadius: 1, hoverRadius: 4, hoverBorderWidth: 1 }, t.elements.Point = t.Element.extend({ inRange: function inRange(t, e) {
            var a = this._view;return a ? Math.pow(t - a.x, 2) + Math.pow(e - a.y, 2) < Math.pow(a.hitRadius + a.radius, 2) : !1;
          }, inLabelRange: e, inXRange: e, inYRange: a, getCenterPoint: function getCenterPoint() {
            var t = this._view;return { x: t.x, y: t.y };
          }, getArea: function getArea() {
            return Math.PI * Math.pow(this._view.radius, 2);
          }, tooltipPosition: function tooltipPosition() {
            var t = this._view;return { x: t.x, y: t.y, padding: t.radius + t.borderWidth };
          }, draw: function draw() {
            var e = this._view,
                a = this._chart.ctx,
                r = e.pointStyle,
                l = e.radius,
                s = e.x,
                d = e.y;e.skip || (a.strokeStyle = e.borderColor || o, a.lineWidth = i.getValueOrDefault(e.borderWidth, n.elements.point.borderWidth), a.fillStyle = e.backgroundColor || o, t.canvasHelpers.drawPoint(a, r, l, s, d));
          } });
      };
    }, {}], 40: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        function e(t) {
          return void 0 !== t._view.width;
        }function a(t) {
          var a,
              i,
              n,
              o,
              r = t._view;if (e(t)) {
            var l = r.width / 2;a = r.x - l, i = r.x + l, n = Math.min(r.y, r.base), o = Math.max(r.y, r.base);
          } else {
            var s = r.height / 2;a = Math.min(r.x, r.base), i = Math.max(r.x, r.base), n = r.y - s, o = r.y + s;
          }return { left: a, top: n, right: i, bottom: o };
        }var i = t.defaults.global;i.elements.rectangle = { backgroundColor: i.defaultColor, borderWidth: 0, borderColor: i.defaultColor, borderSkipped: "bottom" }, t.elements.Rectangle = t.Element.extend({ draw: function draw() {
            function t(t) {
              return s[(u + t) % 4];
            }var e = this._chart.ctx,
                a = this._view,
                i = a.width / 2,
                n = a.x - i,
                o = a.x + i,
                r = a.base - (a.base - a.y),
                l = a.borderWidth / 2;a.borderWidth && (n += l, o -= l, r += l), e.beginPath(), e.fillStyle = a.backgroundColor, e.strokeStyle = a.borderColor, e.lineWidth = a.borderWidth;var s = [[n, a.base], [n, r], [o, r], [o, a.base]],
                d = ["bottom", "left", "top", "right"],
                u = d.indexOf(a.borderSkipped, 0);-1 === u && (u = 0);var c = t(0);e.moveTo(c[0], c[1]);for (var h = 1; 4 > h; h++) {
              c = t(h), e.lineTo(c[0], c[1]);
            }e.fill(), a.borderWidth && e.stroke();
          }, height: function height() {
            var t = this._view;return t.base - t.y;
          }, inRange: function inRange(t, e) {
            var i = !1;if (this._view) {
              var n = a(this);i = t >= n.left && t <= n.right && e >= n.top && e <= n.bottom;
            }return i;
          }, inLabelRange: function inLabelRange(t, i) {
            var n = this;if (!n._view) return !1;var o = !1,
                r = a(n);return o = e(n) ? t >= r.left && t <= r.right : i >= r.top && i <= r.bottom;
          }, inXRange: function inXRange(t) {
            var e = a(this);return t >= e.left && t <= e.right;
          }, inYRange: function inYRange(t) {
            var e = a(this);return t >= e.top && t <= e.bottom;
          }, getCenterPoint: function getCenterPoint() {
            var t,
                a,
                i = this._view;return e(this) ? (t = i.x, a = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, a = i.y), { x: t, y: a };
          }, getArea: function getArea() {
            var t = this._view;return t.width * Math.abs(t.y - t.base);
          }, tooltipPosition: function tooltipPosition() {
            var t = this._view;return { x: t.x, y: t.y };
          } });
      };
    }, {}], 41: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers,
            a = { position: "bottom" },
            i = t.Scale.extend({ getLabels: function getLabels() {
            var t = this.chart.data;return (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels;
          }, determineDataLimits: function determineDataLimits() {
            var t = this,
                a = t.getLabels();t.minIndex = 0, t.maxIndex = a.length - 1;var i;void 0 !== t.options.ticks.min && (i = e.indexOf(a, t.options.ticks.min), t.minIndex = -1 !== i ? i : t.minIndex), void 0 !== t.options.ticks.max && (i = e.indexOf(a, t.options.ticks.max), t.maxIndex = -1 !== i ? i : t.maxIndex), t.min = a[t.minIndex], t.max = a[t.maxIndex];
          }, buildTicks: function buildTicks() {
            var t = this,
                e = t.getLabels();t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1);
          }, getLabelForIndex: function getLabelForIndex(t, e) {
            var a = this,
                i = a.chart.data,
                n = a.isHorizontal();return i.xLabels && n || i.yLabels && !n ? a.getRightValue(i.datasets[e].data[t]) : a.ticks[t];
          }, getPixelForValue: function getPixelForValue(t, e, a, i) {
            var n = this,
                o = Math.max(n.maxIndex + 1 - n.minIndex - (n.options.gridLines.offsetGridLines ? 0 : 1), 1);if (void 0 !== t && isNaN(e)) {
              var r = n.getLabels(),
                  l = r.indexOf(t);e = -1 !== l ? l : e;
            }if (n.isHorizontal()) {
              var s = n.width - (n.paddingLeft + n.paddingRight),
                  d = s / o,
                  u = d * (e - n.minIndex) + n.paddingLeft;return (n.options.gridLines.offsetGridLines && i || n.maxIndex === n.minIndex && i) && (u += d / 2), n.left + Math.round(u);
            }var c = n.height - (n.paddingTop + n.paddingBottom),
                h = c / o,
                f = h * (e - n.minIndex) + n.paddingTop;return n.options.gridLines.offsetGridLines && i && (f += h / 2), n.top + Math.round(f);
          }, getPixelForTick: function getPixelForTick(t, e) {
            return this.getPixelForValue(this.ticks[t], t + this.minIndex, null, e);
          }, getValueForPixel: function getValueForPixel(t) {
            var e,
                a = this,
                i = Math.max(a.ticks.length - (a.options.gridLines.offsetGridLines ? 0 : 1), 1),
                n = a.isHorizontal(),
                o = n ? a.width - (a.paddingLeft + a.paddingRight) : a.height - (a.paddingTop + a.paddingBottom),
                r = o / i;return t -= n ? a.left : a.top, a.options.gridLines.offsetGridLines && (t -= r / 2), t -= n ? a.paddingLeft : a.paddingTop, e = 0 >= t ? 0 : Math.round(t / r);
          }, getBasePixel: function getBasePixel() {
            return this.bottom;
          } });t.scaleService.registerScaleType("category", i, a);
      };
    }, {}], 42: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers,
            a = { position: "left", ticks: { callback: t.Ticks.formatters.linear } },
            i = t.LinearScaleBase.extend({ determineDataLimits: function determineDataLimits() {
            function t(t) {
              return l ? t.xAxisID === a.id : t.yAxisID === a.id;
            }var a = this,
                i = a.options,
                n = a.chart,
                o = n.data,
                r = o.datasets,
                l = a.isHorizontal();if (a.min = null, a.max = null, i.stacked) {
              var s = {};e.each(r, function (o, r) {
                var l = n.getDatasetMeta(r);void 0 === s[l.type] && (s[l.type] = { positiveValues: [], negativeValues: [] });var d = s[l.type].positiveValues,
                    u = s[l.type].negativeValues;n.isDatasetVisible(r) && t(l) && e.each(o.data, function (t, e) {
                  var n = +a.getRightValue(t);isNaN(n) || l.data[e].hidden || (d[e] = d[e] || 0, u[e] = u[e] || 0, i.relativePoints ? d[e] = 100 : 0 > n ? u[e] += n : d[e] += n);
                });
              }), e.each(s, function (t) {
                var i = t.positiveValues.concat(t.negativeValues),
                    n = e.min(i),
                    o = e.max(i);a.min = null === a.min ? n : Math.min(a.min, n), a.max = null === a.max ? o : Math.max(a.max, o);
              });
            } else e.each(r, function (i, o) {
              var r = n.getDatasetMeta(o);n.isDatasetVisible(o) && t(r) && e.each(i.data, function (t, e) {
                var i = +a.getRightValue(t);isNaN(i) || r.data[e].hidden || (null === a.min ? a.min = i : i < a.min && (a.min = i), null === a.max ? a.max = i : i > a.max && (a.max = i));
              });
            });this.handleTickRangeOptions();
          }, getTickLimit: function getTickLimit() {
            var a,
                i = this,
                n = i.options.ticks;if (i.isHorizontal()) a = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(i.width / 50));else {
              var o = e.getValueOrDefault(n.fontSize, t.defaults.global.defaultFontSize);a = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(i.height / (2 * o)));
            }return a;
          }, handleDirectionalChanges: function handleDirectionalChanges() {
            this.isHorizontal() || this.ticks.reverse();
          }, getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          }, getPixelForValue: function getPixelForValue(t) {
            var e,
                a,
                i = this,
                n = i.paddingLeft,
                o = i.paddingBottom,
                r = i.start,
                l = +i.getRightValue(t),
                s = i.end - r;return i.isHorizontal() ? (a = i.width - (n + i.paddingRight), e = i.left + a / s * (l - r), Math.round(e + n)) : (a = i.height - (i.paddingTop + o), e = i.bottom - o - a / s * (l - r), Math.round(e));
          }, getValueForPixel: function getValueForPixel(t) {
            var e = this,
                a = e.isHorizontal(),
                i = e.paddingLeft,
                n = e.paddingBottom,
                o = a ? e.width - (i + e.paddingRight) : e.height - (e.paddingTop + n),
                r = (a ? t - e.left - i : e.bottom - n - t) / o;return e.start + (e.end - e.start) * r;
          }, getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.ticksAsNumbers[t]);
          } });t.scaleService.registerScaleType("linear", i, a);
      };
    }, {}], 43: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers,
            a = e.noop;t.LinearScaleBase = t.Scale.extend({ handleTickRangeOptions: function handleTickRangeOptions() {
            var t = this,
                a = t.options,
                i = a.ticks;if (i.beginAtZero) {
              var n = e.sign(t.min),
                  o = e.sign(t.max);0 > n && 0 > o ? t.max = 0 : n > 0 && o > 0 && (t.min = 0);
            }void 0 !== i.min ? t.min = i.min : void 0 !== i.suggestedMin && (t.min = Math.min(t.min, i.suggestedMin)), void 0 !== i.max ? t.max = i.max : void 0 !== i.suggestedMax && (t.max = Math.max(t.max, i.suggestedMax)), t.min === t.max && (t.max++, i.beginAtZero || t.min--);
          }, getTickLimit: a, handleDirectionalChanges: a, buildTicks: function buildTicks() {
            var a = this,
                i = a.options,
                n = i.ticks,
                o = a.getTickLimit();o = Math.max(2, o);var r = { maxTicks: o, min: n.min, max: n.max, stepSize: e.getValueOrDefault(n.fixedStepSize, n.stepSize) },
                l = a.ticks = t.Ticks.generators.linear(r, a);a.handleDirectionalChanges(), a.max = e.max(l), a.min = e.min(l), n.reverse ? (l.reverse(), a.start = a.max, a.end = a.min) : (a.start = a.min, a.end = a.max);
          }, convertTicksToLabels: function convertTicksToLabels() {
            var e = this;e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e);
          } });
      };
    }, {}], 44: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers,
            a = { position: "left", ticks: { callback: t.Ticks.formatters.logarithmic } },
            i = t.Scale.extend({ determineDataLimits: function determineDataLimits() {
            function t(t) {
              return d ? t.xAxisID === a.id : t.yAxisID === a.id;
            }var a = this,
                i = a.options,
                n = i.ticks,
                o = a.chart,
                r = o.data,
                l = r.datasets,
                s = e.getValueOrDefault,
                d = a.isHorizontal();if (a.min = null, a.max = null, a.minNotZero = null, i.stacked) {
              var u = {};e.each(l, function (n, r) {
                var l = o.getDatasetMeta(r);o.isDatasetVisible(r) && t(l) && (void 0 === u[l.type] && (u[l.type] = []), e.each(n.data, function (t, e) {
                  var n = u[l.type],
                      o = +a.getRightValue(t);isNaN(o) || l.data[e].hidden || (n[e] = n[e] || 0, i.relativePoints ? n[e] = 100 : n[e] += o);
                }));
              }), e.each(u, function (t) {
                var i = e.min(t),
                    n = e.max(t);a.min = null === a.min ? i : Math.min(a.min, i), a.max = null === a.max ? n : Math.max(a.max, n);
              });
            } else e.each(l, function (i, n) {
              var r = o.getDatasetMeta(n);o.isDatasetVisible(n) && t(r) && e.each(i.data, function (t, e) {
                var i = +a.getRightValue(t);isNaN(i) || r.data[e].hidden || (null === a.min ? a.min = i : i < a.min && (a.min = i), null === a.max ? a.max = i : i > a.max && (a.max = i), 0 !== i && (null === a.minNotZero || i < a.minNotZero) && (a.minNotZero = i));
              });
            });a.min = s(n.min, a.min), a.max = s(n.max, a.max), a.min === a.max && (0 !== a.min && null !== a.min ? (a.min = Math.pow(10, Math.floor(e.log10(a.min)) - 1), a.max = Math.pow(10, Math.floor(e.log10(a.max)) + 1)) : (a.min = 1, a.max = 10));
          }, buildTicks: function buildTicks() {
            var a = this,
                i = a.options,
                n = i.ticks,
                o = { min: n.min, max: n.max },
                r = a.ticks = t.Ticks.generators.logarithmic(o, a);a.isHorizontal() || r.reverse(), a.max = e.max(r), a.min = e.min(r), n.reverse ? (r.reverse(), a.start = a.max, a.end = a.min) : (a.start = a.min, a.end = a.max);
          }, convertTicksToLabels: function convertTicksToLabels() {
            this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this);
          }, getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          }, getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.tickValues[t]);
          }, getPixelForValue: function getPixelForValue(t) {
            var a,
                i,
                n,
                o = this,
                r = o.start,
                l = +o.getRightValue(t),
                s = o.paddingTop,
                d = o.paddingBottom,
                u = o.paddingLeft,
                c = o.options,
                h = c.ticks;return o.isHorizontal() ? (n = e.log10(o.end) - e.log10(r), 0 === l ? i = o.left + u : (a = o.width - (u + o.paddingRight), i = o.left + a / n * (e.log10(l) - e.log10(r)), i += u)) : (a = o.height - (s + d), 0 !== r || h.reverse ? 0 === o.end && h.reverse ? (n = e.log10(o.start) - e.log10(o.minNotZero), i = l === o.end ? o.top + s : l === o.minNotZero ? o.top + s + .02 * a : o.top + s + .02 * a + .98 * a / n * (e.log10(l) - e.log10(o.minNotZero))) : (n = e.log10(o.end) - e.log10(r), a = o.height - (s + d), i = o.bottom - d - a / n * (e.log10(l) - e.log10(r))) : (n = e.log10(o.end) - e.log10(o.minNotZero), i = l === r ? o.bottom - d : l === o.minNotZero ? o.bottom - d - .02 * a : o.bottom - d - .02 * a - .98 * a / n * (e.log10(l) - e.log10(o.minNotZero)))), i;
          }, getValueForPixel: function getValueForPixel(t) {
            var a,
                i,
                n = this,
                o = e.log10(n.end) - e.log10(n.start);return n.isHorizontal() ? (i = n.width - (n.paddingLeft + n.paddingRight), a = n.start * Math.pow(10, (t - n.left - n.paddingLeft) * o / i)) : (i = n.height - (n.paddingTop + n.paddingBottom), a = Math.pow(10, (n.bottom - n.paddingBottom - t) * o / i) / n.start), a;
          } });t.scaleService.registerScaleType("logarithmic", i, a);
      };
    }, {}], 45: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers,
            a = t.defaults.global,
            i = { display: !0, animate: !0, lineArc: !1, position: "chartArea", angleLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1 }, ticks: { showLabelBackdrop: !0, backdropColor: "rgba(255,255,255,0.75)", backdropPaddingY: 2, backdropPaddingX: 2, callback: t.Ticks.formatters.linear }, pointLabels: { fontSize: 10, callback: function callback(t) {
              return t;
            } } },
            n = t.LinearScaleBase.extend({ getValueCount: function getValueCount() {
            return this.chart.data.labels.length;
          }, setDimensions: function setDimensions() {
            var t = this,
                i = t.options,
                n = i.ticks;t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);var o = e.min([t.height, t.width]),
                r = e.getValueOrDefault(n.fontSize, a.defaultFontSize);t.drawingArea = i.display ? o / 2 - (r / 2 + n.backdropPaddingY) : o / 2;
          }, determineDataLimits: function determineDataLimits() {
            var t = this,
                a = t.chart;t.min = null, t.max = null, e.each(a.data.datasets, function (i, n) {
              if (a.isDatasetVisible(n)) {
                var o = a.getDatasetMeta(n);e.each(i.data, function (e, a) {
                  var i = +t.getRightValue(e);isNaN(i) || o.data[a].hidden || (null === t.min ? t.min = i : i < t.min && (t.min = i), null === t.max ? t.max = i : i > t.max && (t.max = i));
                });
              }
            }), t.handleTickRangeOptions();
          }, getTickLimit: function getTickLimit() {
            var t = this.options.ticks,
                i = e.getValueOrDefault(t.fontSize, a.defaultFontSize);return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * i)));
          }, convertTicksToLabels: function convertTicksToLabels() {
            var e = this;t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e);
          }, getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          }, fit: function fit() {
            var t,
                i,
                n,
                o,
                r,
                l,
                s,
                d,
                u,
                c,
                h,
                f,
                g = this.options.pointLabels,
                p = e.getValueOrDefault(g.fontSize, a.defaultFontSize),
                m = e.getValueOrDefault(g.fontStyle, a.defaultFontStyle),
                b = e.getValueOrDefault(g.fontFamily, a.defaultFontFamily),
                v = e.fontString(p, m, b),
                x = e.min([this.height / 2 - p - 5, this.width / 2]),
                y = this.width,
                k = 0;for (this.ctx.font = v, i = 0; i < this.getValueCount(); i++) {
              t = this.getPointPosition(i, x), n = this.ctx.measureText(this.pointLabels[i] ? this.pointLabels[i] : "").width + 5;var S = this.getIndexAngle(i) + Math.PI / 2,
                  w = 360 * S / (2 * Math.PI) % 360;0 === w || 180 === w ? (o = n / 2, t.x + o > y && (y = t.x + o, r = i), t.x - o < k && (k = t.x - o, s = i)) : 180 > w ? t.x + n > y && (y = t.x + n, r = i) : t.x - n < k && (k = t.x - n, s = i);
            }u = k, c = Math.ceil(y - this.width), l = this.getIndexAngle(r), d = this.getIndexAngle(s), h = c / Math.sin(l + Math.PI / 2), f = u / Math.sin(d + Math.PI / 2), h = e.isNumber(h) ? h : 0, f = e.isNumber(f) ? f : 0, this.drawingArea = Math.round(x - (f + h) / 2), this.setCenterPoint(f, h);
          }, setCenterPoint: function setCenterPoint(t, e) {
            var a = this,
                i = a.width - e - a.drawingArea,
                n = t + a.drawingArea;a.xCenter = Math.round((n + i) / 2 + a.left), a.yCenter = Math.round(a.height / 2 + a.top);
          }, getIndexAngle: function getIndexAngle(t) {
            var e = 2 * Math.PI / this.getValueCount(),
                a = this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0,
                i = a * Math.PI * 2 / 360;return t * e - Math.PI / 2 + i;
          }, getDistanceFromCenterForValue: function getDistanceFromCenterForValue(t) {
            var e = this;if (null === t) return 0;var a = e.drawingArea / (e.max - e.min);return e.options.reverse ? (e.max - t) * a : (t - e.min) * a;
          }, getPointPosition: function getPointPosition(t, e) {
            var a = this,
                i = a.getIndexAngle(t);return { x: Math.round(Math.cos(i) * e) + a.xCenter, y: Math.round(Math.sin(i) * e) + a.yCenter };
          }, getPointPositionForValue: function getPointPositionForValue(t, e) {
            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
          }, getBasePosition: function getBasePosition() {
            var t = this,
                e = t.min,
                a = t.max;return t.getPointPositionForValue(0, t.beginAtZero ? 0 : 0 > e && 0 > a ? a : e > 0 && a > 0 ? e : 0);
          }, draw: function draw() {
            var t = this,
                i = t.options,
                n = i.gridLines,
                o = i.ticks,
                r = i.angleLines,
                l = i.pointLabels,
                s = e.getValueOrDefault;if (i.display) {
              var d = t.ctx,
                  u = s(o.fontSize, a.defaultFontSize),
                  c = s(o.fontStyle, a.defaultFontStyle),
                  h = s(o.fontFamily, a.defaultFontFamily),
                  f = e.fontString(u, c, h);if (e.each(t.ticks, function (r, l) {
                if (l > 0 || i.reverse) {
                  var c = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]),
                      h = t.yCenter - c;if (n.display && 0 !== l) if (d.strokeStyle = e.getValueAtIndexOrDefault(n.color, l - 1), d.lineWidth = e.getValueAtIndexOrDefault(n.lineWidth, l - 1), i.lineArc) d.beginPath(), d.arc(t.xCenter, t.yCenter, c, 0, 2 * Math.PI), d.closePath(), d.stroke();else {
                    d.beginPath();for (var g = 0; g < t.getValueCount(); g++) {
                      var p = t.getPointPosition(g, c);0 === g ? d.moveTo(p.x, p.y) : d.lineTo(p.x, p.y);
                    }d.closePath(), d.stroke();
                  }if (o.display) {
                    var m = s(o.fontColor, a.defaultFontColor);if (d.font = f, o.showLabelBackdrop) {
                      var b = d.measureText(r).width;d.fillStyle = o.backdropColor, d.fillRect(t.xCenter - b / 2 - o.backdropPaddingX, h - u / 2 - o.backdropPaddingY, b + 2 * o.backdropPaddingX, u + 2 * o.backdropPaddingY);
                    }d.textAlign = "center", d.textBaseline = "middle", d.fillStyle = m, d.fillText(r, t.xCenter, h);
                  }
                }
              }), !i.lineArc) {
                d.lineWidth = r.lineWidth, d.strokeStyle = r.color;for (var g = t.getDistanceFromCenterForValue(i.reverse ? t.min : t.max), p = s(l.fontSize, a.defaultFontSize), m = s(l.fontStyle, a.defaultFontStyle), b = s(l.fontFamily, a.defaultFontFamily), v = e.fontString(p, m, b), x = t.getValueCount() - 1; x >= 0; x--) {
                  if (r.display) {
                    var y = t.getPointPosition(x, g);d.beginPath(), d.moveTo(t.xCenter, t.yCenter), d.lineTo(y.x, y.y), d.stroke(), d.closePath();
                  }var k = t.getPointPosition(x, g + 5),
                      S = s(l.fontColor, a.defaultFontColor);d.font = v, d.fillStyle = S;var w = t.pointLabels,
                      M = this.getIndexAngle(x) + Math.PI / 2,
                      C = 360 * M / (2 * Math.PI) % 360;0 === C || 180 === C ? d.textAlign = "center" : 180 > C ? d.textAlign = "left" : d.textAlign = "right", 90 === C || 270 === C ? d.textBaseline = "middle" : C > 270 || 90 > C ? d.textBaseline = "bottom" : d.textBaseline = "top", d.fillText(w[x] ? w[x] : "", k.x, k.y);
                }
              }
            }
          } });t.scaleService.registerScaleType("radialLinear", n, i);
      };
    }, {}], 46: [function (t, e, a) {
      "use strict";
      var i = t(1);i = "function" == typeof i ? i : window.moment, e.exports = function (t) {
        var e = t.helpers,
            a = { units: [{ name: "millisecond", steps: [1, 2, 5, 10, 20, 50, 100, 250, 500] }, { name: "second", steps: [1, 2, 5, 10, 30] }, { name: "minute", steps: [1, 2, 5, 10, 30] }, { name: "hour", steps: [1, 2, 3, 6, 12] }, { name: "day", steps: [1, 2, 5] }, { name: "week", maxStep: 4 }, { name: "month", maxStep: 3 }, { name: "quarter", maxStep: 4 }, { name: "year", maxStep: !1 }] },
            n = { position: "bottom", time: { parser: !1, format: !1, unit: !1, round: !1, displayFormat: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: { millisecond: "h:mm:ss.SSS a", second: "h:mm:ss a", minute: "h:mm:ss a", hour: "MMM D, hA", day: "ll", week: "ll", month: "MMM YYYY", quarter: "[Q]Q - YYYY", year: "YYYY" } }, ticks: { autoSkip: !1 } },
            o = t.Scale.extend({ initialize: function initialize() {
            if (!i) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");t.Scale.prototype.initialize.call(this);
          }, getLabelMoment: function getLabelMoment(t, e) {
            return null === t || null === e ? null : "undefined" != typeof this.labelMoments[t] ? this.labelMoments[t][e] : null;
          }, getLabelDiff: function getLabelDiff(t, e) {
            var a = this;return null === t || null === e ? null : (void 0 === a.labelDiffs && a.buildLabelDiffs(), "undefined" != typeof a.labelDiffs[t] ? a.labelDiffs[t][e] : null);
          }, getMomentStartOf: function getMomentStartOf(t) {
            var e = this;return "week" === e.options.time.unit && e.options.time.isoWeekday !== !1 ? t.clone().startOf("isoWeek").isoWeekday(e.options.time.isoWeekday) : t.clone().startOf(e.tickUnit);
          }, determineDataLimits: function determineDataLimits() {
            var t = this;t.labelMoments = [];var a = [];t.chart.data.labels && t.chart.data.labels.length > 0 ? (e.each(t.chart.data.labels, function (e) {
              var i = t.parseTime(e);i.isValid() && (t.options.time.round && i.startOf(t.options.time.round), a.push(i));
            }, t), t.firstTick = i.min.call(t, a), t.lastTick = i.max.call(t, a)) : (t.firstTick = null, t.lastTick = null), e.each(t.chart.data.datasets, function (n, o) {
              var r = [],
                  l = t.chart.isDatasetVisible(o);"object" == _typeof(n.data[0]) && null !== n.data[0] ? e.each(n.data, function (e) {
                var a = t.parseTime(t.getRightValue(e));a.isValid() && (t.options.time.round && a.startOf(t.options.time.round), r.push(a), l && (t.firstTick = null !== t.firstTick ? i.min(t.firstTick, a) : a, t.lastTick = null !== t.lastTick ? i.max(t.lastTick, a) : a));
              }, t) : r = a, t.labelMoments.push(r);
            }, t), t.options.time.min && (t.firstTick = t.parseTime(t.options.time.min)), t.options.time.max && (t.lastTick = t.parseTime(t.options.time.max)), t.firstTick = (t.firstTick || i()).clone(), t.lastTick = (t.lastTick || i()).clone();
          }, buildLabelDiffs: function buildLabelDiffs() {
            var t = this;t.labelDiffs = [];var a = [];t.chart.data.labels && t.chart.data.labels.length > 0 && e.each(t.chart.data.labels, function (e) {
              var i = t.parseTime(e);i.isValid() && (t.options.time.round && i.startOf(t.options.time.round), a.push(i.diff(t.firstTick, t.tickUnit, !0)));
            }, t), e.each(t.chart.data.datasets, function (i) {
              var n = [];"object" == _typeof(i.data[0]) && null !== i.data[0] ? e.each(i.data, function (e) {
                var a = t.parseTime(t.getRightValue(e));a.isValid() && (t.options.time.round && a.startOf(t.options.time.round), n.push(a.diff(t.firstTick, t.tickUnit, !0)));
              }, t) : n = a, t.labelDiffs.push(n);
            }, t);
          }, buildTicks: function buildTicks() {
            var i = this;i.ctx.save();var n = e.getValueOrDefault(i.options.ticks.fontSize, t.defaults.global.defaultFontSize),
                o = e.getValueOrDefault(i.options.ticks.fontStyle, t.defaults.global.defaultFontStyle),
                r = e.getValueOrDefault(i.options.ticks.fontFamily, t.defaults.global.defaultFontFamily),
                l = e.fontString(n, o, r);if (i.ctx.font = l, i.ticks = [], i.unitScale = 1, i.scaleSizeInUnits = 0, i.options.time.unit) i.tickUnit = i.options.time.unit || "day", i.displayFormat = i.options.time.displayFormats[i.tickUnit], i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0), i.unitScale = e.getValueOrDefault(i.options.time.unitStepSize, 1);else {
              var s = i.isHorizontal() ? i.width - (i.paddingLeft + i.paddingRight) : i.height - (i.paddingTop + i.paddingBottom),
                  d = i.tickFormatFunction(i.firstTick, 0, []),
                  u = i.ctx.measureText(d).width,
                  c = Math.cos(e.toRadians(i.options.ticks.maxRotation)),
                  h = Math.sin(e.toRadians(i.options.ticks.maxRotation));u = u * c + n * h;var f = s / u;i.tickUnit = i.options.time.minUnit, i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0), i.displayFormat = i.options.time.displayFormats[i.tickUnit];for (var g = 0, p = a.units[g]; g < a.units.length;) {
                if (i.unitScale = 1, e.isArray(p.steps) && Math.ceil(i.scaleSizeInUnits / f) < e.max(p.steps)) {
                  for (var m = 0; m < p.steps.length; ++m) {
                    if (p.steps[m] >= Math.ceil(i.scaleSizeInUnits / f)) {
                      i.unitScale = e.getValueOrDefault(i.options.time.unitStepSize, p.steps[m]);break;
                    }
                  }break;
                }if (p.maxStep === !1 || Math.ceil(i.scaleSizeInUnits / f) < p.maxStep) {
                  i.unitScale = e.getValueOrDefault(i.options.time.unitStepSize, Math.ceil(i.scaleSizeInUnits / f));break;
                }++g, p = a.units[g], i.tickUnit = p.name;var b = i.firstTick.diff(i.getMomentStartOf(i.firstTick), i.tickUnit, !0),
                    v = i.getMomentStartOf(i.lastTick.clone().add(1, i.tickUnit)).diff(i.lastTick, i.tickUnit, !0);i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0) + b + v, i.displayFormat = i.options.time.displayFormats[p.name];
              }
            }var x;if (i.options.time.min ? x = i.getMomentStartOf(i.firstTick) : (i.firstTick = i.getMomentStartOf(i.firstTick), x = i.firstTick), !i.options.time.max) {
              var y = i.getMomentStartOf(i.lastTick),
                  k = y.diff(i.lastTick, i.tickUnit, !0);0 > k ? i.lastTick = i.getMomentStartOf(i.lastTick.add(1, i.tickUnit)) : k >= 0 && (i.lastTick = y), i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0);
            }i.options.time.displayFormat && (i.displayFormat = i.options.time.displayFormat), i.ticks.push(i.firstTick.clone());for (var S = 1; S <= i.scaleSizeInUnits; ++S) {
              var w = x.clone().add(S, i.tickUnit);if (i.options.time.max && w.diff(i.lastTick, i.tickUnit, !0) >= 0) break;S % i.unitScale === 0 && i.ticks.push(w);
            }var M = i.ticks[i.ticks.length - 1].diff(i.lastTick, i.tickUnit);(0 !== M || 0 === i.scaleSizeInUnits) && (i.options.time.max ? (i.ticks.push(i.lastTick.clone()), i.scaleSizeInUnits = i.lastTick.diff(i.ticks[0], i.tickUnit, !0)) : (i.ticks.push(i.lastTick.clone()), i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0))), i.ctx.restore(), i.labelDiffs = void 0;
          }, getLabelForIndex: function getLabelForIndex(t, e) {
            var a = this,
                i = a.chart.data.labels && t < a.chart.data.labels.length ? a.chart.data.labels[t] : "";return "object" == _typeof(a.chart.data.datasets[e].data[0]) && (i = a.getRightValue(a.chart.data.datasets[e].data[t])), a.options.time.tooltipFormat && (i = a.parseTime(i).format(a.options.time.tooltipFormat)), i;
          }, tickFormatFunction: function tickFormatFunction(t, a, i) {
            var n = t.format(this.displayFormat),
                o = this.options.ticks,
                r = e.getValueOrDefault(o.callback, o.userCallback);return r ? r(n, a, i) : n;
          }, convertTicksToLabels: function convertTicksToLabels() {
            var t = this;t.tickMoments = t.ticks, t.ticks = t.ticks.map(t.tickFormatFunction, t);
          }, getPixelForValue: function getPixelForValue(t, e, a) {
            var i = this,
                n = null;if (void 0 !== e && void 0 !== a && (n = i.getLabelDiff(a, e)), null === n && (t && t.isValid || (t = i.parseTime(i.getRightValue(t))), t && t.isValid && t.isValid() && (n = t.diff(i.firstTick, i.tickUnit, !0))), null !== n) {
              var o = 0 !== n ? n / i.scaleSizeInUnits : n;if (i.isHorizontal()) {
                var r = i.width - (i.paddingLeft + i.paddingRight),
                    l = r * o + i.paddingLeft;return i.left + Math.round(l);
              }var s = i.height - (i.paddingTop + i.paddingBottom),
                  d = s * o + i.paddingTop;return i.top + Math.round(d);
            }
          }, getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.tickMoments[t], null, null);
          }, getValueForPixel: function getValueForPixel(t) {
            var e = this,
                a = e.isHorizontal() ? e.width - (e.paddingLeft + e.paddingRight) : e.height - (e.paddingTop + e.paddingBottom),
                n = (t - (e.isHorizontal() ? e.left + e.paddingLeft : e.top + e.paddingTop)) / a;return n *= e.scaleSizeInUnits, e.firstTick.clone().add(i.duration(n, e.tickUnit).asSeconds(), "seconds");
          }, parseTime: function parseTime(t) {
            var e = this;return "string" == typeof e.options.time.parser ? i(t, e.options.time.parser) : "function" == typeof e.options.time.parser ? e.options.time.parser(t) : "function" == typeof t.getMonth || "number" == typeof t ? i(t) : t.isValid && t.isValid() ? t : "string" != typeof e.options.time.format && e.options.time.format.call ? (console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"), e.options.time.format(t)) : i(t, e.options.time.format);
          } });t.scaleService.registerScaleType("time", o, n);
      };
    }, { 1: 1 }] }, {}, [7])(7);
});
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * angular-chart.js - An angular.js wrapper for Chart.js
 * http://jtblin.github.io/angular-chart.js/
 * Version: 1.0.3
 *
 * Copyright 2016 Jerome Touffe-Blin
 * Released under the BSD-2-Clause license
 * https://github.com/jtblin/angular-chart.js/blob/master/LICENSE
 */
!function (t) {
  "use strict";
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports))) module.exports = t("undefined" != typeof angular ? angular : require("angular"), "undefined" != typeof Chart ? Chart : require("chart.js"));else if ("function" == typeof define && define.amd) define(["angular", "chart"], t);else {
    if ("undefined" == typeof angular || "undefined" == typeof Chart) throw new Error("Chart.js library needs to be included, see http://jtblin.github.io/angular-chart.js/");t(angular, Chart);
  }
}(function (t, r) {
  "use strict";
  function a() {
    var a = { responsive: !0 },
        e = { Chart: r, getOptions: function getOptions(r) {
        var e = r && a[r] || {};return t.extend({}, a, e);
      } };this.setOptions = function (r, n) {
      n ? a[r] = t.merge(a[r] || {}, n) : (n = r, a = t.merge(a, n)), t.merge(e.Chart.defaults, a);
    }, this.$get = function () {
      return e;
    };
  }function e(a, e) {
    function o(t, r, e) {
      var n = w(t, r);if (v(r) && $(t, r, e, n)) {
        var o = e[0],
            c = o.getContext("2d");r.chartGetColor = C(r);var i = y(t, r);F(r), r.chart = new a.Chart(c, { type: t, data: i, options: n }), r.$emit("chart-create", r.chart), D(o, r);
      }
    }function c(t, r) {
      return t && r && t.length && r.length ? Array.isArray(t[0]) ? t.length === r.length && t.every(function (t, a) {
        return t.length === r[a].length;
      }) : r.reduce(i, 0) > 0 ? t.length === r.length : !1 : !1;
    }function i(t, r) {
      return t + r;
    }function u(r, a, e) {
      var n = null;return function (o) {
        var c = r.chart.getElementsAtEvent || r.chart.getPointsAtEvent;if (c) {
          var i = c.call(r.chart, o);e !== !1 && t.equals(n, i) !== !1 || (n = i, r[a](i, o));
        }
      };
    }function h(e, n) {
      for (var o = t.copy(n.chartColors || a.getOptions(e).chartColors || r.defaults.global.colors), c = o.length < n.chartData.length; o.length < n.chartData.length;) {
        o.push(n.chartGetColor());
      }return c && (n.chartColors = o), o.map(l);
    }function l(t) {
      return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t ? t : "string" == typeof t && "#" === t[0] ? f(p(t.substr(1))) : s();
    }function s() {
      var t = [d(0, 255), d(0, 255), d(0, 255)];return f(t);
    }function f(t) {
      return { backgroundColor: g(t, .2), pointBackgroundColor: g(t, 1), pointHoverBackgroundColor: g(t, .8), borderColor: g(t, 1), pointBorderColor: "#fff", pointHoverBorderColor: g(t, 1) };
    }function d(t, r) {
      return Math.floor(Math.random() * (r - t + 1)) + t;
    }function g(t, r) {
      return n ? "rgb(" + t.join(",") + ")" : "rgba(" + t.concat(r).join(",") + ")";
    }function p(t) {
      var r = parseInt(t, 16),
          a = r >> 16 & 255,
          e = r >> 8 & 255,
          n = 255 & r;return [a, e, n];
    }function v(t) {
      return t.chartData && t.chartData.length;
    }function C(t) {
      return "function" == typeof t.chartGetColor ? t.chartGetColor : s;
    }function y(t, r) {
      var a = h(t, r);return Array.isArray(r.chartData[0]) ? b(r.chartLabels, r.chartData, r.chartSeries || [], a, r.chartDatasetOverride) : m(r.chartLabels, r.chartData, a, r.chartDatasetOverride);
    }function b(r, a, e, n, o) {
      return { labels: r, datasets: a.map(function (r, a) {
          var c = t.extend({}, n[a], { label: e[a], data: r });return o && o.length >= a && t.merge(c, o[a]), c;
        }) };
    }function m(r, a, e, n) {
      var o = { labels: r, datasets: [{ data: a, backgroundColor: e.map(function (t) {
            return t.pointBackgroundColor;
          }), hoverBackgroundColor: e.map(function (t) {
            return t.backgroundColor;
          }) }] };return n && t.merge(o.datasets[0], n), o;
    }function w(r, e) {
      return t.extend({}, a.getOptions(r), e.chartOptions);
    }function D(r, a) {
      r.onclick = a.chartClick ? u(a, "chartClick", !1) : t.noop, r.onmousemove = a.chartHover ? u(a, "chartHover", !0) : t.noop;
    }function B(t, r) {
      Array.isArray(r.chartData[0]) ? r.chart.data.datasets.forEach(function (r, a) {
        r.data = t[a];
      }) : r.chart.data.datasets[0].data = t, r.chart.update(), r.$emit("chart-update", r.chart);
    }function A(t) {
      return !t || Array.isArray(t) && !t.length || "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && !Object.keys(t).length;
    }function $(t, r, a, n) {
      return n.responsive && 0 === a[0].clientHeight ? (e(function () {
        o(t, r, a);
      }, 50, !1), !1) : !0;
    }function F(t) {
      t.chart && (t.chart.destroy(), t.$emit("chart-destroy", t.chart));
    }return function (r) {
      return { restrict: "CA", scope: { chartGetColor: "=?", chartType: "=", chartData: "=?", chartLabels: "=?", chartOptions: "=?", chartSeries: "=?", chartColors: "=?", chartClick: "=?", chartHover: "=?", chartDatasetOverride: "=?" }, link: function link(a, e) {
          function i(t, n) {
            if (!t || !t.length || Array.isArray(t[0]) && !t[0].length) return void F(a);var i = r || a.chartType;if (i) return a.chart && c(t, n) ? B(t, a) : void o(i, a, e);
          }function u(n, c) {
            if (!A(n) && !t.equals(n, c)) {
              var i = r || a.chartType;i && o(i, a, e);
            }
          }function h(r, n) {
            A(r) || t.equals(r, n) || o(r, a, e);
          }n && window.G_vmlCanvasManager.initElement(e[0]), a.$watch("chartData", i, !0), a.$watch("chartSeries", u, !0), a.$watch("chartLabels", u, !0), a.$watch("chartOptions", u, !0), a.$watch("chartColors", u, !0), a.$watch("chartDatasetOverride", u, !0), a.$watch("chartType", h, !1), a.$on("$destroy", function () {
            F(a);
          }), a.$on("$resize", function () {
            a.chart && a.chart.resize();
          });
        } };
    };
  }r.defaults.global.multiTooltipTemplate = "<%if (datasetLabel){%><%=datasetLabel%>: <%}%><%= value %>", r.defaults.global.tooltips.mode = "label", r.defaults.global.elements.line.borderWidth = 2, r.defaults.global.elements.rectangle.borderWidth = 2, r.defaults.global.legend.display = !1, r.defaults.global.colors = ["#97BBCD", "#DCDCDC", "#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"];var n = "object" == _typeof(window.G_vmlCanvasManager) && null !== window.G_vmlCanvasManager && "function" == typeof window.G_vmlCanvasManager.initElement;return n && (r.defaults.global.animation = !1), t.module("chart.js", []).provider("ChartJs", a).factory("ChartJsFactory", ["ChartJs", "$timeout", e]).directive("chartBase", ["ChartJsFactory", function (t) {
    return new t();
  }]).directive("chartLine", ["ChartJsFactory", function (t) {
    return new t("line");
  }]).directive("chartBar", ["ChartJsFactory", function (t) {
    return new t("bar");
  }]).directive("chartHorizontalBar", ["ChartJsFactory", function (t) {
    return new t("horizontalBar");
  }]).directive("chartRadar", ["ChartJsFactory", function (t) {
    return new t("radar");
  }]).directive("chartDoughnut", ["ChartJsFactory", function (t) {
    return new t("doughnut");
  }]).directive("chartPie", ["ChartJsFactory", function (t) {
    return new t("pie");
  }]).directive("chartPolarArea", ["ChartJsFactory", function (t) {
    return new t("polarArea");
  }]).directive("chartBubble", ["ChartJsFactory", function (t) {
    return new t("bubble");
  }]).name;
});
//# sourceMappingURL=angular-chart.min.js.map
"use strict";

var CryptoJS = CryptoJS || function (o, q) {
  var l = {},
      m = l.lib = {},
      n = m.Base = function () {
    function a() {}return { extend: function extend(e) {
        a.prototype = this;var c = new a();e && c.mixIn(e);c.$super = this;return c;
      }, create: function create() {
        var a = this.extend();a.init.apply(a, arguments);return a;
      }, init: function init() {}, mixIn: function mixIn(a) {
        for (var c in a) {
          a.hasOwnProperty(c) && (this[c] = a[c]);
        }a.hasOwnProperty("toString") && (this.toString = a.toString);
      }, clone: function clone() {
        return this.$super.extend(this);
      } };
  }(),
      j = m.WordArray = n.extend({ init: function init(a, e) {
      a = this.words = a || [];this.sigBytes = e != q ? e : 4 * a.length;
    }, toString: function toString(a) {
      return (a || r).stringify(this);
    }, concat: function concat(a) {
      var e = this.words,
          c = a.words,
          d = this.sigBytes,
          a = a.sigBytes;this.clamp();if (d % 4) for (var b = 0; b < a; b++) {
        e[d + b >>> 2] |= (c[b >>> 2] >>> 24 - 8 * (b % 4) & 255) << 24 - 8 * ((d + b) % 4);
      } else if (65535 < c.length) for (b = 0; b < a; b += 4) {
        e[d + b >>> 2] = c[b >>> 2];
      } else e.push.apply(e, c);this.sigBytes += a;return this;
    }, clamp: function clamp() {
      var a = this.words,
          e = this.sigBytes;a[e >>> 2] &= 4294967295 << 32 - 8 * (e % 4);a.length = o.ceil(e / 4);
    }, clone: function clone() {
      var a = n.clone.call(this);a.words = this.words.slice(0);return a;
    }, random: function random(a) {
      for (var e = [], c = 0; c < a; c += 4) {
        e.push(4294967296 * o.random() | 0);
      }return j.create(e, a);
    } }),
      k = l.enc = {},
      r = k.Hex = { stringify: function stringify(a) {
      for (var e = a.words, a = a.sigBytes, c = [], d = 0; d < a; d++) {
        var b = e[d >>> 2] >>> 24 - 8 * (d % 4) & 255;c.push((b >>> 4).toString(16));c.push((b & 15).toString(16));
      }return c.join("");
    }, parse: function parse(a) {
      for (var b = a.length, c = [], d = 0; d < b; d += 2) {
        c[d >>> 3] |= parseInt(a.substr(d, 2), 16) << 24 - 4 * (d % 8);
      }return j.create(c, b / 2);
    } },
      p = k.Latin1 = { stringify: function stringify(a) {
      for (var b = a.words, a = a.sigBytes, c = [], d = 0; d < a; d++) {
        c.push(String.fromCharCode(b[d >>> 2] >>> 24 - 8 * (d % 4) & 255));
      }return c.join("");
    }, parse: function parse(a) {
      for (var b = a.length, c = [], d = 0; d < b; d++) {
        c[d >>> 2] |= (a.charCodeAt(d) & 255) << 24 - 8 * (d % 4);
      }return j.create(c, b);
    } },
      h = k.Utf8 = { stringify: function stringify(a) {
      try {
        return decodeURIComponent(escape(p.stringify(a)));
      } catch (b) {
        throw Error("Malformed UTF-8 data");
      }
    }, parse: function parse(a) {
      return p.parse(unescape(encodeURIComponent(a)));
    } },
      b = m.BufferedBlockAlgorithm = n.extend({ reset: function reset() {
      this._data = j.create();
      this._nDataBytes = 0;
    }, _append: function _append(a) {
      "string" == typeof a && (a = h.parse(a));this._data.concat(a);this._nDataBytes += a.sigBytes;
    }, _process: function _process(a) {
      var b = this._data,
          c = b.words,
          d = b.sigBytes,
          f = this.blockSize,
          i = d / (4 * f),
          i = a ? o.ceil(i) : o.max((i | 0) - this._minBufferSize, 0),
          a = i * f,
          d = o.min(4 * a, d);if (a) {
        for (var h = 0; h < a; h += f) {
          this._doProcessBlock(c, h);
        }h = c.splice(0, a);b.sigBytes -= d;
      }return j.create(h, d);
    }, clone: function clone() {
      var a = n.clone.call(this);a._data = this._data.clone();return a;
    }, _minBufferSize: 0 });m.Hasher = b.extend({ init: function init() {
      this.reset();
    },
    reset: function reset() {
      b.reset.call(this);this._doReset();
    }, update: function update(a) {
      this._append(a);this._process();return this;
    }, finalize: function finalize(a) {
      a && this._append(a);this._doFinalize();return this._hash;
    }, clone: function clone() {
      var a = b.clone.call(this);a._hash = this._hash.clone();return a;
    }, blockSize: 16, _createHelper: function _createHelper(a) {
      return function (b, c) {
        return a.create(c).finalize(b);
      };
    }, _createHmacHelper: function _createHmacHelper(a) {
      return function (b, c) {
        return f.HMAC.create(a, c).finalize(b);
      };
    } });var f = l.algo = {};return l;
}(Math);
(function (o) {
  function q(b, f, a, e, c, d, g) {
    b = b + (f & a | ~f & e) + c + g;return (b << d | b >>> 32 - d) + f;
  }function l(b, f, a, e, c, d, g) {
    b = b + (f & e | a & ~e) + c + g;return (b << d | b >>> 32 - d) + f;
  }function m(b, f, a, e, c, d, g) {
    b = b + (f ^ a ^ e) + c + g;return (b << d | b >>> 32 - d) + f;
  }function n(b, f, a, e, c, d, g) {
    b = b + (a ^ (f | ~e)) + c + g;return (b << d | b >>> 32 - d) + f;
  }var j = CryptoJS,
      k = j.lib,
      r = k.WordArray,
      k = k.Hasher,
      p = j.algo,
      h = [];(function () {
    for (var b = 0; 64 > b; b++) {
      h[b] = 4294967296 * o.abs(o.sin(b + 1)) | 0;
    }
  })();p = p.MD5 = k.extend({ _doReset: function _doReset() {
      this._hash = r.create([1732584193, 4023233417, 2562383102, 271733878]);
    }, _doProcessBlock: function _doProcessBlock(b, f) {
      for (var a = 0; 16 > a; a++) {
        var e = f + a,
            c = b[e];b[e] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
      }for (var e = this._hash.words, c = e[0], d = e[1], g = e[2], i = e[3], a = 0; 64 > a; a += 4) {
        16 > a ? (c = q(c, d, g, i, b[f + a], 7, h[a]), i = q(i, c, d, g, b[f + a + 1], 12, h[a + 1]), g = q(g, i, c, d, b[f + a + 2], 17, h[a + 2]), d = q(d, g, i, c, b[f + a + 3], 22, h[a + 3])) : 32 > a ? (c = l(c, d, g, i, b[f + (a + 1) % 16], 5, h[a]), i = l(i, c, d, g, b[f + (a + 6) % 16], 9, h[a + 1]), g = l(g, i, c, d, b[f + (a + 11) % 16], 14, h[a + 2]), d = l(d, g, i, c, b[f + a % 16], 20, h[a + 3])) : 48 > a ? (c = m(c, d, g, i, b[f + (3 * a + 5) % 16], 4, h[a]), i = m(i, c, d, g, b[f + (3 * a + 8) % 16], 11, h[a + 1]), g = m(g, i, c, d, b[f + (3 * a + 11) % 16], 16, h[a + 2]), d = m(d, g, i, c, b[f + (3 * a + 14) % 16], 23, h[a + 3])) : (c = n(c, d, g, i, b[f + 3 * a % 16], 6, h[a]), i = n(i, c, d, g, b[f + (3 * a + 7) % 16], 10, h[a + 1]), g = n(g, i, c, d, b[f + (3 * a + 14) % 16], 15, h[a + 2]), d = n(d, g, i, c, b[f + (3 * a + 5) % 16], 21, h[a + 3]));
      }e[0] = e[0] + c | 0;e[1] = e[1] + d | 0;e[2] = e[2] + g | 0;e[3] = e[3] + i | 0;
    }, _doFinalize: function _doFinalize() {
      var b = this._data,
          f = b.words,
          a = 8 * this._nDataBytes,
          e = 8 * b.sigBytes;f[e >>> 5] |= 128 << 24 - e % 32;f[(e + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;b.sigBytes = 4 * (f.length + 1);this._process();b = this._hash.words;for (f = 0; 4 > f; f++) {
        a = b[f], b[f] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
      }
    } });j.MD5 = k._createHelper(p);j.HmacMD5 = k._createHmacHelper(p);
})(Math);
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (t) {
  if ("function" == typeof define && define.amd && define("uikit", function () {
    var i = window.UIkit || t(window, window.jQuery, window.document);return i.load = function (t, e, n, o) {
      var s,
          a = t.split(","),
          r = [],
          l = (o.config && o.config.uikit && o.config.uikit.base ? o.config.uikit.base : "").replace(/\/+$/g, "");if (!l) throw new Error("Please define base path to UIkit in the requirejs config.");for (s = 0; s < a.length; s += 1) {
        var c = a[s].replace(/\./g, "/");r.push(l + "/components/" + c);
      }e(r, function () {
        n(i);
      });
    }, i;
  }), !window.jQuery) throw new Error("UIkit requires jQuery");window && window.jQuery && t(window, window.jQuery, window.document);
}(function (t, i, e) {
  "use strict";
  var n = {},
      o = t.UIkit ? Object.create(t.UIkit) : void 0;if (n.version = "2.27.2", n.noConflict = function () {
    return o && (t.UIkit = o, i.UIkit = o, i.fn.uk = o.fn), n;
  }, n.prefix = function (t) {
    return t;
  }, n.$ = i, n.$doc = n.$(document), n.$win = n.$(window), n.$html = n.$("html"), n.support = {}, n.support.transition = function () {
    var t = function () {
      var t,
          i = e.body || e.documentElement,
          n = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (t in n) {
        if (void 0 !== i.style[t]) return n[t];
      }
    }();return t && { end: t };
  }(), n.support.animation = function () {
    var t = function () {
      var t,
          i = e.body || e.documentElement,
          n = { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd oanimationend", animation: "animationend" };for (t in n) {
        if (void 0 !== i.style[t]) return n[t];
      }
    }();return t && { end: t };
  }(), function () {
    Date.now = Date.now || function () {
      return new Date().getTime();
    };for (var t = ["webkit", "moz"], i = 0; i < t.length && !window.requestAnimationFrame; ++i) {
      var e = t[i];window.requestAnimationFrame = window[e + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e + "CancelAnimationFrame"] || window[e + "CancelRequestAnimationFrame"];
    }if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
      var n = 0;window.requestAnimationFrame = function (t) {
        var i = Date.now(),
            e = Math.max(n + 16, i);return setTimeout(function () {
          t(n = e);
        }, e - i);
      }, window.cancelAnimationFrame = clearTimeout;
    }
  }(), n.support.touch = "ontouchstart" in document || t.DocumentTouch && document instanceof t.DocumentTouch || t.navigator.msPointerEnabled && t.navigator.msMaxTouchPoints > 0 || t.navigator.pointerEnabled && t.navigator.maxTouchPoints > 0 || !1, n.support.mutationobserver = t.MutationObserver || t.WebKitMutationObserver || null, n.Utils = {}, n.Utils.isFullscreen = function () {
    return document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.fullscreenElement || !1;
  }, n.Utils.str2json = function (t, i) {
    try {
      return i ? JSON.parse(t.replace(/([\$\w]+)\s*:/g, function (t, i) {
        return '"' + i + '":';
      }).replace(/'([^']+)'/g, function (t, i) {
        return '"' + i + '"';
      })) : new Function("", "var json = " + t + "; return JSON.parse(JSON.stringify(json));")();
    } catch (e) {
      return !1;
    }
  }, n.Utils.debounce = function (t, i, e) {
    var n;return function () {
      var o = this,
          s = arguments,
          a = function a() {
        n = null, e || t.apply(o, s);
      },
          r = e && !n;clearTimeout(n), n = setTimeout(a, i), r && t.apply(o, s);
    };
  }, n.Utils.throttle = function (t, i) {
    var e = !1;return function () {
      e || (t.call(), e = !0, setTimeout(function () {
        e = !1;
      }, i));
    };
  }, n.Utils.removeCssRules = function (t) {
    var i, e, n, o, s, a, r, l, c, u;t && setTimeout(function () {
      try {
        for (u = document.styleSheets, o = 0, r = u.length; r > o; o++) {
          for (n = u[o], e = [], n.cssRules = n.cssRules, i = s = 0, l = n.cssRules.length; l > s; i = ++s) {
            n.cssRules[i].type === CSSRule.STYLE_RULE && t.test(n.cssRules[i].selectorText) && e.unshift(i);
          }for (a = 0, c = e.length; c > a; a++) {
            n.deleteRule(e[a]);
          }
        }
      } catch (d) {}
    }, 0);
  }, n.Utils.isInView = function (t, e) {
    var o = i(t);if (!o.is(":visible")) return !1;var s = n.$win.scrollLeft(),
        a = n.$win.scrollTop(),
        r = o.offset(),
        l = r.left,
        c = r.top;return e = i.extend({ topoffset: 0, leftoffset: 0 }, e), c + o.height() >= a && c - e.topoffset <= a + n.$win.height() && l + o.width() >= s && l - e.leftoffset <= s + n.$win.width() ? !0 : !1;
  }, n.Utils.checkDisplay = function (t, e) {
    var o = n.$("[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]", t || document);return t && !o.length && (o = i(t)), o.trigger("display.uk.check"), e && ("string" != typeof e && (e = '[class*="uk-animation-"]'), o.find(e).each(function () {
      var t = n.$(this),
          i = t.attr("class"),
          e = i.match(/uk-animation-(.+)/);t.removeClass(e[0]).width(), t.addClass(e[0]);
    })), o;
  }, n.Utils.options = function (t) {
    if ("string" != i.type(t)) return t;-1 != t.indexOf(":") && "}" != t.trim().substr(-1) && (t = "{" + t + "}");var e = t ? t.indexOf("{") : -1,
        o = {};if (-1 != e) try {
      o = n.Utils.str2json(t.substr(e));
    } catch (s) {}return o;
  }, n.Utils.animate = function (t, e) {
    var o = i.Deferred();return t = n.$(t), t.css("display", "none").addClass(e).one(n.support.animation.end, function () {
      t.removeClass(e), o.resolve();
    }), t.css("display", ""), o.promise();
  }, n.Utils.uid = function (t) {
    return (t || "id") + new Date().getTime() + "RAND" + Math.ceil(1e5 * Math.random());
  }, n.Utils.template = function (t, i) {
    for (var e, n, o, s, a = t.replace(/\n/g, "\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g, "{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g), r = 0, l = [], c = 0; r < a.length;) {
      if (e = a[r], e.match(/\{\{\s*(.+?)\s*\}\}/)) switch (r += 1, e = a[r], n = e[0], o = e.substring(e.match(/^(\^|\#|\!|\~|\:)/) ? 1 : 0), n) {case "~":
          l.push("for(var $i=0;$i<" + o + ".length;$i++) { var $item = " + o + "[$i];"), c++;break;case ":":
          l.push("for(var $key in " + o + ") { var $val = " + o + "[$key];"), c++;break;case "#":
          l.push("if(" + o + ") {"), c++;break;case "^":
          l.push("if(!" + o + ") {"), c++;break;case "/":
          l.push("}"), c--;break;case "!":
          l.push("__ret.push(" + o + ");");break;default:
          l.push("__ret.push(escape(" + o + "));");} else l.push("__ret.push('" + e.replace(/\'/g, "\\'") + "');");r += 1;
    }return s = new Function("$data", ["var __ret = [];", "try {", "with($data){", c ? '__ret = ["Not all blocks are closed correctly."]' : l.join(""), "};", "}catch(e){__ret = [e.message];}", 'return __ret.join("").replace(/\\n\\n/g, "\\n");', "function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n")), i ? s(i) : s;
  }, n.Utils.focus = function (t, e) {
    if (t = i(t), !t.length) return t;var n,
        o = t.find("[autofocus]:first");return o.length ? o.focus() : (o = t.find(":input" + (e && "," + e || "")).first(), o.length ? o.focus() : (t.attr("tabindex") || (n = 1e3, t.attr("tabindex", n)), t[0].focus(), n && t.attr("tabindex", ""), t));
  }, n.Utils.events = {}, n.Utils.events.click = n.support.touch ? "tap" : "click", t.UIkit = n, n.fn = function (t, e) {
    var o = arguments,
        s = t.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),
        a = s[1],
        r = s[2];return n[a] ? this.each(function () {
      var t = i(this),
          s = t.data(a);s || t.data(a, s = n[a](this, r ? void 0 : e)), r && s[r].apply(s, Array.prototype.slice.call(o, 1));
    }) : (i.error("UIkit component [" + a + "] does not exist."), this);
  }, i.UIkit = n, i.fn.uk = n.fn, n.langdirection = "rtl" == n.$html.attr("dir") ? "right" : "left", n.components = {}, n.component = function (t, e) {
    var o = function o(e, s) {
      var a = this;return this.UIkit = n, this.element = e ? n.$(e) : null, this.options = i.extend(!0, {}, this.defaults, s), this.plugins = {}, this.element && this.element.data(t, this), this.init(), (this.options.plugins.length ? this.options.plugins : Object.keys(o.plugins)).forEach(function (t) {
        o.plugins[t].init && (o.plugins[t].init(a), a.plugins[t] = !0);
      }), this.trigger("init.uk.component", [t, this]), this;
    };return o.plugins = {}, i.extend(!0, o.prototype, { defaults: { plugins: [] }, boot: function boot() {}, init: function init() {}, on: function on(t, i, e) {
        return n.$(this.element || this).on(t, i, e);
      }, one: function one(t, i, e) {
        return n.$(this.element || this).one(t, i, e);
      }, off: function off(t) {
        return n.$(this.element || this).off(t);
      }, trigger: function trigger(t, i) {
        return n.$(this.element || this).trigger(t, i);
      }, find: function find(t) {
        return n.$(this.element ? this.element : []).find(t);
      }, proxy: function proxy(t, i) {
        var e = this;i.split(" ").forEach(function (i) {
          e[i] || (e[i] = function () {
            return t[i].apply(t, arguments);
          });
        });
      }, mixin: function mixin(t, i) {
        var e = this;i.split(" ").forEach(function (i) {
          e[i] || (e[i] = t[i].bind(e));
        });
      }, option: function option() {
        return 1 == arguments.length ? this.options[arguments[0]] || void 0 : (2 == arguments.length && (this.options[arguments[0]] = arguments[1]), void 0);
      } }, e), this.components[t] = o, this[t] = function () {
      var e, o;if (arguments.length) switch (arguments.length) {case 1:
          "string" == typeof arguments[0] || arguments[0].nodeType || arguments[0] instanceof jQuery ? e = i(arguments[0]) : o = arguments[0];break;case 2:
          e = i(arguments[0]), o = arguments[1];}return e && e.data(t) ? e.data(t) : new n.components[t](e, o);
    }, n.domready && n.component.boot(t), o;
  }, n.plugin = function (t, i, e) {
    this.components[t].plugins[i] = e;
  }, n.component.boot = function (t) {
    n.components[t].prototype && n.components[t].prototype.boot && !n.components[t].booted && (n.components[t].prototype.boot.apply(n, []), n.components[t].booted = !0);
  }, n.component.bootComponents = function () {
    for (var t in n.components) {
      n.component.boot(t);
    }
  }, n.domObservers = [], n.domready = !1, n.ready = function (t) {
    n.domObservers.push(t), n.domready && t(document);
  }, n.on = function (t, i, e) {
    return t && t.indexOf("ready.uk.dom") > -1 && n.domready && i.apply(n.$doc), n.$doc.on(t, i, e);
  }, n.one = function (t, i, e) {
    return t && t.indexOf("ready.uk.dom") > -1 && n.domready ? (i.apply(n.$doc), n.$doc) : n.$doc.one(t, i, e);
  }, n.trigger = function (t, i) {
    return n.$doc.trigger(t, i);
  }, n.domObserve = function (t, i) {
    n.support.mutationobserver && (i = i || function () {}, n.$(t).each(function () {
      var t = this,
          e = n.$(t);if (!e.data("observer")) try {
        var o = new n.support.mutationobserver(n.Utils.debounce(function () {
          i.apply(t, [e]), e.trigger("changed.uk.dom");
        }, 50), { childList: !0, subtree: !0 });o.observe(t, { childList: !0, subtree: !0 }), e.data("observer", o);
      } catch (s) {}
    }));
  }, n.init = function (t) {
    t = t || document, n.domObservers.forEach(function (i) {
      i(t);
    });
  }, n.on("domready.uk.dom", function () {
    n.init(), n.domready && n.Utils.checkDisplay();
  }), document.addEventListener("DOMContentLoaded", function () {
    var t = function t() {
      n.$body = n.$("body"), n.trigger("beforeready.uk.dom"), n.component.bootComponents();var t = requestAnimationFrame(function () {
        var i = { dir: { x: 0, y: 0 }, x: window.pageXOffset, y: window.pageYOffset },
            e = function e() {
          var o = window.pageXOffset,
              s = window.pageYOffset;(i.x != o || i.y != s) && (i.dir.x = o != i.x ? o > i.x ? 1 : -1 : 0, i.dir.y = s != i.y ? s > i.y ? 1 : -1 : 0, i.x = o, i.y = s, n.$doc.trigger("scrolling.uk.document", [{ dir: { x: i.dir.x, y: i.dir.y }, x: o, y: s }])), cancelAnimationFrame(t), t = requestAnimationFrame(e);
        };return n.support.touch && n.$html.on("touchmove touchend MSPointerMove MSPointerUp pointermove pointerup", e), (i.x || i.y) && e(), e;
      }());if (n.trigger("domready.uk.dom"), n.support.touch && navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && n.$win.on("load orientationchange resize", n.Utils.debounce(function () {
        var t = function t() {
          return i(".uk-height-viewport").css("height", window.innerHeight), t;
        };return t();
      }(), 100)), n.trigger("afterready.uk.dom"), n.domready = !0, n.support.mutationobserver) {
        var e = n.Utils.debounce(function () {
          requestAnimationFrame(function () {
            n.init(document.body);
          });
        }, 10);new n.support.mutationobserver(function (t) {
          var i = !1;t.every(function (t) {
            if ("childList" != t.type) return !0;for (var e, n = 0; n < t.addedNodes.length; ++n) {
              if (e = t.addedNodes[n], e.outerHTML && -1 !== e.outerHTML.indexOf("data-uk-")) return (i = !0) && !1;
            }return !0;
          }), i && e();
        }).observe(document.body, { childList: !0, subtree: !0 });
      }
    };return ("complete" == document.readyState || "interactive" == document.readyState) && setTimeout(t), t;
  }()), n.$html.addClass(n.support.touch ? "uk-touch" : "uk-notouch"), n.support.touch) {
    var s,
        a = !1,
        r = "uk-hover",
        l = ".uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover";n.$html.on("mouseenter touchstart MSPointerDown pointerdown", l, function () {
      a && i("." + r).removeClass(r), a = i(this).addClass(r);
    }).on("mouseleave touchend MSPointerUp pointerup", function (t) {
      s = i(t.target).parents(l), a && a.not(s).removeClass(r);
    });
  }return n;
}), function (t) {
  function i(t, i, e, n) {
    return Math.abs(t - i) >= Math.abs(e - n) ? t - i > 0 ? "Left" : "Right" : e - n > 0 ? "Up" : "Down";
  }function e() {
    c = null, d.last && (void 0 !== d.el && d.el.trigger("longTap"), d = {});
  }function n() {
    c && clearTimeout(c), c = null;
  }function o() {
    a && clearTimeout(a), r && clearTimeout(r), l && clearTimeout(l), c && clearTimeout(c), a = r = l = c = null, d = {};
  }function s(t) {
    return t.pointerType == t.MSPOINTER_TYPE_TOUCH && t.isPrimary;
  }if (!t.fn.swipeLeft) {
    var a,
        r,
        l,
        c,
        u,
        d = {},
        h = 750;t(function () {
      var p,
          f,
          m,
          g = 0,
          v = 0;"MSGesture" in window && (u = new MSGesture(), u.target = document.body), t(document).on("MSGestureEnd gestureend", function (t) {
        var i = t.originalEvent.velocityX > 1 ? "Right" : t.originalEvent.velocityX < -1 ? "Left" : t.originalEvent.velocityY > 1 ? "Down" : t.originalEvent.velocityY < -1 ? "Up" : null;i && void 0 !== d.el && (d.el.trigger("swipe"), d.el.trigger("swipe" + i));
      }).on("touchstart MSPointerDown pointerdown", function (i) {
        ("MSPointerDown" != i.type || s(i.originalEvent)) && (m = "MSPointerDown" == i.type || "pointerdown" == i.type ? i : i.originalEvent.touches[0], p = Date.now(), f = p - (d.last || p), d.el = t("tagName" in m.target ? m.target : m.target.parentNode), a && clearTimeout(a), d.x1 = m.pageX, d.y1 = m.pageY, f > 0 && 250 >= f && (d.isDoubleTap = !0), d.last = p, c = setTimeout(e, h), i.originalEvent && i.originalEvent.pointerId && u && ("MSPointerDown" == i.type || "pointerdown" == i.type || "touchstart" == i.type) && u.addPointer(i.originalEvent.pointerId));
      }).on("touchmove MSPointerMove pointermove", function (t) {
        ("MSPointerMove" != t.type || s(t.originalEvent)) && (m = "MSPointerMove" == t.type || "pointermove" == t.type ? t : t.originalEvent.touches[0], n(), d.x2 = m.pageX, d.y2 = m.pageY, g += Math.abs(d.x1 - d.x2), v += Math.abs(d.y1 - d.y2));
      }).on("touchend MSPointerUp pointerup", function (e) {
        ("MSPointerUp" != e.type || s(e.originalEvent)) && (n(), d.x2 && Math.abs(d.x1 - d.x2) > 30 || d.y2 && Math.abs(d.y1 - d.y2) > 30 ? l = setTimeout(function () {
          void 0 !== d.el && (d.el.trigger("swipe"), d.el.trigger("swipe" + i(d.x1, d.x2, d.y1, d.y2))), d = {};
        }, 0) : "last" in d && (isNaN(g) || 30 > g && 30 > v ? r = setTimeout(function () {
          var i = t.Event("tap");i.cancelTouch = o, void 0 !== d.el && d.el.trigger(i), d.isDoubleTap ? (void 0 !== d.el && d.el.trigger("doubleTap"), d = {}) : a = setTimeout(function () {
            a = null, void 0 !== d.el && d.el.trigger("singleTap"), d = {};
          }, 250);
        }, 0) : d = {}, g = v = 0));
      }).on("touchcancel MSPointerCancel pointercancel", o), t(window).on("scroll", o);
    }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (i) {
      t.fn[i] = function (e) {
        return t(this).on(i, e);
      };
    });
  }
}(jQuery), function (t) {
  "use strict";
  var i = [];t.component("stackMargin", { defaults: { cls: "uk-margin-small-top", rowfirst: !1, observe: !1 }, boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-margin]", i).each(function () {
          var i = t.$(this);i.data("stackMargin") || t.stackMargin(i, t.Utils.options(i.attr("data-uk-margin")));
        });
      });
    }, init: function init() {
      var e = this;t.$win.on("resize orientationchange", function () {
        var i = function i() {
          e.process();
        };return t.$(function () {
          i(), t.$win.on("load", i);
        }), t.Utils.debounce(i, 20);
      }()), this.on("display.uk.check", function () {
        this.element.is(":visible") && this.process();
      }.bind(this)), this.options.observe && t.domObserve(this.element, function () {
        e.element.is(":visible") && e.process();
      }), i.push(this);
    }, process: function process() {
      var i = this.element.children();if (t.Utils.stackMargin(i, this.options), !this.options.rowfirst || !i.length) return this;var e = {},
          n = !1;return i.removeClass(this.options.rowfirst).each(function (i, o) {
        o = t.$(this), "none" != this.style.display && (i = o.offset().left, ((e[i] = e[i] || []) && e[i]).push(this), n = n === !1 ? i : Math.min(n, i));
      }), t.$(e[n]).addClass(this.options.rowfirst), this;
    } }), function () {
    var i = [],
        e = function e(t) {
      if (t.is(":visible")) {
        var i = t.parent().width(),
            e = t.data("width"),
            n = i / e,
            o = Math.floor(n * t.data("height"));t.css({ height: e > i ? o : t.data("height") });
      }
    };t.component("responsiveElement", { defaults: {}, boot: function boot() {
        t.ready(function (i) {
          t.$("iframe.uk-responsive-width, [data-uk-responsive]", i).each(function () {
            var i,
                e = t.$(this);e.data("responsiveElement") || (i = t.responsiveElement(e, {}));
          });
        });
      }, init: function init() {
        var t = this.element;t.attr("width") && t.attr("height") && (t.data({ width: t.attr("width"), height: t.attr("height") }).on("display.uk.check", function () {
          e(t);
        }), e(t), i.push(t));
      } }), t.$win.on("resize load", t.Utils.debounce(function () {
      i.forEach(function (t) {
        e(t);
      });
    }, 15));
  }(), t.Utils.stackMargin = function (i, e) {
    e = t.$.extend({ cls: "uk-margin-small-top" }, e), i = t.$(i).removeClass(e.cls);var n = !1;i.each(function (i, e, o, s) {
      s = t.$(this), "none" != s.css("display") && (i = s.offset(), e = s.outerHeight(), o = i.top + e, s.data({ ukMarginPos: o, ukMarginTop: i.top }), (n === !1 || i.top < n.top) && (n = { top: i.top, left: i.left, pos: o }));
    }).each(function (i) {
      i = t.$(this), "none" != i.css("display") && i.data("ukMarginTop") > n.top && i.data("ukMarginPos") > n.pos && i.addClass(e.cls);
    });
  }, t.Utils.matchHeights = function (i, e) {
    i = t.$(i).css("min-height", ""), e = t.$.extend({ row: !0 }, e);var n = function n(i) {
      if (!(i.length < 2)) {
        var e = 0;i.each(function () {
          e = Math.max(e, t.$(this).outerHeight());
        }).each(function () {
          var i = t.$(this),
              n = e - ("border-box" == i.css("box-sizing") ? 0 : i.outerHeight() - i.height());i.css("min-height", n + "px");
        });
      }
    };e.row ? (i.first().width(), setTimeout(function () {
      var e = !1,
          o = [];i.each(function () {
        var i = t.$(this),
            s = i.offset().top;s != e && o.length && (n(t.$(o)), o = [], s = i.offset().top), o.push(i), e = s;
      }), o.length && n(t.$(o));
    }, 0)) : n(i);
  }, function (i) {
    t.Utils.inlineSvg = function (e, n) {
      t.$(e || 'img[src$=".svg"]', n || document).each(function () {
        var e = t.$(this),
            n = e.attr("src");if (!i[n]) {
          var o = t.$.Deferred();t.$.get(n, { nc: Math.random() }, function (i) {
            o.resolve(t.$(i).find("svg"));
          }), i[n] = o.promise();
        }i[n].then(function (i) {
          var n = t.$(i).clone();e.attr("id") && n.attr("id", e.attr("id")), e.attr("class") && n.attr("class", e.attr("class")), e.attr("style") && n.attr("style", e.attr("style")), e.attr("width") && (n.attr("width", e.attr("width")), e.attr("height") || n.removeAttr("height")), e.attr("height") && (n.attr("height", e.attr("height")), e.attr("width") || n.removeAttr("width")), e.replaceWith(n);
        });
      });
    }, t.ready(function (i) {
      t.Utils.inlineSvg("[data-uk-svg]", i);
    });
  }({}), t.Utils.getCssVar = function (t) {
    var i,
        e = document.documentElement,
        n = e.appendChild(document.createElement("div"));n.classList.add("var-" + t);try {
      i = JSON.parse(i = getComputedStyle(n, ":before").content.replace(/^["'](.*)["']$/, "$1"));
    } catch (o) {
      i = void 0;
    }return e.removeChild(n), i;
  };
}(UIkit), function (t) {
  "use strict";
  function i(i, e) {
    e = t.$.extend({ duration: 1e3, transition: "easeOutExpo", offset: 0, complete: function complete() {} }, e);var n = i.offset().top - e.offset,
        o = t.$doc.height(),
        s = window.innerHeight;n + s > o && (n = o - s), t.$("html,body").stop().animate({ scrollTop: n }, e.duration, e.transition).promise().done(e.complete);
  }t.component("smoothScroll", { boot: function boot() {
      t.$html.on("click.smooth-scroll.uikit", "[data-uk-smooth-scroll]", function () {
        var i = t.$(this);if (!i.data("smoothScroll")) {
          {
            t.smoothScroll(i, t.Utils.options(i.attr("data-uk-smooth-scroll")));
          }i.trigger("click");
        }return !1;
      });
    }, init: function init() {
      var e = this;this.on("click", function (n) {
        n.preventDefault(), i(t.$(this.hash).length ? t.$(this.hash) : t.$("body"), e.options);
      });
    } }), t.Utils.scrollToElement = i, t.$.easing.easeOutExpo || (t.$.easing.easeOutExpo = function (t, i, e, n, o) {
    return i == o ? e + n : n * (-Math.pow(2, -10 * i / o) + 1) + e;
  });
}(UIkit), function (t) {
  "use strict";
  var i = t.$win,
      e = t.$doc,
      n = [],
      o = function o() {
    for (var t = 0; t < n.length; t++) {
      window.requestAnimationFrame.apply(window, [n[t].check]);
    }
  };t.component("scrollspy", { defaults: { target: !1, cls: "uk-scrollspy-inview", initcls: "uk-scrollspy-init-inview", topoffset: 0, leftoffset: 0, repeat: !1, delay: 0 }, boot: function boot() {
      e.on("scrolling.uk.document", o), i.on("load resize orientationchange", t.Utils.debounce(o, 50)), t.ready(function (i) {
        t.$("[data-uk-scrollspy]", i).each(function () {
          var i = t.$(this);if (!i.data("scrollspy")) {
            t.scrollspy(i, t.Utils.options(i.attr("data-uk-scrollspy")));
          }
        });
      });
    }, init: function init() {
      var i,
          e = this,
          o = this.options.cls.split(/,/),
          s = function s() {
        var n = e.options.target ? e.element.find(e.options.target) : e.element,
            s = 1 === n.length ? 1 : 0,
            a = 0;n.each(function () {
          var n = t.$(this),
              r = n.data("inviewstate"),
              l = t.Utils.isInView(n, e.options),
              c = n.data("ukScrollspyCls") || o[a].trim();!l || r || n.data("scrollspy-idle") || (i || (n.addClass(e.options.initcls), e.offset = n.offset(), i = !0, n.trigger("init.uk.scrollspy")), n.data("scrollspy-idle", setTimeout(function () {
            n.addClass("uk-scrollspy-inview").toggleClass(c).width(), n.trigger("inview.uk.scrollspy"), n.data("scrollspy-idle", !1), n.data("inviewstate", !0);
          }, e.options.delay * s)), s++), !l && r && e.options.repeat && (n.data("scrollspy-idle") && (clearTimeout(n.data("scrollspy-idle")), n.data("scrollspy-idle", !1)), n.removeClass("uk-scrollspy-inview").toggleClass(c), n.data("inviewstate", !1), n.trigger("outview.uk.scrollspy")), a = o[a + 1] ? a + 1 : 0;
        });
      };s(), this.check = s, n.push(this);
    } });var s = [],
      a = function a() {
    for (var t = 0; t < s.length; t++) {
      window.requestAnimationFrame.apply(window, [s[t].check]);
    }
  };t.component("scrollspynav", { defaults: { cls: "uk-active", closest: !1, topoffset: 0, leftoffset: 0, smoothscroll: !1 }, boot: function boot() {
      e.on("scrolling.uk.document", a), i.on("resize orientationchange", t.Utils.debounce(a, 50)), t.ready(function (i) {
        t.$("[data-uk-scrollspy-nav]", i).each(function () {
          var i = t.$(this);if (!i.data("scrollspynav")) {
            t.scrollspynav(i, t.Utils.options(i.attr("data-uk-scrollspy-nav")));
          }
        });
      });
    }, init: function init() {
      var e,
          n = [],
          o = this.find("a[href^='#']").each(function () {
        "#" !== this.getAttribute("href").trim() && n.push(this.getAttribute("href"));
      }),
          a = t.$(n.join(",")),
          r = this.options.cls,
          l = this.options.closest || this.options.closest,
          c = this,
          u = function u() {
        e = [];for (var n = 0; n < a.length; n++) {
          t.Utils.isInView(a.eq(n), c.options) && e.push(a.eq(n));
        }if (e.length) {
          var s,
              u = i.scrollTop(),
              d = function () {
            for (var t = 0; t < e.length; t++) {
              if (e[t].offset().top - c.options.topoffset >= u) return e[t];
            }
          }();if (!d) return;c.options.closest ? (o.blur().closest(l).removeClass(r), s = o.filter("a[href='#" + d.attr("id") + "']").closest(l).addClass(r)) : s = o.removeClass(r).filter("a[href='#" + d.attr("id") + "']").addClass(r), c.element.trigger("inview.uk.scrollspynav", [d, s]);
        }
      };this.options.smoothscroll && t.smoothScroll && o.each(function () {
        t.smoothScroll(this, c.options.smoothscroll);
      }), u(), this.element.data("scrollspynav", this), this.check = u, s.push(this);
    } });
}(UIkit), function (t) {
  "use strict";
  var i = [];t.component("toggle", { defaults: { target: !1, cls: "uk-hidden", animation: !1, duration: 200 }, boot: function boot() {
      t.ready(function (e) {
        t.$("[data-uk-toggle]", e).each(function () {
          var i = t.$(this);if (!i.data("toggle")) {
            t.toggle(i, t.Utils.options(i.attr("data-uk-toggle")));
          }
        }), setTimeout(function () {
          i.forEach(function (t) {
            t.getToggles();
          });
        }, 0);
      });
    }, init: function init() {
      var t = this;this.aria = -1 !== this.options.cls.indexOf("uk-hidden"), this.on("click", function (i) {
        t.element.is('a[href="#"]') && i.preventDefault(), t.toggle();
      }), i.push(this);
    }, toggle: function toggle() {
      if (this.getToggles(), this.totoggle.length) {
        if (this.options.animation && t.support.animation) {
          var i = this,
              e = this.options.animation.split(",");1 == e.length && (e[1] = e[0]), e[0] = e[0].trim(), e[1] = e[1].trim(), this.totoggle.css("animation-duration", this.options.duration + "ms"), this.totoggle.each(function () {
            var n = t.$(this);n.hasClass(i.options.cls) ? (n.toggleClass(i.options.cls), t.Utils.animate(n, e[0]).then(function () {
              n.css("animation-duration", ""), t.Utils.checkDisplay(n);
            })) : t.Utils.animate(this, e[1] + " uk-animation-reverse").then(function () {
              n.toggleClass(i.options.cls).css("animation-duration", ""), t.Utils.checkDisplay(n);
            });
          });
        } else this.totoggle.toggleClass(this.options.cls), t.Utils.checkDisplay(this.totoggle);this.updateAria();
      }
    }, getToggles: function getToggles() {
      this.totoggle = this.options.target ? t.$(this.options.target) : [], this.updateAria();
    }, updateAria: function updateAria() {
      this.aria && this.totoggle.length && this.totoggle.not("[aria-hidden]").each(function () {
        t.$(this).attr("aria-hidden", t.$(this).hasClass("uk-hidden"));
      });
    } });
}(UIkit), function (t) {
  "use strict";
  t.component("alert", { defaults: { fade: !0, duration: 200, trigger: ".uk-alert-close" }, boot: function boot() {
      t.$html.on("click.alert.uikit", "[data-uk-alert]", function (i) {
        var e = t.$(this);if (!e.data("alert")) {
          var n = t.alert(e, t.Utils.options(e.attr("data-uk-alert")));t.$(i.target).is(n.options.trigger) && (i.preventDefault(), n.close());
        }
      });
    }, init: function init() {
      var t = this;this.on("click", this.options.trigger, function (i) {
        i.preventDefault(), t.close();
      });
    }, close: function close() {
      var t = this.trigger("close.uk.alert"),
          i = function () {
        this.trigger("closed.uk.alert").remove();
      }.bind(this);this.options.fade ? t.css("overflow", "hidden").css("max-height", t.height()).animate({ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 0 }, this.options.duration, i) : i();
    } });
}(UIkit), function (t) {
  "use strict";
  t.component("buttonRadio", { defaults: { activeClass: "uk-active", target: ".uk-button" }, boot: function boot() {
      t.$html.on("click.buttonradio.uikit", "[data-uk-button-radio]", function (i) {
        var e = t.$(this);if (!e.data("buttonRadio")) {
          var n = t.buttonRadio(e, t.Utils.options(e.attr("data-uk-button-radio"))),
              o = t.$(i.target);o.is(n.options.target) && o.trigger("click");
        }
      });
    }, init: function init() {
      var i = this;this.find(i.options.target).attr("aria-checked", "false").filter("." + i.options.activeClass).attr("aria-checked", "true"), this.on("click", this.options.target, function (e) {
        var n = t.$(this);n.is('a[href="#"]') && e.preventDefault(), i.find(i.options.target).not(n).removeClass(i.options.activeClass).blur(), n.addClass(i.options.activeClass), i.find(i.options.target).not(n).attr("aria-checked", "false"), n.attr("aria-checked", "true"), i.trigger("change.uk.button", [n]);
      });
    }, getSelected: function getSelected() {
      return this.find("." + this.options.activeClass);
    } }), t.component("buttonCheckbox", { defaults: { activeClass: "uk-active", target: ".uk-button" }, boot: function boot() {
      t.$html.on("click.buttoncheckbox.uikit", "[data-uk-button-checkbox]", function (i) {
        var e = t.$(this);if (!e.data("buttonCheckbox")) {
          var n = t.buttonCheckbox(e, t.Utils.options(e.attr("data-uk-button-checkbox"))),
              o = t.$(i.target);o.is(n.options.target) && o.trigger("click");
        }
      });
    }, init: function init() {
      var i = this;this.find(i.options.target).attr("aria-checked", "false").filter("." + i.options.activeClass).attr("aria-checked", "true"), this.on("click", this.options.target, function (e) {
        var n = t.$(this);n.is('a[href="#"]') && e.preventDefault(), n.toggleClass(i.options.activeClass).blur(), n.attr("aria-checked", n.hasClass(i.options.activeClass)), i.trigger("change.uk.button", [n]);
      });
    }, getSelected: function getSelected() {
      return this.find("." + this.options.activeClass);
    } }), t.component("button", { defaults: {}, boot: function boot() {
      t.$html.on("click.button.uikit", "[data-uk-button]", function () {
        var i = t.$(this);if (!i.data("button")) {
          {
            t.button(i, t.Utils.options(i.attr("data-uk-button")));
          }i.trigger("click");
        }
      });
    }, init: function init() {
      var t = this;this.element.attr("aria-pressed", this.element.hasClass("uk-active")), this.on("click", function (i) {
        t.element.is('a[href="#"]') && i.preventDefault(), t.toggle(), t.trigger("change.uk.button", [t.element.blur().hasClass("uk-active")]);
      });
    }, toggle: function toggle() {
      this.element.toggleClass("uk-active"), this.element.attr("aria-pressed", this.element.hasClass("uk-active"));
    } });
}(UIkit), function (t) {
  "use strict";
  function i(i, e, n, o) {
    if (i = t.$(i), e = t.$(e), n = n || window.innerWidth, o = o || i.offset(), e.length) {
      var s = e.outerWidth();if (i.css("min-width", s), "right" == t.langdirection) {
        var a = n - (e.offset().left + s),
            r = n - (i.offset().left + i.outerWidth());i.css("margin-right", a - r);
      } else i.css("margin-left", e.offset().left - o.left);
    }
  }var e,
      n = !1,
      o = { x: { "bottom-left": "bottom-right", "bottom-right": "bottom-left", "bottom-center": "bottom-center", "top-left": "top-right", "top-right": "top-left", "top-center": "top-center", "left-top": "right-top", "left-bottom": "right-bottom", "left-center": "right-center", "right-top": "left-top", "right-bottom": "left-bottom", "right-center": "left-center" }, y: { "bottom-left": "top-left", "bottom-right": "top-right", "bottom-center": "top-center", "top-left": "bottom-left", "top-right": "bottom-right", "top-center": "bottom-center", "left-top": "left-bottom", "left-bottom": "left-top", "left-center": "left-center", "right-top": "right-bottom", "right-bottom": "right-top", "right-center": "right-center" }, xy: { "bottom-left": "top-right", "bottom-right": "top-left", "bottom-center": "top-center", "top-left": "bottom-right", "top-right": "bottom-left", "top-center": "bottom-center", "left-top": "right-bottom", "left-bottom": "right-top", "left-center": "right-center", "right-top": "left-bottom", "right-bottom": "left-top", "right-center": "left-center" } };t.component("dropdown", { defaults: { mode: "hover", pos: "bottom-left", offset: 0, remaintime: 800, justify: !1, boundary: t.$win, delay: 0, dropdownSelector: ".uk-dropdown,.uk-dropdown-blank", hoverDelayIdle: 250, preventflip: !1 }, remainIdle: !1, boot: function boot() {
      var i = t.support.touch ? "click" : "mouseenter";t.$html.on(i + ".dropdown.uikit focus pointerdown", "[data-uk-dropdown]", function (e) {
        var n = t.$(this);if (!n.data("dropdown")) {
          var o = t.dropdown(n, t.Utils.options(n.attr("data-uk-dropdown")));("click" == e.type || "mouseenter" == e.type && "hover" == o.options.mode) && o.element.trigger(i), o.dropdown.length && e.preventDefault();
        }
      });
    }, init: function init() {
      var i = this;this.dropdown = this.find(this.options.dropdownSelector), this.offsetParent = this.dropdown.parents().filter(function () {
        return -1 !== t.$.inArray(t.$(this).css("position"), ["relative", "fixed", "absolute"]);
      }).slice(0, 1), this.offsetParent.length || (this.offsetParent = this.element), this.centered = this.dropdown.hasClass("uk-dropdown-center"), this.justified = this.options.justify ? t.$(this.options.justify) : !1, this.boundary = t.$(this.options.boundary), this.boundary.length || (this.boundary = t.$win), this.dropdown.hasClass("uk-dropdown-up") && (this.options.pos = "top-left"), this.dropdown.hasClass("uk-dropdown-flip") && (this.options.pos = this.options.pos.replace("left", "right")), this.dropdown.hasClass("uk-dropdown-center") && (this.options.pos = this.options.pos.replace(/(left|right)/, "center")), this.element.attr("aria-haspopup", "true"), this.element.attr("aria-expanded", this.element.hasClass("uk-open")), this.dropdown.attr("aria-hidden", "true"), "click" == this.options.mode || t.support.touch ? this.on("click.uk.dropdown", function (e) {
        var n = t.$(e.target);n.parents(i.options.dropdownSelector).length || ((n.is("a[href='#']") || n.parent().is("a[href='#']") || i.dropdown.length && !i.dropdown.is(":visible")) && e.preventDefault(), n.blur()), i.element.hasClass("uk-open") ? (!i.dropdown.find(e.target).length || n.is(".uk-dropdown-close") || n.parents(".uk-dropdown-close").length) && i.hide() : i.show();
      }) : this.on("mouseenter", function () {
        i.trigger("pointerenter.uk.dropdown", [i]), i.remainIdle && clearTimeout(i.remainIdle), e && clearTimeout(e), n && n == i || (e = n && n != i ? setTimeout(function () {
          e = setTimeout(i.show.bind(i), i.options.delay);
        }, i.options.hoverDelayIdle) : setTimeout(i.show.bind(i), i.options.delay));
      }).on("mouseleave", function () {
        e && clearTimeout(e), i.remainIdle = setTimeout(function () {
          n && n == i && i.hide();
        }, i.options.remaintime), i.trigger("pointerleave.uk.dropdown", [i]);
      }).on("click", function (e) {
        var o = t.$(e.target);return i.remainIdle && clearTimeout(i.remainIdle), n && n == i ? ((!i.dropdown.find(e.target).length || o.is(".uk-dropdown-close") || o.parents(".uk-dropdown-close").length) && i.hide(), void 0) : ((o.is("a[href='#']") || o.parent().is("a[href='#']")) && e.preventDefault(), i.show(), void 0);
      });
    }, show: function show() {
      t.$html.off("click.outer.dropdown"), n && n != this && n.hide(!0), e && clearTimeout(e), this.trigger("beforeshow.uk.dropdown", [this]), this.checkDimensions(), this.element.addClass("uk-open"), this.element.attr("aria-expanded", "true"), this.dropdown.attr("aria-hidden", "false"), this.trigger("show.uk.dropdown", [this]), t.Utils.checkDisplay(this.dropdown, !0), t.Utils.focus(this.dropdown), n = this, this.registerOuterClick();
    }, hide: function hide(t) {
      this.trigger("beforehide.uk.dropdown", [this, t]), this.element.removeClass("uk-open"), this.remainIdle && clearTimeout(this.remainIdle), this.remainIdle = !1, this.element.attr("aria-expanded", "false"), this.dropdown.attr("aria-hidden", "true"), this.trigger("hide.uk.dropdown", [this, t]), n == this && (n = !1);
    }, registerOuterClick: function registerOuterClick() {
      var i = this;t.$html.off("click.outer.dropdown"), setTimeout(function () {
        t.$html.on("click.outer.dropdown", function (o) {
          e && clearTimeout(e);t.$(o.target);n != i || i.element.find(o.target).length || (i.hide(!0), t.$html.off("click.outer.dropdown"));
        });
      }, 10);
    }, checkDimensions: function checkDimensions() {
      if (this.dropdown.length) {
        this.dropdown.removeClass("uk-dropdown-top uk-dropdown-bottom uk-dropdown-left uk-dropdown-right uk-dropdown-stack uk-dropdown-autoflip").css({ topLeft: "", left: "", marginLeft: "", marginRight: "" }), this.justified && this.justified.length && this.dropdown.css("min-width", "");var e,
            n = t.$.extend({}, this.offsetParent.offset(), { width: this.offsetParent[0].offsetWidth, height: this.offsetParent[0].offsetHeight }),
            s = this.options.offset,
            a = this.dropdown,
            r = (a.show().offset() || { left: 0, top: 0 }, a.outerWidth()),
            l = a.outerHeight(),
            c = this.boundary.width(),
            u = (this.boundary[0] !== window && this.boundary.offset() ? this.boundary.offset() : { top: 0, left: 0 }, this.options.pos),
            d = { "bottom-left": { top: 0 + n.height + s, left: 0 }, "bottom-right": { top: 0 + n.height + s, left: 0 + n.width - r }, "bottom-center": { top: 0 + n.height + s, left: 0 + n.width / 2 - r / 2 }, "top-left": { top: 0 - l - s, left: 0 }, "top-right": { top: 0 - l - s, left: 0 + n.width - r }, "top-center": { top: 0 - l - s, left: 0 + n.width / 2 - r / 2 }, "left-top": { top: 0, left: 0 - r - s }, "left-bottom": { top: 0 + n.height - l, left: 0 - r - s }, "left-center": { top: 0 + n.height / 2 - l / 2, left: 0 - r - s }, "right-top": { top: 0, left: 0 + n.width + s }, "right-bottom": { top: 0 + n.height - l, left: 0 + n.width + s }, "right-center": { top: 0 + n.height / 2 - l / 2, left: 0 + n.width + s } },
            h = {};
        if (e = u.split("-"), h = d[u] ? d[u] : d["bottom-left"], this.justified && this.justified.length) i(a.css({ left: 0 }), this.justified, c);else if (this.options.preventflip !== !0) {
          var p;switch (this.checkBoundary(n.left + h.left, n.top + h.top, r, l, c)) {case "x":
              "x" !== this.options.preventflip && (p = o.x[u] || "right-top");break;case "y":
              "y" !== this.options.preventflip && (p = o.y[u] || "top-left");break;case "xy":
              this.options.preventflip || (p = o.xy[u] || "right-bottom");}p && (e = p.split("-"), h = d[p] ? d[p] : d["bottom-left"], a.addClass("uk-dropdown-autoflip"), this.checkBoundary(n.left + h.left, n.top + h.top, r, l, c) && (e = u.split("-"), h = d[u] ? d[u] : d["bottom-left"]));
        }r > c && (a.addClass("uk-dropdown-stack"), this.trigger("stack.uk.dropdown", [this])), a.css(h).css("display", "").addClass("uk-dropdown-" + e[0]);
      }
    }, checkBoundary: function checkBoundary(i, e, n, o, s) {
      var a = "";return (0 > i || i - t.$win.scrollLeft() + n > s) && (a += "x"), (e - t.$win.scrollTop() < 0 || e - t.$win.scrollTop() + o > window.innerHeight) && (a += "y"), a;
    } }), t.component("dropdownOverlay", { defaults: { justify: !1, cls: "", duration: 200 }, boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-dropdown-overlay]", i).each(function () {
          var i = t.$(this);i.data("dropdownOverlay") || t.dropdownOverlay(i, t.Utils.options(i.attr("data-uk-dropdown-overlay")));
        });
      });
    }, init: function init() {
      var e = this;this.justified = this.options.justify ? t.$(this.options.justify) : !1, this.overlay = this.element.find("uk-dropdown-overlay"), this.overlay.length || (this.overlay = t.$('<div class="uk-dropdown-overlay"></div>').appendTo(this.element)), this.overlay.addClass(this.options.cls), this.on({ "beforeshow.uk.dropdown": function beforeshowUkDropdown(t, n) {
          e.dropdown = n, e.justified && e.justified.length && i(e.overlay.css({ display: "block", marginLeft: "", marginRight: "" }), e.justified, e.justified.outerWidth());
        }, "show.uk.dropdown": function showUkDropdown() {
          var i = e.dropdown.dropdown.outerHeight(!0);e.dropdown.element.removeClass("uk-open"), e.overlay.stop().css("display", "block").animate({ height: i }, e.options.duration, function () {
            e.dropdown.dropdown.css("visibility", ""), e.dropdown.element.addClass("uk-open"), t.Utils.checkDisplay(e.dropdown.dropdown, !0);
          }), e.pointerleave = !1;
        }, "hide.uk.dropdown": function hideUkDropdown() {
          e.overlay.stop().animate({ height: 0 }, e.options.duration);
        }, "pointerenter.uk.dropdown": function pointerenterUkDropdown() {
          clearTimeout(e.remainIdle);
        }, "pointerleave.uk.dropdown": function pointerleaveUkDropdown() {
          e.pointerleave = !0;
        } }), this.overlay.on({ mouseenter: function mouseenter() {
          e.remainIdle && (clearTimeout(e.dropdown.remainIdle), clearTimeout(e.remainIdle));
        }, mouseleave: function mouseleave() {
          e.pointerleave && n && (e.remainIdle = setTimeout(function () {
            n && n.hide();
          }, n.options.remaintime));
        } });
    } });
}(UIkit), function (t) {
  "use strict";
  var i = [];t.component("gridMatchHeight", { defaults: { target: !1, row: !0, ignorestacked: !1, observe: !1 }, boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-grid-match]", i).each(function () {
          var i,
              e = t.$(this);e.data("gridMatchHeight") || (i = t.gridMatchHeight(e, t.Utils.options(e.attr("data-uk-grid-match"))));
        });
      });
    }, init: function init() {
      var e = this;this.columns = this.element.children(), this.elements = this.options.target ? this.find(this.options.target) : this.columns, this.columns.length && (t.$win.on("load resize orientationchange", function () {
        var i = function i() {
          e.element.is(":visible") && e.match();
        };return t.$(function () {
          i();
        }), t.Utils.debounce(i, 50);
      }()), this.options.observe && t.domObserve(this.element, function () {
        e.element.is(":visible") && e.match();
      }), this.on("display.uk.check", function () {
        this.element.is(":visible") && this.match();
      }.bind(this)), i.push(this));
    }, match: function match() {
      var i = this.columns.filter(":visible:first");if (i.length) {
        var e = Math.ceil(100 * parseFloat(i.css("width")) / parseFloat(i.parent().css("width"))) >= 100;return e && !this.options.ignorestacked ? this.revert() : t.Utils.matchHeights(this.elements, this.options), this;
      }
    }, revert: function revert() {
      return this.elements.css("min-height", ""), this;
    } }), t.component("gridMargin", { defaults: { cls: "uk-grid-margin", rowfirst: "uk-row-first" }, boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-grid-margin]", i).each(function () {
          var i,
              e = t.$(this);e.data("gridMargin") || (i = t.gridMargin(e, t.Utils.options(e.attr("data-uk-grid-margin"))));
        });
      });
    }, init: function init() {
      t.stackMargin(this.element, this.options);
    } });
}(UIkit), function (t) {
  "use strict";
  function i(i, e) {
    return e ? ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) ? (i = i instanceof jQuery ? i : t.$(i), i.parent().length && (e.persist = i, e.persist.data("modalPersistParent", i.parent()))) : i = "string" == typeof i || "number" == typeof i ? t.$("<div></div>").html(i) : t.$("<div></div>").html("UIkit.modal Error: Unsupported data type: " + (typeof i === "undefined" ? "undefined" : _typeof(i))), i.appendTo(e.element.find(".uk-modal-dialog")), e) : void 0;
  }var e,
      n = !1,
      o = 0,
      s = t.$html;t.$win.on("resize orientationchange", t.Utils.debounce(function () {
    t.$(".uk-modal.uk-open").each(function () {
      return t.$(this).data("modal") && t.$(this).data("modal").resize();
    });
  }, 150)), t.component("modal", { defaults: { keyboard: !0, bgclose: !0, minScrollHeight: 150, center: !1, modal: !0 }, scrollable: !1, transition: !1, hasTransitioned: !0, init: function init() {
      if (e || (e = t.$("body")), this.element.length) {
        var i = this;this.paddingdir = "padding-" + ("left" == t.langdirection ? "right" : "left"), this.dialog = this.find(".uk-modal-dialog"), this.active = !1, this.element.attr("aria-hidden", this.element.hasClass("uk-open")), this.on("click", ".uk-modal-close", function (t) {
          t.preventDefault(), i.hide();
        }).on("click", function (e) {
          var n = t.$(e.target);n[0] == i.element[0] && i.options.bgclose && i.hide();
        }), t.domObserve(this.element, function () {
          i.resize();
        });
      }
    }, toggle: function toggle() {
      return this[this.isActive() ? "hide" : "show"]();
    }, show: function show() {
      if (this.element.length) {
        var i = this;if (!this.isActive()) return this.options.modal && n && n.hide(!0), this.element.removeClass("uk-open").show(), this.resize(!0), this.options.modal && (n = this), this.active = !0, o++, t.support.transition ? (this.hasTransitioned = !1, this.element.one(t.support.transition.end, function () {
          i.hasTransitioned = !0, t.Utils.focus(i.dialog, "a[href]");
        }).addClass("uk-open")) : (this.element.addClass("uk-open"), t.Utils.focus(this.dialog, "a[href]")), s.addClass("uk-modal-page").height(), this.element.attr("aria-hidden", "false"), this.element.trigger("show.uk.modal"), t.Utils.checkDisplay(this.dialog, !0), this;
      }
    }, hide: function hide(i) {
      if (!i && t.support.transition && this.hasTransitioned) {
        var e = this;this.one(t.support.transition.end, function () {
          e._hide();
        }).removeClass("uk-open");
      } else this._hide();return this;
    }, resize: function resize(t) {
      if (this.isActive() || t) {
        var i = e.width();if (this.scrollbarwidth = window.innerWidth - i, e.css(this.paddingdir, this.scrollbarwidth), this.element.css("overflow-y", this.scrollbarwidth ? "scroll" : "auto"), !this.updateScrollable() && this.options.center) {
          var n = this.dialog.outerHeight(),
              o = parseInt(this.dialog.css("margin-top"), 10) + parseInt(this.dialog.css("margin-bottom"), 10);n + o < window.innerHeight ? this.dialog.css({ top: window.innerHeight / 2 - n / 2 - o }) : this.dialog.css({ top: "" });
        }
      }
    }, updateScrollable: function updateScrollable() {
      var t = this.dialog.find(".uk-overflow-container:visible:first");if (t.length) {
        t.css("height", 0);var i = Math.abs(parseInt(this.dialog.css("margin-top"), 10)),
            e = this.dialog.outerHeight(),
            n = window.innerHeight,
            o = n - 2 * (20 > i ? 20 : i) - e;return t.css({ maxHeight: o < this.options.minScrollHeight ? "" : o, height: "" }), !0;
      }return !1;
    }, _hide: function _hide() {
      this.active = !1, o > 0 ? o-- : o = 0, this.element.hide().removeClass("uk-open"), this.element.attr("aria-hidden", "true"), o || (s.removeClass("uk-modal-page"), e.css(this.paddingdir, "")), n === this && (n = !1), this.trigger("hide.uk.modal");
    }, isActive: function isActive() {
      return this.element.hasClass("uk-open");
    } }), t.component("modalTrigger", { boot: function boot() {
      t.$html.on("click.modal.uikit", "[data-uk-modal]", function (i) {
        var e = t.$(this);if (e.is("a") && i.preventDefault(), !e.data("modalTrigger")) {
          var n = t.modalTrigger(e, t.Utils.options(e.attr("data-uk-modal")));n.show();
        }
      }), t.$html.on("keydown.modal.uikit", function (t) {
        n && 27 === t.keyCode && n.options.keyboard && (t.preventDefault(), n.hide());
      });
    }, init: function init() {
      var i = this;this.options = t.$.extend({ target: i.element.is("a") ? i.element.attr("href") : !1 }, this.options), this.modal = t.modal(this.options.target, this.options), this.on("click", function (t) {
        t.preventDefault(), i.show();
      }), this.proxy(this.modal, "show hide isActive");
    } }), t.modal.dialog = function (e, n) {
    var o = t.modal(t.$(t.modal.dialog.template).appendTo("body"), n);return o.on("hide.uk.modal", function () {
      o.persist && (o.persist.appendTo(o.persist.data("modalPersistParent")), o.persist = !1), o.element.remove();
    }), i(e, o), o;
  }, t.modal.dialog.template = '<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>', t.modal.alert = function (i, e) {
    e = t.$.extend(!0, { bgclose: !1, keyboard: !1, modal: !1, labels: t.modal.labels }, e);var n = t.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(i) + "</div>", '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">' + e.labels.Ok + "</button></div>"].join(""), e);return n.on("show.uk.modal", function () {
      setTimeout(function () {
        n.element.find("button:first").focus();
      }, 50);
    }), n.show();
  }, t.modal.confirm = function (i, e, n) {
    var o = arguments.length > 1 && arguments[arguments.length - 1] ? arguments[arguments.length - 1] : {};e = t.$.isFunction(e) ? e : function () {}, n = t.$.isFunction(n) ? n : function () {}, o = t.$.extend(!0, { bgclose: !1, keyboard: !1, modal: !1, labels: t.modal.labels }, t.$.isFunction(o) ? {} : o);var s = t.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(i) + "</div>", '<div class="uk-modal-footer uk-text-right"><button class="uk-button js-modal-confirm-cancel">' + o.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-confirm">' + o.labels.Ok + "</button></div>"].join(""), o);return s.element.find(".js-modal-confirm, .js-modal-confirm-cancel").on("click", function () {
      t.$(this).is(".js-modal-confirm") ? e() : n(), s.hide();
    }), s.on("show.uk.modal", function () {
      setTimeout(function () {
        s.element.find(".js-modal-confirm").focus();
      }, 50);
    }), s.show();
  }, t.modal.prompt = function (i, e, n, o) {
    n = t.$.isFunction(n) ? n : function () {}, o = t.$.extend(!0, { bgclose: !1, keyboard: !1, modal: !1, labels: t.modal.labels }, o);var s = t.modal.dialog([i ? '<div class="uk-modal-content uk-form">' + String(i) + "</div>" : "", '<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>', '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">' + o.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-ok">' + o.labels.Ok + "</button></div>"].join(""), o),
        a = s.element.find("input[type='text']").val(e || "").on("keyup", function (t) {
      13 == t.keyCode && s.element.find(".js-modal-ok").trigger("click");
    });return s.element.find(".js-modal-ok").on("click", function () {
      n(a.val()) !== !1 && s.hide();
    }), s.show();
  }, t.modal.blockUI = function (i, e) {
    var n = t.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(i || '<div class="uk-text-center">...</div>') + "</div>"].join(""), t.$.extend({ bgclose: !1, keyboard: !1, modal: !1 }, e));return n.content = n.element.find(".uk-modal-content:first"), n.show();
  }, t.modal.labels = { Ok: "Ok", Cancel: "Cancel" };
}(UIkit), function (t) {
  "use strict";
  function i(i) {
    var e = t.$(i),
        n = "auto";if (e.is(":visible")) n = e.outerHeight();else {
      var o = { position: e.css("position"), visibility: e.css("visibility"), display: e.css("display") };n = e.css({ position: "absolute", visibility: "hidden", display: "block" }).outerHeight(), e.css(o);
    }return n;
  }t.component("nav", { defaults: { toggle: '>li.uk-parent > a[href="#"]', lists: ">li.uk-parent > ul", multiple: !1 }, boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-nav]", i).each(function () {
          var i = t.$(this);if (!i.data("nav")) {
            t.nav(i, t.Utils.options(i.attr("data-uk-nav")));
          }
        });
      });
    }, init: function init() {
      var i = this;this.on("click.uk.nav", this.options.toggle, function (e) {
        e.preventDefault();var n = t.$(this);i.open(n.parent()[0] == i.element[0] ? n : n.parent("li"));
      }), this.update(), t.domObserve(this.element, function () {
        i.element.find(i.options.lists).not("[role]").length && i.update();
      });
    }, update: function update() {
      var i = this;this.find(this.options.lists).each(function () {
        var e = t.$(this).attr("role", "menu"),
            n = e.closest("li"),
            o = n.hasClass("uk-active");n.data("list-container") || (e.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'), n.data("list-container", e.parent()[o ? "removeClass" : "addClass"]("uk-hidden"))), n.attr("aria-expanded", n.hasClass("uk-open")), o && i.open(n, !0);
      });
    }, open: function open(e, n) {
      var o = this,
          s = this.element,
          a = t.$(e),
          r = a.data("list-container");this.options.multiple || s.children(".uk-open").not(e).each(function () {
        var i = t.$(this);i.data("list-container") && i.data("list-container").stop().animate({ height: 0 }, function () {
          t.$(this).parent().removeClass("uk-open").end().addClass("uk-hidden");
        });
      }), a.toggleClass("uk-open"), a.attr("aria-expanded", a.hasClass("uk-open")), r && (a.hasClass("uk-open") && r.removeClass("uk-hidden"), n ? (r.stop().height(a.hasClass("uk-open") ? "auto" : 0), a.hasClass("uk-open") || r.addClass("uk-hidden"), this.trigger("display.uk.check")) : r.stop().animate({ height: a.hasClass("uk-open") ? i(r.find("ul:first")) : 0 }, function () {
        a.hasClass("uk-open") ? r.css("height", "") : r.addClass("uk-hidden"), o.trigger("display.uk.check");
      }));
    } });
}(UIkit), function (t) {
  "use strict";
  var i = { x: window.scrollX, y: window.scrollY },
      e = (t.$win, t.$doc, t.$html),
      n = { show: function show(n, o) {
      if (n = t.$(n), n.length) {
        o = t.$.extend({ mode: "push" }, o);var s = t.$("body"),
            a = n.find(".uk-offcanvas-bar:first"),
            r = "right" == t.langdirection,
            l = a.hasClass("uk-offcanvas-bar-flip") ? -1 : 1,
            c = l * (r ? -1 : 1),
            u = window.innerWidth - s.width();i = { x: window.pageXOffset, y: window.pageYOffset }, a.attr("mode", o.mode), n.addClass("uk-active"), s.css({ width: window.innerWidth - u, height: window.innerHeight }).addClass("uk-offcanvas-page"), ("push" == o.mode || "reveal" == o.mode) && s.css(r ? "margin-right" : "margin-left", (r ? -1 : 1) * a.outerWidth() * c), "reveal" == o.mode && a.css("clip", "rect(0, " + a.outerWidth() + "px, 100vh, 0)"), e.css("margin-top", -1 * i.y).width(), a.addClass("uk-offcanvas-bar-show"), this._initElement(n), a.trigger("show.uk.offcanvas", [n, a]), n.attr("aria-hidden", "false");
      }
    }, hide: function hide(n) {
      var o = t.$("body"),
          s = t.$(".uk-offcanvas.uk-active"),
          a = "right" == t.langdirection,
          r = s.find(".uk-offcanvas-bar:first"),
          l = function l() {
        o.removeClass("uk-offcanvas-page").css({ width: "", height: "", marginLeft: "", marginRight: "" }), s.removeClass("uk-active"), r.removeClass("uk-offcanvas-bar-show"), e.css("margin-top", ""), window.scrollTo(i.x, i.y), r.trigger("hide.uk.offcanvas", [s, r]), s.attr("aria-hidden", "true");
      };s.length && ("none" == r.attr("mode") && (n = !0), t.support.transition && !n ? (o.one(t.support.transition.end, function () {
        l();
      }).css(a ? "margin-right" : "margin-left", ""), "reveal" == r.attr("mode") && r.css("clip", ""), setTimeout(function () {
        r.removeClass("uk-offcanvas-bar-show");
      }, 0)) : l());
    }, _initElement: function _initElement(i) {
      i.data("OffcanvasInit") || (i.on("click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas", function (i) {
        var e = t.$(i.target);if (!i.type.match(/swipe/) && !e.hasClass("uk-offcanvas-close")) {
          if (e.hasClass("uk-offcanvas-bar")) return;if (e.parents(".uk-offcanvas-bar:first").length) return;
        }i.stopImmediatePropagation(), n.hide();
      }), i.on("click", 'a[href*="#"]', function () {
        var i = t.$(this),
            e = i.attr("href");"#" != e && (t.$doc.one("hide.uk.offcanvas", function () {
          var n;try {
            n = t.$(i[0].hash);
          } catch (o) {
            n = "";
          }n.length || (n = t.$('[name="' + i[0].hash.replace("#", "") + '"]')), n.length && t.Utils.scrollToElement ? t.Utils.scrollToElement(n, t.Utils.options(i.attr("data-uk-smooth-scroll") || "{}")) : window.location.href = e;
        }), n.hide());
      }), i.data("OffcanvasInit", !0));
    } };t.component("offcanvasTrigger", { boot: function boot() {
      e.on("click.offcanvas.uikit", "[data-uk-offcanvas]", function (i) {
        i.preventDefault();var e = t.$(this);if (!e.data("offcanvasTrigger")) {
          {
            t.offcanvasTrigger(e, t.Utils.options(e.attr("data-uk-offcanvas")));
          }e.trigger("click");
        }
      }), e.on("keydown.uk.offcanvas", function (t) {
        27 === t.keyCode && n.hide();
      });
    }, init: function init() {
      var i = this;this.options = t.$.extend({ target: i.element.is("a") ? i.element.attr("href") : !1, mode: "push" }, this.options), this.on("click", function (t) {
        t.preventDefault(), n.show(i.options.target, i.options);
      });
    } }), t.offcanvas = n;
}(UIkit), function (t) {
  "use strict";
  function i(i, e, n) {
    var o,
        s = t.$.Deferred(),
        a = i,
        r = i;return n[0] === e[0] ? (s.resolve(), s.promise()) : ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && (a = i[0], r = i[1] || i[0]), t.$body.css("overflow-x", "hidden"), o = function o() {
      e && e.hide().removeClass("uk-active " + r + " uk-animation-reverse"), n.addClass(a).one(t.support.animation.end, function () {
        setTimeout(function () {
          n.removeClass("" + a).css({ opacity: "", display: "" });
        }, 0), s.resolve(), t.$body.css("overflow-x", ""), e && e.css({ opacity: "", display: "" });
      }.bind(this)).show();
    }, n.css("animation-duration", this.options.duration + "ms"), e && e.length ? (e.css("animation-duration", this.options.duration + "ms"), e.css("display", "none").addClass(r + " uk-animation-reverse").one(t.support.animation.end, function () {
      o();
    }.bind(this)).css("display", "")) : (n.addClass("uk-active"), o()), s.promise());
  }var e;t.component("switcher", { defaults: { connect: !1, toggle: ">*", active: 0, animation: !1, duration: 200, swiping: !0 }, animating: !1, boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-switcher]", i).each(function () {
          var i = t.$(this);if (!i.data("switcher")) {
            t.switcher(i, t.Utils.options(i.attr("data-uk-switcher")));
          }
        });
      });
    }, init: function init() {
      var i = this;this.on("click.uk.switcher", this.options.toggle, function (t) {
        t.preventDefault(), i.show(this);
      }), this.options.connect && (this.connect = t.$(this.options.connect), this.connect.length && (this.connect.on("click.uk.switcher", "[data-uk-switcher-item]", function (e) {
        e.preventDefault();var n = t.$(this).attr("data-uk-switcher-item");if (i.index != n) switch (n) {case "next":case "previous":
            i.show(i.index + ("next" == n ? 1 : -1));break;default:
            i.show(parseInt(n, 10));}
      }), this.options.swiping && this.connect.on("swipeRight swipeLeft", function (t) {
        t.preventDefault(), window.getSelection().toString() || i.show(i.index + ("swipeLeft" == t.type ? 1 : -1));
      }), this.update()));
    }, update: function update() {
      this.connect.children().removeClass("uk-active").attr("aria-hidden", "true");var t = this.find(this.options.toggle),
          i = t.filter(".uk-active");if (i.length) this.show(i, !1);else {
        if (this.options.active === !1) return;i = t.eq(this.options.active), this.show(i.length ? i : t.eq(0), !1);
      }t.not(i).attr("aria-expanded", "false"), i.attr("aria-expanded", "true");
    }, show: function show(n, o) {
      if (!this.animating) {
        var s = this.find(this.options.toggle);isNaN(n) ? n = t.$(n) : (n = 0 > n ? s.length - 1 : n, n = s.eq(s[n] ? n : 0));var a = this,
            r = t.$(n),
            l = e[this.options.animation] || function (t, n) {
          if (!a.options.animation) return e.none.apply(a);var o = a.options.animation.split(",");return 1 == o.length && (o[1] = o[0]), o[0] = o[0].trim(), o[1] = o[1].trim(), i.apply(a, [o, t, n]);
        };o !== !1 && t.support.animation || (l = e.none), r.hasClass("uk-disabled") || (s.attr("aria-expanded", "false"), r.attr("aria-expanded", "true"), s.filter(".uk-active").removeClass("uk-active"), r.addClass("uk-active"), this.options.connect && this.connect.length && (this.index = this.find(this.options.toggle).index(r), -1 == this.index && (this.index = 0), this.connect.each(function () {
          var i = t.$(this),
              e = t.$(i.children()),
              n = t.$(e.filter(".uk-active")),
              o = t.$(e.eq(a.index));a.animating = !0, l.apply(a, [n, o]).then(function () {
            n.removeClass("uk-active"), o.addClass("uk-active"), n.attr("aria-hidden", "true"), o.attr("aria-hidden", "false"), t.Utils.checkDisplay(o, !0), a.animating = !1;
          });
        })), this.trigger("show.uk.switcher", [r]));
      }
    } }), e = { none: function none() {
      var i = t.$.Deferred();return i.resolve(), i.promise();
    }, fade: function fade(t, e) {
      return i.apply(this, ["uk-animation-fade", t, e]);
    }, "slide-bottom": function slideBottom(t, e) {
      return i.apply(this, ["uk-animation-slide-bottom", t, e]);
    }, "slide-top": function slideTop(t, e) {
      return i.apply(this, ["uk-animation-slide-top", t, e]);
    }, "slide-vertical": function slideVertical(t, e) {
      var n = ["uk-animation-slide-top", "uk-animation-slide-bottom"];return t && t.index() > e.index() && n.reverse(), i.apply(this, [n, t, e]);
    }, "slide-left": function slideLeft(t, e) {
      return i.apply(this, ["uk-animation-slide-left", t, e]);
    }, "slide-right": function slideRight(t, e) {
      return i.apply(this, ["uk-animation-slide-right", t, e]);
    }, "slide-horizontal": function slideHorizontal(t, e) {
      var n = ["uk-animation-slide-right", "uk-animation-slide-left"];return t && t.index() > e.index() && n.reverse(), i.apply(this, [n, t, e]);
    }, scale: function scale(t, e) {
      return i.apply(this, ["uk-animation-scale-up", t, e]);
    } }, t.switcher.animations = e;
}(UIkit), function (t) {
  "use strict";
  t.component("tab", { defaults: { target: ">li:not(.uk-tab-responsive, .uk-disabled)", connect: !1, active: 0, animation: !1, duration: 200, swiping: !0 }, boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-tab]", i).each(function () {
          var i = t.$(this);if (!i.data("tab")) {
            t.tab(i, t.Utils.options(i.attr("data-uk-tab")));
          }
        });
      });
    }, init: function init() {
      var i = this;this.current = !1, this.on("click.uk.tab", this.options.target, function (e) {
        if (e.preventDefault(), !i.switcher || !i.switcher.animating) {
          var n = i.find(i.options.target).not(this);n.removeClass("uk-active").blur(), i.trigger("change.uk.tab", [t.$(this).addClass("uk-active"), i.current]), i.current = t.$(this), i.options.connect || (n.attr("aria-expanded", "false"), t.$(this).attr("aria-expanded", "true"));
        }
      }), this.options.connect && (this.connect = t.$(this.options.connect)), this.responsivetab = t.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>'), this.responsivetab.dropdown = this.responsivetab.find(".uk-dropdown"), this.responsivetab.lst = this.responsivetab.dropdown.find("ul"), this.responsivetab.caption = this.responsivetab.find("a:first"), this.element.hasClass("uk-tab-bottom") && this.responsivetab.dropdown.addClass("uk-dropdown-up"), this.responsivetab.lst.on("click.uk.tab", "a", function (e) {
        e.preventDefault(), e.stopPropagation();var n = t.$(this);i.element.children("li:not(.uk-tab-responsive)").eq(n.data("index")).trigger("click");
      }), this.on("show.uk.switcher change.uk.tab", function (t, e) {
        i.responsivetab.caption.html(e.text());
      }), this.element.append(this.responsivetab), this.options.connect && (this.switcher = t.switcher(this.element, { toggle: ">li:not(.uk-tab-responsive)", connect: this.options.connect, active: this.options.active, animation: this.options.animation, duration: this.options.duration, swiping: this.options.swiping })), t.dropdown(this.responsivetab, { mode: "click", preventflip: "y" }), i.trigger("change.uk.tab", [this.element.find(this.options.target).not(".uk-tab-responsive").filter(".uk-active")]), this.check(), t.$win.on("resize orientationchange", t.Utils.debounce(function () {
        i.element.is(":visible") && i.check();
      }, 100)), this.on("display.uk.check", function () {
        i.element.is(":visible") && i.check();
      });
    }, check: function check() {
      var i = this.element.children("li:not(.uk-tab-responsive)").removeClass("uk-hidden");if (!i.length) return this.responsivetab.addClass("uk-hidden"), void 0;var e,
          n,
          o,
          s = i.eq(0).offset().top + Math.ceil(i.eq(0).height() / 2),
          a = !1;if (this.responsivetab.lst.empty(), i.each(function () {
        t.$(this).offset().top > s && (a = !0);
      }), a) for (var r = 0; r < i.length; r++) {
        e = t.$(i.eq(r)), n = e.find("a"), "none" == e.css("float") || e.attr("uk-dropdown") || (e.hasClass("uk-disabled") || (o = t.$(e[0].outerHTML), o.find("a").data("index", r), this.responsivetab.lst.append(o)), e.addClass("uk-hidden"));
      }this.responsivetab[this.responsivetab.lst.children("li").length ? "removeClass" : "addClass"]("uk-hidden");
    } });
}(UIkit), function (t) {
  "use strict";
  t.component("cover", { defaults: { automute: !0 }, boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-cover]", i).each(function () {
          var i = t.$(this);if (!i.data("cover")) {
            t.cover(i, t.Utils.options(i.attr("data-uk-cover")));
          }
        });
      });
    }, init: function init() {
      if (this.parent = this.element.parent(), t.$win.on("load resize orientationchange", t.Utils.debounce(function () {
        this.check();
      }.bind(this), 100)), this.on("display.uk.check", function () {
        this.element.is(":visible") && this.check();
      }.bind(this)), this.check(), this.element.is("iframe") && this.options.automute) {
        var i = this.element.attr("src");this.element.attr("src", "").on("load", function () {
          this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}', "*");
        }).attr("src", [i, i.indexOf("?") > -1 ? "&" : "?", "enablejsapi=1&api=1"].join(""));
      }
    }, check: function check() {
      this.element.css({ width: "", height: "" }), this.dimension = { w: this.element.width(), h: this.element.height() }, this.element.attr("width") && !isNaN(this.element.attr("width")) && (this.dimension.w = this.element.attr("width")), this.element.attr("height") && !isNaN(this.element.attr("height")) && (this.dimension.h = this.element.attr("height")), this.ratio = this.dimension.w / this.dimension.h;var t,
          i,
          e = this.parent.width(),
          n = this.parent.height();e / this.ratio < n ? (t = Math.ceil(n * this.ratio), i = n) : (t = e, i = Math.ceil(e / this.ratio)), this.element.css({ width: t, height: i });
    } });
}(UIkit);
"use strict";

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (t) {
  var e;window.UIkit && (e = t(UIkit)), "function" == typeof define && define.amd && define("uikit-notify", ["uikit"], function () {
    return e || t(UIkit);
  });
}(function (t) {
  "use strict";
  var e = {},
      i = {},
      s = function s(e) {
    return "string" == t.$.type(e) && (e = { message: e }), arguments[1] && (e = t.$.extend(e, "string" == t.$.type(arguments[1]) ? { status: arguments[1] } : arguments[1])), new n(e).show();
  },
      o = function o(t, e) {
    var s;if (t) for (s in i) {
      t === i[s].group && i[s].close(e);
    } else for (s in i) {
      i[s].close(e);
    }
  },
      n = function n(s) {
    this.options = t.$.extend({}, n.defaults, s), this.uuid = t.Utils.uid("notifymsg"), this.element = t.$(['<div class="uk-notify-message">', '<a class="uk-close"></a>', "<div></div>", "</div>"].join("")).data("notifyMessage", this), this.content(this.options.message), this.options.status && (this.element.addClass("uk-notify-message-" + this.options.status), this.currentstatus = this.options.status), this.group = this.options.group, i[this.uuid] = this, e[this.options.pos] || (e[this.options.pos] = t.$('<div class="uk-notify uk-notify-' + this.options.pos + '"></div>').appendTo("body").on("click", ".uk-notify-message", function () {
      var e = t.$(this).data("notifyMessage");e.element.trigger("manualclose.uk.notify", [e]), e.close();
    }));
  };return t.$.extend(n.prototype, { uuid: !1, element: !1, timout: !1, currentstatus: "", group: !1, show: function show() {
      if (!this.element.is(":visible")) {
        var t = this;e[this.options.pos].show().prepend(this.element);var i = parseInt(this.element.css("margin-bottom"), 10);return this.element.css({ opacity: 0, marginTop: -1 * this.element.outerHeight(), marginBottom: 0 }).animate({ opacity: 1, marginTop: 0, marginBottom: i }, function () {
          if (t.options.timeout) {
            var e = function e() {
              t.close();
            };t.timeout = setTimeout(e, t.options.timeout), t.element.hover(function () {
              clearTimeout(t.timeout);
            }, function () {
              t.timeout = setTimeout(e, t.options.timeout);
            });
          }
        }), this;
      }
    }, close: function close(t) {
      var s = this,
          o = function o() {
        s.element.remove(), e[s.options.pos].children().length || e[s.options.pos].hide(), s.options.onClose.apply(s, []), s.element.trigger("close.uk.notify", [s]), delete i[s.uuid];
      };this.timeout && clearTimeout(this.timeout), t ? o() : this.element.animate({ opacity: 0, marginTop: -1 * this.element.outerHeight(), marginBottom: 0 }, function () {
        o();
      });
    }, content: function content(t) {
      var e = this.element.find(">div");return t ? (e.html(t), this) : e.html();
    }, status: function status(t) {
      return t ? (this.element.removeClass("uk-notify-message-" + this.currentstatus).addClass("uk-notify-message-" + t), this.currentstatus = t, this) : this.currentstatus;
    } }), n.defaults = { message: "", status: "", timeout: 5e3, group: null, pos: "top-center", onClose: function onClose() {} }, t.notify = s, t.notify.message = n, t.notify.closeAll = o, s;
});
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! ngstorage 0.3.10 | Copyright (c) 2015 Gias Kay Lee | MIT License */!function (a, b) {
  "use strict";
  "function" == typeof define && define.amd ? define(["angular"], b) : a.hasOwnProperty("angular") ? b(a.angular) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && (module.exports = b(require("angular")));
}(undefined, function (a) {
  "use strict";
  function b(b) {
    return function () {
      var c = "ngStorage-";this.setKeyPrefix = function (a) {
        if ("string" != typeof a) throw new TypeError("[ngStorage] - " + b + "Provider.setKeyPrefix() expects a String.");c = a;
      };var d = a.toJson,
          e = a.fromJson;this.setSerializer = function (a) {
        if ("function" != typeof a) throw new TypeError("[ngStorage] - " + b + "Provider.setSerializer expects a function.");d = a;
      }, this.setDeserializer = function (a) {
        if ("function" != typeof a) throw new TypeError("[ngStorage] - " + b + "Provider.setDeserializer expects a function.");e = a;
      }, this.get = function (a) {
        return e(window[b].getItem(c + a));
      }, this.set = function (a, e) {
        return window[b].setItem(c + a, d(e));
      }, this.$get = ["$rootScope", "$window", "$log", "$timeout", "$document", function (f, g, h, i, j) {
        function k(a) {
          var b;try {
            b = g[a];
          } catch (c) {
            b = !1;
          }if (b && "localStorage" === a) {
            var d = "__" + Math.round(1e7 * Math.random());try {
              localStorage.setItem(d, d), localStorage.removeItem(d);
            } catch (c) {
              b = !1;
            }
          }return b;
        }var l,
            m,
            n = c.length,
            o = k(b) || (h.warn("This browser does not support Web Storage!"), { setItem: a.noop, getItem: a.noop, removeItem: a.noop }),
            p = { $default: function $default(b) {
            for (var c in b) {
              a.isDefined(p[c]) || (p[c] = a.copy(b[c]));
            }return p.$sync(), p;
          }, $reset: function $reset(a) {
            for (var b in p) {
              "$" === b[0] || delete p[b] && o.removeItem(c + b);
            }return p.$default(a);
          }, $sync: function $sync() {
            for (var a, b = 0, d = o.length; d > b; b++) {
              (a = o.key(b)) && c === a.slice(0, n) && (p[a.slice(n)] = e(o.getItem(a)));
            }
          }, $apply: function $apply() {
            var b;if (m = null, !a.equals(p, l)) {
              b = a.copy(l), a.forEach(p, function (e, f) {
                a.isDefined(e) && "$" !== f[0] && (o.setItem(c + f, d(e)), delete b[f]);
              });for (var e in b) {
                o.removeItem(c + e);
              }l = a.copy(p);
            }
          } };return p.$sync(), l = a.copy(p), f.$watch(function () {
          m || (m = i(p.$apply, 100, !1));
        }), g.addEventListener && g.addEventListener("storage", function (b) {
          if (b.key) {
            var d = j[0];d.hasFocus && d.hasFocus() || c !== b.key.slice(0, n) || (b.newValue ? p[b.key.slice(n)] = e(b.newValue) : delete p[b.key.slice(n)], l = a.copy(p), f.$apply());
          }
        }), g.addEventListener && g.addEventListener("beforeunload", function () {
          p.$apply();
        }), p;
      }];
    };
  }return a = a && a.module ? a : window.angular, a.module("ngStorage", []).provider("$localStorage", b("localStorage")).provider("$sessionStorage", b("sessionStorage"));
});
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

angular.module("jsonFormatter", ["RecursionHelper"]).provider("JSONFormatterConfig", function () {
  var n = !1,
      e = 100,
      t = 5;return { get hoverPreviewEnabled() {
      return n;
    }, set hoverPreviewEnabled(e) {
      n = !!e;
    }, get hoverPreviewArrayCount() {
      return e;
    }, set hoverPreviewArrayCount(n) {
      e = parseInt(n, 10);
    }, get hoverPreviewFieldCount() {
      return t;
    }, set hoverPreviewFieldCount(n) {
      t = parseInt(n, 10);
    }, $get: function $get() {
      return { hoverPreviewEnabled: n, hoverPreviewArrayCount: e, hoverPreviewFieldCount: t };
    } };
}).directive("jsonFormatter", ["RecursionHelper", "JSONFormatterConfig", function (n, e) {
  function t(n) {
    return n.replace('"', '"');
  }function r(n) {
    if (void 0 === n) return "";if (null === n) return "Object";if ("object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && !n.constructor) return "Object";var e = /function (.{1,})\(/,
        t = e.exec(n.constructor.toString());return t && t.length > 1 ? t[1] : "";
  }function o(n) {
    return null === n ? "null" : typeof n === "undefined" ? "undefined" : _typeof(n);
  }function s(n, e) {
    var r = o(n);return "null" === r || "undefined" === r ? r : ("string" === r && (e = '"' + t(e) + '"'), "function" === r ? n.toString().replace(/[\r\n]/g, "").replace(/\{.*\}/, "") + "{…}" : e);
  }function i(n) {
    var e = "";return angular.isObject(n) ? (e = r(n), angular.isArray(n) && (e += "[" + n.length + "]")) : e = s(n, n), e;
  }function a(n) {
    n.isArray = function () {
      return angular.isArray(n.json);
    }, n.isObject = function () {
      return angular.isObject(n.json);
    }, n.getKeys = function () {
      return n.isObject() ? Object.keys(n.json).map(function (n) {
        return "" === n ? '""' : n;
      }) : void 0;
    }, n.type = o(n.json), n.hasKey = "undefined" != typeof n.key, n.getConstructorName = function () {
      return r(n.json);
    }, "string" === n.type && ("Invalid Date" !== new Date(n.json).toString() && (n.isDate = !0), 0 === n.json.indexOf("http") && (n.isUrl = !0)), n.isEmptyObject = function () {
      return n.getKeys() && !n.getKeys().length && n.isOpen && !n.isArray();
    }, n.isOpen = !!n.open, n.toggleOpen = function () {
      n.isOpen = !n.isOpen;
    }, n.childrenOpen = function () {
      return n.open > 1 ? n.open - 1 : 0;
    }, n.openLink = function (e) {
      e && (window.location.href = n.json);
    }, n.parseValue = function (e) {
      return s(n.json, e);
    }, n.showThumbnail = function () {
      return !!e.hoverPreviewEnabled && n.isObject() && !n.isOpen;
    }, n.getThumbnail = function () {
      if (n.isArray()) return n.json.length > e.hoverPreviewArrayCount ? "Array[" + n.json.length + "]" : "[" + n.json.map(i).join(", ") + "]";var t = n.getKeys(),
          r = t.slice(0, e.hoverPreviewFieldCount),
          o = r.map(function (e) {
        return e + ":" + i(n.json[e]);
      }),
          s = t.length >= 5 ? "…" : "";return "{" + o.join(", ") + s + "}";
    };
  }return { templateUrl: "json-formatter.html", restrict: "E", replace: !0, scope: { json: "=", key: "=", open: "=" }, compile: function compile(e) {
      return n.compile(e, a);
    } };
}]), "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && (module.exports = "jsonFormatter"), angular.module("RecursionHelper", []).factory("RecursionHelper", ["$compile", function (n) {
  return { compile: function compile(e, t) {
      angular.isFunction(t) && (t = { post: t });var r,
          o = e.contents().remove();return { pre: t && t.pre ? t.pre : null, post: function post(e, s) {
          r || (r = n(o)), r(e, function (n) {
            s.append(n);
          }), t && t.post && t.post.apply(null, arguments);
        } };
    } };
}]), angular.module("jsonFormatter").run(["$templateCache", function (n) {
  n.put("json-formatter.html", '<div ng-init="isOpen = open && open > 0" class="json-formatter-row"><a ng-click="toggleOpen()"><span class="toggler {{isOpen ? \'open\' : \'\'}}" ng-if="isObject()"></span> <span class="key" ng-if="hasKey"><span class="key-text">{{key}}</span><span class="colon">:</span></span> <span class="value"><span ng-if="isObject()"><span class="constructor-name">{{getConstructorName(json)}}</span> <span ng-if="isArray()"><span class="bracket">[</span><span class="number">{{json.length}}</span><span class="bracket">]</span></span></span> <span ng-if="!isObject()" ng-click="openLink(isUrl)" class="{{type}}" ng-class="{date: isDate, url: isUrl}">{{parseValue(json)}}</span></span> <span ng-if="showThumbnail()" class="thumbnail-text">{{getThumbnail()}}</span></a><div class="children" ng-if="getKeys().length && isOpen"><json-formatter ng-repeat="key in getKeys() track by $index" json="json[key]" key="key" open="childrenOpen()"></json-formatter></div><div class="children empty object" ng-if="isEmptyObject()"></div><div class="children empty array" ng-if="getKeys() && !getKeys().length && isOpen && isArray()"></div></div>');
}]);
'use strict';

/**
 * @framify-paginate v.1.0.0
 */
(function () {

    /**
     * Config
     */
    var moduleName = 'framify-paginate';
    var DEFAULT_ID = '__default';

    /**
     * Module
     */
    var module;
    try {
        module = angular.module(moduleName);
    } catch (err) {
        // named module does not exist, so create one
        module = angular.module(moduleName, []);
    }

    module.directive('dirPaginate', ['$compile', '$parse', 'paginationService', dirPaginateDirective]).directive('dirPaginateNoCompile', noCompileDirective).directive('dirPaginationControls', ['paginationService', 'paginationTemplate', dirPaginationControlsDirective]).filter('itemsPerPage', ['paginationService', itemsPerPageFilter]).service('paginationService', paginationService).provider('paginationTemplate', paginationTemplateProvider).run(['$templateCache', dirPaginationControlsTemplateInstaller]);

    function dirPaginateDirective($compile, $parse, paginationService) {

        return {
            terminal: true,
            multiElement: true,
            compile: dirPaginationCompileFn
        };

        function dirPaginationCompileFn(tElement, tAttrs) {

            var expression = tAttrs.dirPaginate;
            // regex taken directly from https://github.com/angular/angular.js/blob/master/src/ng/directive/ngRepeat.js#L211
            var match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);

            var filterPattern = /\|\s*itemsPerPage\s*:[^|]*/;
            if (match[2].match(filterPattern) === null) {
                throw 'pagination directive: the \'itemsPerPage\' filter must be set.';
            }
            var itemsPerPageFilterRemoved = match[2].replace(filterPattern, '');
            var collectionGetter = $parse(itemsPerPageFilterRemoved);

            addNoCompileAttributes(tElement);

            // If any value is specified for paginationId, we register the un-evaluated expression at this stage for the benefit of any
            // dir-pagination-controls directives that may be looking for this ID.
            var rawId = tAttrs.paginationId || DEFAULT_ID;
            paginationService.registerInstance(rawId);

            return function dirPaginationLinkFn(scope, element, attrs) {

                // Now that we have access to the `scope` we can interpolate any expression given in the paginationId attribute and
                // potentially register a new ID if it evaluates to a different value than the rawId.
                var paginationId = $parse(attrs.paginationId)(scope) || attrs.paginationId || DEFAULT_ID;
                paginationService.registerInstance(paginationId);

                var repeatExpression = getRepeatExpression(expression, paginationId);
                addNgRepeatToElement(element, attrs, repeatExpression);

                removeTemporaryAttributes(element);
                var compiled = $compile(element);

                var currentPageGetter = makeCurrentPageGetterFn(scope, attrs, paginationId);
                paginationService.setCurrentPageParser(paginationId, currentPageGetter, scope);

                if (typeof attrs.totalItems !== 'undefined') {
                    paginationService.setAsyncModeTrue(paginationId);
                    scope.$watch(function () {
                        return $parse(attrs.totalItems)(scope);
                    }, function (result) {
                        if (0 <= result) {
                            paginationService.setCollectionLength(paginationId, result);
                        }
                    });
                } else {
                    scope.$watchCollection(function () {
                        return collectionGetter(scope);
                    }, function (collection) {
                        if (collection) {
                            paginationService.setCollectionLength(paginationId, collection.length);
                        }
                    });
                }

                // Delegate to the link function returned by the new compilation of the ng-repeat
                compiled(scope);
            };
        }

        /**
         * If a pagination id has been specified, we need to check that it is present as the second argument passed to
         * the itemsPerPage filter. If it is not there, we add it and return the modified expression.
         *
         * @param expression
         * @param paginationId
         * @returns {*}
         */
        function getRepeatExpression(expression, paginationId) {
            var repeatExpression,
                idDefinedInFilter = !!expression.match(/(\|\s*itemsPerPage\s*:[^|]*:[^|]*)/);

            if (paginationId !== DEFAULT_ID && !idDefinedInFilter) {
                repeatExpression = expression.replace(/(\|\s*itemsPerPage\s*:[^|]*)/, "$1 : '" + paginationId + "'");
            } else {
                repeatExpression = expression;
            }

            return repeatExpression;
        }

        /**
         * Adds the ng-repeat directive to the element. In the case of multi-element (-start, -end) it adds the
         * appropriate multi-element ng-repeat to the first and last element in the range.
         * @param element
         * @param attrs
         * @param repeatExpression
         */
        function addNgRepeatToElement(element, attrs, repeatExpression) {
            if (element[0].hasAttribute('dir-paginate-start') || element[0].hasAttribute('data-dir-paginate-start')) {
                // using multiElement mode (dir-paginate-start, dir-paginate-end)
                attrs.$set('ngRepeatStart', repeatExpression);
                element.eq(element.length - 1).attr('ng-repeat-end', true);
            } else {
                attrs.$set('ngRepeat', repeatExpression);
            }
        }

        /**
         * Adds the dir-paginate-no-compile directive to each element in the tElement range.
         * @param tElement
         */
        function addNoCompileAttributes(tElement) {
            angular.forEach(tElement, function (el) {
                if (el.nodeType === Node.ELEMENT_NODE) {
                    angular.element(el).attr('dir-paginate-no-compile', true);
                }
            });
        }

        /**
         * Removes the variations on dir-paginate (data-, -start, -end) and the dir-paginate-no-compile directives.
         * @param element
         */
        function removeTemporaryAttributes(element) {
            angular.forEach(element, function (el) {
                if (el.nodeType === Node.ELEMENT_NODE) {
                    angular.element(el).removeAttr('dir-paginate-no-compile');
                }
            });
            element.eq(0).removeAttr('dir-paginate-start').removeAttr('dir-paginate').removeAttr('data-dir-paginate-start').removeAttr('data-dir-paginate');
            element.eq(element.length - 1).removeAttr('dir-paginate-end').removeAttr('data-dir-paginate-end');
        }

        /**
         * Creates a getter function for the current-page attribute, using the expression provided or a default value if
         * no current-page expression was specified.
         *
         * @param scope
         * @param attrs
         * @param paginationId
         * @returns {*}
         */
        function makeCurrentPageGetterFn(scope, attrs, paginationId) {
            var currentPageGetter;
            if (attrs.currentPage) {
                currentPageGetter = $parse(attrs.currentPage);
            } else {
                // if the current-page attribute was not set, we'll make our own
                var defaultCurrentPage = paginationId + '__currentPage';
                scope[defaultCurrentPage] = 1;
                currentPageGetter = $parse(defaultCurrentPage);
            }
            return currentPageGetter;
        }
    }

    /**
     * This is a helper directive that allows correct compilation when in multi-element mode (ie dir-paginate-start, dir-paginate-end).
     * It is dynamically added to all elements in the dir-paginate compile function, and it prevents further compilation of
     * any inner directives. It is then removed in the link function, and all inner directives are then manually compiled.
     */
    function noCompileDirective() {
        return {
            priority: 5000,
            terminal: true
        };
    }

    function dirPaginationControlsTemplateInstaller($templateCache) {
        $templateCache.put('framify-paginate.template', '<ul class="pagination" ng-if="1 < pages.length"><li ng-if="boundaryLinks" ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(1)">&laquo;</a></li><li ng-if="directionLinks" ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(pagination.current - 1)">&lsaquo;</a></li><li ng-repeat="pageNumber in pages track by $index" ng-class="{ active : pagination.current == pageNumber, disabled : pageNumber == \'...\' }"><a href="" ng-click="setCurrent(pageNumber)">{{ pageNumber }}</a></li><li ng-if="directionLinks" ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.current + 1)">&rsaquo;</a></li><li ng-if="boundaryLinks"  ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.last)">&raquo;</a></li></ul>');
    }

    function dirPaginationControlsDirective(paginationService, paginationTemplate) {

        var numberRegex = /^\d+$/;

        return {
            restrict: 'AE',
            templateUrl: function templateUrl(elem, attrs) {
                return attrs.templateUrl || paginationTemplate.getPath();
            },
            scope: {
                maxSize: '=?',
                onPageChange: '&?',
                paginationId: '=?'
            },
            link: dirPaginationControlsLinkFn
        };

        function dirPaginationControlsLinkFn(scope, element, attrs) {

            // rawId is the un-interpolated value of the pagination-id attribute. This is only important when the corresponding dir-paginate directive has
            // not yet been linked (e.g. if it is inside an ng-if block), and in that case it prevents this controls directive from assuming that there is
            // no corresponding dir-paginate directive and wrongly throwing an exception.
            var rawId = attrs.paginationId || DEFAULT_ID;
            var paginationId = scope.paginationId || attrs.paginationId || DEFAULT_ID;

            if (!paginationService.isRegistered(paginationId) && !paginationService.isRegistered(rawId)) {
                var idMessage = paginationId !== DEFAULT_ID ? ' (id: ' + paginationId + ') ' : ' ';
                throw 'pagination directive: the pagination controls' + idMessage + 'cannot be used without the corresponding pagination directive.';
            }

            if (!scope.maxSize) {
                scope.maxSize = 9;
            }
            scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : true;
            scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : false;

            var paginationRange = Math.max(scope.maxSize, 5);
            scope.pages = [];
            scope.pagination = {
                last: 1,
                current: 1
            };
            scope.range = {
                lower: 1,
                upper: 1,
                total: 1
            };

            scope.$watch(function () {
                return (paginationService.getCollectionLength(paginationId) + 1) * paginationService.getItemsPerPage(paginationId);
            }, function (length) {
                if (0 < length) {
                    generatePagination();
                }
            });

            scope.$watch(function () {
                return paginationService.getItemsPerPage(paginationId);
            }, function (current, previous) {
                if (current != previous && typeof previous !== 'undefined') {
                    goToPage(scope.pagination.current);
                }
            });

            scope.$watch(function () {
                return paginationService.getCurrentPage(paginationId);
            }, function (currentPage, previousPage) {
                if (currentPage != previousPage) {
                    goToPage(currentPage);
                }
            });

            scope.setCurrent = function (num) {
                if (isValidPageNumber(num)) {
                    num = parseInt(num, 10);
                    paginationService.setCurrentPage(paginationId, num);
                }
            };

            function goToPage(num) {
                if (isValidPageNumber(num)) {
                    scope.pages = generatePagesArray(num, paginationService.getCollectionLength(paginationId), paginationService.getItemsPerPage(paginationId), paginationRange);
                    scope.pagination.current = num;
                    updateRangeValues();

                    // if a callback has been set, then call it with the page number as an argument
                    if (scope.onPageChange) {
                        scope.onPageChange({ newPageNumber: num });
                    }
                }
            }

            function generatePagination() {
                var page = parseInt(paginationService.getCurrentPage(paginationId)) || 1;

                scope.pages = generatePagesArray(page, paginationService.getCollectionLength(paginationId), paginationService.getItemsPerPage(paginationId), paginationRange);
                scope.pagination.current = page;
                scope.pagination.last = scope.pages[scope.pages.length - 1];
                if (scope.pagination.last < scope.pagination.current) {
                    scope.setCurrent(scope.pagination.last);
                } else {
                    updateRangeValues();
                }
            }

            /**
             * This function updates the values (lower, upper, total) of the `scope.range` object, which can be used in the pagination
             * template to display the current page range, e.g. "showing 21 - 40 of 144 results";
             */
            function updateRangeValues() {
                var currentPage = paginationService.getCurrentPage(paginationId),
                    itemsPerPage = paginationService.getItemsPerPage(paginationId),
                    totalItems = paginationService.getCollectionLength(paginationId);

                scope.range.lower = (currentPage - 1) * itemsPerPage + 1;
                scope.range.upper = Math.min(currentPage * itemsPerPage, totalItems);
                scope.range.total = totalItems;
            }

            function isValidPageNumber(num) {
                return numberRegex.test(num) && 0 < num && num <= scope.pagination.last;
            }
        }

        /**
         * Generate an array of page numbers (or the '...' string) which is used in an ng-repeat to generate the
         * links used in pagination
         *
         * @param currentPage
         * @param rowsPerPage
         * @param paginationRange
         * @param collectionLength
         * @returns {Array}
         */
        function generatePagesArray(currentPage, collectionLength, rowsPerPage, paginationRange) {
            var pages = [];
            var totalPages = Math.ceil(collectionLength / rowsPerPage);
            var halfWay = Math.ceil(paginationRange / 2);
            var position;

            if (currentPage <= halfWay) {
                position = 'start';
            } else if (totalPages - halfWay < currentPage) {
                position = 'end';
            } else {
                position = 'middle';
            }

            var ellipsesNeeded = paginationRange < totalPages;
            var i = 1;
            while (i <= totalPages && i <= paginationRange) {
                var pageNumber = calculatePageNumber(i, currentPage, paginationRange, totalPages);

                var openingEllipsesNeeded = i === 2 && (position === 'middle' || position === 'end');
                var closingEllipsesNeeded = i === paginationRange - 1 && (position === 'middle' || position === 'start');
                if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                    pages.push('...');
                } else {
                    pages.push(pageNumber);
                }
                i++;
            }
            return pages;
        }

        /**
         * Given the position in the sequence of pagination links [i], figure out what page number corresponds to that position.
         *
         * @param i
         * @param currentPage
         * @param paginationRange
         * @param totalPages
         * @returns {*}
         */
        function calculatePageNumber(i, currentPage, paginationRange, totalPages) {
            var halfWay = Math.ceil(paginationRange / 2);
            if (i === paginationRange) {
                return totalPages;
            } else if (i === 1) {
                return i;
            } else if (paginationRange < totalPages) {
                if (totalPages - halfWay < currentPage) {
                    return totalPages - paginationRange + i;
                } else if (halfWay < currentPage) {
                    return currentPage - halfWay + i;
                } else {
                    return i;
                }
            } else {
                return i;
            }
        }
    }

    /**
     * This filter slices the collection into pages based on the current page number and number of items per page.
     * @param paginationService
     * @returns {Function}
     */
    function itemsPerPageFilter(paginationService) {

        return function (collection, itemsPerPage, paginationId) {
            if (typeof paginationId === 'undefined') {
                paginationId = DEFAULT_ID;
            }
            if (!paginationService.isRegistered(paginationId)) {
                throw 'pagination directive: the itemsPerPage id argument (id: ' + paginationId + ') does not match a registered pagination-id.';
            }
            var end;
            var start;
            if (collection instanceof Array) {
                itemsPerPage = parseInt(itemsPerPage) || 9999999999;
                if (paginationService.isAsyncMode(paginationId)) {
                    start = 0;
                } else {
                    start = (paginationService.getCurrentPage(paginationId) - 1) * itemsPerPage;
                }
                end = start + itemsPerPage;
                paginationService.setItemsPerPage(paginationId, itemsPerPage);

                return collection.slice(start, end);
            } else {
                return collection;
            }
        };
    }

    /**
     * This service allows the various parts of the module to communicate and stay in sync.
     */
    function paginationService() {

        var instances = {};
        var lastRegisteredInstance;

        this.registerInstance = function (instanceId) {
            if (typeof instances[instanceId] === 'undefined') {
                instances[instanceId] = {
                    asyncMode: false
                };
                lastRegisteredInstance = instanceId;
            }
        };

        this.isRegistered = function (instanceId) {
            return typeof instances[instanceId] !== 'undefined';
        };

        this.getLastInstanceId = function () {
            return lastRegisteredInstance;
        };

        this.setCurrentPageParser = function (instanceId, val, scope) {
            instances[instanceId].currentPageParser = val;
            instances[instanceId].context = scope;
        };
        this.setCurrentPage = function (instanceId, val) {
            instances[instanceId].currentPageParser.assign(instances[instanceId].context, val);
        };
        this.getCurrentPage = function (instanceId) {
            var parser = instances[instanceId].currentPageParser;
            return parser ? parser(instances[instanceId].context) : 1;
        };

        this.setItemsPerPage = function (instanceId, val) {
            instances[instanceId].itemsPerPage = val;
        };
        this.getItemsPerPage = function (instanceId) {
            return instances[instanceId].itemsPerPage;
        };

        this.setCollectionLength = function (instanceId, val) {
            instances[instanceId].collectionLength = val;
        };
        this.getCollectionLength = function (instanceId) {
            return instances[instanceId].collectionLength;
        };

        this.setAsyncModeTrue = function (instanceId) {
            instances[instanceId].asyncMode = true;
        };

        this.isAsyncMode = function (instanceId) {
            return instances[instanceId].asyncMode;
        };
    }

    /**
     * This provider allows global configuration of the template path used by the dir-pagination-controls directive.
     */
    function paginationTemplateProvider() {

        var templatePath = 'framify-paginate.template';

        this.setPath = function (path) {
            templatePath = path;
        };

        this.$get = function () {
            return {
                getPath: function getPath() {
                    return templatePath;
                }
            };
        };
    }
})();
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function clone(t) {
  if (null == t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t))) return t;var e = t.constructor();for (var a in t) {
    t.hasOwnProperty(a) && (e[a] = t[a]);
  }return e;
}var dateFormat = function () {
  var t = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
      e = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
      a = /[^-+\dA-Z]/g,
      r = function r(t, e) {
    for (t = String(t), e = e || 2; t.length < e;) {
      t = "0" + t;
    }return t;
  };return function (n, m, o) {
    var y = dateFormat;if (1 != arguments.length || "[object String]" != Object.prototype.toString.call(n) || /\d/.test(n) || (m = n, n = void 0), n = n ? new Date(n) : new Date(), isNaN(n)) throw SyntaxError("invalid date");m = String(y.masks[m] || m || y.masks["default"]), "UTC:" == m.slice(0, 4) && (m = m.slice(4), o = !0);var d = o ? "getUTC" : "get",
        i = n[d + "Date"](),
        s = n[d + "Day"](),
        u = n[d + "Month"](),
        M = n[d + "FullYear"](),
        h = n[d + "Hours"](),
        l = n[d + "Minutes"](),
        c = n[d + "Seconds"](),
        T = n[d + "Milliseconds"](),
        g = o ? 0 : n.getTimezoneOffset(),
        f = { d: i, dd: r(i), ddd: y.i18n.dayNames[s], dddd: y.i18n.dayNames[s + 7], m: u + 1, mm: r(u + 1), mmm: y.i18n.monthNames[u], mmmm: y.i18n.monthNames[u + 12], yy: String(M).slice(2), yyyy: M, h: h % 12 || 12, hh: r(h % 12 || 12), H: h, HH: r(h), M: l, MM: r(l), s: c, ss: r(c), l: r(T, 3), L: r(T > 99 ? Math.round(T / 10) : T), t: 12 > h ? "a" : "p", tt: 12 > h ? "am" : "pm", T: 12 > h ? "A" : "P", TT: 12 > h ? "AM" : "PM", Z: o ? "UTC" : (String(n).match(e) || [""]).pop().replace(a, ""), o: (g > 0 ? "-" : "+") + r(100 * Math.floor(Math.abs(g) / 60) + Math.abs(g) % 60, 4), S: ["th", "st", "nd", "rd"][i % 10 > 3 ? 0 : (i % 100 - i % 10 != 10) * i % 10] };return m.replace(t, function (t) {
      return t in f ? f[t] : t.slice(1, t.length - 1);
    });
  };
}();dateFormat.masks = { "default": "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", monthNum: "mm", year: "yyyy", month: "mmmm", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:ss", dateTime: "dd-mm-yyyy HH:MM", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'" }, dateFormat.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, Date.prototype.format = function (t, e) {
  return dateFormat(this, t, e);
}, Date.prototype.diff = function (t) {
  return Math.round(Math.abs((this.getTime() - new Date().getTime()) / 864e5));
}, Date.prototype.work = function () {
  var t = new Date(),
      e = this;if (e > t) return 0;var a = 864e5;e.setHours(0, 0, 0, 1), t.setHours(23, 59, 59, 999);var r = t - e,
      n = Math.ceil(r / a),
      m = Math.floor(n / 7);n -= 2 * m;var o = e.getDay(),
      y = t.getDay();return o - y > 1 && (n -= 2), 0 == o && 6 != y && (n -= 1), 6 == y && 0 != o && (n -= 1), n;
};
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Socket.io v1.4.8
 */
!function (t) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = t();else if ("function" == typeof define && define.amd) define([], t);else {
    var e;e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.io = t();
  }
}(function () {
  var t;return function e(t, n, r) {
    function o(s, a) {
      if (!n[s]) {
        if (!t[s]) {
          var c = "function" == typeof require && require;if (!a && c) return c(s, !0);if (i) return i(s, !0);var p = new Error("Cannot find module '" + s + "'");throw p.code = "MODULE_NOT_FOUND", p;
        }var u = n[s] = { exports: {} };t[s][0].call(u.exports, function (e) {
          var n = t[s][1][e];return o(n ? n : e);
        }, u, u.exports, e, t, n, r);
      }return n[s].exports;
    }for (var i = "function" == typeof require && require, s = 0; s < r.length; s++) {
      o(r[s]);
    }return o;
  }({ 1: [function (t, e, n) {
      function r(t, e) {
        "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (e = t, t = void 0), e = e || {};var n,
            r = o(t),
            i = r.source,
            p = r.id,
            u = r.path,
            f = c[p] && u in c[p].nsps,
            h = e.forceNew || e["force new connection"] || !1 === e.multiplex || f;return h ? (a("ignoring socket cache for %s", i), n = s(i, e)) : (c[p] || (a("new io instance for %s", i), c[p] = s(i, e)), n = c[p]), n.socket(r.path);
      }var o = t("./url"),
          i = t("socket.io-parser"),
          s = t("./manager"),
          a = t("debug")("socket.io-client");e.exports = n = r;var c = n.managers = {};n.protocol = i.protocol, n.connect = r, n.Manager = t("./manager"), n.Socket = t("./socket");
    }, { "./manager": 2, "./socket": 4, "./url": 5, debug: 14, "socket.io-parser": 40 }], 2: [function (t, e, n) {
      function r(t, e) {
        return this instanceof r ? (t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (e = t, t = void 0), e = e || {}, e.path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new h({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [], this.encoder = new a.Encoder(), this.decoder = new a.Decoder(), this.autoConnect = e.autoConnect !== !1, void (this.autoConnect && this.open())) : new r(t, e);
      }var o = t("engine.io-client"),
          i = t("./socket"),
          s = t("component-emitter"),
          a = t("socket.io-parser"),
          c = t("./on"),
          p = t("component-bind"),
          u = t("debug")("socket.io-client:manager"),
          f = t("indexof"),
          h = t("backo2"),
          l = Object.prototype.hasOwnProperty;e.exports = r, r.prototype.emitAll = function () {
        this.emit.apply(this, arguments);for (var t in this.nsps) {
          l.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments);
        }
      }, r.prototype.updateSocketIds = function () {
        for (var t in this.nsps) {
          l.call(this.nsps, t) && (this.nsps[t].id = this.engine.id);
        }
      }, s(r.prototype), r.prototype.reconnection = function (t) {
        return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;
      }, r.prototype.reconnectionAttempts = function (t) {
        return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts;
      }, r.prototype.reconnectionDelay = function (t) {
        return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay;
      }, r.prototype.randomizationFactor = function (t) {
        return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor;
      }, r.prototype.reconnectionDelayMax = function (t) {
        return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax;
      }, r.prototype.timeout = function (t) {
        return arguments.length ? (this._timeout = t, this) : this._timeout;
      }, r.prototype.maybeReconnectOnOpen = function () {
        !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
      }, r.prototype.open = r.prototype.connect = function (t) {
        if (u("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;u("opening %s", this.uri), this.engine = o(this.uri, this.opts);var e = this.engine,
            n = this;this.readyState = "opening", this.skipReconnect = !1;var r = c(e, "open", function () {
          n.onopen(), t && t();
        }),
            i = c(e, "error", function (e) {
          if (u("connect_error"), n.cleanup(), n.readyState = "closed", n.emitAll("connect_error", e), t) {
            var r = new Error("Connection error");r.data = e, t(r);
          } else n.maybeReconnectOnOpen();
        });if (!1 !== this._timeout) {
          var s = this._timeout;u("connect attempt will timeout after %d", s);var a = setTimeout(function () {
            u("connect attempt timed out after %d", s), r.destroy(), e.close(), e.emit("error", "timeout"), n.emitAll("connect_timeout", s);
          }, s);this.subs.push({ destroy: function destroy() {
              clearTimeout(a);
            } });
        }return this.subs.push(r), this.subs.push(i), this;
      }, r.prototype.onopen = function () {
        u("open"), this.cleanup(), this.readyState = "open", this.emit("open");var t = this.engine;this.subs.push(c(t, "data", p(this, "ondata"))), this.subs.push(c(t, "ping", p(this, "onping"))), this.subs.push(c(t, "pong", p(this, "onpong"))), this.subs.push(c(t, "error", p(this, "onerror"))), this.subs.push(c(t, "close", p(this, "onclose"))), this.subs.push(c(this.decoder, "decoded", p(this, "ondecoded")));
      }, r.prototype.onping = function () {
        this.lastPing = new Date(), this.emitAll("ping");
      }, r.prototype.onpong = function () {
        this.emitAll("pong", new Date() - this.lastPing);
      }, r.prototype.ondata = function (t) {
        this.decoder.add(t);
      }, r.prototype.ondecoded = function (t) {
        this.emit("packet", t);
      }, r.prototype.onerror = function (t) {
        u("error", t), this.emitAll("error", t);
      }, r.prototype.socket = function (t) {
        function e() {
          ~f(r.connecting, n) || r.connecting.push(n);
        }var n = this.nsps[t];if (!n) {
          n = new i(this, t), this.nsps[t] = n;var r = this;n.on("connecting", e), n.on("connect", function () {
            n.id = r.engine.id;
          }), this.autoConnect && e();
        }return n;
      }, r.prototype.destroy = function (t) {
        var e = f(this.connecting, t);~e && this.connecting.splice(e, 1), this.connecting.length || this.close();
      }, r.prototype.packet = function (t) {
        u("writing packet %j", t);var e = this;e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t, function (n) {
          for (var r = 0; r < n.length; r++) {
            e.engine.write(n[r], t.options);
          }e.encoding = !1, e.processPacketQueue();
        }));
      }, r.prototype.processPacketQueue = function () {
        if (this.packetBuffer.length > 0 && !this.encoding) {
          var t = this.packetBuffer.shift();this.packet(t);
        }
      }, r.prototype.cleanup = function () {
        u("cleanup");for (var t; t = this.subs.shift();) {
          t.destroy();
        }this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy();
      }, r.prototype.close = r.prototype.disconnect = function () {
        u("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" == this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close();
      }, r.prototype.onclose = function (t) {
        u("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect();
      }, r.prototype.reconnect = function () {
        if (this.reconnecting || this.skipReconnect) return this;var t = this;if (this.backoff.attempts >= this._reconnectionAttempts) u("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;else {
          var e = this.backoff.duration();u("will wait %dms before reconnect attempt", e), this.reconnecting = !0;var n = setTimeout(function () {
            t.skipReconnect || (u("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open(function (e) {
              e ? (u("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (u("reconnect success"), t.onreconnect());
            }));
          }, e);this.subs.push({ destroy: function destroy() {
              clearTimeout(n);
            } });
        }
      }, r.prototype.onreconnect = function () {
        var t = this.backoff.attempts;this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t);
      };
    }, { "./on": 3, "./socket": 4, backo2: 8, "component-bind": 11, "component-emitter": 12, debug: 14, "engine.io-client": 16, indexof: 32, "socket.io-parser": 40 }], 3: [function (t, e, n) {
      function r(t, e, n) {
        return t.on(e, n), { destroy: function destroy() {
            t.removeListener(e, n);
          } };
      }e.exports = r;
    }, {}], 4: [function (t, e, n) {
      function r(t, e) {
        this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.io.autoConnect && this.open();
      }var o = t("socket.io-parser"),
          i = t("component-emitter"),
          s = t("to-array"),
          a = t("./on"),
          c = t("component-bind"),
          p = t("debug")("socket.io-client:socket"),
          u = t("has-binary");e.exports = n = r;var f = { connect: 1, connect_error: 1, connect_timeout: 1, connecting: 1, disconnect: 1, error: 1, reconnect: 1, reconnect_attempt: 1, reconnect_failed: 1, reconnect_error: 1, reconnecting: 1, ping: 1, pong: 1 },
          h = i.prototype.emit;i(r.prototype), r.prototype.subEvents = function () {
        if (!this.subs) {
          var t = this.io;this.subs = [a(t, "open", c(this, "onopen")), a(t, "packet", c(this, "onpacket")), a(t, "close", c(this, "onclose"))];
        }
      }, r.prototype.open = r.prototype.connect = function () {
        return this.connected ? this : (this.subEvents(), this.io.open(), "open" == this.io.readyState && this.onopen(), this.emit("connecting"), this);
      }, r.prototype.send = function () {
        var t = s(arguments);return t.unshift("message"), this.emit.apply(this, t), this;
      }, r.prototype.emit = function (t) {
        if (f.hasOwnProperty(t)) return h.apply(this, arguments), this;var e = s(arguments),
            n = o.EVENT;u(e) && (n = o.BINARY_EVENT);var r = { type: n, data: e };return r.options = {}, r.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (p("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), r.id = this.ids++), this.connected ? this.packet(r) : this.sendBuffer.push(r), delete this.flags, this;
      }, r.prototype.packet = function (t) {
        t.nsp = this.nsp, this.io.packet(t);
      }, r.prototype.onopen = function () {
        p("transport is open - connecting"), "/" != this.nsp && this.packet({ type: o.CONNECT });
      }, r.prototype.onclose = function (t) {
        p("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", t);
      }, r.prototype.onpacket = function (t) {
        if (t.nsp == this.nsp) switch (t.type) {case o.CONNECT:
            this.onconnect();break;case o.EVENT:
            this.onevent(t);break;case o.BINARY_EVENT:
            this.onevent(t);break;case o.ACK:
            this.onack(t);break;case o.BINARY_ACK:
            this.onack(t);break;case o.DISCONNECT:
            this.ondisconnect();break;case o.ERROR:
            this.emit("error", t.data);}
      }, r.prototype.onevent = function (t) {
        var e = t.data || [];p("emitting event %j", e), null != t.id && (p("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? h.apply(this, e) : this.receiveBuffer.push(e);
      }, r.prototype.ack = function (t) {
        var e = this,
            n = !1;return function () {
          if (!n) {
            n = !0;var r = s(arguments);p("sending ack %j", r);var i = u(r) ? o.BINARY_ACK : o.ACK;e.packet({ type: i, id: t, data: r });
          }
        };
      }, r.prototype.onack = function (t) {
        var e = this.acks[t.id];"function" == typeof e ? (p("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : p("bad ack %s", t.id);
      }, r.prototype.onconnect = function () {
        this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered();
      }, r.prototype.emitBuffered = function () {
        var t;for (t = 0; t < this.receiveBuffer.length; t++) {
          h.apply(this, this.receiveBuffer[t]);
        }for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) {
          this.packet(this.sendBuffer[t]);
        }this.sendBuffer = [];
      }, r.prototype.ondisconnect = function () {
        p("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");
      }, r.prototype.destroy = function () {
        if (this.subs) {
          for (var t = 0; t < this.subs.length; t++) {
            this.subs[t].destroy();
          }this.subs = null;
        }this.io.destroy(this);
      }, r.prototype.close = r.prototype.disconnect = function () {
        return this.connected && (p("performing disconnect (%s)", this.nsp), this.packet({ type: o.DISCONNECT })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
      }, r.prototype.compress = function (t) {
        return this.flags = this.flags || {}, this.flags.compress = t, this;
      };
    }, { "./on": 3, "component-bind": 11, "component-emitter": 12, debug: 14, "has-binary": 30, "socket.io-parser": 40, "to-array": 43 }], 5: [function (t, e, n) {
      (function (n) {
        function r(t, e) {
          var r = t,
              e = e || n.location;null == t && (t = e.protocol + "//" + e.host), "string" == typeof t && ("/" == t.charAt(0) && (t = "/" == t.charAt(1) ? e.protocol + t : e.host + t), /^(https?|wss?):\/\//.test(t) || (i("protocol-less url %s", t), t = "undefined" != typeof e ? e.protocol + "//" + t : "https://" + t), i("parse %s", t), r = o(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";var s = -1 !== r.host.indexOf(":"),
              a = s ? "[" + r.host + "]" : r.host;return r.id = r.protocol + "://" + a + ":" + r.port, r.href = r.protocol + "://" + a + (e && e.port == r.port ? "" : ":" + r.port), r;
        }var o = t("parseuri"),
            i = t("debug")("socket.io-client:url");e.exports = r;
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, { debug: 14, parseuri: 38 }], 6: [function (t, e, n) {
      function r(t, e, n) {
        function r(t, o) {
          if (r.count <= 0) throw new Error("after called too many times");--r.count, t ? (i = !0, e(t), e = n) : 0 !== r.count || i || e(null, o);
        }var i = !1;return n = n || o, r.count = t, 0 === t ? e() : r;
      }function o() {}e.exports = r;
    }, {}], 7: [function (t, e, n) {
      e.exports = function (t, e, n) {
        var r = t.byteLength;if (e = e || 0, n = n || r, t.slice) return t.slice(e, n);if (0 > e && (e += r), 0 > n && (n += r), n > r && (n = r), e >= r || e >= n || 0 === r) return new ArrayBuffer(0);for (var o = new Uint8Array(t), i = new Uint8Array(n - e), s = e, a = 0; n > s; s++, a++) {
          i[a] = o[s];
        }return i.buffer;
      };
    }, {}], 8: [function (t, e, n) {
      function r(t) {
        t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
      }e.exports = r, r.prototype.duration = function () {
        var t = this.ms * Math.pow(this.factor, this.attempts++);if (this.jitter) {
          var e = Math.random(),
              n = Math.floor(e * this.jitter * t);t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n;
        }return 0 | Math.min(t, this.max);
      }, r.prototype.reset = function () {
        this.attempts = 0;
      }, r.prototype.setMin = function (t) {
        this.ms = t;
      }, r.prototype.setMax = function (t) {
        this.max = t;
      }, r.prototype.setJitter = function (t) {
        this.jitter = t;
      };
    }, {}], 9: [function (t, e, n) {
      !function () {
        "use strict";
        for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = new Uint8Array(256), r = 0; r < t.length; r++) {
          e[t.charCodeAt(r)] = r;
        }n.encode = function (e) {
          var n,
              r = new Uint8Array(e),
              o = r.length,
              i = "";for (n = 0; o > n; n += 3) {
            i += t[r[n] >> 2], i += t[(3 & r[n]) << 4 | r[n + 1] >> 4], i += t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6], i += t[63 & r[n + 2]];
          }return o % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="), i;
        }, n.decode = function (t) {
          var n,
              r,
              o,
              i,
              s,
              a = .75 * t.length,
              c = t.length,
              p = 0;"=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);var u = new ArrayBuffer(a),
              f = new Uint8Array(u);for (n = 0; c > n; n += 4) {
            r = e[t.charCodeAt(n)], o = e[t.charCodeAt(n + 1)], i = e[t.charCodeAt(n + 2)], s = e[t.charCodeAt(n + 3)], f[p++] = r << 2 | o >> 4, f[p++] = (15 & o) << 4 | i >> 2, f[p++] = (3 & i) << 6 | 63 & s;
          }return u;
        };
      }();
    }, {}], 10: [function (t, e, n) {
      (function (t) {
        function n(t) {
          for (var e = 0; e < t.length; e++) {
            var n = t[e];if (n.buffer instanceof ArrayBuffer) {
              var r = n.buffer;if (n.byteLength !== r.byteLength) {
                var o = new Uint8Array(n.byteLength);o.set(new Uint8Array(r, n.byteOffset, n.byteLength)), r = o.buffer;
              }t[e] = r;
            }
          }
        }function r(t, e) {
          e = e || {};var r = new i();n(t);for (var o = 0; o < t.length; o++) {
            r.append(t[o]);
          }return e.type ? r.getBlob(e.type) : r.getBlob();
        }function o(t, e) {
          return n(t), new Blob(t, e || {});
        }var i = t.BlobBuilder || t.WebKitBlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder,
            s = function () {
          try {
            var t = new Blob(["hi"]);return 2 === t.size;
          } catch (e) {
            return !1;
          }
        }(),
            a = s && function () {
          try {
            var t = new Blob([new Uint8Array([1, 2])]);return 2 === t.size;
          } catch (e) {
            return !1;
          }
        }(),
            c = i && i.prototype.append && i.prototype.getBlob;e.exports = function () {
          return s ? a ? t.Blob : o : c ? r : void 0;
        }();
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, {}], 11: [function (t, e, n) {
      var r = [].slice;e.exports = function (t, e) {
        if ("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function");var n = r.call(arguments, 2);return function () {
          return e.apply(t, n.concat(r.call(arguments)));
        };
      };
    }, {}], 12: [function (t, e, n) {
      function r(t) {
        return t ? o(t) : void 0;
      }function o(t) {
        for (var e in r.prototype) {
          t[e] = r.prototype[e];
        }return t;
      }e.exports = r, r.prototype.on = r.prototype.addEventListener = function (t, e) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
      }, r.prototype.once = function (t, e) {
        function n() {
          this.off(t, n), e.apply(this, arguments);
        }return n.fn = e, this.on(t, n), this;
      }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (t, e) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;var n = this._callbacks["$" + t];if (!n) return this;if (1 == arguments.length) return delete this._callbacks["$" + t], this;for (var r, o = 0; o < n.length; o++) {
          if (r = n[o], r === e || r.fn === e) {
            n.splice(o, 1);break;
          }
        }return this;
      }, r.prototype.emit = function (t) {
        this._callbacks = this._callbacks || {};var e = [].slice.call(arguments, 1),
            n = this._callbacks["$" + t];if (n) {
          n = n.slice(0);for (var r = 0, o = n.length; o > r; ++r) {
            n[r].apply(this, e);
          }
        }return this;
      }, r.prototype.listeners = function (t) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
      }, r.prototype.hasListeners = function (t) {
        return !!this.listeners(t).length;
      };
    }, {}], 13: [function (t, e, n) {
      e.exports = function (t, e) {
        var n = function n() {};n.prototype = e.prototype, t.prototype = new n(), t.prototype.constructor = t;
      };
    }, {}], 14: [function (t, e, n) {
      function r() {
        return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;
      }function o() {
        var t = arguments,
            e = this.useColors;if (t[0] = (e ? "%c" : "") + this.namespace + (e ? " %c" : " ") + t[0] + (e ? "%c " : " ") + "+" + n.humanize(this.diff), !e) return t;var r = "color: " + this.color;t = [t[0], r, "color: inherit"].concat(Array.prototype.slice.call(t, 1));var o = 0,
            i = 0;return t[0].replace(/%[a-z%]/g, function (t) {
          "%%" !== t && (o++, "%c" === t && (i = o));
        }), t.splice(i, 0, r), t;
      }function i() {
        return "object" == (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }function s(t) {
        try {
          null == t ? n.storage.removeItem("debug") : n.storage.debug = t;
        } catch (e) {}
      }function a() {
        var t;try {
          t = n.storage.debug;
        } catch (e) {}return t;
      }function c() {
        try {
          return window.localStorage;
        } catch (t) {}
      }n = e.exports = t("./debug"), n.log = i, n.formatArgs = o, n.save = s, n.load = a, n.useColors = r, n.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : c(), n.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], n.formatters.j = function (t) {
        return JSON.stringify(t);
      }, n.enable(a());
    }, { "./debug": 15 }], 15: [function (t, e, n) {
      function r() {
        return n.colors[u++ % n.colors.length];
      }function o(t) {
        function e() {}function o() {
          var t = o,
              e = +new Date(),
              i = e - (p || e);t.diff = i, t.prev = p, t.curr = e, p = e, null == t.useColors && (t.useColors = n.useColors()), null == t.color && t.useColors && (t.color = r());var s = Array.prototype.slice.call(arguments);s[0] = n.coerce(s[0]), "string" != typeof s[0] && (s = ["%o"].concat(s));var a = 0;s[0] = s[0].replace(/%([a-z%])/g, function (e, r) {
            if ("%%" === e) return e;a++;var o = n.formatters[r];if ("function" == typeof o) {
              var i = s[a];e = o.call(t, i), s.splice(a, 1), a--;
            }return e;
          }), "function" == typeof n.formatArgs && (s = n.formatArgs.apply(t, s));var c = o.log || n.log || console.log.bind(console);c.apply(t, s);
        }e.enabled = !1, o.enabled = !0;var i = n.enabled(t) ? o : e;return i.namespace = t, i;
      }function i(t) {
        n.save(t);for (var e = (t || "").split(/[\s,]+/), r = e.length, o = 0; r > o; o++) {
          e[o] && (t = e[o].replace(/\*/g, ".*?"), "-" === t[0] ? n.skips.push(new RegExp("^" + t.substr(1) + "$")) : n.names.push(new RegExp("^" + t + "$")));
        }
      }function s() {
        n.enable("");
      }function a(t) {
        var e, r;for (e = 0, r = n.skips.length; r > e; e++) {
          if (n.skips[e].test(t)) return !1;
        }for (e = 0, r = n.names.length; r > e; e++) {
          if (n.names[e].test(t)) return !0;
        }return !1;
      }function c(t) {
        return t instanceof Error ? t.stack || t.message : t;
      }n = e.exports = o, n.coerce = c, n.disable = s, n.enable = i, n.enabled = a, n.humanize = t("ms"), n.names = [], n.skips = [], n.formatters = {};var p,
          u = 0;
    }, { ms: 35 }], 16: [function (t, e, n) {
      e.exports = t("./lib/");
    }, { "./lib/": 17 }], 17: [function (t, e, n) {
      e.exports = t("./socket"), e.exports.parser = t("engine.io-parser");
    }, { "./socket": 18, "engine.io-parser": 27 }], 18: [function (t, e, n) {
      (function (n) {
        function r(t, e) {
          if (!(this instanceof r)) return new r(t, e);e = e || {}, t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (e = t, t = null), t ? (t = u(t), e.hostname = t.host, e.secure = "https" == t.protocol || "wss" == t.protocol, e.port = t.port, t.query && (e.query = t.query)) : e.host && (e.hostname = u(e.host).host), this.secure = null != e.secure ? e.secure : n.location && "https:" == location.protocol, e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.agent = e.agent || !1, this.hostname = e.hostname || (n.location ? location.hostname : "localhost"), this.port = e.port || (n.location && location.port ? location.port : this.secure ? 443 : 80), this.query = e.query || {}, "string" == typeof this.query && (this.query = h.decode(this.query)), this.upgrade = !1 !== e.upgrade, this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!e.forceJSONP, this.jsonp = !1 !== e.jsonp, this.forceBase64 = !!e.forceBase64, this.enablesXDR = !!e.enablesXDR, this.timestampParam = e.timestampParam || "t", this.timestampRequests = e.timestampRequests, this.transports = e.transports || ["polling", "websocket"], this.readyState = "", this.writeBuffer = [], this.policyPort = e.policyPort || 843, this.rememberUpgrade = e.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = e.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== e.perMessageDeflate ? e.perMessageDeflate || {} : !1, !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = e.pfx || null, this.key = e.key || null, this.passphrase = e.passphrase || null, this.cert = e.cert || null, this.ca = e.ca || null, this.ciphers = e.ciphers || null, this.rejectUnauthorized = void 0 === e.rejectUnauthorized ? !0 : e.rejectUnauthorized;var o = "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n;o.global === o && e.extraHeaders && Object.keys(e.extraHeaders).length > 0 && (this.extraHeaders = e.extraHeaders), this.open();
        }function o(t) {
          var e = {};for (var n in t) {
            t.hasOwnProperty(n) && (e[n] = t[n]);
          }return e;
        }var i = t("./transports"),
            s = t("component-emitter"),
            a = t("debug")("engine.io-client:socket"),
            c = t("indexof"),
            p = t("engine.io-parser"),
            u = t("parseuri"),
            f = t("parsejson"),
            h = t("parseqs");e.exports = r, r.priorWebsocketSuccess = !1, s(r.prototype), r.protocol = p.protocol, r.Socket = r, r.Transport = t("./transport"), r.transports = t("./transports"), r.parser = t("engine.io-parser"), r.prototype.createTransport = function (t) {
          a('creating transport "%s"', t);var e = o(this.query);e.EIO = p.protocol, e.transport = t, this.id && (e.sid = this.id);var n = new i[t]({ agent: this.agent, hostname: this.hostname, port: this.port, secure: this.secure, path: this.path, query: e, forceJSONP: this.forceJSONP, jsonp: this.jsonp, forceBase64: this.forceBase64, enablesXDR: this.enablesXDR, timestampRequests: this.timestampRequests, timestampParam: this.timestampParam, policyPort: this.policyPort, socket: this, pfx: this.pfx, key: this.key, passphrase: this.passphrase, cert: this.cert, ca: this.ca, ciphers: this.ciphers, rejectUnauthorized: this.rejectUnauthorized, perMessageDeflate: this.perMessageDeflate, extraHeaders: this.extraHeaders });return n;
        }, r.prototype.open = function () {
          var t;if (this.rememberUpgrade && r.priorWebsocketSuccess && -1 != this.transports.indexOf("websocket")) t = "websocket";else {
            if (0 === this.transports.length) {
              var e = this;return void setTimeout(function () {
                e.emit("error", "No transports available");
              }, 0);
            }t = this.transports[0];
          }this.readyState = "opening";try {
            t = this.createTransport(t);
          } catch (n) {
            return this.transports.shift(), void this.open();
          }t.open(), this.setTransport(t);
        }, r.prototype.setTransport = function (t) {
          a("setting transport %s", t.name);var e = this;this.transport && (a("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on("drain", function () {
            e.onDrain();
          }).on("packet", function (t) {
            e.onPacket(t);
          }).on("error", function (t) {
            e.onError(t);
          }).on("close", function () {
            e.onClose("transport close");
          });
        }, r.prototype.probe = function (t) {
          function e() {
            if (h.onlyBinaryUpgrades) {
              var e = !this.supportsBinary && h.transport.supportsBinary;f = f || e;
            }f || (a('probe transport "%s" opened', t), u.send([{ type: "ping", data: "probe" }]), u.once("packet", function (e) {
              if (!f) if ("pong" == e.type && "probe" == e.data) {
                if (a('probe transport "%s" pong', t), h.upgrading = !0, h.emit("upgrading", u), !u) return;r.priorWebsocketSuccess = "websocket" == u.name, a('pausing current transport "%s"', h.transport.name), h.transport.pause(function () {
                  f || "closed" != h.readyState && (a("changing transport and sending upgrade packet"), p(), h.setTransport(u), u.send([{ type: "upgrade" }]), h.emit("upgrade", u), u = null, h.upgrading = !1, h.flush());
                });
              } else {
                a('probe transport "%s" failed', t);var n = new Error("probe error");n.transport = u.name, h.emit("upgradeError", n);
              }
            }));
          }function n() {
            f || (f = !0, p(), u.close(), u = null);
          }function o(e) {
            var r = new Error("probe error: " + e);r.transport = u.name, n(), a('probe transport "%s" failed because of error: %s', t, e), h.emit("upgradeError", r);
          }function i() {
            o("transport closed");
          }function s() {
            o("socket closed");
          }function c(t) {
            u && t.name != u.name && (a('"%s" works - aborting "%s"', t.name, u.name), n());
          }function p() {
            u.removeListener("open", e), u.removeListener("error", o), u.removeListener("close", i), h.removeListener("close", s), h.removeListener("upgrading", c);
          }a('probing transport "%s"', t);var u = this.createTransport(t, { probe: 1 }),
              f = !1,
              h = this;r.priorWebsocketSuccess = !1, u.once("open", e), u.once("error", o), u.once("close", i), this.once("close", s), this.once("upgrading", c), u.open();
        }, r.prototype.onOpen = function () {
          if (a("socket open"), this.readyState = "open", r.priorWebsocketSuccess = "websocket" == this.transport.name, this.emit("open"), this.flush(), "open" == this.readyState && this.upgrade && this.transport.pause) {
            a("starting upgrade probes");for (var t = 0, e = this.upgrades.length; e > t; t++) {
              this.probe(this.upgrades[t]);
            }
          }
        }, r.prototype.onPacket = function (t) {
          if ("opening" == this.readyState || "open" == this.readyState) switch (a('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {case "open":
              this.onHandshake(f(t.data));break;case "pong":
              this.setPing(), this.emit("pong");break;case "error":
              var e = new Error("server error");e.code = t.data, this.onError(e);break;case "message":
              this.emit("data", t.data), this.emit("message", t.data);} else a('packet received with socket readyState "%s"', this.readyState);
        }, r.prototype.onHandshake = function (t) {
          this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" != this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat));
        }, r.prototype.onHeartbeat = function (t) {
          clearTimeout(this.pingTimeoutTimer);var e = this;e.pingTimeoutTimer = setTimeout(function () {
            "closed" != e.readyState && e.onClose("ping timeout");
          }, t || e.pingInterval + e.pingTimeout);
        }, r.prototype.setPing = function () {
          var t = this;clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(function () {
            a("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout);
          }, t.pingInterval);
        }, r.prototype.ping = function () {
          var t = this;this.sendPacket("ping", function () {
            t.emit("ping");
          });
        }, r.prototype.onDrain = function () {
          this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
        }, r.prototype.flush = function () {
          "closed" != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (a("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));
        }, r.prototype.write = r.prototype.send = function (t, e, n) {
          return this.sendPacket("message", t, e, n), this;
        }, r.prototype.sendPacket = function (t, e, n, r) {
          if ("function" == typeof e && (r = e, e = void 0), "function" == typeof n && (r = n, n = null), "closing" != this.readyState && "closed" != this.readyState) {
            n = n || {}, n.compress = !1 !== n.compress;var o = { type: t, data: e, options: n };this.emit("packetCreate", o), this.writeBuffer.push(o), r && this.once("flush", r), this.flush();
          }
        }, r.prototype.close = function () {
          function t() {
            r.onClose("forced close"), a("socket closing - telling transport to close"), r.transport.close();
          }function e() {
            r.removeListener("upgrade", e), r.removeListener("upgradeError", e), t();
          }function n() {
            r.once("upgrade", e), r.once("upgradeError", e);
          }if ("opening" == this.readyState || "open" == this.readyState) {
            this.readyState = "closing";var r = this;this.writeBuffer.length ? this.once("drain", function () {
              this.upgrading ? n() : t();
            }) : this.upgrading ? n() : t();
          }return this;
        }, r.prototype.onError = function (t) {
          a("socket error %j", t), r.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t);
        }, r.prototype.onClose = function (t, e) {
          if ("opening" == this.readyState || "open" == this.readyState || "closing" == this.readyState) {
            a('socket close with reason: "%s"', t);var n = this;clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, e), n.writeBuffer = [], n.prevBufferLen = 0;
          }
        }, r.prototype.filterUpgrades = function (t) {
          for (var e = [], n = 0, r = t.length; r > n; n++) {
            ~c(this.transports, t[n]) && e.push(t[n]);
          }return e;
        };
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, { "./transport": 19, "./transports": 20, "component-emitter": 26, debug: 14, "engine.io-parser": 27, indexof: 32, parsejson: 36, parseqs: 37, parseuri: 38 }], 19: [function (t, e, n) {
      function r(t) {
        this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.extraHeaders = t.extraHeaders;
      }var o = t("engine.io-parser"),
          i = t("component-emitter");e.exports = r, i(r.prototype), r.prototype.onError = function (t, e) {
        var n = new Error(t);return n.type = "TransportError", n.description = e, this.emit("error", n), this;
      }, r.prototype.open = function () {
        return "closed" != this.readyState && "" != this.readyState || (this.readyState = "opening", this.doOpen()), this;
      }, r.prototype.close = function () {
        return "opening" != this.readyState && "open" != this.readyState || (this.doClose(), this.onClose()), this;
      }, r.prototype.send = function (t) {
        if ("open" != this.readyState) throw new Error("Transport not open");this.write(t);
      }, r.prototype.onOpen = function () {
        this.readyState = "open", this.writable = !0, this.emit("open");
      }, r.prototype.onData = function (t) {
        var e = o.decodePacket(t, this.socket.binaryType);this.onPacket(e);
      }, r.prototype.onPacket = function (t) {
        this.emit("packet", t);
      }, r.prototype.onClose = function () {
        this.readyState = "closed", this.emit("close");
      };
    }, { "component-emitter": 26, "engine.io-parser": 27 }], 20: [function (t, e, n) {
      (function (e) {
        function r(t) {
          var n,
              r = !1,
              a = !1,
              c = !1 !== t.jsonp;if (e.location) {
            var p = "https:" == location.protocol,
                u = location.port;u || (u = p ? 443 : 80), r = t.hostname != location.hostname || u != t.port, a = t.secure != p;
          }if (t.xdomain = r, t.xscheme = a, n = new o(t), "open" in n && !t.forceJSONP) return new i(t);if (!c) throw new Error("JSONP disabled");return new s(t);
        }var o = t("xmlhttprequest-ssl"),
            i = t("./polling-xhr"),
            s = t("./polling-jsonp"),
            a = t("./websocket");n.polling = r, n.websocket = a;
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, { "./polling-jsonp": 21, "./polling-xhr": 22, "./websocket": 24, "xmlhttprequest-ssl": 25 }], 21: [function (t, e, n) {
      (function (n) {
        function r() {}function o(t) {
          i.call(this, t), this.query = this.query || {}, a || (n.___eio || (n.___eio = []), a = n.___eio), this.index = a.length;var e = this;a.push(function (t) {
            e.onData(t);
          }), this.query.j = this.index, n.document && n.addEventListener && n.addEventListener("beforeunload", function () {
            e.script && (e.script.onerror = r);
          }, !1);
        }var i = t("./polling"),
            s = t("component-inherit");e.exports = o;var a,
            c = /\n/g,
            p = /\\n/g;s(o, i), o.prototype.supportsBinary = !1, o.prototype.doClose = function () {
          this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), i.prototype.doClose.call(this);
        }, o.prototype.doPoll = function () {
          var t = this,
              e = document.createElement("script");this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e.async = !0, e.src = this.uri(), e.onerror = function (e) {
            t.onError("jsonp poll error", e);
          };var n = document.getElementsByTagName("script")[0];n ? n.parentNode.insertBefore(e, n) : (document.head || document.body).appendChild(e), this.script = e;var r = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);r && setTimeout(function () {
            var t = document.createElement("iframe");document.body.appendChild(t), document.body.removeChild(t);
          }, 100);
        }, o.prototype.doWrite = function (t, e) {
          function n() {
            r(), e();
          }function r() {
            if (o.iframe) try {
              o.form.removeChild(o.iframe);
            } catch (t) {
              o.onError("jsonp polling iframe removal error", t);
            }try {
              var e = '<iframe src="javascript:0" name="' + o.iframeId + '">';i = document.createElement(e);
            } catch (t) {
              i = document.createElement("iframe"), i.name = o.iframeId, i.src = "javascript:0";
            }i.id = o.iframeId, o.form.appendChild(i), o.iframe = i;
          }var o = this;if (!this.form) {
            var i,
                s = document.createElement("form"),
                a = document.createElement("textarea"),
                u = this.iframeId = "eio_iframe_" + this.index;s.className = "socketio", s.style.position = "absolute", s.style.top = "-1000px", s.style.left = "-1000px", s.target = u, s.method = "POST", s.setAttribute("accept-charset", "utf-8"), a.name = "d", s.appendChild(a), document.body.appendChild(s), this.form = s, this.area = a;
          }this.form.action = this.uri(), r(), t = t.replace(p, "\\\n"), this.area.value = t.replace(c, "\\n");try {
            this.form.submit();
          } catch (f) {}this.iframe.attachEvent ? this.iframe.onreadystatechange = function () {
            "complete" == o.iframe.readyState && n();
          } : this.iframe.onload = n;
        };
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, { "./polling": 23, "component-inherit": 13 }], 22: [function (t, e, n) {
      (function (n) {
        function r() {}function o(t) {
          if (c.call(this, t), n.location) {
            var e = "https:" == location.protocol,
                r = location.port;r || (r = e ? 443 : 80), this.xd = t.hostname != n.location.hostname || r != t.port, this.xs = t.secure != e;
          } else this.extraHeaders = t.extraHeaders;
        }function i(t) {
          this.method = t.method || "GET", this.uri = t.uri, this.xd = !!t.xd, this.xs = !!t.xs, this.async = !1 !== t.async, this.data = void 0 != t.data ? t.data : null, this.agent = t.agent, this.isBinary = t.isBinary, this.supportsBinary = t.supportsBinary, this.enablesXDR = t.enablesXDR, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.extraHeaders = t.extraHeaders, this.create();
        }function s() {
          for (var t in i.requests) {
            i.requests.hasOwnProperty(t) && i.requests[t].abort();
          }
        }var a = t("xmlhttprequest-ssl"),
            c = t("./polling"),
            p = t("component-emitter"),
            u = t("component-inherit"),
            f = t("debug")("engine.io-client:polling-xhr");e.exports = o, e.exports.Request = i, u(o, c), o.prototype.supportsBinary = !0, o.prototype.request = function (t) {
          return t = t || {}, t.uri = this.uri(), t.xd = this.xd, t.xs = this.xs, t.agent = this.agent || !1, t.supportsBinary = this.supportsBinary, t.enablesXDR = this.enablesXDR, t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, t.extraHeaders = this.extraHeaders, new i(t);
        }, o.prototype.doWrite = function (t, e) {
          var n = "string" != typeof t && void 0 !== t,
              r = this.request({ method: "POST", data: t, isBinary: n }),
              o = this;r.on("success", e), r.on("error", function (t) {
            o.onError("xhr post error", t);
          }), this.sendXhr = r;
        }, o.prototype.doPoll = function () {
          f("xhr poll");var t = this.request(),
              e = this;t.on("data", function (t) {
            e.onData(t);
          }), t.on("error", function (t) {
            e.onError("xhr poll error", t);
          }), this.pollXhr = t;
        }, p(i.prototype), i.prototype.create = function () {
          var t = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized;var e = this.xhr = new a(t),
              r = this;try {
            f("xhr open %s: %s", this.method, this.uri), e.open(this.method, this.uri, this.async);try {
              if (this.extraHeaders) {
                e.setDisableHeaderCheck(!0);for (var o in this.extraHeaders) {
                  this.extraHeaders.hasOwnProperty(o) && e.setRequestHeader(o, this.extraHeaders[o]);
                }
              }
            } catch (s) {}if (this.supportsBinary && (e.responseType = "arraybuffer"), "POST" == this.method) try {
              this.isBinary ? e.setRequestHeader("Content-type", "application/octet-stream") : e.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
            } catch (s) {}"withCredentials" in e && (e.withCredentials = !0), this.hasXDR() ? (e.onload = function () {
              r.onLoad();
            }, e.onerror = function () {
              r.onError(e.responseText);
            }) : e.onreadystatechange = function () {
              4 == e.readyState && (200 == e.status || 1223 == e.status ? r.onLoad() : setTimeout(function () {
                r.onError(e.status);
              }, 0));
            }, f("xhr data %s", this.data), e.send(this.data);
          } catch (s) {
            return void setTimeout(function () {
              r.onError(s);
            }, 0);
          }n.document && (this.index = i.requestsCount++, i.requests[this.index] = this);
        }, i.prototype.onSuccess = function () {
          this.emit("success"), this.cleanup();
        }, i.prototype.onData = function (t) {
          this.emit("data", t), this.onSuccess();
        }, i.prototype.onError = function (t) {
          this.emit("error", t), this.cleanup(!0);
        }, i.prototype.cleanup = function (t) {
          if ("undefined" != typeof this.xhr && null !== this.xhr) {
            if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = r : this.xhr.onreadystatechange = r, t) try {
              this.xhr.abort();
            } catch (e) {}n.document && delete i.requests[this.index], this.xhr = null;
          }
        }, i.prototype.onLoad = function () {
          var t;try {
            var e;try {
              e = this.xhr.getResponseHeader("Content-Type").split(";")[0];
            } catch (n) {}if ("application/octet-stream" === e) t = this.xhr.response;else if (this.supportsBinary) try {
              t = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
            } catch (n) {
              for (var r = new Uint8Array(this.xhr.response), o = [], i = 0, s = r.length; s > i; i++) {
                o.push(r[i]);
              }t = String.fromCharCode.apply(null, o);
            } else t = this.xhr.responseText;
          } catch (n) {
            this.onError(n);
          }null != t && this.onData(t);
        }, i.prototype.hasXDR = function () {
          return "undefined" != typeof n.XDomainRequest && !this.xs && this.enablesXDR;
        }, i.prototype.abort = function () {
          this.cleanup();
        }, n.document && (i.requestsCount = 0, i.requests = {}, n.attachEvent ? n.attachEvent("onunload", s) : n.addEventListener && n.addEventListener("beforeunload", s, !1));
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, { "./polling": 23, "component-emitter": 26, "component-inherit": 13, debug: 14, "xmlhttprequest-ssl": 25 }], 23: [function (t, e, n) {
      function r(t) {
        var e = t && t.forceBase64;u && !e || (this.supportsBinary = !1), o.call(this, t);
      }var o = t("../transport"),
          i = t("parseqs"),
          s = t("engine.io-parser"),
          a = t("component-inherit"),
          c = t("yeast"),
          p = t("debug")("engine.io-client:polling");e.exports = r;var u = function () {
        var e = t("xmlhttprequest-ssl"),
            n = new e({ xdomain: !1 });return null != n.responseType;
      }();a(r, o), r.prototype.name = "polling", r.prototype.doOpen = function () {
        this.poll();
      }, r.prototype.pause = function (t) {
        function e() {
          p("paused"), n.readyState = "paused", t();
        }var n = this;if (this.readyState = "pausing", this.polling || !this.writable) {
          var r = 0;this.polling && (p("we are currently polling - waiting to pause"), r++, this.once("pollComplete", function () {
            p("pre-pause polling complete"), --r || e();
          })), this.writable || (p("we are currently writing - waiting to pause"), r++, this.once("drain", function () {
            p("pre-pause writing complete"), --r || e();
          }));
        } else e();
      }, r.prototype.poll = function () {
        p("polling"), this.polling = !0, this.doPoll(), this.emit("poll");
      }, r.prototype.onData = function (t) {
        var e = this;p("polling got data %s", t);var n = function n(t, _n, r) {
          return "opening" == e.readyState && e.onOpen(), "close" == t.type ? (e.onClose(), !1) : void e.onPacket(t);
        };s.decodePayload(t, this.socket.binaryType, n), "closed" != this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" == this.readyState ? this.poll() : p('ignoring poll - transport state "%s"', this.readyState));
      }, r.prototype.doClose = function () {
        function t() {
          p("writing close packet"), e.write([{ type: "close" }]);
        }var e = this;"open" == this.readyState ? (p("transport open - closing"), t()) : (p("transport not open - deferring close"), this.once("open", t));
      }, r.prototype.write = function (t) {
        var e = this;this.writable = !1;var n = function n() {
          e.writable = !0, e.emit("drain");
        },
            e = this;s.encodePayload(t, this.supportsBinary, function (t) {
          e.doWrite(t, n);
        });
      }, r.prototype.uri = function () {
        var t = this.query || {},
            e = this.secure ? "https" : "http",
            n = "";!1 !== this.timestampRequests && (t[this.timestampParam] = c()), this.supportsBinary || t.sid || (t.b64 = 1), t = i.encode(t), this.port && ("https" == e && 443 != this.port || "http" == e && 80 != this.port) && (n = ":" + this.port), t.length && (t = "?" + t);var r = -1 !== this.hostname.indexOf(":");return e + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t;
      };
    }, { "../transport": 19, "component-inherit": 13, debug: 14, "engine.io-parser": 27, parseqs: 37, "xmlhttprequest-ssl": 25, yeast: 45 }], 24: [function (t, e, n) {
      (function (n) {
        function r(t) {
          var e = t && t.forceBase64;e && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, o.call(this, t);
        }var o = t("../transport"),
            i = t("engine.io-parser"),
            s = t("parseqs"),
            a = t("component-inherit"),
            c = t("yeast"),
            p = t("debug")("engine.io-client:websocket"),
            u = n.WebSocket || n.MozWebSocket,
            f = u;if (!f && "undefined" == typeof window) try {
          f = t("ws");
        } catch (h) {}e.exports = r, a(r, o), r.prototype.name = "websocket", r.prototype.supportsBinary = !0, r.prototype.doOpen = function () {
          if (this.check()) {
            var t = this.uri(),
                e = void 0,
                n = { agent: this.agent, perMessageDeflate: this.perMessageDeflate };n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (n.headers = this.extraHeaders), this.ws = u ? new f(t) : new f(t, e, n), void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "buffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();
          }
        }, r.prototype.addEventListeners = function () {
          var t = this;this.ws.onopen = function () {
            t.onOpen();
          }, this.ws.onclose = function () {
            t.onClose();
          }, this.ws.onmessage = function (e) {
            t.onData(e.data);
          }, this.ws.onerror = function (e) {
            t.onError("websocket error", e);
          };
        }, "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (r.prototype.onData = function (t) {
          var e = this;setTimeout(function () {
            o.prototype.onData.call(e, t);
          }, 0);
        }), r.prototype.write = function (t) {
          function e() {
            r.emit("flush"), setTimeout(function () {
              r.writable = !0, r.emit("drain");
            }, 0);
          }var r = this;this.writable = !1;for (var o = t.length, s = 0, a = o; a > s; s++) {
            !function (t) {
              i.encodePacket(t, r.supportsBinary, function (i) {
                if (!u) {
                  var s = {};if (t.options && (s.compress = t.options.compress), r.perMessageDeflate) {
                    var a = "string" == typeof i ? n.Buffer.byteLength(i) : i.length;a < r.perMessageDeflate.threshold && (s.compress = !1);
                  }
                }try {
                  u ? r.ws.send(i) : r.ws.send(i, s);
                } catch (c) {
                  p("websocket closed before onclose event");
                }--o || e();
              });
            }(t[s]);
          }
        }, r.prototype.onClose = function () {
          o.prototype.onClose.call(this);
        }, r.prototype.doClose = function () {
          "undefined" != typeof this.ws && this.ws.close();
        }, r.prototype.uri = function () {
          var t = this.query || {},
              e = this.secure ? "wss" : "ws",
              n = "";this.port && ("wss" == e && 443 != this.port || "ws" == e && 80 != this.port) && (n = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = c()), this.supportsBinary || (t.b64 = 1), t = s.encode(t), t.length && (t = "?" + t);var r = -1 !== this.hostname.indexOf(":");return e + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t;
        }, r.prototype.check = function () {
          return !(!f || "__initialize" in f && this.name === r.prototype.name);
        };
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, { "../transport": 19, "component-inherit": 13, debug: 14, "engine.io-parser": 27, parseqs: 37, ws: void 0, yeast: 45 }], 25: [function (t, e, n) {
      var r = t("has-cors");e.exports = function (t) {
        var e = t.xdomain,
            n = t.xscheme,
            o = t.enablesXDR;try {
          if ("undefined" != typeof XMLHttpRequest && (!e || r)) return new XMLHttpRequest();
        } catch (i) {}try {
          if ("undefined" != typeof XDomainRequest && !n && o) return new XDomainRequest();
        } catch (i) {}if (!e) try {
          return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (i) {}
      };
    }, { "has-cors": 31 }], 26: [function (t, e, n) {
      function r(t) {
        return t ? o(t) : void 0;
      }function o(t) {
        for (var e in r.prototype) {
          t[e] = r.prototype[e];
        }return t;
      }e.exports = r, r.prototype.on = r.prototype.addEventListener = function (t, e) {
        return this._callbacks = this._callbacks || {}, (this._callbacks[t] = this._callbacks[t] || []).push(e), this;
      }, r.prototype.once = function (t, e) {
        function n() {
          r.off(t, n), e.apply(this, arguments);
        }var r = this;return this._callbacks = this._callbacks || {}, n.fn = e, this.on(t, n), this;
      }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (t, e) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;var n = this._callbacks[t];if (!n) return this;if (1 == arguments.length) return delete this._callbacks[t], this;for (var r, o = 0; o < n.length; o++) {
          if (r = n[o], r === e || r.fn === e) {
            n.splice(o, 1);break;
          }
        }return this;
      }, r.prototype.emit = function (t) {
        this._callbacks = this._callbacks || {};var e = [].slice.call(arguments, 1),
            n = this._callbacks[t];if (n) {
          n = n.slice(0);for (var r = 0, o = n.length; o > r; ++r) {
            n[r].apply(this, e);
          }
        }return this;
      }, r.prototype.listeners = function (t) {
        return this._callbacks = this._callbacks || {}, this._callbacks[t] || [];
      }, r.prototype.hasListeners = function (t) {
        return !!this.listeners(t).length;
      };
    }, {}], 27: [function (t, e, n) {
      (function (e) {
        function r(t, e) {
          var r = "b" + n.packets[t.type] + t.data.data;return e(r);
        }function o(t, e, r) {
          if (!e) return n.encodeBase64Packet(t, r);var o = t.data,
              i = new Uint8Array(o),
              s = new Uint8Array(1 + o.byteLength);s[0] = m[t.type];for (var a = 0; a < i.length; a++) {
            s[a + 1] = i[a];
          }return r(s.buffer);
        }function i(t, e, r) {
          if (!e) return n.encodeBase64Packet(t, r);var o = new FileReader();return o.onload = function () {
            t.data = o.result, n.encodePacket(t, e, !0, r);
          }, o.readAsArrayBuffer(t.data);
        }function s(t, e, r) {
          if (!e) return n.encodeBase64Packet(t, r);if (g) return i(t, e, r);var o = new Uint8Array(1);o[0] = m[t.type];var s = new w([o.buffer, t.data]);return r(s);
        }function a(t, e, n) {
          for (var r = new Array(t.length), o = h(t.length, n), i = function i(t, n, o) {
            e(n, function (e, n) {
              r[t] = n, o(e, r);
            });
          }, s = 0; s < t.length; s++) {
            i(s, t[s], o);
          }
        }var c = t("./keys"),
            p = t("has-binary"),
            u = t("arraybuffer.slice"),
            f = t("base64-arraybuffer"),
            h = t("after"),
            l = t("utf8"),
            d = navigator.userAgent.match(/Android/i),
            y = /PhantomJS/i.test(navigator.userAgent),
            g = d || y;n.protocol = 3;var m = n.packets = { open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6 },
            b = c(m),
            v = { type: "error", data: "parser error" },
            w = t("blob");n.encodePacket = function (t, n, i, a) {
          "function" == typeof n && (a = n, n = !1), "function" == typeof i && (a = i, i = null);var c = void 0 === t.data ? void 0 : t.data.buffer || t.data;if (e.ArrayBuffer && c instanceof ArrayBuffer) return o(t, n, a);if (w && c instanceof e.Blob) return s(t, n, a);if (c && c.base64) return r(t, a);var p = m[t.type];return void 0 !== t.data && (p += i ? l.encode(String(t.data)) : String(t.data)), a("" + p);
        }, n.encodeBase64Packet = function (t, r) {
          var o = "b" + n.packets[t.type];if (w && t.data instanceof e.Blob) {
            var i = new FileReader();return i.onload = function () {
              var t = i.result.split(",")[1];r(o + t);
            }, i.readAsDataURL(t.data);
          }var s;try {
            s = String.fromCharCode.apply(null, new Uint8Array(t.data));
          } catch (a) {
            for (var c = new Uint8Array(t.data), p = new Array(c.length), u = 0; u < c.length; u++) {
              p[u] = c[u];
            }s = String.fromCharCode.apply(null, p);
          }return o += e.btoa(s), r(o);
        }, n.decodePacket = function (t, e, r) {
          if ("string" == typeof t || void 0 === t) {
            if ("b" == t.charAt(0)) return n.decodeBase64Packet(t.substr(1), e);if (r) try {
              t = l.decode(t);
            } catch (o) {
              return v;
            }var i = t.charAt(0);return Number(i) == i && b[i] ? t.length > 1 ? { type: b[i], data: t.substring(1) } : { type: b[i] } : v;
          }var s = new Uint8Array(t),
              i = s[0],
              a = u(t, 1);return w && "blob" === e && (a = new w([a])), { type: b[i], data: a };
        }, n.decodeBase64Packet = function (t, n) {
          var r = b[t.charAt(0)];if (!e.ArrayBuffer) return { type: r, data: { base64: !0, data: t.substr(1) } };var o = f.decode(t.substr(1));return "blob" === n && w && (o = new w([o])), { type: r, data: o };
        }, n.encodePayload = function (t, e, r) {
          function o(t) {
            return t.length + ":" + t;
          }function i(t, r) {
            n.encodePacket(t, s ? e : !1, !0, function (t) {
              r(null, o(t));
            });
          }"function" == typeof e && (r = e, e = null);var s = p(t);return e && s ? w && !g ? n.encodePayloadAsBlob(t, r) : n.encodePayloadAsArrayBuffer(t, r) : t.length ? void a(t, i, function (t, e) {
            return r(e.join(""));
          }) : r("0:");
        }, n.decodePayload = function (t, e, r) {
          if ("string" != typeof t) return n.decodePayloadAsBinary(t, e, r);"function" == typeof e && (r = e, e = null);var o;if ("" == t) return r(v, 0, 1);for (var i, s, a = "", c = 0, p = t.length; p > c; c++) {
            var u = t.charAt(c);if (":" != u) a += u;else {
              if ("" == a || a != (i = Number(a))) return r(v, 0, 1);if (s = t.substr(c + 1, i), a != s.length) return r(v, 0, 1);if (s.length) {
                if (o = n.decodePacket(s, e, !0), v.type == o.type && v.data == o.data) return r(v, 0, 1);var f = r(o, c + i, p);if (!1 === f) return;
              }c += i, a = "";
            }
          }return "" != a ? r(v, 0, 1) : void 0;
        }, n.encodePayloadAsArrayBuffer = function (t, e) {
          function r(t, e) {
            n.encodePacket(t, !0, !0, function (t) {
              return e(null, t);
            });
          }return t.length ? void a(t, r, function (t, n) {
            var r = n.reduce(function (t, e) {
              var n;return n = "string" == typeof e ? e.length : e.byteLength, t + n.toString().length + n + 2;
            }, 0),
                o = new Uint8Array(r),
                i = 0;return n.forEach(function (t) {
              var e = "string" == typeof t,
                  n = t;if (e) {
                for (var r = new Uint8Array(t.length), s = 0; s < t.length; s++) {
                  r[s] = t.charCodeAt(s);
                }n = r.buffer;
              }e ? o[i++] = 0 : o[i++] = 1;for (var a = n.byteLength.toString(), s = 0; s < a.length; s++) {
                o[i++] = parseInt(a[s]);
              }o[i++] = 255;for (var r = new Uint8Array(n), s = 0; s < r.length; s++) {
                o[i++] = r[s];
              }
            }), e(o.buffer);
          }) : e(new ArrayBuffer(0));
        }, n.encodePayloadAsBlob = function (t, e) {
          function r(t, e) {
            n.encodePacket(t, !0, !0, function (t) {
              var n = new Uint8Array(1);if (n[0] = 1, "string" == typeof t) {
                for (var r = new Uint8Array(t.length), o = 0; o < t.length; o++) {
                  r[o] = t.charCodeAt(o);
                }t = r.buffer, n[0] = 0;
              }for (var i = t instanceof ArrayBuffer ? t.byteLength : t.size, s = i.toString(), a = new Uint8Array(s.length + 1), o = 0; o < s.length; o++) {
                a[o] = parseInt(s[o]);
              }if (a[s.length] = 255, w) {
                var c = new w([n.buffer, a.buffer, t]);e(null, c);
              }
            });
          }a(t, r, function (t, n) {
            return e(new w(n));
          });
        }, n.decodePayloadAsBinary = function (t, e, r) {
          "function" == typeof e && (r = e, e = null);for (var o = t, i = [], s = !1; o.byteLength > 0;) {
            for (var a = new Uint8Array(o), c = 0 === a[0], p = "", f = 1; 255 != a[f]; f++) {
              if (p.length > 310) {
                s = !0;break;
              }p += a[f];
            }if (s) return r(v, 0, 1);o = u(o, 2 + p.length), p = parseInt(p);var h = u(o, 0, p);if (c) try {
              h = String.fromCharCode.apply(null, new Uint8Array(h));
            } catch (l) {
              var d = new Uint8Array(h);h = "";for (var f = 0; f < d.length; f++) {
                h += String.fromCharCode(d[f]);
              }
            }i.push(h), o = u(o, p);
          }var y = i.length;i.forEach(function (t, o) {
            r(n.decodePacket(t, e, !0), o, y);
          });
        };
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, { "./keys": 28, after: 6, "arraybuffer.slice": 7, "base64-arraybuffer": 9, blob: 10, "has-binary": 29, utf8: 44 }], 28: [function (t, e, n) {
      e.exports = Object.keys || function (t) {
        var e = [],
            n = Object.prototype.hasOwnProperty;for (var r in t) {
          n.call(t, r) && e.push(r);
        }return e;
      };
    }, {}], 29: [function (t, e, n) {
      (function (n) {
        function r(t) {
          function e(t) {
            if (!t) return !1;if (n.Buffer && n.Buffer.isBuffer(t) || n.ArrayBuffer && t instanceof ArrayBuffer || n.Blob && t instanceof Blob || n.File && t instanceof File) return !0;if (o(t)) {
              for (var r = 0; r < t.length; r++) {
                if (e(t[r])) return !0;
              }
            } else if (t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
              t.toJSON && (t = t.toJSON());for (var i in t) {
                if (Object.prototype.hasOwnProperty.call(t, i) && e(t[i])) return !0;
              }
            }return !1;
          }return e(t);
        }var o = t("isarray");e.exports = r;
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, { isarray: 33 }], 30: [function (t, e, n) {
      (function (n) {
        function r(t) {
          function e(t) {
            if (!t) return !1;if (n.Buffer && n.Buffer.isBuffer && n.Buffer.isBuffer(t) || n.ArrayBuffer && t instanceof ArrayBuffer || n.Blob && t instanceof Blob || n.File && t instanceof File) return !0;if (o(t)) {
              for (var r = 0; r < t.length; r++) {
                if (e(t[r])) return !0;
              }
            } else if (t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
              t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON());for (var i in t) {
                if (Object.prototype.hasOwnProperty.call(t, i) && e(t[i])) return !0;
              }
            }return !1;
          }return e(t);
        }var o = t("isarray");e.exports = r;
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, { isarray: 33 }], 31: [function (t, e, n) {
      try {
        e.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
      } catch (r) {
        e.exports = !1;
      }
    }, {}], 32: [function (t, e, n) {
      var r = [].indexOf;e.exports = function (t, e) {
        if (r) return t.indexOf(e);for (var n = 0; n < t.length; ++n) {
          if (t[n] === e) return n;
        }return -1;
      };
    }, {}], 33: [function (t, e, n) {
      e.exports = Array.isArray || function (t) {
        return "[object Array]" == Object.prototype.toString.call(t);
      };
    }, {}], 34: [function (e, n, r) {
      (function (e) {
        (function () {
          function o(t, e) {
            function n(t) {
              if (n[t] !== g) return n[t];var o;if ("bug-string-char-index" == t) o = "a" != "a"[0];else if ("json" == t) o = n("json-stringify") && n("json-parse");else {
                var s,
                    a = "{\"a\":[1,true,false,null,\"\\u0000\\b\\n\\f\\r\\t\"]}";if ("json-stringify" == t) {
                  var c = e.stringify,
                      u = "function" == typeof c && v;if (u) {
                    (s = function s() {
                      return 1;
                    }).toJSON = s;try {
                      u = "0" === c(0) && "0" === c(new r()) && '""' == c(new i()) && c(b) === g && c(g) === g && c() === g && "1" === c(s) && "[1]" == c([s]) && "[null]" == c([g]) && "null" == c(null) && "[null,null,null]" == c([g, b, null]) && c({ a: [s, !0, !1, null, "\x00\b\n\f\r	"] }) == a && "1" === c(null, s) && "[\n 1,\n 2\n]" == c([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == c(new p(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == c(new p(864e13)) && '"-000001-01-01T00:00:00.000Z"' == c(new p(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == c(new p(-1));
                    } catch (f) {
                      u = !1;
                    }
                  }o = u;
                }if ("json-parse" == t) {
                  var h = e.parse;if ("function" == typeof h) try {
                    if (0 === h("0") && !h(!1)) {
                      s = h(a);var l = 5 == s.a.length && 1 === s.a[0];if (l) {
                        try {
                          l = !h('"	"');
                        } catch (f) {}if (l) try {
                          l = 1 !== h("01");
                        } catch (f) {}if (l) try {
                          l = 1 !== h("1.");
                        } catch (f) {}
                      }
                    }
                  } catch (f) {
                    l = !1;
                  }o = l;
                }
              }return n[t] = !!o;
            }t || (t = c.Object()), e || (e = c.Object());var r = t.Number || c.Number,
                i = t.String || c.String,
                a = t.Object || c.Object,
                p = t.Date || c.Date,
                u = t.SyntaxError || c.SyntaxError,
                f = t.TypeError || c.TypeError,
                h = t.Math || c.Math,
                l = t.JSON || c.JSON;"object" == (typeof l === "undefined" ? "undefined" : _typeof(l)) && l && (e.stringify = l.stringify, e.parse = l.parse);var _d,
                _y,
                g,
                m = a.prototype,
                b = m.toString,
                v = new p(-0xc782b5b800cec);try {
              v = -109252 == v.getUTCFullYear() && 0 === v.getUTCMonth() && 1 === v.getUTCDate() && 10 == v.getUTCHours() && 37 == v.getUTCMinutes() && 6 == v.getUTCSeconds() && 708 == v.getUTCMilliseconds();
            } catch (w) {}if (!n("json")) {
              var k = "[object Function]",
                  x = "[object Date]",
                  A = "[object Number]",
                  B = "[object String]",
                  C = "[object Array]",
                  S = "[object Boolean]",
                  E = n("bug-string-char-index");if (!v) var _ = h.floor,
                  T = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                  j = function j(t, e) {
                return T[e] + 365 * (t - 1970) + _((t - 1969 + (e = +(e > 1))) / 4) - _((t - 1901 + e) / 100) + _((t - 1601 + e) / 400);
              };if ((_d = m.hasOwnProperty) || (_d = function d(t) {
                var e,
                    n = {};return (n.__proto__ = null, n.__proto__ = { toString: 1 }, n).toString != b ? _d = function d(t) {
                  var e = this.__proto__,
                      n = t in (this.__proto__ = null, this);return this.__proto__ = e, n;
                } : (e = n.constructor, _d = function d(t) {
                  var n = (this.constructor || e).prototype;return t in this && !(t in n && this[t] === n[t]);
                }), n = null, _d.call(this, t);
              }), _y = function y(t, e) {
                var n,
                    r,
                    o,
                    i = 0;(n = function n() {
                  this.valueOf = 0;
                }).prototype.valueOf = 0, r = new n();for (o in r) {
                  _d.call(r, o) && i++;
                }return n = r = null, i ? _y = 2 == i ? function (t, e) {
                  var n,
                      r = {},
                      o = b.call(t) == k;for (n in t) {
                    o && "prototype" == n || _d.call(r, n) || !(r[n] = 1) || !_d.call(t, n) || e(n);
                  }
                } : function (t, e) {
                  var n,
                      r,
                      o = b.call(t) == k;for (n in t) {
                    o && "prototype" == n || !_d.call(t, n) || (r = "constructor" === n) || e(n);
                  }(r || _d.call(t, n = "constructor")) && e(n);
                } : (r = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], _y = function y(t, e) {
                  var n,
                      o,
                      i = b.call(t) == k,
                      a = !i && "function" != typeof t.constructor && s[_typeof(t.hasOwnProperty)] && t.hasOwnProperty || _d;for (n in t) {
                    i && "prototype" == n || !a.call(t, n) || e(n);
                  }for (o = r.length; n = r[--o]; a.call(t, n) && e(n)) {}
                }), _y(t, e);
              }, !n("json-stringify")) {
                var O = { 92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t" },
                    P = "000000",
                    N = function N(t, e) {
                  return (P + (e || 0)).slice(-t);
                },
                    R = "\\u00",
                    D = function D(t) {
                  for (var e = '"', n = 0, r = t.length, o = !E || r > 10, i = o && (E ? t.split("") : t); r > n; n++) {
                    var s = t.charCodeAt(n);switch (s) {case 8:case 9:case 10:case 12:case 13:case 34:case 92:
                        e += O[s];break;default:
                        if (32 > s) {
                          e += R + N(2, s.toString(16));break;
                        }e += o ? i[n] : t.charAt(n);}
                  }return e + '"';
                },
                    U = function U(t, e, n, r, o, i, s) {
                  var a, c, p, u, h, l, m, v, w, k, E, T, O, P, R, q;try {
                    a = e[t];
                  } catch (L) {}if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && a) if (c = b.call(a), c != x || _d.call(a, "toJSON")) "function" == typeof a.toJSON && (c != A && c != B && c != C || _d.call(a, "toJSON")) && (a = a.toJSON(t));else if (a > -1 / 0 && 1 / 0 > a) {
                    if (j) {
                      for (h = _(a / 864e5), p = _(h / 365.2425) + 1970 - 1; j(p + 1, 0) <= h; p++) {}for (u = _((h - j(p, 0)) / 30.42); j(p, u + 1) <= h; u++) {}h = 1 + h - j(p, u), l = (a % 864e5 + 864e5) % 864e5, m = _(l / 36e5) % 24, v = _(l / 6e4) % 60, w = _(l / 1e3) % 60, k = l % 1e3;
                    } else p = a.getUTCFullYear(), u = a.getUTCMonth(), h = a.getUTCDate(), m = a.getUTCHours(), v = a.getUTCMinutes(), w = a.getUTCSeconds(), k = a.getUTCMilliseconds();a = (0 >= p || p >= 1e4 ? (0 > p ? "-" : "+") + N(6, 0 > p ? -p : p) : N(4, p)) + "-" + N(2, u + 1) + "-" + N(2, h) + "T" + N(2, m) + ":" + N(2, v) + ":" + N(2, w) + "." + N(3, k) + "Z";
                  } else a = null;if (n && (a = n.call(e, t, a)), null === a) return "null";if (c = b.call(a), c == S) return "" + a;if (c == A) return a > -1 / 0 && 1 / 0 > a ? "" + a : "null";if (c == B) return D("" + a);if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
                    for (P = s.length; P--;) {
                      if (s[P] === a) throw f();
                    }if (s.push(a), E = [], R = i, i += o, c == C) {
                      for (O = 0, P = a.length; P > O; O++) {
                        T = U(O, a, n, r, o, i, s), E.push(T === g ? "null" : T);
                      }q = E.length ? o ? "[\n" + i + E.join(",\n" + i) + "\n" + R + "]" : "[" + E.join(",") + "]" : "[]";
                    } else _y(r || a, function (t) {
                      var e = U(t, a, n, r, o, i, s);e !== g && E.push(D(t) + ":" + (o ? " " : "") + e);
                    }), q = E.length ? o ? "{\n" + i + E.join(",\n" + i) + "\n" + R + "}" : "{" + E.join(",") + "}" : "{}";return s.pop(), q;
                  }
                };e.stringify = function (t, e, n) {
                  var r, o, i, a;if (s[typeof e === "undefined" ? "undefined" : _typeof(e)] && e) if ((a = b.call(e)) == k) o = e;else if (a == C) {
                    i = {};for (var c, p = 0, u = e.length; u > p; c = e[p++], a = b.call(c), (a == B || a == A) && (i[c] = 1)) {}
                  }if (n) if ((a = b.call(n)) == A) {
                    if ((n -= n % 1) > 0) for (r = "", n > 10 && (n = 10); r.length < n; r += " ") {}
                  } else a == B && (r = n.length <= 10 ? n : n.slice(0, 10));return U("", (c = {}, c[""] = t, c), o, i, r, "", []);
                };
              }if (!n("json-parse")) {
                var q,
                    L,
                    M = i.fromCharCode,
                    I = { 92: "\\", 34: '"', 47: "/", 98: "\b", 116: "	", 110: "\n", 102: "\f", 114: "\r" },
                    H = function H() {
                  throw q = L = null, u();
                },
                    z = function z() {
                  for (var t, e, n, r, o, i = L, s = i.length; s > q;) {
                    switch (o = i.charCodeAt(q)) {case 9:case 10:case 13:case 32:
                        q++;break;case 123:case 125:case 91:case 93:case 58:case 44:
                        return t = E ? i.charAt(q) : i[q], q++, t;case 34:
                        for (t = "@", q++; s > q;) {
                          if (o = i.charCodeAt(q), 32 > o) H();else if (92 == o) switch (o = i.charCodeAt(++q)) {case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:
                              t += I[o], q++;break;case 117:
                              for (e = ++q, n = q + 4; n > q; q++) {
                                o = i.charCodeAt(q), o >= 48 && 57 >= o || o >= 97 && 102 >= o || o >= 65 && 70 >= o || H();
                              }t += M("0x" + i.slice(e, q));break;default:
                              H();} else {
                            if (34 == o) break;for (o = i.charCodeAt(q), e = q; o >= 32 && 92 != o && 34 != o;) {
                              o = i.charCodeAt(++q);
                            }t += i.slice(e, q);
                          }
                        }if (34 == i.charCodeAt(q)) return q++, t;H();default:
                        if (e = q, 45 == o && (r = !0, o = i.charCodeAt(++q)), o >= 48 && 57 >= o) {
                          for (48 == o && (o = i.charCodeAt(q + 1), o >= 48 && 57 >= o) && H(), r = !1; s > q && (o = i.charCodeAt(q), o >= 48 && 57 >= o); q++) {}if (46 == i.charCodeAt(q)) {
                            for (n = ++q; s > n && (o = i.charCodeAt(n), o >= 48 && 57 >= o); n++) {}n == q && H(), q = n;
                          }if (o = i.charCodeAt(q), 101 == o || 69 == o) {
                            for (o = i.charCodeAt(++q), 43 != o && 45 != o || q++, n = q; s > n && (o = i.charCodeAt(n), o >= 48 && 57 >= o); n++) {}n == q && H(), q = n;
                          }return +i.slice(e, q);
                        }if (r && H(), "true" == i.slice(q, q + 4)) return q += 4, !0;if ("false" == i.slice(q, q + 5)) return q += 5, !1;if ("null" == i.slice(q, q + 4)) return q += 4, null;H();}
                  }return "$";
                },
                    J = function J(t) {
                  var e, n;if ("$" == t && H(), "string" == typeof t) {
                    if ("@" == (E ? t.charAt(0) : t[0])) return t.slice(1);if ("[" == t) {
                      for (e = []; t = z(), "]" != t; n || (n = !0)) {
                        n && ("," == t ? (t = z(), "]" == t && H()) : H()), "," == t && H(), e.push(J(t));
                      }return e;
                    }if ("{" == t) {
                      for (e = {}; t = z(), "}" != t; n || (n = !0)) {
                        n && ("," == t ? (t = z(), "}" == t && H()) : H()), "," != t && "string" == typeof t && "@" == (E ? t.charAt(0) : t[0]) && ":" == z() || H(), e[t.slice(1)] = J(z());
                      }return e;
                    }H();
                  }return t;
                },
                    X = function X(t, e, n) {
                  var r = F(t, e, n);r === g ? delete t[e] : t[e] = r;
                },
                    F = function F(t, e, n) {
                  var r,
                      o = t[e];if ("object" == (typeof o === "undefined" ? "undefined" : _typeof(o)) && o) if (b.call(o) == C) for (r = o.length; r--;) {
                    X(o, r, n);
                  } else _y(o, function (t) {
                    X(o, t, n);
                  });return n.call(t, e, o);
                };e.parse = function (t, e) {
                  var n, r;return q = 0, L = "" + t, n = J(z()), "$" != z() && H(), q = L = null, e && b.call(e) == k ? F((r = {}, r[""] = n, r), "", e) : n;
                };
              }
            }return e.runInContext = o, e;
          }var i = "function" == typeof t && t.amd,
              s = { "function": !0, object: !0 },
              a = s[typeof r === "undefined" ? "undefined" : _typeof(r)] && r && !r.nodeType && r,
              c = s[typeof window === "undefined" ? "undefined" : _typeof(window)] && window || this,
              p = a && s[typeof n === "undefined" ? "undefined" : _typeof(n)] && n && !n.nodeType && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e;if (!p || p.global !== p && p.window !== p && p.self !== p || (c = p), a && !i) o(c, a);else {
            var u = c.JSON,
                f = c.JSON3,
                h = !1,
                l = o(c, c.JSON3 = { noConflict: function noConflict() {
                return h || (h = !0, c.JSON = u, c.JSON3 = f, u = f = null), l;
              } });c.JSON = { parse: l.parse, stringify: l.stringify };
          }i && t(function () {
            return l;
          });
        }).call(this);
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, {}], 35: [function (t, e, n) {
      function r(t) {
        if (t = "" + t, !(t.length > 1e4)) {
          var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if (e) {
            var n = parseFloat(e[1]),
                r = (e[2] || "ms").toLowerCase();switch (r) {case "years":case "year":case "yrs":case "yr":case "y":
                return n * f;case "days":case "day":case "d":
                return n * u;case "hours":case "hour":case "hrs":case "hr":case "h":
                return n * p;case "minutes":case "minute":case "mins":case "min":case "m":
                return n * c;case "seconds":case "second":case "secs":case "sec":case "s":
                return n * a;case "milliseconds":case "millisecond":case "msecs":case "msec":case "ms":
                return n;}
          }
        }
      }function o(t) {
        return t >= u ? Math.round(t / u) + "d" : t >= p ? Math.round(t / p) + "h" : t >= c ? Math.round(t / c) + "m" : t >= a ? Math.round(t / a) + "s" : t + "ms";
      }function i(t) {
        return s(t, u, "day") || s(t, p, "hour") || s(t, c, "minute") || s(t, a, "second") || t + " ms";
      }function s(t, e, n) {
        return e > t ? void 0 : 1.5 * e > t ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s";
      }var a = 1e3,
          c = 60 * a,
          p = 60 * c,
          u = 24 * p,
          f = 365.25 * u;e.exports = function (t, e) {
        return e = e || {}, "string" == typeof t ? r(t) : e["long"] ? i(t) : o(t);
      };
    }, {}], 36: [function (t, e, n) {
      (function (t) {
        var n = /^[\],:{}\s]*$/,
            r = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            o = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            i = /(?:^|:|,)(?:\s*\[)+/g,
            s = /^\s+/,
            a = /\s+$/;e.exports = function (e) {
          return "string" == typeof e && e ? (e = e.replace(s, "").replace(a, ""), t.JSON && JSON.parse ? JSON.parse(e) : n.test(e.replace(r, "@").replace(o, "]").replace(i, "")) ? new Function("return " + e)() : void 0) : null;
        };
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, {}], 37: [function (t, e, n) {
      n.encode = function (t) {
        var e = "";for (var n in t) {
          t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
        }return e;
      }, n.decode = function (t) {
        for (var e = {}, n = t.split("&"), r = 0, o = n.length; o > r; r++) {
          var i = n[r].split("=");e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
        }return e;
      };
    }, {}], 38: [function (t, e, n) {
      var r = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
          o = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];e.exports = function (t) {
        var e = t,
            n = t.indexOf("["),
            i = t.indexOf("]");-1 != n && -1 != i && (t = t.substring(0, n) + t.substring(n, i).replace(/:/g, ";") + t.substring(i, t.length));for (var s = r.exec(t || ""), a = {}, c = 14; c--;) {
          a[o[c]] = s[c] || "";
        }return -1 != n && -1 != i && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a;
      };
    }, {}], 39: [function (t, e, n) {
      (function (e) {
        var r = t("isarray"),
            o = t("./is-buffer");n.deconstructPacket = function (t) {
          function e(t) {
            if (!t) return t;if (o(t)) {
              var i = { _placeholder: !0, num: n.length };return n.push(t), i;
            }if (r(t)) {
              for (var s = new Array(t.length), a = 0; a < t.length; a++) {
                s[a] = e(t[a]);
              }return s;
            }if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && !(t instanceof Date)) {
              var s = {};for (var c in t) {
                s[c] = e(t[c]);
              }return s;
            }return t;
          }var n = [],
              i = t.data,
              s = t;return s.data = e(i), s.attachments = n.length, { packet: s, buffers: n };
        }, n.reconstructPacket = function (t, e) {
          function n(t) {
            if (t && t._placeholder) {
              var o = e[t.num];return o;
            }if (r(t)) {
              for (var i = 0; i < t.length; i++) {
                t[i] = n(t[i]);
              }return t;
            }if (t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
              for (var s in t) {
                t[s] = n(t[s]);
              }return t;
            }return t;
          }return t.data = n(t.data), t.attachments = void 0, t;
        }, n.removeBlobs = function (t, n) {
          function i(t, c, p) {
            if (!t) return t;if (e.Blob && t instanceof Blob || e.File && t instanceof File) {
              s++;var u = new FileReader();u.onload = function () {
                p ? p[c] = this.result : a = this.result, --s || n(a);
              }, u.readAsArrayBuffer(t);
            } else if (r(t)) for (var f = 0; f < t.length; f++) {
              i(t[f], f, t);
            } else if (t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && !o(t)) for (var h in t) {
              i(t[h], h, t);
            }
          }var s = 0,
              a = t;i(a), s || n(a);
        };
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, { "./is-buffer": 41, isarray: 33 }], 40: [function (t, e, n) {
      function r() {}function o(t) {
        var e = "",
            r = !1;return e += t.type, n.BINARY_EVENT != t.type && n.BINARY_ACK != t.type || (e += t.attachments, e += "-"), t.nsp && "/" != t.nsp && (r = !0, e += t.nsp), null != t.id && (r && (e += ",", r = !1), e += t.id), null != t.data && (r && (e += ","), e += f.stringify(t.data)), u("encoded %j as %s", t, e), e;
      }function i(t, e) {
        function n(t) {
          var n = l.deconstructPacket(t),
              r = o(n.packet),
              i = n.buffers;i.unshift(r), e(i);
        }l.removeBlobs(t, n);
      }function s() {
        this.reconstructor = null;
      }function a(t) {
        var e = {},
            r = 0;
        if (e.type = Number(t.charAt(0)), null == n.types[e.type]) return p();if (n.BINARY_EVENT == e.type || n.BINARY_ACK == e.type) {
          for (var o = ""; "-" != t.charAt(++r) && (o += t.charAt(r), r != t.length);) {}if (o != Number(o) || "-" != t.charAt(r)) throw new Error("Illegal attachments");e.attachments = Number(o);
        }if ("/" == t.charAt(r + 1)) for (e.nsp = ""; ++r;) {
          var i = t.charAt(r);if ("," == i) break;if (e.nsp += i, r == t.length) break;
        } else e.nsp = "/";var s = t.charAt(r + 1);if ("" !== s && Number(s) == s) {
          for (e.id = ""; ++r;) {
            var i = t.charAt(r);if (null == i || Number(i) != i) {
              --r;break;
            }if (e.id += t.charAt(r), r == t.length) break;
          }e.id = Number(e.id);
        }if (t.charAt(++r)) try {
          e.data = f.parse(t.substr(r));
        } catch (a) {
          return p();
        }return u("decoded %s as %j", t, e), e;
      }function c(t) {
        this.reconPack = t, this.buffers = [];
      }function p(t) {
        return { type: n.ERROR, data: "parser error" };
      }var u = t("debug")("socket.io-parser"),
          f = t("json3"),
          h = (t("isarray"), t("component-emitter")),
          l = t("./binary"),
          d = t("./is-buffer");n.protocol = 4, n.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], n.CONNECT = 0, n.DISCONNECT = 1, n.EVENT = 2, n.ACK = 3, n.ERROR = 4, n.BINARY_EVENT = 5, n.BINARY_ACK = 6, n.Encoder = r, n.Decoder = s, r.prototype.encode = function (t, e) {
        if (u("encoding packet %j", t), n.BINARY_EVENT == t.type || n.BINARY_ACK == t.type) i(t, e);else {
          var r = o(t);e([r]);
        }
      }, h(s.prototype), s.prototype.add = function (t) {
        var e;if ("string" == typeof t) e = a(t), n.BINARY_EVENT == e.type || n.BINARY_ACK == e.type ? (this.reconstructor = new c(e), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", e)) : this.emit("decoded", e);else {
          if (!d(t) && !t.base64) throw new Error("Unknown type: " + t);if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");e = this.reconstructor.takeBinaryData(t), e && (this.reconstructor = null, this.emit("decoded", e));
        }
      }, s.prototype.destroy = function () {
        this.reconstructor && this.reconstructor.finishedReconstruction();
      }, c.prototype.takeBinaryData = function (t) {
        if (this.buffers.push(t), this.buffers.length == this.reconPack.attachments) {
          var e = l.reconstructPacket(this.reconPack, this.buffers);return this.finishedReconstruction(), e;
        }return null;
      }, c.prototype.finishedReconstruction = function () {
        this.reconPack = null, this.buffers = [];
      };
    }, { "./binary": 39, "./is-buffer": 41, "component-emitter": 42, debug: 14, isarray: 33, json3: 34 }], 41: [function (t, e, n) {
      (function (t) {
        function n(e) {
          return t.Buffer && t.Buffer.isBuffer(e) || t.ArrayBuffer && e instanceof ArrayBuffer;
        }e.exports = n;
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, {}], 42: [function (t, e, n) {
      arguments[4][26][0].apply(n, arguments);
    }, { dup: 26 }], 43: [function (t, e, n) {
      function r(t, e) {
        var n = [];e = e || 0;for (var r = e || 0; r < t.length; r++) {
          n[r - e] = t[r];
        }return n;
      }e.exports = r;
    }, {}], 44: [function (e, n, r) {
      (function (e) {
        !function (o) {
          function i(t) {
            for (var e, n, r = [], o = 0, i = t.length; i > o;) {
              e = t.charCodeAt(o++), e >= 55296 && 56319 >= e && i > o ? (n = t.charCodeAt(o++), 56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), o--)) : r.push(e);
            }return r;
          }function s(t) {
            for (var e, n = t.length, r = -1, o = ""; ++r < n;) {
              e = t[r], e > 65535 && (e -= 65536, o += w(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), o += w(e);
            }return o;
          }function a(t) {
            if (t >= 55296 && 57343 >= t) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
          }function c(t, e) {
            return w(t >> e & 63 | 128);
          }function p(t) {
            if (0 == (4294967168 & t)) return w(t);var e = "";return 0 == (4294965248 & t) ? e = w(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (a(t), e = w(t >> 12 & 15 | 224), e += c(t, 6)) : 0 == (4292870144 & t) && (e = w(t >> 18 & 7 | 240), e += c(t, 12), e += c(t, 6)), e += w(63 & t | 128);
          }function u(t) {
            for (var e, n = i(t), r = n.length, o = -1, s = ""; ++o < r;) {
              e = n[o], s += p(e);
            }return s;
          }function f() {
            if (v >= b) throw Error("Invalid byte index");var t = 255 & m[v];if (v++, 128 == (192 & t)) return 63 & t;throw Error("Invalid continuation byte");
          }function h() {
            var t, e, n, r, o;if (v > b) throw Error("Invalid byte index");if (v == b) return !1;if (t = 255 & m[v], v++, 0 == (128 & t)) return t;if (192 == (224 & t)) {
              var e = f();if (o = (31 & t) << 6 | e, o >= 128) return o;throw Error("Invalid continuation byte");
            }if (224 == (240 & t)) {
              if (e = f(), n = f(), o = (15 & t) << 12 | e << 6 | n, o >= 2048) return a(o), o;throw Error("Invalid continuation byte");
            }if (240 == (248 & t) && (e = f(), n = f(), r = f(), o = (15 & t) << 18 | e << 12 | n << 6 | r, o >= 65536 && 1114111 >= o)) return o;throw Error("Invalid UTF-8 detected");
          }function l(t) {
            m = i(t), b = m.length, v = 0;for (var e, n = []; (e = h()) !== !1;) {
              n.push(e);
            }return s(n);
          }var d = "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && r,
              y = "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n && n.exports == d && n,
              g = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e;g.global !== g && g.window !== g || (o = g);var m,
              b,
              v,
              w = String.fromCharCode,
              k = { version: "2.0.0", encode: u, decode: l };if ("function" == typeof t && "object" == _typeof(t.amd) && t.amd) t(function () {
            return k;
          });else if (d && !d.nodeType) {
            if (y) y.exports = k;else {
              var x = {},
                  A = x.hasOwnProperty;for (var B in k) {
                A.call(k, B) && (d[B] = k[B]);
              }
            }
          } else o.utf8 = k;
        }(this);
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, {}], 45: [function (t, e, n) {
      "use strict";
      function r(t) {
        var e = "";do {
          e = a[t % c] + e, t = Math.floor(t / c);
        } while (t > 0);return e;
      }function o(t) {
        var e = 0;for (f = 0; f < t.length; f++) {
          e = e * c + p[t.charAt(f)];
        }return e;
      }function i() {
        var t = r(+new Date());return t !== s ? (u = 0, s = t) : t + "." + r(u++);
      }for (var s, a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), c = 64, p = {}, u = 0, f = 0; c > f; f++) {
        p[a[f]] = f;
      }i.encode = r, i.decode = o, e.exports = i;
    }, {}] }, {}, [1])(1);
});
//# sourceMappingURL=socket.io.min.js.map