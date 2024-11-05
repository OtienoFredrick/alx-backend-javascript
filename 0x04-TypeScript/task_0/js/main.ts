// write an interface named student  that accepts the firstName(string), lastName(string), age(number), and location(string)
// create two students, and create an array named studentList containing two variables
// Using vanilla Javacsript, render a table for each elements in the array, append a new row to the table
// Each row should contain first name of the student and the location

interface student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: student = {
	firstName: "Fredrick",
	lastName: "Otieno",
	age: 24,
	location: "Nairobi Kenya"
};
const student2: student = {
	firstName: "Reagan",
	lastName: "Onyonka",
	age: 27,
	location: "Nairobi Kenya"
};

//create an array of students
const studentsList: student[] = [student1, student2];

const table = document.getElementById('studentTable') as HTMLTableElement;

//create a new row for each student and append it to the table
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
)}
