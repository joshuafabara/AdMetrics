/**
 * AdlogController
 *
 * @description :: Server-side logic for managing adlogs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {	

  /**
   * `AdlogController.create()`
   */
  create: function (req, res) {
  	if(req.method=="GET"&&req.query!=null) {
      Adlog.create(req.query).exec(function createCB(err, created){
        if (err) {
          console.log(err);
        }
        else {
          var adlogs = Adlog.find({ adPosition: 'Bottom' });
          console.log(_.size(adlogs) + ' -- Numero de objetos');
          console.log('Adlog stored for ad position ' + created.adPosition);
          return res.json({
            message: 'Adlog stored for ad position ' + created.adPosition,
            query: req.query
          });
        }
      });
  	}
  },  

  /**
   * `AdlogController.rindex()`
   */
  rindex: function (req, res) {
    // var adlogs = Adlog.find({});
    // console.log(adlogs);
    // adlogs = _.size(adlogs);
    // // adlogs = adlogs[0].adPosition + ' - ' + adlogs[0].adLoadTime;
    // res.view('adlog/index',{
    //   adlogs: adlogs
    // });

    Adlog.find({ where: { adPosition: 'Top' }, skip: 0, limit: 5, sort: 'createdAt DESC' }, function foundAdlogs (err, adlogs) {
      if (err) {
        console.log(err);
      }
      console.log(adlogs);
      res.view('adlog/index',{
        adlogs: adlogs
      });
    });

    // Adlog.native(function(err, collection) {
    //   if (err) return res.serverError(err);

    //   collection.find({}, {
    //     name: true
    //   }).toArray(function (err, results) {
    //     if (err) console.log (res.serverError(err));
    //     else {
    //       var adlogs = res.ok(results);
    //         res.view('adlog/index',{
    //           adlogs: adlogs
    //         });
    //     }
    //   });
    // });
  },
};

