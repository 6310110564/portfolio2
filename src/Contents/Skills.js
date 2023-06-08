import React , {Component} from "react";

class Skills extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'myskills' : ['HTML', 'CSS', 'JS', 'ReactJS', 'C', 'JAVA']
        }
    }

    render() {
        return(
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <h3>Computer Skills</h3>
                <ul>
                    {this.state.myskills.map(value => {
                        return <li>{value}</li>
                    })}
                </ul>
                <h3>Soft Skills</h3>
                <ul>
                    <li>Responsibility</li>
                    <li>Time menagement</li>
                    <li>Teamwork</li>
                    <li>Creativity</li>
                </ul>
                <h3>Language</h3>
                <ul>
                    <li>Thai</li>
                    <li>English</li>
                </ul>
            </div>
        );
    }
}

export default Skills;