const employee = {
    name: "Tina Snow",
    streetAddress: "1612 Nowhere Place",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee };
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
   return {employee, ...key};
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}



