// const fs=require('fs');
// const { getEnvironmentData } = require('worker_threads');
// // const utils=require('./utils');
// const notes=require('./notes');
//fs.writeFileSync('notes.txt','This file was created by Node.js');


//
//Challenge: Append a message to notes.ts
//
//1. Use AppendFileSync to append to the file.
//2. Run the script.
//3. Check your work by opening the file and viewing the appended text.
//

// try {
//     fs.appendFileSync('notes.txt','This file appended')
// } catch (error) {
//   c  console.log(error);
// }

// console.log(utils(4,-2));

//
//Challenge: Define and use a function in a new file.
//
//1. Create a new file called notes.js
//2. Create getNotes function that returns "Your notes....."
//3. Export getNotes function.
//4. From app.js load in and call the function printing message to console
//

// console.log(notes())

//
//Challeges: Use the chalk library in your library.
// 1. Install version 2.4.1 of chalk.
//2. Load chalk into app.js 
//3. Use it to print the string "Success" to the console in getEnvironmentData.
//4. Test your work

// Bonus: Use docs to mess around with other styles . Make text bold and inversed.

const chalk=require('chalk');
const yargs=require('yargs');
const { readNote } = require('./notes');
const notes = require('./notes');


// console.log(chalk.blue("Hello World"));
// console.log(chalk.blue.bgRed.bold('Hello'));

// if(command==='add'){
//     console.log('Adding note!')
// }else if(command=='remove'){
//     console.log('Remove note!');
// }


//Customize yargs version 
yargs.version("1.1.0");


//add,remove,read,list



//Chanllege: Add an option to the yargs
//
//1. Setup a body option for the add command.
//2.Configure a description, make it require and for it to be a string.
//3. Log the body value in the handler function
//4. Test your work.

//Create add command
yargs.command({
    command:'add',
    describe:'Adding a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe: 'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//Create remove note
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
       notes.removeNote(argv.title);
    }
});

//Challenge add two new command.
//
//1. Setup command to support 'list' command (print placeholder for pint now)
//2. Setup command to support 'read' command(print placeholder for print now)
//3. Test your work by running both command  and ensure correct output.

// List command
yargs.command({
    command:'list',
    describe:'List all',
    handler(argv){
        notes.listNotes();
    }
})

//Read command
yargs.command({
    command:'read',
    describe:'Read all the note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse();
//console.log(yargs.argv);