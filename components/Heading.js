var React = require ('react');

const Heading = React.createClass ({
	render : function () {
		return (
			<h2 className = "folio-heading">{this.props.text}</h2>
		)
		
	}
});

module.exports = Heading;