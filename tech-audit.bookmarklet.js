javascript:(function(w,u,b,n){

	var l = [],
		s = [],
		p = function(t){ l.push(t); },
		q = function(v){ s.push(v); },
		r = function(c){
			var x = new XMLHttpRequest();
				x.open('GET', w.location.toString(), true);
				x.onreadystatechange = function(e) {
					if (x.readyState == 4 && x.status == 200)
					{
						var h = x.getAllResponseHeaders().toString();
						var i = h.split(/\r?\n/);
						var k = {};
						for (var j = 0; j < i.length; j++) {
							var m = i[j].split(': ');
							k[m[0]] = m[1];
						};
						c(k);
					}
				};
				x.send(null);
		};

	if (typeof jQuery != u || (typeof $ != u && typeof $.jquery != u)) {
		p("jQuery " + jQuery.fn.jquery || $.jquery);
		if (typeof jQuery.ui != u || (typeof $ != u && typeof $.fn != u && typeof $.fn.ui != u)) { p("jQuery UI " + jQuery.ui.version || $.ui.version); }
		if (typeof jQuery.fancybox != u || (typeof $ != u && typeof $.fn != u && typeof $.fn.fancybox != u)) { p("jQuery Fancybox"); }
	}

	if (typeof $ != u && typeof $.zepto != u) { p("Zepto"); }
	if (typeof dojo != u) { p("Dojo " + dojo.version.toString()); }
	if (typeof MooTools != u) { p("MooTools " + MooTools.version); }
	if (typeof Ext != u) { p("Sencha (ExtJS) " + Ext.version); }
	if (typeof YUI != u) { p("YUI " + YUI.version); }
	if (typeof SC != u) { p("SproutCore " + SC.VERSION); }
	if (typeof Uize != u) { p("Uize"); }
	if (typeof Spry != u) { p("Spry"); }
	if (typeof Sizzle != u) { p("Sizzle"); }
	if (typeof Backbone != u) { p("Backbone.js " + Backbone.VERSION); }
	if (typeof _ != u && typeof _.VERSION != u) { p("Underscore.js " + _.VERSION); }
	if (typeof Prototype != u) { p("Prototype.js " + Prototype.Version); }
	if (typeof WebForm_PostBackOptions != u) { p("ASP.Net Web Forms"); }
	if (typeof requirejs != u || typeof require != u) { p("Require.js " + requirejs.version || require.version); }
	if (typeof Scriptalicious != u) { p("Scriptalicious " + Scriptalicious.Version); }
	if (typeof Modernizr != u) { p("Modernizr " + Modernizr._version); }
	if (typeof Cufon != u) { p("Cufon"); }
	if (typeof swfobject != u) { p("SWFObject"); }
	if (typeof NREUM != u) { p("New Relic"); }
	if (typeof _gaq != u) { p("Google Analytics"); }
	if (typeof _gauges != u) { p("Gauges"); }
	if (typeof udm_ != u) { p("ComScore"); }
	if (typeof __qc != u) { p("QuantCast"); }
	if (typeof Mint != u) { p("Mint"); }
	if (typeof addthis != u) { p("AddThis"); }

	if(confirm("Clientside Technology:\n" + b + (l.join(b) || n) + "\n\nDetect serverside technology?\n(Downloads the page again)"))
	{
		r(function (o) {
			if(typeof o['X-Powered-By'] != u) { q("Powered By: " + o['X-Powered-By']); }
			if(typeof o.Server != u) { q("Server: " + o.Server); }

			alert("Serverside Technology:\n" + b + (s.join(b) || n));
		});
	}

}(window,"undefined","\n• ","Unknown!"));