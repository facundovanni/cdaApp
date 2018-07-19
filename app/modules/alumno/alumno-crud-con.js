angular.module('cdApp.alumno').controller('BorrarAlumnoController', ['$scope', function ($form) {
    $form.submit = function (list) {
        $form.alumnos = [];

        angular.forEach(list, function (value, key) {
            if (list[key].selected) {
                $form.alumnos.push(list[key]);
            }
        });

        // SHOW THE SELECTED ITEMS IN THE EXPRESSION.
        /*  if (alumnos.length > 0)
             $form.the_list = alumnos;
         else
             $form.the_list = 'Please choose an option'; */

        $form.alumnos;
    }

    $form.showModalEditAlum = (alumno) => {
        
        $("#modalEditarAlumno").show();
        $form.alumno = alumno;
          
    }
}]
);

function showMe(box) {

    var chboxs = document.getElementsByName("c1");
    var vis = "none";
    for (var i in chboxs) {
        if (chboxs[i].checked) {
            vis = "block";
            break;
        }
    }
    document.getElementById(box).style.display = vis;
}