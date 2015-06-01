define(["reactjs", "components/message"], function(React, Message) {
  return React.createClass({
    render: function() {
      var messages = this.props.messages.map(function(msg) {
        return (
          React.createElement(Message, {username: msg[0], body: msg[1]})
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