const ownerNumber = ["559887583208@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '559887583208' 
// mude para seu numero

const msgwelcomeimg = (numero, groupname) => {
    return `Seja bem-vindo ${numero}\n\nEscreve ${prefix}menu para lista de comandos`
}
//Texto de boas vindas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const byemsgimg = (numero, groupname) => {
    return `Adeus ${numero}`
}
//Texto de despedidas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const menumsgimg = (numero, groupname) => {
    return `Seja bem-vindo ${numero}\n\nAo menu do Shaolin-Bot`
}
//Texto no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const apikeyporn = '25f2d87d9ef5253baaffda9374476ac6'
// sua key do imgbb para ativar o antiporn

const cr = 'sʜᴀᴏʟɪɴ ʙᴏᴛ\n' 
// texto do simbolo de verificado

const prefix = '!' 
// prefixo

const blockedmsg = '*😜 Seu número esta bloqueado, ou seja não ouvindo você 😜*'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*🚫Este comando esta bloqueado contate o propitetário do bot para saber o pq🚫*'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*Corra membro comum, o ban estar próximo*'
// mensagem de ban no anti tipos de mensagem

const adminmsgtype = '*Tu é adm ent n vou te banir por mandar um tipo de mensagem proibida*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = 'Corra punheteiro fdp, seu ban esta próximo'
// mensagem de ban no antiporn

const adminmsgporn = '*Tu é adm ent n vou te banir por mandar porn*'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = 'Corra Membro comum, O ban está próximo...'
// mensagem de ban no antilink

const adminmsglink = 'Isso é um link amigo... ah é tu é adm ent pode kkkk 🙃'
// mensagem de quando adm manda link

const adminmsgpalavra = 'isso esta na lista das palavras proibidas pelo bot'
// mensagem de quando adm manda uma palavra proibida pelo bot

const banmsgpalavra = 'Palavra proibida? Já sabe né'
// mensagem de ban quando manda uma palavra proibida pelo bot

const qnttravahardroleta = 2
// quantidade de travas que mandam no roleta russa hard
// Obs: O valor é multiplicado por 12 ent tenha cuidado

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://i.imgur.com/RR18JiI.jpg'
const textmsgday = 'Ohayo gozaimasu, Onii-chan 👉👈'
// link e mensagem de bom dia

const linkimgeve = 'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
const textmsgeve = `Kon'nichiwa Onii-chan, aceite esse café ☕`
// link e mensagem de boa tarde

const linkimgnig = 'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
const textmsgnig = 'Konbanwa Onii-chan, espero que tenha tido um bom dia ☺️'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'Deu erro, tente novamente :/'
// mensagem de erro

const notregister = `*Comando não registrado, escreva ${prefix}menu para ver a lista de comandos*`

// MENSAGENS DE AUTOREPLY

const botlindo = 'Bakaaaa 😣😣'
const linkbotlindo = 'https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg'
const botfeio = 'Tu parece um sirgueijo, um caranguejo amassado 😡'
const cadebot = 'Me chamou onii-chan 👉👈?'
const botfdp = 'Te foder rapaz, te deitar na porrada quando tiver dormindo'
const botgostoso = 'Arigato go sai masu 😳👉👈'
const botfofo = 'Arigato go sai masu 😳👉👈'
const botbaianor = 'Convidei sua placa-mãe pra minha rede seu corno'
const botcorno = 'Vai te foder, jogador de ff, comprador de pack do pézinho'
const botputa = 'Senhora sua mãe 😡'
const botgay = 'Falou o manja rola 😡'
const botviado = 'Falou o manja rola 😡'
const numbotfeio = 'senhora sua mãe 😡'
// KEYS

const apiTobz = 'h1oDZreuPhUUtgcFLzCh'
// pra pegar a key do Tobz va até o numero 
//wa.me/447418349954 se registre no bot
// e depois escreva #generateapikey que o 
//bot do tobz vai gerar sua key

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: '⌛ Aguarde um pouco... ⌛',
    success: '✔️ Sucesso! ✔️',
    error: {
        stick: '❌ Falha, ocorreu um erro ao converter a imagem em um adesivo ❌',
        Iv: '❌ Link inválido ❌'
    },
    only: {
        group: '❌ Este comando só pode ser usado em grupos! ❌',
        ownerG: '❌ Este comando só pode ser usado pelo grupo proprietário! ❌',
        ownerB: '❌ Este comando só pode ser usado pelo número proprietário! ❌',
        admin: '❌ SILÊNCIO MEMBRO COMUM VC N TEM MORAL PRA USAR ESSE COMANDO ❌',
        Badmin: '❌ Este comando só pode ser usado quando o bot se torna administrador! ❌'
    }
}

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Meu criador^~^\n' 
+ 'ORG:Ian;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=559887583208:+55 98 8758-3208\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde


// Nem ouse mexer aqui se n quiser que de erro
exports.menumsgimg = menumsgimg
exports.byemsgimg = byemsgimg
exports.msgwelcomeimg = msgwelcomeimg
exports.notregister = notregister
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyporn = apikeyporn
exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.apiTobz = apiTobz
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber