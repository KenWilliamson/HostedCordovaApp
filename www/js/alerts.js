(function () {
  var app = {
      initialize: function () {
          this.bindEvents();
      },
      bindEvents: function () {
          document.addEventListener('deviceready', this.onDeviceReady, false);
      },
      onDeviceReady: function () {
          navigator.notification.alert(
              "You are on page '" + document.title + "'",                 // message
              function () { console.log('Alert callback called!'); }, // callback
              'Message',         // title
              'Done'             // buttonName
          );
      },
  };

  app.initialize();
})();
