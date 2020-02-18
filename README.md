# Regular Expressions

## Basics

|               Code                | Description                  |
| :-------------------------------: | ---------------------------- |
|                `.`                | Any character except newline |
|                `a`                | The character a              |
|               `ab`                | The string ab                |
|               `a|b`               | a or b                       |
|               `a*`                | 0 or more a                  |
| `\` | Escapes a special character |

## Quantifiers

|  Code   | Description     |
| :-----: | --------------- |
|   `*`   | 0 or more       |
|   `+`   | 1 or more       |
|   `?`   | 0 or 1          |
|  `{1]`  | Exactly 1       |
| `{1,3]` | Between 1 and 3 |
| `{1,]`  | 1 or more       |

## Groups and Ranges

|   Code    | Description                   |
| :-------: | ----------------------------- |
|  `(...)`  | Capturing group               |
| `(?:...)` | Non-capturing group           |
|  `[abc]`  | a,b or c                      |
| `[^abc]`  | Not( a,b or c)                |
| `[ab-d]`  | a,b,c or d                    |
|  `[a-v]`  | Lower case letter from a to v |
|  `[A-V]`  | Upper case letter from A to V |
|  `[0-5]`  | Digit from 0 to 5             |

## Classes

| Code | Description            |
| :--: | ---------------------- |
| `\d` | One digit              |
| `\D` | One non-digit          |
| `\s` | One whitespace         |
| `\S` | One non-whitespace     |
| `\w` | One word character     |
| `\W` | One non-word character |

## Assertions

|    Code    | Description         |
| :--------: | ------------------- |
|    `^`     | Start of string     |
|    `$`     | End of string       |
|    `\b`    | Word boundary       |
|    `\B`    | Non-word boundary   |
| `(?=...)`  | Positive lookahead  |
| `(?<=...)` | Positive lookbehind |
| `(?!...)`  | Negative lookahead  |
| `(?<!...)` | Negative lookbehind |
