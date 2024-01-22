import {StudentManager} from "./StudentManager";
import {Student} from "./student";

const studentManager: StudentManager = new StudentManager([],0,5);

const student1 = new Student("Men", "Men@gmail.com");
const student2 = new Student("Women", "Women@gmail.com");

studentManager.insert(student1);
studentManager.insert(student2);

studentManager.showList();