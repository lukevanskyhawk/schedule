import React, { Component } from 'react';
import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <div className="library-course__title-check">
                    <label className="library-course__title">
                        Problem Solving
                    </label>
                    {Icon('fas fa-check', "library-course__icon")}
                </div>
                <Arrow className="library-course__arrow" />
                <Action className="library-course__action" />
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare libero neque, et suscipit enim pretium at. Integer non dui nibh. Morbi quis nunc sapien. In tincidunt, arcu id porttitor gravida, justo mauris gravida risus, porttitor finibus metus erat ut nulla. Phasellus eu nibh feugiat, condimentum ipsum sit amet, blandit sem.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;