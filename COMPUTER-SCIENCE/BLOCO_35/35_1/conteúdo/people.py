from area import rectangle
# Outra opção de importação seria:
# import area (a partir dela poderia usar as funções desse módulo)

# numero de pessoas por metro quadrado em média
PEOPLE_AT_CONCERT_PER_SQUARE_METER = 2
FIELD_LENGTH = 240  # em metros
FIELD_WIDTH = 45  # em metros
PEOPLE_AT_CONCERT = (
    rectangle(FIELD_LENGTH, FIELD_WIDTH) // PEOPLE_AT_CONCERT_PER_SQUARE_METER
)

print("Estão presentes no show aproximadamente", PEOPLE_AT_CONCERT, "pessoas")
