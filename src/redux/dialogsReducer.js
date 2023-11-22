const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageBody = action.body;
            return state;
        
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.message.push({id: 6, message: body});
            return state;

        default:
            return state;
    }
}

export const sendMessageCreator = () => ({  type: SEND_MESSAGE })
export const updateNewMessageTextActionCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_TEXT, body: body })

export default dialogsReducer;