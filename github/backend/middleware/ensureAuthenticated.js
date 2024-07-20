import passport from "passport";

export const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status(401).json({ error: "User is not authenticated" });
    }
};
