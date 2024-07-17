// Left Menu
$(".openNav").on("click", function () {
  $("#leftMenu").animate({ width: "250px" }, 100);
  $("#contentMenu").animate({ marginLeft: "250px" }, 100);
});

$(".closebtn").on("click", function () {
  $("#leftMenu").animate({ width: "0px" }, 100);
  $("#contentMenu").animate({ marginLeft: "0px" }, 100);
});

// Accordion
$(".toggle").on("click", function () {
  $(".inner").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

/*counter*/
window.onload = function () {
  countDownToTime("10 october 2021 9:56:00");
};

function countDownToTime(countTo) {
  let futureDate = new Date(countTo);
  futureDate = futureDate.getTime() / 1000;
  let newData = new Date();
  newData = newData.getTime() / 1000;
  timeDifference = futureDate - newData;
  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );
  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${mins} m`);
  $(".seconds").html(`${secs} s`);
  setInterval(function () {
    countDownToTime(countTo);
  }, 1000);
}

/*contact*/
var maxLength = 100;
$("textarea").on("keyup", function () {
  var length = $(this).val().length;
  var amount = maxLength - length;
  if (amount <= 0) {
    $("#chars").text("your available character finished");
  } else {
    $("#chars").text(amount);
  }
});
