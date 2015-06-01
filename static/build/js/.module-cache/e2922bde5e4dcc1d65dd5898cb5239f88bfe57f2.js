define(["reactjs", "components/message_box"], function(React, MessageBox) {
  return React.createClass({
    render: function() {
      return (
        React.createElement(MessageBox, null)
      );
    }
  });
});