// patching the touch and click event.
if (window.Touch) {
  $('a').bind('touchstart', function(e) {
    e.preventDefault();
  });
  $('a').bind('touchend', function(e) {
    e.preventDefault();
    return $(this).trigger('click');
  });
}

// Model
// Anything related to data querying and manipulation
;(function($){
  var app = this.app || (this.app={});

  var Tag = (function(){
    function Tag(value, color){
      this.value = value;
      this.color = color;
    }

    return Tag;
  })();

  var WbDataModel = function(xml){
    this.avali_agents=new Tag($(xml).find('Value1'),$(xml).find('Value1Color'));
  }

  app.model={
    WbData: function(callback){
      alert('start');
      $.ajax({
        type: "GET",
        url: "xml/data.xml",
        dataType: "xml",
        success: function(xml){
          alert('success');
          parseXml(xml,callback);
        },
        error: function(data)
        {
          alert('error');
          alert(data);
          console.log(data);
        }
      });
    }
  }

  function parseXml(xml,callback)
  {
    alert('test');
    callback('test');
  }

}).call(this, jQuery);

// View
// Anything that belongs to interface.
;(function($){
  var app = this.app || (this.app={});

  app.view = {}

}).call(this, jQuery);

// Controller Logic
// Glue the model and view together
;(function($){
  var app = this.app = this.app || {};
  // Entry point
  $(function(){
    console.log("Hello New jQuery Mobile App.");
  });
  alert('tlsafj');
  app.model.WbData(function(data){

    alert(data);
  })

}).call(this, jQuery);

