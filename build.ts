/// <reference path="typings/index.d.ts" />
/*tslint: enabled*/

const shell = require("shelljs");

shell.exec("node_modules/.bin/tsc src/x-tag-autoscroll.ts")
shell.exec("node_modules/.bin/uglifyjs -b -o dist/x-tag-autoscroll.js src/x-tag-autoscroll.js")
shell.exec("node_modules/.bin/uglifyjs -o dist/x-tag-autoscroll.min.js src/x-tag-autoscroll.js")
shell.rm("src/x-tag-autoscroll.js")
shell.exec("node_modules/.bin/browserify -b -o dist/x-tag-autoscroll.bundle.js dist/x-tag-autoscroll.js")
shell.exec("node_modules/.bin/uglifyjs -o dist/x-tag-autoscroll.bundle.min.js dist/x-tag-autoscroll.bundle.js")

