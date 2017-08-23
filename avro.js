/**
 * this file will contain all the important methods related to avro data.  
 */


avro = require('avsc');

//1-  given a decoded value, we will infer a matching type
inferredType = avro.Type.forValue(pet); // Infer the type of a `pet`.
inferredType.schema();
/* the output is something similar to below */
/**
 * {
    type: 'record', // "Record" is Avro parlance for "structured object".
        fields:
    [{ name: 'kind', type: 'string' }, // Each field corresponds to a property.
    { name: 'name', type: 'string' },
    { name: 'age', type: 'int' }]
}
 */


 