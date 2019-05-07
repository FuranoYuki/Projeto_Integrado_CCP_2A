function setCadastroTurma() {
    var anoLetivo = $('#anoLetivoRegister').val();
    var sigla = $('#siglaRegister').val();
    var semestreLetivo = $('#semestreLetivoRegister').val();
    var tema = $('#temaRegister').val();

    $.ajax({
        url: 'entrada?acao=CadastrarTurma',
        data: { anoLetivo: anoLetivo, sigla: sigla, semestreLetivo: semestreLetivo, tema: tema },
        type: 'POST',
        success: function (data) {

            Swal.fire({
                title: data[0],
                text: data[1],
                type: data[2],
                confirmButtonText: 'OK'
            })
        },
        error: function (data) {
            Swal.fire({
                title: 'Deu pau!',
                text: data[1],
                type: 'Erro',
                confirmButtonText: 'OK'
            })

        }
    });
}

function getTemas() {
    $.ajax({
        url: 'entrada?acao=GetTema',
        data: {},
        type: 'POST',
        success: function (data) {
            $('#temaRegister').children().remove().end();
            $('#temaRegister').prepend('<option style="color: #6c757d;" disabled selected>Ex: Desenvolvimento Web</option>');
            for (i = 0; i < data.length; i++) {
                $('#temaRegister').append($('<option>', {
                    value: data[i].tema_id,
                    text: data[i].titulo
                }));
            }
        },
        error: function (data) {
            Swal.fire({
                title: 'Error!',
                text: 'Erro ao retornar os dados.Contate o adminstrador do sistema.',
                type: 'error',
                confirmButtonText: 'OK'
            })

        }
    });
}

function getListarTurma() {
    
    $.ajax({
        url: 'entrada?acao=ListarTurma',
        data: {},
        type: 'POST',
        success: function (dados) {
            console.log(dados);
            
        },
        error: function(dados) {
            console.log(dados);

            Swal.fire({
                title: 'Error!',
                text: 'Erro ao retornar os dados.Contate o adminstrador do sistema.',
                type: 'error',
                confirmButtonText: 'OK'
            })
            
        }
    });
}

