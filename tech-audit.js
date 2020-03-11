{
  const clientSideList = [];
  const serverSideList = [];

  function add() {
    this.push(Array.from(arguments).join(' '));
  }

  const renderListWithHeader = (header, list) => {
    list = list.length ? list : ['Unknown!'];
    list.unshift(`${header}:\n`);
    return list.join("\n• ");
  };

  const clientSideListAdd = add.bind(clientSideList);
  const serverSideListAdd = add.bind(serverSideList);

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
  const elementExists = (selector) => document.querySelector(selector) !== null;

  const requestPage = (callback) => {
    const currentXhr = new XMLHttpRequest();
    currentXhr.open('GET', window.location.href, true);

    currentXhr.onreadystatechange = () => {
      if (currentXhr.readyState === 4 && currentXhr.status === 200) {
        const xhrHeaders = {};

        currentXhr.getAllResponseHeaders().toString()
          .split(/\r?\n/)
          .forEach((headerString) => {
            const splitHeader = headerString.split(/:\s*/);
            xhrHeaders[splitHeader[0]] = splitHeader[1];
          });

        callback(xhrHeaders);
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
    clientSideListAdd("jQuery UI", jQuery.ui.version || $.ui.version);
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

  if (elementExists('[data-reactroot],[data-reactid]')) {
    clientSideListAdd("React");
  }

  /* global requirejs */
  if (isDeeplyDefined("requirejs")) {
    clientSideListAdd("Require.js", requirejs.version);
  }

  if (isDeeplyDefined("require")) {
    clientSideListAdd("require");
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

  if (isDeeplyDefined("Matomo") || isDeeplyDefined("Piwik") || isDeeplyDefined("_paq")) {
    clientSideListAdd("Matomo (formerly Piwik)");
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
  
  if (isDeeplyDefined("wixBiSession")) {
    clientSideListAdd("Wix.com");
  }

  const clientSide = renderListWithHeader('Clientside Technology', clientSideList);

  if (confirm(`${clientSide}\n\nDetect serverside technology?\n(Downloads the page again)`)) {
    requestPage((headers) => {
      if (headers['X-Powered-By']) {
        serverSideListAdd("Powered By:", headers['X-Powered-By']);
      }

      if (headers.Server || headers.server) {
        serverSideListAdd("Server:", headers.Server || headers.server);
      }

      alert(`${clientSide}\n\n${renderListWithHeader('Serverside Technology', serverSideList)}`);
    });
  }

}
