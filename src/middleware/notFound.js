import path from 'path';

const notFound = ((req, res, next) => {
    res.status(404).sendFile(path.resolve('public', '404.html'));
});

export default notFound