var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>Abot Component</h3>
//     )
//   }
// });

//we can refactor the code by using 
//stateles functional components
//because these components dont change the state of
//the app, they are static, presentational

var About = (props) => {
  return (
      <div>
        <h1 className="text-center">About</h1>
        <p>This is a simple application build on top of REACT and NodeJS!</p>
      </div>
  );
};

module.exports = About;