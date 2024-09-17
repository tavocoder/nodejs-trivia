import express from 'express';
import { listFacts, newFactView, createFact, showFact, updateFact, deleteFact, editFact } from '../controller/controller';

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.route('/')
    .get(listFacts)
router.route('/fact')
    .get(newFactView)
    .post(createFact)
router.route('/fact/:id')
    .get(showFact)
    .patch(updateFact)
    .delete(deleteFact)
router.route('/fact/:id/edit')
    .get(editFact)

export default router;