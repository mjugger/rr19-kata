import React, { PropTypes, Component } from 'react';
import moment from 'moment';
import { Paper, TextField, DatePicker, RaisedButton } from 'material-ui';

const defaultStyle = {
  marginLeft: 20
};

class FilterForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      toDate: null,
      fromDate: null
    };
  }

  handleDate(date, fieldName){
    const newDate = {};
    newDate[fieldName] = date;
    this.setState(newDate);
  }

  handleFilter() {
    const toDate = this.state.toDate ? moment(this.state.toDate).format('MM/DD/YYYY') : '';
    const fromDate = this.state.fromDate ? moment(this.state.fromDate).format('MM/DD/YYYY') : '';
    this.props.actions.setFilterParams({
      toDate: toDate,
      fromDate: fromDate,
      title: this.refs.title.getValue(),
      budget: this.refs.budget.getValue(),
      division: this.refs.division.getValue(),
      project_owner: this.refs.projectOwner.getValue(),
      status: this.refs.status.getValue()
    });
  }

  handleClearFilter() {
    this.props.actions.setFilterParams({
      title: '',
      division: '',
      project_owner: '',
      budget: '',
      status: '',
      fromDate: false,
      toDate: false
    });
  }

  render() {
    return (
      <Paper
        style={
          {
            position: 'relative',
            width: '50%',
            padding: '10px',
            margin: '30px auto'
          }
        }
      >
        <div style={{display: 'inline-block', width: '50%'}}>
          <TextField id="title" ref="title" floatingLabelText="Filter by Title" />
        </div>
        <div style={{display: 'inline-block', width: '50%'}}>
          <TextField id="division" ref="division" floatingLabelText="Filter by Division" />
        </div>
        <div style={{display: 'inline-block', width: '50%'}}>
          <TextField id="project-owner" ref="projectOwner" floatingLabelText="Filter by Project Owner" />
        </div>
        <div style={{display: 'inline-block', width: '50%'}}>
          <TextField id="budget" ref="budget" type="number" floatingLabelText="Filter by Budget" />
        </div>
        <div style={{display: 'inline-block', width: '50%'}}>
          <TextField id="status" ref="status" floatingLabelText="Filter by Status" />
        </div>
        <div>
          <div style={{display: 'inline-block', width: '50%'}}>
            <h3>From</h3>
            <DatePicker onChange={(event, date) => this.handleDate(date, 'fromDate')} id="from-date" ref="fromDate" />
          </div>
          <div style={{display: 'inline-block', width: '50%'}}>
            <h3>To</h3>
            <DatePicker onChange={(event, date) => this.handleDate(date, 'toDate')} id="to-date" ref="toDate" />
          </div>
        </div>
        <RaisedButton label="Filter" primary={true} onClick={() => this.handleFilter()} />
        <RaisedButton label="Show all" secondary={true} onClick={() => this.handleClearFilter()} style={{margin: '0 0 0 10px'}} />
      </Paper>
    );
  }
}

FilterForm.propTypes = {
  actions: PropTypes.object.isRequired
  //addRecord: PropTypes.func.isRequired
};

export default FilterForm;