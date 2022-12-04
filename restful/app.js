let url = "http://localhost:22135/api/v1/books";
let xhr = new XMLHttpRequest();
xhr.addEventListener('load', reqListener);

function reqListener() {
    console.log('this.responseText:', this.responseText);
    console.log('this.status:', this.status);
    document.getElementById("area").innerHTML = this.responseText;
}

function del(){
    var id = document.getElementById("id").value;
    xhr.open('GET', url+'/del/'+id);
    document.getElementById("r").value = 'data deleted';
    xhr.send();
}

function show_all(){
    xhr.open('GET', url+'/all');
    xhr.send();
    var books = JSON.parse(xhr.responseText);
    console.table(xhr.responseText);
    document.getElementById("area").innerHTML = books;
}

function show_id(){
    var id = document.getElementById("id").value;
    xhr.open('GET', url+'/'+id);
    xhr.send();
    var books = JSON.parse(xhr.responseText);
    document.getElementById("area").innerHTML = books;
}

function insert(){
    var id = document.getElementById("id").value;
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var data = {"id":id, "title":title, "author":author};
    var json = JSON.stringify(data);
    xhr.open('POST', url);
    xhr.send(json);
    document.getElementById("r").value = 'data inserted';
}

function update(){
    var id = document.getElementById("id").value;
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var data = {"id":id, "title":title, "author":author};
    var json = JSON.stringify(data);
    xhr.open('POST', url+'/upd?id='+id+'&title='+title+'&author='+author);
    xhr.send(json);
    document.getElementById("r").value = 'data updated';
}
