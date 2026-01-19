# Configuração do GitHub Pages

## Repositório Criado

**Nome**: menuturistico-landing  
**URL**: https://github.com/danilolimaCabral/menuturistico-landing  
**Tipo**: Público

## Como Ativar o GitHub Pages

### Passo 1: Acessar Configurações

Acesse: https://github.com/danilolimaCabral/menuturistico-landing/settings/pages

Ou siga:
1. Vá para https://github.com/danilolimaCabral/menuturistico-landing
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**

### Passo 2: Configurar Source

Na seção **Build and deployment**:

1. **Source**: Selecione **Deploy from a branch**
2. **Branch**: Selecione **main**
3. **Folder**: Selecione **/ (root)**
4. Clique em **Save**

### Passo 3: Aguardar Deploy

O GitHub Pages levará de 1 a 5 minutos para fazer o deploy.

Você verá uma mensagem:
```
Your site is live at https://danilolimacabral.github.io/menuturistico-landing/
```

### Passo 4: Acessar o Site

Após o deploy, seu site estará disponível em:

**https://danilolimacabral.github.io/menuturistico-landing/**

## Estrutura do Repositório

```
menuturistico-landing/
├── index.html          # Página principal (330 linhas)
├── css/
│   └── styles.css      # Estilos CSS (1.006 linhas)
├── js/
│   └── script.js       # JavaScript (196 linhas)
└── README.md           # Documentação
```

## Funcionalidades do Site

- ✅ Slider automático com 3 slides
- ✅ Navegação manual e indicadores
- ✅ Cards interativos por categoria
- ✅ Seção de evento em destaque
- ✅ Galeria de imagens
- ✅ Newsletter com validação
- ✅ Footer completo
- ✅ Totalmente responsivo

## Atualizar o Site

Para fazer alterações:

```bash
# 1. Clonar o repositório
git clone https://github.com/danilolimaCabral/menuturistico-landing.git
cd menuturistico-landing

# 2. Fazer alterações nos arquivos
# Editar index.html, css/styles.css, js/script.js

# 3. Commit e push
git add .
git commit -m "Update: Descrição da alteração"
git push origin main

# 4. Aguardar 1-2 minutos
# O site atualiza automaticamente!
```

## Domínio Customizado (Opcional)

Se você quiser usar um domínio próprio:

### 1. Adicionar CNAME

Na página de configurações do GitHub Pages, adicione seu domínio em **Custom domain**:
```
menuturistico.com.br
```

### 2. Configurar DNS

No seu provedor de DNS, adicione:

**Para domínio raiz (menuturistico.com.br)**:
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

**Para www (www.menuturistico.com.br)**:
```
Type: CNAME
Name: www
Value: danilolimacabral.github.io
```

### 3. Aguardar Propagação

A propagação do DNS pode levar de 1 a 48 horas.

## Monitoramento

Acompanhe o status do deploy em:
https://github.com/danilolimaCabral/menuturistico-landing/actions

## Benefícios

- ✅ **Gratuito**: Hospedagem 100% gratuita
- ✅ **Rápido**: CDN global do GitHub
- ✅ **Seguro**: HTTPS automático
- ✅ **Confiável**: Uptime de 99.9%
- ✅ **Escalável**: Sem limite de visitantes

## Suporte

Para dúvidas ou problemas:
- **Repositório**: https://github.com/danilolimaCabral/menuturistico-landing
- **Issues**: https://github.com/danilolimaCabral/menuturistico-landing/issues

---

**Pronto!** Seu site estará online permanentemente após ativar o GitHub Pages.
