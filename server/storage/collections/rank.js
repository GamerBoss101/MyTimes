import mongoose from "mongoose";

const reqString = {
    type: String,
    required: true
}

const RankSchema = new mongoose.Schema({
    id: reqString,
    userId: reqString,
    sportId: reqString,
    official: Boolean,
    ranking: reqString,
    event: reqString,
    date: Date
}, { timestamps: true });

export default class Users {
    constructor() {
        this.model = mongoose.model('ranks', RankSchema);
        this.upsert = { upsert: true };
    }

    makeId(length) {
        var result = [];
        var characters = 'abcdefghijklmnopqrstuvwxyz012345678901234567890123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
        }
        return result.join('');
    }

    async create(time) {
        let Id = this.makeId(5);

        await this.model.findOneAndUpdate({ id: Id }, {
            id: Id,
            userId: time.userId,
            official: time.official,
            seconds: time.seconds,
            event: time.event,
            date: time.date
        }, this.upsert);
        return await this.get(user.id);
    }

    async get(Id) {
        return await this.model.findOne({ id: Id });;
    }

    async getAll(query) {
        return await this.model.find(query);
    }

    async update(Id, data) {
        if(!(await this.get(Id))) return null;
        await this.model.findOneAndUpdate({ id: Id }, data, this.upsert);
        return await this.get(Id);
    }

    async delete(Id) {
        let result = await this.get(Id);
        if(!result) return false;
        await this.model.deleteOne({ id: Id })
        return true;
    }
}