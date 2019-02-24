import admin from "firebase-admin";
import firebase from "firebase";

export default (req, res, next) => {
    // caso seja um método "OPTIONS" segue o fluxo normal da requisição
    if (req.method === "OPTIONS") {
        next();
    } else {
        const token = req.headers.authorization;

        // caso o token não seja passado
        if (!token) {
            return res.status(403).send({ errors: ["Token não enviado na requisição"] });
        }

        // realiza a verificação do Token
        admin
            .auth()
            .verifyIdToken(token)
            .then(function(decodedToken) {
                req.user = decodedToken;
                next();
            })
            .catch(function(error) {
                switch (error.code) {
                    case "auth/argument-error":
                        return res.status(401).json({
                            errors: [
                                {
                                    message: "Token Inválido",
                                },
                            ],
                        });
                    default:
                        return res.status(401).json({ errors: ["Não Autorizado"] });
                }
            });
    }
};
