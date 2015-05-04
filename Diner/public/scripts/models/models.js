var Dish = Backbone.Model.extend({
	urlRoot: '/dishes',
	initialize: function() {
		console.log("A new dish has been added")
	},
	defaults: {
		name: gostoso
		price: grátis
		image: "http://upload.wikimedia.org/wikipedia/commons/b/b0/Am%C3%AAijoas_%C3%A0_Bulh%C3%A3o_Pato.jpg"
	}
});