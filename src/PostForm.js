import React, { Component } from 'react';
import { TextField, Button, Typography, Card, CardContent } from '@material-ui/core';
import { googleTranslate } from "./utils/googleTranslate";

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputs: '',
            transPhrase: ''
        }
    }


    handleForm = (event) => {
        if (event.target.value.length < 100) {
            this.setState({
                inputs: event.target.value
            });
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        let thePhrase = this.state.inputs;
        console.log("Translate: " + thePhrase)

        //This is the format to use 
        googleTranslate.translate(thePhrase, 'es', (err, translation) => {
            this.setState({ transPhrase: translation.translatedText });
            //this console logs the word from word with the language
            // =>  { translatedText: 'Hallo', originalText: 'Hello', detectedSourceLanguage: 'en' }
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <br />
                        <TextField
                            variant='outlined'
                            label='translate'
                            type='text'
                            name='inputs'
                            value={this.state.inputs}
                            onChange={this.handleForm}
                            theInputs="transPhrase"

                        />

                        <p><Button
                            variant="contained"
                            type="submit"
                            color="primary"
                        >Translate</Button></p>

                    </div>
                </form>
                <Card>
                    <CardContent>
                        <h4>{this.state.transPhrase}</h4>
                    </CardContent>
                </Card>
            </div>
        );
    }

}

export default Form;