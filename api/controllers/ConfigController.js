/**
 * ConfigController
 *
 * @description :: Server-side logic for managing configs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
   * `ConfigController.edit()`
   */
  edit: function (req, res) {
    res.view('config');
  },

  /**
   * `ConfigController.view()`
   */
  view: function (req, res) {
    res.view('config');
  },

  /**
   * `ConfigController.change()`
   */
  change: function (req, res) {
  	if(req.method=="POST"&&req.param("Config",null)!=null) {
      var new_val = req.param("Config");
      sails.config.myconf.timeoutToStoreCalls.oas = new_val.oas;
      var success = 'Value changed successfully!. New Value: ' + new_val.oas;
    	res.view('config',{
        success: success
      });
    }
  },
};

