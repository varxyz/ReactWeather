var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var location = this.refs.location.value;
    if (location.length > 0) {
      this.refs.location.value = '';
      this
        .props
        .onSearch(location);
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <div><input type="search" placeholder="Search weather by city" ref="location"/></div>
          <div>
            <button className="button expanded">Get Weather</button>
          </div>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;