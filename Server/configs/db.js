const mongoose = require('mongoose')

module.exports = async() => {
    try {
        await mongoose.connect('mongodb+srv://admin:<password>@cluster0.9wjw9ff.mongodb.net/product');
        console.log("MongoDB connected><");
    } catch (error) {
        console.log("MongoDB err: ", error);
    }
}