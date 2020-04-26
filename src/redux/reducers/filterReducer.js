import { FILTER_EVENTS } from '../constants/constants.js';

const { FILTER_ALL, FILTER_INCOMPLETE, FILTER_COMPLETED, ALL, INCOMPLETE, COMPLETED } = FILTER_EVENTS;

const initialState = {
  filterReducer: {
    activeFilter: ALL
  }
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {

    case FILTER_ALL:

      return {
        filterReducer: {
          activeFilter: ALL
        }
      };

    case FILTER_INCOMPLETE:

      return {
        filterReducer: {
          activeFilter: INCOMPLETE
        }
      };

    case FILTER_COMPLETED:

      return {
        filterReducer: {
          activeFilter: COMPLETED
        }
      };

    default:

      return state;

  }
};

export default filterReducer;