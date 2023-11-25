function Student(name1, roll_no, class1, section, marks_of_5_subjects) {
  this.name1 = name1;
  this.roll_no = roll_no;
  this.class1 = class1;
  this.section = section;
  this.marks_of_5_subjects = marks_of_5_subjects;
}

const printTop3Subjects = (marks) => {
  const required_obj = {};
  Object.keys(marks)
    .sort((a, b) => marks[b] - marks[a])
    .forEach((key, ind) => {
      if (ind < 3) {
        required_obj[key] = marks[key];
      }
    });
  return required_obj;
};

const printReportCard = (student) => {
    let percentage = 0;
    const marks = student.marks_of_5_subjects;
    Object.keys(marks).forEach((key)=>{
        percentage += marks[key];
    })
    percentage /= 5;
    console.log("+-----------------------+");
    console.log();
    console.log("|\tREPORT CARD\t|");
    console.log();
    console.log("+-----------------------+");
    console.log();
    console.log(`| Name       - ${student.name1}     |`);
    console.log();
    console.log(`| Roll no.   - ${student.roll_no}       |`);
    console.log();
    console.log(`| Class      - ${student.class1}     |`);
    console.log();
    console.log(`| Section    - ${student.section}        |`);
    console.log();
    console.log(`| Science    - ${student.marks_of_5_subjects["science"]}       |`);
    console.log();
    console.log(`| S.Sc       - ${student.marks_of_5_subjects["social_science"]}       |`);
    console.log();
    console.log(`| Maths      - ${student.marks_of_5_subjects["maths"]}       |`);
    console.log();
    console.log(`| English    - ${student.marks_of_5_subjects["english"]}       |`); 
    console.log();
    console.log(`| Hindi      - ${student.marks_of_5_subjects["hindi"]}       |`);
    console.log();
    console.log(`| Percentage - ${percentage} %   |`); 
    console.log();
    console.log("+-----------------------+");
};

const marks = {
  science: 50,
  maths: 80,
  social_science: 70,
  english: 85,
  hindi: 91,
};

const s = new Student("Yash", "07", "AIML", "A", marks);
console.log(printTop3Subjects(s.marks_of_5_subjects));
console.log();
printReportCard(s);
