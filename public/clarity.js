!(function (c, l, a, r, i, t, y) {
  if (a[c].v || a[c].t) return a[c]("event", c, "dup." + i.projectId);
  (a[c].t = !0),
    ((t = l.createElement(r)).async = !0),
    (t.src = "/clarity2.js"),
    (y = l.getElementsByTagName(r)[0]).parentNode.insertBefore(t, y),
    a[c]("start", i),
    a[c].q.unshift(a[c].q.pop());
})("clarity", document, window, "script", {
  projectId: "g36r0xn4ob",
  upload: "https://o.clarity.ms/collect",
  expire: 365,
  cookies: ["_uetmsclkid", "_uetvid"],
  track: true,
  lean: false,
  content: true,
  extract: [3, 1, ["4f509md79", "zjy56jaz", "4s4zm72hj"]],
  report: "https://www.clarity.ms/report/eusc-sc",
});
