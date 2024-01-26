import mongoose from 'mongoose';

const DB_URI = 'mongodb+srv://mandradejuniorvva:9pHQeFmPF8f8UNEy@unmep.roua7jt.mongodb.net/?retryWrites=true&w=majority';

const connectDb = () =>{
  mongoose.connect(DB_URI)
    .then(data => {
      console.log(`Conectado com o servidor: ${data.connection.host}`);
    }) 
    .catch(err => console.log(err));
};

export default connectDb;