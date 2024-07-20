$(document).ready(function() {
    function capitalizeFirstLetter(input) {
        let value = $(input).val();
        if (value) {
            $(input).val(value.charAt(0).toUpperCase() + value.slice(1).toLowerCase());
        }
    }

    $('#first-name, #middle-name, #last-name, #mother-name, #father-name').on('input', function() {
        capitalizeFirstLetter(this);
    });

    
    $(document).ready(function() {
        
        const districts = {
            delhi: ["North Delhi", "South Delhi", "East Delhi", "West Delhi"],
            maharashtra: ["South Mumbai", "North Mumbai", "East Mumbai", "West Mumbai"]
           
        };
    
        
        $('#address-state').on('input', function() {
            const stateInput = $(this).val().toLowerCase();  // input and convert to lower case
            const districtInput = $('#address-district');  // District input field
            
            districtInput.val('');  // Clear previous district input
            
            if (stateInput && districts[stateInput]) {
                const districtsForState = districts[stateInput];
                
                $('#check').text('    Districts: ' + districtsForState.join(','));
 
            }
        });
    });

});
