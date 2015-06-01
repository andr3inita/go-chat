define([
  "reactjs",
  "channel",
  "smoke",
  "random_name",
  "components/message_box",
  "components/input_form"
], function(React, goog, smoke, randomName, MessageBox, InputForm) {
  console.log(goog);
  return React.createClass({
    componentDidMount: function() {
      var smokeConfig = {
            ok: "Set",
            cancel: "Cancel",
            reverseButtons: true,
            value: randomName()
          },
          token = document.querySelector(".channel-token").value,
          channel = new goog.appengine.Channel(token),
          self = this;

      this.started = false;
      smoke.prompt("Username:", function(username) {
        if (username === false || username === "SYSTEM") {
          smoke.signal("You must enter a valid username to use the chat, refresh to restart the process.", emptyFunction, {duration: 120000});
        } else {
          self.username = username.trim();
          self.started = true;

          self.socket = channel.open();
          self.socket.onopen = self.onSocketOpen.bind(self);
          self.socket.onclose = self.onSocketClose.bind(self);
          self.socket.onmessage = self.onSocketMessage.bind(self);
          self.socket.onerror = self.onSocketError.bind(self);
        }
      }, smokeConfig);
    },

    onSocketOpen: function() {
      this.makeMessageRequest("SYSTEM", "User " + this.username + " has joined the chat.");
    },

    onSocketClose: function() {
      this.makeMessageRequest("SYSTEM", "User " + this.username + " has left the chat.");
    },

    onSocketError: function() {
      smoke.signal("There was a connection error with the socket, refresh to try again.", function() {}, {duration: 120000});
    },

    onSocketMessage: function(e) {
      var data = JSON.parse(e.data),
          messages = this.state.messages;
      // messages.push(data);
      this.setState(function(curState) {
        messages.push(data);
      });
    },

    sendMessage: function(message) {
      if (this.started) {
        this.makeMessageRequest(this.username, message);
      }
    },

    makeMessageRequest: function(username, message) {
      if (this.started) {
        var xhr = new XMLHttpRequest(),
            path = "/send?message=" + encodeURIComponent(message) + "&username=" + encodeURIComponent(username);
        xhr.open("POST", path, true)
        xhr.send()
      }
    },

    getInitialState: function() {
      return {messages: []};
    },

    onMessageReceived: function(msg) {
      var messages = this.state.messages;
      messages.push(["testc", msg]);
      this.setState({messages: messages});
    },

    render: function() {
      return (
        <div>
          <MessageBox messages={this.state.messages} />
          <InputForm onSubmit={this.sendMessage} />
        </div>
      );
    }
  });
});