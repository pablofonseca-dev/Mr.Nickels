const {codeblock_symbols} = require('../../config.json');

const colorsFormat = `
+-----+---------------------+------------+
| N.  |       Colores       |  Códigos   |
+-----+---------------------+------------+
|  1. |  Amarillo           | #FFFF00    |
|  2. |  Amarillo pastel    | #FDFD96    |
|  3. |  Azul               | #0000FF    |
|  4. |  Bebe azul          | #89CFF0    |
|  5. |  Bebé rosa          | #FFB7CE    |
|  6. |  Bígaro ligero      | #C1C6FC    |
|  7. |  Cian               | #00FFFF    |
|  8. |  Guisante pastel    | #BEE7A5    |
|  9. |  Lila pastel        | #BDB0D0    |
| 10. |  Lima claro         | #BEFD73    |
| 11. |  Magenta            | #FF00FF    |
| 12. |  Marrón pastel      | #836953    |
| 13. |  Menta mágica       | #AAF0D1    |
| 14. |  Morado bebé        | #CA9BF7    |
| 15. |  Malva pálido       | #C6A4A4    |
| 16. |  Naranja            | #FFA500    |
| 17. |  Naranja pastel     | #FF964F    |
| 18. |  Pastel Azul Verde  | #9ADEDB    |
| 19. |  Pastel Purpura     | #B39EB5    |
| 20. |  Pastel persa       | #AA9499    |
| 21. |  Rojo               | #FF0000    |
| 22. |  Rojo pastel        | #FF6961    |
| 23. |  Rosa americano     | #FF8988    |
| 24. |  Turquesa Pastel    | #99C5C4    |
| 25. |  Verde              | #00FF00    |
| 26. |  Verde Pastel Claro | #B2FBA5    |
| 27. |  Verde pastel       | #77DD77    |
| 28. |  Violeta pastel     | #CB99C9    |
+-----+---------------------+------------+
`;
module.exports = {
    "name": "color-table", 
    "description": "The bot is going to reply with a ASCII formatted color table in an emmbed message.", 
    execute(client, message, args){
        message.reply(codeblock_symbols + colorsFormat + codeblock_symbols);
    }
}

