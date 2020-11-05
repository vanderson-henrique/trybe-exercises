import React from 'react'

class UserProfile extends React.Component {
    render() {
        const {id, name, email, avatar} = this.props.user;

        return (
        <div>
            <p>Olá {name}, o seu ID é {id}.</p>
            <p>Email cadastrado: {email}</p>
            <img src={avatar} alt='Avatar' width='300px'></img>
        </div>
        );
    }
}

export default UserProfile;