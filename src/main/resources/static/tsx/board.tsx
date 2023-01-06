import * as React from "react";
import Comment from "./comment";

type MyProps = {
    // using `interface` is also ok
    children: `interface`;
};
type MyState = {
    comments: Array<string>;
};

export default class Board extends React.Component<{},MyState> {
    state = {
        // optional second annotation for better type inference
        comments: [],
    };

    removeComment = (i) => {
        let arr = this.state.comments;
        arr.splice(i, 1);
        this.setState({comments: arr});
    }

    updateComment = (newText, i) => {
        let arr = this.state.comments;
        arr[i] = newText;
        this.setState({comments: arr});
    }

    add = (text) => {
        let arr = this.state.comments;
        arr.push(text);
        this.setState({comments: arr});
    }

    eachComment = (text, i) => {
        return (
            <Comment key={i} index={i} updateCommentText={this.updateComment} deleteFromBoard={this.removeComment}>{text}</Comment>
        );
    }

    render() {
        return (
            <div>
                <button onClick={() => this.add("Default text")} className="button-info">Add New</button>
                <div className="board">
                    {this.state.comments.map((val, index) => this.eachComment(val, index))}
                </div>
            </div>
        );
    }
}

