require("dotenv").config();
import * as mongoose from 'mongoose';
import * as express from 'express';
import randomRoute from './routes/random.route';

const app = express();

(async () => {
    await mongoose.connect(process.env.MONGO_URI);
    const port = process.env.PORT || 2002;
    app.listen(port);
    console.log(`Listening on port ${port}`);

    app.get('/random', randomRoute);

    app.all('*', (req, res) => {
        res.redirect('https://jeti.app');
    })

})();




