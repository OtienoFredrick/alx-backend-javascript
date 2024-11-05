export const cpp:Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.java = new Subjects.java();
export const react: Subjects.React = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName = "Fredy";
  lastName = "Otieno";
  experienceTeachingC = 10;
};

console.log('c++')
cpp.SetTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
