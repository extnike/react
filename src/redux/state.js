const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'


let store = {
    _state: {
        profile: {
            postsData: [
                {id: 1, text: 'Hi, how are you', likesCount: 10},
                {id: 2, text: "I'm fine, thank you", likesCount: 12},
            ],
            newPostText: '',
        },
        dialogs: {
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
            ],
            newMessageBody: '',
        }
    },
    _callSubscriber() {
        console.log('State was changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: this._state.profile.postsData.length + 1,
                text: this._state.profile.newPostText,
                likesCount: 0,
            }
            this._state.profile.newPostText = ''
            this._state.profile.postsData.push(newPost)
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profile.newPostText = action.text
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogs.newMessageBody = action.text
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogs.newMessageBody
            this._state.dialogs.newMessageBody = ''
            let newMessage = {
                id: this._state.dialogs.messagesData.length + 1,
                message: body,
            }
            this._state.dialogs.messagesData.push(newMessage)
            this._callSubscriber(this._state)
        }
    }
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text:text })

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (message) => ({type: UPDATE_NEW_MESSAGE_BODY, message:message })

export default store
window.store = store
