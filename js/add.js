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


$(function(){
    $('#frm').submit(function(e){
        e.preventDefault()
        let article = {
            id: $('#username').val(),
            fname: $('#phone').val(),
            lname: $('#phone').val()
        }
        insertNewArticle(article)
    })
})

function insertNewArticle(article){
    //create tr and td 
    var content = ""
    content = `
        <tr>
            <th>${article.id}</th>
            <td>${article.fname}</td>
            <td>${article.lname}</td>
        </tr>
    `
    $('tbody').prepend(content)
    // toastr.info("add success")
    // toastr.warning("erty")
    // toastr.error("error")
    toastr.info("successfully added")
}