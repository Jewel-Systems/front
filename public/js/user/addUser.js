function setPrivilege(e){$.ajax({url:domain+"user/"+e+"/privilege/mac",type:"PUT"})}$(document).ready(function(){$("form#add").submit(function(e){var a=$(this).serializeArray(),r=a[0].value,t=a[1].value,s=a[2].value+"@cedarhouse.co.za";s=s.toLowerCase();var o=a[3].value,l=a[4].value,d=a[5].value,i=0,n=!1;l==d?a[2].value.search("@")===-1&&a[2].value.search(" ")===-1?n=!0:(errorMsg("The email you have entered is invalid. Just enter the username for the email, the '@cedarhouse.co,za' will be automatically incremented."),$("div.modal#addUser").modal("toggle")):(errorMsg("The passwords don't match, please re-enter."),$("div.modal#addUser").modal("toggle")),n&&$.ajax({url:domain+"user",type:"POST",contentType:"application/json",data:'{"fname": "'+r+'", "lname": "'+t+'", "email": "'+s+'", "type": "'+o+'", "password": "'+l+'"}',success:function(e,a,r){$("table.users-table tbody").empty(),statusMsg("Added new user"),getUsers(),$("div.modal#addUser").modal("toggle"),i=e.data.id,setPrivilege(i)},error:function(e,a,r){var t=JSON.parse(e.responseText),s=$('<div class="alert alert-danger"></div>').html("<strong>Oh no!</strong> "+capitalize(t.error));$(s).insertBefore(".content")}}),e.preventDefault()})});