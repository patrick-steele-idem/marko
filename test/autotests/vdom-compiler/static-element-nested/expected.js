var template = require("marko/vdom").c(__filename);

module.exports = template;

var marko_helpers = require("marko/runtime/vdom/helpers"),
    marko_str = marko_helpers.s,
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("69a896"),
    marko_node0 = marko_createElement("div", {
        "class": "hello",
        onclick: "onClick()"
      }, 1, marko_const_nextId())
      .t("Welcome!");

function render(data, out) {
  out.e("span", null, 2)
    .e("h1", null, 1)
      .t("Hello " +
        marko_str(data.name) +
        "!")
    .n(marko_node0);
}

template._ = render;
