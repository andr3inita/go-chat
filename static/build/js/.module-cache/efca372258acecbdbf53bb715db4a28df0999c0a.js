requirejs.config({
  baseUrl: "js",
  paths: {
    // Libraries
    reactjs: "bower_components/react/react.min",

    // Application
    Application: "application"
  },
  shim: {
    // Libraries
    reactjs: {
      exports: "React"
    }
  }
});