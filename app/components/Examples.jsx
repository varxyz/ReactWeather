var React = require('react');

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h2>Examples Component</h2>
//     )
//   }
// });

var Examples = (props) => {
  return (
      <div>
        <h2>Examples</h2>
        <p>Welcome to Examples page!</p>
      </div>
  );
};

module.exports = Examples;