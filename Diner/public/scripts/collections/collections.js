var DishesCollection = Backbone.Collection.extend({
	model: Dish,
	url: '/dishes'
})

var dishes = new DishesCollection();
dishes.fetch();