let _dateObj = new Date();

let _date = _dateObj.getDate();
let _month = _dateObj.getMonth();
let _year = _dateObj.getFullYear();
let _day = _dateObj.getDay();

const currdate  = document.getElementById('date');

switch (_month) {
    case 0:
        _month = 'Jan'
        break;
    case 1:
        _month = 'Feb'
        break;
    case 2:
        _month = 'Mar'
        break;
    case 3:
        _month = 'Apr'
        break;
    case 4:
        _month = 'May'
        break;
    case 5:
        _month = 'Jun'
        break;
    case 6:
        _month = 'Jul'
        break;
    case 7:
        _month = 'Aug'
        break;
    case 8:
        _month = 'Sep'
        break;
    case 9:
        _month = 'Oct'
        break;
    case 10:
        _month = 'Nov'
        break;
    default:
        _month = 'Dec'
        break;
}

switch (_day) {
    case 0:
        _day = 'Sunday'
        break;
    case 1:
        _day = 'Monday'
        break;
    case 2:
        _day = 'Tuesday'
        break;
    case 3:
        _day = 'Wednesday'
        break;
    case 4:
        _day = 'Thursday'
        break;
    case 5:
        _day = 'Friday'
        break;
    default:
        _day = 'Saturday'
        break;
}

currdate.innerHTML = `${_date}-${_month}-${_year} <br> ${_day}`











const _icon = document.getElementById('icon');
const _addContentOverlay = document.querySelector('.add_content_overlay');
const _contentBox = document.querySelector('.content-box');
const _closeIcon = document.getElementById('close-icon');
const _addBtn = document.getElementById('add-btn');
const _title = document.getElementById('title');
const _note = document.getElementById('note');
const _titleAlert = document.querySelector('.title-alert');
const _noteAlert = document.querySelector('.note-alert');
const _container = document.querySelector('.container');
const _menuIcon = document.getElementById('menu-icon');
const _contentHeading = document.querySelector('.content-heading');

// ----------content-box------------ 
_icon.addEventListener('click', ()=>{
    _addContentOverlay.style.height='100%';
    _contentBox.style.transform='scale(1)';
});

_closeIcon.addEventListener('click', ()=>{
    _addContentOverlay.style.height='0';
    _contentBox.style.transform='scale(0)';
    _title.value=''
    _note.value=''
    _titleAlert.innerHTML=''
    _noteAlert.innerHTML=''
})


// ---------add-item-js---------------- 

_addBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    if(_title.value==''){
        _titleAlert.innerHTML='Please enter the title'   
    }
    else if(_note.value==''){
        _noteAlert.innerHTML='Please enter the note'
    }
    else{
        let _noteDate = `${_date} ${_month} ${_year}`
        let _titleVal = _title.value
        let _noteVal = _note.value
        _addContentOverlay.style.height='0';
        _contentBox.style.transform='scale(0)'; 
        let _noteBox = ` <div class="add-note-box">
                            <div class="heading-box">
                                <h1 class="heading">${_titleVal}</h1>
                            </div>
                            <div class="note-section">
                                <p class="para">${_noteVal}</p>
                            </div>
                            <div class="footer">
                                <div class="note-date-box">
                                    <p id="Notedate">${_noteDate}</p>
                                </div>
                            <div class="option">
                                <i class="fa-solid fa-ellipsis" id="menu-icon" onclick=menu(this)></i>
                                <div class="update-menu">
                                <p id="edit" onclick=edit(this)> <span><i class="fa-solid fa-pen"></i> </span>Edit</p>
                                <p id="delete" onclick=deleteNote(this)><span><i class="fa-solid fa-trash-can"></i></span> Delete</p>
                            </div>
                            </div>
                            </div>
                        </div>`
        _container.insertAdjacentHTML('beforeend', _noteBox)
    }  
    _title.value=''
    _note.value=''
    _titleAlert.innerHTML=''
    _noteAlert.innerHTML=''
})


// ----------update-menu show----------------
const menu=(elem)=>{
    if(elem.nextElementSibling.style.transform=='scale(0)'){
        elem.nextElementSibling.style.transform='scale(1)'
    }
    else{
        elem.nextElementSibling.style.transform='scale(0)'
    }
}

// ----------------delete-note--------------
const deleteNote=(elem)=>{
    let _addNoteBox = elem.parentNode.parentNode.parentNode.parentNode

    _addNoteBox.remove();
}


// ----------------edit-button---------------

const edit=(elem)=>{
        _addContentOverlay.style.height='100%';
        _contentBox.style.transform='scale(1)';
        _contentHeading.childNodes[1].innerHTML = 'Update a Note'
        let _para = elem.parentNode.parentNode.parentNode.previousElementSibling.childNodes[1].innerHTML;
        let _heading = elem.parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.childNodes[1].innerHTML
        
        _note.value=_para
        _title.value = _heading

    
        _addBtn.onclick =()=>{
            let _oldNote = elem.parentNode.parentNode.parentNode.parentNode
            _oldNote.remove()
        }

        _closeIcon.onclick = ()=>{
            menu()
        }
}




// -----------form-input-js------------- 

_title.addEventListener('keyup', ()=>{
    if(!_title.value==''){
        _titleAlert.innerHTML='Data Found'
        _titleAlert.style.color='green'
    }
    else{
        _titleAlert.innerHTML='Please enter the title'
        _titleAlert.style.color='red'
    }
})

_note.addEventListener('keyup', ()=>{
    if(!_note.value==''){
        _noteAlert.innerHTML='Data Found'
        _noteAlert.style.color='green'
    }
    else{
        _noteAlert.innerHTML='Please enter the title'
        _noteAlert.style.color='red'
    }
})









