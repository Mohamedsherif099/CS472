
'use strict'

let group = {
  title: 'Our Group',
  students: ['John', 'Pete', 'Alice'],
  showList: function () {
    this.students.forEach(
      function (student) {
        console.log(this.title + ': ' + student)
      }.bind(group)
    )
  },
}
group.showList()

/*
Fixed code:
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    this.students.forEach((student) => {
      console.log(this.title + ": " + student);
    });
  }
};

group.showList();

*/