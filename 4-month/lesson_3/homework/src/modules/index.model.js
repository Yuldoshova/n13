const sequelize = require("../config/db.config");
const Group = require("./group/group.model");
const Student = require("./student/student.model");

const Student_Group = sequelize.define('students_groups', {}, { timestamps: false })
Student.belongsToMany(Student, { as: 'students', foreignKey: "id", through: Student_Group })
Group.belongsToMany(Group, { as: 'groups', foreignKey: "id",through: Student_Group })