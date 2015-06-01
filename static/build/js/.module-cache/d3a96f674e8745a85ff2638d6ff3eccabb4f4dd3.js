require(["reactjs", "components/chatui"], function(React, ChatUI) {
  React.renderComponent(React.createElement(ChatUI, null), document.querySelector(".content"))
});