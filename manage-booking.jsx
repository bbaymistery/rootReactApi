const __env = {
  apiDomain: "https://api.london-tech.com",
  websiteLogUrl: "https://heathrow-gatwick-transfers.com/images/logoJpg.png",
};
const icons = {
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

class CheckForFlight extends React.Component {
  render() {
    let { item, index, objectDetailStatuses } = this.props;

    return (
      <div>
        {/* //!pick up section  */}
        {item.pcatId === 1 && index === 0 && (
          <div className="editable-selected-inputs">
            {objectDetailStatuses[1].flightDetails.flightNumber.pickup ===
              1 && (
              <TextInput
                title="Flight No"
                icon={icons.planeDeparture}
                type="text"
                name="flightNumber"
                value={"dasdas"}
                classNameImg="icon-inside-small-input"
                fromPoints={true}
              />
            )}
            {objectDetailStatuses[1].flightDetails.waitingPickupTime.pickup ===
              1 && (
              <SelectBox
                // valuw
                //onChange
                name="waitingPickupTime"
                title="When should the driver pick you up?"
                icon={icons.planeArrival}
                data={waitingMinutes}
                fromPoints={true}
                classNameImg="icon_selectedPoints_selectbox"
              />
            )}
          </div>
        )}
        {/* //!drop off section  */}
        {item.pcatId === 1 &&
          index === 1 &&
          objectDetailStatuses[1].flightDetails.flightNumber.dropoff === 2 && (
            <div className="editable-selected-inputs">
              <TextInput
                title="Flight No"
                icon={icons.planeArrival}
                type="text"
                name="flightNumber"
                value={"dsadas"}
                classNameImg="icon-inside-small-input"
                fromPoints={true}

                //onChange
              />
            </div>
          )}
      </div>
    );
  }
}
class CheckForCruises extends React.Component {
  render() {
    let { item, index, objectDetailStatuses } = this.props;

    return (
      <div>
        {/* //!pick up section  */}
        {item.pcatId === 2 && index === 0 && (
          <div className="editable-selected-inputs">
            {objectDetailStatuses[2].cruiseNumber.pickup === 1 && (
              <TextInput
                title="Cruise Name"
                type="text"
                name="cruiseNumber"
                icon={icons.ship}
                value={"Cruise"}
                classNameImg="icon-inside-small-input"
                fromPoints={true}
              />
            )}
          </div>
        )}
        {/* //!drop off section  */}
        {item.pcatId === 2 &&
          index === 1 &&
          objectDetailStatuses[2].cruiseNumber.dropoff === 2 && (
            <div className="editable-selected-inputs">
              <TextInput
                title="Cruise Name"
                type="text"
                name="cruiseNumber"
                icon={icons.ship}
                value={"dsadas"}
                classNameImg="icon-inside-small-input"
                fromPoints={true}
                //onChange
              />
            </div>
          )}
      </div>
    );
  }
}
class CheckForTrain extends React.Component {
  render() {
    let { item, index, objectDetailStatuses } = this.props;

    return (
      <div>
        {/* //!pick up section  */}
        {item.pcatId === 3 && index === 0 && (
          <div className="editable-selected-inputs">
            {objectDetailStatuses[3].trainNumber.pickup === 2 && (
              <TextInput
                title="Train Number"
                type="text"
                name="trainNumber"
                icon={icons.train}
                value={"Train"}
                classNameImg="icon-inside-small-input"
                fromPoints={true}
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
                title="Train Number"
                type="text"
                name="trainNumber"
                icon={icons.train}
                value={"Trains"}
                classNameImg="icon-inside-small-input"
                fromPoints={true}
                //onChange
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
    this.state = {
      postCodeDetails: {
        id: 0,
        postCodeAddress: "",
      },
    };
  }

  render() {
    let postcodes = [];
    let { item, index, objectDetailStatuses, postCodeAddress } = this.props;

    postcodes = postCodeAddress.filter(
      (codes) => item.postcode === codes.postcode && codes.addresses
    );

    return (
      <div>
        {/* //!pick up section  */}
        {item.pcatId === 5 && index === 0 && (
          <div className="editable-selected-inputs">
            {objectDetailStatuses[5].postCodeDetails.id.pickup === 1 && (
              <SelectBox
                value={""}
                // onChange={(e) => onchangeHandler(e, 0, 0)}
                name="id"
                title="Postcode Address"
                icon={icons.thumbtack}
                placeholder="add a new adress if not listed "
                data={postcodes[0] ? postcodes[0].addresses : []}
                fromPoints={true}
              />
            )}
            {this.state.postCodeDetails.id === 0
              ? objectDetailStatuses[5].postCodeDetails.postCodeAddress
                  .pickup === 1 && (
                  <TextArea
                    value="text"
                    // onChange={(e) => onchangeHandler(e, 0, 0)}
                    title="Adress Description *"
                    name="postCodeAddress"
                    icon={icons.idBadge}
                    errorMessage={""}
                    fromBooking={true}
                    classNameImg="icon-inside-small-input"
                  />
                )
              : null}
          </div>
        )}
        {/* //!drop off section  */}
        {item.pcatId === 5 && index === 1 && (
          <div className="editable-selected-inputs">
            {objectDetailStatuses[5].postCodeDetails.id.dropoff === 1 && (
              <SelectBox
                value={""}
                // onChange={(e) => onchangeHandler(e, 0, 0)}
                name="id"
                title="Postcode Address"
                icon={icons.thumbtack}
                placeholder="add a new adress if not listed "
                data={postcodes[0] ? postcodes[0].addresses : []}
                fromPoints={true}
                classNameImg="icon_selectedPoints_selectbox-post-code"
              />
            )}
            {this.state.postCodeDetails.id === 0
              ? objectDetailStatuses[5].postCodeDetails.postCodeAddress
                  .dropoff === 1 && (
                  <TextArea
                    value="text"
                    // onChange={(e) => onchangeHandler(e, 0, 0)}
                    title="Adress Description *"
                    name="postCodeAddress"
                    icon={icons.idBadge}
                    errorMessage={""}
                    fromBooking={true}
                  />
                )
              : null}
          </div>
        )}
      </div>
    );
  }
}
class CheckPlaceOfInterest extends React.Component {
  render() {
    let { item, index, objectDetailStatuses } = this.props;

    return (
      <div>
        {/* //!pick up section  */}
        {item.pcatId === 7 && index === 0 && (
          <div className="editable-selected-inputs">
            {objectDetailStatuses[7]["address-description"].pickup === 2 && (
              <TextInput
                title="Places of Interest"
                type="text"
                name="address-description"
                icon={icons.idBadge}
                value={"Place interest"}
                classNameImg="icon-inside-small-input"
                fromPoints={true}
              />
            )}
          </div>
        )}
        {/* //!drop off section  */}
        {item.pcatId === 7 &&
          index === 1 &&
          objectDetailStatuses[7]["address-description"].dropoff === 2 && (
            <div className="editable-selected-inputs">
              <TextInput
                title="Places of Interest"
                type="text"
                name="address-description"
                icon={icons.idBadge}
                value={"Trains"}
                classNameImg="icon-inside-small-input"
                fromPoints={true}
                //onChange
              />
            </div>
          )}
      </div>
    );
  }
}
class CheckForCitites extends React.Component {
  render() {
    let { item, index, objectDetailStatuses } = this.props;

    return (
      <div>
        {/* //!pick up section  */}
        {item.pcatId === 8 && index === 0 && (
          <div className="editable-selected-inputs">
            {objectDetailStatuses[8]["address-description"].pickup === 2 && (
              <TextInput
                title="Cities"
                type="text"
                name="address-description"
                icon={icons.mapLocation}
                value={"cities"}
                classNameImg="icon-inside-small-input"
                fromPoints={true}
              />
            )}
          </div>
        )}
        {/* //!drop off section  */}
        {item.pcatId === 8 &&
          index === 1 &&
          objectDetailStatuses[8]["address-description"].dropoff === 2 && (
            <div className="editable-selected-inputs">
              <TextInput
                title="Cities"
                type="text"
                name="address-description"
                icon={icons.mapLocation}
                value={"Cities"}
                classNameImg="icon-inside-small-input"
                fromPoints={true}
                //onChange
              />
            </div>
          )}
      </div>
    );
  }
}
class CheckForUniversity extends React.Component {
  render() {
    let { item, index, objectDetailStatuses } = this.props;

    return (
      <div>
        {/* //!pick up section  */}
        {item.pcatId === 9 && index === 0 && (
          <div className="editable-selected-inputs">
            {objectDetailStatuses[9]["address-description"].pickup === 2 && (
              <TextInput
                title="Universities And Colleges"
                type="text"
                name="address-description"
                icon={icons.building}
                value={"UNIVERSITIES"}
                classNameImg="icon-inside-small-input"
                fromPoints={true}
              />
            )}
          </div>
        )}
        {/* //!drop off section  */}
        {item.pcatId === 9 &&
          index === 1 &&
          objectDetailStatuses[9]["address-description"].dropoff === 2 && (
            <div className="editable-selected-inputs">
              <TextInput
                title="Universities And Colleges"
                type="text"
                name="address-description"
                icon={icons.building}
                value={"Universitires"}
                classNameImg="icon-inside-small-input"
                fromPoints={true}
                //onChange
              />
            </div>
          )}
      </div>
    );
  }
}
class CheckForOther extends React.Component {
  render() {
    let { item, index, objectDetailStatuses } = this.props;

    return (
      <div>
        {/* //!pick up section  */}
        {item.pcatId === 10 && index === 0 && (
          <div className="editable-selected-inputs">
            {objectDetailStatuses[10]["address-description"].pickup === 2 && (
              <TextInput
                title="Description "
                type="text"
                name="address-description"
                icon={icons.locationArrow}
                value={"Other"}
                classNameImg="icon-inside-small-input"
                fromPoints={true}
              />
            )}
          </div>
        )}
        {/* //!drop off section  */}
        {item.pcatId === 10 &&
          index === 1 &&
          objectDetailStatuses[10]["address-description"].dropoff === 2 && (
            <div className="editable-selected-inputs">
              <TextInput
                title="Description "
                type="text"
                name="address-description"
                icon={icons.locationArrow}
                value={"Other"}
                classNameImg="icon-inside-small-input"
                fromPoints={true}
                //onChange
              />
            </div>
          )}
      </div>
    );
  }
}
// ;
class SelectBox extends React.Component {
  render() {
    let {
      value = "",
      onChange = (e) => {},
      name = "",
      title = "",
      icon = "",
      classNameImg = "",
      data,
      fromPoints = false,
      placeholder = false,
    } = this.props;

    return (
      <div className="editable-form-control">
        <div className="editable-form-control-header">
          <p className="editable-form-control-header-label">{title}</p>
        </div>
        <div className="editable-select-div">
          <img className={classNameImg} src={icon} alt="" />
          <img
            className={`
            editable-select-img-angle-down
            ${
              fromPoints
                ? "editable-select-img-angle-down-for-selectedPoints"
                : ""
            }`}
            src={icons.angleDown}
            alt=""
          />
          <select
            name={name}
            onChange={onChange}
            className={fromPoints ? "select-selected-points" : ""}
            defaultValue={value}
          >
            {placeholder && (
              <option value="" id={0}>
                {placeholder}
              </option>
            )}
            {Number(data)
              ? Array(data)
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
                    <option key={i} value={d.value} id={d.id && d.id}>
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
      value = "",
      onChange = (e) => {},
      name = "",
      title = "",
      icon = "",
      placeholder = "",
      type = "",
      errorMessage = "",
      classNameImg = "",
      fromPoints = false,
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
            className={`
            ${errorMessage ? "editable-error-input" : ""}
            ${fromPoints ? "input-selected-points" : ""}`}
          />
        </div>
      </div>
    );
  }
}
//inside passenger details
class TextArea extends React.Component {
  render() {
    let {
      value = "",
      onChange = (e) => {},
      name = "",
      icon,
      placeholder = "",
      errorMessage = "",
      title = "",
      fromPoints = false,
      classNameImg = "",
    } = this.props;

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
            className={`
            ${errorMessage ? "editable-error-input" : ""}
            ${fromPoints ? "input-selected-points" : ""}`}
            value={value}
          ></textarea>
        </div>
      </div>
    );
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
                  <ShowPointDescription
                    title="Fligth Number"
                    icon={icons.circle}
                    description={point.flightDetails.flightNumber}
                  />
                )}
                {point.pcatId === 1 && showWaiting && (
                  <ShowPointDescription
                    title="Waiting Pickup Time"
                    icon={icons.circle}
                    description={point.flightDetails.waitingPickupTime || "0"}
                  />
                )}
                {point.pcatId === 5 && (
                  <ShowPointDescription
                    title="Postcode Address"
                    icon={icons.circle}
                    description={point.postCodeDetails.postCodeAddress}
                  />
                )}
                {point.pcatId === 2 && (
                  <ShowPointDescription
                    title="Cruise Name"
                    icon={icons.circle}
                    description={point.cruiseNumber}
                  />
                )}
                {point.pcatId === 3 && (
                  <ShowPointDescription
                    title="Train Number"
                    icon={icons.circle}
                    description={point.trainNumber}
                  />
                )}
                {point.pcatId === 7 && point["address-description"] && (
                  <ShowPointDescription
                    title="Places of Interest"
                    icon={icons.circle}
                    description={point["address-description"]}
                  />
                )}
                {point.pcatId === 8 && point["address-description"] && (
                  <ShowPointDescription
                    title="Cities"
                    icon={icons.circle}
                    description={point["address-description"]}
                  />
                )}
                {/*  */}
                {point.pcatId === 9 && point["address-description"] && (
                  <ShowPointDescription
                    title="Universities And Colleges"
                    icon={icons.circle}
                    description={point["address-description"]}
                  />
                )}
                {point.pcatId === 10 && point["address-description"] && (
                  <ShowPointDescription
                    title="Description"
                    icon={icons.circle}
                    description={point["address-description"]}
                  />
                )}
              </div>
            );
          })}
        </div>
      </li>
    );
  }
}
class AlertMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sM: "", //succesMessage
      eM: "", //errorMessage
    };
  }
  componentDidMount() {
    window.alertMessageDispatch = {
      alertMessage: (sM, eM) => this.setState({ ...this.state, sM, eM }),
    };
    setTimeout(() => {
      this.setState({ ...this.state, sM: "", eM: "" });
    }, 4000);
  }

  render() {
    let { sM, eM } = this.state;

    return (
      <div className={"tmb-alert-container"}>
        <div
          className={`
          tmb-alert-div
          ${sM.length > 0 || eM.length > 0 ? "tmb-showAlert" : ""}
          ${eM.length > 0 ? "tmb-alert-div-error" : ""}
           `}
        >
          {/* check icon */}
          <img className="tmb-check-img" src={icons.check} alt="" />
          <span>{eM.length > 0 && eM}</span>
          <span>{sM.length > 0 && sM}</span>
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
      // email: "elgun.ezmemmedov@mail.ru",
      // reservationId: "671836",
      //
      email: "info@aplcars.com",
      reservationId: "678623",
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
        let requestBody = {
          method: "POST",
          body: JSON.stringify({ reservationId, email }),
          headers: { "Content-Type": "application/json" },
        };

        fetch(`${__env.apiDomain}/api/v1/reservation/find-details`, requestBody)
          .then((res) => res.json())
          .then((res) => {
            if (res.status === 200) {
              let { data } = res;
              window.manageBookingDispatch.onSuccessLogin(data);
            } else {
              this.setState({ error: eM, loading: false });
            }
          })
          .catch(
            (error) => {
              this.setState({ error: error.message, loading: false });
              window.alertMessageDispatch.alertMessage("", error.message);
            }
            //alert message
          );
        //reset Error message after showAlert is gone
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
                <input
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                  className={`tmb-input `}
                />
              </div>
            </div>
            <div className="tmb-form-control">
              <div className="tmb-form-control-header">
                <p className={"tmb-form-control-header-label"}>ReservationId</p>
              </div>
              <div className="tmb-input-div">
                <img
                  className="tmb-form-icon tmb-user-icon"
                  src={icons.user}
                  alt=""
                />
                <input
                  type="text"
                  name="reservationId"
                  value={reservationId}
                  placeholder="ReservationId"
                  onChange={(e) =>
                    this.setState({ reservationId: e.target.value })
                  }
                  className={`tmb-input `}
                />
              </div>
            </div>
            {error ? (
              <div className="tmb-login-error-div tmb-zoom-out">{error}</div>
            ) : (
              ""
            )}
            <div className={"tmb-input-button"}>
              <button
                className="tmb-btn  tmb-btn-primary"
                onClick={(e) => this.checkReservationDetails(e)}
              >
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
          <button
            onClick={() => this.props.onEdit()}
            className="tmb-btn-primary-outlined fw_500 tmb-btn"
          >
            Edit
          </button>
        </div>
        <div className="psg-column psg-first-column">
          <DetailsLi
            title="Full Name"
            icon={icons.user}
            className="fullname-img"
            description={`${this.props.passengerDetails.firstname} ${
              typeof this.props.passengerDetails.lastname === "string" &&
              this.props.passengerDetails.lastname.length > 0
                ? ` ${this.props.passengerDetails.lastname}`
                : ""
            }`}
          />
          <DetailsLi
            title="Email"
            icon={icons.at}
            description={this.props.passengerDetails.email}
          />
        </div>
        <div className="psg-column psg-second-column">
          <DetailsLi
            title="Number of Passengers"
            icon={icons.users}
            description={this.props.transferDetails.passengersNumber}
          />
          <DetailsLi
            title="Phone Number"
            icon={icons.phone}
            description={this.props.passengerDetails.phone}
          />
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
      firstname: this.props.passengerDetails.firstname,
      email: this.props.passengerDetails.email,
      phone: this.props.passengerDetails.phone,
      passengersNumber: this.props.transferDetails.passengersNumber,
      loading: false,
    };
  }
  onCancel() {
    if (typeof this.props.onCancel === "function") {
      this.props.onCancel();
    }
  }
  onSave() {
    let { passengerDetails, transferDetails } = this.props;
    let { email, firstname, phone, passengersNumber } = this.state;
    let isUpdated = false;
    if (
      passengerDetails.email !== email ||
      passengerDetails.firstname !== firstname ||
      passengerDetails.phone !== phone ||
      transferDetails.passengersNumber !== passengersNumber
    ) {
      isUpdated = true;
    }
    if (isUpdated) {
      passengerDetails = { ...passengerDetails, email, firstname, phone };
      transferDetails = { ...transferDetails, passengersNumber };

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
    this.setState({ [name]: value });
  }
  render() {
    let { loading } = this.state;
    return (
      <div className="editable-psg-details editable-psg-details-two">
        <div className="editable-psg-header">
          <h3>Customer Details</h3>
          <div className="editable-buttons">
            <button
              onClick={() => this.onCancel()}
              className="tmb-cancel-btn tmb-btn-primary-outlined fw_500 tmb-btn"
            >
              Cancel
            </button>
            <button
              onClick={loading ? () => {} : () => this.onSave()}
              className="tmb-btn-primary-outlined fw_500 tmb-btn"
            >
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
              classNameImg="email-icon-input"
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
          <button
            onClick={() => this.props.onEdit()}
            className="tmb-btn-primary-outlined fw_500 tmb-btn"
          >
            Edit
          </button>
        </div>
        <div className="jrn-column">
          <ShowPointsOnTheTable
            points={this.props.selectedPickupPoints}
            title="Pick-up Location"
            showWaiting={true}
          />
          <ShowPointsOnTheTable
            points={this.props.selectedDropoffPoints}
            title="Drop off Location"
            showWaiting={false}
          />
        </div>
        <div className="jrn-column jrn-column-details">
          <DetailsGridLi
            title="Transfer Type"
            description={this.props.transferType}
            className={false}
            icon={icons.circle}
          />
          <DetailsGridLi
            title="Notes"
            description={this.props.transferDetails.specialRequests}
            className={false}
            icon={icons.circle}
          />
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

          <DetailsGridLi
            title="Price"
            description={`£${this.props.paymentDetails.price}`}
            className={false}
            icon={icons.circle}
          />
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
      addExtraPointTextPickUp: true,
      addExtraPointTextDropOff: true,
      inputPickUpShowStatus: false,
      inputDropOffShowStatus: false,
      pickUpPointInput: "",
      dropOffPointInput: "",
    };
  }
  onCancel() {
    if (typeof this.props.onCancel === "function") {
      this.props.onCancel();
    }
  }
  onSave() {
    this.props.onSave();
  }
  addExtraInputForJourney(e, pickOrDrop) {
    if (pickOrDrop === 0) {
      this.setState({
        addExtraPointTextPickUp: false,
        inputPickUpShowStatus: true,
      });
    } else {
      this.setState({
        addExtraPointTextDropOff: false,
        inputDropOffShowStatus: true,
      });
    }
  }
  render() {
    // let { loading } = this.state;
    let {
      imageTypesObject,
      selectedPickupPoints,
      selectedDropoffPoints,
      objectDetailStatuses,
      postCodeAddress,
    } = this.props;
    let loading = false;

    return (
      <div className="editable-jrn-details">
        <div className="editable-jrn-header">
          <h3>Journey Details</h3>
          <div className="editable-buttons">
            <button
              onClick={() => this.onCancel()}
              className="tmb-cancel-btn tmb-btn-primary-outlined fw_500 tmb-btn"
            >
              Cancel
            </button>
            <button
              onClick={loading ? () => {} : () => this.onSave()}
              className=" tmb-btn-primary-outlined fw_500 tmb-btn"
            >
              Save
            </button>
          </div>
        </div>
        <div className="editable-jrn-points-container">
          <div className="editable-jrn-points-container-box">
            <div className="editable-jrn-points-container-box-header">
              Pick ups
            </div>

            <SelectedLists
              pickOrDrop={0}
              postCodeAddress={postCodeAddress}
              imageTypesObject={imageTypesObject}
              selectedItems={selectedPickupPoints}
              objectDetailStatuses={objectDetailStatuses}
            />
            {this.state.inputPickUpShowStatus && (
              <div className="add-extra-input-div-status">
                <TextInput
                  value={this.state.pickUpPointInput}
                  classNameImg="email-icon-input"
                  name="pickUpPointInput"
                  type="text"
                  errorMessage={""}
                  // onChange={(e) => this.onchangeHandler(e)}
                  title=""
                  icon={icons.mapLocation}
                  placeholder="City or Airport"
                />
              </div>
            )}
            {this.state.addExtraPointTextPickUp && (
              <div
                onClick={(e) => this.addExtraInputForJourney(e, 0)}
                className="editable-jrn-points-container-box-add-extra-fly"
              >
                <img src={icons.plus} alt="" />
                <p>Add Extra Point</p>
              </div>
            )}
          </div>
          <div className="editable-jrn-points-container-box">
            <div className="editable-jrn-points-container-box-header">
              Dropp Offs
            </div>
            <SelectedLists
              pickOrDrop={1}
              postCodeAddress={postCodeAddress}
              imageTypesObject={imageTypesObject}
              selectedItems={selectedDropoffPoints}
              objectDetailStatuses={objectDetailStatuses}
            />
            {this.state.inputDropOffShowStatus && (
              <div className="add-extra-input-div-status">
                <TextInput
                  value={this.state.dropOffPointInput}
                  classNameImg="email-icon-input"
                  name="dropOffPointInput"
                  type="text"
                  errorMessage={""}
                  // onChange={(e) => this.onchangeHandler(e)}
                  title=""
                  icon={icons.mapLocation}
                  placeholder="City or Airport"
                />
              </div>
            )}
            {this.state.addExtraPointTextDropOff && (
              <div
                onClick={(e) => this.addExtraInputForJourney(e, 1)}
                className="editable-jrn-points-container-box-add-extra-fly"
              >
                <img src={icons.plus} alt="" />
                <p>Add Extra Point</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

//it is inside JourneyDetailsUpdateForm     .Which is gonna show all selected points
class SelectedLists extends React.Component {
  render() {
    let {
      imageTypesObject,
      selectedItems,
      pickOrDrop,
      objectDetailStatuses,
      postCodeAddress,
    } = this.props;

    return (
      <div>
        {selectedItems.map((item, i) => {
          return (
            <div className="editable-jrn-points-container-box-card">
              <div className="editable-jrn-points-container-box-card-header">
                <span>{i + 1}</span>
                <img
                  src={`https://api.london-tech.com${
                    imageTypesObject[item.pcatId]
                  }`}
                  alt={item.address}
                />
                <p>{item.address}</p>
                <div className="editable-jrn-points-container-box-card-trash">
                  x
                </div>
              </div>
              <CheckForFlight
                item={item}
                index={pickOrDrop}
                objectDetailStatuses={objectDetailStatuses}
              />
              <CheckForCruises
                item={item}
                index={pickOrDrop}
                objectDetailStatuses={objectDetailStatuses}
              />
              <CheckForTrain
                item={item}
                index={pickOrDrop}
                objectDetailStatuses={objectDetailStatuses}
              />
              <CheckingForPostcodes
                item={item}
                index={pickOrDrop}
                postCodeAddress={postCodeAddress}
                objectDetailStatuses={objectDetailStatuses}
              />
              <CheckPlaceOfInterest
                item={item}
                index={pickOrDrop}
                postCodeAddress={postCodeAddress}
                objectDetailStatuses={objectDetailStatuses}
              />
              <CheckForCitites
                item={item}
                index={pickOrDrop}
                postCodeAddress={postCodeAddress}
                objectDetailStatuses={objectDetailStatuses}
              />
              <CheckForUniversity
                item={item}
                index={pickOrDrop}
                postCodeAddress={postCodeAddress}
                objectDetailStatuses={objectDetailStatuses}
              />
              <CheckForOther
                item={item}
                index={pickOrDrop}
                postCodeAddress={postCodeAddress}
                objectDetailStatuses={objectDetailStatuses}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
class ReservationDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      journeyEditStatus: false,
      passengerEditStatus: false,
    };
  }

  render() {
    let {
      reservation,
      postCodeAddress,
      resources: { carsTypes, pointTypeCategories },
    } = this.props;
    let carsTypesObject = Object.assign(
      {},
      ...carsTypes.map((obj) => ({ [obj.id]: obj }))
    );
    let imageTypesObject = Object.assign(
      {},
      ...pointTypeCategories.map((obj) => ({ [obj.id]: obj.image }))
    );
    let objectDetailStatuses = Object.assign(
      {},
      ...pointTypeCategories.map((obj) => ({
        [obj.id]: JSON.parse(obj.detailsStatus),
      }))
    );

    let {
      selectedPickupPoints,
      selectedDropoffPoints,
      passengerDetails,
      transferDetails,
      quotation,
      paymentDetails,
      reservationDetails,
    } = reservation;

    return (
      <div className="rsv-section">
        <div className="rsv-section-container">
          {this.state.passengerEditStatus ? (
            <PassengerDetailsUpdateForm
              maxPax={carsTypesObject[quotation.carId].pax}
              transferDetails={reservation.transferDetails}
              passengerDetails={reservation.passengerDetails}
              onSave={(e) => this.setState({ passengerEditStatus: false })}
              onCancel={(e) => this.setState({ passengerEditStatus: false })}
            />
          ) : (
            !this.state.journeyEditStatus && (
              <PassengerDetailsForm
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
              postCodeAddress={postCodeAddress}
              imageTypesObject={imageTypesObject}
              objectDetailStatuses={objectDetailStatuses}
              selectedPickupPoints={selectedPickupPoints}
              selectedDropoffPoints={selectedDropoffPoints}
              onSave={(e) => this.setState({ journeyEditStatus: false })}
              onCancel={(e) => this.setState({ journeyEditStatus: false })}
            />
          ) : (
            <JourneyDetailsForm
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
        <div className="rsv-payment-details">
          {/* payByCardBtn here */}
          <div className={"rsv-payment-details-header"}>
            <div className={"rsv-payment-details-left"}>
              {paymentDetails.paymentType !== 1 ? (
                ""
              ) : (
                <div className={"rsv-payment-details-left-btn-div"}>
                  <button className=" tmb-btn tmb-btn-primary">
                    Pay by card
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
                £{quotation.price}
              </span>
            </div>
          </div>
          <div className="rsv-print-email-div rsv-payment-details-header">
            <button className=" tmb-btn tmb-btn-primary">
              Print Booking Details
            </button>
            <button onClick={print} className="tmb-btn tmb-btn-primary">
              Send Booking Details As Email
            </button>
          </div>
        </div>
      </div>
    );
  }
}

class ManageBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reservation: JSON.parse(localStorage["reservation"]), // {},
      isAuth: false,
      showState: false,
      resources: {},
      postCodeAddress: [],
    };
  }
  componentDidMount() {
    this.getPostCodeAdresses();

    this.getResources();
    window.manageBookingDispatch = {
      onSuccessLogin: (reservation) => {
        localStorage["reservation"] = JSON.stringify(reservation);
        this.setState({ reservation, isAuth: true });
      },
      saveNewPassengerDetails: async (params = {}, callback = () => {}) => {
        let { passengerDetails, transferDetails } = params;
        let { reservation } = this.state;
        reservation.passengerDetails = {
          ...reservation.passengerDetails,
          ...passengerDetails,
        };
        reservation.transferDetails = {
          ...reservation.transferDetails,
          ...transferDetails,
        };
        let url = `${__env.apiDomain}/api/v1/reservation/edit`;
        let bodyRequest = {
          method: "POST",
          body: JSON.stringify({ reservation: [reservation], ...this.props }),
          headers: { "Content-Type": "application/json" },
        };
        let fetchReq = await fetch(url, bodyRequest);
        let fetchRes = await fetchReq.json();
        console.log(fetchRes, typeof callback);
        if (fetchRes.status === 200) callback(fetchRes);
      },
    };
  }
  getResources() {
    const url = `${__env.apiDomain}/app/en`;
    const config = {
      method: "GET",
    };
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
  getPostCodeAdresses() {
    const url = `${__env.apiDomain}/api/v1/postcode-address`;
    let postCodes = ["UB9 4AP"];
    //filtering
    [
      ...this.state.reservation.selectedPickupPoints,
      ...this.state.reservation.selectedDropoffPoints,
    ].filter((item) =>
      item.pcatId === 5 ? postCodes.push(item.postcode) : item
    );
    //configuration
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postcodes: postCodes,
      }),
    };

    fetch(url, config)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ postCodeAddress: data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let { reservation, isAuth, showState, resources, postCodeAddress } =
      this.state;
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
          <ReservationDetails
            reservation={reservation}
            resources={resources}
            postCodeAddress={postCodeAddress}
          />
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
    } else {
      console.log("not render yet");
    }
  }, 100);
})();
