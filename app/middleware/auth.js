// Middleware: Se encarga de interceptar la peticion antes de procesar los datos
const checkAuth = async (req, res, next) => {
    try {
        // Bearer <token>
        const token = req.headers.authorization?.split(" ").pop();
        const tokenData = await require("../helpers/generateToken").verifyToken(token);
        if (!tokenData) {
            return res.status(401).json({ message: "No autorizado" });
        }

        next();

    } catch (error) {
        console.log("error", error);
        return res.status(409).json({ message: "No tiene permitido ingresar", error: error.message });

    }
};

module.exports = checkAuth;