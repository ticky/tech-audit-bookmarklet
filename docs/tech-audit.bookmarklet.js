'use strict';{var a=function add(){this.push(Array.from(arguments).join(' '))},b=[],c=[],d=function renderListWithHeader(k,l){return l=l||['Unknown!'],l.unshift(k+':\n'),l.join('\n\u2022 ')},e=a.bind(b),f=a.bind(c),g=function isDefined(k){return'undefined'!=typeof k},h=function isDeeplyDefined(k){return g(k.split('.').reduce(function(l,m){return g(l)?l[m]:void 0},window))};h('WebForm_PostBackOptions')&&e('ASP.Net Web Forms'),h('Backbone')&&e('Backbone.js',Backbone.VERSION),h('angular')&&e('Angular.js',angular.version.full,'('+angular.version.codeName+')'),h('Cufon')&&e('Cuf\xF3n'),h('d3')&&e('D3.js',d3.version),h('dojo')&&e('Dojo',dojo.version.toString()),h('Foundation')&&e('Zurb Foundation Core',Foundation.version),(h('jQuery.fn.jquery')||h('$.fn.jquery'))&&e('jQuery',jQuery.fn.jquery||$.fn.jquery),(h('jQuery.ui')||h('$.ui'))&&e('jQuery UI',jQuery.ui.version||$.ui.version),(h('jQuery.fn.fancybox')||h('$.fn.fancybox'))&&e('jQuery Fancybox'),h('Modernizr')&&e('Modernizr',Modernizr._version),h('MooTools')&&e('MooTools',MooTools.version),h('MOVIDEO')&&e('Movideo JavaScript SDK',MOVIDEO.version),h('Prototype')&&e('Prototype.js',Prototype.Version),h('requirejs')&&e('Require.js',requirejs.version),h('require')&&e('require'),h('Scriptalicious')&&e('Scriptalicious',Scriptalicious.Version),h('Ext')&&e('Sencha (ExtJS)',Ext.version),h('Sizzle')&&e('Sizzle'),h('SC')&&e('SproutCore',SC.VERSION),h('Spry')&&e('Spry'),h('swfobject')&&e('SWFObject'),h('THREE')&&e('three.js',THREE.REVISION),h('Typekit')&&e('Typekit'),h('Uize')&&e('Uize'),h('_.VERSION')&&(h('_.support')?e('Lo-Dash',_.VERSION):e('Underscore.js',_.VERSION)),h('YT')&&e('YouTube iframe API'),h('YUI')&&e('YUI',YUI.version),h('$.zepto')&&e('Zepto'),h('udm_')&&e('ComScore'),h('CE2')&&e('CrazyEgg'),h('_gauges')&&e('Gauges'),h('_gaq')&&e('Google Analytics (Old Syntax)'),h('ga')&&e('Google Analytics'),h('Mint')&&e('Mint'),h('Mixpanel')&&e('Mixpanel'),h('NREUM')&&e('New Relic'),(h('NolTracker')||h('trac.pvar'))&&e('NetRatings Site Census 6.x'),h('rsCi')&&e('NetRatings Site Census 5.x'),h('opxLoad')&&e('Optimix'),h('Piwik')&&e('Piwik'),h('__qc')&&e('QuantCast'),h('ycsdone')&&e('Yahoo Analytics'),h('addthis')&&e('AddThis'),h('DISQUSWIDGETS')&&e('Disqus'),h('FB')&&e('Facebook Javascript SDK'),h('gapi')&&e('Google+ API'),(h('__twttrlr')||h('twttr'))&&e('Twitter Widgets');var j=d('Clientside Technology',b);confirm(j+'\n\nDetect serverside technology?\n(Downloads the page again)')&&function requestPage(k){var l=new XMLHttpRequest;l.open('GET',window.location.href,!0),l.onreadystatechange=function(){if(4===l.readyState&&200===l.status){var m={};l.getAllResponseHeaders().toString().split(/\r?\n/).forEach(function(n){var o=n.split(/\:\w*/);m[o[0]]=o[1]}),k(m)}},l.send(null)}(function(k){k['X-Powered-By']&&f('Powered By:',k['X-Powered-By']),k.Server&&f('Server:',k.Server),alert(j+'\n\n'+d('Serverside Technology',c))})}
