import mongoose from 'mongoose';

export const connectDB =async () => {
try {
    const conn = mongoose.connect('mongodb://localhost:27017/experience', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    console.log(`Mongo connected ${conn}` .cyan.underline);
} catch (error) {
    console.error(`Error ${error.message}` .red.underline.bold);
    process.exit(1);
}
}