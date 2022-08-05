const fs=require('fs');
const chalk=require('chalk');
const { command } = require('yargs');
const { title } = require('process');
const getNotes=()=>  'Your notes.....'

//Adding Notes

const addNote=(title,body)=>{
    const notes=loadNotes()
//     const duplicateNotes =notes.filter(function(note){
//   note.title===title
//}
// )
    //const duplicateNotes =notes.filter((note)=>note.title===title)
    debugger
    const duplicateNote= notes.find((note)=> note.title===title)
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
        console.log("New Notes added");
    }else{
        console.log('Note title taken!');
    }
}

const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync("notes.json",dataJSON);
}
const loadNotes=()=>{
    try {
        const dataBuffer=fs.readFileSync('notes.json');
        const dataJSON=dataBuffer.toString();
        return JSON.parse(dataJSON);
      } catch (error) {
        return []
    }
}


// Challenge: Setup command option and function
//1. Setup the remove command to take a required "--title" option.
//2. Create and export a removeNote function from notes.js
//3. Call removeNote in remove command handler.
//4. Save removeNote log the title of the note to be removed.
//5. Test your work using node app.js remove --title="Same title"

// Remove note

const removeNote=(title)=>{
    const notes=loadNotes();
    const findNotes=notes.filter((note)=>note.title!==title  
    )
    if(notes.length>findNotes.length){
        console.log(chalk.green.inverse('Note Removed!'));
        saveNotes(findNotes);
    }else{
        console.log(chalk.red.inverse('No note find!'))
    }
}

//
//Goal: Wire up the list command.
//
//1. Create and export listNotes from notes.js
// - "Your notes" using chalk.
//-print note title for each note
// 2. Call listNotes from command handler.
//3. Test your work!

const listNotes=()=>{
    console.log(chalk.green.inverse('Your Notes'));
     const allNote=loadNotes();
     allNote.forEach(element => {
        console.log(element.title)
     });
    }

// Goal: Write up read command.
// 1. Setup --title option for read command.
// 2. create readNote in note.js
//     - Search for note by title
//     - Find note and print title(styled) and body (plain)
//     - No note found? Print error in red.
// 3.  Have the command handler call the function. 
// 4. Test your work by runing a couple command.

const readNote=(title)=>{
    const notes=loadNotes()
    const findNote= notes.find((note)=> note.title===title)
    if(findNote){
        console.log(chalk.inverse(findNote.title));
        console.log(findNote.body);
    }else{
        console.log(chalk.red.inverse('Note not found'))
    }
}


//module.exports=getNotes
module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}