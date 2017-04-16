# Technology Audit Bookmarklet

Bookmarklet for quickly detecting technologies in use on the web. Really useful for mobile devices where an inspector or View Source option is hard to come by.

## Features

* Detects many popular JavaScript libraries and frameworks, including;
  * ASP .Net Web Forms
  * Angular.js
  * Backbone.js
  * Cufón
  * D3
  * Dojo
  * Zurb Foundation (JavaScript library only)
  * jQuery
  * jQuery UI
  * jQuery Fancybox
  * Lo-Dash
  * Modernizr
  * MooTools
  * Movideo JavaScript SDK
  * Prototype.js
  * Require.js
  * Scriptalicious
  * Sencha / ExtJS
  * Sizzle
  * SproutCore
  * Spry
  * SWFObject
  * Three.js
  * Typekit
  * Uize
  * Underscore.js
  * YouTube iframe API
  * YUI
  * Zepto
* Detects popular analytics and other feedback scripts;
  * ComScore
  * CrazyEgg
  * Gauges
  * Google Analytics
  * Mint
  * Mixpanel
  * New Relic
  * Neilsen/NetRatings Site Census (5.x and 6.x)
  * Optimix
  * Piwik
  * QuantCast
  * Yahoo Small Business Hosting Analytics
* Detects social plug-ins
  * AddThis
  * Disqus
  * Facebook JS API
  * Google+ API
  * Facebook Widgets (Old-style and new-style)

## Get it

Get it from the [GitHub Page](http://ticky.github.io/tech-audit-bookmarklet).

## Developing

Fork and clone the repo, make changes to `tech-audit.js`.

#### Useful commands

* Run `yarn lint` to check for linter errors.
* Run `yarn build` to build the bookmarklet file in `docs/`.
* Run `yarn serve` to test the bookmarklet page and new bookmarklet.

#### Adding new technologies

_Copying an existing test is advisable._

* Add a detection for the framework
  - Client side frameworks are detected by looking at
    variable definitions with `isDeeplyDefined()` or DOM elements with `elementExists()`
  - Server side frameworks are detected by inspecting request headers
* Report the detected framework
  - Client side frameworks are reported by calling `clientSideListAdd()`
  - Server side frameworks are reported by calling `serverSideListAdd()`
  - Provide the official name of the framework as the first parameter. If available, provide the version as a second parameter.
