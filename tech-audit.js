// @flow

{
  function add(name, version) {
    const entry = [name, version].join(' ');
    if (this.indexOf(entry) === -1) {
      this.push(entry);
    }
  }

  const isDefined = (obj: ?Object): boolean => typeof obj !== 'undefined';
  const isDeeplyDefined = (objectPath: string, inObject: Object = window) => (
    isDefined(
      objectPath.split('.').reduce(
        (last: Object, current: string): ?Object => (
          isDefined(last)
            ? last[current]
            : undefined
        ),
        inObject
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

  const webpHack = ((webpackJsonp) => {
    return (injectedModule) => {
      if (!webpackJsonp) {
        throw new Error("Webpack isn't available to inject into!");
      }

      const chunkName = +new Date;
      const modName = chunkName * 2;

      const fakeModule = (mod, exp, require) => {
        // Delete ourselves from module cache
        delete require.m[modName];

        // Delete ourselves from chunk cache
        delete require.c[modName];
        delete require.c[chunkName];

        // Run injected module
        injectedModule(mod, exp, require);
      };

      // Corresponds to Webpack's `moreModules` object, parameter 2
      const fakeMoreModules = { [modName]: fakeModule };

      // Corresponds to Webpack's `executeModules` object, parameter 3
      const fakeExecuteModules = [modName];

      if (typeof webpackJsonp === 'function') {
        // Webpack 3
        webpackJsonp([], fakeMoreModules, fakeExecuteModules);
      } else if (Array.isArray(webpackJsonp)) {
        // Webpack 4

        // Detect the compile-time configuration of Webpack;
        // 1. Did it have deferred modules enabled?
        //    If not, fakeExecuteModules will fail
        const withDefer = webpackJsonp.push.toString().indexOf('[2]') !== -1;

        // 2. Did it have prefetching enabled?
        //    Not sure what this does for us but keep it in mind!
        // const withPrefetch = webpackJsonp.push.toString().indexOf('[3]') !== -1;

        if (withDefer) {
          webpackJsonp.push([[chunkName], fakeMoreModules, [fakeExecuteModules]]);
        } else {
          throw new Error("Webpack 4 isn't configured to load deferred modules. We can't inject!");
        }
      }
    };
  })(window.webpackJsonp);


  const renderListWithHeader = (header, list) => {
    list = list.length ? list : ['Unknown!'];
    list.unshift(`${header}:\n`);
    return list.join("\n• ");
  };

  new Promise((resolve) => {
    let async = false;

    const clientSideList = [];
    const clientSideListAdd = add.bind(clientSideList);

    // Plugins and frameworks
    if (isDeeplyDefined('WebForm_PostBackOptions')) {
      clientSideListAdd('ASP.Net Web Forms');
    }

    if (isDeeplyDefined('Backbone')) {
      declare var Backbone: { VERSION: string };
      clientSideListAdd('Backbone.js', Backbone.VERSION);
    }

    if (isDeeplyDefined('angular')) {
      declare var angular: { version: { full: string, codeName: string } };
      clientSideListAdd('Angular.js', `${angular.version.full} (${angular.version.codeName})`);
    }

    if (isDeeplyDefined('Cufon')) {
      clientSideListAdd('Cuf\u00f3n');
    }

    if (isDeeplyDefined('d3')) {
      declare var d3: { version: string };
      clientSideListAdd('D3.js', d3.version);
    }

    if (isDeeplyDefined("dojo")) {
      declare var dojo: { version: string };
      clientSideListAdd("Dojo", dojo.version.toString());
    }

    if (isDeeplyDefined("Foundation")) {
      declare var Foundation: { version: string };
      clientSideListAdd("Zurb Foundation Core", Foundation.version);
    }

    type JQueryStatic = {
      fn: {
        jquery: string
      },
      ui: {
        version: string
      }
    };
    declare var jQuery: JQueryStatic;
    declare var $: JQueryStatic;
    if (isDeeplyDefined("jQuery.fn.jquery") || isDeeplyDefined("$.fn.jquery")) {
      clientSideListAdd("jQuery", jQuery.fn.jquery || $.fn.jquery);
    }

    if (isDeeplyDefined("jQuery.ui") || isDeeplyDefined("$.ui")) {
      clientSideListAdd("jQuery UI", jQuery.ui.version || $.ui.version);
    }

    if (isDeeplyDefined("jQuery.fn.fancybox") || isDeeplyDefined("$.fn.fancybox")) {
      clientSideListAdd("jQuery Fancybox");
    }

    if (isDeeplyDefined("Modernizr")) {
      declare var Modernizr: { _version: string };
      clientSideListAdd("Modernizr", Modernizr._version);
    }

    if (isDeeplyDefined("MooTools")) {
      declare var MooTools: { version: string };
      clientSideListAdd("MooTools", MooTools.version);
    }

    if (isDeeplyDefined("MOVIDEO")) {
      declare var MOVIDEO: { version: string };
      clientSideListAdd("Movideo JavaScript SDK", MOVIDEO.version);
    }

    if (isDeeplyDefined("Prototype")) {
      declare var Prototype: { Version: string };
      clientSideListAdd("Prototype.js", Prototype.Version);
    }

    if (elementExists('[data-reactroot],[data-reactid]')) {
      clientSideListAdd("React (v15 or earlier)");
    }

    if (isDeeplyDefined("require")) {
      clientSideListAdd("require");
    }

    if (isDeeplyDefined("Scriptalicious")) {
      declare var Scriptalicious: { Version: string };
      clientSideListAdd("Scriptalicious", Scriptalicious.Version);
    }

    if (isDeeplyDefined("Ext")) {
      declare var Ext: { version: string };
      clientSideListAdd("Sencha (ExtJS)", Ext.version);
    }

    if (isDeeplyDefined("Sizzle")) {
      clientSideListAdd("Sizzle");
    }

    if (isDeeplyDefined("SC")) {
      declare var SC: { VERSION: string };
      clientSideListAdd("SproutCore", SC.VERSION);
    }

    if (isDeeplyDefined("Spry")) {
      clientSideListAdd("Spry");
    }

    if (isDeeplyDefined("swfobject")) {
      clientSideListAdd("SWFObject");
    }

    if (isDeeplyDefined("THREE")) {
      declare var THREE: { REVISION: string };
      clientSideListAdd("three.js", THREE.REVISION);
    }

    if (isDeeplyDefined("Typekit")) {
      clientSideListAdd("Typekit");
    }

    if (isDeeplyDefined("Uize")) {
      clientSideListAdd("Uize");
    }

    if (isDeeplyDefined("_.VERSION")) {
      declare var _: { VERSION: string };
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

    if (isDeeplyDefined("YUI")) {
      declare var YUI: { version: string };
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

    // Module & Bundle Systems
    if (isDeeplyDefined("parcelRequire")) {
      clientSideListAdd("Parcel");
    }

    if (isDeeplyDefined("requirejs")) {
      declare var requirejs: { version: string };
      clientSideListAdd("Require.js", requirejs.version);
    }

    if (isDeeplyDefined("webpackJsonp")) {
      clientSideListAdd(
        "Webpack",
        (
          typeof window.webpackJsonp === 'function'
            ? '(3 or earlier)'
            : 4
        )
      );

      // We're now going to attempt an async detection run!
      async = true;

      try {
        webpHack((module, exports, require) => {
          // Look at every module Webpack is presenting,
          // and see if it looks like something we recognise
          Object.keys(require.c).forEach((key) => {
            const module = require(key);

            if (module.Children && module.Component && module.createElement) {
              clientSideListAdd('React (in Webpack)', module.version);
            }

            if ((module.createFragmentContainer && module.QueryRenderer) || (module.QL && module.DefaultNetworkLayer && module.RootContainer)) {
              clientSideListAdd('Relay (in Webpack)');
            }

            if (module.keyframes && module.css && module.isStyledComponent) {
              clientSideListAdd('Styled Components (in Webpack)');
            }
          });

          resolve(clientSideList);
        });
      } catch (err) {
        resolve(clientSideList);
      }
    }

    // If we've gotten here, and we haven't marked this pass as async,
    // resolve the promise immediately
    if (!async) {
      resolve(clientSideList);
    }
  }).then((clientSideList) => {
    const serverSideList = [];
    const serverSideListAdd = add.bind(serverSideList);

    const clientSide = renderListWithHeader('Clientside Technology', clientSideList);

    if (confirm(`${clientSide}

Detect serverside technology?
(Downloads the page again)`)) {
      requestPage((headers) => {
        if (headers['X-Powered-By']) {
          serverSideListAdd("Powered By:", headers['X-Powered-By']);
        }

        if (headers.Server || headers.server) {
          serverSideListAdd("Server:", headers.Server || headers.server);
        }

        alert(`${clientSide}

${renderListWithHeader('Serverside Technology', serverSideList)}`);
      });
    }
  });
}
