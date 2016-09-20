goog.provide('savour.component.InstagramDataContainer');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('savour.component.InstagramDataItem');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The jQuery element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
savour.component.InstagramDataContainer = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, savour.component.InstagramDataContainer.DEFAULT, options);
  this.element = element;

  this.data_array = [];
  this.data_array_load_counter = 0;
  this.data_array_length = 0;

  this.load_slowly = false;

  if (manic.IS_MOBILE == true) {
    this.load_slowly = true;
  }

  this.create_and_load_instagram_data();
  
  console.log('savour.component.InstagramDataContainer: init');
};
goog.inherits(savour.component.InstagramDataContainer, goog.events.EventTarget);


/**
 * like jQuery options
 * @const {object}
 */
savour.component.InstagramDataContainer.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
savour.component.InstagramDataContainer.ON_LOAD_COMPLETE = 'on_load_complete';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
savour.component.InstagramDataContainer.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


savour.component.InstagramDataContainer.prototype.create_and_load_instagram_data = function() {

  var arr = this.element.find('.instagram-data-item');
  var item = null;

  /**
   * @type {savour.component.InstagramDataItem}
   */
  var data_item = null;

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);

    
    data_item = new savour.component.InstagramDataItem({}, item);
    data_item.i = i;

    this.data_array[i] = data_item;

    if (this.load_slowly == false) {
      data_item.start_load();
    }

    goog.events.listen(data_item, savour.component.InstagramDataItem.ON_AJAX_DATA_LOAD_COMPLETE, this.on_data_item_load_complete.bind(this));
    

  }


  // load the first one
  if (this.load_slowly == true) {
    data_item = this.data_array[0];
    data_item.start_load();
  }


  this.data_array_length = this.data_array.length;

};
savour.component.InstagramDataContainer.prototype.private_method_02 = function() {};
savour.component.InstagramDataContainer.prototype.private_method_03 = function() {};
savour.component.InstagramDataContainer.prototype.private_method_04 = function() {};
savour.component.InstagramDataContainer.prototype.private_method_05 = function() {};
savour.component.InstagramDataContainer.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


savour.component.InstagramDataContainer.prototype.public_method_01 = function() {};
savour.component.InstagramDataContainer.prototype.public_method_02 = function() {};
savour.component.InstagramDataContainer.prototype.public_method_03 = function() {};
savour.component.InstagramDataContainer.prototype.public_method_04 = function() {};
savour.component.InstagramDataContainer.prototype.public_method_05 = function() {};
savour.component.InstagramDataContainer.prototype.public_method_06 = function() {};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param {goog.events.Event} event
 */
savour.component.InstagramDataContainer.prototype.on_data_item_load_complete = function(event) {
  this.data_array_load_counter++;

  if (this.data_array_load_counter >= (this.data_array_length)) {

    console.log('savour.component.InstagramDataContainer.ON_LOAD_COMPLETE !');

    //this.create_masonry();
    this.dispatchEvent(new goog.events.Event(savour.component.InstagramDataContainer.ON_LOAD_COMPLETE));

  } else {

    // load next
      
    if (this.load_slowly == true) {

      /**
       * @type {savour.component.InstagramDataItem}
       */
      var data_item = this.data_array[this.data_array_load_counter];
      data_item.start_load();

    }


    
    
  }

};
