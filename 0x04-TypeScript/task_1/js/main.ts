interface Teacher {
	readonly firstName: string,
	readonly lastName: string,
	fullTimeEmployee: boolen,
	yearsofExperience: number,
	location: string,
	[propName: string] any,
}

interface Directors extends Teacher {
	numberOfReporst = number
}

const printTeacher(firstName: string, lastName: string) : string => `${firstName.charAt(0)}. ${lastName}`;

class StudentClass {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework = (): string => 'Currently working';

	displayName = (): string => this.firstName;
}

interface studentConstructor {
  (firstName: string, lastName: string): classInterface;
}

const student = new studentClass("Fredrick", "Otieno");
console.log(student.displayName())
console.log(student.workOnHomework())
