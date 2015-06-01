require(["components/chatui"], function(ChatUI) {
  console.log(ChatUI);
  React.render(React.createElement(ChatUI, null), document.querySelector(".content"))
});