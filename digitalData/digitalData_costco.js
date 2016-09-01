javascript: (function() {
	window.digitalData = {};
	window.digitalData.page = {};
	window.digitalData.page.pageInfo = {};
	window.digitalData.product = new Array();
	window.digitalData.cart = {};
	window.digitalData.events = new Array();
	window.digitalData.version = {};
	window.digitalData.version.buildNumber = "";
	//
	// **digitalData.page.pageInfo:**
	// Describes basic details about the page.
	//
	// 
	window.digitalData.page.pageInfo = {
		pageID : null,
		pageName : null,
		pageURL : document.URL,
		language : null,
		domain : null,
		platform : null,
		memberStatus : null,
		authenticationStatus : null,
		includesLiveClickerVideoContent : null,
	};
	
	// **digitalData.page.category:**
	// Because of the wide range of methods for categorization, an object literal is provided for page
	// categories.
	// 
	// The name **primaryCategory** is RECOMMENDED if you included only one set of categories
	// for pages, or for your primary set of categories. All other names are optional and should fit the
	// individual implementation needs in both naming and values passed.
	window.digitalData.page.category = {
		primaryCategory : null,
		subCategories : [],
		pageType : null
	};

	// **digitalData.page.attributes:**
	// This object provides extensibility to the Page object. All names are optional and should fit the
	// individual implementation needs in both naming and values passed.
	window.digitalData.page.attributes = {};

	// **digitalData.newProduct:** Utility function to create new product entries.
	window.digitalData.newProduct = function(p) { // Usage: window.digitalData.product.push(window.digitalData.newProduct({}))
		// The **Product object** carries details about a particular product with frequently used properties
		// listed below. 
		// This is intended for data about products displayed on pages or other content. For
		// products added to a shopping cart or ordered in a transaction, see the Cart and Transaction
		// objects below.
		// 
		// All other names are optional and should fit
		// the individual implementation needs in both naming and values passed.
		var product_ = {
			id : null,
			name : null,
			price : null,
			type : null,
			productDetailType : null,
			starRating : null,
			attributes : {}
		};
		if (p) {
			(p.id != undefined) ? (product_.id = p.id) : (product_.id);
			(p.name != undefined) ? (product_.name = p.name) : (product_.name);
			(p.price != undefined) ? (product_.price = p.price) : (product_.price);
			(p.type != undefined) ? (product_.type = p.type) : (product_.type);
			(p.productDetailType != undefined) ? (product_.productDetailType = p.productDetailType) : (product_.productDetailType);
			(p.starRating != undefined) ? (product_.starRating = p.starRating) : (product_.starRating);
			(p.attributes != undefined) ? (product_.attributes = p.attributes) : (product_.attributes);
		}
		return product_;
	};
	
	// The **Cart object** carries details about a shopping cart or basket and the products that have been
	// added to it. 
	window.digitalData.cart = { 
		transactionID : null,
		attributes : {}, // This object provides extensibility to the cart as a whole. Any additional dimensions related to the cart can be provided.
		product : [], // [one or more product objects] window.digitalData.cart.item.push(window.digitalData.newProduct({})) could be used to populate the cart.
		excludedProducts : []
	};

	// Utility function to create new event entries.
	// Usage: window.digitalData.events.push(window.digitalData.newEvent({}))
	window.digitalData.newEvent = function(ev) {
		var event_ = {
			eventName : null,
			eventAction : null,
			type : null,
			attributes : {}
		};
		if (ev) {
			(ev.eventName != undefined) ? (event_.eventName = ev.eventName) : (event_.eventName);
			(ev.eventAction != undefined) ? (event_.eventAction = ev.eventAction) : (event_.eventAction);
			(ev.type != undefined) ? (event_.type = ev.type) : (event_.type);
			(ev.attributes != undefined) ? (event_.attributes = ev.attributes) : (event_.attributes);
		}
		return event_;
	};
 

	// Utility function to create new event entries.
	window.digitalData.newEvent = function(ev) {
		var event_ = {
			eventName : null,
			eventAction : null,
			type : null,
			timeStamp : new Date(),
			attributes : {}
		};
		if (ev) {
			(ev.eventName != undefined) ? (event_.eventName = ev.eventName) : (event_.eventName);
			(ev.eventAction != undefined) ? (event_.eventAction = ev.eventAction) : (event_.eventAction);
			(ev.type != undefined) ? (event_.type = ev.type) : (event_.type);
			(ev.timeStamp != undefined) ? (event_.timeStamp = ev.timeStamp) : (event_.timeStamp);
			(ev.attributes != undefined) ? (event_.attributes = ev.attributes) : (event_.attributes);
		}
		// event array is updated and a window.trigger is fired at this point to alert the browser that a new event has occurred.
		if(typeof window.digitalData.events == "undefined") {
			window.digitalData.events = new Array();
		}
		window.digitalData.events.push(event_);
		if ( typeof jQuery != "undefined") {
			jQuery(window).trigger(event_);
		}
		return event_;
	};
 
})();
 
 
// **to be implemented in a global page load rule in DTM -**
// sample code for demo -
if(typeof window.digitalData == "undefined") {
	window.digitalData = {};
}
window.digitalData.debug = true;
// start the event listener:
// this is example code that would be used to listen for digitalData events
// the event data would then be used to trigger post-page load tagging -
// typically you'd want to deploy this on page load through the tag management platform.
window.digitalData.eventHandler = function() {
	if ( typeof jQuery != "undefined") {
		// binding is based on event.type:
		jQuery(window).bind("CustomTagEvent", function(e) {
			if (window.digitalData.debug !== false) {
				console.log("event triggered: name-" + e.eventName + " action-" + e.eventAction + " type-" + e.type);

				if (e.eventAction == "Site Search Interactions") {
					switch (e.eventName) {
					case "Search Initiation":
						;// TBD
						break;
					case "Search Result Click":
						;// TBD
						break;
					}
				}
				
			}
		});
	}
};
window.digitalData.eventHandler();

// **to be implemented by site dev team on page events -**
// trigger an event:

// Search Initiation
window.digitalData.newEvent({
	eventName : "Search Initiation",
	eventAction : "Site Search Interactions",
	type : "CustomTagEvent",
	attributes : {
		searchTerm: "Seattle 98114",
		seartchType: "typed"
	}
});
