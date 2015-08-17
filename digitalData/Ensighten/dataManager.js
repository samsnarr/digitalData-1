/* Rule Id: 893376 */
/* Rule Id: 726783 */
Bootstrapper.dataManager.push({
  name: "Page Data Layer",
  id: "pmcDataLayer",
  data: {
    pageID: {
      name: "Page ID",
      get: function() {
        return digitalData.page.pageInfo.pageID;
      }
    },
    pageName: {
      name: "Page Name",
      get: function() {
        return digitalData.page.pageInfo.pageName;
      }
    },
    pageURL: {
      name: "Destination URL",
      get: function() {
        return digitalData.page.pageInfo.pageURL;
      }
    },
    previousPageURL: {
      name: "Previous Page URL",
      get: function() {
        return digitalData.page.pageInfo.previousPageURL;
      }
    },
    previousPageName: {
      name: "Previous Page Name",
      get: function() {
        return digitalData.page.pageInfo.prevPageName;
      }
    },
    version: {
      name: "System Environment",
      get: function() {
        return digitalData.page.pageInfo.version;
      }
    },
    language: {
      name: "Language",
      get: function() {
        return digitalData.page.pageInfo.language;
      }
    },
    geoRegion: {
      name: "Geographic Location",
      get: function() {
        return digitalData.page.pageInfo.geoRegion;
      }
    },
    domain: {
      name: "Domain Name",
      get: function() {
        return digitalData.page.pageInfo.domain;
      }
    },
    responsiveState: {
      name: "Responsive State",
      get: function() {
        return digitalData.page.pageInfo.responsiveState;
      }
    },
    timeStamp: {
      name: "Responsive State",
      get: function() {
        return digitalData.page.pageInfo.timeStamp;
      }
    },
    currencyCode: {
      name: "Currency Code",
      get: function() {
        return digitalData.page.pageInfo.currencyCode;
      }
    },
    primaryCategory: {
      name: "Primary Category",
      get: function() {
        return digitalData.page.category.primaryCategory;
      }
    },
    subCategory: {
      name: "Sub-Category",
      get: function() {
        return digitalData.page.category.subCategory;
      }
    },
    pageType: {
      name: "Page Type",
      get: function() {
        return digitalData.page.category.pageType;
      }
    },
    variant: {
      name: "Channel",
      get: function() {
        return digitalData.page.category.variant;
      }
    },
    channel: {
      name: "Channel",
      get: function() {
        return digitalData.page.category.channel;
      }
    },
    subChannel: {
      name: "Sub-Channel",
      get: function() {
        return digitalData.page.category.subChannel;
      }
    },
    flowName: {
      name: "Sub-Channel",
      get: function() {
        return digitalData.page.category.flowName;
      }
    },
    storeID: {
      name: "Store ID",
      get: function() {
        return digitalData.page.category.storeID;
      }
    },
    searchTerm: {
      name: "Search Term",
      get: function() {
        return digitalData.page.search.searchTerm;
      }
    },
    searchResultCount: {
      name: "Search Result Count",
      get: function() {
        return digitalData.page.search.searchResultCount;
      }
    }
  }
});
