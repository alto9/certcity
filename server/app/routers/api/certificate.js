const { Router } = require ('@onehilltech/blueprint');
const cors = require ('cors');

module.exports = Router.extend ({
    specification: {
      '/': {
        use: cors ()
      },
      '/certificates': {
        resource: { controller: 'certificate' }
      }
    }
});