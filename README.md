## A hosted Cordova App that runs in client mode to wrap an Angular 2 application. 
Angular 2 app is here: https://github.com/KenWilliamson/CloudMobileCordova.git

#### This is a proof of concept project that uses a version of the ManifoldCordova plugin (https://github.com/KenWilliamson/ManifoldCordova.git) that I modified to work in client mode on the Android platform.


#### This mobile application works completely in the client mode and requires not Cordova files to be deployed to the server and requires no changes to the server.

This is currently only configured for Android, but should work with any platform with which ManifoldCordova works.

**Just modify the manifest and you're off and running** 
<pre>
{
    "lang": "en",
    "name": "YourHostedCordovaApp",
    "short_name": "YourHostedCordovaApp",
    "scope":"http://*.www.yourAngularApp",
    "start_url": "http://www.yourAngularApp/",
    "display": "fullscreen",
    "orientation": "portrait",
    "theme_color": "aliceblue",
    "mjs_cordova": {
        "plugin_mode": "client"
    },
    "mjs_import_scripts": [
        {
            "src": "js/alerts.js"
        }
    ],
    "mjs_api_access": [
        {
            "match": "*"
        }
    ]
}
</pre>
