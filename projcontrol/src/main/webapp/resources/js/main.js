global.jQuery = require('jquery');
import $ from 'jquery';
import {bootstrap} from 'bootstrap';
// PELO AMOR DE DEUS NAO MEXA NISSO OBRIGADO

import {capsLock, validaEmail, validaSenha, textoRecuperarSenha, 
    habilitaBotoes, mudaParaTelaDeRegistro, timeAlerta, verificaCargo, verificaSenha} from './TelaLogin/TelaLoginAnimacoes';

capsLock();
validaEmail("#userEmail");
validaSenha("#userPassword");

validaEmail("#recuperarEmail");

validaEmail("#userEmailRegister");
validaSenha("#userPasswordRegister");


textoRecuperarSenha();
habilitaBotoes("#recuperarEmail","#recuperarSenhaBtn");
habilitaBotoes("#userPassword",".loginBtn");

habilitaBotoes("#userPasswordRegister",".registerBtn");
mudaParaTelaDeRegistro();
verificaCargo();

timeAlerta();

import {animaAvatar, animaEscritaTexto, scrollDetect, animaDeslogar, gerenciar} from './TelaAluno/TelaAlunoAnimacoes';

animaAvatar();

animaEscritaTexto('.titulo-informacoes');



if(document.querySelector('#formDosRadio') != null){
    $(window).on("load",()=>{
        document.querySelector('#formDosRadio').reset();
        // $('.sections').css('margin-top','0vh');
        var rd_nodejs = $('#rd_nodejs');
        $('#rd_nodejs').attr("checked",true);
    });
}

scrollDetect();

validaEmail('#EmailAlterado');
validaSenha('#SenhaAlterada');
gerenciar();


import{deleteBtn, deletaOCard,deletaLinhaTabela, filtraNomes, enableLightMode, confirmDelete, closeModal} from './TelaProfessor/TelaProfessorAnimacoes';

deleteBtn();

deletaLinhaTabela();

animaDeslogar();

filtraNomes();

enableLightMode();

closeModal();

verificaSenha();

