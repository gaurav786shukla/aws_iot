

var awsIot = require('aws-iot-device-sdk');

//
// Replace the values of '<YourUniqueClientIdentifier>' and '<YourCustomEndpoint>'
// with a unique client identifier and custom host endpoint provided in AWS IoT cloud
// NOTE: client identifiers must be unique within your AWS account; if a client attempts 
// to connect with a client identifier which is already in use, the existing 
// connection will be terminated.
//
var device = awsIot.device({
      keyPath: './certs/9fe6f6c930-private.pem.key',
      certPath: './certs/9fe6f6c930-certificate.pem.crt',
      caPath: './certs/root-CA.crt',
      clientId: 'nodejs_iot_simulator',
      region: 'us-east-1',
      host: 'ac0zk1kautnrw.iot.us-east-1.amazonaws.com'
});

//
// Device is an instance returned by mqtt.Client(), see mqtt.js for full
// documentation.
//
var counter = 1;
device
      .on('connect', function () {
            counter = counter + 1;
            console.log('connection successful');
            device.subscribe('topic_1');
            device.publish('topic_2', JSON.stringify({ test_data: 'data from Gaurav machine' + counter }));
      });

device
      .on('message', function (topic, payload) {
            console.log('message', topic, payload.toString());
      });