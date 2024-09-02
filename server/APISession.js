
export default class APISession {

    constructor() {
        this.sessions = new Map();
    }

    generateSessionID() {
        let id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        return id;
    }

    createSession(id) {
        if(this.sessions.get(id)) return false;
        this.sessions.set(id, this.generateSessionID());
        return this.sessions.get(id);
    }

    getSession(id) {
        for (let [key, value] in this.sessions) {
            if (key == id) return value;
        }
        return null;
    }

    setSession(id, value) {
        if (!this.sessions.get(id)) return false;
        this.sessions.set(id, value);
        return true;
    }

    getSessionUser(sessionValue) {
        for (let [key, value] of this.sessions) {
            if (value == sessionValue) return key;
        }
        return null;
    }

    deleteSessionValue(id, key) {
        if (!this.sessions.get(id)) return false;
        this.sessions.delete(key);
        return
    }
}