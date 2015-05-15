/**
 * Created by Andrei on 5/11/2015.
 */
function showMenu() {
    document.getElementById("appmenu").style.display = 'block';
}
function hideMenu() {
    document.getElementById("appmenu").style.display = 'none';
}

var employeesList = [
    {
        firstName: 'Steven',
        lastName: 'King',
        phone: '0123496999',
        salary: 2000
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123888789',
        salary: 7000
    },
    {firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123477789',
        salary: 1000
    },
    {
        firstName: 'Diana',
        lastName: 'Bob',
        phone: '0186766799',
        salary: 4000
    },
    {
        firstName: 'Steven',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 1000
    }
];

var originalList = [];
originalList = employeesList;

function showList() {

    var myTable = '<div class="table-responsive"><table id="myTable" class="table" border="1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>Show</th><th>Delete</th></tr>';
    for (var i in employeesList) {
        myTable += '<tr><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName + '</td><td>' + employeesList[i].phone + '</td><td>' + employeesList[i].salary + '</td><td><button onclick=\'showEmployee(' + i + ')\'>Show</button></td><td><button onclick=\'deleteCurrentEmployee(' + i + ')\'>Delete</button></td></tr>';
    }
    myTable += '<tr><th>Most Often Name</th><th>Unique Names</th><th>Most Digits Appearences</th><th>Average Salary</th><th>Empty</th><th>Empty</th></tr>';
    myTable += '<tr><td>' + oftenName() + '</td><td>' + countUniqueNames() + '</td><td>' + firstDigits() + '</td><td>' + avgSalary() + '</td><td></td><td></td></tr>';
    myTable += '</table></div>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));
    showList();
    document.getElementById("salary").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phone").value = "";
}

function computeSalaries() {
    var sum = null;
    for (var i in employeesList) {
        sum += parseFloat(employeesList[i].salary);
    }
    alert(sum);
}

function deleteLastEmployee() {
    employeesList.pop();
    showList();
    originalList = employeesList;
}

function showEmployee(i) {
    alert('First Name: ' + employeesList[i].firstName + '\nLast Name: ' + employeesList[i].lastName + '\nPhone: ' + employeesList[i].phone + '\nSalary: ' + employeesList[i].salary);

}

function deleteCurrentEmployee(i) {
    employeesList.splice(i, 1);
    originalList = employeesList;
    showList();
}

function avgSalary() {
    var sum = null;
    for (var i in employeesList) {
        sum += parseFloat(employeesList[i].salary);
    }
    return sum / employeesList.length;
}

function oftenName() {
    var name = null;
    var max = 0;
    var count;
    for (var i in employeesList) {
        count = 0;
        for (var j in employeesList) {
            if (employeesList[i].firstName == employeesList[j].firstName)
                count += 1;
        }
        if (count > max) {
            max = count;
            name = employeesList[i].firstName;
        }
    }
    return name;
}

function equals(value) {
    return value === false;
}

function countUniqueNames() {
    var a = new Array();
    for (var i = 0; i < employeesList.length; i++) {
        var test = true;
        for (var j = 0; j < a.length; j++) {
            if (a[j] == employeesList[i].lastName) {
                test = false;
            }
        }
        if (test == true)
            a.push(employeesList[i].lastName)
    }
    return a.length;
}

function sortFunction(a, b) {
    return (a - b);
}

function sortByFirstName(a, b) {
    if (a.firstName < b.firstName) return -1;
    if (a.firstName > b.firstName) return 1;
    return 0;
}

function sortByLastName(a, b) {
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;
    return 0;
}

function sortByPhone(a, b) {
    if (a.phone < b.phone) return -1;
    if (a.phone > b.phone) return 1;
    return 0;
}

function sortBySalary(a, b) {
    return (a.salary - b.salary);
}

function firstDigits() {
    var numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < employeesList.length; i++) {
        var str = employeesList[i].phone;
        for (var j = 0; j < str.length; j++) {
            var digit = parseInt(str.charAt(j));
            numbers[digit]++;
        }
    }
    numbers = numbers.sort(sortFunction);
    return numbers[9] + ',' + numbers[8] + ',' + numbers[7] + ',' + numbers[6] + ',' + numbers[5];
}

function sort() {
    var number = document.getElementById("sortBy").value;
    if (number == 1) {
        employeesList = employeesList.sort(sortByFirstName);
        showList();
    } else if (number == 2) {
        employeesList = employeesList.sort(sortByLastName);
        showList();
    } else if (number == 3) {
        employeesList = employeesList.sort(sortByPhone);
        showList();
    } else {
        employeesList = employeesList.sort(sortBySalary);
        showList();
    }
}

function filterList() {
    var filterWord = document.getElementById("filterBy").value;
    if (filterWord!=="") {
        employeesList = employeesList.filter(function (el) {
            return el.phone.contains(filterWord) ||
                el.firstName.contains(filterWord) ||
                el.lastName.contains(filterWord);
        });
        showList();
    } else {
        employeesList = originalList;
        showList();
    }
}

function filterListCss() {
    var filterWord = document.getElementById("filterBy").value;
    var table = document.getElementById("myTable");
    if (filterWord!="") {
        for (var i = 0, row; row = table.rows[i]; i++) {
            var found = false;
            for (var j = 0, col; col = row.cells[j]; j++) {
                if (col.innerHTML == filterWord) {
                    found = true;
                }
            }
            if (found == false) {
                row.style.visibility="hidden";
            }
        }
    }else{
        for (var i = 0, row; row = table.rows[i]; i++) {
            row.style.visibility="visible";
        }
    }
}

