# A hosted Cordova Mobile Application 
This application wraps an Angular 2 application that can be hosted in the Cloud. 
The Angular 2 application is here: https://github.com/KenWilliamson/CloudMobileCordova.git

# The Concept
This is nothing more that a Cordova wrapper that wraps a Cloud hosted Angular 2 application.
The Angular 2 application needs only to test that a plugin in available before trying to use it.
This wrapper application gives a Cloud hosted application access to the device hardware through the Cordova Plugins.

# How it Works
This application uses the ManifoldCordova plugin to load all the needed Cordova JavaScript files from the device.
No Cordova files are needed on the Cloud server where the Angular 2 application is hosted.

## ManifoldCordova Modes
There are two modes of operation for ManifoldCordova:
 
- Server Mode

In Server Mode, all the Cordova JS files must be deployed to the Cloud server; they are then downloaded by the 
mobile application.

- Client Mode (What this application uses)

In Client mode, the Cordova JS files are loaded from the device and injected into the web application pages based on
the settings in the manifest.json file in the root of the project.
Client Mode is what we use in this application.
    

## The ManifoldCordova plugin 
Here (https://github.com/KenWilliamson/ManifoldCordova.git) is the ManifoldCordova plugin that I modified to 
work in client mode on the Android platform. (The original plugin had several bugs that prevented it from working 
correctly on the Android platform.) 


## Important Note
This mobile application wrapper works completely in the client mode and requires no Cordova files to be deployed 
to the Cloud server and requires no changes to the server-side application.

This is currently only configured for Android, but should work on any platform on which ManifoldCordova works.

**Just modify the manifest.json file in the root of the project and you're off and running** 
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
