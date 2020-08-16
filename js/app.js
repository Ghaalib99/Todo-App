$(document).ready(function() {
    $('.project-cont').tabs();
    $('#main ul').sortable({axis: 'x', containment: '#main ul'});
    $('.content-wrap ol').sortable({axis: 'y', containment: '.content-wrap ol'});


    
/*===============================
=======Add Project Button
================================*/
$('.project-btn').on('click', function() {
    $('.project-dialog').dialog({width: 400, resizable: false, modal: true,
         buttons:{
             //Add new project
             'Add project': function() {
                 var projectName = $('.new-project').val();
                 var tabCount = $('.project-cont').tabs().find('#main > ul > li').length;
                 
                 $('<li id="'+ (tabCount + 1) +'"><a href="#' + projectName + '">' + projectName + '</a></li>')
                 .appendTo('#main ul');

                 //Add a corresponding "New Task Space" to the newly added project
                 $('<ol id="' + projectName + '"></ol>').appendTo('.content-wrap');

                 //Refresh, make new tab the active tab
                 $('.project-cont').tabs('refresh');
                 var tabNum = $('.project-cont .ui-tab-nav li').length;
                 $('.project-cont').tabs('option', 'active', tabNum - 1);

                 //Close
                 $('.new-project').val('');
                 $(this).dialog('close');
             },

             //Cancel
             'Cancel': function() {
                 $('.new-project').val('');
                 $(this).dialog('close');
             }
         }});
})

/*===============================
=======Add Task Button
================================*/
$('.task-btn').on('click', function() {
    $('.task-dialog').dialog({width: 400, resizable: false, modal: true,
         buttons: {
             //Add new task
             'Add task': function() {
                 $('.project-cont').tabs('refresh');
                 var activeTab = $('.project-cont').tabs('option', 'active');
                 var title = $('#main > ul > li#' + (activeTab + 1) +' > a').attr('href');

                 //Error
                 $('.project-cont ' + title).append('<li><input type="checkbox">' + $('.new-task').val() + '</li>');
                 $('.new-task').val('');
                 

                $('.new-task').val('');
                $(this).dialog('close');
             },
             

             //Cancel
             'Cancel': function() {
                 $('.new-task').val('');
                 $(this).dialog('close');
             }
         }})
})















});

