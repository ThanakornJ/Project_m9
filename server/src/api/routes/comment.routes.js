import { Router } from 'express';
import passport from 'passport';
import cors from 'cors';
import controllers from '../controllers';

const route = Router();
const corsOption = {
    corsComment: {
        origin: process.env.ORIGIN || 'http://localhost:3000',
        methods: ['GET'],
        allowedHeaders: ['Content-Type']
    },
    corsCreateComment: {
        origin: process.env.ORIGIN || 'http://localhost:3000',
        methods: ['POST'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    },
    corsUpdateComment: {
        origin: process.env.ORIGIN || 'http://localhost:3000',
        methods: ['PUT', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    },
    corsDeleteComment: {
        origin: process.env.ORIGIN || 'http://localhost:3000',
        methods: ['DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    }
}
const { 
    getCommentController, 
    crateCommentController, 
    createCommentReplyController, 
    updateCommentController,
    deleteCommentController 
} = controllers.comment;

route.options('/show/:id', cors(corsOption.corsComment));
route.options('/create', cors(corsOption.corsCreateComment));
route.options('/create-reply', cors(corsOption.corsCreateComment));
route.options('/update/:id', cors(corsOption.corsUpdateComment));
route.options('/delete/:id', cors(corsOption.corsDeleteComment));

route.get('/show/:id', cors(corsOption.corsComment), getCommentController);
route.post('/create', cors(corsOption.corsCreateComment), passport.authenticate('jwt', { session: false }), crateCommentController);
route.post('/create-reply', cors(corsOption.corsCreateComment), passport.authenticate('jwt', { session: false }), createCommentReplyController);
route.put('/update/:id', cors(corsOption.corsUpdateComment), passport.authenticate('jwt', { session: false }), updateCommentController);
route.delete('/delete/:id', cors(corsOption.corsDeleteComment), passport.authenticate('jwt', { session: false }), deleteCommentController);

export default route;

