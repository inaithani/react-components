var React = require ('react');
const MobileNav = React.createClass ({
	render : function () {
		console.log (this);
		return (
			<div className="navbar-header">
		      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target={this.props.target} aria-expanded="false">
		        <span className="sr-only">Toggle navigation1</span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </button>
		      <a className="navbar-brand bigger-40" href="#">Nav Component</a>
		    </div>
		)
	}
});

module.exports = MobileNav;
