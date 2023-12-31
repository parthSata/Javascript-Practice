// INTEREDIATE INVOKED FUNCTION EXPRESSION (IIFE) 

// The use of iffe its run first of the page for use Ex. db Connection

//Remove global scope Polution for use IIFE

// =========================================This is Question =======================
(function chai(){
    // NAMED IIFE 
    console.log("DB CONNECTED")
})();


(function test(){
    console.log("DB CONNECTED SUCCESSFULLY")
})()