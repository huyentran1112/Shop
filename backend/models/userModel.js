import mongoose from 'mongoose';

// creates a schema for the user, timestamp is needed to determine date it was added
const userSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    isAdmin: { type: Boolean, default: false, required: true },
},
{
    timestamps: true
}
);

// creates an instance of the user schema and names it User
const User = mongoose.model('User', userSchema);
export default User;