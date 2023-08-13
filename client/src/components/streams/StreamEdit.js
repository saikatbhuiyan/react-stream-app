import React, { useEffect } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = (props) => {
  const { fetchStream, editStream, match, stream } = props;
  useEffect(() => {
    fetchStream(match.params.id);
  }, [fetchStream, match.params.id]);

  if (!stream) {
    return <div>Loading...</div>;
  }

  const onSubmit = (formValues) => {
    console.log(formValues);
    editStream(match.params.id, formValues);
  };

  return (
    <div>
      <h3>Edit a Stream</h3>
      <StreamForm
        // initialValues={ _.pick(stream, "title", "description") }
        initialValues={{ title: stream.title, description: stream.description }} // ? Redux form automatically checks field matches with initial values or not
        onSubmit={onSubmit}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
