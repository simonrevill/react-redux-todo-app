import React from 'react'

const Filters = () => {
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
              <button className="js-filter-btn btn btn-primary" type="button" data-filter="All">All</button>
              <button className="js-filter-btn btn btn-outline-primary" type="button" data-filter="Incomplete">Incomplete</button>
              <button className="js-filter-btn btn btn-outline-primary" type="button" data-filter="Completed">Completed</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Filters;