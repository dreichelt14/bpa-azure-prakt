# Praktikum Azure Event Hubs

## Aufgabenstellung
### Verarbeiten sie den eingehenden Stream von Temperaturdaten und Erzeugen sie daraus neue Events um fehlerhafte Materialien frühzeitig zu erkennen.

## Vorraussetzungen
Installation von NPM und [Node.js](https://nodejs.org/en/) 12 LTS oder Neuer

## Installation
- Befehl `npm install` ausführen
- Im Rootverzeichnis in die Datei `.env` Verbindungszeichenfolgen eintragen
- Projekt mit `npm start` ausführen
- `index.js` im `src`-Ordner bearbeiten. Nodemon aktualisiert die App automatisch nach Änderung (STRG+C)

## Hilfestellung
- Dokumentation von Microsoft für [@azure/event-hubs](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/eventhub/event-hubs)
- Offizielle [Dokumentation](https://docs.microsoft.com/de-de/azure/event-hubs/event-hubs-about) für Azure Event Hubs