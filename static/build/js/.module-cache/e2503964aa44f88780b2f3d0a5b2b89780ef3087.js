requirejs.config({
  baseUrl: "js",
  paths: {
    // Libraries
    "react": "bower_components/react/react.min.js",
  }
});

require(["reactjs", "components/chatui"], function(ChatUI) {
  React.renderComponent(React.createElement(ChatUI, null), document.querySelector(".content"))
});

