require(["reactjs", "components/chatui"], function(React, ChatUI) {
  React.render(React.createElement(ChatUI, null), document.querySelector(".content"))
});