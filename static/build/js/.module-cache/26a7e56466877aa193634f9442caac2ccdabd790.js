require(["components/chatui"], function(ChatUI) {
  console.log(document.querySelector(".content"));
  React.render(React.createElement(ChatUI, null), document.querySelector(".content"))
});