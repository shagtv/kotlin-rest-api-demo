import * as React from "react";
import {createRef} from "react";

type MyProps = {
    // using `interface` is also ok
    children?: React.ReactNode;
    index: Number;
    updateCommentText: CallableFunction;
    deleteFromBoard: CallableFunction;
};
type MyState = {
    editing: boolean;
};

export default class Comment extends React.Component<MyProps, MyState> {
    state = {
        editing: false,
    };
    newText = createRef<HTMLTextAreaElement>();
    comment = createRef<HTMLDivElement>();

    edit = () => {
        this.setState({editing: true});
    }

    save = () => {
        this.props.updateCommentText(this.newText.current.value, this.props.index);
        this.setState({editing: false});
    }

    remove = () => {
        this.props.deleteFromBoard(this.props.index);
    }

    renderNormal() {
        return (
            <div className="commentContainer">
                <div ref={this.comment} className="comment">{this.props.children}</div>
                <button onClick={this.edit} className="button-primary">Edit</button>
                <button onClick={this.remove} className="button-danger">Remove</button>
            </div>
        );
    }

    renderForm() {
        return (
            <div className="commentContainer">
                <textarea ref={this.newText} defaultValue={this.props.children.toString()}></textarea>
                <button onClick={this.save} className="button-success">Save</button>
            </div>
        );
    }

    render() {
        if (this.state.editing) {
            return this.renderForm();
        } else {
            return this.renderNormal();
        }
    };
}
