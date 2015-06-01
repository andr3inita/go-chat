require(["reactjs", "components/chatui"], function(ChatUI) {
  React.render(React.createElement(ChatUI, null), document.querySelector(".content"))
});