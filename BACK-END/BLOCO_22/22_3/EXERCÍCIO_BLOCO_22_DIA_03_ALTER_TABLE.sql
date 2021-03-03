-- Desafios sobre ALTER TABLE

/* 1. Escreva uma query SQL para alterar o nome da coluna street_address para address , mantendo o mesmo tipo e 
tamanho de dados.*/

ALTER TABLE hr.locations CHANGE `STREET_ADDRESS` `ADDRESS` VARCHAR(40) DEFAULT NULL;

/* 2. Escreva uma query SQL para alterar o nome da coluna region_name para region , mantendo o mesmo tipo e 
tamanho de dados.*/

ALTER TABLE hr.regions CHANGE `REGION_NAME` `REGION` VARCHAR(40) DEFAULT NULL;

/* 3. Escreva uma query SQL para alterar o nome da coluna country_name para country , mantendo o mesmo tipo e 
tamanho de dados.*/

ALTER TABLE hr.countries CHANGE `COUNTRY_NAME` `COUNTRY` VARCHAR(40) DEFAULT NULL;
