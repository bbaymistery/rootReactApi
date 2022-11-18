const __env = {
    apiDomain: "https://api.london-tech.com",
    websiteLogUrl: "https://api.london-tech.com/media/airport-pickups-london.png",
    websiteLogo: "https://api.london-tech.com/media/apl-logo.png",
    infoAlert: "https://heathrow-gatwick-transfers.com/images/infoLittle.png"
};
const icons = {
    circleClose:
        "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptMTIxLjYgMzEzLjFjNC43IDQuNyA0LjcgMTIuMyAwIDE3TDMzOCAzNzcuNmMtNC43IDQuNy0xMi4zIDQuNy0xNyAwTDI1NiAzMTJsLTY1LjEgNjUuNmMtNC43IDQuNy0xMi4zIDQuNy0xNyAwTDEzNC40IDMzOGMtNC43LTQuNy00LjctMTIuMyAwLTE3bDY1LjYtNjUtNjUuNi02NS4xYy00LjctNC43LTQuNy0xMi4zIDAtMTdsMzkuNi0zOS42YzQuNy00LjcgMTIuMy00LjcgMTcgMGw2NSA2NS43IDY1LjEtNjUuNmM0LjctNC43IDEyLjMtNC43IDE3IDBsMzkuNiAzOS42YzQuNyA0LjcgNC43IDEyLjMgMCAxN0wzMTIgMjU2bDY1LjYgNjUuMXoiLz48L3N2Zz4",
    info: "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNMjAgNDI0LjIyOWgyMFYyNzkuNzcxSDIwYy0xMS4wNDYgMC0yMC04Ljk1NC0yMC0yMFYyMTJjMC0xMS4wNDYgOC45NTQtMjAgMjAtMjBoMTEyYzExLjA0NiAwIDIwIDguOTU0IDIwIDIwdjIxMi4yMjloMjBjMTEuMDQ2IDAgMjAgOC45NTQgMjAgMjBWNDkyYzAgMTEuMDQ2LTguOTU0IDIwLTIwIDIwSDIwYy0xMS4wNDYgMC0yMC04Ljk1NC0yMC0yMHYtNDcuNzcxYzAtMTEuMDQ2IDguOTU0LTIwIDIwLTIwek05NiAwQzU2LjIzNSAwIDI0IDMyLjIzNSAyNCA3MnMzMi4yMzUgNzIgNzIgNzIgNzItMzIuMjM1IDcyLTcyUzEzNS43NjQgMCA5NiAweiIvPjwvc3ZnPg==",
    suitcase:
        "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNMTI4IDQ4MGgyNTZWODBjMC0yNi41LTIxLjUtNDgtNDgtNDhIMTc2Yy0yNi41IDAtNDggMjEuNS00OCA0OHY0MDB6bTY0LTM4NGgxMjh2MzJIMTkyVjk2em0zMjAgODB2MjU2YzAgMjYuNS0yMS41IDQ4LTQ4IDQ4aC00OFYxMjhoNDhjMjYuNSAwIDQ4IDIxLjUgNDggNDh6TTk2IDQ4MEg0OGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhWMTc2YzAtMjYuNSAyMS41LTQ4IDQ4LTQ4aDQ4djM1MnoiLz48L3N2Zz4=",
    speed:
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiBoZWlnaHQ9IjY0cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjY0cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGQ9Ik0yOC4zNzEsMzEuODc5YzAsMi4xOSwxLjc3NywzLjk2NiwzLjk2NiwzLjk2NmMxLjUzOCwwLDIuODU2LTAuODg0LDMuNTE0LTIuMTYzbDAuMDExLDAuMDFsNy4yNC0xMy4wNjJsLTEyLjcxLDcuNzk0ICAgbDAuMDEyLDAuMDEyQzI5LjE5NywyOS4xMTcsMjguMzcxLDMwLjM5NSwyOC4zNzEsMzEuODc5eiIvPjxwYXRoIGQ9Ik00OC4zMTUsMTIuOTgxQzQ0LjI1MSw5LjQyOSwzOSw3LjE2MSwzMyw2LjgyMnY2LjAyN2M1LDAuMzE4LDcuOTQ2LDEuOTA2LDEwLjkwNCw0LjM4NEw0OC4zMTUsMTIuOTgxeiIvPjxwYXRoIGQ9Ik01MS4xNDYsMzBoNi4wMmMtMC40MDQtNi0yLjc1MS0xMC45My02LjM5NS0xNC45N2wtNC4yNTksNC4yMzNDNDkuMDc4LDIyLjIwMyw1MC43NjYsMjYsNTEuMTQ2LDMweiIvPjxwYXRoIGQ9Ik01MS4xNzQsMzNjLTAuNjM3LDEwLTguOTIyLDE3LjkzMS0xOS4wNDIsMTcuOTMxYy0xMC41MzUsMC0xOS40MjEtOC41NDQtMTkuNDIxLTE5LjA3OEMxMi43MTEsMjEuODI1LDIxLDEzLjYyLDMwLDEyLjg1ICAgVjYuODIzQzE3LDcuNjAyLDYuNzExLDE4LjU0LDYuNzExLDMxLjg3OWMwLDEzLjg0MywxMS40MiwyNS4wNTIsMjUuMjYzLDI1LjA1MkM0NS40MDYsNTYuOTMxLDU2LjU2NCw0Niw1Ny4yMDUsMzNINTEuMTc0eiIvPjwvZz48L3N2Zz4=",
    locationArrow:
        "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNNDQ0LjUyIDMuNTJMMjguNzQgMTk1LjQyYy00Ny45NyAyMi4zOS0zMS45OCA5Mi43NSAxOS4xOSA5Mi43NWgxNzUuOTF2MTc1LjkxYzAgNTEuMTcgNzAuMzYgNjcuMTcgOTIuNzUgMTkuMTlsMTkxLjktNDE1Ljc4YzE1Ljk5LTM4LjM5LTI1LjU5LTc5Ljk3LTYzLjk3LTYzLjk3eiIvPjwvc3ZnPg==",
    building:
        "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNNDM2IDQ4MGgtMjBWMjRjMC0xMy4yNTUtMTAuNzQ1LTI0LTI0LTI0SDU2QzQyLjc0NSAwIDMyIDEwLjc0NSAzMiAyNHY0NTZIMTJjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ2MjBoNDQ4di0yMGMwLTYuNjI3LTUuMzczLTEyLTEyLTEyek0xMjggNzZjMC02LjYyNyA1LjM3My0xMiAxMi0xMmg0MGM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjQwYzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTQwYy02LjYyNyAwLTEyLTUuMzczLTEyLTEyVjc2em0wIDk2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNDBjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnY0MGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC00MGMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtNDB6bTUyIDE0OGgtNDBjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTQwYzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNDBjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnY0MGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyem03NiAxNjBoLTY0di04NGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDQwYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2ODR6bTY0LTE3MmMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC00MGMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtNDBjMC02LjYyNyA1LjM3My0xMiAxMi0xMmg0MGM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjQwem0wLTk2YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTQwYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi00MGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDQwYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2NDB6bTAtOTZjMCA2LjYyNy01LjM3MyAxMi0xMiAxMmgtNDBjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJWNzZjMC02LjYyNyA1LjM3My0xMiAxMi0xMmg0MGM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjQweiIvPjwvc3ZnPg==",
    idBadge:
        "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNMzM2IDBINDhDMjEuNSAwIDAgMjEuNSAwIDQ4djQxNmMwIDI2LjUgMjEuNSA0OCA0OCA0OGgyODhjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWNDhjMC0yNi41LTIxLjUtNDgtNDgtNDh6TTE0NCAzMmg5NmM4LjggMCAxNiA3LjIgMTYgMTZzLTcuMiAxNi0xNiAxNmgtOTZjLTguOCAwLTE2LTcuMi0xNi0xNnM3LjItMTYgMTYtMTZ6bTQ4IDEyOGMzNS4zIDAgNjQgMjguNyA2NCA2NHMtMjguNyA2NC02NCA2NC02NC0yOC43LTY0LTY0IDI4LjctNjQgNjQtNjR6bTExMiAyMzYuOGMwIDEwLjYtMTAgMTkuMi0yMi40IDE5LjJIMTAyLjRDOTAgNDE2IDgwIDQwNy40IDgwIDM5Ni44di0xOS4yYzAtMzEuOCAzMC4xLTU3LjYgNjcuMi01Ny42aDVjMTIuMyA1LjEgMjUuNyA4IDM5LjggOHMyNy42LTIuOSAzOS44LThoNWMzNy4xIDAgNjcuMiAyNS44IDY3LjIgNTcuNnYxOS4yeiIvPjwvc3ZnPg==",
    thumbtack:
        "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNMjk4LjAyOCAyMTQuMjY3TDI4NS43OTMgOTZIMzI4YzEzLjI1NSAwIDI0LTEwLjc0NSAyNC0yNFYyNGMwLTEzLjI1NS0xMC43NDUtMjQtMjQtMjRINTZDNDIuNzQ1IDAgMzIgMTAuNzQ1IDMyIDI0djQ4YzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNGg0Mi4yMDdMODUuOTcyIDIxNC4yNjdDMzcuNDY1IDIzNi44MiAwIDI3Ny4yNjEgMCAzMjhjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0aDEzNnYxMDQuMDA3YzAgMS4yNDIuMjg5IDIuNDY3Ljg0NSAzLjU3OGwyNCA0OGMyLjk0MSA1Ljg4MiAxMS4zNjQgNS44OTMgMTQuMzExIDBsMjQtNDhhOC4wMDggOC4wMDggMCAwIDAgLjg0NS0zLjU3OFYzNTJoMTM2YzEzLjI1NSAwIDI0LTEwLjc0NSAyNC0yNC0uMDAxLTUxLjE4My0zNy45ODMtOTEuNDItODUuOTczLTExMy43MzN6Ii8+PC9zdmc+",
    train:
        "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNNDQ4IDk2djI1NmMwIDUxLjgxNS02MS42MjQgOTYtMTMwLjAyMiA5Nmw2Mi45OCA0OS43MjFDMzg2LjkwNSA1MDIuNDE3IDM4My41NjIgNTEyIDM3NiA1MTJINzJjLTcuNTc4IDAtMTAuODkyLTkuNTk0LTQuOTU3LTE0LjI3OUwxMzAuMDIyIDQ0OEM2MS44MiA0NDggMCA0MDMuOTU0IDAgMzUyVjk2QzAgNDIuOTgxIDY0IDAgMTI4IDBoMTkyYzY1IDAgMTI4IDQyLjk4MSAxMjggOTZ6bS00OCAxMzZWMTIwYzAtMTMuMjU1LTEwLjc0NS0yNC0yNC0yNEg3MmMtMTMuMjU1IDAtMjQgMTAuNzQ1LTI0IDI0djExMmMwIDEzLjI1NSAxMC43NDUgMjQgMjQgMjRoMzA0YzEzLjI1NSAwIDI0LTEwLjc0NSAyNC0yNHptLTE3NiA2NGMtMzAuOTI4IDAtNTYgMjUuMDcyLTU2IDU2czI1LjA3MiA1NiA1NiA1NiA1Ni0yNS4wNzIgNTYtNTYtMjUuMDcyLTU2LTU2LTU2eiIvPjwvc3ZnPg==",
    ship: "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNNDk2LjYxNiAzNzIuNjM5bDcwLjAxMi03MC4wMTJjMTYuODk5LTE2LjkgOS45NDItNDUuNzcxLTEyLjgzNi01My4wOTJMNTEyIDIzNi4xMDJWOTZjMC0xNy42NzMtMTQuMzI3LTMyLTMyLTMyaC02NFYyNGMwLTEzLjI1NS0xMC43NDUtMjQtMjQtMjRIMjQ4Yy0xMy4yNTUgMC0yNCAxMC43NDUtMjQgMjR2NDBoLTY0Yy0xNy42NzMgMC0zMiAxNC4zMjctMzIgMzJ2MTQwLjEwMmwtNDEuNzkyIDEzLjQzM2MtMjIuNzUzIDcuMzEzLTI5Ljc1NCAzNi4xNzMtMTIuODM2IDUzLjA5Mmw3MC4wMTIgNzAuMDEyQzEyNS44MjggNDE2LjI4NyA4NS41ODcgNDQ4IDI0IDQ0OGMtMTMuMjU1IDAtMjQgMTAuNzQ1LTI0IDI0djE2YzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNCA2MS4wMjMgMCAxMDcuNDk5LTIwLjYxIDE0My4yNTgtNTkuMzk2QzE4MS42NzcgNDg3LjQzMiAyMTYuMDIxIDUxMiAyNTYgNTEyaDEyOGMzOS45NzkgMCA3NC4zMjMtMjQuNTY4IDg4Ljc0Mi01OS4zOTZDNTA4LjQ5NSA0OTEuMzg0IDU1NC45NjggNTEyIDYxNiA1MTJjMTMuMjU1IDAgMjQtMTAuNzQ1IDI0LTI0di0xNmMwLTEzLjI1NS0xMC43NDUtMjQtMjQtMjQtNjAuODE3IDAtMTAxLjU0Mi0zMS4wMDEtMTE5LjM4NC03NS4zNjF6TTE5MiAxMjhoMjU2djg3LjUzMWwtMTE4LjIwOC0zNy45OTVhMzEuOTk1IDMxLjk5NSAwIDAgMC0xOS41ODQgMEwxOTIgMjE1LjUzMVYxMjh6Ii8+PC9zdmc+",
    planeDeparture:
        "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNNjI0IDQ0OEgxNmMtOC44NCAwLTE2IDcuMTYtMTYgMTZ2MzJjMCA4Ljg0IDcuMTYgMTYgMTYgMTZoNjA4YzguODQgMCAxNi03LjE2IDE2LTE2di0zMmMwLTguODQtNy4xNi0xNi0xNi0xNnpNODAuNTUgMzQxLjI3YzYuMjggNi44NCAxNS4xIDEwLjcyIDI0LjMzIDEwLjcxbDEzMC41NC0uMThhNjUuNjIgNjUuNjIgMCAwIDAgMjkuNjQtNy4xMmwyOTAuOTYtMTQ3LjY1YzI2Ljc0LTEzLjU3IDUwLjcxLTMyLjk0IDY3LjAyLTU4LjMxIDE4LjMxLTI4LjQ4IDIwLjMtNDkuMDkgMTMuMDctNjMuNjUtNy4yMS0xNC41Ny0yNC43NC0yNS4yNy01OC4yNS0yNy40NS0yOS44NS0xLjk0LTU5LjU0IDUuOTItODYuMjggMTkuNDhsLTk4LjUxIDQ5Ljk5LTIxOC43LTgyLjA2YTE3Ljc5OSAxNy43OTkgMCAwIDAtMTgtMS4xMUw5MC42MiA2Ny4yOWMtMTAuNjcgNS40MS0xMy4yNSAxOS42NS01LjE3IDI4LjUzbDE1Ni4yMiA5OC4xLTEwMy4yMSA1Mi4zOC03Mi4zNS0zNi40N2ExNy44MDQgMTcuODA0IDAgMCAwLTE2LjA3LjAyTDkuOTEgMjMwLjIyYy0xMC40NCA1LjMtMTMuMTkgMTkuMTItNS41NyAyOC4wOGw3Ni4yMSA4Mi45N3oiLz48L3N2Zz4=",
    planeArrival:
        "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNNjI0IDQ0OEgxNmMtOC44NCAwLTE2IDcuMTYtMTYgMTZ2MzJjMCA4Ljg0IDcuMTYgMTYgMTYgMTZoNjA4YzguODQgMCAxNi03LjE2IDE2LTE2di0zMmMwLTguODQtNy4xNi0xNi0xNi0xNnpNNDQuODEgMjA1LjY2bDg4Ljc0IDgwYTYyLjYwNyA2Mi42MDcgMCAwIDAgMjUuNDcgMTMuOTNsMjg3LjYgNzguMzVjMjYuNDggNy4yMSA1NC41NiA4LjcyIDgxIDEuMzYgMjkuNjctOC4yNyA0My40NC0yMS4yMSA0Ny4yNS0zNS43MSAzLjgzLTE0LjUtMS43My0zMi43MS0yMy4zNy01NC45Ni0xOS4yOC0xOS44Mi00NC4zNS0zMi43OS03MC44My00MGwtOTcuNTEtMjYuNTZMMjgyLjggMzAuMjJjLTEuNTEtNS44MS01Ljk1LTEwLjM1LTExLjY2LTExLjkxTDIwNi4wNS41OGMtMTAuNTYtMi44OC0yMC45IDUuMzItMjAuNzEgMTYuNDRsNDcuOTIgMTY0LjIxLTEwMi4yLTI3Ljg0LTI3LjU5LTY3Ljg4Yy0xLjkzLTQuODktNi4wMS04LjU3LTExLjAyLTkuOTNMNTIuNzIgNjQuNzVjLTEwLjM0LTIuODItMjAuNTMgNS0yMC43MiAxNS44OGwuMjMgMTAxLjc4Yy4xOSA4LjkxIDYuMDMgMTcuMzQgMTIuNTggMjMuMjV6Ii8+PC9zdmc+",
    plus: "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNNDE2IDIwOEgyNzJWNjRjMC0xNy42Ny0xNC4zMy0zMi0zMi0zMmgtMzJjLTE3LjY3IDAtMzIgMTQuMzMtMzIgMzJ2MTQ0SDMyYy0xNy42NyAwLTMyIDE0LjMzLTMyIDMydjMyYzAgMTcuNjcgMTQuMzMgMzIgMzIgMzJoMTQ0djE0NGMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDMyYzE3LjY3IDAgMzItMTQuMzMgMzItMzJWMzA0aDE0NGMxNy42NyAwIDMyLTE0LjMzIDMyLTMydi0zMmMwLTE3LjY3LTE0LjMzLTMyLTMyLTMyeiIvPjwvc3ZnPg==",
    angleDown:
        "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNMTQzIDM1Mi4zTDcgMjE2LjNjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDIyLjYtMjIuNmM5LjQtOS40IDI0LjYtOS40IDMzLjkgMGw5Ni40IDk2LjQgOTYuNC05Ni40YzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDIyLjYgMjIuNmM5LjQgOS40IDkuNCAyNC42IDAgMzMuOWwtMTM2IDEzNmMtOS4yIDkuNC0yNC40IDkuNC0zMy44IDB6Ii8+PC9zdmc+",
    at: `data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNMjU2IDhDMTE4Ljk0MSA4IDggMTE4LjkxOSA4IDI1NmMwIDEzNy4wNTkgMTEwLjkxOSAyNDggMjQ4IDI0OCA0OC4xNTQgMCA5NS4zNDItMTQuMTQgMTM1LjQwOC00MC4yMjMgMTIuMDA1LTcuODE1IDE0LjYyNS0yNC4yODggNS41NTItMzUuMzcybC0xMC4xNzctMTIuNDMzYy03LjY3MS05LjM3MS0yMS4xNzktMTEuNjY3LTMxLjM3My01LjEyOUMzMjUuOTIgNDI5Ljc1NyAyOTEuMzE0IDQ0MCAyNTYgNDQwYy0xMDEuNDU4IDAtMTg0LTgyLjU0Mi0xODQtMTg0UzE1NC41NDIgNzIgMjU2IDcyYzEwMC4xMzkgMCAxODQgNTcuNjE5IDE4NCAxNjAgMCAzOC43ODYtMjEuMDkzIDc5Ljc0Mi01OC4xNyA4My42OTMtMTcuMzQ5LS40NTQtMTYuOTEtMTIuODU3LTEzLjQ3Ni0zMC4wMjRsMjMuNDMzLTEyMS4xMUMzOTQuNjUzIDE0OS43NSAzODMuMzA4IDEzNiAzNjguMjI1IDEzNmgtNDQuOTgxYTEzLjUxOCAxMy41MTggMCAwIDAtMTMuNDMyIDExLjk5M2wtLjAxLjA5MmMtMTQuNjk3LTE3LjkwMS00MC40NDgtMjEuNzc1LTU5Ljk3MS0yMS43NzUtNzQuNTggMC0xMzcuODMxIDYyLjIzNC0xMzcuODMxIDE1MS40NiAwIDY1LjMwMyAzNi43ODUgMTA1Ljg3IDk2IDEwNS44NyAyNi45ODQgMCA1Ny4zNjktMTUuNjM3IDc0Ljk5MS0zOC4zMzMgOS41MjIgMzQuMTA0IDQwLjYxMyAzNC4xMDMgNzAuNzEgMzQuMTAzQzQ2Mi42MDkgMzc5LjQxIDUwNCAzMDcuNzk4IDUwNCAyMzIgNTA0IDk1LjY1MyAzOTQuMDIzIDggMjU2IDh6bS0yMS42OCAzMDQuNDNjLTIyLjI0OSAwLTM2LjA3LTE1LjYyMy0zNi4wNy00MC43NzEgMC00NC45OTMgMzAuNzc5LTcyLjcyOSA1OC42My03Mi43MjkgMjIuMjkyIDAgMzUuNjAxIDE1LjI0MSAzNS42MDEgNDAuNzcgMCA0NS4wNjEtMzMuODc1IDcyLjczLTU4LjE2MSA3Mi43M3oiLz48L3N2Zz4=`,
    user: "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNMjI0IDI1NmM3MC43IDAgMTI4LTU3LjMgMTI4LTEyOFMyOTQuNyAwIDIyNCAwIDk2IDU3LjMgOTYgMTI4czU3LjMgMTI4IDEyOCAxMjh6bTg5LjYgMzJoLTE2LjdjLTIyLjIgMTAuMi00Ni45IDE2LTcyLjkgMTZzLTUwLjYtNS44LTcyLjktMTZoLTE2LjdDNjAuMiAyODggMCAzNDguMiAwIDQyMi40VjQ2NGMwIDI2LjUgMjEuNSA0OCA0OCA0OGgzNTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDh2LTQxLjZjMC03NC4yLTYwLjItMTM0LjQtMTM0LjQtMTM0LjR6Ii8+PC9zdmc+",
    check:
        "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6Ii8+PC9zdmc+",
    phone:
        "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNNDkzLjQgMjQuNmwtMTA0LTI0Yy0xMS4zLTIuNi0yMi45IDMuMy0yNy41IDEzLjlsLTQ4IDExMmMtNC4yIDkuOC0xLjQgMjEuMyA2LjkgMjhsNjAuNiA0OS42Yy0zNiA3Ni43LTk4LjkgMTQwLjUtMTc3LjIgMTc3LjJsLTQ5LjYtNjAuNmMtNi44LTguMy0xOC4yLTExLjEtMjgtNi45bC0xMTIgNDhDMy45IDM2Ni41LTIgMzc4LjEuNiAzODkuNGwyNCAxMDRDMjcuMSA1MDQuMiAzNi43IDUxMiA0OCA1MTJjMjU2LjEgMCA0NjQtMjA3LjUgNDY0LTQ2NCAwLTExLjItNy43LTIwLjktMTguNi0yMy40eiIvPjwvc3ZnPg==",
    users:
        "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNOTYgMjI0YzM1LjMgMCA2NC0yOC43IDY0LTY0cy0yOC43LTY0LTY0LTY0LTY0IDI4LjctNjQgNjQgMjguNyA2NCA2NCA2NHptNDQ4IDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRzLTI4LjctNjQtNjQtNjQtNjQgMjguNy02NCA2NCAyOC43IDY0IDY0IDY0em0zMiAzMmgtNjRjLTE3LjYgMC0zMy41IDcuMS00NS4xIDE4LjYgNDAuMyAyMi4xIDY4LjkgNjIgNzUuMSAxMDkuNGg2NmMxNy43IDAgMzItMTQuMyAzMi0zMnYtMzJjMC0zNS4zLTI4LjctNjQtNjQtNjR6bS0yNTYgMGM2MS45IDAgMTEyLTUwLjEgMTEyLTExMlMzODEuOSAzMiAzMjAgMzIgMjA4IDgyLjEgMjA4IDE0NHM1MC4xIDExMiAxMTIgMTEyem03Ni44IDMyaC04LjNjLTIwLjggMTAtNDMuOSAxNi02OC41IDE2cy00Ny42LTYtNjguNS0xNmgtOC4zQzE3OS42IDI4OCAxMjggMzM5LjYgMTI4IDQwMy4yVjQzMmMwIDI2LjUgMjEuNSA0OCA0OCA0OGgyODhjMjYuNSAwIDQ4LTIxLjUgNDgtNDh2LTI4LjhjMC02My42LTUxLjYtMTE1LjItMTE1LjItMTE1LjJ6bS0yMjMuNy0xMy40QzE2MS41IDI2My4xIDE0NS42IDI1NiAxMjggMjU2SDY0Yy0zNS4zIDAtNjQgMjguNy02NCA2NHYzMmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg2NS45YzYuMy00Ny40IDM0LjktODcuMyA3NS4yLTEwOS40eiIvPjwvc3ZnPg==",
    mapLocation:
        "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNMTcyLjI2OCA1MDEuNjdDMjYuOTcgMjkxLjAzMSAwIDI2OS40MTMgMCAxOTIgMCA4NS45NjEgODUuOTYxIDAgMTkyIDBzMTkyIDg1Ljk2MSAxOTIgMTkyYzAgNzcuNDEzLTI2Ljk3IDk5LjAzMS0xNzIuMjY4IDMwOS42Ny05LjUzNSAxMy43NzQtMjkuOTMgMTMuNzczLTM5LjQ2NCAwek0xOTIgMjcyYzQ0LjE4MyAwIDgwLTM1LjgxNyA4MC04MHMtMzUuODE3LTgwLTgwLTgwLTgwIDM1LjgxNy04MCA4MCAzNS44MTcgODAgODAgODB6Ii8+PC9zdmc+",
    circle:
        "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHoiLz48L3N2Zz4=",
    notes:
        "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNMjU2IDMyQzExNC42IDMyIDAgMTI1LjEgMCAyNDBjMCA0OS42IDIxLjQgOTUgNTcgMTMwLjdDNDQuNSA0MjEuMSAyLjcgNDY2IDIuMiA0NjYuNWMtMi4yIDIuMy0yLjggNS43LTEuNSA4LjdTNC44IDQ4MCA4IDQ4MGM2Ni4zIDAgMTE2LTMxLjggMTQwLjYtNTEuNCAzMi43IDEyLjMgNjkgMTkuNCAxMDcuNCAxOS40IDE0MS40IDAgMjU2LTkzLjEgMjU2LTIwOFMzOTcuNCAzMiAyNTYgMzJ6Ii8+PC9zdmc+",

    calendar:
        "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNMCA0NjRjMCAyNi41IDIxLjUgNDggNDggNDhoMzUyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjE5MkgwdjI3MnptMzIwLTE5NmMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEydjQwYzAgNi42LTUuNCAxMi0xMiAxMmgtNDBjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDB6bTAgMTI4YzAtNi42IDUuNC0xMiAxMi0xMmg0MGM2LjYgMCAxMiA1LjQgMTIgMTJ2NDBjMCA2LjYtNS40IDEyLTEyIDEyaC00MGMtNi42IDAtMTItNS40LTEyLTEydi00MHpNMTkyIDI2OGMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEydjQwYzAgNi42LTUuNCAxMi0xMiAxMmgtNDBjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDB6bTAgMTI4YzAtNi42IDUuNC0xMiAxMi0xMmg0MGM2LjYgMCAxMiA1LjQgMTIgMTJ2NDBjMCA2LjYtNS40IDEyLTEyIDEyaC00MGMtNi42IDAtMTItNS40LTEyLTEydi00MHpNNjQgMjY4YzAtNi42IDUuNC0xMiAxMi0xMmg0MGM2LjYgMCAxMiA1LjQgMTIgMTJ2NDBjMCA2LjYtNS40IDEyLTEyIDEySDc2Yy02LjYgMC0xMi01LjQtMTItMTJ2LTQwem0wIDEyOGMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEydjQwYzAgNi42LTUuNCAxMi0xMiAxMkg3NmMtNi42IDAtMTItNS40LTEyLTEydi00MHpNNDAwIDY0aC00OFYxNmMwLTguOC03LjItMTYtMTYtMTZoLTMyYy04LjggMC0xNiA3LjItMTYgMTZ2NDhIMTYwVjE2YzAtOC44LTcuMi0xNi0xNi0xNmgtMzJjLTguOCAwLTE2IDcuMi0xNiAxNnY0OEg0OEMyMS41IDY0IDAgODUuNSAwIDExMnY0OGg0NDh2LTQ4YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4eiIvPjwvc3ZnPg==",
    car: "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNNDk5Ljk5IDE3NmgtNTkuODdsLTE2LjY0LTQxLjZDNDA2LjM4IDkxLjYzIDM2NS41NyA2NCAzMTkuNSA2NGgtMTI3Yy00Ni4wNiAwLTg2Ljg4IDI3LjYzLTEwMy45OSA3MC40TDcxLjg3IDE3NkgxMi4wMUM0LjIgMTc2LTEuNTMgMTgzLjM0LjM3IDE5MC45MWw2IDI0QzcuNyAyMjAuMjUgMTIuNSAyMjQgMTguMDEgMjI0aDIwLjA3QzI0LjY1IDIzNS43MyAxNiAyNTIuNzggMTYgMjcydjQ4YzAgMTYuMTIgNi4xNiAzMC42NyAxNiA0MS45M1Y0MTZjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmgzMmMxNy42NyAwIDMyLTE0LjMzIDMyLTMydi0zMmgyNTZ2MzJjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmgzMmMxNy42NyAwIDMyLTE0LjMzIDMyLTMydi01NC4wN2M5Ljg0LTExLjI1IDE2LTI1LjggMTYtNDEuOTN2LTQ4YzAtMTkuMjItOC42NS0zNi4yNy0yMi4wNy00OEg0OTRjNS41MSAwIDEwLjMxLTMuNzUgMTEuNjQtOS4wOWw2LTI0YzEuODktNy41Ny0zLjg0LTE0LjkxLTExLjY1LTE0Ljkxem0tMzUyLjA2LTE3LjgzYzcuMjktMTguMjIgMjQuOTQtMzAuMTcgNDQuNTctMzAuMTdoMTI3YzE5LjYzIDAgMzcuMjggMTEuOTUgNDQuNTcgMzAuMTdMMzg0IDIwOEgxMjhsMTkuOTMtNDkuODN6TTk2IDMxOS44Yy0xOS4yIDAtMzItMTIuNzYtMzItMzEuOVM3Ni44IDI1NiA5NiAyNTZzNDggMjguNzEgNDggNDcuODUtMjguOCAxNS45NS00OCAxNS45NXptMzIwIDBjLTE5LjIgMC00OCAzLjE5LTQ4LTE1Ljk1UzM5Ni44IDI1NiA0MTYgMjU2czMyIDEyLjc2IDMyIDMxLjktMTIuOCAzMS45LTMyIDMxLjl6Ii8+PC9zdmc+",
    arrowRight:
        "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNMTkwLjUgNjYuOWwyMi4yLTIyLjJjOS40LTkuNCAyNC42LTkuNCAzMy45IDBMNDQxIDIzOWM5LjQgOS40IDkuNCAyNC42IDAgMzMuOUwyNDYuNiA0NjcuM2MtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjItMjIuMmMtOS41LTkuNS05LjMtMjUgLjQtMzQuM0wzMTEuNCAyOTZIMjRjLTEzLjMgMC0yNC0xMC43LTI0LTI0di0zMmMwLTEzLjMgMTAuNy0yNCAyNC0yNGgyODcuNEwxOTAuOSAxMDEuMmMtOS44LTkuMy0xMC0yNC44LS40LTM0LjN6Ii8+PC9zdmc+",
    close: "",
};
const hourss = Array.from(new Array(24)).map((m, i) => ({ id: i + 1, value: i < 10 ? `0${i}` : String(i) }))
const minutes = Array.from(new Array(12)).map((m, i) => ({ id: i, value: ((i + 1 - 1) * 5) }))
const waitingMinutes = [[1, 0], [2, 5], [3, 10], [4, 15], [5, 20], [6, 25], [7, 30], [8, 35], [9, 40], [10, 45], [11, 50], [12, 60], [13, 70], [14, 80], [15, 90], [16, 100], [17, 120], [18, 150]].map(([id, minutes]) => ({ value: `${minutes} minutes after flight has landed`, id }));
// this for collect minimum date into DatePicker
const dateTimeStringFunc = () => {
    //2022-09-28 funct
    let tmpDt = new Date(Date.now() + 1000 * 60 * 60 * 6); //6
    let year = tmpDt.getFullYear();
    let month = tmpDt.getMonth() + 1 < 10 ? `0${tmpDt.getMonth() + 1}` : tmpDt.getMonth() + 1;
    let date = tmpDt.getDate() < 10 ? `0${tmpDt.getDate()}` : tmpDt.getDate();
    let hours = tmpDt.getHours() < 10 ? `0${tmpDt.getHours()}` : tmpDt.getHours();
    let minute = "00";
    let currentDate = `${year}-${month}-${date} ${hours}:${minute}`;
    return currentDate;
};

const apiV1ReservationEdit = async (params, props) => {
    try {
        let { reservation, loginDetails } = params;
        let url = `${__env.apiDomain}/api/v1/reservation/edit`;
        let method = "POST"
        let headers = { "Content-Type": "application/json" }
        reservation.reservationDetails.isUpdatedByCustomer = 1;
        let body = JSON.stringify({ reservation: [reservation], ...props })
        let bodyRequest = { method, body, headers, };
        let fetchReq = await fetch(url, bodyRequest);
        let fetchRes = await fetchReq.json();
        if (fetchRes.status === 200) {
            let collectLatestReservationDetails = await findLoginDetailsAsync(loginDetails);
            if (collectLatestReservationDetails.status === 200) {
                fetchRes.reservation = collectLatestReservationDetails.data;
            }
        }
        return fetchRes
    } catch (error) {
        console.log(error)
        return { 'status': 403, error: { global: ['fall to fetch'] } }
    }
}
const checking24hours = (bookDate) => {
    //i receive from api 31/12/2022 02:15
    //i replace it to 2022-31-12 then i compare
    let date = bookDate.split(" ")[0].replace(/\//g, "-").split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1");
    let hourMinute = bookDate.split(" ")[1]
    let currentDateInMilliseconds = new Date().getTime();
    let bookingDateInMillisecond = new Date(`${date} ${hourMinute}`).getTime();
    let diff = bookingDateInMillisecond - currentDateInMilliseconds;
    let oneDay = 1000 * 60 * 60 * 24;
    if (oneDay > diff) {
        return true;
    } else { return false; }
};

function findLoginDetails(params = {}, callback = () => { }) {
    let { email, reservationId } = params;
    let requestBody = { method: "POST", body: JSON.stringify({ reservationId, email }), 'headers': { "Content-Type": "application/json" }, };
    fetch(`${__env.apiDomain}/api/v1/reservation/find-details`, requestBody)
        .then((res) => res.json())
        .then((res) => callback(res))
        .catch((error) => callback({ 'status': 403, error }));
}
function findLoginDetailsAsync(params = {}) {
    return new Promise((resolve, reject) => findLoginDetails(params, log => resolve(log)))
}
//it when sygeestions doesnt come it will come up
class NoResults extends React.Component {
    render() {
        return (
            <ul className="tmb-noResults">
                <li className={"tmb-noResults-li"}>
                    <img src={icons.circleClose} className="circle-close-icon" alt="" />
                    <p> No any result matched <br /> if you want a quotation, try to contact
                        with this phone number :{" "} <a href="tel:0090 xxx xx xxx 55">0090 xxx xx xxx 55</a>
                    </p>
                </li>
            </ul>
        );
    }
}
class HandleSearchResults extends React.Component {
    render() {
        let objKeyss = []
        let noresult = false
        let { type, index, objectDetailss, pickOrDropItems, imageTypesObject, namePlaceTypesObject, handleAddItemToSelectList } = this.props;
        //arranging objects in order to show items correctly
        if (pickOrDropItems[0]) objKeyss = Object.keys(pickOrDropItems[0]);
        const moveZeroosToTheEnd = (nums) => {
            let zeros = 0;
            for (let i = 0; i < nums.length; i++) {
                let isZero = nums[i] === "0";
                if (isZero) {
                    zeros++;
                    nums.splice(i, 1);
                    i--;
                }
            }
            for (let i = 0; i < zeros; i++) {
                nums.push("0");
            }
            return nums;
        };

        objKeyss = moveZeroosToTheEnd(objKeyss);
        let newFilteredItems = objKeyss.map((key) => {
            return pickOrDropItems[0][key];
        });

        if (newFilteredItems[0] === true) {
            noresult = true
        } else {
            noresult = false
        }

        return (
            <div className="tmb-hndl-results">
                {noresult ? <ul className="tmb-all-results-ul">
                    <NoResults />
                </ul>
                    : ""}
                {
                    newFilteredItems.length && !noresult ? (
                        <ul className="tmb-all-results-ul">
                            {
                                newFilteredItems.map((arr) => {
                                    return arr.map((item, i) => {
                                        return (
                                            <div key={i}>
                                                {i === 0 && (
                                                    <li key={0} className={i === 0 ? "tmb-search-groupname" : ""}>
                                                        {item.pcatId === 10 ? (
                                                            <img
                                                                src="https://api.london-tech.com/media/g-google.svg"
                                                                alt=""
                                                            />
                                                        ) : (
                                                            imageTypesObject && (<img src={`https://api.london-tech.com${imageTypesObject[item.pcatId]}`} alt="" />)
                                                        )}
                                                        <a>{namePlaceTypesObject && namePlaceTypesObject[item.pcatId]}</a>
                                                        {item.pcatId === 10 && (<img src={"https://api.london-tech.com/media/powered-by-google.png"} alt="" className={"tmb-search-groupname-google-image"} />)}
                                                    </li>
                                                )}
                                                <li onClick={() => handleAddItemToSelectList(item, objectDetailss[item.pcatId], index, type)}>
                                                    {imageTypesObject && (<img src={`https://api.london-tech.com${imageTypesObject[item.pcatId]}`} alt="" />)}
                                                    <p href="/location/londiani-188981">
                                                        {item.address}
                                                        {`   ${item.postcode ? `-  ${item.postcode}` : ""}`}
                                                    </p>
                                                </li>
                                            </div>
                                        )
                                    })
                                })
                            }
                        </ul>
                    ) :
                        ("")
                }
            </div>
        );
    }
}
class ModalInfo extends React.Component {
    render() {
        let { content, fromCar, setModalCarStatus, setModalFlightStatus } = this.props;
        return (
            <div className={"tmb-modal"}>
                <div className={"tmb-modal_container"}>
                    <p>{content}</p>
                    <div className={"tmb-modal-button-di"}>
                        <button onClick={fromCar ? () => setModalCarStatus() : () => setModalFlightStatus()} className="tmb-btn-primary tmb-btn" >
                            Okay
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
class QuotationCardItem extends React.Component {
    render() {
        let { quotation, quotations, selectQuotation, carsTypesObject, quotationLoading, setModalCarStatus } = this.props;
        return (
            <div className="jrn-quotation-results">
                <div className="jrn-quotation-results-items">
                    {quotations.map((item, i) => {
                        return (
                            <div className="jrn-quotation-card-item" onClick={() => selectQuotation(item)}>
                                <div className="jrn-quotation-card-item-content">
                                    <div className={"item_main"}>
                                        <div className={"main_left"}>
                                            <div className={"left_title"}>
                                                {carsTypesObject[item.carId].name}
                                                <span onClick={() => setModalCarStatus()}>
                                                    <img src={icons.info} className="circle-info-quotation-card-icon" alt="" />
                                                </span>
                                            </div>
                                            <div className={"left_subtitle"}>
                                                {carsTypesObject[item.carId].transferType}
                                            </div>
                                            <ul className={"icon_details"}>
                                                <li className={"icon_details_item"}>
                                                    <img src={icons.users} className="users-quotation-card-icon" alt="" />
                                                    {carsTypesObject[item.carId].suitcases}
                                                </li>
                                                <li className={"icon_details_item"}>
                                                    <img src={icons.suitcase} alt="" className="suitcase-quotation-card-icon" />
                                                    {carsTypesObject[item.carId].pax}
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={"main_right"}>
                                            <img src={`https://api.london-tech.com${carsTypesObject[item.carId].image}`} alt="car" />
                                        </div>
                                    </div>
                                    <div className={"item_bottom"}>
                                        <div className={"free_meet first"}>
                                            <p>
                                                <span>
                                                    <img src={icons.check} className="check-quotation-card-icon" alt="" />
                                                </span>
                                                Flight Tracking
                                            </p>
                                            <p>
                                                <span>
                                                    <img src={icons.check} className="check-quotation-card-icon" alt="" />
                                                </span>
                                                Free Waiting Time
                                            </p>

                                            <p className={"uzunad"}>
                                                <span>
                                                    <img
                                                        src={icons.check}
                                                        className="check-quotation-card-icon"
                                                        alt=""
                                                    />
                                                </span>
                                                Free meet and greet
                                            </p>
                                            <p className={"uzunad"}>
                                                <span>
                                                    <img
                                                        src={icons.check}
                                                        className="check-quotation-card-icon"
                                                        alt=""
                                                    />
                                                </span>
                                                No charge for flight delays
                                            </p>
                                        </div>
                                        <div className={"free_meet second"}>
                                            <p className={"uzunad"}>
                                                <span>
                                                    <img src={icons.check} alt="" className="check-quotation-card-icon" />
                                                </span>
                                                Free meet and greet
                                            </p>
                                            <p className={"uzunad"}>
                                                <span>
                                                    <img
                                                        src={icons.check}
                                                        alt=""
                                                        className="check-quotation-card-icon"
                                                    />
                                                </span>
                                                No charge for flight delays
                                            </p>
                                        </div>
                                        <div className={"free_meet free_meet_price relative"}>
                                            <div className={"price"}>{quotationLoading ? "" : `£ ${item.price}`}</div>
                                            {quotationLoading ? <Loading loadCenter={false} />
                                                :
                                                (
                                                    <button
                                                        className={`button ${Number(quotation.carId) === Number(carsTypesObject[item.carId].id) ? "selected-quotation-button" : ""}`}>
                                                        {parseInt(quotation.carId) === parseInt(carsTypesObject[item.carId].id) ? "Selected" : "Select"}
                                                    </button>
                                                )}
                                            <p className={"enjoy_travel"}>{quotationLoading ? "" : `Enjoy Travel`}</p>
                                        </div>
                                    </div>
                                </div>
                                <img src={icons.speed} className="jrn-quotation-card-item-outer-icon" alt="" />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
class CheckForFlight extends React.Component {
    constructor(props) {
        super(props);
        this.state = { flightNumber: "", waitingPickupTime: "", whichItemSelected: this.props.whichItemSelected };
    }
    onchangeHandlerInput = (e, pickOrDrop, item) => {
        let { name, value } = e.target
        let { flightNumber, waitingPickupTime, whichItemSelected } = this.state
        let flightDetails = { flightNumber, waitingPickupTime }
        if (value.includes('"') || value.includes(`'`) || value.includes('/') || value.includes('\\')) return
        if (name === "waitingPickupTime") {
            this.setState({ [name]: Number(e.target.value.split(" ")[0]) })
            flightDetails = { ...flightDetails, flightNumber: item.flightDetails.flightNumber, waitingPickupTime: Number(e.target.value.split(" ")[0]) }
        } else {
            this.setState({ [name]: value })
            flightDetails = { ...flightDetails, flightNumber: value, waitingPickupTime: item.flightDetails.waitingPickupTime, }
        }
        window.journeyDetailsUpdateFormDispatch.onchangeItemDetails(flightDetails, pickOrDrop, whichItemSelected, 1)
    }
    render() {
        let { item, index, objectDetailStatuses, setModalFlightStatus } = this.props;
        let { flightNumber, waitingPickupTime } = this.state;
        return (
            <div>
                {/* //!pick up section  */}
                {item.pcatId === 1 && index === 0 && (
                    <div className="editable-selected-inputs">
                        {objectDetailStatuses[1].flightDetails.flightNumber.pickup ===
                            1 && (
                                <TextInput
                                    type="text"
                                    fromPoints={true}
                                    title="Flight No"
                                    name="flightNumber"
                                    icon={icons.planeDeparture}
                                    classNameImg="icon-inside-small-input"
                                    onChange={(e) => this.onchangeHandlerInput(e, 0, item)}
                                    value={flightNumber ? flightNumber : item.flightDetails.flightNumber}
                                    errorMessage={item.flightDetails.flightNumber ? "" : !flightNumber ? "required" : ""}
                                />
                            )}
                        {objectDetailStatuses[1].flightDetails.waitingPickupTime.pickup ===
                            1 && (
                                <SelectBox
                                    fromPoints={true}
                                    infoForFlight={true}
                                    data={waitingMinutes}
                                    name="waitingPickupTime"
                                    icon={icons.planeArrival}
                                    onChange={(e) => this.onchangeHandlerInput(e, 0, item)}
                                    setModalFlightStatus={setModalFlightStatus}
                                    title="When should the driver pick you up?"
                                    classNameImg="icon_selectedPoints_selectbox"
                                    defaultValue={waitingPickupTime > 0 ? waitingPickupTime : item.flightDetails.waitingPickupTime}
                                />
                            )}
                    </div>
                )}
                {/* //!drop off section  */}
                {item.pcatId === 1 && index === 1 && objectDetailStatuses[1].flightDetails.flightNumber.dropoff === 2 && (
                    <div className="editable-selected-inputs">
                        <TextInput
                            type="text"
                            title="Flight No"
                            fromPoints={true}
                            name="flightNumber"
                            icon={icons.planeArrival}
                            classNameImg="icon-inside-small-input"
                            onChange={(e) => this.onchangeHandlerInput(e, 1, item)}
                            value={flightNumber ? flightNumber : item.flightDetails.flightNumber}
                        />
                    </div>
                )}
            </div>
        );
    }
}
class CheckForCruises extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cruiseNumber: "", whichItemSelected: this.props.whichItemSelected, };
    }
    onchangeHandlerInput = (e, pickOrDrop) => {
        let { name, value } = e.target
        if (value.includes('"') || value.includes(`'`) || value.includes('/') || value.includes('\\')) return

        let { cruiseNumber, whichItemSelected } = this.state
        let valueToSend = cruiseNumber
        this.setState({ [name]: value })
        valueToSend = value
        window.journeyDetailsUpdateFormDispatch.onchangeItemDetails(valueToSend, pickOrDrop, whichItemSelected, 2)
    }
    render() {
        let { cruiseNumber } = this.state
        let { item, index, objectDetailStatuses } = this.props;
        return (
            <div>
                {/* //!pick up section  */}
                {item.pcatId === 2 && index === 0 && (
                    <div className="editable-selected-inputs">
                        {objectDetailStatuses[2].cruiseNumber.pickup === 1 && (
                            <TextInput
                                type="text"
                                title="Cruise Name"
                                name="cruiseNumber"
                                icon={icons.ship}
                                fromPoints={true}
                                classNameImg="icon-inside-small-input"
                                onChange={(e) => this.onchangeHandlerInput(e, 0)}
                                value={cruiseNumber ? cruiseNumber : item.cruiseNumber}
                                errorMessage={item.cruiseNumber ? "" : !cruiseNumber ? "required" : ""}
                            />
                        )}
                    </div>
                )}
                {/* //!drop off section  */}
                {item.pcatId === 2 && index === 1 && objectDetailStatuses[2].cruiseNumber.dropoff === 2 && (
                    <div className="editable-selected-inputs">
                        <TextInput
                            type="text"
                            icon={icons.ship}
                            fromPoints={true}
                            title="Cruise Name"
                            name="cruiseNumber"
                            classNameImg="icon-inside-small-input"
                            onChange={(e) => this.onchangeHandlerInput(e, 1)}
                            value={cruiseNumber ? cruiseNumber : item.cruiseNumber}
                        />
                    </div>
                )}
            </div>
        );
    }
}
class CheckForTrain extends React.Component {
    constructor(props) {
        super(props);
        this.state = { trainNumber: "", whichItemSelected: this.props.whichItemSelected, };
    }
    onchangeHandlerInput = (e, pickOrDrop) => {
        let { name, value } = e.target
        if (value.includes('"') || value.includes(`'`) || value.includes('/') || value.includes('\\')) return

        let { trainNumber, whichItemSelected } = this.state
        let valueToSend = trainNumber
        this.setState({ [name]: value })
        valueToSend = value
        window.journeyDetailsUpdateFormDispatch.onchangeItemDetails(valueToSend, pickOrDrop, whichItemSelected, 3)
    }
    render() {
        let { trainNumber } = this.state
        let { item, index, objectDetailStatuses } = this.props;
        return (
            <div>
                {/* //!pick up section  */}
                {item.pcatId === 3 && index === 0 && (
                    <div className="editable-selected-inputs">
                        {objectDetailStatuses[3].trainNumber.pickup === 2 && (
                            <TextInput
                                type="text"
                                title="Train Number"
                                name="trainNumber"
                                fromPoints={true}
                                icon={icons.train}
                                classNameImg="icon-inside0inp-train"
                                onChange={(e) => this.onchangeHandlerInput(e, 0)}
                                value={trainNumber ? trainNumber : item.trainNumber}
                            />
                        )}
                    </div>
                )}
                {/* //!drop off section  */}
                {item.pcatId === 3 &&
                    index === 1 &&
                    objectDetailStatuses[3].trainNumber.dropoff === 2 && (
                        <div className="editable-selected-inputs">
                            <TextInput
                                type="text"
                                fromPoints={true}
                                name="trainNumber"
                                icon={icons.train}
                                title="Train Number"
                                classNameImg="icon-inside0inp-train"
                                onChange={(e) => this.onchangeHandlerInput(e, 1)}
                                value={trainNumber ? trainNumber : item.trainNumber}
                            />
                        </div>
                    )}
            </div>
        );
    }
}
class CheckingForPostcodes extends React.Component {
    onchangeHandlerInput = (e, pickOrDrop) => {
        let { name, value } = e.target
        let { item, whichItemSelected } = this.props;
        let postCodeDetails = JSON.parse(JSON.stringify(item.postCodeDetails));
        if (name === "id") {
            let id = parseInt(e.target.options[e.target.selectedIndex].getAttribute("id"))
            postCodeDetails.id = id;
            postCodeDetails.postCodeAddress = value;
        } else {
            value = String(value).split('').filter(s => !['"', "'"].includes(s)).join('');
            postCodeDetails.id = 0;
            postCodeDetails.postCodeAddress = value
        }
        window.journeyDetailsUpdateFormDispatch.onchangeItemDetails(postCodeDetails, pickOrDrop, whichItemSelected, 5)
    }
    render() {
        let postcodes = [];
        let { item, index } = this.props;
        if (item.pcatId === 5) {
            postcodes = this.props.postCodeAddress.filter((codes) => item.postcode === codes.postcode && codes.addresses);
            let detailsStatus = JSON.parse(window.pointsTypesCategories['5'].detailsStatus || '{}').postCodeDetails
            return (
                <div>
                    <div className="editable-selected-inputs">
                        {detailsStatus.id[index === 0 ? 'pickup' : 'dropoff'] === 1
                            ? <SelectBox
                                name="id"
                                value={""}
                                fromPoints={true}
                                icon={icons.thumbtack}
                                title="Postcode Address"
                                defaultValue={item.postCodeDetails.id}
                                placeholder="add a new adress if not listed "
                                data={postcodes[0] && Array.isArray(postcodes[0].addresses) ? postcodes[0].addresses : []}
                                onChange={(e) => this.onchangeHandlerInput(e, index)}
                                classNameImg="icon_selectedPoints_selectbox-post-code"
                            />
                            : <React.Fragment></React.Fragment>
                        }
                        {item.postCodeDetails.id === 0 && detailsStatus.postCodeAddress.pickup === 1
                            ? <TextArea
                                icon={icons.idBadge}
                                fromBooking={true}
                                name="postCodeAddress"
                                title="Adress Description *"
                                onChange={(e) => this.onchangeHandlerInput(e, index)}
                                value={item.postCodeDetails.postCodeAddress}
                                errorMessage={item.postCodeDetails.postCodeAddress ? "" : (!item.postCodeDetails.postCodeAddress ? "required" : "")}
                            />
                            : <React.Fragment></React.Fragment>
                        }
                    </div>
                </div>
            );
        } else {
            return <React.Fragment></React.Fragment>
        }
    }
}
class CheckPlaceOfInterest extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "address-description": "", whichItemSelected: this.props.whichItemSelected, };
    }

    onchangeHandlerInput = (e, pickOrDrop) => {
        let { name, value } = e.target
        if (value.includes('"') || value.includes(`'`) || value.includes('/') || value.includes('\\')) return

        let { whichItemSelected } = this.state
        let addresDescription = this.state["address-description"]
        let valueToSend = addresDescription
        this.setState({ [name]: value })
        valueToSend = value
        window.journeyDetailsUpdateFormDispatch.onchangeItemDetails(valueToSend, pickOrDrop, whichItemSelected, 7)
    }

    render() {
        let { item, index, objectDetailStatuses } = this.props;

        return (
            <div>
                {/* //!pick up section  */}
                {item.pcatId === 7 && index === 0 && (
                    <div className="editable-selected-inputs">
                        {objectDetailStatuses[7]["address-description"].pickup === 1 && item.ptype !== 3 && (
                            <TextInput
                                type="text"
                                fromPoints={true}
                                icon={icons.idBadge}
                                title="Places of Interest"
                                name="address-description"
                                value={this.state["address-description"] ? this.state["address-description"] : item["address-description"]}
                                onChange={(e) => this.onchangeHandlerInput(e, 0)}
                                classNameImg="icon-inside-small-input-place-interest"
                            />
                        )}
                    </div>
                )}
                {/* //!drop off section  */}
                {item.pcatId === 7 && index === 1 && objectDetailStatuses[7]["address-description"].dropoff === 1 && item.ptype !== 3 && (
                    <div className="editable-selected-inputs">
                        <TextInput
                            type="text"
                            fromPoints={true}
                            icon={icons.idBadge}
                            title="Places of Interest"
                            name="address-description"
                            value={this.state["address-description"] ? this.state["address-description"] : item["address-description"]}
                            onChange={(e) => this.onchangeHandlerInput(e, 1)}
                            classNameImg="icon-inside-small-input-place-interest"
                        />
                    </div>
                )}
            </div>
        );
    }
}
class CheckForCitites extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "address-description": "", whichItemSelected: this.props.whichItemSelected, };
    }
    onchangeHandlerInput = (e, pickOrDrop) => {
        let { name, value } = e.target
        if (value.includes('"') || value.includes(`'`) || value.includes('/') || value.includes('\\')) return

        let { whichItemSelected } = this.state
        let addresDescription = this.state["address-description"]
        let valueToSend = addresDescription
        this.setState({ [name]: value })
        valueToSend = value
        window.journeyDetailsUpdateFormDispatch.onchangeItemDetails(valueToSend, pickOrDrop, whichItemSelected, 8)
    }
    render() {
        let { item, index, objectDetailStatuses } = this.props;
        return (
            <div>
                {/* //!pick up section  */}
                {item.pcatId === 8 && index === 0 && (
                    <div className="editable-selected-inputs">
                        {objectDetailStatuses[8]["address-description"].pickup === 1 && item.ptype !== 3 && (
                            <TextInput
                                type="text"
                                title="Cities"
                                fromPoints={true}
                                icon={icons.mapLocation}
                                name="address-description"
                                value={this.state["address-description"] ? this.state["address-description"] : item["address-descriptio "]}
                                onChange={(e) => this.onchangeHandlerInput(e, 0)}
                                classNameImg="icon-inside-small-input-place-interest"
                            />
                        )}
                    </div>
                )}
                {/* //!drop off section  */}
                {item.pcatId === 8 && index === 1 && objectDetailStatuses[8]["address-description"].dropoff === 1 && item.ptype !== 3 && (
                    <div className="editable-selected-inputs">
                        <TextInput
                            type="text"
                            title="Cities"
                            fromPoints={true}
                            icon={icons.mapLocation}
                            name="address-description"
                            value={this.state["address-description"] ? this.state["address-description"] : item["address-description"]}
                            onChange={(e) => this.onchangeHandlerInput(e, 1)}
                            classNameImg="icon-inside-small-input-place-interest"
                        />
                    </div>
                )}
            </div>
        );
    }
}
class CheckForUniversity extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "address-description": "", whichItemSelected: this.props.whichItemSelected, };
    }

    onchangeHandlerInput = (e, pickOrDrop) => {
        let { name, value } = e.target
        if (value.includes('"') || value.includes(`'`) || value.includes('/') || value.includes('\\')) return
        let { whichItemSelected } = this.state
        let addresDescription = this.state["address-description"]
        let valueToSend = addresDescription
        this.setState({ [name]: value })
        valueToSend = value
        window.journeyDetailsUpdateFormDispatch.onchangeItemDetails(valueToSend, pickOrDrop, whichItemSelected, 9)
    }
    render() {
        let { item, index, objectDetailStatuses } = this.props;

        return (
            <div>
                {/* //!pick up section  */}
                {item.pcatId === 9 && index === 0 && (
                    <div className="editable-selected-inputs">
                        {objectDetailStatuses[9]["address-description"].pickup === 1 && item.ptype !== 3 && (
                            <TextInput
                                type="text"
                                fromPoints={true}
                                icon={icons.building}
                                name="address-description"
                                title="Universities And Colleges"
                                value={this.state["address-description"] ? this.state["address-description"] : item["address-description"]}
                                onChange={(e) => this.onchangeHandlerInput(e, 0)}
                                classNameImg="icon-inside-small-input-place-interest"
                            />
                        )}
                    </div>
                )}
                {/* //!drop off section  */}
                {item.pcatId === 9 && index === 1 && objectDetailStatuses[9]["address-description"].dropoff === 1 && item.ptype !== 3 && (
                    <div className="editable-selected-inputs">
                        <TextInput
                            type="text"
                            fromPoints={true}
                            icon={icons.building}
                            name="address-description"
                            title="Universities And Colleges"
                            value={this.state["address-description"] ? this.state["address-description"] : item["address-description"]}
                            onChange={(e) => this.onchangeHandlerInput(e, 1)}
                            classNameImg="icon-inside-small-input-place-interest"
                        />
                    </div>
                )}
            </div>
        );
    }
}
class CheckForOther extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "address-description": "", whichItemSelected: this.props.whichItemSelected, };
    }

    onchangeHandlerInput = (e, pickOrDrop) => {
        let { name, value } = e.target
        if (value.includes('"') || value.includes(`'`) || value.includes('/') || value.includes('\\')) return

        let { whichItemSelected } = this.state
        let addresDescription = this.state["address-description"]
        let valueToSend = addresDescription
        this.setState({ [name]: value })
        valueToSend = value
        window.journeyDetailsUpdateFormDispatch.onchangeItemDetails(valueToSend, pickOrDrop, whichItemSelected, 10)
    }
    render() {
        let { item, index, objectDetailStatuses } = this.props;
        return (
            <div>
                {/* //!pick up section  */}
                {item.pcatId === 10 && index === 0 && (
                    <div className="editable-selected-inputs">
                        {objectDetailStatuses[10]["address-description"].pickup === 1 && item.ptype !== 3 && (
                            <TextInput
                                type="text"
                                fromPoints={true}
                                title="Description "
                                name="address-description"
                                icon={icons.locationArrow}
                                classNameImg="icon-inside-small-input"
                                value={this.state["address-description"] ? this.state["address-description"] : item["address-description"]}
                                onChange={(e) => this.onchangeHandlerInput(e, 0)}
                            />)}
                    </div>
                )}
                {/* //!drop off section  */}
                {item.pcatId === 10 && index === 1 && objectDetailStatuses[10]["address-description"].dropoff === 1 && item.ptype !== 3 && (
                    <div className="editable-selected-inputs">
                        <TextInput
                            type="text"
                            title="Description "
                            fromPoints={true}
                            name="address-description"
                            icon={icons.locationArrow}
                            classNameImg="icon-inside-small-input"
                            value={this.state["address-description"] ? this.state["address-description"] : item["address-description"]}
                            onChange={(e) => this.onchangeHandlerInput(e, 1)}
                        />
                    </div>)}
            </div>
        );
    }
}
class SelectBox extends React.Component {
    render() {
        let {
            data,
            name = "",
            icon = "",
            title = "",
            defaultValue = "" || Number(),
            classNameImg = "",
            fromPoints = false,
            placeholder = false,
            setModalFlightStatus,
            onChange = (e) => { },
            infoForFlight = false,
        } = this.props;
        return (
            <div className="editable-form-control">
                <div className="editable-form-control-header">
                    <p className="editable-form-control-header-label  display-flex">
                        {title}
                        {infoForFlight ? (
                            <span onClick={() => setModalFlightStatus()} className="info-for-flight" >
                                <img src={icons.info} className="circle-info-quotation-card-icon" alt="" />
                            </span>) : (" ")}
                    </p>

                </div>
                <div className="editable-select-div">
                    <img className={classNameImg} src={icon} alt="" />
                    <img className={` editable-select-img-angle-down ${fromPoints ? "editable-select-img-angle-down-for-selectedPoints" : ""}`} src={icons.angleDown} alt="" />
                    <select name={name} onChange={onChange} className={fromPoints ? "select-selected-points" : ""} >
                        {placeholder && (<option value="" id={0}> {placeholder} </option>)}
                        {Number(data) ? Array(data)
                            .fill()
                            .map((x, i) => {
                                return (
                                    <option selected={parseFloat(defaultValue) === i + 1} key={i} value={i + 1}>
                                        {`${i + 1}`}
                                    </option>
                                );
                            })
                            : data.map((d, i) => {
                                return (
                                    <option
                                        key={i}
                                        selected={parseFloat(d.value.split(" ")[0]) === parseFloat(defaultValue) || parseFloat(d.id) === parseFloat(defaultValue)}
                                        value={d.value}
                                        id={d.id && d.id}
                                    >
                                        {d.value}
                                    </option>
                                );
                            })}
                    </select>
                </div>
            </div>
        );
    }
}
//inside passenger details
class TextInput extends React.Component {
    render() {
        let {
            name = "",
            icon = "",
            type = "",
            value = "",
            title = "",
            placeholder = "",
            isLoading = false,
            errorMessage = "",
            classNameImg = "",
            fromPoints = false,
            onChange = (e) => { },
            onKeyDown = (e) => { },
        } = this.props;

        return (
            <div className="editable-form-control">
                <div className="editable-form-control-header">
                    <p className="editable-form-control-header-label">{title}</p>
                    {errorMessage && (
                        <p className="editable-form-control-header-message">
                            {errorMessage}
                        </p>
                    )}
                </div>
                <div className="editable-form-control-input-div">
                    <img src={icon} className={classNameImg} alt="" />
                    <input
                        autocomplete="off"
                        placeholder={placeholder}
                        name={name}
                        type={type}
                        value={value}
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        className={`
            ${errorMessage ? "editable-error-input" : ""}
            ${fromPoints ? "input-selected-points" : ""}`}
                    />

                    {isLoading && <Loading loadCenter={false} />}
                </div>
            </div>
        );
    }
}
//inside passenger details
class DateInput extends React.Component {
    render() {
        let { icon, type = "", name = "", value = "", title = "", classNameImg = "", fromPoints = false, onChange = (e) => { }, } = this.props;
        return (
            <div className="editable-form-control">
                <div className="editable-form-control-header">
                    <p className="editable-form-control-header-label">{title}</p>
                </div>
                <div className="editable-form-control-input-div  date-input-div">
                    <img src={icon} className={classNameImg} alt="" />
                    <input name={name} type={type} value={value} onChange={onChange} lang="en" className={`inputDate ${fromPoints ? "input-selected-points" : ""}`} />
                </div>
            </div>
        );
    }
}
//inside passenger details
class TextArea extends React.Component {
    render() {
        let { value = "", onChange = (e) => { }, name = "", icon, placeholder = "", errorMessage = "", title = "", fromPoints = false, classNameImg = "", } = this.props;
        return (
            <div className="editable-form-control">
                <div className="editable-form-control-header-textarea">
                    <p className="editable-form-control-header-label">{title}</p>
                    {errorMessage && (
                        <p className="editable-form-control-header-message">
                            {errorMessage}
                        </p>
                    )}
                </div>
                <div className="editable-form-control-textarea-div">
                    <img src={icon} className={classNameImg} alt="" />
                    <textarea
                        placeholder={placeholder}
                        onChange={onChange}
                        name={name}
                        className={`  ${errorMessage ? "editable-error-input" : ""} ${fromPoints ? "input-selected-points" : ""}`}
                        value={value}
                    ></textarea>
                </div>
            </div>
        );
    }
}
class TimePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropdownActive: false, };
    }
    statusDropDown() {
        this.setState({ dropdownActive: !this.state.dropdownActive });
    }
    render() {
        let { dropdownActive, } = this.state;
        let { title, name, options, hour, minute, } = this.props;
        return (
            <div className={` jrn-time-picker ${name === "hour" ? "jrn-time-picker-left" : "jrn-time-picker-right"}`}>
                <p>{title}</p>
                <div onClick={() => this.statusDropDown()} className="jrn-timepicker-dropdown-holder"  >
                    <div className={`  jrn-timepicker-dropdown  ${dropdownActive ? "DropDownActive" : ""}`}>
                        <p className={"jrn-timepicker-holder"}>
                            {name === "hour" ? hour : minute}
                        </p>
                    </div>
                    <ul className={"jrn-timepicker-dropdown-option"} name={name}>
                        {name === "hour"
                            ? options.map((item, i) => {
                                return (
                                    <li
                                        onClick={(e) => this.props.setHourOrMinute(e, "hour")}
                                        className={`li ${Number(hour) === Number(item.value) ? "li-current" : ""}`}
                                        key={item.id}
                                        value={item.value}
                                    >
                                        {item.value}
                                    </li>
                                );
                            })
                            : options.map((item, i) => {
                                return (
                                    <li
                                        onClick={(e) => this.props.setHourOrMinute(e, "minute")}
                                        className={`li ${Number(minute) === Number(item.value) ? "li-current" : ""}`}
                                        key={item.id}
                                        value={item.value}
                                    >
                                        {item.value < 10 ? `0${item.value}` : String(item.value)}
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
        );
    }
}
class Loading extends React.Component {
    render() {
        let { loadCenter } = this.props
        return (
            <div className={`${loadCenter ? "tmb-loading-center" : "tmb-loading"}`}>
                <div className={"tmb-loading-dot"}></div>
                <div className={"tmb-loading-dot"}></div>
                <div className={"tmb-loading-dot"}></div>
                <div className={"tmb-loading-dot"}></div>
            </div>
        )
    }
}
//inside passenger details
class DetailsLi extends React.Component {
    render() {
        let { icon, title, description, className } = this.props;
        return (
            <li>
                <div className="psg-li-left">
                    <img src={icon} className={className} alt="" />
                    <p>{title}:</p>
                </div>
                <div className="psg-li-right">{description}</div>
            </li>
        );
    }
}
//journey details
class DetailsGridLi extends React.Component {
    render() {
        let { icon, title, description, className } = this.props;
        return (
            <li>
                <div className="jrn-details-grid">
                    <div className="jrn-details-grid-header-li">
                        <img src={icon} className={className ? className : ""} alt="" />
                        <p>{title}</p>
                    </div>
                    <div className="jrn-details-grid-bottom">
                        <span>:{description}</span>
                    </div>
                </div>
            </li>
        );
    }
}
//inside  ShowPointsOnTheTable
class ShowPointDescription extends React.Component {
    render() {
        let { icon, title, description } = this.props;
        return (
            <li>
                <div className="jrn-details-bottom-description">
                    <img src={icon} alt="" />
                    <div className="jrn-text-div">
                        <span>{title}:</span>&nbsp;
                        <span>{description}</span>
                    </div>
                </div>
            </li>
        );
    }
}
//inside journeyDetails
class ShowPointsOnTheTable extends React.Component {
    render() {
        let { points, title, showWaiting } = this.props;
        return (
            <li style={{ borderBottom: "1px solid hsla(215, 9%, 55%, 0.2)" }}>
                <div className="jrn-details">
                    <div className="jrn-details-header">
                        <img src={icons.circle} alt="" />
                        <p>{title} :</p>
                    </div>
                    {points.map((point) => {
                        return (
                            <div className="jrn-details-bottom-container">
                                <div className="jrn-details-bottom-adress">
                                    <img src={icons.mapLocation} alt="" />
                                    <span className="jrn-details-bottom-name">
                                        {point.address}
                                    </span>
                                </div>
                                {point.pcatId === 1 && (
                                    <ShowPointDescription title="Fligth Number" icon={icons.circle} description={point.flightDetails.flightNumber} />)}
                                {point.pcatId === 1 && showWaiting && (
                                    <ShowPointDescription title="Waiting Pickup Time" icon={icons.circle} description={point.flightDetails.waitingPickupTime || "0"} />)}
                                {point.pcatId === 5 && (
                                    <ShowPointDescription title="Postcode Address" icon={icons.circle} description={point.postCodeDetails.postCodeAddress} />)}
                                {point.pcatId === 2 && (
                                    <ShowPointDescription title="Cruise Name" icon={icons.circle} description={point.cruiseNumber} />)}
                                {point.pcatId === 3 && (
                                    <ShowPointDescription title="Train Number" icon={icons.circle} description={point.trainNumber} />)}
                                {point.pcatId === 7 && point["address-description"] && (
                                    <ShowPointDescription title="Places of Interest" icon={icons.circle} description={point["address-description"]} />)}
                                {point.pcatId === 8 && point["address-description"] && (
                                    <ShowPointDescription title="Cities" icon={icons.circle} description={point["address-description"]} />)}
                                {point.pcatId === 9 && point["address-description"] && (
                                    <ShowPointDescription title="Universities And Colleges" icon={icons.circle} description={point["address-description"]} />)}
                                {point.pcatId === 10 && point["address-description"] && (
                                    <ShowPointDescription title="Description" icon={icons.circle} description={point["address-description"]} />)}
                            </div>
                        );
                    })}
                </div>
            </li>
        );
    }
}
class AlertMessage extends React.Component {
    render() {
        let { sM, eM } = this.props;
        return (
            <div className={"tmb-alert-container"}>
                <div className={`  tmb-alert-div  ${sM || eM ? "tmb-showAlert" : ""}  ${eM ? "tmb-alert-div-error" : ""} `}>
                    <img className="tmb-check-img" src={icons.check} alt="" />
                    <span>{eM && eM}</span>
                    <span>{sM && sM}</span>
                    <div className={"tmb-message-container"}>
                        <div className={"tmb-progress-moved tmb-progress"}>
                            <div className={"tmb-progress-bar"}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Done
class BookingLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // check-point -> remove default values for reservationId, email
            reservationId: "",
            email: "",
            error: "",
            loading: false,
        };
    }
    componentDidMount() {
        if (this.props.preLogin === true && this.state.reservationId.length > 0 && this.state.email.length > 0) {
            this.checkReservationDetails()
        }
        try {
            let query = new URLSearchParams(window.location.search);
            let email = query.get('email');
            let reservationId = query.get('reservationId');
            console.log({ email, reservationId })
            if (typeof email === 'string' && email.length > 0 && typeof reservationId === 'string' && reservationId.length > 0) {
                this.setState({ email, reservationId })
            }
        } catch (error) {

        }
    }
    //!fecth reservation details
    checkReservationDetails(e) {
        if (e && e.preventDefault) { e.preventDefault() };
        if (this.state.loading === false) {
            this.setState({ error: "", loading: true }, () => {
                let eM = "incorrect registered details";
                let { reservationId, email } = this.state;
                findLoginDetails({ reservationId, email }, res => {
                    if (res.status === 200) {
                        let { data } = res;
                        window.manageBookingDispatch.onSuccessLogin({ data, reservationId, email });
                    } else {
                        let errorMessage = res.error
                            ? (Array.isArray(res.error.global)
                                ? res.error.global.join('\n')
                                : (res.error || {}).message
                            )
                            : undefined
                        // window.manageBookingDispatch.alertMessage("", errorMessage);
                        this.setState({ error: errorMessage || eM, loading: false });
                    }
                })
                setTimeout(() => {
                    this.setState({ error: "" });
                }, 10000);
            });
        }
    }
    render() {
        let { email, reservationId, error, loading } = this.state;
        return (
            <div className="tmb-login-section">
                <div className={"tmb-login-content-logo-image"}>
                    <img src={`${__env.websiteLogUrl}`} alt="" />
                    <div></div>
                    <p>Manange Booking</p>
                </div>
                <div className={"tmb-login-content"}>
                    {/* <div className={"tmb-login-content-logo-imagee"}>
            <img src={`${__env.websiteLogUrl}`} alt="" />
          </div> */}

                    <form onSubmit={(e) => this.checkReservationDetails(e)} method="POST">
                        <div className="tmb-form-control">
                            <div className="tmb-form-control-header">
                                <p className={"tmb-form-control-header-label"}>Email Address :</p>
                            </div>

                            <div className="tmb-input-div">
                                <img className="tmb-form-icon" src={icons.at} alt="" />
                                <input type="text" name="email" value={email} placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} className={`tmb-input `} />
                            </div>
                        </div>
                        <div className="tmb-form-control">
                            <div className="tmb-form-control-header">
                                <p className={"tmb-form-control-header-label"}>Reservation ID :</p>
                            </div>
                            <div className="tmb-input-div">
                                <img className="tmb-form-icon tmb-user-icon" src={icons.user} alt="" />
                                <input
                                    type="text"
                                    name="reservationId"
                                    value={reservationId}
                                    placeholder="ReservationId"
                                    onChange={(e) => this.setState({ reservationId: e.target.value })}
                                    className={`tmb-input `}
                                />
                            </div>
                        </div>
                        {error ? (
                            <div className="tmb-login-error-div tmb-zoom-out">{error}</div>
                        ) : ("")}
                        <div className={"tmb-input-button"}>
                            <button className="tmb-btn  tmb-btn-primary" onClick={(e) => this.checkReservationDetails(e)}   >
                                {loading ? "LOADING ..." : "Find"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

//passenger details information Which shows on the table
class PassengerDetailsForm extends React.Component {
    render() {
        return (
            <div className="psg-passenger-details">
                <h1 className="psg-referenceId">Referance ID : {this.props.reservationDetails.id}</h1>
                <div className="psg-title">
                    <h3>Customer Details</h3>
                    {this.props.checkFor24 ? "" : <button onClick={() => this.props.onEdit()} className="tmb-btn-primary-outlined fw_500 tmb-btn" >
                        Edit
                    </button>}
                </div>
                <div className="psg-column psg-first-column">
                    <DetailsLi
                        title="Full Name" icon={icons.user}
                        className="fullname-img"
                        description={`${this.props.passengerDetails.firstname} ${typeof this.props.passengerDetails.lastname === "string" &&
                            this.props.passengerDetails.lastname.length > 0
                            ? ` ${this.props.passengerDetails.lastname}`
                            : ""
                            }`}
                    />
                    <DetailsLi title="Email" icon={icons.at} description={this.props.passengerDetails.email} />
                </div>
                <div className="psg-column psg-second-column">
                    <DetailsLi title="Number of Passengers" icon={icons.users} description={this.props.transferDetails.passengersNumber} />
                    <DetailsLi title="Phone Number" icon={icons.phone} description={this.props.passengerDetails.phone} />
                </div>
            </div>
        );
    }
}
//pasenger detils onchange handler form
class PassengerDetailsUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: this.props.passengerDetails.email,
            phone: this.props.passengerDetails.phone,
            firstname: this.props.passengerDetails.firstname,
            passengersNumber: this.props.transferDetails.passengersNumber,
        };
    }
    onCancel() {
        if (typeof this.props.onCancel === "function") this.props.onCancel();
    }
    onSave() {
        let { passengerDetails, transferDetails } = this.props;
        let { email, firstname, phone, passengersNumber } = this.state;
        let isUpdated = false;
        if (
            passengerDetails.email !== email ||
            passengerDetails.firstname !== firstname ||
            passengerDetails.phone !== phone ||
            parseInt(transferDetails.passengersNumber) !== parseInt(passengersNumber)
        ) {
            isUpdated = true;
        }
        if (isUpdated) {
            passengerDetails = { ...passengerDetails, email, firstname, phone };
            transferDetails = { ...transferDetails, 'passengersNumber': parseInt(passengersNumber) };

            let params = { passengerDetails, transferDetails };
            this.setState({ loading: true }, () => {
                window.manageBookingDispatch.saveNewPassengerDetails(params, (log) => {
                    if (log.status === 200) {
                        this.setState({ loading: false }, () => {
                            this.props.onSave();
                        });
                    } else {
                        this.setState({ loading: false })
                    }
                });
            });
        } else {
            this.props.onSave();
        }
    }

    onchangeHandler(e) {
        let { name, value } = e.target;
        if (value.includes('"') || value.includes(`'`) || value.includes('/') || value.includes('\\')) return
        this.setState({ [name]: value });
    }

    render() {
        let { loading } = this.state;
        return (
            <div className="editable-psg-details editable-psg-details-two">
                <div className="editable-psg-header">
                    <h3>Customer Details</h3>
                    <div className="editable-buttons">
                        <button onClick={() => this.onCancel()} className="tmb-cancel-btn tmb-btn-primary-outlined fw_500 tmb-btn" >
                            Close
                        </button>
                        <button onClick={loading ? () => { } : () => this.onSave()} className="tmb-btn-primary-outlined fw_500 tmb-btn" >
                            {loading ? "Loading .." : "Save"}
                        </button>
                    </div>
                </div>
                <div className="editable-inp-boxes">
                    <div className="editable-inp-box">
                        <TextInput
                            value={this.state.firstname}
                            classNameImg="user-icon-input"
                            name="firstname"
                            type="text"
                            errorMessage={""}
                            onChange={(e) => this.onchangeHandler(e)}
                            title="Full Name"
                            icon={icons.user}
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="editable-inp-box">
                        <TextInput
                            value={this.state.email}
                            classNameImg="phone-icon-input"
                            name="email"
                            type="text"
                            errorMessage={""}
                            onChange={(e) => this.onchangeHandler(e)}
                            title="Email"
                            icon={icons.at}
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div className="editable-inp-boxes">
                    <div className="editable-inp-box">
                        <SelectBox
                            defaultValue={this.state.passengersNumber}
                            classNameImg="editable-select-img"
                            name="passengersNumber"
                            onChange={(e) => this.onchangeHandler(e)}
                            title="Number of passengers"
                            icon={icons.users}
                            data={this.props.maxPax}
                        />
                    </div>
                    <div className="editable-inp-box">
                        <TextInput
                            value={this.state.phone}
                            classNameImg="phone-icon-input"
                            name="phone"
                            type="text"
                            errorMessage={""}
                            onChange={(e) => this.onchangeHandler(e)}
                            title="Phone Number"
                            icon={icons.phone}
                            placeholder="Phone Number"
                        />
                        <p className="editable-phone-subtitle">
                            * with international dialling code
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
//journey details information  Which shows on the table
class JourneyDetailsForm extends React.Component {
    render() {
        let { paymentType } = this.props.paymentDetails;
        let paymentTypeTitle = '';
        if (paymentType === 1) { paymentTypeTitle = 'Pay Cash to Driver' }
        if (paymentType === 2) { paymentTypeTitle = 'Paid By Card' }
        if (paymentType === 6) { paymentTypeTitle = 'Paid By Card' }
        if (paymentType === 7) { paymentTypeTitle = 'Paid By Card' }
        return (
            <div className="jrn-journey-details">
                <div className="jrn-title">
                    <h3>Transfer Details</h3>
                    {this.props.checkFor24 ? "" :
                        <button onClick={() => this.props.onEdit()} className="tmb-btn-primary-outlined fw_500 tmb-btn" >
                            Edit
                        </button>}
                </div>
                <div className="jrn-column">
                    <ShowPointsOnTheTable points={this.props.selectedPickupPoints} title="Pick-up Location" showWaiting={true} />
                    <ShowPointsOnTheTable points={this.props.selectedDropoffPoints} title="Drop off Location" showWaiting={false} />
                </div>
                <div className="jrn-column jrn-column-details">
                    <DetailsGridLi title="Transfer Type" description={this.props.transferType} className={false} icon={icons.circle} />
                    <DetailsGridLi title="Notes" description={this.props.transferDetails.specialRequests} className={false} icon={icons.circle} />
                </div>
                {/* + */}
                <div className="jrn-column jrn-column-details">
                    <DetailsGridLi
                        title="Payment Method"
                        description={paymentTypeTitle}
                        className={false}
                        icon={icons.circle}
                    />

                    <DetailsGridLi title="Price" description={`£${this.props.quotation.price}`} className={false} icon={icons.circle} />
                </div>
                <div className="jrn-column jrn-column-details">
                    <li>
                        <div className="jrn-details-grid">
                            <div className="jrn-details-grid-header-li">
                                <img className="jrn-date-img" src={icons.calendar} alt="" />
                                <p>Arrival Date &Time</p>
                            </div>
                            <div className="jrn-details-grid-bottom">
                                <span>
                                    :{this.props.transferDetails.transferDateTimeString}
                                </span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="jrn-details-grid">
                            <div className="jrn-details-grid-header-li">
                                <img className="jrn-notes-img" src={icons.car} alt="" />
                                <p>Vehicle Type</p>
                            </div>
                            <div className="jrn-details-grid-bottom">
                                <span>:{this.props.vehicleType}</span>
                            </div>
                        </div>
                    </li>
                </div>
            </div>
        );
    }
}

class JorneyDetailsUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotations: [],
            pickUpPointInput: "", //in order to handleInput
            dropOffPointInput: "",
            updatedLoading: false,//when we fetch request in order to update
            pickUpSuggestions: [],
            dropOffSuggestions: [],
            quotationLoading: false,
            inputPickUpShowStatus: false, //adding input if true
            addExtraPointTextPickUp: true, //removing text if false
            inputDropOffShowStatus: false,
            addExtraPointTextDropOff: true,
            getPickUpSuggestLoading: false,
            getDropOffSuggestLoading: false,
            quotation: this.props.quotation,
            passengerEmail: this.props.email,
            payStripeLoadingInCaseCash: false,
            stripeIframeAndTokenInCaseCash: "",
            paymentType: this.props.paymentType,
            paymentToken: this.props.paymentToken,
            currentPrice: this.props.previousPrice,//it is the current price which when quotation will change it will change
            previousPrice: this.props.previousPrice,
            specialRequests: this.props.specialRequests,
            itIsCashPaymentAndChangeEfectToThePrice: false,
            transferDateTimeString: this.props.transferDateTimeString,
            hour: this.props.transferDateTimeString.split(" ")[1].split(":")[0],
            minute: this.props.transferDateTimeString.split(" ")[1].split(":")[1],
            //
            reservation: JSON.parse(JSON.stringify(this.props.reservation)),
        };
    }
    onCancel() {
        if (typeof this.props.onCancel === "function") {
            this.props.onCancel()
            // check-point
            // window.manageBookingDispatch.onCancelJourneyDetails(JSON.parse(localStorage.getItem("reservation")))
        }
    }

    //!case 1 => wetherEffectedPriceButSTillDoesntChangeTheMethod
    //*=>also it means updated already happened so we dont check isUpdated
    wetherEffectedPriceButSTillDoesntChangeTheMethod() {
        let { 'reservation': propsReservation } = this.props;
        let { 'reservation': stateReservation } = this.state;
        //
        if (JSON.stringify(propsReservation) !== JSON.stringify(stateReservation)) {
            this.setState({ updatedLoading: true }, () => {
                window.manageBookingDispatch.saveStillWantsToDoesntChangePayment({ 'reservation': stateReservation }, log => {
                    if (log.status === 200) {
                        this.setState({ updatedLoading: false }, () => {
                            this.props.onSave();
                        })
                    } else {
                        this.setState({ updatedLoading: false })
                    }
                });
            });
        } else {
            this.props.onSave();
        }
    }

    //!case 2 he/she edited journeydetails and wants to finish payment with cash
    //*=> (will trigger componentDidUpdate to check statusof payment)
    itisCashAndWantsToPayByStripeCard(paymentType) {
        try {
            let { stripeIframeAndTokenInCaseCash, reservation } = this.state
            if (!stripeIframeAndTokenInCaseCash) {
                this.setState({ payStripeLoadingInCaseCash: true }, () => {
                    let body = JSON.stringify({ 'quotations': [reservation.quotation], 'type': paymentType, language: "en", 'passengerEmail': reservation.passengerDetails.email, 'mode': localStorage['payment-mode'] || undefined, 'reservationsIds': [reservation.reservationDetails.id] })
                    fetch(`${__env.apiDomain}/api/v1/payment/stripe/create`, { 'method': 'POST', 'headers': { "Content-Type": "application/json" }, body })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.status === 200) {
                                this.setState({ payStripeLoadingInCaseCash: false, stripeIframeAndTokenInCaseCash: data }, () => {
                                    this.checkPaymentStatus(data);
                                })
                            } else {
                                this.setState({ payStripeLoadingInCaseCash: false, stripeIframeAndTokenInCaseCash: "" })
                                window.manageBookingDispatch.alertMessage("", "Request Error Try contact with us")
                            }
                        })
                        .catch((error) => {
                            console.log(error.message);
                        });
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    //!case 3 Subcharge
    //*=> (will trigger componentDidUpdate to check statusof payment)
    //* we dont compare if is updated or not cause alredy price changed
    paySubChargeWithStripe(paymentType) {
        let { reservation } = this.state
        try {
            let body = JSON.stringify({ 'oldQuotation': [this.props.reservation.quotation], 'newQuotation': [reservation.quotation], 'type': paymentType, 'paymentToken': reservation.paymentDetails.token, 'reservationsIds': [reservation.reservationDetails.id], 'email': reservation.passengerDetails.email, 'sessionTypeId': 2 })
            fetch(`${__env.apiDomain}/api/v1/payment/stripe/charges`, { 'method': 'POST', 'headers': { "Content-Type": "application/json" }, body })
                .then((res) => res.json())
                .then((data) => {
                    if (data.status === 200) {
                        this.setState({ payStripeLoadingInCaseCash: false, stripeIframeAndTokenInCaseCash: data }, () => {
                            this.checkPaymentStatus(data)
                        })
                    } else {
                        this.setState({ payStripeLoadingInCaseCash: false, stripeIframeAndTokenInCaseCash: "" })
                        window.manageBookingDispatch.alertMessage("", "Request Error Try contact with us ")
                    }

                })
                .catch((error) => {
                    console.log(error.message);
                });
        } catch (error) { console.log(error.message); }
    }
    // done
    addExtraInputForJourney(e, pickOrDrop) {
        if (pickOrDrop === 0) {
            this.setState({ addExtraPointTextPickUp: false, inputPickUpShowStatus: true, });
        } else {
            this.setState({ addExtraPointTextDropOff: false, inputDropOffShowStatus: true, });
        }
    }
    // Done
    fetchSuggestions(inpValue, index) {
        this.setState({ [index === 0 ? 'getPickUpSuggestLoading' : 'getDropOffSuggestLoading']: true },
            () => {
                fetch(`${__env.apiDomain}/api/v1/suggestions`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ value: inpValue, "session-token": this.state.reservation.passengerDetails.sessionId || '', }),
                }).then((res) => res.json())
                    .then((data) => {
                        this.setState({
                            [index === 0 ? 'dropOffSuggestions' : 'pickUpSuggestions']: [],
                            getPickUpSuggestLoading: false,
                            getDropOffSuggestLoading: false,
                            [index === 0 ? 'pickUpSuggestions' : 'dropOffSuggestions']: [data.result],
                        })
                    })
                    .catch((error) => {
                        console.log(error)
                        this.setState({ getDropOffSuggestLoading: false, getPickUpSuggestLoading: false })
                    });
            })
    }
    //lhr => suggestion comes
    //Done
    onchangeHandlerGetSuggestion(e) {
        let inpName = e.target.name
        let inpValue = e.target.value
        if (inpValue.includes('"') || inpValue.includes(`'`) || inpValue.includes('/') || inpValue.includes('\\')) return
        this.setState({ [inpName]: inpValue })

        if (inpValue.length < 3) this.setState({ dropOffSuggestions: [], pickUpSuggestions: [] })

        if (inpValue.length > 2) {
            if (inpName === 'pickUpPointInput') {
                this.fetchSuggestions(inpValue, 0)
            } else {
                this.fetchSuggestions(inpValue, 1)
            }
        }
    }
    // Done
    onChangeDateSpecialRequest(e) {
        //date picker =>  {/* //2022-12-29 */ }
        let { name, value } = e.target;
        if (value.includes('"') || value.includes(`'`) || value.includes('/') || value.includes('\\')) return

        let { selectedPickupPoints, selectedDropoffPoints, 'transferDetails': { transferDateTimeString } } = this.state.reservation
        if (name === "transferDateTimeString") {
            let minute = transferDateTimeString.split(" ")[1].split(":")[1]; //00   15 20 25
            let hour = transferDateTimeString.split(" ")[1].split(":")[0]; //1 2 3 4 5 6
            transferDateTimeString = `${value} ${hour}:${minute}`
            this.getQuotations({ selectedPickupPoints, selectedDropoffPoints, transferDateTimeString })
            // 
            let newReservation = JSON.parse(JSON.stringify(this.state.reservation));
            newReservation.transferDetails.transferDateTimeString = transferDateTimeString
            this.setState({ transferDateTimeString, 'reservation': newReservation })
        } else {
            let newReservation = JSON.parse(JSON.stringify(this.state.reservation));
            newReservation.transferDetails[name] = value
            this.setState({ [name]: value, 'reservation': newReservation });
        }
    }
    //has sended to timePicker comp as a props
    // Done
    setHourOrMinute = (e, name) => {
        let value = e.target.innerText
        let { 'transferDetails': { 'transferDateTimeString': _tdts } } = this.state.reservation;
        let date = _tdts.split(" ")[0]; //2022-04-18
        let minute = _tdts.split(" ")[1].split(":")[1]; //00   15 20 25
        let hour = _tdts.split(" ")[1].split(":")[0]; //1 2 3 4 5 6
        _tdts = name === 'hour' ? `${date} ${value}:${minute}` : `${date} ${hour}:${value}`
        //
        let newReservation = JSON.parse(JSON.stringify(this.state.reservation))
        newReservation.transferDetails.transferDateTimeString = _tdts;
        this.setState({ [name === 'hour' ? 'hour' : 'minute']: value, 'transferDateTimeString': _tdts, 'reservation': newReservation })
        this.getQuotations({ 'transferDateTimeString': _tdts })
    }
    // Done
    //!Step2 addItem to the list
    addItemToListPart2(point, index, type) {
        let { reservation } = this.state;
        let newReservation = JSON.parse(JSON.stringify(reservation))
        if (index === 0) {
            newReservation.selectedPickupPoints.push(point)
        };
        if (index === 1) {
            newReservation.selectedDropoffPoints.push(point)
        };
        //update automatically quotation
        let { 'transferDetails': { transferDateTimeString } } = newReservation;
        let params = { 'selectedPickupPoints': newReservation.selectedPickupPoints, 'selectedDropoffPoints': newReservation.selectedDropoffPoints, transferDateTimeString }
        this.getQuotations(params)
        this.setState({ 'reservation': newReservation });

    }
    // has sended to handleSearch comp as a props //!Step1 addItem to the list
    // done
    handleAddItemToSelectList = (item, objDetails, index, type) => {
        let method = "POST"
        let headers = { "Content-Type": "application/json", }
        //
        if (item.ptype === 3) { // for google points only
            let body = JSON.stringify({ point: item });
            //request for google place and add item to the list
            fetch(`${__env.apiDomain}/api/v1/google-places`, { method, headers, body })
                .then((res) => res.json())
                .then((data) => {
                    if (data.status === 200) {
                        let point = { ...objDetails, ...data.point };
                        this.removeAddInputField(index, () => {
                            this.addItemToListPart2(point, index, type)
                        })
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        } else if (item.pcatId === 5) { // for postcode points 
            let body = JSON.stringify({ postcodes: [item.postcode] })
            //request forpost codes
            fetch(`${__env.apiDomain}/api/v1/postcode-address`, { method, headers, body })
                .then((res) => res.json())
                .then((data) => {
                    if (data.status) window.reaervationDetailsDispatch.setSelectedPostCode(data.results[0]);
                })
                .catch((error) => {
                    console.log(error);
                });
            let point = { ...item, ...objDetails };
            this.removeAddInputField(index, () => {
                this.addItemToListPart2(point, index, type)
            })
        } else { // for rest points
            let point = { ...item, ...objDetails };
            this.removeAddInputField(index, () => {
                this.addItemToListPart2(point, index, type)
            })
        }
    }
    // Done
    deleteItemFromList = (pickOrDropPoint, indexOfCurrentItem) => {
        let { reservation } = this.state;
        //
        let newReservation = JSON.parse(JSON.stringify(reservation))
        let targetPointsKey = `selected${pickOrDropPoint === 0 ? 'Pickup' : 'Dropoff'}Points`;
        newReservation[targetPointsKey] = newReservation[targetPointsKey].filter((point, i) => i !== indexOfCurrentItem)
        // set updates
        this.setState({ 'reservation': newReservation }, () => {
            this.getQuotations({ 'selectedPickupPoints': newReservation.selectedPickupPoints, 'selectedDropoffPoints': newReservation.selectedDropoffPoints })
        })
        //update automatically quotation
    }
    // Done
    selectQuotation = (item) => {
        let newReservation = JSON.parse(JSON.stringify(this.state.reservation));
        newReservation['quotation'] = item
        if (newReservation.paymentDetails.paymentType === 1) {
            newReservation.paymentDetails.price = parseFloat(item.price);
        }
        // check pax number
        if (Array.isArray(window.carsTypes)) {
            let { pax = 1 } = carsTypes.find(obj => obj.id === item.carId) || {}
            if (pax < newReservation.transferDetails.passengersNumber) {
                newReservation.transferDetails.passengersNumber = pax
            }
        }
        console.log({ 'reservation': newReservation })
        this.setState({ quotation: item, currentPrice: item.price, 'reservation': newReservation })
    }
    // Done
    getQuotations(params = {}) {
        let { reservation } = this.state;
        let { selectedPickupPoints = reservation.selectedPickupPoints, selectedDropoffPoints = reservation.selectedDropoffPoints, transferDateTimeString = reservation.transferDetails.transferDateTimeString } = params
        this.setState({ quotationLoading: true }, () => {
            let body = JSON.stringify({ selectedPickupPoints, selectedDropoffPoints, transferDateTimeString, 'account': 1 });
            fetch(`${__env.apiDomain}/api/v1/quotation`, { 'method': 'POST', 'headers': { "Content-Type": "application/json" }, body })
                .then((res) => res.json()).then((data) => {
                    if (data.status === 200) {
                        let selectedQuotaion = data.quotationOptions.filter((quotation) => quotation.carId === this.state.quotation.carId || this.state.reservation.quotation.carId === quotation.carId)[0]
                        if (typeof selectedQuotaion === 'object') {
                            this.setState({ quotations: data.quotationOptions }, () => {
                                this.selectQuotation(selectedQuotaion)
                            })
                        }
                    } else {
                        this.setState({ quotations: [] })
                    }
                    this.setState({ quotationLoading: false });
                })
                .catch((error) => {
                    this.setState({ quotationLoading: false });
                    window.manageBookingDispatch.alertMessage("", error.message);
                });
        })
    }
    // Done
    removeAddInputField(index, callback = () => { }) {
        if ([0, 1].includes(index)) {
            this.setState({
                [`${index === 1 ? 'dropOff' : 'pickUp'}PointInput`]: "",
                [`${index === 1 ? 'dropOff' : 'pickUp'}Suggestions`]: [],
                [`input${index === 1 ? 'DropOff' : 'PickUp'}ShowStatus`]: false,
                [`addExtraPointText${index === 1 ? 'DropOff' : 'PickUp'}`]: true,
            }, () => callback())
        }
    }
    componentDidMount() {
        // collect quatations details
        let { selectedDropoffPoints, selectedPickupPoints, transferDetails: { transferDateTimeString } } = this.props.reservation;
        this.getQuotations({ selectedPickupPoints, selectedDropoffPoints, transferDateTimeString });
        // set global functions into journeyDetailsUpdateFormDispatch global variable
        window.journeyDetailsUpdateFormDispatch = {
            onchangeItemDetails: ((updatedValues, pickOrDrop, whichItem, pcatId) => {
                let newReservation = JSON.parse(JSON.stringify(this.state.reservation))
                let { selectedPickupPoints, selectedDropoffPoints } = newReservation
                if (pickOrDrop === 0) {
                    if (pcatId === 1) {
                        selectedPickupPoints[whichItem] = { ...selectedPickupPoints[whichItem], flightDetails: updatedValues }
                    }
                    if (pcatId === 2) {
                        selectedPickupPoints[whichItem] = { ...selectedPickupPoints[whichItem], cruiseNumber: updatedValues }
                    }
                    if (pcatId === 3) {
                        selectedPickupPoints[whichItem] = { ...selectedPickupPoints[whichItem], trainNumber: updatedValues }
                    }
                    if (pcatId === 5) {
                        selectedPickupPoints[whichItem] = { ...selectedPickupPoints[whichItem], postCodeDetails: updatedValues }
                    }
                    if (pcatId === 7 || pcatId === 8 || pcatId === 9 || pcatId === 10) {
                        selectedPickupPoints[whichItem] = { ...selectedPickupPoints[whichItem], ["address-description"]: updatedValues }
                    }
                }
                if (pickOrDrop === 1) {
                    if (pcatId === 1) {
                        selectedDropoffPoints[whichItem] = { ...selectedDropoffPoints[whichItem], flightDetails: updatedValues }
                    }
                    if (pcatId === 2) {
                        selectedDropoffPoints[whichItem] = { ...selectedDropoffPoints[whichItem], cruiseNumber: updatedValues }
                    }
                    if (pcatId === 3) {
                        selectedDropoffPoints[whichItem] = { ...selectedDropoffPoints[whichItem], trainNumber: updatedValues }
                    }
                    if (pcatId === 5) {
                        selectedDropoffPoints[whichItem] = { ...selectedDropoffPoints[whichItem], postCodeDetails: updatedValues }
                    }
                    if (pcatId === 7 || pcatId === 8 || pcatId === 9 || pcatId === 10) {
                        selectedDropoffPoints[whichItem] = { ...selectedDropoffPoints[whichItem], ["address-description"]: updatedValues }
                    }
                }
                if ([0, 1].includes(pickOrDrop)) {
                    newReservation.selectedDropoffPoints = selectedDropoffPoints;
                    newReservation.selectedPickupPoints = selectedPickupPoints;
                    this.setState({ selectedPickupPoints, selectedDropoffPoints, 'reservation': newReservation })
                } else { console.log(`unexoected values for pickOrDrop`, { pickOrDrop }) }
            }).bind(this),
            setStripeIframeToNull: () => this.setState({ stripeIframeAndTokenInCaseCash: "" })
        }
    }
    checkPaymentStatus(paymentSessionData = {}) {
        let { webSocketToken, href } = paymentSessionData || {};
        let { reservation } = this.state;
        let interVal;
        if (webSocketToken) {
            interVal = setInterval(async () => {
                try {
                    let req = await fetch(`${__env.apiDomain}/api/v1/payment/status`, { 'method': 'POST', 'headers': { "Content-Type": "application/json", }, 'body': JSON.stringify({ token: webSocketToken }) });
                    let resp = await req.json();
                    if (resp.status === 200) {
                        //we r checking here in order to be sure it is stripe payment or not In future we can add more payments
                        if (href.includes("stripe")) {
                            window.manageBookingDispatch.setPaymentTokenAndEditReservation({ 'response': resp.data, reservation }, log => {
                                if (log.status === 200) {
                                    this.props.onSave()
                                }
                            })
                        } else {
                            window.manageBookingDispatch.alertMessage("", "Something went wrong Try contact with us")
                            this.setState({ stripeIframeAndTokenInCaseCash: "" })
                        }
                        clearInterval(interVal);
                    }
                } catch (error) {
                    console.log(error);
                }
            }, 2000);
        }
    }
    render() {
        let {
            objectDetailss,
            carsTypesObject,
            postCodeAddress,
            imageTypesObject,
            setModalCarStatus,
            namePlaceTypesObject,
            setModalFlightStatus,
            objectDetailStatuses,
        } = this.props;
        let {
            hour,
            minute,
            quotations,
            paymentType,
            currentPrice,
            previousPrice,
            updatedLoading,
            pickUpPointInput,
            quotationLoading,
            dropOffPointInput,
            pickUpSuggestions,
            dropOffSuggestions,
            inputPickUpShowStatus,
            inputDropOffShowStatus,
            addExtraPointTextPickUp,
            getPickUpSuggestLoading,
            getDropOffSuggestLoading,
            addExtraPointTextDropOff,
            reservation,
        } = this.state;
        let { quotation, selectedPickupPoints, selectedDropoffPoints } = reservation;
        //replacing slahs with  -  24/12/2022  => change to  2022-12-24
        let date = null
        if (this.state.transferDateTimeString.includes("/")) {
            date = (this.state.transferDateTimeString
                .split(" ")[0]
                .replace(/\//g, "-")
                .split(" ")[0]
                .replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1"))
        } else {
            date = this.state.transferDateTimeString.split(" ")[0]
        }
        let { payStripeLoadingInCaseCash, stripeIframeAndTokenInCaseCash } = this.state
        return (
            <div className="editable-jrn-details">
                {/* header */}
                <div className="editable-jrn-header">
                    <h3>Journey Details</h3>
                    <div className="editable-buttons" id="notcashing" >
                        <button onClick={() => this.onCancel()} className="tmb-cancel-btn tmb-btn-primary-outlined fw_500 tmb-btn" >Close</button>
                        <button
                            onClick={updatedLoading ? () => { } : () => this.wetherEffectedPriceButSTillDoesntChangeTheMethod()}
                            disabled={!(selectedPickupPoints.length > 0 && selectedDropoffPoints.length > 0 && (parseFloat(currentPrice) <= parseFloat(previousPrice) || paymentType === 1) && quotations.length > 0)}
                            className=" tmb-btn-primary-outlined fw_500 tmb-btn"
                        >{updatedLoading ? "Loading" : "Save"}</button>
                    </div>
                </div>
                <div className="editable-jrn-points-container">
                    {/* //*pickups section-left  */}
                    <div className="editable-jrn-points-container-box">
                        <div className="editable-jrn-points-container-box-header">
                            Pick ups
                        </div>
                        {selectedPickupPoints.length > 0 ?
                            <SelectedLists
                                pickOrDrop={0}
                                postCodeAddress={postCodeAddress}
                                imageTypesObject={imageTypesObject}
                                selectedItems={selectedPickupPoints}
                                setModalFlightStatus={setModalFlightStatus} //when click to info
                                objectDetailStatuses={objectDetailStatuses}
                                deleteItemFromList={this.deleteItemFromList}
                            /> : ""}
                        <div className="add-extra-input-div-status">
                            {selectedPickupPoints.length === 0 && (
                                <TextInput
                                    title=""
                                    type="text"
                                    errorMessage={""}
                                    name="pickUpPointInput"
                                    icon={icons.mapLocation}
                                    value={pickUpPointInput}
                                    placeholder="City or Airport"
                                    classNameImg="email-icon-input"
                                    isLoading={getPickUpSuggestLoading}
                                    onChange={(e) => this.onchangeHandlerGetSuggestion(e)}
                                />
                            )}
                            {inputPickUpShowStatus && (
                                <TextInput
                                    title=""
                                    type="text"
                                    errorMessage={""}
                                    name="pickUpPointInput"
                                    icon={icons.mapLocation}
                                    value={pickUpPointInput}
                                    placeholder="City or Airport"
                                    classNameImg="email-icon-input"
                                    isLoading={getPickUpSuggestLoading}
                                    onChange={(e) => this.onchangeHandlerGetSuggestion(e)}
                                />
                            )}
                            <HandleSearchResults
                                index={0}
                                type={"pickup"}
                                objectDetailss={objectDetailss}
                                pickOrDropItems={pickUpSuggestions}
                                imageTypesObject={imageTypesObject}
                                namePlaceTypesObject={namePlaceTypesObject}
                                handleAddItemToSelectList={this.handleAddItemToSelectList}
                            />
                        </div>
                        {addExtraPointTextPickUp && selectedDropoffPoints.length !== 0 && (
                            <div onClick={(e) => this.addExtraInputForJourney(e, 0)} className="editable-jrn-points-container-box-add-extra-fly"  >
                                <img src={icons.plus} alt="" />
                                <p>Add Extra Point</p>
                            </div>
                        )}
                    </div>

                    {/* //*dropOff section-right  */}
                    <div className="editable-jrn-points-container-box">
                        <div className="editable-jrn-points-container-box-header">
                            Dropp Offs
                        </div>
                        {
                            selectedDropoffPoints.length > 0 ?
                                <SelectedLists
                                    pickOrDrop={1}
                                    postCodeAddress={postCodeAddress}
                                    imageTypesObject={imageTypesObject}
                                    selectedItems={selectedDropoffPoints}
                                    objectDetailStatuses={objectDetailStatuses}
                                    deleteItemFromList={this.deleteItemFromList}
                                /> : ""
                        }

                        <div className="add-extra-input-div-status">
                            {selectedDropoffPoints.length === 0 && (
                                <TextInput
                                    title=""
                                    type="text"
                                    errorMessage={""}
                                    name="dropOffPointInput"
                                    icon={icons.mapLocation}
                                    value={dropOffPointInput}
                                    placeholder="City or Airport"
                                    classNameImg="email-icon-input"
                                    isLoading={getDropOffSuggestLoading}
                                    onChange={(e) => this.onchangeHandlerGetSuggestion(e)}
                                />
                            )}
                            {inputDropOffShowStatus && (
                                <TextInput
                                    title=""
                                    type="text"
                                    errorMessage={""}
                                    name="dropOffPointInput"
                                    icon={icons.mapLocation}
                                    value={dropOffPointInput}
                                    placeholder="City or Airport"
                                    classNameImg="email-icon-input"
                                    isLoading={getDropOffSuggestLoading}
                                    onChange={(e) => this.onchangeHandlerGetSuggestion(e)}
                                />
                            )}


                            <HandleSearchResults
                                index={1}
                                type={"drop"}
                                objectDetailss={objectDetailss}
                                imageTypesObject={imageTypesObject}
                                pickOrDropItems={dropOffSuggestions}
                                namePlaceTypesObject={namePlaceTypesObject}
                                handleAddItemToSelectList={this.handleAddItemToSelectList}
                            />
                        </div>
                        {addExtraPointTextDropOff && selectedDropoffPoints.length !== 0 && (
                            <div onClick={(e) => this.addExtraInputForJourney(e, 1)} className="editable-jrn-points-container-box-add-extra-fly">
                                <img src={icons.plus} alt="" />
                                <p>Add Extra Point</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* dateInput timehour getQuotationBtn */}
                <div className="editable-jrn-date-hour-minute-div">
                    <div className="editable-jrn-departing-date">
                        {/* //2022-12-29 */}
                        <DateInput
                            type="date"
                            value={date}
                            name="transferDateTimeString"
                            icon={icons.calendar}
                            classNameImg="icon-inside-small-input"
                            min={dateTimeStringFunc().split(" ")[0]}
                            onChange={(e) => this.onChangeDateSpecialRequest(e)}
                            title={`
               ${selectedPickupPoints.length > 0 && selectedPickupPoints[0].pcatId === 1
                                    ? "Flight Landing Date"
                                    : "Pick Up Date"
                                }`}
                        />
                    </div>
                    <div className="editable-jrn-detparting-time">
                        <TimePicker
                            hour={hour}
                            name="hour"
                            options={hourss}
                            setHourOrMinute={this.setHourOrMinute}
                            title={`
              ${selectedPickupPoints.length > 0 && selectedPickupPoints[0].pcatId === 1
                                    ? "Landing Hour"
                                    : "Pick Up Hour"
                                }`}
                        />
                        <TimePicker
                            name="minute"
                            minute={minute}
                            options={minutes}
                            setHourOrMinute={this.setHourOrMinute}
                            title={`
              ${selectedPickupPoints.length > 0 && selectedPickupPoints[0].pcatId === 1
                                    ? "Landing Minute"
                                    : "Pick Up Minute"
                                }`}
                        />
                    </div>
                    <div className="editable-jrn-departing-btn">
                        <button className="tmb-btn tmb-button-primary-outlined-hover">
                            Get Quotation
                        </button>
                    </div>
                </div>

                {/* special request  */}
                <TextArea
                    classNameImg=""
                    fromBooking={true}
                    icon={icons.idBadge}
                    name="specialRequests"
                    title="Special Requests"
                    value={this.state.specialRequests}
                    onChange={(e) => this.onChangeDateSpecialRequest(e)}
                />
                {quotations.length > 0 ?
                    <QuotationCardItem
                        quotation={quotation}
                        quotations={quotations}
                        carsTypesObject={carsTypesObject}
                        quotationLoading={quotationLoading}
                        setModalCarStatus={setModalCarStatus}
                        selectQuotation={item => this.selectQuotation(item)}
                    />
                    : <div className="quotaion-card-div-items">
                        <Loading loadCenter={true} />
                    </div>}
                {stripeIframeAndTokenInCaseCash ? (
                    <div className="iframe-rsv-container">
                        <div className="iframe-div-in-case-cash">
                            <iframe
                                src={stripeIframeAndTokenInCaseCash.href}
                                className={"iframe-in-case-cash"}
                                frameBorder="0"
                                allow="payment"
                            ></iframe>
                        </div>
                    </div>) : ""}
                {/* //if it is cash payment and updated effected to the price then should be visible   */}
                {(quotations.length > 0 && (parseFloat(currentPrice) - parseFloat(previousPrice)) > 0)
                    ? <div class="informative-subcharges-div">
                        <img src={__env.infoAlert} alt="" />
                        <div class="informative-subcharge-price-info ">
                            <p id="informationMessage">Due to the amendments you have made;</p>
                            <p id="informationMessage">New Journey price : £ {currentPrice}</p>
                            <p id="informationMessage">Previous journey price : £ {`${previousPrice}.00`}</p>
                            <p id="informationMessage" className="difference-price">Price difference : £ {`${+currentPrice - +previousPrice}.00`}</p>
                        </div>
                    </div>
                    : <React.Fragment></React.Fragment>
                }
                {/* //!if it is cash payment and updated effected to the price then we should  keep charge on that    */}
                <div className="jrn-py-btn-div">
                    {(quotations.length > 0 && paymentType === 1)
                        ? <button className="tmb-btn tmb-button-primary-outlined-hover" onClick={() => this.itisCashAndWantsToPayByStripeCard(7)}>{payStripeLoadingInCaseCash ? "Loading.." : "Pay by Card"}</button>
                        : (
                            (quotations.length > 0 && paymentType !== 1 && parseFloat(currentPrice) - parseFloat(previousPrice) > 0)
                                ? <button className="tmb-btn tmb-button-primary-outlined-hover" onClick={() => this.paySubChargeWithStripe(7)}>{payStripeLoadingInCaseCash ? "Loading.." : "Pay Surcharge by Card"}</button>
                                : <div></div>
                        )
                    }
                    <div className="editable-buttons" id="notcashing" >
                        <button onClick={() => this.onCancel()} className="tmb-cancel-btn tmb-btn-primary-outlined fw_500 tmb-btn" >Close</button>
                        <button
                            onClick={updatedLoading ? () => { } : () => this.wetherEffectedPriceButSTillDoesntChangeTheMethod()}
                            disabled={!(selectedPickupPoints.length > 0 && selectedDropoffPoints.length > 0 && (parseFloat(currentPrice) <= parseFloat(previousPrice) || paymentType === 1) && quotations.length > 0)}
                            className=" tmb-btn-primary-outlined fw_500 tmb-btn"
                        >{updatedLoading ? "Loading" : "Save"}</button>
                    </div>
                </div>
            </div>
        );
    }
}
//it is inside JourneyDetailsUpdateForm     .Which is gonna show all selected points
class SelectedLists extends React.Component {
    render() {
        let { pickOrDrop, selectedItems, postCodeAddress, imageTypesObject, deleteItemFromList, objectDetailStatuses, setModalFlightStatus, } = this.props;
        return (
            <div>
                {selectedItems.length > 0 ? selectedItems.map((item, i) => {
                    return (
                        <div className="editable-jrn-points-container-box-card">
                            <div className="editable-jrn-points-container-box-card-header">
                                <span>{i + 1}</span>
                                <img src={`https://api.london-tech.com${imageTypesObject[item.pcatId]}`} alt={item.address} />
                                <p>{item.address}</p>
                                <div
                                    className="editable-jrn-points-container-box-card-trash"
                                    onClick={(e) => deleteItemFromList(this.props.pickOrDrop, i, item)}>
                                    x
                                </div>
                            </div>
                            <CheckForFlight item={item} index={pickOrDrop} whichItemSelected={i} setModalFlightStatus={setModalFlightStatus} objectDetailStatuses={objectDetailStatuses} />
                            <CheckForCruises item={item} index={pickOrDrop} whichItemSelected={i} objectDetailStatuses={objectDetailStatuses} />
                            <CheckForTrain item={item} index={pickOrDrop} whichItemSelected={i} objectDetailStatuses={objectDetailStatuses} />
                            <CheckingForPostcodes item={item} index={pickOrDrop} whichItemSelected={i} postCodeAddress={postCodeAddress} objectDetailStatuses={objectDetailStatuses} />
                            <CheckPlaceOfInterest item={item} index={pickOrDrop} whichItemSelected={i} postCodeAddress={postCodeAddress} objectDetailStatuses={objectDetailStatuses} />
                            <CheckForCitites item={item} index={pickOrDrop} whichItemSelected={i} postCodeAddress={postCodeAddress} objectDetailStatuses={objectDetailStatuses} />
                            <CheckForUniversity item={item} index={pickOrDrop} whichItemSelected={i} postCodeAddress={postCodeAddress} objectDetailStatuses={objectDetailStatuses} />
                            <CheckForOther item={item} index={pickOrDrop} whichItemSelected={i} postCodeAddress={postCodeAddress} objectDetailStatuses={objectDetailStatuses} />
                        </div>
                    );
                }) : ""}
            </div>
        );
    }
}
class ReservationDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            setModalCar: false,
            setModalFlight: false,
            journeyEditStatus: false,
            passengerEditStatus: false,
            stripeIframeAndTokenInCaseCash: "",
            payStripeLoadingInCaseCash: false,
            reservation: this.props.reservation,
            checkFor24: null,
            postCodeAddress: [],
            isMailSending: false,
        };
    }

    //!case 0 It is cash payment and he wants to change payment directly to card
    payByStripe(type) {
        //get quotaion from state after clicking to save button
        let { stripeIframeAndTokenInCaseCash } = this.state
        let { reservation } = this.props;
        let { quotation, passengerDetails: { email } } = reservation
        let body = JSON.stringify({ 'quotations': [quotation], type, language: "en", passengerEmail: email, mode: localStorage['payment-mode'] || undefined, 'reservationsIds': [reservation.reservationDetails.id] })
        try {
            if (!stripeIframeAndTokenInCaseCash) {
                this.setState({ payStripeLoadingInCaseCash: true }, () => {
                    fetch(`${__env.apiDomain}/api/v1/payment/stripe/create`, { 'method': 'POST', 'headers': { "Content-Type": "application/json", }, body })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.status === 200) {
                                this.setState({ payStripeLoadingInCaseCash: false, stripeIframeAndTokenInCaseCash: data }, () => {
                                    this.checkPaymentStatus(data)
                                })
                            } else {
                                this.setState({ payStripeLoadingInCaseCash: false, stripeIframeAndTokenInCaseCash: "" })
                                window.manageBookingDispatch.alertMessage("", "Request Error Try contact with us ")
                            }
                        })
                        .catch((error) => { console.log(error.message); });
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    sendBookingAsEmail() {
        let { isMailSending, reservation } = this.state;
        if (isMailSending === false) {
            this.setState({ isMailSending: true }, () => {
                let { 'reservationDetails': { 'id': reservationId }, 'passengerDetails': { email } } = reservation;
                fetch(`${__env.apiDomain}/api/v1/reservation/mail/${reservationId}`, { 'method': 'GET', 'headers': { 'Content-Type': 'application/json' }, redirect: 'follow' })
                    .then(response => response.json())
                    .then(result => {
                        if (result.status === 200) {
                            let emailOptions = {
                                'method': "POST",
                                'body': JSON.stringify({
                                    'senderId': 1,
                                    'reciverMails': [email],
                                    'subject': `Booking ${reservationId} Airport Pickups London`,
                                    'mailContent': result.data.template,
                                }),
                                'headers': { "Content-Type": "application/json" },
                            };
                            fetch(`${__env.apiDomain}/tools/mailer`, emailOptions).then(res => res.json())
                                .then((res) => {
                                    if (res.status === 200) {
                                        window.manageBookingDispatch.alertMessage("Email sent successfully", "")
                                    } else {
                                        window.manageBookingDispatch.alertMessage("", "Request Error Try contact with us ")
                                    }
                                    this.setState({ isMailSending: false })
                                }).catch(error => {
                                    this.setState({ isMailSending: false })
                                    console.log('error', error);
                                });
                        } else {
                            this.setState({ isMailSending: false })
                        }
                    }).catch(error => {
                        this.setState({ isMailSending: false })
                        console.log('error', error);
                    });
            })
        }
    }
    getPostCodeAdresses() {
        const url = `${__env.apiDomain}/api/v1/postcode-address`;
        let postCodes = [];
        //filtering
        [...this.state.reservation.selectedPickupPoints,
        ...this.state.reservation.selectedDropoffPoints,
        ].filter((item) => item.pcatId === 5 ? postCodes.push(item.postcode) : item);
        //configuration
        const config = { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify({ postcodes: postCodes, }), };

        fetch(url, config)
            .then((res) => res.json())
            .then((data) => {
                if (data.status) this.setState({ postCodeAddress: data.results });
            })
            .catch((error) => { console.log(error); });
    }
    checkPaymentStatus(paymentSessionData = {}) {
        let { reservation } = this.state
        let { webSocketToken, href } = paymentSessionData
        let interVal;
        if (webSocketToken) {
            interVal = setInterval(async () => {
                try {
                    let req = await fetch(`${__env.apiDomain}/api/v1/payment/status`, { 'method': 'POST', 'headers': { "Content-Type": "application/json", }, 'body': JSON.stringify({ token: webSocketToken }) });
                    let resp = await req.json();
                    if (resp.status === 200) {
                        //we r checking here in order to be sure it is stripe payment or not In future we can add more payments
                        if (href.includes("stripe")) {
                            window.manageBookingDispatch.setPaymentTokenAndEditReservation({ response: resp.data, reservation })
                        } else {
                            window.manageBookingDispatch.alertMessage("", "Something went wrong Try contact with us")
                            this.setState({ stripeIframeAndTokenInCaseCash: "" })
                        }
                        clearInterval(interVal);
                    }
                } catch (error) {
                    console.log(error);
                }
            }, 2000);
        }
    }
    componentDidMount() {
        let { transferDetails: { transferDateTimeString } } = this.state.reservation
        this.getPostCodeAdresses()
        this.setState({ checkFor24: checking24hours(transferDateTimeString) })
        window.reaervationDetailsDispatch = {
            setStripeIframeToNull: () => this.setState({ stripeIframeAndTokenInCaseCash: "" }),
            setSelectedPostCode: (results) => {
                let { postCodeAddress } = this.state
                let newpostcodeAdress = postCodeAddress;
                if (results.addresses.length > 0) {
                    newpostcodeAdress.push(results)
                    this.setState({ postCodeAddress: newpostcodeAdress })
                }
            },
        }
    }
    render() {
        let { payStripeLoadingInCaseCash, stripeIframeAndTokenInCaseCash, postCodeAddress, checkFor24, isMailSending } = this.state
        let { reservation, resources: { carsTypes, pointTypeCategories = [] }, eM, sM } = this.props;
        let carsTypesObject = Object.assign({}, ...carsTypes.map((obj) => ({ [obj.id]: obj })));
        let imageTypesObject = Object.assign({}, ...pointTypeCategories.map((obj) => ({ [obj.id]: obj.image })));
        window.pointsTypesCategories = Object.assign({}, ...pointTypeCategories.map((obj) => ({ [obj.id]: obj })));
        window.carsTypes = carsTypes;
        //for hansdle search adding item
        //=>flightDetails:flightNumber:""waitingPickupTime:0
        let objectDetailss = Object.assign(
            {},
            ...pointTypeCategories.map((obj) => ({
                [obj.id]: JSON.parse(obj.objectDetails),
            }))
        );
        let namePlaceTypesObject = Object.assign({}, ...pointTypeCategories.map((obj) => ({ [obj.id]: obj.categoryName })));
        //inside selected list Inorder to handle search mandatory or not
        let objectDetailStatuses = Object.assign(
            {},
            ...pointTypeCategories.map((obj) => ({
                [obj.id]: JSON.parse(obj.detailsStatus),
            }))
        );

        let {
            quotation,
            paymentDetails,
            transferDetails,
            passengerDetails,
            reservationDetails,
            selectedPickupPoints,
            selectedDropoffPoints,
            transferDetails: { specialRequests, transferDateTimeString }
        } = reservation;

        return (
            <div className="rsv-section">
                <div className={"tmb-login-content-logo-image"} style={{ margin: '50px 0 20px 0' }}>
                    <img src={`${__env.websiteLogUrl}`} alt="" />
                    <div></div>
                    <p>Manange Booking</p>
                </div>
                {this.state.setModalCar ? (
                    <ModalInfo
                        fromCar={true}
                        setModalCarStatus={(e) => this.setState({ setModalCar: !this.state.setModalCar })}
                        content="This is meant to give an approcimation of car size and category .Actual mane and model may vary"
                    />) : ("")}
                {this.state.setModalFlight ? (
                    <ModalInfo
                        fromCar={false}
                        setModalFlightStatus={(e) => this.setState({ setModalFlight: !this.state.setModalFlight })}
                        content="Please note that on international flights, for UK and EU Citizens the average clearing time is around 45 to 60 minutes except for first & business class travellers where it is 30-45 minutes. Other nationalities take around 60-70 minutes and foreign students may take up to 90 minutes. For domestic flight, the clearance time is around 15 minutes"
                    />) : ("")}

                {eM ? <AlertMessage eM={eM} /> : ""}
                {sM ? <AlertMessage sM={sM} /> : ""}
                <div className="rsv-section-container">
                    {this.state.passengerEditStatus ? (
                        <PassengerDetailsUpdateForm
                            transferDetails={JSON.parse(JSON.stringify(reservation.transferDetails))}
                            maxPax={carsTypesObject[quotation.carId].pax}
                            passengerDetails={JSON.parse(JSON.stringify(reservation.passengerDetails))}
                            onSave={(e) => this.setState({ passengerEditStatus: false })}
                            onCancel={(e) => this.setState({ passengerEditStatus: false })}
                        />
                    ) : (
                        !this.state.journeyEditStatus && (
                            <PassengerDetailsForm
                                checkFor24={checkFor24}
                                transferDetails={transferDetails}
                                passengerDetails={passengerDetails}
                                reservationDetails={reservationDetails}
                                onEdit={(e) => this.setState({ passengerEditStatus: true })}
                            />
                        )
                    )}

                    {/* //!journey details */}
                    {this.state.journeyEditStatus ? (
                        <JorneyDetailsUpdateForm
                            reservation={reservation}
                            //
                            quotation={quotation}//to quotationCardItem
                            email={passengerDetails.email} //when he click to pay by card in case cash then we use it
                            objectDetailss={objectDetailss}//to HandleSearch
                            carsTypesObject={carsTypesObject} //to quotationCardItem
                            postCodeAddress={postCodeAddress}//to SelectedList
                            specialRequests={specialRequests}//to TextArea
                            paymentToken={paymentDetails.token}//it is used whenever it is not cash payment (it is necessery in request body)
                            imageTypesObject={imageTypesObject}//to SelectedList
                            setModalCar={this.state.setModalCar}//state . to  quotationCardItem
                            previousPrice={paymentDetails.price}//to inner     at the outset it is current previous When change quotation it will be previous one
                            paymentType={paymentDetails.paymentType} //in order to make visible  py by card
                            setModalFlight={this.state.setModalFlight}//state . to   selectedList=> CheckForFlight
                            namePlaceTypesObject={namePlaceTypesObject}// to HandleSearch
                            objectDetailStatuses={objectDetailStatuses}//to SelectedList
                            selectedPickupPoints={selectedPickupPoints}//to SelectedList
                            selectedDropoffPoints={selectedDropoffPoints}//to selectedList
                            transferDateTimeString={transferDateTimeString} //to date input and to timepicker
                            onSave={(e) => this.setState({ journeyEditStatus: false })}//to inner OnSave function of JorneyDetailsUpdateForm
                            onCancel={(e) => this.setState({ journeyEditStatus: false })}//to inner onCancel function of JorneyDetailsUpdateForm
                            setModalCarStatus={(e) =>
                                this.setState({ setModalCar: !this.state.setModalCar }) //to quotationCardItem
                            }
                            setModalFlightStatus={(e) =>
                                this.setState({ setModalFlight: !this.state.setModalFlight }) //to selectedList=> CheckForFlight
                            }
                        />
                    ) : (
                        <JourneyDetailsForm
                            quotation={quotation}
                            checkFor24={checkFor24}
                            paymentDetails={paymentDetails}
                            transferDetails={transferDetails}
                            selectedPickupPoints={selectedPickupPoints}
                            selectedDropoffPoints={selectedDropoffPoints}
                            vehicleType={carsTypesObject[quotation.carId].name}
                            onEdit={(e) => this.setState({ journeyEditStatus: true })}
                            transferType={carsTypesObject[quotation.carId].transferType}
                        />
                    )}
                </div>
                {stripeIframeAndTokenInCaseCash ? (
                    <div className="iframe-rsv-container">
                        <div className="iframe-div-in-case-cash">
                            <iframe src={stripeIframeAndTokenInCaseCash.href} className={"iframe-in-case-cash"} frameBorder="0" allow="payment" ></iframe>
                        </div>
                    </div>) : ""}
                {checkFor24 ? (<div className="alert-section-container">
                    <div className={`alert_danger_check_for_24`}>
                        You can only amend the details up to 24 hours prior to
                        your transfer time. Please call us on <a style={{ color: 'blue', textDecoration: 'underline' }} href={`tel:+442086887744`}>+44 208 688 7744</a> if
                        you request any changes on your booking..{" "}
                    </div>
                </div>) : ("")}
                {!this.state.journeyEditStatus && (
                    <div className="rsv-payment-details">
                        {/* payByCardBtn here */}
                        <div className={"rsv-payment-details-header"}>
                            <div className={"rsv-payment-details-left"}>
                                {/* if he  before paid with card Then it is not gonna be visible   */}
                                {paymentDetails.paymentType !== 1 ? ("") : (
                                    stripeIframeAndTokenInCaseCash ? "" :
                                        <div className={"rsv-payment-details-left-btn-div"} style={{ zIndex: 100 }}>
                                            <button className=" tmb-btn tmb-btn-primary" onClick={() => this.payByStripe(7)}>
                                                {payStripeLoadingInCaseCash ? "Loading.." : "Pay by Card"}
                                            </button>
                                            <br />
                                        </div>
                                )}
                            </div>

                            <div className={"rsv-payment-details-right"}>
                                <p className={"rsv-payment-details-right-text"}>Total Price</p>
                                <span className={"rsv-payment-details-right-number"}>
                                    £{paymentDetails.price.toFixed(2)}
                                </span>
                            </div>
                        </div>
                        <div className="rsv-print-email-div rsv-payment-details-header">
                            {/* <button onClick={e=>print()} className="tmb-btn tmb-btn-primary" style={{minWidth:220}}>Print Booking Details</button> */}
                            <button onClick={isMailSending ? e => { } : (e) => this.sendBookingAsEmail()} style={{ minWidth: 220, zIndex: 100 }} className="tmb-btn tmb-btn-primary">{isMailSending ? 'Loading ...' : 'Send Booking Details As Email'}</button>
                            <div></div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

class ManageBookingMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // for alert message component
            sM: "",//succesMessage
            eM: "",//errorMessage
            // inserted from back end
            resources: { "carsTypes": [{ "id": 1, "name": "Saloon", "image": "/media/48110443.png", "transferType": "Economy", "pax": 3, "suitcases": 3, "status": 1, "car_order": 1 }, { "id": 2, "name": "MPV", "image": "/media/89595458.png", "transferType": "Economy", "pax": 5, "suitcases": 5, "status": 1, "car_order": 2 }, { "id": 3, "name": "8 Seater", "image": "/media/88276249.png", "transferType": "Economy", "pax": 8, "suitcases": 8, "status": 1, "car_order": 3 }, { "id": 4, "name": "Executive Saloon", "image": "/media/38088767.png", "transferType": "Business", "pax": 3, "suitcases": 3, "status": 1, "car_order": 4 }, { "id": 5, "name": "Executive MPV", "image": "/media/hblfopnialslm28zsuax.png", "transferType": "Business", "pax": 5, "suitcases": 5, "status": 1, "car_order": 5 }, { "id": 6, "name": "Executive 8 Seater", "image": "/media/rmvufdyr1ripgpureese.png", "transferType": "Business", "pax": 8, "suitcases": 8, "status": 1, "car_order": 6 }, { "id": 18, "name": "16 Seaters", "image": "/media/njywbvo5dhb0lnwq3bfo.png", "transferType": "Economy", "pax": 16, "suitcases": 16, "status": 1, "car_order": 7 }, { "id": 19, "name": "20 Seater", "image": "/media/bj9dzolyddamefgpfvp8.png", "transferType": "Economy", "pax": 20, "suitcases": 20, "status": 1, "car_order": 8 }, { "id": 8, "name": "25 Seater", "image": "/media/wd91yke1sizkh7lxrbnh.png", "transferType": "Economy", "pax": 25, "suitcases": 8, "status": 2, "car_order": 9 }, { "id": 7, "name": "Mercedes S Class", "image": "/media/dhhrzszpmfytrlcsorjj.png", "transferType": "Business", "pax": 3, "suitcases": 2, "status": 2, "car_order": 10 }, { "id": 16, "name": "Executive People Carrier", "image": "/media/ie92qutoqeoxojbjphwi.png", "transferType": "Business", "pax": 7, "suitcases": 7, "status": 2, "car_order": 11 }, { "id": 20, "name": "40 Seaters", "image": "/media/40-seaters-car-type.png", "transferType": "Shuttle", "pax": 40, "suitcases": 40, "status": 1, "car_order": 12 }, { "id": 9, "name": "Shuttle", "image": "/media/wd91yke1sizkh7lxrbnh.png", "transferType": "Shuttle", "pax": 25, "suitcases": 8, "status": 1, "car_order": 21 }, { "id": 10, "name": "Guide", "image": "/media/guide-icon.png", "transferType": "Guide", "pax": 1, "suitcases": 8, "status": 1, "car_order": 22 }, { "id": 11, "name": "Assistant", "image": "/media/assistant-icon.png", "transferType": "assistant", "pax": 1, "suitcases": 8, "status": 1, "car_order": 23 }, { "id": 17, "name": "Porter", "image": "/media/porter-icon.png", "transferType": "Porter", "pax": 8, "suitcases": 8, "status": 1, "car_order": 24 }, { "id": 14, "name": "Estate", "image": "/media/0jjpenxxyxgfqtugxltn.png", "transferType": "Economy", "pax": 3, "suitcases": 5, "status": 2, "car_order": 25 }], "pointTypeCategories": [{ "id": 1, "fieldType": "text", "fieldTitle": "Flight No.", "addressNeeded": "no", "categoryName": "airports", "image": "/media/mglafg5zqlrsocfwodwj.svg", "objectDetails": "{\"flightDetails\":{\"flightNumber\": \"\",\"waitingPickupTime\":0}}", "detailsStatus": "{\"flightDetails\": {\"flightNumber\": {\"pickup\": 1, \"dropoff\": 2, \"fieldType\": \"text\"}, \"waitingPickupTime\": {\"pickup\": 1, \"dropoff\": 3, \"fieldType\": \"select\"}}}" }, { "id": 2, "fieldType": "text", "fieldTitle": "cruise name", "addressNeeded": "no", "categoryName": "cruises", "image": "/media/f6ry0x3podasicuxymd1.svg", "objectDetails": "{\"cruiseNumber\":\"\"}", "detailsStatus": "{\"cruiseNumber\": {\"pickup\": 1, \"dropoff\": 2, \"fieldType\": \"text\"}}" }, { "id": 3, "fieldType": "text", "fieldTitle": "train number", "addressNeeded": "no", "categoryName": "stations", "image": "/media/lguc6gtj3e7q7eqbyptb.svg", "objectDetails": "{\"trainNumber\":\"\"}", "detailsStatus": "{\"trainNumber\": {\"pickup\": 2, \"dropoff\": 2, \"fieldType\": \"text\"}}" }, { "id": 4, "fieldType": "text", "fieldTitle": "room number", "addressNeeded": "yes", "categoryName": "hotels", "image": "/media/o5ncuf9dypfg2cw0h7eu.svg", "objectDetails": "{\"roomNumber\":\"\"}", "detailsStatus": "{\"roomNumber\": {\"pickup\": 1, \"dropoff\": 2, \"fieldType\": \"textarea\"}}" }, { "id": 5, "fieldType": "select", "fieldTitle": "postcode address", "addressNeeded": "yes", "categoryName": "postcodes", "image": "/media/tyhe2labfpzxnqqj1asi.svg", "objectDetails": "{\"postCodeDetails\" :{\"id\":0,\"postCodeAddress\": \"\"}}", "detailsStatus": "{\"postCodeDetails\": {\"id\": {\"pickup\": 1, \"dropoff\": 1, \"fieldType\": \"select\"}, \"postCodeAddress\": {\"pickup\": 1, \"dropoff\": 1, \"fieldType\": \"textarea\"}}}" }, { "id": 7, "fieldType": "text", "fieldTitle": "places of interest", "addressNeeded": "yes", "categoryName": "places of interest", "image": "/media/l627197seixlynwkx4vp.svg", "objectDetails": "{\"address-description\":\"\"}", "detailsStatus": "{\"address-description\": {\"pickup\": 2, \"dropoff\": 2, \"fieldType\": \"textarea\"}}" }, { "id": 8, "fieldType": "text", "fieldTitle": "cities", "addressNeeded": "yes", "categoryName": "cities", "image": "/media/cvvnj9v7vnyqzndsq5je.svg", "objectDetails": "{\"address-description\":\"\"}", "detailsStatus": "{\"address-description\": {\"pickup\": 2, \"dropoff\": 2, \"fieldType\": \"textarea\"}}" }, { "id": 9, "fieldType": "text", "fieldTitle": "universities and colleges", "addressNeeded": "yes", "categoryName": "universities and colleges", "image": "/media/o5nfc2wjzdabldqzeuks.svg", "objectDetails": "{\"address-description\":\"\"}", "detailsStatus": "{\"address-description\": {\"pickup\": 2, \"dropoff\": 2, \"fieldType\": \"textarea\"}}" }, { "id": 10, "fieldType": "text", "fieldTitle": "description", "addressNeeded": "yes", "categoryName": "other", "image": "/media/qcushtroclifdnce3o0k.svg", "objectDetails": "{\"address-description\":\"\"}", "detailsStatus": "{\"address-description\": {\"pickup\": 2, \"dropoff\": 2, \"fieldType\": \"textarea\"}}" }] } || {},
            isAuth: false,
            showState: false,
            reservation: {},
            loginDetails: {},
        };
    }
    componentDidMount() {
        window.manageBookingDispatch = {
            onSuccessLogin: ({ 'data': reservation, reservationId, email }) => {
                this.setState({ reservation, 'isAuth': true, 'loginDetails': { reservationId, email } });
            },
            saveNewPassengerDetails: async (params = {}, callback = () => { }) => {
                let { passengerDetails, transferDetails } = params;
                let { language, 'user-id': userId, 'x-auth-token': xAuthToken } = this.props;
                let { reservation, loginDetails } = this.state;
                reservation.transferDetails = { ...reservation.transferDetails, ...transferDetails };
                reservation.passengerDetails = { ...reservation.passengerDetails, ...passengerDetails };
                loginDetails.email = reservation.passengerDetails.email;
                let fetchRes = await apiV1ReservationEdit({ reservation, loginDetails }, { language, 'user-id': userId, 'x-auth-token': xAuthToken })
                if (fetchRes.status === 200) {
                    callback(fetchRes);
                    this.setState({ "reservation": fetchRes.reservation, loginDetails })
                    window.manageBookingDispatch.alertMessage("Passenger Details Updated", "")
                } else { callback(fetchRes) }
            },
            saveStillWantsToDoesntChangePayment: async (params = {}, callback = () => { }) => {
                let { reservation } = params;
                let { language, 'user-id': userId, 'x-auth-token': xAuthToken } = this.props;
                let { loginDetails } = this.state;
                let fetchRes = await apiV1ReservationEdit({ reservation, loginDetails }, { language, 'user-id': userId, 'x-auth-token': xAuthToken })
                if (fetchRes.status === 200) {
                    this.setState({ "reservation": fetchRes.reservation })
                    callback(fetchRes);
                    window.manageBookingDispatch.alertMessage("Passenger Details Updated", "")
                    this.setState(reservation)
                } else {
                    callback(fetchRes);
                    window.manageBookingDispatch.alertMessage("", "Something went wrong please contact with us")
                }

            },
            alertMessage: (sM, eM) => {
                this.setState({ sM, eM })
                setTimeout(() => { this.setState({ sM: "", eM: "" }) }, 4000);
            },
            setPaymentTokenAndEditReservation: async (params = {}, callback = () => { }) => {
                //this callback will trigger to changeeditstatus to true if payment happened successfully
                //when he/she is on the main page
                let { reservation, loginDetails } = this.state
                let { language, 'user-id': userId, 'x-auth-token': xAuthToken } = this.props;
                let { 'reservation': reservationOfPayment, response } = params;
                let { 'paymentTypeId': paymentType, token } = response
                reservation.quotation = reservationOfPayment.quotation
                reservation.selectedPickupPoints = reservationOfPayment.selectedPickupPoints
                reservation.selectedDropoffPoints = reservationOfPayment.selectedDropoffPoints
                reservation.paymentDetails = { ...reservationOfPayment.paymentDetails, paymentType, token }
                reservation.transferDetails = reservationOfPayment.transferDetails
                let fetchRes = await apiV1ReservationEdit({ reservation, loginDetails }, { language, 'user-id': userId, 'x-auth-token': xAuthToken })
                if (fetchRes.status === 200) {
                    this.setState({ "reservation": fetchRes.reservation })
                    callback(fetchRes)
                    window.manageBookingDispatch.alertMessage("Payment Updated Successfully", "")
                } else {
                    callback(fetchRes);
                    window.manageBookingDispatch.alertMessage("", "Something went wrong please contact with us")
                }
                window.reaervationDetailsDispatch.setStripeIframeToNull()
            },
            onCancelJourneyDetails: (reservation) => {
                this.setState({ reservation })
            }
        };
    }
    render() {
        let { sM, eM, isAuth, resources, showState, reservation, } = this.state;
        return (
            <React.Fragment>
                {/* css styles is inserted from back end */}
                <style dangerouslySetInnerHTML={{
                    __html: `@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

.tool-manage-booking {
  --box-shasow : rgb(145 158 171/24%) 0px 0px 2px 0px,rgb(145 158 171/24%) 0px 16px 32px -4px;
  --max-container-width: 1200px;
  --window-margin: 100px;
  --roboto-font: Roboto, sans-serif;
  --main-color: #287dfa;
  --main-color-dark: #1968dd;

  --blue-color: #0e16ff;
  --placeholder-color: rgba(59, 59, 59, 0.628);
  --border-outlined: rgba(25, 118, 210, 0.5);
  --border-outlined-hover: #1976d2;
  --error-message-color: #990000;
  --error-message-bg: #fbe3e3;
  --gray-text-color: #5d646d;
  --black-color-1: #000;
  --black-color-2: #433d3d;
  --dark-blue-black: #0d233e;
  --sky-color-blue: #99c4ea;
  --alert-danger-color: #721c24;
  --alert-danger-bg: #f8d7da;
  --alert-danger-border: #f5c6cb
    /* images filter color */
    --green-color-image: invert(26%) sepia(78%) saturate(1698%) hue-rotate(93deg) brightness(98%) contrast(106%);
  --gray-text-color-image: invert(40%) sepia(3%) saturate(1432%) hue-rotate(174deg) brightness(95%) contrast(94%);
  --black-color-image: invert(0%) sepia(4%) saturate(7483%) hue-rotate(265deg) brightness(99%) contrast(105%);
  --white-color-image: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
  width: 100%;
  min-height: 100vh;
  padding: 0rem;
  /* Loading colors */
  --first-color: #7ef9ff;
  --second-color: #89cff0;
  --third-color: #4682b4;
  --fourth-color: #0f52ba;
  --fifth-color: #000080;
  --color-dark-green: #046d20;
  background-color: #e7e7e7;
  position: relative;
  overflow: hidden;
    /* padding-top: 400px;
  padding-bottom: 400px; */
}
.tool-manage-booking > img {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 315px;
  border-radius: 44px;
  opacity: 0.5;
  transform: rotate(-30deg) translate(50px, 75px);
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--gray-text-color) !important;
  padding: 0px !important;
  margin: 0px !important;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

@media only screen and (max-width: 1200px) {
  .tool-manage-booking {
    --window-margin: 20px;
  }
}

@media only screen and (max-width: 450px) {
  .tool-manage-booking {
    --window-margin: 10px;
  }
}

.tool-manage-booking * {
  box-sizing: border-box;
  color: inherit;
  font: inherit;
  font-family: var(--roboto-font);
}

/* *BookingLogin  start -----*/
.tmb-login-section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100% - 40px);
  margin: 0 20px;
  height: 100%;
}

.tmb-login-section .tmb-login-content {
  width: 100%;
  max-width: 410px;
  box-shadow: var(--box-shasow);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 35px 35px;
  border-radius: 12px;
  margin: 20px var(--window-margin) var(--window-margin) var(--window-margin);
  border: 1px solid rgba(0, 0, 255, 0.235);
  background-color: white;
}

.tmb-login-section .tmb-login-content .tmb-login-error-div {
  color: var(--error-message-color);
  background: var(--error-message-bg);
  border-radius: 4px;
  margin-top: 1rem;
  padding: 10px 20px;
}

.tmb-login-content-logo-image { max-width: 410px;margin: 100px 0 0px 0; }
.tmb-login-content-logo-image > img {  width: 100%;margin-bottom: 20px; }
.tmb-login-content-logo-image > p { background-color: #e7e7e7;font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;font-weight: 500;margin: 0;padding: 8px;text-align: center;    max-width: 180px;margin: 0 auto; }
.tmb-login-content-logo-image > div { border-top: 1px solid black;width: 100%;margin-bottom: -22px; }
.tmb-login-section .tmb-login-content-logo-imagee {
  margin: 10px auto 0 auto;
  margin-bottom: 1rem;
}

.tmb-login-section .tmb-login-content-logo-imagee img {
  width: 100%;
  display: block;
}

.tmb-login-section .tmb-login-content form {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.tmb-login-content form input[type="number"]::-webkit-inner-spin-button,
.tmb-login-content form input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.tmb-login-section .tmb-login-content form .tmb-input-button {
  width: 100%;
  margin: 0 auto;
  margin-top: 1rem;
}

/* BookingLogi Inputs  */
.tmb-form-control {
  width: 100%;
  margin-bottom: 0.5rem;
}

.tmb-form-control .tmb-form-control-header {
  display: flex;
  justify-content: space-between;
}

.tmb-form-control .tmb-form-control-header .tmb-form-control-header-label {
  color: #0d233e !important;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 4px;
}

.tmb-form-control .tmb-form-control-header .tmb-form-control-header-error {
  color: red;
}

.tmb-form-control .tmb-input-div {
  position: relative;
}

.tmb-form-control .tmb-input-div .tmb-input {
  line-height: 28px;
  padding: 10px 20px 10px 40px;
  font-size: 14px;
  color: #0d233e;
  border: 1px solid rgba(128, 137, 150, 0.2);
  box-shadow: none;
  transition: all 0.3s;

  width: 100%;
  outline: none;
  border-radius: 5px;
}

.tmb-form-control .tmb-input-div .tmb-input:focus {
  border: 1px solid var(--main-color);
}

.tmb-form-control .tmb-input-div .tmb-input::placeholder {
  color: var(--placeholder-color);
  font-size: 13px;
}

.tmb-form-control .tmb-input-div .tmb-errorInput {
  border: 1px solid #ff2424;
}

.tmb-form-control .tmb-input-div .tmb-form-icon {
  position: absolute;
  top: 19px;
  left: 17px;
  color: #5d646d;
  width: 11px;
  filter: invert(54%) sepia(6%) saturate(751%) hue-rotate(174deg) brightness(98%) contrast(86%);
}

.tmb-form-control .tmb-input-div .tmb-user-icon {
  top: 17px;
}

.tmb-input-button .tmb-btn {
  width: 100%;
  padding: 12px;
}

/* !BookingLogin  finish -----*/

/* *Reservation Details start -----*/
.rsv-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 var(--window-margin);
  flex-direction: column;
}

.rsv-section .rsv-section-container {
  width: 100%;
  border: 1px solid var(--border-outlined);
  max-width: var(--max-container-width);
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: #f5f7fc;
  margin-bottom: 2rem;
}

.iframe-rsv-container {
  width: 100%;
  max-width: var(--max-container-width);
  display: flex;
  justify-content: center;
}

.iframe-rsv-container .iframe-div-in-case-cash {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.iframe-rsv-container .iframe-div-in-case-cash iframe {
  width: 500px;
  height: 600px;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

/* passengeer details */
.rsv-section .rsv-section-container .psg-passenger-details {
  padding: 15px;
}

.rsv-section .rsv-section-container .psg-passenger-details .psg-referenceId {
  text-align: center;
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
  padding-bottom: 0.55rem;
  font-size: 22px;
  font-weight: 500;
  border-bottom: 1px solid #c5c5c5;
  margin-bottom: 20px;
  margin-bottom: 20px !important;
}

.rsv-section-container .psg-passenger-details .psg-title {
  margin-bottom: 32px !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 568px) {
  .rsv-section-container .psg-passenger-details .psg-title {
    flex-direction: column;
  }

  .rsv-section-container .psg-passenger-details .psg-title h3::after {
    display: none !important;
  }

  .psg-referenceId {
    font-size: 21px !important;
  }

  .psg-title h3 {
    font-size: 19px !important;
    margin-bottom: 1rem !important;
  }
}

.psg-title button {
  padding: 5px 30px;
  font-size: 15px;
}

.psg-title h3 {
  position: relative;
  font-size: 24px;
  padding-bottom: 20px;
}

.psg-title h3::after {
  position: absolute;
  width: 63px;
  height: 5px;
  background: var(--main-color);
  content: "";
  left: 0;
  bottom: 0;
  top: 35px;
}

.psg-passenger-details .psg-column {
  display: flex;
  justify-content: space-between;
}

.psg-column li {
  letter-spacing: 0.7px;
  border-bottom: 1px solid rgba(128, 137, 150, 0.2) !important;
  border-radius: 3px;
  list-style: none;
  width: 48%;
  display: grid;
  grid-template-columns: 190px auto;
  font-size: 14px;
}

.psg-column li {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0px;
}

.psg-column li .psg-li-left {
  display: flex;
  align-items: center;
  margin-bottom: 3px;
}

.psg-column li .psg-li-left p {
  color: var(--black-color-2);
  font-weight: bold !important;
  padding-right: 6px;
  font-size: 15px;
  margin: 0px;
}

.psg-column li .psg-li-right {
  color: var(--gray-text-color);
  display: flex;
  align-items: center;
  word-break: break-all;
  font-size: 14px;
}

.psg-column li img {
  width: 15px;
  margin-right: 6px;
  filter: invert(22%) sepia(1%) saturate(4010%) hue-rotate(323deg) brightness(93%) contrast(87%);
}

.psg-user-img-icon {
  width: 11px !important;
}

.psg-users-img-icon {
  width: 16px !important;
}

.fullname-img {
  width: 13px !important;
}

@media (max-width: 768px) {
  .psg-passenger-details .psg-column {
    flex-direction: column;
  }

  .psg-passenger-details .psg-column li {
    width: 100%;
  }

  .psg-first-column li:nth-child(2) {
    grid-template-columns: 190px auto !important;
  }

  .psg-second-column,
  .psg-first-column {
    flex-direction: column-reverse !important;
    display: flex;
  }

  .psg-second-column li:nth-child(2) {
    grid-template-columns: 190px auto !important;
  }
}

@media (max-width: 568px) {
  .psg-column li .psg-li-left p {
    font-size: 15px;
  }

  .psg-column li .psg-li-right {
    font-size: 14px;
  }
}

/* journey details */
.rsv-section .rsv-section-container .jrn-journey-details {
  padding: 15px;
}

.jrn-journey-details .jrn-title {
  margin-bottom: 32px !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.jrn-title h3 {
  position: relative;
  font-size: 24px;
  padding-bottom: 20px;
}

.jrn-title h3::after {
  position: absolute;
  width: 63px;
  height: 5px;
  background: var(--main-color);
  content: "";
  left: 0;
  bottom: 0;
  top: 35px;
}

.jrn-title button {
  padding: 5px 30px;
  font-size: 15px;
}

.jrn-column {
  display: flex;
  justify-content: space-between;
}

.jrn-column-details li {
  border-bottom: 1px solid hsla(215, 9%, 55%, 0.2) !important;
}

.jrn-journey-details .jrn-column li {
  flex-direction: row;
  list-style: none;
  padding: 6px 0;
  letter-spacing: 0.7px;
  margin-bottom: 0.5rem;
  border-radius: 3px;
  flex-basis: 48%;
}

.jrn-journey-details .jrn-column li:nth-child(3) {
  margin-top: -15px;
}

.jrn-column li .jrn-details {
  width: 100%;
  flex-direction: column;
  display: flex;
}

.jrn-column li .jrn-details .jrn-details-header {
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  font-size: 17px;
  color: #000;
  font-weight: 700;
}

.jrn-column li .jrn-details .jrn-details-header p {
  padding: 0px;
  margin: 0px;
}

.jrn-column li .jrn-details .jrn-details-header img {
  margin-right: 5px;
  width: 10px;
}

.jrn-details-bottom-container {
  padding-top: 10px;
}

.jrn-details-bottom-container .jrn-details-bottom-adress img {
  width: 10px;
  filter: invert(21%) sepia(7%) saturate(539%) hue-rotate(315deg) brightness(90%) contrast(82%);
}

.jrn-details-bottom-container .jrn-details-bottom-adress {
  position: relative;
  display: flex;
  align-items: baseline;
  line-height: 25px;
}

.jrn-details-bottom-adress .jrn-details-bottom-name {
  margin: 0;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  padding-left: 6px;
  font-weight: 500;
  color: #000;
}

.jrn-details-bottom-container .jrn-details-bottom-description {
  display: flex;
  letter-spacing: 1px;
  font-size: 14px;
  color: #000;
  align-items: center;
  font-weight: 400;
  line-height: 25px;
}

.jrn-details-bottom-container .jrn-details-bottom-description img {
  width: 5px;
  margin-left: 1px;
}

.jrn-details-bottom-container .jrn-details-bottom-description .jrn-text-div {
  padding-left: 10px;
  font-weight: 500;

  font-size: 14px;
}

.jrn-details-bottom-container .jrn-details-bottom-description .jrn-text-div span:nth-child(2) {
  color: var(--gray-text-color);
}

.jrn-details-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 155px auto;
}

.jrn-details-grid .jrn-details-grid-header-li {
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 700;
}

.jrn-details-grid .jrn-details-grid-header-li p {
  color: var(--black-color-2);
  margin: 0px;
}

.jrn-details-grid .jrn-details-grid-header-li img {
  width: 5px;
  margin-right: 6px;
  filter: invert(21%) sepia(7%) saturate(539%) hue-rotate(315deg) brightness(90%) contrast(82%);
}

.jrn-details-grid .jrn-details-grid-bottom {
  position: relative;
  display: flex;
  align-items: center;
}

.jrn-details-grid .jrn-details-grid-bottom span {
  margin: 0;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding-left: 6px;
  color: #6e6d6d;
  word-break: break-word;
}

.jrn-notes-img {
  width: 12px !important;
}

.jrn-date-img {
  width: 10px !important;
}

.jrn-price-mg {
  width: 8px !important;
}

.jrn-text-div span:nth-child(2) {
  font-weight: normal !important;
}

@media (max-width: 768px) {
  .jrn-column {
    flex-direction: column-reverse;
  }
}

@media (max-width: 568px) {
  .jrn-title h3 {
    font-size: 19px !important;
    margin-bottom: 1rem !important;
    align-items: center;
    display: flex;
  }

  .jrn-title h3::after {
    /* display: none !important; */
  }

  .jrn-details-header p {
    font-size: 17px;
    color: var(--black-color-1);
  }

  .jrn-details-header img {
    width: 9px;
  }

  .jrn-details-bottom-adress .jrn-details-bottom-name {
    font-size: 14px;
    color: var(--black-color-2);
  }

  .jrn-details-bottom-adress img {
    width: 9px !important;
  }

  .jrn-text-div {
    font-size: 12px !important;
    font-weight: 500;
    color: var(--black-color-2);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .jrn-details-grid-header-li p {
    font-size: 12px;
  }

  .jrn-details-grid-header-li .jrn-notes-img {
    width: 9px !important;
  }

  .jrn-details-grid-bottom span {
    font-size: 12px !important;
  }
}

@media (max-width: 374px) {
  .jrn-details-grid-bottom {}

  .jrn-details-grid-header-li p {}

  .jrn-details-grid {
    display: flex;
    flex-wrap: wrap;
  }

  .jrn-details-grid-header-li,
  .jrn-details-grid-bottom {
    margin-bottom: 10px;
  }
}

/* !Reservation Details finish -----*/

/* *Editable Customer Details */
.editable-psg-details {
  box-shadow: 0 50px 100px -20px rgb(50 50 93 / 25%),
    0 30px 60px -30px rgb(0 0 0 / 30%);
  background: rgba(131, 142, 208, 0.13);
  border: 1px solid hsla(0, 0%, 100%, 0.2);
  padding: 15px;
  transition: 0.5s ease-in-out;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 0;
}

.editable-psg-details h3::after {
  position: absolute;
  width: 63px;
  height: 5px;
  background: var(--main-color);
  content: "";
  left: 0;
  bottom: 0;
  top: 35px;
}

.editable-psg-details-two .editable-psg-header {
  margin-bottom: 1rem;
}

.editable-psg-header {
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.editable-psg-header h3 {
  position: relative;
  font-size: 24px;
  padding-bottom: 20px;
}

.editable-buttons button {
  margin-right: 1rem !important;
  padding: 5px 25px !important;
  font-size: 15px !important;
}

.editable-buttons button:nth-child(2) {
  padding: 5px 30px !important;
}

.editable-psg-details .editable-inp-boxes:nth-child(1) {
  margin-bottom: 1rem;
}

.editable-inp-boxes {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.editable-inp-box {
  position: relative;
  flex-basis: 48%;
}

.phone-icon-input {
  width: 11px;
}

@media (max-width: 768px) {
  .editable-inp-boxes {
    flex-direction: column;
  }
}

@media (max-width: 568px) {
  .editable-psg-header h3 {
    font-size: 19px;
    margin-bottom: 1rem !important;
  }

  .editable-psg-header {
    display: flex;
    flex-direction: column;
  }

  .editable-psg-header h3::after {
    display: none;
  }

  .editable-buttons button {
    padding: 5px 15px !important;
  }

  .editable-buttons button:nth-child(2) {
    padding: 5px 15px !important;
  }

  .editable-phone-subtitle {
    font-size: 12px !important;
  }
}

/* !Editable Customer Details  Finish*/

/* *Editable Journey  Details start */
.editable-jrn-details {
  box-shadow: 0 50px 100px -20px rgb(50 50 93 / 25%),
    0 30px 60px -30px rgb(0 0 0 / 30%);
  background: rgba(131, 142, 208, 0.13);
  border: 1px solid hsla(0, 0%, 100%, 0.2);
  padding: 15px;
  transition: 0.5s ease-in-out;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 0;
}

.editable-jrn-details h3::after {
  position: absolute;
  width: 63px;
  height: 5px;
  background: var(--main-color);
  content: "";
  left: 0;
  bottom: 0;
  top: 35px;
}

.editable-jrn-header {
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.editable-jrn-header h3 {
  position: relative;
  font-size: 24px;
  padding-bottom: 20px;
}

.editable-jrn-points-container {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.editable-jrn-points-container-box {
  flex-basis: 50%;
  max-width: 50%;
}

.editable-jrn-points-container-box:nth-child(1) {
  padding-right: 11px;
}

.editable-jrn-points-container-box:nth-child(2) {
  padding-left: 11px;
}

.editable-jrn-points-container-box-header {
  font-weight: 500;
  color: var(--gray-text-color) !important;
  text-transform: capitalize;
}

.editable-jrn-points-container-box-add-extra-fly {
  padding: 11px 16px;
  align-items: center;
  display: flex;
  cursor: pointer;
  transition: 0.5s ease;
  font-weight: 500;
  letter-spacing: 0.6px;
  margin-bottom: 1rem;
  margin-top: 0px;
  color: var(--gray-text-color);
}

.editable-jrn-points-container-box-add-extra-fly:hover {
  background-color: hsla(0, 2%, 79%, 0.5);
  border-radius: 5px;
}

.editable-jrn-points-container-box-add-extra-fly:hover img {
  filter: var(--black-color-image);
}

.editable-jrn-points-container-box-add-extra-fly:hover p {
  color: var(--blue-color);
}

.editable-jrn-points-container-box-add-extra-fly img {
  margin-right: 10px;
  font-size: 13px;
  transition: 0.54s linear;
  width: 10px;
  filter: var(--gray-text-color-image);
}

.editable-jrn-points-container-box-add-extra-fly p {
  font-size: 14px;
  transition: 0.54s linear;
  margin: 0px;
}

.editable-jrn-points-container-box-card {
  box-shadow: 0 7px 29px 0 hsl(240deg 5% 41% / 20%);
  margin: 8px 0;
  position: relative;
  padding: 8px 16px;
  transition: 0.5s ease-in-out;
  animation: fadeUp;
  opacity: 1;
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  border-radius: 5px;
  background-color: #f0f2f5;

}

.editable-jrn-points-container-box-card:hover {
  background: hsla(0, 1%, 66%, 0.31) !important;
}

.editable-jrn-points-container-box-card-header {
  box-shadow: none !important;
  padding: 10px 5px;
  /* margin-bottom: -1rem; */
  display: flex;
  align-items: center;
  position: relative;
}

.editable-jrn-points-container-box-card-header span {
  transition: 0.25s ease-in-out;
  color: var(--blue-color);
  font-weight: 700;
  font-size: 13px;
}

.editable-jrn-points-container-box-card-header img {
  width: 13px;
  margin: 0 12px;
}

.editable-jrn-points-container-box-card-header p {
  transition: 0.25s ease-in-out;
  color: var(--blue-color);
  font-weight: 500;
  margin: 0px;
  flex: 1;
  font-size: 12px;
}

.editable-jrn-points-container-box-card-header .editable-jrn-points-container-box-card-trash {
  z-index: 1;
  transition: 0.5s linear;
  background-color: transparent;
  padding: 3px;
  border-radius: 50%;
  font-weight: 700;

  opacity: 1;
  transition: 0.6s linear;
  cursor: pointer;
  color: var(--dark-blue-black);
  font-size: 15px;
  display: flex;

  justify-self: flex-end;
}

.editable-selected-inputs {
  position: relative;
}

@media (max-width: 990px) {
  .editable-jrn-points-container {
    flex-direction: column;
  }

  .editable-jrn-points-container-box {
    flex-basis: 100%;
    max-width: 100%;
  }

  .editable-jrn-points-container-box:nth-child(1) {
    margin-bottom: 1.5rem;
    padding-right: 0px;
  }

  .editable-jrn-points-container-box:nth-child(2) {
    padding-left: 0px;
  }

  .editable-jrn-points-container-box-card-trash {
    right: -11px !important;
  }
}

@media (max-width: 568px) {
  .editable-jrn-details h3 {
    font-size: 19px;
    margin-bottom: 1rem !important;
  }

  .editable-jrn-header {
    display: flex;
    flex-direction: column;
  }

  .editable-jrn-details h3::after {
    display: none;
  }

  .editable-jrn-points-container-box-card {
    padding: 5px 6px;
  }

  .editable-jrn-details {
    padding: 8px;
  }
}

/* !Editable Jounrey Details  Finish*/
/* *Payment details start */
.rsv-payment-details {
  padding: 10px 15px;
  max-width: 1220px;
  margin: 0 auto;
  width: 100%;
}

.rsv-payment-details-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rsv-payment-details-header button {
  padding: 10px 12px;
}

.rsv-payment-details-right {
  display: flex;
  box-shadow: var(--box-shasow);
  padding: 5px 15px;
  border-radius:6px;
  background-color: #fff;
  align-items: center;
  height: 50px !important;
  z-index: 1000;

}

.rsv-payment-details-right-text {
  font-size: 28px;
  margin-right: 1rem;
  color: var(--gray-text-color);
  font-weight: 500;
}

.rsv-payment-details-right-number {
  color: var(--dark-blue-black);
  font-weight: bold;
  font-size: 38px;
}

.rsv-print-email-div {
  margin-top: 1.5rem;
}

@media (max-width: 990px) {
  .rsv-payment-details-right-text {
    font-size: 24px;
  }

  .rsv-payment-details-right-number {
    font-size: 24px;
  }
}

@media (max-width: 768px) {
  .rsv-payment-details-header {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .rsv-payment-details-header .rsv-payment-details-left {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }


  .rsv-payment-details-header {
    gap: 1.2rem;
  }
}

@media (max-width: 480px) {

  .rsv-payment-details-header button {
    padding: 6px 12px;
  }
}

/* !Payment details finish */

/*//*Date landingHour || minute get quotaion div  */
.editable-jrn-date-hour-minute-div {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
}

.editable-jrn-departing-date {
  flex-grow: 0;
  flex-shrink: 0;
  /* border: 1px solid rgb(36, 21, 128); */
  flex-basis: 33.3%;
}

.editable-jrn-detparting-time {
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 33.3%;
  padding: 0 22px;
}

.editable-jrn-departing-btn {
  flex-basis: 33.3%;
}

.editable-jrn-departing-btn button {
  width: 100%;
  height: 52px;
}

@media (max-width: 990px) {
  .editable-jrn-date-hour-minute-div {
    flex-direction: column;
    align-items: inherit;
  }

  .editable-jrn-departing-date {
    flex-basis: 100%;
  }

  .editable-jrn-departing-btn {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  .editable-jrn-detparting-time {
    padding: 0px;
  }
}

/***********************************************************/
/* ?btn component */
.tmb-btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: all 0.4s linear;
}

.tmb-btn-primary {
  background: var(--main-color);
  border-color: var(--main-color-dark);
  color: #fff;
}

.tmb-btn-primary:hover {
  background: var(--main-color-dark);
  border-color: var(--main-color);
}

.tmb-button-primary-outlined-hover {
  background: var(--main-color);
  border-color: var(--main-color-dark);
  color: #fff;
}

.tmb-button-primary-outlined-hover:hover {
  transition: 0.3s ease;
  background: #fff;
  color: var(--main-color);
}

.tmb-btn-primary-outlined {
  background: #fff;
  border: 1px solid var(--border-outlined);
  color: var(--main-color);
}

.tmb-btn-primary-outlined:hover:not(:disabled) {
  background-color: rgba(25, 118, 210, 0.04);
  border: 1px solid var(--border-outlined-hover);
}
.tmb-btn-primary-outlined:disabled {
  border-color: silver;
  color: silver;
  background-color: #efefef;
  cursor: default;
}
.tmb-edit-btn:hover {
  transition: 0.2s ease;
  transform: scale(0.99);
  background-color: #fff;
}

.tmb-cancel-btn {
  color: red !important;
}

/* ?alert compoennt */
.tmb-alert-container {
  width: 100%;
  height: 100%;
  position: absolute;
}

.tmb-alert-container .tmb-alert-div {
  position: fixed;
  width: 300px;
  height: 60px;
  background-color: #00ba00;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  bottom: -100px;
  opacity: 0;
  right: 50%;
  border-radius: 5px;
  transform: translate(50%);
  transition: 2s ease;
}

.tmb-alert-container .tmb-alert-div .tmb-check-img {
  filter: invert(100%) sepia(0%) saturate(2495%) hue-rotate(356deg) brightness(111%) contrast(101%);
  width: 12px;
}

.tmb-alert-container .tmb-alert-div span {
  color: #fdfdfd;
  margin-left: 10px;
  font-size: 14px;
}

.tmb-alert-container .tmb-alert-div .tmb-message-container {
  margin: 0 auto;
  width: 100%;
  text-align: center;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
}

.tmb-alert-container .tmb-alert-div .tmb-message-container .tmb-progress {
  border-radius: 30px;
  background-color: transparent;
  animation: progress 4s infinite;
}

.tmb-alert-container .tmb-alert-div .tmb-message-container .tmb-progress .tmb-progress-bar {
  height: 5px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  transition: 0.4s linear;
}

.tmb-alert-container .tmb-alert-div-error {
  background-color: var(--error-message-color) !important;
}

.tmb-alert-container .tmb-showAlert {
  animation: alertt;
  opacity: 1;
  animation-duration: 6s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}

@keyframes alertt {
  0% {
    bottom: -40px;
    opacity: 0;
  }

  40% {
    bottom: 25px;
    opacity: 1;
  }

  60% {
    bottom: 25px;
    opacity: 1;
  }

  100% {
    bottom: -40px;
    opacity: 0;
  }
}

@keyframes progress {
  0% {
    width: 100%;
    background: #fff;
  }

  100% {
    width: 0%;
    background: #fff;
    box-shadow: 0 0 40px #f3c623;
  }
}

/*?Animations*/
.tmb-zoom-out {
  animation-name: zoom_out;
  animation-duration: 1.2s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
}

@keyframes zoom_out {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    top: 30px;
  }

  10% {
    opacity: 0;
    top: 30px;
  }

  100% {
    top: 0px;
    opacity: 1;
  }
}

/* utils */
.fe_bold {
  font-weight: bold;
}

.fw_500 {
  font-weight: 500;
}

.relative {
  position: relative;
}


.display-flex {
  display: flex;
  align-items: center;
}

/*//!--------> react components */
/* ?inputComponent */
.editable-form-control {
  width: 100%;
}

.editable-form-control-header {
  display: flex;
  justify-content: space-between;
}

.editable-form-control-header-label {
  color: var(--dark-blue-black) !important;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 4px !important;
}

.editable-input-boxes {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.editable-form-control-input-div input {
  height: auto;
  line-height: 28px;
  padding: 10px 20px 10px 40px;
  font-size: 14px;
  color: var(--dark-blue-black);
  border: 1px solid hsla(215, 9%, 55%, 0.2);
  box-shadow: none;
  transition: all 0.3s;
  background-color: #fff;
  width: 100%;
  outline: none;
  border-radius: 5px;
}

.editable-form-control-input-div input:focus {
  border: 1px solid var(--main-color);
}

.editable-form-control-input-div input::placeholder {
  color: rgba(59, 59, 59, 0.628);
}

.editable-form-control-input-div img {
  top: 54px;
  font-size: 12px !important;
  position: absolute;
  left: 16px;
  filter: invert(38%) sepia(10%) saturate(469%) hue-rotate(174deg) brightness(94%) contrast(84%);
}

/* ?icons image scssss */
.email-icon-input {
  width: 12px;
  top: 34px !important;
}

.icon-inside0inp-train {
  width: 12px !important;
  position: absolute;
  top: 47px !important;
  left: 15px !important;
  color: #5d646d;
  font-size: 14px;
  filter: invert(38%) sepia(10%) saturate(469%) hue-rotate(174deg) brightness(94%) contrast(84%);
  z-index: 999;
}

.user-icon-input {
  width: 11px;
}

.usersIcon {
  width: 11px;
}

/* circle icon inside span  */
.left_title span {
  background-color: var(--main-color);
  display: flex;
  margin-left: 5px;
  align-items: center;
  justify-content: center;
  padding: 3px 5px;
  border-radius: 50%;
  cursor: pointer;
}

.left_title span img {
  width: 3px;
  filter: var(--white-color-image) !important;
}

/* circle icon incide waiting pick up */
.info-for-flight {
  background-color: var(--main-color);
  display: flex;
  margin-left: 5px;
  align-items: center;
  justify-content: center;
  padding: 3px 5px;
  border-radius: 50%;
  cursor: pointer;
}

.info-for-flight img {
  width: 3px;
  filter: var(--white-color-image) !important;
}

.users-quotation-card-icon {
  width: 14px;
  margin-right: 4px;
  filter: var(--gray-text-color-image);
}

.suitcase-quotation-card-icon {
  width: 11px;
  margin-right: 4px;
  filter: var(--gray-text-color-image);
}

.check-quotation-card-icon {
  width: 11px;
  filter: var(--green-color-image);
}

/*  */
/*  */
.editable-form-control-header-message {
  color: red;
  margin-bottom: 4px;
  font-size: 14px;
}

.editable-phone-subtitle {
  color: var(--main-color);
  font-size: 13px;
  padding-left: 15px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.editable-error-input {
  border: 1px solid red !important;
}

/* ?selectComponent */

.editable-select-div {
  position: relative;
}

.editable-select-img {
  position: absolute;
  top: 20px;
  width: 15px;
  left: 17px;
  filter: invert(38%) sepia(10%) saturate(469%) hue-rotate(174deg) brightness(94%) contrast(84%);
  font-size: 14px;
  z-index: 1111;
}

.editable-select-div select {
  margin-top: 0px;
  position: relative;
  padding: 10px 42px;
  width: 100%;
  border: 1px solid hsla(215, 9%, 55%, 0.2);
  border-radius: 5px;
  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: #fff;
  line-height: 28px;
}

.editable-form-control-header-textarea {
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.editable-form-control-textarea-div {
  position: relative;
  display: flex;
}

.editable-select-div select:focus,
.editable-form-control-textarea-div textarea:focus {
  border: 1px solid var(--main-color);
}

.editable-select-img-angle-down {
  position: absolute;
  top: 18px;
  right: 20px;
  width: 10px;
  filter: invert(38%) sepia(10%) saturate(469%) hue-rotate(174deg) brightness(94%) contrast(84%);
  z-index: 99;
  /* width: px; */
}

/* ?text area */
.editable-form-control-textarea-div img {
  width: 10px;
  position: absolute;
  left: 15px;
  z-index: 9;
  width: 11px;
  position: absolute;
  z-index: 9;
  bottom: 40px;
  filter: var(--gray-text-color-image) !important;
}

.editable-form-control-textarea-div textarea {
  margin-top: 0 !important;
  padding: 15px 15px 15px 40px;
  border: 1px solid hsla(215, 9%, 55%, 0.2);
  border-radius: 5px;
  outline: none;
  resize: none;
  position: relative;
  width: 100%;
  color: var(--gray-text-color);
}

/*?input select box for inside updatebale selectedPoints
*/
.input-selected-points {
  padding: 3px 42px !important;
}

.select-selected-points {
  padding: 3px 42px !important;
}

.icon_selectedPoints_selectbox {
  width: 15px;
  position: absolute;
  top: 12px !important;
  left: 15px !important;
  color: #5d646d;
  font-size: 14px;
  filter: invert(38%) sepia(10%) saturate(469%) hue-rotate(174deg) brightness(94%) contrast(84%);
  z-index: 999;
}

.icon_selectedPoints_selectbox-post-code {
  width: 10px;
  position: absolute;
  top: 12px !important;
  left: 15px !important;
  color: #5d646d;
  font-size: 14px;
  filter: invert(38%) sepia(10%) saturate(469%) hue-rotate(174deg) brightness(94%) contrast(84%);
  z-index: 999;
}

.icon-inside-small-input {
  /* for input  */
  width: 15px;
  position: absolute;
  top: 47px !important;
  left: 15px !important;
  color: #5d646d;
  font-size: 14px;
  filter: invert(38%) sepia(10%) saturate(469%) hue-rotate(174deg) brightness(94%) contrast(84%);
  z-index: 999;
}

.icon-inside-small-input-place-interest {
  width: 11px !important;
  top: 45px !important;
}

.select-selected-points {
  color: var(--gray-text-color);
}

.editable-select-img-angle-down-for-selectedPoints {
  top: 10px;
}

/* ?input date component */
/* make the native arrow invisible and stretch it over the whole field so you can click anywhere in the input field to trigger the native datepicker*/
input[type="date"]::-webkit-calendar-picker-indicator {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
  color: transparent;
  background: transparent;
  user-select: none;
}

input::-webkit-date-and-time-value {
  text-align: left;
  background-color: rgb(255, 255, 255) !important;
}

input[type="date"]::-webkit-datetime-edit,
input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-clear-button {
  color: rgb(253, 253, 253);
  position: relative;

  left: -0px;
  text-align: left;
}

input[type="date"]::-webkit-datetime-edit-year-field {
  position: absolute !important;
  border-left: 1px solid #8c8c8c2f;
  padding: 2px 7px;
  color: #000;
  left: 56px;


}

input[type="date"]::-webkit-datetime-edit-month-field {
  position: absolute !important;
  border-left: 1px solid #8c8c8c2f;
  padding: 2px 7px;
  color: rgb(0, 0, 0);
  left: 26px;

}


input[type="date"]::-webkit-datetime-edit-day-field {
  position: absolute !important;
  color: #000;

  padding: 2px 0px;
  left: 4px;

}

input::-webkit-datetime-edit-day-field:focus,
input::-webkit-datetime-edit-month-field:focus,
input::-webkit-datetime-edit-year-field:focus {
  background-color: var(--main-color);

  color: white;
  outline: none;
}

.date-input-div {
  position: relative !important;
}

.date-input-div img {
  top: 19px !important;
  width: 11px;
  filter: var(--gray-text-color-image);
}

.date-input-div input {
  font-size: 15px;
  color: var(--dark-blue-black);
}

/* *TimePciker */
.editable-jrn-detparting-time .jrn-time-picker {
  flex: 1 1;
}

.editable-jrn-detparting-time .jrn-time-picker-left {
  margin-right: 11px;
}

.editable-jrn-detparting-time .jrn-time-picker-right {
  margin-left: 11px;
}

.editable-jrn-detparting-time p {
  color: var(--dark-blue-black) !important;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 4px !important;
}

.jrn-timepicker-dropdown-holder {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  font: 16px arial;
  color: var(--dark-blue-black) !important;
  position: relative;
  box-sizing: border-box;
  background: transparent;
}

.jrn-timepicker-dropdown-holder .jrn-timepicker-dropdown-option {
  padding: 10px 0 0 0;
  position: absolute;
  left: 0;
  top: 50px;
  right: 0;
  margin: 0;
  cursor: pointer;
  display: none;
  background-color: white;
  color: var(--dark-blue-black);
  border-radius: 0 0 10px 10px;
  z-index: 5;
  overflow-y: scroll;
  height: 190px;
  user-select: none;
}

.jrn-timepicker-dropdown-holder .jrn-timepicker-dropdown-option::-webkit-scrollbar {
  background: #fff;
  width: 5px;
  height: 5px !important;
}

.jrn-timepicker-dropdown-holder .jrn-timepicker-dropdown-option::-webkit-scrollbar-thumb {
  background: #777;
  border-radius: 50px;
}

.jrn-timepicker-dropdown-holder .jrn-timepicker-dropdown-option .li {
  padding: 10px 15px;
  color: var(--dark-blue-black);
  list-style: none;
  user-select: none;
}

.jrn-timepicker-dropdown-holder .jrn-timepicker-dropdown-option .li:hover:not(.li-current) {
  color: var(--main-color);
  background-color: rgba(40, 125, 250, 0.1);
  font-weight: 400;
  transition: 0.5s ease;
}

.jrn-timepicker-dropdown-holder .jrn-timepicker-dropdown-option .li.li-current {
  background-color: var(--main-color);
  color: #fff !important;
}

.jrn-timepicker-dropdown-holder .DropDownActive+.jrn-timepicker-dropdown-option {
  display: block;
  z-index: 9999;
}

.jrn-timepicker-dropdown-holder .jrn-timepicker-dropdown {
  float: left;
  width: 100%;
  border-radius: 5px;
  font: 16px arial;
  cursor: pointer;
  height: 50px;
  position: relative;
  padding-left: 20px;
  box-sizing: border-box;
  z-index: 20;
  border: 1px solid rgba(128, 137, 150, 0.2);
  background-color: white;
}

.jrn-timepicker-holder {
  line-height: 50px;
  font-size: 16px;
  margin: 0;
}

.jrn-timepicker-dropdown-holder .jrn-timepicker-dropdown:after {
  content: "▾";
  font-size: 18px;
  position: absolute;
  right: 20px;
  top: 13px;
  display: block;
}

@media (max-width: 990px) {
  .jrn-timepicker-dropdown-holder .jrn-timepicker-dropdown:after {
    right: 15;
  }
}

/* add extra input */
.add-extra-input-div-status {
  position: relative;
}

.add-extra-input-div-status img {
  top: 15px;
}

/* quotations results */
.jrn-quotation-results {
  margin-top: 2rem;
  position: relative;
}

.jrn-quotation-results .jrn-quotation-results-items {
  grid-gap: 1rem;
  gap: 1rem;
  display: grid;
  grid-template-columns: minmax(270px, 1fr) minmax(270px, 1fr);
  position: relative;
}

@media (max-width: 768px) {
  .jrn-quotation-results .jrn-quotation-results-items {
    grid-template-columns: minmax(70px, 1fr);
  }
}

.jrn-quotation-card-item {
  position: relative;
  border-radius: 10px;
  box-shadow: 0 2px 5px -1px rgb(50 50 93 / 25%),
    0 1px 3px -1px rgb(0 0 0 / 30%);
  cursor: pointer;
  background-color: #f0f2f5;
}

.jrn-quotation-card-item-outer-icon {
  position: absolute;
  top: 16px;
  filter: var(--gray-text-color-image);
  right: 12px;
  width: 17px;
}

.jrn-quotation-card-item-content {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  min-width: 0;
  padding-bottom: 10px;
  position: relative;
}

.item_main {
  display: flex;
  position: relative;
  justify-content: space-between;
}

.item_main .main_left {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 10px 16px;
  min-width: 0;
}

@media (max-width: 370px) {
  .item_main .main_left {
    flex: 0.5 0.5 auto;
  }
}

.item_main .main_left .left_title {
  display: flex;
  align-items: center;
  font-weight: 600;
  padding-right: 0.5em;
  font-size: 16px;
  overflow: hidden;
  margin-right: 0.5em;
  text-overflow: ellipsis;
  /* color: #192024; */
  color: var(--dark-blue-black);
  margin-bottom: 8px;
}

@media (max-width: 1250px) {
  .item_main .main_left .left_title {
    font-size: 11px;
  }
}

@media (max-width: 1100px) {
  .item_main .main_left .left_title {
    font-size: 15px;
  }
}

@media (max-width: 820px) {
  .item_main .main_left .left_title {
    font-size: 11px;
  }
}

@media (max-width: 640px) {
  .item_main .main_left .left_title {
    font-size: 15px;
  }
}

.item_main .main_left .left_title i {
  margin-left: 0.4rem;
  font-size: 14px;
  margin-top: -0.9px;
  cursor: pointer;
  color: var(--main-color);
  z-index: 11;
}

.item_main .main_left .left_subtitle {
  font-size: 13px;
  font-weight: 500;
  color: var(--gray-text-color);
}

@media (max-width: 1250px) {
  .item_main .main_left .left_subtitle {
    font-size: 11px;
  }
}

@media (max-width: 1100px) {
  .item_main .main_left .left_subtitle {
    font-size: 12px;
  }
}

.item_main .main_left ul {
  display: flex;
  flex: 1 1 auto;
  align-items: flex-end;
  font-size: 13px;
  padding-bottom: 8px;
}

.item_main .main_left ul li {
  display: inline-block;
  margin-right: 16px;
  white-space: nowrap;
  margin-top: 0.5rem;
}

.item_main .main_left ul li i {
  display: inline-block;
  line-height: 0;
  margin-right: 0.3rem;
}

.item_main .main_right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 8px 16px;
  flex: 0 0 auto;
  justify-content: center;
}

.item_main .main_right img {
  margin: 19px 12px 0 0;
  width: 200px;
}

@media (max-width: 1400px) {
  .item_main .main_right img {
    width: 120px;
  }
}

@media (max-width: 1200px) {
  .item_main .main_right img {
    width: 120px;
  }
}

@media (max-width: 1100px) {
  .item_main .main_right img {
    width: 160px;
  }
}

@media (max-width: 820px) {
  .item_main .main_right img {
    width: 120px;
  }
}

@media (max-width: 640px) {
  .item_main .main_right img {
    width: 200px;
  }
}

@media (max-width: 440px) {
  .item_main .main_right img {
    width: 150px;
  }
}

@media (max-width: 350px) {
  .item_main .main_right img {
    width: 118px;
  }
}

.item_bottom {
  padding-top: 20px;
  padding-left: 16px;
  padding-right: 16px;
  border-top: 1px solid rgba(148, 148, 148, 0.338);
  display: flex;
  justify-content: space-between;
}

.item_bottom .first .uzunad {
  display: none;
}

@media (max-width: 1400px) {
  .item_bottom .first .uzunad {
    display: block !important;
  }
}

@media (max-width: 1200px) {
  .item_bottom .first .uzunad {
    display: block !important;
  }
}

@media (max-width: 1100px) {
  .item_bottom .first .uzunad {
    display: none !important;
  }
}

@media (max-width: 820px) {
  .item_bottom .first .uzunad {
    display: block !important;
  }
}

@media (max-width: 640px) {
  .item_bottom .first .uzunad {
    display: none !important;
  }
}

@media (max-width: 380px) {
  .item_bottom .first .uzunad {
    display: block !important;
    justify-content: flex-start;
    align-items: center;
  }
}

@media (max-width: 1400px) {
  .item_bottom .second .uzunad {
    display: none !important;
  }
}

@media (max-width: 1200px) {
  .item_bottom .second {
    display: flex !important;
  }

  .item_bottom .second .uzunad {
    display: none !important;
  }
}

@media (max-width: 1100px) {
  .item_bottom .second .uzunad {
    display: flex !important;
  }
}

@media (max-width: 820px) {
  .item_bottom .second .uzunad {
    display: none !important;
  }
}

@media (max-width: 720px) {
  .item_bottom .second .uzunad {
    display: none !important;
    justify-content: flex-start;
    align-items: center;
  }
}

@media (max-width: 640px) {
  .item_bottom .second .uzunad {
    display: flex !important;
  }
}

@media (max-width: 380px) {
  .item_bottom .second .uzunad {
    display: none !important;
    justify-content: flex-start;
    align-items: center;
  }
}

.item_bottom .free_meet {
  align-items: baseline;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 720px) {
  .item_bottom .free_meet {
    justify-content: center;
  }
}

.item_bottom .free_meet p {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: green;
  font-weight: 500;
}

@media (max-width: 1500px) {
  .item_bottom .free_meet p {
    font-size: 11px;
  }
}

@media (max-width: 820px) {
  .item_bottom .free_meet p {
    font-size: 10px;
  }
}

@media (max-width: 640px) {
  .item_bottom .free_meet p {
    font-size: 13px;
  }
}

@media (max-width: 510px) {
  .item_bottom .free_meet p {
    font-size: 11px;
  }
}

@media (max-width: 410px) {
  .item_bottom .free_meet p {
    font-size: 10px;
  }
}

.item_bottom .free_meet p span {
  margin-right: 0.35rem;
}

.item_bottom .free_meet_price {
  text-align: right;
  align-items: flex-end !important;
}

@media (max-width: 820px) {
  .item_bottom .free_meet_price {
    justify-content: center;
  }
}

.item_bottom .free_meet_price .price {
  font-size: 25px;
  padding-bottom: 0.5rem;
  color: black;
}

.item_bottom .free_meet_price .enjoy_travel {
  display: none;
  color: var(--black-color-2);
  font-size: 12px;
  padding-right: 2px;
}

@media (max-width: 820px) {
  .item_bottom .free_meet_price .enjoy_travel {
    display: block;
  }
}

@media (max-width: 720px) {
  .item_bottom .free_meet_price .enjoy_travel {
    font-size: 11px;
  }
}

.item_bottom .free_meet_price .selectedBtn {
  background-color: var(--main-color) !important;
  color: white !important;
}

.item_bottom .free_meet_price .selectedBtn:hover {
  background-color: white;
  color: var(--main-color);
  border: 1px solid var(--main-color);
}

.item_bottom .free_meet_price button {
  letter-spacing: 0.4px;
  font-size: 15px;
  padding: 0px 15px;
  transition: all 0.3s;
  line-height: 35px;
  color: var(--main-color);
  background-color: white;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  position: relative;
  display: inline-block;
  border: 1px solid var(--main-color);
  width: 100%;
  margin-top: 0.75rem;
}

@media (max-width: 820px) {
  .item_bottom .free_meet_price button {
    line-height: 28px;
  }
}

.item_bottom .free_meet_price button:hover {
  background-color: var(--main-color);
  color: white;
  border: 1px solid white;
}

.icon_details {
  display: flex;
  flex: 1 1 auto;
  align-items: flex-end;
  font-size: 13px;
  padding-bottom: 8px;
}

.icon_details .icon_details_item {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin-right: 16px;
  white-space: nowrap;
  margin-top: 0.5rem;
  color: var(--gray-text-color);
}

.selected-quotation-button {
  background-color: var(--main-color) !important;
  color: white !important;
}

/* informative-subcharge -div */
.informative-subcharges-div {
  margin-top: 1rem;
  border-left: 5px solid var(--sky-color-blue);
  border-right: 5px solid var(--sky-color-blue);
  min-height: 90px;
  display: flex;
  align-items: center;
  padding: 15px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.informative-subcharges-div img {
  margin-right: 1rem;
}

@media (max-width: 390px) {
  .informative-subcharges-div img {
    width: 18px;
  }
}

.informative-subcharges-div .informative-subcharge-price-info {
  color: var(--dark-blue-black);
  /* color: var(--color-dark-green); */
}

.informative-subcharges-div .informative-subcharge-price-info p span {
  margin-bottom: 10px !important;
  padding: 100px;
}


.difference-price {
  font-weight: bold !important;
  color: var(--color-dark-green) !important;
}

.informative-subcharges-div .informative-subcharge-price-info p {
  font-weight: 400;
  margin: 4px !important;
}

@media (max-width: 450px) {
  .informative-subcharges-div .informative-subcharge-price-info p {
    font-size: 13px !important;
  }
}

@media (max-width: 370px) {
  .informative-subcharges-div .informative-subcharge-price-info p {
    font-size: 11px !important;
  }
}

.jrn-py-btn-div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top:20px;
  padding-top:40px;
  border-top:4px solid silver;
}

.jrn-py-btn-div button {
  height: 100%;
  margin-bottom: 1.2rem;
}

@media (max-width: 450px) {
  .jrn-py-btn-div button {
    height: 100%;
    width: 100%;
  }
}

/*************************************************************/
/*//!modal info modal info */
.tmb-modal {
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  z-index: 9999;
  padding: 100px !important;
  margin: 0px;
  height: 100%;
  width: 100%;
  animation: zoomout;
  opacity: 1;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: 0.18s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}

@media (max-width: 600px) {
  .tmb-modal {
    padding: 40px !important;
  }
}

@media (max-width: 450px) {
  .tmb-modal {
    padding: 20px !important;
  }
}

.tmb-modal_container {
  max-width: 450px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(225, 225, 225, 0.35) 12px 8px 15px;
  border: 2px solid var(--blue-color);
  color: black;
  font-weight: 400;
  text-align: center;
  padding: 15px 20px;
  transition: 0.5s ease-in-out;
}

@media (max-width: 600px) {
  .tmb-modal_container p {
    font-size: 12px;
  }
}

@media (max-width: 500px) {
  .tmb-modal_container p {
    font-size: 11px;
  }
}

.tmb-modal_container .tmb-modal-button-div {
  display: flex;
  justify-content: center;
  margin-top: 0.75rem;
  align-items: center;
}

@keyframes zoomout {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  10% {
    opacity: 0;
    transform: scale(0.5);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* no results component */
.tmb-noResults .tmb-noResults-li {
  display: flex;
  align-items: center;
}

.tmb-noResults .tmb-noResults-li img {
  width: 10px;
  margin-left: 15px;
  filter: var(--gray-text-color-image);
}

.tmb-noResults .tmb-noResults-li p {
  color: var(--gray-text-color);
  font-size: 13px;
  padding-left: 10px;
}

.tmb-noResults .tmb-noResults-li p:hover {
  color: var(--dark-blue-black);
}

.tmb-noResults .tmb-noResults-li p a {
  color: var(--main-color);
}

/* handle search results */
.tmb-hndl-results {
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 9999;
  width: 100%;
}

.tmb-hndl-results .tmb-all-results-ul {
  max-height: 232px;
  overflow-y: scroll;
  top: calc(100% + 10px);
  width: 100%;
  max-width: 100%;
  margin: 0;
  list-style: none;
  border: 1px solid var(--main-color);
  border-top-color: transparent;
  border-radius: 5.5px;
  z-index: 100;
  background-color: #fff;
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
  font-size: 13px;
}

@media (max-width: 990px) {
  .tmb-all-results-ul {
    top: calc(100% - 11px);
  }
}

@media (max-width: 450px) {
  .tmb-all-results-ul {
    min-width: 0px;
    max-width: 100%;
    font-size: 13px;
  }
}

.tmb-all-results-ul div .tmb-search-groupname {
  padding: 4px 9px;
  font-family: inherit;
  text-transform: uppercase;
  font-weight: 700;
  color: #000;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  cursor: not-allowed;
  user-select: none;
}

.tmb-all-results-ul div .tmb-search-groupname:hover {
  background-color: transparent !important;
}

.tmb-all-results-ul div .tmb-search-groupname img {
  width: 18px;
  height: 18px;
  margin: 0px 8px 0px 0px;
  pointer-events: none;
}

@media (max-width: 450px) {
  .tmb-all-results-ul div .tmb-search-groupname img {
    width: 15px;
    height: 15px;
  }
}

.tmb-all-results-ul div .tmb-search-groupname a {
  font-weight: 500;
  letter-spacing: 1.2px;
  color: #000;
  display: inline;
  pointer-events: none;
}

.tmb-all-results-ul div .tmb-search-groupname .tmb-search-groupname-google-image {
  width: 28%;
  margin-left: 6px;
  margin-top: -5px;
  pointer-events: none;
}

.tmb-all-results-ul div li {
  padding: 4px 4px;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.5s ease;
  border-bottom: 1px solid rgba(220, 220, 220, 0.3);
}

.tmb-all-results-ul div li:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.tmb-all-results-ul div li:hover {
  background-color: rgba(220, 220, 220, 0.3);
}

.tmb-all-results-ul div li img {
  width: 13px;
  height: 13px;
  margin: 0px 6px;
}

@media (max-width: 450px) {
  .tmb-all-results-ul div li img {
    width: 12px;
    height: 12px;
  }
}

.tmb-all-results-ul div li p {
  display: block;
  text-decoration: none;
  color: #000;
  font-weight: 500;
  transition: all 0.3s ease;
  width: 100%;
  margin: 6px;
}

.tmb-all-results-ul div li p:hover {
  color: var(--blue-color);
}

.tmb-all-results-ul div li:hover p {
  color: var(--blue-color);
}

/* loading compoenents */
.tmb-loading {
  display: flex;
  position: absolute;
  right: 9px;
  top: 64%;
  transform: translate(0%, -50%);
}

.tmb-loading-center {
  display: flex;
  position: absolute !important;
  right: 50% !important;
  transform: translate(50%, 50%) !important;
}

.tmb-loading .tmb-loading-dot,
.tmb-loading-center .tmb-loading-dot {
  position: relative;
  width: 0.24em;
  height: 0.24em;
  margin: 0.1em;
  border-radius: 50%;
}

.tmb-loading .tmb-loading-dot::before,
.tmb-loading-center.tmb-loading-dot::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: inherit;
  animation: wave 2s ease-out infinite;
}

.tmb-loading .tmb-loading-dot:nth-child(1),
.tmb-loading-center .tmb-loading-dot:nth-child(1) {
  background: var(--first-color);
}

.tmb-loading .tmb-loading-dot:nth-child(1)::before,
.tmb-loading-center .tmb-loading-dot:nth-child(1)::before {
  animation-delay: 0.2s;
}

.tmb-loading .tmb-loading-dot:nth-child(2),
.tmb-loading-center .tmb-loading-dot:nth-child(2) {
  background: var(--second-color);
}

.tmb-loading .tmb-loading-dot:nth-child(2)::before,
.tmb-loading-center .tmb-loading-dot:nth-child(2)::before {
  animation-delay: 0.4s;
}

.tmb-loading .tmb-loading-dot:nth-child(3),
.tmb-loading-center .tmb-loading-dot:nth-child(3) {
  background: var(--third-color);
}

.tmb-loading .tmb-loading-dot:nth-child(3)::before,
.tmb-loading-center .tmb-loading-dot:nth-child(3)::before {
  animation-delay: 0.6s;
}

.tmb-loading .tmb-loading-dot:nth-child(4),
.tmb-loading-center .tmb-loading-dot:nth-child(4) {
  background: var(--fourth-color);
}

.tmb-loading .tmb-loading-dot:nth-child(4)::before,
.tmb-loading-center .tmb-loading-dot:nth-child(4)::before {
  animation-delay: 0.8s;
}

.tmb-loading .tmb-loading-dot:nth-child(5),
.tmb-loading-center .tmb-loading-dot:nth-child(5) {
  background: var(--fifth-color);
}

.tmb-loading .tmb-loading-dot:nth-child(5)::before,
.tmb-loading-center .tmb-loading-dot:nth-child(5)::before {
  animation-delay: 1s;
}

@keyframes wave {

  50%,
  75% {
    transform: scale(2.5);
  }

  80%,
  100% {
    opacity: 0;
  }
}

/* it is for cardItemQuotation in order to make loading center  */
.quotaion-card-div-items {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
}

.alert_danger_check_for_24 {
  padding: 15px;
  font-size: 14px;
  width: 100%;
  margin-bottom: 0.75rem;
  animation: animate;
  opacity: 1;
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-delay: .38s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  color: var(--alert-danger-color);
  background-color: var(--alert-danger-bg);
  border-color: var(--alert-danger-border);
  background-color: var(--);
}

.alert-section-container {
  width: 100%;
  max-width: var(--max-container-width);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
}

@keyframes animate {
  0% {
    opacity: 0;

    transform: scale(0.5);

  }

  10% {
    opacity: 0;
    transform: scale(0.5);


  }

  100% {
    opacity: 1;
    transform: scale(1);


  }
}`}} ></style>
                <div className="tool-manage-booking" mode="dark">
                    <img alt="logo" src={__env.websiteLogo} />
                    {/* this for development mode */}
                    {this.props.mode === 'localhost'
                        ? <div style={{ position: "absolute", top: 0, right: 0, backgroundColor: "silver", zIndex: 1000 }} >
                            <button onClick={(e) => this.setState({ showState: !showState })}>state</button>
                            {showState ? <pre style={{ width: 600, height: 600, overflow: "auto" }} >{JSON.stringify({ ...this.state, resources: undefined }, null, 2)}</pre> : <React.Fragment></React.Fragment>}
                        </div>
                        : <React.Fragment></React.Fragment>}
                    {/* main component for login and form */}
                    {isAuth
                        ? <ReservationDetails eM={eM} sM={sM} resources={resources} reservation={reservation} />
                        : <BookingLogin preLogin={this.props.preLogin} />
                    }
                </div>
            </React.Fragment>
        );
    }
}

class ManageBooking {
    constructor(elementId, options = {}) {
        this.elementId = elementId;
        this.options = typeof options === 'object' && !Array.isArray(options) && options !== null ? options : {};
        if (typeof window.React === 'object' && typeof window.ReactDOM === 'object') {
            if (this.options.mode === 'localhost') {
                console.log('check point 1 pass')
            }
        } else {
            throw new Error(`React or ReactDOM aren't exists`)
        }
    }
    render() {
        let demo = document.getElementById(this.elementId);
        if (demo && typeof window.React === 'object' && typeof window.ReactDOM === 'object') {
            ReactDOM.render( React.createElement(ManageBookingMain, { "user-id": 490, "x-auth-token": "24610b048c20464f0ca1aefbcab94c2c", ...this.options }), demo, () => this.onRender.bind(this)  );
        } else { throw new Error(`there is no any Element has ID : ${this.elementId}`) }
    }
    onRender(callback) {
        if (typeof callback === 'function') {
            callback()
        }
    }
}