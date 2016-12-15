<?php

#il faut faire un appel à ça comme dans test.html situé dans le dossier précédent
	$app->get('/obtenirTypeEnseignement', function () use($app,$entityManager){
		$dql = "SELECT te FROM typesEnseignement te";
		$query = $entityManager->createQuery($dql);
	//$query->setMaxResults(30);
		try
		{
			$types = $query->getArrayResult();
		}
		catch(Exception $e)
		{
			die('Erreur : ' . $e->getMessage());
		}
		return $app->json($types);
	});
	
	#il faut faire un appel à ça comme dans test.html situé dans le dossier précédent
	$app->get('/listeEnseignants', function () use($app,$entityManager){
		$dql = 'SELECT p.id, p.nom, p.prenom, IDENTITY(pe.idstatut) as idstatut FROM personnel p, personnelEnseignant pe WHERE EXISTS (SELECT IDENTITY (ppe.id) FROM personnelEnseignant ppe WHERE ppe.id = p.id) AND pe.id = p.id';
		$query = $entityManager->createQuery($dql);
		try
		{
			$professeurs = $query->getArrayResult();
		}
		catch(Exception $e)
		{
			die('Erreur : ' . $e->getMessage());
		}
		return $app->json($professeurs);
	});