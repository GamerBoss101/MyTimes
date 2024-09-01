import mongoose from "mongoose";

const reqString = {
    type: String,
    required: true
}

const TimeSchema = new mongoose.Schema({
    id: reqString,
    userId: reqString,
    sportId: reqString,
    official: Boolean,
    seconds: reqString,
    event: reqString,
    visible: Boolean,
    date: Date
}, { timestamps: true });

export default class Users {
    constructor() {
        this.model = mongoose.model('times', TimeSchema);
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

    getSportId(sport) {
        let sports = {
            'swimming': '1',
            'track': '2',
            'cross country': '3',
            'cycling': '4',
        }
        return sports[sport];
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

    async getUserTimes(userId) {
        return await this.model.find({ userId: userId });
    }

    async getUserSportTimes(userId, sport) {
        let sportId = this.getSportId(sport);
        return await this.model.find({ userId: userId, sportId: sportId });
    }

    async getSportTimes(sport) {
        let sportId = this.getSportId(sport);
        return await this.model.find({ sportId: sportId });
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