# Monstre de Lait
## @showdialog
Programme ton ver de terre pour qu'il se déplace.

## Étape 1

Crée une ``||variables: variable||`` et donne-lui le nom ``||variables:définir||``.

Dans le bloc ``||basic: au démarrage||`` insére le bloc ``||variables: définir||``. 
Dans le bloc ``||variables: définir||``, dans le menu déroulant créer une nouvelle vairable ``||variables: ouvert||``. 
Change aussi le ``||variables: 0||`` par le nombre ``||variables: 95||``.

```blocks

let ouvert = 95

```

## Étape 2

Sous le bloc ``||variables: définir ouvert à 95||`` ajoute un bloc ``||variables: définir||``
change le ``||variables: 0||`` par le nombre ``||variables: 175||``.

```blocks

let ouvert = 95
let fermé = 175

```

## Étape 3

Dans le bloc ``||basic:toujours||`` insére le bloc ``||LED: Tracer le graphique en barre de||``.
À la place du ''0'' insere le bloc ``||input: niveau d'intensisté lumineuse||``.

```blocks

basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    0
    )

    ```

## Étape 4

Sous le bloc ``||LED: Tracer le graphique en barre de||`` ajoute le bloc ``||variables: définir||`` et change ``||variables: définir||`` pour ``||variables: angle||``.

```blocks
basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    0
    )
    angle = pins.map(
    input.lightLevel(),


```