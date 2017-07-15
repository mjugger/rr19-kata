import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import FilterForm from '../components/FilterForm';
import MainSection from '../components/MainSection';
import * as RecordActions from '../actions/records';
import { Paper, FlatButton } from 'material-ui';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../src/material_ui_raw_theme_file'

class App extends Component {
  render() {
    const { records, actions } = this.props;
    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <FilterForm actions={actions}/>
            <Paper style={{width: '50%', margin: '10px auto'}}>
              <FlatButton label="Create new record" primary={true} style={{width: '50%'}} />
              <FlatButton label="Export to Excel" secondary={true} style={{width: '50%'}} />
            </Paper>
            <MainSection records={records} actions={actions}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  records: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  filterParams: PropTypes.any.isRequired
};

function filterRecords(state) {
  const { filterParams, records } = state.recordStore;
  let filteredRecords = records;
  if (filterParams) {
    if (filterParams.fromDate && filterParams.toDate) {
      filteredRecords = filteredRecords.filter(record =>
        (
          moment(record.created, 'MM/DD/YYYY').isSameOrAfter(moment(filterParams.fromDate, 'MM/DD/YYYY'))
          &&
          moment(record.created, 'MM/DD/YYYY').isSameOrBefore(moment(filterParams.toDate, 'MM/DD/YYYY'))
        )
      );
    }
    filteredRecords = filteredRecords.filter(record =>
      (
        record.title.includes(filterParams.title)
        &&
        record.division.includes(filterParams.division)
        &&
        record.status.includes(filterParams.status)
        &&
        record.project_owner.includes(filterParams.project_owner)
        &&
        record.budget.toString().includes(filterParams.budget)
      )
    );

  }
  return filteredRecords;
}

function mapStateToProps(state) {
  return {
    records: filterRecords(state),
    filterParams: state.recordStore.filterParams
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(RecordActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
