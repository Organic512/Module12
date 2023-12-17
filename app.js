const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Organic512',
  password: 'Fatboy11!',
  database: 'employee_db',
  port: 3306,
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
  startApp();
});

function startApp() {
  inquirer
    .prompt({
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'View all departments':
          viewDepartments();
          break;

        case 'View all roles':
          viewRoles();
          break;

        case 'View all employees':
          viewEmployees();
          break;

        case 'Add a department':
          addDepartment();
          break;

        case 'Add a role':
          addRole();
          break;

        case 'Add an employee':
          addEmployee();
          break;

        case 'Update an employee role':
          updateEmployeeRole();
          break;

        case 'Exit':
          connection.end();
          break;
      }
    });
}

// Implement functions for each action (viewDepartments, viewRoles, etc.)

function viewDepartments() {
  const query = 'SELECT * FROM department';
  connection.query(query, (err, res) => {
    if (err) throw err;

function viewRoles() {
  const query = 'SELECT * FROM Roles';
  connection.query(query, (err, res) => {
    if (err) throw err;

function viewEmployees() {
  const query = 'SELECT * FROM Employees';
  connection.query(query, (err, res) => {
    if (err) throw err;

    console.table(res);

    startApp();
  });
}

// Implement the other functions similarly

// Example:
function addDepartment() {
  inquirer
    .prompt({
      type: 'input',
      name: 'departmentName',
      message: 'Enter the name of the department:',
    })
    .then((answer) => {
      const query = 'INSERT INTO department (name) VALUES (?)';
      connection.query(query, [answer.departmentName], (err, res) => {
        if (err) throw err;

        console.log(`Department ${answer.departmentName} added successfully!\n`);

function addRoles() {
  inquirer
    .prompt({
      type: 'input',
      name: 'rolesName',
      message: 'Enter the name of the role:',
    })
    .then((answer) => {
      const query = 'INSERT INTO roles (name) VALUES (?)';
      connection.query(query, [answer.rolesName], (err, res) => {
        if (err) throw err;

        console.log(`Roles ${answer.rolesName} added successfully!\n`);

function addEmployees() {
  inquirer
    .prompt({
      type: 'input',
      name: 'employeeName',
      message: 'Enter the name of the employee:',
    })
    .then((answer) => {
      const query = 'INSERT INTO employee (name) VALUES (?)';
      connection.query(query, [answer.employeeName], (err, res) => {
        if (err) throw err;

        console.log(`Employee ${answer.employeeName} added successfully!\n`);

        startApp();
      });
    });
}

function updateEmployeeRole() {

  startApp();
}
