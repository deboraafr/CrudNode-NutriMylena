
import User from '../models/user.js'

async function getUsers(request, response) {
    try {
        const users = await User.find();
        return response.status(200).json(users);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Erro ao buscar usuários' });
    }
}

async function createUser(request, response) {
    try {
        const user = request.body;
        const newUser = await User.create(user);
        return response.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Erro ao criar usuário' });
    }
}

async function deleteUser(request, response) {
    try {
        const id = request.params.id;
        const deletedUser = await User.findByIdAndDelete({ _id: id });

        if (!deletedUser) {
            return response.status(404).json({ message: 'Usuário não encontrado' });
        }

        return response.status(200).json({ message: 'Usuário deletado' });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Erro ao deletar usuário' });
    }
}
async function updateUser(request, response) {
    try {
        const id = request.params.id;
        const updates = request.body;

        const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });

        if (!updatedUser) {
            return response.status(404).json({ message: 'Usuário não encontrado' });
        }

        return response.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Erro ao atualizar usuário' });
    }
}

export { getUsers, createUser, deleteUser, updateUser }