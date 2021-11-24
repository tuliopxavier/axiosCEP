import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {

    const navigate = useNavigate();
    const [counter, setCounter] = useState(5);

    useEffect(() => {
        const time = () => {
            setTimeout(() => {
                setCounter(counter - 1)
            }, 1000);
        }

        if (counter > 0) {
            time();
        } else {
            navigate("/");
            clearInterval(time);
        }
    }, [counter, navigate]);

    return (
        <div className="d-flex flex-column align-items-center">
            <p>Nada aqui</p>
            <p>Redirecionamento em</p>
            <h1>{counter}</h1>
        </div>
    )
}

export default Error404;
