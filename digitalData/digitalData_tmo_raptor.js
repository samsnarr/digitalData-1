//The root JavaScript Object (JSO) MUST be digitalData, and all data properties within this
	//specification MUST fall within the hierarchy of the digitalData object.
	//The following sub-objects are defined as children of the digitalData object.
	// - digitalData.pageInstanceID
	// - digitalData.page
	// - digitalData.product[n]
	// - digitalData.cart
	// - digitalData.transaction
	// - digitalData.event[n]
	// - digitalData.user[n]
 	// - digitalData.customer[n]
javascript: (function() {
	window.digitalData = {};
	window.digitalData.page = {};
	window.digitalData.page.pageInfo = {};
	window.digitalData.product = new Array();
	window.digitalData.cart = {};
	window.digitalData.transaction = {};
	window.digitalData.event = new Array();
	window.digitalData.user = new Array();
	window.digitalData.customer = new Array();
	 
	//
	//
	//
	//
	// **digitalData.page.pageInfo:**
	// Describes details about the page.
	//
	// Reserved: pageID (String), pageName (String), pageURL (String), previousPageURL (String), prevPageName (String), version (String), language (String), geoRegion (String), domain (String), responsiveState (String), timeStamp (Date), currencyCode (String)
	//
	// For pageURL, and previousPageURL, RECOMMENDED values are
	// document.location, and document.referrer, respectively.  (assuming non-single page app experience.)
	// 
	window.digitalData.page.pageInfo = {
		pageID : null,
		pageName : null,
		pageURL : document.URL,
		previousPageURL : document.referrer,
		prevPageName : null,
		version : null,
		language : null,
		geoRegion : null,
		domain : null,
		responsiveState : null,
		timeStamp: new Date(),
		currencyCode: "USD"
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
		subCategory : [],
		pageType : null
	};
	
	window.digitalData.page.search = {
		searchTerm : null,
		searchResultCount : null
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
		// **Reserved:** **productID** (String), **productName** (String), **description** (String), **productURL**
		// (String), **productImage** (String), **productThumbnail** (String), **manufacturer** (String), **sku**
		// (String), **color** (String), **size** (String)
		// &nbsp; 
		// == 
		//		// Because of the wide range of methods for categorization, 
		//		// an object literal is provided for product categories.
		//		// example: 
		// 		digitalData.product[n].category = {
		//	 		primaryCategory: "Haircare",
		// 			subCategory1: "Men's",
		//	 		productType: "Thinning Hair Treatments"
		// 		};
		// 
		// **Reserved:** **primaryCategory** (String)
		// The name primaryCategory is RECOMMENDED if you included only one set of categories
		// for products, or for your primary set of categories. 
		// 
		// All other names are optional and should fit
		// the individual implementation needs in both naming and values passed.
		var product_ = {
			sku : null,
			id : null,
			name : null,
			type : null,
			subType : null,
			accountType : null,
			price : {},
			attributes : {}
		};
		if (p) {
			(p.sku != undefined) ? (product_.sku = p.sku) : (product_.sku);
			(p.id != undefined) ? (product_.id = p.id) : (product_.id);
			(p.name != undefined) ? (product_.name = p.name) : (product_.name);
			(p.type != undefined) ? (product_.type = p.type) : (product_.type);
			(p.subType != undefined) ? (product_.subType = p.subType) : (product_.subType);
			(p.accountType != undefined) ? (product_.accountType = p.accountType) : (product_.accountType);
			(p.price != undefined) ? (product_.price = p.price) : (product_.price);
			(p.attributes != undefined) ? (product_.attributes = p.attributes) : (product_.attributes);
		}
		return product_;
	};
	
	// The **Cart object** carries details about a shopping cart or basket and the products that have been
	// added to it. The Cart object is intended for a purchase that has not yet been completed. See the
	// Transaction object below for completed orders.
	window.digitalData.cart.cartID = null;
	// **digitalData.cart.price:** This object provides details of the cart price. The **basePrice** SHOULD be the price of the
	// **items** before applicable discounts, shipping charges, and tax. The **cartTotal** SHOULD be
	// the total price inclusive of all discounts, charges, and tax.
	//
	// **Reserved:** **basePrice** (Number), **voucherCode** (String), **voucherDiscount** (Number),
	// **currency** (String), **taxRate** (Number), **shipping** (Number), **shippingMethod** (String),
	// **priceWithTax** (Number), **cartTotal** (Number)
	window.digitalData.cart.price = { 
		basePrice : null,
		voucherCode : null,
		voucherDiscount : null,
		currency : null,
		taxRate : null,
		shipping : null,
		shippingMethod : null,
		priceWithTax : null,
		cartTotal : null,
		attributes : {}, // This object provides extensibility to the cart as a whole. Any additional dimensions related to the cart can be provided.
		product : [] // [one or more product objects] window.digitalData.cart.item.push(window.digitalData.newProduct({})) could be used to populate the cart.
		
	};

	// The **Transaction object** is similar to the Cart object, but represents a completed order. The
	// Transaction object contains analogous sub-objects to the Cart object as well as additional subobjects
	// specific to completed orders.
	window.digitalData.transaction.transactionID = null; // A unique identifier for a particular transaction; usually an existing order identifier.
	window.digitalData.transaction.profile = {}; // A profile for information about the purchaser, typically associated with a registered user.
	window.digitalData.transaction.profile.address = { // An extensible object for providing (billing) address information for the purchaser.
		line1 : null,
		line2 : null,
		city : null,
		stateProvince : null,
		postalCode : null,
		country : null,
		attributes : {}
	};

	window.digitalData.transaction.profile.shippingAddress = { // As for address, but for the shipping address.
		line1 : null,
		line2 : null,
		city : null,
		stateProvince : null,
		postalCode : null,
		country : null,
		attributes : {}
	};

	// **digitalData.transaction.total:**  This object provides details of the final price the purchaser has to pay. The basePrice
	// SHOULD be the price of the items before applicable discounts, shipping charges, and tax.
	// The transactionTotal SHOULD be the total price inclusive of all discounts, charges, and
	// tax.
	//
	// **Reserved:** **totalPrice** (Number), **voucherCode** (String), **voucherDiscount** (Number),
	// **currency** (String), **taxRate** (Number), **shipping** (Number), **shippingMethod** (String),
	// **priceWithTax** (Number), **transactionTotal** (Number)
	window.digitalData.transaction.total = { // window.digitalData.cart.item.push(window.digitalData.newProduct({})) could be used to populate the cart.
		basePrice : null,
		voucherCode : null,
		voucherDiscount : null,
		currency : null,
		taxRate : null,
		shipping : null,
		shippingMethod : null,
		priceWithTax : null,
		transactionTotal : null,
		attributes : {},
		product : [] // one or more product objects
	};

	// Utility function to create new event entries.
	// Usage: window.digitalData.events.push(window.digitalData.newEvent({}))
	window.digitalData.newEvent = function(ev) {
		var event_ = {
			eventInfo : {
				eventAction : null,
				eventType : null,
				timeStamp : new Date()
			},
			category : {
				eventCategory : null
			},
			attributes : {},
			product: new Array()
		};
		if (ev) {
			(ev.eventInfo != undefined) ? (event_.eventInfo = ev.eventInfo) : (event_.eventInfo);
			(ev.category != undefined) ? (event_.category = ev.eventAction) : (event_.category);
			(ev.attributes != undefined) ? (event_.attributes = ev.attributes) : (event_.attributes);
			(ev.product != undefined) ? (event_.product = ev.product) : (event_.product);
		}
		window.digitalData.events.push(event_);
		return event_;
	};

	// Utility function to create new user entries.
	// Usage: window.digitalData.user.push(window.digitalData.newUser({}))
	window.digitalData.newUser = function(usr) {
		var user_ = {
			segment : {},
			profile : [{
				profileID : null,
				userName : null,
				email : null,
				language : null,
				returningStatus : null,
				type : null,
				address : {
					line1 : null,
					line2 : null,
					city : null,
					stateProvince : null,
					postalCode : null,
					country : null
				},
				social : {},
				attributes : {}
			}],
			attributes : {}
		};
		if (usr) {
			(usr.segment != undefined) ? (user_.segment = usr.segment) : (user_.segment);
			(usr.profile != undefined) ? (user_.profile = usr.profile) : (user_.profile);
			(usr.attributes != undefined) ? (user_.attributes = usr.attributes) : (user_.attributes);
		}
		return user_;
	};
	
})();
 
