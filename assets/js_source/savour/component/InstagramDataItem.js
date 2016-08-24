goog.provide('savour.component.InstagramDataItem');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The InstagramDataItem constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The jQuery element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
savour.component.InstagramDataItem = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, savour.component.InstagramDataItem.DEFAULT, options);
  this.element = element;

  this.data_object = null;

  this.data_url = '';
  this.data_location = '';


  this.instagram_desktop_item_template = [
    '<a href="{link_url}" target="_blank" class="instagram-item {extra_class}" data-width="{thumbnail_width}" data-height="{thumbnail_height}">',
      '<div class="manic-image-container">',
        '<img src="" data-image-desktop="{thumbnail_url}">',
      '</div>',
      '<div class="instagram-item-hover-bg"></div>',
      '<div class="instagram-item-hover">',
        '<div class="instagram-item-hover-content">',
          '<p>{short_title}</p>',
        '</div>',
        '<div class="instagram-item-info">',
          '<h3>{location}</h3>',
          '<p>{author_name}<br> {time}</p>',
        '</div>',
      '</div>',
    '</a>'
  ].join('');




  this.instagram_desktop_item_str = '';







  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  if (goog.isDefAndNotNull(this.element.attr('data-url'))) {
    this.data_url = this.element.attr('data-url');
  } else {
    console.log(this.element);
    console.log('missing: data-url');
  }

  if (goog.isDefAndNotNull(this.element.attr('data-location'))) {
    this.data_location = this.element.attr('data-location');
  }

  


  if (this.data_url != '') {

    var target_url = 'https://api.instagram.com/oembed/?url=' + this.data_url;
    
    // start ajax load
    $.ajax({
      type: "GET",
      dataType: "jsonp",
      url: target_url,
      complete: this.on_instagram_ajax_complete.bind(this)
    });

  }




  


  console.log('savour.component.InstagramDataItem: init');
};
goog.inherits(savour.component.InstagramDataItem, goog.events.EventTarget);


/**
 * like jQuery options
 * @const {object}
 */
savour.component.InstagramDataItem.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * InstagramDataItem Event Constant
 * @const
 * @type {string}
 */
savour.component.InstagramDataItem.ON_AJAX_DATA_LOAD_COMPLETE = 'on_ajax_data_load_complete';

/**
 * InstagramDataItem Event Constant
 * @const
 * @type {string}
 */
savour.component.InstagramDataItem.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


savour.component.InstagramDataItem.prototype.private_method_01 = function() {};
savour.component.InstagramDataItem.prototype.private_method_02 = function() {};
savour.component.InstagramDataItem.prototype.private_method_03 = function() {};
savour.component.InstagramDataItem.prototype.private_method_04 = function() {};
savour.component.InstagramDataItem.prototype.private_method_05 = function() {};
savour.component.InstagramDataItem.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


savour.component.InstagramDataItem.prototype.public_method_01 = function() {};
savour.component.InstagramDataItem.prototype.public_method_02 = function() {};
savour.component.InstagramDataItem.prototype.public_method_03 = function() {};
savour.component.InstagramDataItem.prototype.public_method_04 = function() {};
savour.component.InstagramDataItem.prototype.public_method_05 = function() {};
savour.component.InstagramDataItem.prototype.public_method_06 = function() {};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param {object} event
 */
savour.component.InstagramDataItem.prototype.on_event_handler_01 = function(event) {
};

/**
 * @param {object} event
 */
savour.component.InstagramDataItem.prototype.on_event_handler_02 = function(event) {
};

/**
 * @param {object} event
 */
savour.component.InstagramDataItem.prototype.on_event_handler_03 = function(event) {
};

/**
 * @param {object} event
 */
savour.component.InstagramDataItem.prototype.on_instagram_ajax_complete = function(event) {

  this.data_object = event.responseJSON;
  this.data_object['link_url'] = this.data_url;

  var temp_html = $('' + this.data_object['html']);
  var datetime_str = temp_html.find('time').attr('datetime');
  
  // this.data_object['time'] = '11 Jul 2016';      // temporary

  this.data_object['time'] = this.get_time_from_str(datetime_str);

  this.data_object['location'] = this.data_location;
  this.data_object['extra_class'] = '';

  // console.log('this.data_object');
  // console.log(this.data_object);


  if (goog.isDefAndNotNull(this.data_object['title']) == false) {
    this.data_object['title'] = '';
  }

  var title_str = '' + this.data_object['title'];

  if (title_str.length > 100) {
    // this.data_object['short_title'] = title_str.match(/(.{1,99}\w)\s/)[1] + '…';
    
    // http://stackoverflow.com/questions/5454235/javascript-shorten-string-without-cutting-words
    var maxLength = 100;
    var trimmedString = title_str.substr(0, maxLength);
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))

    this.data_object['short_title'] = trimmedString + '…';


  } else {
    this.data_object['short_title'] = this.data_object['title'];
  }


  // console.log('short_title');
  // console.log(this.data_object['short_title'])
  

  


  if(this.data_location == '') {
    this.data_object['extra_class'] = 'no-location-version';
  }


  
  // create str
  this.instagram_desktop_item_str = nano(this.instagram_desktop_item_template, this.data_object);

  
  
    
  this.dispatchEvent(new goog.events.Event(savour.component.InstagramDataItem.ON_AJAX_DATA_LOAD_COMPLETE));



};








//    _   _ _____ ___ _
//   | | | |_   _|_ _| |
//   | | | | | |  | || |
//   | |_| | | |  | || |___
//    \___/  |_| |___|_____|
//


/**
 * [get_time_from_str description]
 * @param  {String} str_param
 * @return {String}
 */
savour.component.InstagramDataItem.prototype.get_time_from_str = function(str_param) {


  var month_name_array = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var date = new Date(str_param);
  var day = date.getDate();
  var month_index = date.getMonth();
  var month_name = month_name_array[month_index];
  var year = date.getFullYear();

  var return_str = '' + day + ' ' + month_name + ' ' + year;

  return return_str;
}

  




savour.component.InstagramDataItem.prototype.sample_method_calls = function() {

  // sample override
  savour.component.InstagramDataItem.superClass_.method_02.call(this);

  // sample event
  
};