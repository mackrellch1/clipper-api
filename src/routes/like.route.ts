import * as express from 'express';
import { RecordingModel } from '../models/recording.model';

export default async function likeRoute(req: express.Request, res: express.Response) {
    const recordingID = req.body.recordingID

    if (!recordingID) {
        return res.sendStatus(400)
    }

    const recording = await RecordingModel.findOne({
        _id: recordingID
    })

    if (!recording) {
        return res.sendStatus(404)
    }

    recording.likes += 1

    await recording.save()
    return res.sendStatus(200)
}