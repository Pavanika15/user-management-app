import exp from 'express';
import { UserModel } from '../models/UserModel.js';

export const UserApp = exp.Router();

// Create user
UserApp.post('/users', async (req, res, next) => {
    try {
        const newUserDocument = new UserModel(req.body);
        await newUserDocument.save();

        res.status(201).json({ message: "user created" });
    } catch (err) {
        next(err);
    }
});

// Read all active users
UserApp.get('/users', async (req, res, next) => {
    try {
        const usersList = await UserModel.find({ status: true });

        res.status(200).json({
            message: "users",
            payload: usersList
        });
    } catch (err) {
        next(err);
    }
});

// Read user by ID
UserApp.get('/users/:id', async (req, res, next) => {
    try {
        const uid = req.params.id;

        const user = await UserModel.findOne({
            _id: uid,
            status: true
        });

        if (!user) {
            return res.status(404).json({
                message: "user not found"
            });
        }

        res.status(200).json({
            message: "user found",
            payload: user
        });
    } catch (err) {
        next(err);
    }
});

// Soft delete user
UserApp.delete('/users/:id', async (req, res, next) => {
    try {
        const uid = req.params.id;

        const user = await UserModel.findByIdAndUpdate(
            uid,
            { $set: { status: false } },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({
                message: "user not found"
            });
        }

        res.status(200).json({
            message: "user removed",
            payload: user
        });
    } catch (err) {
        next(err);
    }
});

// Activate user
UserApp.patch('/users/:id', async (req, res, next) => {
    try {
        const uid = req.params.id;

        const user = await UserModel.findByIdAndUpdate(
            uid,
            { $set: { status: true } },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({
                message: "user not found"
            });
        }

        res.status(200).json({
            message: "user activated",
            payload: user
        });
    } catch (err) {
        next(err);
    }
});