import React, { Component, PropTypes } from 'react';
import RecordRow from './RecordRow';
import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderColumn,
  TableBody,
  TableRowColumn,
  Dialog,
  FlatButton,
  TextField,
  Snackbar
} from 'material-ui';

const defaultStyle = {
  width: '100%',
  marginLeft: 20
};

class MainSection extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      showSnackbar: false,
      currentRecord: {}
    };
  }

  handleClearCompleted() {
    const atLeastOneCompleted = this.props.records.some(record => record.completed);
    if (atLeastOneCompleted) {
      this.props.actions.clearCompleted();
    }
  }

  handleDialogVisibility(visible) {
    this.setState({ open: visible });
  }

  handleSnackbarVisibility(visible) {
    this.setState({ showSnackbar: visible });
  }

  handleEditBtnClick(index) {
    this.setState({
      currentRecord: this.props.records[index]
    }, this.handleDialogVisibility(true));
  }

  handleSave() {
    this.props.actions.editRecord(
      this.state.currentRecord.id,
      this.refs.editStatus.getValue(),
      this.refs.editProjectOwner.getValue(),
      this.refs.editBudget.getValue()
    );
    this.handleDialogVisibility(false);
    this.handleSnackbarVisibility(true);
  }

  renderEditDialog(itemId) {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => this.handleDialogVisibility(false)}
      />,
      <FlatButton
        label="Save"
        primary={true}
        onTouchTap={() => this.handleSave()}
      />
    ];
    return (
      <Dialog
        title="Edit record"
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={() => this.handleDialogVisibility(false)}
      >
        <div>
          <TextField ref="editStatus" floatingLabelText="Edit Status" defaultValue={this.state.currentRecord.status} />
        </div>
        <div>
          <TextField ref="editProjectOwner" floatingLabelText="Edit Project Owner" defaultValue={this.state.currentRecord.project_owner} />
        </div>
        <div>
          <TextField ref="editBudget" type="number" floatingLabelText="Edit Budget" defaultValue={this.state.currentRecord.budget} />
        </div>
      </Dialog>
    );
  }

  render() {
    const { records, actions } = this.props;
    return (
      <section className="main" style={defaultStyle}>
        {this.renderEditDialog()}
        <Table className="record-list" selectable={false}>
          <TableHeader adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Division</TableHeaderColumn>
              <TableHeaderColumn>Project Owner</TableHeaderColumn>
              <TableHeaderColumn>Budget</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
              <TableHeaderColumn>Created</TableHeaderColumn>
              <TableHeaderColumn>Modified</TableHeaderColumn>
              <TableHeaderColumn>Actions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
              {records.map((record, index) =>
                //<RecordRow record={record} key={record.id} />
                <TableRow key={record.id}>
                  <TableRowColumn>{record.title}</TableRowColumn>
                  <TableRowColumn>{record.division}</TableRowColumn>
                  <TableRowColumn>{record.project_owner}</TableRowColumn>
                  <TableRowColumn>${record.budget}</TableRowColumn>
                  <TableRowColumn>{record.status}</TableRowColumn>
                  <TableRowColumn>{record.created}</TableRowColumn>
                  <TableRowColumn>{record.modified}</TableRowColumn>
                  <TableRowColumn>
                    <FlatButton label="Edit" primary={true} onClick={() => this.handleEditBtnClick(index)} />
                    <FlatButton label="Info" secondary={true} />
                  </TableRowColumn>
                </TableRow>
              )}
          </TableBody>
        </Table>
        <Snackbar
          open={this.state.showSnackbar}
          message={`Record number ${this.state.currentRecord.id} succesfully updated!`}
          autoHideDuration={4000}
          onRequestClose={() => this.handleSnackbarVisibility(false)}
        />
      </section>
    );
  }
}

MainSection.propTypes = {
  records: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default MainSection;
