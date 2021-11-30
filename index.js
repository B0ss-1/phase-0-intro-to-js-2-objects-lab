const employee = {
    name: "Gus",  
    address: "900 Mace ave",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...employee,
        [key]: value, 
}; 
} 

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
    return employee;
}

function deleteFromEmployeeByKey (employee, key, value) {
    return {
        ...employee, 
        [key]: value, 
    };
}

function destructivelyDeleteFromEmployeeByKey (employee, key, value) {
    employee[key] = value;
    
    return employee; 
}