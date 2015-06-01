define([
  "reactjs",
  "components/message_box",
  "components/input_form"
], function(React, MessageBox, InputForm) {
  return React.createClass({
    getInitialState: function() {
      return {messages: [["test1", "Hello, World!"], ["test2", "Things should be here."]]};
    },

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