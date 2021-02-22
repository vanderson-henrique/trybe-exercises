USE PiecesProviders;
SELECT * FROM Pieces;
SELECT * FROM Providers;
SELECT * FROM Provides;

-- 1 - Escreva uma query para ordernar o nome das empresas de forma alfabética descendente e que retorne somente o código e o nome da primeira empresa.

SELECT * FROM Providers ORDER BY Name DESC LIMIT 1;

# 2 - Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.

SELECT Pieces.Name, Provides.Price FROM Pieces, Provides
	 WHERE Pieces.Code = Provides.Piece ORDER BY Provides.Price DESC LIMIT 5;

-- 3 - Escreva uma query para exibir o nome das empresas e preço das peças, começando a lista a partir do 3º item, e exibindo o preço das quatro peças mais caras.

SELECT Providers.Name, Provides.Price FROM Providers, Provides
	WHERE Providers.Code = Provides.Provider ORDER BY Provides.Price DESC LIMIT 10 OFFSET 2;

-- 4 - Escreva uma query para exibir a string "A peça mais cara é a: Piece , provida pela empresa Provider e custa Price reais.", essa query deve retornar somene uma única string, sendo que Price se refere ao maior preço.

SELECT 
	CONCAT('A peça mais cara é a: ',
			(SELECT Pieces.Name FROM Pieces, Provides
				WHERE Pieces.Code = Provides.Piece ORDER BY Provides.Price DESC LIMIT 1),
			', provida pela empresa ',
			(SELECT Providers.Name FROM Providers, Provides 
				WHERE Providers.Code = Provides.Provider ORDER BY Provides.Price DESC LIMIT 1),
			' e custa ',
			(SELECT Provides.Price FROM Providers, Provides 
				WHERE Providers.Code = Provides.Provider ORDER BY Provides.Price DESC LIMIT 1),
			' reais.'
    ) AS 'Peça mais cara'
FROM Provides, Providers, Pieces LIMIT 1;





