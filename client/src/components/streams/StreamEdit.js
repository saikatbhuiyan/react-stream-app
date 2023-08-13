import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

const StreamEdit = (props) => {
  const { fetchStream, match, stream } = props;
  useEffect(() => {
    fetchStream(match.params.id);
  }, [fetchStream, match.params.id]);

  if (!stream) {
    return <div>Loading...</div>;
  }

  return <div>{stream.title}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
