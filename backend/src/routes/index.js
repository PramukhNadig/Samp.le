import express from 'express';
const router = express.Router();
const app = express();

router.get('/', (req, res) => {
    res.send('Hello World!');
}
);

router.get('/daily', (req, res) => {
    res.send('Daily');
});

router.get('/sampled', (req, res) => {
    res.send('Sampled');
});