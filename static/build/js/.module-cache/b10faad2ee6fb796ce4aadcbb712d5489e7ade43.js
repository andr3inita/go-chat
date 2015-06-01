require(["reactjs", "components/chatui"], function(ChatUI) {
  React.renderComponent(React.createElement(ChatUI, null), document.querySelector(".content"))
});