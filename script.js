// Funzione globale per caricare le degustazioni
function loadTastings() {
    const tastingsList = document.getElementById('tastingsList');
    const tastings = JSON.parse(localStorage.getItem('wineTastings')) || [];
    tastingsList.innerHTML = '';

    tastings.forEach(tasting => {
        const card = document.createElement('div');
        card.className = 'tasting-card';
        card.innerHTML = `
            <div class="card-header">
                <div class="header-content">
                    <h3>${tasting.wineName} (${tasting.year || 'N/A'})</h3>
                    <span class="tasting-date">${tasting.date} ${tasting.time || ''}</span>
                </div>
                <span class="expand-icon">▼</span>
            </div>
            <div class="card-content">
                <p><strong>Tipo:</strong> ${tasting.wineType}</p>
                ${tasting.producer ? `<p><strong>Produttore:</strong> ${tasting.producer}</p>` : ''}
                ${tasting.region ? `<p><strong>Regione:</strong> ${tasting.region}</p>` : ''}
                ${tasting.rating ? `<p><strong>Valutazione:</strong> ${'★'.repeat(tasting.rating)}${'☆'.repeat(5-tasting.rating)}</p>` : ''}
                
                <div class="tasting-sections">
                    <div class="tasting-section">
                        <h4>Esame Visivo</h4>
                        ${tasting.clarity && tasting.clarity !== 'na' ? `
                            <div class="subsection">
                                <h5>Limpidezza</h5>
                                <p>${tasting.clarity.replace('_', ' ')}</p>
                            </div>
                        ` : ''}
                        ${tasting.whiteColor && tasting.whiteColor !== 'na' ? `
                            <div class="subsection">
                                <h5>Colore (Bianchi)</h5>
                                <p>${tasting.whiteColor}</p>
                            </div>
                        ` : ''}
                        ${tasting.roseColor && tasting.roseColor !== 'na' ? `
                            <div class="subsection">
                                <h5>Colore (Rosé)</h5>
                                <p>${tasting.roseColor.replace('_', ' ')}</p>
                            </div>
                        ` : ''}
                        ${tasting.redColor && tasting.redColor !== 'na' ? `
                            <div class="subsection">
                                <h5>Colore (Rossi)</h5>
                                <p>${tasting.redColor}</p>
                            </div>
                        ` : ''}
                        ${tasting.consistency && tasting.consistency !== 'na' ? `
                            <div class="subsection">
                                <h5>Consistenza</h5>
                                <p>${tasting.consistency}</p>
                            </div>
                        ` : ''}
                        ${(tasting.bubbleChains || tasting.bubbleSpeed || tasting.bubbleSize || tasting.bubblePersistence) ? `
                            <div class="subsection">
                                <h5>Effervescenza (Vini frizzanti e spumanti)</h5>
                                ${tasting.bubbleChains && tasting.bubbleChains !== 'na' ? `<p><strong>Numero Catenelle:</strong> ${tasting.bubbleChains.replace('_', ' ')}</p>` : ''}
                                ${tasting.bubbleSpeed && tasting.bubbleSpeed !== 'na' ? `<p><strong>Velocità Ascesa:</strong> ${tasting.bubbleSpeed}</p>` : ''}
                                ${tasting.bubbleSize && tasting.bubbleSize !== 'na' ? `<p><strong>Grana Bollicine:</strong> ${tasting.bubbleSize.replace('_', ' ')}</p>` : ''}
                                ${tasting.bubblePersistence && tasting.bubblePersistence !== 'na' ? `<p><strong>Persistenza Bollicine:</strong> ${tasting.bubblePersistence.replace('_', ' ')}</p>` : ''}
                            </div>
                        ` : ''}
                        ${tasting.visualNotes ? `
                            <div class="subsection">
                                <h5>Note</h5>
                                <p>${tasting.visualNotes}</p>
                            </div>
                        ` : ''}
                    </div>
                    
                    <div class="tasting-section">
                        <h4>Esame Olfattivo</h4>
                        ${tasting.noseIntensity && tasting.noseIntensity !== 'na' ? `
                            <div class="subsection">
                                <h5>Intensità</h5>
                                <p>${tasting.noseIntensity.replace('_', ' ')}</p>
                            </div>
                        ` : ''}
                        ${tasting.descriptors && tasting.descriptors.length > 0 ? `
                            <div class="subsection">
                                <h5>Descrittori</h5>
                                <p>${tasting.descriptors.map(d => d.charAt(0).toUpperCase() + d.slice(1)).join(', ')}</p>
                            </div>
                        ` : ''}
                        ${tasting.noseComplexity && tasting.noseComplexity !== 'na' ? `
                            <div class="subsection">
                                <h5>Complessità</h5>
                                <p>${tasting.noseComplexity.replace('_', ' ')}</p>
                            </div>
                        ` : ''}
                        ${tasting.noseQuality && tasting.noseQuality !== 'na' ? `
                            <div class="subsection">
                                <h5>Qualità Olfattiva</h5>
                                <p>${tasting.noseQuality.charAt(0).toUpperCase() + tasting.noseQuality.slice(1)}</p>
                            </div>
                        ` : ''}
                        ${tasting.noseNotes ? `
                            <div class="subsection">
                                <h5>Note</h5>
                                <p>${tasting.noseNotes}</p>
                            </div>
                        ` : ''}
                    </div>
                    
                    <div class="tasting-section">
                        <h4>Esame Gusto-Olfattivo</h4>
                        ${tasting.sweetness && tasting.sweetness !== 'na' ? `
                            <div class="subsection">
                                <h5>Dolcezza</h5>
                                <p>${tasting.sweetness.replace('_', ' ')}</p>
                            </div>
                        ` : ''}
                        ${tasting.acidity && tasting.acidity !== 'na' ? `
                            <div class="subsection">
                                <h5>Acidità</h5>
                                <p>${tasting.acidity.replace('_', ' ')}</p>
                            </div>
                        ` : ''}
                        ${tasting.alcohol && tasting.alcohol !== 'na' ? `
                            <div class="subsection">
                                <h5>Alcolicità</h5>
                                <p>${tasting.alcohol.replace('_', ' ')}</p>
                            </div>
                        ` : ''}
                        ${tasting.tannicity && tasting.tannicity !== 'na' ? `
                            <div class="subsection">
                                <h5>Tannicità</h5>
                                <p>${tasting.tannicity.replace('_', ' ')}</p>
                            </div>
                        ` : ''}
                        ${tasting.roundness && tasting.roundness !== 'na' ? `
                            <div class="subsection">
                                <h5>Rotondità</h5>
                                <p>${tasting.roundness.replace('_', ' ')}</p>
                            </div>
                        ` : ''}
                        ${tasting.sapidity && tasting.sapidity !== 'na' ? `
                            <div class="subsection">
                                <h5>Sapidità</h5>
                                <p>${tasting.sapidity.replace('_', ' ')}</p>
                            </div>
                        ` : ''}
                        ${tasting.effervescence && tasting.effervescence !== 'na' ? `
                            <div class="subsection">
                                <h5>Effervescenza</h5>
                                <p>${tasting.effervescence}</p>
                            </div>
                        ` : ''}
                        ${tasting.tasteIntensity && tasting.tasteIntensity !== 'na' ? `
                            <div class="subsection">
                                <h5>Intensità</h5>
                                <p>${tasting.tasteIntensity.replace('_', ' ')}</p>
                            </div>
                        ` : ''}
                        ${tasting.structure && tasting.structure !== 'na' ? `
                            <div class="subsection">
                                <h5>Struttura</h5>
                                <p>${tasting.structure.replace('_', ' ')}</p>
                            </div>
                        ` : ''}
                        ${tasting.balance && tasting.balance !== 'na' ? `
                            <div class="subsection">
                                <h5>Equilibrio</h5>
                                <p>${tasting.balance.replace('_', ' ')}</p>
                            </div>
                        ` : ''}
                        ${tasting.persistence && tasting.persistence !== 'na' ? `
                            <div class="subsection">
                                <h5>Persistenza</h5>
                                <p>${tasting.persistence.replace('_', ' ')}</p>
                            </div>
                        ` : ''}
                        ${tasting.tasteQuality && tasting.tasteQuality !== 'na' ? `
                            <div class="subsection">
                                <h5>Qualità Gusto-Olfattiva</h5>
                                <p>${tasting.tasteQuality.charAt(0).toUpperCase() + tasting.tasteQuality.slice(1)}</p>
                            </div>
                        ` : ''}
                        ${tasting.tasteNotes ? `
                            <div class="subsection">
                                <h5>Note</h5>
                                <p>${tasting.tasteNotes}</p>
                            </div>
                        ` : ''}
                    </div>
                    
                    <div class="tasting-section">
                        <h4>Considerazioni Finali</h4>
                        ${tasting.evolutionaryState && tasting.evolutionaryState !== 'na' ? `
                            <div class="subsection">
                                <h5>Stato Evolutivo</h5>
                                <p>${tasting.evolutionaryState.charAt(0).toUpperCase() + tasting.evolutionaryState.slice(1)}</p>
                            </div>
                        ` : ''}
                        ${tasting.harmony && tasting.harmony !== 'na' ? `
                            <div class="subsection">
                                <h5>Armonia</h5>
                                <p>${tasting.harmony.replace('_', ' ')}</p>
                            </div>
                        ` : ''}
                        ${tasting.overallQuality && tasting.overallQuality !== 'na' ? `
                            <div class="subsection">
                                <h5>Qualità Complessiva</h5>
                                <p>${tasting.overallQuality.charAt(0).toUpperCase() + tasting.overallQuality.slice(1)}</p>
                            </div>
                        ` : ''}
                        ${tasting.notes ? `
                            <div class="subsection">
                                <h5>Note</h5>
                                <p>${tasting.notes}</p>
                            </div>
                        ` : ''}
                    </div>

                    <div class="tasting-section">
                        <h4>Scheda di Valutazione a Punti</h4>
                        ${(tasting.appearance || tasting.intensity || tasting.purity_elegance || 
                           tasting.complexity_attractiveness || tasting.intensity_structure || 
                           tasting.balancePoints || tasting.expressiveness_elegance || 
                           tasting.persistence_attractiveness || tasting.overallHarmony || 
                           tasting.quality_character) ? `
                            <div class="subsection">
                                <table class="pivot-table">
                                    <thead>
                                        <tr>
                                            <th>Criteri</th>
                                            <th>Punteggio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${tasting.appearance ? `
                                            <tr>
                                                <td>Aspetto</td>
                                                <td>${(parseInt(tasting.appearance) / 10).toFixed(1)}</td>
                                            </tr>
                                        ` : ''}
                                        ${tasting.intensity ? `
                                            <tr>
                                                <td>Intensità</td>
                                                <td>${(parseInt(tasting.intensity) / 10).toFixed(1)}</td>
                                            </tr>
                                        ` : ''}
                                        ${tasting.purity_elegance ? `
                                            <tr>
                                                <td>Purezza Eleganza</td>
                                                <td>${(parseInt(tasting.purity_elegance) / 10).toFixed(1)}</td>
                                            </tr>
                                        ` : ''}
                                        ${tasting.complexity_attractiveness ? `
                                            <tr>
                                                <td>Complessità Attrattiva</td>
                                                <td>${(parseInt(tasting.complexity_attractiveness) / 10).toFixed(1)}</td>
                                            </tr>
                                        ` : ''}
                                        ${tasting.intensity_structure ? `
                                            <tr>
                                                <td>Intensità Struttura</td>
                                                <td>${(parseInt(tasting.intensity_structure) / 10).toFixed(1)}</td>
                                            </tr>
                                        ` : ''}
                                        ${tasting.balancePoints ? `
                                            <tr>
                                                <td>Equilibrio</td>
                                                <td>${(parseInt(tasting.balancePoints) / 10).toFixed(1)}</td>
                                            </tr>
                                        ` : ''}
                                        ${tasting.expressiveness_elegance ? `
                                            <tr>
                                                <td>Espressività Eleganza</td>
                                                <td>${(parseInt(tasting.expressiveness_elegance) / 10).toFixed(1)}</td>
                                            </tr>
                                        ` : ''}
                                        ${tasting.persistence_attractiveness ? `
                                            <tr>
                                                <td>Persistenza Attrattiva</td>
                                                <td>${(parseInt(tasting.persistence_attractiveness) / 10).toFixed(1)}</td>
                                            </tr>
                                        ` : ''}
                                        ${tasting.overallHarmony ? `
                                            <tr>
                                                <td>Armonia Complessiva</td>
                                                <td>${(parseInt(tasting.overallHarmony) / 10).toFixed(1)}</td>
                                            </tr>
                                        ` : ''}
                                        ${tasting.quality_character ? `
                                            <tr>
                                                <td>Qualità Carattere Complessivo</td>
                                                <td>${(parseInt(tasting.quality_character) / 10).toFixed(1)}</td>
                                            </tr>
                                        ` : ''}
                                        <tr class="total-row">
                                            <td><strong>Punteggio Totale</strong></td>
                                            <td><strong>${(
                                                (tasting.appearance ? (parseInt(tasting.appearance) / 10) * parseFloat(tasting.appearanceDeviation) : 0) +
                                                (tasting.intensity ? (parseInt(tasting.intensity) / 10) * parseFloat(tasting.intensityDeviation) : 0) +
                                                (tasting.purity_elegance ? (parseInt(tasting.purity_elegance) / 10) * parseFloat(tasting.purity_eleganceDeviation) : 0) +
                                                (tasting.complexity_attractiveness ? (parseInt(tasting.complexity_attractiveness) / 10) * parseFloat(tasting.complexity_attractivenessDeviation) : 0) +
                                                (tasting.intensity_structure ? (parseInt(tasting.intensity_structure) / 10) * parseFloat(tasting.intensity_structureDeviation) : 0) +
                                                (tasting.balancePoints ? (parseInt(tasting.balancePoints) / 10) * parseFloat(tasting.balancePointsDeviation) : 0) +
                                                (tasting.expressiveness_elegance ? (parseInt(tasting.expressiveness_elegance) / 10) * parseFloat(tasting.expressiveness_eleganceDeviation) : 0) +
                                                (tasting.persistence_attractiveness ? (parseInt(tasting.persistence_attractiveness) / 10) * parseFloat(tasting.persistence_attractivenessDeviation) : 0) +
                                                (tasting.overallHarmony ? (parseInt(tasting.overallHarmony) / 10) * parseFloat(tasting.overallHarmonyDeviation) : 0) +
                                                (tasting.quality_character ? (parseInt(tasting.quality_character) / 10) * parseFloat(tasting.quality_characterDeviation) : 0)
                                            ).toFixed(2)}</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ` : ''}
                    </div>
                </div>

                <div class="card-buttons">
                    <button onclick="editTasting(${tasting.id})" class="edit-btn">Modifica</button>
                    <button onclick="deleteTasting(${tasting.id})" class="delete-btn">Elimina</button>
                </div>
            </div>
        `;
        
        // Aggiungi l'event listener per l'espansione/compressione
        card.addEventListener('click', (e) => {
            // Non espandere/compressione se si clicca sui pulsanti
            if (e.target.tagName === 'BUTTON') return;
            
            // Toggle della classe expanded
            card.classList.toggle('expanded');
        });
        
        tastingsList.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tastingForm');
    const tastingsList = document.getElementById('tastingsList');
    const exportButton = document.getElementById('exportButton');
    const jsonFileInput = document.getElementById('jsonFile');
    const uploadAddBtn = document.getElementById('uploadAddBtn');
    const uploadReplaceBtn = document.getElementById('uploadReplaceBtn');
    
    // Carica le degustazioni salvate all'avvio
    loadTastings();

    // Gestione del caricamento file
    uploadAddBtn.addEventListener('click', () => {
        jsonFileInput.click();
        jsonFileInput.onchange = () => handleFileUpload(false);
    });

    uploadReplaceBtn.addEventListener('click', () => {
        jsonFileInput.click();
        jsonFileInput.onchange = () => handleFileUpload(true);
    });

    function handleFileUpload(replace) {
        const file = jsonFileInput.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const loadedTastings = JSON.parse(e.target.result);
                
                // Verifica che il file contenga un array di degustazioni
                if (!Array.isArray(loadedTastings)) {
                    throw new Error('Il file non contiene un array di degustazioni valido');
                }

                // Verifica la struttura dei dati
                loadedTastings.forEach(tasting => {
                    if (!tasting.wineName || !tasting.wineType) {
                        throw new Error('Il file contiene dati non validi');
                    }
                });

                let currentTastings = JSON.parse(localStorage.getItem('wineTastings')) || [];
                
                if (replace) {
                    // Sostituisci le degustazioni esistenti
                    localStorage.setItem('wineTastings', JSON.stringify(loadedTastings));
                } else {
                    // Aggiungi le nuove degustazioni a quelle esistenti
                    // Rimuovi eventuali duplicati basati sull'ID
                    const existingIds = new Set(currentTastings.map(t => t.id));
                    const newTastings = loadedTastings.filter(t => !existingIds.has(t.id));
                    const combinedTastings = [...currentTastings, ...newTastings];
                    localStorage.setItem('wineTastings', JSON.stringify(combinedTastings));
                }

                // Aggiorna la visualizzazione
                loadTastings();
                
                // Mostra un messaggio di successo
                alert(replace ? 
                    'Degustazioni caricate con successo!' : 
                    'Nuove degustazioni aggiunte con successo!'
                );
            } catch (error) {
                alert('Errore nel caricamento del file: ' + error.message);
            }
        };
        reader.readAsText(file);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Debug logging
        console.log('Form submission started');
        
        // Raccoglie i dati dal form
        const tastingData = {
            id: window.editingId || Date.now(),
            date: window.editingId ? getTastingById(window.editingId).date : new Date().toLocaleDateString(),
            time: window.editingId ? getTastingById(window.editingId).time : new Date().toLocaleTimeString(),
            wineName: document.getElementById('wineName').value,
            wineType: document.getElementById('wineType').value,
            year: document.getElementById('year').value || '',
            producer: document.getElementById('producer').value || '',
            region: document.getElementById('region').value || '',
            visualNotes: document.getElementById('visualNotes').value || '',
            clarity: document.querySelector('input[name="clarity"]:checked')?.value || '',
            whiteColor: document.querySelector('input[name="whiteColor"]:checked')?.value || '',
            roseColor: document.querySelector('input[name="roseColor"]:checked')?.value || '',
            redColor: document.querySelector('input[name="redColor"]:checked')?.value || '',
            consistency: document.querySelector('input[name="consistency"]:checked')?.value || '',
            bubbleChains: document.querySelector('input[name="bubble_chains"]:checked')?.value || '',
            bubbleSpeed: document.querySelector('input[name="bubble_speed"]:checked')?.value || '',
            bubbleSize: document.querySelector('input[name="bubble_size"]:checked')?.value || '',
            bubblePersistence: document.querySelector('input[name="bubble_persistence"]:checked')?.value || '',
            noseIntensity: document.querySelector('input[name="nose_intensity"]:checked')?.value || '',
            noseComplexity: document.querySelector('input[name="nose_complexity"]:checked')?.value || '',
            noseQuality: document.querySelector('input[name="nose_quality"]:checked')?.value || '',
            descriptors: Array.from(document.querySelectorAll('input[name="descriptors"]:checked')).map(cb => cb.value),
            noseNotes: document.getElementById('noseNotes').value || '',
            sweetness: document.querySelector('input[name="sweetness"]:checked')?.value || '',
            acidity: document.querySelector('input[name="acidity"]:checked')?.value || '',
            alcohol: document.querySelector('input[name="alcohol"]:checked')?.value || '',
            tannicity: document.querySelector('input[name="tannicity"]:checked')?.value || '',
            roundness: document.querySelector('input[name="roundness"]:checked')?.value || '',
            sapidity: document.querySelector('input[name="sapidity"]:checked')?.value || '',
            effervescence: document.querySelector('input[name="effervescence"]:checked')?.value || '',
            tasteIntensity: document.querySelector('input[name="taste_intensity"]:checked')?.value || '',
            structure: document.querySelector('input[name="structure"]:checked')?.value || '',
            balance: document.querySelector('input[name="balance"]:checked')?.value || '',
            persistence: document.querySelector('input[name="persistence"]:checked')?.value || '',
            tasteQuality: document.querySelector('input[name="taste_quality"]:checked')?.value || '',
            tasteNotes: document.getElementById('tasteNotes').value || '',
            evolutionaryState: document.querySelector('input[name="evolutionary_state"]:checked')?.value || '',
            harmony: document.querySelector('input[name="harmony"]:checked')?.value || '',
            overallQuality: document.querySelector('input[name="overall_quality"]:checked')?.value || '',
            notes: document.getElementById('notes').value || '',
            appearance: document.querySelector('input[name="appearance"]:checked')?.value || '',
            appearanceDeviation: document.querySelector('input[name="appearance_deviation"]').value || '0',
            intensity: document.querySelector('input[name="intensity"]:checked')?.value || '',
            intensityDeviation: document.querySelector('input[name="intensity_deviation"]').value || '0',
            purity_elegance: document.querySelector('input[name="purity_elegance"]:checked')?.value || '',
            purity_eleganceDeviation: document.querySelector('input[name="purity_elegance_deviation"]').value || '0',
            complexity_attractiveness: document.querySelector('input[name="complexity_attractiveness"]:checked')?.value || '',
            complexity_attractivenessDeviation: document.querySelector('input[name="complexity_attractiveness_deviation"]').value || '0',
            intensity_structure: document.querySelector('input[name="intensity_structure"]:checked')?.value || '',
            intensity_structureDeviation: document.querySelector('input[name="intensity_structure_deviation"]').value || '0',
            balancePoints: document.querySelector('input[name="balance_points"]:checked')?.value || '',
            balancePointsDeviation: document.querySelector('input[name="balance_points_deviation"]').value || '0',
            expressiveness_elegance: document.querySelector('input[name="expressiveness_elegance"]:checked')?.value || '',
            expressiveness_eleganceDeviation: document.querySelector('input[name="expressiveness_elegance_deviation"]').value || '0',
            persistence_attractiveness: document.querySelector('input[name="persistence_attractiveness"]:checked')?.value || '',
            persistence_attractivenessDeviation: document.querySelector('input[name="persistence_attractiveness_deviation"]').value || '0',
            overallHarmony: document.querySelector('input[name="overall_harmony"]:checked')?.value || '',
            overallHarmonyDeviation: document.querySelector('input[name="overall_harmony_deviation"]').value || '0',
            quality_character: document.querySelector('input[name="quality_character"]:checked')?.value || '',
            quality_characterDeviation: document.querySelector('input[name="quality_character_deviation"]').value || '0'
        };

        // Debug logging
        console.log('Tasting data collected:', tastingData);

        try {
            // Salva o aggiorna la degustazione
            if (window.editingId) {
                console.log('Updating existing tasting with ID:', window.editingId);
                updateTasting(tastingData);
                window.editingId = null;
                form.querySelector('button[type="submit"]').textContent = 'Salva Degustazione';
            } else {
                console.log('Saving new tasting');
                saveTasting(tastingData);
            }
            
            // Resetta il form
            form.reset();
            
            // Aggiorna la lista delle degustazioni
            loadTastings();
            
            // Mostra un messaggio di successo
            alert('Degustazione salvata con successo!');
            
            // Debug logging
            console.log('Form submission completed successfully');
        } catch (error) {
            console.error('Error saving tasting:', error);
            alert('Si è verificato un errore durante il salvataggio della degustazione. Per favore riprova.');
        }
    });

    function getTastingById(id) {
        const tastings = JSON.parse(localStorage.getItem('wineTastings')) || [];
        return tastings.find(tasting => tasting.id === id);
    }

    function saveTasting(tasting) {
        try {
            let tastings = JSON.parse(localStorage.getItem('wineTastings')) || [];
            tastings.push(tasting);
            localStorage.setItem('wineTastings', JSON.stringify(tastings));
            console.log('Tasting saved successfully:', tasting);
        } catch (error) {
            console.error('Error in saveTasting:', error);
            throw error;
        }
    }

    function updateTasting(updatedTasting) {
        try {
            let tastings = JSON.parse(localStorage.getItem('wineTastings')) || [];
            const index = tastings.findIndex(t => t.id === updatedTasting.id);
            if (index !== -1) {
                tastings[index] = updatedTasting;
                localStorage.setItem('wineTastings', JSON.stringify(tastings));
                console.log('Tasting updated successfully:', updatedTasting);
            } else {
                console.error('Tasting not found for update:', updatedTasting.id);
                throw new Error('Degustazione non trovata');
            }
        } catch (error) {
            console.error('Error in updateTasting:', error);
            throw error;
        }
    }

    // Funzione per scaricare il JSON
    function downloadJSON(data) {
        const dataStr = JSON.stringify(data, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = 'degustazioni.json';
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    }

    // Aggiungi l'event listener per il pulsante di esportazione
    exportButton.addEventListener('click', () => {
        const tastings = JSON.parse(localStorage.getItem('wineTastings')) || [];
        if (tastings.length === 0) {
            alert('Non ci sono degustazioni da esportare!');
            return;
        }
        downloadJSON(tastings);
    });

    // Funzione per calcolare il punteggio totale
    function calculateTotalScore() {
        let total = 0;
        const rows = document.querySelectorAll('.pivot-table tbody tr:not(.section-header):not(.total-row)');
        
        rows.forEach(row => {
            const selectedRadio = row.querySelector('input[type="radio"]:checked');
            const deviation = parseFloat(row.querySelector('input[type="number"]').value);
            
            if (selectedRadio) {
                const score = parseInt(selectedRadio.value) / 10;
                total += score * deviation;
            }
        });
        
        document.getElementById('totalScore').textContent = total.toFixed(2);
    }

    // Aggiungi event listener per il calcolo del punteggio quando cambia un radio button
    const radioButtons = document.querySelectorAll('.pivot-table input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', calculateTotalScore);
    });

    // Calcola il punteggio iniziale
    calculateTotalScore();
});

// Funzione per modificare una degustazione
function editTasting(id) {
    const tastings = JSON.parse(localStorage.getItem('wineTastings')) || [];
    const tasting = tastings.find(t => t.id === id);
    
    if (tasting) {
        // Popola il form con i dati della degustazione
        document.getElementById('wineName').value = tasting.wineName;
        document.getElementById('wineType').value = tasting.wineType;
        document.getElementById('year').value = tasting.year || '';
        document.getElementById('producer').value = tasting.producer || '';
        document.getElementById('region').value = tasting.region || '';
        document.getElementById('visualNotes').value = tasting.visualNotes || '';
        if (tasting.clarity) {
            document.querySelector(`input[name="clarity"][value="${tasting.clarity}"]`).checked = true;
        }
        if (tasting.whiteColor) {
            document.querySelector(`input[name="whiteColor"][value="${tasting.whiteColor}"]`).checked = true;
        }
        if (tasting.roseColor) {
            document.querySelector(`input[name="roseColor"][value="${tasting.roseColor}"]`).checked = true;
        }
        if (tasting.redColor) {
            document.querySelector(`input[name="redColor"][value="${tasting.redColor}"]`).checked = true;
        }
        if (tasting.consistency) {
            document.querySelector(`input[name="consistency"][value="${tasting.consistency}"]`).checked = true;
        }
        if (tasting.bubbleChains) {
            document.querySelector(`input[name="bubble_chains"][value="${tasting.bubbleChains}"]`).checked = true;
        }
        if (tasting.bubbleSpeed) {
            document.querySelector(`input[name="bubble_speed"][value="${tasting.bubbleSpeed}"]`).checked = true;
        }
        if (tasting.bubbleSize) {
            document.querySelector(`input[name="bubble_size"][value="${tasting.bubbleSize}"]`).checked = true;
        }
        if (tasting.bubblePersistence) {
            document.querySelector(`input[name="bubble_persistence"][value="${tasting.bubblePersistence}"]`).checked = true;
        }
        if (tasting.noseIntensity) {
            document.querySelector(`input[name="nose_intensity"][value="${tasting.noseIntensity}"]`).checked = true;
        }
        if (tasting.noseComplexity) {
            document.querySelector(`input[name="nose_complexity"][value="${tasting.noseComplexity}"]`).checked = true;
        }
        if (tasting.noseQuality) {
            document.querySelector(`input[name="nose_quality"][value="${tasting.noseQuality}"]`).checked = true;
        }
        if (tasting.descriptors) {
            tasting.descriptors.forEach(desc => {
                document.querySelector(`input[name="descriptors"][value="${desc}"]`).checked = true;
            });
        }
        document.getElementById('noseNotes').value = tasting.noseNotes || '';
        document.getElementById('sweetness').value = tasting.sweetness || '';
        document.getElementById('acidity').value = tasting.acidity || '';
        document.getElementById('alcohol').value = tasting.alcohol || '';
        document.getElementById('tannicity').value = tasting.tannicity || '';
        document.getElementById('roundness').value = tasting.roundness || '';
        document.getElementById('sapidity').value = tasting.sapidity || '';
        document.getElementById('effervescence').value = tasting.effervescence || '';
        document.getElementById('tasteIntensity').value = tasting.tasteIntensity || '';
        document.getElementById('structure').value = tasting.structure || '';
        document.getElementById('balance').value = tasting.balance || '';
        document.getElementById('persistence').value = tasting.persistence || '';
        document.getElementById('tasteQuality').value = tasting.tasteQuality || '';
        document.getElementById('tasteNotes').value = tasting.tasteNotes || '';
        document.getElementById('rating').value = tasting.rating || '';
        document.getElementById('notes').value = tasting.notes || '';
        if (tasting.evolutionaryState) {
            document.querySelector(`input[name="evolutionary_state"][value="${tasting.evolutionaryState}"]`).checked = true;
        }
        if (tasting.harmony) {
            document.querySelector(`input[name="harmony"][value="${tasting.harmony}"]`).checked = true;
        }
        if (tasting.overallQuality) {
            document.querySelector(`input[name="overall_quality"][value="${tasting.overallQuality}"]`).checked = true;
        }
        if (tasting.appearance) {
            document.querySelector(`input[name="appearance"][value="${tasting.appearance}"]`).checked = true;
        }
        if (tasting.appearanceDeviation) {
            document.querySelector('input[name="appearance_deviation"]').value = tasting.appearanceDeviation;
        }
        if (tasting.intensity) {
            document.querySelector(`input[name="intensity"][value="${tasting.intensity}"]`).checked = true;
        }
        if (tasting.intensityDeviation) {
            document.querySelector('input[name="intensity_deviation"]').value = tasting.intensityDeviation;
        }
        if (tasting.purity) {
            document.querySelector(`input[name="purity"][value="${tasting.purity}"]`).checked = true;
        }
        if (tasting.purityDeviation) {
            document.querySelector('input[name="purity_deviation"]').value = tasting.purityDeviation;
        }
        if (tasting.purity_elegance) {
            document.querySelector(`input[name="purity_elegance"][value="${tasting.purity_elegance}"]`).checked = true;
        }
        if (tasting.purity_eleganceDeviation) {
            document.querySelector('input[name="purity_elegance_deviation"]').value = tasting.purity_eleganceDeviation;
        }
        if (tasting.complexity_attractiveness) {
            document.querySelector(`input[name="complexity_attractiveness"][value="${tasting.complexity_attractiveness}"]`).checked = true;
        }
        if (tasting.complexity_attractivenessDeviation) {
            document.querySelector('input[name="complexity_attractiveness_deviation"]').value = tasting.complexity_attractivenessDeviation;
        }
        if (tasting.intensity_structure) {
            document.querySelector(`input[name="intensity_structure"][value="${tasting.intensity_structure}"]`).checked = true;
        }
        if (tasting.intensity_structureDeviation) {
            document.querySelector('input[name="intensity_structure_deviation"]').value = tasting.intensity_structureDeviation;
        }
        if (tasting.balancePoints) {
            document.querySelector(`input[name="balance_points"][value="${tasting.balancePoints}"]`).checked = true;
        }
        if (tasting.balancePointsDeviation) {
            document.querySelector('input[name="balance_points_deviation"]').value = tasting.balancePointsDeviation;
        }
        if (tasting.expressiveness_elegance) {
            document.querySelector(`input[name="expressiveness_elegance"][value="${tasting.expressiveness_elegance}"]`).checked = true;
        }
        if (tasting.expressiveness_eleganceDeviation) {
            document.querySelector('input[name="expressiveness_elegance_deviation"]').value = tasting.expressiveness_eleganceDeviation;
        }
        if (tasting.persistence_attractiveness) {
            document.querySelector(`input[name="persistence_attractiveness"][value="${tasting.persistence_attractiveness}"]`).checked = true;
        }
        if (tasting.persistence_attractivenessDeviation) {
            document.querySelector('input[name="persistence_attractiveness_deviation"]').value = tasting.persistence_attractivenessDeviation;
        }
        if (tasting.overallHarmony) {
            document.querySelector(`input[name="overall_harmony"][value="${tasting.overallHarmony}"]`).checked = true;
        }
        if (tasting.overallHarmonyDeviation) {
            document.querySelector('input[name="overall_harmony_deviation"]').value = tasting.overallHarmonyDeviation;
        }
        if (tasting.quality_character) {
            document.querySelector(`input[name="quality_character"][value="${tasting.quality_character}"]`).checked = true;
        }
        if (tasting.quality_characterDeviation) {
            document.querySelector('input[name="quality_character_deviation"]').value = tasting.quality_characterDeviation;
        }

        // Imposta la modalità modifica
        window.editingId = id;
        document.querySelector('#tastingForm button[type="submit"]').textContent = 'Aggiorna Degustazione';
        
        // Scorri fino al form
        document.getElementById('tastingForm').scrollIntoView({ behavior: 'smooth' });

        if (tasting.sweetness) {
            document.querySelector(`input[name="sweetness"][value="${tasting.sweetness}"]`).checked = true;
        }
        if (tasting.acidity) {
            document.querySelector(`input[name="acidity"][value="${tasting.acidity}"]`).checked = true;
        }
        if (tasting.alcohol) {
            document.querySelector(`input[name="alcohol"][value="${tasting.alcohol}"]`).checked = true;
        }
        if (tasting.tannicity) {
            document.querySelector(`input[name="tannicity"][value="${tasting.tannicity}"]`).checked = true;
        }
        if (tasting.roundness) {
            document.querySelector(`input[name="roundness"][value="${tasting.roundness}"]`).checked = true;
        }
        if (tasting.sapidity) {
            document.querySelector(`input[name="sapidity"][value="${tasting.sapidity}"]`).checked = true;
        }
        if (tasting.effervescence) {
            document.querySelector(`input[name="effervescence"][value="${tasting.effervescence}"]`).checked = true;
        }
        if (tasting.tasteIntensity) {
            document.querySelector(`input[name="taste_intensity"][value="${tasting.tasteIntensity}"]`).checked = true;
        }
        if (tasting.structure) {
            document.querySelector(`input[name="structure"][value="${tasting.structure}"]`).checked = true;
        }
        if (tasting.balance) {
            document.querySelector(`input[name="balance"][value="${tasting.balance}"]`).checked = true;
        }
        if (tasting.persistence) {
            document.querySelector(`input[name="persistence"][value="${tasting.persistence}"]`).checked = true;
        }
        if (tasting.tasteQuality) {
            document.querySelector(`input[name="taste_quality"][value="${tasting.tasteQuality}"]`).checked = true;
        }
    }
}

// Funzione per eliminare una degustazione
function deleteTasting(id) {
    if (confirm('Sei sicuro di voler eliminare questa degustazione?')) {
        let tastings = JSON.parse(localStorage.getItem('wineTastings')) || [];
        tastings = tastings.filter(tasting => tasting.id !== id);
        localStorage.setItem('wineTastings', JSON.stringify(tastings));
        loadTastings();
    }
}

// === GRAFICO RADAR PER ABBINAMENTO CIBO-BIRRA ===
if (document.getElementById('pairingRadarChart')) {
    // Etichette 26 raggi (con separazione Succulenza/Untuosità e accorpamento Frizzantezza/Sapidità solo nel grafico)
    const radarLabels = [
        'Birra: Dolcezza, Morbidezza', // 0
        'Birra: Intensità Gusto-Olfattiva, Persistenza Gusto-Olfattiva', // 1
        '', '',
        'Cibo: Succulenza', // 4
        'Cibo: Untuosità', // 5
        '', '',
        'Birra: Acidità, Amaro', // 8
        'Birra: Frizzantezza, Sapidità', // 9 (accorpato solo nel grafico)
        '', '',
        'Cibo: Intensità Gusto-Olfattiva, Persistenza Gusto-Olfattiva', // 12
        'Cibo: Sapidità, Piccantezza, Tendenza Amarognola, Tendenza Acida, Dolcezza', // 13
        '', '',
        'Birra: Secchezza', // 16
        'Birra: Alcolicità', // 17
        '', '',
        'Cibo: Grassezza', // 20
        'Cibo: Tendenza Dolce', // 21
        '', ''
    ];
    // Indici dei punti validi per ciascun gruppo
    const foodIdx = [4,5,12,13,20,21];
    const beerIdx = [0,1,8,9,16,17];

    function getRadarFoodValues() {
        const arr = Array(radarLabels.length).fill(null);
        arr[4] = parseInt(document.getElementById('succulence').value) || 0;
        arr[5] = parseInt(document.getElementById('untuosity').value) || 0;
        arr[12] = Math.max(
            parseInt(document.getElementById('tasteIntensity').value) || 0,
            parseInt(document.getElementById('tastePersistence').value) || 0
        );
        arr[13] = Math.max(
            parseInt(document.getElementById('sapidity').value) || 0,
            parseInt(document.getElementById('spiciness').value) || 0,
            parseInt(document.getElementById('bitterTendency').value) || 0,
            parseInt(document.getElementById('acidTendency').value) || 0,
            parseInt(document.getElementById('sweetness').value) || 0
        );
        arr[20] = parseInt(document.getElementById('fattiness').value) || 0;
        arr[21] = parseInt(document.getElementById('sweetTendency').value) || 0;
        return arr;
    }
    function getRadarBeerValues() {
        const arr = Array(radarLabels.length).fill(null);
        arr[0] = Math.max(
            parseInt(document.getElementById('beerSweetness').value) || 0,
            parseInt(document.getElementById('beerSoftness').value) || 0
        );
        arr[1] = Math.max(
            parseInt(document.getElementById('beerTasteIntensity').value) || 0,
            parseInt(document.getElementById('beerTastePersistence').value) || 0
        );
        arr[8] = Math.max(
            parseInt(document.getElementById('beerAcidity').value) || 0,
            parseInt(document.getElementById('beerBitterness').value) || 0
        );
        arr[9] = Math.max(
            parseInt(document.getElementById('beerSparkling').value) || 0,
            parseInt(document.getElementById('beerSapidity').value) || 0
        );
        arr[16] = parseInt(document.getElementById('beerDryness').value) || 0;
        arr[17] = parseInt(document.getElementById('beerAlcohol').value) || 0;
        return arr;
    }
    // Plugin per disegnare i poligoni chiusi custom
    const closedPolygonPlugin = {
        id: 'closedPolygons',
        afterDatasetsDraw(chart, args, opts) {
            const {ctx, chartArea, scales} = chart;
            const rScale = chart.scales.r;
            if (!rScale) return;
            // Cibo
            const foodVals = getRadarFoodValues();
            ctx.save();
            ctx.beginPath();
            let first = true;
            foodIdx.forEach(idx => {
                const v = foodVals[idx];
                if (v !== null && v !== undefined) {
                    const pt = rScale.getPointPositionForValue(idx, v);
                    if (first) {
                        ctx.moveTo(pt.x, pt.y);
                        first = false;
                    } else {
                        ctx.lineTo(pt.x, pt.y);
                    }
                }
            });
            // Chiudi il poligono
            const pt0 = rScale.getPointPositionForValue(foodIdx[0], foodVals[foodIdx[0]]);
            ctx.lineTo(pt0.x, pt0.y);
            ctx.closePath();
            ctx.globalAlpha = 0.25;
            ctx.fillStyle = 'rgba(70,130,180,1)';
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.strokeStyle = 'rgba(70,130,180,1)';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.restore();
            // Birra
            const beerVals = getRadarBeerValues();
            ctx.save();
            ctx.beginPath();
            first = true;
            beerIdx.forEach(idx => {
                const v = beerVals[idx];
                if (v !== null && v !== undefined) {
                    const pt = rScale.getPointPositionForValue(idx, v);
                    if (first) {
                        ctx.moveTo(pt.x, pt.y);
                        first = false;
                    } else {
                        ctx.lineTo(pt.x, pt.y);
                    }
                }
            });
            // Chiudi il poligono
            const ptb0 = rScale.getPointPositionForValue(beerIdx[0], beerVals[beerIdx[0]]);
            ctx.lineTo(ptb0.x, ptb0.y);
            ctx.closePath();
            ctx.globalAlpha = 0.25;
            ctx.fillStyle = 'rgba(255,99,132,1)';
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.strokeStyle = 'rgba(255,99,132,1)';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.restore();
        }
    };

    // Inizializza il grafico radar
    const ctx = document.getElementById('pairingRadarChart').getContext('2d');
    const radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: radarLabels,
            datasets: [
                {
                    label: 'Cibo',
                    data: getRadarFoodValues(),
                    backgroundColor: 'rgba(70, 130, 180, 0.0)', // trasparente, poligono custom
                    borderColor: 'rgba(70, 130, 180, 0.0)',
                    pointBackgroundColor: 'rgba(70, 130, 180, 1)',
                    borderWidth: 2
                },
                {
                    label: 'Birra',
                    data: getRadarBeerValues(),
                    backgroundColor: 'rgba(255, 99, 132, 0.0)',
                    borderColor: 'rgba(255, 99, 132, 0.0)',
                    pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false
                }
            },
            scales: {
                r: {
                    min: 0,
                    max: 10,
                    ticks: {
                        stepSize: 2
                    },
                    startAngle: -6.5,
                    pointLabels: {
                        font: function(context) {
                            // Indici dei raggi cibo
                            const boldIdx = [4,5,12,13,20,21];
                            if (boldIdx.includes(context.index)) {
                                return {size: 14, weight: 'bold'};
                            } else {
                                return {size: 14, weight: 'normal'};
                            }
                        }
                    }
                }
            }
        },
        plugins: [closedPolygonPlugin]
    });

    // Aggiorna il grafico quando cambiano i valori
    const foodInputs = [
        'sweetTendency','fattiness','succulence','sapidity','spiciness','bitterTendency','acidTendency','sweetness','tastePersistence','tasteIntensity'
    ];
    const beerInputs = [
        'beerSweetness','beerSoftness','beerTasteIntensity','beerTastePersistence','beerAlcohol','beerDryness','beerAcidity','beerBitterness','beerSparkling'
    ];
    [...foodInputs, ...beerInputs].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', () => {
                radarChart.data.datasets[0].data = getRadarFoodValues();
                radarChart.data.datasets[1].data = getRadarBeerValues();
                radarChart.update();
            });
        }
    });
}

// === FINE GRAFICO RADAR ===

// Gestione degli abbinamenti cibo-birra
if (document.getElementById('pairingForm')) {
    const form = document.getElementById('pairingForm');
    const pairingsList = document.getElementById('pairingsList');
    const exportButton = document.getElementById('exportButton');
    const uploadAddBtn = document.getElementById('uploadAddBtn');
    const uploadReplaceBtn = document.getElementById('uploadReplaceBtn');
    const jsonFileInput = document.getElementById('jsonFile');

    // Carica gli abbinamenti salvati all'avvio
    let savedPairings = JSON.parse(localStorage.getItem('beerPairings')) || [];

    // Funzione per salvare un nuovo abbinamento
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const pairingData = {
            id: Date.now(),
            date: new Date().toLocaleString(),
            pairingName: document.getElementById('pairingName').value,
            beerStyle: document.getElementById('beerStyle').value,
            beerName: document.getElementById('beerName').value,
            beerCharacteristics: {
                sweetness: parseInt(document.getElementById('beerSweetness').value) || 0,
                softness: parseInt(document.getElementById('beerSoftness').value) || 0,
                tasteIntensity: parseInt(document.getElementById('beerTasteIntensity').value) || 0,
                tastePersistence: parseInt(document.getElementById('beerTastePersistence').value) || 0,
                alcohol: parseInt(document.getElementById('beerAlcohol').value) || 0,
                dryness: parseInt(document.getElementById('beerDryness').value) || 0,
                acidity: parseInt(document.getElementById('beerAcidity').value) || 0,
                bitterness: parseInt(document.getElementById('beerBitterness').value) || 0,
                sparkling: parseInt(document.getElementById('beerSparkling').value) || 0
            },
            foodName: document.getElementById('foodName').value,
            foodCharacteristics: {
                sweetTendency: parseInt(document.getElementById('sweetTendency').value) || 0,
                fattiness: parseInt(document.getElementById('fattiness').value) || 0,
                succulence: parseInt(document.getElementById('succulence').value) || 0,
                sapidity: parseInt(document.getElementById('sapidity').value) || 0,
                spiciness: parseInt(document.getElementById('spiciness').value) || 0,
                bitterTendency: parseInt(document.getElementById('bitterTendency').value) || 0,
                acidTendency: parseInt(document.getElementById('acidTendency').value) || 0,
                sweetness: parseInt(document.getElementById('sweetness').value) || 0,
                tastePersistence: parseInt(document.getElementById('tastePersistence').value) || 0,
                tasteIntensity: parseInt(document.getElementById('tasteIntensity').value) || 0
            },
            evaluation: {
                foodStructure: document.querySelector('input[name="foodStructure"]:checked')?.value || '',
                beerStructure: document.querySelector('input[name="beerStructure"]:checked')?.value || '',
                aromaticAffinity: document.querySelector('input[name="aromaticAffinity"]:checked')?.value || '',
                pairingHarmony: document.querySelector('input[name="pairingHarmony"]:checked')?.value || ''
            }
        };

        savedPairings.push(pairingData);
        localStorage.setItem('beerPairings', JSON.stringify(savedPairings));
        
        displayPairings();
        form.reset();
    });

    // Funzione per visualizzare gli abbinamenti salvati
    function displayPairings() {
        pairingsList.innerHTML = '';
        savedPairings.forEach(pairing => {
            const pairingElement = document.createElement('div');
            pairingElement.className = 'tasting-card';
            pairingElement.innerHTML = `
                <div class="card-header">
                    <div class="header-content">
                        <h3>${pairing.pairingName}</h3>
                        <span class="tasting-date">${pairing.date}</span>
                    </div>
                    <span class="expand-icon">▼</span>
                </div>
                <div class="card-content">
                    <div class="pairing-header">
                        <p><strong>Cibo/Preparazione:</strong> ${pairing.foodName}</p>
                        <p><strong>Denominazione Birra:</strong> ${pairing.beerStyle}</p>
                        <p><strong>Nome Birra:</strong> ${pairing.beerName}</p>
                    </div>
                    
                    <div class="food-characteristics">
                        <h4>Caratteristiche del Cibo</h4>
                        <div class="rating-display">
                            <p><strong>Tendenza Dolce:</strong> ${pairing.foodCharacteristics.sweetTendency}/10</p>
                            <p><strong>Grasssezza:</strong> ${pairing.foodCharacteristics.fattiness}/10</p>
                            <p><strong>Succulenza Untuosità:</strong> ${pairing.foodCharacteristics.succulence}/10</p>
                            <p><strong>Sapidità:</strong> ${pairing.foodCharacteristics.sapidity}/10</p>
                            <p><strong>Piccantezza:</strong> ${pairing.foodCharacteristics.spiciness}/10</p>
                            <p><strong>Tendenza Amarognola:</strong> ${pairing.foodCharacteristics.bitterTendency}/10</p>
                            <p><strong>Tendenza Acida:</strong> ${pairing.foodCharacteristics.acidTendency}/10</p>
                            <p><strong>Dolcezza:</strong> ${pairing.foodCharacteristics.sweetness}/10</p>
                            <p><strong>Persistenza Gusto Olfattiva:</strong> ${pairing.foodCharacteristics.tastePersistence}/10</p>
                            <p><strong>Intensità Gusto Olfattiva:</strong> ${pairing.foodCharacteristics.tasteIntensity}/10</p>
                        </div>
                    </div>
                    
                    <div class="beer-characteristics">
                        <h4>Caratteristiche della Birra</h4>
                        <div class="rating-display">
                            <p><strong>Dolcezza:</strong> ${pairing.beerCharacteristics.sweetness}/10</p>
                            <p><strong>Morbidezza:</strong> ${pairing.beerCharacteristics.softness}/10</p>
                            <p><strong>Intensità Gusto-Olfattiva:</strong> ${pairing.beerCharacteristics.tasteIntensity}/10</p>
                            <p><strong>Persistenza Gusto-Olfattiva:</strong> ${pairing.beerCharacteristics.tastePersistence}/10</p>
                            <p><strong>Alcolicità:</strong> ${pairing.beerCharacteristics.alcohol}/10</p>
                            <p><strong>Secchezza:</strong> ${pairing.beerCharacteristics.dryness}/10</p>
                            <p><strong>Acidità:</strong> ${pairing.beerCharacteristics.acidity}/10</p>
                            <p><strong>Amaro:</strong> ${pairing.beerCharacteristics.bitterness}/10</p>
                            <p><strong>Frizzantezza Sapidità:</strong> ${pairing.beerCharacteristics.sparkling}/10</p>
                        </div>
                    </div>

                    <div class="evaluation-section">
                        <h4>Valutazione Abbinamento</h4>
                        <div class="rating-display">
                            <p><strong>Struttura del Cibo:</strong> ${pairing.evaluation.foodStructure.replace('_', ' ')}</p>
                            <p><strong>Struttura della Birra:</strong> ${pairing.evaluation.beerStructure.replace('_', ' ')}</p>
                            <p><strong>Affinità Aromatica:</strong> ${pairing.evaluation.aromaticAffinity.replace('_', ' ')}</p>
                            <p><strong>Abbinamento:</strong> ${pairing.evaluation.pairingHarmony.replace('_', ' ')}</p>
                        </div>
                    </div>
                    
                    <div class="card-buttons">
                        <button onclick="deletePairing(${pairing.id})" class="delete-btn">Elimina</button>
                    </div>
                </div>
            `;
            
            // Aggiungi l'event listener per l'espansione/compressione
            pairingElement.addEventListener('click', (e) => {
                if (e.target.tagName === 'BUTTON') return;
                pairingElement.classList.toggle('expanded');
            });
            
            pairingsList.appendChild(pairingElement);
        });
    }

    // Funzione per eliminare un abbinamento
    window.deletePairing = function(id) {
        savedPairings = savedPairings.filter(pairing => pairing.id !== id);
        localStorage.setItem('beerPairings', JSON.stringify(savedPairings));
        displayPairings();
    };

    // Funzione per esportare gli abbinamenti
    exportButton.addEventListener('click', () => {
        const dataStr = JSON.stringify(savedPairings, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = 'abbinamenti_birre.json';
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    });

    // Funzione per caricare gli abbinamenti
    function loadPairings(file, shouldReplace = false) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const loadedPairings = JSON.parse(e.target.result);
                if (shouldReplace) {
                    savedPairings = loadedPairings;
                } else {
                    savedPairings = [...savedPairings, ...loadedPairings];
                }
                localStorage.setItem('beerPairings', JSON.stringify(savedPairings));
                displayPairings();
            } catch (error) {
                alert('Errore nel caricamento del file: ' + error.message);
            }
        };
        reader.readAsText(file);
    }

    // Gestione del caricamento file
    uploadAddBtn.addEventListener('click', () => {
        jsonFileInput.click();
    });

    uploadReplaceBtn.addEventListener('click', () => {
        jsonFileInput.click();
    });

    jsonFileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            const shouldReplace = e.target.files[0].name.includes('replace');
            loadPairings(e.target.files[0], shouldReplace);
        }
    });

    // Visualizza gli abbinamenti all'avvio
    displayPairings();
} 