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
      if (e.target.value.length > 0) {
        this.props.onTemp(e.target.value);
        this.setState({message: ""});
      }
    },

    render: function() {
      return (
        React.createElement("form", {className: "input-form", onSubmit: this.onFormSubmit}, 
          React.createElement("input", {type: "text", class: "message", value: this.state.message, onChange: this.onMessageChanged}), 
          React.createElement("button", {type: "submit"}, "Send")
        )
      );
    }
  });
});