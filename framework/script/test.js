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
function yesbutton(){
    window.location.href="/framework/meetingroom.html";  

}
function OnConfirm(msg, myYes) {
    var confirmBox = $("#confirm");
    confirmBox.find(".message").text(msg);
    confirmBox.find(".yes").unbind().click(function () {
        confirmBox.hide();
    });
    confirmBox.find(".yes").click(myYes);
    confirmBox.show();
}

// document.addEventListener('DOMContentLoader', function(){
//     document.querySelector('button').onclick=a;
// })

  


function myChart(){
    $("#1").click(function(){
        $("#myChart").show();
        }); 
    $("#1").click(function(){
        $('#myChart2').hide();
        });

var xValues = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
var yValues = [2,4, 1, 3, 10, 11,12];
var barColors = ["#ff9a9e", "#ffecd2 ","#ff9a9e","#a1c4fd ","#fcb69f","#667eea "];

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
        text: "Days VS Productive Hours"
    }
    }
    
});}

 function myChart2(){
    
    $("#2").click(function(){
        $('#myChart2').show();
        });
    $("#2").click(function(){
        $('#myChart').hide();
        });
   
        var xValues = ["Day-1", "Day-2", "Day-3", "Day-4", "Day-5","Day-6","Day-7","Day-8","Day-9","Day-10","Day-11","Day-12","Day-13","Day-14","Day-15","Day-16","Day-17","Day-18","Day-19","Day-20","Day-21","Day-22","Day-23","Day-24","Day-25","Day-26","Day-27","Day-28"];
        var yValues = [2,4,1,3,10,11,12,10,9,8,2,4,1,3,10,11,12,10,9,8,2,4,1,3,10,11,12,9];
        // var barColors=["#ff9a9e", "#ffecd2 ","#ff9a9e","#a1c4fd ","#13547a ","#667eea ","#434343 ","#ff9a9e", "#ffecd2 ","#ff9a9e","#a1c4fd ","#13547a ","#667eea ","#434343 ","#ff9a9e", "#ffecd2 ","#ff9a9e","#a1c4fd ","#13547a ","#667eea ","#434343 "]
    

    new Chart("myChart2",{
        type: "bar",

        data: {
        labels: xValues,
        datasets: [{
            backgroundColor: "#fcb69f",
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
        
    });
    }