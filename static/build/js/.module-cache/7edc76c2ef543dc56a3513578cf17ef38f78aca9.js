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