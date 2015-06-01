requirejs.config({
  baseUrl: "js",
  paths: {
    // Libraries
    reactjs: "https://fb.me/react-with-addons-0.13.3.min",

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