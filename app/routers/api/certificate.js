const { Router } = require ('@onehilltech/blueprint');

module.exports = Router.extend ({
    specification: {
      '/certificates': {
        resource: { controller: 'certificate' }
      }
    }
});