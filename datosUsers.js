let url = "https://jsonplaceholder.typicode.com/users";

const obtnerUsuarios = async () => {
    try{
        let response = await fetch(url);
        if (!response.ok){
            throw new Error("Ocurrio un error al obtener los usuarios");
        }
        let data = await response.json();
        pintarUsuarios(data);
    }   catch (error){
        console.log(error);
    }
};
obtnerUsuarios();

const pintarUsuarios = (data) =>{
    let body = "";
    for (let i = 0; i<data.length; i++)
    {
        body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`;
    }
    document.getElementById("data").innerHTML = body;
};