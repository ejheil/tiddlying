

var commandsets = [
    [ '--load', 'tw.html', '--savewikifolder', 'tw' ],
    [
	'tw',
	'--rendertiddlers',
	'[!is[system]]',
	'$:/core/templates/static.tiddler.html',
	'static',
	'text/plain'
    ],
    [
	'tw',
	'--rendertiddler',
	'$:/core/templates/static.template.html',
	'static.html',
	'text/plain'
    ],
    [
	'tw',
	'--rendertiddler',
	'$:/core/templates/static.template.css',
	'static/static.css',
	'text/plain'
    ]
];


commandsets.forEach(commandset => {
    var $tw = require("tiddlywiki/boot/boot.js").TiddlyWiki();
    $tw.boot.argv = commandset;
    $tw.boot.boot();
});
