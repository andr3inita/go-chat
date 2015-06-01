define(["reactjs", "components/message"], function(React, Message) {
  return React.createClass({
    render: function() {
      var messages = this.props.messages.map(function(msg, idx) {
        return (
          React.createElement(Message, {key: idx, username: msg[0], body: msg[1]})
        )
      });
      return (
        React.createElement("div", {className: "message-box"}, 
          messages
        )
      );
    }
  });
});