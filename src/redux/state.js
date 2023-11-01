import { renderEntireTree } from "../render";

let state = {
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
            ]
    },
    friends: [
        {id: 1, name: 'Pavel1'},
        {id: 2, name: 'Pavel2'},
        {id: 3, name: 'Pavel3'},
        {id: 4, name: 'Pavel4'},
        {id: 5, name: 'Pavel5'},
        {id: 6, name: 'Pavel6'}
    ]
    
};

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
};
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
};

export default state;