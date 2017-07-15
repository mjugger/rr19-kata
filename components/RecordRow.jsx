import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { ListItem, IconButton, IconMenu, MenuItem, TableRow, TableRowColumn, FlatButton } from 'material-ui';
import { grey400 } from 'material-ui/styles/colors'


class RecordRow extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleEdit () {
    this.setState({ editing: true });
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({ editing: false });
  }

  render() {
    const { record } = this.props;
    return (
      <TableRow>
        <TableRowColumn>{record.title}</TableRowColumn>
        <TableRowColumn>{record.division}</TableRowColumn>
        <TableRowColumn>{record.project_owner}</TableRowColumn>
        <TableRowColumn>${record.budget}</TableRowColumn>
        <TableRowColumn>{record.status}</TableRowColumn>
        <TableRowColumn>{record.created}</TableRowColumn>
        <TableRowColumn>{record.modified}</TableRowColumn>
        <TableRowColumn>
          <FlatButton label="Edit" primary={true} />
          <FlatButton label="Info" secondary={true} />
        </TableRowColumn>
      </TableRow>
    );
  }
}

RecordRow.propTypes = {
  record: PropTypes.object.isRequired
  //editRecord: PropTypes.func.isRequired,
  //deleteRecord: PropTypes.func.isRequired,
  //completeRecord: PropTypes.func.isRequired
};

export default RecordRow;
