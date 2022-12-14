const __env = {
  apiDomain: "https://api.london-tech.com",
  websiteLogUrl: "https://heathrow-gatwick-transfers.com/images/logoJpg.png",
  infoAlert: "https://heathrow-gatwick-transfers.com/images/infoLittle.png",
  emailSubjectUrl: "https://heathrow-gatwick-transfers.com"
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
const waitingMinutes = [
  {
    value: "0 minutes after flight has landed",
    id: 1,
  },

  {
    id: 2,
    value: "5 minutes after flight has landed",
  },

  {
    id: 3,
    value: "10 minutes after flight has landed",
  },

  {
    id: 4,
    value: "15 minutes after flight has landed",
  },
  {
    id: 5,
    value: "20 minutes after flight has landed",
  },

  {
    id: 6,
    value: "25 minutes after flight has landed",
  },
  {
    id: 7,
    value: "30 minutes after flight has landed",
  },
  {
    id: 8,
    value: "35 minutes after flight has landed",
  },
  {
    id: 9,
    value: "40 minutes after flight has landed",
  },
  {
    id: 10,
    value: "45 minutes after flight has landed",
  },
  {
    id: 11,
    value: "50 minutes after flight has landed",
  },
  {
    id: 12,
    value: "60 minutes after flight has landed",
  },
  {
    id: 13,
    value: "70 minutes after flight has landed",
  },
  {
    id: 14,
    value: "80 minutes after flight has landed",
  },
  {
    id: 15,
    value: "90 minutes after flight has landed",
  },
  {
    id: 16,
    value: "100 minutes after flight has landed",
  },
  {
    id: 17,
    value: "120 minutes after flight has landed",
  },
  {
    id: 18,
    value: "150 minutes after flight has landed",
  },
];
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

const apiV1ReservationEdit = async (reservation, props) => {
  let url = `${__env.apiDomain}/api/v1/reservation/edit`;
  let method = "POST"
  let headers = { "Content-Type": "application/json" }
  let body = JSON.stringify({ reservation: [reservation], ...props })
  console.log(body);

  let bodyRequest = { method, body, headers, };
  let fetchReq = await fetch(url, bodyRequest);
  let fetchRes = await fetchReq.json();
  return fetchRes
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
              <div className="jrn-quotation-card-item" onClick={(e) => selectQuotation(e, item)}>
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
                      <div className={"price"}> {quotationLoading ? "" : `?? ${item.price}`}</div>
                      {quotationLoading ? <Loading loadCenter={false} />
                        :
                        (
                          <button
                            className={`button ${Number(quotation.carId) === Number(carsTypesObject[item.carId].id) ? "selected-quotation-button" : ""}`}>
                            {Number(quotation.carId) === Number(carsTypesObject[item.carId].id) ? "Selected" : "Select"}
                          </button>
                        )}
                      <p className={"enjoy_travel"}> {quotationLoading ? "" : `Enjoy Travel`}</p>
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
  constructor(props) {
    super(props);
    this.state = { id: 0, postCodeAddress: "", whichItemSelected: this.props.whichItemSelected, };
  }

  onchangeHandlerInput = (e, pickOrDrop) => {
    let { name, value } = e.target
    if (value.includes('"') || value.includes(`'`) || value.includes('/') || value.includes('\\')) return

    let { id, postCodeAddress, whichItemSelected } = this.state
    let postCodeDetails = { id, postCodeAddress }

    if (name === "id") {
      let id = Number(e.target.options[e.target.selectedIndex].getAttribute("id"))
      this.setState({ id, postCodeAddress: value })
      postCodeDetails = { ...postCodeDetails, id, postCodeAddress: value }
    } else {
      this.setState({ postCodeAddress: value, id: 0 })
      postCodeDetails = { ...postCodeDetails, postCodeAddress: value, id: 0 }
    }
    window.journeyDetailsUpdateFormDispatch.onchangeItemDetails(postCodeDetails, pickOrDrop, whichItemSelected, 5)
  }
  render() {
    let postcodes = [];
    let { item, index, objectDetailStatuses, postCodeAddress } = this.props;
    postcodes = postCodeAddress.filter((codes) => item.postcode === codes.postcode && codes.addresses);
    return (
      <div>
        {/* //!pick up section  */}
        {item.pcatId === 5 && index === 0 && (
          <div className="editable-selected-inputs">
            {objectDetailStatuses[5].postCodeDetails.id.pickup === 1 && (
              <SelectBox
                name="id"
                value={""}
                fromPoints={true}
                icon={icons.thumbtack}
                title="Postcode Address"
                defaultValue={this.state.id}
                placeholder="add a new adress if not listed "
                data={postcodes[0] ? postcodes[0].addresses : []}
                onChange={(e) => this.onchangeHandlerInput(e, 0)}
                classNameImg="icon_selectedPoints_selectbox-post-code"
              />
            )}
            {this.state.id === 0 ? objectDetailStatuses[5].postCodeDetails.postCodeAddress.pickup === 1 && (
              <TextArea
                icon={icons.idBadge}
                fromBooking={true}
                name="postCodeAddress"
                title="Adress Description *"
                onChange={(e) => this.onchangeHandlerInput(e, 0)}
                value={this.state.postCodeAddress ? this.state.postCodeAddress : item.postCodeDetails.postCodeAddress}
                errorMessage={item.postCodeDetails.postCodeAddress ? "" : !this.state.postCodeAddress ? "required" : ""}
              />) : null}
          </div>
        )}
        {/* //!drop off section  */}
        {item.pcatId === 5 && index === 1 && (
          <div className="editable-selected-inputs">
            {objectDetailStatuses[5].postCodeDetails.id.dropoff === 1 && (
              <SelectBox
                name="id"
                fromPoints={true}
                icon={icons.thumbtack}
                title="Postcode Address"
                defaultValue={this.state.id}
                placeholder="add a new adress if not listed"
                data={postcodes[0] ? postcodes[0].addresses : []}
                onChange={(e) => this.onchangeHandlerInput(e, 1)}
                classNameImg="icon_selectedPoints_selectbox-post-code"
              />
            )}
            {this.state.id === 0 ? objectDetailStatuses[5].postCodeDetails.postCodeAddress.dropoff === 1 && (
              <TextArea
                fromBooking={true}
                icon={icons.idBadge}
                name="postCodeAddress"
                title="Adress Description *"
                onChange={(e) => this.onchangeHandlerInput(e, 1)}
                value={this.state.postCodeAddress ? this.state.postCodeAddress : item.postCodeDetails.postCodeAddress}
                errorMessage={item.postCodeDetails.postCodeAddress ? "" : !this.state.postCodeAddress ? "required" : ""}
              />) : null}
          </div>
        )}
      </div>
    );
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
            {objectDetailStatuses[7]["address-description"].pickup === 2 && (
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
        {item.pcatId === 7 && index === 1 && objectDetailStatuses[7]["address-description"].dropoff === 2 && (
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
            {objectDetailStatuses[8]["address-description"].pickup === 2 && (
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
        {item.pcatId === 8 && index === 1 && objectDetailStatuses[8]["address-description"].dropoff === 2 && (
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
            {objectDetailStatuses[9]["address-description"].pickup === 2 && (
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
        {item.pcatId === 9 && index === 1 && objectDetailStatuses[9]["address-description"].dropoff === 2 && (
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
            {objectDetailStatuses[10]["address-description"].pickup === 2 && (
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
        {item.pcatId === 10 && index === 1 && objectDetailStatuses[10]["address-description"].dropoff === 2 && (
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
                  <option key={i} value={i + 1}>
                    {`${i + 1}`}
                  </option>
                );
              })
              : data.map((d, i) => {
                return (
                  <option
                    key={i}
                    selected={Number(d.value.split(" ")[0]) === Number(defaultValue) || Number(d.id) === Number(defaultValue)}
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
class BookingLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // reservationId: "683527",//stripre
      // email: "elgun.ezmemmedov@gmail.com",//stripre
      reservationId: "671836",
      email: "elgun.ezmemmedov@mail.ru",
      //671836
      //elgun.ezmemmedov@mail.ru
      error: "",
      loading: false,
    };
  }

  //!fecth reservation details
  checkReservationDetails(e) {
    e.preventDefault();
    if (this.state.loading === false) {
      this.setState({ error: "", loading: true }, () => {
        let eM = "incorrect registered details";
        let { email, reservationId } = this.state;
        let requestBody = { method: "POST", body: JSON.stringify({ reservationId, email }), headers: { "Content-Type": "application/json" }, };

        fetch(`${__env.apiDomain}/api/v1/reservation/find-details`, requestBody)
          .then((res) => res.json())
          .then((res) => {
            if (res.status === 200) {
              let { data } = res;
              window.manageBookingDispatch.onSuccessLogin(data, reservationId);
            } else {
              this.setState({ error: eM, loading: false });
            }
          })
          .catch(
            (error) => {
              this.setState({ error: error.message, loading: false });
              window.manageBookingDispatch.alertMessage("", error.message);
            }
          );
        setTimeout(() => {
          this.setState({ error: "" });
        }, 5000);
      });
    }
  }
  render() {
    let { email, reservationId, error, loading } = this.state;

    return (
      <div className="tmb-login-section">
        <div className={"tmb-login-content"}>
          <div className={"tmb-login-content-logo-imagee"}>
            <img src={`${__env.websiteLogUrl}`} alt="" />
          </div>

          <form onSubmit={(e) => this.checkReservationDetails(e)} method="POST">
            <div className="tmb-form-control">
              <div className="tmb-form-control-header">
                <p className={"tmb-form-control-header-label"}>Email</p>
              </div>

              <div className="tmb-input-div">
                <img className="tmb-form-icon" src={icons.at} alt="" />
                <input type="text" name="email" value={email} placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} className={`tmb-input `} />
              </div>
            </div>
            <div className="tmb-form-control">
              <div className="tmb-form-control-header">
                <p className={"tmb-form-control-header-label"}>ReservationId</p>
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
        <h1 class="psg-referenceId">
          Referance Id {this.props.reservationDetails.id}
        </h1>
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
      Number(transferDetails.passengersNumber) !== Number(passengersNumber)
    ) {
      isUpdated = true;
    }
    if (isUpdated) {
      passengerDetails = { ...passengerDetails, email, firstname, phone };
      transferDetails = { ...transferDetails, passengersNumber: Number(passengersNumber) };

      let params = { passengerDetails, transferDetails };
      let callback = () => {
        this.setState({ loading: false }, () => {
          this.props.onSave();
        });
      };
      this.setState({ loading: true }, () => {
        window.manageBookingDispatch.saveNewPassengerDetails(params, callback);
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
              Cancel
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
              value={this.state.passengersNumber}
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
            description={
              (this.props.paymentDetails.paymentType === 1 &&
                "Pay With Cash To Driver") ||
              (this.props.paymentDetails.paymentType === 2 &&
                "Pay With Credit Card") ||
              (this.props.paymentDetails.paymentType === 6 &&
                "Pay With American Express") ||
              (this.props.paymentDetails.paymentType === 7 && "Pay With Stripe")
            }
            className={false}
            icon={icons.circle}
          />

          <DetailsGridLi title="Price" description={`??${this.props.quotation.price}`} className={false} icon={icons.circle} />
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
      selectedPickupPoints: this.props.selectedPickupPoints,
      selectedDropoffPoints: this.props.selectedDropoffPoints,
      transferDateTimeString: this.props.transferDateTimeString,
      hour: this.props.transferDateTimeString.split(" ")[1].split(":")[0],
      minute: this.props.transferDateTimeString.split(" ")[1].split(":")[1],
    };
  }
  onCancel() {
    if (typeof this.props.onCancel === "function") {
      this.props.onCancel()
      window.manageBookingDispatch.onCancelJourneyDetails(JSON.parse(localStorage.getItem("reservation")))
    }
  }

  //!case 1 => wetherEffectedPriceButSTillDoesntChangeTheMethod
  //*=>also it means updated already happened so we dont check isUpdated
  wetherEffectedPriceButSTillDoesntChangeTheMethod() {

    let isUpdated = false;
    let {
      quotation: quot,
      specialRequests: requuest,
      transferDateTimeString: date,
      selectedPickupPoints: pickUps,
      selectedDropoffPoints: dropOff,
    } = this.props

    let {
      quotation,
      specialRequests,
      transferDateTimeString,
      selectedDropoffPoints,
      selectedPickupPoints,
    } = this.state

    let propsValues = JSON.stringify({
      quotatin: quot,
      specialRequests: requuest,
      transferDateTimeString: date,
      selectedDropOffPoints: dropOff,
      selectedPickUpPoints: pickUps
    })
    let stateValues = JSON.stringify({
      quotation,
      specialRequests,
      transferDateTimeString,
      selectedDropoffPoints,
      selectedPickupPoints,
    })
    if (propsValues !== stateValues) {
      isUpdated = true;

    }

    if (isUpdated) {
      console.log(isUpdated);
      let callback = () => {
        this.setState({ updatedLoading: false }, () => { this.props.onSave(); });
      };
      this.setState({ updatedLoading: true }, () => {
        let params = JSON.parse(stateValues)
        window.manageBookingDispatch.saveStillWantsToDoesntChangePayment(params, callback);
      });
    } else {
      this.props.onSave();
    }
  }

  //!case 2 he/she edited journeydetails and wants to finish payment with cash
  //*=> (will trigger componentDidUpdate to check statusof payment)
  itisCashAndWantsToPayByStripeCard(type) {
    let { quotation, passengerEmail, stripeIframeAndTokenInCaseCash } = this.state
    let method = "POST"
    let quotations = [quotation]
    let headers = { "Content-Type": "application/json", }
    let body = JSON.stringify({ quotations, type, language: "en", passengerEmail, mode: "sandbox" })
    let config = { method, headers, body };
    let url = `${__env.apiDomain}/api/v1/payment/stripe/create`;
    try {
      if (!stripeIframeAndTokenInCaseCash) {
        this.setState({ payStripeLoadingInCaseCash: true }, () => {
          fetch(url, config)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.status === 200) {
                this.setState({ payStripeLoadingInCaseCash: false, stripeIframeAndTokenInCaseCash: data })
              } else {
                this.setState({ payStripeLoadingInCaseCash: false, stripeIframeAndTokenInCaseCash: "" })
                window.manageBookingDispatch.alertMessage("", "Request Error Try contact with us ")
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
  paySubChargeWithStripe(type) {
    let { paymentToken, quotation } = this.state

    let method = "POST"
    let newQuotation = [quotation]
    let oldQuotation = [this.props.quotation]
    let headers = { "Content-Type": "application/json", }
    let url = `${__env.apiDomain}/api/v1/payment/stripe/charges`;
    let body = JSON.stringify({ oldQuotation, newQuotation, type, paymentToken })
    let config = { method, headers, body }

    try {
      fetch(url, config)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            this.setState({ payStripeLoadingInCaseCash: false, stripeIframeAndTokenInCaseCash: data })
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
  addExtraInputForJourney(e, pickOrDrop) {
    if (pickOrDrop === 0) {
      this.setState({ addExtraPointTextPickUp: false, inputPickUpShowStatus: true, });
    } else {
      this.setState({ addExtraPointTextDropOff: false, inputDropOffShowStatus: true, });
    }
  }
  fetchSuggestions(inpValue, index) {
    this.setState(
      index === 0 ? { getPickUpSuggestLoading: true } : { getDropOffSuggestLoading: true },
      () => {
        const url = `${__env.apiDomain}/api/v1/suggestions`;
        const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            value: inpValue,
            "session-token": "",
          }),
        };
        fetch(url, config)
          .then((res) => res.json())
          .then((data) => {
            if (index === 0) {
              this.setState({
                dropOffSuggestions: [],
                getPickUpSuggestLoading: false,
                getDropOffSuggestLoading: false,
                pickUpSuggestions: [data.result],
              })
            } else {
              this.setState({
                pickUpSuggestions: [],
                getPickUpSuggestLoading: false,
                getDropOffSuggestLoading: false,
                dropOffSuggestions: [data.result],
              })
            }
          })
          .catch((error) => {
            console.log(error)
            this.setState({ getDropOffSuggestLoading: false, getPickUpSuggestLoading })
          }
          );
      })
  }
  //lhr => suggestion comes
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
  onChangeDateSpecialRequest(e) {
    //date picker =>  {/* //2022-12-29 */ }
    let { name, value } = e.target;
    if (value.includes('"') || value.includes(`'`) || value.includes('/') || value.includes('\\')) return

    let { selectedPickupPoints, selectedDropoffPoints, transferDateTimeString } = this.state
    if (name === "transferDateTimeString") {
      let minute = transferDateTimeString.split(" ")[1].split(":")[1]; //00   15 20 25
      let hour = transferDateTimeString.split(" ")[1].split(":")[0]; //1 2 3 4 5 6
      transferDateTimeString = `${value} ${hour}:${minute}`
      let params = { selectedPickupPoints, selectedDropoffPoints, transferDateTimeString }
      this.getQuotations(params)
      this.setState({ transferDateTimeString })
    } else {
      this.setState({ [name]: value });
    }


  }
  //has sended to timePicker comp as a props
  setHourOrMinute = (e, name) => {
    let value = e.target.innerText
    let { selectedPickupPoints, selectedDropoffPoints, transferDateTimeString } = this.state
    let date = transferDateTimeString.split(" ")[0]; //2022-04-18
    let minute = transferDateTimeString.split(" ")[1].split(":")[1]; //00   15 20 25
    let hour = transferDateTimeString.split(" ")[1].split(":")[0]; //1 2 3 4 5 6
    if (name === 'hour') {
      transferDateTimeString = `${date} ${value}:${minute}`
      this.setState({ hour: value, transferDateTimeString })
    } else {
      transferDateTimeString = `${date} ${hour}:${value}`;
      this.setState({ minute: value, transferDateTimeString })
    }
    let params = { selectedPickupPoints, selectedDropoffPoints, transferDateTimeString }
    this.getQuotations(params)
  }

  //!Step2 addItem to the list
  addItemToListPart2(point, index, type) {
    let { selectedPickupPoints, selectedDropoffPoints } = this.state;
    if (index === 0) selectedPickupPoints = [...selectedPickupPoints, point];
    if (index === 1) selectedDropoffPoints = [...selectedDropoffPoints, point];
    //update automatically quotation
    let { transferDateTimeString } = this.state;
    let params = { selectedPickupPoints, selectedDropoffPoints, transferDateTimeString }
    this.getQuotations(params)
    this.setState({ selectedPickupPoints, selectedDropoffPoints });

  }
  //has sended to handleSearch comp as a props //!Step1 addItem to the list
  handleAddItemToSelectList = (item, objDetails, index, type) => {
    const method = "POST"
    const headers = { "Content-Type": "application/json", }

    if (item.pcatId === 10) {
      const body = JSON.stringify({ point: item })
      const url = `${__env.apiDomain}/api/v1/google-places`;
      const config = { method, headers, body };
      //request for google place and add item to the list
      fetch(url, config)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            let point = { ...data.point, ...objDetails };
            this.addItemToListPart2(point, index, type)
            window.journeyDetailsUpdateFormDispatch.removeAddInputField(index)
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (item.pcatId === 5) {
      const url = `${__env.apiDomain}/api/v1/postcode-address`;
      const body = JSON.stringify({ postcodes: [item.postcode] })
      const config = { method, headers, body };
      //request forpost codes
      fetch(url, config)
        .then((res) => res.json())
        .then((data) => {
          if (data.status) window.reaervationDetailsDispatch.setSelectedPostCode(data.results[0]);
        })
        .catch((error) => {
          console.log(error);
        });
      let point = { ...item, ...objDetails };
      this.addItemToListPart2(point, index, type)
      window.journeyDetailsUpdateFormDispatch.removeAddInputField(index)
    }
    if (item.pcatId !== 10 && item.pcatId !== 5) {
      let point = { ...item, ...objDetails };
      this.addItemToListPart2(point, index, type)
      window.journeyDetailsUpdateFormDispatch.removeAddInputField(index)
    }
  }
  deleteItemFromList = (pickOrDropPoint, indexOfCurrentItem) => {
    let { selectedPickupPoints, selectedDropoffPoints } = this.state;
    if (pickOrDropPoint === 0) selectedPickupPoints.splice(indexOfCurrentItem, 1);
    if (pickOrDropPoint === 1) selectedDropoffPoints.splice(indexOfCurrentItem, 1);
    let { transferDateTimeString } = this.state;

    //update automatically quotation
    let params = { selectedPickupPoints, selectedDropoffPoints, transferDateTimeString }
    this.getQuotations(params)
  }
  selectQuotation = (e, item) => this.setState({ quotation: item, currentPrice: item.price })

  getQuotations(params = {}) {
    let { selectedPickupPoints, selectedDropoffPoints, transferDateTimeString } = params
    this.setState({ quotationLoading: true }, () => {
      const url = `${__env.apiDomain}/api/v1/quotation`;
      const method = "POST";
      const headers = { "Content-Type": "application/json" };
      const body = JSON.stringify({ selectedPickupPoints, selectedDropoffPoints, transferDateTimeString, });
      const configTransfer = { method, headers, body };
      fetch(url, configTransfer)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            this.setState({ quotations: data.quotationOptions })
            let selectedQuotaion = data.quotationOptions.filter((quot) => quot.carId === this.state.quotation.carId)[0]
            this.selectQuotation("", selectedQuotaion)
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

  componentDidMount() {
    let { selectedPickupPoints, selectedDropoffPoints, transferDateTimeString } = this.state;
    let params = { selectedPickupPoints, selectedDropoffPoints, transferDateTimeString }
    this.getQuotations(params);
    window.journeyDetailsUpdateFormDispatch = {
      removeAddInputField: (index) => {
        if (index === 0) {
          this.setState({
            pickUpPointInput: "",
            pickUpSuggestions: [],
            inputPickUpShowStatus: false,
            addExtraPointTextPickUp: true,
          })
        }
        if (index === 1) {
          this.setState({
            dropOffPointInput: "",
            dropOffSuggestions: [],
            inputDropOffShowStatus: false,
            addExtraPointTextDropOff: true,
          })

        }
      },
      onchangeItemDetails: (updatedValues, pickOrDrop, whichItem, pcatId) => {
        let { selectedPickupPoints, selectedDropoffPoints } = this.state

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
        this.setState({ selectedPickupPoints, selectedDropoffPoints })
      },
      setStripeIframeToNull: () => this.setState({ stripeIframeAndTokenInCaseCash: "" })
    }
  }

  //it will triggered whenver we we have websocektToken
  componentDidUpdate(prevProps, prevState) {
    let { quotation, specialRequests, transferDateTimeString, selectedDropoffPoints, selectedPickupPoints, stripeIframeAndTokenInCaseCash, } = this.state
    let params = { quotation, specialRequests, transferDateTimeString, selectedDropoffPoints, selectedPickupPoints }
    let { webSocketToken, href } = stripeIframeAndTokenInCaseCash

    let interVal;
    let seconds = 2000
    let method = "POST"
    let url = `${__env.apiDomain}/api/v1/payment/status`;
    let headers = { "Content-Type": "application/json", }
    let body = JSON.stringify({ token: webSocketToken })
    let config = { method, headers, body };
    let callback = () => { this.props.onSave() };

    if (webSocketToken) {
      interVal = setInterval(async () => {
        try {
          let req = await fetch(url, config);
          let resp = await req.json();
          console.log(resp, "/api/v1/payment/status    response");

          if (resp.status === 200) {
            //we r checking here in order to be sure it is stripe payment or not In future we can add more payments
            if (href.includes("stripe")) {
              window.manageBookingDispatch.setPaymentTokenAndEditReservation(resp.data, callback, params)
            } else {
              window.manageBookingDispatch.alertMessage("", "Something went wrong Try contact with us")
              this.setState({ stripeIframeAndTokenInCaseCash: "" })
            }
            clearInterval(interVal);
          }
        } catch (error) {
          console.log(error);
        }
      }, seconds);
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
      quotation,
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
      selectedPickupPoints,
      selectedDropoffPoints,
      inputPickUpShowStatus,
      inputDropOffShowStatus,
      addExtraPointTextPickUp,
      getPickUpSuggestLoading,
      getDropOffSuggestLoading,
      addExtraPointTextDropOff,
    } = this.state;
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
    // console.log(Number(currentPrice) <= Number(previousPrice));
    // console.log(Number(currentPrice), Number(previousPrice));

    return (
      <div className="editable-jrn-details">
        {/* header */}
        <div className="editable-jrn-header">
          <h3>Journey Details</h3>
          <div className="editable-buttons" id="notcashing">
            <button onClick={() => this.onCancel()} className="tmb-cancel-btn tmb-btn-primary-outlined fw_500 tmb-btn" >
              Cancel
            </button>
            {
              paymentType !== 1 && Number(currentPrice) <= Number(previousPrice) || paymentType === 1 ?
                (
                  selectedPickupPoints.length > 0 && selectedDropoffPoints.length > 0 ?
                    <button
                      onClick={
                        updatedLoading ? () => { } :
                          () => this.wetherEffectedPriceButSTillDoesntChangeTheMethod()}
                      className=" tmb-btn-primary-outlined fw_500 tmb-btn" >
                      {updatedLoading ? "Loading" : "Save"}
                    </button>
                    :
                    ""
                )
                : ""
            }
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
            selectQuotation={this.selectQuotation}
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
        {/* {quotations.length > 0 && Number(currentPrice) - Number(previousPrice) > 0 &&
          <div class="informative-subcharges-div">
            <img src={__env.infoAlert} alt="" />
            <div class="informative-subcharge-price-info ">
              <p id="informationMessage">Due to the amendments you have made;</p>
              <p id="informationMessage">New Journey price : ?? {currentPrice}</p>
              <p id="informationMessage">Previous journey price : ?? {`${previousPrice}.00`}</p>
              <p id="informationMessage" className="difference-price">Price difference : ?? {`${+currentPrice - +previousPrice}.00`}</p>
            </div>
          </div>} */}
        {/* //!if it is cash payment and updated effected to the price then we should  keep charge on that    */}
        {/* {quotations.length > 0 && paymentType === 1 &&
          <div className="jrn-py-btn-div">
            <button className="tmb-btn tmb-button-primary-outlined-hover" onClick={() => this.itisCashAndWantsToPayByStripeCard(7)}>
              {payStripeLoadingInCaseCash ? "Loading.." : "Pay by card"}
            </button>
          </div>} */}
        {/* if we have subchrage it will work  and will show off on the screen  */}
        {quotations.length > 0 && paymentType !== 1 && Number(currentPrice) - Number(previousPrice) > 0 &&
          <div className="jrn-py-btn-div">
            <button className="tmb-btn tmb-button-primary-outlined-hover" onClick={() => this.paySubChargeWithStripe(7)}>
              {payStripeLoadingInCaseCash ? "Loading.." : "Pay by card"}
            </button>
          </div>}
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
      postCodeAddress: []
    };
  }

  //!case 0 It is cash payment and he wants to change payment directly to card
  payByStripe(type) {
    //get quotaion from state after clicking to save button
    let { reservation, stripeIframeAndTokenInCaseCash } = this.state
    let { quotation, passengerDetails: { email } } = reservation
    let method = "POST"
    let quotations = [quotation]
    let headers = { "Content-Type": "application/json", }
    let body = JSON.stringify({ quotations, type, language: "en", passengerEmail: email, mode: "sandbox" })
    let config = { method, headers, body }; cal
    let url = `${__env.apiDomain}/api/v1/payment/stripe/create`;

    try {
      if (!stripeIframeAndTokenInCaseCash) {
        this.setState({ payStripeLoadingInCaseCash: true }, () => {
          fetch(url, config)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);

              if (data.status === 200) {
                this.setState({ payStripeLoadingInCaseCash: false, stripeIframeAndTokenInCaseCash: data })
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
    let reservationId = (JSON.parse(localStorage["reservationId"]));
    let { passengerDetails: { email } } = (JSON.parse(localStorage["reservation"]));
    // const url = `${__env.apiDomain}/api/v1/reservation/mail/${reservationId}`
    const url = `https://api.london-tech.com/api/v1/reservation/mail/${reservationId}`
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = { method: 'GET', headers: myHeaders, redirect: 'follow' };
    console.log(email);



    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);

        if (result.status === 200) {
          let emailOptions = {
            method: "POST",
            body: JSON.stringify({
              senderId: 1,
              reciverMails: [email],
              subject: `Booking ${reservationId} ${__env.emailSubjectUrl}`,
              mailContent: result.data.template,
            }),
            headers: { "Content-Type": "application/json" },
          };
          fetch(`https://api.london-tech.com/tools/mailer`, emailOptions)
            .then((res) => {
              console.log(res, "email");
              if (res.status === 200) {
                console.log("done");
                window.manageBookingDispatch.alertMessage("Email sent successfully", "")
              } else {
                window.manageBookingDispatch.alertMessage("", "Request Error Try contact with us ")
              }
            })
            .catch((e) => console.log(e.message));

        }
      }).catch(error => console.log('error', error));




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
        console.log(data);
        if (data.status) this.setState({ postCodeAddress: data.results });
      })
      .catch((error) => { console.log(error); });
  }
  //here we dont need selected points transferdatetime .Cause it alread on the screen
  componentDidUpdate(prevProps, prevState) {
    let { stripeIframeAndTokenInCaseCash, reservation } = this.state
    let { webSocketToken, href } = stripeIframeAndTokenInCaseCash

    let {
      quotation,
      selectedPickupPoints,
      selectedDropoffPoints,
      transferDetails: { transferDateTimeString, specialRequests },
    } = reservation
    let params = { quotation, specialRequests, transferDateTimeString, selectedDropoffPoints, selectedPickupPoints }
    let interVal;
    let seconds = 2000
    let method = "POST"
    let url = `${__env.apiDomain}/api/v1/payment/status`;
    let headers = { "Content-Type": "application/json", }
    let body = JSON.stringify({ token: webSocketToken })
    let config = { method, headers, body };
    let callback = () => { };

    if (webSocketToken) {
      interVal = setInterval(async () => {
        try {
          let req = await fetch(url, config);
          let resp = await req.json();
          if (resp.status === 200) {
            //we r checking here in order to be sure it is stripe payment or not In future we can add more payments
            if (href.includes("stripe")) {
              window.manageBookingDispatch.setPaymentTokenAndEditReservation(resp.data, callback, params)
            } else {
              window.manageBookingDispatch.alertMessage("", "Something went wrong Try contact with us")
              this.setState({ stripeIframeAndTokenInCaseCash: "" })
            }
            clearInterval(interVal);
          }
        } catch (error) {
          console.log(error);
        }
      }, seconds);
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
    let { payStripeLoadingInCaseCash, stripeIframeAndTokenInCaseCash, postCodeAddress, checkFor24 } = this.state
    let { reservation, resources: { carsTypes, pointTypeCategories }, eM, sM } = this.props;
    let carsTypesObject = Object.assign({}, ...carsTypes.map((obj) => ({ [obj.id]: obj })));
    let imageTypesObject = Object.assign({}, ...pointTypeCategories.map((obj) => ({ [obj.id]: obj.image })));
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
              transferDetails={reservation.transferDetails}
              maxPax={carsTypesObject[quotation.carId].pax}
              passengerDetails={reservation.passengerDetails}
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
            your transfer time. Please call us on 0 20 8688 7744 if
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
                    <div className={"rsv-payment-details-left-btn-div"}>
                      <button className=" tmb-btn tmb-btn-primary" onClick={() => this.payByStripe(7)}>
                        {payStripeLoadingInCaseCash ? "Loading.." : "Pay by card"}
                      </button>
                      <br />
                    </div>
                )}
                <a target="_blank" className={"rsv-payment-details-left-proceed"}>
                  <img src={icons.check} alt="" />
                  By proceeding, you agree to our terms and conditions
                </a>

                <a className={"rsv-payment-details-left-click-tag"}>
                  <img src={icons.arrowRight} alt="" />
                  <span>Please click here to read it.</span>
                </a>
              </div>

              <div className={"rsv-payment-details-right"}>
                <p className={"rsv-payment-details-right-text"}>Total Price</p>
                <span className={"rsv-payment-details-right-number"}>
                  ??{quotation.price}
                </span>
              </div>
            </div>
            <div className="rsv-print-email-div rsv-payment-details-header">
              <button className="tmb-btn tmb-btn-primary">
                Print Booking Details
              </button>
              <button onClick={(e) => this.sendBookingAsEmail()} className="tmb-btn tmb-btn-primary">
                Send Booking Details As Email
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

class ManageBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sM: "",//succesMessage
      eM: "",//errorMessage
      resources: {},
      isAuth: false,
      showState: false,
      reservation: {},
    };
  }
  componentDidMount() {
    this.getResources();
    window.manageBookingDispatch = {
      onSuccessLogin: (reservation, reservationId) => {
        localStorage["reservationId"] = JSON.stringify(reservationId);
        this.setState({ reservation, isAuth: true });
      },
      saveNewPassengerDetails: async (params = {}, callback = () => { }) => {
        let { passengerDetails, transferDetails } = params;
        let { reservation } = this.state;
        reservation.transferDetails = { ...reservation.transferDetails, ...transferDetails };
        reservation.passengerDetails = { ...reservation.passengerDetails, ...passengerDetails };
        console.log(reservation);

        let fetchRes = await apiV1ReservationEdit(reservation, this.props)
        console.log(fetchRes, typeof callback);
        if (fetchRes.status === 200) {
          callback(fetchRes);
          window.manageBookingDispatch.alertMessage("Passenger Details Updated", "")
          localStorage["reservation"] = JSON.stringify(reservation);
        }
      },

      saveStillWantsToDoesntChangePayment: async (params = {}, callback = () => { }) => {
        let { quotation, specialRequests, selectedPickupPoints, selectedDropoffPoints, transferDateTimeString } = params;
        let { reservation } = this.state;
        // console.log(reservation, "which didnot updated");
        reservation.quotation = quotation
        reservation.selectedPickupPoints = selectedPickupPoints
        reservation.selectedDropoffPoints = selectedDropoffPoints
        reservation.transferDetails = { ...reservation.transferDetails, transferDateTimeString, specialRequests }

        // console.log(params);
        // console.log(reservation, "updated");


        let fetchRes = await apiV1ReservationEdit(reservation, this.props)

        console.log(fetchRes, typeof callback, "saveStillWantsToDoesntChangePayment");
        if (fetchRes.status === 200) {
          callback(fetchRes);
          window.manageBookingDispatch.alertMessage("Passenger Details Updated", "")
          localStorage["reservation"] = JSON.stringify(reservation);
          this.setState(reservation)
        } else {
          window.manageBookingDispatch.alertMessage("", "Something went wrong please contact with us")
        }

      },
      alertMessage: (sM, eM) => {
        this.setState({ sM, eM })
        setTimeout(() => { this.setState({ sM: "", eM: "" }) }, 4000);
      },
      setPaymentTokenAndEditReservation: async (response, callback = () => { }, params = {}) => {
        //this callback will trigger to changeeditstatus to true if payment happened successfully
        //when he/she is on the main page
        let { reservation } = this.state
        let { paymentTypeId: paymentType, token } = response
        let { quotation, specialRequests, selectedPickupPoints, selectedDropoffPoints, transferDateTimeString } = params;
        reservation.quotation = quotation
        reservation.selectedPickupPoints = selectedPickupPoints
        reservation.selectedDropoffPoints = selectedDropoffPoints
        reservation.paymentDetails = { ...reservation.paymentDetails, paymentType, token }
        reservation.transferDetails = { ...reservation.transferDetails, transferDateTimeString, specialRequests }

        let fetchRes = await apiV1ReservationEdit(reservation, this.props)

        console.log(fetchRes, reservation, typeof callback, "setPaymentTokenAndEditReservation");

        if (fetchRes.status === 200) {
          this.setState({ reservation })
          callback()
          window.manageBookingDispatch.alertMessage("Payment Updated Successfully", "")
          localStorage["reservation"] = JSON.stringify(reservation);
        } else {
          window.manageBookingDispatch.alertMessage("", "Something went wrong please contact with us")
        }
        window.reaervationDetailsDispatch.setStripeIframeToNull()
      },
      onCancelJourneyDetails: (reservation) => {
        this.setState({ reservation })
      }
    };
  }
  getResources() {
    const url = `${__env.apiDomain}/app/en`;
    const config = { method: "GET", };
    fetch(url, config)
      .then((res) => res.json())
      .then((data) => {
        let { carsTypes, pointTypeCategories } = data;
        // check-point -> remove iaAuth in production mode
        this.setState({
          resources: { carsTypes, pointTypeCategories },
          // isAuth: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    let { sM, eM, isAuth, resources, showState, reservation, } = this.state;

    return (
      <div className="tool-manage-booking" mode="dark">
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: "silver",
            zIndex: 1000,
          }}
        >
          <button onClick={(e) => this.setState({ showState: !showState })}>
            state
          </button>
          {showState ? (
            <pre
              style={{
                width: 600,
                height: 600,
                overflow: "auto",
              }}
            >
              {JSON.stringify(this.state, null, 2)}
            </pre>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </div>
        {isAuth ? (
          <ReservationDetails eM={eM} sM={sM} resources={resources} reservation={reservation} />
        ) : (
          <BookingLogin />
        )}
      </div>
    );
  }
}
(() => {
  let insrter = setInterval(() => {
    if (document.getElementById("manageBookingDemo")) {
      ReactDOM.render(
        React.createElement(ManageBooking, {
          "user-id": 490,
          "x-auth-token": "24610b048c20464f0ca1aefbcab94c2c",
        }),
        document.getElementById("manageBookingDemo")
      );
      console.log("render is done");
      clearInterval(insrter);
    } else { console.log("not render yet"); }
  }, 100);
})();
