interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

class Director implements DirectorInterface {
	workFromHome = (): string => "Working from home";
	getCofeeBreak = (): string => "Getting a coffee break";
	workDirectorTasks = ():string => "Getting to director tasks";
}

class Teacher implements TeacherInterface {
	workFromHome = (): string => "Cannot work from home";
	getCoffeeBreak = (): string => "cannot have a break";
	workTeacherTasks = (): string => "Getting to work";
}

export const createEmployee = (Salary: number | string): Teacher | Director => Number(Salary) < 500 ? new Teacher() : new Director();

export const isDirector = (employee: Teacher | Director): boolean => employee instanceof Director;

export const executeWork (employee: Teacher | Director): void => {
	const work = employee isinstanceof Teacher? employee.workTeacherTasks() : employee.workDirectorTasks();
	console.log(work)
}	

type subjects = 'Math' | 'History';

export const teachClass(todayClass: subjects) : sring => {
	return todayClass === 'Math' ? 'Teaching Math': 'Teaching History';
}
