import express from 'express';
import {
    movieIndex,
    moviePost,
    movieUpdate,
    movieDelete ,
    moviedetails
} from '../controllers/movie.controler.js';

const router = express.Router();

// CRUD functions
// Read (R)
router.get('/', movieIndex);

// get a single movie 
router.get('/:id',moviedetails)

// Create (C)
router.post('/', moviePost);

// Update (U)
router.put('/:id', movieUpdate);

// Delete (D)
router.delete('/:id', movieDelete);

export default router;
