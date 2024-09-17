const handleError = ((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ msg: 'Internal server error' });
});

export default handleError