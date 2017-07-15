import { ADD_RECORD, DELETE_RECORD, EDIT_RECORD, COMPLETE_RECORD, COMPLETE_ALL, CLEAR_COMPLETED, SET_PARAMS } from '../constants/ActionTypes';
import moment from 'moment'; 
const initialState = {
  filterParams: {
    title: '',
    division: '',
    project_owner: '',
    budget: '',
    status: '',
    fromDate: false,
    toDate: false
  },
  records: [{
    "id": 0,
    "title": "Tagtune",
    "division": "Accounting",
    "project_owner": "Kevin Snyder",
    "budget": 20614.14,
    "status": "archived",
    "created": "09/14/2015",
    "modified": "10/02/2015"
  }, {
    "id": 1,
    "title": "Oyoyo",
    "division": "Administration",
    "project_owner": "Eugene Brown",
    "budget": 22106.44,
    "status": "new",
    "created": "07/17/2015",
    "modified": null
  }, {
    "id": 2,
    "title": "Lajo",
    "division": "Marketing",
    "project_owner": "Killgore Trout",
    "budget": 15481.27,
    "status": "working",
    "created": "07/19/2015",
    "modified": "09/17/2015"
  }, {
    "id": 3,
    "title": "Blognation",
    "division": "Administration",
    "project_owner": "Richard Henry",
    "budget": 24017.98,
    "status": "working",
    "created": "08/03/2015",
    "modified": "09/17/2015"
  }, {
    "id": 4,
    "title": "Vinte",
    "division": "Administration",
    "project_owner": "Michelle Webb",
    "budget": 12935.84,
    "status": "working",
    "created": "08/05/2015",
    "modified": "09/15/2015"
  }, {
    "id": 5,
    "title": "Aibox",
    "division": "Administration",
    "project_owner": "Killgore Trout",
    "budget": 15991.78,
    "status": "working",
    "created": "09/03/2015",
    "modified": "10/02/2015"
  }, {
    "id": 6,
    "title": "Buzzdog",
    "division": "Administration",
    "project_owner": "Michelle Webb",
    "budget": 22610.09,
    "status": "archived",
    "created": "07/26/2015",
    "modified": "10/01/2015"
  }, {
    "id": 7,
    "title": "Plambee",
    "division": "Sales",
    "project_owner": "Michelle Webb",
    "budget": 14229.02,
    "status": "archived",
    "created": "09/14/2015",
    "modified": "10/01/2015"
  }, {
    "id": 8,
    "title": "Photobug",
    "division": "Administration",
    "project_owner": "James Holden",
    "budget": 10959.29,
    "status": "working",
    "created": "09/03/2015",
    "modified": "09/18/2015"
  }, {
    "id": 9,
    "title": "Quimm",
    "division": "Marketing",
    "project_owner": "James Holden",
    "budget": 14139.38,
    "status": "delivered",
    "created": "08/02/2015",
    "modified": "09/26/2015"
  }, {
    "id": 10,
    "title": "Innojam",
    "division": "Sales",
    "project_owner": "Eugene Brown",
    "budget": 24318.05,
    "status": "working",
    "created": "09/13/2015",
    "modified": "09/20/2015"
  }, {
    "id": 11,
    "title": "Jaxworks",
    "division": "Production",
    "project_owner": "Michelle Webb",
    "budget": 15054.27,
    "status": "new",
    "created": "08/12/2015",
    "modified": null
  }, {
    "id": 12,
    "title": "Skyble",
    "division": "Accounting",
    "project_owner": "Richard Henry",
    "budget": 13810.1,
    "status": "delivered",
    "created": "07/12/2015",
    "modified": "09/21/2015"
  }, {
    "id": 13,
    "title": "Photobean",
    "division": "Marketing",
    "project_owner": "Michelle Webb",
    "budget": 12637.95,
    "status": "working",
    "created": "08/24/2015",
    "modified": "09/15/2015"
  }, {
    "id": 14,
    "title": "Topicware",
    "division": "Administration",
    "project_owner": "Eugene Brown",
    "budget": 9667.52,
    "status": "working",
    "created": "08/01/2015",
    "modified": "09/29/2015"
  }, {
    "id": 15,
    "title": "Buzzster",
    "division": "Production",
    "project_owner": "Nicole Smith",
    "budget": 14657.54,
    "status": "working",
    "created": "08/09/2015",
    "modified": "09/18/2015"
  }, {
    "id": 16,
    "title": "Twinte",
    "division": "Administration",
    "project_owner": "Kevin Snyder",
    "budget": 17729.37,
    "status": "delivered",
    "created": "09/09/2015",
    "modified": "09/18/2015"
  }, {
    "id": 17,
    "title": "Blognation",
    "division": "Production",
    "project_owner": "Eugene Brown",
    "budget": 19540.82,
    "status": "archived",
    "created": "07/21/2015",
    "modified": "09/22/2015"
  }, {
    "id": 18,
    "title": "Flashdog",
    "division": "Production",
    "project_owner": "Michelle Webb",
    "budget": 24870.61,
    "status": "working",
    "created": "07/05/2015",
    "modified": "10/02/2015"
  }, {
    "id": 19,
    "title": "Yakijo",
    "division": "Accounting",
    "project_owner": "Killgore Trout",
    "budget": 23533.54,
    "status": "working",
    "created": "08/12/2015",
    "modified": "10/01/2015"
  }, {
    "id": 20,
    "title": "Quatz",
    "division": "Sales",
    "project_owner": "Richard Henry",
    "budget": 23639.65,
    "status": "archived",
    "created": "07/19/2015",
    "modified": "09/19/2015"
  }, {
    "id": 21,
    "title": "Dabjam",
    "division": "Marketing",
    "project_owner": "Kevin Snyder",
    "budget": 14356.55,
    "status": "new",
    "created": "08/22/2015",
    "modified": null
  }, {
    "id": 22,
    "title": "Meetz",
    "division": "Sales",
    "project_owner": "Kevin Snyder",
    "budget": 13882.22,
    "status": "delivered",
    "created": "08/26/2015",
    "modified": "10/01/2015"
  }, {
    "id": 23,
    "title": "Flipopia",
    "division": "Marketing",
    "project_owner": "Eugene Brown",
    "budget": 10306.87,
    "status": "delivered",
    "created": "08/11/2015",
    "modified": "09/17/2015"
  }, {
    "id": 24,
    "title": "Quaxo",
    "division": "Administration",
    "project_owner": "Nicole Smith",
    "budget": 13945.69,
    "status": "archived",
    "created": "07/13/2015",
    "modified": "09/21/2015"
  }, {
    "id": 25,
    "title": "Trunyx",
    "division": "Production",
    "project_owner": "Nicole Smith",
    "budget": 23136.21,
    "status": "delivered",
    "created": "09/03/2015",
    "modified": "09/19/2015"
  }, {
    "id": 26,
    "title": "Dabtype",
    "division": "Marketing",
    "project_owner": "Richard Henry",
    "budget": 22000.98,
    "status": "archived",
    "created": "08/26/2015",
    "modified": "09/28/2015"
  }, {
    "id": 27,
    "title": "Meetz",
    "division": "Marketing",
    "project_owner": "Eugene Brown",
    "budget": 17620.23,
    "status": "new",
    "created": "09/08/2015",
    "modified": null
  }, {
    "id": 28,
    "title": "Kimia",
    "division": "Sales",
    "project_owner": "Richard Henry",
    "budget": 12061.73,
    "status": "archived",
    "created": "08/31/2015",
    "modified": "09/29/2015"
  }, {
    "id": 29,
    "title": "Dazzlesphere",
    "division": "Accounting",
    "project_owner": "Eugene Brown",
    "budget": 21443.97,
    "status": "archived",
    "created": "07/20/2015",
    "modified": "10/01/2015"
  }]
};

export default function records(state = initialState, action) {
  switch (action.type) {

  case SET_PARAMS:
    return Object.assign({}, state, {
      filterParams: action.params
    });

  case ADD_RECORD:
    return [{
      id: state.reduce((maxId, record) => Math.max(record.id, maxId), -1) + 1,
      title: action.title,
      division: action.division,
      project_owner: action.project_owner,
      budget: action.budget,
      status: action.status,
      created: moment().format('MM/DD/YYYY'),
      modified: null
    }, ...state];

  case DELETE_RECORD:
    return state.filter(record =>
      record.id !== action.id
    );

  case EDIT_RECORD:
    return Object.assign({}, state, {
      records: state.records.map(record =>
        record.id === action.id ?
          Object.assign({}, record, {
            status: action.status,
            project_owner: action.project_owner,
            budget: action.budget
          }) :
          record
        )
    });

  default:
    return state;
  }
}
