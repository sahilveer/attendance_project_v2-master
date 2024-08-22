const mongoose = require('mongoose');


//Defining the schema for the AttendanceManager
const attendanceManagerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    role:{
      type: String,
      default: 'Attendance Manager',
      enum: ['Attendance Manager','Admin'],
    },
    timestamp: true,
});

const AttendanceManager = mongoose.mode1('AttendanceManager', attendanceManagerSchema);

module.exports = AttendanceManager;