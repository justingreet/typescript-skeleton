# Typescript Skeleton

This is a skeleton project that uses Typescript. It utilizes Karma for a unit
 test runner (with Jasmine tests), and AMD and requirejs for loading modules.
 
To get Karma to work:
1) npm install -g karma
2) karma init
3) Make sure you include RequireJs, and exclude main.js

This spits out test-main.js, and creates karma.conf.js.

I tried to run it at this point, but got an error because the framework 
dependency on requirejs in karma.conf.js didn't exist. So do the following:

1) npm install requirejs --save-dev
2) npm install karma-requirejs --save-dev