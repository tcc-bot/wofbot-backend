import express from 'express';
import auth from '../middlewares/auth';
import controller from '../controllers/accounts';

export default function(server) {
    const protectedRoutes = express.Router();
    const openRoutes = express.Router();

    protectedRoutes.use(auth);

    server.use('/api', protectedRoutes);
    server.use('/account', openRoutes);

    openRoutes.post('/passwordRecovery', controller.passwordRecovery);
    openRoutes.post('/changepasswordpermition', controller.changePasswordPermition);
    openRoutes.post('/changepassword', controller.changePassword);

    // NEW ROUTER FIREBASE
    openRoutes.post('/createtoken', controller.createToken);
    openRoutes.get('/getuserbyemail', controller.getUserByEmail);
    openRoutes.post('/login', controller.login);
    openRoutes.post('/signup', controller.signup);
    openRoutes.get('/me', controller.me);
    openRoutes.get('/active', controller.activeAccount);
}
