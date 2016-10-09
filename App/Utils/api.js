const api = {
    getBio(username) {
        username = username.toLowerCase().trim();
        const url = `https://api.github.com/users/${username}`;
        return fetch(url).then(res => res.json());
    },
    getRepos(username) {
        username = username.toLowerCase().trim();
        const url = `https://api.github.com/users/${username}/repos`;
        return fetch(url).then(res => res.json());
    },
    getNotes(username) {
        username = username.toLowerCase().trim();
        const url = `https://github-note-taker-75c77.firebaseio.com/${username}.json`;
        return fetch(url).then(res => res.json())
    },
    addNotes(username, note) {
        username = username.toLowerCase().trim();
        const url = `https://github-note-taker-75c77.firebaseio.com/${username}.json`;
        return fetch(url, {
            method: 'post',
            body: JSON.stringify(note)
        }).then(res => res.json())
    }
};

export default api