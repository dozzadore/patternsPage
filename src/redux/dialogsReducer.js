const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {

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