const { Service, computed } = require ('@onehilltech/blueprint');

var AWS = require("aws-sdk");
var uuid = require('uuid');

// configure AWS SDK
var credentials = new AWS.SharedIniFileCredentials({ profile: "default" });
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
        console.log(AWS.config.credentials);
        this._initCerts();

    },

    _initCerts (token = null) {
        var params = {};
        if(token){
            params.NextToken = token;
        }

        var request = new AWS.ACM().listCertificates(params);//request certificates

        // register a callback event handler
        request.on('success', function(response) {
            console.log("Processing ", response.data.CertificateSummaryList.length, " records")
            // log the successful data response
            for (cert in response.data.CertificateSummaryList){

                var tCert = {
                    type: 'certificates',
                    id: response.data.CertificateSummaryList[cert].CertificateArn.split("/")[1],//get just the last GUID part of the ARN to use as the internal ID
                    attributes: response.data.CertificateSummaryList[cert],
                    status: 'syncing'
                }
                
                this._certificates.push(tCert);
                
            }
            
            /*if (response.data.NextToken) {
                this._initCerts(response.data.NextToken) 
            } else {
                this._certFullLoad()
            }*/
            this._certFullLoad()
        }.bind(this)).on('error', function(response){
            console.log(response);
        });

        // send the request
        request.send();

    },

    _certFullLoad() {
        for(var certificate in this._certificates){

            var params = {
                CertificateArn: this._certificates[certificate].attributes.CertificateArn
            };

            var request = new AWS.ACM().describeCertificate(params);//request certificates

            let thisCertificate = this._certificates[certificate];

            request.on('success', function(response) {
                console.log('Syncing Certificate: ', thisCertificate.id)
                thisCertificate.attributes = response.data.Certificate
                thisCertificate.status = 'synced'
            }.bind(thisCertificate));
    
            // send the request
            request.send();
        }
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