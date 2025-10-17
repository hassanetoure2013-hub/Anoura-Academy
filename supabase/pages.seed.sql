-- Contenu HTML pour la table `pages`
-- Assurez-vous que la table possède au minimum les colonnes :
--   id (serial ou uuid), slug (text, unique), contenu_html (text)

insert into pages (slug, contenu_html)
values
	(
		'accueil',
		'
		<section class="mgx-html-section">
			<h1>MGX</h1>
			<p>Bienvenue sur la page d''accueil MGX. Retrouvez nos dernières actualités et initiatives.</p>
			<div class="mgx-html-grid">
				<article>
					<h2>Programme Mentorat</h2>
					<p>Un parcours sur mesure pour accélérer la progression de vos équipes.</p>
				</article>
				<article>
					<h2>Stratégie digitale</h2>
					<p>Nous concevons des expériences engageantes qui transforment vos utilisateurs en ambassadeurs.</p>
				</article>
			</div>
		</section>
		'
	),
	(
		'services',
		'
		<section class="mgx-html-section">
			<h1>Nos services</h1>
			<p>MGX accompagne la transformation numérique à 360°.</p>
			<ul>
				<li>Audit stratégique &amp; plans d''action opérationnels</li>
				<li>Design d''expériences utilisateurs et branding</li>
				<li>Déploiement et pilotage produit</li>
			</ul>
		</section>
		'
	),
	(
		'mentoring',
		'
		<section class="mgx-html-section">
			<h1>Mentorat MGX</h1>
			<p>Coaching personnalisé pour dirigeants, managers et talents émergents.</p>
			<p>Chaque session est conçue pour débloquer des situations complexes et poser des actions concrètes.</p>
			<blockquote>oser, expérimenter, se transformer.</blockquote>
		</section>
		'
	),
	(
		'contact',
		'
		<section class="mgx-html-section">
			<h1>Contact</h1>
			<p>Ecrivez-nous à <a href="mailto:contact@mgx.co">contact@mgx.co</a> ou prenez rendez-vous pour une session découverte.</p>
			<p>Adresse : 123 avenue de l''Innovation, Paris.</p>
		</section>
		'
	)
on conflict (slug) do update
set contenu_html = excluded.contenu_html;
