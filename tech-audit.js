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

  const listAdd = (list, ...technology) => list.push(technology.join(" "));

  const requestPage = (callback) => {
    const currentXhr = new XMLHttpRequest();
    currentXhr.open('GET', window.location.href, true);

    currentXhr.onreadystatechange = () => {
      if (currentXhr.readyState === 4 && currentXhr.status === 200) {
        const xhrHeaders = {};

        currentXhr.getAllResponseHeaders().toString()
          .split(/\r?\n/)
          .forEach((headerString) => {
            const splitHeader = headerString.split(/\:\w*/);
            xhrHeaders[splitHeader[0]] = splitHeader[1];
          });

        callback(xhrHeaders);
      }
    };

    currentXhr.send(null);
  };

  // Plugins and frameworks
  if (isDeeplyDefined("WebForm_PostBackOptions")) {
    listAdd(clientSideList, "ASP.Net Web Forms");
  }

  /* global Backbone */
  if (isDeeplyDefined("Backbone")) {
    listAdd(clientSideList, "Backbone.js", Backbone.VERSION);
  }

  /* global angular */
  if (isDeeplyDefined("angular")) {
    listAdd(clientSideList, "Angular.js", angular.version.full, '(' + angular.version.codeName + ')');
  }

  if (isDeeplyDefined("Cufon")) {
    listAdd(clientSideList, "Cuf\u00f3n");
  }

  /* global d3 */
  if (isDeeplyDefined("d3")) {
    listAdd(clientSideList, "D3.js", d3.version);
  }

  /* global dojo */
  if (isDeeplyDefined("dojo"))                    {
    listAdd(clientSideList, "Dojo", dojo.version.toString());
  }

  /* global Foundation */
  if (isDeeplyDefined("Foundation")) {
    listAdd(clientSideList, "Zurb Foundation Core", Foundation.version);
  }

  /* global jQuery, $ */
  if (isDeeplyDefined("jQuery.fn.jquery") || isDeeplyDefined("$.fn.jquery")) {
    listAdd(clientSideList, "jQuery", jQuery.fn.jquery || $.fn.jquery);
  }

  if (isDeeplyDefined("jQuery.ui") || isDeeplyDefined("$.ui")) {
    listAdd(clientSideList, "jQuery UI ", jQuery.ui.version || $.ui.version);
  }

  if (isDeeplyDefined("jQuery.fn.fancybox") || isDeeplyDefined("$.fn.fancybox")) {
    listAdd(clientSideList, "jQuery Fancybox");
  }

  /* global Modernizr */
  if (isDeeplyDefined("Modernizr")) {
    listAdd(clientSideList, "Modernizr", Modernizr._version);
  }

  /* global MooTools */
  if (isDeeplyDefined("MooTools")) {
    listAdd(clientSideList, "MooTools", MooTools.version);
  }

  /* global MOVIDEO */
  if (isDeeplyDefined("MOVIDEO")) {
    listAdd(clientSideList, "Movideo JavaScript SDK", MOVIDEO.version);
  }

  /* global Prototype */
  if (isDeeplyDefined("Prototype")) {
    listAdd(clientSideList, "Prototype.js", Prototype.Version);
  }

  /* global requirejs */
  if (isDeeplyDefined("requirejs")) {
    listAdd(clientSideList, "Require.js", requirejs.version);
  }

  if (isDeeplyDefined("require")) {
    listAdd(clientSideList, "require");
  }

  /* global Scriptalicious */
  if (isDeeplyDefined("Scriptalicious")) {
    listAdd(clientSideList, "Scriptalicious", Scriptalicious.Version);
  }

  /* global Ext */
  if (isDeeplyDefined("Ext")) {
    listAdd(clientSideList, "Sencha (ExtJS)", Ext.version);
  }

  if (isDeeplyDefined("Sizzle")) {
    listAdd(clientSideList, "Sizzle");
  }

  /* global SC */
  if (isDeeplyDefined("SC")) {
    listAdd(clientSideList, "SproutCore", SC.VERSION);
  }

  if (isDeeplyDefined("Spry")) {
    listAdd(clientSideList, "Spry");
  }

  if (isDeeplyDefined("swfobject")) {
    listAdd(clientSideList, "SWFObject");
  }

  /* global THREE */
  if (isDeeplyDefined("THREE")) {
    listAdd(clientSideList, "three.js", THREE.REVISION);
  }

  if (isDeeplyDefined("Typekit")) {
    listAdd(clientSideList, "Typekit");
  }

  if (isDeeplyDefined("Uize")) {
    listAdd(clientSideList, "Uize");
  }

  /* global _ */
  if (isDeeplyDefined("_.VERSION")) {
    // Lo-Dash has a "support" object, Underscore does not.
    if (isDeeplyDefined("_.support")) {
      listAdd(clientSideList, "Lo-Dash", _.VERSION);
    } else {
      listAdd(clientSideList, "Underscore.js", _.VERSION);
    }
  }

  if (isDeeplyDefined("YT")) {
    listAdd(clientSideList, "YouTube iframe API");
  }

  /* global YUI */
  if (isDeeplyDefined("YUI")) {
    listAdd(clientSideList, "YUI", YUI.version);
  }

  if (isDeeplyDefined("$.zepto")) {
    listAdd(clientSideList, "Zepto");
  }

  // Analytics and Performance Metrics
  if (isDeeplyDefined("udm_")) {
    listAdd(clientSideList, "ComScore");
  }

  if (isDeeplyDefined("CE2")) {
    listAdd(clientSideList, "CrazyEgg");
  }

  if (isDeeplyDefined("_gauges")) {
    listAdd(clientSideList, "Gauges");
  }

  if (isDeeplyDefined("_gaq")) {
    listAdd(clientSideList, "Google Analytics (Old Syntax)");
  }

  if (isDeeplyDefined("ga")) {
    listAdd(clientSideList, "Google Analytics");
  }

  if (isDeeplyDefined("Mint")) {
    listAdd(clientSideList, "Mint");
  }

  if (isDeeplyDefined("Mixpanel")) {
    listAdd(clientSideList, "Mixpanel");
  }

  if (isDeeplyDefined("NREUM")) {
    listAdd(clientSideList, "New Relic");
  }

  if (isDeeplyDefined("NolTracker") || isDeeplyDefined("trac.pvar")) {
    listAdd(clientSideList, "NetRatings Site Census 6.x");
  }

  if (isDeeplyDefined("rsCi")) {
    listAdd(clientSideList, "NetRatings Site Census 5.x");
  }

  if (isDeeplyDefined("opxLoad")) {
    listAdd(clientSideList, "Optimix");
  }

  if (isDeeplyDefined("Piwik")) {
    listAdd(clientSideList, "Piwik");
  }

  if (isDeeplyDefined("__qc")) {
    listAdd(clientSideList, "QuantCast");
  }

  if (isDeeplyDefined("ycsdone")) {
    listAdd(clientSideList, "Yahoo Analytics");
  }

  // Social Plugins
  if (isDeeplyDefined("addthis")) {
    listAdd(clientSideList, "AddThis");
  }

  if (isDeeplyDefined("DISQUSWIDGETS")) {
    listAdd(clientSideList, "Disqus");
  }

  if (isDeeplyDefined("FB")) {
    listAdd(clientSideList, "Facebook Javascript SDK");
  }

  if (isDeeplyDefined("gapi")) {
    listAdd(clientSideList, "Google+ API");
  }

  if (isDeeplyDefined("__twttrlr") || isDeeplyDefined("twttr")) {
    listAdd(clientSideList, "Twitter Widgets");
  }

  const clientSide = `Clientside Technology:\n${listDelimiter + (clientSideList.join(listDelimiter) || unknownString)}`;

  if (confirm(`${clientSide}\n\nDetect serverside technology?\n(Downloads the page again)`)) {
    requestPage((headers) => {
      if (headers['X-Powered-By']) {
        listAdd(serverSideList, "Powered By: " + headers['X-Powered-By']);
      }

      if (headers.Server) {
        listAdd(serverSideList, "Server: " + headers.Server);
      }

      alert(`${clientSide}\n\nServerside Technology:\n${listDelimiter + (serverSideList.join(listDelimiter) || unknownString)}`);
    });
  }

}