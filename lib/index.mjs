var Dt = Object.defineProperty;
var Zt = (t, e, r) => e in t ? Dt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var x = (t, e, r) => (Zt(t, typeof e != "symbol" ? e + "" : e, r), r);
function O(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var p = t.length - 1; p >= 0; p--)
      (s = t[p]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
}
function k(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var St = { exports: {} }, at = { exports: {} };
(function(t) {
  function e(r) {
    return t.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    }, t.exports.__esModule = !0, t.exports.default = t.exports, e(r);
  }
  t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
})(at);
var _t = /* @__PURE__ */ k(at.exports), K = { exports: {} };
(function(t) {
  function e(r, n) {
    return t.exports = e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, s) {
      return i.__proto__ = s, i;
    }, t.exports.__esModule = !0, t.exports.default = t.exports, e(r, n);
  }
  t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
})(K);
var Et = { exports: {} };
(function(t) {
  function e(r) {
    return Function.toString.call(r).indexOf("[native code]") !== -1;
  }
  t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
})(Et);
var Ot = { exports: {} }, kt = { exports: {} };
(function(t) {
  function e() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
})(kt);
(function(t) {
  var e = K.exports, r = kt.exports;
  function n(o, i, s) {
    return r() ? (t.exports = n = Reflect.construct.bind(), t.exports.__esModule = !0, t.exports.default = t.exports) : (t.exports = n = function(c, l, u) {
      var a = [null];
      a.push.apply(a, l);
      var h = Function.bind.apply(c, a), f = new h();
      return u && e(f, u.prototype), f;
    }, t.exports.__esModule = !0, t.exports.default = t.exports), n.apply(null, arguments);
  }
  t.exports = n, t.exports.__esModule = !0, t.exports.default = t.exports;
})(Ot);
(function(t) {
  var e = at.exports, r = K.exports, n = Et.exports, o = Ot.exports;
  function i(s) {
    var p = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return t.exports = i = function(l) {
      if (l === null || !n(l))
        return l;
      if (typeof l != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (typeof p < "u") {
        if (p.has(l))
          return p.get(l);
        p.set(l, u);
      }
      function u() {
        return o(l, arguments, e(this).constructor);
      }
      return u.prototype = Object.create(l.prototype, {
        constructor: {
          value: u,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), r(u, l);
    }, t.exports.__esModule = !0, t.exports.default = t.exports, i(s);
  }
  t.exports = i, t.exports.__esModule = !0, t.exports.default = t.exports;
})(St);
var Nt = /* @__PURE__ */ k(St.exports), Ct = { exports: {} }, st = { exports: {} }, Q = { exports: {} };
(function(t) {
  function e(r) {
    "@babel/helpers - typeof";
    return t.exports = e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
      return typeof n;
    } : function(n) {
      return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
    }, t.exports.__esModule = !0, t.exports.default = t.exports, e(r);
  }
  t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
})(Q);
var Pt = { exports: {} };
(function(t) {
  var e = Q.exports.default;
  function r(n, o) {
    if (e(n) !== "object" || n === null)
      return n;
    var i = n[Symbol.toPrimitive];
    if (i !== void 0) {
      var s = i.call(n, o || "default");
      if (e(s) !== "object")
        return s;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (o === "string" ? String : Number)(n);
  }
  t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports;
})(Pt);
(function(t) {
  var e = Q.exports.default, r = Pt.exports;
  function n(o) {
    var i = r(o, "string");
    return e(i) === "symbol" ? i : String(i);
  }
  t.exports = n, t.exports.__esModule = !0, t.exports.default = t.exports;
})(st);
(function(t) {
  var e = st.exports;
  function r(n, o, i) {
    return o = e(o), o in n ? Object.defineProperty(n, o, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : n[o] = i, n;
  }
  t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports;
})(Ct);
var E = /* @__PURE__ */ k(Ct.exports), Mt = { exports: {} };
(function(t) {
  function e(r, n) {
    if (!(r instanceof n))
      throw new TypeError("Cannot call a class as a function");
  }
  t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
})(Mt);
var Y = /* @__PURE__ */ k(Mt.exports), jt = { exports: {} };
(function(t) {
  var e = st.exports;
  function r(o, i) {
    for (var s = 0; s < i.length; s++) {
      var p = i[s];
      p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(o, e(p.key), p);
    }
  }
  function n(o, i, s) {
    return i && r(o.prototype, i), s && r(o, s), Object.defineProperty(o, "prototype", {
      writable: !1
    }), o;
  }
  t.exports = n, t.exports.__esModule = !0, t.exports.default = t.exports;
})(jt);
var H = /* @__PURE__ */ k(jt.exports), ut = { exports: {} };
(function(t) {
  function e(r) {
    if (r === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return r;
  }
  t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
})(ut);
var $ = /* @__PURE__ */ k(ut.exports), At = { exports: {} };
(function(t) {
  var e = K.exports;
  function r(n, o) {
    if (typeof o != "function" && o !== null)
      throw new TypeError("Super expression must either be null or a function");
    n.prototype = Object.create(o && o.prototype, {
      constructor: {
        value: n,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(n, "prototype", {
      writable: !1
    }), o && e(n, o);
  }
  t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports;
})(At);
var Rt = /* @__PURE__ */ k(At.exports), Tt = { exports: {} };
(function(t) {
  var e = Q.exports.default, r = ut.exports;
  function n(o, i) {
    if (i && (e(i) === "object" || typeof i == "function"))
      return i;
    if (i !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return r(o);
  }
  t.exports = n, t.exports.__esModule = !0, t.exports.default = t.exports;
})(Tt);
var Vt = /* @__PURE__ */ k(Tt.exports), w = {}, Ut = [], te = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function S(t, e) {
  for (var r in e)
    t[r] = e[r];
  return (
    /** @type {O & P} */
    t
  );
}
function $t(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
var ft = Ut.slice;
function ee(t, e, r, n) {
  for (var o, i, s; e = e._parent; )
    if ((o = e._component) && !o._processingException)
      try {
        if (i = o.constructor, i && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(t)), s = o._dirty), o.componentDidCatch != null && (o.componentDidCatch(t, n || {}), s = o._dirty), s)
          return o._pendingError = o;
      } catch (p) {
        t = p;
      }
  throw t;
}
var v = {
  _catchError: ee
}, re = 0;
function zt(t, e, r) {
  var n = {}, o, i, s;
  for (s in e)
    s == "key" ? o = e[s] : s == "ref" ? i = e[s] : n[s] = e[s];
  if (arguments.length > 2 && (n.children = arguments.length > 3 ? ft.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null)
    for (s in t.defaultProps)
      n[s] === void 0 && (n[s] = t.defaultProps[s]);
  return W(t, n, o, i, null);
}
function W(t, e, r, n, o) {
  var i = {
    type: t,
    props: e,
    key: r,
    ref: n,
    _children: null,
    _parent: null,
    _depth: 0,
    _dom: null,
    // _nextDom must be initialized to undefined b/c it will eventually
    // be set to dom.nextSibling which can return `null` and it is important
    // to be able to distinguish between an uninitialized _nextDom and
    // a _nextDom that has been set to `null`
    _nextDom: void 0,
    _component: null,
    _hydrating: null,
    constructor: void 0,
    _original: o ?? ++re
  };
  return o == null && v.vnode != null && v.vnode(i), i;
}
function X(t) {
  return t.children;
}
function q(t, e) {
  this.props = t, this.context = e;
}
q.prototype.setState = function(t, e) {
  var r;
  this._nextState != null && this._nextState !== this.state ? r = this._nextState : r = this._nextState = S({}, this.state), typeof t == "function" && (t = t(S({}, r), this.props)), t && S(r, t), t != null && this._vnode && (e && this._stateCallbacks.push(e), Ft(this));
};
q.prototype.forceUpdate = function(t) {
  this._vnode && (this._force = !0, t && this._renderCallbacks.push(t), Ft(this));
};
q.prototype.render = X;
function m(t, e) {
  if (e == null)
    return t._parent ? m(t._parent, t._parent._children.indexOf(t) + 1) : null;
  for (var r; e < t._children.length; e++)
    if (r = t._children[e], r != null && r._dom != null)
      return r._dom;
  return typeof t.type == "function" ? m(t) : null;
}
function ne(t) {
  var e = t._vnode, r = e._dom, n = t._parentDom;
  if (n) {
    var o = [], i = S({}, e);
    i._original = e._original + 1, lt(n, e, i, t._globalContext, n.ownerSVGElement !== void 0, e._hydrating != null ? [r] : null, o, r ?? m(e), e._hydrating), It(o, e), e._dom != r && mt(e);
  }
}
function mt(t) {
  if ((t = t._parent) != null && t._component != null) {
    t._dom = t._component.base = null;
    for (var e = 0; e < t._children.length; e++) {
      var r = t._children[e];
      if (r != null && r._dom != null) {
        t._dom = t._component.base = r._dom;
        break;
      }
    }
    return mt(t);
  }
}
var R = [], et, ie = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
function Ft(t) {
  (!t._dirty && (t._dirty = !0) && R.push(t) && !I._rerenderCount++ || et !== v.debounceRendering) && (et = v.debounceRendering, (et || ie)(I));
}
var yt = function(e, r) {
  return e._vnode._depth - r._vnode._depth;
};
function I() {
  var t;
  for (R.sort(yt); t = R.shift(); )
    if (t._dirty) {
      var e = R.length;
      ne(t), R.length > e && R.sort(yt);
    }
  I._rerenderCount = 0;
}
I._rerenderCount = 0;
function Bt(t, e, r, n, o, i, s, p, c, l) {
  var u, a, h, f, _, d, g, y = n && n._children || Ut, C = y.length;
  for (r._children = [], u = 0; u < e.length; u++)
    if (f = e[u], f == null || typeof f == "boolean" || typeof f == "function" ? f = r._children[u] = null : typeof f == "string" || typeof f == "number" || // eslint-disable-next-line valid-typeof
    typeof f == "bigint" ? f = r._children[u] = W(null, f, null, null, f) : Array.isArray(f) ? f = r._children[u] = W(X, {
      children: f
    }, null, null, null) : f._depth > 0 ? f = r._children[u] = W(f.type, f.props, f.key, f.ref ? f.ref : null, f._original) : f = r._children[u] = f, f != null) {
      if (f._parent = r, f._depth = r._depth + 1, h = y[u], h === null || h && f.key == h.key && f.type === h.type)
        y[u] = void 0;
      else
        for (a = 0; a < C; a++) {
          if (h = y[a], h && f.key == h.key && f.type === h.type) {
            y[a] = void 0;
            break;
          }
          h = null;
        }
      h = h || w, lt(t, f, h, o, i, s, p, c, l), _ = f._dom, (a = f.ref) && h.ref != a && (g || (g = []), h.ref && g.push(h.ref, null, f), g.push(a, f._component || _, f)), _ != null ? (d == null && (d = _), typeof f.type == "function" && f._children === h._children ? f._nextDom = c = Lt(f, c, t) : c = Wt(t, f, h, y, _, c), typeof r.type == "function" && (r._nextDom = c)) : c && h._dom == c && c.parentNode != t && (c = m(h));
    }
  for (r._dom = d, u = C; u--; )
    y[u] != null && (typeof r.type == "function" && y[u]._dom != null && y[u]._dom == r._nextDom && (r._nextDom = wt(n).nextSibling), Jt(y[u], y[u]));
  if (g)
    for (u = 0; u < g.length; u++)
      Gt(g[u], g[++u], g[++u]);
}
function Lt(t, e, r) {
  for (var n = t._children, o = 0; n && o < n.length; o++) {
    var i = n[o];
    i && (i._parent = t, typeof i.type == "function" ? e = Lt(i, e, r) : e = Wt(r, i, i, n, i._dom, e));
  }
  return e;
}
function Wt(t, e, r, n, o, i) {
  var s;
  if (e._nextDom !== void 0)
    s = e._nextDom, e._nextDom = void 0;
  else if (r == null || o != i || o.parentNode == null)
    t:
      if (i == null || i.parentNode !== t)
        t.appendChild(o), s = null;
      else {
        for (var p = i, c = 0; (p = p.nextSibling) && c < n.length; c += 1)
          if (p == o)
            break t;
        t.insertBefore(o, i), s = i;
      }
  return s !== void 0 ? i = s : i = o.nextSibling, i;
}
function wt(t) {
  if (t.type == null || typeof t.type == "string")
    return t._dom;
  if (t._children)
    for (var e = t._children.length - 1; e >= 0; e--) {
      var r = t._children[e];
      if (r) {
        var n = wt(r);
        if (n)
          return n;
      }
    }
  return null;
}
function oe(t, e, r, n, o) {
  var i;
  for (i in r)
    i !== "children" && i !== "key" && !(i in e) && G(t, i, null, r[i], n);
  for (i in e)
    (!o || typeof e[i] == "function") && i !== "children" && i !== "key" && i !== "value" && i !== "checked" && r[i] !== e[i] && G(t, i, e[i], r[i], n);
}
function vt(t, e, r) {
  e[0] === "-" ? t.setProperty(e, r ?? "") : r == null ? t[e] = "" : typeof r != "number" || te.test(e) ? t[e] = r : t[e] = r + "px";
}
function G(t, e, r, n, o) {
  var i;
  t:
    if (e === "style")
      if (typeof r == "string")
        t.style.cssText = r;
      else {
        if (typeof n == "string" && (t.style.cssText = n = ""), n)
          for (e in n)
            r && e in r || vt(t.style, e, "");
        if (r)
          for (e in r)
            (!n || r[e] !== n[e]) && vt(t.style, e, r[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      if (i = e !== (e = e.replace(/Capture$/, "")), e.toLowerCase() in t ? e = e.toLowerCase().slice(2) : e = e.slice(2), t._listeners || (t._listeners = {}), t._listeners[e + i] = r, r) {
        if (!n) {
          var s = i ? dt : gt;
          t.addEventListener(e, s, i);
        }
      } else {
        var p = i ? dt : gt;
        t.removeEventListener(e, p, i);
      }
    else if (e !== "dangerouslySetInnerHTML") {
      if (o)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && // Default value in browsers is `-1` and an empty string is
      // cast to `0` instead
      e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = r ?? "";
          break t;
        } catch {
        }
      typeof r == "function" || (r != null && (r !== !1 || e.indexOf("-") != -1) ? t.setAttribute(e, r) : t.removeAttribute(e));
    }
}
function gt(t) {
  return this._listeners[t.type + !1](v.event ? v.event(t) : t);
}
function dt(t) {
  return this._listeners[t.type + !0](v.event ? v.event(t) : t);
}
function lt(t, e, r, n, o, i, s, p, c) {
  var l, u = e.type;
  if (e.constructor !== void 0)
    return null;
  r._hydrating != null && (c = r._hydrating, p = e._dom = r._dom, e._hydrating = null, i = [p]), (l = v._diff) && l(e);
  try {
    t:
      if (typeof u == "function") {
        var a, h, f, _, d, g, y = e.props;
        l = u.contextType;
        var C = l && n[l._id], P = l ? C ? C.props.value : l._defaultValue : n;
        if (r._component ? (a = e._component = r._component, g = a._processingException = a._pendingError) : ("prototype" in u && u.prototype.render ? e._component = a = new u(y, P) : (e._component = a = new q(y, P), a.constructor = u, a.render = se), C && C.sub(a), a.props = y, a.state || (a.state = {}), a.context = P, a._globalContext = n, h = a._dirty = !0, a._renderCallbacks = [], a._stateCallbacks = []), a._nextState == null && (a._nextState = a.state), u.getDerivedStateFromProps != null && (a._nextState == a.state && (a._nextState = S({}, a._nextState)), S(a._nextState, u.getDerivedStateFromProps(y, a._nextState))), f = a.props, _ = a.state, a._vnode = e, h)
          u.getDerivedStateFromProps == null && a.componentWillMount != null && a.componentWillMount(), a.componentDidMount != null && a._renderCallbacks.push(a.componentDidMount);
        else {
          if (u.getDerivedStateFromProps == null && y !== f && a.componentWillReceiveProps != null && a.componentWillReceiveProps(y, P), !a._force && a.shouldComponentUpdate != null && a.shouldComponentUpdate(y, a._nextState, P) === !1 || e._original === r._original) {
            e._original !== r._original && (a.props = y, a.state = a._nextState, a._dirty = !1), a._force = !1, e._dom = r._dom, e._children = r._children, e._children.forEach(function(L) {
              L && (L._parent = e);
            });
            for (var N = 0; N < a._stateCallbacks.length; N++)
              a._renderCallbacks.push(a._stateCallbacks[N]);
            a._stateCallbacks = [], a._renderCallbacks.length && s.push(a);
            break t;
          }
          a.componentWillUpdate != null && a.componentWillUpdate(y, a._nextState, P), a.componentDidUpdate != null && a._renderCallbacks.push(function() {
            a.componentDidUpdate(f, _, d);
          });
        }
        a.context = P, a.props = y, a._parentDom = t;
        var B = v._render, Xt = 0;
        if ("prototype" in u && u.prototype.render) {
          a.state = a._nextState, a._dirty = !1, B && B(e), l = a.render(a.props, a.state, a.context);
          for (var V = 0; V < a._stateCallbacks.length; V++)
            a._renderCallbacks.push(a._stateCallbacks[V]);
          a._stateCallbacks = [];
        } else
          do
            a._dirty = !1, B && B(e), l = a.render(a.props, a.state, a.context), a.state = a._nextState;
          while (a._dirty && ++Xt < 25);
        a.state = a._nextState, a.getChildContext != null && (n = S(S({}, n), a.getChildContext())), !h && a.getSnapshotBeforeUpdate != null && (d = a.getSnapshotBeforeUpdate(f, _));
        var qt = l != null && l.type === X && l.key == null, tt = qt ? l.props.children : l;
        Bt(t, Array.isArray(tt) ? tt : [tt], e, r, n, o, i, s, p, c), a.base = e._dom, e._hydrating = null, a._renderCallbacks.length && s.push(a), g && (a._pendingError = a._processingException = null), a._force = !1;
      } else
        i == null && e._original === r._original ? (e._children = r._children, e._dom = r._dom) : e._dom = ae(r._dom, e, r, n, o, i, s, c);
    (l = v.diffed) && l(e);
  } catch (L) {
    e._original = null, (c || i != null) && (e._dom = p, e._hydrating = !!c, i[i.indexOf(p)] = null), v._catchError(L, e, r);
  }
}
function It(t, e) {
  v._commit && v._commit(e, t), t.some(function(r) {
    try {
      t = r._renderCallbacks, r._renderCallbacks = [], t.some(function(n) {
        n.call(r);
      });
    } catch (n) {
      v._catchError(n, r._vnode);
    }
  });
}
function ae(t, e, r, n, o, i, s, p) {
  var c = r.props, l = e.props, u = e.type, a = 0;
  if (u === "svg" && (o = !0), i != null)
    for (; a < i.length; a++) {
      var h = i[a];
      if (h && "setAttribute" in h == !!u && (u ? h.localName === u : h.nodeType === 3)) {
        t = h, i[a] = null;
        break;
      }
    }
  if (t == null) {
    if (u === null)
      return document.createTextNode(l);
    o ? t = document.createElementNS(
      "http://www.w3.org/2000/svg",
      // @ts-ignore We know `newVNode.type` is a string
      u
    ) : t = document.createElement(
      // @ts-ignore We know `newVNode.type` is a string
      u,
      l.is && l
    ), i = null, p = !1;
  }
  if (u === null)
    c !== l && (!p || t.data !== l) && (t.data = l);
  else {
    i = i && ft.call(t.childNodes), c = r.props || w;
    var f = c.dangerouslySetInnerHTML, _ = l.dangerouslySetInnerHTML;
    if (!p) {
      if (i != null)
        for (c = {}, a = 0; a < t.attributes.length; a++)
          c[t.attributes[a].name] = t.attributes[a].value;
      (_ || f) && (!_ || (!f || _.__html != f.__html) && _.__html !== t.innerHTML) && (t.innerHTML = _ && _.__html || "");
    }
    if (oe(t, l, c, o, p), _)
      e._children = [];
    else if (a = e.props.children, Bt(t, Array.isArray(a) ? a : [a], e, r, n, o && u !== "foreignObject", i, s, i ? i[0] : r._children && m(r, 0), p), i != null)
      for (a = i.length; a--; )
        i[a] != null && $t(i[a]);
    p || ("value" in l && (a = l.value) !== void 0 && // #2756 For the <progress>-element the initial value is 0,
    // despite the attribute not being present. When the attribute
    // is missing the progress bar is treated as indeterminate.
    // To fix that we'll always update it when it is 0 for progress elements
    (a !== t.value || u === "progress" && !a || // This is only for IE 11 to fix <select> value not being updated.
    // To avoid a stale select value we need to set the option.value
    // again, which triggers IE11 to re-evaluate the select value
    u === "option" && a !== c.value) && G(t, "value", a, c.value, !1), "checked" in l && (a = l.checked) !== void 0 && a !== t.checked && G(t, "checked", a, c.checked, !1));
  }
  return t;
}
function Gt(t, e, r) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (n) {
    v._catchError(n, r);
  }
}
function Jt(t, e, r) {
  var n;
  if (v.unmount && v.unmount(t), (n = t.ref) && (!n.current || n.current === t._dom) && Gt(n, null, e), (n = t._component) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (i) {
        v._catchError(i, e);
      }
    n.base = n._parentDom = null, t._component = void 0;
  }
  if (n = t._children)
    for (var o = 0; o < n.length; o++)
      n[o] && Jt(n[o], e, r || typeof t.type != "function");
  !r && t._dom != null && $t(t._dom), t._parent = t._dom = t._nextDom = void 0;
}
function se(t, e, r) {
  return this.constructor(t, r);
}
function ue(t, e, r) {
  v._root && v._root(t, e);
  var n = typeof r == "function", o = n ? null : r && r._children || e._children;
  t = (!n && r || e)._children = zt(X, null, [t]);
  var i = [];
  lt(
    e,
    // Determine the new vnode tree and store it on the DOM element on
    // our custom `_children` property.
    t,
    o || w,
    w,
    e.ownerSVGElement !== void 0,
    !n && r ? [r] : o ? null : e.firstChild ? ft.call(e.childNodes) : null,
    i,
    !n && r ? r : o ? o._dom : e.firstChild,
    n
  ), It(i, t);
}
var pt = /* @__PURE__ */ function() {
  function t() {
    Y(this, t), E(this, "map", /* @__PURE__ */ new Map());
  }
  return H(t, [{
    key: "get",
    value: function(r, n) {
      var o = this.map.get(r);
      if (o)
        return o.get(n);
    }
  }, {
    key: "set",
    value: function(r, n, o) {
      var i, s = this.map.get(r);
      s || (s = /* @__PURE__ */ new Map(), this.map.set(r, s)), (i = s) === null || i === void 0 || i.set(n, o);
    }
  }, {
    key: "forEach",
    value: function(r) {
      this.map.forEach(function(n, o) {
        n.forEach(function(i, s) {
          r(i, o, s);
        });
      });
    }
  }, {
    key: "delete",
    value: function(r) {
      this.map.delete(r);
    }
  }, {
    key: "deleteAll",
    value: function() {
      var r = this;
      this.map.forEach(function(n, o) {
        r.map.delete(o);
      });
    }
  }]), t;
}(), fe = /* @__PURE__ */ H(function t() {
  var e = this;
  Y(this, t), E(this, "eventMap", new pt()), E(this, "bindListener", function(r, n, o) {
    if (!(!r || !n || !o)) {
      var i = e.eventMap.get(r, n);
      i || (i = /* @__PURE__ */ new Set(), e.eventMap.set(r, n, i)), i.has(o) || (i.add(o), r.addEventListener(n, o, !0));
    }
  }), E(this, "removeAllListener", function() {
    e.eventMap.forEach(function(r, n, o) {
      r.forEach(function(i) {
        n.removeEventListener(o, i);
      });
    }), e.eventMap.deleteAll();
  });
});
function Kt(t) {
  var e = le();
  return function() {
    var n = _t(t), o;
    if (e) {
      var i = _t(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return Vt(this, o);
  };
}
function le() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var nt = function(e) {
  return !(e || e === !1 || e === 0);
}, pe = function(e, r) {
  var n = e;
  switch (r) {
    case Number:
      n = nt(e) ? e : Number(e);
      break;
    case Boolean:
      n = !([null, "false", !1, void 0].indexOf(e) > -1);
      break;
  }
  return n;
}, ce = {
  observed: !0,
  type: String,
  converter: pe
}, j = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return function(r, n) {
    return r.constructor.createProperty(n, e);
  };
}, it = new pt(), ot = new pt();
function he(t) {
  var e = typeof t == "string" ? {
    tag: t
  } : t, r = e.tag, n = e.style, o = n === void 0 ? "" : n;
  return function(i) {
    var s = /* @__PURE__ */ function(p) {
      Rt(l, p);
      var c = Kt(l);
      function l() {
        var u;
        Y(this, l), u = c.call(this);
        var a = u.attachShadow({
          mode: "open"
        });
        if (a) {
          var h = document.createElement("style");
          h.innerHTML = o, a.append(h);
        }
        return ot.forEach(function(f, _, d) {
          _ === i && Object.defineProperty($(u), d, f(u[d]));
        }), u;
      }
      return H(l, null, [{
        key: "observedAttributes",
        get: function() {
          var a = [];
          return it.forEach(function(h, f, _) {
            f === i && h.observed && a.push(_);
          }), a;
        }
      }, {
        key: "isBooleanProperty",
        value: function(a) {
          var h = !1;
          return it.forEach(function(f, _, d) {
            if (_ === i && f.type === Boolean && a === d)
              return h = !0, h;
          }), h;
        }
      }]), l;
    }(i);
    customElements.get(r) || customElements.define(r, s);
  };
}
var z = /* @__PURE__ */ function(t) {
  Rt(r, t);
  var e = Kt(r);
  function r() {
    var n;
    Y(this, r);
    for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return n = e.call.apply(e, [this].concat(i)), E($(n), "eventController", new fe()), E($(n), "rootPatch", function(p) {
      n.shadowRoot && ue(p, n.shadowRoot);
    }), E($(n), "$on", function(p, c, l) {
      return n.eventController.bindListener(l || $(n), p, c);
    }), n;
  }
  return H(r, [{
    key: "_render",
    value: function() {
      var o = this.render();
      o && this.rootPatch(o);
    }
  }, {
    key: "_updateProperty",
    value: function() {
      var o = this;
      this.constructor.observedAttributes.forEach(function(i) {
        o[i] = o[i];
      });
    }
  }, {
    key: "_updateBooleanProperty",
    value: function(o) {
      this.constructor.isBooleanProperty(o) && (this[o] || (this[o] = this[o]));
    }
  }, {
    key: "$emit",
    value: function(o, i) {
      return this.dispatchEvent(new CustomEvent(o, Object.assign({
        bubbles: !0
      }, i)));
    }
  }, {
    key: "componentDidMount",
    value: function() {
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
    }
  }, {
    key: "shouldComponentUpdate",
    value: function(o, i, s) {
      return i !== s;
    }
  }, {
    key: "componentDidUpdate",
    value: function(o, i, s) {
    }
  }, {
    key: "render",
    value: function() {
      return "";
    }
  }, {
    key: "connectedCallback",
    value: function() {
      this._updateProperty(), this._render(), typeof this.componentDidMount == "function" && this.componentDidMount();
    }
  }, {
    key: "attributeChangedCallback",
    value: function(o, i, s) {
      var p = this[o] || s;
      typeof this.shouldComponentUpdate == "function" && !this.shouldComponentUpdate(o, i, p) || (this._render(), typeof this.componentDidUpdate == "function" && this.componentDidUpdate(o, i, p), s !== i && this._updateBooleanProperty(o));
    }
  }, {
    key: "disconnectedCallback",
    value: function() {
      typeof this.componentWillUnmount == "function" && this.componentWillUnmount(), this.eventController.removeAllListener(), this.rootPatch(null);
    }
  }], [{
    key: "getPropertyDescriptor",
    value: function(o, i) {
      return function(s) {
        return {
          get: function() {
            var c = this.getAttribute(o);
            return !nt(s) && nt(c) && (i.type !== Boolean || c !== "") ? s : (typeof i.converter == "function" && (c = i.converter(c, i.type)), c);
          },
          set: function(c) {
            var l = c;
            typeof i.converter == "function" && (l = i.converter(c, i.type)), l ? typeof l == "boolean" ? this.setAttribute(o, "") : this.setAttribute(o, l) : this.removeAttribute(o);
          },
          configurable: !0,
          enumerable: !0
        };
      };
    }
  }, {
    key: "getStateDescriptor",
    value: function() {
      return function(o) {
        var i = o;
        return {
          get: function() {
            return i;
          },
          set: function(p) {
            i = p, this._render();
          },
          configurable: !0,
          enumerable: !0
        };
      };
    }
  }, {
    key: "createProperty",
    value: function(o, i) {
      var s = Object.assign({}, ce, i);
      it.set(this, o, s), ot.set(this, o, this.getPropertyDescriptor(o, s));
    }
  }, {
    key: "createState",
    value: function(o) {
      ot.set(this, o, this.getStateDescriptor());
    }
  }]), r;
}(/* @__PURE__ */ Nt(HTMLElement));
E(z, "h", zt);
var _e = typeof global == "object" && global && global.Object === Object && global;
const ye = _e;
var ve = typeof self == "object" && self && self.Object === Object && self, ge = ye || ve || Function("return this")();
const ct = ge;
var de = ct.Symbol;
const J = de;
var Qt = Object.prototype, be = Qt.hasOwnProperty, xe = Qt.toString, U = J ? J.toStringTag : void 0;
function Se(t) {
  var e = be.call(t, U), r = t[U];
  try {
    t[U] = void 0;
    var n = !0;
  } catch {
  }
  var o = xe.call(t);
  return n && (e ? t[U] = r : delete t[U]), o;
}
var Ee = Object.prototype, Oe = Ee.toString;
function ke(t) {
  return Oe.call(t);
}
var Ce = "[object Null]", Pe = "[object Undefined]", bt = J ? J.toStringTag : void 0;
function Me(t) {
  return t == null ? t === void 0 ? Pe : Ce : bt && bt in Object(t) ? Se(t) : ke(t);
}
function Yt(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var je = "[object AsyncFunction]", Ae = "[object Function]", Re = "[object GeneratorFunction]", Te = "[object Proxy]";
function Ue(t) {
  if (!Yt(t))
    return !1;
  var e = Me(t);
  return e == Ae || e == Re || e == je || e == Te;
}
var $e = ct["__core-js_shared__"];
const rt = $e;
var xt = function() {
  var t = /[^.]+$/.exec(rt && rt.keys && rt.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function ze(t) {
  return !!xt && xt in t;
}
var me = Function.prototype, Fe = me.toString;
function Be(t) {
  if (t != null) {
    try {
      return Fe.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Le = /[\\^$.*+?()[\]{}|]/g, We = /^\[object .+?Constructor\]$/, we = Function.prototype, Ie = Object.prototype, Ge = we.toString, Je = Ie.hasOwnProperty, Ke = RegExp(
  "^" + Ge.call(Je).replace(Le, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Qe(t) {
  if (!Yt(t) || ze(t))
    return !1;
  var e = Ue(t) ? Ke : We;
  return e.test(Be(t));
}
function Ye(t, e) {
  return t == null ? void 0 : t[e];
}
function Ht(t, e) {
  var r = Ye(t, e);
  return Qe(r) ? r : void 0;
}
function He(t, e) {
  return t === e || t !== t && e !== e;
}
var Xe = Ht(Object, "create");
const F = Xe;
function qe() {
  this.__data__ = F ? F(null) : {}, this.size = 0;
}
function De(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Ze = "__lodash_hash_undefined__", Ne = Object.prototype, Ve = Ne.hasOwnProperty;
function tr(t) {
  var e = this.__data__;
  if (F) {
    var r = e[t];
    return r === Ze ? void 0 : r;
  }
  return Ve.call(e, t) ? e[t] : void 0;
}
var er = Object.prototype, rr = er.hasOwnProperty;
function nr(t) {
  var e = this.__data__;
  return F ? e[t] !== void 0 : rr.call(e, t);
}
var ir = "__lodash_hash_undefined__";
function or(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = F && e === void 0 ? ir : e, this;
}
function M(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
M.prototype.clear = qe;
M.prototype.delete = De;
M.prototype.get = tr;
M.prototype.has = nr;
M.prototype.set = or;
function ar() {
  this.__data__ = [], this.size = 0;
}
function D(t, e) {
  for (var r = t.length; r--; )
    if (He(t[r][0], e))
      return r;
  return -1;
}
var sr = Array.prototype, ur = sr.splice;
function fr(t) {
  var e = this.__data__, r = D(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : ur.call(e, r, 1), --this.size, !0;
}
function lr(t) {
  var e = this.__data__, r = D(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function pr(t) {
  return D(this.__data__, t) > -1;
}
function cr(t, e) {
  var r = this.__data__, n = D(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
function T(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
T.prototype.clear = ar;
T.prototype.delete = fr;
T.prototype.get = lr;
T.prototype.has = pr;
T.prototype.set = cr;
var hr = Ht(ct, "Map");
const _r = hr;
function yr() {
  this.size = 0, this.__data__ = {
    hash: new M(),
    map: new (_r || T)(),
    string: new M()
  };
}
function vr(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Z(t, e) {
  var r = t.__data__;
  return vr(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function gr(t) {
  var e = Z(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function dr(t) {
  return Z(this, t).get(t);
}
function br(t) {
  return Z(this, t).has(t);
}
function xr(t, e) {
  var r = Z(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
function A(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
A.prototype.clear = yr;
A.prototype.delete = gr;
A.prototype.get = dr;
A.prototype.has = br;
A.prototype.set = xr;
var Sr = "Expected a function";
function ht(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Sr);
  var r = function() {
    var n = arguments, o = e ? e.apply(this, n) : n[0], i = r.cache;
    if (i.has(o))
      return i.get(o);
    var s = t.apply(this, n);
    return r.cache = i.set(o, s) || i, s;
  };
  return r.cache = new (ht.Cache || A)(), r;
}
ht.Cache = A;
const Er = `.star{position:relative;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:100% 100%;mask-size:100% 100%}.star__progress{position:absolute;top:0;bottom:0;pointer-events:none}.star-list{display:flex}
`, Or = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAABpklEQVR4Ab3Bv0tbURzG4TeQgjj4YxCHxkGyCUI0Q+2StIJu4qAgRHEQ7Ozm4ODqP+Ag6OTQukV0aTcniyBCHHUzm1VuJ3HI/RSREr16j0m/5/R51B7ekVUojPKDmJjvFOUfRSL++k1RftHJBU9d0Cmf2CRpU/4wQUxSzIT8oIcrXnNFj3xglzS7smMGlxnZ0M81Ltf0y4J93rKvf8c6rVhX+8gyziGtOmScrFpDH4vsEdGuiD0W6VM6CqxxTAOLBsesUdBzfGSLOj7V2eKDHpBhm1C2yYgVQloR54RUEzeEdCNOCelUVAhpQWSoEkpVD+jmkhAu6dYjCtzh2x0FNbGEb0t6jh182lESHZzhyxkdeok8ET5E5PU6prGLmVY6vmH1VS6UsSrJhRxW7+VCDqucXMhjlZcLQ1gNyYURrEbkwhhWY3KhjFVZLkxiNSkXprCakguzWM3KhQpWFbnwmTT3VJljkEHmqHJPmpJc6OIXSTFHLNOrJ+jlC0fEJN3SJTcWaNBUY5UBpWCAVWo0NZjX2/jEAXV+ssGwWsAwG5xQ54CS/r8/HRXk7y1u4P0AAAAASUVORK5CYII=", kr = /^((?:\d+)?(?:\.\d*)?)([a-zA-Z]+)?$/;
let b = class extends z {
  constructor() {
    super(...arguments);
    x(this, "value", 0);
    x(this, "size", "20");
    x(this, "space", "4");
    x(this, "count", 5);
    x(this, "activeColor", "linear-gradient(to right, #FB990F, #FF5526)");
    x(this, "color", "#F0F3F5");
    x(this, "icon", Or);
    x(this, "parseValue", ht(this._parseValue));
  }
  get roundedValue() {
    return Math.min(this.count, Math.max(0, this.value));
  }
  _parseValue(r, n = "px") {
    const o = r.match(kr);
    if (!o)
      return [0, n];
    const [i, s, p] = o;
    return [parseFloat(s), p || n];
  }
  formatParsedValue([r, n]) {
    return `${r}${n}`;
  }
  get parsedSize() {
    return this.parseValue(this.size);
  }
  get parsedSizeValue() {
    return this.parsedSize[0];
  }
  get parsedSizeUnit() {
    return this.parsedSize[1];
  }
  get formattedSize() {
    return this.formatParsedValue(this.parsedSize);
  }
  get progress() {
    return this.roundedValue / this.count;
  }
  get progressBgWidth() {
    return this.parsedSizeValue * this.count;
  }
  get progressWidth() {
    return this.progressBgWidth * this.progress;
  }
  componentWillUnmount() {
    this.parseValue.cache.clear();
  }
  render() {
    return z.h("div", {
      class: "star-list"
    }, Array.from(new Array(this.count), (r, n) => z.h("div", {
      key: n + 1,
      class: "star",
      style: {
        width: this.formattedSize,
        height: this.formattedSize,
        marginLeft: n === 0 ? "0px" : this.formatParsedValue(this.parseValue(this.space)),
        background: this.color,
        "mask-image": `url(${this.icon})`,
        "-webkit-mask-image": `url(${this.icon})`
      }
    }, z.h("div", {
      class: "star__progress",
      style: {
        width: this.formatParsedValue([this.progressWidth, this.parsedSizeUnit]),
        left: this.formatParsedValue([n * this.parsedSizeValue * -1, this.parsedSizeUnit]),
        background: `${this.activeColor} left top / ${this.formatParsedValue([this.progressBgWidth, this.parsedSizeUnit])} 100%`
      }
    }))));
  }
};
O([j({
  type: Number
})], b.prototype, "value", void 0);
O([j({
  type: String
})], b.prototype, "size", void 0);
O([j({
  type: String
})], b.prototype, "space", void 0);
O([j({
  type: Number
})], b.prototype, "count", void 0);
O([j({
  type: String
})], b.prototype, "activeColor", void 0);
O([j({
  type: String
})], b.prototype, "color", void 0);
O([j({
  type: String
})], b.prototype, "icon", void 0);
b = O([he({
  tag: "quark-ui-rate",
  style: Er
})], b);
const Mr = b;
export {
  Mr as QuarkUiRate
};