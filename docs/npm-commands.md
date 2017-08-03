NPM Commands
============

This file explains the custom npm commands as they appear in the
scripts section of `package.json`. 
The commands appear in alphabetical order.

clean:dev
---------

prep:dev
--------

start
-----
1. Runs [clean:dev](#clean:dev)
1. Runs [prep:dev](#prep:dev)
1. Commands Node to execute `config/electron-dev.js`
    1. Starts a web server, running `webpack-hot-middleware` which
       watches the sources, recompiles them and hot-loads them into
       the web server.
    1. Runs [start:main:dev](#start:main:dev)
    1. Waits for SIGTERM to close the web server

start:main:dev
--------------

