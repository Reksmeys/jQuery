// $(function(){
//    $('button').click(function(){
//     //----------------------jquery get
//     //   console.log($('#username').val())
//    // console.log($('p').html())
//   // console.log($('p').text())
//   //-------------------jquery set
//   $('#username').val('Hello Dolly')
//   $('img').attr('src', "https://vignette.wikia.nocookie.net/party-ninja/images/e/e4/HackerGirl1.jpg/revision/latest?cb=20131130204009")

//   $("p").text(function(i,origText){
//     return "Old text: " + origText + 
//     " New text: Hello world! (index: " + i + ")"
//   });


//    }) 

// })


$(function () {
    $('#showModal').click(function () {
        //show modal
        $('#modalArticle').modal('show')
        $('#titleModal').text("Add")
        $('#idUser').val("")
        $('#username').val("")
        $('#phone').val("")

    })
    //handle when click save
    $('#save').click(function () {
        let article = {
            id: $('#idUser').val(),
            fname: $('#username').val(),
            lname: $('#phone').val()
        }
        if ($('#titleModal').text() == "Add"){
            insertNewArticle(article)
        }else{
            updateArticle(article)
        }
        
    })
})

function insertNewArticle(article) {
    //create tr and td 
    var content = ""
    content = `
        <tr>
            <th>${article.id}</th>
            <td>${article.fname}</td>
            <td>${article.lname}</td>
            <td><button class="btn btn-danger" onclick="deleteArticle(this)"><i class="fas fa-trash"></i></button>
            <button class="btn btn-primary" onclick="editArticle(this)"><i class="fas fa-edit"></i></button></td>
        </tr>
    `
    $('tbody').append(content)
    toastr.info("successfully added")
    $('#modalArticle').modal('hide')
}

function deleteArticle(btn) {
    // console.log(btn)
    let c = confirm("Are you sure?")
    if (c == true) {
        let row = $(btn).parents('tr')
        row.remove()
        toastr.success("succesfully deleted")
    }
}
function editArticle(btn){
    $('#modalArticle').modal('show')
    $('#titleModal').text("Update")
    $('#idUser').val($(btn).parent().siblings('th').text())
    console.log($(btn).parent().siblings('td').eq(0).text());
    $('#username').val($(btn).parent().siblings('td').eq(0).text())
    $('#phone').val($(btn).parent().siblings('td').eq(1).text())

    let row = $(btn).parents('tr')
    row.addClass('rowShouldUpdate')

}
function updateArticle(article){
    var content = ""
    content = `
            <th>${article.id}</th>
            <td>${article.fname}</td>
            <td>${article.lname}</td>
            <td><button class="btn btn-danger" onclick="deleteArticle(this)"><i class="fas fa-trash"></i></button>
            <button class="btn btn-primary" onclick="editArticle(this)"><i class="fas fa-edit"></i></button></td>
       
    `
    $('.rowShouldUpdate').html(content)
    toastr.info("update sucessfully")
    $('#modalArticle').modal('hide')
}