var React = require ('react');

const Blurb = React.createClass ({
	render : function () {
		return (
			<p className = "folio-blurb">{this.props.text}</p>
		)
		
	}
});

module.exports = Blurb;