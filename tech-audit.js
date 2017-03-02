{
  const listDelimiter = "\n• ";
  const unknownString = "Unknown!";
  const clientSideList = [];
  const serverSideList = [];

  const isDefined = (obj) => typeof obj !== 'undefined';

  const isDeeplyDefined = (objectPath) => (
    isDefined(
      objectPath.split('.').reduce(
        (last, current) => (
          isDefined(last)
            ? last[current]
            : undefined
        ),
        window
      )
    )
  );

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
  if (isDeeplyDefined("WebForm_PostBackOptions")) {
    clientSideListAdd("ASP.Net Web Forms");
  }

  /* global Backbone */
  if (isDeeplyDefined("Backbone")) {
    clientSideListAdd("Backbone.js", Backbone.VERSION);
  }

  /* global angular */
  if (isDeeplyDefined("angular")) {
    clientSideListAdd("Angular.js", angular.version.full, '(' + angular.version.codeName + ')');
  }

  if (isDeeplyDefined("Cufon")) {
    clientSideListAdd("Cuf\u00f3n");
  }

  /* global d3 */
  if (isDeeplyDefined("d3")) {
    clientSideListAdd("D3.js", d3.version);
  }

  /* global dojo */
  if (isDeeplyDefined("dojo"))                    {
    clientSideListAdd("Dojo", dojo.version.toString());
  }

  /* global Foundation */
  if (isDeeplyDefined("Foundation")) {
    clientSideListAdd("Zurb Foundation Core", Foundation.version);
  }

  /* global jQuery, $ */
  if (isDeeplyDefined("jQuery.fn.jquery") || isDeeplyDefined("$.fn.jquery")) {
    clientSideListAdd("jQuery", jQuery.fn.jquery || $.fn.jquery);
  }

  if (isDeeplyDefined("jQuery.ui") || isDeeplyDefined("$.ui")) {
    clientSideListAdd("jQuery UI ", jQuery.ui.version || $.ui.version);
  }

  if (isDeeplyDefined("jQuery.fn.fancybox") || isDeeplyDefined("$.fn.fancybox")) {
    clientSideListAdd("jQuery Fancybox");
  }

  /* global Modernizr */
  if (isDeeplyDefined("Modernizr")) {
    clientSideListAdd("Modernizr", Modernizr._version);
  }

  /* global MooTools */
  if (isDeeplyDefined("MooTools")) {
    clientSideListAdd("MooTools", MooTools.version);
  }

  /* global MOVIDEO */
  if (isDeeplyDefined("MOVIDEO")) {
    clientSideListAdd("Movideo JavaScript SDK", MOVIDEO.version);
  }

  /* global Prototype */
  if (isDeeplyDefined("Prototype")) {
    clientSideListAdd("Prototype.js", Prototype.Version);
  }

  /* global requirejs, require */
  if (isDeeplyDefined("requirejs") || isDeeplyDefined("require")) {
    clientSideListAdd("Require.js", requirejs.version || require.version);
  }

  /* global Scriptalicious */
  if (isDeeplyDefined("Scriptalicious")) {
    clientSideListAdd("Scriptalicious", Scriptalicious.Version);
  }

  /* global Ext */
  if (isDeeplyDefined("Ext")) {
    clientSideListAdd("Sencha (ExtJS)", Ext.version);
  }

  if (isDeeplyDefined("Sizzle")) {
    clientSideListAdd("Sizzle");
  }

  /* global SC */
  if (isDeeplyDefined("SC")) {
    clientSideListAdd("SproutCore", SC.VERSION);
  }

  if (isDeeplyDefined("Spry")) {
    clientSideListAdd("Spry");
  }

  if (isDeeplyDefined("swfobject")) {
    clientSideListAdd("SWFObject");
  }

  /* global THREE */
  if (isDeeplyDefined("THREE")) {
    clientSideListAdd("three.js", THREE.REVISION);
  }

  if (isDeeplyDefined("Typekit")) {
    clientSideListAdd("Typekit");
  }

  if (isDeeplyDefined("Uize")) {
    clientSideListAdd("Uize");
  }

  /* global _ */
  if (isDeeplyDefined("_.VERSION")) {
    // Lo-Dash has a "support" object, Underscore does not.
    if (isDeeplyDefined("_.support")) {
      clientSideListAdd("Lo-Dash", _.VERSION);
    } else {
      clientSideListAdd("Underscore.js", _.VERSION);
    }
  }

  if (isDeeplyDefined("YT")) {
    clientSideListAdd("YouTube iframe API");
  }

  /* global YUI */
  if (isDeeplyDefined("YUI")) {
    clientSideListAdd("YUI", YUI.version);
  }

  if (isDeeplyDefined("$.zepto")) {
    clientSideListAdd("Zepto");
  }

  // Analytics and Performance Metrics
  if (isDeeplyDefined("udm_")) {
    clientSideListAdd("ComScore");
  }

  if (isDeeplyDefined("CE2")) {
    clientSideListAdd("CrazyEgg");
  }

  if (isDeeplyDefined("_gauges")) {
    clientSideListAdd("Gauges");
  }

  if (isDeeplyDefined("_gaq")) {
    clientSideListAdd("Google Analytics (Old Syntax)");
  }

  if (isDeeplyDefined("ga")) {
    clientSideListAdd("Google Analytics");
  }

  if (isDeeplyDefined("Mint")) {
    clientSideListAdd("Mint");
  }

  if (isDeeplyDefined("Mixpanel")) {
    clientSideListAdd("Mixpanel");
  }

  if (isDeeplyDefined("NREUM")) {
    clientSideListAdd("New Relic");
  }

  if (isDeeplyDefined("NolTracker") || isDeeplyDefined("trac.pvar")) {
    clientSideListAdd("NetRatings Site Census 6.x");
  }

  if (isDeeplyDefined("rsCi")) {
    clientSideListAdd("NetRatings Site Census 5.x");
  }

  if (isDeeplyDefined("opxLoad")) {
    clientSideListAdd("Optimix");
  }

  if (isDeeplyDefined("Piwik")) {
    clientSideListAdd("Piwik");
  }

  if (isDeeplyDefined("__qc")) {
    clientSideListAdd("QuantCast");
  }

  if (isDeeplyDefined("ycsdone")) {
    clientSideListAdd("Yahoo Analytics");
  }

  // Social Plugins
  if (isDeeplyDefined("addthis")) {
    clientSideListAdd("AddThis");
  }

  if (isDeeplyDefined("DISQUSWIDGETS")) {
    clientSideListAdd("Disqus");
  }

  if (isDeeplyDefined("FB")) {
    clientSideListAdd("Facebook Javascript SDK");
  }

  if (isDeeplyDefined("gapi")) {
    clientSideListAdd("Google+ API");
  }

  if (isDeeplyDefined("__twttrlr") || isDeeplyDefined("twttr")) {
    clientSideListAdd("Twitter Widgets");
  }

  const clientSide = `Clientside Technology:\n${listDelimiter + (clientSideList.join(listDelimiter) || unknownString)}`;

  if (confirm(`${clientSide}\n\nDetect serverside technology?\n(Downloads the page again)`)) {
    requestPage(function(response) {
      if (isDefined(response['X-Powered-By'])) {
        serverSideListAdd("Powered By: " + response['X-Powered-By']);
      }
      if (isDefined(response.Server)) {
        serverSideListAdd("Server: " + response.Server);
      }

      alert(`${clientSide}\n\nServerside Technology:\n${listDelimiter + (serverSideList.join(listDelimiter) || unknownString)}`);
    });
  }

}