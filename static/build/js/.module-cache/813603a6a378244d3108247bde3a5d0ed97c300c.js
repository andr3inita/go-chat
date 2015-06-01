define(["reactjs"], function(React) {
  return React.createClass({
    getInitialState: function() {
      return {message: ""};
    },

    onMessageChanged: function(e) {
      this.setState({message: e.target.value});
    },

    onFormSubmit: function() {
      return false;
    },

    render: function() {
      return (
        React.createElement("form", {className: "input-form"}, 
          React.createElement("input", {type: "text", class: "message"}), 
          React.createElement("button", {type: "submit"}, "Send")
        )
      );
    }
  });
});