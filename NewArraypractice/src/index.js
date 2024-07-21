const Array = [{ name: "ahmad", friends: 'waseem,Ikram,jameel, aqeel,zahid', phon_no: "03012345675" },
{ name: "jamal", friends: 'ahmad,Ikram,hamza, aqeel,ali', phon_no: "03012345784" },
{ name: "raza", friends: 'waqar,saman,, aqeel,zahid', phon_no: "03012987653" }]
const newstring = 'alihh'
function mynew(Array, newstring) {
    Array.forEach(item => {
        const friendsArray = item.friends.split(',');
        const lastfriend = friendsArray[friendsArray.length -1];
        if(lastfriend=== newstring){
            console.log('here is compared name +++++++++++++++++++++++++++++ ',lastfriend)
            console.log('here is phone number +++++++++++++++++++++++++++++ ',item.phon_no)
        }
    });
}
mynew(Array, newstring)