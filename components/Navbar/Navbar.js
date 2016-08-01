var React = require ('react');
var MobileNav = require ("./MobileNav.js");
var NavbarItem = require ("./NavbarItem.js");

const Navigation = React.createClass ({
	render : function () {
		var items = [];
		this.props.items.forEach (function (item){
      		items.push (<NavbarItem key = {item.href} data = {item} />)
      	});
      	
		return (
			<nav className="navbar navbar-default">
				
				

				<MobileNav target = {this.props.navigationID} />
				
				<div className="collapse navbar-collapse" id={this.props.navigationID}>
      				<ul className="nav navbar-nav pull-right">
      					{items}
      				</ul>
      			</div>
			</nav>
		)
	}
});

module.exports = Navigation;
