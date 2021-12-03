import axios from 'axios';

function getInMemoryBugs(){
    const inMemoryBugs = [
        {
            id : 1,
            name : 'Server commuication failure',
            isClosed : false,
            createdAt : new Date()
        },
        {
            id : 2,
            name : 'Data integrity checks failed',
            isClosed : true,
            createdAt : new Date()
        },
        {
            id : 3,
            name : 'User actions not recognized',
            isClosed : false,
            createdAt : new Date()
        },
    ]
    return inMemoryBugs;
}


function load(){
    const action = { type : 'BUGS_LOAD'};
    return action;
}

export default load;