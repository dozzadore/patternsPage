import "./contacts.css";


const Contacts = () => {
    return(
        <div className="Contacts">
            <div className='contactsContainer'>
                <div className="leftBoxContacts">
                    <div>Whatsapp</div>
                    <div>Phone</div>
                    <div>Telegram</div>
                    <div className="lefPContacts">Messengers</div>
                </div>
                <div className="midleBoxContacts"></div>
                <div className="rightBoxContacts"></div>
            </div>
        </div>
    );
};

export default Contacts;