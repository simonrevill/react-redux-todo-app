import React from 'react'

function Filters() {
  return (
    <React.Fragment>
      <hr class="mt-3" />
      <div class="row">
        <div class="col-12">
          <h2 class="h5">Filters</h2>
        </div>
      </div>
      <div class="mt-2 w-100">
        <div class="row">
          <div class="col-12">
            <div class="btn-group w-100 js-filter-group">
              <button class="js-filter-btn btn btn-primary" type="button" data-filter="All">All</button>
              <button class="js-filter-btn btn btn-outline-primary" type="button" data-filter="Incomplete">Incomplete</button>
              <button class="js-filter-btn btn btn-outline-primary" type="button" data-filter="Completed">Completed</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Filters;