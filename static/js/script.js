if(document.getElementsByTagName('tr').length==1){
    tab=document.getElementById("todotable");
    document.getElementById("h1").style.visibility="hidden";
    tab.style.visibility='hidden';
}
var row=null;
function addtask(){
    document.getElementById("h1").style.visibility="visible";
    document.getElementById('todotable').style.visibility="visible";
    data=fetchdata();
    // alert(data["duedate"]);
    if (row==null){
        add_data_table(data);
           }
         else{
            todoupdate(data); 
         }
     
    clearform();
}

function fetchdata(){
    var data={};
    data["topic"]=document.getElementById("topic").value;
    data["description"]=document.getElementById("description").value;
    data["duedate"]=document.getElementById("duedate").value;
    return data;
}
function add_data_table(data){
    var table=document.getElementById("tbody");
    var row=table.insertRow(table.length);
    slno=document.getElementsByTagName('tr').length;
    t1=row.insertCell(0)
    t1.innerHTML=Number(slno)-1;
    td0=row.insertCell(1)
    td0.innerHTML=data.topic;
    td1=row.insertCell(2)
    td1.innerHTML=data.description;
    td2=row.insertCell(3)
    td2.innerHTML=data.duedate;
    td3=row.insertCell(4);
    td3.innerHTML='<input type="checkbox" class="check"  onchange="checkboxvalidation(this)">'
    td4=row.insertCell(5)
    td4.innerHTML='<button class="btn btn-primary edit"onClick="editdata(this)">edit</button>&nbsp<button onClick="tododelete(this)"  class="btn btn-danger">Delete</button>';
    slno=document.getElementsByTagName('tr').length;
    t1.innerHTML=Number(slno)-1;
}

function clearform(){
    document.getElementById("topic").value="";
    document.getElementById("description").value="";
    document.getElementById("duedate").value="";
}

function editdata(data){
    row=data.parentElement.parentElement;
    document.getElementById("topic").value=row.cells[1].innerHTML;
    document.getElementById("description").value=row.cells[2].innerHTML;
    document.getElementById("duedate").value=row.cells[3].innerHTML;
}
function todoupdate(data){
    row.cells[1].innerHTML=data.topic;
    row.cells[2].innerHTML=data.description;
    row.cells[3].innerHTML=data.duedate;
    row=null;
}
function tododelete(data){
    row=data.parentElement.parentElement;
    document.getElementById("todotable").deleteRow(row.rowIndex);
    clearform();
    if(document.getElementsByTagName('tr').length==1){
        document.getElementById('todotable').style.visibility='hidden';
        document.getElementById("h1").style.visibility="hidden";
    }


    row=null;
    slno=document.getElementsByTagName('tr').length;
    rows=document.querySelectorAll('#todotable tr')
    for (i = 1;  i< slno+1; i++) {
        cell=rows[i].cells[0];
        cell.innerHTML=i;
    }
}
function checkboxvalidation(data){
      row=data.parentElement.parentElement;
    chechbox=document.querySelectorAll('.check')
    editbtn=document.querySelectorAll('.edit')
    for(i=0; i< chechbox.length;i++){
        chechbox[i].id=`check-${i}`;
        if(chechbox[i].id==data.getAttribute('id')){
            editbtn[i].id=`edit-${i}`;
            editattribute= editbtn[i].id;
        }

    }
    checkattribute=data.getAttribute('id');
    check=document.getElementById(checkattribute);
    edit=document.getElementById(editattribute);
    
    slno=document.getElementsByTagName('tr').length;
    if(check.checked==true){
        row.style.backgroundColor="rgb(166, 252, 209)";
        check.disabled="true";
        edit.style.display="none";
    }
    row=null;
}



