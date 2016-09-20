goog.provide('savour.component.ClassName');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The jQuery element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
savour.component.ClassName = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, savour.component.ClassName.DEFAULT, options);
  this.element = element;

  // if class has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, savour.component.ClassName.DEFAULT, options);
  




  


  console.log('savour.component.ClassName: init');
};
goog.inherits(savour.component.ClassName, goog.events.EventTarget);


/**
 * like jQuery options
 * @const {object}
 */
savour.component.ClassName.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
savour.component.ClassName.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
savour.component.ClassName.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


savour.component.ClassName.prototype.private_method_01 = function() {};
savour.component.ClassName.prototype.private_method_02 = function() {};
savour.component.ClassName.prototype.private_method_03 = function() {};
savour.component.ClassName.prototype.private_method_04 = function() {};
savour.component.ClassName.prototype.private_method_05 = function() {};
savour.component.ClassName.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


savour.component.ClassName.prototype.public_method_01 = function() {};
savour.component.ClassName.prototype.public_method_02 = function() {};
savour.component.ClassName.prototype.public_method_03 = function() {};
savour.component.ClassName.prototype.public_method_04 = function() {};
savour.component.ClassName.prototype.public_method_05 = function() {};
savour.component.ClassName.prototype.public_method_06 = function() {};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param {object} event
 */
savour.component.ClassName.prototype.on_event_handler_01 = function(event) {
};

/**
 * @param {object} event
 */
savour.component.ClassName.prototype.on_event_handler_02 = function(event) {
};

/**
 * @param {object} event
 */
savour.component.ClassName.prototype.on_event_handler_03 = function(event) {
};

/**
 * @param {object} event
 */
savour.component.ClassName.prototype.on_event_handler_04 = function(event) {
};






savour.component.ClassName.prototype.sample_method_calls = function() {

  // sample override
  savour.component.ClassName.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(savour.component.ClassName.EVENT_01));
};