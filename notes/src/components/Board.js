//in Reacht environment if you import a css file, it is applie
//to the component when rendeed..
import React, {Component} from 'react';
import '../css/Board.css';
import Note from './Note';

//ECMASCRIPT Javascript Class...
class Board extends Component {
    constructor() {
        super();
        this.state = {
            notes: []
        };
    }

    addNote() {
        let notes = this.state.notes;
        //Instead of creating note w generic title and body, we will
        //traansfer responsibillity to setting up the note to Note.js
        //and we will just create one property to track the node
        notes.push(
            {
                id: Date.now()
            }
        );
        this.setState(
            {
                notes: this.state.notes
            }
        );
    }

    deleteNote(id) {
        let newNoteArray = this.state.notes;
        
        for (let i=0; i<newNoteArray.length;i++) {
            if (newNoteArray[i].id === id) {
                newNoteArray.splice(i,1);
                break;
            }
        }

        this.setState(
            {
                notes: newNoteArray
            }
        )
    }
    
    //creates method for the class
    render() {

        return (
            <div>
                <div className="div-board">
                    <div className="row">
                        {
                            this.state.notes.map( (note) => {
                                return <Note key={note.id} id={note.id} deleteHandler={this.deleteNote.bind(this)}/>;
                            })
                        }
                    </div>
                </div>
                <div>
                    <button className="btn btn-success add-button" onClick={this.addNote.bind(this)}>Add</button>
                </div>
            </div>
        );
    }
}

//make this file avaialable in other modules
export default Board;