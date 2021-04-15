$(function(){
    //-------------------[ Initialization area ]-------------------//
    var JS_Select_Class_Code_Value = '';
    var JS_Select_WorkOut_Type_Value = '';
    var JS_Input_WorkOut_Title = '';
    var JS_Select_Room = '';
    var JS_Input_WorkOut_description = '';

    $('#Select_Class').show();
    $('#Select_Workout_Type').hide();
    $('#Insert_Data').hide();
    $('#Select_Room').hide();
    $('#Make_Workout').hide();
    //-------------------------------------------------------------//
    // radioVal = $('input[name="customRadio"]:checked').val();
    // checkVal = $('input:checkbox[name="Select_Class_CB"]:checked').val();
    // CD = $('#form2-name').val();
    // $('.J_Selected_Class').text('과제 종류 : ' + radioVal);
    //-------------------[ Button detection area ]-------------------//
    // Next function
    $("#Select_Class_Next_Button").click(function(){
        $('.progress-bar').css('width', '40%').attr('aria-valuenow', 40);
        $('#Select_Class').hide();
        $('#Select_Workout_Type').show();
        $('#Insert_Data').hide();
        $('#Select_Room').hide();
        $('#Make_Workout').hide();
    })

    $("#Select_Workout_Type_Next_Button").click(function(){
        $('.progress-bar').css('width', '60%').attr('aria-valuenow', 60);
        $('#Select_Class').hide();
        $('#Select_Workout_Type').hide();
        $('#Insert_Data').show();
        $('#Select_Room').hide();
        $('#Make_Workout').hide();
    })

    $("#Insert_Data_Next_Button").click(function(){
        $('.progress-bar').css('width', '80%').attr('aria-valuenow', 80);
        $('#Select_Class').hide();
        $('#Select_Workout_Type').hide();
        $('#Insert_Data').hide();
        $('#Select_Room').show();
        $('#Make_Workout').hide();
    })

    $("#Select_Room_Next_Button").click(function(){
        JS_Select_Class_Code_Value = $('#Input_ClassCode').val();
        JS_Select_WorkOut_Type_Value = $('#Input_WorkoutType').val();
        JS_Select_Room = $('#Input_Class_Room').val();
        JS_Input_WorkOut_Title = $('#Input_Workout_Title').val();
        JS_Input_WorkOut_description = $('#Input_Workout_Description').val();

        $('.J_WorkOut_Title').text('과제 제목 : ' + JS_Input_WorkOut_Title);
        $('.J_WorkOut_Desc').text('과제 설명 : ' + JS_Input_WorkOut_description);
        $('.J_Selected_Course').text('선택한 과목 : ' + JS_Select_Class_Code_Value);
        $('.J_Selected_Room').text('할당된 반 : ' + JS_Select_Room);
        $('.J_Selected_Type').text('과제 종류 : ' + JS_Select_WorkOut_Type_Value);

        $('.progress-bar').css('width', '100%').attr('aria-valuenow', 100);
        $('#Select_Class').hide();
        $('#Select_Workout_Type').hide();
        $('#Insert_Data').hide();
        $('#Select_Room').hide();
        $('#Make_Workout').show();
    })

    // Back function
    $("#Select_Workout_Type_Back_Button").click(function(){
        $('.progress-bar').css('width', '20%').attr('aria-valuenow', 20);
        $('#Select_Class').show();
        $('#Select_Workout_Type').hide();
        $('#Insert_Data').hide();
        $('#Select_Room').hide();
        $('#Make_Workout').hide();
    })
    
    $("#Insert_Data_Back_Button").click(function(){
        $('.progress-bar').css('width', '40%').attr('aria-valuenow', 40);
        $('#Select_Class').hide();
        $('#Select_Workout_Type').show();
        $('#Insert_Data').hide();
        $('#Select_Room').hide();
        $('#Make_Workout').hide();
    })
    
    $("#Select_Room_Back_Button").click(function(){
        $('.progress-bar').css('width', '60%').attr('aria-valuenow', 60);
        $('#Select_Class').hide();
        $('#Select_Workout_Type').hide();
        $('#Insert_Data').show();
        $('#Select_Room').hide();
        $('#Make_Workout').hide();
    })

    $("#Make_Workout_Back_Button").click(function(){
        $('.progress-bar').css('width', '80%').attr('aria-valuenow', 80);
        $('#Select_Class').hide();
        $('#Select_Workout_Type').hide();
        $('#Insert_Data').hide();
        $('#Select_Room').show();
        $('#Make_Workout').hide();
    })
    //--------------------------------------------------------------//
    
});
