var React = require ('react');


const NavigationItem = React.createClass ({
	render : function () {
		return (
			
			<li><a className = "bigger-30" href={this.props.data.href}>{this.props.data.text}</a></li>
		)
	}
});

module.exports = NavigationItem;
