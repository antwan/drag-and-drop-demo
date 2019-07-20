import React, {useState, useEffect} from 'react';

/* Image is an enhanced HTML img that is loaded with a spinner and that can be zoomed in when clicked */
const Image = (props) => {
    const [loaded, setLoaded] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    }

    useEffect(() => {
        const escape = (event) => {
            if (event.keyCode === 27) {
                setExpanded(false);
            }
        }
        document.addEventListener("keydown", escape, false);

        return () => {
            document.removeEventListener("keydown", escape, false);
        };
    }, [])

    return <div
        className={`image-wrapper ${expanded ? 'expanded' : ''}`}
        onClick={toggleExpanded}
    >
        <img
            onLoad={() => {setLoaded(true)}}
            alt={props.alt}
            src={props.src}
        />
        <span className={`spinner ${loaded ? 'hidden' : ''}`} />
    </div>
}

export default Image
