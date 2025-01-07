
let sharedfile = document.getElementById("sharedfile");
let typing_user = document.getElementById("who-type");
const client = new WebSocket("ws://localhost:8080");

let userdata = { username: "",data:""};

userdata.username = prompt("enter your name");
client.onopen = (event) => {
    console.log("hi server");
};

client.onmessage= async(event)=>{
    shared_data =  await JSON.parse(await event.data.text());
    if(shared_data.username !=userdata.username)
    {
        typing_user.innerText = `${shared_data.username} is typing...`;

    }
    sharedfile.value = shared_data.data ;
}
sharedfile.addEventListener("input", (e) => {
    userdata.data = e.target.value;
    client.send(JSON.stringify(userdata));

});
