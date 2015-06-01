define(["reactjs"], function(React) {
  return React.createClass({
    getInitialState: function() {
      return {message: ""};
    },

    onMessageChanged: function(e) {
      this.setState({message: e.target.value});
    },

    onFormSubmit: function(e) {
      e.preventDefault();
      alert("Submit");
      return;
    },

    render: function() {
      return (
        React.createElement("form", {className: "input-form"}, 
          React.createElement("input", {type: "text", class: "message", onSubmit: this.onFormSubmit}), 
          React.createElement("button", {type: "submit"}, "Send")
        )
      );
    }
  });
});