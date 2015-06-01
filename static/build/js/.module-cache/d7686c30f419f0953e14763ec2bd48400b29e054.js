requirejs.config({
  baseUrl: "js",
  paths: {
    // Libraries
    reactjs: "bower_componets/react/react-with-addons.min",

    // Application
    Application: "application"
  },
  shim: {
    reactjs: {
      exports: "React"
    }
  }
});