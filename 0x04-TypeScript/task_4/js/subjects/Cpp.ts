/// <reference path='Teacher.ts' />
/// <reference path='subjects.ts' />


namespace subjects {
  export interface Teacher {
    experienceTeachingC?: number
  }

export class Cpp extends Subject {
  getRequirements = () => "Here is the list of requirements for Cpp";
  getAvailableTeacher = () => {
   if (!this.teacher?.experienceTeachingC) return "No available teacher";

   return `Available teacher: ${this.teacher}`;
  }
}
}
