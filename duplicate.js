function removeDuplicateName(name) {
    let uniqName = [];
    for (let i = 0; i < name.length; i++) {
        let element = name[i];
        if (uniqName.includes(element)===false) {
            uniqName.push(element);
        }
    }
    return uniqName;
}


let myFriendsName = ['Mahin', 'Rahim', 'Rifat', 'Reduan', 'Rana','Rahim', 'Rifat', 'Mahin', 'Rahim', 'Reduan', 'Reduan', 'Rana'];

let names = removeDuplicateName(myFriendsName);
console.log(names);
