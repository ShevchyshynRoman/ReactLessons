import React, {useState} from 'react';

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateStatus = () => {
        setEditMode(true)
    }
    const deActivateStatus = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <div>
        {!editMode &&
            <div>
                <span onClick={activateStatus}>Status: {props.status || '=========='}</span>
            </div>
        }
        {editMode &&
            <div>
                <input onChange={onStatusChange} onBlur={deActivateStatus} autoFocus={true} value={status}/>
            </div>
        }
    </div>
}

export default ProfileStatusWithHooks;