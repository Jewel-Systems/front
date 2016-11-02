$(document).ready(function() {
  $('form#addNewDevice').submit(function(event) {
    var data = $(this).serializeArray();
    if (data[0].value === null) {
      errorMsg("Please enter a serial number for the device");
      $('div.modal#addDevice').modal('toggle');
    } else {
      $.ajax({
        url: domain + "device",
        type: "POST",
        data: '{"serial_no" : "' +  data[0].value + '", "type" : "' + data[1].value + '", "is_active" : ' + data[2].value + '}',
        contentType: "application/json",
        success: function(result, status, xhr) {
          $('.available-devices tbody').empty();
          getDevices();
          statusMsg("Added a new Device");
          $('div.modal#addDevice').modal('toggle');
        },
        error: function(xhr, status, error) {
          var response = JSON.parse(xhr.responseText);
          errorMsg(response.error);
        }
      });
    }
    event.preventDefault();
  });
});
