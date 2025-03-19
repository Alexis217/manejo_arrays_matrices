from icecream import ic

personas = []
cantidad = int(input("Cantidad de personas a registrar: "))

# Ingresa datos hasta que el usuario presione enter
for i in range(cantidad):
    nombre = input(f"Nombre persona {i + 1}: ")
    edad = int(input(f"Edad de {nombre}: "))
    nota = float(input(f"Nota de {nombre}: "))
    personas.append([nombre, edad, nota])
    ic(nombre, edad, nota)  # Muestra cada registro ingresado

ic("Lista original:", personas)  # Muestra la lista completa con formato

ordenado = sorted(personas, key=lambda x: x[2], reverse=True)
ic("Lista ordenada por nota:", ordenado)  # Muestra lista ordenada con formato