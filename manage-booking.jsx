const __env = {
  domain: "https://api.london-tech.com",
  websiteLogUrl: "https://heathrow-gatwick-transfers.com/images/logoJpg.png",
};
const icons = {
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

  dollar:
    "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyODggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNMjA5LjIgMjMzLjRsLTEwOC0zMS42Qzg4LjcgMTk4LjIgODAgMTg2LjUgODAgMTczLjVjMC0xNi4zIDEzLjItMjkuNSAyOS41LTI5LjVoNjYuM2MxMi4yIDAgMjQuMiAzLjcgMzQuMiAxMC41IDYuMSA0LjEgMTQuMyAzLjEgMTkuNS0ybDM0LjgtMzRjNy4xLTYuOSA2LjEtMTguNC0xLjgtMjQuNUMyMzggNzQuOCAyMDcuNCA2NC4xIDE3NiA2NFYxNmMwLTguOC03LjItMTYtMTYtMTZoLTMyYy04LjggMC0xNiA3LjItMTYgMTZ2NDhoLTIuNUM0NS44IDY0LTUuNCAxMTguNy41IDE4My42YzQuMiA0Ni4xIDM5LjQgODMuNiA4My44IDk2LjZsMTAyLjUgMzBjMTIuNSAzLjcgMjEuMiAxNS4zIDIxLjIgMjguMyAwIDE2LjMtMTMuMiAyOS41LTI5LjUgMjkuNWgtNjYuM0MxMDAgMzY4IDg4IDM2NC4zIDc4IDM1Ny41Yy02LjEtNC4xLTE0LjMtMy4xLTE5LjUgMmwtMzQuOCAzNGMtNy4xIDYuOS02LjEgMTguNCAxLjggMjQuNSAyNC41IDE5LjIgNTUuMSAyOS45IDg2LjUgMzB2NDhjMCA4LjggNy4yIDE2IDE2IDE2aDMyYzguOCAwIDE2LTcuMiAxNi0xNnYtNDguMmM0Ni42LS45IDkwLjMtMjguNiAxMDUuNy03Mi43IDIxLjUtNjEuNi0xNC42LTEyNC44LTcyLjUtMTQxLjd6Ii8+PC9zdmc+",
  barcode:
    "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNMCA0NDhWNjRoMTh2Mzg0SDB6bTI2Ljg1Ny0uMjczVjY0SDM2djM4My43MjdoLTkuMTQzem0yNy4xNDMgMFY2NGg4Ljg1N3YzODMuNzI3SDU0em00NC44NTcgMFY2NGg4Ljg1N3YzODMuNzI3aC04Ljg1N3ptMzYgMFY2NGgxNy43MTR2MzgzLjcyN2gtMTcuNzE0em00NC44NTcgMFY2NGg4Ljg1N3YzODMuNzI3aC04Ljg1N3ptMTggMFY2NGg4Ljg1N3YzODMuNzI3aC04Ljg1N3ptMTggMFY2NGg4Ljg1N3YzODMuNzI3aC04Ljg1N3ptMzUuNzE1IDBWNjRoMTh2MzgzLjcyN2gtMTh6bTQ0Ljg1NyAwVjY0aDE4djM4My43MjdoLTE4em0zNS45OTkgMFY2NGgxOC4wMDF2MzgzLjcyN2gtMTguMDAxem0zNi4wMDEgMFY2NGgxOC4wMDF2MzgzLjcyN2gtMTguMDAxem0yNi44NTcgMFY2NGgxOHYzODMuNzI3aC0xOHptNDUuMTQzIDBWNjRoMjYuODU3djM4My43MjdoLTI2Ljg1N3ptMzUuNzE0IDBWNjRoOS4xNDN2MzgzLjcyN0g0NzZ6bTE4IC4yNzNWNjRoMTh2Mzg0aC0xOHoiLz48L3N2Zz4=",
  calendar:
    "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNMCA0NjRjMCAyNi41IDIxLjUgNDggNDggNDhoMzUyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjE5MkgwdjI3MnptMzIwLTE5NmMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEydjQwYzAgNi42LTUuNCAxMi0xMiAxMmgtNDBjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDB6bTAgMTI4YzAtNi42IDUuNC0xMiAxMi0xMmg0MGM2LjYgMCAxMiA1LjQgMTIgMTJ2NDBjMCA2LjYtNS40IDEyLTEyIDEyaC00MGMtNi42IDAtMTItNS40LTEyLTEydi00MHpNMTkyIDI2OGMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEydjQwYzAgNi42LTUuNCAxMi0xMiAxMmgtNDBjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDB6bTAgMTI4YzAtNi42IDUuNC0xMiAxMi0xMmg0MGM2LjYgMCAxMiA1LjQgMTIgMTJ2NDBjMCA2LjYtNS40IDEyLTEyIDEyaC00MGMtNi42IDAtMTItNS40LTEyLTEydi00MHpNNjQgMjY4YzAtNi42IDUuNC0xMiAxMi0xMmg0MGM2LjYgMCAxMiA1LjQgMTIgMTJ2NDBjMCA2LjYtNS40IDEyLTEyIDEySDc2Yy02LjYgMC0xMi01LjQtMTItMTJ2LTQwem0wIDEyOGMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEydjQwYzAgNi42LTUuNCAxMi0xMiAxMkg3NmMtNi42IDAtMTItNS40LTEyLTEydi00MHpNNDAwIDY0aC00OFYxNmMwLTguOC03LjItMTYtMTYtMTZoLTMyYy04LjggMC0xNiA3LjItMTYgMTZ2NDhIMTYwVjE2YzAtOC44LTcuMi0xNi0xNi0xNmgtMzJjLTguOCAwLTE2IDcuMi0xNiAxNnY0OEg0OEMyMS41IDY0IDAgODUuNSAwIDExMnY0OGg0NDh2LTQ4YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4eiIvPjwvc3ZnPg==",
  car: "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNNDk5Ljk5IDE3NmgtNTkuODdsLTE2LjY0LTQxLjZDNDA2LjM4IDkxLjYzIDM2NS41NyA2NCAzMTkuNSA2NGgtMTI3Yy00Ni4wNiAwLTg2Ljg4IDI3LjYzLTEwMy45OSA3MC40TDcxLjg3IDE3NkgxMi4wMUM0LjIgMTc2LTEuNTMgMTgzLjM0LjM3IDE5MC45MWw2IDI0QzcuNyAyMjAuMjUgMTIuNSAyMjQgMTguMDEgMjI0aDIwLjA3QzI0LjY1IDIzNS43MyAxNiAyNTIuNzggMTYgMjcydjQ4YzAgMTYuMTIgNi4xNiAzMC42NyAxNiA0MS45M1Y0MTZjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmgzMmMxNy42NyAwIDMyLTE0LjMzIDMyLTMydi0zMmgyNTZ2MzJjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmgzMmMxNy42NyAwIDMyLTE0LjMzIDMyLTMydi01NC4wN2M5Ljg0LTExLjI1IDE2LTI1LjggMTYtNDEuOTN2LTQ4YzAtMTkuMjItOC42NS0zNi4yNy0yMi4wNy00OEg0OTRjNS41MSAwIDEwLjMxLTMuNzUgMTEuNjQtOS4wOWw2LTI0YzEuODktNy41Ny0zLjg0LTE0LjkxLTExLjY1LTE0Ljkxem0tMzUyLjA2LTE3LjgzYzcuMjktMTguMjIgMjQuOTQtMzAuMTcgNDQuNTctMzAuMTdoMTI3YzE5LjYzIDAgMzcuMjggMTEuOTUgNDQuNTcgMzAuMTdMMzg0IDIwOEgxMjhsMTkuOTMtNDkuODN6TTk2IDMxOS44Yy0xOS4yIDAtMzItMTIuNzYtMzItMzEuOVM3Ni44IDI1NiA5NiAyNTZzNDggMjguNzEgNDggNDcuODUtMjguOCAxNS45NS00OCAxNS45NXptMzIwIDBjLTE5LjIgMC00OCAzLjE5LTQ4LTE1Ljk1UzM5Ni44IDI1NiA0MTYgMjU2czMyIDEyLjc2IDMyIDMxLjktMTIuOCAzMS45LTMyIDMxLjl6Ii8+PC9zdmc+",
};

class ShowPointsOnTheTable extends React.Component {
  render() {
    console.log(this.props.points);

    return (
      <div className="jrn-details">
        <div className="jrn-details-header">
          <img src={icons.mapLocation} alt="" />
          <p>{this.props.title} :</p>
        </div>
        {this.props.points.map((point) => {
          return (
            <div className="jrn-details-bottom-container">
              <div className="jrn-details-bottom-adress">
                <img src={icons.check} alt="" />
                <span className="jrn-details-bottom-name">{point.address}</span>
              </div>
              {point.flightDetails.flightNumber ? (
                <div className="jrn-details-bottom-description">
                  <img src={icons.circle} alt="" />
                  <div className="jrn-text-div">
                    <span>Fligth Number:</span>&nbsp;
                    <span>{point.flightDetails.flightNumber}</span>
                  </div>
                </div>
              ) : (
                ""
              )}
              {point.flightDetails.waitingPickupTime > 0 ? (
                <div className="jrn-details-bottom-description">
                  <img src={icons.circle} alt="" />
                  <div className="jrn-text-div">
                    <span>Waiting Pickup Time:</span>&nbsp;
                    <span>{point.flightDetails.waitingPickupTime > 0}</span>
                  </div>
                </div>
              ) : (
                ""
              )}

              {point.postCodeDetails.postCodeAddress ? (
                <div className="jrn-details-bottom-description">
                  <img src={icons.circle} alt="" />
                  <div className="jrn-text-div">
                    <span>Postcode Address:</span>&nbsp;
                    <span>{point.postCodeDetails.postCodeAddress}</span>
                  </div>
                </div>
              ) : (
                ""
              )}
              {point.cruiseNumber ? (
                <div className="jrn-details-bottom-description">
                  <img src={icons.circle} alt="" />
                  <div className="jrn-text-div">
                    <span>Cruise Name:</span>&nbsp;
                    <span>{point.cruiseNumber}</span>
                  </div>
                </div>
              ) : (
                ""
              )}
              {point.trainNumber ? (
                <div className="jrn-details-bottom-description">
                  <img src={icons.circle} alt="" />
                  <div className="jrn-text-div">
                    <span>Train Number:</span> &nbsp;
                    <span>{point.trainNumber}</span>
                  </div>
                </div>
              ) : (
                ""
              )}
              {point.pcatId === 8 && point["address-description"] ? (
                <div className="jrn-details-bottom-description">
                  <img src={icons.circle} alt="" />
                  <div className="jrn-text-div">
                    <span>Cities:</span>&nbsp;
                    <span>{point["address-description"]}</span>
                  </div>
                </div>
              ) : (
                ""
              )}
              {/*  */}
              {point.pcatId === 9 && point["address-description"] ? (
                <div className="jrn-details-bottom-description">
                  <img src={icons.circle} alt="" />
                  <div className="jrn-text-div">
                    <span>Universities And Colleges:</span>{" "}
                    <span>{point["address-description"]}</span>
                  </div>
                </div>
              ) : (
                ""
              )}
              {point.pcatId === 10 && point["address-description"] ? (
                <div className="jrn-details-bottom-description">
                  <img src={icons.circle} alt="" />
                  <div className="jrn-text-div">
                    <span>Description:</span>{" "}
                    <span>{point["address-description"]}</span>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
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
      email: "elgun.ezmemmedov@mail.ru",
      reservationId: "671836",
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

        fetch(`${__env.domain}/api/v1/reservation/find-details`, requestBody)
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

class ReservationDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstname: "",
      phone: "",
      passengersNumber: "",
      orijinalReservationsData: null,
      passengerEditStatus: false, //when we click edit btn
    };
  }

  componentDidMount() {
    let { reservations } = this.props;
    let email = reservations.passengerDetails.email;
    let phone = reservations.passengerDetails.phone;
    let firstname = reservations.passengerDetails.firstname;
    let passengersNumber = reservations.transferDetails.passengersNumber;
    this.setState({
      ...this.state,
      email,
      phone,
      firstname,
      passengersNumber,
      orijinalReservationsData: reservations,
    });
  }
  render() {
    let {
      email,
      firstname,
      phone,
      passengersNumber,
      orijinalReservationsData,
    } = this.state;
    console.log(orijinalReservationsData);

    return (
      <div className="rsv-section">
        <div className="rsv-section-container">
          <div className="psg-passenger-details">
            <h1 class="psg-referenceId">Referance Id 671836</h1>
            <div className="psg-title">
              <h3>Customer Details</h3>
              <button className="tmb-btn-primary-outlined fw_500 tmb-btn">
                Edit
              </button>
            </div>
            <div className="psg-column psg-first-column">
              <li>
                <div className="psg-li-left">
                  <img src={icons.user} className="psg-user-img-icon" alt="" />
                  <p>Full Name</p>
                </div>
                <div className="psg-li-right">:{firstname}</div>
              </li>
              <li>
                <div className="psg-li-left">
                  <img src={icons.at} alt="" />
                  <p>Email</p>
                </div>
                <div className="psg-li-right">:{email}</div>
              </li>
            </div>
            <div className="psg-column psg-second-column">
              <li>
                <div className="psg-li-left">
                  <img
                    src={icons.users}
                    className="psg-users-img-icon"
                    alt=""
                  />
                  <p>Number of Passengers</p>
                </div>
                <div className="psg-li-right">:{passengersNumber}</div>
              </li>
              <li>
                <div className="psg-li-left">
                  <img src={icons.phone} alt="" />
                  <p>Phone Number</p>
                </div>
                <div className="psg-li-right">:{phone}</div>
              </li>
            </div>
          </div>
          {/* journey details */}
          <div className="jrn-journey-details">
            <div className="jrn-title">
              <h3>Transfer Details</h3>
              <button className="tmb-btn-primary-outlined fw_500 tmb-btn">
                Edit
              </button>
            </div>
            <div className="jrn-column">
              <li>
                {/* {orijinalReservationsData && (
                  <ShowPointsOnTheTable
                    points={orijinalReservationsData.selectedPickupPoints}
                    title="Pick-up Location"
                    showWaiting={true}
                  />
                )} */}
                <div className="jrn-details">
                  <div className="jrn-details-header">
                    <img src={icons.mapLocation} alt="" />
                    <p>Pick-up Location :</p>
                  </div>
                  <div className="jrn-details-bottom-container">
                    <div className="jrn-details-bottom-adress">
                      <img src={icons.check} alt="" />
                      <span className="jrn-details-bottom-name">
                        London Heathrow airport
                      </span>
                    </div>
                    <div className="jrn-details-bottom-description">
                      <img src={icons.circle} alt="" />
                      <div className="jrn-text-div">
                        <span>Fligth Number:</span>&nbsp;
                        <span>j2 8002132131</span>
                      </div>
                    </div>
                  </div>
                </div>
                ;
              </li>
              <li>
                {/* {orijinalReservationsData && (
                  <ShowPointsOnTheTable
                    points={orijinalReservationsData.selectedDropoffPoints}
                    title="Drop off Location"
                    showWaiting={false}
                  />
                )} */}
                <div className="jrn-details">
                  <div className="jrn-details-header">
                    <img src={icons.mapLocation} alt="" />
                    <p>Pick-up Location :</p>
                  </div>
                  <div className="jrn-details-bottom-container">
                    <div className="jrn-details-bottom-adress">
                      <img src={icons.check} alt="" />
                      <span className="jrn-details-bottom-name">
                        London Heathrow airport
                      </span>
                    </div>
                    <div className="jrn-details-bottom-description">
                      <img src={icons.circle} alt="" />
                      <div className="jrn-text-div">
                        <span>Fligth Number:</span>&nbsp;
                        <span>j2 8002132131</span>
                      </div>
                    </div>
                  </div>
                </div>
                ;
              </li>
            </div>
            <div className="jrn-column">
              <li>
                <div className="jrn-details-grid">
                  <div className="jrn-details-grid-header-li">
                    <img src={icons.circle} alt="" />
                    <p>Transfer Type</p>
                  </div>
                  <div className="jrn-details-grid-bottom">
                    <span>:Economy</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="jrn-details-grid">
                  <div className="jrn-details-grid-header-li">
                    <img src={icons.notes} alt="" />
                    <p>Notes</p>
                  </div>
                  <div className="jrn-details-grid-bottom">
                    <span>:Bla bla bla</span>
                  </div>
                </div>
              </li>
            </div>
            <div className="jrn-column">
              <li>
                <div className="jrn-details-grid">
                  <div className="jrn-details-grid-header-li">
                    <img src={icons.circle} alt="" />
                    <p>Payment Method</p>
                  </div>
                  <div className="jrn-details-grid-bottom">
                    <span>
                      {2 === 1 && ":Pay With Cash To Driver"}
                      {88 === 2 && ":Pay With Credit Card"}
                      {1 === 6 && ":Pay With American Express"}
                      {99 === 7 && ":Pay With Stripe"}
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="jrn-details-grid">
                  <div className="jrn-details-grid-header-li">
                    <img src={icons.barcode} alt="" />
                    <p>Price</p>
                  </div>
                  <div className="jrn-details-grid-bottom">
                    <span>:£30</span>
                  </div>
                </div>
              </li>
            </div>
            <div className="jrn-column">
              <li>
                <div className="jrn-details-grid">
                  <div className="jrn-details-grid-header-li">
                    <img src={icons.calendar} alt="" />
                    <p>Arrival Date &Time</p>
                  </div>
                  <div className="jrn-details-grid-bottom">
                    <span>12.25.36</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="jrn-details-grid">
                  <div className="jrn-details-grid-header-li">
                    <img src={icons.car} alt="" />
                    <p>Vehicle Type</p>
                  </div>
                  <div className="jrn-details-grid-bottom">
                    <span>:£30</span>
                  </div>
                </div>
              </li>
            </div>
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
      reservations: [],
      isAuth: false,
      showState: false,
    };
  }
  componentDidMount() {
    window.manageBookingDispatch = {
      onSuccessLogin: (reservations) =>
        this.setState({ ...this.state, reservations, isAuth: true }),
    };
  }
  render() {
    let { reservations, isAuth, showState } = this.state;

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
          <ReservationDetails reservations={reservations} />
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
      //
      ReactDOM.render(
        React.createElement(ManageBooking, {}),
        document.getElementById("manageBookingDemo")
      );
      console.log("render is done");
      clearInterval(insrter);
    } else {
      console.log("not render yet");
    }
  }, 100);
})();
