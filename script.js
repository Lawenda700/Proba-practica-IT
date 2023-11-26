

class PollDetails{
    poll_name="default";
    poll_title="default";
    poll_options="default";
    constructor(poll_name,poll_title,poll_options){
        this.poll_name=poll_name;
        this.poll_title=poll_title;
        this.poll_options=poll_options;
    }
     ToString(){
      return   this.poll_name+" "+this.poll_title+" "+this.poll_options;

    }
   
}
lista_polluri=[]

function createPoll(event) {
    if(currentUser){ 
     event.preventDefault();
     let  x=document.getElementById('poll-name').value;
     let  y=document.getElementById('poll-question').value;
     let  z=document.getElementById('poll-options').value;
     let obiect=new PollDetails(x,y,z)
     lista_polluri.push(obiect)
     document.getElementById("polluri_active").innerHTML+="<li>"+obiect.ToString()+"</li>";
     alert('Poll created!');
 
    }
 }
let currentUser = null;

function updateNavbar() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    if (currentUser) {
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
    } else {
        loginBtn.style.display = 'block';
        registerBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
    }
}

function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'block';
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'none';
}

function login(event) {
    event.preventDefault();
   
    currentUser = 'loggedUser';
    updateNavbar();
    closePopup('loginPopup');
    document.getElementById('poll-section').style.display = 'block';

}
function register(event) {
    event.preventDefault();
   
    currentUser = 'registeredUser';
    updateNavbar();
    closePopup('registerPopup');
    document.getElementById('poll-section').style.display = 'block';

}
function logout() {
    currentUser = null;
    document.getElementById('poll-section').style.display = 'none';
    updateNavbar();
}
