import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import profileReducer from "./profileReducer";




let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi hey man", likesCount: 11},
                {id: 2, message: "qrfqf qwfwqf", likesCount: 14}
              ],
              newPostText: 'text text text'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Pavel1'},
                {id: 2, name: 'Pavel2'},
                {id: 3, name: 'Pavel3'},
                {id: 4, name: 'Pavel4'},
                {id: 5, name: 'Pavel5'},
                {id: 6, name: 'Pavel6'}
              ],
              message: [
                  {id: 1, message: 'Hi'},
                  {id: 2, message: 'HiHi'},
                  {id: 3, message: 'HiHiHi'},
                  {id: 4, message: 'HiHiHiHiHi'},
                  {id: 5, message: 'PHiHiHiHiHiHi'},
                  {id: 6, message: 'HiHiHiHiHiHi'}
                ],
                newMessageBody: ''
        },
        friends: [
            {id: 1, name: 'Pavel1'},
            {id: 2, name: 'Pavel2'},
            {id: 3, name: 'Pavel3'},
            {id: 4, name: 'Pavel4'},
            {id: 5, name: 'Pavel5'},
            {id: 6, name: 'Pavel6'}
        ]
        
    },
    _callSubscriber() {
        console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.friends = friendsReducer(this._state.friends, action);

        this._callSubscriber(this._state);
        
    }
}



export default store;
window.store = store;