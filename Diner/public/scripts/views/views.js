$(document).ready(function() {

	// view for single Dish model
	var DishView = Backbone.View.extend({
		tagName: 'li',
		template: _.template($("#dishTemplate").html()),
		events: {
			"click button.deleteButton": "deleteDish",
			"click button.editButton": "editDish",
			"click button.updateButton": "updateDish"
		},

		updateDish: function() {
			var newName = this.$("#newName" + this.model.id).val();
			var newPrice = this.$("#newPrice" + this.model.id).val();
			var newImage = this.$("#newImage" + this.model.id).val();

			this.model.set({name: newName, price: newPrice, image_url: newImage});

			this.model.save();
		},

		editDish: function() {
			this.$("span.dish").hide();
			this.$("span.editForm").show();
		},

		// delete dish from both database and in collection
		deleteDish: function() {
			this.model.destroy();
		},

		render: function() {
			this.$el.html(this.template({dish: this.model.toJSON()}));
			return this;
		}

	});

	// view for collection of Dishes

	var DishesView = Backbone.View.extend({
		el: "ul#dishesList",
		initialize: function() {
			this.listenTo(this.collection, "sync remove", this.render);
		},

		// render the list of Dishes
		render: function() {
			var dishes = this.$el;

			// .html ~ .innerHTML
			dishes.html("");
			this.collection.each(function(dish) {
				dishes.append(new DishView({model: dish}).render().$el);
			});

			return this;
		}
	});

	var CreateDishView = Backbone.View.extend({
		el: "#addDishForm",
		events: {"click button#addNewDish": "createDish"},

		// creates a new Dish from form
		createDish: function() {
			var nameField = this.$("#newDishName");
			var priceField = this.$("#newDishPrice");
			var imageField = this.$("#newDishImage");
			var name = nameField.val();
			var price = priceField.val();
			var image = imageField.val();

			this.collection.create({name: name, price: price, image_url: image});

			nameField.val("");
			priceField.val("");
			imageField.val("");
		}
	});

	new DishesView({collection: dishes});
	new CreateDishView({collection: dishes});
});
