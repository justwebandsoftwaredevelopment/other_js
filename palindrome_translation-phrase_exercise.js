/*Exercises
1. After filling in the code in Listing 7.10, both Phrase and Translated-
Phrase have explicit calls to the toLowerCase method. Eliminate this
duplication by filling in Listing 7.12 to define an appropriate processor
method that returns the lower-case version of the content.*/


function Phrase(content) {
    this.content = content;
    this.processor = function(string) {
    return this.content.toLowerCase();
    }
    this.processedContent = function processedContent() {
    return this.processor(this.content);
    }

    // Returns true if the phrase is a palindrome, false otherwise.
    this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
    }
    }

    function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    // Returns translation processed for palindrome testing.
    this.processedContent = function processedContent() {
    return this.processor(this.translation);
    }
    }

    TranslatedPhrase.prototype = new Phrase();