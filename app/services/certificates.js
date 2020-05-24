const { Service, computed } = require ('@onehilltech/blueprint');

var AWS = require("aws-sdk");
var uuid = require('uuid');

// configure AWS SDK
var credentials = new AWS.SharedIniFileCredentials({profile: 'bigteams'});
AWS.config.credentials = credentials;
// create the service object
var acm = new AWS.ACM();

/**
 * @class certificates
 */
module.exports = Service.extend ({
    _certificates: [],

    certificates: computed ({
        get () { return this._certificates; }
    }),

    init () {
        console.log("Initializing Certificate Service")
        this._super.call (this, ...arguments);

        var request = new AWS.ACM().listCertificates();//request certificates

        // register a callback event handler
        request.on('success', function(response) {
            data = response.data;
            // log the successful data response
            for (cert in data.CertificateSummaryList){

                var tCert = {
                    type: 'certificates',
                    id: data.CertificateSummaryList[cert].CertificateArn.split("/")[1],//get just the last GUID part of the ARN to use as the internal ID
                    attributes: data.CertificateSummaryList[cert]
                }
                
                this._certificates.push(tCert);
                
            }
        }.bind(this));

        // send the request
        request.send();
    
    },

    // get a single certificate
    get (id) {
        return this._certificates.find (certificate => certificate.id === id);
    },

    // add a certificate to the list.
    add (certificate) {
        return this._certificates.push (certificate);
    },

    // remove the certificate from the list.
    remove (id) {
        let index = this._certificates.findIndex (certificate => certificate.id === id);

        if (index === -1)
            return false;

        this._certificates.splice (index, 1);
        return true;
    }
});