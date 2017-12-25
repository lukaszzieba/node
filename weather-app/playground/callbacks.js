var getUser = (id, callback) => {
    var user = {
        id: 22,
        name: 'asd'
    }

    setTimeout(() => {
        callback(user);
    }, 3000);
}


getUser(22, (user) => {
    console.log(user);
})