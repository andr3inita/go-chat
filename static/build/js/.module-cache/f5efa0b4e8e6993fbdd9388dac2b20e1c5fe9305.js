define([
  "reactjs",
  "channel",
  "components/message_box",
  "components/input_form"
], function(React, goog, MessageBox, InputForm) {
  console.log(goog);
  return React.createClass({
    componentDidMount: function() {
      var token = document.querySelector(".channel-token").value,
          channel = new goog.appengine.Channel(token);
      this.socket = channel.open();
      this.socket.onopen = this.onSocketOpen.bind(this);
      this.socket.onclose = this.onSocketClose.bind(this);
      this.socket.onmessage = this.onSocketMessage.bind(this);
      this.socket.onerror = this.onSocketError.bind(this);
    },

    onSocketOpen: function() {
      this.sendMessage("SYSTEM", "User " + this.username + " has joined the chat.");
    },

    onSocketClose: function() {
      this.sendMessage("SYSTEM", "User " + this.username + " has left the chat.");
    },

    onSocketError: function() {
      smoke.signal("There was a connection error with the socket, refresh to try again.", function() {}, {duration: 120000});
    },

    onSocketMessage: function(e) {
      var data = JSON.parse(e.data);
      this.renderMessage(data[0], data[1]);
    },

    onSendMessage: function() {
      this.sendMessage(this.username, this.input.value);
      this.input.value = "";
    },

    sendMessage: function(username, message) {
      var xhr = new XMLHttpRequest(),
          path = "/send?message=" + encodeURIComponent(message) + "&username=" + encodeURIComponent(username);
      xhr.open("POST", path, true)
      xhr.send()
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
        React.createElement("div", null, 
          React.createElement(MessageBox, {messages: this.state.messages}), 
          React.createElement(InputForm, {onTemp: this.onMessageReceived})
        )
      );
    }
  });
});