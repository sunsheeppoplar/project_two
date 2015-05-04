$(document).ready(function() {
	var DishView = Backbone.View.extend({
		tagName: 'li',
		template: _.template($("dishTemplate").html())
	})
});