
     $(document).ready(function () {
         document.title = "Reporting View Data ";
         $("#example").DataTable({
             dom: '<"dt-buttons"Bf><"clear">lirtp',
             paging: true,
             autoWidth: true,
             buttons: [
                 "copyHtml5",
                 "csvHtml5",
                 "excelHtml5",
                 "pdfHtml5",
                 "print"
             ],
             initComplete: function (settings, json) {
                 $(".dt-buttons .btn-group").append(
                     '<a id="cv" class="btn btn-primary" href="#">CARD VIEW</a>'
                 );
                 $("#cv").on("click", function () {
                     if ($("#example").hasClass("card")) {
                         $(".colHeader").remove();
                     } else {
                         var labels = [];
                         $("#example thead th").each(function () {
                             labels.push($(this).text());
                         });
                         $("#example tbody tr").each(function () {
                             $(this)
                                 .find("td")
                                 .each(function (column) {
                                     $("<span class='colHeader'>" + labels[column] + ":</span>").prependTo(
                                         $(this)
                                     );
                                 });
                         });
                     }
                     $("#example").toggleClass("card");
                 });
             }
         });
     });
