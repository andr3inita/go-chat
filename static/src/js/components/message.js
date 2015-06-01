define(["reactjs"], function(React) {
  return React.createClass({
    render: function() {
      return (
        <div className="message">
          <span className="username">{this.props.username}</span>
          <span className="body">{this.props.body}</span>
        </div>
      );
    }
  });
});