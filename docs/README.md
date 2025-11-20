# Royal DS - Design System Documentation

Documentação completa do Royal DS, um Design System moderno e token-based para aplicações cross-platform.

## 🚀 Visualização Online

A documentação está disponível através do GitHub Pages.

## 📦 Como Publicar no GitHub Pages

### 1. Commit e Push dos Arquivos

```bash
git add docs/
git commit -m "Add Royal DS documentation"
git push origin main
```

### 2. Ativar GitHub Pages

1. Acesse seu repositório no GitHub
2. Vá em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione:
   - Branch: `main`
   - Folder: `/docs`
5. Clique em **Save**

### 3. Aguardar Deploy

- O GitHub Pages irá construir e publicar seu site automaticamente
- Após alguns minutos, sua documentação estará disponível em:
  ```
  https://[seu-usuario].github.io/[nome-do-repositorio]/
  ```

## 📁 Estrutura do Projeto

```
docs/
├── index.html          # Página principal da documentação
└── README.md          # Este arquivo
```

## 🎨 Features da Documentação

### ✨ Funcionalidades

- **Navegação Intuitiva**: Sidebar com categorias organizadas
- **Busca**: Sistema de busca para encontrar tokens rapidamente
- **Visualizações Interativas**:
  - Paleta de cores com dark/light mode
  - Amostras tipográficas
  - Previews de espaçamento
  - Demonstrações de sombras
- **Copy to Clipboard**: Copie valores de tokens com um clique
- **Resolução de Tokens**: Veja como tokens semânticos resolvem para primitivos
- **Responsivo**: Funciona perfeitamente em mobile, tablet e desktop

### 📚 Seções Documentadas

1. **Visão Geral**: Introdução ao sistema e princípios
2. **Colors**: Sistema completo de cores (primitivos e semânticos)
3. **Typography**: Escalas tipográficas e pesos de fonte
4. **Spacing**: Tokens de espaçamento (inset, inline, stack)
5. **Grid**: Sistema de grid responsivo
6. **Shadows**: Tokens de sombra
7. **Borders**: Border radius e width
8. **Opacity**: Escala de opacidade
9. **Sizes**: Tamanhos para ícones, divisores e thumbs

## 🎯 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com CSS Grid e Flexbox
- **JavaScript Vanilla**: Interatividade sem dependências
- **JUST Sans Variable**: Fonte principal do Design System

## 🔧 Personalização

### Alterar o JSON de Tokens

O JSON completo dos tokens está embutido no `index.html` na variável `designTokens`. Para atualizar:

1. Abra o arquivo `index.html`
2. Localize o objeto `const designTokens = {`
3. Substitua o conteúdo pelo seu JSON atualizado
4. Salve e faça commit

### Customizar Cores da Interface

As cores da interface de documentação podem ser alteradas nas CSS custom properties em `:root`:

```css
:root {
    --color-bg-primary: #0C0F17;
    --color-bg-secondary: #1D202B;
    --color-accent: #C2F141;
    /* ... */
}
```

## 📱 Compatibilidade

- ✅ Chrome/Edge (últimas versões)
- ✅ Firefox (últimas versões)
- ✅ Safari (últimas versões)
- ✅ Mobile browsers

## 🤝 Contribuindo

Para contribuir com melhorias na documentação:

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: Nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto faz parte do Royal DS Design System.

---

Desenvolvido com ♠️ por Helton Lira
