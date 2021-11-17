import * as express from 'express';
import { RecordingModel } from '../models/recording.model';

export default async function randomRoute(req: express.Request, res: express.Response) {
    const doc = await RecordingModel.aggregate([
        { 
            $match: {
                clipDuration: {$gt: process.env.MIN_RANDOM_DURATION || 0}
            }
        },
        { 
            $sample: { size: 1 } 
        }
    ])
    
    return res.json(doc)
}