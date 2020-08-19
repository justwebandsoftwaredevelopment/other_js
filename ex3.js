/*By filling in the code in Listing 7.3, add a louder method to the Phrase
object that returns a LOUDER (all-caps) version of the content. Confirm
in the REPL that the result appears as in Listing 7.4.*/

    // Makes the phrase LOUDER.
    this.louder = function() {
        return content.toUpperCase().split(" ").length;
        }
    
        let p = new Phrase("yo adrian!");