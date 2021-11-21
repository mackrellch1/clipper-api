import * as express from 'express';
import { RecordingModel } from '../models/recording.model';

export default async function topLikesRoute(req: express.Request, res: express.Response) {
    const page = Number(req.params.page)

    const response = await RecordingModel
        .find({
            likes: {$gt: 0}
        })
        .limit(10)
        .skip(page*10)
        .sort({
            likes: -1
        })

    return res.json(response)
}