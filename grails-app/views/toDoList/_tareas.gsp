<%@ page import="justdoit.ToDoList" %>

<div class="fieldcontain ${hasErrors(bean: toDoList, field: 'tareas', 'error')} ">
    <label for="tareas">
        <g:message code="toDoList.tareas.label" default="Tareas"/>
    </label>

    <ul class="one-to-many">
        <table data="{tableName:'tareas'}">
            <thead>
                <tr>
                    <th data="{required:true, name:'contenido', placeholder:'Required'}">Tarea</th>
                    <th data="{editable:false}">&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <g:each in="${toDoList?.tareas}" var="p" status="i">
                <tr rowId="${i}">
                    <td>${p.contenido}</td>
                    <td><r:img class="deleteRowButton" dir='images' file='skin/database_delete.png'/></td>
                </tr>
                </g:each>
            </tbody>
        </table>

        <li class="add"><a id="addTarea" href="#">Add Tarea</a></li>
    </ul>
</div>

<script>
    $(function() {
        $.metadata.setType("attr", "data");

        $("table").writetable({
            autoAddRow: false,
            rowAdded: function( event, row ) {
                console.debug("in the rowAdded callback");
                $(row).children("td").last().append('<r:img class="deleteRowButton" dir="images" file="skin/database_delete.png"/>');
            },
            rowSelected: function(event, row) {
                console.debug("in the rowSelected callback");
            },
            rowRemoved: function(event, row) {
                console.debug("in the rowRemoved callback handler");
                var rowId = $(row).attr('rowId');
                $(row).parent().append("<input type='hidden' name='tareas[" + rowId + "].deleted' value='true' />");
//                event.stopPropagation();
            }
        });

        $("#addTarea").click(function() {
            console.debug("in the click handler");
            $("table").writetable("addRow");
            return false;
        });

        $('img.deleteRowButton').on("click", function(event) {
            console.debug("in the deleteRowButton click handler");
            var target = $(event.target);
            var row = target.closest('tr');
            $('table').writetable('removeRow', event, row);
        });

    });
</script>