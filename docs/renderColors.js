// Nova função renderColors - copiar isso para o index.html

function renderColors(container) {
    const primitives = designTokens.color.primitives;
    const semantic = designTokens.color;
    let html = '';

    // Section 1: SEMANTIC COLORS (Cards) - Priority Display
    html += '<div style="margin-bottom: 64px;"><h2 style="font-size: 34px; font-weight: 550; margin-bottom: 16px; color: var(--color-text-primary);">Semantic Colors</h2>';
    html += '<p style="font-size: 16px; color: var(--color-text-muted); margin-bottom: 32px;">Tokens semânticos prontos para uso em componentes e interfaces</p>';
    html += '<div class="semantic-colors-grid">';

    // Surface Card
    html += `
        <div class="semantic-color-card">
            <div class="semantic-card-header">
                <h3 class="semantic-card-title">Surface</h3>
                <p class="semantic-card-description">Cores de background e superfícies</p>
            </div>
            <div class="semantic-card-tokens">
    `;

    const surfaceTokens = [
        { name: 'Default', path: 'surface.neutral.default', token: semantic.surface.neutral.default.bank },
        { name: 'Secondary', path: 'surface.neutral.secondary', token: semantic.surface.neutral.secondary.bank },
        { name: 'Tertiary', path: 'surface.neutral.tertiary', token: semantic.surface.neutral.tertiary.bank },
        { name: 'Inverse', path: 'surface.neutral.inverse', token: semantic.surface.neutral.inverse.bank },
        { name: 'Accent Soft', path: 'surface.accent.soft', token: semantic.surface.accent.soft.bank },
        { name: 'Accent Default', path: 'surface.accent.default', token: semantic.surface.accent.default.bank },
        { name: 'Info', path: 'surface.info.default', token: semantic.surface.info.default.bank },
        { name: 'Success', path: 'surface.success.default', token: semantic.surface.success.default.bank },
        { name: 'Warning', path: 'surface.warning.default', token: semantic.surface.warning.default.bank },
        { name: 'Danger', path: 'surface.danger.default', token: semantic.surface.danger.default.bank }
    ];

    surfaceTokens.forEach(item => {
        const color = resolveToken(item.token);
        html += `
            <div class="semantic-token-item" onclick="copyToClipboard('${color}', this)">
                <div class="semantic-token-color" style="background-color: ${color}"></div>
                <div class="semantic-token-details">
                    <div class="semantic-token-label">${item.name}</div>
                    <div class="semantic-token-path">${item.path}</div>
                </div>
                <div class="semantic-token-hex">${color}</div>
            </div>
        `;
    });

    html += '</div></div>';

    // Text Card
    html += `
        <div class="semantic-color-card">
            <div class="semantic-card-header">
                <h3 class="semantic-card-title">Text</h3>
                <p class="semantic-card-description">Cores para textos e tipografia</p>
            </div>
            <div class="semantic-card-tokens">
    `;

    const textTokens = [
        { name: 'Soft', path: 'text.neutral.soft', token: semantic.text.neutral.soft.bank },
        { name: 'Default', path: 'text.neutral.default', token: semantic.text.neutral.default.bank },
        { name: 'Strong', path: 'text.neutral.strong', token: semantic.text.neutral.strong.bank },
        { name: 'Inverse', path: 'text.neutral.inverse', token: semantic.text.neutral.inverse.bank },
        { name: 'Accent', path: 'text.accent.default', token: semantic.text.accent.default.bank },
        { name: 'Info', path: 'text.info.default', token: semantic.text.info.default.bank },
        { name: 'Success', path: 'text.success.default', token: semantic.text.success.default.bank },
        { name: 'Warning', path: 'text.warning.default', token: semantic.text.warning.default.bank },
        { name: 'Danger', path: 'text.danger.default', token: semantic.text.danger.default.bank }
    ];

    textTokens.forEach(item => {
        const color = resolveToken(item.token);
        html += `
            <div class="semantic-token-item" onclick="copyToClipboard('${color}', this)">
                <div class="semantic-token-color" style="background-color: ${color}"></div>
                <div class="semantic-token-details">
                    <div class="semantic-token-label">${item.name}</div>
                    <div class="semantic-token-path">${item.path}</div>
                </div>
                <div class="semantic-token-hex">${color}</div>
            </div>
        `;
    });

    html += '</div></div>';

    // Border Card
    html += `
        <div class="semantic-color-card">
            <div class="semantic-card-header">
                <h3 class="semantic-card-title">Border</h3>
                <p class="semantic-card-description">Cores para bordas e divisores</p>
            </div>
            <div class="semantic-card-tokens">
    `;

    const borderTokens = [
        { name: 'Soft', path: 'border.neutral.soft', token: semantic.border.neutral.soft.bank },
        { name: 'Default', path: 'border.neutral.default', token: semantic.border.neutral.default.bank },
        { name: 'Strong', path: 'border.neutral.strong', token: semantic.border.neutral.strong.bank },
        { name: 'Accent', path: 'border.accent.default', token: semantic.border.accent.default.bank },
        { name: 'Info', path: 'border.info.default', token: semantic.border.info.default.bank },
        { name: 'Success', path: 'border.success.default', token: semantic.border.success.default.bank },
        { name: 'Warning', path: 'border.warning.default', token: semantic.border.warning.default.bank },
        { name: 'Danger', path: 'border.danger.default', token: semantic.border.danger.default.bank }
    ];

    borderTokens.forEach(item => {
        const color = resolveToken(item.token);
        html += `
            <div class="semantic-token-item" onclick="copyToClipboard('${color}', this)">
                <div class="semantic-token-color" style="background-color: ${color}"></div>
                <div class="semantic-token-details">
                    <div class="semantic-token-label">${item.name}</div>
                    <div class="semantic-token-path">${item.path}</div>
                </div>
                <div class="semantic-token-hex">${color}</div>
            </div>
        `;
    });

    html += '</div></div>';

    // Icon Card
    html += `
        <div class="semantic-color-card">
            <div class="semantic-card-header">
                <h3 class="semantic-card-title">Icon</h3>
                <p class="semantic-card-description">Cores para ícones e elementos gráficos</p>
            </div>
            <div class="semantic-card-tokens">
    `;

    const iconTokens = [
        { name: 'Strong', path: 'icon.neutral.strong', token: semantic.icon.neutral.strong.bank },
        { name: 'Default', path: 'icon.neutral.default', token: semantic.icon.neutral.default.bank },
        { name: 'Soft', path: 'icon.neutral.soft', token: semantic.icon.neutral.soft.bank },
        { name: 'Softer', path: 'icon.neutral.softer', token: semantic.icon.neutral.softer.bank },
        { name: 'Accent', path: 'icon.accent.default', token: semantic.icon.accent.default.bank },
        { name: 'Info', path: 'icon.info.default', token: semantic.icon.info.default.bank },
        { name: 'Success', path: 'icon.success.default', token: semantic.icon.success.default.bank },
        { name: 'Warning', path: 'icon.warning.default', token: semantic.icon.warning.default.bank },
        { name: 'Danger', path: 'icon.danger.default', token: semantic.icon.danger.default.bank }
    ];

    iconTokens.forEach(item => {
        const color = resolveToken(item.token);
        html += `
            <div class="semantic-token-item" onclick="copyToClipboard('${color}', this)">
                <div class="semantic-token-color" style="background-color: ${color}"></div>
                <div class="semantic-token-details">
                    <div class="semantic-token-label">${item.name}</div>
                    <div class="semantic-token-path">${item.path}</div>
                </div>
                <div class="semantic-token-hex">${color}</div>
            </div>
        `;
    });

    html += '</div></div>';

    // Utility Card
    html += `
        <div class="semantic-color-card">
            <div class="semantic-card-header">
                <h3 class="semantic-card-title">Utility</h3>
                <p class="semantic-card-description">Cores utilitárias para casos de uso específicos</p>
            </div>
            <div class="semantic-card-tokens">
    `;

    const utilityTokens = [
        { name: 'Light', path: 'utility.light', token: semantic.utility.light.bank },
        { name: 'Dark', path: 'utility.dark', token: semantic.utility.dark.bank }
    ];

    utilityTokens.forEach(item => {
        const color = resolveToken(item.token);
        html += `
            <div class="semantic-token-item" onclick="copyToClipboard('${color}', this)">
                <div class="semantic-token-color" style="background-color: ${color}"></div>
                <div class="semantic-token-details">
                    <div class="semantic-token-label">${item.name}</div>
                    <div class="semantic-token-path">${item.path}</div>
                </div>
                <div class="semantic-token-hex">${color}</div>
            </div>
        `;
    });

    html += '</div></div>';

    // Shadow Card
    html += `
        <div class="semantic-color-card">
            <div class="semantic-card-header">
                <h3 class="semantic-card-title">Shadow</h3>
                <p class="semantic-card-description">Cores de sombra com diferentes opacidades</p>
            </div>
            <div class="semantic-card-tokens">
    `;

    const shadowTokens = [
        { name: 'Soft', path: 'shadow.soft', token: semantic.shadow.soft.bank.color, opacity: semantic.shadow.soft.bank.opacity },
        { name: 'Medium', path: 'shadow.medium', token: semantic.shadow.medium.bank.color, opacity: semantic.shadow.medium.bank.opacity },
        { name: 'Intense', path: 'shadow.intense', token: semantic.shadow.intense.bank.color, opacity: semantic.shadow.intense.bank.opacity }
    ];

    shadowTokens.forEach(item => {
        const color = resolveToken(item.token);
        const displayColor = color + ' @ ' + item.opacity;
        html += `
            <div class="semantic-token-item" onclick="copyToClipboard('${color}', this)">
                <div class="semantic-token-color" style="background-color: ${color}; opacity: ${parseInt(item.opacity) / 100}"></div>
                <div class="semantic-token-details">
                    <div class="semantic-token-label">${item.name}</div>
                    <div class="semantic-token-path">${item.path}</div>
                </div>
                <div class="semantic-token-hex">${displayColor}</div>
            </div>
        `;
    });

    html += '</div></div>';

    html += '</div></div>';

    // Section 2: PRIMITIVE COLORS (Simple Rows)
    html += `
        <div class="primitives-section">
            <div class="primitives-header">
                <h2 class="primitives-title">Color Primitives</h2>
                <p class="primitives-description">Paleta base de cores do sistema - use os tokens semânticos acima sempre que possível</p>
            </div>
    `;

    // Gray
    html += '<div class="primitive-scale"><h3 class="primitive-scale-title">Gray</h3><div class="primitive-colors-row">';
    Object.entries(primitives.gray).forEach(([key, value]) => {
        html += `
            <div class="primitive-color-item">
                <div class="primitive-color-preview" style="background-color: ${value.dark}"></div>
                <div class="primitive-color-name">gray.${key}</div>
                <div class="primitive-color-value">Dark: ${value.dark}</div>
                <div class="primitive-color-value">Light: ${value.light}</div>
                <button class="primitive-copy-btn" onclick="copyToClipboard('${value.dark}', this)">Copiar</button>
            </div>
        `;
    });
    html += '</div></div>';

    // Red
    html += '<div class="primitive-scale"><h3 class="primitive-scale-title">Red</h3><div class="primitive-colors-row">';
    Object.entries(primitives.red).forEach(([key, value]) => {
        html += `
            <div class="primitive-color-item">
                <div class="primitive-color-preview" style="background-color: ${value.dark}"></div>
                <div class="primitive-color-name">red.${key}</div>
                <div class="primitive-color-value">Dark: ${value.dark}</div>
                <div class="primitive-color-value">Light: ${value.light}</div>
                <button class="primitive-copy-btn" onclick="copyToClipboard('${value.dark}', this)">Copiar</button>
            </div>
        `;
    });
    html += '</div></div>';

    // Orange
    html += '<div class="primitive-scale"><h3 class="primitive-scale-title">Orange</h3><div class="primitive-colors-row">';
    Object.entries(primitives.orange).forEach(([key, value]) => {
        html += `
            <div class="primitive-color-item">
                <div class="primitive-color-preview" style="background-color: ${value.dark}"></div>
                <div class="primitive-color-name">orange.${key}</div>
                <div class="primitive-color-value">Dark: ${value.dark}</div>
                <div class="primitive-color-value">Light: ${value.light}</div>
                <button class="primitive-copy-btn" onclick="copyToClipboard('${value.dark}', this)">Copiar</button>
            </div>
        `;
    });
    html += '</div></div>';

    // Green
    html += '<div class="primitive-scale"><h3 class="primitive-scale-title">Green</h3><div class="primitive-colors-row">';
    Object.entries(primitives.green).forEach(([key, value]) => {
        html += `
            <div class="primitive-color-item">
                <div class="primitive-color-preview" style="background-color: ${value.dark}"></div>
                <div class="primitive-color-name">green.${key}</div>
                <div class="primitive-color-value">Dark: ${value.dark}</div>
                <div class="primitive-color-value">Light: ${value.light}</div>
                <button class="primitive-copy-btn" onclick="copyToClipboard('${value.dark}', this)">Copiar</button>
            </div>
        `;
    });
    html += '</div></div>';

    // Blue
    html += '<div class="primitive-scale"><h3 class="primitive-scale-title">Blue</h3><div class="primitive-colors-row">';
    Object.entries(primitives.blue).forEach(([key, value]) => {
        html += `
            <div class="primitive-color-item">
                <div class="primitive-color-preview" style="background-color: ${value.dark}"></div>
                <div class="primitive-color-name">blue.${key}</div>
                <div class="primitive-color-value">Dark: ${value.dark}</div>
                <div class="primitive-color-value">Light: ${value.light}</div>
                <button class="primitive-copy-btn" onclick="copyToClipboard('${value.dark}', this)">Copiar</button>
            </div>
        `;
    });
    html += '</div></div>';

    // Brand
    html += '<div class="primitive-scale"><h3 class="primitive-scale-title">Brand</h3><div class="primitive-colors-row">';
    Object.entries(primitives.brand).forEach(([key, value]) => {
        const color = typeof value === 'object' ? value.dark : value;
        html += `
            <div class="primitive-color-item">
                <div class="primitive-color-preview" style="background-color: ${color}"></div>
                <div class="primitive-color-name">brand.${key}</div>
                <div class="primitive-color-value">${color}</div>
                <div class="primitive-color-value"></div>
                <button class="primitive-copy-btn" onclick="copyToClipboard('${color}', this)">Copiar</button>
            </div>
        `;
    });
    html += '</div></div>';

    html += '</div>';

    container.innerHTML = html;
}
