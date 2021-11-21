require("dotenv").config();
import * as mongoose from 'mongoose';
import * as express from 'express';
import randomRoute from './routes/random.route';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import likeRoute from './routes/like.route';
import topLikesRoute from './routes/toplikes.route';

const app = express();
app.use(cors());
//app.use(bodyParser.json());


(async () => {
    await mongoose.connect(process.env.MONGO_URI);
    const port = process.env.PORT || 2002;
    app.listen(port);
    console.log(`Listening on port ${port}`);

    app.get('/random', randomRoute);
    app.get('/like/:id', likeRoute)
    app.get('/toplikes/:page', topLikesRoute)
    app.all('*', (req, res) => {
        res.send('ok');
    })

})();





