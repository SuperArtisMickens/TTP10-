import React, { Component } from "react";
import cookie from "react-cookies";
import TextField from '@material-ui/core/TextField';

import { googleTranslate } from "./utils/googleTranslate";
import { Button, Container, Typography } from "@material-ui/core";

class App extends Component {
  state = {
    phrase: "",
    languageCodes: [],
    language: cookie.load("language") ? cookie.load("language") : "en",
    theQuestion: cookie.load("theQuestion")
      ? cookie.load("theQuestion")
      : "Rake"
  };

  componentDidMount() {
    // load all of the language options from Google Translate to your app state

    googleTranslate.getSupportedLanguages("en", function (err, languageCodes) {
      getLanguageCodes(languageCodes); // use a callback function to setState
    });

    const getLanguageCodes = languageCodes => {
      this.setState({ languageCodes });
    };


  }

  render() {
    const { languageCodes, language, theQuestion } = this.state;

    return (
      <Container>
        <br></br>
        <TextField 
        variant="outlined" 
        label="Enter:" 
        name=""
        value=""
        onChange={this.updateField}
        />

        <Button> Translate </Button>

        <Typography>{theQuestion}</Typography>


        {/* iterate through language options to create a select box */}
        <select
          className="select-language"
          value={language}
          onChange={e => this.changeHandler(e.target.value)}
        >
          {languageCodes.map(lang => (
            <option key={lang.language} value={lang.language}>
              {lang.name}
            </option>
          ))}
        </select>
      </Container>
    );
  }

  updateField = (e) => {
    let { value } = this.state;
    this.setState.phrase({ });
  }

  changeHandler = language => {
    let { theQuestion } = this.state;
    let cookieLanguage = cookie.load("language");
    let transtheQuestion = "";

    const translating = transtheQuestion => {
      if (theQuestion !== transtheQuestion) {
        this.setState({ theQuestion: transtheQuestion });
        cookie.save("theQuestion", transtheQuestion, { path: "/" });
      }
    };


    // translate the theQuestion when selecting a different language
    if (language !== cookieLanguage) {
      googleTranslate.translate(theQuestion, language, function (err, translation) {
        transtheQuestion = translation.translatedText;
        translating(transtheQuestion);
      });
    }
    
    //This is the format to use
    googleTranslate.translate('Dinosaur', language, function(err, translation) {
      console.log(translation);
      // =>  { translatedText: 'Hallo', originalText: 'Hello', detectedSourceLanguage: 'en' }
    });

    this.setState({ language });
    cookie.save("language", language, { path: "/" });
    
  };
}

export default App;