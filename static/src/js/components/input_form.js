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
      if (this.state.message.length > 0) {
        this.props.onSubmit(this.state.message);
        this.setState({message: ""});
      }
    },

    render: function() {
      return (
        <form className="input-form" onSubmit={this.onFormSubmit}>
          <input type="text" class="message" value={this.state.message} onChange={this.onMessageChanged} />
          <button type="submit">Send</button>
        </form>
      );
    }
  });
});