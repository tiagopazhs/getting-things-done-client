import { useState, useEffect } from 'react'
import axios from 'axios';
import { actionsDataProps } from './types/global';
import './ActionsList.css'

function ActionList() {
    const [actions, setActions] = useState<actionsDataProps>([]);

    function getActions() {
        axios.get('http://localhost:8022/actions')
            .then((response) => {
                setActions(response.data)
            })
            .catch((error) => console.error(error));
    }

    function createAction() {
        alert('This feature is not ready yet')
    }

    function concludeActions(id: number): void {
        console.log('done', id)
        axios.put('http://localhost:8022/actions/' + id, { status: "done" })
            .then(() => {
                getActions()
            })
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        getActions()
    }, []);

    return (
        <div>
            <div className="actionHeader" >
                <h2>Actions List</h2>
                <button onClick={() => { createAction() }}>New Action</button>
            </div>
            <ul>
                {actions.map((action) => (
                    <li className="actionCard" key={action.id}>
                        <strong>{action.name}</strong>
                        <div className="actionStatus">
                            <p className={"actionStatus-" + action.status} >{action.status}</p>
                            {action.status === 'open' && <button className="actionStatus-action" onClick={() => { concludeActions(action.id) }}>mark-as-done</button>}
                        </div>
                    </li>
                ))}
            </ul>
        </div >
    );

}

export default ActionList;