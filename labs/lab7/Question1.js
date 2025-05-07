function Student(studentId) {
  this.studentId = studentId;
  this.answers = []; 

  this.addAnswer = function(question){
    this.answers.push(question);
  }
}

function Question(qid, answer){
    this.qid = qid;
    this.answer = answer;

    this.checkAnswer = function(answer){
        return this.answer === answer;
    }
}

function Quiz(questionArray, students){

    this.questions = new Map();

    questionArray.forEach((question) => {
        this.questions.set(question.qid, question.answer);
    });

    this.students = students;

    this.scoreStudentBySid = function(sid){
        let student = this.students.find(s => s.studentId === sid);

        if (!student) {
            return 0;
        }

        let score = 0;
        student.answers.forEach((question) => {
            if (this.questions.get(question.qid) === question.answer) {
                score++;
            }
        });
        return score;
    }

    this.getAverageScore = function(){
        let total = 0

        this.students.forEach((student) => {
            total += this.scoreStudentBySid(student.studentId);
        });

        return total / this.students.length;

    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

const students = [student1, student2];

const questions = [
    new Question(1, 'b'),
    new Question(2, 'a'),
    new Question(3, 'b')
];

const quiz = new Quiz(questions, students);

console.log(quiz.scoreStudentBySid(10)); // Expected: 3
console.log(quiz.scoreStudentBySid(11)); // Expected: 2
console.log(quiz.getAverageScore()); 