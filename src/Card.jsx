import profilePic from './assets/C++.jpg'

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2>C++</h2>
            <p>Programing language</p>
        </div>
    );
}

export default Card