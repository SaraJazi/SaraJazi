// $(document).ready(function(){
//     console.log('jquery is working')
//     $("#BtnMenu").click(function(e){
//         e.preventDefault()
//         $("#Menu").animate({
//             marginLeft:'0'
//         }).html(`<ol>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//     </ol>`)
//     })
// })
$(document).ready(function(){
        console.log('jquery is working')
        $("#BtnMenu").click(function(e){
            e.preventDefault()
            $("#Menu").fadeIn(2000)
            .html(`<ol>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>`)
    })
})
