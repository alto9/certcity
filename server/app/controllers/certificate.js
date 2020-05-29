const {
  ResourceController,
  Action,
  service
} = require ('@onehilltech/blueprint');

/**
 * @class certificate
 */
module.exports = ResourceController.extend ({
  name: 'certificate',

  certificates: service (),

  // query all the resources
  getAll () {
    return Action.extend ({
      // express-validator schema
      schema: {
        [this.page]: {
          in: ['query'],
          optional: true,
        },
        [this.page_size]: {
          in: ['query'],
          optional: true,
        },
      },
      execute (req, res) {
        const data = this.controller.certificates.certificates;
        var page = data.slice((req.query.page - 1) * req.query.page_size, req.query.page * req.query.page_size);

        res.status (200).json ({ page });
      }
    })
  },

  // get a single resources, or return 404 Not Found.
  getOne () {
    return Action.extend ({
      // express-validator schema
      schema: {
        [this.id]: {
          in: 'params',
          optional: false,
        }
      },
  
      execute (req, res) {
        const { certificateId } = req.params;
        const certificate = this.controller.certificates.get (certificateId);
  
        if (certificate) {
          res.status (200).json ({ data: [certificate] });
        }
        else {
          res.sendStatus (404);
        }
      }
    })
  },

  delete () {
    return Action.extend ({
      schema: {
        [this.id]: {
          in: 'params',
          optional: false,
        }
      },
      execute (req, res) {
        const { certificateId } = req.params;
        const result = this.controller.certificates.remove (certificateId);

        res.status (200).json (result);
      }
    });
  }, 

  create () {
    return Action.extend ({
      execute (req, res) {
        const { certificate } = req.body;
        this.controller.certificates.add (certificate);
  
        res.status (200).json ({data: [certificate]});
      }
    })
  }
});