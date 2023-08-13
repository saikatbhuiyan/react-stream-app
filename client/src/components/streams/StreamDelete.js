import React, { useEffect } from "react";
import Modal from "../Model";
import _ from "lodash";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

const StreamDelete = (props) => {
  const { fetchStream, deleteStream, match, stream } = props;
  const { id } = match.params;

  useEffect(() => {
    fetchStream(id);
  }, [fetchStream, id]);

  if (!stream) {
    return <div>Loading...</div>;
  }

  const renderContent = () => {
    if (!stream) {
      return "Are you sure you want to delete this stream?";
    }

    return (
      "Are you sure you want to delete the stream wwith title: " + stream.title
    );
  };

  const actions = (
    <>
      <button className="ui button negative" onClick={() => deleteStream(id)}>
        Delete
      </button>
      {/* <button className="ui button" onClick={() => history.push("/")}>
        Cancel
      </button> */}
      <Link to="/" className="ui button primary">
        Cancel
      </Link>
    </>
  );
  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content={renderContent()}
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
