import React from "react";
import styles from './users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [{
                id: 1,
                photoUrl: 'https://en.respect-hire.tech/static/images/default_avatar.fb6c115388e7.svg',
                followed: true,
                fullName: 'Roman',
                status: 'I`m busy',
                location: {city: 'Lviv', country: 'Ukraine'}
            },
                {
                    id: 2,
                    photoUrl: 'https://en.respect-hire.tech/static/images/default_avatar.fb6c115388e7.svg',
                    followed: false,
                    fullName: 'Misha',
                    status: 'I`m beast',
                    location: {city: 'Alatyr', country: 'Russia'}
                }]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} alt="userPhoto"/>
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button onClick={() => props.unFollow(u.id)}>Follow</button>
                                : <button onClick={() => props.follow(u.id)}>Unfollow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                         <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;