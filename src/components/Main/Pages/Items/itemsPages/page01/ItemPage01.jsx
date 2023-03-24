import { Link } from "react-router-dom";
import CenterMode from "./ItemCarousel";
import "./itempage.css";


const ItemPage01 = () => {
    return(
        <div className="itemPageMain">
            <p>1</p>
            <CenterMode />
            <div className="aH">
                <p>Размер</p>
                <Link to="https://drive.google.com/file/d/1yBKwwwENnz6PZpYM73-99EwYdJSueokK/preview"><strong>48</strong></Link>
                <Link to="https://drive.google.com/file/d/1yBKwwwENnz6PZpYM73-99EwYdJSueokK/preview"><strong>49</strong></Link>
                <Link to="https://drive.google.com/file/d/1yBKwwwENnz6PZpYM73-99EwYdJSueokK/preview"><strong>50</strong></Link><Link to="https://drive.google.com/file/d/1yBKwwwENnz6PZpYM73-99EwYdJSueokK/preview"><strong>48</strong></Link>
                <Link to="https://drive.google.com/file/d/1yBKwwwENnz6PZpYM73-99EwYdJSueokK/preview"><strong>51</strong></Link>
                <Link to="https://drive.google.com/file/d/1yBKwwwENnz6PZpYM73-99EwYdJSueokK/preview"><strong>52</strong></Link>
            </div>
        </div>
    )
}

export default ItemPage01;