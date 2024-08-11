$(document).ready(function() {
    // Read mobile names from mobiles_names.txt
    var mobileNames = [];
    $.ajax({
      url: "mobiles_names.txt",
      dataType: "text",
      success: function(data) {
        mobileNames = data.split("\n");
      }
    });
  
    // Autocomplete functionality
    $("#search").autocomplete({
      source: mobileNames,
      minLength: 2
    });
  
    // Filter functionality on search change
    $("#search").on("keyup change", function() {
      var searchTerm = $(this).val().toLowerCase();
      var filteredResults = $("#results").empty(); // Clear previous results
  
      // Iterate through each div and filter based on search term
      $("div").each(function() {
        var mobileName = $(this).find("h1").text().toLowerCase();
        if (mobileName.indexOf(searchTerm) !== -1) {
          $(this).appendTo(filteredResults);  // Append matching divs
        }
      });
    });
  });
  