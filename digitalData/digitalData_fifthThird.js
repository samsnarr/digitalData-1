//The root JavaScript Object (JSO) MUST be digitalData, and all data properties within this
//specification MUST fall within the hierarchy of the digitalData object.
//The following sub-objects are defined as children of the digitalData object.
// - digitalData.page
// - digitalData.product[n]
// - digitalData.cart
// - digitalData.event[n]
// - digitalData.user
// - digitalData.version
javascript: (function() {
	window.digitalData = {};
	window.digitalData.page = {};
	window.digitalData.page.pageInfo = {};
	window.digitalData.product = new Array();
	window.digitalData.cart = {};
	window.digitalData.transaction = {};
	window.digitalData.events = new Array();
	window.digitalData.user = {};
	window.digitalData.version = "1.0";
	window.digitalData.debug = false;
	//
	//
	//
	//
	// **digitalData.page.pageInfo:**
	// Describes details about the page.
	//
	window.digitalData.page.pageInfo = {
		pageID : null,
		site : null,
		pageName : null,
		pageTitle : null,
		pageURL : document.URL,
		previousPageURL : document.referrer,
		version : null,
		domain : null,
		responsiveState : null,
		timeStamp : new Date(),
		MLOName : null,
		OCApplicationType : null,
		CLB2CApplicationNumber : null,
		turndownCode : null,
		morgageLeadID : null,
		applySesssionID: null
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

	// added to capture data specific to search results pages.
	window.digitalData.page.attributes.search = {
		searchTerm : null,
		resultsCount : null
	};

	// **digitalData.newProduct:** Utility function to create new product entries.
	//
	// 	// window.digitalData.product.push(window.digitalData.newProduct({}))
	window.digitalData.newProduct = function(p) {
		// The **Product object** carries details about a particular product with frequently used properties
		// listed below.
		// This is intended for data about products displayed on pages or other content.
		var product_ = {
			id : null,
			name : null,
			type : null,
			attributes : {}
		};
		if (p) {
			(p.id != undefined) ? (product_.id = p.id) : (product_.id);
			(p.name != undefined) ? (product_.name = p.name) : (product_.name);
			(p.type != undefined) ? (product_.type = p.type) : (product_.type);
			(p.attributes != undefined) ? (product_.attributes = p.attributes) : (product_.attributes);
		}
		return product_;
	};

	// The **Cart object** carries details about a shopping cart or basket and the products that have been
	// added to it. The Cart object is intended for a purchase that has not yet been completed.
	window.digitalData.cart = {
		cartID : null,
		attributes : {}, // This object provides extensibility to the cart as a whole. Any additional dimensions related to the cart can be provided.
		product : [] // [one or more product objects] window.digitalData.cart.item.push(window.digitalData.newProduct({})) could be used to populate the cart.

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

	window.digitalData.user = {
		ECIFID : null,
		loginStatus : false,
		attributes : {}
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

				if (e.eventAction == "Tool Interactions") {
					switch (e.eventName) {
					case "Tool Usage: Skip Calculator":
						;// TBD
						;//_satellite.track("tool_usage_skip_calculator");
						break;
					case "Tool Usage: Calculator Link":
						;// TBD
						break;
					case "Tool Usage: Tool Starts":
						;// TBD
						;//_satellite.track("tool_usage_tool_start");
						break;
					}
				}

				if (e.eventAction == "Page Element Interactions") {
					switch (e.eventName) {
					case "Find MLO Click":
						;// TBD
						break;
					case "Call Now Click":
						;// TBD
						break;
					case "Apply Now Click":
						;// TBD
						break;
					case "Find a Branch Click":
						;// TBD
						break;
					case "Contact Us Submission":
						;// TBD
						break;
					case "MLO: Lead Submitted":
						;// TBD
						break;
					case "Call Me Maybe":
						;// TBD
						break;
					case "File Download":
						;// TBD
						break;
					case "In-page Content View":
						;// TBD
						break;
					}
				}

				if (e.eventAction == "Branch/ATM Locator Search Initiation") {
					if (e.eventName == "Tool Usage: Branch/ATM Locator Search Initiation") {
						;// example:
						;//s.linkTrackEvents = "events,";
						;//s.linkTrackVars = "eVar56,eVar1,eVar2,eVar3,eVar4,eVar5,eVar6,eVar7,evar17,eVar61,eVar62,eVar63,eVar64";
						;//s.eVar56 = e.attributes.searchTerm;
						;//s.tl();
						;// or
						;//_satellite.track("tool_usage_calculator");
					}
				}

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

				if (e.eventAction == "Account Action") {
					;// TBD
				}

				if (e.eventAction == "Registration") {
					switch (e.eventName) {
					case "Registration Start":
						;// TBD
						break;
					case "Registration Complete":
						;// TBD
						break;
					}
				}

				if (e.eventAction == "Authentication") {
					switch (e.eventName) {
					case "Login":
						;// TBD
						break;
					case "Logout":
						;// TBD
						break;
					}
				}

				if (e.eventAction == "MLO Search") {
					switch (e.eventName) {
					case "MLO Search: Start":
						;// TBD
						break;
					case "MLO Search: Searches":
						;// TBD
						break;
					case "MLO Search: Click to Email":
						;// TBD
						break;
					case "MLO Search: Click to Call":
						;// TBD
						break;
					case "MLO Search: Visit Website":
						;// TBD
						;//_satellite.track("mlo_search_visit_website");
						break;
					}
				}

				if (e.eventAction == "Page Load") {
					;// s.t()
					;// _satellite.track("page_load");
					;// TBD
				}
			}
		});
	}
};
window.digitalData.eventHandler();

// **to be implemented by site dev team on page events -**
// trigger an event:

// event103, Set any time a visitor clicks Skip Calculator in CLB2C app
window.digitalData.newEvent({
	eventName : "Tool Usage: Skip Calculator",
	eventAction : "Tool Interactions",
	type : "CustomTagEvent"
});

// event101, On click of any link to a calculator
window.digitalData.newEvent({
	eventName : "Tool Usage: Calculator Link",
	eventAction : "Tool Interactions",
	type : "CustomTagEvent"
});

//event100, On click of a "find a specialist", "Find a mortgage loan originator", or "find MLO" button
window.digitalData.newEvent({
	eventName : "Find MLO Click",
	eventAction : "Page Element Interactions",
	type : "CustomTagEvent"
});

//event99, On any click to initiate a phone call
window.digitalData.newEvent({
	eventName : "Call Now Click",
	eventAction : "Page Element Interactions",
	type : "CustomTagEvent"
});

//eventTBD, On failed attempt to initiate branch finder search
window.digitalData.newEvent({
	eventName : "Tool Usage: Branch/ATM Locator Search Initiation",
	eventAction : "Branch/ATM Locator Search Initiation",
	type : "CustomTagEvent",
	attributes : {
		searchTerm : "Current Location",
		validSearch : false,
		includeBranches : true,
		includeATMs : true
	}
});

//eventTBD, On successful branch finder search
window.digitalData.newEvent({
	eventName : "Tool Usage: Branch/ATM Locator Search Initiation",
	eventAction : "Branch/ATM Locator Search Initiation",
	type : "CustomTagEvent",
	attributes : {
		searchTerm : "Current Location",
		validSearch : true,
		includeBranches : true,
		includeATMs : true
	}
});

//event95, On click of an "apply now" button
window.digitalData.newEvent({
	eventName : "Apply Now Click",
	eventAction : "Page Element Interactions",
	type : "CustomTagEvent"
});

//event94, On click of a "find a branch" button
window.digitalData.newEvent({
	eventName : "Find a Branch Click",
	eventAction : "Page Element Interactions",
	type : "CustomTagEvent"
});

//event86, On submission of "contact us" or "get help" form
window.digitalData.newEvent({
	eventName : "Contact Us Submission",
	eventAction : "Page Element Interactions",
	type : "CustomTagEvent"
});

//eventTBD, On submission of MLO lead application
window.digitalData.newEvent({
	eventName : "MLO: Lead Submitted",
	eventAction : "Page Element Interactions",
	type : "CustomTagEvent"
});

//event46, On click of "talk now", "request a call", or "call me now"
window.digitalData.newEvent({
	eventName : "Call Me Maybe",
	eventAction : "Page Element Interactions",
	type : "CustomTagEvent"
});

//event40, file download click
window.digitalData.newEvent({
	eventName : "File Download",
	eventAction : "Page Element Interactions",
	type : "CustomTagEvent",
	attributes : {
		fileName : "Account Statement"
	}
});

//event39, search result click
window.digitalData.newEvent({
	eventName : "Search Result Click",
	eventAction : "Site Search Interactions",
	type : "CustomTagEvent",
	attributes : {
		resultClick : "Home Page"
	}
});

//event36, search initiation
window.digitalData.newEvent({
	eventName : "Search Initiation",
	eventAction : "Site Search Interactions",
	type : "CustomTagEvent",
	attributes : {
		searchTerm : "Free Online Checking"
	}
});

// event35, On first interaction with a tool (calculators, widgets, etc)
window.digitalData.newEvent({
	eventName : "Tool Usage: Tool Starts",
	eventAction : "Tool Interactions",
	type : "CustomTagEvent",
	attributes : {
		toolName : "Morgage Calculator"
	}
});

//event32, On click to display additional page content (tabs, etc)
window.digitalData.newEvent({
	eventName : "In-page Content View",
	eventAction : "Page Element Interactions",
	type : "CustomTagEvent",
	attributes : {
		contentName : "descriptions TBD"
	}
});

//eventTBD, Account Action
window.digitalData.newEvent({
	eventName : "Account Action",
	eventAction : "Account Action",
	type : "CustomTagEvent",
	attributes : {
		accountAction : "descriptions TBD"
	}
});

//event7, Logouts
window.digitalData.newEvent({
	eventName : "Logout",
	eventAction : "Authentication",
	type : "CustomTagEvent"
});

//event6, Logins
window.digitalData.newEvent({
	eventName : "Login",
	eventAction : "Authentication",
	type : "CustomTagEvent"
});

//eventTBD, MLO Search: Visit Website
window.digitalData.newEvent({
	eventName : "MLO Search: Visit Website",
	eventAction : "MLO Search",
	type : "CustomTagEvent"
});

//eventTBD, MLO Search: Click to Call
window.digitalData.newEvent({
	eventName : "MLO Search: Click to Call",
	eventAction : "MLO Search",
	type : "CustomTagEvent"
});

//eventTBD, MLO Search: Click to Email
window.digitalData.newEvent({
	eventName : "MLO Search: Click to Email",
	eventAction : "MLO Search",
	type : "CustomTagEvent"
});

//eventTBD, MLO Search: Searches
window.digitalData.newEvent({
	eventName : "MLO Search: Searches",
	eventAction : "MLO Search",
	type : "CustomTagEvent"
});

//eventTBD, MLO Search: Start
window.digitalData.newEvent({
	eventName : "MLO Search: Start",
	eventAction : "MLO Search",
	type : "CustomTagEvent"
});

// called by a single-page app (e.g., Open Consumer) to indicate that a new virtual page has been loaded
window.digitalData.newEvent({
	eventName : "Page Load",
	eventAction : "Page Load",
	attributes : {
		digitalData : window.digitalData
	},
	type : "CustomTagEvent"
});

