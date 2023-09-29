import { users } from "../../data/users.js";

export const getAllUsers = async(req, res) => {
    try {
        res.status(200).json(users);
        console.log(`users: ${users}`);
    } catch (error) {
        res.status(404).json({
            message: "users not found"
        });
        console.error("users not found", error);
    }
}

export const getUser = async(req, res) => {
    const {id} = req.params
    try {
        
    } catch (error) {
        
    }
}