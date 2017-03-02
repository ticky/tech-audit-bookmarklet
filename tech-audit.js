{
  const listDelimiter = "\n• ";
  const unknownString = "Unknown!";
  const clientSideList = [];
  const serverSideList = [];

  const isDefined = (objectName) => {
    const objectSplit = objectName.split(".");

    for (let pathIndex = 0; pathIndex < objectSplit.length; pathIndex++) {
      if (eval("typeof " + objectSplit.slice(0, pathIndex + 1).join('.')) === "undefined") { // eslint-disable-line no-eval
        return false;
      }
    }

    return true;
  };

  const clientSideListAdd = (...technology) => clientSideList.push(technology.join(" "));

  const serverSideListAdd = (technology) => serverSideList.push(technology);

  const requestPage = (callback) => {
    const currentXhr = new XMLHttpRequest();

    currentXhr.open('GET', window.location.toString(), true);

    currentXhr.onreadystatechange = function() {
      if (currentXhr.readyState === 4 && currentXhr.status === 200) {
        const xhrHeaderString = currentXhr.getAllResponseHeaders().toString();
        const xhrHeaderStrings = xhrHeaderString.split(/\r?\n/);
        const xhrHeaderDictionary = {};

        for (let headerIndex = 0; headerIndex < xhrHeaderStrings.length; headerIndex++) {
          const currentHeaderSplit = xhrHeaderStrings[headerIndex].split(': ');
          xhrHeaderDictionary[currentHeaderSplit[0]] = currentHeaderSplit[1];
        }

        callback(xhrHeaderDictionary);
      }
    };

    currentXhr.send(null);
  };

  // Plugins and frameworks
  if (isDefined("WebForm_PostBackOptions")) {
    clientSideListAdd("ASP.Net Web Forms");
  }

  /* global Backbone */
  if (isDefined("Backbone")) {
    clientSideListAdd("Backbone.js", Backbone.VERSION);
  }

  /* global angular */
  if (isDefined("angular")) {
    clientSideListAdd("Angular.js", angular.version.full, '(' + angular.version.codeName + ')');
  }

  if (isDefined("Cufon")) {
    clientSideListAdd("Cuf\u00f3n");
  }

  /* global d3 */
  if (isDefined("d3")) {
    clientSideListAdd("D3.js", d3.version);
  }

  /* global dojo */
  if (isDefined("dojo"))                    {
    clientSideListAdd("Dojo", dojo.version.toString());
  }

  /* global Foundation */
  if (isDefined("Foundation")) {
    clientSideListAdd("Zurb Foundation Core", Foundation.version);
  }

  /* global jQuery, $ */
  if (isDefined("jQuery.fn.jquery") || isDefined("$.fn.jquery")) {
    clientSideListAdd("jQuery", jQuery.fn.jquery || $.fn.jquery);
  }

  if (isDefined("jQuery.ui") || isDefined("$.ui")) {
    clientSideListAdd("jQuery UI ", jQuery.ui.version || $.ui.version);
  }

  if (isDefined("jQuery.fn.fancybox") || isDefined("$.fn.fancybox")) {
    clientSideListAdd("jQuery Fancybox");
  }

  /* global Modernizr */
  if (isDefined("Modernizr")) {
    clientSideListAdd("Modernizr", Modernizr._version);
  }

  /* global MooTools */
  if (isDefined("MooTools")) {
    clientSideListAdd("MooTools", MooTools.version);
  }

  /* global MOVIDEO */
  if (isDefined("MOVIDEO")) {
    clientSideListAdd("Movideo JavaScript SDK", MOVIDEO.version);
  }

  /* global Prototype */
  if (isDefined("Prototype")) {
    clientSideListAdd("Prototype.js", Prototype.Version);
  }

  /* global requirejs, require */
  if (isDefined("requirejs") || isDefined("require")) {
    clientSideListAdd("Require.js", requirejs.version || require.version);
  }

  /* global Scriptalicious */
  if (isDefined("Scriptalicious")) {
    clientSideListAdd("Scriptalicious", Scriptalicious.Version);
  }

  /* global Ext */
  if (isDefined("Ext")) {
    clientSideListAdd("Sencha (ExtJS)", Ext.version);
  }

  if (isDefined("Sizzle")) {
    clientSideListAdd("Sizzle");
  }

  /* global SC */
  if (isDefined("SC")) {
    clientSideListAdd("SproutCore", SC.VERSION);
  }

  if (isDefined("Spry")) {
    clientSideListAdd("Spry");
  }

  if (isDefined("swfobject")) {
    clientSideListAdd("SWFObject");
  }

  /* global THREE */
  if (isDefined("THREE")) {
    clientSideListAdd("three.js", THREE.REVISION);
  }

  if (isDefined("Typekit")) {
    clientSideListAdd("Typekit");
  }

  if (isDefined("Uize")) {
    clientSideListAdd("Uize");
  }

  /* global _ */
  if (isDefined("_.VERSION")) {
    // Lo-Dash has a "support" object, Underscore does not.
    if (isDefined("_.support")) {
      clientSideListAdd("Lo-Dash", _.VERSION);
    } else {
      clientSideListAdd("Underscore.js", _.VERSION);
    }
  }

  if (isDefined("YT")) {
    clientSideListAdd("YouTube iframe API");
  }

  /* global YUI */
  if (isDefined("YUI")) {
    clientSideListAdd("YUI", YUI.version);
  }

  if (isDefined("$.zepto")) {
    clientSideListAdd("Zepto");
  }

  // Analytics and Performance Metrics
  if (isDefined("udm_")) {
    clientSideListAdd("ComScore");
  }

  if (isDefined("CE2")) {
    clientSideListAdd("CrazyEgg");
  }

  if (isDefined("_gauges")) {
    clientSideListAdd("Gauges");
  }

  if (isDefined("_gaq")) {
    clientSideListAdd("Google Analytics (Old Syntax)");
  }

  if (isDefined("ga")) {
    clientSideListAdd("Google Analytics");
  }

  if (isDefined("Mint")) {
    clientSideListAdd("Mint");
  }

  if (isDefined("Mixpanel")) {
    clientSideListAdd("Mixpanel");
  }

  if (isDefined("NREUM")) {
    clientSideListAdd("New Relic");
  }

  if (isDefined("NolTracker") || isDefined("trac.pvar")) {
    clientSideListAdd("NetRatings Site Census 6.x");
  }

  if (isDefined("rsCi")) {
    clientSideListAdd("NetRatings Site Census 5.x");
  }

  if (isDefined("opxLoad")) {
    clientSideListAdd("Optimix");
  }

  if (isDefined("Piwik")) {
    clientSideListAdd("Piwik");
  }

  if (isDefined("__qc")) {
    clientSideListAdd("QuantCast");
  }

  if (isDefined("ycsdone")) {
    clientSideListAdd("Yahoo Analytics");
  }

  // Social Plugins
  if (isDefined("addthis")) {
    clientSideListAdd("AddThis");
  }

  if (isDefined("DISQUSWIDGETS")) {
    clientSideListAdd("Disqus");
  }

  if (isDefined("FB")) {
    clientSideListAdd("Facebook Javascript SDK");
  }

  if (isDefined("gapi")) {
    clientSideListAdd("Google+ API");
  }

  if (isDefined("__twttrlr") || isDefined("twttr")) {
    clientSideListAdd("Twitter Widgets");
  }

  const clientSide = `Clientside Technology:\n${listDelimiter + (clientSideList.join(listDelimiter) || unknownString)}`;

  if (confirm(`${clientSide}\n\nDetect serverside technology?\n(Downloads the page again)`)) {
    requestPage(function(response) {
      if (typeof response['X-Powered-By'] != "undefined") {
        serverSideListAdd("Powered By: " + response['X-Powered-By']);
      }
      if (typeof response.Server != "undefined") {
        serverSideListAdd("Server: " + response.Server);
      }

      alert(`${clientSide}\n\nServerside Technology:\n${listDelimiter + (serverSideList.join(listDelimiter) || unknownString)}`);
    });
  }

}