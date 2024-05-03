import express from 'express'
import mongoose from 'mongoose'

import User from './models/user.js'
import routes from './routes.js'

const app = express();

app.use(express.json());
app.use(routes)

mongoose
    .connect('mongodb+srv://deboraafr:Debora10*@cluster0.aq8683i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => { app.listen(8080, () => console.log("Servidor rodando e Banco de dados conectado"))
})
    .catch((error) => console.log("error"))

