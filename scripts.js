$(document).ready(function () {
    $("#btnConvertir").click(function () {
        let cant = $("#txtCantidad").val();
        var moneda1 = $('#options1').val();
        var moneda2 = $('#options2').val();
        let url = "https://v6.exchangerate-api.com/v6/3943d8264d112bf2f07ae565/latest/"+moneda1;

        $.ajax({
            url: url,
            method: 'GET',
            success: function(data) {
                if (data.result === "success") {
                    const rates = data.conversion_rates;
                    if (rates[moneda2]) {
                        let conversionRate = rates[moneda2];
                        let convertedAmount = cant * conversionRate;
                        console.log(`1 ${moneda1} = ${conversionRate} ${moneda2}`);
                        $("#resultado").text(`${cant} ${moneda1} = ${convertedAmount} ${moneda2}`);
                    } else {
                        $("#resultado").text("Currency not found");
                    }
                } else {
                    $("#resultado").text("Failed to retrieve exchange rates");
                }
            },
            error: function(error) {
                $("#resultado").text('Error:', error);
            }
        });

    });
    
    
});