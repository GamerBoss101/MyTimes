import mongoose from "mongoose";
import Commissions from "./collections/commission.js";
import Users from "./collections/users.js";
import Reviews from "./collections/reviews.js";

export default class Mongo {
    constructor(uri) {
        this.connect(uri);
        this.commissions = new Commissions();
        this.users = new Users();
        this.reviews = new Reviews();
    }

    async connect(uri) {
        mongoose.set('strictQuery', true);
        return mongoose.connect(uri).then(() => { console.log('MongoDB connected') });
    }

    async disconnect() {
        return mongoose.disconnect();
    }
}
