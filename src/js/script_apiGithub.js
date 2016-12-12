/*!
 * @Nome do projeto
 * Desenvolvido por @nome em: 21/10/2016
 */

$(function(){
    'use strict'

    $('#btn_apppesq').click(pesqRepositorios);

    var repositorio = [];
    function pesqRepositorios(){

        event.preventDefault();
        var $campoPesq = $('#campo_apppesq').val();

        $.ajax({
            url: 'https://api.github.com/users/' + $campoPesq + '/repos'
        }).done(function(json){
            $(json).each(function(){
                repositorio.push({
                                    nome: this.name,
                                    descricao: this.description,
                                    link: this.html_url
                                });
            });
        });
        console.log(repositorio)

    }










// Fim fução geral
});









