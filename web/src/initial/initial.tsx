import m = require('mithril');
import {model} from '../model'
import {Window, Tab, Tabs, Btn, Sidebar} from '../ui';
import frask from '../../img/icones_tela_inicial/frasco.png';
import politic from '../../img/icones_tela_inicial/politic.png';
import money from '../../img/icones_tela_inicial/money.png';
import earth from '../../img/icones_tela_inicial/earth.png';
import graphic from '../../img/icones_tela_inicial/graphic.png';
import people from '../../img/icones_tela_inicial/people.png';
import reptle from '../../img/icones_tela_inicial/reptle.png';
import settings from '../../img/icones_tela_inicial/settings.png';
import conspirancy from '../../img/icones_tela_inicial/conspirancy.png';
import big_earth from '../../img/icones_tela_inicial/big-earth.png';

import bg_earth_pixels from '../../img/icones_tela_inicial/bg-earth-pixels.jpeg';



var React = {
    createElement: m
};

/** A parte a seguir do código server para documentar o nome de cada botão,
 * O redirecionamento feito após clica-lo
 * E o icone respectivo
 */

 let leftMenuItens = {
<<<<<<< HEAD
    "nome": ["Ciência", "Política", "Conspiração","Economia"],
    "caminho": ["Science", "Politics", "Conspiracy", "Economy"],
=======
    "nome": ["Temperatura", "Política", "Conspiração","Economia"],

    "caminho": ["Graphics", "teste2.html", "teste2.html", "teste.html"],

    "caminho": ["teste.html", "teste2.html", "teste2.html", "teste.html"],

>>>>>>> 45f3ba8b78df8201a4c63de834f4f8ceb8776e38
    "icone": [frask, politic, conspirancy, money],
}

let barMenuItens = {
    "nome": ["teste 1", "teste 2", "teste 3"],
    "caminho": ["teste.html", "teste2.html", "teste3.html"],
    "icone": ["icon icon-link", "icon icon-link", "icon icon-link"],
}
let rightMenuItens = {
    "nome": ["Gráfico", "Info Geográfica", "Illuminati", "População", "Configurações"],
    "caminho": ["Graphics", "teste2.html", "Illuminati", "Population", "teste2.html", "teste2.html"],
    "icone": [graphic, earth, reptle, people, settings],
}

/**A parte a seguir é para auxiliar
 * O listamento de cada botão
 * Para cada Dashboard

 * 
 * <a href="#" class="nes-badge">
  <span class="is-dark">NES.css</span>
</a>
 */
function popUp(caminho) {
    return <Initial>{window.open(`?start=${caminho}`, 'popup', "width=1200px, height=500px, top=100%, left=100%")}</Initial>
}

<<<<<<< HEAD
function elementsColumn(itens, lado) {
    var list = [];  
    for(let i = 0; i < itens.nome.length; i++) {
        list.push(m('li', {style: 'margin: 20px 0px'}, [
            m('a', {href: '#', onclick: () => popUp(itens.caminho[i])}, [
                m('span', {class: 'is-primary extend-right btn tooltip ' + lado, 'data-tooltip': itens.nome[i] }, [m('img', {class: 'is-small',src: itens.icone[i]}),]),
=======

 */


function elementsColumn(itens, classli) {
    var list = [];  
    for(let i = 0; i < itens.nome.length; i++) {
        list.push(m('li', {class: classli}, [

            m('a', {href: '#', onclick: () => popUp(itens.caminho[i]), class: 'nes-badge is-icon'}, [
                m('span', {class: 'is-warning exception animation'}, 'Hi'),
                m('span', {class: 'is-primary extend-right'}, 'Teste'),
>>>>>>> 45f3ba8b78df8201a4c63de834f4f8ceb8776e38
            ])

            m('a', {href: itens.caminho[i]}, [
                m('img', {class: 'mr-5', src: itens.icone[i]})
            ], itens.nome[i])

        ]))
    }
    return list;
}

/** A parte a seguir é sobre o cabeçalho do jogo
 * Será apresentado o título do jogo
*/

function header(){
    return m('div', {class: 'header'}, [

        m('div', {class: 'nes-container is-rounded is-dark'}, [
            m('p', {class: 'title'}, 'Disaster Simulation')

        m('div', {class: 'nes-container is-rounded is-dark with-title'}, [
            m('p', {class: 'title'}, 'Disaster Simulation'),
            m('p', {class: 'text-gray'}, 'Projeto da disciplina de Desenvolvimento de Software')

        ])
    ])
}

/**A parte a seguir é sobre o status
 * Deve apresentado aqui o status do jogo
 * Ano, Variação de Temperatura, Dinheiro e Quantidade de pessoas
*/

function status(){

    return m('div', {class: 'status nes-container is-rounded is-dark is-centered icon-list'},[
        m('div', {class: 'row columns margin-b'}, [
            m('div', {class: 'column col-6'}, [
                m('i', {class: 'nes-icon is-small heart down-left'})
            ]),
            m('div', {class: 'column col-6'}, [
                m('i', {class: 'nes-icon is-small like down-right'})
            ]),
        ]),
        m('div', {class: 'row columns'}, [
            m('div', {class: 'column col-6'}, [
                m('i', {class: 'nes-icon trophy is-small up-left'})
            ]),
            m('div', {class: 'column col-6'}, [
                m('i', {class: 'nes-icon coin is-small up-right'})
            ]),
        ]),

    return m('div', {class: 'status nes-container is-rounded is-dark with-title'},[
        m('p', {class: 'title'}, 'Aqui fica o Status!')

    ])
}

/**A parte a seguir é sobre a coluna da esquerda
 * E chama seus respectivos itens
*/

let coluna = 'position: relative;'
+'padding: 1.5rem 2rem;'
+'border-color: black;'
+'border-style: solid;'
+ 'border-width: 4px;'
+'width: 130px;'
+ 'background: #89cff0;'
+'list-style: none;'
+'opacity: 70%;'

function leftDashboard() {

    return m('div', {class: 'leftDash '}, [
        m('ul',{style: coluna + 'margin-left: 70px'}, [
            'Ações',
            m('li', {class: 'divider'}),
<<<<<<< HEAD
            elementsColumn(leftMenuItens, 'tooltip-right')
=======
            elementsColumn(leftMenuItens, 'dashboard-menu')

    return m('div', {class: 'leftDash'}, [
        m('ul', {class: 'menu align-left nes-container is-rounded is-dark with title'}, [
            'Ações',
            m('li', {class: 'divider'}),
            elementsColumn(leftMenuItens, 'menu nes-container is-dark')

>>>>>>> 45f3ba8b78df8201a4c63de834f4f8ceb8776e38
        ])
    ])
}

/** A parte a seguir é a main do projeto
 * A parte onde ficará globo
 */

function main() {
<<<<<<< HEAD
    return m('main', {class: 'main nes-container is-rounded'}, [
        m('iframe', {src:'../../earth.html', style:{'width':'600px','height':'320px', 'border':'none'}})
=======
    return m('div', {class: 'main'}, [

        m('div', {style: {'text-align': 'center','text-content': 'center'}}, [
            

        'Corpo da Main',
        m('div', {style: {'text-align': 'center',
                            'text-content': 'center'}}, [
            m('img', {src: big_earth})

        ]),
>>>>>>> 45f3ba8b78df8201a4c63de834f4f8ceb8776e38
    ])
}

/** A parte a seguir é sobre a coluna da direita
 * E chama seus respectivos itens
*/

function rightDashboard() {
    return m('div', {class: 'rightDash'}, [
<<<<<<< HEAD
        m('ul',{style:coluna + 'margin-left: -5px'}, [
            'Info',
            m('li', {class: 'divider'}),
            elementsColumn(rightMenuItens, 'tooltip-left')
=======

        m('ul', {class: 'menu nes-container is-rounded is-dark'}, [
            'Informações',
            m('li', {class: 'divider'}),
            elementsColumn(rightMenuItens, '')

        m('ul', {class: 'menu align-right nes-container is-rounded is-dark with title'}, [
            'Informações',
            m('li', {class: 'divider'}),
            elementsColumn(rightMenuItens, 'menu nes-container is-dark')

>>>>>>> 45f3ba8b78df8201a4c63de834f4f8ceb8776e38
        ])
    ])
}

/**A parte a seguir é sobre o rodapé do jogo
 * Nele, terá 3 barras, em uma delas conterá
 * O status pessoais do jogador
 * Outra apresentará Notícias
 * E na ultima apresentará os créditos do jogo
*/

function footer(){

    return m('div', {class: 'footer nes-container is-rounded is-dark is-centered'}, [
        m('p', 'asasas asasasas asasas sasasasa')

    return m('div', {class: 'footer nes-container is-rounded is-dark with title'}, [
        elementsColumn(barMenuItens, 'menu inline nes-container is-dark')

    ])
}

/** A parte a seguir inicia e ordena a tela */

function join() {
    var join = [
        header(),
        status(),
        leftDashboard(),
        main(),
        rightDashboard(),
        footer(),
    ]

    return m('section', {class: 'Initial', style: {background: 'URL('+bg_earth_pixels+') 80% 40%'}}, [
        join
    ]);
}



var app = document.querySelector('#app');


export class Initial {
    view () {
        return <Window>{join()}</Window>;

    return <section class="Initial nes-container is-dark">{join}</section>;
var React = {
    createElement: m
};

//menu esquerdo

let leftMenuItens = {
    "nome": ["teste 1", "teste 2"],
    "caminho": ["teste.html", "teste2.html"],
    "icone": ["icon icon-link", "icon icon-link"],
}

let rightMenuItens = {
    "nome": ["teste 3", "teste 4"],
    "caminho": ["teste.html", "teste2.html"],
    "icone": ["icon icon-link", "icon icon-link"],
}

function elementsLeft() {
    var list_left = [], cont, itens = leftMenuItens;

    for(cont=0; cont<itens.nome.length; cont ++) {
        list_left.push(m('li', {class: 'menu-item'}, [
            m('a', {href: itens.caminho[cont]}, [
                m('i', {class: itens.icone[cont]})
            ], itens.nome[cont])
        ])) 
    }
    return list_left;
}

function leftDashboardElements() {
    return m('ul', {class: 'menu'}, [
        m('li', {class: 'divider'}),
        elementsLeft()
    ])
}

function leftDashboard() {
    return m('div', {class: 'column col-2 text-center'}, [
            leftDashboardElements()
        ])
}

// fim do menu lateral esquerdo

//menu lateral direito
function elementsRight() {
    var list_right = [], cont, itens = rightMenuItens;

    for(cont=0; cont<itens.nome.length; cont ++) {
        list_right.push(m('li', {class: 'menu-item'}, [
            m('a', {href: itens.caminho[cont]}, [
                m('i', {class: itens.icone[cont]})
            ], itens.nome[cont])
        ])) 
    }
    return list_right;
}

function rightDashboardElements() {
    return m('ul', {class: 'menu'}, [
        m('li', {class: 'divider'}),
        elementsRight()
    ])
}
//fim

function rightDashboard() {
    return m('div', {class: 'column col-2 text-center'}, [
            rightDashboardElements()
        ])
}

//conteudo central

function main() {
    return m('div', {class: 'col-8'}, [
        m('div', {class: 'card'}, [
            m('div', {class: 'card-image'}, [
                m('img', {class: '', src: ''})
            ])
            m('div', {class: 'card-header'}, [
                m('div', {class: 'card-title h5'}, 'Título do Card')
                m('div', {class: 'card-subtitle text-gray'}, 'Subtitulo')
            ])
            m('div', {class: 'card-body'}, 'Corpo do card')
            m('div', {class: 'card-footer'}, [
                m('button', {class: 'btn btn-primary'}, 'Botão')
            ])
        ])
    ])
}

function join() {
    var join = [
        leftDashboard(),
        main(),
        rightDashboard(),
    ]

    return <div class="columns">{join}</div>;



var app = document.querySelector('#menu-lateral');


m.mount(app, {
    view: () => join()
});
    
/*
export class Initial {
    view () {
        return <Window>{leftDashboard()}</Window>;

    }
}*/