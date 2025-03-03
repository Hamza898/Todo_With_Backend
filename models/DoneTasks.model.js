const mongoose = require("mongoose");

const doneTaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        default: 'description'
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

module.exports = mongoose.model("DoneTask", doneTaskSchema);