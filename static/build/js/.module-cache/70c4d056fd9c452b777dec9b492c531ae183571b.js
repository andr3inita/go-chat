define(["reactjs"], function(React) {
  return React.createClass({
    render: function() {
      return (
        React.createElement("div", {className: "message"}, 
          React.createElement("span", {className: "username"}, this.props.username), 
          React.createElement("span", {className: "body"}, this.props.body)
        )
      );
    }
  });
});