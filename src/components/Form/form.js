import React from 'react';
import './form.css';

class FormCard extends React.Component {
  render () {
    return (
      <div>
        <h1>Submit New Mashup:</h1>
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="InputName1" className="col-sm-2 control-label">Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="InputName1" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputUrl" className="col-sm-2 control-label">Image URL</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputUrl" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputDescription" className="col-sm-2 control-label">Description</label>
            <div className="col-sm-10">
              <textarea className="form-control" id="inputDescription" rows="3"></textarea>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default">Add Mashup</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default FormCard;