import { FactModel } from '../models/fact';

export const listFacts = async (req, res, next) => {
    try {
        const facts = await FactModel.find();
        res.status(200).render('index', {
            Title: 'Trivia Time',
            Subtitle: 'Facts for funtimes with friends!',
            Facts: facts
        })
    } catch (error) {
        next(error);
    }
}

export const newFactView = async (req, res, next) => {
    try {
        res.status(200).render('new', {
            Title: 'New Fact',
            Subtitle: 'Add a cool fact!'
        })
    } catch (error) {
        next(error);
    }
}

export const createFact = async (req, res, next) => {
    try {
        const { question, answer } = req.body;
        await FactModel.create({
            question,
            answer,
        })
        res.status(201).render('confirmation', {
            Title: 'Fact added successfully',
            Subtitle: 'Add more wonderful facts to the list!'
        })
    } catch (error) {
        next(error);
    }
}

export const showFact = async (req, res, next) => {
    try {
        const { id } = req.params;
        const fact = await FactModel.findById(id);
        if (!fact) {
            return next();
        }
        res.status(200).render('show', {
            Title: 'Single Fact',
            Subtitle: '',
            Fact: fact
        })
    } catch (error) {
        next(error);
    }
}

export const editFact = async (req, res, next) => {
    try {
        const { id } = req.params;
        const fact = await FactModel.findById(id);
        if (!fact) {
            return next();
        }
        res.status(200).render('edit', {
            Title: 'Edit Fact',
            Subtitle: 'Edit your interesting fact',
            Fact: fact
        })
    } catch (error) {
        next(error);
    }
}

export const updateFact = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { question, answer } = req.body;
        const updateFact = await FactModel.findByIdAndUpdate(id, { question, answer }, { new: true });
        if (!updateFact) {
            return next();
        }
        res.status(200).send();
    } catch (error) {
        next(error);
    }
}

export const deleteFact = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteFact = await FactModel.findByIdAndDelete(id);
        if (!deleteFact) {
            return next();
        }
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}
