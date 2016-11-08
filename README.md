# json-to-js
## Got JSON but want JS?

### Installation:

    npm i -g json-to-js

### Options:

    --help/-h       Display this message
    --spaces=2      Provide the indentation in spaces

### Usefulnesses

Ever copied JSON just to reindent and format it to JS? Add this command as an
alias to your `.bashrc`/whatever you use for that stuff:

    pbpaste | json-to-js | pbcopy
