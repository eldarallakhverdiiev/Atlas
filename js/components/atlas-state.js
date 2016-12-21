define(['knockout'], function (ko) {
	var state = {};
	state.resultsUrl = ko.observable();
	
	state.selectedConceptsIndex = {};
	state.selectedConcepts = ko.observableArray(null);			
	
	state.clearSelectedConcepts = function() {
		this.selectedConceptsIndex = {};		
		this.selectedConcepts([]);
	}

	return state;
});