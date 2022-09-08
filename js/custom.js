$("#imTalhaITExpertandSE").submit(function (e) {
    $(".site-btn > i").css('opacity', '1');

    e.preventDefault(); // avoid to execute the actual submit of the form.
    var form = $(this);
    var actionUrl = form.attr('action');

    $.ajax({
        type: "POST",
        url: actionUrl,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {
            $("#successMessage").show();
            $(".site-btn > i").css('opacity', '0');
            $('#successMessage').append(data);
            $('#imTalhaITExpertandSE  input,#imTalhaITExpertandSE  textarea').val(''); 
            setTimeout(function () {
                $('#successMessage > *').remove();
               
            }, 3000);

        }
        ,
        error: function(request, status, error){
            console.log(error);
        }
    });
});