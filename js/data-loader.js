// ========================================
// DATA LOADER - Carrega dados reais do Menu Turístico
// ========================================

let siteData = null;

// Carregar dados do arquivo JSON
async function loadSiteData() {
    try {
        const response = await fetch('data.json');
        siteData = await response.json();
        console.log('✅ Dados carregados:', {
            restaurantes: siteData.restaurants.length,
            eventos: siteData.events.length,
            categorias: siteData.categories.length,
            vouchers: siteData.vouchers.length
        });
        return siteData;
    } catch (error) {
        console.error('❌ Erro ao carregar dados:', error);
        return null;
    }
}

// Formatar data para exibição em português
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const monthNames = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    const month = monthNames[date.getMonth()];
    return { day, month };
}

// Atualizar slides do hero com eventos reais
function updateHeroSlides() {
    if (!siteData || !siteData.events || siteData.events.length === 0) return;
    
    const slides = document.querySelectorAll('.slide');
    const activeEvents = siteData.events.filter(e => e.isActive).slice(0, 3);
    
    activeEvents.forEach((event, index) => {
        if (slides[index]) {
            const slide = slides[index];
            
            // Atualizar imagem de fundo
            if (event.image) {
                slide.style.backgroundImage = `url('${event.image}')`;
            }
            
            // Atualizar título
            const titleElement = slide.querySelector('.slide-title');
            if (titleElement) {
                titleElement.textContent = event.title;
            }
            
            // Atualizar descrição
            const descElement = slide.querySelector('.slide-description');
            if (descElement) {
                descElement.textContent = event.shortDescription || event.description.substring(0, 100) + '...';
            }
        }
    });
    
    console.log('✅ Hero slides atualizados com eventos reais');
}

// Atualizar evento em destaque
function updateFeaturedEvent() {
    if (!siteData || !siteData.events || siteData.events.length === 0) return;
    
    const featuredEvent = siteData.events.find(e => e.isActive && e.isFeatured) || siteData.events[0];
    if (!featuredEvent) return;
    
    const { day, month } = formatDate(featuredEvent.startDate);
    
    // Atualizar título
    const titleElement = document.querySelector('.highlight-title');
    if (titleElement) {
        titleElement.textContent = featuredEvent.title;
    }
    
    // Atualizar descrição
    const descElement = document.querySelector('.highlight-description');
    if (descElement) {
        descElement.textContent = featuredEvent.description;
    }
    
    // Atualizar data
    const dayElement = document.querySelector('.detail-day');
    const monthElement = document.querySelector('.detail-month');
    if (dayElement) dayElement.textContent = day;
    if (monthElement) monthElement.textContent = month;
    
    // Atualizar local
    const detailValues = document.querySelectorAll('.detail-value');
    if (detailValues.length > 0) {
        detailValues[0].textContent = featuredEvent.location;
    }
    if (detailValues.length > 1) {
        detailValues[1].textContent = featuredEvent.category;
    }
    
    // Atualizar imagem
    const imageElement = document.querySelector('.highlight-image img');
    if (imageElement && featuredEvent.image) {
        imageElement.src = featuredEvent.image;
        imageElement.alt = featuredEvent.title;
    }
    
    console.log('✅ Evento em destaque atualizado:', featuredEvent.title);
}

// Atualizar galeria com imagens reais de restaurantes
function updateGallery() {
    if (!siteData || !siteData.restaurants || siteData.restaurants.length === 0) return;
    
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;
    
    // Limpar galeria existente
    galleryGrid.innerHTML = '';
    
    // Pegar restaurantes em destaque ou primeiros 4
    const featuredRestaurants = siteData.restaurants
        .filter(r => r.isFeatured && r.isActive)
        .slice(0, 4);
    
    const restaurantsToShow = featuredRestaurants.length >= 4 
        ? featuredRestaurants 
        : siteData.restaurants.filter(r => r.isActive).slice(0, 4);
    
    restaurantsToShow.forEach(restaurant => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = restaurant.image || restaurant.coverImage || restaurant.logo;
        img.alt = restaurant.name;
        img.loading = 'lazy';
        
        galleryItem.appendChild(img);
        galleryGrid.appendChild(galleryItem);
    });
    
    console.log('✅ Galeria atualizada com', restaurantsToShow.length, 'restaurantes');
}

// Adicionar contador de estatísticas no console
function showStatistics() {
    if (!siteData) return;
    
    const stats = {
        'Total de Restaurantes': siteData.restaurants.length,
        'Restaurantes Ativos': siteData.restaurants.filter(r => r.isActive).length,
        'Restaurantes em Destaque': siteData.restaurants.filter(r => r.isFeatured).length,
        'Total de Eventos': siteData.events.length,
        'Eventos Ativos': siteData.events.filter(e => e.isActive).length,
        'Categorias': siteData.categories.length,
        'Vouchers': siteData.vouchers.length
    };
    
    console.log('📊 Estatísticas do Menu Turístico:');
    console.table(stats);
}

// Atualizar contadores na página (opcional)
function updateCounters() {
    if (!siteData) return;
    
    // Você pode adicionar elementos na página para mostrar contadores
    // Exemplo: <span id="restaurant-count"></span>
    
    const restaurantCount = document.getElementById('restaurant-count');
    if (restaurantCount) {
        restaurantCount.textContent = siteData.restaurants.filter(r => r.isActive).length;
    }
    
    const eventCount = document.getElementById('event-count');
    if (eventCount) {
        eventCount.textContent = siteData.events.filter(e => e.isActive).length;
    }
}

// Inicializar carregamento de dados
async function initializeDataLoader() {
    console.log('🔄 Carregando dados do Menu Turístico...');
    
    await loadSiteData();
    
    if (siteData) {
        updateHeroSlides();
        updateFeaturedEvent();
        updateGallery();
        updateCounters();
        showStatistics();
        
        console.log('✅ Site atualizado com dados reais!');
    } else {
        console.warn('⚠️ Não foi possível carregar os dados. Usando dados padrão.');
    }
}

// Executar quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDataLoader);
} else {
    initializeDataLoader();
}

// Exportar para uso global (opcional)
window.siteData = siteData;
window.loadSiteData = loadSiteData;
