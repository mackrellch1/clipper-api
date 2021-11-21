import * as mongoose from 'mongoose';

const recordingSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userName: String,
    userId: String,
    guildId: String,
    date: Date,
    channelName: String,
    clipDuration: Number,
    likes: Number
});

export const RecordingModel = mongoose.model('Recording', recordingSchema);