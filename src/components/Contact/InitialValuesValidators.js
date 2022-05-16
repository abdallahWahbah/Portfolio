let initialValues = {};
let validators = {};

const InitialValuesValidators = (type, jsonObject) =>
{
    jsonObject.map(element =>
    {   
        if(type === "initialValues")
        {
            if(element.hasOwnProperty("initialValue")) 
            {
                initialValues[element.name] = element["initialValue"];
            }
        }
        if(type === "validators")
        {
            if(element.hasOwnProperty("validator")) 
            {
                validators[element.name] = element["validator"];
            }
        }
    });
    
    return {initialValues, validators};
}

export default InitialValuesValidators;