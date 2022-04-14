# Posicionando elementos com Flexbox em CSS

## Estrutura - pt 1

Uma div com a propriedade diplay: flex; tornase um flex container e pode conter filhos. Esse filhos por sua vez, também podem se tornar um flex conteiner e também possui filhos.

## flex-direction

É a propriedade que estabelece o exido principal do container, definindo assim a direção que os flex items são colocados no flex container. Existem os eixos vertical e horizonal. Há também os reversos, que assume a posição inversa desses itens.

### row (padrão)

A direção do texto, esquerda para a direita. 1 > 2 > 3 > 4

### row-reverse

Sentido oposto à direção do texto, direita para esquerda. 4 > 3 > 2 > 1

### collumn

Ordenação de cima para baixo, em coluna única
1
2
3
4

### collumn-reverse

Ordenação inversa, de baixo para cima
4
3
2
1

## flex-wrap

É a propriedade que define se os itens devem ou não quebrar a linha.

Por padrão eles não quebram linhas, isso faz com que os flex itens sejam compactados além do limite do conteúdo.

### no-wrap

É o padrão, não permite a quebra de linha.

### wrap

Permite a quebra de linha assim que um dos flex itens não puder mais ser compactado.

### wrap-reverse

Permite a quebra de linha assim que um dos flex itens não puder mais ser compactado, porém na direção contrária da linha, acima.

## flex-flow

É um atalho para as propriedades flex-direction e flex-wrap.

Porém seu uso não é tão comum, visto que, quando mudamos o flex-direction para collumn, mantemos o padrão do flex-wrap que é no-wrap.

## justify-content

Essa propriedade vai se encarregar de alinhar os itens dentro do container de acordo com a direção pretendida e tratar da distribuição de espaçamento entre eles.
OBS.: Caso seus itens estejam ocupando 100% de todo o container, ele não se aplica.

### flex-start

Realiza o alinhamento dentro do container a partir de seu início.

### flex-end

Realiza o alinhamento dentro do container a partir da sobra de espaço ao final do container, respeitando o limite de conteúdo.

### center

Realiza o alinhamento ao centro do container.

### space-between

Cria um alinhamento igual entre os elementos. Ele pega o primeiro elemento e coloca no início do container (borda esquerda), assim como o último elemento é colocado ao final do container (borda direita).

### space-around

Os espaçamentos do meio são duas vezes maiores que o inicial e final.

## align-items

Trata do alinhamento dos flex items de acordo com o eixo do container.

O alinhamento é diferente para quando os itens estão em colunas ou linhas.

Permite o alinhamento central no eixo vertical.

### center

Alinhamento dos itens ao centro.

### stretch

Padrão, e os flex itens crescam igualmente.

### flex-start

Alinhamento dos itens no início.

### flex-end

Alinhamento dos itens no final.

### baseline

Alinhamento de acordo com a linha base da tipografia dos itens.

## align-content

É a propriedade responsável por tratar o alinhamento das linhas do container em relação ao eixo vertical do container.

Precisamos que:

- O container utilize quebra de linhas.
- A altura do container seja maior que a soma das linhas dos itens.

### center

Alinhamento dos itens ao centro.

### stretch

É o padrão e os flex itens crescem igualmente.

### flex-start

Alinhamento dos itens no início.

### flex-end

Alinhamento dos itens no final.

### space-between

Cria um espaçamento igual entre os elementos.

### space-around

Os espaçamentos do meio são udas vezes maiores que o inicial e final.

## Estrutura - pt 2

### flex-grow

Define a proporcionalidade de crescimento dos itens, respeitando o tamanho de seus conteúdos internos.

OBS.: Não irá funciona caso tenhamos adicionado justify-content ao nosso flex container

### flex-basis

É a propriedade que estabelece o tamanho inicial do item antes das distribuições de espaço restante dentro dele, usando como base o conteúdo interno disposto.

- auto: caso o item não tenha tamanho, este será proporcional ao conteúdo do item.
- px, %, em, rem, ... : São valores exatos previamente definidos.
- 0 (zero): terá relação com a definição do flex-grow

### flex-shrink

É a propriedade que estabelece a capacidade de redução ou compressão do tamanho de um item.

- 1: Define que seus itens sejam reduzidos proporcionalmente
- 0: Não permite a redução destes itens
- acime de 1: Pode reduzir proporcinalmente ao valor informado

### flex

Esta propriedade é um atalho ou abreviação de escrita para as propriedades: grow, shrink e basis

### align-self

É a propriedade que estabelece o alinhamento de modo individual sobre um determinado item

- auto: valor padrão, irá respeitar a definição de align-items do container
- flex-stat: ao início do container
- flex-end: ao final do container
- center: relativo ao centro de acordo com o eixo
- stretch: ocupa todo o espaço relativo
- baseline: utiliza a linha base da tipografia

## Curso Finalizado
