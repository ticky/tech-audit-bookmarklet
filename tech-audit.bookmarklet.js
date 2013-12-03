javascript:(function(listDelimiter, unknownString, maskedEval) {

  var clientSideList = [],
    serverSideList = [],

    isDefined = function(objectName) {
      var objectSplit = objectName.split(".");

      for (var i = 0; i < objectSplit.length; i++) {
        if (maskedEval("typeof " + objectSplit.slice(0, i+1).join('.')) == "undefined") {
          return false;
        }
      }

      return true;
    },

    clientSideListAdd = function(technology) {
      clientSideList.push(technology.join(" "));
    },

    serverSideListAdd = function(technology) {
      serverSideList.push(technology);
    },

    requestPage = function(callback) {
      var currentXhr = new XMLHttpRequest();
        currentXhr.open('GET', window.location.toString(), true);

        currentXhr.onreadystatechange = function() {
          if (currentXhr.readyState == 4 && currentXhr.status == 200)
          {
            var xhrHeaderString = currentXhr.getAllResponseHeaders().toString();
            var xhrHeaderStrings = xhrHeaderString.split(/\r?\n/);
            var xhrHeaderDictionary = {};
            for (var i = 0; i < xhrHeaderStrings.length; i++) {
              var currentHeaderSplit = xhrHeaderStrings[i].split(': ');
              xhrHeaderDictionary[currentHeaderSplit[0]] = currentHeaderSplit[1];
            }
            callback(xhrHeaderDictionary);
          }
        };

        currentXhr.send(null);
    };

  // Plugins and frameworks
  if (isDefined("WebForm_PostBackOptions")) { clientSideListAdd(["ASP.Net Web Forms"]); }
  if (isDefined("Backbone"))                { clientSideListAdd(["Backbone.js", Backbone.VERSION]); }
  if (isDefined("angular"))                 { clientSideListAdd(["Angular.js", angular.version.full, '(' + angular.version.codeName + ')']); }
  if (isDefined("Cufon"))                   { clientSideListAdd(["Cuf\u00f3n"]); }
  if (isDefined("d3"))                      { clientSideListAdd(["D3.js", d3.version]); }
  if (isDefined("dojo"))                    { clientSideListAdd(["Dojo", dojo.version.toString()]); }
  if (isDefined("Foundation"))              { clientSideListAdd(["Zurb Foundation Core", Foundation.version]); }
  if (isDefined("jQuery.fn.jquery") ||
      isDefined("$.fn.jquery"))             { clientSideListAdd(["jQuery", jQuery.fn.jquery || $.fn.jquery]); }
  if (isDefined("jQuery.ui") ||
      isDefined("$.ui"))                    { clientSideListAdd(["jQuery UI ", jQuery.ui.version || $.ui.version]); }
  if (isDefined("jQuery.fn.fancybox") ||
      isDefined("$.fn.fancybox"))           { clientSideListAdd(["jQuery Fancybox"]); }
  if (isDefined("Modernizr"))               { clientSideListAdd(["Modernizr", Modernizr._version]); }
  if (isDefined("MooTools"))                { clientSideListAdd(["MooTools", MooTools.version]); }
  if (isDefined("MOVIDEO"))                 { clientSideListAdd(["Movideo JavaScript SDK", MOVIDEO.version]); }
  if (isDefined("Prototype"))               { clientSideListAdd(["Prototype.js", Prototype.Version]); }
  if (isDefined("requirejs") ||
      isDefined("require"))                 { clientSideListAdd(["Require.js", requirejs.version || require.version]); }
  if (isDefined("Scriptalicious"))          { clientSideListAdd(["Scriptalicious", Scriptalicious.Version]); }
  if (isDefined("Ext"))                     { clientSideListAdd(["Sencha (ExtJS)", Ext.version]); }
  if (isDefined("Sizzle"))                  { clientSideListAdd(["Sizzle"]); }
  if (isDefined("SC"))                      { clientSideListAdd(["SproutCore", SC.VERSION]); }
  if (isDefined("Spry"))                    { clientSideListAdd(["Spry"]); }
  if (isDefined("swfobject"))               { clientSideListAdd(["SWFObject"]); }
  if (isDefined("THREE"))                   { clientSideListAdd(["three.js", THREE.REVISION]); }
  if (isDefined("Typekit"))                 { clientSideListAdd(["Typekit"]); }
  if (isDefined("Uize"))                    { clientSideListAdd(["Uize"]); }
  if (isDefined("_.VERSION")) { 
    // Lo-Dash has a "support" object, Underscore does not.
    if (isDefined("_.support")) {
      clientSideListAdd(["Lo-Dash", _.VERSION]);
    } else {
      clientSideListAdd(["Underscore.js", _.VERSION]);
    }
  }
  if (isDefined("YUI"))                     { clientSideListAdd(["YUI", YUI.version]); }
  if (isDefined("$.zepto"))                 { clientSideListAdd(["Zepto"]); }

  // Analytics and Performance Metrics
  if (isDefined("udm_"))                    { clientSideListAdd(["ComScore"]); }
  if (isDefined("_gauges"))                 { clientSideListAdd(["Gauges"]); }
  if (isDefined("_gaq"))                    { clientSideListAdd(["Google Analytics (Old Syntax)"]); }
  if (isDefined("ga"))                      { clientSideListAdd(["Google Analytics"]); }
  if (isDefined("Mint"))                    { clientSideListAdd(["Mint"]); }
  if (isDefined("Mixpanel"))                { clientSideListAdd(["Mixpanel"]); }
  if (isDefined("NREUM"))                   { clientSideListAdd(["New Relic"]); }
  if (isDefined("NolTracker") ||
      isDefined("trac.pvar"))               { clientSideListAdd(["NetRatings Site Census"]); }
  if (isDefined("opxLoad"))                 { clientSideListAdd(["Optimix"]); }
  if (isDefined("Piwik"))                   { clientSideListAdd(["Piwik"]); }
  if (isDefined("__qc"))                    { clientSideListAdd(["QuantCast"]); }
  if (isDefined("ycsdone"))                 { clientSideListAdd(["Yahoo Analytics"]); }

  // Social Plugins
  if (isDefined("addthis"))                 { clientSideListAdd(["AddThis"]); }
  if (isDefined("DISQUSWIDGETS"))           { clientSideListAdd(["Disqus"]); }
  if (isDefined("FB"))                      { clientSideListAdd(["Facebook Javascript SDK"]); }
  if (isDefined("gapi"))                    { clientSideListAdd(["Google+ API"]); }
  if (isDefined("__twttrlr") ||
      isDefined("twttr"))                   { clientSideListAdd(["Twitter Widgets"]); }

  if(confirm("Clientside Technology:\n" + listDelimiter + (clientSideList.join(listDelimiter) || unknownString) + "\n\nDetect serverside technology?\n(Downloads the page again)"))
  {
    requestPage(function (response) {
      if(typeof response['X-Powered-By'] != "undefined") { serverSideListAdd("Powered By: " + response['X-Powered-By']); }
      if(typeof response.Server != "undefined") { serverSideListAdd("Server: " + response.Server); }

      alert("Serverside Technology:\n" + listDelimiter + (serverSideList.join(listDelimiter) || unknownString));
    });
  }

}("\n• ","Unknown!",eval));