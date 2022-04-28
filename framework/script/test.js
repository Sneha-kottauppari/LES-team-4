function feedback_Form(){
    document.getElementById("feedbackForm").style.display="block";
}


function myclick(){
    window.location.href="/framework/introduction.html";  

}

function home(){
    window.location.href="/framework/introduction.html";  

}
function feedback(){
    window.location.href="/framework/feedback.html";  

}

// document.addEventListener('DOMContentLoader', function(){
//     document.querySelector('button').onclick=a;
// })

  
function myChart(){
    $("#1").click(function(){
        $("#myChart").show();
        }); 
    $("#1").mouseenter(function(){
        $('#myChart2').hide();
        });

var xValues = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
var yValues = [2,4, 1, 3, 10, 11,12];
var barColors = ["red", "green","blue","orange","brown","yellow"];

new Chart("myChart",{

    
    type: "bar",

    data: {
    labels: xValues,
    datasets: [{
        backgroundColor: barColors,
        data: yValues
    }]
    },

    options: {
    responsive: true,
    legend: {display: false},
    title: {
        display: true,
        text: "Weeks VS Productive Hours"
    }
    }
    
});}

 function myChart2(){
    
    $("#2").mouseenter(function(){
        $('#myChart2').show();
        });
    $("#2").mouseenter(function(){
        $('#myChart').hide();
        });
   
    var xValues = ["January", "Febraury", "March", "April", "May","June","July", "August","September","October", "November","December"];
    var yValues = [50,40, 50, 65, 48, 48,46,50,40, 50, 65, 30];
    var barColors = ["red", "green","blue","orange","brown","yellow","red", "green","blue","orange","brown","yellow"];

    new Chart("myChart2",{
        type: "bar",

        data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
        },

        options: {
        responsive: true,
        legend: {display: false},
        title: {
            display: true,
            text: "Months VS Productive Hours"
        }
        }
        
    });
    }

//     $('#cross').on('click', function (e) {
//         $("#cross-menu").addClass("show");
// });

// $(document).ready(function(){
//     $('.dropdown-submenu a.test').on("click", function(e){
//       $(this).next('ul').toggle();
//       e.stopPropagation();
//       e.preventDefault();
//     });
//   });