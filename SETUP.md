# 🚀 Guide de Configuration Rapide

Ce guide vous aidera à configurer l'application en 10 minutes.

## Étape 1 : Installation des dépendances

```bash
npm install
```

## Étape 2 : Configuration de Supabase

### 2.1 Créer un projet Supabase

1. Allez sur [supabase.com](https://supabase.com)
2. Créez un nouveau projet
3. Notez l'URL et les clés API

### 2.2 Exécuter la migration SQL

1. Dans le dashboard Supabase, allez dans **SQL Editor**
2. Ouvrez le fichier `supabase/migrations/001_initial_schema.sql`
3. Copiez-collez le contenu dans l'éditeur SQL
4. Cliquez sur **Run**

### 2.3 Créer le bucket de stockage

1. Allez dans **Storage**
2. Créez un nouveau bucket nommé `cvs`
3. Rendez-le **public**

## Étape 3 : Configuration OpenAI

1. Allez sur [platform.openai.com](https://platform.openai.com)
2. Créez un compte et ajoutez des crédits (minimum 5$)
3. Créez une clé API dans **API Keys**
4. Copiez la clé

## Étape 4 : Configuration Resend

1. Allez sur [resend.com](https://resend.com)
2. Créez un compte gratuit
3. Ajoutez votre domaine (ou utilisez `onboarding@resend.dev` pour les tests)
4. Créez une clé API dans **API Keys**

## Étape 5 : Variables d'environnement

Créez un fichier `.env.local` à la racine :

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...

# OpenAI
OPENAI_API_KEY=sk-proj-...

# Resend
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=onboarding@resend.dev

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
CRON_SECRET=generez_un_secret_aleatoire_ici
```

### Comment générer CRON_SECRET :

```bash
# Sur Mac/Linux
openssl rand -base64 32

# Ou utilisez n'importe quelle chaîne aléatoire longue
```

## Étape 6 : Lancer l'application

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

## Étape 7 : Test

1. **Créez un compte** sur `/signup`
2. **Téléchargez un CV** (vous pouvez utiliser un CV test en PDF)
3. **Attendez quelques secondes** pour le traitement
4. **Vérifiez votre email** pour le CV amélioré
5. **Consultez les offres** sur `/jobs`

## 🐛 Résolution de problèmes

### Erreur : "Environment variables validation failed"
➡️ Vérifiez que toutes les variables sont dans `.env.local` et redémarrez le serveur

### Erreur : "Failed to upload to Supabase"
➡️ Vérifiez que le bucket `cvs` existe et est public

### Erreur : OpenAI API
➡️ Vérifiez votre clé API et que vous avez des crédits

### Emails non reçus
➡️ Vérifiez les logs dans le dashboard Resend

## 📝 Tester les Cron Jobs localement

### Fetch Jobs :
```bash
curl -X GET http://localhost:3000/api/cron/fetch-jobs \
  -H "Authorization: Bearer VOTRE_CRON_SECRET"
```

### Send Daily Emails :
```bash
curl -X GET http://localhost:3000/api/cron/send-daily-emails \
  -H "Authorization: Bearer VOTRE_CRON_SECRET"
```

## 🚀 Déploiement sur Vercel

1. Pushez votre code sur GitHub
2. Importez dans Vercel
3. Ajoutez toutes les variables d'environnement
4. Déployez !

Les cron jobs seront automatiquement configurés via `vercel.json`.

## 💰 Coûts estimés

- **Supabase** : Gratuit jusqu'à 500MB de stockage
- **Resend** : Gratuit jusqu'à 3000 emails/mois
- **OpenAI** : ~$0.06 par CV analysé
- **Vercel** : Gratuit pour les projets personnels

## ✅ Checklist

- [ ] Node.js 18+ installé
- [ ] Dépendances npm installées
- [ ] Projet Supabase créé
- [ ] Migration SQL exécutée
- [ ] Bucket `cvs` créé
- [ ] Clé OpenAI créée et crédits ajoutés
- [ ] Compte Resend créé
- [ ] Fichier `.env.local` configuré
- [ ] Application lancée avec `npm run dev`
- [ ] Test avec upload de CV
- [ ] Email de CV amélioré reçu

---

**Besoin d'aide ?** Consultez le README.md pour plus de détails !

