import { Schema, model } from 'mongoose';

const schema = new Schema(
    {
        question: { type: String, require: true },
        answer: { type: String, require: true }
    }
)

export const FactModel = model('fact', schema);
