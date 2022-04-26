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
