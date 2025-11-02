# CV Enhancer - Application d'Amélioration de CV avec IA

Une application web moderne qui permet aux utilisateurs de télécharger leur CV, de l'analyser avec l'IA, de recevoir une version améliorée par email, et de découvrir des offres d'emploi quotidiennes personnalisées.

## 🚀 Fonctionnalités

### ✨ Amélioration de CV
- **Upload facile** : Glissez-déposez ou sélectionnez votre CV (PDF, DOCX, TXT)
- **Analyse IA** : Analyse approfondie de votre CV avec OpenAI GPT-4
- **Score de qualité** : Évaluation de votre CV sur 100
- **Suggestions détaillées** : Recommandations pour améliorer votre CV
- **Version améliorée** : Génération d'un CV optimisé et ATS-friendly
- **Envoi par email** : Réception automatique de votre CV amélioré

### 💼 Offres d'Emploi
- **Détection automatique** : Scraping quotidien des nouvelles offres
- **Emails quotidiens** : Notifications des offres correspondant à votre profil
- **Recherche avancée** : Filtrage par mots-clés, compétences, localisation
- **Extraction de compétences** : Identification automatique des compétences requises

### 🔐 Authentification & Sécurité
- Authentification sécurisée avec Supabase Auth
- Row Level Security (RLS) sur toutes les tables
- Gestion des sessions
- Validation des données avec Zod

## 🛠️ Technologies

- **Framework** : Next.js 14 (App Router)
- **Language** : TypeScript (strict mode)
- **Styling** : Tailwind CSS
- **Base de données** : Supabase (PostgreSQL)
- **Authentification** : Supabase Auth
- **IA** : OpenAI GPT-4 & GPT-4-mini
- **Emails** : Resend
- **Parsing** : pdf-parse, mammoth
- **Déploiement** : Vercel

## 📋 Prérequis

- Node.js 18+
- Compte Supabase
- Clé API OpenAI
- Clé API Resend

## ⚙️ Installation

1. **Cloner le projet**
```bash
git clone <votre-repo>
cd "CV to email"
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer les variables d'environnement**

Créez un fichier `.env.local` à la racine du projet :

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle_anon
SUPABASE_SERVICE_ROLE_KEY=votre_cle_service_role

# OpenAI
OPENAI_API_KEY=votre_cle_openai

# Resend (Email)
RESEND_API_KEY=votre_cle_resend
RESEND_FROM_EMAIL=votre@email.com

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Cron Secret
CRON_SECRET=un_secret_aleatoire_securise
```

4. **Configurer Supabase**

Créez un projet Supabase et exécutez la migration SQL :

```bash
# Dans le dashboard Supabase, allez dans SQL Editor et exécutez :
# supabase/migrations/001_initial_schema.sql
```

Créez un bucket de stockage nommé `cvs` dans Supabase Storage (public).

5. **Lancer le serveur de développement**
```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du projet

```
src/
├── app/                      # Routes Next.js (App Router)
│   ├── api/                  # API endpoints
│   │   ├── auth/            # Authentification
│   │   ├── cv/              # Gestion des CVs
│   │   ├── jobs/            # Offres d'emploi
│   │   └── cron/            # Tâches planifiées
│   ├── dashboard/           # Dashboard utilisateur
│   ├── jobs/                # Page des offres
│   ├── login/               # Connexion
│   ├── signup/              # Inscription
│   └── layout.tsx           # Layout principal
├── components/              # Composants React
│   ├── CVUpload.tsx         # Upload de CV
│   ├── JobCard.tsx          # Carte d'offre d'emploi
│   └── Navbar.tsx           # Navigation
├── lib/                     # Utilitaires
│   ├── env.ts               # Variables d'environnement
│   ├── supabase/            # Clients Supabase
│   └── types/               # Types TypeScript
├── server/                  # Logique serveur
│   └── services/            # Services métier
│       ├── ai.service.ts           # Service IA
│       ├── email.service.ts        # Service email
│       ├── cv-parser.service.ts    # Parser de CV
│       └── job-scraper.service.ts  # Scraper d'emplois
└── styles/                  # Styles globaux
```

## 🔄 Fonctionnement

### 1. Upload et Traitement de CV

```
Utilisateur → Upload CV → Stockage Supabase Storage
                ↓
         Extraction de texte (PDF/DOCX)
                ↓
         Analyse IA (GPT-4-mini)
                ↓
         Amélioration IA (GPT-4)
                ↓
         Stockage en base de données
                ↓
         Envoi email avec CV amélioré
```

### 2. Offres d'Emploi

```
Cron Job (toutes les 6h)
         ↓
   Scraping d'offres
         ↓
   Extraction compétences (IA)
         ↓
   Stockage en base de données
         ↓
Cron Job quotidien (9h)
         ↓
   Sélection offres pertinentes
         ↓
   Envoi emails personnalisés
```

## 🚀 Déploiement sur Vercel

1. **Pushez votre code sur GitHub**

2. **Importez dans Vercel**
   - Connectez votre repo GitHub
   - Vercel détectera automatiquement Next.js

3. **Configurez les variables d'environnement**
   - Ajoutez toutes les variables du `.env.local`

4. **Configurez les Cron Jobs**
   - Les cron jobs sont automatiquement configurés via `vercel.json`
   - Ajoutez le `CRON_SECRET` dans les headers des requêtes

5. **Déployez** 🎉

## 📧 Configuration des Emails

### Resend

1. Créez un compte sur [resend.com](https://resend.com)
2. Vérifiez votre domaine (ou utilisez le domaine de test)
3. Créez une clé API
4. Ajoutez-la dans `.env.local`

## 🤖 Configuration de l'IA

### OpenAI

1. Créez un compte sur [platform.openai.com](https://platform.openai.com)
2. Créez une clé API
3. Ajoutez des crédits à votre compte
4. Utilisez GPT-4 pour de meilleurs résultats

**Coûts estimés par CV :**
- Analyse (GPT-4-mini) : ~$0.01
- Amélioration (GPT-4) : ~$0.05
- **Total : ~$0.06 par CV**

## 🔐 Sécurité

- ✅ Row Level Security (RLS) activé
- ✅ Validation des données avec Zod
- ✅ Authentification sécurisée
- ✅ Secrets en variables d'environnement
- ✅ Validation des fichiers uploadés
- ✅ Rate limiting des endpoints cron

## 📊 Base de données

### Tables principales

- **profiles** : Profils utilisateurs
- **cvs** : CVs uploadés et traités
- **job_offers** : Offres d'emploi
- **email_logs** : Historique des emails envoyés

## 🎨 Personnalisation

### Changer les couleurs

Modifiez `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    // Vos couleurs
  }
}
```

### Modifier les prompts IA

Éditez `src/server/services/ai.service.ts`

## 🐛 Dépannage

### Problème : "Environment variables validation failed"
- Vérifiez que toutes les variables sont dans `.env.local`
- Redémarrez le serveur de dev

### Problème : "Failed to parse PDF"
- Vérifiez que le fichier n'est pas corrompu
- Taille max : 10MB

### Problème : Emails non reçus
- Vérifiez votre configuration Resend
- Vérifiez les logs dans le dashboard Resend

## 📝 TODO / Améliorations futures

- [ ] Intégration avec LinkedIn API
- [ ] Support multi-langues (EN, AR)
- [ ] Générateur de lettres de motivation
- [ ] Matching CV/Offre avec score
- [ ] Analytics et statistiques
- [ ] Tests automatisés
- [ ] Export PDF du CV amélioré

## 📄 Licence

MIT

## 👤 Auteur

Créé avec ❤️ pour aider les chercheurs d'emploi

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

---

**Note** : Cette application utilise des services tiers (OpenAI, Resend, Supabase). Assurez-vous de respecter leurs conditions d'utilisation et de gérer vos coûts.


# cvtoemailo
