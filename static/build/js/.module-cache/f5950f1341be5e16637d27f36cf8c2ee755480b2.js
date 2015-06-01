define([
  "reactjs",
  "components/message_box",
  "components/input_form"
], function(React, MessageBox) {
  return React.createClass({
    render: function() {
      return (
        React.createElement("div", null, 
          React.createElement(MessageBox, null), 
          React.createElement(InputForm, null)
        )
      );
    }
  });
});