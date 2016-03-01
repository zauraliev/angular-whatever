var myApp = angular.module('myApp', ['ngRoute']);


;(function (ng, app) {

	var self = this;
	
	
	// -------------- with Scope START -------------------- //

	function parent1Controller(scope) {

		// Store the scope so we can reference it in our
		// class methods
		self.scope = scope;

		self.scope.parent1vm = {};
		self.scope.parent1vm.message = 'Parent 1 Message!';

		self.scope.parent1vm.greet = this.greet();

		console.log(this.greet());

		// Return this object reference.
		return (self);
	};

	parent1Controller.prototype = {

		greet: function () {

			return "Parent 1 Greet function!";
		}

	}


	function child1Controller(scope) {

		// Store the scope so we can reference it in our
		// class methods
		self.scope = scope;


		self.scope.child1vm = {};
		self.scope.child1vm.message = 'Child 1 Message!';

		//self.scope.child1vm.greet = this.greet();

		self.scope.child1vm.greet = ng.bind(this, this.greet);

		// Return this object reference.
		return (self);
	};

	child1Controller.prototype = {

		greet: function () {

			return "Child  1 Greet function!";
		}

	}
	
	
	parent1Controller.$inject = ['$scope'];
	child1Controller.$inject = ['$scope'];
	
	// ------------- with Scope  END ---------------------- //
	
	
	
	// ------------- without Scope START ------------------ //

	function parent2Controller() {

		var self = this;

		self.message = 'Parent 2 Message!';

		self.greet = ng.bind(this, self.greet);

		// Return this object reference.
		return (self);
	};

	parent2Controller.prototype = {

		greet: function () {

			return "Parent 2 Greet function!";

		}


	}

	function child2Controller() {

		var self = this;

		self.message = 'Child 2 Message!';

		// Return this object reference.
		return (self);
	};
	
	// ------------- without Scope ---------------------- //
	
	
	
	app.controller('parent1Controller', parent1Controller);
	app.controller('child1Controller', child1Controller);

	app.controller('parent2Controller', parent2Controller);
	app.controller('child2Controller', child2Controller);



}(angular, myApp));



/*myApp.controller('parent1Controller', ['$scope', function ($scope) {

	$scope.parent1vm = {};
	$scope.parent1vm.message = 'Parent 1 Message!';

}]);


myApp.controller('child1Controller', ['$scope', function ($scope) {

	$scope.child1vm = {};
	$scope.child1vm.message = 'Child 1 Message!';

}]);


myApp.controller('parent2Controller', [function () {
	var self = this;
	self.message = 'Parent 2 Message!';

}]);

myApp.controller('child2Controller', [function () {

	var self = this;

	self.message = 'Child 2 Message!';

}]);*/
