export const setupDatePicker = () =>{
    if($("#modalBooking")){
        console.log('::careio:: modal booking found')
        // @url: https://jqueryui.com/datepicker/
        // @url: https://formden.com/blog/date-picker
        // @url: https://bootstrap-datepicker.readthedocs.io/en/stable/
        const container = "#careio-datepicker"
        
        const options = {
            todayHighlight: true,
            autoclose: true,
            beforeShow: function(){
                setTimeout(()=>{
                    $("#ui-datepicker-div").css({
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        marginTop: "-50px",
                        marginLeft: "-100px",
                        zIndex: 2000,
                    })
                }, 10)
            }
        }    

        $('#bookingDatepicker').datepicker(options)

        $( "#bookingDatepicker" ).datepicker( "option", "dateFormat", "D, d M y" );


    

    }
}