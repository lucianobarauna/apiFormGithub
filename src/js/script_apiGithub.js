/*!
 * @Nome do projeto
 * Desenvolvido por @nome em: 21/10/2016
 */

$(function(){
    'use strict'

    $('#btn_apppesq').click(pesqRepositorios);

    function pesqRepositorios(){
        event.preventDefault();
        var usuarioGit = "lucianobarauna";
        $.ajax({
            url: 'https://api.github.com/users/' + usuarioGit + '/repos'
        }).done(function(json){
            console.log(json);
            console.log(json[0].name);
            console.log(json[0].description);
            console.log(json[0].html_url);
        });
    }










});
