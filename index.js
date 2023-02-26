
const employee = {
    name: 'Kevin',
    streetAddress: 'Prairie Ave',
};

function updateEmployeeWithKeyAndValue(employee, parameterKey, parameterValue){
    const updatedEmployee = {...employee};
    updatedEmployee[parameterKey.toString()] = parameterValue 
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, parameterKey, parameterValue){
    employee[parameterKey.toString()] = parameterValue 
    return employee;
}

function deleteFromEmployeeByKey(employee, parameterKey){
    const newEmployee = {...employee};
    const keyAsString = parameterKey.toString();
    delete newEmployee [keyAsString];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, parameterKey){
    const keyAsString = parameterKey.toString();
    delete employee [keyAsString];
    return employee;
}