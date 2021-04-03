const {codeblock_symbols} = require('../../config.json');

const colorsFormat = `
+-----+---------------------+------------+
| N.  |       Colores       |  Códigos   |
+-----+---------------------+------------+
|  1. |  Amarillo           | #FFFF00    |
|  2. |  Amarillo Pastel    | #FDFD96    |
|  3. |  Azul               | #0000FF    |
|  4. |  Bebé Azul          | #89CFF0    |
|  5. |  Bebé Rosa          | #FFB7CE    |
|  6. |  Bígaro Ligero      | #C1C6FC    |
|  7. |  Cian               | #00FFFF    |
|  8. |  Guisante Pastel    | #BEE7A5    |
|  9. |  Lila Pastel        | #BDB0D0    |
| 10. |  Lima Claro         | #BEFD73    |
| 11. |  Magenta            | #FF00FF    |
| 12. |  Marrón Pastel      | #836953    |
| 13. |  Menta Mágica       | #AAF0D1    |
| 14. |  Morado Bebé        | #CA9BF7    |
| 15. |  Malva Pálido       | #C6A4A4    |
| 16. |  Naranja            | #FFA500    |
| 17. |  Naranja Pastel     | #FF964F    |
| 18. |  Pastel Azul Verde  | #9ADEDB    |
| 19. |  Pastel Purpura     | #B39EB5    |
| 20. |  Pastel Persa       | #AA9499    |
| 21. |  Rojo               | #FF0000    |
| 22. |  Rojo Pastel        | #FF6961    |
| 23. |  Rosa Americano     | #FF8988    |
| 24. |  Turquesa Pastel    | #99C5C4    |
| 25. |  Verde              | #00FF00    |
| 26. |  Verde Pastel Claro | #B2FBA5    |
| 27. |  Verde Pastel       | #77DD77    |
| 28. |  Violeta Pastel     | #CB99C9    |
+-----+---------------------+------------+
`;
module.exports = {
    "name": "color-table", 
    "description": "The bot is going to reply with a ASCII formatted color table in an emmbed message.", 
    execute(client, message, args){
        message.reply(codeblock_symbols + colorsFormat + codeblock_symbols);
    }
}

