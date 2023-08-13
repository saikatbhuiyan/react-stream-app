import React from "react";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.createStream(formValues);
  };

  render() {
    return (
      <diV>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </diV>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
