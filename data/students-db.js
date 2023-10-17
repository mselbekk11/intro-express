const students = [
  { student: 'Morgan', male: true },
  { student: 'Sarah', male: false },
  { student: 'Talie', male: false },
]

module.exports = {
  getAll: function () {
    return students
  },
}
