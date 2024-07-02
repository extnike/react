let dialogsData = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Petr'},
    {id: 3, name: 'Sergey'},
    {id: 4, name: 'Vadim'},
    {id: 5, name: 'Stanislav'},
]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: "I'm fine"},
    {id: 4, message: 'Thank you'},
    {id: 5, message: 'Good bye'},
]


let postsData = [
    {id: 1, text: 'Hi, how are you', likesCount: 10},
    {id: 2, text: "I'm fine, thank you", likesCount: 12},
]


const state = {
    profile: {postsData: postsData},
    dialogs: {
        messagesData: messagesData,
        dialogsData: dialogsData
    }
}

export default state