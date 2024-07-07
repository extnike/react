let store = {
    _state: {
        profile: {
            postsData: [
                {id: 1, text: 'Hi, how are you', likesCount: 10},
                {id: 2, text: "I'm fine, thank you", likesCount: 12},
            ],
            newPostText: ''
        }, dialogs: {
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: "I'm fine"},
                {id: 4, message: 'Thank you'},
                {id: 5, message: 'Good bye'},],
            dialogsData: [
                {id: 1, name: 'Ivan'},
                {id: 2, name: 'Petr'},
                {id: 3, name: 'Sergey'},
                {id: 4, name: 'Vadim'},
                {id: 5, name: 'Stanislav'},
            ]
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log('State was changed')
    },
    addPost() {
        let newPost = {
            id: this._state.profile.postsData.length + 1,
            text: this._state.profile.newPostText,
            likesCount: 0,
        }
        this._state.profile.postsData.push(newPost)
        this.updateNewPostText('')
        this._callSubscriber(this._state)
    },
    updateNewPostText(text) {
        this._state.profile.newPostText = text
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}

export default store
window.store = store
