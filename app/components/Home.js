var React = require('react');

var Home = React.createClass({
  render: function(){
    return (
      <div className="col-md-12">
        <h2 className="text-center">
          Search By WTF you want to know.
        </h2>
        <label className="col-md-4">WTF is...</label>
        <input type="text" className="form-control" />
      </div>
    )
  }
});

module.exports = Home;
