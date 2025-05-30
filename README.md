# App Degustazione Vini

Una semplice applicazione web per registrare e gestire le note di degustazione dei vini.

## Caratteristiche

- Form per l'inserimento delle note di degustazione
- Salvataggio locale dei dati nel browser
- Esportazione automatica dei dati in formato JSON
- Interfaccia responsive e user-friendly
- Possibilità di eliminare le degustazioni salvate

## Come Utilizzare

1. Apri il file `index.html` nel tuo browser
2. Compila il form con i dettagli della degustazione
3. Clicca su "Salva Degustazione" per salvare i dati
4. I dati verranno salvati localmente nel browser e verrà scaricato automaticamente un file JSON di backup
5. Le degustazioni salvate appariranno nella sezione "Degustazioni Salvate"
6. Puoi eliminare una degustazione cliccando sul pulsante "Elimina"

## Struttura dei Dati

I dati vengono salvati in formato JSON con la seguente struttura:

```json
{
  "id": "timestamp",
  "date": "data",
  "wineName": "nome del vino",
  "wineType": "tipo di vino",
  "year": "anno",
  "producer": "produttore",
  "region": "regione",
  "visualNotes": "note visive",
  "noseNotes": "note olfattive",
  "tasteNotes": "note gustative",
  "rating": "valutazione",
  "notes": "note aggiuntive"
}
```

## Note Tecniche

- L'applicazione utilizza il localStorage del browser per salvare i dati
- I dati vengono esportati automaticamente in un file JSON ad ogni salvataggio
- Non è richiesta alcuna installazione o configurazione
- Funziona completamente offline

## Sviluppi Futuri

- Aggiunta di filtri per la ricerca delle degustazioni
- Possibilità di modificare le degustazioni salvate
- Integrazione con un database remoto
- Aggiunta di immagini per le bottiglie
- Sistema di autenticazione per utenti multipli 