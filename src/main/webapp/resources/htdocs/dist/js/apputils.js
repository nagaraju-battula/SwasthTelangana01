function processRequest(url, data, targetId) {
    //var promodomain ='http://swasthtelangana';
    // var promodomain = 'http://localhost';
   var promodomain =  'http://' + window.location.host;

    //var promodomain = getDomainName('promoadmin');
    jQuery.ajax({
        type: "POST",
        url: promodomain + url,
        data: data,
        /*
         * headers: { Accept: "application/json" },
         */
        contentType: "application/json; charset=UTF-8",
        success: function (result) {
            if (result != null) {
                $("#searchResultdiv").empty();
                $("#" + targetId).empty().append(result);
            } else if (result.status == "FAILURE") {
                $('#errorMessage').text("error in emailID updating");
            }
        }
    });
}

function processFileRequest(url, data, targetId) {
    var promodomain = getDomainName('promoadmin');
    try {
        jQuery.ajax({
            type: "GET",
            url: promodomain + url,
            data: data,
            /*
             * headers: { Accept: "application/json" },
             */
            contentType: "application/json; charset=UTF-8",
            success: function (result) {
                if (result != null) {
                    // $("#" + targetId).empty().append(result);
                    window.location.href = result.url;
                } else if (result.status == "FAILURE") {
                    $('#errorMessage').text("error in emailID updating");
                }
            }
        });
    } catch (err) {
        console.log("Error:" + err);
    }
}

function OpenInNewTab() {

    var win = window.open('D://mysql.stx', '_blank');
    win.focus();
}

function submitForm(url, formId, targetId) {
    if ('NO-DATA' != formId && isFormValid()) {
        formData = JSON.stringify($("#" + formId).serializeObject());
        processRequest(url, formData, targetId);
    } else if ('NO-DATA' == formId) {
        var formData = {};
        processRequest(url, formData, targetId);
    } else if ('searchFormByDate' == formId) {
        formData = JSON.stringify($("#" + formId).serializeObject());
        processFileRequest(url, formData, targetId);
    }
}

$.fn.serializeObject = function () {
    "use strict";
    var result = {};
    var subResult = [];
    var arrayIndex = 0;

    var extend = function (i, element) {
        try {
            var name = element.name;
            var value = element.value;
            /*
             * All the node names contains . should be in this format
             * form.clinic.name
             */
            if (name.indexOf('.') > -1) {
                var property = name.substring(0, name.lastIndexOf("."));
                subResult[arrayIndex++] = property;
            } else {
                result[name] = value;
            }
        } catch (err) {
            console.log("Error" + err);
        }
    };
    /* Extend Function to get the json of any kind of form */
    $.each(this.serializeArray(), extend);

    if (subResult.length > 0) {
        var uniqueElements = $.unique(subResult);
        $.each(uniqueElements, function (index, value) {
            var childNodes = {};
            $.each($("[name^='" + value + "']"), function (k, v) {
                var nodeName = v.name;
                var node = nodeName.substring(nodeName.lastIndexOf(".") + 1,
                    nodeName.length);
                childNodes[node] = v.value;
            });
            var beanNode = value
                .substring(value.indexOf(".") + 1, value.length);
            result[beanNode] = childNodes;
        });
    }
    return result;
};

function getDomainName(requiredDomain) {
    // return 'http://swasthtelangana.com:8080';
    return 'http://localhost';

}

/*
 * Code to hide error divs 
 * 
 */
$(document).ready(function () {
    $("#resultDev").hide();
});

$(document).ready(function () {
    $("p").click(function () {
        alert("The paragraph was clicked.");
    });
});

/*
 * Code for Drop Down
 */
$(document.body).on(
    'click',
    '.dropdown-menu li',
    function (event) {
        var $target = $(event.currentTarget);
        $target.closest('.btn-group').find('[data-bind="label"]').text(
            $target.text()).end().children('.dropdown-toggle')
            .dropdown('toggle');

        return false;

    });

function isFormValid() {
    var isValid = true;
    $('li', $(this).parents('form')).removeClass('has-error');
    $('label.has-error').remove();

    $('.required').each(function () {
        if ($(this).val() == '') {
            isValid = false;
            $(this).parent().addClass('has-error').append('<label class="control-label" for="inputError"><i class="fa fa-times-circle-o"></i> Input with error</label>');
        }
    });
    $('.onlyNumber').each(function () {
        if (!isANumber($(this).val())) {
            isValid = false;
            $(this).parent().addClass('has-error').append('<label class="control-label" for="inputError"><i class="fa fa-times-circle-o"></i>Required only Number</label>');
        }
    });
    $('.onlyMobileNum').each(function () {
        if (!isOfLength($(this).val(), 10) || !isANumber($(this).val())) {
            isValid = false;
            $(this).parent().addClass('has-error').append('<label class="control-label" for="inputError"><i class="fa fa-times-circle-o"></i>Mobile number must be a number with size 10.</label>');
        }
    });
    return isValid;
}

function isOfLength(str, length) {
    if (str.length == length) {
        return true;
    }
    return false;
}

function isANumber(numStr) {
    var regExp = /^[0-9]+$/;
    if (regExp.test(numStr)) {
        return true;
    }
    return false;
}
function myfunction() {

    var cityName = document.getElementById("patient.patientAddress.cityName").value;
    document.getElementById("patient.patientCurrentAddress.cityName").value = cityName;

    var district = document.getElementById("patient.patientAddress.district").value;
    document.getElementById("patient.patientCurrentAddress.district").value = district;

    var state = document.getElementById("patient.patientAddress.state").value;
    document.getElementById("patient.patientCurrentAddress.state").value = state;

    var state = document.getElementById("patient.patientAddress.address").value;
    document.getElementById("patient.patientCurrentAddress.address").value = state;
}

$(function () {
    $('#patientProfiles').DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": false,
        "ordering": true,
        "info": true,
        "autoWidth": false
    });
});



