# Menu Turístico Premium - Site

Um site moderno e responsivo desenvolvido em **HTML5 e CSS puro** para apresentar as atrações turísticas de Maringá.

## 📋 Características

### Design e Layout
- **Header Fixo**: Navegação fixa no topo com menu responsivo
- **Hero Slider**: Carrossel automático com 3 slides principais
- **Cards Interativos**: Grid de 4 categorias principais (Eventos, Atrações, Hotéis, Gastronomia)
- **Seção Destaque**: Apresentação de evento em destaque com imagem
- **Galeria**: Grid de imagens do Instagram
- **Newsletter**: Formulário de inscrição por email
- **Footer**: Links organizados em 3 colunas

### Funcionalidades
- ✅ Slider automático com navegação manual
- ✅ Indicadores de slide clicáveis
- ✅ Efeitos hover em cards e botões
- ✅ Validação de formulário de email
- ✅ Scroll suave para links internos
- ✅ Header dinâmico que muda ao fazer scroll
- ✅ Totalmente responsivo (mobile, tablet, desktop)

## 🎨 Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| Azul Marinho | #001a4d | Fundo principal, header |
| Roxo | #a855f7 | Eventos |
| Verde | #22c55e | Atrações |
| Azul | #3b82f6 | Hotéis |
| Laranja | #ff6b35 | Gastronomia, CTAs |

## 📁 Estrutura de Arquivos

```
menuturist-site/
├── index.html          # Arquivo HTML principal
├── css/
│   └── styles.css      # Estilos CSS
├── js/
│   └── script.js       # JavaScript para interatividade
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### 1. Abrir Localmente
Simplesmente abra o arquivo `index.html` em seu navegador:

```bash
# No seu terminal
cd menuturist-site
open index.html  # macOS
# ou
xdg-open index.html  # Linux
# ou
start index.html  # Windows
```

### 2. Usar um Servidor Local
Para melhor performance, use um servidor HTTP:

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (com http-server)
npx http-server
```

Depois acesse: `http://localhost:8000`

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: até 480px

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Semântico e acessível
- **CSS3**: Grid, Flexbox, Media Queries
- **JavaScript Vanilla**: Sem dependências externas
- **Google Fonts**: Montserrat e Open Sans

## 📝 Seções do Site

### Header
- Logo com ícone de localização
- Menu de navegação com 6 categorias
- Informações de temperatura e localização
- Botões de Login e Anunciar

### Hero Slider
- 3 slides com imagens de fundo
- Overlay gradiente para melhor legibilidade
- Botões de navegação (anterior/próximo)
- Indicadores de slide
- Auto-advance a cada 5 segundos

### Explore Maringá
- 4 cards com categorias principais
- Ícones SVG personalizados
- Cores distintas para cada categoria
- Botões de ação

### Destaque da Semana
- Evento em destaque com imagem
- Descrição detalhada
- Data, local e tipo do evento
- Botões de ação

### Momentos em Maringá
- Galeria de 4 imagens
- Link para perfil do Instagram
- Efeito hover nas imagens

### Newsletter
- Campo de email com validação
- Botão de inscrição
- Fundo gradiente atrativo

### Footer
- 3 colunas de links
- Informações de copyright

## 🎯 Funcionalidades JavaScript

### Slider
```javascript
changeSlide(direction)  // Navega para próximo/anterior
goToSlide(index)        // Vai para um slide específico
updateSlider()          // Atualiza visual do slider
```

### Newsletter
```javascript
handleNewsletterSubmit(event)  // Processa envio do formulário
```

### Scroll
- Smooth scroll para links internos
- Header dinâmico que muda ao fazer scroll

## 🔧 Customização

### Mudar Cores
Edite as variáveis CSS em `css/styles.css`:

```css
:root {
    --primary-color: #001a4d;
    --accent-orange: #ff6b35;
    /* ... mais cores ... */
}
```

### Mudar Imagens
Substitua as URLs das imagens no `index.html`:

```html
<div class="slide" style="background-image: url('sua-imagem.jpg');">
```

### Adicionar Seções
Copie e adapte o HTML de uma seção existente, mantendo a estrutura CSS.

## 📊 Performance

- Sem dependências externas
- CSS otimizado com variáveis
- JavaScript mínimo e eficiente
- Imagens otimizadas do Unsplash
- Carregamento rápido

## 🌐 Compatibilidade

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers modernos

## 📄 Licença

Este projeto é fornecido como está para uso pessoal e comercial.

## 👨‍💻 Desenvolvido por

Desenvolvido com HTML5 e CSS puro, sem frameworks ou dependências externas.

---

**Versão**: 1.0  
**Última atualização**: Janeiro 2026
