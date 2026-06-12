interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'abdullah',
  lastName: 'manahi',
  age: 28,
  location: 'AL Khobar',
};

const student2: Student = {
  firstName: 'manahi',
  lastName: 'almouribd',
  age: 22,
  location: 'AL Khobar',
};

const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');
document.body!.appendChild(table);

studentsList.forEach((student: Student) => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});
