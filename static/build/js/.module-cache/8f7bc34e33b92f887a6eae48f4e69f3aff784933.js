requirejs.config({
  baseUrl: "js",
  paths: {
    // Libraries
    react: "bower_components/react/react-with-addons.min",

    // Application
    Application: "application"
  },
  shim: {
    // // Libraries
    // reactjs: {
    //   exports: "React"
    // }
  }
});