import './User.css';

const User = ({ avatar_url, html_url, login }) => (
    <a href={html_url} target="_blank" rel="noreferrer">
        <div className="user">
            <img src={avatar_url} alt="Profile" width="50" height="50" />
            <div className="name">login: {login}</div>
        </div>
    </a>
);

export default User;
