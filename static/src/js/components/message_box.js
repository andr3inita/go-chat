define(["reactjs", "components/message"], function(React, Message) {
  return React.createClass({
    componentDidUpdate: function() {
      var el = this.getDOMNode();
      console.log(el);
      el.scrollTop = el.scrollHeight;
    },

    render: function() {
      var messages = this.props.messages.map(function(msg, idx) {
        return (
          <Message key={idx} username={msg[0]} body={msg[1]} />
        )
      });
      return (
        <div className="message-box">
          {messages}
        </div>
      );
    }
  });
});