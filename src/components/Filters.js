import React from 'react';
import { connect } from 'react-redux';
import toggleFilter from '../redux/actions/toggleFilter';

const Filters = stateProps => {

  const handleToggle = e => {
    const filterEvent = e.target.dataset.filter_event;
    const filter = e.target.dataset.filter;
    stateProps.toggleFilter(filterEvent, filter);
  };

  const activeFilter = stateProps.activeFilter;

  return (
    <React.Fragment>
      <hr className="mt-3" />
      <div className="row">
        <div className="col-12">
          <h2 className="h5">Filters</h2>
        </div>
      </div>
      <div className="mt-2 w-100">
        <div className="row">
          <div className="col-12">
            <div className="btn-group w-100 js-filter-group">
              <button
                className={"btn" + (activeFilter === 'All' ? ' btn-primary' : ' btn-outline-primary')}
                type="button"
                data-filter_event="FILTER_ALL"
                data-filter="All"
                onClick={handleToggle}
              >All</button>
              <button
                className={"btn" + (activeFilter === 'Incomplete' ? ' btn-primary' : ' btn-outline-primary')}
                type="button"
                data-filter_event="FILTER_INCOMPLETE"
                data-filter="Incomplete"
                onClick={handleToggle}
              >Incomplete</button>
              <button className={"btn" + (activeFilter === 'Completed' ? ' btn-primary' : ' btn-outline-primary')}
                type="button"
                data-filter_event="FILTER_COMPLETED"
                data-filter="Completed"
                onClick={handleToggle}
              >Completed</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => state.filterReducer ? state.filterReducer : {};

export default connect(mapStateToProps, { toggleFilter })(Filters);