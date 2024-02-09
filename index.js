const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para construir páginas web",
        "Uma linguagem de marcação para estilizar páginas web",
        "Uma linguagem de programação para estilizar páginas web",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variável myVar;",
        "myVar = variável;",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Uma estrutura de dados que armazena elementos de tipos diferentes",
        "Um tipo de dado que armazena apenas strings",
        "Uma estrutura de dados que armazena uma coleção de elementos do mesmo tipo",
      ],
      correta: 2
    },
    {
      pergunta: "Como se chama a função que executa um código repetidamente em intervalos especificados?",
      respostas: [
        "loopInterval()",
        "setInterval()",
        "executeRepeat()",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um objeto em JavaScript?",
      respostas: [
        "Uma coleção de elementos ordenados",
        "Um tipo de dado que armazena apenas números",
        "Uma coleção de pares chave-valor",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador usado para concatenar strings em JavaScript?",
      respostas: [
        "+",
        "&",
        "|",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função usada para imprimir algo no console em JavaScript?",
      respostas: [
        "log()",
        "print()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'push()' faz em um array em JavaScript?",
      respostas: [
        "Remove o último elemento do array",
        "Adiciona um novo elemento ao início do array",
        "Adiciona um novo elemento ao final do array",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a palavra-chave usada para definir uma função em JavaScript?",
      respostas: [
        "function",
        "define",
        "func",
      ],
      correta: 0
    },
    {
      pergunta: "Como você comenta um código em JavaScript?",
      respostas: [
        "// Este é um comentário de linha",
        "/* Este é um comentário de bloco */",
        "# Este é um comentário de linha",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
  
      }
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
    quizItem.querySelector('dl').appendChild(dt)
  
  }
  
  quizItem.querySelector('dl dt').remove()
  
  
  // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }