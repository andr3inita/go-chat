requirejs.config({
  baseUrl: "js",
  paths: {
    // Libraries
    "react": "js/bower_components/react/react.min.js",

    "ChatUI": "js/components/chatui.js"
  }
});

require(["reactjs", "components/chatui"], function(ChatUI) {

});