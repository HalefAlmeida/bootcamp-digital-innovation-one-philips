# Arquitetura de componentes e a gestão de complexidade no front-end - Geovana Ribeiro

## Componentes

A arquitetura de componentes baseia-se na construção de componentes independentes, substituíveis e modulares que auxiliem no gerenciamento da complexidade e encorajem a reutilização
Seus benefícios incluem

- Escalabilidade
- Manutenção
- Performance

## Serviços

- Responsáveis por organizar e compartilhar a lógica de negócios
- Reutilizaveis entre diferentes componentes de uma aplicação
- Mandatórios para uma arquitetura modular e reutilizável

### Injeção de dependência

Todo serviço é uma dependencia que precisa ser instanciada dentro do componente para ser utilizada pelo menos. No angular, o componente pede para aplicação quais dependencias ele precisa e então as injeta dentro de sí.

##Ciclo de vida
Todo componente possui seu ciclo de vida (Normalmente chamado de lifecycle hooks), que começa assim que o Angular o instancializa na aplicação e através deles é possível executar lógicas nos vários estágios de um componente.
Usar com sabedoria para não comprometer a performace de sua aplicação!!

## Constructor vs ngOnInit

### Construtor

Deve ser utilizado apenas para inicializar serviços injetados via DI (Injeção de Dependência)

_Salvos os componentes menores, onde não há necessidade de um componente com onInit _

### ngOnInit

Deve ser utilizado para todo tipo de lógica que o componente precisa executar após ter sido criado

## Data Binding

A forma como essociamos informações que estão no componente para o template e vice-versa

### String Interpolation: {{ Valor }}

Associa informação do componente para o template (HTML)

### Property Binding: [propriedade]='valor'

Associa informação do componente para proriedade do template (HTML)

### Event Binding: (evento)='handler'

Associa informação do template (HTML) para o componente

### Two-way Data Binding: [(ngModel)]='propriedade'

associa informação entre ambos, ou seja, mantém ambos atualizados (componente e template (HTML))

## Componentes inteligentes e apresentacionais

### Componentes apresentacionais

- Parecido com funções puras (ou dummy components)
- Se preocupam apenas com a interface do usuário
- Não ficam responsáveis por recuperar dados ou lidar com lógica de negócio
- Não causam efeitos colaterais na aplicação
- Recebem dados via @INput e emite eventos via @Output

### Componentes inteligentes

- Parecido com funções impuras
- Contém toda a lógica de negócio
- São internamente compostos por componentes apresentacionais
- Ficam responsáveis por repassar os dados para o componentes apresentacionais, que apresentarão ao usuário final

## Design modular

Divisão da aplicação web em módulos de recursos que representam diferentes funcionalidade de negócios.

### Core module

Define serviços singleton, componentes de instância única, configuração e exportação de quaisquer modulos de terceiros necessários no módulo principal (App Module)

### Shared module

Contém componentes/pies/diretivas comuns e também exporta módulos do Angular usados com frequência (CommonsModule)

### Feature module

Organiza um conjunto de recursos da aplicação num módulo de funcionalidade

### PARA SE TER EM MENTE

#### - Library

Possui código que pode ser reutilizável entre diferentes aplicações

#### - Angular Element

Recurso do angular para criar web components, padrão da web para definir novos componentes HTML de uma maneira independente de estrutura e agnóstica de frameworks.

## SMACSS

SMACSS é uma arquitetura modular e escalável para CSS, dividida em 5 camadas, sendo elas:

- Base: estilização de seletores e pseudo-classes, além de resets
- Layout: principais componentes como cabeçalho, rodapé, entre outros
- Module (ou components): componentes reutilizáveis como botões e ícones
- State: todo elemento que será modificado ou terá alguma alteração no seu estado inicial
- Theme: temas específicos para uma mesma aplicação

## BEM CSS

A sigla BEM significa block, element, modifier (bloco, elemento, modificador), sendo uma metodologia que segue esses conceitos para definir uma nomenclatura de nomes para classes CSS

## OOCSS

O OOCSS (CSS orientado a objeto) é uma metodologia que identifica um padrão visual que pode se repetir no projeto e o agrupa em classes, tornando-os reutilizáveis
