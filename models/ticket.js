import mongoose from 'mongoose';
const ticketschema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {  
        type: String,
        required: true
    },
    status: {   
        type: String,
        default: 'TODO',
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
       default: null,
    },
    priority: {
        type: String,
    },
    deadline: Date,
    helpfulNotes: String,
    relatedskills: [String],
    createdAt: {
        type: Date,
        default: Date.now
    },
})


export default mongoose.models.Ticket || mongoose.model('Ticket', ticketschema);