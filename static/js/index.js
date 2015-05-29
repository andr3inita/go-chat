!(function() {

var stringifyMessage = function(user, msg) {
  return JSON.stringify([user, msg]);
};

var Application = (function() {
  function Application(username) {
    var form = document.querySelector(".input-form form"),
        button = document.querySelector(".input-form button"),
        handler = this.onSendMessage.bind(this),
        token = document.querySelector("#channel-token").value,
        channel;

    channel = new goog.appengine.Channel(token);
    this.socket = channel.open();
    this.socket.onopen = this.onSocketOpen.bind(this);
    this.socket.onclose = this.onSocketClose.bind(this);
    this.socket.onmessage = this.onSocketMessage.bind(this);
    this.socket.onerror = this.onSocketError.bind(this);

    this.username = username;
    this.input = document.querySelector(".input-form input");
    this.output = document.querySelector(".message-box");
    this.template = document.querySelector("#message-tmpl");

    button.addEventListener("click", handler);
    form.addEventListener("submit", function(e) {
      handler(e);

      e.preventDefault();
      return false;
    });
  }

  var proto = Application.prototype;

  proto.onSocketOpen = function() {
    this.sendMessage("SYSTEM", "User " + this.username + " has joined the chat.");
  };

  proto.onSocketClose = function() {
    this.sendMessage("SYSTEM", "User " + this.username + " has left the chat.");
  };

  proto.onSocketError = function() {
    smoke.signal("There was a connection error with the socket, refresh to try again.", function() {}, {duration: 120000});
  };

  proto.onSocketMessage = function(e) {
    var data = JSON.parse(e.data);
    this.renderMessage(data[0], data[1]);
  };

  proto.onSendMessage = function() {
    this.sendMessage(this.username, this.input.value);
    this.input.value = "";
  };

  proto.sendMessage = function(username, message) {
    var xhr = new XMLHttpRequest(),
        path = "/send?message=" + encodeURIComponent(message) + "&username=" + encodeURIComponent(username);
    xhr.open("POST", path, true)
    xhr.send()
  };

  proto.renderMessage = function(username, message) {
    var tmpl = document.importNode(this.template.content, true);

    tmpl.querySelector(".username").textContent = username;
    tmpl.querySelector(".body").textContent = message;

    this.output.appendChild(tmpl);

    this.output.scrollTop = this.output.scrollHeight;
  };

  return Application;
})();

var adjectives = ["fancy", "insane", "fuzzy", "shiny", "intense", "bold", "bright", "feathery", "innert"],
    nouns = ["dog", "house", "office", "computer", "person", "cat", "bird", "car"],
    randomNumMax = 999999,
    randomNumMin = 100000,
    emptyFunction = function() {},
    randomArrayValue, randomName;

randomArrayValue = function(arr) {
  var len = arr.length,
      idx = Math.floor(Math.random() * len);

  return arr[idx];
};

randomName = function() {
  var name = [randomArrayValue(adjectives), randomArrayValue(nouns)],
      num = Math.floor(Math.random() * (randomNumMax - randomNumMin) + randomNumMin);
  name.push(num);

  return name.join("-");
};

var smokeConfig = {
  ok: "Set",
  cancel: "Cancel",
  reverseButtons: true,
  value: randomName()
};

smoke.prompt("Username:", function(username) {
  if (username === false || username === "SYSTEM") {
    smoke.signal("You must enter a valid username to use the chat, refresh to restart the process.", emptyFunction, {duration: 120000});
  } else {
    username = username.trim();
    window.app = new Application(username);
  }
}, smokeConfig);

})();