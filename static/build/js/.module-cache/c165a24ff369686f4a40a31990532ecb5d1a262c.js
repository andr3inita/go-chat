define([
  "reactjs",
  "components/message_box",
  "components/input_form"
], function(React, MessageBox, InputForm) {
  return React.createClass({
    componentDidMount: function() {

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