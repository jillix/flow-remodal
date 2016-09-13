// Dependencies
var remodal = require('./lib/remodal');
var $ = require('./lib/jquery.min');

/* public function */

/*
 *
 * initilizes the remodal module
 * @name init
 *
 */
exports.init = function (config, ready) {
    this._config = config;

    if (!this._config.modal) {
        return ready(new Error('Flow-remodal.init: Missing modal container selector.'));
    }

    var selector = this._config.modal;
    this.modal = $(selector).remodal({
        hashTracking: false
    });

    $(document).on('closed', selector, function (e) {
        //console.log(e);
    });
    ready();
};

/*
 *
 * initilizes the remodal module
 * @name render
 *
 */
exports.addContent = function (options, data, next) {

    if (!this._config.modalContent) {
        return next(new Error('Flow-remodal.addContent: Modal content selector not configured'));
    }
    var selector = this._config.modalContent;
    var content = $(selector);

    // clear the content
    content.html(JSON.stringify(data, null, 2));

    next(null, data);
};

/*
 *
 * initilizes the remodal module
 * @name open
 *
 */
exports.open = function (options, data, next) {
    this.modal.open();
    next(null, data);
};

/*
 *
 * initilizes the remodal module
 * @name close
 *
 */
exports.close = function (options, data, next) {
    this.modal.close();
    next(null, data);
};