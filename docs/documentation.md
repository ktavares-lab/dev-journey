# Documentação — Dev Journey
## 1. Definição do Projeto

### Nome do projeto

**Dev Journey**

### Problema ou necessidade atendida

A ideia de criar este portfólio surgiu da necessidade de apresentar melhor minha trajetória na área de tecnologia. Um currículo tradicional consegue resumir minha formação e minhas experiências, mas não mostra tão bem os projetos que desenvolvi, as tecnologias que venho estudando e minha evolução durante o curso.

Por isso, decidi criar um espaço onde essas informações possam ser apresentadas de forma mais completa e organizada, permitindo que outras pessoas conheçam meu perfil, meus conhecimentos e os projetos que já desenvolvi.

### Objetivo principal

O objetivo do **Dev Journey** é apresentar minha trajetória na área de tecnologia, reunindo informações sobre minha formação, conhecimentos, projetos, experiências e interesses pessoais em um único portfólio.

Além de apresentar essas informações, quero utilizar o próprio desenvolvimento do site como uma forma de demonstrar meus conhecimentos em HTML, CSS e JavaScript.

### Público-alvo

O portfólio foi pensado principalmente para:

- Recrutadores e empresas de tecnologia;
- Profissionais da área de desenvolvimento de software;
- Professores e colegas da faculdade;
- Desenvolvedores interessados nos projetos apresentados;
- Pessoas que tenham interesse em conhecer minha trajetória na área de tecnologia.

### Proposta visual

Quero utilizar uma identidade visual com uma aparência moderna e relacionada à área de tecnologia, mas sem deixar a página visualmente carregada.

A ideia é manter uma estrutura simples, com as informações organizadas em seções e uma navegação clara. Também quero utilizar uma linha do tempo para representar minha evolução na programação, tornando essa parte da apresentação mais visual.

O site será desenvolvido de forma responsiva para que o conteúdo possa ser consultado tanto em computadores quanto em dispositivos móveis.

### Conteúdo apresentado

O portfólio contará com as seguintes seções:

- **Home:** apresentação inicial, identificação e acesso às principais áreas do portfólio;
- **Sobre mim:** apresentação pessoal e informações sobre meu perfil;
- **Formação acadêmica:** informações sobre minha formação em Análise e Desenvolvimento de Sistemas;
- **Minha jornada:** linha do tempo mostrando minha evolução acadêmica e técnica na programação;
- **Conhecimentos e competências:** tecnologias, linguagens, ferramentas e conhecimentos que venho adquirindo;
- **Projetos:** apresentação dos projetos que desenvolvi ou estou desenvolvendo, com suas descrições, tecnologias utilizadas e links para os repositórios;
- **Experiências relevantes:** experiências acadêmicas, trabalhos em grupo e outras atividades relacionadas à área de tecnologia;
- **Além do código:** apresentação dos meus hobbies, atividades de lazer e interesses pessoais;
- **Viagens:** apresentação de viagens que realizei e algumas experiências relacionadas a elas;
- **Contato:** informações para contato e links para meus perfis profissionais.

### Principais funcionalidades

As principais funcionalidades planejadas para o portfólio são:

- Navegação entre as diferentes seções da página;
- Menu de navegação adaptado para dispositivos móveis;
- Filtro dos projetos por categoria;
- Timeline para apresentar minha trajetória;
- Botões de acesso aos projetos;
- Links para os repositórios dos projetos;
- Links para os canais de contato;
- Layout responsivo para diferentes tamanhos de tela;
- Interações implementadas com JavaScript.

### Tecnologias utilizadas

O portfólio será desenvolvido utilizando:

- **HTML5** — estruturação e organização do conteúdo;
- **CSS3** — estilização, layout e responsividade;
- **JavaScript** — implementação das interações e funcionalidades;
- **Git** — controle de versão do projeto;
- **GitHub** — armazenamento do código-fonte e dos repositórios dos projetos.


# 2. Prompts utilizados

Durante o desenvolvimento do portfólio, utilizei a Inteligência Artificial como ferramenta de apoio no planejamento, na organização do projeto e na resolução de desafios de layout e responsividade com CSS.

Foram selecionados os dois prompts que tiveram maior influência nas decisões do projeto.

---

### Prompt 01 — Definição do conceito e da identidade visual do portfólio

* **Objetivo do prompt:**  
  Definir uma ideia de portfólio que apresentasse minha trajetória na programação e organizasse as seções necessárias para atender a atividade.

* **Texto enviado à IA:**  
  > *"Me dê ideias de portfólios para uma atividade de faculdade. Quero um projeto que apresente minha trajetória como desenvolvedor, meus projetos, tecnologias e evolução na programação."*

* **Resultado obtido:**  
  A IA sugeriu o conceito **"Dev Journey"**, focado em apresentar a evolução do desenvolvedor por meio de uma linha do tempo. Também sugeriu seções básicas como apresentação, trajetória, tecnologias, projetos e contato.

* **Análise crítica da resposta:**  
  Gostei da ideia da linha do tempo para mostrar minha evolução na faculdade. No entanto, percebi duas limitações na resposta:
  1. A estrutura não contemplava seções obrigatórias do enunciado, como hobbies, lazer e viagens.
  2. A proposta visual e o esquema de cores sugeridos eram muito genéricos e sem identidade própria.

* **Decisão tomada pelo aluno:**  
  Adotei o nome **"Dev Journey"** e a timeline, mas adaptei a estrutura para incluir todas as seções cobradas no trabalho. Além disso, decidi solicitar à IA sugestões para melhorar a paleta de cores e o visual do site.

* **Ajustes ou novos prompts utilizados:**  
  Enviei um prompt de ajuste focado na identidade visual:
  > *"O design e as cores sugeridas ficaram muito genéricos. Me sugira paletas de cores modernas em estilo dark mode/tecnológico para aplicar no CSS do portfólio."*  
  
  A partir da resposta, defini uma paleta de tons escuros com destaques em azul/ciano.

---

### Prompt 02 — Estrutura de arquivos e responsividade do layout

* **Objetivo do prompt:**  
  Definir a organização dos arquivos do projeto e obter a estrutura inicial de HTML e CSS para montar o layout.

* **Texto enviado à IA:**  
  > *"Vou criar um portfólio utilizando HTML, CSS e JavaScript. Me diga uma estrutura de pastas adequada para o projeto, considerando que também preciso entregar documentação em Markdown."*

* **Resultado obtido:**  
  A IA recomendou a estrutura de pastas (`css/`, `js/`, `docs/`, etc.) e forneceu um código base em HTML e CSS para estruturar as seções e os cards do site.

* **Análise crítica da resposta:**  
  A organização de arquivos atendeu perfeitamente ao solicitado. Porém, ao testar o código CSS gerado no navegador, notei um problema crítico: **o layout não estava responsivo**. Em telas de celular, os elementos quebravam e criavam uma barra de rolagem horizontal, o que desatendia as restrições técnicas da entrega.

* **Decisão tomada pelo aluno:**  
  Mantive a estrutura de pastas proposta. Em relação ao código, percebi que precisava corrigir e adaptar as regras de CSS para garantir que a página se ajustasse corretamente a diferentes tamanhos de tela.

* **Ajustes ou novos prompts utilizados:**  
  Enviei o seguinte prompt para resolver o problema de layout:
  > *"O CSS que você gerou não está responsivo e está quebrando no celular, gerando rolagem horizontal. Como posso ajustar para que os cards e a timeline fiquem responsivos?"*  
  
  Com o retorno da IA, apliquei as correções necessárias no `style.css` usando media queries para telas abaixo de 768px e ajustei as larguras para percentuais e unidades relativas rem.

## 3. Histórias de Usuário

As necessidades do portfólio foram descritas por meio de histórias de usuário, considerando as principais funcionalidades que serão disponibilizadas aos visitantes.

### US01 — Visualizar apresentação

**Como visitante, quero visualizar a apresentação inicial do portfólio, para conhecer rapidamente o desenvolvedor e sua área de atuação.**

### US02 — Conhecer a trajetória

**Como visitante, quero visualizar a formação acadêmica e a trajetória do desenvolvedor, para conhecer sua evolução na área de tecnologia.**

### US03 — Visualizar conhecimentos e competências

**Como visitante, quero visualizar as tecnologias e competências do desenvolvedor, para identificar seus conhecimentos técnicos.**

### US04 — Visualizar projetos

**Como visitante, quero visualizar os projetos desenvolvidos pelo autor, para conhecer suas experiências práticas e competências técnicas.**

### US05 — Filtrar projetos

**Como visitante, quero filtrar os projetos por categoria, para encontrar mais facilmente projetos relacionados a uma determinada tecnologia ou área.**

### US06 — Acessar os repositórios

**Como visitante, quero acessar os repositórios dos projetos, para consultar o código-fonte e obter mais informações sobre sua implementação.**

### US07 — Conhecer experiências e interesses

**Como visitante, quero visualizar as experiências, hobbies, atividades de lazer e viagens do desenvolvedor, para conhecer melhor seu perfil pessoal e profissional.**

### US08 — Entrar em contato

**Como visitante, quero acessar os canais de contato do desenvolvedor, para poder entrar em contato ou conhecer seus perfis profissionais.**

### US09 — Utilizar o portfólio em diferentes dispositivos

**Como visitante, quero acessar o portfólio em diferentes dispositivos, para conseguir visualizar e utilizar o site adequadamente em computadores, tablets e celulares.**

### US10 — Navegar pelo portfólio

**Como visitante, quero navegar entre as diferentes seções do portfólio, para encontrar facilmente as informações que desejo consultar.**

## 4. Critérios de Aceitação

Cada história de usuário possui critérios de aceitação objetivos e verificáveis, permitindo confirmar se a respectiva funcionalidade foi implementada corretamente.

### US01 — Visualizar apresentação

- O portfólio deve possuir uma seção inicial identificada como "Home".
- A seção deve apresentar o nome do desenvolvedor.
- A seção deve apresentar sua área de atuação.
- Deve existir um botão ou link que permita acessar a seção de projetos.

### US02 — Conhecer a trajetória

- O portfólio deve possuir uma seção de formação acadêmica.
- O portfólio deve possuir uma seção identificada como "Minha jornada".
- A seção deve apresentar informações sobre a evolução acadêmica e técnica do desenvolvedor.
- A timeline deve apresentar os diferentes momentos da trajetória de forma organizada.

### US03 — Visualizar conhecimentos e competências

- O portfólio deve possuir uma seção de conhecimentos e competências.
- As tecnologias apresentadas devem possuir identificação própria.
- As tecnologias devem corresponder aos conhecimentos informados pelo desenvolvedor.
- A seção deve permanecer legível em dispositivos móveis.

### US04 — Visualizar projetos

- O portfólio deve possuir uma seção identificada como "Projetos".
- Cada projeto deve possuir título.
- Cada projeto deve possuir descrição.
- Cada projeto deve apresentar as principais tecnologias utilizadas.
- Os projetos devem corresponder a projetos reais do desenvolvedor.

### US05 — Filtrar projetos

- A seção de projetos deve possuir opções de filtro por categoria.
- Ao selecionar uma categoria, somente os projetos correspondentes devem ser exibidos.
- Deve existir uma opção para visualizar novamente todos os projetos.
- Os filtros devem funcionar sem recarregar a página.

### US06 — Acessar os repositórios

- Cada projeto que possuir um repositório disponível deve apresentar um link para o GitHub.
- O link deve direcionar para o repositório correspondente ao projeto.
- Os links devem ser funcionais e não podem utilizar endereços fictícios.

### US07 — Conhecer experiências e interesses

- O portfólio deve possuir uma seção de experiências relevantes.
- O portfólio deve apresentar informações sobre hobbies e atividades de lazer.
- O portfólio deve possuir uma seção destinada às viagens realizadas.
- As informações apresentadas devem corresponder às informações fornecidas pelo desenvolvedor.

### US08 — Entrar em contato

- O portfólio deve possuir uma seção identificada como "Contato".
- A seção deve disponibilizar o endereço de e-mail do desenvolvedor.
- A seção deve disponibilizar links para seus perfis profissionais.
- O link de e-mail deve utilizar uma funcionalidade de envio de mensagem.
- Os links externos devem direcionar para os endereços correspondentes.

### US09 — Utilizar o portfólio em diferentes dispositivos

- O conteúdo deve permanecer acessível em telas de diferentes tamanhos.
- Os elementos da página não devem ultrapassar horizontalmente os limites da tela em dispositivos móveis.
- O menu de navegação deve possuir uma apresentação adequada para telas menores.
- Textos, botões e cards devem permanecer utilizáveis em dispositivos móveis.

### US10 — Navegar pelo portfólio

- O menu de navegação deve apresentar links para as principais seções do portfólio.
- Cada link do menu deve direcionar para a seção correspondente.
- Os links internos devem funcionar sem apresentar destinos inexistentes.
- O usuário deve conseguir acessar as principais seções sem precisar utilizar o endereço direto da página.


## 5. Priorização MoSCoW

As histórias de usuário foram classificadas utilizando o método MoSCoW, considerando o objetivo principal do projeto, que é apresentar a trajetória, conhecimentos, projetos e informações profissionais do desenvolvedor por meio de um portfólio funcional.

### Must Have

Requisitos indispensáveis para que o MVP cumpra sua finalidade principal.

#### US01 — Visualizar apresentação

**Prioridade:** Must Have

A apresentação inicial é necessária para me identificar e contextualizar o visitante sobre o objetivo do portfólio.

#### US02 — Conhecer a trajetória

**Prioridade:** Must Have

A formação e a trajetória são parte importante da proposta do projeto, permitindo apresentar a evolução acadêmica e técnica.

#### US03 — Visualizar conhecimentos e competências

**Prioridade:** Must Have

A apresentação das competências técnicas é fundamental para que o portfólio cumpra seu objetivo profissional.

#### US04 — Visualizar projetos

**Prioridade:** Must Have

Os projetos são um dos principais elementos do portfólio, pois permitem demonstrar experiências práticas e conhecimentos técnicos.

#### US06 — Acessar os repositórios

**Prioridade:** Must Have

Os links para os repositórios permitem que o visitante consulte os projetos e seus códigos-fonte, complementando as informações apresentadas no portfólio.

#### US08 — Entrar em contato

**Prioridade:** Must Have

A possibilidade de contato é necessária em um portfólio profissional, permitindo que recrutadores e outros interessados entrem em contato com o desenvolvedor.

---

### Should Have

Requisitos importantes para melhorar a experiência e a apresentação do portfólio, mas que não impedem seu funcionamento básico.

#### US05 — Filtrar projetos

**Prioridade:** Should Have

O filtro facilita a localização dos projetos por categoria e adiciona uma interação relevante ao portfólio. Entretanto, os projetos ainda poderiam ser apresentados sem essa funcionalidade.

#### US09 — Utilizar o portfólio em diferentes dispositivos

**Prioridade:** Should Have

A responsividade melhora significativamente a acessibilidade do portfólio em celulares e tablets. Apesar de ser importante para a qualidade da aplicação, o conteúdo principal ainda poderia ser apresentado em uma primeira versão focada em computadores.

#### US10 — Navegar pelo portfólio

**Prioridade:** Should Have

Uma navegação organizada facilita o acesso às diferentes seções e melhora a experiência do visitante. Entretanto, o conteúdo principal ainda poderia existir sem uma navegação avançada.

---

### Could Have

Melhorias desejáveis que podem ser implementadas caso haja tempo disponível.

#### US07 — Conhecer experiências e interesses

**Prioridade:** Could Have

A apresentação de hobbies, lazer, viagens e outros interesses contribui para tornar o portfólio mais pessoal e completo. Porém, essas informações não são essenciais para apresentar as principais competências profissionais e projetos do desenvolvedor.

---

### Won't Have Now

Requisitos reconhecidos durante o planejamento, mas que não serão implementados nesta entrega.

#### Funcionalidades não previstas no MVP

**Prioridade:** Won't Have Now

Nesta versão não serão implementadas funcionalidades como:

- Sistema de login;
- Área administrativa para edição do portfólio;
- Banco de dados;
- Sistema de comentários;
- Formulário de contato com backend;
- Integração com APIs externas;
- Sistema de cadastro de usuários.

Essas funcionalidades foram reconhecidas como possíveis expansões futuras, mas não fazem parte do objetivo desta entrega. A decisão de não implementá-las permite manter o escopo concentrado na apresentação do portfólio e no atendimento aos requisitos da atividade.

### Resumo da priorização

| Prioridade | Histórias de usuário |
|---|---|
| **Must Have** | US01, US02, US03, US04, US06, US08 |
| **Should Have** | US05, US09, US10 |
| **Could Have** | US07 |
| **Won't Have Now** | Funcionalidades adicionais não previstas no MVP |

A priorização foi definida considerando que o MVP deve ser capaz de apresentar o desenvolvedor, sua formação, conhecimentos, projetos e formas de contato. As demais funcionalidades contribuem para melhorar a experiência e complementar o portfólio, mas não são todas indispensáveis para sua primeira versão.

## 6. Descrição do MVP

O Produto Mínimo Viável (MVP) do **Dev Journey** será uma versão funcional do portfólio capaz de apresentar as principais informações acadêmicas, profissionais e técnicas do desenvolvedor, permitindo que o visitante navegue pelo conteúdo, conheça os projetos desenvolvidos e acesse os respectivos repositórios.

### Necessidades atendidas

O MVP deverá atender às seguintes necessidades:

- Apresentar a identificação e o perfil do desenvolvedor;
- Apresentar sua formação acadêmica e trajetória na área de tecnologia;
- Apresentar seus conhecimentos e competências;
- Apresentar projetos desenvolvidos e suas respectivas tecnologias;
- Permitir acesso aos repositórios dos projetos;
- Disponibilizar formas de contato;
- Apresentar informações pessoais complementares, como hobbies, lazer e viagens;
- Permitir a navegação pelo portfólio em diferentes dispositivos.

### Seções disponíveis

A primeira versão do portfólio contará com as seguintes seções:

- **Home**;
- **Sobre mim**;
- **Formação acadêmica**;
- **Minha jornada**;
- **Conhecimentos e competências**;
- **Projetos**;
- **Experiências relevantes**;
- **Além do código**;
- **Viagens**;
- **Contato**.

### Interações implementadas

O MVP deverá possuir as seguintes interações:

- Navegação entre as seções do portfólio;
- Menu de navegação responsivo;
- Filtro dos projetos por categoria;
- Timeline para apresentação da trajetória;
- Botões de acesso aos projetos;
- Links funcionais para os repositórios;
- Links funcionais para os canais de contato;
- Adaptação da interface para diferentes tamanhos de tela.

As interações serão implementadas utilizando **JavaScript**, sem a utilização de frameworks ou bibliotecas externas.

### Histórias de usuário incluídas no MVP

As seguintes histórias de usuário farão parte do MVP:

- **US01 — Visualizar apresentação**;
- **US02 — Conhecer a trajetória**;
- **US03 — Visualizar conhecimentos e competências**;
- **US04 — Visualizar projetos**;
- **US05 — Filtrar projetos**;
- **US06 — Acessar os repositórios**;
- **US07 — Conhecer experiências e interesses**;
- **US08 — Entrar em contato**;
- **US09 — Utilizar o portfólio em diferentes dispositivos**;
- **US10 — Navegar pelo portfólio**.

Embora as histórias tenham diferentes prioridades na classificação MoSCoW, elas serão consideradas na versão entregue do portfólio.

### O que ficará fora do MVP

Não serão implementados nesta primeira versão:

- Sistema de login;
- Área administrativa para alteração do conteúdo;
- Banco de dados;
- Sistema de cadastro de usuários;
- Sistema de comentários;
- Formulário de contato conectado a um backend;
- Integrações com APIs externas;
- Painel administrativo;
- Sistema de gerenciamento de conteúdo.

Essas funcionalidades poderão ser consideradas em versões futuras, mas não são necessárias para o objetivo principal do projeto.

### Condições para conclusão do MVP

O MVP será considerado concluído quando:

- Todas as seções previstas estiverem disponíveis no portfólio;
- O conteúdo principal estiver preenchido com informações reais do desenvolvedor;
- Os projetos estiverem apresentados com suas respectivas informações;
- Os links para os repositórios estiverem funcionando;
- Os links de contato estiverem funcionando;
- O filtro de projetos estiver funcionando corretamente;
- O menu de navegação estiver funcionando;
- As interações JavaScript estiverem implementadas e testadas;
- O portfólio puder ser utilizado em diferentes tamanhos de tela;
- Não existirem botões ou links com destinos fictícios;
- O projeto puder ser acessado e avaliado sem depender de funcionalidades externas não implementadas.

Dessa forma, o MVP será uma versão funcional e avaliável do **Dev Journey**, contendo as principais informações e funcionalidades necessárias para cumprir o objetivo do portfólio.

### 7 Backlog Acionável

| ID | Item do backlog | História relacionada | Prioridade MoSCoW | Critérios de aceitação | Status |
|---|---|---|---|---|---|
| BL01 | Criar seção inicial do portfólio | US01 | Must Have | Nome, área de atuação e botão para projetos são exibidos corretamente | Concluído |
| BL02 | Criar seção de apresentação pessoal | US01 | Must Have | Informações de apresentação são exibidas corretamente | Concluído |
| BL03 | Criar seção de formação acadêmica | US02 | Must Have | Formação em Análise e Desenvolvimento de Sistemas é apresentada | Concluído |
| BL04 | Criar timeline da trajetória | US02 | Must Have | Os principais momentos da trajetória são apresentados em ordem cronológica | Concluído |
| BL05 | Criar seção de conhecimentos e competências | US03 | Must Have | Tecnologias e competências são apresentadas com identificação própria | Concluído |
| BL06 | Criar cards dos projetos | US04 | Must Have | Cada projeto possui título, descrição e tecnologias utilizadas | Concluído |
| BL07 | Adicionar informações do Food Delivery System | US04 | Must Have | O projeto apresenta descrição, tecnologias e informações reais | Concluído |
| BL08 | Adicionar informações do Music System | US04 | Must Have | O projeto apresenta descrição, tecnologias e informações reais | Concluído |
| BL09 | Implementar filtro de projetos | US05 | Should Have | Os projetos são filtrados corretamente por categoria sem recarregar a página | Concluído |
| BL10 | Adicionar links dos repositórios | US06 | Must Have | Cada link direciona para o repositório correspondente no GitHub | Concluído |
| BL11 | Criar seção de experiências relevantes | US07 | Could Have | As experiências relacionadas à área de tecnologia são apresentadas | Concluído |
| BL12 | Criar seção de hobbies e lazer | US07 | Could Have | Hobbies e atividades de lazer são apresentados | Concluído |
| BL13 | Criar seção de viagens | US07 | Could Have | As viagens realizadas são apresentadas em uma seção própria | Concluído |
| BL14 | Criar seção de contato | US08 | Must Have | E-mail e perfis profissionais são apresentados | Concluído |
| BL15 | Configurar links de contato | US08 | Must Have | Os links de contato direcionam para os endereços corretos | Concluído |
| BL16 | Implementar menu de navegação | US10 | Should Have | Os links do menu direcionam para as respectivas seções | Concluído |
| BL17 | Implementar menu responsivo | US09 | Should Have | O menu permanece utilizável em telas menores | Concluído |
| BL18 | Implementar layout responsivo | US09 | Should Have | O conteúdo permanece acessível sem rolagem horizontal em dispositivos móveis | Concluído |
| BL19 | Implementar interações da timeline | US02 | Must Have | A timeline apresenta corretamente os eventos e suas interações previstas | Concluído |
| BL20 | Revisar links e botões | US06, US08, US10 | Must Have | Todos os links e botões possuem destinos funcionais | Concluído |
| BL21 | Testar filtros de projetos | US05 | Should Have | Todos os filtros exibem somente as categorias correspondentes | Concluído |
| BL22 | Testar navegação em dispositivos móveis | US09, US10 | Should Have | Todas as principais seções podem ser acessadas em telas menores | Concluído |
| BL23 | Realizar revisão final do portfólio | US01–US10 | Must Have | Todas as funcionalidades implementadas atendem aos respectivos critérios de aceitação | Concluído |
| BL24 | Revisar documentação do projeto | US01–US10 | Must Have | A documentação corresponde à implementação final do portfólio | Concluído |