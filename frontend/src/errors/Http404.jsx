import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Http404.css"


function Http404() {
    return (
        <>
            <div className="error">
                <FontAwesomeIcon icon="heart-crack" className="icon"/>
                <h1 className="title">Sorry, but this page does not exist!</h1>
                <h2>Try contacting the developers for more info!</h2>
            </div>
        </>
    );
}

export default Http404;