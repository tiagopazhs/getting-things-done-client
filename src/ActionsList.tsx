import { useState, useEffect } from 'react'
import axios from 'axios';
import { actionsDataProps } from './types/global';

function ActionList() {
    const [actions, setActions] = useState<actionsDataProps>([]);

    useEffect(() => {
        axios.get('http://localhost:8022/actions')
            .then((response) => {
                setActions(response.data)
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h2>Actions List</h2>
            <ul>
                {actions.map((action) => (
                    <li key={action.id}>
                        <strong>{action.name}</strong>
                        <p>{action.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default ActionList;