const ensureGuest = (req, res, next) => {
    if (!req.isAuthenticated()) {
        res.status(401).json({
            message: "Unauthenticated"
        })
    }else {
        next()
    }
}

module.exports = ensureGuest