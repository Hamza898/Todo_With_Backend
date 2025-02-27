const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        defaut: 'description'
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: false
    },
    checklist: [
        {
            isChecked: {
                type: Boolean, default: false
            },
            taskName: {
                type: String, required: true
            }
        }
    ]
});

module.exports = mongoose.model("Task", taskSchema);
