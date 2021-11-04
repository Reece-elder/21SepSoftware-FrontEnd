'use strict';

// Delete Request - ID of the thing we want to delete
// Isnt going to be submitted as a body, it is going to be submitted as a URL parameter 

// Get by ID    - URL or Query parameters
// Update by ID - URL or Query parameters

let deleteRequest = (type, category) => {

    fetch(`https://jsonplaceholder.typicode.com/posts/${type}/${category}}`, {
        method : `DELETE` 
    })
    .then((response) => {
        if(response.status !== 200){
            console.error(`Status: ${response.statusText}`);
            return;
        }
        response.json()
        .then((data) =>{
            console.log(data);
        });
    });

};

deleteRequest(7);