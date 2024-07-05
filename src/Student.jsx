import PropTypes from 'prop-types'

function Student(pros) {

    return (
        <div className="student">
            <p>Name: {pros.name}</p>
            <p>Age: {pros.age}</p>
            <p>Student: {pros.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student