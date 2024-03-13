import {
  a0 as ne,
  g as se,
  a1 as $,
  F as L,
  O as M,
  r as y,
  o as I,
  V as G,
  d as H,
  c as C,
  a2 as U,
  t as h,
  v as m,
  x as l,
  _ as W,
  a3 as ae,
  a4 as le,
  R as T,
  A as E,
  L as _,
  z as k,
  a5 as A,
  y as F,
  a6 as j,
  a7 as oe,
  a8 as re,
  a9 as ce,
  B as X,
  C as ie,
  D as ue,
  aa as de,
  ab as pe,
} from "./entry.b3B3QQ2p.js";
const fe = "" + globalThis.__publicAssetsURL("assets/icons/language.png");
function P(e, n, ...a) {
  if (e in n) {
    let t = n[e];
    return typeof t == "function" ? t(...a) : t;
  }
  let s = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      n
    )
      .map((t) => `"${t}"`)
      .join(", ")}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(s, P), s);
}
var N = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(N || {}),
  he = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(he || {});
function R({
  visible: e = !0,
  features: n = 0,
  ourProps: a,
  theirProps: s,
  ...t
}) {
  var u;
  let o = J(s, a),
    r = Object.assign(t, { props: o });
  if (e || (n & 2 && o.static)) return B(r);
  if (n & 1) {
    let d = (u = o.unmount) == null || u ? 0 : 1;
    return P(d, {
      0() {
        return null;
      },
      1() {
        return B({
          ...t,
          props: { ...o, hidden: !0, style: { display: "none" } },
        });
      },
    });
  }
  return B(r);
}
function B({ props: e, attrs: n, slots: a, slot: s, name: t }) {
  var u, o;
  let { as: r, ...d } = ve(e, ["unmount", "static"]),
    i = (u = a.default) == null ? void 0 : u.call(a, s),
    g = {};
  if (s) {
    let c = !1,
      p = [];
    for (let [v, b] of Object.entries(s))
      typeof b == "boolean" && (c = !0), b === !0 && p.push(v);
    c && (g["data-headlessui-state"] = p.join(" "));
  }
  if (r === "template") {
    if (
      ((i = q(i ?? [])), Object.keys(d).length > 0 || Object.keys(n).length > 0)
    ) {
      let [c, ...p] = i ?? [];
      if (!_e(c) || p.length > 0)
        throw new Error(
          [
            'Passing props on "template"!',
            "",
            `The current component <${t} /> is rendering a "template".`,
            "However we need to passthrough the following props:",
            Object.keys(d)
              .concat(Object.keys(n))
              .map((f) => f.trim())
              .filter((f, S, te) => te.indexOf(f) === S)
              .sort((f, S) => f.localeCompare(S))
              .map((f) => `  - ${f}`).join(`
`),
            "",
            "You can apply a few solutions:",
            [
              'Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',
              "Render a single element as the child so that we can forward the props onto that element.",
            ].map((f) => `  - ${f}`).join(`
`),
          ].join(`
`)
        );
      let v = J((o = c.props) != null ? o : {}, d),
        b = ne(c, v);
      for (let f in v)
        f.startsWith("on") && (b.props || (b.props = {}), (b.props[f] = v[f]));
      return b;
    }
    return Array.isArray(i) && i.length === 1 ? i[0] : i;
  }
  return se(r, Object.assign({}, d, g), { default: () => i });
}
function q(e) {
  return e.flatMap((n) => (n.type === $ ? q(n.children) : [n]));
}
function J(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let n = {},
    a = {};
  for (let s of e)
    for (let t in s)
      t.startsWith("on") && typeof s[t] == "function"
        ? (a[t] != null || (a[t] = []), a[t].push(s[t]))
        : (n[t] = s[t]);
  if (n.disabled || n["aria-disabled"])
    return Object.assign(
      n,
      Object.fromEntries(Object.keys(a).map((s) => [s, void 0]))
    );
  for (let s in a)
    Object.assign(n, {
      [s](t, ...u) {
        let o = a[s];
        for (let r of o) {
          if (t instanceof Event && t.defaultPrevented) return;
          r(t, ...u);
        }
      },
    });
  return n;
}
function ve(e, n = []) {
  let a = Object.assign({}, e);
  for (let s of n) s in a && delete a[s];
  return a;
}
function _e(e) {
  return e == null
    ? !1
    : typeof e.type == "string" ||
        typeof e.type == "object" ||
        typeof e.type == "function";
}
let me = 0;
function ge() {
  return ++me;
}
function Y() {
  return ge();
}
var x = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(x || {});
function w(e) {
  var n;
  return e == null || e.value == null
    ? null
    : (n = e.value.$el) != null
    ? n
    : e.value;
}
let Q = Symbol("Context");
var O = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(O || {});
function be() {
  return L(Q, null);
}
function ye(e) {
  M(Q, e);
}
function z(e, n) {
  if (e) return e;
  let a = n ?? "button";
  if (typeof a == "string" && a.toLowerCase() === "button") return "button";
}
function we(e, n) {
  let a = y(z(e.value.type, e.value.as));
  return (
    I(() => {
      a.value = z(e.value.type, e.value.as);
    }),
    G(() => {
      var s;
      a.value ||
        (w(n) &&
          w(n) instanceof HTMLButtonElement &&
          !((s = w(n)) != null && s.hasAttribute("type")) &&
          (a.value = "button"));
    }),
    a
  );
}
var xe = ((e) => (
  (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
))(xe || {});
let Z = Symbol("DisclosureContext");
function V(e) {
  let n = L(Z, null);
  if (n === null) {
    let a = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(a, V), a);
  }
  return n;
}
let ee = Symbol("DisclosurePanelContext");
function ke() {
  return L(ee, null);
}
let $e = H({
    name: "Disclosure",
    props: {
      as: { type: [Object, String], default: "template" },
      defaultOpen: { type: [Boolean], default: !1 },
    },
    setup(e, { slots: n, attrs: a }) {
      let s = y(e.defaultOpen ? 0 : 1),
        t = y(null),
        u = y(null),
        o = {
          buttonId: y(`headlessui-disclosure-button-${Y()}`),
          panelId: y(`headlessui-disclosure-panel-${Y()}`),
          disclosureState: s,
          panel: t,
          button: u,
          toggleDisclosure() {
            s.value = P(s.value, { 0: 1, 1: 0 });
          },
          closeDisclosure() {
            s.value !== 1 && (s.value = 1);
          },
          close(r) {
            o.closeDisclosure();
            let d = r
              ? r instanceof HTMLElement
                ? r
                : r.value instanceof HTMLElement
                ? w(r)
                : w(o.button)
              : w(o.button);
            d == null || d.focus();
          },
        };
      return (
        M(Z, o),
        ye(C(() => P(s.value, { 0: O.Open, 1: O.Closed }))),
        () => {
          let { defaultOpen: r, ...d } = e,
            i = { open: s.value === 0, close: o.close };
          return R({
            theirProps: d,
            ourProps: {},
            slot: i,
            slots: n,
            attrs: a,
            name: "Disclosure",
          });
        }
      );
    },
  }),
  K = H({
    name: "DisclosureButton",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: null },
    },
    setup(e, { attrs: n, slots: a, expose: s }) {
      let t = V("DisclosureButton"),
        u = ke(),
        o = C(() => (u === null ? !1 : u.value === t.panelId.value));
      I(() => {
        o.value || (e.id !== null && (t.buttonId.value = e.id));
      }),
        U(() => {
          o.value || (t.buttonId.value = null);
        });
      let r = y(null);
      s({ el: r, $el: r }),
        o.value ||
          G(() => {
            t.button.value = r.value;
          });
      let d = we(
        C(() => ({ as: e.as, type: n.type })),
        r
      );
      function i() {
        var p;
        e.disabled ||
          (o.value
            ? (t.toggleDisclosure(), (p = w(t.button)) == null || p.focus())
            : t.toggleDisclosure());
      }
      function g(p) {
        var v;
        if (!e.disabled)
          if (o.value)
            switch (p.key) {
              case x.Space:
              case x.Enter:
                p.preventDefault(),
                  p.stopPropagation(),
                  t.toggleDisclosure(),
                  (v = w(t.button)) == null || v.focus();
                break;
            }
          else
            switch (p.key) {
              case x.Space:
              case x.Enter:
                p.preventDefault(), p.stopPropagation(), t.toggleDisclosure();
                break;
            }
      }
      function c(p) {
        switch (p.key) {
          case x.Space:
            p.preventDefault();
            break;
        }
      }
      return () => {
        var p;
        let v = { open: t.disclosureState.value === 0 },
          { id: b, ...f } = e,
          S = o.value
            ? { ref: r, type: d.value, onClick: i, onKeydown: g }
            : {
                id: (p = t.buttonId.value) != null ? p : b,
                ref: r,
                type: d.value,
                "aria-expanded": t.disclosureState.value === 0,
                "aria-controls":
                  t.disclosureState.value === 0 || w(t.panel)
                    ? t.panelId.value
                    : void 0,
                disabled: e.disabled ? !0 : void 0,
                onClick: i,
                onKeydown: g,
                onKeyup: c,
              };
        return R({
          ourProps: S,
          theirProps: f,
          slot: v,
          attrs: n,
          slots: a,
          name: "DisclosureButton",
        });
      };
    },
  }),
  Se = H({
    name: "DisclosurePanel",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      id: { type: String, default: null },
    },
    setup(e, { attrs: n, slots: a, expose: s }) {
      let t = V("DisclosurePanel");
      I(() => {
        e.id !== null && (t.panelId.value = e.id);
      }),
        U(() => {
          t.panelId.value = null;
        }),
        s({ el: t.panel, $el: t.panel }),
        M(ee, t.panelId);
      let u = be(),
        o = C(() =>
          u !== null
            ? (u.value & O.Open) === O.Open
            : t.disclosureState.value === 0
        );
      return () => {
        var r;
        let d = { open: t.disclosureState.value === 0, close: t.close },
          { id: i, ...g } = e,
          c = { id: (r = t.panelId.value) != null ? r : i, ref: t.panel };
        return R({
          ourProps: c,
          theirProps: g,
          slot: d,
          attrs: n,
          slots: a,
          features: N.RenderStrategy | N.Static,
          visible: o.value,
          name: "DisclosurePanel",
        });
      };
    },
  });
function je(e, n) {
  return (
    h(),
    m(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
      },
      [
        l("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
        }),
      ]
    )
  );
}
function Oe(e, n) {
  return (
    h(),
    m(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
      },
      [
        l("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M6 18 18 6M6 6l12 12",
        }),
      ]
    )
  );
}
const D = (e) => (ie("data-v-9f866b39"), (e = e()), ue(), e),
  De = { class: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" },
  Ee = { class: "relative flex h-16 items-center justify-between" },
  Ae = { class: "absolute inset-y-0 left-0 flex items-center sm:hidden" },
  Ce = D(() => l("span", { class: "absolute -inset-0.5" }, null, -1)),
  Pe = D(() => l("span", { class: "sr-only" }, "Open main menu", -1)),
  Ie = {
    class:
      "flex flex-1 items-center justify-center sm:items-stretch sm:justify-between",
  },
  Te = { class: "hidden sm:ml-6 sm:block" },
  Be = { class: "flex space-x-4" },
  Fe = ["href", "aria-current"],
  Ne = { class: "hidden sm:block" },
  Le = { class: "inline-flex items-center cursor-pointer" },
  Me = D(() =>
    l("img", { src: fe, alt: "world icon", class: "mr-3" }, null, -1)
  ),
  He = D(() => l("p", { class: "text-white text-xs" }, "ES", -1)),
  Ue = D(() => l("p", { class: "text-white text-xs" }, "EN", -1)),
  Re = [He, Ue],
  Ve = { class: "space-y-1 px-2 pb-3 pt-2" },
  Ye = {
    __name: "TwNavbar",
    setup(e) {
      const n = ae();
      let a = le();
      const s = y(!1),
        t = y(!1),
        u = [
          { name: "Home", href: "#hero", current: !0 },
          { name: "About", href: "#about", current: !1 },
          { name: "Projects", href: "#projects", current: !1 },
          { name: "Contact", href: "#contact", current: !1 },
        ],
        o = () => {
          if (document.getElementById("navbar")) {
            const i = window.scrollY || window.pageYOffset;
            s.value = i > 0;
          }
        };
      I(() => {
        window.addEventListener("scroll", o);
      }),
        U(() => {
          window.removeEventListener("scroll", o);
        });
      const r = (d) => {
        console.log(n.get("locale")),
          (t.value = d.target.checked),
          t.value && ((a.locale.value = "es"), n.set("locale", "es")),
          t.value || ((a.locale.value = "en"), n.set("locale", "en"));
      };
      return (d, i) => (
        h(),
        T(
          _($e),
          { as: "nav", class: A([{ scrolled: _(s) }, "navbar"]), id: "navbar" },
          {
            default: E(({ open: g }) => [
              l("div", De, [
                l("div", Ee, [
                  l("div", Ae, [
                    k(
                      _(K),
                      {
                        class:
                          "relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                      },
                      {
                        default: E(() => [
                          Ce,
                          Pe,
                          g
                            ? (h(),
                              T(_(Oe), {
                                key: 1,
                                class: "block h-6 w-6",
                                "aria-hidden": "true",
                              }))
                            : (h(),
                              T(_(je), {
                                key: 0,
                                class: "block h-6 w-6",
                                "aria-hidden": "true",
                              })),
                        ]),
                        _: 2,
                      },
                      1024
                    ),
                  ]),
                  l("div", Ie, [
                    l("div", Te, [
                      l("div", Be, [
                        (h(),
                        m(
                          $,
                          null,
                          j(u, (c) =>
                            l(
                              "a",
                              {
                                key: c.name,
                                href: c.href,
                                class: A([
                                  c.current ? "" : " hover:text-[#a15aff]",
                                  "rounded-md px-3 py-2 text-sm font-medium  text-white",
                                ]),
                                "aria-current": c.current ? "page" : void 0,
                              },
                              F(c.name),
                              11,
                              Fe
                            )
                          ),
                          64
                        )),
                      ]),
                    ]),
                    l("div", Ne, [
                      l("label", Le, [
                        Me,
                        ce(
                          l(
                            "input",
                            {
                              type: "checkbox",
                              "onUpdate:modelValue":
                                i[0] ||
                                (i[0] = (c) => (oe(t) ? (t.value = c) : null)),
                              class: "sr-only peer",
                              onChange: r,
                            },
                            null,
                            544
                          ),
                          [[re, _(t)]]
                        ),
                        l(
                          "div",
                          {
                            class: A([
                              {
                                "peer-checked:after:translate-x-full": _(t),
                                "rtl:peer-checked:after:-translate-x-full":
                                  _(t),
                              },
                              "flex gap-1 justify-center items-center dark:bg-transparent ring-2 ring-[#A15AFF] relative w-11 h-6 bg-transparent peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#A15AFF] dark:peer-focus:ring-[#A15AFF] rounded-full peer peer-checked:after:border-[#A15AFF] after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#A15AFF] after:border-transparent after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-transparent peer-checked:bg-transparent",
                            ]),
                          },
                          Re,
                          2
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              k(
                _(Se),
                { class: "sm:hidden" },
                {
                  default: E(() => [
                    l("div", Ve, [
                      (h(),
                      m(
                        $,
                        null,
                        j(u, (c) =>
                          k(
                            _(K),
                            {
                              key: c.name,
                              as: "a",
                              href: c.href,
                              class: A([
                                c.current
                                  ? "bg-gray-900 text-white"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "block rounded-md px-3 py-2 text-base font-medium",
                              ]),
                              "aria-current": c.current ? "page" : void 0,
                            },
                            { default: E(() => [X(F(c.name), 1)]), _: 2 },
                            1032,
                            ["href", "class", "aria-current"]
                          )
                        ),
                        64
                      )),
                    ]),
                  ]),
                  _: 1,
                }
              ),
            ]),
            _: 1,
          },
          8,
          ["class"]
        )
      );
    },
  },
  ze = W(Ye, [["__scopeId", "data-v-9f866b39"]]),
  Ke = { class: "links flex" },
  Ge = { class: "flex flex-col gap-y-4" },
  We = ["href"],
  Xe = {
    __name: "FloatingNav",
    setup(e) {
      const n = [
        {
          url: "https://www.linkedin.com/in/yeris-aguilar/",
          icon: "./assets/linkedin_nav.svg",
          alt: "LinkedIn icon",
        },
        {
          url: "mailto:yerisaguilar95@gmail.com",
          icon: "./assets/email_nav.svg",
          alt: "Email icon",
        },
        {
          url: "tel:+529632337458",
          icon: "./assets/phone_nav.svg",
          alt: "Phone icon",
        },
        {
          url: "https://github.com/Yalex95",
          icon: "./assets/github_nav.svg",
          alt: "Github icon",
        },
      ];
      return (a, s) => (
        h(),
        m("div", null, [
          l("div", Ke, [
            l("div", null, [
              l("ul", Ge, [
                (h(),
                m(
                  $,
                  null,
                  j(n, (t) =>
                    l(
                      "li",
                      {
                        key: t.alt,
                        class:
                          "rounded-lg flex justify-center items-center w-10 h-10 hover:bg-[#1F0642]",
                      },
                      [
                        l(
                          "a",
                          {
                            href: t.url,
                            class: "bg-contain bg-center w-6 h-6 bg-no-repeat",
                            style: de({ "background-image": `url(${t.icon})` }),
                          },
                          null,
                          12,
                          We
                        ),
                      ]
                    )
                  ),
                  64
                )),
              ]),
            ]),
          ]),
        ])
      );
    },
  },
  qe = Xe,
  Je = { class: "footer" },
  Qe = { class: "container flex" },
  Ze = { class: "w-1/3" },
  et = l("p", { class: "uppercase" }, "Front End web Developer", -1),
  tt = l("p", { class: "text-2xl capitalize" }, "Yeris Alejandra Aguilar", -1),
  nt = l("p", null, [l("i", { class: "location" }), X("Tijuana, MX")], -1),
  st = { class: "social mt-3" },
  at = ["href"],
  lt = ["src", "alt"],
  ot = { class: "flex-col justify-center items-center hidden md:flex w-1/3" },
  rt = { class: "quick-links" },
  ct = ["href"],
  it = l(
    "div",
    { class: "hidden md:block w-1/3 lg:flex flex-col items-center" },
    [
      l("p", { class: "text-2xl font-semibold" }, "Get Started TODAY!"),
      l("a", { href: "", class: "btn-white mt-2 text-center" }, " contact me"),
    ],
    -1
  ),
  ut = {
    __name: "Footer",
    setup(e) {
      const n = [
          { name: "Home", href: "#hero", current: !0 },
          { name: "About", href: "#about", current: !1 },
          { name: "Projects", href: "#projects", current: !1 },
        ],
        a = [
          { url: "", icon: "./assets/linkedIn.svg", alt: "LinkedIn icon" },
          { url: "", icon: "./assets/email.svg", alt: "Email icon" },
          { url: "", icon: "./assets/phone.svg", alt: "Phone icon" },
          { url: "", icon: "./assets/github.svg", alt: "Github icon" },
        ];
      return (s, t) => {
        const u = qe;
        return (
          h(),
          m("div", null, [
            l("footer", Je, [
              l("div", Qe, [
                l("div", Ze, [
                  et,
                  tt,
                  nt,
                  l("ul", st, [
                    (h(),
                    m(
                      $,
                      null,
                      j(a, (o) =>
                        l("li", { key: o.alt }, [
                          l(
                            "a",
                            { href: o.url, class: "linkedin" },
                            [
                              l(
                                "img",
                                { src: o.icon, alt: o.alt },
                                null,
                                8,
                                lt
                              ),
                            ],
                            8,
                            at
                          ),
                        ])
                      ),
                      64
                    )),
                  ]),
                ]),
                l("div", ot, [
                  l("ul", rt, [
                    (h(),
                    m(
                      $,
                      null,
                      j(n, (o) =>
                        l("li", { key: o.name }, [
                          l("a", { href: o.href }, F(o.name), 9, ct),
                        ])
                      ),
                      64
                    )),
                  ]),
                ]),
                it,
              ]),
            ]),
            k(u),
          ])
        );
      };
    },
  },
  dt = ut,
  pt = {};
function ft(e, n) {
  const a = ze,
    s = dt;
  return h(), m("div", null, [k(a), pe(e.$slots, "default"), k(s)]);
}
const vt = W(pt, [["render", ft]]);
export { vt as default };
