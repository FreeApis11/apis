import { ArrayOfUsers } from "../models/User.model.js"

export const getAllUsers = (req, res) => {
    res.status(200).json(ArrayOfUsers)
}

export const getUserById = (req, res) => {
    const { id } = req.params

    const user = ArrayOfUsers.find(item => item.id == id)

    if (!user) {
        return res.status(404).json({ message: "User not found" })
    }

    res.status(200).json(user)
}

export const getUsersBySalary = (req, res) => {
    const { sal } = req.params

    const users = ArrayOfUsers.filter(
        item => item.job.salary >= sal
    )

    res.status(200).json(users)
}