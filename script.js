$(function(){
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Add data
    $("#add-button").on("click", function(e){
        e.preventDefault();
        const empId = $("#empId").val();
        const name = $("#empName").val();
        const email = $("#empEmail").val();
        const department = $("#empDepartment").val(); 
        const place = $("#empPlace").val();
        const salary = $("#empSalary").val();

        if (empId === '' || name === '' || email === '' || department === '' || place === '' || salary === '') {
            alert("Please fill all the fields");
        }  
        else if (!isValidEmail(email)) {
            alert("Please enter a valid email address");
        }
        else {
            var card = $("<div class='card'></div>");
            card.append("<h2>Employee ID: " + empId + "</h2>");
            card.append("<p>Name: " + name + "</p>");
            card.append("<p>Email: " + email + "</p>");
            card.append("<p>Department: " + department + "</p>"); 
            card.append("<p>Place: " + place + "</p>");
            card.append("<p>Salary: " + salary + "</p>");
            card.append("<div class='buttons'><button class='edit-button'>Edit</button><button class='delete-button'>Delete</button></div>");
            $("#output").append(card);
            $("#empId").val("");
            $("#empName").val("");
            $("#empEmail").val("");
            $("#empDepartment").val(""); 
            $("#empPlace").val("");
            $("#empSalary").val("");
        }
    });

    // Delete data
    $("#output").on("click", ".delete-button", function(){
        $(this).closest('.card').remove(); 
    });

    // Edit data
    $("#output").on("click", ".edit-button", function(){
        const card = $(this).closest('.card');
        const empId = card.find('h2').text().split(':')[1].trim();
        const name = card.find('p:eq(0)').text().split(':')[1].trim();
        const email = card.find('p:eq(1)').text().split(':')[1].trim();
        const department = card.find('p:eq(2)').text().split(':')[1].trim(); 
        const place = card.find('p:eq(3)').text().split(':')[1].trim();
        const salary = card.find('p:eq(4)').text().split(':')[1].trim();
        $("#empId").val(empId);
        $("#empName").val(name);
        $("#empEmail").val(email);
        $("#empDepartment").val(department); 
        $("#empPlace").val(place);
        $("#empSalary").val(salary);
        card.remove(); 
    });
});
