import * as express from 'express';
import { RecordingModel } from '../models/recording.model';

export default async function randomRoute(req: express.Request, res: express.Response) {
    const doc = await RecordingModel.aggregate([{ $sample: { size: 1 } }])
    
    return res.json(doc)
}