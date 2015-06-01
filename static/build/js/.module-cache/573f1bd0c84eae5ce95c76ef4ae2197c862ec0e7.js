requirejs.config({
  baseUrl: "js",
  paths: {
    // Libraries
    reactjs: "bower_components/react/react-with-addons.min",
    channel: location.protocol + "//_ah/channel/jsapi?noext",

    // Application
    Application: "application"
  }
});