$(document).ready(function() {
  // Add pointer to all table cells except the first column
  $("td:not(:nth-child(1))").each(function() {
    if ($(this).text().trim() !== "Not Available") {
      $(this).css("cursor", "pointer"); 
      $(this).on("click", function() {
        $(this).toggleClass("highlight");
      });
    }
  });
  
  // Add styling for the highlight class
  $("head").append(`
    <style>
      .highlight {
        background-color: lightgreen;
        color: white;
      }
    </style>
  `);
});

$(document).ready(function() {
  $("td:not(:nth-child(1))").click(function() {
      var content = $(this).text(); 
      var columnIndex = $(this).index();
      var cliffSite = $("th").eq(columnIndex).text(); 

      if (content != "Not Available") { 
          // Toggle class when cell is selected/unselected
          $(this).toggleClass("tdhighlight"); 

          if ($(this).hasClass("tdhighlight")) { 
              $("#displaySelected").css("visibility", "visible"); 
              $("#displaySelected").css("margin-top", "2em");

              // Append content and cliff site only if not already in the result box
              if ($('#result').find("p:contains('" + content + "')").length === 0) {
                  $('#result').append("<p>" + content + " at " + cliffSite + "</p>"); 
              }
          } else { 
              // Remove the entry if cell is unselected
              $('#result p:contains("' + content + '")').remove();

              // Hide display box if no activities are left
              if ($('#result').children().length === 0) {
                  $("#displaySelected").css("visibility", "hidden");
                  $("#displaySelected").css("margin-top", "0");
              }
          }
      }
  });
});


