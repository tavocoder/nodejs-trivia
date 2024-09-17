import express from 'express';
import router from '../routes/routes';
import path from 'path';
import handleError from '../middleware/error';
import notFound from '../middleware/notFound';

const app = express();

app.use(express.static('public'));

// Configuration for ejs
const viewsFolderPath = path.resolve(__dirname, '../../views')
app.set('view engine', 'ejs');
app.set('views', viewsFolderPath)
// ----------------------------------------------------------------

app.use('/', router)

app.use(handleError);

app.use(notFound);


export default app;