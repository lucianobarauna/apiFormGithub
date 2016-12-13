/*!
 * @Nome do projeto
 * Desenvolvido por @nome em: 21/10/2016
 */

$(function(){
    'use strict'

    var repositorio = [],
        campoPesq = 'luciano',
        valInput = 'Juca';





    if(campoPesq == valInput){
        alert('campos iguais')
    } else {
        console.log('campos diferentes')
    }



    $('#btn_apppesq').click(pesqRepositorios);

    function pesqRepositorios(){
        event.preventDefault();
        var campoPesq = $('#campo_apppesq').val();
        $.ajax({
            url: 'https://api.github.com/users/' + campoPesq + '/repos'
        }).done(loadCards);
    }

    function loadCards(elemento){
        $(elemento).each(function(index){
            var obj = {
                        nome: this.name,
                        descricao: this.description,
                        stars: this.stargazers_count,
                        fork: this.forks,
                        link: this.html_url
                    },
                $box = $('#resultado'),
                card = criaCard(obj);

            $box.append(card);

        })
        qtdCards++

    }

    function criaCard (obj){
        // Conteudos
        var repoTitl = $('<h2>').addClass('app_resut_nome').text(obj.nome),
            repoDesc = $('<p>').addClass('app_resut_content').text(obj.descricao),
            repoQtdStar = $('<span>').addClass('app_resut_tag app_resut_tag--amarela')
                                     .text(obj.stars)
                                     .prepend($('<i>').addClass('fa fa-star')),
            repoQtdFork = $('<span>').addClass('app_resut_tag app_resut_tag--azul')
                                     .text(obj.fork)
                                     .prepend($('<i>').addClass('fa fa-code-fork')),
            repoLink = $('<a>').addClass('repo_link')
                                     .attr('href', obj.link)
                                     .text('VER PROJETO')
                                     .prepend($('<i>').addClass('fa fa-link'));
        // Elementos
        var item = $('<article>').addClass('app_resut'),
            itemTopo = $('<header>').append(repoTitl),
            itemRodape = $('<footer>').append([repoQtdStar, repoQtdFork, repoLink]);

        if(obj.descricao === null){
            repoDesc = $('<p>').addClass('app_resut_content').text('Não possui descrição');
            item.append([itemTopo, repoDesc, itemRodape]);

        }else {
            item.append([itemTopo, repoDesc, itemRodape]);
        }

        return item;

    }












// Fim fução geral
});









