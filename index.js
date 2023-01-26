// Write your solution in this file!
const employee = {
    name: `Dory`,
    streetAddress: `42 Wallaby Way`,
};

function updateEmployeeWithKeyAndValue(){
    const updatedEmployee = {...employee};
    updatedEmployee.name = `Sam`;
    updatedEmployee.streetAddress = `11 Broadway`;
    return updatedEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.name = `Sam`;
    employee.streetAddress = `12 Broadway`;
    return employee;
};

function deleteFromEmployeeByKey(){
    const updatedEmployee = {...employee};
    delete updatedEmployee.name;
    return updatedEmployee;
};

function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name;
    delete employee.streetAddress;
    return employee;
};